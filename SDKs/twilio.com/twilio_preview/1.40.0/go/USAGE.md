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
        Security: operations.CreateDeployedDevicesCertificateSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.CreateDeployedDevicesCertificatePathParams{
            FleetSid: "corrupti",
        },
        Request: &operations.CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest{
            CertificateData: "provident",
            DeviceSid: "distinctio",
            FriendlyName: "quibusdam",
        },
    }

    ctx := context.Background()
    res, err := s.CreateDeployedDevicesCertificate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewDeployedDevicesFleetCertificate != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->