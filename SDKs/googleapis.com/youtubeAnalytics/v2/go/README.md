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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.YoutubeAnalyticsGroupItemsDeleteRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        ID: "nulla",
        Key: "corrupti",
        OauthToken: "illum",
        OnBehalfOfContentOwner: "vel",
        PrettyPrint: false,
        QuotaUser: "error",
        UploadType: "deserunt",
        UploadProtocol: "suscipit",
    }

    ctx := context.Background()
    res, err := s.GroupItems.YoutubeAnalyticsGroupItemsDelete(ctx, req, operations.YoutubeAnalyticsGroupItemsDeleteSecurity{
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


### GroupItems

* `YoutubeAnalyticsGroupItemsDelete` - Removes an item from a group.
* `YoutubeAnalyticsGroupItemsInsert` - Creates a group item.
* `YoutubeAnalyticsGroupItemsList` - Returns a collection of group items that match the API request parameters.

### Groups

* `YoutubeAnalyticsGroupsDelete` - Deletes a group.
* `YoutubeAnalyticsGroupsInsert` - Creates a group.
* `YoutubeAnalyticsGroupsList` - Returns a collection of groups that match the API request parameters. For example, you can retrieve all groups that the authenticated user owns, or you can retrieve one or more groups by their unique IDs.
* `YoutubeAnalyticsGroupsUpdate` - Modifies a group. For example, you could change a group's title.

### Reports

* `YoutubeAnalyticsReportsQuery` - Retrieve your YouTube Analytics reports.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
