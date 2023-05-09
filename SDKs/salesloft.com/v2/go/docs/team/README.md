# Team

## Overview

Team Information

### Available Operations

* [GetV2TeamJSON](#getv2teamjson) - Fetch current team

## GetV2TeamJSON

Fetches the team of the authenticated user.


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
    res, err := s.Team.GetV2TeamJSON(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
