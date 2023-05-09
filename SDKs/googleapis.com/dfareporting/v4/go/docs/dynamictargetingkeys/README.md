# DynamicTargetingKeys

### Available Operations

* [DfareportingDynamicTargetingKeysDelete](#dfareportingdynamictargetingkeysdelete) - Deletes an existing dynamic targeting key.
* [DfareportingDynamicTargetingKeysInsert](#dfareportingdynamictargetingkeysinsert) - Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement.
* [DfareportingDynamicTargetingKeysList](#dfareportingdynamictargetingkeyslist) - Retrieves a list of dynamic targeting keys.

## DfareportingDynamicTargetingKeysDelete

Deletes an existing dynamic targeting key.

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
    res, err := s.DynamicTargetingKeys.DfareportingDynamicTargetingKeysDelete(ctx, operations.DfareportingDynamicTargetingKeysDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cumque"),
        Fields: sdk.String("blanditiis"),
        Key: sdk.String("animi"),
        Name: "Rufus Wunsch",
        OauthToken: sdk.String("voluptate"),
        ObjectID: "nostrum",
        ObjectType: operations.DfareportingDynamicTargetingKeysDeleteObjectTypeEnumObjectAd,
        PrettyPrint: sdk.Bool(false),
        ProfileID: "enim",
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("quaerat"),
    }, operations.DfareportingDynamicTargetingKeysDeleteSecurity{
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

## DfareportingDynamicTargetingKeysInsert

Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement.

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
    res, err := s.DynamicTargetingKeys.DfareportingDynamicTargetingKeysInsert(ctx, operations.DfareportingDynamicTargetingKeysInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DynamicTargetingKey: &shared.DynamicTargetingKey{
            Kind: sdk.String("aperiam"),
            Name: sdk.String("Franklin Johns"),
            ObjectID: sdk.String("facilis"),
            ObjectType: shared.DynamicTargetingKeyObjectTypeEnumObjectAd.ToPointer(),
        },
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("inventore"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("temporibus"),
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ipsa",
        QuotaUser: sdk.String("vitae"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("adipisci"),
    }, operations.DfareportingDynamicTargetingKeysInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DynamicTargetingKey != nil {
        // handle response
    }
}
```

## DfareportingDynamicTargetingKeysList

Retrieves a list of dynamic targeting keys.

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
    res, err := s.DynamicTargetingKeys.DfareportingDynamicTargetingKeysList(ctx, operations.DfareportingDynamicTargetingKeysListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("unde"),
        AdvertiserID: sdk.String("beatae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quas"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("voluptate"),
        Names: []string{
            "quod",
            "ea",
            "error",
        },
        OauthToken: sdk.String("at"),
        ObjectID: sdk.String("incidunt"),
        ObjectType: operations.DfareportingDynamicTargetingKeysListObjectTypeEnumObjectAd.ToPointer(),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "alias",
        QuotaUser: sdk.String("est"),
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("dignissimos"),
    }, operations.DfareportingDynamicTargetingKeysListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DynamicTargetingKeysListResponse != nil {
        // handle response
    }
}
```
