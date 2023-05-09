<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CreateDeployedDevicesCertificate(ctx, operations.CreateDeployedDevicesCertificateRequest{
        FleetSid: "corrupti",
        RequestBody: &operations.CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest{
            CertificateData: "provident",
            DeviceSid: sdk.String("distinctio"),
            FriendlyName: sdk.String("quibusdam"),
        },
    }, operations.CreateDeployedDevicesCertificateSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewDeployedDevicesFleetCertificate != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->