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
            Fingerprint: sdk.String("debitis"),
        },
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempora"),
        Deployment: "suscipit",
        Fields: sdk.String("molestiae"),
        Key: sdk.String("minus"),
        OauthToken: sdk.String("placeat"),
        PrettyPrint: sdk.Bool(false),
        Project: "voluptatum",
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("nisi"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        DeletePolicy: operations.DeploymentmanagerDeploymentsDeleteDeletePolicyEnumDelete.ToPointer(),
        Deployment: "deserunt",
        Fields: sdk.String("perferendis"),
        Key: sdk.String("ipsam"),
        OauthToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        Project: "sapiente",
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("at"),
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
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quod"),
        Deployment: "quod",
        Fields: sdk.String("esse"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("porro"),
        PrettyPrint: sdk.Bool(false),
        Project: "dolorum",
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("officia"),
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
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("optio"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("beatae"),
        OptionsRequestedPolicyVersion: sdk.Int64(414662),
        PrettyPrint: sdk.Bool(false),
        Project: "molestiae",
        QuotaUser: sdk.String("modi"),
        Resource: "qui",
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("cum"),
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
            Description: sdk.String("ipsum"),
            Fingerprint: sdk.String("excepturi"),
            ID: sdk.String("aspernatur"),
            InsertTime: sdk.String("perferendis"),
            Labels: []shared.DeploymentLabelEntry{
                shared.DeploymentLabelEntry{
                    Key: sdk.String("natus"),
                    Value: sdk.String("sed"),
                },
                shared.DeploymentLabelEntry{
                    Key: sdk.String("iste"),
                    Value: sdk.String("dolor"),
                },
            },
            Manifest: sdk.String("natus"),
            Name: sdk.String("May Turcotte"),
            Operation: &shared.Operation{
                ClientOperationID: sdk.String("corporis"),
                CreationTimestamp: sdk.String("iste"),
                Description: sdk.String("iure"),
                EndTime: sdk.String("saepe"),
                Error: &shared.OperationError{
                    Errors: []shared.OperationErrorErrors{
                        shared.OperationErrorErrors{
                            Code: sdk.String("architecto"),
                            Location: sdk.String("ipsa"),
                            Message: sdk.String("reiciendis"),
                        },
                        shared.OperationErrorErrors{
                            Code: sdk.String("est"),
                            Location: sdk.String("mollitia"),
                            Message: sdk.String("laborum"),
                        },
                        shared.OperationErrorErrors{
                            Code: sdk.String("dolores"),
                            Location: sdk.String("dolorem"),
                            Message: sdk.String("corporis"),
                        },
                    },
                },
                HTTPErrorMessage: sdk.String("explicabo"),
                HTTPErrorStatusCode: sdk.Int(750686),
                ID: sdk.String("enim"),
                InsertTime: sdk.String("omnis"),
                Kind: sdk.String("nemo"),
                Name: sdk.String("Velma Batz"),
                OperationGroupID: sdk.String("doloribus"),
                OperationType: sdk.String("sapiente"),
                Progress: sdk.Int(102044),
                Region: sdk.String("mollitia"),
                SelfLink: sdk.String("dolorem"),
                StartTime: sdk.String("culpa"),
                Status: shared.OperationStatusEnumPending.ToPointer(),
                StatusMessage: sdk.String("repellat"),
                TargetID: sdk.String("mollitia"),
                TargetLink: sdk.String("occaecati"),
                User: sdk.String("numquam"),
                Warnings: []shared.OperationWarnings{
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumSingleInstancePropertyTemplate.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("velit"),
                                Value: sdk.String("error"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("quia"),
                                Value: sdk.String("quis"),
                            },
                        },
                        Message: sdk.String("vitae"),
                    },
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumExternalAPIWarning.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("enim"),
                                Value: sdk.String("odit"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("quo"),
                                Value: sdk.String("sequi"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("tenetur"),
                                Value: sdk.String("ipsam"),
                            },
                        },
                        Message: sdk.String("id"),
                    },
                },
                Zone: sdk.String("possimus"),
            },
            SelfLink: sdk.String("aut"),
            Target: &shared.TargetConfiguration{
                Config: &shared.ConfigFile{
                    Content: sdk.String("quasi"),
                },
                Imports: []shared.ImportFile{
                    shared.ImportFile{
                        Content: sdk.String("temporibus"),
                        Name: sdk.String("Ryan Witting"),
                    },
                    shared.ImportFile{
                        Content: sdk.String("nihil"),
                        Name: sdk.String("Jan Bednar"),
                    },
                    shared.ImportFile{
                        Content: sdk.String("cum"),
                        Name: sdk.String("Sharon Kiehn"),
                    },
                },
            },
            Update: &shared.DeploymentUpdate{
                Description: sdk.String("dicta"),
                Labels: []shared.DeploymentUpdateLabelEntry{
                    shared.DeploymentUpdateLabelEntry{
                        Key: sdk.String("dolore"),
                        Value: sdk.String("iusto"),
                    },
                    shared.DeploymentUpdateLabelEntry{
                        Key: sdk.String("dicta"),
                        Value: sdk.String("harum"),
                    },
                },
                Manifest: sdk.String("enim"),
            },
            UpdateTime: sdk.String("accusamus"),
        },
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quae"),
        CreatePolicy: operations.DeploymentmanagerDeploymentsInsertCreatePolicyEnumCreateOrAcquire.ToPointer(),
        Fields: sdk.String("quidem"),
        Key: sdk.String("molestias"),
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        Preview: sdk.Bool(false),
        Project: "pariatur",
        QuotaUser: sdk.String("modi"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("rem"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("veritatis"),
        Filter: sdk.String("itaque"),
        Key: sdk.String("incidunt"),
        MaxResults: sdk.Int64(318569),
        OauthToken: sdk.String("consequatur"),
        OrderBy: sdk.String("est"),
        PageToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        Project: "explicabo",
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("quibusdam"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Deployment1: &shared.Deployment{
            Description: sdk.String("modi"),
            Fingerprint: sdk.String("qui"),
            ID: sdk.String("aliquid"),
            InsertTime: sdk.String("cupiditate"),
            Labels: []shared.DeploymentLabelEntry{
                shared.DeploymentLabelEntry{
                    Key: sdk.String("perferendis"),
                    Value: sdk.String("magni"),
                },
                shared.DeploymentLabelEntry{
                    Key: sdk.String("assumenda"),
                    Value: sdk.String("ipsam"),
                },
                shared.DeploymentLabelEntry{
                    Key: sdk.String("alias"),
                    Value: sdk.String("fugit"),
                },
            },
            Manifest: sdk.String("dolorum"),
            Name: sdk.String("Eddie Prosacco"),
            Operation: &shared.Operation{
                ClientOperationID: sdk.String("delectus"),
                CreationTimestamp: sdk.String("eum"),
                Description: sdk.String("non"),
                EndTime: sdk.String("eligendi"),
                Error: &shared.OperationError{
                    Errors: []shared.OperationErrorErrors{
                        shared.OperationErrorErrors{
                            Code: sdk.String("aliquid"),
                            Location: sdk.String("provident"),
                            Message: sdk.String("necessitatibus"),
                        },
                        shared.OperationErrorErrors{
                            Code: sdk.String("sint"),
                            Location: sdk.String("officia"),
                            Message: sdk.String("dolor"),
                        },
                        shared.OperationErrorErrors{
                            Code: sdk.String("debitis"),
                            Location: sdk.String("a"),
                            Message: sdk.String("dolorum"),
                        },
                    },
                },
                HTTPErrorMessage: sdk.String("in"),
                HTTPErrorStatusCode: sdk.Int(449198),
                ID: sdk.String("illum"),
                InsertTime: sdk.String("maiores"),
                Kind: sdk.String("rerum"),
                Name: sdk.String("Valerie Runolfsson"),
                OperationGroupID: sdk.String("aliquid"),
                OperationType: sdk.String("laborum"),
                Progress: sdk.Int(881104),
                Region: sdk.String("non"),
                SelfLink: sdk.String("occaecati"),
                StartTime: sdk.String("enim"),
                Status: shared.OperationStatusEnumDone.ToPointer(),
                StatusMessage: sdk.String("delectus"),
                TargetID: sdk.String("quidem"),
                TargetLink: sdk.String("provident"),
                User: sdk.String("nam"),
                Warnings: []shared.OperationWarnings{
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumNotCriticalError.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("sapiente"),
                                Value: sdk.String("amet"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("deserunt"),
                                Value: sdk.String("nisi"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("vel"),
                                Value: sdk.String("natus"),
                            },
                        },
                        Message: sdk.String("omnis"),
                    },
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumSingleInstancePropertyTemplate.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("nihil"),
                                Value: sdk.String("magnam"),
                            },
                        },
                        Message: sdk.String("distinctio"),
                    },
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumMissingTypeDependency.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("labore"),
                                Value: sdk.String("suscipit"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("natus"),
                                Value: sdk.String("nobis"),
                            },
                        },
                        Message: sdk.String("eum"),
                    },
                },
                Zone: sdk.String("vero"),
            },
            SelfLink: sdk.String("aspernatur"),
            Target: &shared.TargetConfiguration{
                Config: &shared.ConfigFile{
                    Content: sdk.String("architecto"),
                },
                Imports: []shared.ImportFile{
                    shared.ImportFile{
                        Content: sdk.String("et"),
                        Name: sdk.String("Derrick McLaughlin"),
                    },
                    shared.ImportFile{
                        Content: sdk.String("accusantium"),
                        Name: sdk.String("Abel O'Hara"),
                    },
                },
            },
            Update: &shared.DeploymentUpdate{
                Description: sdk.String("dolor"),
                Labels: []shared.DeploymentUpdateLabelEntry{
                    shared.DeploymentUpdateLabelEntry{
                        Key: sdk.String("odit"),
                        Value: sdk.String("nemo"),
                    },
                    shared.DeploymentUpdateLabelEntry{
                        Key: sdk.String("quasi"),
                        Value: sdk.String("iure"),
                    },
                    shared.DeploymentUpdateLabelEntry{
                        Key: sdk.String("doloribus"),
                        Value: sdk.String("debitis"),
                    },
                    shared.DeploymentUpdateLabelEntry{
                        Key: sdk.String("eius"),
                        Value: sdk.String("maxime"),
                    },
                },
                Manifest: sdk.String("deleniti"),
            },
            UpdateTime: sdk.String("facilis"),
        },
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("architecto"),
        CreatePolicy: operations.DeploymentmanagerDeploymentsPatchCreatePolicyEnumAcquire.ToPointer(),
        DeletePolicy: operations.DeploymentmanagerDeploymentsPatchDeletePolicyEnumDelete.ToPointer(),
        DeploymentPathParameter: "expedita",
        Fields: sdk.String("nihil"),
        Key: sdk.String("repellat"),
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        Preview: sdk.Bool(false),
        Project: "sed",
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("accusantium"),
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
                        Description: sdk.String("natus"),
                        Expression: sdk.String("magni"),
                        Location: sdk.String("sunt"),
                        Title: sdk.String("Miss"),
                    },
                    Members: []string{
                        "pariatur",
                        "maxime",
                        "ea",
                        "excepturi",
                    },
                    Role: sdk.String("odit"),
                },
                shared.Binding{
                    Condition: &shared.Expr{
                        Description: sdk.String("ea"),
                        Expression: sdk.String("accusantium"),
                        Location: sdk.String("ab"),
                        Title: sdk.String("Dr."),
                    },
                    Members: []string{
                        "ipsam",
                        "voluptate",
                        "autem",
                    },
                    Role: sdk.String("nam"),
                },
                shared.Binding{
                    Condition: &shared.Expr{
                        Description: sdk.String("eaque"),
                        Expression: sdk.String("pariatur"),
                        Location: sdk.String("nemo"),
                        Title: sdk.String("Dr."),
                    },
                    Members: []string{
                        "fugiat",
                    },
                    Role: sdk.String("amet"),
                },
            },
            Etag: sdk.String("aut"),
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "libero",
                                    "nobis",
                                    "dolores",
                                    "quis",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "eaque",
                                    "quis",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                        },
                        Service: sdk.String("eos"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "minus",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("dolor"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "hic",
                                    "recusandae",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "perspiciatis",
                                    "voluptatem",
                                    "porro",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "error",
                                    "eaque",
                                    "occaecati",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "asperiores",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("modi"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "deleniti",
                                    "pariatur",
                                    "provident",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "delectus",
                                    "quaerat",
                                    "quos",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "dolorem",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                        },
                        Service: sdk.String("qui"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("hic"),
                            Expression: sdk.String("excepturi"),
                            Location: sdk.String("cum"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "reiciendis",
                            "amet",
                        },
                        Role: sdk.String("dolorum"),
                    },
                },
                Etag: sdk.String("numquam"),
                Version: sdk.Int(85295),
            },
        },
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iure"),
        Fields: sdk.String("odio"),
        Key: sdk.String("quaerat"),
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        Project: "quidem",
        QuotaUser: sdk.String("voluptatibus"),
        Resource: "voluptas",
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("eos"),
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
            Fingerprint: sdk.String("sit"),
        },
        AccessToken: sdk.String("fugiat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("soluta"),
        Deployment: "dolorum",
        Fields: sdk.String("iusto"),
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        Project: "deleniti",
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("distinctio"),
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
                "ipsum",
                "voluptate",
            },
        },
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eius"),
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("amet"),
        PrettyPrint: sdk.Bool(false),
        Project: "optio",
        QuotaUser: sdk.String("accusamus"),
        Resource: "ad",
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("suscipit"),
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
            Description: sdk.String("provident"),
            Fingerprint: sdk.String("minima"),
            ID: sdk.String("repellendus"),
            InsertTime: sdk.String("totam"),
            Labels: []shared.DeploymentLabelEntry{
                shared.DeploymentLabelEntry{
                    Key: sdk.String("alias"),
                    Value: sdk.String("at"),
                },
                shared.DeploymentLabelEntry{
                    Key: sdk.String("quaerat"),
                    Value: sdk.String("tempora"),
                },
                shared.DeploymentLabelEntry{
                    Key: sdk.String("vel"),
                    Value: sdk.String("quod"),
                },
            },
            Manifest: sdk.String("officiis"),
            Name: sdk.String("Jan Wilderman"),
            Operation: &shared.Operation{
                ClientOperationID: sdk.String("iusto"),
                CreationTimestamp: sdk.String("ipsum"),
                Description: sdk.String("quisquam"),
                EndTime: sdk.String("tenetur"),
                Error: &shared.OperationError{
                    Errors: []shared.OperationErrorErrors{
                        shared.OperationErrorErrors{
                            Code: sdk.String("tempore"),
                            Location: sdk.String("accusamus"),
                            Message: sdk.String("numquam"),
                        },
                    },
                },
                HTTPErrorMessage: sdk.String("enim"),
                HTTPErrorStatusCode: sdk.Int(213312),
                ID: sdk.String("sapiente"),
                InsertTime: sdk.String("totam"),
                Kind: sdk.String("nihil"),
                Name: sdk.String("Mamie Durgan"),
                OperationGroupID: sdk.String("libero"),
                OperationType: sdk.String("voluptas"),
                Progress: sdk.Int(646265),
                Region: sdk.String("quam"),
                SelfLink: sdk.String("ipsum"),
                StartTime: sdk.String("incidunt"),
                Status: shared.OperationStatusEnumPending.ToPointer(),
                StatusMessage: sdk.String("cupiditate"),
                TargetID: sdk.String("maxime"),
                TargetLink: sdk.String("pariatur"),
                User: sdk.String("soluta"),
                Warnings: []shared.OperationWarnings{
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumExternalAPIWarning.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("incidunt"),
                                Value: sdk.String("aspernatur"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("dolores"),
                                Value: sdk.String("distinctio"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("facilis"),
                                Value: sdk.String("aliquid"),
                            },
                        },
                        Message: sdk.String("quam"),
                    },
                },
                Zone: sdk.String("molestias"),
            },
            SelfLink: sdk.String("temporibus"),
            Target: &shared.TargetConfiguration{
                Config: &shared.ConfigFile{
                    Content: sdk.String("qui"),
                },
                Imports: []shared.ImportFile{
                    shared.ImportFile{
                        Content: sdk.String("fugit"),
                        Name: sdk.String("Courtney Cassin"),
                    },
                },
            },
            Update: &shared.DeploymentUpdate{
                Description: sdk.String("hic"),
                Labels: []shared.DeploymentUpdateLabelEntry{
                    shared.DeploymentUpdateLabelEntry{
                        Key: sdk.String("cumque"),
                        Value: sdk.String("soluta"),
                    },
                },
                Manifest: sdk.String("nobis"),
            },
            UpdateTime: sdk.String("et"),
        },
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("veritatis"),
        CreatePolicy: operations.DeploymentmanagerDeploymentsUpdateCreatePolicyEnumAcquire.ToPointer(),
        DeletePolicy: operations.DeploymentmanagerDeploymentsUpdateDeletePolicyEnumAbandon.ToPointer(),
        DeploymentPathParameter: "tempore",
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("aperiam"),
        OauthToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        Preview: sdk.Bool(false),
        Project: "dolorem",
        QuotaUser: sdk.String("dolore"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("adipisci"),
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
