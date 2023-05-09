# CompositeTypes

### Available Operations

* [DeploymentmanagerCompositeTypesDelete](#deploymentmanagercompositetypesdelete) - Deletes a composite type.
* [DeploymentmanagerCompositeTypesGet](#deploymentmanagercompositetypesget) - Gets information about a specific composite type.
* [DeploymentmanagerCompositeTypesInsert](#deploymentmanagercompositetypesinsert) - Creates a composite type.
* [DeploymentmanagerCompositeTypesList](#deploymentmanagercompositetypeslist) - Lists all composite types for Deployment Manager.
* [DeploymentmanagerCompositeTypesPatch](#deploymentmanagercompositetypespatch) - Patches a composite type.
* [DeploymentmanagerCompositeTypesUpdate](#deploymentmanagercompositetypesupdate) - Updates a composite type.

## DeploymentmanagerCompositeTypesDelete

Deletes a composite type.

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
    res, err := s.CompositeTypes.DeploymentmanagerCompositeTypesDelete(ctx, operations.DeploymentmanagerCompositeTypesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsa"),
        CompositeType: "delectus",
        Fields: sdk.String("tempora"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        Project: "minus",
        QuotaUser: sdk.String("placeat"),
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("iusto"),
    }, operations.DeploymentmanagerCompositeTypesDeleteSecurity{
        Option1: &operations.DeploymentmanagerCompositeTypesDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## DeploymentmanagerCompositeTypesGet

Gets information about a specific composite type.

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
    res, err := s.CompositeTypes.DeploymentmanagerCompositeTypesGet(ctx, operations.DeploymentmanagerCompositeTypesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nisi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("temporibus"),
        CompositeType: "ab",
        Fields: sdk.String("quis"),
        Key: sdk.String("veritatis"),
        OauthToken: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        Project: "perferendis",
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("repellendus"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.DeploymentmanagerCompositeTypesGetSecurity{
        Option1: &operations.DeploymentmanagerCompositeTypesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompositeType != nil {
        // handle response
    }
}
```

## DeploymentmanagerCompositeTypesInsert

Creates a composite type.

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
    res, err := s.CompositeTypes.DeploymentmanagerCompositeTypesInsert(ctx, operations.DeploymentmanagerCompositeTypesInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CompositeType: &shared.CompositeType{
            Description: sdk.String("odit"),
            ID: sdk.String("at"),
            InsertTime: sdk.String("at"),
            Labels: []shared.CompositeTypeLabelEntry{
                shared.CompositeTypeLabelEntry{
                    Key: sdk.String("molestiae"),
                    Value: sdk.String("quod"),
                },
                shared.CompositeTypeLabelEntry{
                    Key: sdk.String("quod"),
                    Value: sdk.String("esse"),
                },
                shared.CompositeTypeLabelEntry{
                    Key: sdk.String("totam"),
                    Value: sdk.String("porro"),
                },
                shared.CompositeTypeLabelEntry{
                    Key: sdk.String("dolorum"),
                    Value: sdk.String("dicta"),
                },
            },
            Name: sdk.String("Luke McCullough"),
            Operation: &shared.Operation{
                ClientOperationID: sdk.String("hic"),
                CreationTimestamp: sdk.String("optio"),
                Description: sdk.String("totam"),
                EndTime: sdk.String("beatae"),
                Error: &shared.OperationError{
                    Errors: []shared.OperationErrorErrors{
                        shared.OperationErrorErrors{
                            Code: sdk.String("molestiae"),
                            Location: sdk.String("modi"),
                            Message: sdk.String("qui"),
                        },
                        shared.OperationErrorErrors{
                            Code: sdk.String("impedit"),
                            Location: sdk.String("cum"),
                            Message: sdk.String("esse"),
                        },
                    },
                },
                HTTPErrorMessage: sdk.String("ipsum"),
                HTTPErrorStatusCode: sdk.Int(568434),
                ID: sdk.String("aspernatur"),
                InsertTime: sdk.String("perferendis"),
                Kind: sdk.String("ad"),
                Name: sdk.String("Louis Moore"),
                OperationGroupID: sdk.String("laboriosam"),
                OperationType: sdk.String("hic"),
                Progress: sdk.Int(902599),
                Region: sdk.String("fuga"),
                SelfLink: sdk.String("in"),
                StartTime: sdk.String("corporis"),
                Status: shared.OperationStatusEnumRunning.ToPointer(),
                StatusMessage: sdk.String("iure"),
                TargetID: sdk.String("saepe"),
                TargetLink: sdk.String("quidem"),
                User: sdk.String("architecto"),
                Warnings: []shared.OperationWarnings{
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumInvalidHealthCheckForDynamicWieghtedLb.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("mollitia"),
                                Value: sdk.String("laborum"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("dolores"),
                                Value: sdk.String("dolorem"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("corporis"),
                                Value: sdk.String("explicabo"),
                            },
                        },
                        Message: sdk.String("nobis"),
                    },
                },
                Zone: sdk.String("enim"),
            },
            SelfLink: sdk.String("omnis"),
            Status: shared.CompositeTypeStatusEnumDeprecated.ToPointer(),
            TemplateContents: &shared.TemplateContents{
                Imports: []shared.ImportFile{
                    shared.ImportFile{
                        Content: sdk.String("excepturi"),
                        Name: sdk.String("Charlene Nicolas"),
                    },
                    shared.ImportFile{
                        Content: sdk.String("architecto"),
                        Name: sdk.String("Mike Nicolas"),
                    },
                },
                Interpreter: shared.TemplateContentsInterpreterEnumPython.ToPointer(),
                MainTemplate: sdk.String("occaecati"),
                Schema: sdk.String("numquam"),
                Template: sdk.String("commodi"),
            },
        },
        AccessToken: sdk.String("quam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("velit"),
        Fields: sdk.String("error"),
        Key: sdk.String("quia"),
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        Project: "vitae",
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("animi"),
        UploadProtocol: sdk.String("enim"),
    }, operations.DeploymentmanagerCompositeTypesInsertSecurity{
        Option1: &operations.DeploymentmanagerCompositeTypesInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## DeploymentmanagerCompositeTypesList

Lists all composite types for Deployment Manager.

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
    res, err := s.CompositeTypes.DeploymentmanagerCompositeTypesList(ctx, operations.DeploymentmanagerCompositeTypesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tenetur"),
        Fields: sdk.String("ipsam"),
        Filter: sdk.String("id"),
        Key: sdk.String("possimus"),
        MaxResults: sdk.Int64(13571),
        OauthToken: sdk.String("quasi"),
        OrderBy: sdk.String("error"),
        PageToken: sdk.String("temporibus"),
        PrettyPrint: sdk.Bool(false),
        Project: "laborum",
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.DeploymentmanagerCompositeTypesListSecurity{
        Option1: &operations.DeploymentmanagerCompositeTypesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompositeTypesListResponse != nil {
        // handle response
    }
}
```

## DeploymentmanagerCompositeTypesPatch

Patches a composite type.

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
    res, err := s.CompositeTypes.DeploymentmanagerCompositeTypesPatch(ctx, operations.DeploymentmanagerCompositeTypesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CompositeType1: &shared.CompositeType{
            Description: sdk.String("nihil"),
            ID: sdk.String("praesentium"),
            InsertTime: sdk.String("voluptatibus"),
            Labels: []shared.CompositeTypeLabelEntry{
                shared.CompositeTypeLabelEntry{
                    Key: sdk.String("omnis"),
                    Value: sdk.String("voluptate"),
                },
            },
            Name: sdk.String("Thomas Batz"),
            Operation: &shared.Operation{
                ClientOperationID: sdk.String("maiores"),
                CreationTimestamp: sdk.String("dicta"),
                Description: sdk.String("corporis"),
                EndTime: sdk.String("dolore"),
                Error: &shared.OperationError{
                    Errors: []shared.OperationErrorErrors{
                        shared.OperationErrorErrors{
                            Code: sdk.String("dicta"),
                            Location: sdk.String("harum"),
                            Message: sdk.String("enim"),
                        },
                        shared.OperationErrorErrors{
                            Code: sdk.String("accusamus"),
                            Location: sdk.String("commodi"),
                            Message: sdk.String("repudiandae"),
                        },
                    },
                },
                HTTPErrorMessage: sdk.String("quae"),
                HTTPErrorStatusCode: sdk.Int(216822),
                ID: sdk.String("quidem"),
                InsertTime: sdk.String("molestias"),
                Kind: sdk.String("excepturi"),
                Name: sdk.String("Joel Lang"),
                OperationGroupID: sdk.String("quasi"),
                OperationType: sdk.String("repudiandae"),
                Progress: sdk.Int(575947),
                Region: sdk.String("veritatis"),
                SelfLink: sdk.String("itaque"),
                StartTime: sdk.String("incidunt"),
                Status: shared.OperationStatusEnumPending.ToPointer(),
                StatusMessage: sdk.String("consequatur"),
                TargetID: sdk.String("est"),
                TargetLink: sdk.String("quibusdam"),
                User: sdk.String("explicabo"),
                Warnings: []shared.OperationWarnings{
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumSchemaValidationIgnored.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("labore"),
                                Value: sdk.String("modi"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("qui"),
                                Value: sdk.String("aliquid"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("cupiditate"),
                                Value: sdk.String("quos"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("perferendis"),
                                Value: sdk.String("magni"),
                            },
                        },
                        Message: sdk.String("assumenda"),
                    },
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumRequiredTosAgreement.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("fugit"),
                                Value: sdk.String("dolorum"),
                            },
                        },
                        Message: sdk.String("excepturi"),
                    },
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumNextHopNotRunning.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("tempore"),
                                Value: sdk.String("labore"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("delectus"),
                                Value: sdk.String("eum"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("non"),
                                Value: sdk.String("eligendi"),
                            },
                        },
                        Message: sdk.String("sint"),
                    },
                },
                Zone: sdk.String("aliquid"),
            },
            SelfLink: sdk.String("provident"),
            Status: shared.CompositeTypeStatusEnumSupported.ToPointer(),
            TemplateContents: &shared.TemplateContents{
                Imports: []shared.ImportFile{
                    shared.ImportFile{
                        Content: sdk.String("officia"),
                        Name: sdk.String("Raquel Wilderman"),
                    },
                    shared.ImportFile{
                        Content: sdk.String("in"),
                        Name: sdk.String("Mrs. Emilio Price"),
                    },
                    shared.ImportFile{
                        Content: sdk.String("facere"),
                        Name: sdk.String("Beth Padberg"),
                    },
                },
                Interpreter: shared.TemplateContentsInterpreterEnumPython.ToPointer(),
                MainTemplate: sdk.String("enim"),
                Schema: sdk.String("accusamus"),
                Template: sdk.String("delectus"),
            },
        },
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nam"),
        CompositeTypePathParameter: "id",
        Fields: sdk.String("blanditiis"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        Project: "amet",
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("nisi"),
        UploadProtocol: sdk.String("vel"),
    }, operations.DeploymentmanagerCompositeTypesPatchSecurity{
        Option1: &operations.DeploymentmanagerCompositeTypesPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## DeploymentmanagerCompositeTypesUpdate

Updates a composite type.

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
    res, err := s.CompositeTypes.DeploymentmanagerCompositeTypesUpdate(ctx, operations.DeploymentmanagerCompositeTypesUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CompositeType1: &shared.CompositeType{
            Description: sdk.String("omnis"),
            ID: sdk.String("molestiae"),
            InsertTime: sdk.String("perferendis"),
            Labels: []shared.CompositeTypeLabelEntry{
                shared.CompositeTypeLabelEntry{
                    Key: sdk.String("magnam"),
                    Value: sdk.String("distinctio"),
                },
                shared.CompositeTypeLabelEntry{
                    Key: sdk.String("id"),
                    Value: sdk.String("labore"),
                },
            },
            Name: sdk.String("Laurie Mosciski"),
            Operation: &shared.Operation{
                ClientOperationID: sdk.String("vero"),
                CreationTimestamp: sdk.String("aspernatur"),
                Description: sdk.String("architecto"),
                EndTime: sdk.String("magnam"),
                Error: &shared.OperationError{
                    Errors: []shared.OperationErrorErrors{
                        shared.OperationErrorErrors{
                            Code: sdk.String("excepturi"),
                            Location: sdk.String("ullam"),
                            Message: sdk.String("provident"),
                        },
                    },
                },
                HTTPErrorMessage: sdk.String("quos"),
                HTTPErrorStatusCode: sdk.Int(574325),
                ID: sdk.String("accusantium"),
                InsertTime: sdk.String("mollitia"),
                Kind: sdk.String("reiciendis"),
                Name: sdk.String("Tommy Kemmer"),
                OperationGroupID: sdk.String("odit"),
                OperationType: sdk.String("nemo"),
                Progress: sdk.Int(97260),
                Region: sdk.String("iure"),
                SelfLink: sdk.String("doloribus"),
                StartTime: sdk.String("debitis"),
                Status: shared.OperationStatusEnumPending.ToPointer(),
                StatusMessage: sdk.String("maxime"),
                TargetID: sdk.String("deleniti"),
                TargetLink: sdk.String("facilis"),
                User: sdk.String("in"),
                Warnings: []shared.OperationWarnings{
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumUnreachable.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("ullam"),
                                Value: sdk.String("expedita"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("nihil"),
                                Value: sdk.String("repellat"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("quibusdam"),
                                Value: sdk.String("sed"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("saepe"),
                                Value: sdk.String("pariatur"),
                            },
                        },
                        Message: sdk.String("accusantium"),
                    },
                },
                Zone: sdk.String("consequuntur"),
            },
            SelfLink: sdk.String("praesentium"),
            Status: shared.CompositeTypeStatusEnumExperimental.ToPointer(),
            TemplateContents: &shared.TemplateContents{
                Imports: []shared.ImportFile{
                    shared.ImportFile{
                        Content: sdk.String("sunt"),
                        Name: sdk.String("Gilberto Streich"),
                    },
                },
                Interpreter: shared.TemplateContentsInterpreterEnumPython.ToPointer(),
                MainTemplate: sdk.String("odit"),
                Schema: sdk.String("ea"),
                Template: sdk.String("accusantium"),
            },
        },
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quidem"),
        CompositeTypePathParameter: "ipsam",
        Fields: sdk.String("voluptate"),
        Key: sdk.String("autem"),
        OauthToken: sdk.String("nam"),
        PrettyPrint: sdk.Bool(false),
        Project: "eaque",
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.DeploymentmanagerCompositeTypesUpdateSecurity{
        Option1: &operations.DeploymentmanagerCompositeTypesUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
