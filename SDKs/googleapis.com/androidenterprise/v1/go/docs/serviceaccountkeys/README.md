# Serviceaccountkeys

### Available Operations

* [AndroidenterpriseServiceaccountkeysDelete](#androidenterpriseserviceaccountkeysdelete) - Removes and invalidates the specified credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.
* [AndroidenterpriseServiceaccountkeysInsert](#androidenterpriseserviceaccountkeysinsert) - Generates new credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount. Only the type of the key should be populated in the resource to be inserted.
* [AndroidenterpriseServiceaccountkeysList](#androidenterpriseserviceaccountkeyslist) - Lists all active credentials for the service account associated with this enterprise. Only the ID and key type are returned. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.

## AndroidenterpriseServiceaccountkeysDelete

Removes and invalidates the specified credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.

### Example Usage

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
    res, err := s.Serviceaccountkeys.AndroidenterpriseServiceaccountkeysDelete(ctx, operations.AndroidenterpriseServiceaccountkeysDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("error"),
        EnterpriseID: "hic",
        Fields: sdk.String("expedita"),
        Key: sdk.String("debitis"),
        KeyID: "neque",
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nostrum"),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.AndroidenterpriseServiceaccountkeysDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AndroidenterpriseServiceaccountkeysInsert

Generates new credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount. Only the type of the key should be populated in the resource to be inserted.

### Example Usage

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
    res, err := s.Serviceaccountkeys.AndroidenterpriseServiceaccountkeysInsert(ctx, operations.AndroidenterpriseServiceaccountkeysInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ServiceAccountKey: &shared.ServiceAccountKey{
            Data: sdk.String("accusamus"),
            ID: sdk.String("4824d0ab-4075-4088-a518-62065e904f3b"),
            PublicData: sdk.String("dicta"),
            Type: shared.ServiceAccountKeyTypeEnumGoogleCredentials.ToPointer(),
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quidem"),
        EnterpriseID: "atque",
        Fields: sdk.String("laborum"),
        Key: sdk.String("nam"),
        OauthToken: sdk.String("tenetur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laboriosam"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("amet"),
    }, operations.AndroidenterpriseServiceaccountkeysInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceAccountKey != nil {
        // handle response
    }
}
```

## AndroidenterpriseServiceaccountkeysList

Lists all active credentials for the service account associated with this enterprise. Only the ID and key type are returned. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.

### Example Usage

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
    res, err := s.Serviceaccountkeys.AndroidenterpriseServiceaccountkeysList(ctx, operations.AndroidenterpriseServiceaccountkeysListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("reiciendis"),
        EnterpriseID: "provident",
        Fields: sdk.String("repellendus"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("voluptates"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("est"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.AndroidenterpriseServiceaccountkeysListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceAccountKeysListResponse != nil {
        // handle response
    }
}
```
