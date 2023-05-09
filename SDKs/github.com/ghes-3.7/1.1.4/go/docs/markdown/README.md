# Markdown

## Overview

Render GitHub flavored markdown

### Available Operations

* [MarkdownRender](#markdownrender) - Render a Markdown document
* [MarkdownRenderRaw](#markdownrenderraw) - Render a Markdown document in raw mode

## MarkdownRender

Render a Markdown document

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/markdown#render-a-markdown-document>

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
    res, err := s.Markdown.MarkdownRender(ctx, operations.MarkdownRenderRequestBody{
        Context: sdk.String("tempore"),
        Mode: operations.MarkdownRenderRequestBodyModeEnumMarkdown.ToPointer(),
        Text: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MarkdownRender200TextHTMLString != nil {
        // handle response
    }
}
```

## MarkdownRenderRaw

You must send Markdown as plain text (using a `Content-Type` header of `text/plain` or `text/x-markdown`) to this endpoint, rather than using JSON format. In raw mode, [GitHub Flavored Markdown](https://github.github.com/gfm/) is not supported and Markdown will be rendered in plain format like a README.md file. Markdown content must be 400 KB or less.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/markdown#render-a-markdown-document-in-raw-mode>

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
    res, err := s.Markdown.MarkdownRenderRaw(ctx, "odit")
    if err != nil {
        log.Fatal(err)
    }

    if res.MarkdownRenderRaw200TextHTMLString != nil {
        // handle response
    }
}
```
