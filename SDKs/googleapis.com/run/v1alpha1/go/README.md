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
            Parent: "unde",
        },
        QueryParams: operations.RunNamespacesJobsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.Job{
            APIVersion: "eum",
            Kind: "iusto",
            Metadata: &shared.ObjectMeta{
                Annotations: map[string]string{
                    "saepe": "inventore",
                    "sapiente": "enim",
                },
                ClusterName: "eum",
                CreationTimestamp: "voluptatum",
                DeletionGracePeriodSeconds: 791725,
                DeletionTimestamp: "vel",
                Finalizers: []string{
                    "deleniti",
                    "similique",
                    "reprehenderit",
                },
                GenerateName: "molestiae",
                Generation: 836079,
                Labels: map[string]string{
                    "laboriosam": "dicta",
                },
                Name: "est",
                Namespace: "voluptatem",
                OwnerReferences: []shared.OwnerReference{
                    shared.OwnerReference{
                        APIVersion: "fugiat",
                        BlockOwnerDeletion: false,
                        Controller: false,
                        Kind: "a",
                        Name: "omnis",
                        UID: "eos",
                    },
                    shared.OwnerReference{
                        APIVersion: "accusamus",
                        BlockOwnerDeletion: false,
                        Controller: false,
                        Kind: "accusamus",
                        Name: "reiciendis",
                        UID: "rem",
                    },
                },
                ResourceVersion: "quibusdam",
                SelfLink: "et",
                UID: "praesentium",
            },
            Spec: &shared.JobSpec{
                ActiveDeadlineSeconds: "occaecati",
                BackoffLimit: 780529,
                Completions: 678880,
                Parallelism: 118274,
                Template: &shared.InstanceTemplateSpec{
                    Spec: &shared.InstanceSpec{
                        ActiveDeadlineSeconds: "quisquam",
                        Containers: []shared.Container{
                            shared.Container{
                                Args: []string{
                                    "qui",
                                    "sed",
                                    "rerum",
                                },
                                Command: []string{
                                    "occaecati",
                                    "odit",
                                    "esse",
                                    "rem",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: "amet",
                                        Value: "est",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "id",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "blanditiis",
                                                },
                                                Name: "numquam",
                                                Optional: false,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "similique",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "dolores",
                                                },
                                                Name: "sit",
                                                Optional: false,
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: "quia",
                                        Value: "et",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "voluptatem",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "laborum",
                                                },
                                                Name: "modi",
                                                Optional: false,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "et",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "iure",
                                                },
                                                Name: "earum",
                                                Optional: false,
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "soluta",
                                            },
                                            Name: "qui",
                                            Optional: false,
                                        },
                                        Prefix: "ea",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "laborum",
                                            },
                                            Name: "iusto",
                                            Optional: false,
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "ut",
                                            },
                                            Name: "optio",
                                            Optional: false,
                                        },
                                        Prefix: "aspernatur",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "inventore",
                                            },
                                            Name: "ut",
                                            Optional: false,
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "libero",
                                            },
                                            Name: "et",
                                            Optional: false,
                                        },
                                        Prefix: "libero",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "ipsum",
                                            },
                                            Name: "non",
                                            Optional: false,
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "ea",
                                            },
                                            Name: "magni",
                                            Optional: false,
                                        },
                                        Prefix: "placeat",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "ipsam",
                                            },
                                            Name: "est",
                                            Optional: false,
                                        },
                                    },
                                },
                                Image: "commodi",
                                ImagePullPolicy: "quia",
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "eaque",
                                            "odio",
                                            "harum",
                                        },
                                    },
                                    FailureThreshold: 988374,
                                    Grpc: &shared.GRPCAction{
                                        Port: 958950,
                                        Service: "aut",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "et",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "quidem",
                                                Value: "neque",
                                            },
                                        },
                                        Path: "asperiores",
                                        Scheme: "et",
                                    },
                                    InitialDelaySeconds: 581850,
                                    PeriodSeconds: 253291,
                                    SuccessThreshold: 414369,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "totam",
                                        Port: 474697,
                                    },
                                    TimeoutSeconds: 244425,
                                },
                                Name: "fuga",
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: 338007,
                                        Name: "aut",
                                        Protocol: "cum",
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "ipsam",
                                            "eos",
                                            "omnis",
                                        },
                                    },
                                    FailureThreshold: 196582,
                                    Grpc: &shared.GRPCAction{
                                        Port: 949572,
                                        Service: "consequatur",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "distinctio",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "perferendis",
                                                Value: "aspernatur",
                                            },
                                            shared.HTTPHeader{
                                                Name: "fuga",
                                                Value: "quo",
                                            },
                                            shared.HTTPHeader{
                                                Name: "tempore",
                                                Value: "explicabo",
                                            },
                                            shared.HTTPHeader{
                                                Name: "aut",
                                                Value: "reiciendis",
                                            },
                                        },
                                        Path: "debitis",
                                        Scheme: "totam",
                                    },
                                    InitialDelaySeconds: 509624,
                                    PeriodSeconds: 976762,
                                    SuccessThreshold: 55714,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "id",
                                        Port: 451159,
                                    },
                                    TimeoutSeconds: 739264,
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "eaque": "odio",
                                    },
                                    Requests: map[string]string{
                                        "reiciendis": "sed",
                                        "ea": "exercitationem",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: 480894,
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "est",
                                        },
                                    },
                                    FailureThreshold: 317983,
                                    Grpc: &shared.GRPCAction{
                                        Port: 880476,
                                        Service: "esse",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "sint",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "numquam",
                                                Value: "eligendi",
                                            },
                                        },
                                        Path: "error",
                                        Scheme: "similique",
                                    },
                                    InitialDelaySeconds: 865103,
                                    PeriodSeconds: 265389,
                                    SuccessThreshold: 508969,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "cupiditate",
                                        Port: 916723,
                                    },
                                    TimeoutSeconds: 93940,
                                },
                                TerminationMessagePath: "et",
                                TerminationMessagePolicy: "in",
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: "non",
                                        Name: "minima",
                                        ReadOnly: false,
                                        SubPath: "voluptatem",
                                    },
                                },
                                WorkingDir: "aut",
                            },
                            shared.Container{
                                Args: []string{
                                    "voluptas",
                                    "magni",
                                    "est",
                                },
                                Command: []string{
                                    "voluptas",
                                    "nostrum",
                                    "voluptatem",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: "in",
                                        Value: "officia",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "omnis",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "voluptatem",
                                                },
                                                Name: "dolorem",
                                                Optional: false,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "eum",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "quis",
                                                },
                                                Name: "consequatur",
                                                Optional: false,
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "cum",
                                            },
                                            Name: "similique",
                                            Optional: false,
                                        },
                                        Prefix: "enim",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "nihil",
                                            },
                                            Name: "id",
                                            Optional: false,
                                        },
                                    },
                                },
                                Image: "quis",
                                ImagePullPolicy: "sapiente",
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "dolore",
                                            "possimus",
                                        },
                                    },
                                    FailureThreshold: 576157,
                                    Grpc: &shared.GRPCAction{
                                        Port: 396098,
                                        Service: "deserunt",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "eveniet",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "rerum",
                                                Value: "modi",
                                            },
                                            shared.HTTPHeader{
                                                Name: "necessitatibus",
                                                Value: "tenetur",
                                            },
                                            shared.HTTPHeader{
                                                Name: "soluta",
                                                Value: "ducimus",
                                            },
                                        },
                                        Path: "ducimus",
                                        Scheme: "nulla",
                                    },
                                    InitialDelaySeconds: 978571,
                                    PeriodSeconds: 699479,
                                    SuccessThreshold: 116202,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "ullam",
                                        Port: 767024,
                                    },
                                    TimeoutSeconds: 813798,
                                },
                                Name: "velit",
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: 675439,
                                        Name: "aut",
                                        Protocol: "magnam",
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: 581273,
                                        Name: "enim",
                                        Protocol: "aut",
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "eligendi",
                                            "officia",
                                            "est",
                                            "distinctio",
                                        },
                                    },
                                    FailureThreshold: 501324,
                                    Grpc: &shared.GRPCAction{
                                        Port: 533206,
                                        Service: "a",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "incidunt",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "qui",
                                                Value: "nihil",
                                            },
                                            shared.HTTPHeader{
                                                Name: "dolorum",
                                                Value: "id",
                                            },
                                            shared.HTTPHeader{
                                                Name: "voluptatum",
                                                Value: "sit",
                                            },
                                        },
                                        Path: "rem",
                                        Scheme: "corporis",
                                    },
                                    InitialDelaySeconds: 716075,
                                    PeriodSeconds: 660174,
                                    SuccessThreshold: 287991,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "nostrum",
                                        Port: 383462,
                                    },
                                    TimeoutSeconds: 618016,
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "molestiae": "debitis",
                                        "dolores": "aut",
                                        "ullam": "explicabo",
                                    },
                                    Requests: map[string]string{
                                        "ex": "deserunt",
                                        "omnis": "in",
                                        "aperiam": "et",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: 968962,
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "voluptatem",
                                            "et",
                                            "modi",
                                        },
                                    },
                                    FailureThreshold: 896547,
                                    Grpc: &shared.GRPCAction{
                                        Port: 141264,
                                        Service: "consequatur",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "aspernatur",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "maiores",
                                                Value: "saepe",
                                            },
                                            shared.HTTPHeader{
                                                Name: "quaerat",
                                                Value: "aut",
                                            },
                                        },
                                        Path: "sed",
                                        Scheme: "nihil",
                                    },
                                    InitialDelaySeconds: 447926,
                                    PeriodSeconds: 100226,
                                    SuccessThreshold: 99569,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "sint",
                                        Port: 352312,
                                    },
                                    TimeoutSeconds: 714242,
                                },
                                TerminationMessagePath: "totam",
                                TerminationMessagePolicy: "repellat",
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: "voluptatem",
                                        Name: "et",
                                        ReadOnly: false,
                                        SubPath: "accusamus",
                                    },
                                    shared.VolumeMount{
                                        MountPath: "eaque",
                                        Name: "neque",
                                        ReadOnly: false,
                                        SubPath: "molestias",
                                    },
                                    shared.VolumeMount{
                                        MountPath: "et",
                                        Name: "dolorem",
                                        ReadOnly: false,
                                        SubPath: "quia",
                                    },
                                    shared.VolumeMount{
                                        MountPath: "omnis",
                                        Name: "pariatur",
                                        ReadOnly: false,
                                        SubPath: "et",
                                    },
                                },
                                WorkingDir: "consequatur",
                            },
                            shared.Container{
                                Args: []string{
                                    "similique",
                                    "eos",
                                },
                                Command: []string{
                                    "aperiam",
                                    "quasi",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: "optio",
                                        Value: "quis",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "qui",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "quam",
                                                },
                                                Name: "quisquam",
                                                Optional: false,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "ab",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "et",
                                                },
                                                Name: "consequatur",
                                                Optional: false,
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: "aut",
                                        Value: "sit",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "vero",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "incidunt",
                                                },
                                                Name: "aut",
                                                Optional: false,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "voluptas",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "ea",
                                                },
                                                Name: "rerum",
                                                Optional: false,
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: "qui",
                                        Value: "placeat",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "ipsum",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "laboriosam",
                                                },
                                                Name: "occaecati",
                                                Optional: false,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "corrupti",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "illo",
                                                },
                                                Name: "laboriosam",
                                                Optional: false,
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: "velit",
                                        Value: "dolor",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "sit",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "ipsum",
                                                },
                                                Name: "autem",
                                                Optional: false,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "laudantium",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "modi",
                                                },
                                                Name: "officiis",
                                                Optional: false,
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "rerum",
                                            },
                                            Name: "non",
                                            Optional: false,
                                        },
                                        Prefix: "est",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "nihil",
                                            },
                                            Name: "mollitia",
                                            Optional: false,
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "doloremque",
                                            },
                                            Name: "repellendus",
                                            Optional: false,
                                        },
                                        Prefix: "dolorem",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "et",
                                            },
                                            Name: "dolorum",
                                            Optional: false,
                                        },
                                    },
                                },
                                Image: "ab",
                                ImagePullPolicy: "in",
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "labore",
                                            "asperiores",
                                            "recusandae",
                                        },
                                    },
                                    FailureThreshold: 267262,
                                    Grpc: &shared.GRPCAction{
                                        Port: 613966,
                                        Service: "soluta",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "sed",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "officia",
                                                Value: "placeat",
                                            },
                                            shared.HTTPHeader{
                                                Name: "qui",
                                                Value: "delectus",
                                            },
                                            shared.HTTPHeader{
                                                Name: "enim",
                                                Value: "iste",
                                            },
                                            shared.HTTPHeader{
                                                Name: "in",
                                                Value: "non",
                                            },
                                        },
                                        Path: "non",
                                        Scheme: "modi",
                                    },
                                    InitialDelaySeconds: 186193,
                                    PeriodSeconds: 218749,
                                    SuccessThreshold: 944373,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "similique",
                                        Port: 739551,
                                    },
                                    TimeoutSeconds: 452109,
                                },
                                Name: "quos",
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: 227414,
                                        Name: "soluta",
                                        Protocol: "aliquam",
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: 85295,
                                        Name: "inventore",
                                        Protocol: "inventore",
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: 434417,
                                        Name: "corrupti",
                                        Protocol: "enim",
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: 881005,
                                        Name: "optio",
                                        Protocol: "reiciendis",
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "et",
                                            "dolor",
                                        },
                                    },
                                    FailureThreshold: 542499,
                                    Grpc: &shared.GRPCAction{
                                        Port: 24678,
                                        Service: "at",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "et",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "soluta",
                                                Value: "deleniti",
                                            },
                                            shared.HTTPHeader{
                                                Name: "qui",
                                                Value: "cum",
                                            },
                                            shared.HTTPHeader{
                                                Name: "sed",
                                                Value: "est",
                                            },
                                        },
                                        Path: "eveniet",
                                        Scheme: "quo",
                                    },
                                    InitialDelaySeconds: 990339,
                                    PeriodSeconds: 469497,
                                    SuccessThreshold: 216897,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "blanditiis",
                                        Port: 663078,
                                    },
                                    TimeoutSeconds: 906418,
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "eos": "voluptatem",
                                        "incidunt": "possimus",
                                    },
                                    Requests: map[string]string{
                                        "voluptatem": "et",
                                        "eum": "facilis",
                                        "officia": "quia",
                                        "eum": "occaecati",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: 628982,
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "officiis",
                                        },
                                    },
                                    FailureThreshold: 311860,
                                    Grpc: &shared.GRPCAction{
                                        Port: 273542,
                                        Service: "nihil",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "quibusdam",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "amet",
                                                Value: "soluta",
                                            },
                                            shared.HTTPHeader{
                                                Name: "tenetur",
                                                Value: "blanditiis",
                                            },
                                            shared.HTTPHeader{
                                                Name: "est",
                                                Value: "atque",
                                            },
                                            shared.HTTPHeader{
                                                Name: "numquam",
                                                Value: "temporibus",
                                            },
                                        },
                                        Path: "rerum",
                                        Scheme: "incidunt",
                                    },
                                    InitialDelaySeconds: 730856,
                                    PeriodSeconds: 880298,
                                    SuccessThreshold: 253941,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "ipsam",
                                        Port: 213312,
                                    },
                                    TimeoutSeconds: 957451,
                                },
                                TerminationMessagePath: "occaecati",
                                TerminationMessagePolicy: "rem",
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: "quo",
                                        Name: "quia",
                                        ReadOnly: false,
                                        SubPath: "sequi",
                                    },
                                },
                                WorkingDir: "nihil",
                            },
                        },
                        RestartPolicy: "qui",
                        ServiceAccountName: "autem",
                        TerminationGracePeriodSeconds: "facilis",
                        Volumes: []shared.Volume{
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: 214880,
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: "amet",
                                            Mode: 586784,
                                            Path: "consequatur",
                                        },
                                        shared.KeyToPath{
                                            Key: "et",
                                            Mode: 747080,
                                            Path: "sed",
                                        },
                                    },
                                    Name: "cum",
                                    Optional: false,
                                },
                                Name: "sint",
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: 276894,
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: "quia",
                                            Mode: 716860,
                                            Path: "nihil",
                                        },
                                    },
                                    Optional: false,
                                    SecretName: "qui",
                                },
                            },
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: 463150,
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: "voluptas",
                                            Mode: 183280,
                                            Path: "quia",
                                        },
                                        shared.KeyToPath{
                                            Key: "ratione",
                                            Mode: 164959,
                                            Path: "corrupti",
                                        },
                                        shared.KeyToPath{
                                            Key: "consequuntur",
                                            Mode: 355613,
                                            Path: "quisquam",
                                        },
                                    },
                                    Name: "earum",
                                    Optional: false,
                                },
                                Name: "doloremque",
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: 765326,
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: "placeat",
                                            Mode: 92596,
                                            Path: "et",
                                        },
                                        shared.KeyToPath{
                                            Key: "eius",
                                            Mode: 83422,
                                            Path: "placeat",
                                        },
                                        shared.KeyToPath{
                                            Key: "omnis",
                                            Mode: 731694,
                                            Path: "qui",
                                        },
                                    },
                                    Optional: false,
                                    SecretName: "quae",
                                },
                            },
                        },
                    },
                },
                TTLSecondsAfterFinished: 961937,
            },
            Status: &shared.JobStatus{
                Active: 209157,
                CompletionTime: "nostrum",
                Conditions: []shared.JobCondition{
                    shared.JobCondition{
                        LastTransitionTime: "labore",
                        Message: "cum",
                        Reason: "aspernatur",
                        Severity: "veritatis",
                        Status: "sit",
                        Type: "iste",
                    },
                    shared.JobCondition{
                        LastTransitionTime: "non",
                        Message: "aut",
                        Reason: "libero",
                        Severity: "fugiat",
                        Status: "repellendus",
                        Type: "maiores",
                    },
                },
                Failed: 281730,
                ImageDigest: "nihil",
                Instances: []shared.InstanceStatus{
                    shared.InstanceStatus{
                        CompletionTime: "sit",
                        Failed: 63955,
                        Index: 512393,
                        LastAttemptResult: &shared.InstanceAttemptResult{
                            ExitCode: 485628,
                            Status: &shared.GoogleRPCStatus{
                                Code: 580447,
                                Details: []map[string]interface{}{
                                    map[string]interface{}{
                                        "debitis": "est",
                                        "laboriosam": "eius",
                                        "sapiente": "blanditiis",
                                        "incidunt": "debitis",
                                    },
                                    map[string]interface{}{
                                        "quos": "earum",
                                        "porro": "et",
                                        "corrupti": "et",
                                        "impedit": "officiis",
                                    },
                                    map[string]interface{}{
                                        "nostrum": "nulla",
                                        "pariatur": "adipisci",
                                    },
                                    map[string]interface{}{
                                        "est": "perferendis",
                                        "aut": "ut",
                                        "eos": "ratione",
                                    },
                                },
                                Message: "dolor",
                            },
                        },
                        LastExitCode: 981830,
                        Restarted: 985033,
                        StartTime: "deleniti",
                        Succeeded: 753570,
                    },
                    shared.InstanceStatus{
                        CompletionTime: "dolores",
                        Failed: 4048,
                        Index: 639473,
                        LastAttemptResult: &shared.InstanceAttemptResult{
                            ExitCode: 269479,
                            Status: &shared.GoogleRPCStatus{
                                Code: 368584,
                                Details: []map[string]interface{}{
                                    map[string]interface{}{
                                        "molestiae": "qui",
                                    },
                                    map[string]interface{}{
                                        "consectetur": "in",
                                        "excepturi": "quia",
                                    },
                                },
                                Message: "modi",
                            },
                        },
                        LastExitCode: 980700,
                        Restarted: 97844,
                        StartTime: "voluptate",
                        Succeeded: 862192,
                    },
                    shared.InstanceStatus{
                        CompletionTime: "similique",
                        Failed: 972920,
                        Index: 343605,
                        LastAttemptResult: &shared.InstanceAttemptResult{
                            ExitCode: 960835,
                            Status: &shared.GoogleRPCStatus{
                                Code: 788873,
                                Details: []map[string]interface{}{
                                    map[string]interface{}{
                                        "est": "ea",
                                        "sit": "in",
                                    },
                                    map[string]interface{}{
                                        "corporis": "voluptate",
                                    },
                                    map[string]interface{}{
                                        "incidunt": "molestiae",
                                        "magni": "voluptas",
                                        "illo": "tenetur",
                                        "est": "perferendis",
                                    },
                                    map[string]interface{}{
                                        "provident": "assumenda",
                                    },
                                },
                                Message: "corporis",
                            },
                        },
                        LastExitCode: 146946,
                        Restarted: 882860,
                        StartTime: "beatae",
                        Succeeded: 250622,
                    },
                },
                ObservedGeneration: 89603,
                StartTime: "cum",
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
