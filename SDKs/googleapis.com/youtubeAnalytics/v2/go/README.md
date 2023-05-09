# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/youtubeAnalytics/v2/go
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
    res, err := s.GroupItems.YoutubeAnalyticsGroupItemsDelete(ctx, operations.YoutubeAnalyticsGroupItemsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        ID: sdk.String("d8d69a67-4e0f-4467-8c87-96ed151a05df"),
        Key: sdk.String("quo"),
        OauthToken: sdk.String("odit"),
        OnBehalfOfContentOwner: sdk.String("at"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.YoutubeAnalyticsGroupItemsDeleteSecurity{
        Option1: &operations.YoutubeAnalyticsGroupItemsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [GroupItems](docs/groupitems/README.md)

* [YoutubeAnalyticsGroupItemsDelete](docs/groupitems/README.md#youtubeanalyticsgroupitemsdelete) - Removes an item from a group.
* [YoutubeAnalyticsGroupItemsInsert](docs/groupitems/README.md#youtubeanalyticsgroupitemsinsert) - Creates a group item.
* [YoutubeAnalyticsGroupItemsList](docs/groupitems/README.md#youtubeanalyticsgroupitemslist) - Returns a collection of group items that match the API request parameters.

### [Groups](docs/groups/README.md)

* [YoutubeAnalyticsGroupsDelete](docs/groups/README.md#youtubeanalyticsgroupsdelete) - Deletes a group.
* [YoutubeAnalyticsGroupsInsert](docs/groups/README.md#youtubeanalyticsgroupsinsert) - Creates a group.
* [YoutubeAnalyticsGroupsList](docs/groups/README.md#youtubeanalyticsgroupslist) - Returns a collection of groups that match the API request parameters. For example, you can retrieve all groups that the authenticated user owns, or you can retrieve one or more groups by their unique IDs.
* [YoutubeAnalyticsGroupsUpdate](docs/groups/README.md#youtubeanalyticsgroupsupdate) - Modifies a group. For example, you could change a group's title.

### [Reports](docs/reports/README.md)

* [YoutubeAnalyticsReportsQuery](docs/reports/README.md#youtubeanalyticsreportsquery) - Retrieve your YouTube Analytics reports.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
