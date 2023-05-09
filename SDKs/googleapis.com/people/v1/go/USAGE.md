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
    res, err := s.ContactGroups.PeopleContactGroupsBatchGet(ctx, operations.PeopleContactGroupsBatchGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        GroupFields: sdk.String("nulla"),
        Key: sdk.String("corrupti"),
        MaxMembers: sdk.Int64(847252),
        OauthToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        ResourceNames: []string{
            "suscipit",
            "iure",
            "magnam",
        },
        UploadType: sdk.String("debitis"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.PeopleContactGroupsBatchGetSecurity{
        Option1: &operations.PeopleContactGroupsBatchGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetContactGroupsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->