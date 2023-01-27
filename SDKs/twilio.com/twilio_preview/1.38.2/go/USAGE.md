<!-- Start SDK Example Usage -->
```go
package main

import (
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
            FleetSid: "sit",
        },
        Request: &operations.CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest{
            CertificateData: "voluptas",
            DeviceSid: "culpa",
            FriendlyName: "expedita",
        },
    }
    
    res, err := s.CreateDeployedDevicesCertificate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewDeployedDevicesFleetCertificate != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->