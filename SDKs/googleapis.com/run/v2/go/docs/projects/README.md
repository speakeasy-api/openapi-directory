# Projects

### Available Operations

* [RunProjectsLocationsJobsCreate](#runprojectslocationsjobscreate) - Creates a Job.
* [RunProjectsLocationsJobsExecutionsList](#runprojectslocationsjobsexecutionslist) - Lists Executions from a Job.
* [RunProjectsLocationsJobsExecutionsTasksList](#runprojectslocationsjobsexecutionstaskslist) - Lists Tasks from an Execution of a Job.
* [RunProjectsLocationsJobsList](#runprojectslocationsjobslist) - Lists Jobs.
* [RunProjectsLocationsJobsRun](#runprojectslocationsjobsrun) - Triggers creation of a new Execution of this Job.
* [RunProjectsLocationsOperationsList](#runprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [RunProjectsLocationsOperationsWait](#runprojectslocationsoperationswait) - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* [RunProjectsLocationsServicesCreate](#runprojectslocationsservicescreate) - Creates a new Service in a given project and location.
* [RunProjectsLocationsServicesGetIamPolicy](#runprojectslocationsservicesgetiampolicy) - Gets the IAM Access Control policy currently in effect for the given Cloud Run Service. This result does not include any inherited policies.
* [RunProjectsLocationsServicesList](#runprojectslocationsserviceslist) - Lists Services.
* [RunProjectsLocationsServicesPatch](#runprojectslocationsservicespatch) - Updates a Service.
* [RunProjectsLocationsServicesRevisionsDelete](#runprojectslocationsservicesrevisionsdelete) - Deletes a Revision.
* [RunProjectsLocationsServicesRevisionsGet](#runprojectslocationsservicesrevisionsget) - Gets information about a Revision.
* [RunProjectsLocationsServicesRevisionsList](#runprojectslocationsservicesrevisionslist) - Lists Revisions from a given Service, or from a given location.
* [RunProjectsLocationsServicesSetIamPolicy](#runprojectslocationsservicessetiampolicy) - Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
* [RunProjectsLocationsServicesTestIamPermissions](#runprojectslocationsservicestestiampermissions) - Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.

## RunProjectsLocationsJobsCreate

Creates a Job.

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
    res, err := s.Projects.RunProjectsLocationsJobsCreate(ctx, operations.RunProjectsLocationsJobsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRunV2JobInput: &shared.GoogleCloudRunV2JobInput{
            Annotations: map[string]string{
                "tempora": "numquam",
            },
            BinaryAuthorization: &shared.GoogleCloudRunV2BinaryAuthorization{
                BreakglassJustification: sdk.String("explicabo"),
                UseDefault: sdk.Bool(false),
            },
            Client: sdk.String("provident"),
            ClientVersion: sdk.String("ipsa"),
            Labels: map[string]string{
                "magnam": "odio",
                "eius": "esse",
            },
            LatestCreatedExecution: &shared.GoogleCloudRunV2ExecutionReference{
                CompletionTime: sdk.String("esse"),
                CreateTime: sdk.String("rem"),
                Name: sdk.String("Mitchell Predovic"),
            },
            LaunchStage: shared.GoogleCloudRunV2JobLaunchStageEnumEarlyAccess.ToPointer(),
            Name: sdk.String("Angelina Davis"),
            Template: &shared.GoogleCloudRunV2ExecutionTemplate{
                Annotations: map[string]string{
                    "ipsa": "id",
                },
                Labels: map[string]string{
                    "neque": "quo",
                    "illum": "quo",
                    "fuga": "eius",
                },
                Parallelism: sdk.Int(178367),
                TaskCount: sdk.Int(373813),
                Template: &shared.GoogleCloudRunV2TaskTemplate{
                    Containers: []shared.GoogleCloudRunV2Container{
                        shared.GoogleCloudRunV2Container{
                            Args: []string{
                                "consequatur",
                                "tempora",
                                "debitis",
                            },
                            Command: []string{
                                "aspernatur",
                                "sequi",
                            },
                            DependsOn: []string{
                                "esse",
                                "recusandae",
                                "aperiam",
                                "distinctio",
                            },
                            Env: []shared.GoogleCloudRunV2EnvVar{
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: sdk.String("Debra Kovacek"),
                                    Value: sdk.String("aliquam"),
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: sdk.String("odio"),
                                            Version: sdk.String("occaecati"),
                                        },
                                    },
                                },
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: sdk.String("Miranda Daniel"),
                                    Value: sdk.String("accusantium"),
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: sdk.String("porro"),
                                            Version: sdk.String("eum"),
                                        },
                                    },
                                },
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: sdk.String("Dwayne Cronin"),
                                    Value: sdk.String("fuga"),
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: sdk.String("mollitia"),
                                            Version: sdk.String("incidunt"),
                                        },
                                    },
                                },
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: sdk.String("Roy Hansen"),
                                    Value: sdk.String("sapiente"),
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: sdk.String("consequuntur"),
                                            Version: sdk.String("ratione"),
                                        },
                                    },
                                },
                            },
                            Image: sdk.String("explicabo"),
                            LivenessProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: sdk.Int(903984),
                                Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                    Port: sdk.Int(578922),
                                    Service: sdk.String("atque"),
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: sdk.String("Ms. Olive Tillman"),
                                            Value: sdk.String("nam"),
                                        },
                                    },
                                    Path: sdk.String("vero"),
                                    Port: sdk.Int(399025),
                                },
                                InitialDelaySeconds: sdk.Int(93459),
                                PeriodSeconds: sdk.Int(904045),
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: sdk.Int(426306),
                                },
                                TimeoutSeconds: sdk.Int(690025),
                            },
                            Name: sdk.String("Luz McClure"),
                            Ports: []shared.GoogleCloudRunV2ContainerPort{
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: sdk.Int(27069),
                                    Name: sdk.String("Randolph Fisher"),
                                },
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: sdk.Int(9766),
                                    Name: sdk.String("Calvin Williamson"),
                                },
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: sdk.Int(503427),
                                    Name: sdk.String("Randal Stiedemann"),
                                },
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: sdk.Int(97468),
                                    Name: sdk.String("Jeremiah Mayer"),
                                },
                            },
                            Resources: &shared.GoogleCloudRunV2ResourceRequirements{
                                CPUIdle: sdk.Bool(false),
                                Limits: map[string]string{
                                    "eveniet": "asperiores",
                                },
                                StartupCPUBoost: sdk.Bool(false),
                            },
                            StartupProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: sdk.Int(815524),
                                Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                    Port: sdk.Int(85001),
                                    Service: sdk.String("consequuntur"),
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: sdk.String("Shannon Jacobi DVM"),
                                            Value: sdk.String("vel"),
                                        },
                                    },
                                    Path: sdk.String("in"),
                                    Port: sdk.Int(258684),
                                },
                                InitialDelaySeconds: sdk.Int(727697),
                                PeriodSeconds: sdk.Int(849039),
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: sdk.Int(742238),
                                },
                                TimeoutSeconds: sdk.Int(33304),
                            },
                            VolumeMounts: []shared.GoogleCloudRunV2VolumeMount{
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: sdk.String("sapiente"),
                                    Name: sdk.String("Marion Kihn"),
                                },
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: sdk.String("aut"),
                                    Name: sdk.String("Clarence Sporer"),
                                },
                            },
                            WorkingDir: sdk.String("itaque"),
                        },
                    },
                    EncryptionKey: sdk.String("dolorum"),
                    ExecutionEnvironment: shared.GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnumExecutionEnvironmentUnspecified.ToPointer(),
                    MaxRetries: sdk.Int(609178),
                    ServiceAccount: sdk.String("tenetur"),
                    Timeout: sdk.String("quasi"),
                    Volumes: []shared.GoogleCloudRunV2Volume{
                        shared.GoogleCloudRunV2Volume{
                            CloudSQLInstance: &shared.GoogleCloudRunV2CloudSQLInstance{
                                Instances: []string{
                                    "voluptate",
                                },
                            },
                            EmptyDir: &shared.GoogleCloudRunV2EmptyDirVolumeSource{
                                Medium: shared.GoogleCloudRunV2EmptyDirVolumeSourceMediumEnumMediumUnspecified.ToPointer(),
                                SizeLimit: sdk.String("minima"),
                            },
                            Name: sdk.String("Edith Ferry"),
                            Secret: &shared.GoogleCloudRunV2SecretVolumeSource{
                                DefaultMode: sdk.Int(33074),
                                Items: []shared.GoogleCloudRunV2VersionToPath{
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: sdk.Int(15606),
                                        Path: sdk.String("laudantium"),
                                        Version: sdk.String("eum"),
                                    },
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: sdk.Int(649832),
                                        Path: sdk.String("ab"),
                                        Version: sdk.String("corrupti"),
                                    },
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: sdk.Int(251941),
                                        Path: sdk.String("voluptatem"),
                                        Version: sdk.String("dolor"),
                                    },
                                },
                                Secret: sdk.String("occaecati"),
                            },
                        },
                        shared.GoogleCloudRunV2Volume{
                            CloudSQLInstance: &shared.GoogleCloudRunV2CloudSQLInstance{
                                Instances: []string{
                                    "impedit",
                                    "explicabo",
                                },
                            },
                            EmptyDir: &shared.GoogleCloudRunV2EmptyDirVolumeSource{
                                Medium: shared.GoogleCloudRunV2EmptyDirVolumeSourceMediumEnumMediumUnspecified.ToPointer(),
                                SizeLimit: sdk.String("aut"),
                            },
                            Name: sdk.String("Jean Wunsch"),
                            Secret: &shared.GoogleCloudRunV2SecretVolumeSource{
                                DefaultMode: sdk.Int(974257),
                                Items: []shared.GoogleCloudRunV2VersionToPath{
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: sdk.Int(990345),
                                        Path: sdk.String("aperiam"),
                                        Version: sdk.String("ea"),
                                    },
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: sdk.Int(310067),
                                        Path: sdk.String("consequuntur"),
                                        Version: sdk.String("repellendus"),
                                    },
                                },
                                Secret: sdk.String("officia"),
                            },
                        },
                        shared.GoogleCloudRunV2Volume{
                            CloudSQLInstance: &shared.GoogleCloudRunV2CloudSQLInstance{
                                Instances: []string{
                                    "dignissimos",
                                    "officia",
                                    "asperiores",
                                    "nemo",
                                },
                            },
                            EmptyDir: &shared.GoogleCloudRunV2EmptyDirVolumeSource{
                                Medium: shared.GoogleCloudRunV2EmptyDirVolumeSourceMediumEnumMediumUnspecified.ToPointer(),
                                SizeLimit: sdk.String("quaerat"),
                            },
                            Name: sdk.String("Mrs. Forrest Green"),
                            Secret: &shared.GoogleCloudRunV2SecretVolumeSource{
                                DefaultMode: sdk.Int(662505),
                                Items: []shared.GoogleCloudRunV2VersionToPath{
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: sdk.Int(246063),
                                        Path: sdk.String("culpa"),
                                        Version: sdk.String("est"),
                                    },
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: sdk.Int(926880),
                                        Path: sdk.String("totam"),
                                        Version: sdk.String("fugiat"),
                                    },
                                },
                                Secret: sdk.String("vel"),
                            },
                        },
                        shared.GoogleCloudRunV2Volume{
                            CloudSQLInstance: &shared.GoogleCloudRunV2CloudSQLInstance{
                                Instances: []string{
                                    "quos",
                                    "vel",
                                },
                            },
                            EmptyDir: &shared.GoogleCloudRunV2EmptyDirVolumeSource{
                                Medium: shared.GoogleCloudRunV2EmptyDirVolumeSourceMediumEnumMediumUnspecified.ToPointer(),
                                SizeLimit: sdk.String("possimus"),
                            },
                            Name: sdk.String("Felipe Johns"),
                            Secret: &shared.GoogleCloudRunV2SecretVolumeSource{
                                DefaultMode: sdk.Int(968904),
                                Items: []shared.GoogleCloudRunV2VersionToPath{
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: sdk.Int(363161),
                                        Path: sdk.String("recusandae"),
                                        Version: sdk.String("aliquid"),
                                    },
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: sdk.Int(46007),
                                        Path: sdk.String("cum"),
                                        Version: sdk.String("consectetur"),
                                    },
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: sdk.Int(449083),
                                        Path: sdk.String("exercitationem"),
                                        Version: sdk.String("earum"),
                                    },
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: sdk.Int(814967),
                                        Path: sdk.String("numquam"),
                                        Version: sdk.String("doloribus"),
                                    },
                                },
                                Secret: sdk.String("suscipit"),
                            },
                        },
                    },
                    VpcAccess: &shared.GoogleCloudRunV2VpcAccess{
                        Connector: sdk.String("reiciendis"),
                        Egress: shared.GoogleCloudRunV2VpcAccessEgressEnumPrivateRangesOnly.ToPointer(),
                    },
                },
            },
            TerminalCondition: &shared.GoogleCloudRunV2Condition{
                ExecutionReason: shared.GoogleCloudRunV2ConditionExecutionReasonEnumCancelling.ToPointer(),
                LastTransitionTime: sdk.String("necessitatibus"),
                Message: sdk.String("dolore"),
                Reason: shared.GoogleCloudRunV2ConditionReasonEnumUnknown.ToPointer(),
                RevisionReason: shared.GoogleCloudRunV2ConditionRevisionReasonEnumMinInstancesWarming.ToPointer(),
                Severity: shared.GoogleCloudRunV2ConditionSeverityEnumSeverityUnspecified.ToPointer(),
                State: shared.GoogleCloudRunV2ConditionStateEnumConditionPending.ToPointer(),
                Type: sdk.String("amet"),
            },
        },
        AccessToken: sdk.String("beatae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("a"),
        Fields: sdk.String("debitis"),
        JobID: sdk.String("consectetur"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("harum"),
        Parent: "laboriosam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("voluptates"),
        UploadProtocol: sdk.String("libero"),
        ValidateOnly: sdk.Bool(false),
    }, operations.RunProjectsLocationsJobsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## RunProjectsLocationsJobsExecutionsList

Lists Executions from a Job.

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
    res, err := s.Projects.RunProjectsLocationsJobsExecutionsList(ctx, operations.RunProjectsLocationsJobsExecutionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("voluptas"),
        OauthToken: sdk.String("voluptas"),
        PageSize: sdk.Int64(374296),
        PageToken: sdk.String("minima"),
        Parent: "nobis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        ShowDeleted: sdk.Bool(false),
        UploadType: sdk.String("adipisci"),
        UploadProtocol: sdk.String("minus"),
    }, operations.RunProjectsLocationsJobsExecutionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRunV2ListExecutionsResponse != nil {
        // handle response
    }
}
```

## RunProjectsLocationsJobsExecutionsTasksList

Lists Tasks from an Execution of a Job.

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
    res, err := s.Projects.RunProjectsLocationsJobsExecutionsTasksList(ctx, operations.RunProjectsLocationsJobsExecutionsTasksListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("blanditiis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolore"),
        Fields: sdk.String("aliquam"),
        Key: sdk.String("officiis"),
        OauthToken: sdk.String("temporibus"),
        PageSize: sdk.Int64(351870),
        PageToken: sdk.String("adipisci"),
        Parent: "cum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("blanditiis"),
        ShowDeleted: sdk.Bool(false),
        UploadType: sdk.String("quas"),
        UploadProtocol: sdk.String("hic"),
    }, operations.RunProjectsLocationsJobsExecutionsTasksListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRunV2ListTasksResponse != nil {
        // handle response
    }
}
```

