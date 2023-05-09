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
                "distinctio": "quibusdam",
                "unde": "nulla",
                "corrupti": "illum",
            },
            BinaryAuthorization: &shared.GoogleCloudRunV2BinaryAuthorization{
                BreakglassJustification: sdk.String("vel"),
                UseDefault: sdk.Bool(false),
            },
            Client: sdk.String("error"),
            ClientVersion: sdk.String("deserunt"),
            Labels: map[string]string{
                "iure": "magnam",
                "debitis": "ipsa",
            },
            LatestCreatedExecution: &shared.GoogleCloudRunV2ExecutionReference{
                CompletionTime: sdk.String("delectus"),
                CreateTime: sdk.String("tempora"),
                Name: sdk.String("Minnie Schiller"),
            },
            LaunchStage: shared.GoogleCloudRunV2JobLaunchStageEnumEarlyAccess.ToPointer(),
            Name: sdk.String("Charlie Walsh II"),
            Template: &shared.GoogleCloudRunV2ExecutionTemplate{
                Annotations: map[string]string{
                    "deserunt": "perferendis",
                },
                Labels: map[string]string{
                    "repellendus": "sapiente",
                    "quo": "odit",
                },
                Parallelism: sdk.Int(870013),
                TaskCount: sdk.Int(870088),
                Template: &shared.GoogleCloudRunV2TaskTemplate{
                    Containers: []shared.GoogleCloudRunV2Container{
                        shared.GoogleCloudRunV2Container{
                            Args: []string{
                                "quod",
                                "quod",
                            },
                            Command: []string{
                                "totam",
                                "porro",
                            },
                            DependsOn: []string{
                                "dicta",
                                "nam",
                                "officia",
                            },
                            Env: []shared.GoogleCloudRunV2EnvVar{
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: sdk.String("Cassandra Welch"),
                                    Value: sdk.String("beatae"),
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: sdk.String("commodi"),
                                            Version: sdk.String("molestiae"),
                                        },
                                    },
                                },
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: sdk.String("Norma Ryan"),
                                    Value: sdk.String("ipsum"),
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: sdk.String("excepturi"),
                                            Version: sdk.String("aspernatur"),
                                        },
                                    },
                                },
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: sdk.String("Cathy Mosciski"),
                                    Value: sdk.String("dolor"),
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: sdk.String("natus"),
                                            Version: sdk.String("laboriosam"),
                                        },
                                    },
                                },
                            },
                            Image: sdk.String("hic"),
                            LivenessProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: sdk.Int(902599),
                                Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                    Port: sdk.Int(681820),
                                    Service: sdk.String("in"),
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: sdk.String("Brad Turcotte Jr."),
                                            Value: sdk.String("reiciendis"),
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: sdk.String("Shaun Osinski"),
                                            Value: sdk.String("corporis"),
                                        },
                                    },
                                    Path: sdk.String("explicabo"),
                                    Port: sdk.Int(750686),
                                },
                                InitialDelaySeconds: sdk.Int(315428),
                                PeriodSeconds: sdk.Int(607831),
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: sdk.Int(363711),
                                },
                                TimeoutSeconds: sdk.Int(325047),
                            },
                            Name: sdk.String("Brian Kessler"),
                            Ports: []shared.GoogleCloudRunV2ContainerPort{
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: sdk.Int(102044),
                                    Name: sdk.String("Mike Nicolas"),
                                },
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: sdk.Int(653108),
                                    Name: sdk.String("Francis Jerde"),
                                },
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: sdk.Int(244425),
                                    Name: sdk.String("Miss Eugene Hauck"),
                                },
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: sdk.Int(317202),
                                    Name: sdk.String("Angelica Dietrich"),
                                },
                            },
                            Resources: &shared.GoogleCloudRunV2ResourceRequirements{
                                CPUIdle: sdk.Bool(false),
                                Limits: map[string]string{
                                    "possimus": "aut",
                                    "quasi": "error",
                                    "temporibus": "laborum",
                                },
                                StartupCPUBoost: sdk.Bool(false),
                            },
                            StartupProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: sdk.Int(96098),
                                Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                    Port: sdk.Int(971945),
                                    Service: sdk.String("voluptatibus"),
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: sdk.String("Miss Irma Wolff"),
                                            Value: sdk.String("cum"),
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: sdk.String("Sharon Kiehn"),
                                            Value: sdk.String("dicta"),
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: sdk.String("Miss Valerie Kshlerin"),
                                            Value: sdk.String("accusamus"),
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: sdk.String("Elvira Bergnaum"),
                                            Value: sdk.String("molestias"),
                                        },
                                    },
                                    Path: sdk.String("excepturi"),
                                    Port: sdk.Int(865103),
                                },
                                InitialDelaySeconds: sdk.Int(265389),
                                PeriodSeconds: sdk.Int(508969),
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: sdk.Int(523248),
                                },
                                TimeoutSeconds: sdk.Int(916723),
                            },
                            VolumeMounts: []shared.GoogleCloudRunV2VolumeMount{
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: sdk.String("repudiandae"),
                                    Name: sdk.String("Patrick Ward"),
                                },
                            },
                            WorkingDir: sdk.String("consequatur"),
                        },
                        shared.GoogleCloudRunV2Container{
                            Args: []string{
                                "quibusdam",
                                "explicabo",
                                "deserunt",
                            },
                            Command: []string{
                                "quibusdam",
                                "labore",
                                "modi",
                            },
                            DependsOn: []string{
                                "aliquid",
                            },
                            Env: []shared.GoogleCloudRunV2EnvVar{
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: sdk.String("Christopher Cummerata"),
                                    Value: sdk.String("alias"),
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: sdk.String("fugit"),
                                            Version: sdk.String("dolorum"),
                                        },
                                    },
                                },
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: sdk.String("Eddie Prosacco"),
                                    Value: sdk.String("delectus"),
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: sdk.String("eum"),
                                            Version: sdk.String("non"),
                                        },
                                    },
                                },
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: sdk.String("Sergio Hyatt"),
                                    Value: sdk.String("sint"),
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: sdk.String("officia"),
                                            Version: sdk.String("dolor"),
                                        },
                                    },
                                },
                            },
                            Image: sdk.String("debitis"),
                            LivenessProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: sdk.Int(952749),
                                Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                    Port: sdk.Int(680056),
                                    Service: sdk.String("in"),
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: sdk.String("Mrs. Emilio Price"),
                                            Value: sdk.String("facere"),
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: sdk.String("Beth Padberg"),
                                            Value: sdk.String("occaecati"),
                                        },
                                    },
                                    Path: sdk.String("enim"),
                                    Port: sdk.Int(881736),
                                },
                                InitialDelaySeconds: sdk.Int(965417),
                                PeriodSeconds: sdk.Int(692532),
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: sdk.Int(588465),
                                },
                                TimeoutSeconds: sdk.Int(725255),
                            },
                            Name: sdk.String("Nelson Lesch"),
                            Ports: []shared.GoogleCloudRunV2ContainerPort{
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: sdk.Int(394869),
                                    Name: sdk.String("Ada Moen IV"),
                                },
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: sdk.Int(301575),
                                    Name: sdk.String("Alfonso Green"),
                                },
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: sdk.Int(618016),
                                    Name: sdk.String("Duane Thiel II"),
                                },
                            },
                            Resources: &shared.GoogleCloudRunV2ResourceRequirements{
                                CPUIdle: sdk.Bool(false),
                                Limits: map[string]string{
                                    "excepturi": "ullam",
                                },
                                StartupCPUBoost: sdk.Bool(false),
                            },
                            StartupProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: sdk.Int(590873),
                                Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                    Port: sdk.Int(551816),
                                    Service: sdk.String("sint"),
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: sdk.String("Abel O'Hara"),
                                            Value: sdk.String("dolor"),
                                        },
                                    },
                                    Path: sdk.String("necessitatibus"),
                                    Port: sdk.Int(141264),
                                },
                                InitialDelaySeconds: sdk.Int(367562),
                                PeriodSeconds: sdk.Int(97260),
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: sdk.Int(435865),
                                },
                                TimeoutSeconds: sdk.Int(984043),
                            },
                            VolumeMounts: []shared.GoogleCloudRunV2VolumeMount{
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: sdk.String("eius"),
                                    Name: sdk.String("Alfredo Prosacco Sr."),
                                },
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: sdk.String("repudiandae"),
                                    Name: sdk.String("Lola Koss"),
                                },
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: sdk.String("sed"),
                                    Name: sdk.String("Al Bashirian"),
                                },
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: sdk.String("natus"),
                                    Name: sdk.String("Joan Satterfield"),
                                },
                            },
                            WorkingDir: sdk.String("maxime"),
                        },
                        shared.GoogleCloudRunV2Container{
                            Args: []string{
                                "excepturi",
                                "odit",
                            },
                            Command: []string{
                                "accusantium",
                                "ab",
                            },
                            DependsOn: []string{
                                "quidem",
                                "ipsam",
                                "voluptate",
                                "autem",
                            },
                            Env: []shared.GoogleCloudRunV2EnvVar{
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: sdk.String("Meredith Hickle PhD"),
                                    Value: sdk.String("amet"),
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: sdk.String("aut"),
                                            Version: sdk.String("cumque"),
                                        },
                                    },
                                },
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: sdk.String("Mindy Renner"),
                                    Value: sdk.String("quis"),
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: sdk.String("totam"),
                                            Version: sdk.String("dignissimos"),
                                        },
                                    },
                                },
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: sdk.String("Beatrice Dooley Sr."),
                                    Value: sdk.String("minus"),
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: sdk.String("quam"),
                                            Version: sdk.String("dolor"),
                                        },
                                    },
                                },
                            },
                            Image: sdk.String("vero"),
                            LivenessProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: sdk.Int(345352),
                                Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                    Port: sdk.Int(944120),
                                    Service: sdk.String("recusandae"),
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: sdk.String("Freddie Bartoletti"),
                                            Value: sdk.String("blanditiis"),
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: sdk.String("Gary Mayert"),
                                            Value: sdk.String("asperiores"),
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: sdk.String("Edwin Morar"),
                                            Value: sdk.String("pariatur"),
                                        },
                                    },
                                    Path: sdk.String("provident"),
                                    Port: sdk.Int(750844),
                                },
                                InitialDelaySeconds: sdk.Int(730122),
                                PeriodSeconds: sdk.Int(964490),
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: sdk.Int(311945),
                                },
                                TimeoutSeconds: sdk.Int(554242),
                            },
                            Name: sdk.String("Florence Ebert"),
                            Ports: []shared.GoogleCloudRunV2ContainerPort{
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: sdk.Int(944373),
                                    Name: sdk.String("Felipe Klein"),
                                },
                            },
                            Resources: &shared.GoogleCloudRunV2ResourceRequirements{
                                CPUIdle: sdk.Bool(false),
                                Limits: map[string]string{
                                    "dolorum": "numquam",
                                },
                                StartupCPUBoost: sdk.Bool(false),
                            },
                            StartupProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: sdk.Int(85295),
                                Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                    Port: sdk.Int(58029),
                                    Service: sdk.String("ipsa"),
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: sdk.String("Bertha Thompson"),
                                            Value: sdk.String("voluptas"),
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: sdk.String("Dr. Craig Littel DDS"),
                                            Value: sdk.String("dolorum"),
                                        },
                                    },
                                    Path: sdk.String("iusto"),
                                    Port: sdk.Int(453697),
                                },
                                InitialDelaySeconds: sdk.Int(677082),
                                PeriodSeconds: sdk.Int(536579),
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: sdk.Int(607045),
                                },
                                TimeoutSeconds: sdk.Int(896672),
                            },
                            VolumeMounts: []shared.GoogleCloudRunV2VolumeMount{
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: sdk.String("asperiores"),
                                    Name: sdk.String("Edna Klocko"),
                                },
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: sdk.String("eius"),
                                    Name: sdk.String("Lisa Fay"),
                                },
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: sdk.String("ad"),
                                    Name: sdk.String("Sam Oberbrunner"),
                                },
                            },
                            WorkingDir: sdk.String("repellendus"),
                        },
                        shared.GoogleCloudRunV2Container{
                            Args: []string{
                                "similique",
                                "alias",
                                "at",
                            },
                            Command: []string{
                                "tempora",
                                "vel",
                            },
                            DependsOn: []string{
                                "officiis",
                                "qui",
                                "dolorum",
                                "a",
                            },
                            Env: []shared.GoogleCloudRunV2EnvVar{
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: sdk.String("Tyrone Emard"),
                                    Value: sdk.String("amet"),
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: sdk.String("tempore"),
                                            Version: sdk.String("accusamus"),
                                        },
                                    },
                                },
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: sdk.String("Darlene Effertz"),
                                    Value: sdk.String("nihil"),
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: sdk.String("sit"),
                                            Version: sdk.String("expedita"),
                                        },
                                    },
                                },
                            },
                            Image: sdk.String("neque"),
                            LivenessProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: sdk.Int(153694),
                                Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                    Port: sdk.Int(424685),
                                    Service: sdk.String("libero"),
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: sdk.String("Darryl Emard"),
                                            Value: sdk.String("cupiditate"),
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: sdk.String("Miss Jody Rogahn"),
                                            Value: sdk.String("incidunt"),
                                        },
                                    },
                                    Path: sdk.String("aspernatur"),
                                    Port: sdk.Int(174909),
                                },
                                InitialDelaySeconds: sdk.Int(716860),
                                PeriodSeconds: sdk.Int(704474),
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: sdk.Int(396060),
                                },
                                TimeoutSeconds: sdk.Int(463150),
                            },
                            Name: sdk.String("Marty Deckow"),
                            Ports: []shared.GoogleCloudRunV2ContainerPort{
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: sdk.Int(488056),
                                    Name: sdk.String("Marion Reichert DDS"),
                                },
                            },
                            Resources: &shared.GoogleCloudRunV2ResourceRequirements{
                                CPUIdle: sdk.Bool(false),
                                Limits: map[string]string{
                                    "nobis": "et",
                                    "saepe": "ipsum",
                                    "veritatis": "nobis",
                                },
                                StartupCPUBoost: sdk.Bool(false),
                            },
                            StartupProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: sdk.Int(552193),
                                Grpc: &shared.GoogleCloudRunV2GRPCAction{
                                    Port: sdk.Int(731694),
                                    Service: sdk.String("cupiditate"),
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: sdk.String("Mike Greenholt"),
                                            Value: sdk.String("dolorum"),
                                        },
                                    },
                                    Path: sdk.String("architecto"),
                                    Port: sdk.Int(63038),
                                },
                                InitialDelaySeconds: sdk.Int(16429),
                                PeriodSeconds: sdk.Int(555649),
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: sdk.Int(929530),
                                },
                                TimeoutSeconds: sdk.Int(9240),
                            },
                            VolumeMounts: []shared.GoogleCloudRunV2VolumeMount{
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: sdk.String("repellendus"),
                                    Name: sdk.String("Domingo Grady"),
                                },
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: sdk.String("qui"),
                                    Name: sdk.String("Marsha Kuhic"),
                                },
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: sdk.String("quisquam"),
                                    Name: sdk.String("Arturo Hauck"),
                                },
                            },
                            WorkingDir: sdk.String("voluptate"),
                        },
                    },
                    EncryptionKey: sdk.String("consectetur"),
                    ExecutionEnvironment: shared.GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnumExecutionEnvironmentGen2.ToPointer(),
                    MaxRetries: sdk.Int(949319),
                    ServiceAccount: sdk.String("dignissimos"),
                    Timeout: sdk.String("hic"),
                    Volumes: []shared.GoogleCloudRunV2Volume{
                        shared.GoogleCloudRunV2Volume{
                            CloudSQLInstance: &shared.GoogleCloudRunV2CloudSQLInstance{
                                Instances: []string{
                                    "odio",
                                    "similique",
                                    "facilis",
                                    "vero",
                                },
                            },
                            EmptyDir: &shared.GoogleCloudRunV2EmptyDirVolumeSource{
                                Medium: shared.GoogleCloudRunV2EmptyDirVolumeSourceMediumEnumMediumUnspecified.ToPointer(),
                                SizeLimit: sdk.String("dolore"),
                            },
                            Name: sdk.String("Gilberto Dickinson"),
                            Secret: &shared.GoogleCloudRunV2SecretVolumeSource{
                                DefaultMode: sdk.Int(13236),
                                Items: []shared.GoogleCloudRunV2VersionToPath{
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: sdk.Int(347233),
                                        Path: sdk.String("nulla"),
                                        Version: sdk.String("fugit"),
                                    },
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: sdk.Int(780427),
                                        Path: sdk.String("maiores"),
                                        Version: sdk.String("doloribus"),
                                    },
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: sdk.Int(478370),
                                        Path: sdk.String("eligendi"),
                                        Version: sdk.String("ducimus"),
                                    },
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: sdk.Int(4048),
                                        Path: sdk.String("officia"),
                                        Version: sdk.String("tempora"),
                                    },
                                },
                                Secret: sdk.String("ipsam"),
                            },
                        },
                        shared.GoogleCloudRunV2Volume{
                            CloudSQLInstance: &shared.GoogleCloudRunV2CloudSQLInstance{
                                Instances: []string{
                                    "aspernatur",
                                    "vel",
                                },
                            },
                            EmptyDir: &shared.GoogleCloudRunV2EmptyDirVolumeSource{
                                Medium: shared.GoogleCloudRunV2EmptyDirVolumeSourceMediumEnumMemory.ToPointer(),
                                SizeLimit: sdk.String("magnam"),
                            },
                            Name: sdk.String("Mrs. Vicki Langosh"),
                            Secret: &shared.GoogleCloudRunV2SecretVolumeSource{
                                DefaultMode: sdk.Int(97844),
                                Items: []shared.GoogleCloudRunV2VersionToPath{
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: sdk.Int(862192),
                                        Path: sdk.String("excepturi"),
                                        Version: sdk.String("voluptatibus"),
                                    },
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: sdk.Int(343605),
                                        Path: sdk.String("sapiente"),
                                        Version: sdk.String("quisquam"),
                                    },
                                },
                                Secret: sdk.String("saepe"),
                            },
                        },
                        shared.GoogleCloudRunV2Volume{
                            CloudSQLInstance: &shared.GoogleCloudRunV2CloudSQLInstance{
                                Instances: []string{
                                    "impedit",
                                    "corporis",
                                },
                            },
                            EmptyDir: &shared.GoogleCloudRunV2EmptyDirVolumeSource{
                                Medium: shared.GoogleCloudRunV2EmptyDirVolumeSourceMediumEnumMediumUnspecified.ToPointer(),
                                SizeLimit: sdk.String("aliquid"),
                            },
                            Name: sdk.String("Megan Jaskolski"),
                            Secret: &shared.GoogleCloudRunV2SecretVolumeSource{
                                DefaultMode: sdk.Int(926213),
                                Items: []shared.GoogleCloudRunV2VersionToPath{
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: sdk.Int(325310),
                                        Path: sdk.String("eaque"),
                                        Version: sdk.String("a"),
                                    },
                                },
                                Secret: sdk.String("libero"),
                            },
                        },
                    },
                    VpcAccess: &shared.GoogleCloudRunV2VpcAccess{
                        Connector: sdk.String("aut"),
                        Egress: shared.GoogleCloudRunV2VpcAccessEgressEnumVpcEgressUnspecified.ToPointer(),
                    },
                },
            },
            TerminalCondition: &shared.GoogleCloudRunV2Condition{
                ExecutionReason: shared.GoogleCloudRunV2ConditionExecutionReasonEnumNonZeroExitCode.ToPointer(),
                LastTransitionTime: sdk.String("impedit"),
                Message: sdk.String("aliquam"),
                Reason: shared.GoogleCloudRunV2ConditionReasonEnumRevisionFailed.ToPointer(),
                RevisionReason: shared.GoogleCloudRunV2ConditionRevisionReasonEnumHealthCheckSkipped.ToPointer(),
                Severity: shared.GoogleCloudRunV2ConditionSeverityEnumSeverityUnspecified.ToPointer(),
                State: shared.GoogleCloudRunV2ConditionStateEnumConditionPending.ToPointer(),
                Type: sdk.String("et"),
            },
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("placeat"),
        Fields: sdk.String("velit"),
        JobID: sdk.String("eum"),
        Key: sdk.String("autem"),
        OauthToken: sdk.String("nobis"),
        Parent: "quas",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("assumenda"),
        UploadType: sdk.String("nulla"),
        UploadProtocol: sdk.String("voluptas"),
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [RunProjectsLocationsJobsCreate](docs/projects/README.md#runprojectslocationsjobscreate) - Creates a Job.
* [RunProjectsLocationsJobsExecutionsList](docs/projects/README.md#runprojectslocationsjobsexecutionslist) - Lists Executions from a Job.
* [RunProjectsLocationsJobsExecutionsTasksList](docs/projects/README.md#runprojectslocationsjobsexecutionstaskslist) - Lists Tasks from an Execution of a Job.
* [RunProjectsLocationsJobsList](docs/projects/README.md#runprojectslocationsjobslist) - Lists Jobs.
* [RunProjectsLocationsJobsRun](docs/projects/README.md#runprojectslocationsjobsrun) - Triggers creation of a new Execution of this Job.
* [RunProjectsLocationsOperationsList](docs/projects/README.md#runprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [RunProjectsLocationsOperationsWait](docs/projects/README.md#runprojectslocationsoperationswait) - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* [RunProjectsLocationsServicesCreate](docs/projects/README.md#runprojectslocationsservicescreate) - Creates a new Service in a given project and location.
* [RunProjectsLocationsServicesGetIamPolicy](docs/projects/README.md#runprojectslocationsservicesgetiampolicy) - Gets the IAM Access Control policy currently in effect for the given Cloud Run Service. This result does not include any inherited policies.
* [RunProjectsLocationsServicesList](docs/projects/README.md#runprojectslocationsserviceslist) - Lists Services.
* [RunProjectsLocationsServicesPatch](docs/projects/README.md#runprojectslocationsservicespatch) - Updates a Service.
* [RunProjectsLocationsServicesRevisionsDelete](docs/projects/README.md#runprojectslocationsservicesrevisionsdelete) - Deletes a Revision.
* [RunProjectsLocationsServicesRevisionsGet](docs/projects/README.md#runprojectslocationsservicesrevisionsget) - Gets information about a Revision.
* [RunProjectsLocationsServicesRevisionsList](docs/projects/README.md#runprojectslocationsservicesrevisionslist) - Lists Revisions from a given Service, or from a given location.
* [RunProjectsLocationsServicesSetIamPolicy](docs/projects/README.md#runprojectslocationsservicessetiampolicy) - Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
* [RunProjectsLocationsServicesTestIamPermissions](docs/projects/README.md#runprojectslocationsservicestestiampermissions) - Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
