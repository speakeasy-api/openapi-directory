# Test

### Available Operations

* [Echo](#echo) - Echo text
* [Validate](#validate) - Validate input

## Echo

Echo text

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
    res, err := s.Test.Echo(ctx, operations.EchoRequest{
        Text: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestEcho != nil {
        // handle response
    }
}
```

## Validate

Validate input

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
    res, err := s.Test.Validate(ctx, operations.ValidateRequest{
        ID: 5315,
        Tag: []string{
            "ipsa",
            "nobis",
            "necessitatibus",
        },
        UserAgent: sdk.String("quia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestValidate != nil {
        // handle response
    }
}
```
