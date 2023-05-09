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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("alias"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nemo"),
        CreativeFieldID: "dolore",
        Fields: sdk.String("corrupti"),
        ID: "568a0424-e00a-41d6-ab94-34645d03084f",
        Key: sdk.String("expedita"),
        OauthToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "mollitia",
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("cumque"),
        UploadProtocol: sdk.String("cumque"),
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
        AccessToken: sdk.String("a"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsam"),
        CreativeFieldID: "quod",
        Fields: sdk.String("facilis"),
        ID: "01fe51e5-28a4-45ac-82b8-5f8bc2caba8d",
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("magnam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "veritatis",
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("illum"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CreativeFieldValue: &shared.CreativeFieldValue{
            ID: sdk.String("nemo"),
            Kind: sdk.String("omnis"),
            Value: sdk.String("iure"),
        },
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eius"),
        CreativeFieldID: "esse",
        Fields: sdk.String("quasi"),
        Key: sdk.String("inventore"),
        OauthToken: sdk.String("similique"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "id",
        QuotaUser: sdk.String("et"),
        UploadType: sdk.String("distinctio"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("atque"),
        CreativeFieldID: "aliquid",
        Fields: sdk.String("placeat"),
        Ids: []string{
            "quisquam",
            "impedit",
            "ducimus",
            "incidunt",
        },
        Key: sdk.String("voluptatibus"),
        MaxResults: sdk.Int64(472152),
        OauthToken: sdk.String("ducimus"),
        PageToken: sdk.String("nam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "incidunt",
        QuotaUser: sdk.String("deleniti"),
        SearchString: sdk.String("aliquam"),
        SortField: operations.DfareportingCreativeFieldValuesListSortFieldEnumValue.ToPointer(),
        SortOrder: operations.DfareportingCreativeFieldValuesListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("iure"),
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
            ID: sdk.String("autem"),
            Kind: sdk.String("hic"),
            Value: sdk.String("perferendis"),
        },
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("architecto"),
        CreativeFieldID: "nulla",
        Fields: sdk.String("qui"),
        ID: "c3b80809-4373-4e06-8459-bebbad02f258",
        Key: sdk.String("iure"),
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quod",
        QuotaUser: sdk.String("a"),
        UploadType: sdk.String("et"),
        UploadProtocol: sdk.String("ipsam"),
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
            ID: sdk.String("exercitationem"),
            Kind: sdk.String("minima"),
            Value: sdk.String("laudantium"),
        },
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fuga"),
        CreativeFieldID: "excepturi",
        Fields: sdk.String("corporis"),
        Key: sdk.String("nam"),
        OauthToken: sdk.String("itaque"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "suscipit",
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("nulla"),
        UploadProtocol: sdk.String("consequatur"),
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
