# Scripts

## Overview

Everything about Otoroshi request transformer scripts

### Available Operations

* [CompileScript](#compilescript) - Compile a script
* [CreateScript](#createscript) - Create a new script
* [DeleteScript](#deletescript) - Delete a script
* [FindAllScripts](#findallscripts) - Get all scripts
* [FindScriptByID](#findscriptbyid) - Get a script
* [PatchScript](#patchscript) - Update a script with a diff
* [UpdateScript](#updatescript) - Update a script

## CompileScript

Compile a script

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Scripts.CompileScript(ctx, shared.Script{
        Code: map[string]string{
            "saepe": "error",
            "consequatur": "incidunt",
        },
        Desc: map[string]string{
            "dolorem": "harum",
            "dicta": "architecto",
            "occaecati": "labore",
            "quidem": "atque",
        },
        ID: "a string value",
        Name: "a string value",
    }, operations.CompileScriptSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScriptCompilationResult != nil {
        // handle response
    }
}
```

## CreateScript

Create a new script

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Scripts.CreateScript(ctx, shared.Script{
        Code: map[string]string{
            "nam": "tenetur",
            "laboriosam": "alias",
            "amet": "deserunt",
        },
        Desc: map[string]string{
            "unde": "reiciendis",
            "provident": "repellendus",
        },
        ID: "a string value",
        Name: "a string value",
    }, operations.CreateScriptSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Script != nil {
        // handle response
    }
}
```

## DeleteScript

Delete a script

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
    res, err := s.Scripts.DeleteScript(ctx, operations.DeleteScriptRequest{
        ScriptID: "delectus",
    }, operations.DeleteScriptSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Deleted != nil {
        // handle response
    }
}
```

## FindAllScripts

Get all scripts

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
    res, err := s.Scripts.FindAllScripts(ctx, operations.FindAllScriptsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Scripts != nil {
        // handle response
    }
}
```

## FindScriptByID

Get a script

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
    res, err := s.Scripts.FindScriptByID(ctx, operations.FindScriptByIDRequest{
        ScriptID: "voluptates",
    }, operations.FindScriptByIDSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Script != nil {
        // handle response
    }
}
```

## PatchScript

Update a script with a diff

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
    res, err := s.Scripts.PatchScript(ctx, operations.PatchScriptRequest{
        RequestBody: []shared.Patch{
            shared.Patch{
                Op: shared.PatchOpEnumCopy,
                Path: "a string value",
                Value: sdk.String("quidem"),
            },
        },
        ScriptID: "reprehenderit",
    }, operations.PatchScriptSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Script != nil {
        // handle response
    }
}
```

## UpdateScript

Update a script

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
    res, err := s.Scripts.UpdateScript(ctx, operations.UpdateScriptRequest{
        Script: &shared.Script{
            Code: map[string]string{
                "fuga": "praesentium",
                "mollitia": "veniam",
                "voluptatem": "quisquam",
                "repudiandae": "quasi",
            },
            Desc: map[string]string{
                "reprehenderit": "asperiores",
                "totam": "suscipit",
                "quidem": "maxime",
            },
            ID: "a string value",
            Name: "a string value",
        },
        ScriptID: "et",
    }, operations.UpdateScriptSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Script != nil {
        // handle response
    }
}
```
