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
    res, err := s.AgentUsers.HomegraphAgentUsersDelete(ctx, operations.HomegraphAgentUsersDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        AgentUserID: "distinctio",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("unde"),
        Fields: sdk.String("nulla"),
        Key: sdk.String("corrupti"),
        OauthToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        RequestID: sdk.String("error"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.HomegraphAgentUsersDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->