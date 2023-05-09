# CustomReports

### Available Operations

* [GetReportsCustomCreate](#getreportscustomcreate) - Step 3 of executing custom report
* [GetReportsCustomGenerate](#getreportscustomgenerate) - Step 1 of executing custom report
* [GetReportsCustomInsert](#getreportscustominsert) - Step 2 of executing custom report
* [PostReportsCustomCreate](#postreportscustomcreate) - Step 3 of executing custom report
* [PostReportsCustomGenerate](#postreportscustomgenerate) - Step 1 of executing custom report
* [PostReportsCustomInsert](#postreportscustominsert) - Step 2 of executing custom report

## GetReportsCustomCreate

Used to create a custom report. This report treats the list of ids or handles as the audience (not their followers as in the twitter report). To create follower or tweet reports other methods must be used.


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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CustomReports.GetReportsCustomCreate(ctx, operations.GetReportsCustomCreateRequest{
        Filter: sdk.String("distinctio"),
        UploadHash: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomCreate != nil {
        // handle response
    }
}
```

## GetReportsCustomGenerate

Used to create a custom report. This report treats the list of ids or handles as the audience (not their followers as in the twitter report). To create follower or tweet reports other methods must be used.


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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CustomReports.GetReportsCustomGenerate(ctx, operations.GetReportsCustomGenerateRequest{
        ReportName: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomGenerate != nil {
        // handle response
    }
}
```

## GetReportsCustomInsert

Inserting twitter ids or handles into a custom report. This is used for custom reports only


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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CustomReports.GetReportsCustomInsert(ctx, operations.GetReportsCustomInsertRequest{
        Ids: []interface{}{
            "corrupti",
            "illum",
            "vel",
            "error",
        },
        UploadHash: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomInsert != nil {
        // handle response
    }
}
```

## PostReportsCustomCreate

Used to create a custom report. This report treats the list of ids or handles as the audience (not their followers as in the twitter report). To create follower or tweet reports other methods must be used.


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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CustomReports.PostReportsCustomCreate(ctx, operations.PostReportsCustomCreateRequest{
        Filter: sdk.String("suscipit"),
        UploadHash: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomCreate != nil {
        // handle response
    }
}
```

## PostReportsCustomGenerate

Used to create a custom report. This report treats the list of ids or handles as the audience (not their followers as in the twitter report). To create follower or tweet reports other methods must be used.


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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CustomReports.PostReportsCustomGenerate(ctx, operations.PostReportsCustomGenerateRequest{
        ReportName: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomGenerate != nil {
        // handle response
    }
}
```

## PostReportsCustomInsert

Inserting twitter ids or handles into a custom report. This is used for custom reports only


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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CustomReports.PostReportsCustomInsert(ctx, operations.PostReportsCustomInsertRequest{
        Ids: []interface{}{
            "ipsa",
            "delectus",
            "tempora",
            "suscipit",
        },
        UploadHash: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomInsert != nil {
        // handle response
    }
}
```
