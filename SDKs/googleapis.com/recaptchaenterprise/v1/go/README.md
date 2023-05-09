# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/recaptchaenterprise/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RecaptchaenterpriseProjectsAssessmentsAnnotate(ctx, operations.RecaptchaenterpriseProjectsAssessmentsAnnotateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest: &shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest{
            Annotation: shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnumFraudulent.ToPointer(),
            HashedAccountID: sdk.String("distinctio"),
            Reasons: []shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum{
                shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnumInitiatedTwoFactor,
                shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnumCorrectPassword,
                shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnumPaymentHeuristics,
                shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnumCorrectPassword,
            },
            TransactionEvent: &shared.GoogleCloudRecaptchaenterpriseV1TransactionEvent{
                EventTime: sdk.String("vel"),
                EventType: shared.GoogleCloudRecaptchaenterpriseV1TransactionEventEventTypeEnumFraudNotification.ToPointer(),
                Reason: sdk.String("deserunt"),
                Value: sdk.Float64(3843.82),
            },
        },
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("delectus"),
        Name: "Laurie Kreiger",
        OauthToken: sdk.String("voluptatum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("nisi"),
    }, operations.RecaptchaenterpriseProjectsAssessmentsAnnotateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [RecaptchaenterpriseProjectsAssessmentsAnnotate](docs/projects/README.md#recaptchaenterpriseprojectsassessmentsannotate) - Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fraudulent.
* [RecaptchaenterpriseProjectsAssessmentsCreate](docs/projects/README.md#recaptchaenterpriseprojectsassessmentscreate) - Creates an Assessment of the likelihood an event is legitimate.
* [RecaptchaenterpriseProjectsFirewallpoliciesCreate](docs/projects/README.md#recaptchaenterpriseprojectsfirewallpoliciescreate) - Creates a new FirewallPolicy, specifying conditions at which reCAPTCHA Enterprise actions can be executed. A project may have a maximum of 1000 policies.
* [RecaptchaenterpriseProjectsFirewallpoliciesList](docs/projects/README.md#recaptchaenterpriseprojectsfirewallpolicieslist) - Returns the list of all firewall policies that belong to a project.
* [RecaptchaenterpriseProjectsKeysCreate](docs/projects/README.md#recaptchaenterpriseprojectskeyscreate) - Creates a new reCAPTCHA Enterprise key.
* [RecaptchaenterpriseProjectsKeysDelete](docs/projects/README.md#recaptchaenterpriseprojectskeysdelete) - Deletes the specified key.
* [RecaptchaenterpriseProjectsKeysGetMetrics](docs/projects/README.md#recaptchaenterpriseprojectskeysgetmetrics) - Get some aggregated metrics for a Key. This data can be used to build dashboards.
* [RecaptchaenterpriseProjectsKeysList](docs/projects/README.md#recaptchaenterpriseprojectskeyslist) - Returns the list of all keys that belong to a project.
* [RecaptchaenterpriseProjectsKeysMigrate](docs/projects/README.md#recaptchaenterpriseprojectskeysmigrate) - Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise. Once a key is migrated, it can be used from either product. SiteVerify requests are billed as CreateAssessment calls. You must be authenticated as one of the current owners of the reCAPTCHA Site Key, and your user must have the reCAPTCHA Enterprise Admin IAM role in the destination project.
* [RecaptchaenterpriseProjectsKeysPatch](docs/projects/README.md#recaptchaenterpriseprojectskeyspatch) - Updates the specified key.
* [RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKey](docs/projects/README.md#recaptchaenterpriseprojectskeysretrievelegacysecretkey) - Returns the secret key related to the specified public key. You must use the legacy secret key only in a 3rd party integration with legacy reCAPTCHA.
* [RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearch](docs/projects/README.md#recaptchaenterpriseprojectsrelatedaccountgroupmembershipssearch) - Search group memberships related to a given account.
* [RecaptchaenterpriseProjectsRelatedaccountgroupsList](docs/projects/README.md#recaptchaenterpriseprojectsrelatedaccountgroupslist) - List groups of related accounts.
* [RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsList](docs/projects/README.md#recaptchaenterpriseprojectsrelatedaccountgroupsmembershipslist) - Get memberships in a group of related accounts.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
