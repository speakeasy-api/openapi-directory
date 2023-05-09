# Wikis

### Available Operations

* [WikiContent](#wikicontent) - Retrieve the Content of a Wiki
* [WikiRead](#wikiread) - Retrieve a Wiki

## WikiContent

Retrieves the plaintext content of a wiki in markdown format.
#### Returns
Returns `text/markdown` of the wiki content itself.
If the request is unsuccessful, plaintext with the error message will be displayed.

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
    res, err := s.Wikis.WikiContent(ctx, operations.WikiContentRequest{
        WikiID: "eius",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## WikiRead

Retrieves the details about a specific wiki.
A wiki is a collection of markdown text pages that can be used to describe the project or dataset of contained in the attached node.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested wiki, if the request was successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

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
    res, err := s.Wikis.WikiRead(ctx, operations.WikiReadRequest{
        WikiID: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
