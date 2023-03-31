# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/appsactivity/v1/go
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

    req := operations.AppsactivityActivitiesListRequest{
        Alt: "json",
        DriveAncestorID: "corrupti",
        DriveFileID: "provident",
        Fields: "distinctio",
        GroupingStrategy: "none",
        Key: "unde",
        OauthToken: "nulla",
        PageSize: 544883,
        PageToken: "illum",
        PrettyPrint: false,
        QuotaUser: "vel",
        Source: "error",
        UserID: "deserunt",
        UserIP: "suscipit",
    }

    ctx := context.Background()
    res, err := s.Activities.AppsactivityActivitiesList(ctx, req, operations.AppsactivityActivitiesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListActivitiesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Activities

* `AppsactivityActivitiesList` - Returns a list of activities visible to the current logged in user. Visible activities are determined by the visibility settings of the object that was acted on, e.g. Drive files a user can see. An activity is a record of past events. Multiple events may be merged if they are similar. A request is scoped to activities from a given Google service using the source parameter.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