## RunProjectsLocationsJobsList

Lists Jobs.

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
    res, err := s.Projects.RunProjectsLocationsJobsList(ctx, operations.RunProjectsLocationsJobsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("culpa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("pariatur"),
        Fields: sdk.String("totam"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("exercitationem"),
        PageSize: sdk.Int64(750765),
        PageToken: sdk.String("sit"),
        Parent: "rerum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        ShowDeleted: sdk.Bool(false),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("explicabo"),
    }, operations.RunProjectsLocationsJobsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRunV2ListJobsResponse != nil {
        // handle response
    }
}
```

## RunProjectsLocationsJobsRun

Triggers creation of a new Execution of this Job.

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
    res, err := s.Projects.RunProjectsLocationsJobsRun(ctx, operations.RunProjectsLocationsJobsRunRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRunV2RunJobRequest: &shared.GoogleCloudRunV2RunJobRequest{
            Etag: sdk.String("facilis"),
            ValidateOnly: sdk.Bool(false),
        },
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ab"),
        Fields: sdk.String("iste"),
        Key: sdk.String("dolore"),
        Name: "Aaron King",
        OauthToken: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptas"),
        UploadType: sdk.String("unde"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.RunProjectsLocationsJobsRunSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## RunProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

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
    res, err := s.Projects.RunProjectsLocationsOperationsList(ctx, operations.RunProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("illo"),
        Fields: sdk.String("reiciendis"),
        Filter: sdk.String("perferendis"),
        Key: sdk.String("corrupti"),
        Name: "Troy Cormier",
        OauthToken: sdk.String("necessitatibus"),
        PageSize: sdk.Int64(215529),
        PageToken: sdk.String("ea"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.RunProjectsLocationsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningListOperationsResponse != nil {
        // handle response
    }
}
```

## RunProjectsLocationsOperationsWait

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

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
    res, err := s.Projects.RunProjectsLocationsOperationsWait(ctx, operations.RunProjectsLocationsOperationsWaitRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleLongrunningWaitOperationRequest: &shared.GoogleLongrunningWaitOperationRequest{
            Timeout: sdk.String("tempora"),
        },
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ex"),
        Fields: sdk.String("sit"),
        Key: sdk.String("non"),
        Name: "Clayton Quitzon",
        OauthToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("rem"),
        UploadProtocol: sdk.String("sit"),
    }, operations.RunProjectsLocationsOperationsWaitSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## RunProjectsLocationsServicesCreate

Creates a new Service in a given project and location.

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
    res, err := s.Projects.RunProjectsLocationsServicesCreate(ctx, operations.RunProjectsLocationsServicesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRunV2ServiceInput: &shared.GoogleCloudRunV2ServiceInput{
            Annotations: map[string]string{
                "veniam": "minima",
                "recusandae": "reiciendis",
                "nulla": "magni",
            },
            BinaryAuthorization: &shared.GoogleCloudRunV2BinaryAuthorization{
                BreakglassJustification: sdk.String("aperiam"),
                UseDefault: sdk.Bool(false),
            },
            Client: sdk.String("saepe"),
            ClientVersion: sdk.String("numquam"),
            Description: sdk.String("veniam"),
            Ingress: shared.GoogleCloudRunV2ServiceIngressEnumIngressTrafficAll.ToPointer(),
            Labels: map[string]string{
                "beatae": "laudantium",
                "exercitationem": "praesentium",
                "cum": "laboriosam",
                "dolorum": "voluptatum",
            },
            LaunchStage: shared.GoogleCloudRunV2ServiceLaunchStageEnumAlpha.ToPointer(),
            Name: sdk.String("Rudolph Trantow"),
            Template: &shared.GoogleCloudRunV2RevisionTemplate{
                Annotations: map[string]string{
                    "officia": "dolorum",
                    "corrupti": "accusamus",
                },
                Containers: []shared.GoogleCloudRunV2Container{
                    shared.GoogleCloudRunV2Container{
                        Args: []string{
                            "fugit",
                            "ut",
                            "fugiat",
                        },
                        Command: []string{
                            "culpa",
                        },
                        DependsOn: []string{
                            "magnam",
                            "consequatur",
                            "esse",
                        },
                        Env: []shared.GoogleCloudRunV2EnvVar{
                            shared.GoogleCloudRunV2EnvVar{
                                Name: sdk.String("Nora Lynch"),
                                Value: sdk.String("et"),
                                ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                    SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                        Secret: sdk.String("blanditiis"),
                                        Version: sdk.String("ex"),
                                    },
                                },
                            },
                            shared.GoogleCloudRunV2EnvVar{
                                Name: sdk.String("Karen Kautzer"),
                                Value: sdk.String("error"),
                                ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                    SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                        Secret: sdk.String("consequatur"),
                                        Version: sdk.String("incidunt"),
                                    },
                                },
                            },
                        },
                        Image: sdk.String("reiciendis"),
                        LivenessProbe: &shared.GoogleCloudRunV2Probe{
                            FailureThreshold: sdk.Int(209750),
                            Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                Port: sdk.Int(690894),
                                Service: sdk.String("dicta"),
                            },
                            HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                    shared.GoogleCloudRunV2HTTPHeader{
                                        Name: sdk.String("Francisco Powlowski"),
                                        Value: sdk.String("nam"),
                                    },
                                },
                                Path: sdk.String("tenetur"),
                                Port: sdk.Int(388867),
                            },
                            InitialDelaySeconds: sdk.Int(2703),
                            PeriodSeconds: sdk.Int(227084),
                            TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                Port: sdk.Int(647197),
                            },
                            TimeoutSeconds: sdk.Int(454860),
                        },
                        Name: sdk.String("Boyd McKenzie"),
                        Ports: []shared.GoogleCloudRunV2ContainerPort{
                            shared.GoogleCloudRunV2ContainerPort{
                                ContainerPort: sdk.Int(16871),
                                Name: sdk.String("Rickey Kiehn"),
                            },
                            shared.GoogleCloudRunV2ContainerPort{
                                ContainerPort: sdk.Int(509807),
                                Name: sdk.String("Floyd Barrows"),
                            },
                            shared.GoogleCloudRunV2ContainerPort{
                                ContainerPort: sdk.Int(97243),
                                Name: sdk.String("Mitchell Zboncak"),
                            },
                            shared.GoogleCloudRunV2ContainerPort{
                                ContainerPort: sdk.Int(693957),
                                Name: sdk.String("Henry Koepp"),
                            },
                        },
                        Resources: &shared.GoogleCloudRunV2ResourceRequirements{
                            CPUIdle: sdk.Bool(false),
                            Limits: map[string]string{
                                "atque": "error",
                                "officiis": "officiis",
                            },
                            StartupCPUBoost: sdk.Bool(false),
                        },
                        StartupProbe: &shared.GoogleCloudRunV2Probe{
                            FailureThreshold: sdk.Int(880107),
                            Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                Port: sdk.Int(618826),
                                Service: sdk.String("minima"),
                            },
                            HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                    shared.GoogleCloudRunV2HTTPHeader{
                                        Name: sdk.String("Elisa Little"),
                                        Value: sdk.String("blanditiis"),
                                    },
                                },
                                Path: sdk.String("suscipit"),
                                Port: sdk.Int(922348),
                            },
                            InitialDelaySeconds: sdk.Int(542129),
                            PeriodSeconds: sdk.Int(541381),
                            TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                Port: sdk.Int(120919),
                            },
                            TimeoutSeconds: sdk.Int(923306),
                        },
                        VolumeMounts: []shared.GoogleCloudRunV2VolumeMount{
                            shared.GoogleCloudRunV2VolumeMount{
                                MountPath: sdk.String("repellendus"),
                                Name: sdk.String("Lela Baumbach Jr."),
                            },
                            shared.GoogleCloudRunV2VolumeMount{
                                MountPath: sdk.String("beatae"),
                                Name: sdk.String("Jill Hudson"),
                            },
                            shared.GoogleCloudRunV2VolumeMount{
                                MountPath: sdk.String("molestias"),
                                Name: sdk.String("Tricia Cronin"),
                            },
                        },
                        WorkingDir: sdk.String("perspiciatis"),
                    },
                    shared.GoogleCloudRunV2Container{
                        Args: []string{
                            "adipisci",
                            "eveniet",
                        },
                        Command: []string{
                            "consequuntur",
                            "fugit",
                            "id",
                        },
                        DependsOn: []string{
                            "reprehenderit",
                            "error",
                        },
                        Env: []shared.GoogleCloudRunV2EnvVar{
                            shared.GoogleCloudRunV2EnvVar{
                                Name: sdk.String("Melody Vandervort"),
                                Value: sdk.String("doloremque"),
                                ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                    SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                        Secret: sdk.String("iure"),
                                        Version: sdk.String("ipsa"),
                                    },
                                },
                            },
                        },
                        Image: sdk.String("totam"),
                        LivenessProbe: &shared.GoogleCloudRunV2Probe{
                            FailureThreshold: sdk.Int(61078),
                            Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                Port: sdk.Int(474668),
                                Service: sdk.String("eveniet"),
                            },
                            HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                    shared.GoogleCloudRunV2HTTPHeader{
                                        Name: sdk.String("Elmer Treutel"),
                                        Value: sdk.String("distinctio"),
                                    },
                                },
                                Path: sdk.String("voluptatum"),
                                Port: sdk.Int(523006),
                            },
                            InitialDelaySeconds: sdk.Int(304446),
                            PeriodSeconds: sdk.Int(320565),
                            TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                Port: sdk.Int(997963),
                            },
                            TimeoutSeconds: sdk.Int(3099),
                        },
                        Name: sdk.String("Katrina Kovacek"),
                        Ports: []shared.GoogleCloudRunV2ContainerPort{
                            shared.GoogleCloudRunV2ContainerPort{
                                ContainerPort: sdk.Int(979527),
                                Name: sdk.String("Todd O'Reilly"),
                            },
                        },
                        Resources: &shared.GoogleCloudRunV2ResourceRequirements{
                            CPUIdle: sdk.Bool(false),
                            Limits: map[string]string{
                                "nesciunt": "quae",
                                "recusandae": "omnis",
                                "quaerat": "molestiae",
                            },
                            StartupCPUBoost: sdk.Bool(false),
                        },
                        StartupProbe: &shared.GoogleCloudRunV2Probe{
                            FailureThreshold: sdk.Int(403218),
                            Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                Port: sdk.Int(284000),
                                Service: sdk.String("culpa"),
                            },
                            HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                    shared.GoogleCloudRunV2HTTPHeader{
                                        Name: sdk.String("Armando Kemmer"),
                                        Value: sdk.String("esse"),
                                    },
                                },
                                Path: sdk.String("provident"),
                                Port: sdk.Int(337477),
                            },
                            InitialDelaySeconds: sdk.Int(431785),
                            PeriodSeconds: sdk.Int(970494),
                            TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                Port: sdk.Int(592780),
                            },
                            TimeoutSeconds: sdk.Int(133439),
                        },
                        VolumeMounts: []shared.GoogleCloudRunV2VolumeMount{
                            shared.GoogleCloudRunV2VolumeMount{
                                MountPath: sdk.String("quasi"),
                                Name: sdk.String("Gordon O'Hara"),
                            },
                            shared.GoogleCloudRunV2VolumeMount{
                                MountPath: sdk.String("animi"),
                                Name: sdk.String("Beth Bashirian"),
                            },
                        },
                        WorkingDir: sdk.String("ullam"),
                    },
                },
                EncryptionKey: sdk.String("in"),
                ExecutionEnvironment: shared.GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnumExecutionEnvironmentGen2.ToPointer(),
                Labels: map[string]string{
                    "officia": "laborum",
                    "placeat": "modi",
                    "voluptatibus": "molestias",
                    "officiis": "sapiente",
                },
                MaxInstanceRequestConcurrency: sdk.Int(764562),
                Revision: sdk.String("vitae"),
                Scaling: &shared.GoogleCloudRunV2RevisionScaling{
                    MaxInstanceCount: sdk.Int(698249),
                    MinInstanceCount: sdk.Int(272229),
                },
                ServiceAccount: sdk.String("quis"),
                SessionAffinity: sdk.Bool(false),
                Timeout: sdk.String("inventore"),
                Volumes: []shared.GoogleCloudRunV2Volume{
                    shared.GoogleCloudRunV2Volume{
                        CloudSQLInstance: &shared.GoogleCloudRunV2CloudSQLInstance{
                            Instances: []string{
                                "quae",
                                "perferendis",
                                "velit",
                                "aspernatur",
                            },
                        },
                        EmptyDir: &shared.GoogleCloudRunV2EmptyDirVolumeSource{
                            Medium: shared.GoogleCloudRunV2EmptyDirVolumeSourceMediumEnumMediumUnspecified.ToPointer(),
                            SizeLimit: sdk.String("eius"),
                        },
                        Name: sdk.String("Wilfred Rutherford"),
                        Secret: &shared.GoogleCloudRunV2SecretVolumeSource{
                            DefaultMode: sdk.Int(433279),
                            Items: []shared.GoogleCloudRunV2VersionToPath{
                                shared.GoogleCloudRunV2VersionToPath{
                                    Mode: sdk.Int(325118),
                                    Path: sdk.String("beatae"),
                                    Version: sdk.String("cupiditate"),
                                },
                            },
                            Secret: sdk.String("provident"),
                        },
                    },
                },
                VpcAccess: &shared.GoogleCloudRunV2VpcAccess{
                    Connector: sdk.String("earum"),
                    Egress: shared.GoogleCloudRunV2VpcAccessEgressEnumPrivateRangesOnly.ToPointer(),
                },
            },
            TerminalCondition: &shared.GoogleCloudRunV2Condition{
                ExecutionReason: shared.GoogleCloudRunV2ConditionExecutionReasonEnumCancelling.ToPointer(),
                LastTransitionTime: sdk.String("illum"),
                Message: sdk.String("eaque"),
                Reason: shared.GoogleCloudRunV2ConditionReasonEnumInternal.ToPointer(),
                RevisionReason: shared.GoogleCloudRunV2ConditionRevisionReasonEnumCustomizedPathResponsePending.ToPointer(),
                Severity: shared.GoogleCloudRunV2ConditionSeverityEnumInfo.ToPointer(),
                State: shared.GoogleCloudRunV2ConditionStateEnumConditionSucceeded.ToPointer(),
                Type: sdk.String("aliquid"),
            },
            Traffic: []shared.GoogleCloudRunV2TrafficTarget{
                shared.GoogleCloudRunV2TrafficTarget{
                    Percent: sdk.Int(380335),
                    Revision: sdk.String("dolorem"),
                    Tag: sdk.String("fugit"),
                    Type: shared.GoogleCloudRunV2TrafficTargetTypeEnumTrafficTargetAllocationTypeRevision.ToPointer(),
                },
                shared.GoogleCloudRunV2TrafficTarget{
                    Percent: sdk.Int(684935),
                    Revision: sdk.String("ratione"),
                    Tag: sdk.String("animi"),
                    Type: shared.GoogleCloudRunV2TrafficTargetTypeEnumTrafficTargetAllocationTypeRevision.ToPointer(),
                },
                shared.GoogleCloudRunV2TrafficTarget{
                    Percent: sdk.Int(862063),
                    Revision: sdk.String("consequatur"),
                    Tag: sdk.String("quasi"),
                    Type: shared.GoogleCloudRunV2TrafficTargetTypeEnumTrafficTargetAllocationTypeUnspecified.ToPointer(),
                },
                shared.GoogleCloudRunV2TrafficTarget{
                    Percent: sdk.Int(497777),
                    Revision: sdk.String("natus"),
                    Tag: sdk.String("occaecati"),
                    Type: shared.GoogleCloudRunV2TrafficTargetTypeEnumTrafficTargetAllocationTypeLatest.ToPointer(),
                },
            },
        },
        AccessToken: sdk.String("adipisci"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("doloribus"),
        Key: sdk.String("nulla"),
        OauthToken: sdk.String("necessitatibus"),
        Parent: "ipsa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        ServiceID: sdk.String("nihil"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("dicta"),
        ValidateOnly: sdk.Bool(false),
    }, operations.RunProjectsLocationsServicesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## RunProjectsLocationsServicesGetIamPolicy

