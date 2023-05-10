# billingAccounts

### Available Operations

* [billingbudgetsBillingAccountsBudgetsCreate](#billingbudgetsbillingaccountsbudgetscreate) - Creates a new budget. See [Quotas and limits](https://cloud.google.com/billing/quotas) for more information on the limits of the number of budgets you can create.
* [billingbudgetsBillingAccountsBudgetsDelete](#billingbudgetsbillingaccountsbudgetsdelete) - Deletes a budget. Returns successfully if already deleted.
* [billingbudgetsBillingAccountsBudgetsGet](#billingbudgetsbillingaccountsbudgetsget) - Returns a budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
* [billingbudgetsBillingAccountsBudgetsList](#billingbudgetsbillingaccountsbudgetslist) - Returns a list of budgets for a billing account. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
* [billingbudgetsBillingAccountsBudgetsPatch](#billingbudgetsbillingaccountsbudgetspatch) - Updates a budget and returns the updated budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. Budget fields that are not exposed in this API will not be changed by this method.

## billingbudgetsBillingAccountsBudgetsCreate

Creates a new budget. See [Quotas and limits](https://cloud.google.com/billing/quotas) for more information on the limits of the number of budgets you can create.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BillingbudgetsBillingAccountsBudgetsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1beta1BudgetInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1beta1AllUpdatesRule;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1beta1BudgetAmount;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeMoney;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1beta1Filter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1beta1FilterCalendarPeriodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1beta1CustomPeriod;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1beta1ThresholdRule;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BillingbudgetsBillingAccountsBudgetsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BillingbudgetsBillingAccountsBudgetsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BillingbudgetsBillingAccountsBudgetsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput = new GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput();
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget = new GoogleCloudBillingBudgetsV1beta1BudgetInput();
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->allUpdatesRule = new GoogleCloudBillingBudgetsV1beta1AllUpdatesRule();
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->allUpdatesRule->disableDefaultIamRecipients = false;
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->allUpdatesRule->monitoringNotificationChannels = [
        'excepturi',
    ];
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->allUpdatesRule->pubsubTopic = 'aspernatur';
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->allUpdatesRule->schemaVersion = 'perferendis';
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->amount = new GoogleCloudBillingBudgetsV1beta1BudgetAmount();
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->amount->lastPeriodAmount = [
        'natus' => 'sed',
        'iste' => 'dolor',
    ];
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->amount->specifiedAmount = new GoogleTypeMoney();
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->amount->specifiedAmount->currencyCode = 'natus';
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->amount->specifiedAmount->nanos = 386489;
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->amount->specifiedAmount->units = 'hic';
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter = new GoogleCloudBillingBudgetsV1beta1Filter();
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter->calendarPeriod = GoogleCloudBillingBudgetsV1beta1FilterCalendarPeriodEnum::YEAR;
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter->creditTypes = [
        'in',
        'corporis',
        'iste',
    ];
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter->creditTypesTreatment = GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnum::INCLUDE_ALL_CREDITS;
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter->customPeriod = new GoogleCloudBillingBudgetsV1beta1CustomPeriod();
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter->customPeriod->endDate = new GoogleTypeDate();
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter->customPeriod->endDate->day = 902349;
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter->customPeriod->endDate->month = 697631;
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter->customPeriod->endDate->year = 99280;
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter->customPeriod->startDate = new GoogleTypeDate();
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter->customPeriod->startDate->day = 60225;
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter->customPeriod->startDate->month = 969810;
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter->customPeriod->startDate->year = 666767;
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter->labels = [
        'laborum' => [
            'dolorem',
        ],
        'corporis' => [
            'nobis',
        ],
        'enim' => [
            'nemo',
            'minima',
            'excepturi',
        ],
    ];
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter->projects = [
        'iure',
    ];
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter->services = [
        'doloribus',
        'sapiente',
        'architecto',
    ];
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter->subaccounts = [
        'dolorem',
        'culpa',
        'consequuntur',
    ];
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->displayName = 'repellat';
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->etag = 'mollitia';
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->thresholdRules = [
        new GoogleCloudBillingBudgetsV1beta1ThresholdRule(),
        new GoogleCloudBillingBudgetsV1beta1ThresholdRule(),
        new GoogleCloudBillingBudgetsV1beta1ThresholdRule(),
    ];
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quam';
    $request->fields = 'molestiae';
    $request->key = 'velit';
    $request->oauthToken = 'error';
    $request->parent = 'quia';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->uploadType = 'vitae';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new BillingbudgetsBillingAccountsBudgetsCreateSecurity();
    $requestSecurity->option1 = new BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billingAccounts->billingbudgetsBillingAccountsBudgetsCreate($request, $requestSecurity);

    if ($response->googleCloudBillingBudgetsV1beta1Budget !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## billingbudgetsBillingAccountsBudgetsDelete

Deletes a budget. Returns successfully if already deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BillingbudgetsBillingAccountsBudgetsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BillingbudgetsBillingAccountsBudgetsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BillingbudgetsBillingAccountsBudgetsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BillingbudgetsBillingAccountsBudgetsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BillingbudgetsBillingAccountsBudgetsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'enim';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quo';
    $request->fields = 'sequi';
    $request->key = 'tenetur';
    $request->name = 'Mr. Alberta Schuster';
    $request->oauthToken = 'temporibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new BillingbudgetsBillingAccountsBudgetsDeleteSecurity();
    $requestSecurity->option1 = new BillingbudgetsBillingAccountsBudgetsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billingAccounts->billingbudgetsBillingAccountsBudgetsDelete($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## billingbudgetsBillingAccountsBudgetsGet

Returns a budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BillingbudgetsBillingAccountsBudgetsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BillingbudgetsBillingAccountsBudgetsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BillingbudgetsBillingAccountsBudgetsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BillingbudgetsBillingAccountsBudgetsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BillingbudgetsBillingAccountsBudgetsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'vero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'praesentium';
    $request->fields = 'voluptatibus';
    $request->key = 'ipsa';
    $request->name = 'Mr. Jared Ritchie';
    $request->oauthToken = 'ut';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new BillingbudgetsBillingAccountsBudgetsGetSecurity();
    $requestSecurity->option1 = new BillingbudgetsBillingAccountsBudgetsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billingAccounts->billingbudgetsBillingAccountsBudgetsGet($request, $requestSecurity);

    if ($response->googleCloudBillingBudgetsV1beta1Budget !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## billingbudgetsBillingAccountsBudgetsList

Returns a list of budgets for a billing account. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BillingbudgetsBillingAccountsBudgetsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BillingbudgetsBillingAccountsBudgetsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BillingbudgetsBillingAccountsBudgetsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BillingbudgetsBillingAccountsBudgetsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BillingbudgetsBillingAccountsBudgetsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'harum';
    $request->fields = 'enim';
    $request->key = 'accusamus';
    $request->oauthToken = 'commodi';
    $request->pageSize = 918236;
    $request->pageToken = 'quae';
    $request->parent = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'molestias';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new BillingbudgetsBillingAccountsBudgetsListSecurity();
    $requestSecurity->option1 = new BillingbudgetsBillingAccountsBudgetsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billingAccounts->billingbudgetsBillingAccountsBudgetsList($request, $requestSecurity);

    if ($response->googleCloudBillingBudgetsV1beta1ListBudgetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## billingbudgetsBillingAccountsBudgetsPatch

Updates a budget and returns the updated budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. Budget fields that are not exposed in this API will not be changed by this method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BillingbudgetsBillingAccountsBudgetsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1beta1BudgetInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1beta1AllUpdatesRule;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1beta1BudgetAmount;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeMoney;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1beta1Filter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1beta1FilterCalendarPeriodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1beta1CustomPeriod;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1beta1ThresholdRule;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BillingbudgetsBillingAccountsBudgetsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BillingbudgetsBillingAccountsBudgetsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BillingbudgetsBillingAccountsBudgetsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BillingbudgetsBillingAccountsBudgetsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput = new GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput();
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->budget = new GoogleCloudBillingBudgetsV1beta1BudgetInput();
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->budget->allUpdatesRule = new GoogleCloudBillingBudgetsV1beta1AllUpdatesRule();
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->budget->allUpdatesRule->disableDefaultIamRecipients = false;
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->budget->allUpdatesRule->monitoringNotificationChannels = [
        'praesentium',
        'rem',
    ];
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->budget->allUpdatesRule->pubsubTopic = 'voluptates';
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->budget->allUpdatesRule->schemaVersion = 'quasi';
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->budget->amount = new GoogleCloudBillingBudgetsV1beta1BudgetAmount();
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->budget->amount->lastPeriodAmount = [
        'sint' => 'veritatis',
        'itaque' => 'incidunt',
        'enim' => 'consequatur',
        'est' => 'quibusdam',
    ];
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->budget->amount->specifiedAmount = new GoogleTypeMoney();
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->budget->amount->specifiedAmount->currencyCode = 'explicabo';
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->budget->amount->specifiedAmount->nanos = 647174;
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->budget->amount->specifiedAmount->units = 'distinctio';
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->budget->budgetFilter = new GoogleCloudBillingBudgetsV1beta1Filter();
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->budget->budgetFilter->calendarPeriod = GoogleCloudBillingBudgetsV1beta1FilterCalendarPeriodEnum::YEAR;
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->budget->budgetFilter->creditTypes = [
        'modi',
        'qui',
    ];
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->budget->budgetFilter->creditTypesTreatment = GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnum::INCLUDE_ALL_CREDITS;
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->budget->budgetFilter->customPeriod = new GoogleCloudBillingBudgetsV1beta1CustomPeriod();
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->budget->budgetFilter->customPeriod->endDate = new GoogleTypeDate();
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->budget->budgetFilter->customPeriod->endDate->day = 586513;
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->budget->budgetFilter->customPeriod->endDate->month = 552822;
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->budget->budgetFilter->customPeriod->endDate->year = 20107;
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->budget->budgetFilter->customPeriod->startDate = new GoogleTypeDate();
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->budget->budgetFilter->customPeriod->startDate->day = 164940;
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->budget->budgetFilter->customPeriod->startDate->month = 828940;
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->budget->budgetFilter->customPeriod->startDate->year = 369808;
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->budget->budgetFilter->labels = [
        'fugit' => [
            'excepturi',
            'tempora',
            'facilis',
        ],
    ];
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->budget->budgetFilter->projects = [
        'labore',
        'delectus',
        'eum',
    ];
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->budget->budgetFilter->services = [
        'eligendi',
    ];
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->budget->budgetFilter->subaccounts = [
        'aliquid',
        'provident',
        'necessitatibus',
    ];
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->budget->displayName = 'sint';
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->budget->etag = 'officia';
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->budget->thresholdRules = [
        new GoogleCloudBillingBudgetsV1beta1ThresholdRule(),
    ];
    $request->googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput->updateMask = 'debitis';
    $request->accessToken = 'a';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'in';
    $request->key = 'illum';
    $request->name = 'Jean Buckridge';
    $request->oauthToken = 'facere';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new BillingbudgetsBillingAccountsBudgetsPatchSecurity();
    $requestSecurity->option1 = new BillingbudgetsBillingAccountsBudgetsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billingAccounts->billingbudgetsBillingAccountsBudgetsPatch($request, $requestSecurity);

    if ($response->googleCloudBillingBudgetsV1beta1Budget !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
