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
        AccessToken: sdk.String("sunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nulla"),
        Fields: sdk.String("architecto"),
        Key: sdk.String("accusantium"),
        Name: "Carl VonRueden",
        OauthToken: sdk.String("laboriosam"),
        ObjectID: "neque",
        ObjectType: operations.DfareportingDynamicTargetingKeysDeleteObjectTypeEnumObjectAdvertiser,
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quisquam",
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("quisquam"),
        UploadProtocol: sdk.String("aperiam"),
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
            Kind: sdk.String("aut"),
            Name: sdk.String("Daryl Kuphal"),
            ObjectID: sdk.String("error"),
            ObjectType: shared.DynamicTargetingKeyObjectTypeEnumObjectPlacement.ToPointer(),
        },
        AccessToken: sdk.String("veniam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("nemo"),
        Key: sdk.String("doloribus"),
        OauthToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "non",
        QuotaUser: sdk.String("repudiandae"),
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("tempore"),
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
        AccessToken: sdk.String("deserunt"),
        AdvertiserID: sdk.String("non"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("quia"),
        Key: sdk.String("ullam"),
        Names: []string{
            "maxime",
        },
        OauthToken: sdk.String("amet"),
        ObjectID: sdk.String("ipsa"),
        ObjectType: operations.DfareportingDynamicTargetingKeysListObjectTypeEnumObjectAdvertiser.ToPointer(),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ullam",
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("ab"),
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
