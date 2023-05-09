# SDK

## Overview

RESTful API 4 Unipacker

### Available Operations

* [ApplyYaraRules](#applyyararules) - apply given YARA rules to the given executable. (upto 10 rules)
* [Clean](#clean) - clean up the uploaded files
* [EmulationOutput](#emulationoutput) - try to get the emulation output after unpacking the file
* [GeneratePartialYaraRule](#generatepartialyararule) - generate partial YARA rules for give executable. (Rule without the condition section)
* [Unpack](#unpack) - try to unpack the given file

## ApplyYaraRules

apply given YARA rules to the given executable. (upto 10 rules)

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
    res, err := s.SDK.ApplyYaraRules(ctx, operations.ApplyYaraRulesRequestBody{
        File: operations.ApplyYaraRulesRequestBodyFile{
            Content: []byte("vel"),
            File: "error",
        },
        IsUnpackingRequired: operations.ApplyYaraRulesRequestBodyIsUnpackingRequiredEnumFalse.ToPointer(),
        Rules: []string{
            "iure",
            "magnam",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Clean

clean up the uploaded files

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
    res, err := s.SDK.Clean(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EmulationOutput

try to get the emulation output after unpacking the file

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
    res, err := s.SDK.EmulationOutput(ctx, operations.EmulationOutputRequestBody{
        File: operations.EmulationOutputRequestBodyFile{
            Content: []byte("debitis"),
            File: "ipsa",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GeneratePartialYaraRule

generate partial YARA rules for give executable. (Rule without the condition section)

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
    res, err := s.SDK.GeneratePartialYaraRule(ctx, operations.GeneratePartialYaraRuleRequestBody{
        File: operations.GeneratePartialYaraRuleRequestBodyFile{
            Content: []byte("delectus"),
            File: "tempora",
        },
        IsUnpackingRequired: operations.GeneratePartialYaraRuleRequestBodyIsUnpackingRequiredEnumTrue.ToPointer(),
        MinimumStringLength: sdk.String("molestiae"),
        StringsToIgnore: []string{
            "placeat",
            "voluptatum",
            "iusto",
            "excepturi",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Unpack

try to unpack the given file

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
    res, err := s.SDK.Unpack(ctx, operations.UnpackRequestBody{
        File: operations.UnpackRequestBodyFile{
            Content: []byte("nisi"),
            File: "recusandae",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Unpack200WildcardBinaryString != nil {
        // handle response
    }
}
```
