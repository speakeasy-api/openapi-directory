# PatrowlEngine

## Overview

SSLScan API documentation

Find out more
<https://github.com/Patrowl/PatrowlDocs>
### Available Operations

* [CleanScanPage](#cleanscanpage) - Clean scan
* [CleanScansPage](#cleanscanspage) - Clean all scans
* [GetFindingPage](#getfindingpage) - Get findings on finished scans
* [StartScanPage](#startscanpage) - Start a new scan
* [StatusScanPage](#statusscanpage) - Status of a scan
* [StatusScansPage](#statusscanspage) - Status on all scans
* [StopScanPage](#stopscanpage) - Stop a scan
* [StopScansPage](#stopscanspage) - Stop all scans
* [GetDefaultPage](#getdefaultpage) - Index page
* [GetInfoPage](#getinfopage) - Engine info page
* [GetLivenessPage](#getlivenesspage) - Liveness page
* [GetReadinessPage](#getreadinesspage) - Readiness page
* [GetTestPage](#gettestpage) - Test page
* [ReloadConfigurationPage](#reloadconfigurationpage) - Configuration reloading page

## CleanScanPage

Clean scan identified by id.

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
    res, err := s.PatrowlEngine.CleanScanPage(ctx, operations.CleanScanPageRequest{
        ScanID: 592845,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponse != nil {
        // handle response
    }
}
```

## CleanScansPage

Clean all current scans.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PatrowlEngine.CleanScansPage(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponse != nil {
        // handle response
    }
}
```

## GetFindingPage

Get findings on finished scans.

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
    res, err := s.PatrowlEngine.GetFindingPage(ctx, operations.GetFindingPageRequest{
        ScanID: 715190,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Findings != nil {
        // handle response
    }
}
```

## StartScanPage

Start a new scan.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PatrowlEngine.StartScanPage(ctx, shared.ScanDefinition{
        Assets: []shared.ScanDefinitionAssets{
            shared.ScanDefinitionAssets{
                Criticity: shared.ScanDefinitionAssetsCriticityEnumMedium.ToPointer(),
                Datatype: shared.ScanDefinitionAssetsDatatypeEnumPath.ToPointer(),
                ID: sdk.String("3"),
                Value: sdk.String("8.8.8.8"),
            },
            shared.ScanDefinitionAssets{
                Criticity: shared.ScanDefinitionAssetsCriticityEnumMedium.ToPointer(),
                Datatype: shared.ScanDefinitionAssetsDatatypeEnumPath.ToPointer(),
                ID: sdk.String("3"),
                Value: sdk.String("8.8.8.8"),
            },
            shared.ScanDefinitionAssets{
                Criticity: shared.ScanDefinitionAssetsCriticityEnumMedium.ToPointer(),
                Datatype: shared.ScanDefinitionAssetsDatatypeEnumKeyword.ToPointer(),
                ID: sdk.String("3"),
                Value: sdk.String("8.8.8.8"),
            },
            shared.ScanDefinitionAssets{
                Criticity: shared.ScanDefinitionAssetsCriticityEnumMedium.ToPointer(),
                Datatype: shared.ScanDefinitionAssetsDatatypeEnumDomain.ToPointer(),
                ID: sdk.String("3"),
                Value: sdk.String("8.8.8.8"),
            },
        },
        Options: map[string]interface{}{
            "magnam": "debitis",
            "ipsa": "delectus",
        },
        ScanID: sdk.Int64(1),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponse != nil {
        // handle response
    }
}
```

## StatusScanPage

Status of a scan identified by id.

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
    res, err := s.PatrowlEngine.StatusScanPage(ctx, operations.StatusScanPageRequest{
        ScanID: 272656,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponse != nil {
        // handle response
    }
}
```

## StatusScansPage

Status all current scans.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PatrowlEngine.StatusScansPage(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponse != nil {
        // handle response
    }
}
```

## StopScanPage

Stop a scan identified by id.

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
    res, err := s.PatrowlEngine.StopScanPage(ctx, operations.StopScanPageRequest{
        ScanID: 383441,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponse != nil {
        // handle response
    }
}
```

## StopScansPage

Stop all current scans.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PatrowlEngine.StopScansPage(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponse != nil {
        // handle response
    }
}
```

## GetDefaultPage

Return index page

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PatrowlEngine.GetDefaultPage(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponse != nil {
        // handle response
    }
}
```

## GetInfoPage

Return information on engine.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PatrowlEngine.GetInfoPage(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponse != nil {
        // handle response
    }
}
```

## GetLivenessPage

Return liveness page

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PatrowlEngine.GetLivenessPage(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetReadinessPage

Return liveness page

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PatrowlEngine.GetReadinessPage(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetTestPage

Return test page

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PatrowlEngine.GetTestPage(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReloadConfigurationPage

Reload the configuration file.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PatrowlEngine.ReloadConfigurationPage(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponse != nil {
        // handle response
    }
}
```
