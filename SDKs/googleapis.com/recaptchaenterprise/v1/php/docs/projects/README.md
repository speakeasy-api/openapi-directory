# projects

### Available Operations

* [recaptchaenterpriseProjectsAssessmentsAnnotate](#recaptchaenterpriseprojectsassessmentsannotate) - Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fraudulent.
* [recaptchaenterpriseProjectsAssessmentsCreate](#recaptchaenterpriseprojectsassessmentscreate) - Creates an Assessment of the likelihood an event is legitimate.
* [recaptchaenterpriseProjectsFirewallpoliciesCreate](#recaptchaenterpriseprojectsfirewallpoliciescreate) - Creates a new FirewallPolicy, specifying conditions at which reCAPTCHA Enterprise actions can be executed. A project may have a maximum of 1000 policies.
* [recaptchaenterpriseProjectsFirewallpoliciesList](#recaptchaenterpriseprojectsfirewallpolicieslist) - Returns the list of all firewall policies that belong to a project.
* [recaptchaenterpriseProjectsKeysCreate](#recaptchaenterpriseprojectskeyscreate) - Creates a new reCAPTCHA Enterprise key.
* [recaptchaenterpriseProjectsKeysDelete](#recaptchaenterpriseprojectskeysdelete) - Deletes the specified key.
* [recaptchaenterpriseProjectsKeysGetMetrics](#recaptchaenterpriseprojectskeysgetmetrics) - Get some aggregated metrics for a Key. This data can be used to build dashboards.
* [recaptchaenterpriseProjectsKeysList](#recaptchaenterpriseprojectskeyslist) - Returns the list of all keys that belong to a project.
* [recaptchaenterpriseProjectsKeysMigrate](#recaptchaenterpriseprojectskeysmigrate) - Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise. Once a key is migrated, it can be used from either product. SiteVerify requests are billed as CreateAssessment calls. You must be authenticated as one of the current owners of the reCAPTCHA Site Key, and your user must have the reCAPTCHA Enterprise Admin IAM role in the destination project.
* [recaptchaenterpriseProjectsKeysPatch](#recaptchaenterpriseprojectskeyspatch) - Updates the specified key.
* [recaptchaenterpriseProjectsKeysRetrieveLegacySecretKey](#recaptchaenterpriseprojectskeysretrievelegacysecretkey) - Returns the secret key related to the specified public key. You must use the legacy secret key only in a 3rd party integration with legacy reCAPTCHA.
* [recaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearch](#recaptchaenterpriseprojectsrelatedaccountgroupmembershipssearch) - Search group memberships related to a given account.
* [recaptchaenterpriseProjectsRelatedaccountgroupsList](#recaptchaenterpriseprojectsrelatedaccountgroupslist) - List groups of related accounts.
* [recaptchaenterpriseProjectsRelatedaccountgroupsMembershipsList](#recaptchaenterpriseprojectsrelatedaccountgroupsmembershipslist) - Get memberships in a group of related accounts.

## recaptchaenterpriseProjectsAssessmentsAnnotate

Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fraudulent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecaptchaenterpriseProjectsAssessmentsAnnotateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1TransactionEvent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1TransactionEventEventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecaptchaenterpriseProjectsAssessmentsAnnotateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecaptchaenterpriseProjectsAssessmentsAnnotateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest = new GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest();
    $request->googleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest->annotation = GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum::PASSWORD_INCORRECT;
    $request->googleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest->hashedAccountId = 'ab';
    $request->googleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest->reasons = [
        GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum::CHARGEBACK,
        GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum::INITIATED_TWO_FACTOR,
    ];
    $request->googleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest->transactionEvent = new GoogleCloudRecaptchaenterpriseV1TransactionEvent();
    $request->googleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest->transactionEvent->eventTime = 'perferendis';
    $request->googleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest->transactionEvent->eventType = GoogleCloudRecaptchaenterpriseV1TransactionEventEventTypeEnum::PAYMENT_CAPTURE;
    $request->googleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest->transactionEvent->reason = 'repellendus';
    $request->googleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest->transactionEvent->value = 9571.56;
    $request->accessToken = 'quo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'at';
    $request->fields = 'at';
    $request->key = 'maiores';
    $request->name = 'Bernadette Schmidt';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'nam';

    $requestSecurity = new RecaptchaenterpriseProjectsAssessmentsAnnotateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recaptchaenterpriseProjectsAssessmentsAnnotate($request, $requestSecurity);

    if ($response->googleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recaptchaenterpriseProjectsAssessmentsCreate

Creates an Assessment of the likelihood an event is legitimate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecaptchaenterpriseProjectsAssessmentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1AssessmentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentLabelsEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1Event;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1TransactionData;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1TransactionDataAddress;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1TransactionDataItem;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1TransactionDataUser;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessment;
use \OpenAPI\OpenAPI\Models\Shared\GoogleRpcStatus;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1FirewallPolicy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1FirewallAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessment;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentBehavioralTrustVerdict;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdict;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdict;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1RiskAnalysis;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1TokenProperties;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecaptchaenterpriseProjectsAssessmentsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecaptchaenterpriseProjectsAssessmentsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput = new GoogleCloudRecaptchaenterpriseV1AssessmentInput();
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->accountDefenderAssessment = new GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment();
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->accountDefenderAssessment->labels = [
        GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentLabelsEnum::ACCOUNT_DEFENDER_LABEL_UNSPECIFIED,
        GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentLabelsEnum::SUSPICIOUS_LOGIN_ACTIVITY,
        GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentLabelsEnum::RELATED_ACCOUNTS_NUMBER_HIGH,
    ];
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->accountVerification = new GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput();
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->accountVerification->endpoints = [
        new GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput(),
        new GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput(),
        new GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput(),
        new GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput(),
    ];
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->accountVerification->languageCode = 'totam';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->accountVerification->username = 'Benjamin.Johns';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event = new GoogleCloudRecaptchaenterpriseV1Event();
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->expectedAction = 'qui';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->express = false;
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->firewallPolicyEvaluation = false;
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->hashedAccountId = 'impedit';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->headers = [
        'esse',
        'ipsum',
        'excepturi',
    ];
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->ja3 = 'aspernatur';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->requestedUri = 'perferendis';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->siteKey = 'ad';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->token = 'natus';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData = new GoogleCloudRecaptchaenterpriseV1TransactionData();
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->billingAddress = new GoogleCloudRecaptchaenterpriseV1TransactionDataAddress();
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->billingAddress->address = [
        'iste',
    ];
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->billingAddress->administrativeArea = 'dolor';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->billingAddress->locality = 'natus';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->billingAddress->postalCode = '99643';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->billingAddress->recipient = 'iste';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->billingAddress->regionCode = 'iure';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->cardBin = 'saepe';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->cardLastFour = 'quidem';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->currencyCode = 'architecto';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->gatewayInfo = new GoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfo();
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->gatewayInfo->avsResponseCode = 'ipsa';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->gatewayInfo->cvvResponseCode = 'reiciendis';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->gatewayInfo->gatewayResponseCode = 'est';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->gatewayInfo->name = 'Cameron Dach';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->items = [
        new GoogleCloudRecaptchaenterpriseV1TransactionDataItem(),
    ];
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->merchants = [
        new GoogleCloudRecaptchaenterpriseV1TransactionDataUser(),
        new GoogleCloudRecaptchaenterpriseV1TransactionDataUser(),
        new GoogleCloudRecaptchaenterpriseV1TransactionDataUser(),
        new GoogleCloudRecaptchaenterpriseV1TransactionDataUser(),
    ];
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->paymentMethod = 'enim';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->shippingAddress = new GoogleCloudRecaptchaenterpriseV1TransactionDataAddress();
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->shippingAddress->address = [
        'nemo',
        'minima',
        'excepturi',
    ];
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->shippingAddress->administrativeArea = 'accusantium';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->shippingAddress->locality = 'iure';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->shippingAddress->postalCode = '99162-6196';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->shippingAddress->recipient = 'occaecati';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->shippingAddress->regionCode = 'numquam';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->shippingValue = 4143.69;
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->transactionId = 'quam';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->user = new GoogleCloudRecaptchaenterpriseV1TransactionDataUser();
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->user->accountId = 'molestiae';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->user->creationMs = 'velit';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->user->email = 'Carmelo67@yahoo.com';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->user->emailVerified = false;
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->user->phoneNumber = 'animi';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->user->phoneVerified = false;
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->transactionData->value = 3172.02;
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->userAgent = 'odit';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->userIpAddress = 'quo';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->event->wafTokenAssessment = false;
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->firewallPolicyAssessment = new GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessment();
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->firewallPolicyAssessment->error = new GoogleRpcStatus();
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->firewallPolicyAssessment->error->code = 196582;
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->firewallPolicyAssessment->error->details = [
        [
            'id' => 'possimus',
            'aut' => 'quasi',
        ],
        [
            'temporibus' => 'laborum',
            'quasi' => 'reiciendis',
            'voluptatibus' => 'vero',
        ],
        [
            'praesentium' => 'voluptatibus',
            'ipsa' => 'omnis',
        ],
        [
            'cum' => 'perferendis',
            'doloremque' => 'reprehenderit',
        ],
    ];
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->firewallPolicyAssessment->error->message = 'ut';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->firewallPolicyAssessment->firewallPolicy = new GoogleCloudRecaptchaenterpriseV1FirewallPolicy();
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->firewallPolicyAssessment->firewallPolicy->actions = [
        new GoogleCloudRecaptchaenterpriseV1FirewallAction(),
        new GoogleCloudRecaptchaenterpriseV1FirewallAction(),
        new GoogleCloudRecaptchaenterpriseV1FirewallAction(),
        new GoogleCloudRecaptchaenterpriseV1FirewallAction(),
    ];
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->firewallPolicyAssessment->firewallPolicy->condition = 'dicta';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->firewallPolicyAssessment->firewallPolicy->description = 'corporis';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->firewallPolicyAssessment->firewallPolicy->name = 'Heidi Carter';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->firewallPolicyAssessment->firewallPolicy->path = 'accusamus';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->fraudPreventionAssessment = new GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessment();
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->fraudPreventionAssessment->behavioralTrustVerdict = new GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentBehavioralTrustVerdict();
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->fraudPreventionAssessment->behavioralTrustVerdict->trust = 4142.63;
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->fraudPreventionAssessment->cardTestingVerdict = new GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdict();
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->fraudPreventionAssessment->cardTestingVerdict->risk = 9182.36;
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->fraudPreventionAssessment->stolenInstrumentVerdict = new GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdict();
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->fraudPreventionAssessment->stolenInstrumentVerdict->risk = 641.47;
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->fraudPreventionAssessment->transactionRisk = 2168.22;
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->privatePasswordLeakVerification = new GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationInput();
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->privatePasswordLeakVerification->encryptedUserCredentialsHash = 'quidem';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->privatePasswordLeakVerification->lookupHashPrefix = 'molestias';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->riskAnalysis = new GoogleCloudRecaptchaenterpriseV1RiskAnalysis();
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->riskAnalysis->extendedVerdictReasons = [
        'pariatur',
        'modi',
        'praesentium',
    ];
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->riskAnalysis->reasons = [
        GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum::SUSPECTED_CHARGEBACK,
        GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum::CLASSIFICATION_REASON_UNSPECIFIED,
        GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum::SUSPECTED_CHARGEBACK,
    ];
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->riskAnalysis->score = 5759.47;
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->tokenProperties = new GoogleCloudRecaptchaenterpriseV1TokenProperties();
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->tokenProperties->action = 'veritatis';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->tokenProperties->androidPackageName = 'itaque';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->tokenProperties->createTime = 'incidunt';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->tokenProperties->hostname = 'fruitful-adjective.net';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->tokenProperties->invalidReason = GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum::MISSING;
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->tokenProperties->iosBundleId = 'explicabo';
    $request->googleCloudRecaptchaenterpriseV1AssessmentInput->tokenProperties->valid = false;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'labore';
    $request->key = 'modi';
    $request->oauthToken = 'qui';
    $request->parent = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'cupiditate';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new RecaptchaenterpriseProjectsAssessmentsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recaptchaenterpriseProjectsAssessmentsCreate($request, $requestSecurity);

    if ($response->googleCloudRecaptchaenterpriseV1Assessment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recaptchaenterpriseProjectsFirewallpoliciesCreate

Creates a new FirewallPolicy, specifying conditions at which reCAPTCHA Enterprise actions can be executed. A project may have a maximum of 1000 policies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecaptchaenterpriseProjectsFirewallpoliciesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1FirewallPolicy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1FirewallAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecaptchaenterpriseProjectsFirewallpoliciesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecaptchaenterpriseProjectsFirewallpoliciesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRecaptchaenterpriseV1FirewallPolicy = new GoogleCloudRecaptchaenterpriseV1FirewallPolicy();
    $request->googleCloudRecaptchaenterpriseV1FirewallPolicy->actions = [
        new GoogleCloudRecaptchaenterpriseV1FirewallAction(),
        new GoogleCloudRecaptchaenterpriseV1FirewallAction(),
        new GoogleCloudRecaptchaenterpriseV1FirewallAction(),
        new GoogleCloudRecaptchaenterpriseV1FirewallAction(),
    ];
    $request->googleCloudRecaptchaenterpriseV1FirewallPolicy->condition = 'ipsam';
    $request->googleCloudRecaptchaenterpriseV1FirewallPolicy->description = 'alias';
    $request->googleCloudRecaptchaenterpriseV1FirewallPolicy->name = 'Sonya Marks';
    $request->googleCloudRecaptchaenterpriseV1FirewallPolicy->path = 'tempore';
    $request->accessToken = 'labore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eum';
    $request->fields = 'non';
    $request->key = 'eligendi';
    $request->oauthToken = 'sint';
    $request->parent = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new RecaptchaenterpriseProjectsFirewallpoliciesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recaptchaenterpriseProjectsFirewallpoliciesCreate($request, $requestSecurity);

    if ($response->googleCloudRecaptchaenterpriseV1FirewallPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recaptchaenterpriseProjectsFirewallpoliciesList

Returns the list of all firewall policies that belong to a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecaptchaenterpriseProjectsFirewallpoliciesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecaptchaenterpriseProjectsFirewallpoliciesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecaptchaenterpriseProjectsFirewallpoliciesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'a';
    $request->fields = 'dolorum';
    $request->key = 'in';
    $request->oauthToken = 'in';
    $request->pageSize = 846409;
    $request->pageToken = 'maiores';
    $request->parent = 'rerum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'cumque';

    $requestSecurity = new RecaptchaenterpriseProjectsFirewallpoliciesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recaptchaenterpriseProjectsFirewallpoliciesList($request, $requestSecurity);

    if ($response->googleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recaptchaenterpriseProjectsKeysCreate

Creates a new reCAPTCHA Enterprise key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecaptchaenterpriseProjectsKeysCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1KeyInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1AndroidKeySettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1IOSKeySettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1TestingOptions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallengeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1WafSettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1WafSettingsWafServiceEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1WebKeySettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecaptchaenterpriseProjectsKeysCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecaptchaenterpriseProjectsKeysCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRecaptchaenterpriseV1KeyInput = new GoogleCloudRecaptchaenterpriseV1KeyInput();
    $request->googleCloudRecaptchaenterpriseV1KeyInput->androidSettings = new GoogleCloudRecaptchaenterpriseV1AndroidKeySettings();
    $request->googleCloudRecaptchaenterpriseV1KeyInput->androidSettings->allowAllPackageNames = false;
    $request->googleCloudRecaptchaenterpriseV1KeyInput->androidSettings->allowedPackageNames = [
        'aliquid',
        'laborum',
    ];
    $request->googleCloudRecaptchaenterpriseV1KeyInput->androidSettings->supportNonGoogleAppStoreDistribution = false;
    $request->googleCloudRecaptchaenterpriseV1KeyInput->displayName = 'accusamus';
    $request->googleCloudRecaptchaenterpriseV1KeyInput->iosSettings = new GoogleCloudRecaptchaenterpriseV1IOSKeySettings();
    $request->googleCloudRecaptchaenterpriseV1KeyInput->iosSettings->allowAllBundleIds = false;
    $request->googleCloudRecaptchaenterpriseV1KeyInput->iosSettings->allowedBundleIds = [
        'occaecati',
    ];
    $request->googleCloudRecaptchaenterpriseV1KeyInput->labels = [
        'accusamus' => 'delectus',
        'quidem' => 'provident',
    ];
    $request->googleCloudRecaptchaenterpriseV1KeyInput->name = 'Lynn Kuvalis';
    $request->googleCloudRecaptchaenterpriseV1KeyInput->testingOptions = new GoogleCloudRecaptchaenterpriseV1TestingOptions();
    $request->googleCloudRecaptchaenterpriseV1KeyInput->testingOptions->testingChallenge = GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallengeEnum::TESTING_CHALLENGE_UNSPECIFIED;
    $request->googleCloudRecaptchaenterpriseV1KeyInput->testingOptions->testingScore = 6439.9;
    $request->googleCloudRecaptchaenterpriseV1KeyInput->wafSettings = new GoogleCloudRecaptchaenterpriseV1WafSettings();
    $request->googleCloudRecaptchaenterpriseV1KeyInput->wafSettings->wafFeature = GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnum::CHALLENGE_PAGE;
    $request->googleCloudRecaptchaenterpriseV1KeyInput->wafSettings->wafService = GoogleCloudRecaptchaenterpriseV1WafSettingsWafServiceEnum::CA;
    $request->googleCloudRecaptchaenterpriseV1KeyInput->webSettings = new GoogleCloudRecaptchaenterpriseV1WebKeySettings();
    $request->googleCloudRecaptchaenterpriseV1KeyInput->webSettings->allowAllDomains = false;
    $request->googleCloudRecaptchaenterpriseV1KeyInput->webSettings->allowAmpTraffic = false;
    $request->googleCloudRecaptchaenterpriseV1KeyInput->webSettings->allowedDomains = [
        'omnis',
        'molestiae',
        'perferendis',
    ];
    $request->googleCloudRecaptchaenterpriseV1KeyInput->webSettings->challengeSecurityPreference = GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum::USABILITY;
    $request->googleCloudRecaptchaenterpriseV1KeyInput->webSettings->integrationType = GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum::SCORE;
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'labore';
    $request->fields = 'labore';
    $request->key = 'suscipit';
    $request->oauthToken = 'natus';
    $request->parent = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'aspernatur';

    $requestSecurity = new RecaptchaenterpriseProjectsKeysCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recaptchaenterpriseProjectsKeysCreate($request, $requestSecurity);

    if ($response->googleCloudRecaptchaenterpriseV1Key !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recaptchaenterpriseProjectsKeysDelete

Deletes the specified key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecaptchaenterpriseProjectsKeysDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecaptchaenterpriseProjectsKeysDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecaptchaenterpriseProjectsKeysDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->fields = 'ullam';
    $request->key = 'provident';
    $request->name = 'Kirk Bartoletti';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'ad';
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'dolor';

    $requestSecurity = new RecaptchaenterpriseProjectsKeysDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recaptchaenterpriseProjectsKeysDelete($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recaptchaenterpriseProjectsKeysGetMetrics

Get some aggregated metrics for a Key. This data can be used to build dashboards.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecaptchaenterpriseProjectsKeysGetMetricsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecaptchaenterpriseProjectsKeysGetMetricsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecaptchaenterpriseProjectsKeysGetMetricsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quasi';
    $request->fields = 'iure';
    $request->key = 'doloribus';
    $request->name = 'Frederick Schoen';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'repudiandae';

    $requestSecurity = new RecaptchaenterpriseProjectsKeysGetMetricsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recaptchaenterpriseProjectsKeysGetMetrics($request, $requestSecurity);

    if ($response->googleCloudRecaptchaenterpriseV1Metrics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recaptchaenterpriseProjectsKeysList

Returns the list of all keys that belong to a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecaptchaenterpriseProjectsKeysListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecaptchaenterpriseProjectsKeysListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecaptchaenterpriseProjectsKeysListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repellat';
    $request->fields = 'quibusdam';
    $request->key = 'sed';
    $request->oauthToken = 'saepe';
    $request->pageSize = 868126;
    $request->pageToken = 'accusantium';
    $request->parent = 'consequuntur';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'magni';

    $requestSecurity = new RecaptchaenterpriseProjectsKeysListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recaptchaenterpriseProjectsKeysList($request, $requestSecurity);

    if ($response->googleCloudRecaptchaenterpriseV1ListKeysResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recaptchaenterpriseProjectsKeysMigrate

Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise. Once a key is migrated, it can be used from either product. SiteVerify requests are billed as CreateAssessment calls. You must be authenticated as one of the current owners of the reCAPTCHA Site Key, and your user must have the reCAPTCHA Enterprise Admin IAM role in the destination project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecaptchaenterpriseProjectsKeysMigrateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecaptchaenterpriseProjectsKeysMigrateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecaptchaenterpriseProjectsKeysMigrateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRecaptchaenterpriseV1MigrateKeyRequest = new GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest();
    $request->googleCloudRecaptchaenterpriseV1MigrateKeyRequest->skipBillingCheck = false;
    $request->accessToken = 'quo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'pariatur';
    $request->fields = 'maxime';
    $request->key = 'ea';
    $request->name = 'Mr. Harry Jaskolski';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'autem';

    $requestSecurity = new RecaptchaenterpriseProjectsKeysMigrateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recaptchaenterpriseProjectsKeysMigrate($request, $requestSecurity);

    if ($response->googleCloudRecaptchaenterpriseV1Key !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recaptchaenterpriseProjectsKeysPatch

Updates the specified key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecaptchaenterpriseProjectsKeysPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1KeyInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1AndroidKeySettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1IOSKeySettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1TestingOptions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallengeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1WafSettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1WafSettingsWafServiceEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1WebKeySettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecaptchaenterpriseProjectsKeysPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecaptchaenterpriseProjectsKeysPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRecaptchaenterpriseV1KeyInput = new GoogleCloudRecaptchaenterpriseV1KeyInput();
    $request->googleCloudRecaptchaenterpriseV1KeyInput->androidSettings = new GoogleCloudRecaptchaenterpriseV1AndroidKeySettings();
    $request->googleCloudRecaptchaenterpriseV1KeyInput->androidSettings->allowAllPackageNames = false;
    $request->googleCloudRecaptchaenterpriseV1KeyInput->androidSettings->allowedPackageNames = [
        'pariatur',
    ];
    $request->googleCloudRecaptchaenterpriseV1KeyInput->androidSettings->supportNonGoogleAppStoreDistribution = false;
    $request->googleCloudRecaptchaenterpriseV1KeyInput->displayName = 'nemo';
    $request->googleCloudRecaptchaenterpriseV1KeyInput->iosSettings = new GoogleCloudRecaptchaenterpriseV1IOSKeySettings();
    $request->googleCloudRecaptchaenterpriseV1KeyInput->iosSettings->allowAllBundleIds = false;
    $request->googleCloudRecaptchaenterpriseV1KeyInput->iosSettings->allowedBundleIds = [
        'perferendis',
        'fugiat',
        'amet',
        'aut',
    ];
    $request->googleCloudRecaptchaenterpriseV1KeyInput->labels = [
        'corporis' => 'hic',
        'libero' => 'nobis',
        'dolores' => 'quis',
        'totam' => 'dignissimos',
    ];
    $request->googleCloudRecaptchaenterpriseV1KeyInput->name = 'Beatrice Dooley Sr.';
    $request->googleCloudRecaptchaenterpriseV1KeyInput->testingOptions = new GoogleCloudRecaptchaenterpriseV1TestingOptions();
    $request->googleCloudRecaptchaenterpriseV1KeyInput->testingOptions->testingChallenge = GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallengeEnum::UNSOLVABLE_CHALLENGE;
    $request->googleCloudRecaptchaenterpriseV1KeyInput->testingOptions->testingScore = 4634.51;
    $request->googleCloudRecaptchaenterpriseV1KeyInput->wafSettings = new GoogleCloudRecaptchaenterpriseV1WafSettings();
    $request->googleCloudRecaptchaenterpriseV1KeyInput->wafSettings->wafFeature = GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnum::CHALLENGE_PAGE;
    $request->googleCloudRecaptchaenterpriseV1KeyInput->wafSettings->wafService = GoogleCloudRecaptchaenterpriseV1WafSettingsWafServiceEnum::FASTLY;
    $request->googleCloudRecaptchaenterpriseV1KeyInput->webSettings = new GoogleCloudRecaptchaenterpriseV1WebKeySettings();
    $request->googleCloudRecaptchaenterpriseV1KeyInput->webSettings->allowAllDomains = false;
    $request->googleCloudRecaptchaenterpriseV1KeyInput->webSettings->allowAmpTraffic = false;
    $request->googleCloudRecaptchaenterpriseV1KeyInput->webSettings->allowedDomains = [
        'hic',
        'recusandae',
    ];
    $request->googleCloudRecaptchaenterpriseV1KeyInput->webSettings->challengeSecurityPreference = GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum::BALANCE;
    $request->googleCloudRecaptchaenterpriseV1KeyInput->webSettings->integrationType = GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum::CHECKBOX;
    $request->accessToken = 'perspiciatis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'porro';
    $request->fields = 'consequuntur';
    $request->key = 'blanditiis';
    $request->name = 'Gary Mayert';
    $request->oauthToken = 'asperiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'earum';
    $request->updateMask = 'modi';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new RecaptchaenterpriseProjectsKeysPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recaptchaenterpriseProjectsKeysPatch($request, $requestSecurity);

    if ($response->googleCloudRecaptchaenterpriseV1Key !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recaptchaenterpriseProjectsKeysRetrieveLegacySecretKey

Returns the secret key related to the specified public key. You must use the legacy secret key only in a 3rd party integration with legacy reCAPTCHA.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nobis';
    $request->fields = 'libero';
    $request->key = 'delectus';
    $request->oauthToken = 'quaerat';
    $request->prettyPrint = false;
    $request->quotaUser = 'quos';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'dolorem';

    $requestSecurity = new RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recaptchaenterpriseProjectsKeysRetrieveLegacySecretKey($request, $requestSecurity);

    if ($response->googleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearch

Search group memberships related to a given account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest = new GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest();
    $request->googleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest->hashedAccountId = 'dolor';
    $request->googleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest->pageSize = 186193;
    $request->googleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest->pageToken = 'ipsum';
    $request->accessToken = 'hic';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cum';
    $request->fields = 'voluptate';
    $request->key = 'dignissimos';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->project = 'amet';
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'veritatis';

    $requestSecurity = new RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearch($request, $requestSecurity);

    if ($response->googleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recaptchaenterpriseProjectsRelatedaccountgroupsList

List groups of related accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecaptchaenterpriseProjectsRelatedaccountgroupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecaptchaenterpriseProjectsRelatedaccountgroupsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecaptchaenterpriseProjectsRelatedaccountgroupsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'odio';
    $request->fields = 'quaerat';
    $request->key = 'accusamus';
    $request->oauthToken = 'quidem';
    $request->pageSize = 976405;
    $request->pageToken = 'voluptas';
    $request->parent = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'eos';
    $request->uploadType = 'atque';
    $request->uploadProtocol = 'sit';

    $requestSecurity = new RecaptchaenterpriseProjectsRelatedaccountgroupsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recaptchaenterpriseProjectsRelatedaccountgroupsList($request, $requestSecurity);

    if ($response->googleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recaptchaenterpriseProjectsRelatedaccountgroupsMembershipsList

Get memberships in a group of related accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ab';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->fields = 'iusto';
    $request->key = 'voluptate';
    $request->oauthToken = 'dolorum';
    $request->pageSize = 536579;
    $request->pageToken = 'omnis';
    $request->parent = 'necessitatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recaptchaenterpriseProjectsRelatedaccountgroupsMembershipsList($request, $requestSecurity);

    if ($response->googleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
