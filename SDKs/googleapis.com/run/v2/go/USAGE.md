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
            Parent: "aliquid",
        },
        QueryParams: operations.RunProjectsLocationsJobsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "voluptate",
            Alt: "proto",
            Callback: "quis",
            Fields: "iste",
            JobID: "magni",
            Key: "iste",
            OauthToken: "sint",
            PrettyPrint: false,
            QuotaUser: "quas",
            UploadType: "culpa",
            UploadProtocol: "saepe",
            ValidateOnly: true,
        },
        Request: &shared.GoogleCloudRunV2JobInput{
            Annotations: map[string]string{
                "fugiat": "sint",
                "et": "est",
            },
            BinaryAuthorization: &shared.GoogleCloudRunV2BinaryAuthorization{
                BreakglassJustification: "beatae",
                UseDefault: false,
            },
            Client: "exercitationem",
            ClientVersion: "deleniti",
            Labels: map[string]string{
                "et": "cupiditate",
                "ea": "mollitia",
            },
            LatestCreatedExecution: &shared.GoogleCloudRunV2ExecutionReference{
                CompletionTime: "facilis",
                CreateTime: "rerum",
                Name: "molestias",
            },
            LaunchStage: "LAUNCH_STAGE_UNSPECIFIED",
            Name: "delectus",
            Template: &shared.GoogleCloudRunV2ExecutionTemplate{
                Annotations: map[string]string{
                    "nulla": "sed",
                },
                Labels: map[string]string{
                    "nobis": "numquam",
                    "voluptates": "porro",
                    "et": "dolores",
                },
                Parallelism: 5553043384879518800,
                TaskCount: 6954332292875974805,
                Template: &shared.GoogleCloudRunV2TaskTemplate{
                    Containers: []shared.GoogleCloudRunV2Container{
                        shared.GoogleCloudRunV2Container{
                            Args: []string{
                                "molestias",
                                "exercitationem",
                            },
                            Command: []string{
                                "dicta",
                                "molestiae",
                            },
                            Env: []shared.GoogleCloudRunV2EnvVar{
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "accusantium",
                                    Value: "sunt",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "eum",
                                            Version: "doloremque",
                                        },
                                    },
                                },
                            },
                            Image: "qui",
                            LivenessProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 3845105827281616993,
                                Grpc: &shared.GoogleCloudRunV2GrpcAction{
                                    Port: 9133012351780845585,
                                    Service: "ab",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "et",
                                            Value: "quos",
                                        },
                                    },
                                    Path: "non",
                                },
                                InitialDelaySeconds: 794630284764646271,
                                PeriodSeconds: 5940557397638332803,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 1871726393065881159,
                                },
                                TimeoutSeconds: 4968700115365761011,
                            },
                            Name: "fugit",
                            Ports: []shared.GoogleCloudRunV2ContainerPort{
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 2287026289929957848,
                                    Name: "asperiores",
                                },
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 6409367139447962956,
                                    Name: "quo",
                                },
                            },
                            Resources: &shared.GoogleCloudRunV2ResourceRequirements{
                                CPUIdle: false,
                                Limits: map[string]string{
                                    "error": "aut",
                                },
                            },
                            StartupProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 8662577244909068482,
                                Grpc: &shared.GoogleCloudRunV2GrpcAction{
                                    Port: 629611110831295540,
                                    Service: "tempora",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "voluptatum",
                                            Value: "mollitia",
                                        },
                                    },
                                    Path: "exercitationem",
                                },
                                InitialDelaySeconds: 7435804055796979718,
                                PeriodSeconds: 6570617321667268242,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 351707833217725310,
                                },
                                TimeoutSeconds: 3663932191970973070,
                            },
                            VolumeMounts: []shared.GoogleCloudRunV2VolumeMount{
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: "dignissimos",
                                    Name: "laborum",
                                },
                            },
                            WorkingDir: "nemo",
                        },
                        shared.GoogleCloudRunV2Container{
                            Args: []string{
                                "perspiciatis",
                            },
                            Command: []string{
                                "voluptates",
                            },
                            Env: []shared.GoogleCloudRunV2EnvVar{
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "nostrum",
                                    Value: "in",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "porro",
                                            Version: "neque",
                                        },
                                    },
                                },
                            },
                            Image: "modi",
                            LivenessProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 8365140671922306762,
                                Grpc: &shared.GoogleCloudRunV2GrpcAction{
                                    Port: 53161341711106526,
                                    Service: "ut",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "quia",
                                            Value: "sed",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "harum",
                                            Value: "praesentium",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "natus",
                                            Value: "voluptatum",
                                        },
                                    },
                                    Path: "est",
                                },
                                InitialDelaySeconds: 2584865557599778626,
                                PeriodSeconds: 2604370244251718789,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 4541992452445758280,
                                },
                                TimeoutSeconds: 4391016473054177008,
                            },
                            Name: "non",
                            Ports: []shared.GoogleCloudRunV2ContainerPort{
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 3634764537064641480,
                                    Name: "laborum",
                                },
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 3770782644112937114,
                                    Name: "nostrum",
                                },
                            },
                            Resources: &shared.GoogleCloudRunV2ResourceRequirements{
                                CPUIdle: true,
                                Limits: map[string]string{
                                    "animi": "sequi",
                                    "voluptates": "fugiat",
                                    "repudiandae": "deleniti",
                                },
                            },
                            StartupProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 7565656279603228194,
                                Grpc: &shared.GoogleCloudRunV2GrpcAction{
                                    Port: 875434980864239951,
                                    Service: "tempore",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "maiores",
                                            Value: "commodi",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "magni",
                                            Value: "et",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "totam",
                                            Value: "facere",
                                        },
                                    },
                                    Path: "aperiam",
                                },
                                InitialDelaySeconds: 1564700916616987088,
                                PeriodSeconds: 450247082234492678,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 3090111536519271542,
                                },
                                TimeoutSeconds: 8607089064189652098,
                            },
                            VolumeMounts: []shared.GoogleCloudRunV2VolumeMount{
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: "accusamus",
                                    Name: "quasi",
                                },
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: "iure",
                                    Name: "deserunt",
                                },
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: "quas",
                                    Name: "vero",
                                },
                            },
                            WorkingDir: "totam",
                        },
                    },
                    EncryptionKey: "omnis",
                    ExecutionEnvironment: "EXECUTION_ENVIRONMENT_UNSPECIFIED",
                    MaxRetries: 2855465768586324217,
                    ServiceAccount: "est",
                    Timeout: "impedit",
                    Volumes: []shared.GoogleCloudRunV2Volume{
                        shared.GoogleCloudRunV2Volume{
                            CloudSQLInstance: &shared.GoogleCloudRunV2CloudSQLInstance{
                                Instances: []string{
                                    "dolores",
                                    "et",
                                    "tempore",
                                },
                            },
                            Name: "molestiae",
                            Secret: &shared.GoogleCloudRunV2SecretVolumeSource{
                                DefaultMode: 2598838003840084836,
                                Items: []shared.GoogleCloudRunV2VersionToPath{
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: 3728513012859977944,
                                        Path: "voluptatem",
                                        Version: "illum",
                                    },
                                },
                                Secret: "soluta",
                            },
                        },
                        shared.GoogleCloudRunV2Volume{
                            CloudSQLInstance: &shared.GoogleCloudRunV2CloudSQLInstance{
                                Instances: []string{
                                    "doloribus",
                                },
                            },
                            Name: "voluptatem",
                            Secret: &shared.GoogleCloudRunV2SecretVolumeSource{
                                DefaultMode: 5146696969064065004,
                                Items: []shared.GoogleCloudRunV2VersionToPath{
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: 2544699031317201057,
                                        Path: "repellat",
                                        Version: "molestiae",
                                    },
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: 1213484702032854472,
                                        Path: "sit",
                                        Version: "ad",
                                    },
                                },
                                Secret: "facere",
                            },
                        },
                    },
                    VpcAccess: &shared.GoogleCloudRunV2VpcAccess{
                        Connector: "debitis",
                        Egress: "ALL_TRAFFIC",
                    },
                },
            },
            TerminalCondition: &shared.GoogleCloudRunV2Condition{
                ExecutionReason: "JOB_STATUS_SERVICE_POLLING_ERROR",
                LastTransitionTime: "unde",
                Message: "non",
                Reason: "REVISION_FAILED",
                RevisionReason: "NO_DEPLOYMENT",
                Severity: "ERROR",
                State: "CONDITION_SUCCEEDED",
                Type: "eligendi",
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