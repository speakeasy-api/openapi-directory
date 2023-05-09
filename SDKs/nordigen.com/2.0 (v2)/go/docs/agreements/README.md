# Agreements

### Available Operations

* [AcceptEUA](#accepteua) - Accept an end-user agreement via the API
* [CreateEUAV2](#createeuav2) - API endpoints related to end-user agreements.
* [DeleteEUAByIDV2](#deleteeuabyidv2) - Delete an end user agreement
* [RetrieveEUAByIDV2](#retrieveeuabyidv2) - Retrieve end user agreement by ID
* [RetrieveAllEUAsForAnEndUserV2](#retrievealleuasforanenduserv2) - API endpoints related to end-user agreements.

## AcceptEUA

Accept an end-user agreement via the API

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Agreements.AcceptEUA(ctx, operations.AcceptEUARequest{
        EnduserAcceptanceDetailsRequest: shared.EnduserAcceptanceDetailsRequest{
            IPAddress: "harum",
            UserAgent: "enim",
        },
        ID: "e6e13b99-d488-4e1e-91e4-50ad2abd4426",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EndUserAgreement != nil {
        // handle response
    }
}
```

## CreateEUAV2

API endpoints related to end-user agreements.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Agreements.CreateEUAV2(ctx, shared.EndUserAgreementRequest{
        AccessScope: [][]interface{}{
            []interface{}{
                "perferendis",
                "magni",
                "assumenda",
            },
            []interface{}{
                "alias",
                "fugit",
            },
            []interface{}{
                "excepturi",
                "tempora",
                "facilis",
            },
        },
        AccessValidForDays: sdk.Int64(735194),
        InstitutionID: "labore",
        MaxHistoricalDays: sdk.Int64(962189),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EndUserAgreement != nil {
        // handle response
    }
}
```

## DeleteEUAByIDV2

Delete an end user agreement

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Agreements.DeleteEUAByIDV2(ctx, operations.DeleteEUAByIDV2Request{
        ID: "63c969e9-a3ef-4a77-9fb1-4cd66ae395ef",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RetrieveEUAByIDV2

Retrieve end user agreement by ID

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Agreements.RetrieveEUAByIDV2(ctx, operations.RetrieveEUAByIDV2Request{
        ID: "b9ba88f3-a669-4970-b4ba-4469b6e21419",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EndUserAgreement != nil {
        // handle response
    }
}
```

## RetrieveAllEUAsForAnEndUserV2

API endpoints related to end-user agreements.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Agreements.RetrieveAllEUAsForAnEndUserV2(ctx, operations.RetrieveAllEUAsForAnEndUserV2Request{
        Limit: sdk.Int64(354047),
        Offset: sdk.Int64(590873),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedEndUserAgreementList != nil {
        // handle response
    }
}
```
