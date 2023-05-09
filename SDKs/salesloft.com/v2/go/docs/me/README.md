# Me

## Overview

User Information

### Available Operations

* [GetV2MeJSON](#getv2mejson) - Fetch current user

## GetV2MeJSON

Authenticated user information. This endpoint does not accept any parameters as it is
represents your authenticated user. The "Users" resource provides user information
for other users on the team.


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
    res, err := s.Me.GetV2MeJSON(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
