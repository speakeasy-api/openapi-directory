# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.RunProjectsLocationsJobsCreateRequest{
        Security: operations.RunProjectsLocationsJobsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.RunProjectsLocationsJobsCreatePathParams{
            Parent: "suscipit",
        },
        QueryParams: operations.RunProjectsLocationsJobsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "libero",
            Alt: "json",
            Callback: "ad",
            Fields: "ducimus",
            JobID: "deleniti",
            Key: "nisi",
            OauthToken: "ut",
            PrettyPrint: true,
            QuotaUser: "porro",
            UploadType: "tempore",
            UploadProtocol: "et",
            ValidateOnly: true,
        },
        Request: &shared.GoogleCloudRunV2JobInput{
            Annotations: map[string]string{
                "laudantium": "perferendis",
                "et": "eius",
            },
            BinaryAuthorization: &shared.GoogleCloudRunV2BinaryAuthorization{
                BreakglassJustification: "qui",
                UseDefault: true,
            },
            Client: "iusto",
            ClientVersion: "explicabo",
            Labels: map[string]string{
                "eaque": "eaque",
                "dicta": "nemo",
                "ea": "delectus",
            },
            LatestCreatedExecution: &shared.GoogleCloudRunV2ExecutionReference{
                CompletionTime: "aliquid",
                CreateTime: "hic",
                Name: "quasi",
            },
            LaunchStage: "PRELAUNCH",
            Name: "occaecati",
            Template: &shared.GoogleCloudRunV2ExecutionTemplate{
                Annotations: map[string]string{
                    "consequatur": "dignissimos",
                    "officia": "perspiciatis",
                },
                Labels: map[string]string{
                    "quam": "culpa",
                },
                Parallelism: 5668688859707832686,
                TaskCount: 4852492878856347376,
                Template: &shared.GoogleCloudRunV2TaskTemplate{
                    Containers: []shared.GoogleCloudRunV2Container{
                        shared.GoogleCloudRunV2Container{
                            Args: []string{
                                "ut",
                                "harum",
                            },
                            Command: []string{
                                "reprehenderit",
                                "cupiditate",
                            },
                            Env: []shared.GoogleCloudRunV2EnvVar{
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "quibusdam",
                                    Value: "iure",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "illum",
                                            Version: "nihil",
                                        },
                                    },
                                },
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "magni",
                                    Value: "asperiores",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "qui",
                                            Version: "dignissimos",
                                        },
                                    },
                                },
                            },
                            Image: "voluptatibus",
                            LivenessProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 8920474111595905787,
                                Grpc: &shared.GoogleCloudRunV2GrpcAction{
                                    Port: 4083509658646138217,
                                    Service: "unde",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "maiores",
                                            Value: "numquam",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "dolor",
                                            Value: "dolores",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "asperiores",
                                            Value: "suscipit",
                                        },
                                    },
                                    Path: "ipsa",
                                },
                                InitialDelaySeconds: 7753799171679445511,
                                PeriodSeconds: 4931175529225566848,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 2185325564674221262,
                                },
                                TimeoutSeconds: 138877756232706189,
                            },
                            Name: "numquam",
                            Ports: []shared.GoogleCloudRunV2ContainerPort{
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 8562947669453034156,
                                    Name: "numquam",
                                },
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 568995101887030269,
                                    Name: "illo",
                                },
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 5323426190802164810,
                                    Name: "qui",
                                },
                            },
                            Resources: &shared.GoogleCloudRunV2ResourceRequirements{
                                CPUIdle: true,
                                Limits: map[string]string{
                                    "sit": "omnis",
                                },
                            },
                            StartupProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 6298505812432238974,
                                Grpc: &shared.GoogleCloudRunV2GrpcAction{
                                    Port: 1952487967453246552,
                                    Service: "ducimus",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "et",
                                            Value: "assumenda",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "occaecati",
                                            Value: "odio",
                                        },
                                    },
                                    Path: "doloribus",
                                },
                                InitialDelaySeconds: 7628336263756955957,
                                PeriodSeconds: 4907723314801283488,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 3609607787253861825,
                                },
                                TimeoutSeconds: 1359176292588395974,
                            },
                            VolumeMounts: []shared.GoogleCloudRunV2VolumeMount{
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: "natus",
                                    Name: "nostrum",
                                },
                            },
                            WorkingDir: "nisi",
                        },
                        shared.GoogleCloudRunV2Container{
                            Args: []string{
                                "est",
                                "et",
                            },
                            Command: []string{
                                "sit",
                                "dolores",
                            },
                            Env: []shared.GoogleCloudRunV2EnvVar{
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "nihil",
                                    Value: "ut",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "voluptatum",
                                            Version: "ipsum",
                                        },
                                    },
                                },
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "quae",
                                    Value: "est",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "quia",
                                            Version: "non",
                                        },
                                    },
                                },
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "sit",
                                    Value: "repellendus",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "nemo",
                                            Version: "eius",
                                        },
                                    },
                                },
                            },
                            Image: "qui",
                            LivenessProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 8604891891811334033,
                                Grpc: &shared.GoogleCloudRunV2GrpcAction{
                                    Port: 4688415876928062105,
                                    Service: "est",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "eveniet",
                                            Value: "et",
                                        },
                                    },
                                    Path: "nostrum",
                                },
                                InitialDelaySeconds: 8024114062111476704,
                                PeriodSeconds: 7295088593213678795,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 4330808085858693847,
                                },
                                TimeoutSeconds: 2366086897166024343,
                            },
                            Name: "ea",
                            Ports: []shared.GoogleCloudRunV2ContainerPort{
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 4210289638828124445,
                                    Name: "et",
                                },
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 8258572521064249376,
                                    Name: "et",
                                },
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 769848423266362173,
                                    Name: "nemo",
                                },
                            },
                            Resources: &shared.GoogleCloudRunV2ResourceRequirements{
                                CPUIdle: false,
                                Limits: map[string]string{
                                    "maiores": "quos",
                                },
                            },
                            StartupProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 5475561261972105000,
                                Grpc: &shared.GoogleCloudRunV2GrpcAction{
                                    Port: 9192946029720373990,
                                    Service: "delectus",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "quis",
                                            Value: "itaque",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "numquam",
                                            Value: "aliquam",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "dignissimos",
                                            Value: "omnis",
                                        },
                                    },
                                    Path: "alias",
                                },
                                InitialDelaySeconds: 28994857420749428,
                                PeriodSeconds: 5712637066807001057,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 2780196467515509590,
                                },
                                TimeoutSeconds: 6904330919217889168,
                            },
                            VolumeMounts: []shared.GoogleCloudRunV2VolumeMount{
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: "ipsum",
                                    Name: "ipsa",
                                },
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: "labore",
                                    Name: "dolorem",
                                },
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: "a",
                                    Name: "qui",
                                },
                            },
                            WorkingDir: "amet",
                        },
                        shared.GoogleCloudRunV2Container{
                            Args: []string{
                                "natus",
                                "velit",
                                "facere",
                            },
                            Command: []string{
                                "excepturi",
                            },
                            Env: []shared.GoogleCloudRunV2EnvVar{
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "ut",
                                    Value: "aliquam",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "esse",
                                            Version: "officiis",
                                        },
                                    },
                                },
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "voluptas",
                                    Value: "aut",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "voluptatibus",
                                            Version: "rerum",
                                        },
                                    },
                                },
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "sit",
                                    Value: "voluptatem",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "in",
                                            Version: "praesentium",
                                        },
                                    },
                                },
                            },
                            Image: "voluptatibus",
                            LivenessProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 7848741044556088901,
                                Grpc: &shared.GoogleCloudRunV2GrpcAction{
                                    Port: 5740604594018737973,
                                    Service: "voluptatibus",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "ducimus",
                                            Value: "vero",
                                        },
                                    },
                                    Path: "voluptas",
                                },
                                InitialDelaySeconds: 1555857133064102873,
                                PeriodSeconds: 4254463046476411089,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 6454490089023437258,
                                },
                                TimeoutSeconds: 6763923784019875330,
                            },
                            Name: "reprehenderit",
                            Ports: []shared.GoogleCloudRunV2ContainerPort{
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 1048976124591050888,
                                    Name: "et",
                                },
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 2462742793766988067,
                                    Name: "voluptas",
                                },
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 8967251498900461870,
                                    Name: "perspiciatis",
                                },
                            },
                            Resources: &shared.GoogleCloudRunV2ResourceRequirements{
                                CPUIdle: true,
                                Limits: map[string]string{
                                    "est": "debitis",
                                    "qui": "sed",
                                    "animi": "rerum",
                                },
                            },
                            StartupProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 303880974147249365,
                                Grpc: &shared.GoogleCloudRunV2GrpcAction{
                                    Port: 8625174258481621805,
                                    Service: "qui",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "et",
                                            Value: "molestiae",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "perferendis",
                                            Value: "vel",
                                        },
                                    },
                                    Path: "omnis",
                                },
                                InitialDelaySeconds: 6609732672764367963,
                                PeriodSeconds: 209738473558586616,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 4916990636842298801,
                                },
                                TimeoutSeconds: 8377897415669018801,
                            },
                            VolumeMounts: []shared.GoogleCloudRunV2VolumeMount{
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: "repudiandae",
                                    Name: "similique",
                                },
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: "fuga",
                                    Name: "distinctio",
                                },
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: "enim",
                                    Name: "maxime",
                                },
                            },
                            WorkingDir: "magni",
                        },
                    },
                    EncryptionKey: "provident",
                    ExecutionEnvironment: "EXECUTION_ENVIRONMENT_GEN1",
                    MaxRetries: 4830780723789546804,
                    ServiceAccount: "id",
                    Timeout: "ea",
                    Volumes: []shared.GoogleCloudRunV2Volume{
                        shared.GoogleCloudRunV2Volume{
                            CloudSQLInstance: &shared.GoogleCloudRunV2CloudSQLInstance{
                                Instances: []string{
                                    "similique",
                                },
                            },
                            Name: "quo",
                            Secret: &shared.GoogleCloudRunV2SecretVolumeSource{
                                DefaultMode: 3008938046829853154,
                                Items: []shared.GoogleCloudRunV2VersionToPath{
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: 6557505680466147414,
                                        Path: "quas",
                                        Version: "ea",
                                    },
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: 8985521989084988232,
                                        Path: "excepturi",
                                        Version: "iusto",
                                    },
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: 5393738924859449848,
                                        Path: "eveniet",
                                        Version: "blanditiis",
                                    },
                                },
                                Secret: "asperiores",
                            },
                        },
                    },
                    VpcAccess: &shared.GoogleCloudRunV2VpcAccess{
                        Connector: "veritatis",
                        Egress: "PRIVATE_RANGES_ONLY",
                    },
                },
            },
            TerminalCondition: &shared.GoogleCloudRunV2Condition{
                ExecutionReason: "JOB_STATUS_SERVICE_POLLING_ERROR",
                LastTransitionTime: "itaque",
                Message: "sed",
                Reason: "IMMEDIATE_RETRY",
                RevisionReason: "RECREATING",
                Severity: "ERROR",
                State: "CONDITION_FAILED",
                Type: "aut",
            },
        },
    }
    
    res, err := s.Projects.RunProjectsLocationsJobsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `RunProjectsLocationsJobsCreate` - Creates a Job.
* `RunProjectsLocationsJobsExecutionsList` - Lists Executions from a Job.
* `RunProjectsLocationsJobsExecutionsTasksList` - Lists Tasks from an Execution of a Job.
* `RunProjectsLocationsJobsList` - Lists Jobs.
* `RunProjectsLocationsJobsRun` - Triggers creation of a new Execution of this Job.
* `RunProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
