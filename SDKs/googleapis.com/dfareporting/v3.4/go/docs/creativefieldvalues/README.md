# CreativeFieldValues

### Available Operations

* [DfareportingCreativeFieldValuesDelete](#dfareportingcreativefieldvaluesdelete) - Deletes an existing creative field value.
* [DfareportingCreativeFieldValuesGet](#dfareportingcreativefieldvaluesget) - Gets one creative field value by ID.
* [DfareportingCreativeFieldValuesInsert](#dfareportingcreativefieldvaluesinsert) - Inserts a new creative field value.
* [DfareportingCreativeFieldValuesList](#dfareportingcreativefieldvalueslist) - Retrieves a list of creative field values, possibly filtered. This method supports paging.
* [DfareportingCreativeFieldValuesPatch](#dfareportingcreativefieldvaluespatch) - Updates an existing creative field value. This method supports patch semantics.
* [DfareportingCreativeFieldValuesUpdate](#dfareportingcreativefieldvaluesupdate) - Updates an existing creative field value.

## DfareportingCreativeFieldValuesDelete

Deletes an existing creative field value.

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
    res, err := s.CreativeFieldValues.DfareportingCreativeFieldValuesDelete(ctx, operations.DfareportingCreativeFieldValuesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("officia"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quibusdam"),
        CreativeFieldID: "autem",
        Fields: sdk.String("voluptates"),
        ID: "b9434645-d030-484f-bba5-cceff5cb01fe",
        Key: sdk.String("enim"),
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "accusamus",
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("atque"),
    }, operations.DfareportingCreativeFieldValuesDeleteSecurity{
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

## DfareportingCreativeFieldValuesGet

Gets one creative field value by ID.

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
    res, err := s.CreativeFieldValues.DfareportingCreativeFieldValuesGet(ctx, operations.DfareportingCreativeFieldValuesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("eius"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("mollitia"),
        CreativeFieldID: "minus",
        Fields: sdk.String("quos"),
        ID: "2b85f8bc-2cab-4a8d-a412-7dd597ff4711",
        Key: sdk.String("similique"),
        OauthToken: sdk.String("id"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "et",
        QuotaUser: sdk.String("distinctio"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("nihil"),
    }, operations.DfareportingCreativeFieldValuesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreativeFieldValue != nil {
        // handle response
    }
}
```

## DfareportingCreativeFieldValuesInsert

Inserts a new creative field value.

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
    res, err := s.CreativeFieldValues.DfareportingCreativeFieldValuesInsert(ctx, operations.DfareportingCreativeFieldValuesInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CreativeFieldValue: &shared.CreativeFieldValue{
            ID: sdk.String("rerum"),
            Kind: sdk.String("atque"),
            Value: sdk.String("aliquid"),
        },
        AccessToken: sdk.String("placeat"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quisquam"),
        CreativeFieldID: "impedit",
        Fields: sdk.String("ducimus"),
        Key: sdk.String("incidunt"),
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nihil",
        QuotaUser: sdk.String("ducimus"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("incidunt"),
    }, operations.DfareportingCreativeFieldValuesInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreativeFieldValue != nil {
        // handle response
    }
}
```

## DfareportingCreativeFieldValuesList

Retrieves a list of creative field values, possibly filtered. This method supports paging.

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
    res, err := s.CreativeFieldValues.DfareportingCreativeFieldValuesList(ctx, operations.DfareportingCreativeFieldValuesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aliquam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("soluta"),
        CreativeFieldID: "quibusdam",
        Fields: sdk.String("iure"),
        Ids: []string{
            "autem",
            "hic",
            "perferendis",
        },
        Key: sdk.String("tempora"),
        MaxResults: sdk.Int64(305278),
        OauthToken: sdk.String("architecto"),
        PageToken: sdk.String("nulla"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "qui",
        QuotaUser: sdk.String("maxime"),
        SearchString: sdk.String("ratione"),
        SortField: operations.DfareportingCreativeFieldValuesListSortFieldEnumValue.ToPointer(),
        SortOrder: operations.DfareportingCreativeFieldValuesListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("sit"),
        UploadProtocol: sdk.String("laudantium"),
    }, operations.DfareportingCreativeFieldValuesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreativeFieldValuesListResponse != nil {
        // handle response
    }
}
```

## DfareportingCreativeFieldValuesPatch

Updates an existing creative field value. This method supports patch semantics.

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
    res, err := s.CreativeFieldValues.DfareportingCreativeFieldValuesPatch(ctx, operations.DfareportingCreativeFieldValuesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CreativeFieldValue: &shared.CreativeFieldValue{
            ID: sdk.String("perspiciatis"),
            Kind: sdk.String("quaerat"),
            Value: sdk.String("nesciunt"),
        },
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eveniet"),
        CreativeFieldID: "ipsa",
        Fields: sdk.String("laboriosam"),
        ID: "0459bebb-ad02-4f25-86bc-f152558daa95",
        Key: sdk.String("nam"),
        OauthToken: sdk.String("itaque"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "suscipit",
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("nulla"),
        UploadProtocol: sdk.String("consequatur"),
    }, operations.DfareportingCreativeFieldValuesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreativeFieldValue != nil {
        // handle response
    }
}
```

## DfareportingCreativeFieldValuesUpdate

Updates an existing creative field value.

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
    res, err := s.CreativeFieldValues.DfareportingCreativeFieldValuesUpdate(ctx, operations.DfareportingCreativeFieldValuesUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CreativeFieldValue: &shared.CreativeFieldValue{
            ID: sdk.String("in"),
            Kind: sdk.String("enim"),
            Value: sdk.String("vel"),
        },
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        CreativeFieldID: "ut",
        Fields: sdk.String("est"),
        Key: sdk.String("fuga"),
        OauthToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "adipisci",
        QuotaUser: sdk.String("ratione"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.DfareportingCreativeFieldValuesUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreativeFieldValue != nil {
        // handle response
    }
}
```
