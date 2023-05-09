# LicenseTemplate

## Overview

License Template operations

License Template Services
<https://netlicensing.io/wiki/license-template-services>
### Available Operations

* [CreateLicenseTemplate](#createlicensetemplate) - Create License Template
* [DeleteLicenseTemplate](#deletelicensetemplate) - Delete License Template
* [GetLicenseTemplate](#getlicensetemplate) - Get License Template
* [ListLicenseTemplates](#listlicensetemplates) - List License Templates
* [UpdateLicenseTemplate](#updatelicensetemplate) - Update License Template

## CreateLicenseTemplate

Creates a new License Template

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
    res, err := s.LicenseTemplate.CreateLicenseTemplate(ctx, operations.CreateLicenseTemplateRequestBody{
        Active: false,
        Automatic: sdk.Bool(false),
        Currency: sdk.String("fugit"),
        Hidden: sdk.Bool(false),
        HideLicenses: sdk.Bool(false),
        LicenseType: "deleniti",
        MaxSessions: sdk.String("hic"),
        Name: "Everett Breitenberg",
        Number: sdk.String("modi"),
        Price: sdk.Float64(1863.32),
        ProductModuleNumber: "impedit",
        Quantity: sdk.String("cum"),
        Quota: sdk.String("esse"),
        TimeVolume: sdk.String("ipsum"),
        TimeVolumePeriod: sdk.String("excepturi"),
    }, operations.CreateLicenseTemplateSecurity{
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

## DeleteLicenseTemplate

Delete a License Template by 'number'.

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
    res, err := s.LicenseTemplate.DeleteLicenseTemplate(ctx, operations.DeleteLicenseTemplateRequest{
        ForceCascade: sdk.Bool(false),
        LicenseTemplateNumber: "aspernatur",
    }, operations.DeleteLicenseTemplateSecurity{
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

## GetLicenseTemplate

Return a License Template by 'licenseTemplateNumber'

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
    res, err := s.LicenseTemplate.GetLicenseTemplate(ctx, operations.GetLicenseTemplateRequest{
        LicenseTemplateNumber: "perferendis",
    }, operations.GetLicenseTemplateSecurity{
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

## ListLicenseTemplates

Return a list of all License Templates for the current Vendor

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
    res, err := s.LicenseTemplate.ListLicenseTemplates(ctx, operations.ListLicenseTemplatesSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Netlicensings != nil {
        // handle response
    }
}
```

## UpdateLicenseTemplate

Sets the provided properties to a License Template. Return an updated License Template

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
    res, err := s.LicenseTemplate.UpdateLicenseTemplate(ctx, operations.UpdateLicenseTemplateRequest{
        RequestBody: &operations.UpdateLicenseTemplateRequestBody{
            Active: sdk.Bool(false),
            Automatic: sdk.Bool(false),
            Currency: sdk.String("ad"),
            Hidden: sdk.Bool(false),
            HideLicenses: sdk.Bool(false),
            LicenseType: sdk.String("natus"),
            MaxSessions: sdk.String("sed"),
            Name: sdk.String("Curtis Morissette"),
            Number: sdk.String("saepe"),
            Price: sdk.Float64(6818.2),
            Quantity: sdk.String("in"),
            Quota: sdk.String("corporis"),
            TimeVolume: sdk.String("iste"),
            TimeVolumePeriod: sdk.String("iure"),
        },
        LicenseTemplateNumber: "saepe",
    }, operations.UpdateLicenseTemplateSecurity{
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
