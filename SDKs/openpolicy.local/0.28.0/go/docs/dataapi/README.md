# DataAPI

## Overview

Exposes endpoints for reading and writing documents in OPA. For an explanation of the different types of documents, see [the OPA document model](https://www.openpolicyagent.org/docs/latest/philosophy/#the-opa-document-model)

### Available Operations

* [DeleteDocument](#deletedocument) - Delete a document
* [GetDocument](#getdocument) - Get a document
* [GetDocumentWithPath](#getdocumentwithpath) - Get a document (with input)
* [GetDocumentWithWebHook](#getdocumentwithwebhook) - Get a document (with webhook)
* [PatchDocument](#patchdocument) - Update a document
* [PutDocument](#putdocument) - Create or overwrite a document

## DeleteDocument

This API endpoint deletes an existing document from the server

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
    res, err := s.DataAPI.DeleteDocument(ctx, operations.DeleteDocumentRequest{
        Path: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDocument

This API endpoint returns the document specified by `path`.

The server will return a *bad request* (400) response if either:
- The query requires an input document and you do not provide it
- You provide the input document but the query has already defined it.

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
    res, err := s.DataAPI.GetDocument(ctx, operations.GetDocumentRequest{
        Explain: sdk.String("ipsa"),
        Input: map[string]interface{}{
            "tempora": "suscipit",
            "molestiae": "minus",
            "placeat": "voluptatum",
            "iusto": "excepturi",
        },
        Instrument: sdk.Bool(false),
        Metrics: sdk.Bool(false),
        Path: "nisi",
        Pretty: sdk.Bool(false),
        Provenance: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDocument200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDocumentWithPath

The server will return a *bad request* (400) response if either:
- The query requires an input document and you do not provide it
- You provided an input document but the query has already defined it.

If `path` indexes into an array, the server will attempt to convert the array index to an integer. If the path element cannot be converted to an integer, a *not found* response (404) will be returned.

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
    res, err := s.DataAPI.GetDocumentWithPath(ctx, operations.GetDocumentWithPathRequest{
        RequestBody: []byte("recusandae"),
        Explain: sdk.String("temporibus"),
        Instrument: sdk.Bool(false),
        Metrics: sdk.Bool(false),
        Path: "ab",
        Pretty: sdk.Bool(false),
        Provenance: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDocumentWithPath200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDocumentWithWebHook

The example given here assumes you have created a policy (with `PUT /v1/policies/{path}`), such as:

  ```yaml
  package opa.examples
  import input.example.flag
  allow_request { flag == true }
  ```

The server will return a *not found* (404) response if the requested document is missing or undefined.


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
    res, err := s.DataAPI.GetDocumentWithWebHook(ctx, operations.GetDocumentWithWebHookRequest{
        RequestBody: []byte("quis"),
        Path: "veritatis",
        Pretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDocumentWithWebHook200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PatchDocument

This API endpoint updates an existing document on the server by describing the changes required (using [JSON patch operations](http://jsonpatch.com/))

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
    res, err := s.DataAPI.PatchDocument(ctx, operations.PatchDocumentRequest{
        RequestBody: []shared.PatchesSchema{
            shared.PatchesSchema{
                Op: shared.PatchesSchemaOpEnumAdd,
                Path: "-",
                Value: map[string]interface{}{
                    "ipsam": "repellendus",
                },
            },
            shared.PatchesSchema{
                Op: shared.PatchesSchemaOpEnumAdd,
                Path: "-",
                Value: map[string]interface{}{
                    "quo": "odit",
                    "at": "at",
                    "maiores": "molestiae",
                    "quod": "quod",
                },
            },
            shared.PatchesSchema{
                Op: shared.PatchesSchemaOpEnumAdd,
                Path: "-",
                Value: map[string]interface{}{
                    "totam": "porro",
                    "dolorum": "dicta",
                },
            },
        },
        Path: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutDocument

If the path does not refer to an existing document (for example *us-west/servers*), the server will attempt to create all the necessary containing documents.

This behavior is similar to the Unix command [mkdir -p](https://en.wikipedia.org/wiki/Mkdir#Options).

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
    res, err := s.DataAPI.PutDocument(ctx, operations.PutDocumentRequest{
        IfNoneMatch: sdk.String("officia"),
        RequestBody: "occaecati",
        Path: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
