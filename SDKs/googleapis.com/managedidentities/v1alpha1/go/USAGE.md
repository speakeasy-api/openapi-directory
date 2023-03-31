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
        AttachTrustRequest: &shared.AttachTrustRequest{
            Trust: &shared.Trust{
                CreateTime: "provident",
                LastKnownTrustConnectedHeartbeatTime: "distinctio",
                SelectiveAuthentication: false,
                State: "DISCONNECTED",
                StateDescription: "unde",
                TargetDNSIPAddresses: []string{
                    "corrupti",
                    "illum",
                    "vel",
                    "error",
                },
                TargetDomainName: "deserunt",
                TrustDirection: "INBOUND",
                TrustHandshakeSecret: "iure",
                TrustType: "TRUST_TYPE_UNSPECIFIED",
                UpdateTime: "debitis",
            },
        },
        AccessToken: "ipsa",
        Alt: "proto",
        Callback: "tempora",
        Fields: "suscipit",
        Key: "molestiae",
        Name: "minus",
        OauthToken: "placeat",
        PrettyPrint: false,
        QuotaUser: "voluptatum",
        UploadType: "iusto",
        UploadProtocol: "excepturi",
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