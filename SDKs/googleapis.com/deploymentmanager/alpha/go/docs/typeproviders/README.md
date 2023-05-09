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
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("veniam"),
        Fields: sdk.String("minima"),
        Key: sdk.String("recusandae"),
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        Project: "nulla",
        QuotaUser: sdk.String("magni"),
        TypeProvider: "aperiam",
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("numquam"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("beatae"),
        Fields: sdk.String("laudantium"),
        Key: sdk.String("exercitationem"),
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        Project: "cum",
        QuotaUser: sdk.String("laboriosam"),
        TypeProvider: "dolorum",
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("error"),
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
        AccessToken: sdk.String("expedita"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("neque"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("nostrum"),
        OauthToken: sdk.String("officia"),
        PrettyPrint: sdk.Bool(false),
        Project: "dolorum",
        QuotaUser: sdk.String("corrupti"),
        Type: "accusamus",
        TypeProvider: "tempora",
        UploadType: sdk.String("atque"),
        UploadProtocol: sdk.String("fugit"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TypeProvider: &shared.TypeProvider{
            CollectionOverrides: []shared.CollectionOverride{
                shared.CollectionOverride{
                    Collection: sdk.String("voluptatem"),
                    MethodMap: &shared.MethodMap{
                        Create: sdk.String("culpa"),
                        Delete: sdk.String("expedita"),
                        Get: sdk.String("magnam"),
                        SetIamPolicy: sdk.String("consequatur"),
                        Update: sdk.String("esse"),
                    },
                    Options: &shared.Options{
                        AsyncOptions: []shared.AsyncOptions{
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("sit"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("quas"),
                                            Level: shared.DiagnosticLevelEnumError.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("corporis"),
                                            Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("blanditiis"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("sed"),
                                    FinishCondition: sdk.String("sit"),
                                    PollingLink: sdk.String("vel"),
                                    TargetLink: sdk.String("nostrum"),
                                },
                            },
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("saepe"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("consequatur"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("reiciendis"),
                                            Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("harum"),
                                            Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("architecto"),
                                    FinishCondition: sdk.String("occaecati"),
                                    PollingLink: sdk.String("labore"),
                                    TargetLink: sdk.String("quidem"),
                                },
                            },
                        },
                        InputMappings: []shared.InputMapping{
                            shared.InputMapping{
                                FieldName: sdk.String("laborum"),
                                Location: shared.InputMappingLocationEnumBody.ToPointer(),
                                MethodMatch: sdk.String("tenetur"),
                                Value: sdk.String("laboriosam"),
                            },
                            shared.InputMapping{
                                FieldName: sdk.String("alias"),
                                Location: shared.InputMappingLocationEnumPath.ToPointer(),
                                MethodMatch: sdk.String("deserunt"),
                                Value: sdk.String("voluptate"),
                            },
                            shared.InputMapping{
                                FieldName: sdk.String("unde"),
                                Location: shared.InputMappingLocationEnumHeader.ToPointer(),
                                MethodMatch: sdk.String("provident"),
                                Value: sdk.String("repellendus"),
                            },
                        },
                        NameProperty: sdk.String("delectus"),
                        ValidationOptions: &shared.ValidationOptions{
                            SchemaValidation: shared.ValidationOptionsSchemaValidationEnumFail.ToPointer(),
                            UndeclaredProperties: shared.ValidationOptionsUndeclaredPropertiesEnumUnknown.ToPointer(),
                        },
                    },
                },
                shared.CollectionOverride{
                    Collection: sdk.String("est"),
                    MethodMap: &shared.MethodMap{
                        Create: sdk.String("quidem"),
                        Delete: sdk.String("reprehenderit"),
                        Get: sdk.String("facere"),
                        SetIamPolicy: sdk.String("fuga"),
                        Update: sdk.String("praesentium"),
                    },
                    Options: &shared.Options{
                        AsyncOptions: []shared.AsyncOptions{
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("veniam"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("quisquam"),
                                            Level: shared.DiagnosticLevelEnumError.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("quasi"),
                                    FinishCondition: sdk.String("atque"),
                                    PollingLink: sdk.String("reprehenderit"),
                                    TargetLink: sdk.String("asperiores"),
                                },
                            },
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("totam"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("quidem"),
                                            Level: shared.DiagnosticLevelEnumError.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("et"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("amet"),
                                    FinishCondition: sdk.String("assumenda"),
                                    PollingLink: sdk.String("ea"),
                                    TargetLink: sdk.String("atque"),
                                },
                            },
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("error"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("officiis"),
                                            Level: shared.DiagnosticLevelEnumError.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("natus"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("aspernatur"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("maiores"),
                                            Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("at"),
                                    FinishCondition: sdk.String("error"),
                                    PollingLink: sdk.String("blanditiis"),
                                    TargetLink: sdk.String("suscipit"),
                                },
                            },
                        },
                        InputMappings: []shared.InputMapping{
                            shared.InputMapping{
                                FieldName: sdk.String("atque"),
                                Location: shared.InputMappingLocationEnumQuery.ToPointer(),
                                MethodMatch: sdk.String("sunt"),
                                Value: sdk.String("recusandae"),
                            },
                            shared.InputMapping{
                                FieldName: sdk.String("dolorum"),
                                Location: shared.InputMappingLocationEnumHeader.ToPointer(),
                                MethodMatch: sdk.String("labore"),
                                Value: sdk.String("reiciendis"),
                            },
                            shared.InputMapping{
                                FieldName: sdk.String("doloremque"),
                                Location: shared.InputMappingLocationEnumHeader.ToPointer(),
                                MethodMatch: sdk.String("dicta"),
                                Value: sdk.String("accusantium"),
                            },
                            shared.InputMapping{
                                FieldName: sdk.String("beatae"),
                                Location: shared.InputMappingLocationEnumUnknown.ToPointer(),
                                MethodMatch: sdk.String("enim"),
                                Value: sdk.String("laboriosam"),
                            },
                        },
                        NameProperty: sdk.String("velit"),
                        ValidationOptions: &shared.ValidationOptions{
                            SchemaValidation: shared.ValidationOptionsSchemaValidationEnumFail.ToPointer(),
                            UndeclaredProperties: shared.ValidationOptionsUndeclaredPropertiesEnumIncludeWithWarnings.ToPointer(),
                        },
                    },
                },
                shared.CollectionOverride{
                    Collection: sdk.String("magnam"),
                    MethodMap: &shared.MethodMap{
                        Create: sdk.String("saepe"),
                        Delete: sdk.String("consequuntur"),
                        Get: sdk.String("occaecati"),
                        SetIamPolicy: sdk.String("officiis"),
                        Update: sdk.String("perspiciatis"),
                    },
                    Options: &shared.Options{
                        AsyncOptions: []shared.AsyncOptions{
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("adipisci"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("occaecati"),
                                            Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("fugit"),
                                            Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("quis"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("error"),
                                            Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("corporis"),
                                    FinishCondition: sdk.String("quidem"),
                                    PollingLink: sdk.String("eveniet"),
                                    TargetLink: sdk.String("non"),
                                },
                            },
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("vero"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("iure"),
                                            Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("totam"),
                                    FinishCondition: sdk.String("quae"),
                                    PollingLink: sdk.String("molestiae"),
                                    TargetLink: sdk.String("eveniet"),
                                },
                            },
                        },
                        InputMappings: []shared.InputMapping{
                            shared.InputMapping{
                                FieldName: sdk.String("cum"),
                                Location: shared.InputMappingLocationEnumQuery.ToPointer(),
                                MethodMatch: sdk.String("necessitatibus"),
                                Value: sdk.String("ratione"),
                            },
                        },
                        NameProperty: sdk.String("laborum"),
                        ValidationOptions: &shared.ValidationOptions{
                            SchemaValidation: shared.ValidationOptionsSchemaValidationEnumIgnoreWithWarnings.ToPointer(),
                            UndeclaredProperties: shared.ValidationOptionsUndeclaredPropertiesEnumIncludeWithWarnings.ToPointer(),
                        },
                    },
                },
                shared.CollectionOverride{
                    Collection: sdk.String("rem"),
                    MethodMap: &shared.MethodMap{
                        Create: sdk.String("aliquam"),
                        Delete: sdk.String("ad"),
                        Get: sdk.String("repellat"),
                        SetIamPolicy: sdk.String("alias"),
                        Update: sdk.String("corporis"),
                    },
                    Options: &shared.Options{
                        AsyncOptions: []shared.AsyncOptions{
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("nihil"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("voluptas"),
                                            Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("maiores"),
                                            Level: shared.DiagnosticLevelEnumError.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("dolores"),
                                            Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("minima"),
                                    FinishCondition: sdk.String("dolore"),
                                    PollingLink: sdk.String("dolorum"),
                                    TargetLink: sdk.String("nesciunt"),
                                },
                            },
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("quae"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("omnis"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("molestiae"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("ut"),
                                            Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("adipisci"),
                                            Level: shared.DiagnosticLevelEnumError.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("laudantium"),
                                    FinishCondition: sdk.String("eum"),
                                    PollingLink: sdk.String("nemo"),
                                    TargetLink: sdk.String("recusandae"),
                                },
                            },
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("esse"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("quis"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("reiciendis"),
                                            Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("aspernatur"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("quasi"),
                                    FinishCondition: sdk.String("animi"),
                                    PollingLink: sdk.String("nostrum"),
                                    TargetLink: sdk.String("mollitia"),
                                },
                            },
                        },
                        InputMappings: []shared.InputMapping{
                            shared.InputMapping{
                                FieldName: sdk.String("possimus"),
                                Location: shared.InputMappingLocationEnumBody.ToPointer(),
                                MethodMatch: sdk.String("ex"),
                                Value: sdk.String("aliquid"),
                            },
                            shared.InputMapping{
                                FieldName: sdk.String("accusantium"),
                                Location: shared.InputMappingLocationEnumHeader.ToPointer(),
                                MethodMatch: sdk.String("doloribus"),
                                Value: sdk.String("ullam"),
                            },
                            shared.InputMapping{
                                FieldName: sdk.String("in"),
                                Location: shared.InputMappingLocationEnumBody.ToPointer(),
                                MethodMatch: sdk.String("earum"),
                                Value: sdk.String("officia"),
                            },
                        },
                        NameProperty: sdk.String("laborum"),
                        ValidationOptions: &shared.ValidationOptions{
                            SchemaValidation: shared.ValidationOptionsSchemaValidationEnumFail.ToPointer(),
                            UndeclaredProperties: shared.ValidationOptionsUndeclaredPropertiesEnumInclude.ToPointer(),
                        },
                    },
                },
            },
            Credential: &shared.Credential{
                BasicAuth: &shared.BasicAuth{
                    Password: sdk.String("voluptatibus"),
                    User: sdk.String("molestias"),
                },
                ServiceAccount: &shared.ServiceAccount{
                    Email: sdk.String("Verna69@hotmail.com"),
                },
                UseProjectDefault: sdk.Bool(false),
            },
            CustomCertificateAuthorityRoots: []string{
                "quis",
                "inventore",
            },
            Description: sdk.String("fugit"),
            DescriptorURL: sdk.String("cumque"),
            ID: sdk.String("quae"),
            InsertTime: sdk.String("perferendis"),
            Labels: []shared.TypeProviderLabelEntry{
                shared.TypeProviderLabelEntry{
                    Key: sdk.String("aspernatur"),
                    Value: sdk.String("eum"),
                },
            },
            Name: sdk.String("Deanna Swaniawski"),
            Operation: &shared.Operation{
                ClientOperationID: sdk.String("sapiente"),
                CreationTimestamp: sdk.String("eum"),
                Description: sdk.String("dicta"),
                EndTime: sdk.String("minima"),
                Error: &shared.OperationError{
                    Errors: []shared.OperationErrorErrors{
                        shared.OperationErrorErrors{
                            Code: sdk.String("cupiditate"),
                            Location: sdk.String("provident"),
                            Message: sdk.String("earum"),
                        },
                    },
                },
                HTTPErrorMessage: sdk.String("soluta"),
                HTTPErrorStatusCode: sdk.Int(940782),
                ID: sdk.String("illum"),
                InsertTime: sdk.String("eaque"),
                Kind: sdk.String("earum"),
                Name: sdk.String("Cary Toy"),
                OperationGroupID: sdk.String("suscipit"),
                OperationType: sdk.String("dolorem"),
                Progress: sdk.Int(147808),
                Region: sdk.String("cumque"),
                SelfLink: sdk.String("fuga"),
                StartTime: sdk.String("ratione"),
                Status: shared.OperationStatusEnumRunning.ToPointer(),
                StatusMessage: sdk.String("necessitatibus"),
                TargetID: sdk.String("nulla"),
                TargetLink: sdk.String("consequatur"),
                User: sdk.String("quasi"),
                Warnings: []shared.OperationWarnings{
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumNotCriticalError.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("occaecati"),
                                Value: sdk.String("suscipit"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("adipisci"),
                                Value: sdk.String("quasi"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("magni"),
                                Value: sdk.String("doloribus"),
                            },
                        },
                        Message: sdk.String("nulla"),
                    },
                },
                Zone: sdk.String("necessitatibus"),
            },
            Options: &shared.Options{
                AsyncOptions: []shared.AsyncOptions{
                    shared.AsyncOptions{
                        MethodMatch: sdk.String("tempora"),
                        PollingOptions: &shared.PollingOptions{
                            Diagnostics: []shared.Diagnostic{
                                shared.Diagnostic{
                                    Field: sdk.String("molestiae"),
                                    Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                },
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
                NameProperty: sdk.String("tempora"),
                ValidationOptions: &shared.ValidationOptions{
                    SchemaValidation: shared.ValidationOptionsSchemaValidationEnumIgnore.ToPointer(),
                    UndeclaredProperties: shared.ValidationOptionsUndeclaredPropertiesEnumIgnore.ToPointer(),
                },
            },
            SelfLink: sdk.String("consectetur"),
        },
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("sunt"),
        Key: sdk.String("nostrum"),
        OauthToken: sdk.String("fugiat"),
        PrettyPrint: sdk.Bool(false),
        Project: "expedita",
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("suscipit"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("iste"),
        Filter: sdk.String("id"),
        Key: sdk.String("ab"),
        MaxResults: sdk.Int64(625358),
        OauthToken: sdk.String("possimus"),
        OrderBy: sdk.String("voluptates"),
        PageToken: sdk.String("mollitia"),
        PrettyPrint: sdk.Bool(false),
        Project: "laborum",
        QuotaUser: sdk.String("libero"),
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("deleniti"),
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
        AccessToken: sdk.String("vitae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ex"),
        Fields: sdk.String("quo"),
        Filter: sdk.String("ex"),
        Key: sdk.String("ut"),
        MaxResults: sdk.Int64(321043),
        OauthToken: sdk.String("expedita"),
        OrderBy: sdk.String("voluptatem"),
        PageToken: sdk.String("molestias"),
        PrettyPrint: sdk.Bool(false),
        Project: "cum",
        QuotaUser: sdk.String("aliquid"),
        TypeProvider: "beatae",
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("omnis"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TypeProvider1: &shared.TypeProvider{
            CollectionOverrides: []shared.CollectionOverride{
                shared.CollectionOverride{
                    Collection: sdk.String("est"),
                    MethodMap: &shared.MethodMap{
                        Create: sdk.String("culpa"),
                        Delete: sdk.String("voluptatem"),
                        Get: sdk.String("sapiente"),
                        SetIamPolicy: sdk.String("officiis"),
                        Update: sdk.String("architecto"),
                    },
                    Options: &shared.Options{
                        AsyncOptions: []shared.AsyncOptions{
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("pariatur"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("voluptatem"),
                                            Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("deleniti"),
                                            Level: shared.DiagnosticLevelEnumError.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("ex"),
                                            Level: shared.DiagnosticLevelEnumError.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("rem"),
                                            Level: shared.DiagnosticLevelEnumError.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("nemo"),
                                    FinishCondition: sdk.String("asperiores"),
                                    PollingLink: sdk.String("ratione"),
                                    TargetLink: sdk.String("ullam"),
                                },
                            },
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("perferendis"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("totam"),
                                            Level: shared.DiagnosticLevelEnumError.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("quibusdam"),
                                            Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("ipsam"),
                                            Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("dolor"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("inventore"),
                                    FinishCondition: sdk.String("deleniti"),
                                    PollingLink: sdk.String("veritatis"),
                                    TargetLink: sdk.String("tempora"),
                                },
                            },
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("dolor"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("architecto"),
                                            Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("modi"),
                                    FinishCondition: sdk.String("fugit"),
                                    PollingLink: sdk.String("ab"),
                                    TargetLink: sdk.String("laudantium"),
                                },
                            },
                        },
                        InputMappings: []shared.InputMapping{
                            shared.InputMapping{
                                FieldName: sdk.String("dolor"),
                                Location: shared.InputMappingLocationEnumHeader.ToPointer(),
                                MethodMatch: sdk.String("ipsam"),
                                Value: sdk.String("consequuntur"),
                            },
                        },
                        NameProperty: sdk.String("ipsa"),
                        ValidationOptions: &shared.ValidationOptions{
                            SchemaValidation: shared.ValidationOptionsSchemaValidationEnumIgnoreWithWarnings.ToPointer(),
                            UndeclaredProperties: shared.ValidationOptionsUndeclaredPropertiesEnumFail.ToPointer(),
                        },
                    },
                },
                shared.CollectionOverride{
                    Collection: sdk.String("impedit"),
                    MethodMap: &shared.MethodMap{
                        Create: sdk.String("officiis"),
                        Delete: sdk.String("esse"),
                        Get: sdk.String("necessitatibus"),
                        SetIamPolicy: sdk.String("sed"),
                        Update: sdk.String("veniam"),
                    },
                    Options: &shared.Options{
                        AsyncOptions: []shared.AsyncOptions{
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("expedita"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("vel"),
                                            Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("magnam"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("ab"),
                                    FinishCondition: sdk.String("porro"),
                                    PollingLink: sdk.String("autem"),
                                    TargetLink: sdk.String("nobis"),
                                },
                            },
                        },
                        InputMappings: []shared.InputMapping{
                            shared.InputMapping{
                                FieldName: sdk.String("recusandae"),
                                Location: shared.InputMappingLocationEnumUnknown.ToPointer(),
                                MethodMatch: sdk.String("voluptatem"),
                                Value: sdk.String("exercitationem"),
                            },
                            shared.InputMapping{
                                FieldName: sdk.String("necessitatibus"),
                                Location: shared.InputMappingLocationEnumUnknown.ToPointer(),
                                MethodMatch: sdk.String("nisi"),
                                Value: sdk.String("at"),
                            },
                        },
                        NameProperty: sdk.String("vero"),
                        ValidationOptions: &shared.ValidationOptions{
                            SchemaValidation: shared.ValidationOptionsSchemaValidationEnumIgnoreWithWarnings.ToPointer(),
                            UndeclaredProperties: shared.ValidationOptionsUndeclaredPropertiesEnumIgnoreWithWarnings.ToPointer(),
                        },
                    },
                },
                shared.CollectionOverride{
                    Collection: sdk.String("sequi"),
                    MethodMap: &shared.MethodMap{
                        Create: sdk.String("doloribus"),
                        Delete: sdk.String("repudiandae"),
                        Get: sdk.String("optio"),
                        SetIamPolicy: sdk.String("occaecati"),
                        Update: sdk.String("nemo"),
                    },
                    Options: &shared.Options{
                        AsyncOptions: []shared.AsyncOptions{
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("blanditiis"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("voluptas"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("nemo"),
                                            Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("eius"),
                                            Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("ducimus"),
                                    FinishCondition: sdk.String("nesciunt"),
                                    PollingLink: sdk.String("fuga"),
                                    TargetLink: sdk.String("laudantium"),
                                },
                            },
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("incidunt"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("rem"),
                                            Level: shared.DiagnosticLevelEnumError.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("dicta"),
                                    FinishCondition: sdk.String("nisi"),
                                    PollingLink: sdk.String("consequuntur"),
                                    TargetLink: sdk.String("consectetur"),
                                },
                            },
                        },
                        InputMappings: []shared.InputMapping{
                            shared.InputMapping{
                                FieldName: sdk.String("cupiditate"),
                                Location: shared.InputMappingLocationEnumHeader.ToPointer(),
                                MethodMatch: sdk.String("soluta"),
                                Value: sdk.String("alias"),
                            },
                        },
                        NameProperty: sdk.String("omnis"),
                        ValidationOptions: &shared.ValidationOptions{
                            SchemaValidation: shared.ValidationOptionsSchemaValidationEnumUnknown.ToPointer(),
                            UndeclaredProperties: shared.ValidationOptionsUndeclaredPropertiesEnumIncludeWithWarnings.ToPointer(),
                        },
                    },
                },
            },
            Credential: &shared.Credential{
                BasicAuth: &shared.BasicAuth{
                    Password: sdk.String("iste"),
                    User: sdk.String("magni"),
                },
                ServiceAccount: &shared.ServiceAccount{
                    Email: sdk.String("Marques_Tillman60@gmail.com"),
                },
                UseProjectDefault: sdk.Bool(false),
            },
            CustomCertificateAuthorityRoots: []string{
                "minima",
                "praesentium",
                "maxime",
                "magnam",
            },
            Description: sdk.String("temporibus"),
            DescriptorURL: sdk.String("quos"),
            ID: sdk.String("commodi"),
            InsertTime: sdk.String("itaque"),
            Labels: []shared.TypeProviderLabelEntry{
                shared.TypeProviderLabelEntry{
                    Key: sdk.String("totam"),
                    Value: sdk.String("earum"),
                },
                shared.TypeProviderLabelEntry{
                    Key: sdk.String("modi"),
                    Value: sdk.String("nam"),
                },
            },
            Name: sdk.String("Kenneth Hilpert Sr."),
            Operation: &shared.Operation{
                ClientOperationID: sdk.String("non"),
                CreationTimestamp: sdk.String("maiores"),
                Description: sdk.String("enim"),
                EndTime: sdk.String("sint"),
                Error: &shared.OperationError{
                    Errors: []shared.OperationErrorErrors{
                        shared.OperationErrorErrors{
                            Code: sdk.String("deserunt"),
                            Location: sdk.String("esse"),
                            Message: sdk.String("nemo"),
                        },
                        shared.OperationErrorErrors{
                            Code: sdk.String("reprehenderit"),
                            Location: sdk.String("est"),
                            Message: sdk.String("quis"),
                        },
                        shared.OperationErrorErrors{
                            Code: sdk.String("sint"),
                            Location: sdk.String("accusamus"),
                            Message: sdk.String("impedit"),
                        },
                        shared.OperationErrorErrors{
                            Code: sdk.String("hic"),
                            Location: sdk.String("necessitatibus"),
                            Message: sdk.String("asperiores"),
                        },
                    },
                },
                HTTPErrorMessage: sdk.String("ex"),
                HTTPErrorStatusCode: sdk.Int(376741),
                ID: sdk.String("debitis"),
                InsertTime: sdk.String("delectus"),
                Kind: sdk.String("quae"),
                Name: sdk.String("Grant Padberg"),
                OperationGroupID: sdk.String("atque"),
                OperationType: sdk.String("ipsum"),
                Progress: sdk.Int(773035),
                Region: sdk.String("magni"),
                SelfLink: sdk.String("soluta"),
                StartTime: sdk.String("repudiandae"),
                Status: shared.OperationStatusEnumDone.ToPointer(),
                StatusMessage: sdk.String("dolore"),
                TargetID: sdk.String("iusto"),
                TargetLink: sdk.String("voluptate"),
                User: sdk.String("sequi"),
                Warnings: []shared.OperationWarnings{
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumNextHopInstanceNotOnNetwork.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("deleniti"),
                                Value: sdk.String("quibusdam"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("iure"),
                                Value: sdk.String("odit"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("voluptatibus"),
                                Value: sdk.String("vel"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("magnam"),
                                Value: sdk.String("quibusdam"),
                            },
                        },
                        Message: sdk.String("inventore"),
                    },
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumDeprecatedTypeUsed.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("architecto"),
                                Value: sdk.String("voluptatibus"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("quia"),
                                Value: sdk.String("porro"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("aliquam"),
                                Value: sdk.String("velit"),
                            },
                        },
                        Message: sdk.String("illo"),
                    },
                },
                Zone: sdk.String("accusantium"),
            },
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
                NameProperty: sdk.String("expedita"),
                ValidationOptions: &shared.ValidationOptions{
                    SchemaValidation: shared.ValidationOptionsSchemaValidationEnumIgnoreWithWarnings.ToPointer(),
                    UndeclaredProperties: shared.ValidationOptionsUndeclaredPropertiesEnumFail.ToPointer(),
                },
            },
            SelfLink: sdk.String("voluptate"),
        },
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("animi"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        Project: "corporis",
        QuotaUser: sdk.String("est"),
        TypeProviderPathParameter: "error",
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("labore"),
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
                    Collection: sdk.String("consectetur"),
                    MethodMap: &shared.MethodMap{
                        Create: sdk.String("vitae"),
                        Delete: sdk.String("inventore"),
                        Get: sdk.String("dolorem"),
                        SetIamPolicy: sdk.String("ad"),
                        Update: sdk.String("qui"),
                    },
                    Options: &shared.Options{
                        AsyncOptions: []shared.AsyncOptions{
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("ex"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("soluta"),
                                            Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("rem"),
                                            Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("odio"),
                                    FinishCondition: sdk.String("fugit"),
                                    PollingLink: sdk.String("alias"),
                                    TargetLink: sdk.String("magni"),
                                },
                            },
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("vel"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("quae"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("neque"),
                                    FinishCondition: sdk.String("exercitationem"),
                                    PollingLink: sdk.String("itaque"),
                                    TargetLink: sdk.String("et"),
                                },
                            },
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("ipsum"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("nulla"),
                                            Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("maxime"),
                                            Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("quia"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("omnis"),
                                    FinishCondition: sdk.String("libero"),
                                    PollingLink: sdk.String("dicta"),
                                    TargetLink: sdk.String("id"),
                                },
                            },
                        },
                        InputMappings: []shared.InputMapping{
                            shared.InputMapping{
                                FieldName: sdk.String("fugiat"),
                                Location: shared.InputMappingLocationEnumBody.ToPointer(),
                                MethodMatch: sdk.String("quos"),
                                Value: sdk.String("placeat"),
                            },
                            shared.InputMapping{
                                FieldName: sdk.String("sit"),
                                Location: shared.InputMappingLocationEnumQuery.ToPointer(),
                                MethodMatch: sdk.String("ipsa"),
                                Value: sdk.String("voluptates"),
                            },
                            shared.InputMapping{
                                FieldName: sdk.String("inventore"),
                                Location: shared.InputMappingLocationEnumUnknown.ToPointer(),
                                MethodMatch: sdk.String("totam"),
                                Value: sdk.String("dolore"),
                            },
                        },
                        NameProperty: sdk.String("eligendi"),
                        ValidationOptions: &shared.ValidationOptions{
                            SchemaValidation: shared.ValidationOptionsSchemaValidationEnumIgnoreWithWarnings.ToPointer(),
                            UndeclaredProperties: shared.ValidationOptionsUndeclaredPropertiesEnumUnknown.ToPointer(),
                        },
                    },
                },
                shared.CollectionOverride{
                    Collection: sdk.String("autem"),
                    MethodMap: &shared.MethodMap{
                        Create: sdk.String("esse"),
                        Delete: sdk.String("dolores"),
                        Get: sdk.String("assumenda"),
                        SetIamPolicy: sdk.String("beatae"),
                        Update: sdk.String("est"),
                    },
                    Options: &shared.Options{
                        AsyncOptions: []shared.AsyncOptions{
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("corrupti"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("provident"),
                                            Level: shared.DiagnosticLevelEnumError.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("necessitatibus"),
                                            Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("sint"),
                                    FinishCondition: sdk.String("ea"),
                                    PollingLink: sdk.String("autem"),
                                    TargetLink: sdk.String("ipsam"),
                                },
                            },
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("rerum"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("corporis"),
                                            Level: shared.DiagnosticLevelEnumError.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("voluptatibus"),
                                            Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("at"),
                                            Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("quia"),
                                    FinishCondition: sdk.String("quidem"),
                                    PollingLink: sdk.String("fuga"),
                                    TargetLink: sdk.String("repudiandae"),
                                },
                            },
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("accusantium"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("officiis"),
                                            Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("quibusdam"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("praesentium"),
                                            Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("explicabo"),
                                    FinishCondition: sdk.String("corporis"),
                                    PollingLink: sdk.String("error"),
                                    TargetLink: sdk.String("earum"),
                                },
                            },
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("adipisci"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("similique"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("quidem"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("beatae"),
                                            Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("molestiae"),
                                            Level: shared.DiagnosticLevelEnumError.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("cupiditate"),
                                    FinishCondition: sdk.String("fugit"),
                                    PollingLink: sdk.String("numquam"),
                                    TargetLink: sdk.String("numquam"),
                                },
                            },
                        },
                        InputMappings: []shared.InputMapping{
                            shared.InputMapping{
                                FieldName: sdk.String("at"),
                                Location: shared.InputMappingLocationEnumBody.ToPointer(),
                                MethodMatch: sdk.String("dignissimos"),
                                Value: sdk.String("optio"),
                            },
                        },
                        NameProperty: sdk.String("necessitatibus"),
                        ValidationOptions: &shared.ValidationOptions{
                            SchemaValidation: shared.ValidationOptionsSchemaValidationEnumIgnore.ToPointer(),
                            UndeclaredProperties: shared.ValidationOptionsUndeclaredPropertiesEnumInclude.ToPointer(),
                        },
                    },
                },
                shared.CollectionOverride{
                    Collection: sdk.String("expedita"),
                    MethodMap: &shared.MethodMap{
                        Create: sdk.String("voluptatum"),
                        Delete: sdk.String("cupiditate"),
                        Get: sdk.String("minima"),
                        SetIamPolicy: sdk.String("placeat"),
                        Update: sdk.String("enim"),
                    },
                    Options: &shared.Options{
                        AsyncOptions: []shared.AsyncOptions{
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("in"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("eum"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("corporis"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("voluptates"),
                                            Level: shared.DiagnosticLevelEnumError.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("tempore"),
                                            Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("libero"),
                                    FinishCondition: sdk.String("ratione"),
                                    PollingLink: sdk.String("labore"),
                                    TargetLink: sdk.String("totam"),
                                },
                            },
                        },
                        InputMappings: []shared.InputMapping{
                            shared.InputMapping{
                                FieldName: sdk.String("voluptas"),
                                Location: shared.InputMappingLocationEnumBody.ToPointer(),
                                MethodMatch: sdk.String("velit"),
                                Value: sdk.String("minus"),
                            },
                            shared.InputMapping{
                                FieldName: sdk.String("fuga"),
                                Location: shared.InputMappingLocationEnumPath.ToPointer(),
                                MethodMatch: sdk.String("est"),
                                Value: sdk.String("impedit"),
                            },
                            shared.InputMapping{
                                FieldName: sdk.String("delectus"),
                                Location: shared.InputMappingLocationEnumBody.ToPointer(),
                                MethodMatch: sdk.String("vero"),
                                Value: sdk.String("odit"),
                            },
                        },
                        NameProperty: sdk.String("repellat"),
                        ValidationOptions: &shared.ValidationOptions{
                            SchemaValidation: shared.ValidationOptionsSchemaValidationEnumFail.ToPointer(),
                            UndeclaredProperties: shared.ValidationOptionsUndeclaredPropertiesEnumIgnore.ToPointer(),
                        },
                    },
                },
                shared.CollectionOverride{
                    Collection: sdk.String("reprehenderit"),
                    MethodMap: &shared.MethodMap{
                        Create: sdk.String("aperiam"),
                        Delete: sdk.String("odio"),
                        Get: sdk.String("minima"),
                        SetIamPolicy: sdk.String("in"),
                        Update: sdk.String("ducimus"),
                    },
                    Options: &shared.Options{
                        AsyncOptions: []shared.AsyncOptions{
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("dolores"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("veritatis"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("voluptate"),
                                            Level: shared.DiagnosticLevelEnumError.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("itaque"),
                                            Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("optio"),
                                    FinishCondition: sdk.String("ex"),
                                    PollingLink: sdk.String("quaerat"),
                                    TargetLink: sdk.String("commodi"),
                                },
                            },
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("officiis"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("quidem"),
                                            Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("quam"),
                                            Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("modi"),
                                            Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("sint"),
                                            Level: shared.DiagnosticLevelEnumError.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("sequi"),
                                    FinishCondition: sdk.String("repudiandae"),
                                    PollingLink: sdk.String("cum"),
                                    TargetLink: sdk.String("dicta"),
                                },
                            },
                            shared.AsyncOptions{
                                MethodMatch: sdk.String("earum"),
                                PollingOptions: &shared.PollingOptions{
                                    Diagnostics: []shared.Diagnostic{
                                        shared.Diagnostic{
                                            Field: sdk.String("animi"),
                                            Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                        },
                                        shared.Diagnostic{
                                            Field: sdk.String("nam"),
                                            Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                        },
                                    },
                                    FailCondition: sdk.String("consequuntur"),
                                    FinishCondition: sdk.String("necessitatibus"),
                                    PollingLink: sdk.String("nobis"),
                                    TargetLink: sdk.String("ipsa"),
                                },
                            },
                        },
                        InputMappings: []shared.InputMapping{
                            shared.InputMapping{
                                FieldName: sdk.String("maiores"),
                                Location: shared.InputMappingLocationEnumUnknown.ToPointer(),
                                MethodMatch: sdk.String("quasi"),
                                Value: sdk.String("laboriosam"),
                            },
                            shared.InputMapping{
                                FieldName: sdk.String("pariatur"),
                                Location: shared.InputMappingLocationEnumBody.ToPointer(),
                                MethodMatch: sdk.String("excepturi"),
                                Value: sdk.String("occaecati"),
                            },
                        },
                        NameProperty: sdk.String("nemo"),
                        ValidationOptions: &shared.ValidationOptions{
                            SchemaValidation: shared.ValidationOptionsSchemaValidationEnumIgnore.ToPointer(),
                            UndeclaredProperties: shared.ValidationOptionsUndeclaredPropertiesEnumIgnore.ToPointer(),
                        },
                    },
                },
            },
            Credential: &shared.Credential{
                BasicAuth: &shared.BasicAuth{
                    Password: sdk.String("doloribus"),
                    User: sdk.String("eligendi"),
                },
                ServiceAccount: &shared.ServiceAccount{
                    Email: sdk.String("Emelie_Welch@yahoo.com"),
                },
                UseProjectDefault: sdk.Bool(false),
            },
            CustomCertificateAuthorityRoots: []string{
                "molestias",
                "odio",
                "eaque",
            },
            Description: sdk.String("saepe"),
            DescriptorURL: sdk.String("architecto"),
            ID: sdk.String("quos"),
            InsertTime: sdk.String("iste"),
            Labels: []shared.TypeProviderLabelEntry{
                shared.TypeProviderLabelEntry{
                    Key: sdk.String("tempore"),
                    Value: sdk.String("libero"),
                },
                shared.TypeProviderLabelEntry{
                    Key: sdk.String("velit"),
                    Value: sdk.String("doloremque"),
                },
                shared.TypeProviderLabelEntry{
                    Key: sdk.String("delectus"),
                    Value: sdk.String("impedit"),
                },
                shared.TypeProviderLabelEntry{
                    Key: sdk.String("cum"),
                    Value: sdk.String("ipsum"),
                },
            },
            Name: sdk.String("Mrs. Kerry Nolan"),
            Operation: &shared.Operation{
                ClientOperationID: sdk.String("libero"),
                CreationTimestamp: sdk.String("architecto"),
                Description: sdk.String("cupiditate"),
                EndTime: sdk.String("molestiae"),
                Error: &shared.OperationError{
                    Errors: []shared.OperationErrorErrors{
                        shared.OperationErrorErrors{
                            Code: sdk.String("possimus"),
                            Location: sdk.String("non"),
                            Message: sdk.String("magnam"),
                        },
                        shared.OperationErrorErrors{
                            Code: sdk.String("itaque"),
                            Location: sdk.String("sed"),
                            Message: sdk.String("asperiores"),
                        },
                        shared.OperationErrorErrors{
                            Code: sdk.String("veniam"),
                            Location: sdk.String("consequuntur"),
                            Message: sdk.String("facere"),
                        },
                        shared.OperationErrorErrors{
                            Code: sdk.String("laudantium"),
                            Location: sdk.String("odit"),
                            Message: sdk.String("pariatur"),
                        },
                    },
                },
                HTTPErrorMessage: sdk.String("amet"),
                HTTPErrorStatusCode: sdk.Int(347698),
                ID: sdk.String("ab"),
                InsertTime: sdk.String("velit"),
                Kind: sdk.String("facilis"),
                Name: sdk.String("Tyler Wolff"),
                OperationGroupID: sdk.String("distinctio"),
                OperationType: sdk.String("nisi"),
                Progress: sdk.Int(335977),
                Region: sdk.String("nisi"),
                SelfLink: sdk.String("libero"),
                StartTime: sdk.String("minus"),
                Status: shared.OperationStatusEnumDone.ToPointer(),
                StatusMessage: sdk.String("facilis"),
                TargetID: sdk.String("ipsum"),
                TargetLink: sdk.String("ad"),
                User: sdk.String("voluptatibus"),
                Warnings: []shared.OperationWarnings{
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumNextHopInstanceNotFound.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("labore"),
                                Value: sdk.String("rerum"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("eos"),
                                Value: sdk.String("reprehenderit"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("nostrum"),
                                Value: sdk.String("neque"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("iusto"),
                                Value: sdk.String("est"),
                            },
                        },
                        Message: sdk.String("rem"),
                    },
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumUndeclaredProperties.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("unde"),
                                Value: sdk.String("officiis"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("ducimus"),
                                Value: sdk.String("dolor"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("dicta"),
                                Value: sdk.String("error"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("porro"),
                                Value: sdk.String("vitae"),
                            },
                        },
                        Message: sdk.String("dignissimos"),
                    },
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumSingleInstancePropertyTemplate.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("ad"),
                                Value: sdk.String("aspernatur"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("enim"),
                                Value: sdk.String("delectus"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("iusto"),
                                Value: sdk.String("dignissimos"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("libero"),
                                Value: sdk.String("illo"),
                            },
                        },
                        Message: sdk.String("ab"),
                    },
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumNextHopNotRunning.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("saepe"),
                                Value: sdk.String("tempore"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("veniam"),
                                Value: sdk.String("eos"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("reiciendis"),
                                Value: sdk.String("earum"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("reprehenderit"),
                                Value: sdk.String("praesentium"),
                            },
                        },
                        Message: sdk.String("nemo"),
                    },
                },
                Zone: sdk.String("repellat"),
            },
            Options: &shared.Options{
                AsyncOptions: []shared.AsyncOptions{
                    shared.AsyncOptions{
                        MethodMatch: sdk.String("sequi"),
                        PollingOptions: &shared.PollingOptions{
                            Diagnostics: []shared.Diagnostic{
                                shared.Diagnostic{
                                    Field: sdk.String("deleniti"),
                                    Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                },
                                shared.Diagnostic{
                                    Field: sdk.String("labore"),
                                    Level: shared.DiagnosticLevelEnumError.ToPointer(),
                                },
                            },
                            FailCondition: sdk.String("aliquam"),
                            FinishCondition: sdk.String("quisquam"),
                            PollingLink: sdk.String("provident"),
                            TargetLink: sdk.String("laudantium"),
                        },
                    },
                    shared.AsyncOptions{
                        MethodMatch: sdk.String("repudiandae"),
                        PollingOptions: &shared.PollingOptions{
                            Diagnostics: []shared.Diagnostic{
                                shared.Diagnostic{
                                    Field: sdk.String("maxime"),
                                    Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                },
                            },
                            FailCondition: sdk.String("nam"),
                            FinishCondition: sdk.String("expedita"),
                            PollingLink: sdk.String("quas"),
                            TargetLink: sdk.String("provident"),
                        },
                    },
                    shared.AsyncOptions{
                        MethodMatch: sdk.String("repudiandae"),
                        PollingOptions: &shared.PollingOptions{
                            Diagnostics: []shared.Diagnostic{
                                shared.Diagnostic{
                                    Field: sdk.String("dignissimos"),
                                    Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                },
                                shared.Diagnostic{
                                    Field: sdk.String("vero"),
                                    Level: shared.DiagnosticLevelEnumWarning.ToPointer(),
                                },
                                shared.Diagnostic{
                                    Field: sdk.String("repellendus"),
                                    Level: shared.DiagnosticLevelEnumInformation.ToPointer(),
                                },
                            },
                            FailCondition: sdk.String("dolorem"),
                            FinishCondition: sdk.String("commodi"),
                            PollingLink: sdk.String("impedit"),
                            TargetLink: sdk.String("commodi"),
                        },
                    },
                    shared.AsyncOptions{
                        MethodMatch: sdk.String("aut"),
                        PollingOptions: &shared.PollingOptions{
                            Diagnostics: []shared.Diagnostic{
                                shared.Diagnostic{
                                    Field: sdk.String("ad"),
                                    Level: shared.DiagnosticLevelEnumUnknown.ToPointer(),
                                },
                            },
                            FailCondition: sdk.String("amet"),
                            FinishCondition: sdk.String("illum"),
                            PollingLink: sdk.String("praesentium"),
                            TargetLink: sdk.String("quidem"),
                        },
                    },
                },
                InputMappings: []shared.InputMapping{
                    shared.InputMapping{
                        FieldName: sdk.String("amet"),
                        Location: shared.InputMappingLocationEnumUnknown.ToPointer(),
                        MethodMatch: sdk.String("dicta"),
                        Value: sdk.String("laudantium"),
                    },
                    shared.InputMapping{
                        FieldName: sdk.String("doloremque"),
                        Location: shared.InputMappingLocationEnumHeader.ToPointer(),
                        MethodMatch: sdk.String("iusto"),
                        Value: sdk.String("amet"),
                    },
                    shared.InputMapping{
                        FieldName: sdk.String("provident"),
                        Location: shared.InputMappingLocationEnumBody.ToPointer(),
                        MethodMatch: sdk.String("necessitatibus"),
                        Value: sdk.String("provident"),
                    },
                },
                NameProperty: sdk.String("repudiandae"),
                ValidationOptions: &shared.ValidationOptions{
                    SchemaValidation: shared.ValidationOptionsSchemaValidationEnumUnknown.ToPointer(),
                    UndeclaredProperties: shared.ValidationOptionsUndeclaredPropertiesEnumIgnore.ToPointer(),
                },
            },
            SelfLink: sdk.String("molestiae"),
        },
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("corrupti"),
        Fields: sdk.String("aperiam"),
        Key: sdk.String("sint"),
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        Project: "eos",
        QuotaUser: sdk.String("totam"),
        TypeProviderPathParameter: "dicta",
        UploadType: sdk.String("voluptatem"),
        UploadProtocol: sdk.String("velit"),
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
