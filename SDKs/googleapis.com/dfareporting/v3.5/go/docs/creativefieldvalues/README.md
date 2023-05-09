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
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("veniam"),
        CreativeFieldID: "aperiam",
        Fields: sdk.String("consectetur"),
        ID: "f6c39bcd-0a62-490f-957f-385189ad7ef8",
        Key: sdk.String("aperiam"),
        OauthToken: sdk.String("reprehenderit"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "animi",
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("eveniet"),
        UploadProtocol: sdk.String("quae"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("adipisci"),
        CreativeFieldID: "optio",
        Fields: sdk.String("similique"),
        ID: "79fb9de4-032b-4a26-bd36-8ba9216bcb41",
        Key: sdk.String("nostrum"),
        OauthToken: sdk.String("molestias"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "neque",
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("optio"),
        UploadProtocol: sdk.String("esse"),
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
            ID: sdk.String("autem"),
            Kind: sdk.String("tempora"),
            Value: sdk.String("beatae"),
        },
        AccessToken: sdk.String("dignissimos"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ratione"),
        CreativeFieldID: "veritatis",
        Fields: sdk.String("amet"),
        Key: sdk.String("sequi"),
        OauthToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "fugiat",
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("sit"),
        UploadProtocol: sdk.String("modi"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("rerum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nemo"),
        CreativeFieldID: "architecto",
        Fields: sdk.String("vel"),
        Ids: []string{
            "facilis",
        },
        Key: sdk.String("libero"),
        MaxResults: sdk.Int64(805458),
        OauthToken: sdk.String("deserunt"),
        PageToken: sdk.String("eius"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "molestias",
        QuotaUser: sdk.String("dolores"),
        SearchString: sdk.String("dolores"),
        SortField: operations.DfareportingCreativeFieldValuesListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingCreativeFieldValuesListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("odit"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CreativeFieldValue: &shared.CreativeFieldValue{
            ID: sdk.String("aspernatur"),
            Kind: sdk.String("magni"),
            Value: sdk.String("minus"),
        },
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sequi"),
        CreativeFieldID: "quaerat",
        Fields: sdk.String("accusantium"),
        ID: "495c5dbb-3c57-4c1e-8981-e8aa257ddc19",
        Key: sdk.String("inventore"),
        OauthToken: sdk.String("fugit"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "earum",
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("at"),
        UploadProtocol: sdk.String("debitis"),
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
            ID: sdk.String("non"),
            Kind: sdk.String("nam"),
            Value: sdk.String("sapiente"),
        },
        AccessToken: sdk.String("porro"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("veniam"),
        CreativeFieldID: "magnam",
        Fields: sdk.String("iure"),
        Key: sdk.String("natus"),
        OauthToken: sdk.String("nulla"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quaerat",
        QuotaUser: sdk.String("aut"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("quis"),
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
