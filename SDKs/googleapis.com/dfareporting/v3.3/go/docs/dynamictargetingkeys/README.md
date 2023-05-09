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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("voluptatum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officia"),
        Fields: sdk.String("earum"),
        Key: sdk.String("est"),
        Name: "Luke Torphy",
        OauthToken: sdk.String("neque"),
        ObjectID: "deserunt",
        ObjectType: operations.DfareportingDynamicTargetingKeysDeleteObjectTypeEnumObjectAdvertiser,
        PrettyPrint: sdk.Bool(false),
        ProfileID: "inventore",
        QuotaUser: sdk.String("tempore"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("ducimus"),
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
            Kind: sdk.String("laborum"),
            Name: sdk.String("Bernadette Schimmel"),
            ObjectID: sdk.String("nihil"),
            ObjectType: shared.DynamicTargetingKeyObjectTypeEnumObjectAdvertiser.ToPointer(),
        },
        AccessToken: sdk.String("ex"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("deleniti"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("sed"),
        OauthToken: sdk.String("minus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quisquam",
        QuotaUser: sdk.String("sint"),
        UploadType: sdk.String("voluptates"),
        UploadProtocol: sdk.String("alias"),
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
        AccessToken: sdk.String("in"),
        AdvertiserID: sdk.String("possimus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("assumenda"),
        Fields: sdk.String("neque"),
        Key: sdk.String("dolores"),
        Names: []string{
            "repellat",
        },
        OauthToken: sdk.String("quae"),
        ObjectID: sdk.String("animi"),
        ObjectType: operations.DfareportingDynamicTargetingKeysListObjectTypeEnumObjectCreative.ToPointer(),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "autem",
        QuotaUser: sdk.String("sequi"),
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("nulla"),
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
