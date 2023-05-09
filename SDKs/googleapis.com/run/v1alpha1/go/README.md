# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/run/v1alpha1/go
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
    res, err := s.Namespaces.RunNamespacesJobsCreate(ctx, operations.RunNamespacesJobsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Job: &shared.Job{
            APIVersion: sdk.String("provident"),
            Kind: sdk.String("distinctio"),
            Metadata: &shared.ObjectMeta{
                Annotations: map[string]string{
                    "unde": "nulla",
                    "corrupti": "illum",
                    "vel": "error",
                    "deserunt": "suscipit",
                },
                ClusterName: sdk.String("iure"),
                CreationTimestamp: sdk.String("magnam"),
                DeletionGracePeriodSeconds: sdk.Int(891773),
                DeletionTimestamp: sdk.String("ipsa"),
                Finalizers: []string{
                    "tempora",
                    "suscipit",
                    "molestiae",
                    "minus",
                },
                GenerateName: sdk.String("placeat"),
                Generation: sdk.Int(528895),
                Labels: map[string]string{
                    "excepturi": "nisi",
                    "recusandae": "temporibus",
                },
                Name: sdk.String("Erica Bogisich III"),
                Namespace: sdk.String("repellendus"),
                OwnerReferences: []shared.OwnerReference{
                    shared.OwnerReference{
                        APIVersion: sdk.String("quo"),
                        BlockOwnerDeletion: sdk.Bool(false),
                        Controller: sdk.Bool(false),
                        Kind: sdk.String("odit"),
                        Name: sdk.String("Wilfred Wolff"),
                        UID: sdk.String("quod"),
                    },
                    shared.OwnerReference{
                        APIVersion: sdk.String("esse"),
                        BlockOwnerDeletion: sdk.Bool(false),
                        Controller: sdk.Bool(false),
                        Kind: sdk.String("totam"),
                        Name: sdk.String("Omar Carroll"),
                        UID: sdk.String("occaecati"),
                    },
                    shared.OwnerReference{
                        APIVersion: sdk.String("fugit"),
                        BlockOwnerDeletion: sdk.Bool(false),
                        Controller: sdk.Bool(false),
                        Kind: sdk.String("deleniti"),
                        Name: sdk.String("Ms. Earnest Lebsack"),
                        UID: sdk.String("modi"),
                    },
                    shared.OwnerReference{
                        APIVersion: sdk.String("qui"),
                        BlockOwnerDeletion: sdk.Bool(false),
                        Controller: sdk.Bool(false),
                        Kind: sdk.String("impedit"),
                        Name: sdk.String("Cory Emmerich"),
                        UID: sdk.String("perferendis"),
                    },
                },
                ResourceVersion: sdk.String("ad"),
                SelfLink: sdk.String("natus"),
                UID: sdk.String("sed"),
            },
            Spec: &shared.JobSpec{
                ActiveDeadlineSeconds: sdk.String("iste"),
                BackoffLimit: sdk.Int(222321),
                Completions: sdk.Int(616934),
                Parallelism: sdk.Int(386489),
                Template: &shared.InstanceTemplateSpec{
                    Spec: &shared.InstanceSpec{
                        ActiveDeadlineSeconds: sdk.String("hic"),
                        Containers: []shared.Container{
                            shared.Container{
                                Args: []string{
                                    "in",
                                    "corporis",
                                    "iste",
                                },
                                Command: []string{
                                    "saepe",
                                    "quidem",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: sdk.String("Lela Orn"),
                                        Value: sdk.String("dolores"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("dolorem"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Rose Rolfson"),
                                                },
                                                Name: sdk.String("Ms. Cathy Marks"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("doloribus"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Juan O'Hara"),
                                                },
                                                Name: sdk.String("Jaime O'Hara"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Nellie Frami"),
                                            },
                                            Name: sdk.String("Gloria Padberg"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("odit"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Jimmy Wiegand"),
                                            },
                                            Name: sdk.String("Richard Boyer"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Ryan Witting"),
                                            },
                                            Name: sdk.String("Miss Irma Wolff"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("cum"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Sharon Kiehn"),
                                            },
                                            Name: sdk.String("Stacy Gulgowski MD"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                },
                                Image: sdk.String("enim"),
                                ImagePullPolicy: sdk.String("accusamus"),
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "repudiandae",
                                            "quae",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(216822),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(692472),
                                        Service: sdk.String("molestias"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("excepturi"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Irma Ledner DVM"),
                                                Value: sdk.String("sint"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Patti Gottlieb MD"),
                                                Value: sdk.String("quibusdam"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Joanna Rau"),
                                                Value: sdk.String("modi"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Beth McGlynn Sr."),
                                                Value: sdk.String("assumenda"),
                                            },
                                        },
                                        Path: sdk.String("ipsam"),
                                        Scheme: sdk.String("alias"),
                                    },
                                    InitialDelaySeconds: sdk.Int(146441),
                                    PeriodSeconds: sdk.Int(677817),
                                    SuccessThreshold: sdk.Int(569618),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("tempora"),
                                        Port: sdk.Int(703737),
                                    },
                                    TimeoutSeconds: sdk.Int(735194),
                                },
                                Name: sdk.String("Lucia Kemmer"),
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(396098),
                                        Name: sdk.String("Terence Marquardt"),
                                        Protocol: sdk.String("debitis"),
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(952749),
                                        Name: sdk.String("Arnold Kirlin"),
                                        Protocol: sdk.String("rerum"),
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(116202),
                                        Name: sdk.String("Blanca Schulist"),
                                        Protocol: sdk.String("laborum"),
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "non",
                                            "occaecati",
                                            "enim",
                                            "accusamus",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(965417),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(692532),
                                        Service: sdk.String("provident"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("nam"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Jaime Will"),
                                                Value: sdk.String("nisi"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Ada Moen IV"),
                                                Value: sdk.String("magnam"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Alfonso Green"),
                                                Value: sdk.String("natus"),
                                            },
                                        },
                                        Path: sdk.String("nobis"),
                                        Scheme: sdk.String("eum"),
                                    },
                                    InitialDelaySeconds: sdk.Int(878453),
                                    PeriodSeconds: sdk.Int(135474),
                                    SuccessThreshold: sdk.Int(102863),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("magnam"),
                                        Port: sdk.Int(92373),
                                    },
                                    TimeoutSeconds: sdk.Int(569965),
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "provident": "quos",
                                        "sint": "accusantium",
                                    },
                                    Requests: map[string]string{
                                        "reiciendis": "mollitia",
                                        "ad": "eum",
                                        "dolor": "necessitatibus",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: sdk.Int(141264),
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "quasi",
                                            "iure",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(984043),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(891924),
                                        Service: sdk.String("eius"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("maxime"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Dr. Arnold Bradtke"),
                                                Value: sdk.String("expedita"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Kristie Spencer"),
                                                Value: sdk.String("pariatur"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Kathryn Lang"),
                                                Value: sdk.String("sunt"),
                                            },
                                        },
                                        Path: sdk.String("quo"),
                                        Scheme: sdk.String("illum"),
                                    },
                                    InitialDelaySeconds: sdk.Int(864934),
                                    PeriodSeconds: sdk.Int(807319),
                                    SuccessThreshold: sdk.Int(411397),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("excepturi"),
                                        Port: sdk.Int(139972),
                                    },
                                    TimeoutSeconds: sdk.Int(407183),
                                },
                                TerminationMessagePath: sdk.String("accusantium"),
                                TerminationMessagePolicy: sdk.String("ab"),
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: sdk.String("quidem"),
                                        Name: sdk.String("Colleen Johnston PhD"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("nemo"),
                                    },
                                    shared.VolumeMount{
                                        MountPath: sdk.String("voluptatibus"),
                                        Name: sdk.String("Miss Ginger Feeney"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("hic"),
                                    },
                                    shared.VolumeMount{
                                        MountPath: sdk.String("libero"),
                                        Name: sdk.String("Ernest Hayes"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("eaque"),
                                    },
                                    shared.VolumeMount{
                                        MountPath: sdk.String("quis"),
                                        Name: sdk.String("Ruby Auer"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("quam"),
                                    },
                                },
                                WorkingDir: sdk.String("dolor"),
                            },
                            shared.Container{
                                Args: []string{
                                    "nostrum",
                                    "hic",
                                    "recusandae",
                                    "omnis",
                                },
                                Command: []string{
                                    "perspiciatis",
                                    "voluptatem",
                                    "porro",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: sdk.String("Jeremiah Beatty"),
                                        Value: sdk.String("adipisci"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("asperiores"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Edwin Morar"),
                                                },
                                                Name: sdk.String("Rene Rolfson"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("quaerat"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Gene Effertz"),
                                                },
                                                Name: sdk.String("Tiffany Welch"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Johanna Farrell"),
                                            },
                                            Name: sdk.String("Melissa Bednar"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("quaerat"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Rickey Wolf"),
                                            },
                                            Name: sdk.String("Kay Bailey DDS"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Ted Kling"),
                                            },
                                            Name: sdk.String("Terence Rau"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("ipsum"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Alberta Ullrich"),
                                            },
                                            Name: sdk.String("Wendy Rosenbaum"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                },
                                Image: sdk.String("saepe"),
                                ImagePullPolicy: sdk.String("suscipit"),
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "provident",
                                            "minima",
                                            "repellendus",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(519711),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(628982),
                                        Service: sdk.String("alias"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("at"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Gina Schmeler"),
                                                Value: sdk.String("dolorum"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Cory Pfeffer"),
                                                Value: sdk.String("quisquam"),
                                            },
                                        },
                                        Path: sdk.String("tenetur"),
                                        Scheme: sdk.String("amet"),
                                    },
                                    InitialDelaySeconds: sdk.Int(730856),
                                    PeriodSeconds: sdk.Int(880298),
                                    SuccessThreshold: sdk.Int(253941),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("enim"),
                                        Port: sdk.Int(213312),
                                    },
                                    TimeoutSeconds: sdk.Int(957451),
                                },
                                Name: sdk.String("Christian Balistreri"),
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(424685),
                                        Name: sdk.String("Glen Oberbrunner"),
                                        Protocol: sdk.String("incidunt"),
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "cupiditate",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(807581),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(863856),
                                        Service: sdk.String("soluta"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("dicta"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Randall Cole"),
                                                Value: sdk.String("facilis"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Constance Mann"),
                                                Value: sdk.String("neque"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Mrs. Louise Kuhlman"),
                                                Value: sdk.String("hic"),
                                            },
                                        },
                                        Path: sdk.String("voluptatem"),
                                        Scheme: sdk.String("cumque"),
                                    },
                                    InitialDelaySeconds: sdk.Int(746994),
                                    PeriodSeconds: sdk.Int(748664),
                                    SuccessThreshold: sdk.Int(92596),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("saepe"),
                                        Port: sdk.Int(217450),
                                    },
                                    TimeoutSeconds: sdk.Int(83422),
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "quos": "tempore",
                                        "cupiditate": "aperiam",
                                        "delectus": "dolorem",
                                    },
                                    Requests: map[string]string{
                                        "labore": "adipisci",
                                        "dolorum": "architecto",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: sdk.Int(63038),
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "quas",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(929530),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(9240),
                                        Service: sdk.String("est"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("repellendus"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Alexander Prosacco"),
                                                Value: sdk.String("quae"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Darren McClure"),
                                                Value: sdk.String("vero"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Tim Erdman"),
                                                Value: sdk.String("consectetur"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Roman Kulas"),
                                                Value: sdk.String("quod"),
                                            },
                                        },
                                        Path: sdk.String("odio"),
                                        Scheme: sdk.String("similique"),
                                    },
                                    InitialDelaySeconds: sdk.Int(708548),
                                    PeriodSeconds: sdk.Int(874288),
                                    SuccessThreshold: sdk.Int(498140),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("dolore"),
                                        Port: sdk.Int(844550),
                                    },
                                    TimeoutSeconds: sdk.Int(848944),
                                },
                                TerminationMessagePath: sdk.String("sequi"),
                                TerminationMessagePolicy: sdk.String("natus"),
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: sdk.String("aut"),
                                        Name: sdk.String("Greg Stoltenberg"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("maiores"),
                                    },
                                    shared.VolumeMount{
                                        MountPath: sdk.String("doloribus"),
                                        Name: sdk.String("Miss Vicky Kuphal"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("ipsam"),
                                    },
                                    shared.VolumeMount{
                                        MountPath: sdk.String("ea"),
                                        Name: sdk.String("Jessie Schuster"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("ex"),
                                    },
                                    shared.VolumeMount{
                                        MountPath: sdk.String("laudantium"),
                                        Name: sdk.String("Ms. Cindy Wuckert"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("excepturi"),
                                    },
                                },
                                WorkingDir: sdk.String("voluptatibus"),
                            },
                            shared.Container{
                                Args: []string{
                                    "sapiente",
                                    "quisquam",
                                },
                                Command: []string{
                                    "ea",
                                    "impedit",
                                    "corporis",
                                    "veniam",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: sdk.String("Megan Jaskolski"),
                                        Value: sdk.String("recusandae"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("aspernatur"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Shirley Wilderman Jr."),
                                                },
                                                Name: sdk.String("Myron Haag"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("inventore"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Janet Pagac"),
                                                },
                                                Name: sdk.String("Agnes Johnston"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: sdk.String("Drew Hoeger I"),
                                        Value: sdk.String("numquam"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("explicabo"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Jose Kreiger"),
                                                },
                                                Name: sdk.String("Joy Klocko"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("reprehenderit"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Nicolas Graham"),
                                                },
                                                Name: sdk.String("Alan Lang Jr."),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Luis Satterfield"),
                                            },
                                            Name: sdk.String("Herbert Daugherty V"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("consequatur"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Henrietta Hilpert"),
                                            },
                                            Name: sdk.String("Miss Claude Walsh"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Debra Kovacek"),
                                            },
                                            Name: sdk.String("Courtney Mayert"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("dolores"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Fernando Barton"),
                                            },
                                            Name: sdk.String("Dwayne Cronin"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Hubert Gottlieb"),
                                            },
                                            Name: sdk.String("Sue Corkery"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("ratione"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Kerry Mayert IV"),
                                            },
                                            Name: sdk.String("Sheldon Boehm"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                },
                                Image: sdk.String("nam"),
                                ImagePullPolicy: sdk.String("vero"),
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "quasi",
                                            "saepe",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(426306),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(690025),
                                        Service: sdk.String("molestiae"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("rerum"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Miss Verna Roob"),
                                                Value: sdk.String("adipisci"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Carlos Altenwerth"),
                                                Value: sdk.String("sapiente"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Joy Labadie"),
                                                Value: sdk.String("nulla"),
                                            },
                                        },
                                        Path: sdk.String("quas"),
                                        Scheme: sdk.String("esse"),
                                    },
                                    InitialDelaySeconds: sdk.Int(97468),
                                    PeriodSeconds: sdk.Int(951875),
                                    SuccessThreshold: sdk.Int(621679),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("sint"),
                                        Port: sdk.Int(863023),
                                    },
                                    TimeoutSeconds: sdk.Int(820767),
                                },
                                Name: sdk.String("Laverne Zemlak Sr."),
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(628899),
                                        Name: sdk.String("Dr. Gene Wiegand"),
                                        Protocol: sdk.String("in"),
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "libero",
                                            "illum",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(742238),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(33304),
                                        Service: sdk.String("aliquam"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("sapiente"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Delores Hermiston IV"),
                                                Value: sdk.String("qui"),
                                            },
                                        },
                                        Path: sdk.String("quibusdam"),
                                        Scheme: sdk.String("ex"),
                                    },
                                    InitialDelaySeconds: sdk.Int(536275),
                                    PeriodSeconds: sdk.Int(929292),
                                    SuccessThreshold: sdk.Int(680270),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("architecto"),
                                        Port: sdk.Int(609178),
                                    },
                                    TimeoutSeconds: sdk.Int(945302),
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "at": "et",
                                    },
                                    Requests: map[string]string{
                                        "ipsa": "minima",
                                        "veritatis": "consectetur",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: sdk.Int(237173),
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "temporibus",
                                            "accusantium",
                                            "rem",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(15606),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(513075),
                                        Service: sdk.String("eum"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("mollitia"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Kyle Bartoletti"),
                                                Value: sdk.String("numquam"),
                                            },
                                        },
                                        Path: sdk.String("impedit"),
                                        Scheme: sdk.String("explicabo"),
                                    },
                                    InitialDelaySeconds: sdk.Int(376226),
                                    PeriodSeconds: sdk.Int(12036),
                                    SuccessThreshold: sdk.Int(491025),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("dicta"),
                                        Port: sdk.Int(981640),
                                    },
                                    TimeoutSeconds: sdk.Int(618480),
                                },
                                TerminationMessagePath: sdk.String("velit"),
                                TerminationMessagePolicy: sdk.String("voluptatibus"),
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: sdk.String("asperiores"),
                                        Name: sdk.String("Eileen Hagenes"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("officia"),
                                    },
                                    shared.VolumeMount{
                                        MountPath: sdk.String("maxime"),
                                        Name: sdk.String("Blanche Yundt II"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("porro"),
                                    },
                                },
                                WorkingDir: sdk.String("quod"),
                            },
                            shared.Container{
                                Args: []string{
                                    "ab",
                                    "adipisci",
                                },
                                Command: []string{
                                    "id",
                                    "suscipit",
                                    "velit",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: sdk.String("Clay Larson"),
                                        Value: sdk.String("ducimus"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("quos"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Clara Senger"),
                                                },
                                                Name: sdk.String("Pearl Hessel"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("nemo"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Gilbert Bayer"),
                                                },
                                                Name: sdk.String("Annette Wehner"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: sdk.String("Ricardo Wisozk"),
                                        Value: sdk.String("necessitatibus"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("dolore"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Ollie Flatley"),
                                                },
                                                Name: sdk.String("Courtney Wiegand"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("corporis"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Rick Beer"),
                                                },
                                                Name: sdk.String("Sophia Murray"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: sdk.String("Melanie Hirthe"),
                                        Value: sdk.String("dolorum"),
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: sdk.String("adipisci"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Ernest Labadie"),
                                                },
                                                Name: sdk.String("Rochelle Smitham"),
                                                Optional: sdk.Bool(false),
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: sdk.String("cum"),
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: sdk.String("Morris Weissnat"),
                                                },
                                                Name: sdk.String("Dewey Leannon"),
                                                Optional: sdk.Bool(false),
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Luz Cormier"),
                                            },
                                            Name: sdk.String("Johnathan Klein V"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("dolore"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Aaron King"),
                                            },
                                            Name: sdk.String("Mrs. Yolanda Mitchell"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Ms. Gregory Wisoky"),
                                            },
                                            Name: sdk.String("Tammy Medhurst"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("ipsum"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Kristina Lueilwitz"),
                                            },
                                            Name: sdk.String("Allison Wisozk I"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Clayton Quitzon"),
                                            },
                                            Name: sdk.String("Miss Alyssa Leffler"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("veniam"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Sophie Wisoky"),
                                            },
                                            Name: sdk.String("Gwen Fritsch"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Jack Langworth"),
                                            },
                                            Name: sdk.String("Lester Parisian"),
                                            Optional: sdk.Bool(false),
                                        },
                                        Prefix: sdk.String("hic"),
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: sdk.String("Darrel Doyle"),
                                            },
                                            Name: sdk.String("Lorenzo Lowe"),
                                            Optional: sdk.Bool(false),
                                        },
                                    },
                                },
                                Image: sdk.String("atque"),
                                ImagePullPolicy: sdk.String("fugit"),
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "fugiat",
                                            "voluptatem",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(635057),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(710337),
                                        Service: sdk.String("magnam"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("consequatur"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Karen Lehner"),
                                                Value: sdk.String("corporis"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Mattie Jaskolski III"),
                                                Value: sdk.String("nostrum"),
                                            },
                                        },
                                        Path: sdk.String("saepe"),
                                        Scheme: sdk.String("error"),
                                    },
                                    InitialDelaySeconds: sdk.Int(8511),
                                    PeriodSeconds: sdk.Int(279068),
                                    SuccessThreshold: sdk.Int(968865),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("dolorem"),
                                        Port: sdk.Int(690894),
                                    },
                                    TimeoutSeconds: sdk.Int(115703),
                                },
                                Name: sdk.String("Violet Greenfelder"),
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(724148),
                                        Name: sdk.String("Brent Abernathy"),
                                        Protocol: sdk.String("voluptate"),
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(600392),
                                        Name: sdk.String("Rene Skiles"),
                                        Protocol: sdk.String("perferendis"),
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: sdk.Int(667285),
                                        Name: sdk.String("Ron Schulist"),
                                        Protocol: sdk.String("mollitia"),
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "voluptatem",
                                            "quisquam",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(919532),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(97243),
                                        Service: sdk.String("atque"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("reprehenderit"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Sam Powlowski IV"),
                                                Value: sdk.String("amet"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Nathaniel Lindgren"),
                                                Value: sdk.String("officiis"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Wendell Harber"),
                                                Value: sdk.String("maiores"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Wilfred Mueller"),
                                                Value: sdk.String("repudiandae"),
                                            },
                                        },
                                        Path: sdk.String("atque"),
                                        Scheme: sdk.String("atque"),
                                    },
                                    InitialDelaySeconds: sdk.Int(120919),
                                    PeriodSeconds: sdk.Int(923306),
                                    SuccessThreshold: sdk.Int(680697),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("repellendus"),
                                        Port: sdk.Int(287119),
                                    },
                                    TimeoutSeconds: sdk.Int(968287),
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "repudiandae": "dicta",
                                    },
                                    Requests: map[string]string{
                                        "beatae": "dolores",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: sdk.Int(316488),
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "velit",
                                            "a",
                                        },
                                    },
                                    FailureThreshold: sdk.Int(562783),
                                    Grpc: &shared.GRPCAction{
                                        Port: sdk.Int(300029),
                                        Service: sdk.String("saepe"),
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: sdk.String("consequuntur"),
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: sdk.String("Freddie King"),
                                                Value: sdk.String("occaecati"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Beverly Olson"),
                                                Value: sdk.String("error"),
                                            },
                                            shared.HTTPHeader{
                                                Name: sdk.String("Ana Predovic"),
                                                Value: sdk.String("vero"),
                                            },
                                        },
                                        Path: sdk.String("doloremque"),
                                        Scheme: sdk.String("iure"),
                                    },
                                    InitialDelaySeconds: sdk.Int(59944),
                                    PeriodSeconds: sdk.Int(517612),
                                    SuccessThreshold: sdk.Int(61078),
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: sdk.String("molestiae"),
                                        Port: sdk.Int(907733),
                                    },
                                    TimeoutSeconds: sdk.Int(184362),
                                },
                                TerminationMessagePath: sdk.String("cum"),
                                TerminationMessagePolicy: sdk.String("iure"),
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: sdk.String("ratione"),
                                        Name: sdk.String("Kelvin Lehner"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("ad"),
                                    },
                                    shared.VolumeMount{
                                        MountPath: sdk.String("repellat"),
                                        Name: sdk.String("Renee Metz"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("voluptas"),
                                    },
                                    shared.VolumeMount{
                                        MountPath: sdk.String("alias"),
                                        Name: sdk.String("Dominick Daniel"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("dolore"),
                                    },
                                    shared.VolumeMount{
                                        MountPath: sdk.String("dolorum"),
                                        Name: sdk.String("Amy Walsh"),
                                        ReadOnly: sdk.Bool(false),
                                        SubPath: sdk.String("molestiae"),
                                    },
                                },
                                WorkingDir: sdk.String("ex"),
                            },
                        },
                        RestartPolicy: sdk.String("ut"),
                        ServiceAccountName: sdk.String("culpa"),
                        TerminationGracePeriodSeconds: sdk.String("adipisci"),
                        Volumes: []shared.Volume{
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: sdk.Int(514513),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("nemo"),
                                            Mode: sdk.Int(928219),
                                            Path: sdk.String("esse"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("provident"),
                                            Mode: sdk.Int(337477),
                                            Path: sdk.String("eum"),
                                        },
                                    },
                                    Name: sdk.String("Terrence Collier MD"),
                                    Optional: sdk.Bool(false),
                                },
                                Name: sdk.String("Angie McLaughlin"),
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: sdk.Int(402767),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("accusantium"),
                                            Mode: sdk.Int(999278),
                                            Path: sdk.String("doloribus"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("ullam"),
                                            Mode: sdk.Int(448143),
                                            Path: sdk.String("nam"),
                                        },
                                    },
                                    Optional: sdk.Bool(false),
                                    SecretName: sdk.String("earum"),
                                },
                            },
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: sdk.Int(637583),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("placeat"),
                                            Mode: sdk.Int(266697),
                                            Path: sdk.String("voluptatibus"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("molestias"),
                                            Mode: sdk.Int(889794),
                                            Path: sdk.String("sapiente"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("cumque"),
                                            Mode: sdk.Int(113486),
                                            Path: sdk.String("rerum"),
                                        },
                                    },
                                    Name: sdk.String("Regina Bode"),
                                    Optional: sdk.Bool(false),
                                },
                                Name: sdk.String("Lisa Flatley"),
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: sdk.Int(260628),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("at"),
                                            Mode: sdk.Int(773084),
                                            Path: sdk.String("eos"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("sapiente"),
                                            Mode: sdk.Int(433279),
                                            Path: sdk.String("dicta"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("minima"),
                                            Mode: sdk.Int(107004),
                                            Path: sdk.String("cupiditate"),
                                        },
                                    },
                                    Optional: sdk.Bool(false),
                                    SecretName: sdk.String("provident"),
                                },
                            },
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: sdk.Int(936469),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("hic"),
                                            Mode: sdk.Int(848151),
                                            Path: sdk.String("eaque"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("earum"),
                                            Mode: sdk.Int(596211),
                                            Path: sdk.String("maiores"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("debitis"),
                                            Mode: sdk.Int(399802),
                                            Path: sdk.String("porro"),
                                        },
                                    },
                                    Name: sdk.String("Connie Corkery"),
                                    Optional: sdk.Bool(false),
                                },
                                Name: sdk.String("Lynda Tromp Sr."),
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: sdk.Int(90233),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("natus"),
                                            Mode: sdk.Int(581082),
                                            Path: sdk.String("suscipit"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("adipisci"),
                                            Mode: sdk.Int(96562),
                                            Path: sdk.String("magni"),
                                        },
                                    },
                                    Optional: sdk.Bool(false),
                                    SecretName: sdk.String("doloribus"),
                                },
                            },
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: sdk.Int(859581),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("ipsa"),
                                            Mode: sdk.Int(271113),
                                            Path: sdk.String("nihil"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("molestiae"),
                                            Mode: sdk.Int(115834),
                                            Path: sdk.String("iusto"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("esse"),
                                            Mode: sdk.Int(508390),
                                            Path: sdk.String("maiores"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("reiciendis"),
                                            Mode: sdk.Int(423706),
                                            Path: sdk.String("architecto"),
                                        },
                                    },
                                    Name: sdk.String("Brian Carroll"),
                                    Optional: sdk.Bool(false),
                                },
                                Name: sdk.String("Carla Feil MD"),
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: sdk.Int(123844),
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: sdk.String("fugiat"),
                                            Mode: sdk.Int(713767),
                                            Path: sdk.String("aliquid"),
                                        },
                                        shared.KeyToPath{
                                            Key: sdk.String("officia"),
                                            Mode: sdk.Int(381397),
                                            Path: sdk.String("aliquid"),
                                        },
                                    },
                                    Optional: sdk.Bool(false),
                                    SecretName: sdk.String("perferendis"),
                                },
                            },
                        },
                    },
                },
                TTLSecondsAfterFinished: sdk.Int(431760),
            },
            Status: &shared.JobStatus{
                Active: sdk.Int(374753),
                CompletionTime: sdk.String("iste"),
                Conditions: []shared.JobCondition{
                    shared.JobCondition{
                        LastTransitionTime: sdk.String("ab"),
                        Message: sdk.String("error"),
                        Reason: sdk.String("possimus"),
                        Severity: sdk.String("voluptates"),
                        Status: sdk.String("mollitia"),
                        Type: sdk.String("laborum"),
                    },
                    shared.JobCondition{
                        LastTransitionTime: sdk.String("libero"),
                        Message: sdk.String("ad"),
                        Reason: sdk.String("deleniti"),
                        Severity: sdk.String("enim"),
                        Status: sdk.String("vitae"),
                        Type: sdk.String("repellendus"),
                    },
                    shared.JobCondition{
                        LastTransitionTime: sdk.String("ex"),
                        Message: sdk.String("quo"),
                        Reason: sdk.String("ex"),
                        Severity: sdk.String("ut"),
                        Status: sdk.String("ad"),
                        Type: sdk.String("expedita"),
                    },
                },
                Failed: sdk.Int(29950),
                ImageDigest: sdk.String("molestias"),
                Instances: []shared.InstanceStatus{
                    shared.InstanceStatus{
                        CompletionTime: sdk.String("aliquid"),
                        Failed: sdk.Int(109784),
                        Index: sdk.Int(530860),
                        LastAttemptResult: &shared.InstanceAttemptResult{
                            ExitCode: sdk.Int(606308),
                            Status: &shared.GoogleRPCStatus{
                                Code: sdk.Int(85233),
                                Details: []map[string]interface{}{
                                    map[string]interface{}{
                                        "culpa": "voluptatem",
                                        "sapiente": "officiis",
                                        "architecto": "fuga",
                                    },
                                    map[string]interface{}{
                                        "debitis": "voluptatem",
                                        "alias": "deleniti",
                                        "earum": "ex",
                                        "sapiente": "rem",
                                    },
                                    map[string]interface{}{
                                        "nemo": "asperiores",
                                        "ratione": "ullam",
                                        "perferendis": "illum",
                                        "totam": "impedit",
                                    },
                                },
                                Message: sdk.String("quibusdam"),
                            },
                        },
                        LastExitCode: sdk.Int(720528),
                        Restarted: sdk.Int(373216),
                        StartTime: sdk.String("culpa"),
                        Succeeded: sdk.Int(222864),
                    },
                    shared.InstanceStatus{
                        CompletionTime: sdk.String("aliquam"),
                        Failed: sdk.Int(80532),
                        Index: sdk.Int(537279),
                        LastAttemptResult: &shared.InstanceAttemptResult{
                            ExitCode: sdk.Int(85311),
                            Status: &shared.GoogleRPCStatus{
                                Code: sdk.Int(274575),
                                Details: []map[string]interface{}{
                                    map[string]interface{}{
                                        "architecto": "sit",
                                    },
                                },
                                Message: sdk.String("modi"),
                            },
                        },
                        LastExitCode: sdk.Int(144286),
                        Restarted: sdk.Int(66149),
                        StartTime: sdk.String("laudantium"),
                        Succeeded: sdk.Int(65604),
                    },
                    shared.InstanceStatus{
                        CompletionTime: sdk.String("dolor"),
                        Failed: sdk.Int(856277),
                        Index: sdk.Int(369490),
                        LastAttemptResult: &shared.InstanceAttemptResult{
                            ExitCode: sdk.Int(162120),
                            Status: &shared.GoogleRPCStatus{
                                Code: sdk.Int(55107),
                                Details: []map[string]interface{}{
                                    map[string]interface{}{
                                        "impedit": "officiis",
                                        "esse": "necessitatibus",
                                        "sed": "veniam",
                                        "nesciunt": "expedita",
                                    },
                                    map[string]interface{}{
                                        "vel": "voluptatum",
                                        "magnam": "exercitationem",
                                    },
                                    map[string]interface{}{
                                        "porro": "autem",
                                    },
                                },
                                Message: sdk.String("nobis"),
                            },
                        },
                        LastExitCode: sdk.Int(388319),
                        Restarted: sdk.Int(927212),
                        StartTime: sdk.String("consequuntur"),
                        Succeeded: sdk.Int(28952),
                    },
                },
                ObservedGeneration: sdk.Int(350207),
                StartTime: sdk.String("necessitatibus"),
                Succeeded: sdk.Int(95619),
            },
        },
        AccessToken: sdk.String("nisi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vero"),
        Fields: sdk.String("est"),
        Key: sdk.String("harum"),
        OauthToken: sdk.String("sequi"),
        Parent: "doloribus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repudiandae"),
        UploadType: sdk.String("optio"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.RunNamespacesJobsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Namespaces](docs/namespaces/README.md)

* [RunNamespacesJobsCreate](docs/namespaces/README.md#runnamespacesjobscreate) - Create a job.
* [RunNamespacesJobsDelete](docs/namespaces/README.md#runnamespacesjobsdelete) - Delete a job.
* [RunNamespacesJobsGet](docs/namespaces/README.md#runnamespacesjobsget) - Get information about a job.
* [RunNamespacesJobsList](docs/namespaces/README.md#runnamespacesjobslist) - List jobs.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
