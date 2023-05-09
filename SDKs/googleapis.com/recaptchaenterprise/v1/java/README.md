# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsAssessmentsAnnotateRequest;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsAssessmentsAnnotateResponse;
import org.openapis.openapi.models.operations.RecaptchaenterpriseProjectsAssessmentsAnnotateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1TransactionEvent;
import org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1TransactionEventEventTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecaptchaenterpriseProjectsAssessmentsAnnotateRequest req = new RecaptchaenterpriseProjectsAssessmentsAnnotateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest = new GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest() {{
                    annotation = GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum.PASSWORD_CORRECT;
                    hashedAccountId = "quibusdam";
                    reasons = new org.openapis.openapi.models.shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum[]{{
                        add(GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum.CORRECT_PASSWORD),
                        add(GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum.PAYMENT_HEURISTICS),
                        add(GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum.CORRECT_PASSWORD),
                    }};
                    transactionEvent = new GoogleCloudRecaptchaenterpriseV1TransactionEvent() {{
                        eventTime = "vel";
                        eventType = GoogleCloudRecaptchaenterpriseV1TransactionEventEventTypeEnum.FRAUD_NOTIFICATION;
                        reason = "deserunt";
                        value = 3843.82;
                    }};;
                }};;
                accessToken = "iure";
                alt = AltEnum.JSON;
                callback = "debitis";
                fields = "ipsa";
                key = "delectus";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "molestiae";
                uploadProtocol = "minus";
            }};            

            RecaptchaenterpriseProjectsAssessmentsAnnotateResponse res = sdk.projects.recaptchaenterpriseProjectsAssessmentsAnnotate(req, new RecaptchaenterpriseProjectsAssessmentsAnnotateSecurity("placeat", "voluptatum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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
