# Commands

## Overview

Sending commands to devices and stored command management

### Available Operations

* [DeleteCommandsID](#deletecommandsid) - Delete a Saved Command
* [GetCommands](#getcommands) - Fetch a list of Saved Commands
* [GetCommandsSend](#getcommandssend) - Fetch a list of Saved Commands supported by Device at the moment
* [GetCommandsTypes](#getcommandstypes) - Fetch a list of available Commands for the Device or all possible Commands if Device ommited
* [PostCommands](#postcommands) - Create a Saved Command
* [PostCommandsSend](#postcommandssend) - Dispatch commands to device
* [PutCommandsID](#putcommandsid) - Update a Saved Command

## DeleteCommandsID

Delete a Saved Command

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Commands.DeleteCommandsID(ctx, operations.DeleteCommandsIDRequest{
        ID: 800911,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCommands

Without params, it returns a list of Saved Commands the user has access to

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Commands.GetCommands(ctx, operations.GetCommandsRequest{
        All: sdk.Bool(false),
        DeviceID: sdk.Int64(461479),
        GroupID: sdk.Int64(520478),
        Refresh: sdk.Bool(false),
        UserID: sdk.Int64(780529),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Commands != nil {
        // handle response
    }
}
```

## GetCommandsSend

Return a list of saved commands linked to Device and its groups, filtered by current Device protocol support

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Commands.GetCommandsSend(ctx, operations.GetCommandsSendRequest{
        DeviceID: sdk.Int64(678880),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Commands != nil {
        // handle response
    }
}
```

## GetCommandsTypes

Fetch a list of available Commands for the Device or all possible Commands if Device ommited

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Commands.GetCommandsTypes(ctx, operations.GetCommandsTypesRequest{
        DeviceID: sdk.Int64(118274),
        Protocol: sdk.String("nam"),
        TextChannel: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommandTypes != nil {
        // handle response
    }
}
```

## PostCommands

Create a Saved Command

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Commands.PostCommands(ctx, shared.Command{
        Attributes: map[string]interface{}{
            "occaecati": "fugit",
            "deleniti": "hic",
            "optio": "totam",
        },
        Description: sdk.String("beatae"),
        DeviceID: sdk.Int64(414662),
        ID: sdk.Int64(473600),
        Type: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Command != nil {
        // handle response
    }
}
```

## PostCommandsSend

Dispatch a new command or Saved Command if _body.id_ set

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Commands.PostCommandsSend(ctx, shared.Command{
        Attributes: map[string]interface{}{
            "impedit": "cum",
        },
        Description: sdk.String("esse"),
        DeviceID: sdk.Int64(216550),
        ID: sdk.Int64(568434),
        Type: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Command != nil {
        // handle response
    }
}
```

## PutCommandsID

Update a Saved Command

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Commands.PutCommandsID(ctx, operations.PutCommandsIDRequest{
        Command: shared.Command{
            Attributes: map[string]interface{}{
                "ad": "natus",
            },
            Description: sdk.String("sed"),
            DeviceID: sdk.Int64(612096),
            ID: sdk.Int64(222321),
            Type: sdk.String("natus"),
        },
        ID: 386489,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Command != nil {
        // handle response
    }
}
```
