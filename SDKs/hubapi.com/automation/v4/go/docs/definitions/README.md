# Definitions

## Overview

Operations to configure custom workflow actions.

### Available Operations

* [DeleteAutomationV4ActionsAppIDDefinitionIDArchive](#deleteautomationv4actionsappiddefinitionidarchive) - Archive a custom action
* [GetAutomationV4ActionsAppIDDefinitionIDGetByID](#getautomationv4actionsappiddefinitionidgetbyid) - Get a custom action
* [GetAutomationV4ActionsAppIDGetPage](#getautomationv4actionsappidgetpage) - Get all custom actions
* [PatchAutomationV4ActionsAppIDDefinitionIDUpdate](#patchautomationv4actionsappiddefinitionidupdate) - Update a custom action
* [PostAutomationV4ActionsAppIDCreate](#postautomationv4actionsappidcreate) - Create new custom action

## DeleteAutomationV4ActionsAppIDDefinitionIDArchive

Archives a single custom workflow action with the specified ID. Workflows that currently use this custom action will stop attempting to execute the action, and all future executions will be marked as a failure.

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
    res, err := s.Definitions.DeleteAutomationV4ActionsAppIDDefinitionIDArchive(ctx, operations.DeleteAutomationV4ActionsAppIDDefinitionIDArchiveRequest{
        AppID: 118274,
        DefinitionID: "nam",
    }, operations.DeleteAutomationV4ActionsAppIDDefinitionIDArchiveSecurity{
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

## GetAutomationV4ActionsAppIDDefinitionIDGetByID

Returns a single custom workflow action with the specified ID.

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
    res, err := s.Definitions.GetAutomationV4ActionsAppIDDefinitionIDGetByID(ctx, operations.GetAutomationV4ActionsAppIDDefinitionIDGetByIDRequest{
        AppID: 639921,
        Archived: sdk.Bool(false),
        DefinitionID: "occaecati",
    }, operations.GetAutomationV4ActionsAppIDDefinitionIDGetByIDSecurity{
        DeveloperHapikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExtensionActionDefinition != nil {
        // handle response
    }
}
```

## GetAutomationV4ActionsAppIDGetPage

Returns a list of all custom workflow actions.

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
    res, err := s.Definitions.GetAutomationV4ActionsAppIDGetPage(ctx, operations.GetAutomationV4ActionsAppIDGetPageRequest{
        After: sdk.String("fugit"),
        AppID: 537373,
        Archived: sdk.Bool(false),
        Limit: sdk.Int(944669),
    }, operations.GetAutomationV4ActionsAppIDGetPageSecurity{
        DeveloperHapikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionResponseExtensionActionDefinitionForwardPaging != nil {
        // handle response
    }
}
```

## PatchAutomationV4ActionsAppIDDefinitionIDUpdate

Updates a custom workflow action with new values for the specified fields.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Definitions.PatchAutomationV4ActionsAppIDDefinitionIDUpdate(ctx, operations.PatchAutomationV4ActionsAppIDDefinitionIDUpdateRequest{
        ExtensionActionDefinitionPatch: shared.ExtensionActionDefinitionPatch{
            ActionURL: sdk.String("optio"),
            InputFieldDependencies: []shared.ExtensionActionDefinitionPatchInputFieldDependencies{
                shared.ExtensionActionDefinitionPatchInputFieldDependencies{},
                shared.ExtensionActionDefinitionPatchInputFieldDependencies{},
                shared.ExtensionActionDefinitionPatchInputFieldDependencies{},
            },
            InputFields: []shared.InputFieldDefinition{
                shared.InputFieldDefinition{
                    IsRequired: false,
                    SupportedValueTypes: []shared.InputFieldDefinitionSupportedValueTypesEnum{
                        shared.InputFieldDefinitionSupportedValueTypesEnumObjectProperty,
                        shared.InputFieldDefinitionSupportedValueTypesEnumStaticValue,
                    },
                    TypeDefinition: shared.FieldTypeDefinition{
                        FieldType: shared.FieldTypeDefinitionFieldTypeEnumDate.ToPointer(),
                        Name: "Jonathon Klocko",
                        Options: []shared.Option{
                            shared.Option{
                                Description: "perferendis",
                                DisplayOrder: 324141,
                                DoubleData: 6176.36,
                                Hidden: false,
                                Label: "sed",
                                ReadOnly: false,
                                Value: "iste",
                            },
                        },
                        OptionsURL: sdk.String("dolor"),
                        ReferencedObjectType: shared.FieldTypeDefinitionReferencedObjectTypeEnumImport.ToPointer(),
                        Type: shared.FieldTypeDefinitionTypeEnumDatetime,
                    },
                },
            },
            Labels: map[string]shared.ActionLabels{
                "saepe": shared.ActionLabels{
                    ActionCardContent: sdk.String("fuga"),
                    ActionDescription: sdk.String("in"),
                    ActionName: "corporis",
                    AppDisplayName: sdk.String("iste"),
                    InputFieldDescriptions: map[string]string{
                        "saepe": "quidem",
                        "architecto": "ipsa",
                    },
                    InputFieldLabels: map[string]string{
                        "est": "mollitia",
                        "laborum": "dolores",
                        "dolorem": "corporis",
                        "explicabo": "nobis",
                    },
                },
                "enim": shared.ActionLabels{
                    ActionCardContent: sdk.String("omnis"),
                    ActionDescription: sdk.String("nemo"),
                    ActionName: "minima",
                    AppDisplayName: sdk.String("excepturi"),
                    InputFieldDescriptions: map[string]string{
                        "iure": "culpa",
                    },
                    InputFieldLabels: map[string]string{
                        "sapiente": "architecto",
                        "mollitia": "dolorem",
                        "culpa": "consequuntur",
                        "repellat": "mollitia",
                    },
                },
                "occaecati": shared.ActionLabels{
                    ActionCardContent: sdk.String("numquam"),
                    ActionDescription: sdk.String("commodi"),
                    ActionName: "quam",
                    AppDisplayName: sdk.String("molestiae"),
                    InputFieldDescriptions: map[string]string{
                        "error": "quia",
                    },
                    InputFieldLabels: map[string]string{
                        "vitae": "laborum",
                        "animi": "enim",
                    },
                },
                "odit": shared.ActionLabels{
                    ActionCardContent: sdk.String("quo"),
                    ActionDescription: sdk.String("sequi"),
                    ActionName: "tenetur",
                    AppDisplayName: sdk.String("ipsam"),
                    InputFieldDescriptions: map[string]string{
                        "possimus": "aut",
                        "quasi": "error",
                        "temporibus": "laborum",
                    },
                    InputFieldLabels: map[string]string{
                        "reiciendis": "voluptatibus",
                    },
                },
            },
            ObjectRequestOptions: &shared.ObjectRequestOptions{
                Properties: []string{
                    "nihil",
                    "praesentium",
                    "voluptatibus",
                    "ipsa",
                },
            },
            ObjectTypes: []string{
                "voluptate",
                "cum",
                "perferendis",
            },
            Published: sdk.Bool(false),
        },
        AppID: 39187,
        DefinitionID: "reprehenderit",
    }, operations.PatchAutomationV4ActionsAppIDDefinitionIDUpdateSecurity{
        DeveloperHapikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExtensionActionDefinition != nil {
        // handle response
    }
}
```

## PostAutomationV4ActionsAppIDCreate

Creates a new custom workflow action.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Definitions.PostAutomationV4ActionsAppIDCreate(ctx, operations.PostAutomationV4ActionsAppIDCreateRequest{
        ExtensionActionDefinitionInput: shared.ExtensionActionDefinitionInput{
            ActionURL: "ut",
            ArchivedAt: sdk.Int64(979587),
            Functions: []shared.ActionFunction{
                shared.ActionFunction{
                    FunctionSource: "corporis",
                    FunctionType: shared.ActionFunctionFunctionTypeEnumPreActionExecution,
                    ID: sdk.String("71b5e6e1-3b99-4d48-8e1e-91e450ad2abd"),
                },
            },
            InputFieldDependencies: []shared.ExtensionActionDefinitionInputInputFieldDependencies{
                shared.ExtensionActionDefinitionInputInputFieldDependencies{},
                shared.ExtensionActionDefinitionInputInputFieldDependencies{},
            },
            InputFields: []shared.InputFieldDefinition{
                shared.InputFieldDefinition{
                    IsRequired: false,
                    SupportedValueTypes: []shared.InputFieldDefinitionSupportedValueTypesEnum{
                        shared.InputFieldDefinitionSupportedValueTypesEnumObjectProperty,
                    },
                    TypeDefinition: shared.FieldTypeDefinition{
                        FieldType: shared.FieldTypeDefinitionFieldTypeEnumText.ToPointer(),
                        Name: "Christopher Cummerata",
                        Options: []shared.Option{
                            shared.Option{
                                Description: "fugit",
                                DisplayOrder: 677817,
                                DoubleData: 5696.18,
                                Hidden: false,
                                Label: "tempora",
                                ReadOnly: false,
                                Value: "facilis",
                            },
                        },
                        OptionsURL: sdk.String("tempore"),
                        ReferencedObjectType: shared.FieldTypeDefinitionReferencedObjectTypeEnumCommunication.ToPointer(),
                        Type: shared.FieldTypeDefinitionTypeEnumObjectCoordinates,
                    },
                },
                shared.InputFieldDefinition{
                    IsRequired: false,
                    SupportedValueTypes: []shared.InputFieldDefinitionSupportedValueTypesEnum{
                        shared.InputFieldDefinitionSupportedValueTypesEnumStaticValue,
                        shared.InputFieldDefinitionSupportedValueTypesEnumFieldData,
                    },
                    TypeDefinition: shared.FieldTypeDefinition{
                        FieldType: shared.FieldTypeDefinitionFieldTypeEnumText.ToPointer(),
                        Name: "Sherri Tremblay",
                        Options: []shared.Option{
                            shared.Option{
                                Description: "debitis",
                                DisplayOrder: 952749,
                                DoubleData: 6800.56,
                                Hidden: false,
                                Label: "in",
                                ReadOnly: false,
                                Value: "in",
                            },
                        },
                        OptionsURL: sdk.String("illum"),
                        ReferencedObjectType: shared.FieldTypeDefinitionReferencedObjectTypeEnumTemplate.ToPointer(),
                        Type: shared.FieldTypeDefinitionTypeEnumPhoneNumber,
                    },
                },
            },
            Labels: map[string]shared.ActionLabels{
                "magnam": shared.ActionLabels{
                    ActionCardContent: sdk.String("cumque"),
                    ActionDescription: sdk.String("facere"),
                    ActionName: "ea",
                    AppDisplayName: sdk.String("aliquid"),
                    InputFieldDescriptions: map[string]string{
                        "accusamus": "non",
                        "occaecati": "enim",
                        "accusamus": "delectus",
                    },
                    InputFieldLabels: map[string]string{
                        "provident": "nam",
                        "id": "blanditiis",
                        "deleniti": "sapiente",
                    },
                },
            },
            ObjectRequestOptions: &shared.ObjectRequestOptions{
                Properties: []string{
                    "deserunt",
                },
            },
            ObjectTypes: []string{
                "vel",
                "natus",
            },
            Published: false,
        },
        AppID: 606393,
    }, operations.PostAutomationV4ActionsAppIDCreateSecurity{
        DeveloperHapikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExtensionActionDefinition != nil {
        // handle response
    }
}
```
