<!-- Start SDK Example Usage -->
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
    $request->googleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest->annotation = GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum::FRAUDULENT;
    $request->googleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest->hashedAccountId = 'distinctio';
    $request->googleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest->reasons = [
        GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum::INITIATED_TWO_FACTOR,
        GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum::CORRECT_PASSWORD,
        GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum::PAYMENT_HEURISTICS,
        GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum::CORRECT_PASSWORD,
    ];
    $request->googleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest->transactionEvent = new GoogleCloudRecaptchaenterpriseV1TransactionEvent();
    $request->googleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest->transactionEvent->eventTime = 'vel';
    $request->googleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest->transactionEvent->eventType = GoogleCloudRecaptchaenterpriseV1TransactionEventEventTypeEnum::FRAUD_NOTIFICATION;
    $request->googleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest->transactionEvent->reason = 'deserunt';
    $request->googleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest->transactionEvent->value = 3843.82;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->fields = 'ipsa';
    $request->key = 'delectus';
    $request->name = 'Laurie Kreiger';
    $request->oauthToken = 'voluptatum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'nisi';

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
<!-- End SDK Example Usage -->