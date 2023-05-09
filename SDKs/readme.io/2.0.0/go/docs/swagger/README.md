# Swagger

### Available Operations

* [~~DeleteSwagger~~](#deleteswagger) - DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#deleteapispecification to delete a Swagger file in ReadMe :warning: **Deprecated**
* [~~UpdateSwagger~~](#updateswagger) - DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#updateapispecification to update a Swagger file. :warning: **Deprecated**
* [~~UploadSwagger~~](#uploadswagger) - DEPRECATED. Instead use https://docs.readme.com/developers/reference/api-specification#uploadapispecification to upload a Swagger file to ReadMe :warning: **Deprecated**

## ~~DeleteSwagger~~

DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#deleteapispecification to delete a Swagger file in ReadMe

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Swagger.DeleteSwagger(ctx, operations.DeleteSwaggerRequest{
        ID: "97b0074f-1547-41b5-a6e1-3b99d488e1e9",
    }, operations.DeleteSwaggerSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~UpdateSwagger~~

DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#updateapispecification to update a Swagger file.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Swagger.UpdateSwagger(ctx, operations.UpdateSwaggerRequest{
        RequestBody: operations.UpdateSwaggerRequestBody{
            Swagger: &operations.UpdateSwaggerRequestBodySwagger{
                Content: []byte("veritatis"),
                Swagger: "itaque",
            },
        },
        ID: "450ad2ab-d442-4698-82d5-02a94bb4f63c",
    }, operations.UpdateSwaggerSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~UploadSwagger~~

DEPRECATED. Instead use https://docs.readme.com/developers/reference/api-specification#uploadapispecification to upload a Swagger file to ReadMe

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Swagger.UploadSwagger(ctx, operations.UploadSwaggerRequestBody{
        Swagger: &operations.UploadSwaggerRequestBodySwagger{
            Content: []byte("sint"),
            Swagger: "aliquid",
        },
    }, operations.UploadSwaggerSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
