# Application

## Overview

Inbound messages to an external account which is linked to an application will be delivered to the application's inbound URL.

### Available Operations

* [LinkApplication](#linkapplication) - Link application to an account
* [UnliWithoutApplicationnkApplication](#unliwithoutapplicationnkapplication) - Unlink application from an account

## LinkApplication

Link application to an account

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
    res, err := s.Application.LinkApplication(ctx, operations.LinkApplicationRequest{
        RequestBody: operations.LinkApplicationRequestBody{
            Application: "applicationId",
        },
        ExternalID: "distinctio",
        Provider: operations.LinkApplicationProviderEnumWhatsapp,
    }, operations.LinkApplicationSecurity{
        BasicAuth: &shared.SchemeBasicAuth{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountResponse != nil {
        // handle response
    }
}
```

## UnliWithoutApplicationnkApplication

Unlink application from an account

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
    res, err := s.Application.UnliWithoutApplicationnkApplication(ctx, operations.UnliWithoutApplicationnkApplicationRequest{
        ApplicationID: "unde",
        ExternalID: "nulla",
        Provider: operations.UnliWithoutApplicationnkApplicationProviderEnumViberServiceMsg,
    }, operations.UnliWithoutApplicationnkApplicationSecurity{
        BasicAuth: &shared.SchemeBasicAuth{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
