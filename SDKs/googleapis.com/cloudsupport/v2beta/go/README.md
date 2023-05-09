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
    res, err := s.CaseClassifications.CloudsupportCaseClassificationsSearch(ctx, operations.CloudsupportCaseClassificationsSearchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        OauthToken: sdk.String("corrupti"),
        PageSize: sdk.Int64(847252),
        PageToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("error"),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("iure"),
    }, operations.CloudsupportCaseClassificationsSearchSecurity{
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


### [CaseClassifications](docs/caseclassifications/README.md)

* [CloudsupportCaseClassificationsSearch](docs/caseclassifications/README.md#cloudsupportcaseclassificationssearch) - Retrieve valid classifications to be used when creating a support case. The classications are hierarchical, with each classification containing all levels of the hierarchy, separated by " > ". For example "Technical Issue > Compute > Compute Engine".

### [Cases](docs/cases/README.md)

* [CloudsupportCasesAttachmentsList](docs/cases/README.md#cloudsupportcasesattachmentslist) - Retrieve all attachments associated with a support case.
* [CloudsupportCasesClose](docs/cases/README.md#cloudsupportcasesclose) - Close the specified case.
* [CloudsupportCasesCommentsCreate](docs/cases/README.md#cloudsupportcasescommentscreate) - Add a new comment to the specified Case. The comment object must have the following fields set: body.
* [CloudsupportCasesCommentsList](docs/cases/README.md#cloudsupportcasescommentslist) - Retrieve all Comments associated with the Case object.
* [CloudsupportCasesCreate](docs/cases/README.md#cloudsupportcasescreate) - Create a new case and associate it with the given Google Cloud Resource. The case object must have the following fields set: `display_name`, `description`, `classification`, and `priority`.
* [CloudsupportCasesEscalate](docs/cases/README.md#cloudsupportcasesescalate) - Escalate a case. Escalating a case will initiate the Google Cloud Support escalation management process. This operation is only available to certain Customer Care tiers. Go to https://cloud.google.com/support and look for 'Technical support escalations' in the feature list to find out which tiers are able to perform escalations.
* [CloudsupportCasesGet](docs/cases/README.md#cloudsupportcasesget) - Retrieve the specified case.
* [CloudsupportCasesList](docs/cases/README.md#cloudsupportcaseslist) - Retrieve all cases under the specified parent. Note: Listing cases under an Organization returns only the cases directly parented by that organization. To retrieve all cases under an organization, including cases parented by projects under that organization, use `cases.search`.
* [CloudsupportCasesPatch](docs/cases/README.md#cloudsupportcasespatch) - Update the specified case. Only a subset of fields can be updated.
* [CloudsupportCasesSearch](docs/cases/README.md#cloudsupportcasessearch) - Search cases using the specified query.

### [Media](docs/media/README.md)

* [CloudsupportMediaDownload](docs/media/README.md#cloudsupportmediadownload) - Download a file attachment on a case. Note: HTTP requests must append "?alt=media" to the URL.
* [CloudsupportMediaUpload](docs/media/README.md#cloudsupportmediaupload) - Create a file attachment on a case or Cloud resource. The attachment object must have the following fields set: filename.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
