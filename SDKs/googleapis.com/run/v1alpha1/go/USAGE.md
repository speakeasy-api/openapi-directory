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

    req := operations.RunNamespacesJobsCreateRequest{
        DollarXgafv: "2",
        Job: &shared.Job{
            APIVersion: "provident",
            Kind: "distinctio",
            Metadata: &shared.ObjectMeta{
                Annotations: map[string]string{
                    "unde": "nulla",
                    "corrupti": "illum",
                    "vel": "error",
                    "deserunt": "suscipit",
                },
                ClusterName: "iure",
                CreationTimestamp: "magnam",
                DeletionGracePeriodSeconds: 891773,
                DeletionTimestamp: "ipsa",
                Finalizers: []string{
                    "tempora",
                    "suscipit",
                    "molestiae",
                    "minus",
                },
                GenerateName: "placeat",
                Generation: 528895,
                Labels: map[string]string{
                    "excepturi": "nisi",
                    "recusandae": "temporibus",
                },
                Name: "ab",
                Namespace: "quis",
                OwnerReferences: []shared.OwnerReference{
                    shared.OwnerReference{
                        APIVersion: "deserunt",
                        BlockOwnerDeletion: false,
                        Controller: false,
                        Kind: "perferendis",
                        Name: "ipsam",
                        UID: "repellendus",
                    },
                },
                ResourceVersion: "sapiente",
                SelfLink: "quo",
                UID: "odit",
            },
            Spec: &shared.JobSpec{
                ActiveDeadlineSeconds: "at",
                BackoffLimit: 870088,
                Completions: 978619,
                Parallelism: 473608,
                Template: &shared.InstanceTemplateSpec{
                    Spec: &shared.InstanceSpec{
                        ActiveDeadlineSeconds: "quod",
                        Containers: []shared.Container{
                            shared.Container{
                                Args: []string{
                                    "totam",
                                    "porro",
                                },
                                Command: []string{
                                    "dicta",
                                    "nam",
                                    "officia",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: "fugit",
                                        Value: "deleniti",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "hic",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "optio",
                                                },
                                                Name: "totam",
                                                Optional: false,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "beatae",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "commodi",
                                                },
                                                Name: "molestiae",
                                                Optional: false,
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: "modi",
                                        Value: "qui",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "impedit",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "cum",
                                                },
                                                Name: "esse",
                                                Optional: false,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "ipsum",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "excepturi",
                                                },
                                                Name: "aspernatur",
                                                Optional: false,
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: "perferendis",
                                        Value: "ad",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "natus",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "sed",
                                                },
                                                Name: "iste",
                                                Optional: false,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "dolor",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "natus",
                                                },
                                                Name: "laboriosam",
                                                Optional: false,
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "saepe",
                                            },
                                            Name: "fuga",
                                            Optional: false,
                                        },
                                        Prefix: "in",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "corporis",
                                            },
                                            Name: "iste",
                                            Optional: false,
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "iure",
                                            },
                                            Name: "saepe",
                                            Optional: false,
                                        },
                                        Prefix: "quidem",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "architecto",
                                            },
                                            Name: "ipsa",
                                            Optional: false,
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "reiciendis",
                                            },
                                            Name: "est",
                                            Optional: false,
                                        },
                                        Prefix: "mollitia",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "laborum",
                                            },
                                            Name: "dolores",
                                            Optional: false,
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "dolorem",
                                            },
                                            Name: "corporis",
                                            Optional: false,
                                        },
                                        Prefix: "explicabo",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "nobis",
                                            },
                                            Name: "enim",
                                            Optional: false,
                                        },
                                    },
                                },
                                Image: "omnis",
                                ImagePullPolicy: "nemo",
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "excepturi",
                                            "accusantium",
                                        },
                                    },
                                    FailureThreshold: 438601,
                                    Grpc: &shared.GRPCAction{
                                        Port: 634274,
                                        Service: "doloribus",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "sapiente",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "mollitia",
                                                Value: "dolorem",
                                            },
                                        },
                                        Path: "culpa",
                                        Scheme: "consequuntur",
                                    },
                                    InitialDelaySeconds: 995300,
                                    PeriodSeconds: 653108,
                                    SuccessThreshold: 581850,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "numquam",
                                        Port: 414369,
                                    },
                                    TimeoutSeconds: 466311,
                                },
                                Name: "molestiae",
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: 623510,
                                        Name: "quia",
                                        Protocol: "quis",
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "laborum",
                                        },
                                    },
                                    FailureThreshold: 656330,
                                    Grpc: &shared.GRPCAction{
                                        Port: 317202,
                                        Service: "odit",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "quo",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "tenetur",
                                                Value: "ipsam",
                                            },
                                        },
                                        Path: "id",
                                        Scheme: "possimus",
                                    },
                                    InitialDelaySeconds: 13571,
                                    PeriodSeconds: 97101,
                                    SuccessThreshold: 622846,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "temporibus",
                                        Port: 673660,
                                    },
                                    TimeoutSeconds: 96098,
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "voluptatibus": "vero",
                                        "nihil": "praesentium",
                                        "voluptatibus": "ipsa",
                                        "omnis": "voluptate",
                                    },
                                    Requests: map[string]string{
                                        "perferendis": "doloremque",
                                        "reprehenderit": "ut",
                                        "maiores": "dicta",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: 359444,
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "iusto",
                                            "dicta",
                                        },
                                    },
                                    FailureThreshold: 688661,
                                    Grpc: &shared.GRPCAction{
                                        Port: 317983,
                                        Service: "accusamus",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "commodi",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "quae",
                                                Value: "ipsum",
                                            },
                                            shared.HTTPHeader{
                                                Name: "quidem",
                                                Value: "molestias",
                                            },
                                            shared.HTTPHeader{
                                                Name: "excepturi",
                                                Value: "pariatur",
                                            },
                                            shared.HTTPHeader{
                                                Name: "modi",
                                                Value: "praesentium",
                                            },
                                        },
                                        Path: "rem",
                                        Scheme: "voluptates",
                                    },
                                    InitialDelaySeconds: 93940,
                                    PeriodSeconds: 921158,
                                    SuccessThreshold: 575947,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "veritatis",
                                        Port: 929297,
                                    },
                                    TimeoutSeconds: 277718,
                                },
                                TerminationMessagePath: "enim",
                                TerminationMessagePolicy: "consequatur",
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: "quibusdam",
                                        Name: "explicabo",
                                        ReadOnly: false,
                                        SubPath: "deserunt",
                                    },
                                    shared.VolumeMount{
                                        MountPath: "distinctio",
                                        Name: "quibusdam",
                                        ReadOnly: false,
                                        SubPath: "labore",
                                    },
                                    shared.VolumeMount{
                                        MountPath: "modi",
                                        Name: "qui",
                                        ReadOnly: false,
                                        SubPath: "aliquid",
                                    },
                                },
                                WorkingDir: "cupiditate",
                            },
                            shared.Container{
                                Args: []string{
                                    "perferendis",
                                    "magni",
                                    "assumenda",
                                },
                                Command: []string{
                                    "alias",
                                    "fugit",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: "excepturi",
                                        Value: "tempora",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "facilis",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "tempore",
                                                },
                                                Name: "labore",
                                                Optional: false,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "delectus",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "eum",
                                                },
                                                Name: "non",
                                                Optional: false,
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: "eligendi",
                                        Value: "sint",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "aliquid",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "provident",
                                                },
                                                Name: "necessitatibus",
                                                Optional: false,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "sint",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "officia",
                                                },
                                                Name: "dolor",
                                                Optional: false,
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: "debitis",
                                        Value: "a",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "dolorum",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "in",
                                                },
                                                Name: "in",
                                                Optional: false,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "illum",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "maiores",
                                                },
                                                Name: "rerum",
                                                Optional: false,
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "magnam",
                                            },
                                            Name: "cumque",
                                            Optional: false,
                                        },
                                        Prefix: "facere",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "ea",
                                            },
                                            Name: "aliquid",
                                            Optional: false,
                                        },
                                    },
                                },
                                Image: "laborum",
                                ImagePullPolicy: "accusamus",
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "occaecati",
                                        },
                                    },
                                    FailureThreshold: 313218,
                                    Grpc: &shared.GRPCAction{
                                        Port: 881736,
                                        Service: "delectus",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "quidem",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "nam",
                                                Value: "id",
                                            },
                                            shared.HTTPHeader{
                                                Name: "blanditiis",
                                                Value: "deleniti",
                                            },
                                            shared.HTTPHeader{
                                                Name: "sapiente",
                                                Value: "amet",
                                            },
                                        },
                                        Path: "deserunt",
                                        Scheme: "nisi",
                                    },
                                    InitialDelaySeconds: 423855,
                                    PeriodSeconds: 618809,
                                    SuccessThreshold: 606393,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "molestiae",
                                        Port: 19193,
                                    },
                                    TimeoutSeconds: 470132,
                                },
                                Name: "magnam",
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: 660174,
                                        Name: "labore",
                                        Protocol: "labore",
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: 383462,
                                        Name: "natus",
                                        Protocol: "nobis",
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: 428769,
                                        Name: "vero",
                                        Protocol: "aspernatur",
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "magnam",
                                        },
                                    },
                                    FailureThreshold: 92373,
                                    Grpc: &shared.GRPCAction{
                                        Port: 569965,
                                        Service: "ullam",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "provident",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "sint",
                                                Value: "accusantium",
                                            },
                                            shared.HTTPHeader{
                                                Name: "mollitia",
                                                Value: "reiciendis",
                                            },
                                            shared.HTTPHeader{
                                                Name: "mollitia",
                                                Value: "ad",
                                            },
                                        },
                                        Path: "eum",
                                        Scheme: "dolor",
                                    },
                                    InitialDelaySeconds: 896547,
                                    PeriodSeconds: 141264,
                                    SuccessThreshold: 367562,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "quasi",
                                        Port: 435865,
                                    },
                                    TimeoutSeconds: 984043,
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "eius": "maxime",
                                        "deleniti": "facilis",
                                        "in": "architecto",
                                        "architecto": "repudiandae",
                                    },
                                    Requests: map[string]string{
                                        "expedita": "nihil",
                                        "repellat": "quibusdam",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: 149448,
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "pariatur",
                                            "accusantium",
                                            "consequuntur",
                                            "praesentium",
                                        },
                                    },
                                    FailureThreshold: 615560,
                                    Grpc: &shared.GRPCAction{
                                        Port: 166847,
                                        Service: "sunt",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "quo",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "pariatur",
                                                Value: "maxime",
                                            },
                                            shared.HTTPHeader{
                                                Name: "ea",
                                                Value: "excepturi",
                                            },
                                            shared.HTTPHeader{
                                                Name: "odit",
                                                Value: "ea",
                                            },
                                            shared.HTTPHeader{
                                                Name: "accusantium",
                                                Value: "ab",
                                            },
                                        },
                                        Path: "maiores",
                                        Scheme: "quidem",
                                    },
                                    InitialDelaySeconds: 373291,
                                    PeriodSeconds: 453543,
                                    SuccessThreshold: 420075,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "nam",
                                        Port: 50588,
                                    },
                                    TimeoutSeconds: 866383,
                                },
                                TerminationMessagePath: "nemo",
                                TerminationMessagePolicy: "voluptatibus",
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: "fugiat",
                                        Name: "amet",
                                        ReadOnly: false,
                                        SubPath: "aut",
                                    },
                                },
                                WorkingDir: "cumque",
                            },
                            shared.Container{
                                Args: []string{
                                    "hic",
                                    "libero",
                                },
                                Command: []string{
                                    "dolores",
                                    "quis",
                                    "totam",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: "eaque",
                                        Value: "quis",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "nesciunt",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "eos",
                                                },
                                                Name: "perferendis",
                                                Optional: false,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "dolores",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "minus",
                                                },
                                                Name: "quam",
                                                Optional: false,
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: "dolor",
                                        Value: "vero",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "nostrum",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "hic",
                                                },
                                                Name: "recusandae",
                                                Optional: false,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "omnis",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "facilis",
                                                },
                                                Name: "perspiciatis",
                                                Optional: false,
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "porro",
                                            },
                                            Name: "consequuntur",
                                            Optional: false,
                                        },
                                        Prefix: "blanditiis",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "error",
                                            },
                                            Name: "eaque",
                                            Optional: false,
                                        },
                                    },
                                },
                                Image: "occaecati",
                                ImagePullPolicy: "rerum",
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "asperiores",
                                        },
                                    },
                                    FailureThreshold: 934214,
                                    Grpc: &shared.GRPCAction{
                                        Port: 267262,
                                        Service: "iste",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "dolorum",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "pariatur",
                                                Value: "provident",
                                            },
                                            shared.HTTPHeader{
                                                Name: "nobis",
                                                Value: "libero",
                                            },
                                            shared.HTTPHeader{
                                                Name: "delectus",
                                                Value: "quaerat",
                                            },
                                        },
                                        Path: "quos",
                                        Scheme: "aliquid",
                                    },
                                    InitialDelaySeconds: 212390,
                                    PeriodSeconds: 209843,
                                    SuccessThreshold: 222443,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "qui",
                                        Port: 218749,
                                    },
                                    TimeoutSeconds: 944373,
                                },
                                Name: "excepturi",
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: 452109,
                                        Name: "dignissimos",
                                        Protocol: "reiciendis",
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: 227414,
                                        Name: "dolorum",
                                        Protocol: "numquam",
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: 85295,
                                        Name: "ipsa",
                                        Protocol: "ipsa",
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "odio",
                                            "quaerat",
                                        },
                                    },
                                    FailureThreshold: 881005,
                                    Grpc: &shared.GRPCAction{
                                        Port: 696344,
                                        Service: "voluptatibus",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "voluptas",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "eos",
                                                Value: "atque",
                                            },
                                            shared.HTTPHeader{
                                                Name: "sit",
                                                Value: "fugiat",
                                            },
                                            shared.HTTPHeader{
                                                Name: "ab",
                                                Value: "soluta",
                                            },
                                        },
                                        Path: "dolorum",
                                        Scheme: "iusto",
                                    },
                                    InitialDelaySeconds: 453697,
                                    PeriodSeconds: 677082,
                                    SuccessThreshold: 536579,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "omnis",
                                        Port: 896672,
                                    },
                                    TimeoutSeconds: 714697,
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "nihil": "ipsum",
                                        "voluptate": "id",
                                        "saepe": "eius",
                                        "aspernatur": "perferendis",
                                    },
                                    Requests: map[string]string{
                                        "optio": "accusamus",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: 320017,
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "suscipit",
                                            "deserunt",
                                            "provident",
                                            "minima",
                                        },
                                    },
                                    FailureThreshold: 831049,
                                    Grpc: &shared.GRPCAction{
                                        Port: 519711,
                                        Service: "similique",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "alias",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "quaerat",
                                                Value: "tempora",
                                            },
                                            shared.HTTPHeader{
                                                Name: "vel",
                                                Value: "quod",
                                            },
                                            shared.HTTPHeader{
                                                Name: "officiis",
                                                Value: "qui",
                                            },
                                            shared.HTTPHeader{
                                                Name: "dolorum",
                                                Value: "a",
                                            },
                                        },
                                        Path: "esse",
                                        Scheme: "harum",
                                    },
                                    InitialDelaySeconds: 483409,
                                    PeriodSeconds: 215507,
                                    SuccessThreshold: 788740,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "tenetur",
                                        Port: 229442,
                                    },
                                    TimeoutSeconds: 730856,
                                },
                                TerminationMessagePath: "accusamus",
                                TerminationMessagePolicy: "numquam",
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: "dolorem",
                                        Name: "sapiente",
                                        ReadOnly: false,
                                        SubPath: "totam",
                                    },
                                    shared.VolumeMount{
                                        MountPath: "nihil",
                                        Name: "sit",
                                        ReadOnly: false,
                                        SubPath: "expedita",
                                    },
                                },
                                WorkingDir: "neque",
                            },
                            shared.Container{
                                Args: []string{
                                    "vel",
                                },
                                Command: []string{
                                    "voluptas",
                                    "deserunt",
                                    "quam",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: "incidunt",
                                        Value: "qui",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "cupiditate",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "maxime",
                                                },
                                                Name: "pariatur",
                                                Optional: false,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "soluta",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "dicta",
                                                },
                                                Name: "laborum",
                                                Optional: false,
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "incidunt",
                                            },
                                            Name: "aspernatur",
                                            Optional: false,
                                        },
                                        Prefix: "dolores",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "distinctio",
                                            },
                                            Name: "facilis",
                                            Optional: false,
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "aliquid",
                                            },
                                            Name: "quam",
                                            Optional: false,
                                        },
                                        Prefix: "molestias",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "temporibus",
                                            },
                                            Name: "qui",
                                            Optional: false,
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "neque",
                                            },
                                            Name: "fugit",
                                            Optional: false,
                                        },
                                        Prefix: "magni",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "odio",
                                            },
                                            Name: "sunt",
                                            Optional: false,
                                        },
                                    },
                                },
                                Image: "ullam",
                                ImagePullPolicy: "nam",
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "voluptatem",
                                            "cumque",
                                            "soluta",
                                            "nobis",
                                        },
                                    },
                                    FailureThreshold: 92596,
                                    Grpc: &shared.GRPCAction{
                                        Port: 903720,
                                        Service: "ipsum",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "veritatis",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "quos",
                                                Value: "tempore",
                                            },
                                            shared.HTTPHeader{
                                                Name: "cupiditate",
                                                Value: "aperiam",
                                            },
                                            shared.HTTPHeader{
                                                Name: "delectus",
                                                Value: "dolorem",
                                            },
                                        },
                                        Path: "dolore",
                                        Scheme: "labore",
                                    },
                                    InitialDelaySeconds: 240829,
                                    PeriodSeconds: 677263,
                                    SuccessThreshold: 100294,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "quae",
                                        Port: 16429,
                                    },
                                    TimeoutSeconds: 555649,
                                },
                                Name: "itaque",
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: 669917,
                                        Name: "repellendus",
                                        Protocol: "porro",
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "ut",
                                            "facilis",
                                            "cupiditate",
                                            "qui",
                                        },
                                    },
                                    FailureThreshold: 63955,
                                    Grpc: &shared.GRPCAction{
                                        Port: 512393,
                                        Service: "odio",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "occaecati",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "quisquam",
                                                Value: "vero",
                                            },
                                            shared.HTTPHeader{
                                                Name: "omnis",
                                                Value: "quis",
                                            },
                                            shared.HTTPHeader{
                                                Name: "ipsum",
                                                Value: "delectus",
                                            },
                                            shared.HTTPHeader{
                                                Name: "voluptate",
                                                Value: "consectetur",
                                            },
                                        },
                                        Path: "vero",
                                        Scheme: "tenetur",
                                    },
                                    InitialDelaySeconds: 492268,
                                    PeriodSeconds: 941378,
                                    SuccessThreshold: 715561,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "quod",
                                        Port: 486160,
                                    },
                                    TimeoutSeconds: 630448,
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "vero": "ducimus",
                                        "dolore": "quibusdam",
                                        "illum": "sequi",
                                    },
                                    Requests: map[string]string{
                                        "impedit": "aut",
                                        "voluptatibus": "exercitationem",
                                        "nulla": "fugit",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: 780427,
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "doloribus",
                                            "iusto",
                                            "eligendi",
                                            "ducimus",
                                        },
                                    },
                                    FailureThreshold: 4048,
                                    Grpc: &shared.GRPCAction{
                                        Port: 639473,
                                        Service: "tempora",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "ipsam",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "aspernatur",
                                                Value: "vel",
                                            },
                                            shared.HTTPHeader{
                                                Name: "possimus",
                                                Value: "magnam",
                                            },
                                        },
                                        Path: "ratione",
                                        Scheme: "ex",
                                    },
                                    InitialDelaySeconds: 511319,
                                    PeriodSeconds: 120657,
                                    SuccessThreshold: 224317,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "maiores",
                                        Port: 97844,
                                    },
                                    TimeoutSeconds: 406120,
                                },
                                TerminationMessagePath: "nulla",
                                TerminationMessagePolicy: "excepturi",
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: "nostrum",
                                        Name: "sapiente",
                                        ReadOnly: false,
                                        SubPath: "quisquam",
                                    },
                                    shared.VolumeMount{
                                        MountPath: "saepe",
                                        Name: "ea",
                                        ReadOnly: false,
                                        SubPath: "impedit",
                                    },
                                    shared.VolumeMount{
                                        MountPath: "corporis",
                                        Name: "veniam",
                                        ReadOnly: false,
                                        SubPath: "aliquid",
                                    },
                                    shared.VolumeMount{
                                        MountPath: "inventore",
                                        Name: "magnam",
                                        ReadOnly: false,
                                        SubPath: "ea",
                                    },
                                },
                                WorkingDir: "quo",
                            },
                        },
                        RestartPolicy: "consectetur",
                        ServiceAccountName: "recusandae",
                        TerminationGracePeriodSeconds: "aspernatur",
                        Volumes: []shared.Volume{
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: 53427,
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: "libero",
                                            Mode: 13948,
                                            Path: "aut",
                                        },
                                        shared.KeyToPath{
                                            Key: "deleniti",
                                            Mode: 770581,
                                            Path: "aliquam",
                                        },
                                        shared.KeyToPath{
                                            Key: "fugit",
                                            Mode: 882860,
                                            Path: "inventore",
                                        },
                                        shared.KeyToPath{
                                            Key: "non",
                                            Mode: 89603,
                                            Path: "dolorum",
                                        },
                                    },
                                    Name: "laborum",
                                    Optional: false,
                                },
                                Name: "placeat",
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: 245367,
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: "autem",
                                            Mode: 752135,
                                            Path: "quas",
                                        },
                                        shared.KeyToPath{
                                            Key: "assumenda",
                                            Mode: 860552,
                                            Path: "voluptas",
                                        },
                                    },
                                    Optional: false,
                                    SecretName: "libero",
                                },
                            },
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: 96549,
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: "numquam",
                                            Mode: 131482,
                                            Path: "provident",
                                        },
                                        shared.KeyToPath{
                                            Key: "ipsa",
                                            Mode: 476477,
                                            Path: "magnam",
                                        },
                                    },
                                    Name: "odio",
                                    Optional: false,
                                },
                                Name: "eius",
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: 458515,
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: "rem",
                                            Mode: 683282,
                                            Path: "reprehenderit",
                                        },
                                        shared.KeyToPath{
                                            Key: "quidem",
                                            Mode: 852635,
                                            Path: "ut",
                                        },
                                    },
                                    Optional: false,
                                    SecretName: "eum",
                                },
                            },
                        },
                    },
                },
                TTLSecondsAfterFinished: 379927,
            },
            Status: &shared.JobStatus{
                Active: 826871,
                CompletionTime: "eos",
                Conditions: []shared.JobCondition{
                    shared.JobCondition{
                        LastTransitionTime: "quisquam",
                        Message: "veritatis",
                        Reason: "ipsa",
                        Severity: "id",
                        Status: "quidem",
                        Type: "neque",
                    },
                    shared.JobCondition{
                        LastTransitionTime: "quo",
                        Message: "illum",
                        Reason: "quo",
                        Severity: "fuga",
                        Status: "eius",
                        Type: "eos",
                    },
                    shared.JobCondition{
                        LastTransitionTime: "voluptas",
                        Message: "ab",
                        Reason: "cupiditate",
                        Severity: "consequatur",
                        Status: "tempora",
                        Type: "debitis",
                    },
                },
                Failed: 370853,
                ImageDigest: "aspernatur",
                Instances: []shared.InstanceStatus{
                    shared.InstanceStatus{
                        CompletionTime: "quo",
                        Failed: 459856,
                        Index: 925164,
                        LastAttemptResult: &shared.InstanceAttemptResult{
                            ExitCode: 44612,
                            Status: &shared.GoogleRPCStatus{
                                Code: 715179,
                                Details: []map[string]interface{}{
                                    map[string]interface{}{
                                        "inventore": "nihil",
                                        "totam": "accusamus",
                                    },
                                    map[string]interface{}{
                                        "odio": "occaecati",
                                        "commodi": "sapiente",
                                    },
                                    map[string]interface{}{
                                        "deserunt": "molestiae",
                                    },
                                    map[string]interface{}{
                                        "porro": "eum",
                                    },
                                },
                                Message: "quas",
                            },
                        },
                        LastExitCode: 510017,
                        Restarted: 159867,
                        StartTime: "deleniti",
                        Succeeded: 143829,
                    },
                },
                ObservedGeneration: 681393,
                StartTime: "mollitia",
                Succeeded: 277596,
            },
        },
        AccessToken: "atque",
        Alt: "json",
        Callback: "minima",
        Fields: "nisi",
        Key: "fugit",
        OauthToken: "sapiente",
        Parent: "consequuntur",
        PrettyPrint: false,
        QuotaUser: "ratione",
        UploadType: "explicabo",
        UploadProtocol: "saepe",
    }

    ctx := context.Background()
    res, err := s.Namespaces.RunNamespacesJobsCreate(ctx, req, operations.RunNamespacesJobsCreateSecurity{
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