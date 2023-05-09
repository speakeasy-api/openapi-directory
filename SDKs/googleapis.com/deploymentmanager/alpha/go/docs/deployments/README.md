# Deployments

### Available Operations

* [DeploymentmanagerDeploymentsCancelPreview](#deploymentmanagerdeploymentscancelpreview) - Cancels and removes the preview currently associated with the deployment.
* [DeploymentmanagerDeploymentsDelete](#deploymentmanagerdeploymentsdelete) - Deletes a deployment and all of the resources in the deployment.
* [DeploymentmanagerDeploymentsGet](#deploymentmanagerdeploymentsget) - Gets information about a specific deployment.
* [DeploymentmanagerDeploymentsGetIamPolicy](#deploymentmanagerdeploymentsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [DeploymentmanagerDeploymentsInsert](#deploymentmanagerdeploymentsinsert) - Creates a deployment and all of the resources described by the deployment manifest.
* [DeploymentmanagerDeploymentsList](#deploymentmanagerdeploymentslist) - Lists all deployments for a given project.
* [DeploymentmanagerDeploymentsPatch](#deploymentmanagerdeploymentspatch) - Patches a deployment and all of the resources described by the deployment manifest.
* [DeploymentmanagerDeploymentsSetIamPolicy](#deploymentmanagerdeploymentssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [DeploymentmanagerDeploymentsStop](#deploymentmanagerdeploymentsstop) - Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.
* [DeploymentmanagerDeploymentsTestIamPermissions](#deploymentmanagerdeploymentstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [DeploymentmanagerDeploymentsUpdate](#deploymentmanagerdeploymentsupdate) - Updates a deployment and all of the resources described by the deployment manifest.

## DeploymentmanagerDeploymentsCancelPreview

Cancels and removes the preview currently associated with the deployment.

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
    res, err := s.Deployments.DeploymentmanagerDeploymentsCancelPreview(ctx, operations.DeploymentmanagerDeploymentsCancelPreviewRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DeploymentsCancelPreviewRequest: &shared.DeploymentsCancelPreviewRequest{
            Fingerprint: sdk.String("fugiat"),
        },
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cumque"),
        Deployment: "corporis",
        Fields: sdk.String("hic"),
        Key: sdk.String("libero"),
        OauthToken: sdk.String("nobis"),
        PrettyPrint: sdk.Bool(false),
        Project: "dolores",
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("dignissimos"),
    }, operations.DeploymentmanagerDeploymentsCancelPreviewSecurity{
        Option1: &operations.DeploymentmanagerDeploymentsCancelPreviewSecurityOption1{
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

## DeploymentmanagerDeploymentsDelete

Deletes a deployment and all of the resources in the deployment.

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
    res, err := s.Deployments.DeploymentmanagerDeploymentsDelete(ctx, operations.DeploymentmanagerDeploymentsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eos"),
        DeletePolicy: operations.DeploymentmanagerDeploymentsDeleteDeletePolicyEnumDelete.ToPointer(),
        Deployment: "dolores",
        Fields: sdk.String("minus"),
        Key: sdk.String("quam"),
        OauthToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        Project: "vero",
        QuotaUser: sdk.String("nostrum"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("recusandae"),
    }, operations.DeploymentmanagerDeploymentsDeleteSecurity{
        Option1: &operations.DeploymentmanagerDeploymentsDeleteSecurityOption1{
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

## DeploymentmanagerDeploymentsGet

Gets information about a specific deployment.

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
    res, err := s.Deployments.DeploymentmanagerDeploymentsGet(ctx, operations.DeploymentmanagerDeploymentsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptatem"),
        Deployment: "porro",
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("blanditiis"),
        OauthToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        Project: "eaque",
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("adipisci"),
    }, operations.DeploymentmanagerDeploymentsGetSecurity{
        Option1: &operations.DeploymentmanagerDeploymentsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Deployment != nil {
        // handle response
    }
}
```

## DeploymentmanagerDeploymentsGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

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
    res, err := s.Deployments.DeploymentmanagerDeploymentsGetIamPolicy(ctx, operations.DeploymentmanagerDeploymentsGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("earum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iste"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("pariatur"),
        OptionsRequestedPolicyVersion: sdk.Int64(589910),
        PrettyPrint: sdk.Bool(false),
        Project: "nobis",
        QuotaUser: sdk.String("libero"),
        Resource: "delectus",
        UploadType: sdk.String("quaerat"),
        UploadProtocol: sdk.String("quos"),
    }, operations.DeploymentmanagerDeploymentsGetIamPolicySecurity{
        Option1: &operations.DeploymentmanagerDeploymentsGetIamPolicySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## DeploymentmanagerDeploymentsInsert

Creates a deployment and all of the resources described by the deployment manifest.

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
    res, err := s.Deployments.DeploymentmanagerDeploymentsInsert(ctx, operations.DeploymentmanagerDeploymentsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Deployment: &shared.Deployment{
            Credential: &shared.Credential{
                BasicAuth: &shared.BasicAuth{
                    Password: sdk.String("dolorem"),
                    User: sdk.String("dolorem"),
                },
                ServiceAccount: &shared.ServiceAccount{
                    Email: sdk.String("Christy_Erdman73@gmail.com"),
                },
                UseProjectDefault: sdk.Bool(false),
            },
            Description: sdk.String("voluptate"),
            Fingerprint: sdk.String("dignissimos"),
            ID: sdk.String("reiciendis"),
            InsertTime: sdk.String("amet"),
            Labels: []shared.DeploymentLabelEntry{
                shared.DeploymentLabelEntry{
                    Key: sdk.String("numquam"),
                    Value: sdk.String("veritatis"),
                },
                shared.DeploymentLabelEntry{
                    Key: sdk.String("ipsa"),
                    Value: sdk.String("ipsa"),
                },
                shared.DeploymentLabelEntry{
                    Key: sdk.String("iure"),
                    Value: sdk.String("odio"),
                },
            },
            Manifest: sdk.String("quaerat"),
            Name: sdk.String("Rickey Wolf"),
            Operation: &shared.Operation{
                ClientOperationID: sdk.String("eos"),
                CreationTimestamp: sdk.String("atque"),
                Description: sdk.String("sit"),
                EndTime: sdk.String("fugiat"),
                Error: &shared.OperationError{
                    Errors: []shared.OperationErrorErrors{
                        shared.OperationErrorErrors{
                            Code: sdk.String("soluta"),
                            Location: sdk.String("dolorum"),
                            Message: sdk.String("iusto"),
                        },
                    },
                },
                HTTPErrorMessage: sdk.String("voluptate"),
                HTTPErrorStatusCode: sdk.Int(677082),
                ID: sdk.String("deleniti"),
                InsertTime: sdk.String("omnis"),
                Kind: sdk.String("necessitatibus"),
                Name: sdk.String("Emmett Kovacek"),
                OperationGroupID: sdk.String("id"),
                OperationType: sdk.String("saepe"),
                Progress: sdk.Int(263322),
                Region: sdk.String("aspernatur"),
                SelfLink: sdk.String("perferendis"),
                StartTime: sdk.String("amet"),
                Status: shared.OperationStatusEnumDone.ToPointer(),
                StatusMessage: sdk.String("accusamus"),
                TargetID: sdk.String("ad"),
                TargetLink: sdk.String("saepe"),
                User: sdk.String("suscipit"),
                Warnings: []shared.OperationWarnings{
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumFieldValueOverriden.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("repellendus"),
                                Value: sdk.String("totam"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("similique"),
                                Value: sdk.String("alias"),
                            },
                        },
                        Message: sdk.String("at"),
                    },
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumInjectedKernelsDeprecated.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("vel"),
                                Value: sdk.String("quod"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("officiis"),
                                Value: sdk.String("qui"),
                            },
                        },
                        Message: sdk.String("dolorum"),
                    },
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumNextHopInstanceHasNoIpv6Interface.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("harum"),
                                Value: sdk.String("iusto"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("ipsum"),
                                Value: sdk.String("quisquam"),
                            },
                        },
                        Message: sdk.String("tenetur"),
                    },
                },
                Zone: sdk.String("amet"),
            },
            Outputs: []shared.DeploymentOutputEntry{
                shared.DeploymentOutputEntry{
                    Key: sdk.String("accusamus"),
                    Value: sdk.String("numquam"),
                },
                shared.DeploymentOutputEntry{
                    Key: sdk.String("enim"),
                    Value: sdk.String("dolorem"),
                },
                shared.DeploymentOutputEntry{
                    Key: sdk.String("sapiente"),
                    Value: sdk.String("totam"),
                },
            },
            SelfLink: sdk.String("nihil"),
            Target: &shared.TargetConfiguration{
                Config: &shared.ConfigFile{
                    Content: sdk.String("sit"),
                },
                Imports: []shared.ImportFile{
                    shared.ImportFile{
                        Content: sdk.String("neque"),
                        Name: sdk.String("Gina Renner"),
                    },
                    shared.ImportFile{
                        Content: sdk.String("quam"),
                        Name: sdk.String("Amber Dibbert"),
                    },
                    shared.ImportFile{
                        Content: sdk.String("pariatur"),
                        Name: sdk.String("Keith Padberg"),
                    },
                },
            },
            Update: &shared.DeploymentUpdate{
                Credential: &shared.Credential{
                    BasicAuth: &shared.BasicAuth{
                        Password: sdk.String("aspernatur"),
                        User: sdk.String("dolores"),
                    },
                    ServiceAccount: &shared.ServiceAccount{
                        Email: sdk.String("Mckenzie_Hyatt@hotmail.com"),
                    },
                    UseProjectDefault: sdk.Bool(false),
                },
                Description: sdk.String("temporibus"),
                Labels: []shared.DeploymentUpdateLabelEntry{
                    shared.DeploymentUpdateLabelEntry{
                        Key: sdk.String("neque"),
                        Value: sdk.String("fugit"),
                    },
                },
                Manifest: sdk.String("magni"),
            },
            UpdateTime: sdk.String("odio"),
        },
        AccessToken: sdk.String("sunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nam"),
        CreatePolicy: operations.DeploymentmanagerDeploymentsInsertCreatePolicyEnumCreate.ToPointer(),
        Fields: sdk.String("voluptatem"),
        Key: sdk.String("cumque"),
        OauthToken: sdk.String("soluta"),
        PrettyPrint: sdk.Bool(false),
        Preview: sdk.Bool(false),
        Project: "nobis",
        QuotaUser: sdk.String("et"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.DeploymentmanagerDeploymentsInsertSecurity{
        Option1: &operations.DeploymentmanagerDeploymentsInsertSecurityOption1{
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

## DeploymentmanagerDeploymentsList

Lists all deployments for a given project.

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
    res, err := s.Deployments.DeploymentmanagerDeploymentsList(ctx, operations.DeploymentmanagerDeploymentsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tempore"),
        Fields: sdk.String("cupiditate"),
        Filter: sdk.String("aperiam"),
        Key: sdk.String("delectus"),
        MaxResults: sdk.Int64(209157),
        OauthToken: sdk.String("dolore"),
        OrderBy: sdk.String("labore"),
        PageToken: sdk.String("adipisci"),
        PrettyPrint: sdk.Bool(false),
        Project: "dolorum",
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("aut"),
    }, operations.DeploymentmanagerDeploymentsListSecurity{
        Option1: &operations.DeploymentmanagerDeploymentsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeploymentsListResponse != nil {
        // handle response
    }
}
```

## DeploymentmanagerDeploymentsPatch

Patches a deployment and all of the resources described by the deployment manifest.

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
    res, err := s.Deployments.DeploymentmanagerDeploymentsPatch(ctx, operations.DeploymentmanagerDeploymentsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Deployment1: &shared.Deployment{
            Credential: &shared.Credential{
                BasicAuth: &shared.BasicAuth{
                    Password: sdk.String("itaque"),
                    User: sdk.String("consequatur"),
                },
                ServiceAccount: &shared.ServiceAccount{
                    Email: sdk.String("River.Schaden70@hotmail.com"),
                },
                UseProjectDefault: sdk.Bool(false),
            },
            Description: sdk.String("cupiditate"),
            Fingerprint: sdk.String("qui"),
            ID: sdk.String("quae"),
            InsertTime: sdk.String("laudantium"),
            Labels: []shared.DeploymentLabelEntry{
                shared.DeploymentLabelEntry{
                    Key: sdk.String("occaecati"),
                    Value: sdk.String("voluptatibus"),
                },
                shared.DeploymentLabelEntry{
                    Key: sdk.String("quisquam"),
                    Value: sdk.String("vero"),
                },
            },
            Manifest: sdk.String("omnis"),
            Name: sdk.String("Tiffany Willms"),
            Operation: &shared.Operation{
                ClientOperationID: sdk.String("vero"),
                CreationTimestamp: sdk.String("tenetur"),
                Description: sdk.String("dignissimos"),
                EndTime: sdk.String("hic"),
                Error: &shared.OperationError{
                    Errors: []shared.OperationErrorErrors{
                        shared.OperationErrorErrors{
                            Code: sdk.String("quod"),
                            Location: sdk.String("odio"),
                            Message: sdk.String("similique"),
                        },
                        shared.OperationErrorErrors{
                            Code: sdk.String("facilis"),
                            Location: sdk.String("vero"),
                            Message: sdk.String("ducimus"),
                        },
                        shared.OperationErrorErrors{
                            Code: sdk.String("dolore"),
                            Location: sdk.String("quibusdam"),
                            Message: sdk.String("illum"),
                        },
                    },
                },
                HTTPErrorMessage: sdk.String("sequi"),
                HTTPErrorStatusCode: sdk.Int(617877),
                ID: sdk.String("impedit"),
                InsertTime: sdk.String("aut"),
                Kind: sdk.String("voluptatibus"),
                Name: sdk.String("Freda Cormier"),
                OperationGroupID: sdk.String("doloribus"),
                OperationType: sdk.String("iusto"),
                Progress: sdk.Int(753570),
                Region: sdk.String("ducimus"),
                SelfLink: sdk.String("alias"),
                StartTime: sdk.String("officia"),
                Status: shared.OperationStatusEnumPending.ToPointer(),
                StatusMessage: sdk.String("ipsam"),
                TargetID: sdk.String("ea"),
                TargetLink: sdk.String("aspernatur"),
                User: sdk.String("vel"),
                Warnings: []shared.OperationWarnings{
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumInjectedKernelsDeprecated.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("ex"),
                                Value: sdk.String("laudantium"),
                            },
                        },
                        Message: sdk.String("dicta"),
                    },
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumNextHopCannotIPForward.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("quasi"),
                                Value: sdk.String("ex"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("nulla"),
                                Value: sdk.String("excepturi"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("voluptatibus"),
                                Value: sdk.String("nostrum"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("sapiente"),
                                Value: sdk.String("quisquam"),
                            },
                        },
                        Message: sdk.String("saepe"),
                    },
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumResourceNotDeleted.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("corporis"),
                                Value: sdk.String("veniam"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("aliquid"),
                                Value: sdk.String("inventore"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("magnam"),
                                Value: sdk.String("ea"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("quo"),
                                Value: sdk.String("consectetur"),
                            },
                        },
                        Message: sdk.String("recusandae"),
                    },
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumNextHopAddressNotAssigned.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("eaque"),
                                Value: sdk.String("a"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("libero"),
                                Value: sdk.String("aut"),
                            },
                        },
                        Message: sdk.String("aut"),
                    },
                },
                Zone: sdk.String("deleniti"),
            },
            Outputs: []shared.DeploymentOutputEntry{
                shared.DeploymentOutputEntry{
                    Key: sdk.String("aliquam"),
                    Value: sdk.String("fugit"),
                },
                shared.DeploymentOutputEntry{
                    Key: sdk.String("accusamus"),
                    Value: sdk.String("inventore"),
                },
                shared.DeploymentOutputEntry{
                    Key: sdk.String("non"),
                    Value: sdk.String("et"),
                },
                shared.DeploymentOutputEntry{
                    Key: sdk.String("dolorum"),
                    Value: sdk.String("laborum"),
                },
            },
            SelfLink: sdk.String("placeat"),
            Target: &shared.TargetConfiguration{
                Config: &shared.ConfigFile{
                    Content: sdk.String("velit"),
                },
                Imports: []shared.ImportFile{
                    shared.ImportFile{
                        Content: sdk.String("autem"),
                        Name: sdk.String("Clifton Simonis"),
                    },
                    shared.ImportFile{
                        Content: sdk.String("libero"),
                        Name: sdk.String("Anita Gerhold"),
                    },
                },
            },
            Update: &shared.DeploymentUpdate{
                Credential: &shared.Credential{
                    BasicAuth: &shared.BasicAuth{
                        Password: sdk.String("ipsa"),
                        User: sdk.String("molestiae"),
                    },
                    ServiceAccount: &shared.ServiceAccount{
                        Email: sdk.String("Jefferey.Gibson@gmail.com"),
                    },
                    UseProjectDefault: sdk.Bool(false),
                },
                Description: sdk.String("rem"),
                Labels: []shared.DeploymentUpdateLabelEntry{
                    shared.DeploymentUpdateLabelEntry{
                        Key: sdk.String("reprehenderit"),
                        Value: sdk.String("quidem"),
                    },
                    shared.DeploymentUpdateLabelEntry{
                        Key: sdk.String("fugiat"),
                        Value: sdk.String("ut"),
                    },
                    shared.DeploymentUpdateLabelEntry{
                        Key: sdk.String("eum"),
                        Value: sdk.String("suscipit"),
                    },
                },
                Manifest: sdk.String("assumenda"),
            },
            UpdateTime: sdk.String("eos"),
        },
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("veritatis"),
        CreatePolicy: operations.DeploymentmanagerDeploymentsPatchCreatePolicyEnumCreateOrAcquire.ToPointer(),
        DeletePolicy: operations.DeploymentmanagerDeploymentsPatchDeletePolicyEnumAbandon.ToPointer(),
        DeploymentPathParameter: "quidem",
        Fields: sdk.String("neque"),
        Key: sdk.String("quo"),
        OauthToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        Preview: sdk.Bool(false),
        Project: "quo",
        QuotaUser: sdk.String("fuga"),
        UploadType: sdk.String("eius"),
        UploadProtocol: sdk.String("eos"),
    }, operations.DeploymentmanagerDeploymentsPatchSecurity{
        Option1: &operations.DeploymentmanagerDeploymentsPatchSecurityOption1{
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

## DeploymentmanagerDeploymentsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

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
    res, err := s.Deployments.DeploymentmanagerDeploymentsSetIamPolicy(ctx, operations.DeploymentmanagerDeploymentsSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GlobalSetPolicyRequest: &shared.GlobalSetPolicyRequest{
            Bindings: []shared.Binding{
                shared.Binding{
                    Condition: &shared.Expr{
                        Description: sdk.String("cupiditate"),
                        Expression: sdk.String("consequatur"),
                        Location: sdk.String("tempora"),
                        Title: sdk.String("Dr."),
                    },
                    Members: []string{
                        "aspernatur",
                        "sequi",
                    },
                    Role: sdk.String("quo"),
                },
            },
            Etag: sdk.String("esse"),
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "quod",
                                    "dignissimos",
                                    "inventore",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("totam"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "odio",
                                    "occaecati",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "dolores",
                                    "deserunt",
                                    "molestiae",
                                    "accusantium",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "quas",
                                    "praesentium",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "fugit",
                                    "fuga",
                                    "mollitia",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("atque"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "nisi",
                                    "fugit",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("consequuntur"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "saepe",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("atque"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("esse"),
                            Expression: sdk.String("eveniet"),
                            Location: sdk.String("accusamus"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "quod",
                            "nam",
                        },
                        Role: sdk.String("vero"),
                    },
                },
                Etag: sdk.String("aliquid"),
                Version: sdk.Int(93459),
            },
        },
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("harum"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("rerum"),
        OauthToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        Project: "minima",
        QuotaUser: sdk.String("distinctio"),
        Resource: "eligendi",
        UploadType: sdk.String("sit"),
        UploadProtocol: sdk.String("culpa"),
    }, operations.DeploymentmanagerDeploymentsSetIamPolicySecurity{
        Option1: &operations.DeploymentmanagerDeploymentsSetIamPolicySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## DeploymentmanagerDeploymentsStop

Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.

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
    res, err := s.Deployments.DeploymentmanagerDeploymentsStop(ctx, operations.DeploymentmanagerDeploymentsStopRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DeploymentsStopRequest: &shared.DeploymentsStopRequest{
            Fingerprint: sdk.String("adipisci"),
        },
        AccessToken: sdk.String("cumque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("consequatur"),
        Deployment: "minus",
        Fields: sdk.String("quaerat"),
        Key: sdk.String("sapiente"),
        OauthToken: sdk.String("consectetur"),
        PrettyPrint: sdk.Bool(false),
        Project: "esse",
        QuotaUser: sdk.String("blanditiis"),
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("a"),
    }, operations.DeploymentmanagerDeploymentsStopSecurity{
        Option1: &operations.DeploymentmanagerDeploymentsStopSecurityOption1{
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

## DeploymentmanagerDeploymentsTestIamPermissions

Returns permissions that a caller has on the specified resource.

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
    res, err := s.Deployments.DeploymentmanagerDeploymentsTestIamPermissions(ctx, operations.DeploymentmanagerDeploymentsTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TestPermissionsRequest: &shared.TestPermissionsRequest{
            Permissions: []string{
                "esse",
                "quasi",
                "a",
            },
        },
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("pariatur"),
        Fields: sdk.String("possimus"),
        Key: sdk.String("quia"),
        OauthToken: sdk.String("eveniet"),
        PrettyPrint: sdk.Bool(false),
        Project: "asperiores",
        QuotaUser: sdk.String("facere"),
        Resource: "veritatis",
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.DeploymentmanagerDeploymentsTestIamPermissionsSecurity{
        Option1: &operations.DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestPermissionsResponse != nil {
        // handle response
    }
}
```

## DeploymentmanagerDeploymentsUpdate

Updates a deployment and all of the resources described by the deployment manifest.

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
    res, err := s.Deployments.DeploymentmanagerDeploymentsUpdate(ctx, operations.DeploymentmanagerDeploymentsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Deployment1: &shared.Deployment{
            Credential: &shared.Credential{
                BasicAuth: &shared.BasicAuth{
                    Password: sdk.String("culpa"),
                    User: sdk.String("aliquid"),
                },
                ServiceAccount: &shared.ServiceAccount{
                    Email: sdk.String("Angie.Wehner@hotmail.com"),
                },
                UseProjectDefault: sdk.Bool(false),
            },
            Description: sdk.String("eius"),
            Fingerprint: sdk.String("libero"),
            ID: sdk.String("illum"),
            InsertTime: sdk.String("soluta"),
            Labels: []shared.DeploymentLabelEntry{
                shared.DeploymentLabelEntry{
                    Key: sdk.String("aliquam"),
                    Value: sdk.String("sapiente"),
                },
            },
            Manifest: sdk.String("dicta"),
            Name: sdk.String("Delores Hermiston IV"),
            Operation: &shared.Operation{
                ClientOperationID: sdk.String("qui"),
                CreationTimestamp: sdk.String("quibusdam"),
                Description: sdk.String("ex"),
                EndTime: sdk.String("deleniti"),
                Error: &shared.OperationError{
                    Errors: []shared.OperationErrorErrors{
                        shared.OperationErrorErrors{
                            Code: sdk.String("dolorum"),
                            Location: sdk.String("architecto"),
                            Message: sdk.String("omnis"),
                        },
                        shared.OperationErrorErrors{
                            Code: sdk.String("tenetur"),
                            Location: sdk.String("quasi"),
                            Message: sdk.String("at"),
                        },
                        shared.OperationErrorErrors{
                            Code: sdk.String("et"),
                            Location: sdk.String("voluptate"),
                            Message: sdk.String("ipsa"),
                        },
                        shared.OperationErrorErrors{
                            Code: sdk.String("minima"),
                            Location: sdk.String("veritatis"),
                            Message: sdk.String("consectetur"),
                        },
                    },
                },
                HTTPErrorMessage: sdk.String("adipisci"),
                HTTPErrorStatusCode: sdk.Int(614465),
                ID: sdk.String("temporibus"),
                InsertTime: sdk.String("accusantium"),
                Kind: sdk.String("rem"),
                Name: sdk.String("Marsha Keebler IV"),
                OperationGroupID: sdk.String("non"),
                OperationType: sdk.String("voluptatem"),
                Progress: sdk.Int(221161),
                Region: sdk.String("occaecati"),
                SelfLink: sdk.String("numquam"),
                StartTime: sdk.String("impedit"),
                Status: shared.OperationStatusEnumPending.ToPointer(),
                StatusMessage: sdk.String("voluptas"),
                TargetID: sdk.String("aut"),
                TargetLink: sdk.String("dignissimos"),
                User: sdk.String("dicta"),
                Warnings: []shared.OperationWarnings{
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumResourceInUseByOtherResourceWarning.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("voluptatibus"),
                                Value: sdk.String("voluptas"),
                            },
                        },
                        Message: sdk.String("asperiores"),
                    },
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumNoResultsOnPage.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("quaerat"),
                                Value: sdk.String("consequuntur"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("repellendus"),
                                Value: sdk.String("officia"),
                            },
                        },
                        Message: sdk.String("maxime"),
                    },
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumNotCriticalError.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("asperiores"),
                                Value: sdk.String("nemo"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("quae"),
                                Value: sdk.String("quaerat"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("porro"),
                                Value: sdk.String("quod"),
                            },
                        },
                        Message: sdk.String("labore"),
                    },
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumNoResultsOnPage.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("fuga"),
                                Value: sdk.String("id"),
                            },
                        },
                        Message: sdk.String("suscipit"),
                    },
                },
                Zone: sdk.String("velit"),
            },
            Outputs: []shared.DeploymentOutputEntry{
                shared.DeploymentOutputEntry{
                    Key: sdk.String("est"),
                    Value: sdk.String("recusandae"),
                },
                shared.DeploymentOutputEntry{
                    Key: sdk.String("totam"),
                    Value: sdk.String("fugiat"),
                },
                shared.DeploymentOutputEntry{
                    Key: sdk.String("vel"),
                    Value: sdk.String("ducimus"),
                },
            },
            SelfLink: sdk.String("quos"),
            Target: &shared.TargetConfiguration{
                Config: &shared.ConfigFile{
                    Content: sdk.String("vel"),
                },
                Imports: []shared.ImportFile{
                    shared.ImportFile{
                        Content: sdk.String("possimus"),
                        Name: sdk.String("Felipe Johns"),
                    },
                    shared.ImportFile{
                        Content: sdk.String("reiciendis"),
                        Name: sdk.String("Corey Walsh DDS"),
                    },
                },
            },
            Update: &shared.DeploymentUpdate{
                Credential: &shared.Credential{
                    BasicAuth: &shared.BasicAuth{
                        Password: sdk.String("consectetur"),
                        User: sdk.String("in"),
                    },
                    ServiceAccount: &shared.ServiceAccount{
                        Email: sdk.String("Tressa98@yahoo.com"),
                    },
                    UseProjectDefault: sdk.Bool(false),
                },
                Description: sdk.String("suscipit"),
                Labels: []shared.DeploymentUpdateLabelEntry{
                    shared.DeploymentUpdateLabelEntry{
                        Key: sdk.String("quidem"),
                        Value: sdk.String("saepe"),
                    },
                    shared.DeploymentUpdateLabelEntry{
                        Key: sdk.String("necessitatibus"),
                        Value: sdk.String("dolore"),
                    },
                    shared.DeploymentUpdateLabelEntry{
                        Key: sdk.String("sunt"),
                        Value: sdk.String("asperiores"),
                    },
                    shared.DeploymentUpdateLabelEntry{
                        Key: sdk.String("adipisci"),
                        Value: sdk.String("non"),
                    },
                },
                Manifest: sdk.String("amet"),
            },
            UpdateTime: sdk.String("beatae"),
        },
        AccessToken: sdk.String("dignissimos"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("debitis"),
        CreatePolicy: operations.DeploymentmanagerDeploymentsUpdateCreatePolicyEnumCreateOrAcquire.ToPointer(),
        DeletePolicy: operations.DeploymentmanagerDeploymentsUpdateDeletePolicyEnumDelete.ToPointer(),
        DeploymentPathParameter: "harum",
        Fields: sdk.String("laboriosam"),
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("voluptates"),
        PrettyPrint: sdk.Bool(false),
        Preview: sdk.Bool(false),
        Project: "libero",
        QuotaUser: sdk.String("vitae"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("similique"),
    }, operations.DeploymentmanagerDeploymentsUpdateSecurity{
        Option1: &operations.DeploymentmanagerDeploymentsUpdateSecurityOption1{
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
