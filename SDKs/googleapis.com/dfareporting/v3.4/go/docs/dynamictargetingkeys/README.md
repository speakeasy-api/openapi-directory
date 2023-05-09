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
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("rerum"),
        Fields: sdk.String("beatae"),
        Key: sdk.String("fuga"),
        Name: "Leona Vandervort",
        OauthToken: sdk.String("cupiditate"),
        ObjectID: "est",
        ObjectType: operations.DfareportingDynamicTargetingKeysDeleteObjectTypeEnumObjectCreative,
        PrettyPrint: sdk.Bool(false),
        ProfileID: "pariatur",
        QuotaUser: sdk.String("quaerat"),
        UploadType: sdk.String("itaque"),
        UploadProtocol: sdk.String("itaque"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DynamicTargetingKey: &shared.DynamicTargetingKey{
            Kind: sdk.String("totam"),
            Name: sdk.String("Alma Hickle"),
            ObjectID: sdk.String("fugit"),
            ObjectType: shared.DynamicTargetingKeyObjectTypeEnumObjectPlacement.ToPointer(),
        },
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aliquam"),
        Fields: sdk.String("optio"),
        Key: sdk.String("laudantium"),
        OauthToken: sdk.String("quas"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quidem",
        QuotaUser: sdk.String("voluptates"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("hic"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nihil"),
        AdvertiserID: sdk.String("quas"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fugiat"),
        Fields: sdk.String("unde"),
        Key: sdk.String("autem"),
        Names: []string{
            "molestiae",
            "accusamus",
        },
        OauthToken: sdk.String("labore"),
        ObjectID: sdk.String("autem"),
        ObjectType: operations.DfareportingDynamicTargetingKeysListObjectTypeEnumObjectPlacement.ToPointer(),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "corporis",
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("possimus"),
        UploadProtocol: sdk.String("dolores"),
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
