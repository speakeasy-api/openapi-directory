# Gitignore

## Overview

View gitignore templates

### Available Operations

* [GitignoreGetAllTemplates](#gitignoregetalltemplates) - Get all gitignore templates
* [GitignoreGetTemplate](#gitignoregettemplate) - Get a gitignore template

## GitignoreGetAllTemplates

List all templates available to pass as an option when [creating a repository](https://docs.github.com/enterprise-server@3.5/rest/reference/repos#create-a-repository-for-the-authenticated-user).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/gitignore#get-all-gitignore-templates>

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
    res, err := s.Gitignore.GitignoreGetAllTemplates(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GitignoreGetAllTemplates200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GitignoreGetTemplate

The API also allows fetching the source of a single template.
Use the raw [media type](https://docs.github.com/enterprise-server@3.5/rest/overview/media-types/) to get the raw contents.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/gitignore#get-a-gitignore-template>

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
    res, err := s.Gitignore.GitignoreGetTemplate(ctx, operations.GitignoreGetTemplateRequest{
        Name: "Mr. Santiago Stoltenberg IV",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GitignoreTemplate != nil {
        // handle response
    }
}
```
