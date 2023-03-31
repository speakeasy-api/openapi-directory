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

    req := operations.CreateDeployedDevicesCertificateRequest{
        FleetSid: "corrupti",
        RequestBody: &operations.CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest{
            CertificateData: "provident",
            DeviceSid: "distinctio",
            FriendlyName: "quibusdam",
        },
    }

    ctx := context.Background()
    res, err := s.CreateDeployedDevicesCertificate(ctx, req, operations.CreateDeployedDevicesCertificateSecurity{
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