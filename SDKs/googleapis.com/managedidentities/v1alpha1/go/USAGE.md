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
        Security: operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustPathParams{
            Name: "unde",
        },
        QueryParams: operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.AttachTrustRequest{
            Trust: &shared.Trust{
                CreateTime: "eum",
                LastKnownTrustConnectedHeartbeatTime: "iusto",
                SelectiveAuthentication: false,
                State: "CREATING",
                StateDescription: "saepe",
                TargetDNSIPAddresses: []string{
                    "sapiente",
                },
                TargetDomainName: "enim",
                TrustDirection: "INBOUND",
                TrustHandshakeSecret: "voluptatum",
                TrustType: "EXTERNAL",
                UpdateTime: "vel",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrust(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->