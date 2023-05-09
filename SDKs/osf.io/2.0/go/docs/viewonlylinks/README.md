# ViewOnlyLinks

### Available Operations

* [ViewOnlyLinksNodeList](#viewonlylinksnodelist) - List all nodes
* [ViewOnlyLinksRead](#viewonlylinksread) - Retrieve a view only link

## ViewOnlyLinksNodeList


The list of nodes which this view only link gives read-only access to.
#### Permissions
Only project administrators may retrieve the nodes of a view only link. Attempting to retrieve a view only link without appropriate permissions will result in a 403 Forbidden response.
#### Returns
Returns a JSON object containing `data` and `links` keys.
The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object and contains the full representation of the node, meaning additional requests to a node's detail view are not necessary.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

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
    res, err := s.ViewOnlyLinks.ViewOnlyLinksNodeList(ctx, operations.ViewOnlyLinksNodeListRequest{
        LinkID: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ViewOnlyLinksRead

Retrieves details about a specific view only link.
#### Permissions
Only project administrators may retrieve the details of a view only link. Attempting to retrieve a view only link without appropriate permissions will result in a 403 Forbidden response.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested view only link, if the request is successful.
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
    res, err := s.ViewOnlyLinks.ViewOnlyLinksRead(ctx, operations.ViewOnlyLinksReadRequest{
        LinkID: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