Gets the IAM Access Control policy currently in effect for the given Cloud Run Service. This result does not include any inherited policies.

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
    res, err := s.Projects.RunProjectsLocationsServicesGetIamPolicy(ctx, operations.RunProjectsLocationsServicesGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("vel"),
        OauthToken: sdk.String("architecto"),
        OptionsRequestedPolicyVersion: sdk.Int64(857125),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloremque"),
        Resource: "dicta",
        UploadType: sdk.String("odio"),
        UploadProtocol: sdk.String("tempora"),
    }, operations.RunProjectsLocationsServicesGetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleIamV1Policy != nil {
        // handle response
    }
}
```

## RunProjectsLocationsServicesList

Lists Services.

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
    res, err := s.Projects.RunProjectsLocationsServicesList(ctx, operations.RunProjectsLocationsServicesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ex"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("sunt"),
        PageSize: sdk.Int64(344718),
        PageToken: sdk.String("fugiat"),
        Parent: "expedita",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        ShowDeleted: sdk.Bool(false),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.RunProjectsLocationsServicesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRunV2ListServicesResponse != nil {
        // handle response
    }
}
```

## RunProjectsLocationsServicesPatch

Updates a Service.

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
    res, err := s.Projects.RunProjectsLocationsServicesPatch(ctx, operations.RunProjectsLocationsServicesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRunV2ServiceInput: &shared.GoogleCloudRunV2ServiceInput{
            Annotations: map[string]string{
                "eum": "voluptas",
            },
            BinaryAuthorization: &shared.GoogleCloudRunV2BinaryAuthorization{
                BreakglassJustification: sdk.String("iste"),
                UseDefault: sdk.Bool(false),
            },
            Client: sdk.String("id"),
            ClientVersion: sdk.String("ab"),
            Description: sdk.String("error"),
            Ingress: shared.GoogleCloudRunV2ServiceIngressEnumIngressTrafficInternalLoadBalancer.ToPointer(),
            Labels: map[string]string{
                "mollitia": "laborum",
                "libero": "ad",
                "deleniti": "enim",
                "vitae": "repellendus",
            },
            LaunchStage: shared.GoogleCloudRunV2ServiceLaunchStageEnumEarlyAccess.ToPointer(),
            Name: sdk.String("Ruben Goyette"),
            Template: &shared.GoogleCloudRunV2RevisionTemplate{
                Annotations: map[string]string{
                    "molestias": "cum",
                },
                Containers: []shared.GoogleCloudRunV2Container{
                    shared.GoogleCloudRunV2Container{
                        Args: []string{
                            "voluptatum",
                        },
                        Command: []string{
                            "veritatis",
                            "rerum",
                            "est",
                        },
                        DependsOn: []string{
                            "voluptatem",
                            "sapiente",
                            "officiis",
                        },
                        Env: []shared.GoogleCloudRunV2EnvVar{
                            shared.GoogleCloudRunV2EnvVar{
                                Name: sdk.String("Mr. Dewey Toy"),
                                Value: sdk.String("earum"),
                                ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                    SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                        Secret: sdk.String("ex"),
                                        Version: sdk.String("sapiente"),
                                    },
                                },
                            },
                        },
                        Image: sdk.String("rem"),
                        LivenessProbe: &shared.GoogleCloudRunV2Probe{
                            FailureThreshold: sdk.Int(796320),
                            Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                Port: sdk.Int(365100),
                                Service: sdk.String("asperiores"),
                            },
                            HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                    shared.GoogleCloudRunV2HTTPHeader{
                                        Name: sdk.String("Dorothy Stanton"),
                                        Value: sdk.String("quibusdam"),
                                    },
                                },
                                Path: sdk.String("nam"),
                                Port: sdk.Int(373216),
                            },
                            InitialDelaySeconds: sdk.Int(633415),
                            PeriodSeconds: sdk.Int(222864),
                            TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                Port: sdk.Int(307376),
                            },
                            TimeoutSeconds: sdk.Int(80532),
                        },
                        Name: sdk.String("Peter Goodwin Sr."),
                        Ports: []shared.GoogleCloudRunV2ContainerPort{
                            shared.GoogleCloudRunV2ContainerPort{
                                ContainerPort: sdk.Int(265039),
                                Name: sdk.String("Mrs. Rebecca Larkin"),
                            },
                        },
                        Resources: &shared.GoogleCloudRunV2ResourceRequirements{
                            CPUIdle: sdk.Bool(false),
                            Limits: map[string]string{
                                "consequuntur": "ipsa",
                                "quas": "eveniet",
                            },
                            StartupCPUBoost: sdk.Bool(false),
                        },
                        StartupProbe: &shared.GoogleCloudRunV2Probe{
                            FailureThreshold: sdk.Int(773456),
                            Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                Port: sdk.Int(884952),
                                Service: sdk.String("esse"),
                            },
                            HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                    shared.GoogleCloudRunV2HTTPHeader{
                                        Name: sdk.String("Sally Dooley"),
                                        Value: sdk.String("vel"),
                                    },
                                    shared.GoogleCloudRunV2HTTPHeader{
                                        Name: sdk.String("Miss Oscar Heller"),
                                        Value: sdk.String("nobis"),
                                    },
                                    shared.GoogleCloudRunV2HTTPHeader{
                                        Name: sdk.String("Mrs. Kate Cronin"),
                                        Value: sdk.String("quasi"),
                                    },
                                    shared.GoogleCloudRunV2HTTPHeader{
                                        Name: sdk.String("Teri Thiel"),
                                        Value: sdk.String("sequi"),
                                    },
                                },
                                Path: sdk.String("doloribus"),
                                Port: sdk.Int(918092),
                            },
                            InitialDelaySeconds: sdk.Int(759283),
                            PeriodSeconds: sdk.Int(579681),
                            TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                Port: sdk.Int(364544),
                            },
                            TimeoutSeconds: sdk.Int(455898),
                        },
                        VolumeMounts: []shared.GoogleCloudRunV2VolumeMount{
                            shared.GoogleCloudRunV2VolumeMount{
                                MountPath: sdk.String("officia"),
                                Name: sdk.String("Marjorie Hickle"),
                            },
                            shared.GoogleCloudRunV2VolumeMount{
                                MountPath: sdk.String("aspernatur"),
                                Name: sdk.String("Peggy Parker"),
                            },
                            shared.GoogleCloudRunV2VolumeMount{
                                MountPath: sdk.String("quasi"),
                                Name: sdk.String("Clint Carroll"),
                            },
                        },
                        WorkingDir: sdk.String("consectetur"),
                    },
                    shared.GoogleCloudRunV2Container{
                        Args: []string{
                            "cupiditate",
                        },
                        Command: []string{
                            "soluta",
                            "alias",
                            "omnis",
                            "eos",
                        },
                        DependsOn: []string{
                            "iste",
                            "magni",
                            "inventore",
                        },
                        Env: []shared.GoogleCloudRunV2EnvVar{
                            shared.GoogleCloudRunV2EnvVar{
                                Name: sdk.String("Jan Reichel"),
                                Value: sdk.String("minima"),
                                ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                    SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                        Secret: sdk.String("praesentium"),
                                        Version: sdk.String("maxime"),
                                    },
                                },
                            },
                            shared.GoogleCloudRunV2EnvVar{
                                Name: sdk.String("Paulette Lowe"),
                                Value: sdk.String("commodi"),
                                ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                    SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                        Secret: sdk.String("totam"),
                                        Version: sdk.String("earum"),
                                    },
                                },
                            },
                            shared.GoogleCloudRunV2EnvVar{
                                Name: sdk.String("Mrs. Candice Thiel"),
                                Value: sdk.String("alias"),
                                ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                    SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                        Secret: sdk.String("quasi"),
                                        Version: sdk.String("non"),
                                    },
                                },
                            },
                        },
                        Image: sdk.String("maiores"),
                        LivenessProbe: &shared.GoogleCloudRunV2Probe{
                            FailureThreshold: sdk.Int(318233),
                            Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                Port: sdk.Int(575213),
                                Service: sdk.String("nulla"),
                            },
                            HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                    shared.GoogleCloudRunV2HTTPHeader{
                                        Name: sdk.String("Ida Kilback"),
                                        Value: sdk.String("sint"),
                                    },
                                    shared.GoogleCloudRunV2HTTPHeader{
                                        Name: sdk.String("Garrett Welch"),
                                        Value: sdk.String("ex"),
                                    },
                                    shared.GoogleCloudRunV2HTTPHeader{
                                        Name: sdk.String("Miss Alyssa Wintheiser"),
                                        Value: sdk.String("laborum"),
                                    },
                                },
                                Path: sdk.String("consectetur"),
                                Port: sdk.Int(244889),
                            },
                            InitialDelaySeconds: sdk.Int(538869),
                            PeriodSeconds: sdk.Int(216457),
                            TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                Port: sdk.Int(773035),
                            },
                            TimeoutSeconds: sdk.Int(166047),
                        },
                        Name: sdk.String("Lamar Reichert"),
                        Ports: []shared.GoogleCloudRunV2ContainerPort{
                            shared.GoogleCloudRunV2ContainerPort{
                                ContainerPort: sdk.Int(194023),
                                Name: sdk.String("Gladys Satterfield"),
                            },
                            shared.GoogleCloudRunV2ContainerPort{
                                ContainerPort: sdk.Int(437814),
                                Name: sdk.String("Camille Kautzer"),
                            },
                        },
                        Resources: &shared.GoogleCloudRunV2ResourceRequirements{
                            CPUIdle: sdk.Bool(false),
                            Limits: map[string]string{
                                "facere": "libero",
                            },
                            StartupCPUBoost: sdk.Bool(false),
                        },
                        StartupProbe: &shared.GoogleCloudRunV2Probe{
                            FailureThreshold: sdk.Int(102413),
                            Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                Port: sdk.Int(975425),
                                Service: sdk.String("quia"),
                            },
                            HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                    shared.GoogleCloudRunV2HTTPHeader{
                                        Name: sdk.String("Ms. Sheila Blanda"),
                                        Value: sdk.String("beatae"),
                                    },
                                    shared.GoogleCloudRunV2HTTPHeader{
                                        Name: sdk.String("Marshall Kemmer"),
                                        Value: sdk.String("perspiciatis"),
                                    },
                                    shared.GoogleCloudRunV2HTTPHeader{
                                        Name: sdk.String("Keith Rutherford"),
                                        Value: sdk.String("itaque"),
                                    },
                                    shared.GoogleCloudRunV2HTTPHeader{
                                        Name: sdk.String("Alma Waters"),
                                        Value: sdk.String("non"),
                                    },
                                },
                                Path: sdk.String("dolor"),
                                Port: sdk.Int(483394),
                            },
                            InitialDelaySeconds: sdk.Int(24753),
                            PeriodSeconds: sdk.Int(39992),
                            TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                Port: sdk.Int(7468),
                            },
                            TimeoutSeconds: sdk.Int(639705),
                        },
                        VolumeMounts: []shared.GoogleCloudRunV2VolumeMount{
                            shared.GoogleCloudRunV2VolumeMount{
                                MountPath: sdk.String("ea"),
                                Name: sdk.String("Hector Purdy"),
                            },
                            shared.GoogleCloudRunV2VolumeMount{
                                MountPath: sdk.String("expedita"),
                                Name: sdk.String("Tommie Klocko"),
                            },
                            shared.GoogleCloudRunV2VolumeMount{
                                MountPath: sdk.String("necessitatibus"),
                                Name: sdk.String("Rodolfo Hintz"),
                            },
                            shared.GoogleCloudRunV2VolumeMount{
                                MountPath: sdk.String("error"),
                                Name: sdk.String("Lucille Bogan"),
                            },
                        },
                        WorkingDir: sdk.String("vitae"),
                    },
                },
                EncryptionKey: sdk.String("inventore"),
                ExecutionEnvironment: shared.GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnumExecutionEnvironmentUnspecified.ToPointer(),
                Labels: map[string]string{
                    "qui": "iste",
                    "ex": "nemo",
                },
                MaxInstanceRequestConcurrency: sdk.Int(745233),
                Revision: sdk.String("libero"),
                Scaling: &shared.GoogleCloudRunV2RevisionScaling{
                    MaxInstanceCount: sdk.Int(526907),
                    MinInstanceCount: sdk.Int(678060),
                },
                ServiceAccount: sdk.String("odio"),
                SessionAffinity: sdk.Bool(false),
                Timeout: sdk.String("fugit"),
                Volumes: []shared.GoogleCloudRunV2Volume{
                    shared.GoogleCloudRunV2Volume{
                        CloudSQLInstance: &shared.GoogleCloudRunV2CloudSQLInstance{
                            Instances: []string{
                                "vel",
                            },
                        },
                        EmptyDir: &shared.GoogleCloudRunV2EmptyDirVolumeSource{
                            Medium: shared.GoogleCloudRunV2EmptyDirVolumeSourceMediumEnumMediumUnspecified.ToPointer(),
                            SizeLimit: sdk.String("quae"),
                        },
                        Name: sdk.String("Dawn Heidenreich I"),
                        Secret: &shared.GoogleCloudRunV2SecretVolumeSource{
                            DefaultMode: sdk.Int(602229),
                            Items: []shared.GoogleCloudRunV2VersionToPath{
                                shared.GoogleCloudRunV2VersionToPath{
                                    Mode: sdk.Int(714376),
                                    Path: sdk.String("maxime"),
                                    Version: sdk.String("quia"),
                                },
                                shared.GoogleCloudRunV2VersionToPath{
                                    Mode: sdk.Int(159146),
                                    Path: sdk.String("nostrum"),
                                    Version: sdk.String("omnis"),
                                },
                                shared.GoogleCloudRunV2VersionToPath{
                                    Mode: sdk.Int(727250),
                                    Path: sdk.String("dicta"),
                                    Version: sdk.String("id"),
                                },
                                shared.GoogleCloudRunV2VersionToPath{
                                    Mode: sdk.Int(727888),
                                    Path: sdk.String("fugiat"),
                                    Version: sdk.String("officia"),
                                },
                            },
                            Secret: sdk.String("quos"),
                        },
                    },
                },
                VpcAccess: &shared.GoogleCloudRunV2VpcAccess{
                    Connector: sdk.String("placeat"),
                    Egress: shared.GoogleCloudRunV2VpcAccessEgressEnumVpcEgressUnspecified.ToPointer(),
                },
            },
            TerminalCondition: &shared.GoogleCloudRunV2Condition{
                ExecutionReason: shared.GoogleCloudRunV2ConditionExecutionReasonEnumNonZeroExitCode.ToPointer(),
                LastTransitionTime: sdk.String("ipsa"),
                Message: sdk.String("voluptates"),
                Reason: shared.GoogleCloudRunV2ConditionReasonEnumUnknown.ToPointer(),
                RevisionReason: shared.GoogleCloudRunV2ConditionRevisionReasonEnumRevisionReasonUndefined.ToPointer(),
                Severity: shared.GoogleCloudRunV2ConditionSeverityEnumWarning.ToPointer(),
                State: shared.GoogleCloudRunV2ConditionStateEnumConditionPending.ToPointer(),
                Type: sdk.String("eligendi"),
            },
            Traffic: []shared.GoogleCloudRunV2TrafficTarget{
                shared.GoogleCloudRunV2TrafficTarget{
                    Percent: sdk.Int(32273),
                    Revision: sdk.String("autem"),
                    Tag: sdk.String("esse"),
                    Type: shared.GoogleCloudRunV2TrafficTargetTypeEnumTrafficTargetAllocationTypeUnspecified.ToPointer(),
                },
                shared.GoogleCloudRunV2TrafficTarget{
                    Percent: sdk.Int(824798),
                    Revision: sdk.String("beatae"),
                    Tag: sdk.String("est"),
                    Type: shared.GoogleCloudRunV2TrafficTargetTypeEnumTrafficTargetAllocationTypeRevision.ToPointer(),
                },
                shared.GoogleCloudRunV2TrafficTarget{
                    Percent: sdk.Int(545918),
                    Revision: sdk.String("molestiae"),
                    Tag: sdk.String("provident"),
                    Type: shared.GoogleCloudRunV2TrafficTargetTypeEnumTrafficTargetAllocationTypeRevision.ToPointer(),
                },
            },
        },
        AccessToken: sdk.String("necessitatibus"),
        AllowMissing: sdk.Bool(false),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("ea"),
        Key: sdk.String("autem"),
        Name: "Olivia Larkin",
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cum"),
        UploadType: sdk.String("at"),
        UploadProtocol: sdk.String("alias"),
        ValidateOnly: sdk.Bool(false),
    }, operations.RunProjectsLocationsServicesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## RunProjectsLocationsServicesRevisionsDelete

