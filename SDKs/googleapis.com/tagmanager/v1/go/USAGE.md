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
    res, err := s.Accounts.TagmanagerAccountsContainersCreate(ctx, operations.TagmanagerAccountsContainersCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Container: &shared.Container{
            AccountID: sdk.String("provident"),
            ContainerID: sdk.String("distinctio"),
            DomainName: []string{
                "unde",
                "nulla",
                "corrupti",
                "illum",
            },
            EnabledBuiltInVariable: []shared.ContainerEnabledBuiltInVariableEnum{
                shared.ContainerEnabledBuiltInVariableEnumAmpGtmEvent,
                shared.ContainerEnabledBuiltInVariableEnumFirebaseEventParameterCampaign,
            },
            Fingerprint: sdk.String("suscipit"),
            Name: sdk.String("Dr. Valerie Toy"),
            Notes: sdk.String("suscipit"),
            PublicID: sdk.String("molestiae"),
            TimeZoneCountryID: sdk.String("minus"),
            TimeZoneID: sdk.String("placeat"),
            UsageContext: []shared.ContainerUsageContextEnum{
                shared.ContainerUsageContextEnumIos,
                shared.ContainerUsageContextEnumAndroidSdk5,
                shared.ContainerUsageContextEnumIos,
            },
        },
        AccessToken: sdk.String("recusandae"),
        AccountID: "temporibus",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("repellendus"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.TagmanagerAccountsContainersCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Container != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->