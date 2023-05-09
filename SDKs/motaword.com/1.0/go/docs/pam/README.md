# Pam

### Available Operations

* [GetClientProfileForPam](#getclientprofileforpam) - Get the Pam profile of a client for this client ID
* [GetProjectCompletionReportForPam](#getprojectcompletionreportforpam) - Get completion report data of a project
* [PostMessage](#postmessage) - Sends a message to chat

## GetClientProfileForPam

Get the Pam  profile of a client for this client ID

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pam.GetClientProfileForPam(ctx, operations.GetClientProfileForPamRequest{
        ClientID: 748664,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientProfile != nil {
        // handle response
    }
}
```

## GetProjectCompletionReportForPam

Get completion report data of a project

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pam.GetProjectCompletionReportForPam(ctx, operations.GetProjectCompletionReportForPamRequest{
        ProjectID: 92596,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectCompletionReport != nil {
        // handle response
    }
}
```

## PostMessage

Sends a message to the channel.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pam.PostMessage(ctx, shared.PamMessage{
        Message: sdk.String("saepe"),
        Recipients: []string{
            "veritatis",
        },
        Slots: []string{
            "quos",
            "tempore",
            "cupiditate",
        },
        ThreadID: sdk.String("aperiam"),
        ThreadKey: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```