Deletes a Revision.

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
    res, err := s.Projects.RunProjectsLocationsServicesRevisionsDelete(ctx, operations.RunProjectsLocationsServicesRevisionsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("repudiandae"),
        Etag: sdk.String("accusantium"),
        Fields: sdk.String("expedita"),
        Key: sdk.String("officiis"),
        Name: "Rosemarie Kub",
        OauthToken: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("earum"),
        ValidateOnly: sdk.Bool(false),
    }, operations.RunProjectsLocationsServicesRevisionsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## RunProjectsLocationsServicesRevisionsGet

Gets information about a Revision.

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
    res, err := s.Projects.RunProjectsLocationsServicesRevisionsGet(ctx, operations.RunProjectsLocationsServicesRevisionsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("recusandae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ut"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("quis"),
        Name: "Lindsey Kreiger",
        OauthToken: sdk.String("fugit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("nesciunt"),
    }, operations.RunProjectsLocationsServicesRevisionsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRunV2Revision != nil {
        // handle response
    }
}
```

## RunProjectsLocationsServicesRevisionsList

Lists Revisions from a given Service, or from a given location.

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
    res, err := s.Projects.RunProjectsLocationsServicesRevisionsList(ctx, operations.RunProjectsLocationsServicesRevisionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("officia"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("optio"),
        Fields: sdk.String("necessitatibus"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("qui"),
        PageSize: sdk.Int64(708898),
        PageToken: sdk.String("voluptatum"),
        Parent: "cupiditate",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        ShowDeleted: sdk.Bool(false),
        UploadType: sdk.String("placeat"),
        UploadProtocol: sdk.String("enim"),
    }, operations.RunProjectsLocationsServicesRevisionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRunV2ListRevisionsResponse != nil {
        // handle response
    }
}
```

## RunProjectsLocationsServicesSetIamPolicy

Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.

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
    res, err := s.Projects.RunProjectsLocationsServicesSetIamPolicy(ctx, operations.RunProjectsLocationsServicesSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleIamV1SetIamPolicyRequest: &shared.GoogleIamV1SetIamPolicyRequest{
            Policy: &shared.GoogleIamV1Policy{
                AuditConfigs: []shared.GoogleIamV1AuditConfig{
                    shared.GoogleIamV1AuditConfig{
                        AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "modi",
                                    "corporis",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "maiores",
                                    "tempore",
                                    "aperiam",
                                    "libero",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "totam",
                                    "occaecati",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "velit",
                                    "minus",
                                    "fuga",
                                    "nostrum",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("impedit"),
                    },
                    shared.GoogleIamV1AuditConfig{
                        AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "vero",
                                    "odit",
                                    "repellat",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "reprehenderit",
                                    "aperiam",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "in",
                                    "ducimus",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "error",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                        },
                        Service: sdk.String("ducimus"),
                    },
                },
                Bindings: []shared.GoogleIamV1Binding{
                    shared.GoogleIamV1Binding{
                        Condition: &shared.GoogleTypeExpr{
                            Description: sdk.String("pariatur"),
                            Expression: sdk.String("itaque"),
                            Location: sdk.String("similique"),
                            Title: sdk.String("Miss"),
                        },
                        Members: []string{
                            "quaerat",
                            "commodi",
                        },
                        Role: sdk.String("officiis"),
                    },
                    shared.GoogleIamV1Binding{
                        Condition: &shared.GoogleTypeExpr{
                            Description: sdk.String("placeat"),
                            Expression: sdk.String("quidem"),
                            Location: sdk.String("exercitationem"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "modi",
                        },
                        Role: sdk.String("ipsa"),
                    },
                },
                Etag: sdk.String("sint"),
                Version: sdk.Int(876027),
            },
            UpdateMask: sdk.String("sequi"),
        },
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("earum"),
        Key: sdk.String("veniam"),
        OauthToken: sdk.String("animi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolores"),
        Resource: "nam",
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("consequuntur"),
    }, operations.RunProjectsLocationsServicesSetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleIamV1Policy != nil {
        // handle response
    }
}
```

## RunProjectsLocationsServicesTestIamPermissions

Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.

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
    res, err := s.Projects.RunProjectsLocationsServicesTestIamPermissions(ctx, operations.RunProjectsLocationsServicesTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleIamV1TestIamPermissionsRequest: &shared.GoogleIamV1TestIamPermissionsRequest{
            Permissions: []string{
                "ipsa",
                "ducimus",
                "maiores",
            },
        },
        AccessToken: sdk.String("veritatis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("laboriosam"),
        Fields: sdk.String("pariatur"),
        Key: sdk.String("libero"),
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        Resource: "nemo",
        UploadType: sdk.String("aliquam"),
        UploadProtocol: sdk.String("nostrum"),
    }, operations.RunProjectsLocationsServicesTestIamPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleIamV1TestIamPermissionsResponse != nil {
        // handle response
    }
}
```
