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
            Parent: "enim",
        },
        QueryParams: operations.RunNamespacesJobsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "laborum",
            Alt: "media",
            Callback: "quod",
            Fields: "rerum",
            Key: "harum",
            OauthToken: "aperiam",
            PrettyPrint: true,
            QuotaUser: "inventore",
            UploadType: "et",
            UploadProtocol: "eaque",
        },
        Request: &shared.Job{
            APIVersion: "ipsam",
            Kind: "harum",
            Metadata: &shared.ObjectMeta{
                Annotations: map[string]string{
                    "nihil": "quisquam",
                    "voluptas": "quisquam",
                },
                ClusterName: "commodi",
                CreationTimestamp: "nemo",
                DeletionGracePeriodSeconds: 6453714096930940396,
                DeletionTimestamp: "fugiat",
                Finalizers: []string{
                    "temporibus",
                    "quia",
                    "quia",
                },
                GenerateName: "atque",
                Generation: 2101377151867577046,
                Labels: map[string]string{
                    "facilis": "non",
                    "praesentium": "quaerat",
                    "aut": "quam",
                },
                Name: "ex",
                Namespace: "velit",
                OwnerReferences: []shared.OwnerReference{
                    shared.OwnerReference{
                        APIVersion: "ut",
                        BlockOwnerDeletion: true,
                        Controller: false,
                        Kind: "quia",
                        Name: "et",
                        UID: "ea",
                    },
                    shared.OwnerReference{
                        APIVersion: "occaecati",
                        BlockOwnerDeletion: true,
                        Controller: true,
                        Kind: "ut",
                        Name: "sed",
                        UID: "quae",
                    },
                },
                ResourceVersion: "accusamus",
                SelfLink: "sint",
                UID: "qui",
            },
            Spec: &shared.JobSpec{
                ActiveDeadlineSeconds: "ex",
                BackoffLimit: 7779657268589742551,
                Completions: 1792956865527528644,
                Parallelism: 7234776166320099016,
                Template: &shared.InstanceTemplateSpec{
                    Spec: &shared.InstanceSpec{
                        ActiveDeadlineSeconds: "molestiae",
                        Containers: []shared.Container{
                            shared.Container{
                                Args: []string{
                                    "est",
                                    "reiciendis",
                                    "dolorem",
                                },
                                Command: []string{
                                    "saepe",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: "numquam",
                                        Value: "blanditiis",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "voluptatum",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "eius",
                                                },
                                                Name: "non",
                                                Optional: true,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "enim",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "vero",
                                                },
                                                Name: "tempora",
                                                Optional: true,
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "beatae",
                                            },
                                            Name: "perferendis",
                                            Optional: false,
                                        },
                                        Prefix: "quia",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "ea",
                                            },
                                            Name: "quia",
                                            Optional: false,
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "laborum",
                                            },
                                            Name: "eius",
                                            Optional: false,
                                        },
                                        Prefix: "est",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "sunt",
                                            },
                                            Name: "fuga",
                                            Optional: true,
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "dolorem",
                                            },
                                            Name: "aut",
                                            Optional: false,
                                        },
                                        Prefix: "consequatur",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "at",
                                            },
                                            Name: "consequatur",
                                            Optional: false,
                                        },
                                    },
                                },
                                Image: "autem",
                                ImagePullPolicy: "nulla",
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "aut",
                                        },
                                    },
                                    FailureThreshold: 6985482160243577134,
                                    Grpc: &shared.GrpcAction{
                                        Port: 3122290306431552078,
                                        Service: "rerum",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "dolor",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "consequatur",
                                                Value: "tempora",
                                            },
                                            shared.HTTPHeader{
                                                Name: "rerum",
                                                Value: "cupiditate",
                                            },
                                            shared.HTTPHeader{
                                                Name: "maiores",
                                                Value: "ut",
                                            },
                                        },
                                        Path: "nesciunt",
                                        Scheme: "harum",
                                    },
                                    InitialDelaySeconds: 1341042802983558072,
                                    PeriodSeconds: 2261388091978808538,
                                    SuccessThreshold: 5049867522018926837,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "dolores",
                                        Port: 3285748849672041982,
                                    },
                                    TimeoutSeconds: 2379224937811426956,
                                },
                                Name: "voluptas",
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: 167278061125572114,
                                        Name: "laudantium",
                                        Protocol: "eos",
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: 8651734962540941819,
                                        Name: "corporis",
                                        Protocol: "reiciendis",
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: 3149450482457176524,
                                        Name: "enim",
                                        Protocol: "quia",
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "qui",
                                        },
                                    },
                                    FailureThreshold: 7800862225171734444,
                                    Grpc: &shared.GrpcAction{
                                        Port: 7646143480735881930,
                                        Service: "commodi",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "nihil",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "aut",
                                                Value: "ut",
                                            },
                                            shared.HTTPHeader{
                                                Name: "blanditiis",
                                                Value: "molestias",
                                            },
                                            shared.HTTPHeader{
                                                Name: "facilis",
                                                Value: "vel",
                                            },
                                        },
                                        Path: "qui",
                                        Scheme: "aliquid",
                                    },
                                    InitialDelaySeconds: 1479729650239882650,
                                    PeriodSeconds: 4479028951919046704,
                                    SuccessThreshold: 7146678446579534506,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "voluptatem",
                                        Port: 5021092034517550895,
                                    },
                                    TimeoutSeconds: 1213150533102834344,
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "unde": "nihil",
                                        "dignissimos": "alias",
                                    },
                                    Requests: map[string]string{
                                        "repellendus": "accusamus",
                                        "recusandae": "laborum",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: 6788108076222843314,
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "voluptatem",
                                            "quos",
                                        },
                                    },
                                    FailureThreshold: 3116185289826805173,
                                    Grpc: &shared.GrpcAction{
                                        Port: 2963920337489824753,
                                        Service: "rerum",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "ex",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "repellat",
                                                Value: "consequatur",
                                            },
                                        },
                                        Path: "dolores",
                                        Scheme: "et",
                                    },
                                    InitialDelaySeconds: 1408626990406663819,
                                    PeriodSeconds: 1893755096861767896,
                                    SuccessThreshold: 5866674423741039675,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "totam",
                                        Port: 959810713293704411,
                                    },
                                    TimeoutSeconds: 4714423332913394878,
                                },
                                TerminationMessagePath: "distinctio",
                                TerminationMessagePolicy: "dicta",
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: "soluta",
                                        Name: "nobis",
                                        ReadOnly: false,
                                        SubPath: "architecto",
                                    },
                                    shared.VolumeMount{
                                        MountPath: "dolorem",
                                        Name: "dignissimos",
                                        ReadOnly: false,
                                        SubPath: "nihil",
                                    },
                                },
                                WorkingDir: "cupiditate",
                            },
                            shared.Container{
                                Args: []string{
                                    "quam",
                                    "neque",
                                    "dolor",
                                },
                                Command: []string{
                                    "occaecati",
                                    "dolorum",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: "ut",
                                        Value: "provident",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "ut",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "ab",
                                                },
                                                Name: "dolores",
                                                Optional: true,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "rem",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "sed",
                                                },
                                                Name: "et",
                                                Optional: true,
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: "facilis",
                                        Value: "doloremque",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "quia",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "et",
                                                },
                                                Name: "quaerat",
                                                Optional: false,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "nihil",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "nesciunt",
                                                },
                                                Name: "rerum",
                                                Optional: false,
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: "voluptas",
                                        Value: "impedit",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "aliquid",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "neque",
                                                },
                                                Name: "praesentium",
                                                Optional: false,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "sunt",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "consequatur",
                                                },
                                                Name: "at",
                                                Optional: true,
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "laboriosam",
                                            },
                                            Name: "non",
                                            Optional: true,
                                        },
                                        Prefix: "ut",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "itaque",
                                            },
                                            Name: "veniam",
                                            Optional: false,
                                        },
                                    },
                                },
                                Image: "animi",
                                ImagePullPolicy: "possimus",
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "omnis",
                                        },
                                    },
                                    FailureThreshold: 315573874486451977,
                                    Grpc: &shared.GrpcAction{
                                        Port: 7666685973079791295,
                                        Service: "animi",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "quia",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "hic",
                                                Value: "ipsa",
                                            },
                                            shared.HTTPHeader{
                                                Name: "quis",
                                                Value: "commodi",
                                            },
                                        },
                                        Path: "ex",
                                        Scheme: "deserunt",
                                    },
                                    InitialDelaySeconds: 981436900934591844,
                                    PeriodSeconds: 4581454482088234510,
                                    SuccessThreshold: 179112662415464621,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "repudiandae",
                                        Port: 782207130142971480,
                                    },
                                    TimeoutSeconds: 3653907834177894124,
                                },
                                Name: "velit",
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: 2288118683927988821,
                                        Name: "iste",
                                        Protocol: "deleniti",
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "qui",
                                            "qui",
                                            "incidunt",
                                        },
                                    },
                                    FailureThreshold: 2478517248106433097,
                                    Grpc: &shared.GrpcAction{
                                        Port: 242235837050061180,
                                        Service: "hic",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "molestiae",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "qui",
                                                Value: "voluptatum",
                                            },
                                            shared.HTTPHeader{
                                                Name: "et",
                                                Value: "quia",
                                            },
                                        },
                                        Path: "numquam",
                                        Scheme: "est",
                                    },
                                    InitialDelaySeconds: 7631793729977865475,
                                    PeriodSeconds: 4645514368340063137,
                                    SuccessThreshold: 3000746524723787116,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "sed",
                                        Port: 7475321409911338195,
                                    },
                                    TimeoutSeconds: 8998533309896368173,
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "ipsum": "illo",
                                        "eius": "voluptates",
                                        "ipsa": "maxime",
                                    },
                                    Requests: map[string]string{
                                        "ut": "corporis",
                                        "adipisci": "iusto",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: 2487606191069986801,
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "sed",
                                            "esse",
                                            "est",
                                        },
                                    },
                                    FailureThreshold: 7810418511947945314,
                                    Grpc: &shared.GrpcAction{
                                        Port: 259903196017288033,
                                        Service: "itaque",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "porro",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "velit",
                                                Value: "aspernatur",
                                            },
                                            shared.HTTPHeader{
                                                Name: "in",
                                                Value: "enim",
                                            },
                                            shared.HTTPHeader{
                                                Name: "voluptas",
                                                Value: "cum",
                                            },
                                        },
                                        Path: "est",
                                        Scheme: "enim",
                                    },
                                    InitialDelaySeconds: 5875076085841148581,
                                    PeriodSeconds: 944674612994866554,
                                    SuccessThreshold: 8561204863850040397,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "eveniet",
                                        Port: 9131875940661912577,
                                    },
                                    TimeoutSeconds: 4868780682979768935,
                                },
                                TerminationMessagePath: "et",
                                TerminationMessagePolicy: "eligendi",
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: "voluptas",
                                        Name: "facere",
                                        ReadOnly: false,
                                        SubPath: "cumque",
                                    },
                                },
                                WorkingDir: "voluptatum",
                            },
                            shared.Container{
                                Args: []string{
                                    "dolorum",
                                    "perferendis",
                                },
                                Command: []string{
                                    "mollitia",
                                    "amet",
                                    "quos",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: "quia",
                                        Value: "aperiam",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "eos",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "provident",
                                                },
                                                Name: "quo",
                                                Optional: false,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "est",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "enim",
                                                },
                                                Name: "aspernatur",
                                                Optional: false,
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: "et",
                                        Value: "aliquid",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "totam",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "alias",
                                                },
                                                Name: "omnis",
                                                Optional: true,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "qui",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "explicabo",
                                                },
                                                Name: "nemo",
                                                Optional: false,
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: "laborum",
                                        Value: "qui",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "incidunt",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "qui",
                                                },
                                                Name: "hic",
                                                Optional: true,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "impedit",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "pariatur",
                                                },
                                                Name: "sapiente",
                                                Optional: true,
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "libero",
                                            },
                                            Name: "dolores",
                                            Optional: true,
                                        },
                                        Prefix: "odio",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "ut",
                                            },
                                            Name: "quo",
                                            Optional: false,
                                        },
                                    },
                                },
                                Image: "saepe",
                                ImagePullPolicy: "et",
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "quaerat",
                                            "nisi",
                                        },
                                    },
                                    FailureThreshold: 6735860509974746170,
                                    Grpc: &shared.GrpcAction{
                                        Port: 4869316515605409665,
                                        Service: "sit",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "nostrum",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "ut",
                                                Value: "inventore",
                                            },
                                        },
                                        Path: "consectetur",
                                        Scheme: "temporibus",
                                    },
                                    InitialDelaySeconds: 2789359967135664983,
                                    PeriodSeconds: 6438456243154048894,
                                    SuccessThreshold: 7902112502488341895,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "saepe",
                                        Port: 6246542144922409069,
                                    },
                                    TimeoutSeconds: 968779009543895434,
                                },
                                Name: "quas",
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: 2049647356036480613,
                                        Name: "omnis",
                                        Protocol: "et",
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: 1133716337049902819,
                                        Name: "voluptatem",
                                        Protocol: "voluptas",
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "fugit",
                                            "dolorum",
                                        },
                                    },
                                    FailureThreshold: 740371854030536032,
                                    Grpc: &shared.GrpcAction{
                                        Port: 3434696896092427293,
                                        Service: "sunt",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "natus",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "in",
                                                Value: "reiciendis",
                                            },
                                        },
                                        Path: "temporibus",
                                        Scheme: "a",
                                    },
                                    InitialDelaySeconds: 4343310699711623317,
                                    PeriodSeconds: 8172573737855255240,
                                    SuccessThreshold: 1044352499842310006,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "et",
                                        Port: 4245183093343670037,
                                    },
                                    TimeoutSeconds: 2448369512163081491,
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "labore": "et",
                                        "harum": "deserunt",
                                        "debitis": "eos",
                                    },
                                    Requests: map[string]string{
                                        "omnis": "explicabo",
                                        "distinctio": "deserunt",
                                        "qui": "unde",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: 7580677906709294923,
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "quis",
                                        },
                                    },
                                    FailureThreshold: 1460968922743757590,
                                    Grpc: &shared.GrpcAction{
                                        Port: 8299096568124795615,
                                        Service: "velit",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "facere",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "et",
                                                Value: "odio",
                                            },
                                            shared.HTTPHeader{
                                                Name: "temporibus",
                                                Value: "cum",
                                            },
                                            shared.HTTPHeader{
                                                Name: "quia",
                                                Value: "odit",
                                            },
                                        },
                                        Path: "non",
                                        Scheme: "id",
                                    },
                                    InitialDelaySeconds: 5966618044603483254,
                                    PeriodSeconds: 3333412128995574101,
                                    SuccessThreshold: 7356779412725026479,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "rerum",
                                        Port: 1570339978914381894,
                                    },
                                    TimeoutSeconds: 8088809981269046018,
                                },
                                TerminationMessagePath: "eum",
                                TerminationMessagePolicy: "qui",
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: "alias",
                                        Name: "ea",
                                        ReadOnly: true,
                                        SubPath: "sint",
                                    },
                                },
                                WorkingDir: "sint",
                            },
                        },
                        RestartPolicy: "libero",
                        ServiceAccountName: "nostrum",
                        TerminationGracePeriodSeconds: "sit",
                        Volumes: []shared.Volume{
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: 1639583379729093192,
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: "error",
                                            Mode: 7420944473899685185,
                                            Path: "recusandae",
                                        },
                                        shared.KeyToPath{
                                            Key: "temporibus",
                                            Mode: 6987002107089514715,
                                            Path: "ab",
                                        },
                                    },
                                    Name: "fugiat",
                                    Optional: false,
                                },
                                Name: "nesciunt",
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: 7126662202056262872,
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: "nemo",
                                            Mode: 2827649010038538006,
                                            Path: "reprehenderit",
                                        },
                                        shared.KeyToPath{
                                            Key: "est",
                                            Mode: 2528065893475159419,
                                            Path: "libero",
                                        },
                                    },
                                    Optional: false,
                                    SecretName: "sint",
                                },
                            },
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: 8663515529311143754,
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: "aut",
                                            Mode: 3673417153413844051,
                                            Path: "esse",
                                        },
                                    },
                                    Name: "rerum",
                                    Optional: false,
                                },
                                Name: "atque",
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: 1589920889813026691,
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: "officiis",
                                            Mode: 5125257148659162615,
                                            Path: "tempore",
                                        },
                                        shared.KeyToPath{
                                            Key: "animi",
                                            Mode: 780756487370987079,
                                            Path: "impedit",
                                        },
                                    },
                                    Optional: false,
                                    SecretName: "est",
                                },
                            },
                        },
                    },
                },
                TTLSecondsAfterFinished: 859792270285704047,
            },
            Status: &shared.JobStatus{
                Active: 5642624655095294941,
                CompletionTime: "repudiandae",
                Conditions: []shared.JobCondition{
                    shared.JobCondition{
                        LastTransitionTime: "occaecati",
                        Message: "eum",
                        Reason: "magni",
                        Severity: "quia",
                        Status: "totam",
                        Type: "doloremque",
                    },
                    shared.JobCondition{
                        LastTransitionTime: "ea",
                        Message: "et",
                        Reason: "ab",
                        Severity: "inventore",
                        Status: "nobis",
                        Type: "sed",
                    },
                    shared.JobCondition{
                        LastTransitionTime: "molestias",
                        Message: "laudantium",
                        Reason: "repellat",
                        Severity: "soluta",
                        Status: "et",
                        Type: "nobis",
                    },
                },
                Failed: 8421323980057856092,
                ImageDigest: "necessitatibus",
                Instances: []shared.InstanceStatus{
                    shared.InstanceStatus{
                        CompletionTime: "sint",
                        Failed: 240134593683077543,
                        Index: 6893756287906512848,
                        LastAttemptResult: &shared.InstanceAttemptResult{
                            ExitCode: 8415717658054425978,
                            Status: &shared.GoogleRPCStatus{
                                Code: 4618230420482501914,
                                Details: []map[string]interface{}{
                                    map[string]interface{}{
                                        "aut": "quibusdam",
                                        "adipisci": "aut",
                                        "expedita": "aliquam",
                                    },
                                    map[string]interface{}{
                                        "debitis": "alias",
                                    },
                                    map[string]interface{}{
                                        "fugit": "cum",
                                        "fugiat": "necessitatibus",
                                        "provident": "voluptatem",
                                    },
                                },
                                Message: "voluptas",
                            },
                        },
                        LastExitCode: 50615564660923296,
                        Restarted: 2368992452519760401,
                        StartTime: "et",
                        Succeeded: 8817418480462070721,
                    },
                },
                ObservedGeneration: 3791791777522260228,
                StartTime: "quia",
                Succeeded: 4144695704002107007,
            },
        },
    }
    
    res, err := s.Namespaces.RunNamespacesJobsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->