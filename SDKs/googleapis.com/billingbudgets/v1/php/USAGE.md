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