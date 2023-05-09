# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [CreateExportCustomJob](#createexportcustomjob)
* [DeleteJob](#deletejob)
* [FetchDay](#fetchday) - Fetch a specific Day.
* [FetchExport](#fetchexport) - Fetch a specific Export.
* [FetchExportConfiguration](#fetchexportconfiguration) - Fetch a specific Export Configuration.
* [FetchJob](#fetchjob)
* [ListDay](#listday) - Retrieve a list of all Days for a resource.
* [ListExportCustomJob](#listexportcustomjob)
* [UpdateExportConfiguration](#updateexportconfiguration) - Update a specific Export Configuration.

## CreateExportCustomJob

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateExportCustomJob(ctx, operations.CreateExportCustomJobRequest{
        RequestBody: &operations.CreateExportCustomJobCreateExportCustomJobRequest{
            Email: sdk.String("Eli96@yahoo.com"),
            EndDay: "tempora",
            FriendlyName: "suscipit",
            StartDay: "molestiae",
            WebhookMethod: sdk.String("minus"),
            WebhookURL: sdk.String("placeat"),
        },
        ResourceType: "voluptatum",
    }, operations.CreateExportCustomJobSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkexportsV1ExportExportCustomJob != nil {
        // handle response
    }
}
```

## DeleteJob

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteJob(ctx, operations.DeleteJobRequest{
        JobSid: "iusto",
    }, operations.DeleteJobSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FetchDay

Fetch a specific Day.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchDay(ctx, operations.FetchDayRequest{
        Day: "excepturi",
        ResourceType: "nisi",
    }, operations.FetchDaySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FetchExport

Fetch a specific Export.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchExport(ctx, operations.FetchExportRequest{
        ResourceType: "recusandae",
    }, operations.FetchExportSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkexportsV1Export != nil {
        // handle response
    }
}
```

## FetchExportConfiguration

Fetch a specific Export Configuration.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchExportConfiguration(ctx, operations.FetchExportConfigurationRequest{
        ResourceType: "temporibus",
    }, operations.FetchExportConfigurationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkexportsV1ExportConfiguration != nil {
        // handle response
    }
}
```

## FetchJob

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchJob(ctx, operations.FetchJobRequest{
        JobSid: "ab",
    }, operations.FetchJobSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkexportsV1ExportJob != nil {
        // handle response
    }
}
```

## ListDay

Retrieve a list of all Days for a resource.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListDay(ctx, operations.ListDayRequest{
        Page: sdk.Int64(337396),
        PageSize: sdk.Int64(87129),
        PageToken: sdk.String("deserunt"),
        ResourceType: "perferendis",
    }, operations.ListDaySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDayResponse != nil {
        // handle response
    }
}
```

## ListExportCustomJob

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListExportCustomJob(ctx, operations.ListExportCustomJobRequest{
        Page: sdk.Int64(368241),
        PageSize: sdk.Int64(832620),
        PageToken: sdk.String("sapiente"),
        ResourceType: "quo",
    }, operations.ListExportCustomJobSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListExportCustomJobResponse != nil {
        // handle response
    }
}
```

## UpdateExportConfiguration

Update a specific Export Configuration.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateExportConfiguration(ctx, operations.UpdateExportConfigurationRequest{
        RequestBody: &operations.UpdateExportConfigurationUpdateExportConfigurationRequest{
            Enabled: sdk.Bool(false),
            WebhookMethod: sdk.String("odit"),
            WebhookURL: sdk.String("https://trim-wheat.info"),
        },
        ResourceType: "quod",
    }, operations.UpdateExportConfigurationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkexportsV1ExportConfiguration != nil {
        // handle response
    }
}
```
