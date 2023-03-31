# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudsupport/v2beta/go
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

    req := operations.CloudsupportCaseClassificationsSearchRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Key: "nulla",
        OauthToken: "corrupti",
        PageSize: 847252,
        PageToken: "vel",
        PrettyPrint: false,
        Query: "error",
        QuotaUser: "deserunt",
        UploadType: "suscipit",
        UploadProtocol: "iure",
    }

    ctx := context.Background()
    res, err := s.CaseClassifications.CloudsupportCaseClassificationsSearch(ctx, req, operations.CloudsupportCaseClassificationsSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchCaseClassificationsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### CaseClassifications

* `CloudsupportCaseClassificationsSearch` - Retrieve valid classifications to be used when creating a support case. The classications are hierarchical, with each classification containing all levels of the hierarchy, separated by " > ". For example "Technical Issue > Compute > Compute Engine".

### Cases

* `CloudsupportCasesSearch` - Search cases using the specified query.

### Media

* `CloudsupportMediaDownload` - Download a file attachment on a case. Note: HTTP requests must append "?alt=media" to the URL.
* `CloudsupportMediaUpload` - Create a file attachment on a case or Cloud resource. The attachment object must have the following fields set: filename.

### Projects

* `CloudsupportProjectsCasesAttachmentsList` - Retrieve all attachments associated with a support case.
* `CloudsupportProjectsCasesClose` - Close the specified case.
* `CloudsupportProjectsCasesCommentsCreate` - Add a new comment to the specified Case. The comment object must have the following fields set: body.
* `CloudsupportProjectsCasesCommentsList` - Retrieve all Comments associated with the Case object.
* `CloudsupportProjectsCasesCreate` - Create a new case and associate it with the given Cloud resource. The case object must have the following fields set: display_name, description, classification, and severity.
* `CloudsupportProjectsCasesEscalate` - Escalate a case. Escalating a case will initiate the Cloud Support escalation management process. This operation is only available to certain Customer Care tiers. Go to https://cloud.google.com/support and look for 'Technical support escalations' in the feature list to find out which tiers are able to perform escalations.
* `CloudsupportProjectsCasesGet` - Retrieve the specified case.
* `CloudsupportProjectsCasesList` - Retrieve all cases under the specified parent. Note: Listing cases under an Organization returns only the cases directly parented by that organization. To retrieve all cases under an organization, including cases parented by projects under that organization, use `cases.search`.
* `CloudsupportProjectsUpdateCases` - Update the specified case. Only a subset of fields can be updated.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
