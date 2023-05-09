# Tools

## Overview

Tools to assist with sending and receiving messages, such as file sharing, translation, etc.

### Available Operations

* [ToolsShareFileMultipart](#toolssharefilemultipart) - Share file - use to host a file and generate a short link to be used directly in a message or as a link to media for a MMS
* [ToolsShareFileRaw](#toolssharefileraw) - Share file - use to host a file and generate a short link to be used directly in a message or as a link to media for a MMS

## ToolsShareFileMultipart

Share file - use to host a file and generate a short link to be used directly in a message or as a link to media for a MMS

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
    res, err := s.Tools.ToolsShareFileMultipart(ctx, operations.ToolsShareFileMultipartFormData{
        Media: &operations.ToolsShareFileMultipartFormDataMedia{
            Content: []byte("pariatur"),
            Media: "nemo",
        },
    }, operations.ToolsShareFileMultipartSecurity{
        SakariAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShareFileResponse != nil {
        // handle response
    }
}
```

## ToolsShareFileRaw

Share file - use to host a file and generate a short link to be used directly in a message or as a link to media for a MMS

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
    res, err := s.Tools.ToolsShareFileRaw(ctx, []byte("voluptatibus"), operations.ToolsShareFileRawSecurity{
        SakariAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShareFileResponse != nil {
        // handle response
    }
}
```
