# DpsMessage

### Available Operations

* [DeleteDpsMessage](#deletedpsmessage) - Deletes the DPS message
* [GetDpsMessageFromEmployer](#getdpsmessagefromemployer) - Gets the DPS message
* [GetDpsMessagesFromEmployer](#getdpsmessagesfromemployer) - Gets the DPS messages
* [PatchDpsMessage](#patchdpsmessage) - Patches the DPS message
* [PostDpsMessage](#postdpsmessage) - Posta the DPS message
* [PutDpsMessage](#putdpsmessage) - Puts the DPS message

## DeleteDpsMessage

Deletes the DPS message

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
    res, err := s.DpsMessage.DeleteDpsMessage(ctx, operations.DeleteDpsMessageRequest{
        APIVersion: "ea",
        Authorization: "accusantium",
        DpsMessageID: "ab",
        EmployerID: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDpsMessageFromEmployer

Gets the DPS message

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
    res, err := s.DpsMessage.GetDpsMessageFromEmployer(ctx, operations.GetDpsMessageFromEmployerRequest{
        APIVersion: "quidem",
        Authorization: "ipsam",
        DpsMessageID: "voluptate",
        EmployerID: "autem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DpsMessage != nil {
        // handle response
    }
}
```

## GetDpsMessagesFromEmployer

Gets the DPS message links

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
    res, err := s.DpsMessage.GetDpsMessagesFromEmployer(ctx, operations.GetDpsMessagesFromEmployerRequest{
        APIVersion: "nam",
        Authorization: "eaque",
        EmployerID: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## PatchDpsMessage

Patches the specified DPS message with the supplied values

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
    res, err := s.DpsMessage.PatchDpsMessage(ctx, operations.PatchDpsMessageRequest{
        APIVersion: "nemo",
        Authorization: "voluptatibus",
        DpsMessageID: "perferendis",
        EmployerID: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DpsMessage != nil {
        // handle response
    }
}
```

## PostDpsMessage

Insert new DPS message

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
    res, err := s.DpsMessage.PostDpsMessage(ctx, operations.PostDpsMessageRequest{
        APIVersion: "amet",
        Authorization: "aut",
        EmployerID: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Link != nil {
        // handle response
    }
}
```

## PutDpsMessage

Puts the DPS message

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
    res, err := s.DpsMessage.PutDpsMessage(ctx, operations.PutDpsMessageRequest{
        APIVersion: "corporis",
        Authorization: "hic",
        DpsMessageID: "libero",
        EmployerID: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DpsMessage != nil {
        // handle response
    }
}
```
