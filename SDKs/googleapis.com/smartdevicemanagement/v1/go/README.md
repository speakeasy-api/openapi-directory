# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/smartdevicemanagement/v1/go
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

    req := operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest{
        DollarXgafv: "2",
        GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest: &shared.GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest{
            Command: "provident",
            Params: map[string]interface{}{
                "quibusdam": "unde",
                "nulla": "corrupti",
                "illum": "vel",
            },
        },
        AccessToken: "error",
        Alt: "media",
        Callback: "suscipit",
        Fields: "iure",
        Key: "magnam",
        Name: "debitis",
        OauthToken: "ipsa",
        PrettyPrint: false,
        QuotaUser: "delectus",
        UploadType: "tempora",
        UploadProtocol: "suscipit",
    }

    ctx := context.Background()
    res, err := s.Enterprises.SmartdevicemanagementEnterprisesDevicesExecuteCommand(ctx, req, operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Enterprises

* `SmartdevicemanagementEnterprisesDevicesExecuteCommand` - Executes a command to device managed by the enterprise.
* `SmartdevicemanagementEnterprisesDevicesList` - Lists devices managed by the enterprise.
* `SmartdevicemanagementEnterprisesStructuresList` - Lists structures managed by the enterprise.
* `SmartdevicemanagementEnterprisesStructuresRoomsGet` - Gets a room managed by the enterprise.
* `SmartdevicemanagementEnterprisesStructuresRoomsList` - Lists rooms managed by the enterprise.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
