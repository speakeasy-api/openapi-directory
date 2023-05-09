# Addons

## Overview

Addons represent a user connection to an external service, some addons allow for additional storage, some modify user authentication or add a redirect link to a project.

### Available Operations

* [AddonsList](#addonslist) - List all addons

## AddonsList


A paginated list of addons configurable with the OSF, for read purposes only.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 addons. Each resource in the array is a separate addon object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Errors
This request should never return an error.

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
    res, err := s.Addons.AddonsList(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
