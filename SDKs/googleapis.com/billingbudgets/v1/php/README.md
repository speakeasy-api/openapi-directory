# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
        'distinctio' => 'quibusdam',
        'unde' => 'nulla',
        'corrupti' => 'illum',
    ];
    $request->googleCloudBillingBudgetsV1BudgetInput->amount->specifiedAmount = new GoogleTypeMoney();
    $request->googleCloudBillingBudgetsV1BudgetInput->amount->specifiedAmount->currencyCode = 'vel';
    $request->googleCloudBillingBudgetsV1BudgetInput->amount->specifiedAmount->nanos = 623564;
    $request->googleCloudBillingBudgetsV1BudgetInput->amount->specifiedAmount->units = 'deserunt';
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter = new GoogleCloudBillingBudgetsV1Filter();
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->calendarPeriod = GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum::MONTH;
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->creditTypes = [
        'magnam',
        'debitis',
    ];
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->creditTypesTreatment = GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum::CREDIT_TYPES_TREATMENT_UNSPECIFIED;
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->customPeriod = new GoogleCloudBillingBudgetsV1CustomPeriod();
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->customPeriod->endDate = new GoogleTypeDate();
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->customPeriod->endDate->day = 963663;
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->customPeriod->endDate->month = 272656;
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->customPeriod->endDate->year = 383441;
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->customPeriod->startDate = new GoogleTypeDate();
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->customPeriod->startDate->day = 477665;
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->customPeriod->startDate->month = 791725;
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->customPeriod->startDate->year = 812169;
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->labels = [
        'iusto' => [
            'nisi',
            'recusandae',
            'temporibus',
        ],
        'ab' => [
            'veritatis',
            'deserunt',
        ],
        'perferendis' => [
            'repellendus',
            'sapiente',
        ],
    ];
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->projects = [
        'odit',
        'at',
        'at',
        'maiores',
    ];
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->services = [
        'quod',
        'quod',
    ];
    $request->googleCloudBillingBudgetsV1BudgetInput->budgetFilter->subaccounts = [
        'totam',
        'porro',
    ];
    $request->googleCloudBillingBudgetsV1BudgetInput->displayName = 'dolorum';
    $request->googleCloudBillingBudgetsV1BudgetInput->etag = 'dicta';
    $request->googleCloudBillingBudgetsV1BudgetInput->notificationsRule = new GoogleCloudBillingBudgetsV1NotificationsRule();
    $request->googleCloudBillingBudgetsV1BudgetInput->notificationsRule->disableDefaultIamRecipients = false;
    $request->googleCloudBillingBudgetsV1BudgetInput->notificationsRule->monitoringNotificationChannels = [
        'officia',
        'occaecati',
        'fugit',
    ];
    $request->googleCloudBillingBudgetsV1BudgetInput->notificationsRule->pubsubTopic = 'deleniti';
    $request->googleCloudBillingBudgetsV1BudgetInput->notificationsRule->schemaVersion = 'hic';
    $request->googleCloudBillingBudgetsV1BudgetInput->thresholdRules = [
        new GoogleCloudBillingBudgetsV1ThresholdRule(),
        new GoogleCloudBillingBudgetsV1ThresholdRule(),
        new GoogleCloudBillingBudgetsV1ThresholdRule(),
        new GoogleCloudBillingBudgetsV1ThresholdRule(),
    ];
    $request->accessToken = 'totam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'commodi';
    $request->fields = 'molestiae';
    $request->key = 'modi';
    $request->oauthToken = 'qui';
    $request->parent = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'cum';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'ipsum';

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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [billingAccounts](docs/billingaccounts/README.md)

* [billingbudgetsBillingAccountsBudgetsCreate](docs/billingaccounts/README.md#billingbudgetsbillingaccountsbudgetscreate) - Creates a new budget. See [Quotas and limits](https://cloud.google.com/billing/quotas) for more information on the limits of the number of budgets you can create.
* [billingbudgetsBillingAccountsBudgetsDelete](docs/billingaccounts/README.md#billingbudgetsbillingaccountsbudgetsdelete) - Deletes a budget. Returns successfully if already deleted.
* [billingbudgetsBillingAccountsBudgetsGet](docs/billingaccounts/README.md#billingbudgetsbillingaccountsbudgetsget) - Returns a budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
* [billingbudgetsBillingAccountsBudgetsList](docs/billingaccounts/README.md#billingbudgetsbillingaccountsbudgetslist) - Returns a list of budgets for a billing account. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
* [billingbudgetsBillingAccountsBudgetsPatch](docs/billingaccounts/README.md#billingbudgetsbillingaccountsbudgetspatch) - Updates a budget and returns the updated budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. Budget fields that are not exposed in this API will not be changed by this method.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
