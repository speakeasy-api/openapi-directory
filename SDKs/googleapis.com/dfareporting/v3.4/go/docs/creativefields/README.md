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
        AccessToken: sdk.String("officiis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("ex"),
        ID: "3c5208c2-3e98-402d-82f0-d45eb4a8b674",
        Key: sdk.String("repudiandae"),
        OauthToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ipsam",
        QuotaUser: sdk.String("quisquam"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("optio"),
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
        AccessToken: sdk.String("rem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("assumenda"),
        Fields: sdk.String("optio"),
        ID: "7f787e32-e04b-43d3-ad0c-5670ef42bd3c",
        Key: sdk.String("iste"),
        OauthToken: sdk.String("earum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "vitae",
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("eligendi"),
        UploadProtocol: sdk.String("veniam"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CreativeField: &shared.CreativeField{
            AccountID: sdk.String("consectetur"),
            AdvertiserID: sdk.String("repellat"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("voluptas"),
                Etag: sdk.String("quod"),
                ID: sdk.String("39bcd0a6-290f-4957-b385-189ad7ef807a"),
                Kind: sdk.String("officia"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("quae"),
            },
            ID: sdk.String("adipisci"),
            Kind: sdk.String("hic"),
            Name: sdk.String("Sylvia Ruecker"),
            SubaccountID: sdk.String("unde"),
        },
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("fugiat"),
        Key: sdk.String("recusandae"),
        OauthToken: sdk.String("non"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "aut",
        QuotaUser: sdk.String("neque"),
        UploadType: sdk.String("quia"),
        UploadProtocol: sdk.String("soluta"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("qui"),
        AdvertiserIds: []string{
            "a",
            "temporibus",
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eum"),
        Fields: sdk.String("rem"),
        Ids: []string{
            "animi",
            "excepturi",
            "dolores",
        },
        Key: sdk.String("dicta"),
        MaxResults: sdk.Int64(385943),
        OauthToken: sdk.String("distinctio"),
        PageToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "facilis",
        QuotaUser: sdk.String("magnam"),
        SearchString: sdk.String("dicta"),
        SortField: operations.DfareportingCreativeFieldsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingCreativeFieldsListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("neque"),
        UploadProtocol: sdk.String("quis"),
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
            AccountID: sdk.String("esse"),
            AdvertiserID: sdk.String("adipisci"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("autem"),
                Etag: sdk.String("tempora"),
                ID: sdk.String("1723133e-dc04-46bc-9163-bbca49227c42"),
                Kind: sdk.String("maxime"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("magni"),
            },
            ID: sdk.String("minus"),
            Kind: sdk.String("minima"),
            Name: sdk.String("Mrs. Annie Hahn"),
            SubaccountID: sdk.String("minima"),
        },
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("facere"),
        Fields: sdk.String("quidem"),
        ID: "b3c57c1e-4981-4e8a-a257-ddc1912ebde6",
        Key: sdk.String("non"),
        OauthToken: sdk.String("nam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "sapiente",
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("veniam"),
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
            AccountID: sdk.String("iure"),
            AdvertiserID: sdk.String("natus"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("nulla"),
                Etag: sdk.String("quaerat"),
                ID: sdk.String("015dfa79-6206-4bef-ab0a-3e42c1aa010e"),
                Kind: sdk.String("excepturi"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("culpa"),
            },
            ID: sdk.String("quo"),
            Kind: sdk.String("sunt"),
            Name: sdk.String("Jackie Boehm"),
            SubaccountID: sdk.String("quis"),
        },
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("fugiat"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("quas"),
        OauthToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "sint",
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("reprehenderit"),
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
