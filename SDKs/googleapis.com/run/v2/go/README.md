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
            Parent: "sit",
        },
        QueryParams: operations.RunProjectsLocationsJobsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            JobID: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
            ValidateOnly: true,
        },
        Request: &shared.GoogleCloudRunV2JobInput{
            Annotations: map[string]string{
                "et": "ut",
            },
            BinaryAuthorization: &shared.GoogleCloudRunV2BinaryAuthorization{
                BreakglassJustification: "dolorem",
                UseDefault: false,
            },
            Client: "voluptate",
            ClientVersion: "iste",
            Labels: map[string]string{
                "totam": "dolores",
            },
            LatestCreatedExecution: &shared.GoogleCloudRunV2ExecutionReference{
                CompletionTime: "illum",
                CreateTime: "debitis",
                Name: "vel",
            },
            LaunchStage: "LAUNCH_STAGE_UNSPECIFIED",
            Name: "dolore",
            Template: &shared.GoogleCloudRunV2ExecutionTemplate{
                Annotations: map[string]string{
                    "aspernatur": "accusantium",
                    "totam": "commodi",
                },
                Labels: map[string]string{
                    "est": "aut",
                    "odit": "non",
                    "voluptas": "omnis",
                },
                Parallelism: 1059542851699319360,
                TaskCount: 6972732843819909978,
                Template: &shared.GoogleCloudRunV2TaskTemplate{
                    Containers: []shared.GoogleCloudRunV2Container{
                        shared.GoogleCloudRunV2Container{
                            Args: []string{
                                "autem",
                                "consectetur",
                            },
                            Command: []string{
                                "odio",
                            },
                            Env: []shared.GoogleCloudRunV2EnvVar{
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "recusandae",
                                    Value: "at",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "ipsum",
                                            Version: "eveniet",
                                        },
                                    },
                                },
                            },
                            Image: "modi",
                            LivenessProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 7338728586234333996,
                                Grpc: &shared.GoogleCloudRunV2GrpcAction{
                                    Port: 5392504858645185670,
                                    Service: "ut",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "aut",
                                            Value: "reprehenderit",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "tempore",
                                            Value: "maiores",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "incidunt",
                                            Value: "dolor",
                                        },
                                    },
                                    Path: "beatae",
                                },
                                InitialDelaySeconds: 4112921325496946042,
                                PeriodSeconds: 2671030200101705776,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 3508963237347473586,
                                },
                                TimeoutSeconds: 8565714761387219319,
                            },
                            Name: "ipsum",
                            Ports: []shared.GoogleCloudRunV2ContainerPort{
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 7014402135919778893,
                                    Name: "placeat",
                                },
                            },
                            Resources: &shared.GoogleCloudRunV2ResourceRequirements{
                                CPUIdle: true,
                                Limits: map[string]string{
                                    "mollitia": "voluptas",
                                    "quam": "reprehenderit",
                                    "qui": "qui",
                                },
                            },
                            StartupProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 4308690457412179793,
                                Grpc: &shared.GoogleCloudRunV2GrpcAction{
                                    Port: 7663837986485606015,
                                    Service: "autem",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "ut",
                                            Value: "itaque",
                                        },
                                    },
                                    Path: "ab",
                                },
                                InitialDelaySeconds: 8218430188258725598,
                                PeriodSeconds: 4255970180603226314,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 2682844416202521633,
                                },
                                TimeoutSeconds: 4304520335772049496,
                            },
                            VolumeMounts: []shared.GoogleCloudRunV2VolumeMount{
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: "architecto",
                                    Name: "quam",
                                },
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: "velit",
                                    Name: "cumque",
                                },
                            },
                            WorkingDir: "soluta",
                        },
                        shared.GoogleCloudRunV2Container{
                            Args: []string{
                                "voluptates",
                                "magni",
                            },
                            Command: []string{
                                "optio",
                                "qui",
                                "earum",
                            },
                            Env: []shared.GoogleCloudRunV2EnvVar{
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "omnis",
                                    Value: "ut",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "consequatur",
                                            Version: "dolor",
                                        },
                                    },
                                },
                            },
                            Image: "commodi",
                            LivenessProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 1925401661646756611,
                                Grpc: &shared.GoogleCloudRunV2GrpcAction{
                                    Port: 150340687756601720,
                                    Service: "consectetur",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "ut",
                                            Value: "laboriosam",
                                        },
                                    },
                                    Path: "sed",
                                },
                                InitialDelaySeconds: 6604365855503062775,
                                PeriodSeconds: 1836598054518427835,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 7540276489530073149,
                                },
                                TimeoutSeconds: 7638413271565042464,
                            },
                            Name: "consequuntur",
                            Ports: []shared.GoogleCloudRunV2ContainerPort{
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 434400178965901716,
                                    Name: "ipsa",
                                },
                            },
                            Resources: &shared.GoogleCloudRunV2ResourceRequirements{
                                CPUIdle: false,
                                Limits: map[string]string{
                                    "perferendis": "atque",
                                },
                            },
                            StartupProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 5311927246208705713,
                                Grpc: &shared.GoogleCloudRunV2GrpcAction{
                                    Port: 3967212276624460248,
                                    Service: "explicabo",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "maxime",
                                            Value: "eum",
                                        },
                                    },
                                    Path: "perferendis",
                                },
                                InitialDelaySeconds: 6018839464190747916,
                                PeriodSeconds: 2037591971392316788,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 6394356307858046544,
                                },
                                TimeoutSeconds: 9096429817347931519,
                            },
                            VolumeMounts: []shared.GoogleCloudRunV2VolumeMount{
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: "minima",
                                    Name: "necessitatibus",
                                },
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: "est",
                                    Name: "quis",
                                },
                            },
                            WorkingDir: "eum",
                        },
                        shared.GoogleCloudRunV2Container{
                            Args: []string{
                                "et",
                            },
                            Command: []string{
                                "ad",
                                "expedita",
                            },
                            Env: []shared.GoogleCloudRunV2EnvVar{
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "qui",
                                    Value: "modi",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "nihil",
                                            Version: "tempora",
                                        },
                                    },
                                },
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "deserunt",
                                    Value: "eaque",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "sunt",
                                            Version: "sit",
                                        },
                                    },
                                },
                            },
                            Image: "autem",
                            LivenessProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 7506934391669544280,
                                Grpc: &shared.GoogleCloudRunV2GrpcAction{
                                    Port: 952897656927189675,
                                    Service: "vel",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "qui",
                                            Value: "nisi",
                                        },
                                    },
                                    Path: "quis",
                                },
                                InitialDelaySeconds: 1062424578646559011,
                                PeriodSeconds: 3321710981400855005,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 4230816687517220040,
                                },
                                TimeoutSeconds: 6165970817952435057,
                            },
                            Name: "accusamus",
                            Ports: []shared.GoogleCloudRunV2ContainerPort{
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 2223751782546645906,
                                    Name: "rerum",
                                },
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 6870143829354119039,
                                    Name: "laborum",
                                },
                            },
                            Resources: &shared.GoogleCloudRunV2ResourceRequirements{
                                CPUIdle: false,
                                Limits: map[string]string{
                                    "minus": "soluta",
                                    "aperiam": "consequuntur",
                                    "excepturi": "mollitia",
                                },
                            },
                            StartupProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 1377327594979300801,
                                Grpc: &shared.GoogleCloudRunV2GrpcAction{
                                    Port: 2654595716993425044,
                                    Service: "ipsa",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "animi",
                                            Value: "ut",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "aliquam",
                                            Value: "fuga",
                                        },
                                    },
                                    Path: "sed",
                                },
                                InitialDelaySeconds: 4680282486764958852,
                                PeriodSeconds: 6464511094049078446,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 5857858779299113932,
                                },
                                TimeoutSeconds: 3308475210590835610,
                            },
                            VolumeMounts: []shared.GoogleCloudRunV2VolumeMount{
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: "provident",
                                    Name: "molestiae",
                                },
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: "pariatur",
                                    Name: "quasi",
                                },
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: "corrupti",
                                    Name: "enim",
                                },
                            },
                            WorkingDir: "qui",
                        },
                    },
                    EncryptionKey: "sit",
                    ExecutionEnvironment: "EXECUTION_ENVIRONMENT_GEN2",
                    MaxRetries: 9178255268999664835,
                    ServiceAccount: "neque",
                    Timeout: "consequuntur",
                    Volumes: []shared.GoogleCloudRunV2Volume{
                        shared.GoogleCloudRunV2Volume{
                            CloudSQLInstance: &shared.GoogleCloudRunV2CloudSQLInstance{
                                Instances: []string{
                                    "est",
                                    "occaecati",
                                },
                            },
                            Name: "ex",
                            Secret: &shared.GoogleCloudRunV2SecretVolumeSource{
                                DefaultMode: 4932993544835283753,
                                Items: []shared.GoogleCloudRunV2VersionToPath{
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: 6514303339301977139,
                                        Path: "velit",
                                        Version: "quae",
                                    },
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: 5042961816383320698,
                                        Path: "ut",
                                        Version: "necessitatibus",
                                    },
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: 546268158124317116,
                                        Path: "possimus",
                                        Version: "voluptatem",
                                    },
                                },
                                Secret: "dolorum",
                            },
                        },
                    },
                    VpcAccess: &shared.GoogleCloudRunV2VpcAccess{
                        Connector: "doloribus",
                        Egress: "PRIVATE_RANGES_ONLY",
                    },
                },
            },
            TerminalCondition: &shared.GoogleCloudRunV2Condition{
                ExecutionReason: "CANCELLED",
                LastTransitionTime: "earum",
                Message: "et",
                Reason: "POSTPONED_RETRY",
                RevisionReason: "HEALTH_CHECK_SKIPPED",
                Severity: "WARNING",
                State: "CONDITION_RECONCILING",
                Type: "ipsum",
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
