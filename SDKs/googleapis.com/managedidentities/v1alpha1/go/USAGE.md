<!-- Start SDK Example Usage -->
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
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrust(ctx, operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AttachTrustRequest: &shared.AttachTrustRequest{
            Trust: &shared.Trust{
                CreateTime: sdk.String("provident"),
                LastKnownTrustConnectedHeartbeatTime: sdk.String("distinctio"),
                SelectiveAuthentication: sdk.Bool(false),
                State: shared.TrustStateEnumDisconnected.ToPointer(),
                StateDescription: sdk.String("unde"),
                TargetDNSIPAddresses: []string{
                    "corrupti",
                    "illum",
                    "vel",
                    "error",
                },
                TargetDomainName: sdk.String("deserunt"),
                TrustDirection: shared.TrustTrustDirectionEnumInbound.ToPointer(),
                TrustHandshakeSecret: sdk.String("iure"),
                TrustType: shared.TrustTrustTypeEnumTrustTypeUnspecified.ToPointer(),
                UpdateTime: sdk.String("debitis"),
            },
        },
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("molestiae"),
        Name: "Irving Lehner",
        OauthToken: sdk.String("nisi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("ab"),
    }, operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustSecurity{
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