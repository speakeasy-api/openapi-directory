# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/run/v2/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.RunProjectsLocationsJobsCreateRequest{
        DollarXgafv: "2",
        GoogleCloudRunV2JobInput: &shared.GoogleCloudRunV2JobInput{
            Annotations: map[string]string{
                "distinctio": "quibusdam",
                "unde": "nulla",
                "corrupti": "illum",
            },
            BinaryAuthorization: &shared.GoogleCloudRunV2BinaryAuthorization{
                BreakglassJustification: "vel",
                UseDefault: false,
            },
            Client: "error",
            ClientVersion: "deserunt",
            Labels: map[string]string{
                "iure": "magnam",
                "debitis": "ipsa",
            },
            LatestCreatedExecution: &shared.GoogleCloudRunV2ExecutionReference{
                CompletionTime: "delectus",
                CreateTime: "tempora",
                Name: "suscipit",
            },
            LaunchStage: "EARLY_ACCESS",
            Name: "minus",
            Template: &shared.GoogleCloudRunV2ExecutionTemplate{
                Annotations: map[string]string{
                    "voluptatum": "iusto",
                    "excepturi": "nisi",
                    "recusandae": "temporibus",
                    "ab": "quis",
                },
                Labels: map[string]string{
                    "deserunt": "perferendis",
                },
                Parallelism: 368241,
                TaskCount: 832620,
                Template: &shared.GoogleCloudRunV2TaskTemplate{
                    Containers: []shared.GoogleCloudRunV2Container{
                        shared.GoogleCloudRunV2Container{
                            Args: []string{
                                "odit",
                                "at",
                                "at",
                                "maiores",
                            },
                            Command: []string{
                                "quod",
                                "quod",
                            },
                            Env: []shared.GoogleCloudRunV2EnvVar{
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "totam",
                                    Value: "porro",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "dolorum",
                                            Version: "dicta",
                                        },
                                    },
                                },
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "nam",
                                    Value: "officia",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "occaecati",
                                            Version: "fugit",
                                        },
                                    },
                                },
                            },
                            Image: "deleniti",
                            LivenessProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 944669,
                                Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                    Port: 758616,
                                    Service: "totam",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "commodi",
                                            Value: "molestiae",
                                        },
                                    },
                                    Path: "modi",
                                    Port: 186332,
                                },
                                InitialDelaySeconds: 774234,
                                PeriodSeconds: 736918,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 456150,
                                },
                                TimeoutSeconds: 216550,
                            },
                            Name: "excepturi",
                            Ports: []shared.GoogleCloudRunV2ContainerPort{
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 18789,
                                    Name: "ad",
                                },
                            },
                            Resources: &shared.GoogleCloudRunV2ResourceRequirements{
                                CPUIdle: false,
                                Limits: map[string]string{
                                    "sed": "iste",
                                    "dolor": "natus",
                                    "laboriosam": "hic",
                                },
                            },
                            StartupProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 902599,
                                Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                    Port: 681820,
                                    Service: "in",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "iste",
                                            Value: "iure",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "saepe",
                                            Value: "quidem",
                                        },
                                    },
                                    Path: "architecto",
                                    Port: 60225,
                                },
                                InitialDelaySeconds: 969810,
                                PeriodSeconds: 666767,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 653140,
                                },
                                TimeoutSeconds: 670638,
                            },
                            VolumeMounts: []shared.GoogleCloudRunV2VolumeMount{
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: "dolorem",
                                    Name: "corporis",
                                },
                            },
                            WorkingDir: "explicabo",
                        },
                        shared.GoogleCloudRunV2Container{
                            Args: []string{
                                "enim",
                                "omnis",
                                "nemo",
                                "minima",
                            },
                            Command: []string{
                                "accusantium",
                                "iure",
                                "culpa",
                            },
                            Env: []shared.GoogleCloudRunV2EnvVar{
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "sapiente",
                                    Value: "architecto",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "mollitia",
                                            Version: "dolorem",
                                        },
                                    },
                                },
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "culpa",
                                    Value: "consequuntur",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "repellat",
                                            Version: "mollitia",
                                        },
                                    },
                                },
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "occaecati",
                                    Value: "numquam",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "commodi",
                                            Version: "quam",
                                        },
                                    },
                                },
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "molestiae",
                                    Value: "velit",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "error",
                                            Version: "quia",
                                        },
                                    },
                                },
                            },
                            Image: "quis",
                            LivenessProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 110375,
                                Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                    Port: 674752,
                                    Service: "animi",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "odit",
                                            Value: "quo",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "sequi",
                                            Value: "tenetur",
                                        },
                                    },
                                    Path: "ipsam",
                                    Port: 662527,
                                },
                                InitialDelaySeconds: 820994,
                                PeriodSeconds: 13571,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 97101,
                                },
                                TimeoutSeconds: 622846,
                            },
                            Name: "temporibus",
                            Ports: []shared.GoogleCloudRunV2ContainerPort{
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 96098,
                                    Name: "reiciendis",
                                },
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 976460,
                                    Name: "vero",
                                },
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 468651,
                                    Name: "praesentium",
                                },
                            },
                            Resources: &shared.GoogleCloudRunV2ResourceRequirements{
                                CPUIdle: false,
                                Limits: map[string]string{
                                    "ipsa": "omnis",
                                    "voluptate": "cum",
                                    "perferendis": "doloremque",
                                    "reprehenderit": "ut",
                                },
                            },
                            StartupProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 979587,
                                Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                    Port: 120196,
                                    Service: "corporis",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "iusto",
                                            Value: "dicta",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "harum",
                                            Value: "enim",
                                        },
                                    },
                                    Path: "accusamus",
                                    Port: 414263,
                                },
                                InitialDelaySeconds: 918236,
                                PeriodSeconds: 64147,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 216822,
                                },
                                TimeoutSeconds: 692472,
                            },
                            VolumeMounts: []shared.GoogleCloudRunV2VolumeMount{
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: "excepturi",
                                    Name: "pariatur",
                                },
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: "modi",
                                    Name: "praesentium",
                                },
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: "rem",
                                    Name: "voluptates",
                                },
                            },
                            WorkingDir: "quasi",
                        },
                        shared.GoogleCloudRunV2Container{
                            Args: []string{
                                "sint",
                                "veritatis",
                                "itaque",
                                "incidunt",
                            },
                            Command: []string{
                                "consequatur",
                                "est",
                            },
                            Env: []shared.GoogleCloudRunV2EnvVar{
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "explicabo",
                                    Value: "deserunt",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "distinctio",
                                            Version: "quibusdam",
                                        },
                                    },
                                },
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "labore",
                                    Value: "modi",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "qui",
                                            Version: "aliquid",
                                        },
                                    },
                                },
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "cupiditate",
                                    Value: "quos",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "perferendis",
                                            Version: "magni",
                                        },
                                    },
                                },
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "assumenda",
                                    Value: "ipsam",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "alias",
                                            Version: "fugit",
                                        },
                                    },
                                },
                            },
                            Image: "dolorum",
                            LivenessProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 569618,
                                Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                    Port: 270008,
                                    Service: "facilis",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "labore",
                                            Value: "delectus",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "eum",
                                            Value: "non",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "eligendi",
                                            Value: "sint",
                                        },
                                    },
                                    Path: "aliquid",
                                    Port: 592042,
                                },
                                InitialDelaySeconds: 896039,
                                PeriodSeconds: 572252,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 638921,
                                },
                                TimeoutSeconds: 223081,
                            },
                            Name: "debitis",
                            Ports: []shared.GoogleCloudRunV2ContainerPort{
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 680056,
                                    Name: "in",
                                },
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 449198,
                                    Name: "illum",
                                },
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 978571,
                                    Name: "rerum",
                                },
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 116202,
                                    Name: "magnam",
                                },
                            },
                            Resources: &shared.GoogleCloudRunV2ResourceRequirements{
                                CPUIdle: false,
                                Limits: map[string]string{
                                    "facere": "ea",
                                    "aliquid": "laborum",
                                    "accusamus": "non",
                                    "occaecati": "enim",
                                },
                            },
                            StartupProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 881736,
                                Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                    Port: 965417,
                                    Service: "quidem",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "nam",
                                            Value: "id",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "blanditiis",
                                            Value: "deleniti",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "sapiente",
                                            Value: "amet",
                                        },
                                    },
                                    Path: "deserunt",
                                    Port: 394869,
                                },
                                InitialDelaySeconds: 423855,
                                PeriodSeconds: 618809,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 606393,
                                },
                                TimeoutSeconds: 474867,
                            },
                            VolumeMounts: []shared.GoogleCloudRunV2VolumeMount{
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: "nihil",
                                    Name: "magnam",
                                },
                            },
                            WorkingDir: "distinctio",
                        },
                        shared.GoogleCloudRunV2Container{
                            Args: []string{
                                "labore",
                                "labore",
                                "suscipit",
                            },
                            Command: []string{
                                "nobis",
                                "eum",
                                "vero",
                            },
                            Env: []shared.GoogleCloudRunV2EnvVar{
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "architecto",
                                    Value: "magnam",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "et",
                                            Version: "excepturi",
                                        },
                                    },
                                },
                            },
                            Image: "ullam",
                            LivenessProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 590873,
                                Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                    Port: 551816,
                                    Service: "sint",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "mollitia",
                                            Value: "reiciendis",
                                        },
                                    },
                                    Path: "mollitia",
                                    Port: 320997,
                                },
                                InitialDelaySeconds: 431418,
                                PeriodSeconds: 221262,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 896547,
                                },
                                TimeoutSeconds: 141264,
                            },
                            Name: "nemo",
                            Ports: []shared.GoogleCloudRunV2ContainerPort{
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 435865,
                                    Name: "doloribus",
                                },
                            },
                            Resources: &shared.GoogleCloudRunV2ResourceRequirements{
                                CPUIdle: false,
                                Limits: map[string]string{
                                    "eius": "maxime",
                                    "deleniti": "facilis",
                                    "in": "architecto",
                                    "architecto": "repudiandae",
                                },
                            },
                            StartupProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 352312,
                                Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                    Port: 714242,
                                    Service: "nihil",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "quibusdam",
                                            Value: "sed",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "saepe",
                                            Value: "pariatur",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "accusantium",
                                            Value: "consequuntur",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "praesentium",
                                            Value: "natus",
                                        },
                                    },
                                    Path: "magni",
                                    Port: 123820,
                                },
                                InitialDelaySeconds: 779051,
                                PeriodSeconds: 848009,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 864934,
                                },
                                TimeoutSeconds: 807319,
                            },
                            VolumeMounts: []shared.GoogleCloudRunV2VolumeMount{
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: "excepturi",
                                    Name: "odit",
                                },
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: "ea",
                                    Name: "accusantium",
                                },
                            },
                            WorkingDir: "ab",
                        },
                    },
                    EncryptionKey: "maiores",
                    ExecutionEnvironment: "EXECUTION_ENVIRONMENT_GEN2",
                    MaxRetries: 373291,
                    ServiceAccount: "voluptate",
                    Timeout: "autem",
                    Volumes: []shared.GoogleCloudRunV2Volume{
                        shared.GoogleCloudRunV2Volume{
                            CloudSQLInstance: &shared.GoogleCloudRunV2CloudSQLInstance{
                                Instances: []string{
                                    "pariatur",
                                },
                            },
                            Name: "nemo",
                            Secret: &shared.GoogleCloudRunV2SecretVolumeSource{
                                DefaultMode: 975522,
                                Items: []shared.GoogleCloudRunV2VersionToPath{
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: 855804,
                                        Path: "amet",
                                        Version: "aut",
                                    },
                                },
                                Secret: "cumque",
                            },
                        },
                        shared.GoogleCloudRunV2Volume{
                            CloudSQLInstance: &shared.GoogleCloudRunV2CloudSQLInstance{
                                Instances: []string{
                                    "hic",
                                    "libero",
                                },
                            },
                            Name: "nobis",
                            Secret: &shared.GoogleCloudRunV2SecretVolumeSource{
                                DefaultMode: 171629,
                                Items: []shared.GoogleCloudRunV2VersionToPath{
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: 521037,
                                        Path: "dignissimos",
                                        Version: "eaque",
                                    },
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: 338985,
                                        Path: "nesciunt",
                                        Version: "eos",
                                    },
                                },
                                Secret: "perferendis",
                            },
                        },
                        shared.GoogleCloudRunV2Volume{
                            CloudSQLInstance: &shared.GoogleCloudRunV2CloudSQLInstance{
                                Instances: []string{
                                    "minus",
                                },
                            },
                            Name: "quam",
                            Secret: &shared.GoogleCloudRunV2SecretVolumeSource{
                                DefaultMode: 223924,
                                Items: []shared.GoogleCloudRunV2VersionToPath{
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: 345352,
                                        Path: "hic",
                                        Version: "recusandae",
                                    },
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: 608253,
                                        Path: "facilis",
                                        Version: "perspiciatis",
                                    },
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: 31838,
                                        Path: "porro",
                                        Version: "consequuntur",
                                    },
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: 500026,
                                        Path: "error",
                                        Version: "eaque",
                                    },
                                },
                                Secret: "occaecati",
                            },
                        },
                    },
                    VpcAccess: &shared.GoogleCloudRunV2VpcAccess{
                        Connector: "rerum",
                        Egress: "VPC_EGRESS_UNSPECIFIED",
                    },
                },
            },
            TerminalCondition: &shared.GoogleCloudRunV2Condition{
                ExecutionReason: "CANCELLING",
                LastTransitionTime: "earum",
                Message: "modi",
                Reason: "ENCRYPTION_KEY_CHECK_FAILED",
                RevisionReason: "MIN_INSTANCES_NOT_PROVISIONED",
                Severity: "WARNING",
                State: "CONDITION_SUCCEEDED",
                Type: "provident",
            },
        },
        AccessToken: "nobis",
        Alt: "proto",
        Callback: "delectus",
        Fields: "quaerat",
        JobID: "quos",
        Key: "aliquid",
        OauthToken: "dolorem",
        Parent: "dolorem",
        PrettyPrint: false,
        QuotaUser: "dolor",
        UploadType: "qui",
        UploadProtocol: "ipsum",
        ValidateOnly: false,
    }

    ctx := context.Background()
    res, err := s.Projects.RunProjectsLocationsJobsCreate(ctx, req, operations.RunProjectsLocationsJobsCreateSecurity{
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `RunProjectsLocationsJobsCreate` - Creates a Job.
* `RunProjectsLocationsJobsExecutionsList` - Lists Executions from a Job.
* `RunProjectsLocationsJobsExecutionsTasksList` - Lists Tasks from an Execution of a Job.
* `RunProjectsLocationsJobsList` - Lists Jobs.
* `RunProjectsLocationsJobsRun` - Triggers creation of a new Execution of this Job.
* `RunProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `RunProjectsLocationsOperationsWait` - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* `RunProjectsLocationsServicesCreate` - Creates a new Service in a given project and location.
* `RunProjectsLocationsServicesGetIamPolicy` - Gets the IAM Access Control policy currently in effect for the given Cloud Run Service. This result does not include any inherited policies.
* `RunProjectsLocationsServicesList` - Lists Services.
* `RunProjectsLocationsServicesPatch` - Updates a Service.
* `RunProjectsLocationsServicesRevisionsDelete` - Deletes a Revision.
* `RunProjectsLocationsServicesRevisionsGet` - Gets information about a Revision.
* `RunProjectsLocationsServicesRevisionsList` - Lists Revisions from a given Service, or from a given location.
* `RunProjectsLocationsServicesSetIamPolicy` - Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
* `RunProjectsLocationsServicesTestIamPermissions` - Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
