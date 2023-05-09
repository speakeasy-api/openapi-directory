# Utility

## Overview

Utility operations

Utility Services
<https://netlicensing.io/wiki/utility-services>
### Available Operations

* [LicenseTypes](#licensetypes) - List License Types
* [LicensingModels](#licensingmodels) - List Licensing Models

## LicenseTypes

Return a list of all License Types supported by the service

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
    res, err := s.Utility.LicenseTypes(ctx, operations.LicenseTypesSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Netlicensing != nil {
        // handle response
    }
}
```

## LicensingModels

Return a list of all licensing models supported by the service

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
    res, err := s.Utility.LicensingModels(ctx, operations.LicensingModelsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Netlicensing != nil {
        // handle response
    }
}
```
