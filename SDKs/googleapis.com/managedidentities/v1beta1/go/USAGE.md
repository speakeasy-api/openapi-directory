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

    req := operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest{
        DollarXgafv: "2",
        AttachTrustRequestInput: &shared.AttachTrustRequestInput{
            Trust: &shared.TrustInput{
                SelectiveAuthentication: false,
                TargetDNSIPAddresses: []string{
                    "distinctio",
                    "quibusdam",
                    "unde",
                },
                TargetDomainName: "nulla",
                TrustDirection: "OUTBOUND",
                TrustHandshakeSecret: "illum",
                TrustType: "FOREST",
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
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrust(ctx, req, operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->