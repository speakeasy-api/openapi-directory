<!-- Start SDK Example Usage -->
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput = new GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput();
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget = new GoogleCloudBillingBudgetsV1beta1BudgetInput();
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->allUpdatesRule = new GoogleCloudBillingBudgetsV1beta1AllUpdatesRule();
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->allUpdatesRule->disableDefaultIamRecipients = false;
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->allUpdatesRule->monitoringNotificationChannels = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->allUpdatesRule->pubsubTopic = 'nulla';
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->allUpdatesRule->schemaVersion = 'corrupti';
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->amount = new GoogleCloudBillingBudgetsV1beta1BudgetAmount();
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->amount->lastPeriodAmount = [
        'vel' => 'error',
        'deserunt' => 'suscipit',
        'iure' => 'magnam',
        'debitis' => 'ipsa',
    ];
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->amount->specifiedAmount = new GoogleTypeMoney();
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->amount->specifiedAmount->currencyCode = 'delectus';
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->amount->specifiedAmount->nanos = 272656;
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->amount->specifiedAmount->units = 'suscipit';
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter = new GoogleCloudBillingBudgetsV1beta1Filter();
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter->calendarPeriod = GoogleCloudBillingBudgetsV1beta1FilterCalendarPeriodEnum::MONTH;
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter->creditTypes = [
        'placeat',
        'voluptatum',
        'iusto',
        'excepturi',
    ];
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter->creditTypesTreatment = GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnum::INCLUDE_ALL_CREDITS;
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter->customPeriod = new GoogleCloudBillingBudgetsV1beta1CustomPeriod();
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter->customPeriod->endDate = new GoogleTypeDate();
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter->customPeriod->endDate->day = 925597;
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter->customPeriod->endDate->month = 836079;
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter->customPeriod->endDate->year = 71036;
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter->customPeriod->startDate = new GoogleTypeDate();
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter->customPeriod->startDate->day = 337396;
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter->customPeriod->startDate->month = 87129;
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter->customPeriod->startDate->year = 648172;
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter->labels = [
        'ipsam' => [
            'sapiente',
            'quo',
            'odit',
            'at',
        ],
    ];
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter->projects = [
        'maiores',
        'molestiae',
        'quod',
        'quod',
    ];
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter->services = [
        'totam',
        'porro',
    ];
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->budgetFilter->subaccounts = [
        'dicta',
        'nam',
        'officia',
    ];
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->displayName = 'occaecati';
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->etag = 'fugit';
    $request->googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput->budget->thresholdRules = [
        new GoogleCloudBillingBudgetsV1beta1ThresholdRule(),
        new GoogleCloudBillingBudgetsV1beta1ThresholdRule(),
        new GoogleCloudBillingBudgetsV1beta1ThresholdRule(),
    ];
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'totam';
    $request->fields = 'beatae';
    $request->key = 'commodi';
    $request->oauthToken = 'molestiae';
    $request->parent = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'cum';

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
<!-- End SDK Example Usage -->