# Admin

## Overview

Administrative, system management.

### Available Operations

* [Anonymize](#anonymize) - Activate/deactivate anonymization for a source.
* [APIKeyInfo](#apikeyinfo) - Read API Key info.
* [APIStatus](#apistatus) - Prints the current status of the classifiers. A classifier name in apiStatus corresponds to a service name in apiServices.
* [APIUsage](#apiusage) - Print current API usage.
* [APIUsageHistory](#apiusagehistory) - Print historical API usage.
* [APIUsageHistoryAggregate](#apiusagehistoryaggregate) - Print historical API usage (in an aggregated view, by service, by day/hour/min).
* [AvailableServices](#availableservices) - List of classification services and usage cost in Units per classification (default is 1=ONE Unit). Some API endpoints (ex. Corridor) combine multiple classifiers.
* [Learnable](#learnable) - Activate/deactivate learning from a source.
* [Regions](#regions) - Print basic source statistics.
* [SoftwareVersion](#softwareversion) - Get the current software version
* [TaxonomyClasses](#taxonomyclasses) - Print the taxonomy classes valid for the given classifier.

## Anonymize

Activate/deactivate anonymization for a source.

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
    res, err := s.Admin.Anonymize(ctx, operations.AnonymizeRequest{
        Anonymized: false,
        Source: "distinctio",
        Token: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKeyOut != nil {
        // handle response
    }
}
```

## APIKeyInfo

Read API Key info.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Admin.APIKeyInfo(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKeyOut != nil {
        // handle response
    }
}
```

## APIStatus

Prints the current status of the classifiers. A classifier name in apiStatus corresponds to a service name in apiServices.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Admin.APIStatus(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIClassifiersStatusOut != nil {
        // handle response
    }
}
```

## APIUsage

Print current API usage.

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
    res, err := s.Admin.APIUsage(ctx, operations.APIUsageSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIPeriodUsageOut != nil {
        // handle response
    }
}
```

## APIUsageHistory

Print historical API usage.

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
    res, err := s.Admin.APIUsageHistory(ctx, operations.APIUsageHistorySecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIUsageHistoryOut != nil {
        // handle response
    }
}
```

## APIUsageHistoryAggregate

Print historical API usage (in an aggregated view, by service, by day/hour/min).

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
    res, err := s.Admin.APIUsageHistoryAggregate(ctx, operations.APIUsageHistoryAggregateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIUsageAggregatedOut != nil {
        // handle response
    }
}
```

## AvailableServices

List of classification services and usage cost in Units per classification (default is 1=ONE Unit). Some API endpoints (ex. Corridor) combine multiple classifiers.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Admin.AvailableServices(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIServicesOut != nil {
        // handle response
    }
}
```

## Learnable

Activate/deactivate learning from a source.

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
    res, err := s.Admin.Learnable(ctx, operations.LearnableRequest{
        Learnable: false,
        Source: "unde",
        Token: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKeyOut != nil {
        // handle response
    }
}
```

## Regions

Print basic source statistics.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Admin.Regions(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.RegionOut != nil {
        // handle response
    }
}
```

## SoftwareVersion

Get the current software version

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Admin.SoftwareVersion(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SoftwareVersionOut != nil {
        // handle response
    }
}
```

## TaxonomyClasses

Print the taxonomy classes valid for the given classifier.

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
    res, err := s.Admin.TaxonomyClasses(ctx, operations.TaxonomyClassesRequest{
        ClassifierName: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIClassifierTaxonomyOut != nil {
        // handle response
    }
}
```
