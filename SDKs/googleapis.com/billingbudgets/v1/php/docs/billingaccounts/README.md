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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1BudgetInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1BudgetAmount;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeMoney;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1Filter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1CustomPeriod;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1NotificationsRule;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1ThresholdRule;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BillingbudgetsBillingAccountsBudgetsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BillingbudgetsBillingAccountsBudgetsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BillingbudgetsBillingAccountsBudgetsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudBillingBudgetsV1BudgetInput = new GoogleCloudBillingBudgetsV1BudgetInput();
    $request->googleCloudBillingBudgetsV1BudgetInput->amount = new GoogleCloudBillingBudgetsV1BudgetAmount();
    $request->googleCloudBillingBudgetsV1BudgetInput->amount->lastPeriodAmount = [
        'perferendis' => 'ad',
    ];
    $request->googleCloudBillingBudgetsV1BudgetInput->amount->specifiedAmount = new GoogleTypeMoney();
    $request->googleCloudBillingBudgetsV1BudgetInput->amount->specifiedAmount->currencyCode = 'natus';
    $request->googleCloudBillingBudgetsV1BudgetInput->amount->specifiedAmount->nanos = 149675;
    $request->googleCloudBillingBudgetsV1BudgetInput->amount->specifiedAmount->units = 'iste';
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter = new GoogleCloudBillingBudgetsV1Filter();
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->calendarPeriod = GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum::CALENDAR_PERIOD_UNSPECIFIED;
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->creditTypes = [
        'laboriosam',
        'hic',
        'saepe',
    ];
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->creditTypesTreatment = GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum::EXCLUDE_ALL_CREDITS;
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->customPeriod = new GoogleCloudBillingBudgetsV1CustomPeriod();
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->customPeriod->endDate = new GoogleTypeDate();
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->customPeriod->endDate->day = 449950;
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->customPeriod->endDate->month = 359508;
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->customPeriod->endDate->year = 613064;
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->customPeriod->startDate = new GoogleTypeDate();
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->customPeriod->startDate->day = 437032;
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->customPeriod->startDate->month = 902349;
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->customPeriod->startDate->year = 697631;
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->labels = [
        'ipsa' => [
            'est',
            'mollitia',
            'laborum',
            'dolores',
        ],
    ];
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->projects = [
        'corporis',
    ];
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->services = [
        'nobis',
    ];
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->subaccounts = [
        'omnis',
        'nemo',
    ];
    $request->googleCloudBillingBudgetsV1BudgetInput->displayName = 'minima';
    $request->googleCloudBillingBudgetsV1BudgetInput->etag = 'excepturi';
    $request->googleCloudBillingBudgetsV1BudgetInput->notificationsRule = new GoogleCloudBillingBudgetsV1NotificationsRule();
    $request->googleCloudBillingBudgetsV1BudgetInput->notificationsRule->disableDefaultIamRecipients = false;
    $request->googleCloudBillingBudgetsV1BudgetInput->notificationsRule->monitoringNotificationChannels = [
        'iure',
    ];
    $request->googleCloudBillingBudgetsV1BudgetInput->notificationsRule->pubsubTopic = 'culpa';
    $request->googleCloudBillingBudgetsV1BudgetInput->notificationsRule->schemaVersion = 'doloribus';
    $request->googleCloudBillingBudgetsV1BudgetInput->thresholdRules = [
        new GoogleCloudBillingBudgetsV1ThresholdRule(),
        new GoogleCloudBillingBudgetsV1ThresholdRule(),
        new GoogleCloudBillingBudgetsV1ThresholdRule(),
        new GoogleCloudBillingBudgetsV1ThresholdRule(),
    ];
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorem';
    $request->fields = 'culpa';
    $request->key = 'consequuntur';
    $request->oauthToken = 'repellat';
    $request->parent = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new BillingbudgetsBillingAccountsBudgetsCreateSecurity();
    $requestSecurity->option1 = new BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billingAccounts->billingbudgetsBillingAccountsBudgetsCreate($request, $requestSecurity);

    if ($response->googleCloudBillingBudgetsV1Budget !== null) {
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'error';
    $request->fields = 'quia';
    $request->key = 'quis';
    $request->name = 'Kayla O'Kon';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'sequi';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'ipsam';

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
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quasi';
    $request->fields = 'error';
    $request->key = 'temporibus';
    $request->name = 'Ryan Witting';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new BillingbudgetsBillingAccountsBudgetsGetSecurity();
    $requestSecurity->option1 = new BillingbudgetsBillingAccountsBudgetsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billingAccounts->billingbudgetsBillingAccountsBudgetsGet($request, $requestSecurity);

    if ($response->googleCloudBillingBudgetsV1Budget !== null) {
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perferendis';
    $request->fields = 'doloremque';
    $request->key = 'reprehenderit';
    $request->oauthToken = 'ut';
    $request->pageSize = 979587;
    $request->pageToken = 'dicta';
    $request->parent = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolore';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new BillingbudgetsBillingAccountsBudgetsListSecurity();
    $requestSecurity->option1 = new BillingbudgetsBillingAccountsBudgetsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billingAccounts->billingbudgetsBillingAccountsBudgetsList($request, $requestSecurity);

    if ($response->googleCloudBillingBudgetsV1ListBudgetsResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1BudgetInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1BudgetAmount;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeMoney;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1Filter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1CustomPeriod;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1NotificationsRule;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1ThresholdRule;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BillingbudgetsBillingAccountsBudgetsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BillingbudgetsBillingAccountsBudgetsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BillingbudgetsBillingAccountsBudgetsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BillingbudgetsBillingAccountsBudgetsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudBillingBudgetsV1BudgetInput = new GoogleCloudBillingBudgetsV1BudgetInput();
    $request->googleCloudBillingBudgetsV1BudgetInput->amount = new GoogleCloudBillingBudgetsV1BudgetAmount();
    $request->googleCloudBillingBudgetsV1BudgetInput->amount->lastPeriodAmount = [
        'accusamus' => 'commodi',
        'repudiandae' => 'quae',
    ];
    $request->googleCloudBillingBudgetsV1BudgetInput->amount->specifiedAmount = new GoogleTypeMoney();
    $request->googleCloudBillingBudgetsV1BudgetInput->amount->specifiedAmount->currencyCode = 'ipsum';
    $request->googleCloudBillingBudgetsV1BudgetInput->amount->specifiedAmount->nanos = 692472;
    $request->googleCloudBillingBudgetsV1BudgetInput->amount->specifiedAmount->units = 'molestias';
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter = new GoogleCloudBillingBudgetsV1Filter();
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->calendarPeriod = GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum::QUARTER;
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->creditTypes = [
        'modi',
        'praesentium',
        'rem',
        'voluptates',
    ];
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->creditTypesTreatment = GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum::CREDIT_TYPES_TREATMENT_UNSPECIFIED;
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->customPeriod = new GoogleCloudBillingBudgetsV1CustomPeriod();
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->customPeriod->endDate = new GoogleTypeDate();
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->customPeriod->endDate->day = 921158;
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->customPeriod->endDate->month = 575947;
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->customPeriod->endDate->year = 83112;
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->customPeriod->startDate = new GoogleTypeDate();
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->customPeriod->startDate->day = 929297;
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->customPeriod->startDate->month = 277718;
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->customPeriod->startDate->year = 318569;
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->labels = [
        'est' => [
            'explicabo',
            'deserunt',
            'distinctio',
            'quibusdam',
        ],
    ];
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->projects = [
        'modi',
        'qui',
    ];
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->services = [
        'cupiditate',
        'quos',
    ];
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->subaccounts = [
        'magni',
    ];
    $request->googleCloudBillingBudgetsV1BudgetInput->displayName = 'assumenda';
    $request->googleCloudBillingBudgetsV1BudgetInput->etag = 'ipsam';
    $request->googleCloudBillingBudgetsV1BudgetInput->notificationsRule = new GoogleCloudBillingBudgetsV1NotificationsRule();
    $request->googleCloudBillingBudgetsV1BudgetInput->notificationsRule->disableDefaultIamRecipients = false;
    $request->googleCloudBillingBudgetsV1BudgetInput->notificationsRule->monitoringNotificationChannels = [
        'fugit',
    ];
    $request->googleCloudBillingBudgetsV1BudgetInput->notificationsRule->pubsubTopic = 'dolorum';
    $request->googleCloudBillingBudgetsV1BudgetInput->notificationsRule->schemaVersion = 'excepturi';
    $request->googleCloudBillingBudgetsV1BudgetInput->thresholdRules = [
        new GoogleCloudBillingBudgetsV1ThresholdRule(),
        new GoogleCloudBillingBudgetsV1ThresholdRule(),
    ];
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'labore';
    $request->fields = 'delectus';
    $request->key = 'eum';
    $request->name = 'Sheri Mayer';
    $request->oauthToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sint';
    $request->updateMask = 'officia';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new BillingbudgetsBillingAccountsBudgetsPatchSecurity();
    $requestSecurity->option1 = new BillingbudgetsBillingAccountsBudgetsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billingAccounts->billingbudgetsBillingAccountsBudgetsPatch($request, $requestSecurity);

    if ($response->googleCloudBillingBudgetsV1Budget !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
