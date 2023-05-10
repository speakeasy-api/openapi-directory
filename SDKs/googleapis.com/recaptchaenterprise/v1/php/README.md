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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [recaptchaenterpriseProjectsAssessmentsAnnotate](docs/projects/README.md#recaptchaenterpriseprojectsassessmentsannotate) - Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fraudulent.
* [recaptchaenterpriseProjectsAssessmentsCreate](docs/projects/README.md#recaptchaenterpriseprojectsassessmentscreate) - Creates an Assessment of the likelihood an event is legitimate.
* [recaptchaenterpriseProjectsFirewallpoliciesCreate](docs/projects/README.md#recaptchaenterpriseprojectsfirewallpoliciescreate) - Creates a new FirewallPolicy, specifying conditions at which reCAPTCHA Enterprise actions can be executed. A project may have a maximum of 1000 policies.
* [recaptchaenterpriseProjectsFirewallpoliciesList](docs/projects/README.md#recaptchaenterpriseprojectsfirewallpolicieslist) - Returns the list of all firewall policies that belong to a project.
* [recaptchaenterpriseProjectsKeysCreate](docs/projects/README.md#recaptchaenterpriseprojectskeyscreate) - Creates a new reCAPTCHA Enterprise key.
* [recaptchaenterpriseProjectsKeysDelete](docs/projects/README.md#recaptchaenterpriseprojectskeysdelete) - Deletes the specified key.
* [recaptchaenterpriseProjectsKeysGetMetrics](docs/projects/README.md#recaptchaenterpriseprojectskeysgetmetrics) - Get some aggregated metrics for a Key. This data can be used to build dashboards.
* [recaptchaenterpriseProjectsKeysList](docs/projects/README.md#recaptchaenterpriseprojectskeyslist) - Returns the list of all keys that belong to a project.
* [recaptchaenterpriseProjectsKeysMigrate](docs/projects/README.md#recaptchaenterpriseprojectskeysmigrate) - Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise. Once a key is migrated, it can be used from either product. SiteVerify requests are billed as CreateAssessment calls. You must be authenticated as one of the current owners of the reCAPTCHA Site Key, and your user must have the reCAPTCHA Enterprise Admin IAM role in the destination project.
* [recaptchaenterpriseProjectsKeysPatch](docs/projects/README.md#recaptchaenterpriseprojectskeyspatch) - Updates the specified key.
* [recaptchaenterpriseProjectsKeysRetrieveLegacySecretKey](docs/projects/README.md#recaptchaenterpriseprojectskeysretrievelegacysecretkey) - Returns the secret key related to the specified public key. You must use the legacy secret key only in a 3rd party integration with legacy reCAPTCHA.
* [recaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearch](docs/projects/README.md#recaptchaenterpriseprojectsrelatedaccountgroupmembershipssearch) - Search group memberships related to a given account.
* [recaptchaenterpriseProjectsRelatedaccountgroupsList](docs/projects/README.md#recaptchaenterpriseprojectsrelatedaccountgroupslist) - List groups of related accounts.
* [recaptchaenterpriseProjectsRelatedaccountgroupsMembershipsList](docs/projects/README.md#recaptchaenterpriseprojectsrelatedaccountgroupsmembershipslist) - Get memberships in a group of related accounts.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
