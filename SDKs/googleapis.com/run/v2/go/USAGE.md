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
        Security: operations.RunProjectsLocationsJobsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.RunProjectsLocationsJobsCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.RunProjectsLocationsJobsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            JobID: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
            ValidateOnly: false,
        },
        Request: &shared.GoogleCloudRunV2JobInput{
            Annotations: map[string]string{
                "magnam": "debitis",
                "ipsa": "delectus",
            },
            BinaryAuthorization: &shared.GoogleCloudRunV2BinaryAuthorization{
                BreakglassJustification: "tempora",
                UseDefault: false,
            },
            Client: "suscipit",
            ClientVersion: "molestiae",
            Labels: map[string]string{
                "placeat": "voluptatum",
                "iusto": "excepturi",
                "nisi": "recusandae",
                "temporibus": "ab",
            },
            LatestCreatedExecution: &shared.GoogleCloudRunV2ExecutionReference{
                CompletionTime: "quis",
                CreateTime: "veritatis",
                Name: "deserunt",
            },
            LaunchStage: "LAUNCH_STAGE_UNSPECIFIED",
            Name: "ipsam",
            Template: &shared.GoogleCloudRunV2ExecutionTemplate{
                Annotations: map[string]string{
                    "sapiente": "quo",
                    "odit": "at",
                    "at": "maiores",
                    "molestiae": "quod",
                },
                Labels: map[string]string{
                    "esse": "totam",
                    "porro": "dolorum",
                    "dicta": "nam",
                    "officia": "occaecati",
                },
                Parallelism: 143353,
                TaskCount: 537373,
                Template: &shared.GoogleCloudRunV2TaskTemplate{
                    Containers: []shared.GoogleCloudRunV2Container{
                        shared.GoogleCloudRunV2Container{
                            Args: []string{
                                "totam",
                                "beatae",
                                "commodi",
                                "molestiae",
                            },
                            Command: []string{
                                "qui",
                                "impedit",
                            },
                            Env: []shared.GoogleCloudRunV2EnvVar{
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "esse",
                                    Value: "ipsum",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "excepturi",
                                            Version: "aspernatur",
                                        },
                                    },
                                },
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "perferendis",
                                    Value: "ad",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "natus",
                                            Version: "sed",
                                        },
                                    },
                                },
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "iste",
                                    Value: "dolor",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "natus",
                                            Version: "laboriosam",
                                        },
                                    },
                                },
                            },
                            Image: "hic",
                            LivenessProbe: &shared.GoogleCloudRunV2Probe{
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
                            Name: "dolores",
                            Ports: []shared.GoogleCloudRunV2ContainerPort{
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 358152,
                                    Name: "explicabo",
                                },
                            },
                            Resources: &shared.GoogleCloudRunV2ResourceRequirements{
                                CPUIdle: false,
                                Limits: map[string]string{
                                    "enim": "omnis",
                                    "nemo": "minima",
                                    "excepturi": "accusantium",
                                    "iure": "culpa",
                                },
                            },
                            StartupProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 988374,
                                Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                    Port: 958950,
                                    Service: "architecto",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "dolorem",
                                            Value: "culpa",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "consequuntur",
                                            Value: "repellat",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "mollitia",
                                            Value: "occaecati",
                                        },
                                    },
                                    Path: "numquam",
                                    Port: 414369,
                                },
                                InitialDelaySeconds: 466311,
                                PeriodSeconds: 474697,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 244425,
                                },
                                TimeoutSeconds: 623510,
                            },
                            VolumeMounts: []shared.GoogleCloudRunV2VolumeMount{
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: "quis",
                                    Name: "vitae",
                                },
                            },
                            WorkingDir: "laborum",
                        },
                        shared.GoogleCloudRunV2Container{
                            Args: []string{
                                "enim",
                                "odit",
                                "quo",
                            },
                            Command: []string{
                                "tenetur",
                            },
                            Env: []shared.GoogleCloudRunV2EnvVar{
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "id",
                                    Value: "possimus",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "aut",
                                            Version: "quasi",
                                        },
                                    },
                                },
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "error",
                                    Value: "temporibus",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "laborum",
                                            Version: "quasi",
                                        },
                                    },
                                },
                            },
                            Image: "reiciendis",
                            LivenessProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 976460,
                                Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                    Port: 878194,
                                    Service: "nihil",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "voluptatibus",
                                            Value: "ipsa",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "omnis",
                                            Value: "voluptate",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "cum",
                                            Value: "perferendis",
                                        },
                                    },
                                    Path: "doloremque",
                                    Port: 441711,
                                },
                                InitialDelaySeconds: 282807,
                                PeriodSeconds: 979587,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 120196,
                                },
                                TimeoutSeconds: 359444,
                            },
                            Name: "dolore",
                            Ports: []shared.GoogleCloudRunV2ContainerPort{
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 118727,
                                    Name: "harum",
                                },
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 317983,
                                    Name: "accusamus",
                                },
                            },
                            Resources: &shared.GoogleCloudRunV2ResourceRequirements{
                                CPUIdle: false,
                                Limits: map[string]string{
                                    "repudiandae": "quae",
                                    "ipsum": "quidem",
                                },
                            },
                            StartupProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 565189,
                                Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                    Port: 566602,
                                    Service: "pariatur",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "praesentium",
                                            Value: "rem",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "voluptates",
                                            Value: "quasi",
                                        },
                                    },
                                    Path: "repudiandae",
                                    Port: 575947,
                                },
                                InitialDelaySeconds: 83112,
                                PeriodSeconds: 929297,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 277718,
                                },
                                TimeoutSeconds: 318569,
                            },
                            VolumeMounts: []shared.GoogleCloudRunV2VolumeMount{
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: "est",
                                    Name: "quibusdam",
                                },
                            },
                            WorkingDir: "explicabo",
                        },
                        shared.GoogleCloudRunV2Container{
                            Args: []string{
                                "distinctio",
                                "quibusdam",
                                "labore",
                            },
                            Command: []string{
                                "qui",
                                "aliquid",
                            },
                            Env: []shared.GoogleCloudRunV2EnvVar{
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "quos",
                                    Value: "perferendis",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "magni",
                                            Version: "assumenda",
                                        },
                                    },
                                },
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "ipsam",
                                    Value: "alias",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "fugit",
                                            Version: "dolorum",
                                        },
                                    },
                                },
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "excepturi",
                                    Value: "tempora",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "facilis",
                                            Version: "tempore",
                                        },
                                    },
                                },
                            },
                            Image: "labore",
                            LivenessProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 962189,
                                Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                    Port: 433288,
                                    Service: "non",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "sint",
                                            Value: "aliquid",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "provident",
                                            Value: "necessitatibus",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "sint",
                                            Value: "officia",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "dolor",
                                            Value: "debitis",
                                        },
                                    },
                                    Path: "a",
                                    Port: 680056,
                                },
                                InitialDelaySeconds: 447125,
                                PeriodSeconds: 449198,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 846409,
                                },
                                TimeoutSeconds: 978571,
                            },
                            Name: "rerum",
                            Ports: []shared.GoogleCloudRunV2ContainerPort{
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 297437,
                                    Name: "cumque",
                                },
                            },
                            Resources: &shared.GoogleCloudRunV2ResourceRequirements{
                                CPUIdle: false,
                                Limits: map[string]string{
                                    "ea": "aliquid",
                                    "laborum": "accusamus",
                                    "non": "occaecati",
                                    "enim": "accusamus",
                                },
                            },
                            StartupProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 965417,
                                Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                    Port: 692532,
                                    Service: "provident",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "id",
                                            Value: "blanditiis",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "deleniti",
                                            Value: "sapiente",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "amet",
                                            Value: "deserunt",
                                        },
                                    },
                                    Path: "nisi",
                                    Port: 423855,
                                },
                                InitialDelaySeconds: 618809,
                                PeriodSeconds: 606393,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 474867,
                                },
                                TimeoutSeconds: 19193,
                            },
                            VolumeMounts: []shared.GoogleCloudRunV2VolumeMount{
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: "magnam",
                                    Name: "distinctio",
                                },
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: "id",
                                    Name: "labore",
                                },
                            },
                            WorkingDir: "labore",
                        },
                        shared.GoogleCloudRunV2Container{
                            Args: []string{
                                "natus",
                                "nobis",
                            },
                            Command: []string{
                                "vero",
                                "aspernatur",
                            },
                            Env: []shared.GoogleCloudRunV2EnvVar{
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "magnam",
                                    Value: "et",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "excepturi",
                                            Version: "ullam",
                                        },
                                    },
                                },
                            },
                            Image: "provident",
                            LivenessProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 551816,
                                Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                    Port: 574325,
                                    Service: "accusantium",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "reiciendis",
                                            Value: "mollitia",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "ad",
                                            Value: "eum",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "dolor",
                                            Value: "necessitatibus",
                                        },
                                    },
                                    Path: "odit",
                                    Port: 367562,
                                },
                                InitialDelaySeconds: 97260,
                                PeriodSeconds: 435865,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 984043,
                                },
                                TimeoutSeconds: 891924,
                            },
                            Name: "eius",
                            Ports: []shared.GoogleCloudRunV2ContainerPort{
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 537023,
                                    Name: "facilis",
                                },
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 447926,
                                    Name: "architecto",
                                },
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 99569,
                                    Name: "repudiandae",
                                },
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 352312,
                                    Name: "expedita",
                                },
                            },
                            Resources: &shared.GoogleCloudRunV2ResourceRequirements{
                                CPUIdle: false,
                                Limits: map[string]string{
                                    "repellat": "quibusdam",
                                    "sed": "saepe",
                                },
                            },
                            StartupProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 868126,
                                Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                    Port: 37559,
                                    Service: "consequuntur",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "natus",
                                            Value: "magni",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "sunt",
                                            Value: "quo",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "illum",
                                            Value: "pariatur",
                                        },
                                    },
                                    Path: "maxime",
                                    Port: 411397,
                                },
                                InitialDelaySeconds: 569101,
                                PeriodSeconds: 139972,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 407183,
                                },
                                TimeoutSeconds: 33222,
                            },
                            VolumeMounts: []shared.GoogleCloudRunV2VolumeMount{
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: "maiores",
                                    Name: "quidem",
                                },
                            },
                            WorkingDir: "ipsam",
                        },
                    },
                    EncryptionKey: "voluptate",
                    ExecutionEnvironment: "EXECUTION_ENVIRONMENT_GEN1",
                    MaxRetries: 722056,
                    ServiceAccount: "eaque",
                    Timeout: "pariatur",
                    Volumes: []shared.GoogleCloudRunV2Volume{
                        shared.GoogleCloudRunV2Volume{
                            CloudSQLInstance: &shared.GoogleCloudRunV2CloudSQLInstance{
                                Instances: []string{
                                    "perferendis",
                                    "fugiat",
                                    "amet",
                                    "aut",
                                },
                            },
                            Name: "cumque",
                            Secret: &shared.GoogleCloudRunV2SecretVolumeSource{
                                DefaultMode: 359978,
                                Items: []shared.GoogleCloudRunV2VersionToPath{
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: 729991,
                                        Path: "nobis",
                                        Version: "dolores",
                                    },
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: 339404,
                                        Path: "totam",
                                        Version: "dignissimos",
                                    },
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: 54338,
                                        Path: "quis",
                                        Version: "nesciunt",
                                    },
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: 179490,
                                        Path: "perferendis",
                                        Version: "dolores",
                                    },
                                },
                                Secret: "minus",
                            },
                        },
                        shared.GoogleCloudRunV2Volume{
                            CloudSQLInstance: &shared.GoogleCloudRunV2CloudSQLInstance{
                                Instances: []string{
                                    "dolor",
                                    "vero",
                                },
                            },
                            Name: "nostrum",
                            Secret: &shared.GoogleCloudRunV2SecretVolumeSource{
                                DefaultMode: 944120,
                                Items: []shared.GoogleCloudRunV2VersionToPath{
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
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: 577229,
                                        Path: "rerum",
                                        Version: "adipisci",
                                    },
                                },
                                Secret: "asperiores",
                            },
                        },
                    },
                    VpcAccess: &shared.GoogleCloudRunV2VpcAccess{
                        Connector: "earum",
                        Egress: "VPC_EGRESS_UNSPECIFIED",
                    },
                },
            },
            TerminalCondition: &shared.GoogleCloudRunV2Condition{
                ExecutionReason: "CANCELLED",
                LastTransitionTime: "dolorum",
                Message: "deleniti",
                Reason: "IMMEDIATE_RETRY",
                RevisionReason: "CUSTOMIZED_PATH_RESPONSE_PENDING",
                Severity: "INFO",
                State: "CONDITION_FAILED",
                Type: "delectus",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.RunProjectsLocationsJobsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->