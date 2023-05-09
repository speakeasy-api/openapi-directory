# Export

## Overview

Requires Export Token or Organization Key

### Available Operations

* [ExportAssetTopHWCSV](#exportassettophwcsv) - Top asset hardware products as CSV
* [ExportAssetTopOSCSV](#exportassettoposcsv) - Top asset operating systems as CSV
* [ExportAssetTopTagsCSV](#exportassettoptagscsv) - Top asset tags as CSV
* [ExportAssetTopTypesCSV](#exportassettoptypescsv) - Top asset types as CSV
* [ExportAssetsCSV](#exportassetscsv) - Asset inventory as CSV
* [ExportAssetsJSON](#exportassetsjson) - Exports the asset inventory
* [ExportAssetsJSONL](#exportassetsjsonl) - Asset inventory as JSON line-delimited
* [ExportAssetsNmapXML](#exportassetsnmapxml) - Asset inventory as Nmap-style XML
* [ExportServicesCSV](#exportservicescsv) - Service inventory as CSV
* [ExportServicesJSON](#exportservicesjson) - Service inventory as JSON
* [ExportServicesJSONL](#exportservicesjsonl) - Service inventory as JSON line-delimited
* [ExportServicesTopProductsCSV](#exportservicestopproductscsv) - Top service products as CSV
* [ExportServicesTopProtocolsCSV](#exportservicestopprotocolscsv) - Top service protocols as CSV
* [ExportServicesTopTCPCSV](#exportservicestoptcpcsv) - Top TCP services as CSV
* [ExportServicesTopUDPCSV](#exportservicestopudpcsv) - Top UDP services as CSV
* [ExportSitesCSV](#exportsitescsv) - Site list as CSV
* [ExportSitesJSON](#exportsitesjson) - Export all sites
* [ExportSitesJSONL](#exportsitesjsonl) - Site list as JSON line-delimited
* [ExportSubnetUtilizationStatsCSV](#exportsubnetutilizationstatscsv) - Subnet utilization statistics as as CSV
* [ExportWirelessCSV](#exportwirelesscsv) - Wireless inventory as CSV
* [ExportWirelessJSON](#exportwirelessjson) - Wireless inventory as JSON
* [ExportWirelessJSONL](#exportwirelessjsonl) - Wireless inventory as JSON line-delimited

## ExportAssetTopHWCSV

Top asset hardware products as CSV

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
    res, err := s.Export.ExportAssetTopHWCSV(ctx, operations.ExportAssetTopHWCSVSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportAssetTopHWCSV200TextCsvBinaryString != nil {
        // handle response
    }
}
```

## ExportAssetTopOSCSV

Top asset operating systems as CSV

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
    res, err := s.Export.ExportAssetTopOSCSV(ctx, operations.ExportAssetTopOSCSVSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportAssetTopOSCSV200TextCsvBinaryString != nil {
        // handle response
    }
}
```

## ExportAssetTopTagsCSV

Top asset tags as CSV

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
    res, err := s.Export.ExportAssetTopTagsCSV(ctx, operations.ExportAssetTopTagsCSVSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportAssetTopTagsCSV200TextCSVBinaryString != nil {
        // handle response
    }
}
```

## ExportAssetTopTypesCSV

Top asset types as CSV

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
    res, err := s.Export.ExportAssetTopTypesCSV(ctx, operations.ExportAssetTopTypesCSVSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportAssetTopTypesCSV200TextCSVBinaryString != nil {
        // handle response
    }
}
```

## ExportAssetsCSV

Asset inventory as CSV

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
    res, err := s.Export.ExportAssetsCSV(ctx, operations.ExportAssetsCSVRequest{
        Search: sdk.String("similique"),
    }, operations.ExportAssetsCSVSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportAssetsCSV200TextCSVBinaryString != nil {
        // handle response
    }
}
```

## ExportAssetsJSON

Exports the asset inventory

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
    res, err := s.Export.ExportAssetsJSON(ctx, operations.ExportAssetsJSONRequest{
        Fields: sdk.String("culpa"),
        Search: sdk.String("aliquid"),
    }, operations.ExportAssetsJSONSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Assets != nil {
        // handle response
    }
}
```

## ExportAssetsJSONL

Asset inventory as JSON line-delimited

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
    res, err := s.Export.ExportAssetsJSONL(ctx, operations.ExportAssetsJSONLRequest{
        Fields: sdk.String("tenetur"),
        Search: sdk.String("quae"),
    }, operations.ExportAssetsJSONLSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportAssetsJSONL200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## ExportAssetsNmapXML

Asset inventory as Nmap-style XML

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
    res, err := s.Export.ExportAssetsNmapXML(ctx, operations.ExportAssetsNmapXMLRequest{
        Search: sdk.String("earum"),
    }, operations.ExportAssetsNmapXMLSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportAssetsNmapXML200TextXMLBinaryString != nil {
        // handle response
    }
}
```

## ExportServicesCSV

Service inventory as CSV

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
    res, err := s.Export.ExportServicesCSV(ctx, operations.ExportServicesCSVRequest{
        Search: sdk.String("vel"),
    }, operations.ExportServicesCSVSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportServicesCSV200TextCSVBinaryString != nil {
        // handle response
    }
}
```

## ExportServicesJSON

Service inventory as JSON

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
    res, err := s.Export.ExportServicesJSON(ctx, operations.ExportServicesJSONRequest{
        Fields: sdk.String("in"),
        Search: sdk.String("eius"),
    }, operations.ExportServicesJSONSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Services != nil {
        // handle response
    }
}
```

## ExportServicesJSONL

Service inventory as JSON line-delimited

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
    res, err := s.Export.ExportServicesJSONL(ctx, operations.ExportServicesJSONLRequest{
        Fields: sdk.String("libero"),
        Search: sdk.String("illum"),
    }, operations.ExportServicesJSONLSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportServicesJSONL200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## ExportServicesTopProductsCSV

Top service products as CSV

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
    res, err := s.Export.ExportServicesTopProductsCSV(ctx, operations.ExportServicesTopProductsCSVSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportServicesTopProductsCSV200TextCSVBinaryString != nil {
        // handle response
    }
}
```

## ExportServicesTopProtocolsCSV

Top service protocols as CSV

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
    res, err := s.Export.ExportServicesTopProtocolsCSV(ctx, operations.ExportServicesTopProtocolsCSVSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportServicesTopProtocolsCSV200TextCSVBinaryString != nil {
        // handle response
    }
}
```

## ExportServicesTopTCPCSV

Top TCP services as CSV

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
    res, err := s.Export.ExportServicesTopTCPCSV(ctx, operations.ExportServicesTopTCPCSVSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportServicesTopTCPCSV200TextCsvBinaryString != nil {
        // handle response
    }
}
```

## ExportServicesTopUDPCSV

Top UDP services as CSV

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
    res, err := s.Export.ExportServicesTopUDPCSV(ctx, operations.ExportServicesTopUDPCSVSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportServicesTopUDPCSV200TextCsvBinaryString != nil {
        // handle response
    }
}
```

## ExportSitesCSV

Site list as CSV

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
    res, err := s.Export.ExportSitesCSV(ctx, operations.ExportSitesCSVSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportSitesCSV200TextCSVBinaryString != nil {
        // handle response
    }
}
```

## ExportSitesJSON

Export all sites

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
    res, err := s.Export.ExportSitesJSON(ctx, operations.ExportSitesJSONRequest{
        Fields: sdk.String("soluta"),
        Search: sdk.String("accusantium"),
    }, operations.ExportSitesJSONSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Sites != nil {
        // handle response
    }
}
```

## ExportSitesJSONL

Site list as JSON line-delimited

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
    res, err := s.Export.ExportSitesJSONL(ctx, operations.ExportSitesJSONLRequest{
        Fields: sdk.String("aliquam"),
        Search: sdk.String("sapiente"),
    }, operations.ExportSitesJSONLSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportSitesJSONL200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## ExportSubnetUtilizationStatsCSV

Subnet utilization statistics as as CSV

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
    res, err := s.Export.ExportSubnetUtilizationStatsCSV(ctx, operations.ExportSubnetUtilizationStatsCSVRequest{
        Mask: sdk.String("dicta"),
    }, operations.ExportSubnetUtilizationStatsCSVSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportSubnetUtilizationStatsCSV200TextCSVBinaryString != nil {
        // handle response
    }
}
```

## ExportWirelessCSV

Wireless inventory as CSV

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
    res, err := s.Export.ExportWirelessCSV(ctx, operations.ExportWirelessCSVRequest{
        Search: sdk.String("ullam"),
    }, operations.ExportWirelessCSVSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportWirelessCSV200TextCSVBinaryString != nil {
        // handle response
    }
}
```

## ExportWirelessJSON

Wireless inventory as JSON

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
    res, err := s.Export.ExportWirelessJSON(ctx, operations.ExportWirelessJSONRequest{
        Fields: sdk.String("reprehenderit"),
        Search: sdk.String("ullam"),
    }, operations.ExportWirelessJSONSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Wirelesses != nil {
        // handle response
    }
}
```

## ExportWirelessJSONL

Wireless inventory as JSON line-delimited

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
    res, err := s.Export.ExportWirelessJSONL(ctx, operations.ExportWirelessJSONLRequest{
        Fields: sdk.String("nisi"),
        Search: sdk.String("aut"),
    }, operations.ExportWirelessJSONLSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportWirelessJSONL200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```
