# QueryAPI

## Overview

Posting queries to OPA

### Available Operations

* [GetQuery](#getquery) - Execute an ad-hoc query (simple)
* [PostQuery](#postquery) - Execute an ad-hoc query (complex)
* [PostSimpleQuery](#postsimplequery) - Execute a simple query

## GetQuery

This API endpoint returns bindings for the variables in the query.

For more complex JSON queries, use `POST /v1/query` instead.

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
    res, err := s.QueryAPI.GetQuery(ctx, operations.GetQueryRequest{
        Explain: sdk.String("omnis"),
        Metrics: sdk.Bool(false),
        Pretty: sdk.Bool(false),
        Q: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetQuery200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostQuery

This API endpoint returns bindings for the variables in the query.

For simpler JSON queries, you may use `GET /v1/query` instead.

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
    res, err := s.QueryAPI.PostQuery(ctx, operations.PostQueryRequest{
        RequestBody: []byte("cum"),
        Explain: sdk.String("perferendis"),
        Metrics: sdk.Bool(false),
        Pretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostQuery200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSimpleQuery

This API queries the document at */data/system/main* by default (however, you can [configure OPA](https://www.openpolicyagent.org/docs/latest/configuration/) to use a different path to serve these queries). That document defines the response.
For example, use the following in `PUT /v1/policies/{path}`) to define a rule that will produce a value for the */data/system/main* document:

  ```yaml
  package system
  main = msg {
    msg := sprintf("hello, %v", input.user)
  }
  ```

The server will return a *not found* (404) response if */data/system/main* is undefined.

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
    res, err := s.QueryAPI.PostSimpleQuery(ctx, operations.PostSimpleQueryRequest{
        RequestBody: map[string]interface{}{
            "reprehenderit": "ut",
        },
        Pretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
