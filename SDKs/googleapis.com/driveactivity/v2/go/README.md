# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/driveactivity/v2/go
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

    req := operations.DriveactivityActivityQueryRequest{
        DollarXgafv: "2",
        QueryDriveActivityRequest: &shared.QueryDriveActivityRequest{
            AncestorName: "provident",
            ConsolidationStrategy: &shared.ConsolidationStrategy{
                Legacy: map[string]interface{}{
                    "quibusdam": "unde",
                    "nulla": "corrupti",
                    "illum": "vel",
                },
                None: map[string]interface{}{
                    "deserunt": "suscipit",
                    "iure": "magnam",
                    "debitis": "ipsa",
                },
            },
            Filter: "delectus",
            ItemName: "tempora",
            PageSize: 383441,
            PageToken: "molestiae",
        },
        AccessToken: "minus",
        Alt: "proto",
        Callback: "voluptatum",
        Fields: "iusto",
        Key: "excepturi",
        OauthToken: "nisi",
        PrettyPrint: false,
        QuotaUser: "recusandae",
        UploadType: "temporibus",
        UploadProtocol: "ab",
    }

    ctx := context.Background()
    res, err := s.Activity.DriveactivityActivityQuery(ctx, req, operations.DriveactivityActivityQuerySecurity{
        Option1: &operations.DriveactivityActivityQuerySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryDriveActivityResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Activity

* `DriveactivityActivityQuery` - Query past activity in Google Drive.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
