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
            Description: sdk.String("dolorem"),
            Fingerprint: sdk.String("dolorem"),
            ID: sdk.String("dolor"),
            InsertTime: sdk.String("qui"),
            Labels: []shared.DeploymentLabelEntry{
                shared.DeploymentLabelEntry{
                    Key: sdk.String("hic"),
                    Value: sdk.String("excepturi"),
                },
            },
            Manifest: sdk.String("cum"),
            Name: sdk.String("Marian Wisozk"),
            Operation: &shared.Operation{
                ClientOperationID: sdk.String("numquam"),
                CreationTimestamp: sdk.String("veritatis"),
                Description: sdk.String("ipsa"),
                EndTime: sdk.String("ipsa"),
                Error: &shared.OperationError{
                    Errors: []shared.OperationErrorErrors{
                        shared.OperationErrorErrors{
                            Code: sdk.String("odio"),
                            Location: sdk.String("quaerat"),
                            Message: sdk.String("accusamus"),
                        },
                        shared.OperationErrorErrors{
                            Code: sdk.String("quidem"),
                            Location: sdk.String("voluptatibus"),
                            Message: sdk.String("voluptas"),
                        },
                    },
                },
                HTTPErrorMessage: sdk.String("natus"),
                HTTPErrorStatusCode: sdk.Int(179603),
                ID: sdk.String("atque"),
                InsertTime: sdk.String("sit"),
                Kind: sdk.String("fugiat"),
                Name: sdk.String("Latoya Parisian"),
                OperationGroupID: sdk.String("dolorum"),
                OperationType: sdk.String("deleniti"),
                Progress: sdk.Int(607045),
                Region: sdk.String("necessitatibus"),
                SelfLink: sdk.String("distinctio"),
                StartTime: sdk.String("asperiores"),
                Status: shared.OperationStatusEnumRunning.ToPointer(),
                StatusMessage: sdk.String("ipsum"),
                TargetID: sdk.String("voluptate"),
                TargetLink: sdk.String("id"),
                User: sdk.String("saepe"),
                Warnings: []shared.OperationWarnings{
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumNextHopAddressNotAssigned.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("amet"),
                                Value: sdk.String("optio"),
                            },
                        },
                        Message: sdk.String("accusamus"),
                    },
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumInjectedKernelsDeprecated.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("suscipit"),
                                Value: sdk.String("deserunt"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("provident"),
                                Value: sdk.String("minima"),
                            },
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
                },
                Zone: sdk.String("quaerat"),
            },
            SelfLink: sdk.String("tempora"),
            Target: &shared.TargetConfiguration{
                Config: &shared.ConfigFile{
                    Content: sdk.String("vel"),
                },
                Imports: []shared.ImportFile{
                    shared.ImportFile{
                        Content: sdk.String("officiis"),
                        Name: sdk.String("Jan Wilderman"),
                    },
                    shared.ImportFile{
                        Content: sdk.String("iusto"),
                        Name: sdk.String("Rosalie White"),
                    },
                    shared.ImportFile{
                        Content: sdk.String("accusamus"),
                        Name: sdk.String("Darlene Effertz"),
                    },
                    shared.ImportFile{
                        Content: sdk.String("nihil"),
                        Name: sdk.String("Mamie Durgan"),
                    },
                },
            },
            Update: &shared.DeploymentUpdate{
                Description: sdk.String("libero"),
                Labels: []shared.DeploymentUpdateLabelEntry{
                    shared.DeploymentUpdateLabelEntry{
                        Key: sdk.String("deserunt"),
                        Value: sdk.String("quam"),
                    },
                    shared.DeploymentUpdateLabelEntry{
                        Key: sdk.String("ipsum"),
                        Value: sdk.String("incidunt"),
                    },
                },
                Manifest: sdk.String("qui"),
            },
            UpdateTime: sdk.String("cupiditate"),
        },
        AccessToken: sdk.String("maxime"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("soluta"),
        CreatePolicy: operations.DeploymentmanagerDeploymentsInsertCreatePolicyEnumCreateOrAcquire.ToPointer(),
        Fields: sdk.String("laborum"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("incidunt"),
        PrettyPrint: sdk.Bool(false),
        Preview: sdk.Bool(false),
        Project: "aspernatur",
        QuotaUser: sdk.String("dolores"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("facilis"),
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
        AccessToken: sdk.String("quam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("temporibus"),
        Fields: sdk.String("qui"),
        Filter: sdk.String("neque"),
        Key: sdk.String("fugit"),
        MaxResults: sdk.Int64(164959),
        OauthToken: sdk.String("odio"),
        OrderBy: sdk.String("sunt"),
        PageToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        Project: "nam",
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("voluptatem"),
        UploadProtocol: sdk.String("cumque"),
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
            Description: sdk.String("nobis"),
            Fingerprint: sdk.String("et"),
            ID: sdk.String("saepe"),
            InsertTime: sdk.String("ipsum"),
            Labels: []shared.DeploymentLabelEntry{
                shared.DeploymentLabelEntry{
                    Key: sdk.String("nobis"),
                    Value: sdk.String("quos"),
                },
            },
            Manifest: sdk.String("tempore"),
            Name: sdk.String("Kevin Willms"),
            Operation: &shared.Operation{
                ClientOperationID: sdk.String("labore"),
                CreationTimestamp: sdk.String("adipisci"),
                Description: sdk.String("dolorum"),
                EndTime: sdk.String("architecto"),
                Error: &shared.OperationError{
                    Errors: []shared.OperationErrorErrors{
                        shared.OperationErrorErrors{
                            Code: sdk.String("aut"),
                            Location: sdk.String("quas"),
                            Message: sdk.String("itaque"),
                        },
                    },
                },
                HTTPErrorMessage: sdk.String("consequatur"),
                HTTPErrorStatusCode: sdk.Int(669917),
                ID: sdk.String("repellendus"),
                InsertTime: sdk.String("porro"),
                Kind: sdk.String("doloribus"),
                Name: sdk.String("Olivia McGlynn IV"),
                OperationGroupID: sdk.String("odio"),
                OperationType: sdk.String("occaecati"),
                Progress: sdk.Int(977496),
                Region: sdk.String("quisquam"),
                SelfLink: sdk.String("vero"),
                StartTime: sdk.String("omnis"),
                Status: shared.OperationStatusEnumRunning.ToPointer(),
                StatusMessage: sdk.String("ipsum"),
                TargetID: sdk.String("delectus"),
                TargetLink: sdk.String("voluptate"),
                User: sdk.String("consectetur"),
                Warnings: []shared.OperationWarnings{
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumNextHopInstanceHasNoIpv6Interface.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("hic"),
                                Value: sdk.String("distinctio"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("quod"),
                                Value: sdk.String("odio"),
                            },
                        },
                        Message: sdk.String("similique"),
                    },
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumSchemaValidationIgnored.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("ducimus"),
                                Value: sdk.String("dolore"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("quibusdam"),
                                Value: sdk.String("illum"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("sequi"),
                                Value: sdk.String("natus"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("impedit"),
                                Value: sdk.String("aut"),
                            },
                        },
                        Message: sdk.String("voluptatibus"),
                    },
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumRequiredTosAgreement.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("fugit"),
                                Value: sdk.String("porro"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("maiores"),
                                Value: sdk.String("doloribus"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("iusto"),
                                Value: sdk.String("eligendi"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("ducimus"),
                                Value: sdk.String("alias"),
                            },
                        },
                        Message: sdk.String("officia"),
                    },
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumNextHopNotRunning.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("ea"),
                                Value: sdk.String("aspernatur"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("vel"),
                                Value: sdk.String("possimus"),
                            },
                        },
                        Message: sdk.String("magnam"),
                    },
                },
                Zone: sdk.String("ratione"),
            },
            SelfLink: sdk.String("ex"),
            Target: &shared.TargetConfiguration{
                Config: &shared.ConfigFile{
                    Content: sdk.String("laudantium"),
                },
                Imports: []shared.ImportFile{
                    shared.ImportFile{
                        Content: sdk.String("dolor"),
                        Name: sdk.String("Ryan Jaskolski"),
                    },
                },
            },
            Update: &shared.DeploymentUpdate{
                Description: sdk.String("voluptatibus"),
                Labels: []shared.DeploymentUpdateLabelEntry{
                    shared.DeploymentUpdateLabelEntry{
                        Key: sdk.String("sapiente"),
                        Value: sdk.String("quisquam"),
                    },
                    shared.DeploymentUpdateLabelEntry{
                        Key: sdk.String("saepe"),
                        Value: sdk.String("ea"),
                    },
                },
                Manifest: sdk.String("impedit"),
            },
            UpdateTime: sdk.String("corporis"),
        },
        AccessToken: sdk.String("veniam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("inventore"),
        CreatePolicy: operations.DeploymentmanagerDeploymentsPatchCreatePolicyEnumCreateOrAcquire.ToPointer(),
        DeletePolicy: operations.DeploymentmanagerDeploymentsPatchDeletePolicyEnumDelete.ToPointer(),
        DeploymentPathParameter: "quo",
        Fields: sdk.String("consectetur"),
        Key: sdk.String("recusandae"),
        OauthToken: sdk.String("aspernatur"),
        PrettyPrint: sdk.Bool(false),
        Preview: sdk.Bool(false),
        Project: "minima",
        QuotaUser: sdk.String("eaque"),
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("libero"),
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
                        Description: sdk.String("deleniti"),
                        Expression: sdk.String("impedit"),
                        Location: sdk.String("aliquam"),
                        Title: sdk.String("Mr."),
                    },
                    Members: []string{
                        "inventore",
                        "non",
                        "et",
                        "dolorum",
                    },
                    Role: sdk.String("laborum"),
                },
            },
            Etag: sdk.String("placeat"),
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "nobis",
                                    "quas",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "voluptas",
                                    "libero",
                                    "quasi",
                                    "tempora",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("explicabo"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("ipsa"),
                            Expression: sdk.String("molestiae"),
                            Location: sdk.String("magnam"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "esse",
                            "esse",
                        },
                        Role: sdk.String("rem"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("fuga"),
                            Expression: sdk.String("reprehenderit"),
                            Location: sdk.String("quidem"),
                            Title: sdk.String("Dr."),
                        },
                        Members: []string{
                            "eum",
                            "suscipit",
                        },
                        Role: sdk.String("assumenda"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("eos"),
                            Expression: sdk.String("praesentium"),
                            Location: sdk.String("quisquam"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "id",
                        },
                        Role: sdk.String("quidem"),
                    },
                },
                Etag: sdk.String("neque"),
                Version: sdk.Int(778696),
            },
        },
        AccessToken: sdk.String("illum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fuga"),
        Fields: sdk.String("eius"),
        Key: sdk.String("eos"),
        OauthToken: sdk.String("voluptas"),
        PrettyPrint: sdk.Bool(false),
        Project: "ab",
        QuotaUser: sdk.String("cupiditate"),
        Resource: "consequatur",
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("debitis"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DeploymentsStopRequest: &shared.DeploymentsStopRequest{
            Fingerprint: sdk.String("aspernatur"),
        },
        AccessToken: sdk.String("sequi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("esse"),
        Deployment: "recusandae",
        Fields: sdk.String("aperiam"),
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        Project: "dignissimos",
        QuotaUser: sdk.String("inventore"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("totam"),
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
                "odio",
                "occaecati",
            },
        },
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolores"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("accusantium"),
        PrettyPrint: sdk.Bool(false),
        Project: "porro",
        QuotaUser: sdk.String("eum"),
        Resource: "quas",
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("consequuntur"),
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
            Description: sdk.String("fugit"),
            Fingerprint: sdk.String("fuga"),
            ID: sdk.String("mollitia"),
            InsertTime: sdk.String("incidunt"),
            Labels: []shared.DeploymentLabelEntry{
                shared.DeploymentLabelEntry{
                    Key: sdk.String("explicabo"),
                    Value: sdk.String("minima"),
                },
                shared.DeploymentLabelEntry{
                    Key: sdk.String("nisi"),
                    Value: sdk.String("fugit"),
                },
                shared.DeploymentLabelEntry{
                    Key: sdk.String("sapiente"),
                    Value: sdk.String("consequuntur"),
                },
            },
            Manifest: sdk.String("ratione"),
            Name: sdk.String("Kerry Mayert IV"),
            Operation: &shared.Operation{
                ClientOperationID: sdk.String("eveniet"),
                CreationTimestamp: sdk.String("accusamus"),
                Description: sdk.String("veritatis"),
                EndTime: sdk.String("esse"),
                Error: &shared.OperationError{
                    Errors: []shared.OperationErrorErrors{
                        shared.OperationErrorErrors{
                            Code: sdk.String("nam"),
                            Location: sdk.String("vero"),
                            Message: sdk.String("aliquid"),
                        },
                        shared.OperationErrorErrors{
                            Code: sdk.String("quasi"),
                            Location: sdk.String("saepe"),
                            Message: sdk.String("vel"),
                        },
                        shared.OperationErrorErrors{
                            Code: sdk.String("harum"),
                            Location: sdk.String("molestiae"),
                            Message: sdk.String("rerum"),
                        },
                        shared.OperationErrorErrors{
                            Code: sdk.String("occaecati"),
                            Location: sdk.String("minima"),
                            Message: sdk.String("distinctio"),
                        },
                    },
                },
                HTTPErrorMessage: sdk.String("eligendi"),
                HTTPErrorStatusCode: sdk.Int(27069),
                ID: sdk.String("culpa"),
                InsertTime: sdk.String("tempore"),
                Kind: sdk.String("adipisci"),
                Name: sdk.String("Carlos Altenwerth"),
                OperationGroupID: sdk.String("sapiente"),
                OperationType: sdk.String("consectetur"),
                Progress: sdk.Int(458139),
                Region: sdk.String("blanditiis"),
                SelfLink: sdk.String("provident"),
                StartTime: sdk.String("a"),
                Status: shared.OperationStatusEnumDone.ToPointer(),
                StatusMessage: sdk.String("quas"),
                TargetID: sdk.String("esse"),
                TargetLink: sdk.String("quasi"),
                User: sdk.String("a"),
                Warnings: []shared.OperationWarnings{
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumFieldValueOverriden.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("possimus"),
                                Value: sdk.String("quia"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("eveniet"),
                                Value: sdk.String("asperiores"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("facere"),
                                Value: sdk.String("veritatis"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("consequuntur"),
                                Value: sdk.String("quasi"),
                            },
                        },
                        Message: sdk.String("similique"),
                    },
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumMissingTypeDependency.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("tenetur"),
                                Value: sdk.String("quae"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("earum"),
                                Value: sdk.String("vel"),
                            },
                        },
                        Message: sdk.String("in"),
                    },
                    shared.OperationWarnings{
                        Code: shared.OperationWarningsCodeEnumNextHopCannotIPForward.ToPointer(),
                        Data: []shared.OperationWarningsData{
                            shared.OperationWarningsData{
                                Key: sdk.String("illum"),
                                Value: sdk.String("soluta"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("accusantium"),
                                Value: sdk.String("aliquam"),
                            },
                            shared.OperationWarningsData{
                                Key: sdk.String("sapiente"),
                                Value: sdk.String("dicta"),
                            },
                        },
                        Message: sdk.String("ullam"),
                    },
                },
                Zone: sdk.String("reprehenderit"),
            },
            SelfLink: sdk.String("ullam"),
            Target: &shared.TargetConfiguration{
                Config: &shared.ConfigFile{
                    Content: sdk.String("nisi"),
                },
                Imports: []shared.ImportFile{
                    shared.ImportFile{
                        Content: sdk.String("voluptatum"),
                        Name: sdk.String("Rosemarie Jacobs"),
                    },
                },
            },
            Update: &shared.DeploymentUpdate{
                Description: sdk.String("dolorum"),
                Labels: []shared.DeploymentUpdateLabelEntry{
                    shared.DeploymentUpdateLabelEntry{
                        Key: sdk.String("omnis"),
                        Value: sdk.String("tenetur"),
                    },
                },
                Manifest: sdk.String("quasi"),
            },
            UpdateTime: sdk.String("at"),
        },
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsa"),
        CreatePolicy: operations.DeploymentmanagerDeploymentsUpdateCreatePolicyEnumCreateOrAcquire.ToPointer(),
        DeletePolicy: operations.DeploymentmanagerDeploymentsUpdateDeletePolicyEnumDelete.ToPointer(),
        DeploymentPathParameter: "consectetur",
        Fields: sdk.String("adipisci"),
        Key: sdk.String("iste"),
        OauthToken: sdk.String("temporibus"),
        PrettyPrint: sdk.Bool(false),
        Preview: sdk.Bool(false),
        Project: "accusantium",
        QuotaUser: sdk.String("rem"),
        UploadType: sdk.String("aut"),
        UploadProtocol: sdk.String("laudantium"),
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
