# CreativeFields

### Available Operations

* [DfareportingCreativeFieldsDelete](#dfareportingcreativefieldsdelete) - Deletes an existing creative field.
* [DfareportingCreativeFieldsGet](#dfareportingcreativefieldsget) - Gets one creative field by ID.
* [DfareportingCreativeFieldsInsert](#dfareportingcreativefieldsinsert) - Inserts a new creative field.
* [DfareportingCreativeFieldsList](#dfareportingcreativefieldslist) - Retrieves a list of creative fields, possibly filtered. This method supports paging.
* [DfareportingCreativeFieldsPatch](#dfareportingcreativefieldspatch) - Updates an existing creative field. This method supports patch semantics.
* [DfareportingCreativeFieldsUpdate](#dfareportingcreativefieldsupdate) - Updates an existing creative field.

## DfareportingCreativeFieldsDelete

Deletes an existing creative field.

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
    res, err := s.CreativeFields.DfareportingCreativeFieldsDelete(ctx, operations.DfareportingCreativeFieldsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aut"),
        Fields: sdk.String("recusandae"),
        ID: "f42bd3c9-f1cc-4503-b6c3-9bcd0a6290f9",
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("quam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "reiciendis",
        QuotaUser: sdk.String("nesciunt"),
        UploadType: sdk.String("laudantium"),
        UploadProtocol: sdk.String("nemo"),
    }, operations.DfareportingCreativeFieldsDeleteSecurity{
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

## DfareportingCreativeFieldsGet

Gets one creative field by ID.

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
    res, err := s.CreativeFields.DfareportingCreativeFieldsGet(ctx, operations.DfareportingCreativeFieldsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("atque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("culpa"),
        Fields: sdk.String("possimus"),
        ID: "7ef807aa-e03f-433c-a79f-b9de4032ba26",
        Key: sdk.String("a"),
        OauthToken: sdk.String("temporibus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "sequi",
        QuotaUser: sdk.String("eum"),
        UploadType: sdk.String("rem"),
        UploadProtocol: sdk.String("expedita"),
    }, operations.DfareportingCreativeFieldsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreativeField != nil {
        // handle response
    }
}
```

## DfareportingCreativeFieldsInsert

Inserts a new creative field.

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
    res, err := s.CreativeFields.DfareportingCreativeFieldsInsert(ctx, operations.DfareportingCreativeFieldsInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CreativeField: &shared.CreativeField{
            AccountID: sdk.String("excepturi"),
            AdvertiserID: sdk.String("dolores"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("dicta"),
                Etag: sdk.String("laboriosam"),
                ID: sdk.String("bcb41583-5c73-4641-b231-33edc046bc51"),
                Kind: sdk.String("vel"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("facilis"),
            },
            ID: sdk.String("libero"),
            Kind: sdk.String("maxime"),
            Name: sdk.String("Ray Maggio"),
            SubaccountID: sdk.String("reprehenderit"),
        },
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("odit"),
        Fields: sdk.String("maxime"),
        Key: sdk.String("aspernatur"),
        OauthToken: sdk.String("magni"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "minus",
        QuotaUser: sdk.String("minima"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("sequi"),
    }, operations.DfareportingCreativeFieldsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreativeField != nil {
        // handle response
    }
}
```

## DfareportingCreativeFieldsList

Retrieves a list of creative fields, possibly filtered. This method supports paging.

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
    res, err := s.CreativeFields.DfareportingCreativeFieldsList(ctx, operations.DfareportingCreativeFieldsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("accusantium"),
        AdvertiserIds: []string{
            "cupiditate",
            "minima",
        },
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("facere"),
        Ids: []string{
            "harum",
            "adipisci",
            "optio",
        },
        Key: sdk.String("minima"),
        MaxResults: sdk.Int64(443565),
        OauthToken: sdk.String("quo"),
        PageToken: sdk.String("vitae"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "voluptates",
        QuotaUser: sdk.String("tempora"),
        SearchString: sdk.String("iste"),
        SortField: operations.DfareportingCreativeFieldsListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingCreativeFieldsListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("itaque"),
        UploadProtocol: sdk.String("atque"),
    }, operations.DfareportingCreativeFieldsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreativeFieldsListResponse != nil {
        // handle response
    }
}
```

## DfareportingCreativeFieldsPatch

Updates an existing creative field. This method supports patch semantics.

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
    res, err := s.CreativeFields.DfareportingCreativeFieldsPatch(ctx, operations.DfareportingCreativeFieldsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CreativeField: &shared.CreativeField{
            AccountID: sdk.String("similique"),
            AdvertiserID: sdk.String("qui"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("enim"),
                Etag: sdk.String("quam"),
                ID: sdk.String("ddc1912e-bde6-44bf-8c54-69d4015dfa79"),
                Kind: sdk.String("ex"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("voluptatem"),
            },
            ID: sdk.String("voluptas"),
            Kind: sdk.String("libero"),
            Name: sdk.String("Terrell Cruickshank MD"),
            SubaccountID: sdk.String("ratione"),
        },
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quia"),
        Fields: sdk.String("porro"),
        ID: "1aa010e9-aac2-4e91-b558-6d18f9f97a4b",
        Key: sdk.String("sapiente"),
        OauthToken: sdk.String("fuga"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "facere",
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("asperiores"),
    }, operations.DfareportingCreativeFieldsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreativeField != nil {
        // handle response
    }
}
```

## DfareportingCreativeFieldsUpdate

Updates an existing creative field.

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
    res, err := s.CreativeFields.DfareportingCreativeFieldsUpdate(ctx, operations.DfareportingCreativeFieldsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CreativeField: &shared.CreativeField{
            AccountID: sdk.String("fugiat"),
            AdvertiserID: sdk.String("ea"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("molestiae"),
                Etag: sdk.String("quo"),
                ID: sdk.String("a84ad99b-41d6-4124-b531-870cf68b03ad"),
                Kind: sdk.String("modi"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("beatae"),
            },
            ID: sdk.String("rerum"),
            Kind: sdk.String("repellendus"),
            Name: sdk.String("Dr. Emily Schumm DDS"),
            SubaccountID: sdk.String("libero"),
        },
        AccessToken: sdk.String("eaque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("doloremque"),
        Fields: sdk.String("consequatur"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "earum",
        QuotaUser: sdk.String("facilis"),
        UploadType: sdk.String("eos"),
        UploadProtocol: sdk.String("sed"),
    }, operations.DfareportingCreativeFieldsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreativeField != nil {
        // handle response
    }
}
```
