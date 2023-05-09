# TypeProviders

### Available Operations

* [DeploymentmanagerTypeProvidersDelete](#deploymentmanagertypeprovidersdelete) - Deletes a type provider.
* [DeploymentmanagerTypeProvidersGet](#deploymentmanagertypeprovidersget) - Gets information about a specific type provider.
* [DeploymentmanagerTypeProvidersGetType](#deploymentmanagertypeprovidersgettype) - Gets a type info for a type provided by a TypeProvider.
* [DeploymentmanagerTypeProvidersInsert](#deploymentmanagertypeprovidersinsert) - Creates a type provider.
* [DeploymentmanagerTypeProvidersList](#deploymentmanagertypeproviderslist) - Lists all resource type providers for Deployment Manager.
* [DeploymentmanagerTypeProvidersListTypes](#deploymentmanagertypeproviderslisttypes) - Lists all the type info for a TypeProvider.
* [DeploymentmanagerTypeProvidersPatch](#deploymentmanagertypeproviderspatch) - Patches a type provider.
* [DeploymentmanagerTypeProvidersUpdate](#deploymentmanagertypeprovidersupdate) - Updates a type provider.

## DeploymentmanagerTypeProvidersDelete

Deletes a type provider.

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
    res, err := s.TypeProviders.DeploymentmanagerTypeProvidersDelete(ctx, operations.DeploymentmanagerTypeProvidersDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("a"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("consectetur"),
        Fields: sdk.String("corporis"),
        Key: sdk.String("harum"),
        OauthToken: sdk.String("laboriosam"),
        PrettyPrint: sdk.Bool(false),
        Project: "ipsa",
        QuotaUser: sdk.String("voluptates"),
        TypeProvider: "libero",
        UploadType: sdk.String("vitae"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.DeploymentmanagerTypeProvidersDeleteSecurity{
        Option1: &operations.DeploymentmanagerTypeProvidersDeleteSecurityOption1{
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

## DeploymentmanagerTypeProvidersGet

Gets information about a specific type provider.

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
    res, err := s.TypeProviders.DeploymentmanagerTypeProvidersGet(ctx, operations.DeploymentmanagerTypeProvidersGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("voluptas"),
        Key: sdk.String("voluptas"),
        OauthToken: sdk.String("minima"),
        PrettyPrint: sdk.Bool(false),
        Project: "nobis",
        QuotaUser: sdk.String("dolorum"),
        TypeProvider: "adipisci",
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("dolores"),
    }, operations.DeploymentmanagerTypeProvidersGetSecurity{
        Option1: &operations.DeploymentmanagerTypeProvidersGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TypeProvider != nil {
        // handle response
    }
}
```

## DeploymentmanagerTypeProvidersGetType

Gets a type info for a type provided by a TypeProvider.

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
    res, err := s.TypeProviders.DeploymentmanagerTypeProvidersGetType(ctx, operations.DeploymentmanagerTypeProvidersGetTypeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aliquam"),
        Fields: sdk.String("officiis"),
        Key: sdk.String("temporibus"),
        OauthToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        Project: "adipisci",
        QuotaUser: sdk.String("cum"),
        Type: "blanditiis",
        TypeProvider: "quas",
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("nesciunt"),
    }, operations.DeploymentmanagerTypeProvidersGetTypeSecurity{
        Option1: &operations.DeploymentmanagerTypeProvidersGetTypeSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TypeInfo != nil {
        // handle response
    }
}
```

## DeploymentmanagerTypeProvidersInsert

Creates a type provider.

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
    res, err := s.TypeProviders.DeploymentmanagerTypeProvidersInsert(ctx, operations.DeploymentmanagerTypeProvidersInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TypeProvider: &shared.TypeProvider{
            CollectionOverrides: []shared.CollectionOverride{
                shared.CollectionOverride{
                    Collection: sdk.String("pariatur"),
                    Options: &shared.Options{
                        AsyncOptions: []shared.AsyncOptions{
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("hic"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("nobis"),
                                            Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("rerum"),
                                            Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("reiciendis"),
                                    FinishCondition: sdk.String("explicabo"),
                                    PollingLink: sdk.String("asperiores"),
                                    TargetLink: sdk.String("facilis"),
                                },
                            },
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("voluptate"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("ab"),
                                            Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("dolore"),
                                            Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("sed"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("commodi"),
                                    FinishCondition: sdk.String("quidem"),
                                    PollingLink: sdk.String("explicabo"),
                                    TargetLink: sdk.String("voluptas"),
                                },
                            },
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("unde"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("suscipit"),
                                            Level: shared.DiagnosticLevelEnumError.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("debitis"),
                                    FinishCondition: sdk.String("illo"),
                                    PollingLink: sdk.String("reiciendis"),
                                    TargetLink: sdk.String("perferendis"),
                                },
                            },
                        },
                        InputMappings: []shared.InputMapping{
                            shared.InputMapping{
                                FieldName: sdk.String("maiores"),
                                Location: shared.InputMappingLocationEnumPath.ToPointer(),
                                MethodMatch: sdk.String("sed"),
                                Value: sdk.String("provident"),
                            },
                            shared.InputMapping{
                                FieldName: sdk.String("eius"),
                                Location: shared.InputMappingLocationEnumHeader.ToPointer(),
                                MethodMatch: sdk.String("ipsum"),
                                Value: sdk.String("ea"),
                            },
                            shared.InputMapping{
                                FieldName: sdk.String("occaecati"),
                                Location: shared.InputMappingLocationEnumQuery.ToPointer(),
                                MethodMatch: sdk.String("voluptatibus"),
                                Value: sdk.String("tempora"),
                            },
                        },
                        ValidationOptions: &shared.ValidationOptions{
                            SchemaValidation: shared.ValidationOptionsSchemaValidationEnumIgnore.ToPointer(),
                            UndeclaredProperties: shared.ValidationOptionsUndeclaredPropertiesEnumIgnore.ToPointer(),
                        },
                        VirtualProperties: sdk.String("reiciendis"),
                    },
                },
                shared.CollectionOverride{
                    Collection: sdk.String("ex"),
                    Options: &shared.Options{
                        AsyncOptions: []shared.AsyncOptions{
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("non"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("praesentium"),
                                            Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("quaerat"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("ipsam"),
                                            Level: shared.DiagnosticLevelEnumError.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("rem"),
                                            Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("nobis"),
                                    FinishCondition: sdk.String("error"),
                                    PollingLink: sdk.String("veniam"),
                                    TargetLink: sdk.String("minima"),
                                },
                            },
                        },
                        InputMappings: []shared.InputMapping{
                            shared.InputMapping{
                                FieldName: sdk.String("reiciendis"),
                                Location: shared.InputMappingLocationEnumHeader.ToPointer(),
                                MethodMatch: sdk.String("magni"),
                                Value: sdk.String("aperiam"),
                            },
                            shared.InputMapping{
                                FieldName: sdk.String("saepe"),
                                Location: shared.InputMappingLocationEnumPath.ToPointer(),
                                MethodMatch: sdk.String("veniam"),
                                Value: sdk.String("in"),
                            },
                            shared.InputMapping{
                                FieldName: sdk.String("officiis"),
                                Location: shared.InputMappingLocationEnumUnknown.ToPointer(),
                                MethodMatch: sdk.String("laudantium"),
                                Value: sdk.String("exercitationem"),
                            },
                            shared.InputMapping{
                                FieldName: sdk.String("praesentium"),
                                Location: shared.InputMappingLocationEnumBody.ToPointer(),
                                MethodMatch: sdk.String("laboriosam"),
                                Value: sdk.String("dolorum"),
                            },
                        },
                        ValidationOptions: &shared.ValidationOptions{
                            SchemaValidation: shared.ValidationOptionsSchemaValidationEnumIgnoreWithWarnings.ToPointer(),
                            UndeclaredProperties: shared.ValidationOptionsUndeclaredPropertiesEnumIncludeWithWarnings.ToPointer(),
                        },
                        VirtualProperties: sdk.String("hic"),
                    },
                },
                shared.CollectionOverride{
                    Collection: sdk.String("expedita"),
                    Options: &shared.Options{
                        AsyncOptions: []shared.AsyncOptions{
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("neque"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("nostrum"),
                                            Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("dolorum"),
                                            Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("accusamus"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("atque"),
                                    FinishCondition: sdk.String("fugit"),
                                    PollingLink: sdk.String("ut"),
                                    TargetLink: sdk.String("fugiat"),
                                },
                            },
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("voluptatem"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("expedita"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("consequatur"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("ipsam"),
                                            Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("voluptatum"),
                                    FinishCondition: sdk.String("quas"),
                                    PollingLink: sdk.String("repudiandae"),
                                    TargetLink: sdk.String("corporis"),
                                },
                            },
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("et"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("ex"),
                                            Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("sit"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("nostrum"),
                                            Level: shared.DiagnosticLevelEnumError.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("error"),
                                    FinishCondition: sdk.String("consequatur"),
                                    PollingLink: sdk.String("incidunt"),
                                    TargetLink: sdk.String("reiciendis"),
                                },
                            },
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("dolorem"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("dicta"),
                                            Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("occaecati"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("quidem"),
                                            Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("laborum"),
                                    FinishCondition: sdk.String("nam"),
                                    PollingLink: sdk.String("tenetur"),
                                    TargetLink: sdk.String("laboriosam"),
                                },
                            },
                        },
                        InputMappings: []shared.InputMapping{
                            shared.InputMapping{
                                FieldName: sdk.String("amet"),
                                Location: shared.InputMappingLocationEnumBody.ToPointer(),
                                MethodMatch: sdk.String("voluptate"),
                                Value: sdk.String("unde"),
                            },
                        },
                        ValidationOptions: &shared.ValidationOptions{
                            SchemaValidation: shared.ValidationOptionsSchemaValidationEnumFail.ToPointer(),
                            UndeclaredProperties: shared.ValidationOptionsUndeclaredPropertiesEnumIncludeWithWarnings.ToPointer(),
                        },
                        VirtualProperties: sdk.String("repellendus"),
                    },
                },
            },
            Credential: &shared.Credential{
                BasicAuth: &shared.BasicAuth{
                    Password: sdk.String("delectus"),
                    User: sdk.String("voluptates"),
                },
                ServiceAccount: &shared.ServiceAccount{
                    Email: sdk.String("Marc_Predovic@gmail.com"),
                },
                UseProjectDefault: sdk.Bool(false),
            },
            CustomCertificateAuthorityRoots: []string{
                "praesentium",
                "mollitia",
                "veniam",
            },
            Description: sdk.String("voluptatem"),
            DescriptorURL: sdk.String("quisquam"),
            ID: sdk.String("repudiandae"),
            InsertTime: sdk.String("quasi"),
            Labels: []shared.TypeProviderLabelEntry{
                shared.TypeProviderLabelEntry{
                    Key: sdk.String("reprehenderit"),
                    Value: sdk.String("asperiores"),
                },
                shared.TypeProviderLabelEntry{
                    Key: sdk.String("totam"),
                    Value: sdk.String("suscipit"),
                },
                shared.TypeProviderLabelEntry{
                    Key: sdk.String("quidem"),
                    Value: sdk.String("maxime"),
                },
            },
            Name: sdk.String("Georgia Farrell"),
            Operation: &shared.Operation{
                ClientOperationID: sdk.String("atque"),
                CreationTimestamp: sdk.String("error"),
                Description: sdk.String("officiis"),
                EndTime: sdk.String("officiis"),
                Error: &shared.OperationError{
                    Errors: []shared.OperationErrorErrors{
                        shared.OperationErrorErrors{
                            Code: sdk.String("natus"),
                            Location: sdk.String("minima"),
                            Message: sdk.String("aspernatur"),
                        },
                        shared.OperationErrorErrors{
                            Code: sdk.String("ex"),
                            Location: sdk.String("maiores"),
                            Message: sdk.String("corrupti"),
                        },
                        shared.OperationErrorErrors{
                            Code: sdk.String("at"),
                            Location: sdk.String("error"),
                            Message: sdk.String("blanditiis"),
                        },
                        shared.OperationErrorErrors{
                            Code: sdk.String("suscipit"),
                            Location: sdk.String("repudiandae"),
                            Message: sdk.String("atque"),
                        },
                    },
                },
                HTTPErrorMessage: sdk.String("atque"),
                HTTPErrorStatusCode: sdk.Int(120919),
                ID: sdk.String("recusandae"),
                InsertTime: sdk.String("dolorum"),
                Kind: sdk.String("repellendus"),
                Name: sdk.String("Lela Baumbach Jr."),
                OperationGroupID: sdk.String("beatae"),
                OperationType: sdk.String("dolores"),
                Progress: sdk.Int(316488),
                Region: sdk.String("laboriosam"),
                SelfLink: sdk.String("velit"),
                StartTime: sdk.String("a"),
                Status: shared.OperationStatusEnumRunning.ToPointer(),
                StatusMessage: sdk.String("magnam"),
                TargetID: sdk.String("saepe"),
                TargetLink: sdk.String("consequuntur"),
                User: sdk.String("occaecati"),
                Warnings: []shared.OperationWarnings{
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumResourceInUseByOtherResourceWarning.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("adipisci"),
                                Value: sdk.String("eveniet"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("occaecati"),
                                Value: sdk.String("consequuntur"),
                            },
                        },
                        Message: sdk.String("fugit"),
                    },
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumMissingTypeDependency.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("reprehenderit"),
                                Value: sdk.String("error"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("illo"),
                                Value: sdk.String("corporis"),
                            },
                        },
                        Message: sdk.String("quidem"),
                    },
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumLargeDeploymentWarning.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("vero"),
                                Value: sdk.String("doloremque"),
                            },
                        },
                        Message: sdk.String("iure"),
                    },
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumNoResultsOnPage.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("quae"),
                                Value: sdk.String("molestiae"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("eveniet"),
                                Value: sdk.String("qui"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("cum"),
                                Value: sdk.String("iure"),
                            },
                        },
                        Message: sdk.String("necessitatibus"),
                    },
                },
                Zone: sdk.String("ratione"),
            },
            Options: &shared.Options{
                AsyncOptions: []shared.AsyncOptions{
                    shared.AsyncOptions{
                        MethodMatch: sdk.String("distinctio"),
                        PollingOptions: &shared.PollingOptions{
                            Diagnostics: []shared.Diagnostic{
                                shared.Diagnostic{
                                    Field: sdk.String("rem"),
                                    Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                },
                                shared.Diagnostic{
                                    Field: sdk.String("ad"),
                                    Level: shared.DiagnosticLevelEnumError.ToPointer(),
                                },
                                shared.Diagnostic{
                                    Field: sdk.String("alias"),
                                    Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                },
                            },
                            FailCondition: sdk.String("perspiciatis"),
                            FinishCondition: sdk.String("nihil"),
                            PollingLink: sdk.String("mollitia"),
                            TargetLink: sdk.String("voluptas"),
                        },
                    },
                    shared.AsyncOptions{
                        MethodMatch: sdk.String("alias"),
                        PollingOptions: &shared.PollingOptions{
                            Diagnostics: []shared.Diagnostic{
                                shared.Diagnostic{
                                    Field: sdk.String("reiciendis"),
                                    Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                },
                                shared.Diagnostic{
                                    Field: sdk.String("id"),
                                    Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                },
                                shared.Diagnostic{
                                    Field: sdk.String("dolore"),
                                    Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                },
                                shared.Diagnostic{
                                    Field: sdk.String("nesciunt"),
                                    Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                },
                            },
                            FailCondition: sdk.String("recusandae"),
                            FinishCondition: sdk.String("omnis"),
                            PollingLink: sdk.String("quaerat"),
                            TargetLink: sdk.String("molestiae"),
                        },
                    },
                    shared.AsyncOptions{
                        MethodMatch: sdk.String("ex"),
                        PollingOptions: &shared.PollingOptions{
                            Diagnostics: []shared.Diagnostic{
                                shared.Diagnostic{
                                    Field: sdk.String("culpa"),
                                    Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                },
                                shared.Diagnostic{
                                    Field: sdk.String("debitis"),
                                    Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                },
                            },
                            FailCondition: sdk.String("eum"),
                            FinishCondition: sdk.String("nemo"),
                            PollingLink: sdk.String("recusandae"),
                            TargetLink: sdk.String("esse"),
                        },
                    },
                },
                InputMappings: []shared.InputMapping{
                    shared.InputMapping{
                        FieldName: sdk.String("quis"),
                        Location: shared.InputMappingLocationEnumQuery.ToPointer(),
                        MethodMatch: sdk.String("reiciendis"),
                        Value: sdk.String("provident"),
                    },
                    shared.InputMapping{
                        FieldName: sdk.String("aspernatur"),
                        Location: shared.InputMappingLocationEnumPath.ToPointer(),
                        MethodMatch: sdk.String("quasi"),
                        Value: sdk.String("animi"),
                    },
                    shared.InputMapping{
                        FieldName: sdk.String("nostrum"),
                        Location: shared.InputMappingLocationEnumBody.ToPointer(),
                        MethodMatch: sdk.String("provident"),
                        Value: sdk.String("possimus"),
                    },
                },
                ValidationOptions: &shared.ValidationOptions{
                    SchemaValidation: shared.ValidationOptionsSchemaValidationEnumIgnoreWithWarnings.ToPointer(),
                    UndeclaredProperties: shared.ValidationOptionsUndeclaredPropertiesEnumIgnore.ToPointer(),
                },
                VirtualProperties: sdk.String("aliquid"),
            },
            SelfLink: sdk.String("accusantium"),
        },
        AccessToken: sdk.String("repellat"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("in"),
        Key: sdk.String("nam"),
        OauthToken: sdk.String("earum"),
        PrettyPrint: sdk.Bool(false),
        Project: "officia",
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("placeat"),
        UploadProtocol: sdk.String("modi"),
    }, operations.DeploymentmanagerTypeProvidersInsertSecurity{
        Option1: &operations.DeploymentmanagerTypeProvidersInsertSecurityOption1{
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

## DeploymentmanagerTypeProvidersList

Lists all resource type providers for Deployment Manager.

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
    res, err := s.TypeProviders.DeploymentmanagerTypeProvidersList(ctx, operations.DeploymentmanagerTypeProvidersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("molestias"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("cumque"),
        Filter: sdk.String("vitae"),
        Key: sdk.String("rerum"),
        MaxResults: sdk.Int64(272229),
        OauthToken: sdk.String("quis"),
        OrderBy: sdk.String("inventore"),
        PageToken: sdk.String("fugit"),
        PrettyPrint: sdk.Bool(false),
        Project: "cumque",
        QuotaUser: sdk.String("quae"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("velit"),
    }, operations.DeploymentmanagerTypeProvidersListSecurity{
        Option1: &operations.DeploymentmanagerTypeProvidersListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TypeProvidersListResponse != nil {
        // handle response
    }
}
```

## DeploymentmanagerTypeProvidersListTypes

Lists all the type info for a TypeProvider.

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
    res, err := s.TypeProviders.DeploymentmanagerTypeProvidersListTypes(ctx, operations.DeploymentmanagerTypeProvidersListTypesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("eum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("rem"),
        Fields: sdk.String("at"),
        Filter: sdk.String("impedit"),
        Key: sdk.String("eos"),
        MaxResults: sdk.Int64(958741),
        OauthToken: sdk.String("eum"),
        OrderBy: sdk.String("dicta"),
        PageToken: sdk.String("minima"),
        PrettyPrint: sdk.Bool(false),
        Project: "beatae",
        QuotaUser: sdk.String("cupiditate"),
        TypeProvider: "provident",
        UploadType: sdk.String("earum"),
        UploadProtocol: sdk.String("soluta"),
    }, operations.DeploymentmanagerTypeProvidersListTypesSecurity{
        Option1: &operations.DeploymentmanagerTypeProvidersListTypesSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TypeProvidersListTypesResponse != nil {
        // handle response
    }
}
```

## DeploymentmanagerTypeProvidersPatch

Patches a type provider.

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
    res, err := s.TypeProviders.DeploymentmanagerTypeProvidersPatch(ctx, operations.DeploymentmanagerTypeProvidersPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TypeProvider1: &shared.TypeProvider{
            CollectionOverrides: []shared.CollectionOverride{
                shared.CollectionOverride{
                    Collection: sdk.String("eaque"),
                    Options: &shared.Options{
                        AsyncOptions: []shared.AsyncOptions{
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("perspiciatis"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("debitis"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("porro"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("dolorem"),
                                            Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("cumque"),
                                            Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("ratione"),
                                    FinishCondition: sdk.String("animi"),
                                    PollingLink: sdk.String("necessitatibus"),
                                    TargetLink: sdk.String("nulla"),
                                },
                            },
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("consequatur"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("et"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("natus"),
                                    FinishCondition: sdk.String("occaecati"),
                                    PollingLink: sdk.String("suscipit"),
                                    TargetLink: sdk.String("adipisci"),
                                },
                            },
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("quasi"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("doloribus"),
                                            Level: shared.DiagnosticLevelEnumError.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("necessitatibus"),
                                    FinishCondition: sdk.String("ipsa"),
                                    PollingLink: sdk.String("tempora"),
                                    TargetLink: sdk.String("nihil"),
                                },
                            },
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("molestiae"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("iusto"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("praesentium"),
                                    FinishCondition: sdk.String("maiores"),
                                    PollingLink: sdk.String("reiciendis"),
                                    TargetLink: sdk.String("vel"),
                                },
                            },
                        },
                        InputMappings: []shared.InputMapping{
                            shared.InputMapping{
                                FieldName: sdk.String("fugiat"),
                                Location: shared.InputMappingLocationEnumUnknown.ToPointer(),
                                MethodMatch: sdk.String("dicta"),
                                Value: sdk.String("odio"),
                            },
                        },
                        ValidationOptions: &shared.ValidationOptions{
                            SchemaValidation: shared.ValidationOptionsSchemaValidationEnumIgnore.ToPointer(),
                            UndeclaredProperties: shared.ValidationOptionsUndeclaredPropertiesEnumIgnore.ToPointer(),
                        },
                        VirtualProperties: sdk.String("ex"),
                    },
                },
                shared.CollectionOverride{
                    Collection: sdk.String("consectetur"),
                    Options: &shared.Options{
                        AsyncOptions: []shared.AsyncOptions{
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("ipsa"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("sunt"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("fugiat"),
                                            Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("aliquid"),
                                            Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("suscipit"),
                                    FinishCondition: sdk.String("aliquid"),
                                    PollingLink: sdk.String("perferendis"),
                                    TargetLink: sdk.String("eum"),
                                },
                            },
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("voluptas"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("id"),
                                            Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("error"),
                                            Level: shared.DiagnosticLevelEnumError.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("voluptates"),
                                            Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("laborum"),
                                    FinishCondition: sdk.String("libero"),
                                    PollingLink: sdk.String("ad"),
                                    TargetLink: sdk.String("deleniti"),
                                },
                            },
                        },
                        InputMappings: []shared.InputMapping{
                            shared.InputMapping{
                                FieldName: sdk.String("vitae"),
                                Location: shared.InputMappingLocationEnumHeader.ToPointer(),
                                MethodMatch: sdk.String("ex"),
                                Value: sdk.String("quo"),
                            },
                            shared.InputMapping{
                                FieldName: sdk.String("ex"),
                                Location: shared.InputMappingLocationEnumPath.ToPointer(),
                                MethodMatch: sdk.String("ad"),
                                Value: sdk.String("expedita"),
                            },
                        },
                        ValidationOptions: &shared.ValidationOptions{
                            SchemaValidation: shared.ValidationOptionsSchemaValidationEnumUnknown.ToPointer(),
                            UndeclaredProperties: shared.ValidationOptionsUndeclaredPropertiesEnumIncludeWithWarnings.ToPointer(),
                        },
                        VirtualProperties: sdk.String("cum"),
                    },
                },
                shared.CollectionOverride{
                    Collection: sdk.String("aliquid"),
                    Options: &shared.Options{
                        AsyncOptions: []shared.AsyncOptions{
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("voluptatum"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("veritatis"),
                                            Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("est"),
                                            Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("voluptatem"),
                                            Level: shared.DiagnosticLevelEnumError.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("officiis"),
                                    FinishCondition: sdk.String("architecto"),
                                    PollingLink: sdk.String("fuga"),
                                    TargetLink: sdk.String("pariatur"),
                                },
                            },
                        },
                        InputMappings: []shared.InputMapping{
                            shared.InputMapping{
                                FieldName: sdk.String("voluptatem"),
                                Location: shared.InputMappingLocationEnumUnknown.ToPointer(),
                                MethodMatch: sdk.String("deleniti"),
                                Value: sdk.String("earum"),
                            },
                            shared.InputMapping{
                                FieldName: sdk.String("ex"),
                                Location: shared.InputMappingLocationEnumHeader.ToPointer(),
                                MethodMatch: sdk.String("rem"),
                                Value: sdk.String("minus"),
                            },
                            shared.InputMapping{
                                FieldName: sdk.String("nemo"),
                                Location: shared.InputMappingLocationEnumHeader.ToPointer(),
                                MethodMatch: sdk.String("ratione"),
                                Value: sdk.String("ullam"),
                            },
                            shared.InputMapping{
                                FieldName: sdk.String("perferendis"),
                                Location: shared.InputMappingLocationEnumHeader.ToPointer(),
                                MethodMatch: sdk.String("totam"),
                                Value: sdk.String("impedit"),
                            },
                        },
                        ValidationOptions: &shared.ValidationOptions{
                            SchemaValidation: shared.ValidationOptionsSchemaValidationEnumFail.ToPointer(),
                            UndeclaredProperties: shared.ValidationOptionsUndeclaredPropertiesEnumIgnoreWithWarnings.ToPointer(),
                        },
                        VirtualProperties: sdk.String("ipsam"),
                    },
                },
                shared.CollectionOverride{
                    Collection: sdk.String("culpa"),
                    Options: &shared.Options{
                        AsyncOptions: []shared.AsyncOptions{
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("aliquam"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("deleniti"),
                                            Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("tempora"),
                                    FinishCondition: sdk.String("dolor"),
                                    PollingLink: sdk.String("consequatur"),
                                    TargetLink: sdk.String("architecto"),
                                },
                            },
                        },
                        InputMappings: []shared.InputMapping{
                            shared.InputMapping{
                                FieldName: sdk.String("modi"),
                                Location: shared.InputMappingLocationEnumUnknown.ToPointer(),
                                MethodMatch: sdk.String("ab"),
                                Value: sdk.String("laudantium"),
                            },
                        },
                        ValidationOptions: &shared.ValidationOptions{
                            SchemaValidation: shared.ValidationOptionsSchemaValidationEnumUnknown.ToPointer(),
                            UndeclaredProperties: shared.ValidationOptionsUndeclaredPropertiesEnumInclude.ToPointer(),
                        },
                        VirtualProperties: sdk.String("fugiat"),
                    },
                },
            },
            Credential: &shared.Credential{
                BasicAuth: &shared.BasicAuth{
                    Password: sdk.String("ipsam"),
                    User: sdk.String("consequuntur"),
                },
                ServiceAccount: &shared.ServiceAccount{
                    Email: sdk.String("Keenan_Vandervort45@gmail.com"),
                },
                UseProjectDefault: sdk.Bool(false),
            },
            CustomCertificateAuthorityRoots: []string{
                "sed",
                "veniam",
                "nesciunt",
                "expedita",
            },
            Description: sdk.String("eum"),
            DescriptorURL: sdk.String("vel"),
            ID: sdk.String("voluptatum"),
            InsertTime: sdk.String("magnam"),
            Labels: []shared.TypeProviderLabelEntry{
                shared.TypeProviderLabelEntry{
                    Key: sdk.String("ab"),
                    Value: sdk.String("porro"),
                },
                shared.TypeProviderLabelEntry{
                    Key: sdk.String("autem"),
                    Value: sdk.String("nobis"),
                },
            },
            Name: sdk.String("Mrs. Kate Cronin"),
            Operation: &shared.Operation{
                ClientOperationID: sdk.String("quasi"),
                CreationTimestamp: sdk.String("nisi"),
                Description: sdk.String("at"),
                EndTime: sdk.String("vero"),
                Error: &shared.OperationError{
                    Errors: []shared.OperationErrorErrors{
                        shared.OperationErrorErrors{
                            Code: sdk.String("harum"),
                            Location: sdk.String("sequi"),
                            Message: sdk.String("doloribus"),
                        },
                        shared.OperationErrorErrors{
                            Code: sdk.String("repudiandae"),
                            Location: sdk.String("optio"),
                            Message: sdk.String("occaecati"),
                        },
                        shared.OperationErrorErrors{
                            Code: sdk.String("nemo"),
                            Location: sdk.String("voluptate"),
                            Message: sdk.String("blanditiis"),
                        },
                    },
                },
                HTTPErrorMessage: sdk.String("officia"),
                HTTPErrorStatusCode: sdk.Int(376389),
                ID: sdk.String("numquam"),
                InsertTime: sdk.String("nemo"),
                Kind: sdk.String("quos"),
                Name: sdk.String("Janice Kunze"),
                OperationGroupID: sdk.String("laudantium"),
                OperationType: sdk.String("incidunt"),
                Progress: sdk.Int(97493),
                Region: sdk.String("rem"),
                SelfLink: sdk.String("fugiat"),
                StartTime: sdk.String("dicta"),
                Status: shared.OperationStatusEnumRunning.ToPointer(),
                StatusMessage: sdk.String("consequuntur"),
                TargetID: sdk.String("consectetur"),
                TargetLink: sdk.String("aperiam"),
                User: sdk.String("cupiditate"),
                Warnings: []shared.OperationWarnings{
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumUndeclaredProperties.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("omnis"),
                                Value: sdk.String("eos"),
                            },
                        },
                        Message: sdk.String("occaecati"),
                    },
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumResourceInUseByOtherResourceWarning.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("inventore"),
                                Value: sdk.String("fuga"),
                            },
                        },
                        Message: sdk.String("accusamus"),
                    },
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumInvalidHealthCheckForDynamicWieghtedLb.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("omnis"),
                                Value: sdk.String("delectus"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("minima"),
                                Value: sdk.String("praesentium"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("maxime"),
                                Value: sdk.String("magnam"),
                            },
                        },
                        Message: sdk.String("temporibus"),
                    },
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumCleanupFailed.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("itaque"),
                                Value: sdk.String("commodi"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("totam"),
                                Value: sdk.String("earum"),
                            },
                        },
                        Message: sdk.String("modi"),
                    },
                },
                Zone: sdk.String("nam"),
            },
            Options: &shared.Options{
                AsyncOptions: []shared.AsyncOptions{
                    shared.AsyncOptions{
                        MethodMatch: sdk.String("voluptatem"),
                        PollingOptions: &shared.PollingOptions{
                            Diagnostics: []shared.Diagnostic{
                                shared.Diagnostic{
                                    Field: sdk.String("vel"),
                                    Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                },
                                shared.Diagnostic{
                                    Field: sdk.String("quasi"),
                                    Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                },
                            },
                            FailCondition: sdk.String("maiores"),
                            FinishCondition: sdk.String("enim"),
                            PollingLink: sdk.String("sint"),
                            TargetLink: sdk.String("nulla"),
                        },
                    },
                    shared.AsyncOptions{
                        MethodMatch: sdk.String("deserunt"),
                        PollingOptions: &shared.PollingOptions{
                            Diagnostics: []shared.Diagnostic{
                                shared.Diagnostic{
                                    Field: sdk.String("nemo"),
                                    Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                },
                                shared.Diagnostic{
                                    Field: sdk.String("est"),
                                    Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                },
                            },
                            FailCondition: sdk.String("sint"),
                            FinishCondition: sdk.String("accusamus"),
                            PollingLink: sdk.String("impedit"),
                            TargetLink: sdk.String("hic"),
                        },
                    },
                    shared.AsyncOptions{
                        MethodMatch: sdk.String("necessitatibus"),
                        PollingOptions: &shared.PollingOptions{
                            Diagnostics: []shared.Diagnostic{
                                shared.Diagnostic{
                                    Field: sdk.String("ex"),
                                    Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                },
                                shared.Diagnostic{
                                    Field: sdk.String("debitis"),
                                    Level: shared.DiagnosticLevelEnumError.ToPointer(),
                                },
                                shared.Diagnostic{
                                    Field: sdk.String("quae"),
                                    Level: shared.DiagnosticLevelEnumError.ToPointer(),
                                },
                                shared.Diagnostic{
                                    Field: sdk.String("fuga"),
                                    Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                },
                            },
                            FailCondition: sdk.String("consectetur"),
                            FinishCondition: sdk.String("velit"),
                            PollingLink: sdk.String("atque"),
                            TargetLink: sdk.String("ipsum"),
                        },
                    },
                    shared.AsyncOptions{
                        MethodMatch: sdk.String("impedit"),
                        PollingOptions: &shared.PollingOptions{
                            Diagnostics: []shared.Diagnostic{
                                shared.Diagnostic{
                                    Field: sdk.String("soluta"),
                                    Level: shared.DiagnosticLevelEnumError.ToPointer(),
                                },
                            },
                            FailCondition: sdk.String("nam"),
                            FinishCondition: sdk.String("dolore"),
                            PollingLink: sdk.String("iusto"),
                            TargetLink: sdk.String("voluptate"),
                        },
                    },
                },
                InputMappings: []shared.InputMapping{
                    shared.InputMapping{
                        FieldName: sdk.String("dignissimos"),
                        Location: shared.InputMappingLocationEnumPath.ToPointer(),
                        MethodMatch: sdk.String("quo"),
                        Value: sdk.String("deleniti"),
                    },
                },
                ValidationOptions: &shared.ValidationOptions{
                    SchemaValidation: shared.ValidationOptionsSchemaValidationEnumFail.ToPointer(),
                    UndeclaredProperties: shared.ValidationOptionsUndeclaredPropertiesEnumIgnore.ToPointer(),
                },
                VirtualProperties: sdk.String("odit"),
            },
            SelfLink: sdk.String("voluptatibus"),
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("inventore"),
        Key: sdk.String("facere"),
        OauthToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        Project: "architecto",
        QuotaUser: sdk.String("voluptatibus"),
        TypeProviderPathParameter: "quia",
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("aliquam"),
    }, operations.DeploymentmanagerTypeProvidersPatchSecurity{
        Option1: &operations.DeploymentmanagerTypeProvidersPatchSecurityOption1{
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

## DeploymentmanagerTypeProvidersUpdate

Updates a type provider.

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
    res, err := s.TypeProviders.DeploymentmanagerTypeProvidersUpdate(ctx, operations.DeploymentmanagerTypeProvidersUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TypeProvider1: &shared.TypeProvider{
            CollectionOverrides: []shared.CollectionOverride{
                shared.CollectionOverride{
                    Collection: sdk.String("accusantium"),
                    Options: &shared.Options{
                        AsyncOptions: []shared.AsyncOptions{
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("ea"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("vero"),
                                            Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("eum"),
                                    FinishCondition: sdk.String("velit"),
                                    PollingLink: sdk.String("ut"),
                                    TargetLink: sdk.String("perspiciatis"),
                                },
                            },
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("earum"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("impedit"),
                                            Level: shared.DiagnosticLevelEnumError.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("iste"),
                                    FinishCondition: sdk.String("itaque"),
                                    PollingLink: sdk.String("alias"),
                                    TargetLink: sdk.String("nisi"),
                                },
                            },
                        },
                        InputMappings: []shared.InputMapping{
                            shared.InputMapping{
                                FieldName: sdk.String("velit"),
                                Location: shared.InputMappingLocationEnumBody.ToPointer(),
                                MethodMatch: sdk.String("non"),
                                Value: sdk.String("dolor"),
                            },
                            shared.InputMapping{
                                FieldName: sdk.String("iusto"),
                                Location: shared.InputMappingLocationEnumUnknown.ToPointer(),
                                MethodMatch: sdk.String("doloremque"),
                                Value: sdk.String("consequatur"),
                            },
                            shared.InputMapping{
                                FieldName: sdk.String("officia"),
                                Location: shared.InputMappingLocationEnumHeader.ToPointer(),
                                MethodMatch: sdk.String("ea"),
                                Value: sdk.String("quidem"),
                            },
                            shared.InputMapping{
                                FieldName: sdk.String("voluptas"),
                                Location: shared.InputMappingLocationEnumBody.ToPointer(),
                                MethodMatch: sdk.String("placeat"),
                                Value: sdk.String("perspiciatis"),
                            },
                        },
                        ValidationOptions: &shared.ValidationOptions{
                            SchemaValidation: shared.ValidationOptionsSchemaValidationEnumIgnoreWithWarnings.ToPointer(),
                            UndeclaredProperties: shared.ValidationOptionsUndeclaredPropertiesEnumIncludeWithWarnings.ToPointer(),
                        },
                        VirtualProperties: sdk.String("a"),
                    },
                },
            },
            Credential: &shared.Credential{
                BasicAuth: &shared.BasicAuth{
                    Password: sdk.String("voluptate"),
                    User: sdk.String("ullam"),
                },
                ServiceAccount: &shared.ServiceAccount{
                    Email: sdk.String("Stacy.OKeefe35@yahoo.com"),
                },
                UseProjectDefault: sdk.Bool(false),
            },
            CustomCertificateAuthorityRoots: []string{
                "error",
                "esse",
                "labore",
            },
            Description: sdk.String("veritatis"),
            DescriptorURL: sdk.String("vero"),
            ID: sdk.String("consectetur"),
            InsertTime: sdk.String("vitae"),
            Labels: []shared.TypeProviderLabelEntry{
                shared.TypeProviderLabelEntry{
                    Key: sdk.String("dolorem"),
                    Value: sdk.String("ad"),
                },
            },
            Name: sdk.String("Margarita Jacobson"),
            Operation: &shared.Operation{
                ClientOperationID: sdk.String("libero"),
                CreationTimestamp: sdk.String("rem"),
                Description: sdk.String("dolorum"),
                EndTime: sdk.String("odio"),
                Error: &shared.OperationError{
                    Errors: []shared.OperationErrorErrors{
                        shared.OperationErrorErrors{
                            Code: sdk.String("alias"),
                            Location: sdk.String("magni"),
                            Message: sdk.String("vel"),
                        },
                    },
                },
                HTTPErrorMessage: sdk.String("quae"),
                HTTPErrorStatusCode: sdk.Int(63553),
                ID: sdk.String("modi"),
                InsertTime: sdk.String("neque"),
                Kind: sdk.String("exercitationem"),
                Name: sdk.String("Douglas Emard"),
                OperationGroupID: sdk.String("distinctio"),
                OperationType: sdk.String("maxime"),
                Progress: sdk.Int(157222),
                Region: sdk.String("quia"),
                SelfLink: sdk.String("nostrum"),
                StartTime: sdk.String("omnis"),
                Status: shared.OperationStatusEnumDone.ToPointer(),
                StatusMessage: sdk.String("dicta"),
                TargetID: sdk.String("id"),
                TargetLink: sdk.String("libero"),
                User: sdk.String("fugiat"),
                Warnings: []shared.OperationWarnings{
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumCleanupFailed.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("sit"),
                                Value: sdk.String("iusto"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("ipsa"),
                                Value: sdk.String("voluptates"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("inventore"),
                                Value: sdk.String("aperiam"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("totam"),
                                Value: sdk.String("dolore"),
                            },
                        },
                        Message: sdk.String("eligendi"),
                    },
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumSchemaValidationIgnored.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("autem"),
                                Value: sdk.String("esse"),
                            },
                        },
                        Message: sdk.String("dolores"),
                    },
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumDeprecatedTypeUsed.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("est"),
                                Value: sdk.String("facere"),
                            },
                        },
                        Message: sdk.String("corrupti"),
                    },
                },
                Zone: sdk.String("molestiae"),
            },
            Options: &shared.Options{
                AsyncOptions: []shared.AsyncOptions{
                    shared.AsyncOptions{
                        MethodMatch: sdk.String("accusamus"),
                        PollingOptions: &shared.PollingOptions{
                            Diagnostics: []shared.Diagnostic{
                                shared.Diagnostic{
                                    Field: sdk.String("tempore"),
                                    Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                },
                                shared.Diagnostic{
                                    Field: sdk.String("ea"),
                                    Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                },
                                shared.Diagnostic{
                                    Field: sdk.String("ipsam"),
                                    Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                },
                                shared.Diagnostic{
                                    Field: sdk.String("laudantium"),
                                    Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                },
                            },
                            FailCondition: sdk.String("officiis"),
                            FinishCondition: sdk.String("voluptatibus"),
                            PollingLink: sdk.String("cum"),
                            TargetLink: sdk.String("at"),
                        },
                    },
                    shared.AsyncOptions{
                        MethodMatch: sdk.String("alias"),
                        PollingOptions: &shared.PollingOptions{
                            Diagnostics: []shared.Diagnostic{
                                shared.Diagnostic{
                                    Field: sdk.String("quidem"),
                                    Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                },
                            },
                            FailCondition: sdk.String("repudiandae"),
                            FinishCondition: sdk.String("accusantium"),
                            PollingLink: sdk.String("expedita"),
                            TargetLink: sdk.String("officiis"),
                        },
                    },
                    shared.AsyncOptions{
                        MethodMatch: sdk.String("eos"),
                        PollingOptions: &shared.PollingOptions{
                            Diagnostics: []shared.Diagnostic{
                                shared.Diagnostic{
                                    Field: sdk.String("odio"),
                                    Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                },
                                shared.Diagnostic{
                                    Field: sdk.String("odit"),
                                    Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                },
                                shared.Diagnostic{
                                    Field: sdk.String("corporis"),
                                    Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                },
                                shared.Diagnostic{
                                    Field: sdk.String("earum"),
                                    Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                },
                            },
                            FailCondition: sdk.String("recusandae"),
                            FinishCondition: sdk.String("similique"),
                            PollingLink: sdk.String("ut"),
                            TargetLink: sdk.String("quidem"),
                        },
                    },
                },
                InputMappings: []shared.InputMapping{
                    shared.InputMapping{
                        FieldName: sdk.String("beatae"),
                        Location: shared.InputMappingLocationEnumBody.ToPointer(),
                        MethodMatch: sdk.String("molestiae"),
                        Value: sdk.String("delectus"),
                    },
                    shared.InputMapping{
                        FieldName: sdk.String("cupiditate"),
                        Location: shared.InputMappingLocationEnumUnknown.ToPointer(),
                        MethodMatch: sdk.String("numquam"),
                        Value: sdk.String("numquam"),
                    },
                },
                ValidationOptions: &shared.ValidationOptions{
                    SchemaValidation: shared.ValidationOptionsSchemaValidationEnumUnknown.ToPointer(),
                    UndeclaredProperties: shared.ValidationOptionsUndeclaredPropertiesEnumFail.ToPointer(),
                },
                VirtualProperties: sdk.String("officia"),
            },
            SelfLink: sdk.String("dignissimos"),
        },
        AccessToken: sdk.String("optio"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("qui"),
        Key: sdk.String("expedita"),
        OauthToken: sdk.String("voluptatum"),
        PrettyPrint: sdk.Bool(false),
        Project: "cupiditate",
        QuotaUser: sdk.String("minima"),
        TypeProviderPathParameter: "placeat",
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("neque"),
    }, operations.DeploymentmanagerTypeProvidersUpdateSecurity{
        Option1: &operations.DeploymentmanagerTypeProvidersUpdateSecurityOption1{
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
