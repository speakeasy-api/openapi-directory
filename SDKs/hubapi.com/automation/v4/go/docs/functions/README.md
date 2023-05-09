# Functions

## Overview

Operations to configure the functions associated with custom workflow actions.

### Available Operations

* [DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchive](#deleteautomationv4actionsappiddefinitionidfunctionsfunctiontypefunctionidarchive) - Delete a custom action function
* [DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionType](#deleteautomationv4actionsappiddefinitionidfunctionsfunctiontypearchivebyfunctiontype) - Delete a custom action function
* [GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByID](#getautomationv4actionsappiddefinitionidfunctionsfunctiontypefunctionidgetbyid) - Get a custom action function
* [GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionType](#getautomationv4actionsappiddefinitionidfunctionsfunctiontypegetbyfunctiontype) - Get a custom action function
* [GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPage](#getautomationv4actionsappiddefinitionidfunctionsgetpage) - Get all custom action functions
* [PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplace](#putautomationv4actionsappiddefinitionidfunctionsfunctiontypefunctionidcreateorreplace) - Create or replace a custom action function
* [PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionType](#putautomationv4actionsappiddefinitionidfunctionsfunctiontypecreateorreplacebyfunctiontype) - Create or replace a custom action function

## DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchive

Delete a function for a custom workflow action. This will remove the function itself as well as removing the association between the function and the custom action. This can't be undone.

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
    res, err := s.Functions.DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchive(ctx, operations.DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchiveRequest{
        AppID: 474867,
        DefinitionID: "perferendis",
        FunctionID: "nihil",
        FunctionType: operations.DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchiveFunctionTypeEnumPreActionExecution,
    }, operations.DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchiveSecurity{
        DeveloperHapikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionType

Delete a function for a custom workflow action. This will remove the function itself as well as removing the association between the function and the custom action. This can't be undone.

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
    res, err := s.Functions.DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionType(ctx, operations.DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeRequest{
        AppID: 716075,
        DefinitionID: "id",
        FunctionType: operations.DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeFunctionTypeEnumPreActionExecution,
    }, operations.DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeSecurity{
        DeveloperHapikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByID

Returns the given function for a custom workflow action.

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
    res, err := s.Functions.GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByID(ctx, operations.GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDRequest{
        AppID: 290077,
        DefinitionID: "suscipit",
        FunctionID: "natus",
        FunctionType: operations.GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDFunctionTypeEnumPostFetchOptions,
    }, operations.GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDSecurity{
        DeveloperHapikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionFunction != nil {
        // handle response
    }
}
```

## GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionType

Returns the given function for a custom workflow action.

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
    res, err := s.Functions.GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionType(ctx, operations.GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeRequest{
        AppID: 428769,
        DefinitionID: "vero",
        FunctionType: operations.GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeFunctionTypeEnumPreActionExecution,
    }, operations.GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeSecurity{
        DeveloperHapikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionFunction != nil {
        // handle response
    }
}
```

## GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPage

Returns a list of all functions that are associated with the given custom workflow action.

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
    res, err := s.Functions.GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPage(ctx, operations.GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPageRequest{
        AppID: 102863,
        DefinitionID: "magnam",
    }, operations.GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPageSecurity{
        DeveloperHapikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionResponseActionFunctionIdentifierNoPaging != nil {
        // handle response
    }
}
```

## PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplace

Creates or replaces a function for a custom workflow action.

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
    res, err := s.Functions.PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplace(ctx, operations.PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceRequest{
        RequestBody: "et",
        AppID: 569965,
        DefinitionID: "ullam",
        FunctionID: "provident",
        FunctionType: operations.PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceFunctionTypeEnumPreFetchOptions,
    }, operations.PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceSecurity{
        DeveloperHapikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionFunctionIdentifier != nil {
        // handle response
    }
}
```

## PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionType

Creates or replaces a function for a custom workflow action.

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
    res, err := s.Functions.PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionType(ctx, operations.PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionTypeRequest{
        RequestBody: "sint",
        AppID: 33625,
        DefinitionID: "mollitia",
        FunctionType: operations.PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionTypeFunctionTypeEnumPostFetchOptions,
    }, operations.PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionTypeSecurity{
        DeveloperHapikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionFunctionIdentifier != nil {
        // handle response
    }
}
```
