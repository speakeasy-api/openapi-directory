# Definition

## Overview

The different subscription types that are defined in a portal.

### Available Operations

* [GetCommunicationPreferencesV3DefinitionsGetPage](#getcommunicationpreferencesv3definitionsgetpage) - Get subscription definitions

## GetCommunicationPreferencesV3DefinitionsGetPage

Get a list of all subscription definitions for the portal

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
    res, err := s.Definition.GetCommunicationPreferencesV3DefinitionsGetPage(ctx, operations.GetCommunicationPreferencesV3DefinitionsGetPageSecurity{
        Hapikey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscriptionDefinitionsResponse != nil {
        // handle response
    }
}
```
