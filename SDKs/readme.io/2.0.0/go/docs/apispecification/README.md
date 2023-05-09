# APISpecification

### Available Operations

* [DeleteAPISpecification](#deleteapispecification) - Delete an API specification in ReadMe
* [GetAPISpecification](#getapispecification) - Get API specification metadata
* [UpdateAPISpecification](#updateapispecification) - Update an API specification in ReadMe
* [UploadAPISpecification](#uploadapispecification) - Upload an API specification to ReadMe. Or, to use a newer solution see https://docs.readme.com/guides/docs/automatically-sync-api-specification-with-github

## DeleteAPISpecification

Delete an API specification in ReadMe

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
    res, err := s.APISpecification.DeleteAPISpecification(ctx, operations.DeleteAPISpecificationRequest{
        ID: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
    }, operations.DeleteAPISpecificationSecurity{
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

## GetAPISpecification

Get API specification metadata

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
    res, err := s.APISpecification.GetAPISpecification(ctx, operations.GetAPISpecificationRequest{
        Page: sdk.Int64(774234),
        PerPage: sdk.Int64(736918),
        XReadmeVersion: "esse",
    }, operations.GetAPISpecificationSecurity{
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

## UpdateAPISpecification

Update an API specification in ReadMe

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
    res, err := s.APISpecification.UpdateAPISpecification(ctx, operations.UpdateAPISpecificationRequest{
        RequestBody: operations.UpdateAPISpecificationRequestBody{
            Spec: &operations.UpdateAPISpecificationRequestBodySpec{
                Content: []byte("ipsum"),
                Spec: "excepturi",
            },
        },
        ID: "20592939-6fea-4759-aeb1-0faaa2352c59",
    }, operations.UpdateAPISpecificationSecurity{
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

## UploadAPISpecification

Upload an API specification to ReadMe. Or, to use a newer solution see https://docs.readme.com/guides/docs/automatically-sync-api-specification-with-github

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
    res, err := s.APISpecification.UploadAPISpecification(ctx, operations.UploadAPISpecificationRequest{
        RequestBody: operations.UploadAPISpecificationRequestBody{
            Spec: &operations.UploadAPISpecificationRequestBodySpec{
                Content: []byte("nemo"),
                Spec: "minima",
            },
        },
        XReadmeVersion: "excepturi",
    }, operations.UploadAPISpecificationSecurity{
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
