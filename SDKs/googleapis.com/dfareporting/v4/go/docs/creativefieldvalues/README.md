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
        AccessToken: sdk.String("veritatis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nihil"),
        CreativeFieldID: "illum",
        Fields: sdk.String("nulla"),
        ID: "597ff471-1aa1-4bc7-8b86-cecc74f77b48",
        Key: sdk.String("aliquam"),
        OauthToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "soluta",
        QuotaUser: sdk.String("quibusdam"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("mollitia"),
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
        Callback: sdk.String("tempora"),
        CreativeFieldID: "aliquam",
        Fields: sdk.String("architecto"),
        ID: "d2c3b808-0943-473e-8604-59bebbad02f2",
        Key: sdk.String("quis"),
        OauthToken: sdk.String("corrupti"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "iure",
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("a"),
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
            ID: sdk.String("ipsam"),
            Kind: sdk.String("eos"),
            Value: sdk.String("exercitationem"),
        },
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quibusdam"),
        CreativeFieldID: "fuga",
        Fields: sdk.String("fuga"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("corporis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nam",
        QuotaUser: sdk.String("itaque"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("porro"),
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
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("in"),
        CreativeFieldID: "enim",
        Fields: sdk.String("vel"),
        Ids: []string{
            "consectetur",
            "quis",
            "ut",
            "est",
        },
        Key: sdk.String("fuga"),
        MaxResults: sdk.Int64(287797),
        OauthToken: sdk.String("adipisci"),
        PageToken: sdk.String("ratione"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "cum",
        QuotaUser: sdk.String("magnam"),
        SearchString: sdk.String("nihil"),
        SortField: operations.DfareportingCreativeFieldValuesListSortFieldEnumValue.ToPointer(),
        SortOrder: operations.DfareportingCreativeFieldValuesListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("ex"),
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
            ID: sdk.String("minus"),
            Kind: sdk.String("ad"),
            Value: sdk.String("explicabo"),
        },
        AccessToken: sdk.String("alias"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eligendi"),
        CreativeFieldID: "qui",
        Fields: sdk.String("amet"),
        ID: "e9802d82-f0d4-45eb-8a8b-674ee5cfc18e",
        Key: sdk.String("assumenda"),
        OauthToken: sdk.String("optio"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "esse",
        QuotaUser: sdk.String("a"),
        UploadType: sdk.String("quam"),
        UploadProtocol: sdk.String("quos"),
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
            ID: sdk.String("earum"),
            Kind: sdk.String("adipisci"),
            Value: sdk.String("magni"),
        },
        AccessToken: sdk.String("recusandae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eius"),
        CreativeFieldID: "rerum",
        Fields: sdk.String("nesciunt"),
        Key: sdk.String("pariatur"),
        OauthToken: sdk.String("velit"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "necessitatibus",
        QuotaUser: sdk.String("facere"),
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("cumque"),
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
