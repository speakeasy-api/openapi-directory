# ConnectorPlatformRegions

### Available Operations

* [IntegrationsConnectorPlatformRegionsEnumerate](#integrationsconnectorplatformregionsenumerate) - Enumerates the regions for which Connector Platform is provisioned.

## IntegrationsConnectorPlatformRegionsEnumerate

Enumerates the regions for which Connector Platform is provisioned.

### Example Usage

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
    res, err := s.ConnectorPlatformRegions.IntegrationsConnectorPlatformRegionsEnumerate(ctx, operations.IntegrationsConnectorPlatformRegionsEnumerateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("repellendus"),
        Key: sdk.String("sapiente"),
        OauthToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("at"),
        UploadProtocol: sdk.String("at"),
    }, operations.IntegrationsConnectorPlatformRegionsEnumerateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaEnumerateConnectorPlatformRegionsResponse != nil {
        // handle response
    }
}
```
