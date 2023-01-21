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
            Name: "sit",
        },
        QueryParams: operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.AttachTrustRequestInput{
            Trust: &shared.TrustInput{
                SelectiveAuthentication: false,
                TargetDNSIPAddresses: []string{
                    "voluptatum",
                },
                TargetDomainName: "et",
                TrustDirection: "BIDIRECTIONAL",
                TrustHandshakeSecret: "dolorem",
                TrustType: "FOREST",
            },
        },
    }
    
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrust(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->