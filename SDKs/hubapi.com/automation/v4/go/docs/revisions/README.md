# Revisions

## Overview

Operations to retrieve the revisions for custom workflow actions.

### Available Operations

* [GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByID](#getautomationv4actionsappiddefinitionidrevisionsrevisionidgetbyid) - Get a revision for a custom action
* [GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPage](#getautomationv4actionsappiddefinitionidrevisionsgetpage) - Get all revisions for a custom action

## GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByID

Returns the given version of a custom workflow action.

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
    res, err := s.Revisions.GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByID(ctx, operations.GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDRequest{
        AppID: 652103,
        DefinitionID: "ad",
        RevisionID: "eum",
    }, operations.GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDSecurity{
        DeveloperHapikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionRevision != nil {
        // handle response
    }
}
```

## GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPage

Returns a list of revisions for a custom workflow action.

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
    res, err := s.Revisions.GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPage(ctx, operations.GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPageRequest{
        After: sdk.String("dolor"),
        AppID: 896547,
        DefinitionID: "odit",
        Limit: sdk.Int(367562),
    }, operations.GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPageSecurity{
        DeveloperHapikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionResponseActionRevisionForwardPaging != nil {
        // handle response
    }
}
```
