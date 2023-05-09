# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/essentialcontacts/v1/go
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
    res, err := s.Projects.EssentialcontactsProjectsContactsCompute(ctx, operations.EssentialcontactsProjectsContactsComputeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        NotificationCategories: []EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum{
            operations.EssentialcontactsProjectsContactsComputeNotificationCategoriesEnumProductUpdates,
            operations.EssentialcontactsProjectsContactsComputeNotificationCategoriesEnumSecurity,
            operations.EssentialcontactsProjectsContactsComputeNotificationCategoriesEnumBilling,
        },
        OauthToken: sdk.String("deserunt"),
        PageSize: sdk.Int64(384382),
        PageToken: sdk.String("iure"),
        Parent: "magnam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.EssentialcontactsProjectsContactsComputeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudEssentialcontactsV1ComputeContactsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [EssentialcontactsProjectsContactsCompute](docs/projects/README.md#essentialcontactsprojectscontactscompute) - Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.
* [EssentialcontactsProjectsContactsCreate](docs/projects/README.md#essentialcontactsprojectscontactscreate) - Adds a new contact for a resource.
* [EssentialcontactsProjectsContactsDelete](docs/projects/README.md#essentialcontactsprojectscontactsdelete) - Deletes a contact.
* [EssentialcontactsProjectsContactsGet](docs/projects/README.md#essentialcontactsprojectscontactsget) - Gets a single contact.
* [EssentialcontactsProjectsContactsList](docs/projects/README.md#essentialcontactsprojectscontactslist) - Lists the contacts that have been set on a resource.
* [EssentialcontactsProjectsContactsPatch](docs/projects/README.md#essentialcontactsprojectscontactspatch) - Updates a contact. Note: A contact's email address cannot be changed.
* [EssentialcontactsProjectsContactsSendTestMessage](docs/projects/README.md#essentialcontactsprojectscontactssendtestmessage) - Allows a contact admin to send a test message to contact to verify that it has been configured correctly.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
