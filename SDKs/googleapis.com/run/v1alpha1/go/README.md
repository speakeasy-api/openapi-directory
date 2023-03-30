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
        Security: operations.RunNamespacesJobsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.RunNamespacesJobsCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.RunNamespacesJobsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.Job{
            APIVersion: "suscipit",
            Kind: "iure",
            Metadata: &shared.ObjectMeta{
                Annotations: map[string]string{
                    "debitis": "ipsa",
                    "delectus": "tempora",
                },
                ClusterName: "suscipit",
                CreationTimestamp: "molestiae",
                DeletionGracePeriodSeconds: 791725,
                DeletionTimestamp: "placeat",
                Finalizers: []string{
                    "iusto",
                    "excepturi",
                    "nisi",
                },
                GenerateName: "recusandae",
                Generation: 836079,
                Labels: map[string]string{
                    "quis": "veritatis",
                },
                Name: "deserunt",
                Namespace: "perferendis",
                OwnerReferences: []shared.OwnerReference{
                    shared.OwnerReference{
                        APIVersion: "repellendus",
                        BlockOwnerDeletion: false,
                        Controller: false,
                        Kind: "sapiente",
                        Name: "quo",
                        UID: "odit",
                    },
                    shared.OwnerReference{
                        APIVersion: "at",
                        BlockOwnerDeletion: false,
                        Controller: false,
                        Kind: "at",
                        Name: "maiores",
                        UID: "molestiae",
                    },
                },
                ResourceVersion: "quod",
                SelfLink: "quod",
                UID: "esse",
            },
            Spec: &shared.JobSpec{
                ActiveDeadlineSeconds: "totam",
                BackoffLimit: 780529,
                Completions: 678880,
                Parallelism: 118274,
                Template: &shared.InstanceTemplateSpec{
                    Spec: &shared.InstanceSpec{
                        ActiveDeadlineSeconds: "nam",
                        Containers: []shared.Container{
                            shared.Container{
                                Args: []string{
                                    "fugit",
                                    "deleniti",
                                    "hic",
                                },
                                Command: []string{
                                    "totam",
                                    "beatae",
                                    "commodi",
                                    "molestiae",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: "qui",
                                        Value: "impedit",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "cum",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "esse",
                                                },
                                                Name: "ipsum",
                                                Optional: false,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "excepturi",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "aspernatur",
                                                },
                                                Name: "perferendis",
                                                Optional: false,
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: "ad",
                                        Value: "natus",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "sed",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "iste",
                                                },
                                                Name: "dolor",
                                                Optional: false,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "natus",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "laboriosam",
                                                },
                                                Name: "hic",
                                                Optional: false,
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "fuga",
                                            },
                                            Name: "in",
                                            Optional: false,
                                        },
                                        Prefix: "corporis",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "iste",
                                            },
                                            Name: "iure",
                                            Optional: false,
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "saepe",
                                            },
                                            Name: "quidem",
                                            Optional: false,
                                        },
                                        Prefix: "architecto",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "ipsa",
                                            },
                                            Name: "reiciendis",
                                            Optional: false,
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "est",
                                            },
                                            Name: "mollitia",
                                            Optional: false,
                                        },
                                        Prefix: "laborum",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "dolores",
                                            },
                                            Name: "dolorem",
                                            Optional: false,
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "corporis",
                                            },
                                            Name: "explicabo",
                                            Optional: false,
                                        },
                                        Prefix: "nobis",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "enim",
                                            },
                                            Name: "omnis",
                                            Optional: false,
                                        },
                                    },
                                },
                                Image: "nemo",
                                ImagePullPolicy: "minima",
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "accusantium",
                                            "iure",
                                            "culpa",
                                        },
                                    },
                                    FailureThreshold: 988374,
                                    Grpc: &shared.GRPCAction{
                                        Port: 958950,
                                        Service: "architecto",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "mollitia",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "culpa",
                                                Value: "consequuntur",
                                            },
                                        },
                                        Path: "repellat",
                                        Scheme: "mollitia",
                                    },
                                    InitialDelaySeconds: 581850,
                                    PeriodSeconds: 253291,
                                    SuccessThreshold: 414369,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "quam",
                                        Port: 474697,
                                    },
                                    TimeoutSeconds: 244425,
                                },
                                Name: "error",
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: 338007,
                                        Name: "vitae",
                                        Protocol: "laborum",
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "enim",
                                            "odit",
                                            "quo",
                                        },
                                    },
                                    FailureThreshold: 196582,
                                    Grpc: &shared.GRPCAction{
                                        Port: 949572,
                                        Service: "ipsam",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "id",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "aut",
                                                Value: "quasi",
                                            },
                                            shared.HTTPHeader{
                                                Name: "error",
                                                Value: "temporibus",
                                            },
                                            shared.HTTPHeader{
                                                Name: "laborum",
                                                Value: "quasi",
                                            },
                                            shared.HTTPHeader{
                                                Name: "reiciendis",
                                                Value: "voluptatibus",
                                            },
                                        },
                                        Path: "vero",
                                        Scheme: "nihil",
                                    },
                                    InitialDelaySeconds: 509624,
                                    PeriodSeconds: 976762,
                                    SuccessThreshold: 55714,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "omnis",
                                        Port: 451159,
                                    },
                                    TimeoutSeconds: 739264,
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "doloremque": "reprehenderit",
                                    },
                                    Requests: map[string]string{
                                        "maiores": "dicta",
                                        "corporis": "dolore",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: 480894,
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "harum",
                                        },
                                    },
                                    FailureThreshold: 317983,
                                    Grpc: &shared.GRPCAction{
                                        Port: 880476,
                                        Service: "commodi",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "repudiandae",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "ipsum",
                                                Value: "quidem",
                                            },
                                        },
                                        Path: "molestias",
                                        Scheme: "excepturi",
                                    },
                                    InitialDelaySeconds: 865103,
                                    PeriodSeconds: 265389,
                                    SuccessThreshold: 508969,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "rem",
                                        Port: 916723,
                                    },
                                    TimeoutSeconds: 93940,
                                },
                                TerminationMessagePath: "repudiandae",
                                TerminationMessagePolicy: "sint",
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: "itaque",
                                        Name: "incidunt",
                                        ReadOnly: false,
                                        SubPath: "enim",
                                    },
                                },
                                WorkingDir: "consequatur",
                            },
                            shared.Container{
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
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: "aliquid",
                                        Value: "cupiditate",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "quos",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "perferendis",
                                                },
                                                Name: "magni",
                                                Optional: false,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "assumenda",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "ipsam",
                                                },
                                                Name: "alias",
                                                Optional: false,
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "dolorum",
                                            },
                                            Name: "excepturi",
                                            Optional: false,
                                        },
                                        Prefix: "tempora",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "facilis",
                                            },
                                            Name: "tempore",
                                            Optional: false,
                                        },
                                    },
                                },
                                Image: "labore",
                                ImagePullPolicy: "delectus",
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "non",
                                            "eligendi",
                                        },
                                    },
                                    FailureThreshold: 576157,
                                    Grpc: &shared.GRPCAction{
                                        Port: 396098,
                                        Service: "provident",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "necessitatibus",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "officia",
                                                Value: "dolor",
                                            },
                                            shared.HTTPHeader{
                                                Name: "debitis",
                                                Value: "a",
                                            },
                                            shared.HTTPHeader{
                                                Name: "dolorum",
                                                Value: "in",
                                            },
                                        },
                                        Path: "in",
                                        Scheme: "illum",
                                    },
                                    InitialDelaySeconds: 978571,
                                    PeriodSeconds: 699479,
                                    SuccessThreshold: 116202,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "magnam",
                                        Port: 767024,
                                    },
                                    TimeoutSeconds: 813798,
                                },
                                Name: "ea",
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: 675439,
                                        Name: "accusamus",
                                        Protocol: "non",
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: 581273,
                                        Name: "enim",
                                        Protocol: "accusamus",
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "quidem",
                                            "provident",
                                            "nam",
                                            "id",
                                        },
                                    },
                                    FailureThreshold: 501324,
                                    Grpc: &shared.GRPCAction{
                                        Port: 533206,
                                        Service: "sapiente",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "amet",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "nisi",
                                                Value: "vel",
                                            },
                                            shared.HTTPHeader{
                                                Name: "natus",
                                                Value: "omnis",
                                            },
                                            shared.HTTPHeader{
                                                Name: "molestiae",
                                                Value: "perferendis",
                                            },
                                        },
                                        Path: "nihil",
                                        Scheme: "magnam",
                                    },
                                    InitialDelaySeconds: 716075,
                                    PeriodSeconds: 660174,
                                    SuccessThreshold: 287991,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "labore",
                                        Port: 383462,
                                    },
                                    TimeoutSeconds: 618016,
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "eum": "vero",
                                        "aspernatur": "architecto",
                                        "magnam": "et",
                                    },
                                    Requests: map[string]string{
                                        "ullam": "provident",
                                        "quos": "sint",
                                        "accusantium": "mollitia",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: 968962,
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "ad",
                                            "eum",
                                            "dolor",
                                        },
                                    },
                                    FailureThreshold: 896547,
                                    Grpc: &shared.GRPCAction{
                                        Port: 141264,
                                        Service: "nemo",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "quasi",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "doloribus",
                                                Value: "debitis",
                                            },
                                            shared.HTTPHeader{
                                                Name: "eius",
                                                Value: "maxime",
                                            },
                                        },
                                        Path: "deleniti",
                                        Scheme: "facilis",
                                    },
                                    InitialDelaySeconds: 447926,
                                    PeriodSeconds: 100226,
                                    SuccessThreshold: 99569,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "repudiandae",
                                        Port: 352312,
                                    },
                                    TimeoutSeconds: 714242,
                                },
                                TerminationMessagePath: "nihil",
                                TerminationMessagePolicy: "repellat",
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: "sed",
                                        Name: "saepe",
                                        ReadOnly: false,
                                        SubPath: "pariatur",
                                    },
                                    shared.VolumeMount{
                                        MountPath: "accusantium",
                                        Name: "consequuntur",
                                        ReadOnly: false,
                                        SubPath: "praesentium",
                                    },
                                    shared.VolumeMount{
                                        MountPath: "natus",
                                        Name: "magni",
                                        ReadOnly: false,
                                        SubPath: "sunt",
                                    },
                                    shared.VolumeMount{
                                        MountPath: "quo",
                                        Name: "illum",
                                        ReadOnly: false,
                                        SubPath: "pariatur",
                                    },
                                },
                                WorkingDir: "maxime",
                            },
                            shared.Container{
                                Args: []string{
                                    "excepturi",
                                    "odit",
                                },
                                Command: []string{
                                    "accusantium",
                                    "ab",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: "quidem",
                                        Value: "ipsam",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "voluptate",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "autem",
                                                },
                                                Name: "nam",
                                                Optional: false,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "eaque",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "pariatur",
                                                },
                                                Name: "nemo",
                                                Optional: false,
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: "voluptatibus",
                                        Value: "perferendis",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "fugiat",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "amet",
                                                },
                                                Name: "aut",
                                                Optional: false,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "cumque",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "corporis",
                                                },
                                                Name: "hic",
                                                Optional: false,
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: "libero",
                                        Value: "nobis",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "dolores",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "quis",
                                                },
                                                Name: "totam",
                                                Optional: false,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "dignissimos",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "eaque",
                                                },
                                                Name: "quis",
                                                Optional: false,
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: "nesciunt",
                                        Value: "eos",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "perferendis",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "dolores",
                                                },
                                                Name: "minus",
                                                Optional: false,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "quam",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "dolor",
                                                },
                                                Name: "vero",
                                                Optional: false,
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "hic",
                                            },
                                            Name: "recusandae",
                                            Optional: false,
                                        },
                                        Prefix: "omnis",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "facilis",
                                            },
                                            Name: "perspiciatis",
                                            Optional: false,
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "voluptatem",
                                            },
                                            Name: "porro",
                                            Optional: false,
                                        },
                                        Prefix: "consequuntur",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "blanditiis",
                                            },
                                            Name: "error",
                                            Optional: false,
                                        },
                                    },
                                },
                                Image: "eaque",
                                ImagePullPolicy: "occaecati",
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "adipisci",
                                            "asperiores",
                                            "earum",
                                        },
                                    },
                                    FailureThreshold: 267262,
                                    Grpc: &shared.GRPCAction{
                                        Port: 613966,
                                        Service: "dolorum",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "deleniti",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "provident",
                                                Value: "nobis",
                                            },
                                            shared.HTTPHeader{
                                                Name: "libero",
                                                Value: "delectus",
                                            },
                                            shared.HTTPHeader{
                                                Name: "quaerat",
                                                Value: "quos",
                                            },
                                            shared.HTTPHeader{
                                                Name: "aliquid",
                                                Value: "dolorem",
                                            },
                                        },
                                        Path: "dolorem",
                                        Scheme: "dolor",
                                    },
                                    InitialDelaySeconds: 186193,
                                    PeriodSeconds: 218749,
                                    SuccessThreshold: 944373,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "excepturi",
                                        Port: 739551,
                                    },
                                    TimeoutSeconds: 452109,
                                },
                                Name: "dignissimos",
                                Ports: []shared.ContainerPort{
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
                                    shared.ContainerPort{
                                        ContainerPort: 434417,
                                        Name: "odio",
                                        Protocol: "quaerat",
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: 881005,
                                        Name: "quidem",
                                        Protocol: "voluptatibus",
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "natus",
                                            "eos",
                                        },
                                    },
                                    FailureThreshold: 542499,
                                    Grpc: &shared.GRPCAction{
                                        Port: 24678,
                                        Service: "fugiat",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "ab",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "dolorum",
                                                Value: "iusto",
                                            },
                                            shared.HTTPHeader{
                                                Name: "voluptate",
                                                Value: "dolorum",
                                            },
                                            shared.HTTPHeader{
                                                Name: "deleniti",
                                                Value: "omnis",
                                            },
                                        },
                                        Path: "necessitatibus",
                                        Scheme: "distinctio",
                                    },
                                    InitialDelaySeconds: 990339,
                                    PeriodSeconds: 469497,
                                    SuccessThreshold: 216897,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "voluptate",
                                        Port: 663078,
                                    },
                                    TimeoutSeconds: 906418,
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "aspernatur": "perferendis",
                                        "amet": "optio",
                                    },
                                    Requests: map[string]string{
                                        "ad": "saepe",
                                        "suscipit": "deserunt",
                                        "provident": "minima",
                                        "repellendus": "totam",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: 628982,
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "at",
                                        },
                                    },
                                    FailureThreshold: 311860,
                                    Grpc: &shared.GRPCAction{
                                        Port: 273542,
                                        Service: "vel",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "quod",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "qui",
                                                Value: "dolorum",
                                            },
                                            shared.HTTPHeader{
                                                Name: "a",
                                                Value: "esse",
                                            },
                                            shared.HTTPHeader{
                                                Name: "harum",
                                                Value: "iusto",
                                            },
                                            shared.HTTPHeader{
                                                Name: "ipsum",
                                                Value: "quisquam",
                                            },
                                        },
                                        Path: "tenetur",
                                        Scheme: "amet",
                                    },
                                    InitialDelaySeconds: 730856,
                                    PeriodSeconds: 880298,
                                    SuccessThreshold: 253941,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "enim",
                                        Port: 213312,
                                    },
                                    TimeoutSeconds: 957451,
                                },
                                TerminationMessagePath: "totam",
                                TerminationMessagePolicy: "nihil",
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: "expedita",
                                        Name: "neque",
                                        ReadOnly: false,
                                        SubPath: "sed",
                                    },
                                },
                                WorkingDir: "vel",
                            },
                        },
                        RestartPolicy: "libero",
                        ServiceAccountName: "voluptas",
                        TerminationGracePeriodSeconds: "deserunt",
                        Volumes: []shared.Volume{
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: 214880,
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: "qui",
                                            Mode: 586784,
                                            Path: "maxime",
                                        },
                                        shared.KeyToPath{
                                            Key: "pariatur",
                                            Mode: 747080,
                                            Path: "dicta",
                                        },
                                    },
                                    Name: "laborum",
                                    Optional: false,
                                },
                                Name: "totam",
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: 276894,
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: "dolores",
                                            Mode: 716860,
                                            Path: "facilis",
                                        },
                                    },
                                    Optional: false,
                                    SecretName: "aliquid",
                                },
                            },
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: 463150,
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: "temporibus",
                                            Mode: 183280,
                                            Path: "neque",
                                        },
                                        shared.KeyToPath{
                                            Key: "fugit",
                                            Mode: 164959,
                                            Path: "odio",
                                        },
                                        shared.KeyToPath{
                                            Key: "sunt",
                                            Mode: 355613,
                                            Path: "nam",
                                        },
                                    },
                                    Name: "hic",
                                    Optional: false,
                                },
                                Name: "voluptatem",
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: 765326,
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: "nobis",
                                            Mode: 92596,
                                            Path: "saepe",
                                        },
                                        shared.KeyToPath{
                                            Key: "ipsum",
                                            Mode: 83422,
                                            Path: "nobis",
                                        },
                                        shared.KeyToPath{
                                            Key: "quos",
                                            Mode: 731694,
                                            Path: "cupiditate",
                                        },
                                    },
                                    Optional: false,
                                    SecretName: "aperiam",
                                },
                            },
                        },
                    },
                },
                TTLSecondsAfterFinished: 961937,
            },
            Status: &shared.JobStatus{
                Active: 209157,
                CompletionTime: "dolore",
                Conditions: []shared.JobCondition{
                    shared.JobCondition{
                        LastTransitionTime: "adipisci",
                        Message: "dolorum",
                        Reason: "architecto",
                        Severity: "quae",
                        Status: "aut",
                        Type: "quas",
                    },
                    shared.JobCondition{
                        LastTransitionTime: "itaque",
                        Message: "consequatur",
                        Reason: "est",
                        Severity: "repellendus",
                        Status: "porro",
                        Type: "doloribus",
                    },
                },
                Failed: 281730,
                ImageDigest: "facilis",
                Instances: []shared.InstanceStatus{
                    shared.InstanceStatus{
                        CompletionTime: "qui",
                        Failed: 63955,
                        Index: 512393,
                        LastAttemptResult: &shared.InstanceAttemptResult{
                            ExitCode: 485628,
                            Status: &shared.GoogleRPCStatus{
                                Code: 580447,
                                Details: []map[string]interface{}{
                                    map[string]interface{}{
                                        "vero": "omnis",
                                        "quis": "ipsum",
                                        "delectus": "voluptate",
                                        "consectetur": "vero",
                                    },
                                    map[string]interface{}{
                                        "dignissimos": "hic",
                                        "distinctio": "quod",
                                        "odio": "similique",
                                        "facilis": "vero",
                                    },
                                    map[string]interface{}{
                                        "dolore": "quibusdam",
                                        "illum": "sequi",
                                    },
                                    map[string]interface{}{
                                        "impedit": "aut",
                                        "voluptatibus": "exercitationem",
                                        "nulla": "fugit",
                                    },
                                },
                                Message: "porro",
                            },
                        },
                        LastExitCode: 981830,
                        Restarted: 985033,
                        StartTime: "iusto",
                        Succeeded: 753570,
                    },
                    shared.InstanceStatus{
                        CompletionTime: "ducimus",
                        Failed: 4048,
                        Index: 639473,
                        LastAttemptResult: &shared.InstanceAttemptResult{
                            ExitCode: 269479,
                            Status: &shared.GoogleRPCStatus{
                                Code: 368584,
                                Details: []map[string]interface{}{
                                    map[string]interface{}{
                                        "vel": "possimus",
                                    },
                                    map[string]interface{}{
                                        "ratione": "ex",
                                        "laudantium": "dicta",
                                    },
                                },
                                Message: "dolor",
                            },
                        },
                        LastExitCode: 980700,
                        Restarted: 97844,
                        StartTime: "ex",
                        Succeeded: 862192,
                    },
                    shared.InstanceStatus{
                        CompletionTime: "excepturi",
                        Failed: 972920,
                        Index: 343605,
                        LastAttemptResult: &shared.InstanceAttemptResult{
                            ExitCode: 960835,
                            Status: &shared.GoogleRPCStatus{
                                Code: 788873,
                                Details: []map[string]interface{}{
                                    map[string]interface{}{
                                        "impedit": "corporis",
                                        "veniam": "aliquid",
                                    },
                                    map[string]interface{}{
                                        "magnam": "ea",
                                    },
                                    map[string]interface{}{
                                        "consectetur": "recusandae",
                                        "aspernatur": "minima",
                                        "eaque": "a",
                                        "libero": "aut",
                                    },
                                    map[string]interface{}{
                                        "deleniti": "impedit",
                                    },
                                },
                                Message: "aliquam",
                            },
                        },
                        LastExitCode: 146946,
                        Restarted: 882860,
                        StartTime: "inventore",
                        Succeeded: 250622,
                    },
                },
                ObservedGeneration: 89603,
                StartTime: "dolorum",
                Succeeded: 672048,
            },
        },
    }

    ctx := context.Background()
    res, err := s.Namespaces.RunNamespacesJobsCreate(ctx, req)
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
## SDK Available Operations


### Namespaces

* `RunNamespacesJobsCreate` - Create a job.
* `RunNamespacesJobsDelete` - Delete a job.
* `RunNamespacesJobsGet` - Get information about a job.
* `RunNamespacesJobsList` - List jobs.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
