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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.RecaptchaenterpriseProjectsAssessmentsAnnotateRequest{
        DollarXgafv: "2",
        GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest: &shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest{
            Annotation: "FRAUDULENT",
            HashedAccountID: "distinctio",
            Reasons: []shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum{
                "INITIATED_TWO_FACTOR",
                "CORRECT_PASSWORD",
                "PAYMENT_HEURISTICS",
                "CORRECT_PASSWORD",
            },
            TransactionEvent: &shared.GoogleCloudRecaptchaenterpriseV1TransactionEvent{
                EventTime: "vel",
                EventType: "FRAUD_NOTIFICATION",
                Reason: "deserunt",
                Value: 3843.82,
            },
        },
        AccessToken: "iure",
        Alt: "json",
        Callback: "debitis",
        Fields: "ipsa",
        Key: "delectus",
        Name: "tempora",
        OauthToken: "suscipit",
        PrettyPrint: false,
        QuotaUser: "molestiae",
        UploadType: "minus",
        UploadProtocol: "placeat",
    }

    ctx := context.Background()
    res, err := s.Projects.RecaptchaenterpriseProjectsAssessmentsAnnotate(ctx, req, operations.RecaptchaenterpriseProjectsAssessmentsAnnotateSecurity{
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


### Projects

* `RecaptchaenterpriseProjectsAssessmentsAnnotate` - Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fraudulent.
* `RecaptchaenterpriseProjectsAssessmentsCreate` - Creates an Assessment of the likelihood an event is legitimate.
* `RecaptchaenterpriseProjectsFirewallpoliciesCreate` - Creates a new FirewallPolicy, specifying conditions at which reCAPTCHA Enterprise actions can be executed. A project may have a maximum of 1000 policies.
* `RecaptchaenterpriseProjectsFirewallpoliciesList` - Returns the list of all firewall policies that belong to a project.
* `RecaptchaenterpriseProjectsKeysCreate` - Creates a new reCAPTCHA Enterprise key.
* `RecaptchaenterpriseProjectsKeysDelete` - Deletes the specified key.
* `RecaptchaenterpriseProjectsKeysGetMetrics` - Get some aggregated metrics for a Key. This data can be used to build dashboards.
* `RecaptchaenterpriseProjectsKeysList` - Returns the list of all keys that belong to a project.
* `RecaptchaenterpriseProjectsKeysMigrate` - Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise. Once a key is migrated, it can be used from either product. SiteVerify requests are billed as CreateAssessment calls. You must be authenticated as one of the current owners of the reCAPTCHA Site Key, and your user must have the reCAPTCHA Enterprise Admin IAM role in the destination project.
* `RecaptchaenterpriseProjectsKeysPatch` - Updates the specified key.
* `RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKey` - Returns the secret key related to the specified public key. You must use the legacy secret key only in a 3rd party integration with legacy reCAPTCHA.
* `RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearch` - Search group memberships related to a given account.
* `RecaptchaenterpriseProjectsRelatedaccountgroupsList` - List groups of related accounts.
* `RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsList` - Get memberships in a group of related accounts.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
