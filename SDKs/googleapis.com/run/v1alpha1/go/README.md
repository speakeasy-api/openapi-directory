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
            Parent: "nesciunt",
        },
        QueryParams: operations.RunNamespacesJobsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "fugit",
            Alt: "proto",
            Callback: "aut",
            Fields: "eligendi",
            Key: "id",
            OauthToken: "non",
            PrettyPrint: true,
            QuotaUser: "quibusdam",
            UploadType: "alias",
            UploadProtocol: "eveniet",
        },
        Request: &shared.Job{
            APIVersion: "quod",
            Kind: "voluptatem",
            Metadata: &shared.ObjectMeta{
                Annotations: map[string]string{
                    "praesentium": "ut",
                },
                ClusterName: "nam",
                CreationTimestamp: "iusto",
                DeletionGracePeriodSeconds: 4063239637690904826,
                DeletionTimestamp: "et",
                Finalizers: []string{
                    "sed",
                },
                GenerateName: "asperiores",
                Generation: 1366572102276544,
                Labels: map[string]string{
                    "sunt": "qui",
                    "fugiat": "aperiam",
                    "quos": "nemo",
                },
                Name: "ex",
                Namespace: "qui",
                OwnerReferences: []shared.OwnerReference{
                    shared.OwnerReference{
                        APIVersion: "voluptatem",
                        BlockOwnerDeletion: false,
                        Controller: false,
                        Kind: "rerum",
                        Name: "tempora",
                        UID: "sequi",
                    },
                    shared.OwnerReference{
                        APIVersion: "nostrum",
                        BlockOwnerDeletion: false,
                        Controller: true,
                        Kind: "est",
                        Name: "neque",
                        UID: "rerum",
                    },
                    shared.OwnerReference{
                        APIVersion: "reiciendis",
                        BlockOwnerDeletion: false,
                        Controller: false,
                        Kind: "praesentium",
                        Name: "vero",
                        UID: "in",
                    },
                },
                ResourceVersion: "eaque",
                SelfLink: "aperiam",
                UID: "debitis",
            },
            Spec: &shared.JobSpec{
                ActiveDeadlineSeconds: "quia",
                BackoffLimit: 2884293167367350750,
                Completions: 2230678832979351826,
                Parallelism: 4290514301506409955,
                Template: &shared.InstanceTemplateSpec{
                    Spec: &shared.InstanceSpec{
                        ActiveDeadlineSeconds: "sunt",
                        Containers: []shared.Container{
                            shared.Container{
                                Args: []string{
                                    "pariatur",
                                    "aut",
                                },
                                Command: []string{
                                    "quia",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: "qui",
                                        Value: "qui",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "ut",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "nam",
                                                },
                                                Name: "et",
                                                Optional: true,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "ut",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "veniam",
                                                },
                                                Name: "odit",
                                                Optional: false,
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "sint",
                                            },
                                            Name: "iusto",
                                            Optional: true,
                                        },
                                        Prefix: "corrupti",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "voluptas",
                                            },
                                            Name: "unde",
                                            Optional: true,
                                        },
                                    },
                                },
                                Image: "nemo",
                                ImagePullPolicy: "perferendis",
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "voluptatem",
                                        },
                                    },
                                    FailureThreshold: 5700153455771036856,
                                    Grpc: &shared.GrpcAction{
                                        Port: 4397856692726659538,
                                        Service: "ut",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "consectetur",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "tenetur",
                                                Value: "ullam",
                                            },
                                            shared.HTTPHeader{
                                                Name: "modi",
                                                Value: "quo",
                                            },
                                            shared.HTTPHeader{
                                                Name: "tempore",
                                                Value: "omnis",
                                            },
                                        },
                                        Path: "quidem",
                                        Scheme: "laborum",
                                    },
                                    InitialDelaySeconds: 5450297021541819517,
                                    PeriodSeconds: 8761593523852404718,
                                    SuccessThreshold: 7657485922753769803,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "quam",
                                        Port: 845376679314711657,
                                    },
                                    TimeoutSeconds: 885554640617174282,
                                },
                                Name: "unde",
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: 3120977585211979754,
                                        Name: "perspiciatis",
                                        Protocol: "quia",
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: 8968931168193733856,
                                        Name: "voluptatem",
                                        Protocol: "dolorem",
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "fugiat",
                                            "tempore",
                                        },
                                    },
                                    FailureThreshold: 8201742276083127418,
                                    Grpc: &shared.GrpcAction{
                                        Port: 7293860200403105304,
                                        Service: "natus",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "dolores",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "et",
                                                Value: "qui",
                                            },
                                            shared.HTTPHeader{
                                                Name: "molestiae",
                                                Value: "eos",
                                            },
                                            shared.HTTPHeader{
                                                Name: "est",
                                                Value: "eaque",
                                            },
                                        },
                                        Path: "aliquid",
                                        Scheme: "sed",
                                    },
                                    InitialDelaySeconds: 6189909207947001558,
                                    PeriodSeconds: 1718360398048267082,
                                    SuccessThreshold: 9182776419247387771,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "exercitationem",
                                        Port: 2934755774424534288,
                                    },
                                    TimeoutSeconds: 8326600461687117106,
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "provident": "et",
                                        "eos": "et",
                                        "reprehenderit": "soluta",
                                    },
                                    Requests: map[string]string{
                                        "tempore": "maiores",
                                        "et": "cumque",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: 4250542133465399253,
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "voluptatem",
                                            "rerum",
                                        },
                                    },
                                    FailureThreshold: 5084251026971243878,
                                    Grpc: &shared.GrpcAction{
                                        Port: 4266395181066091929,
                                        Service: "aliquid",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "autem",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "non",
                                                Value: "soluta",
                                            },
                                        },
                                        Path: "sint",
                                        Scheme: "voluptatum",
                                    },
                                    InitialDelaySeconds: 6237824671297816864,
                                    PeriodSeconds: 3908054271759577312,
                                    SuccessThreshold: 2572294861847626480,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "vel",
                                        Port: 8421021140692472780,
                                    },
                                    TimeoutSeconds: 2508249736854256188,
                                },
                                TerminationMessagePath: "soluta",
                                TerminationMessagePolicy: "ducimus",
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: "mollitia",
                                        Name: "ducimus",
                                        ReadOnly: false,
                                        SubPath: "alias",
                                    },
                                    shared.VolumeMount{
                                        MountPath: "voluptatem",
                                        Name: "autem",
                                        ReadOnly: true,
                                        SubPath: "sapiente",
                                    },
                                    shared.VolumeMount{
                                        MountPath: "ut",
                                        Name: "nobis",
                                        ReadOnly: false,
                                        SubPath: "dignissimos",
                                    },
                                },
                                WorkingDir: "quia",
                            },
                        },
                        RestartPolicy: "corrupti",
                        ServiceAccountName: "sunt",
                        TerminationGracePeriodSeconds: "aut",
                        Volumes: []shared.Volume{
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: 809498144542269762,
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: "placeat",
                                            Mode: 8202538512814031506,
                                            Path: "est",
                                        },
                                    },
                                    Name: "qui",
                                    Optional: true,
                                },
                                Name: "illum",
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: 5721508061183616224,
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: "quae",
                                            Mode: 498637699019691330,
                                            Path: "unde",
                                        },
                                    },
                                    Optional: true,
                                    SecretName: "labore",
                                },
                            },
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: 879960681693815483,
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: "accusamus",
                                            Mode: 526280520101550852,
                                            Path: "aspernatur",
                                        },
                                        shared.KeyToPath{
                                            Key: "omnis",
                                            Mode: 4020728757503392183,
                                            Path: "aut",
                                        },
                                        shared.KeyToPath{
                                            Key: "in",
                                            Mode: 5792208614002979925,
                                            Path: "modi",
                                        },
                                    },
                                    Name: "odio",
                                    Optional: false,
                                },
                                Name: "dolore",
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: 1551379266631559452,
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: "ducimus",
                                            Mode: 4222366766425552751,
                                            Path: "corrupti",
                                        },
                                    },
                                    Optional: true,
                                    SecretName: "et",
                                },
                            },
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: 6601544163793102588,
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: "officiis",
                                            Mode: 7065365967864617301,
                                            Path: "tempore",
                                        },
                                        shared.KeyToPath{
                                            Key: "consequuntur",
                                            Mode: 8715245019357289443,
                                            Path: "non",
                                        },
                                    },
                                    Name: "illum",
                                    Optional: false,
                                },
                                Name: "ut",
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: 2767915570651407841,
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: "hic",
                                            Mode: 7567307637330213215,
                                            Path: "sit",
                                        },
                                        shared.KeyToPath{
                                            Key: "non",
                                            Mode: 977719935624292390,
                                            Path: "voluptas",
                                        },
                                        shared.KeyToPath{
                                            Key: "perspiciatis",
                                            Mode: 7657233229670178852,
                                            Path: "quasi",
                                        },
                                    },
                                    Optional: true,
                                    SecretName: "expedita",
                                },
                            },
                        },
                    },
                },
                TTLSecondsAfterFinished: 8810518675504254451,
            },
            Status: &shared.JobStatus{
                Active: 2647666410231573846,
                CompletionTime: "nemo",
                Conditions: []shared.JobCondition{
                    shared.JobCondition{
                        LastTransitionTime: "temporibus",
                        Message: "aut",
                        Reason: "ex",
                        Severity: "voluptatem",
                        Status: "aliquam",
                        Type: "corporis",
                    },
                    shared.JobCondition{
                        LastTransitionTime: "vel",
                        Message: "commodi",
                        Reason: "aut",
                        Severity: "autem",
                        Status: "animi",
                        Type: "quam",
                    },
                    shared.JobCondition{
                        LastTransitionTime: "sit",
                        Message: "aut",
                        Reason: "assumenda",
                        Severity: "asperiores",
                        Status: "aliquid",
                        Type: "autem",
                    },
                },
                Failed: 7196876235869905190,
                ImageDigest: "enim",
                Instances: []shared.InstanceStatus{
                    shared.InstanceStatus{
                        CompletionTime: "vero",
                        Failed: 6571411243513244465,
                        Index: 5792270310506781711,
                        LastAttemptResult: &shared.InstanceAttemptResult{
                            ExitCode: 7262581908585006618,
                            Status: &shared.GoogleRPCStatus{
                                Code: 7263631210042775073,
                                Details: []map[string]interface{}{
                                    map[string]interface{}{
                                        "excepturi": "excepturi",
                                        "aut": "quia",
                                    },
                                },
                                Message: "nulla",
                            },
                        },
                        LastExitCode: 2780127506272197372,
                        Restarted: 7759270121395915458,
                        StartTime: "esse",
                        Succeeded: 858733734049586196,
                    },
                    shared.InstanceStatus{
                        CompletionTime: "aut",
                        Failed: 7433489349344159142,
                        Index: 7205684613211767704,
                        LastAttemptResult: &shared.InstanceAttemptResult{
                            ExitCode: 8528621005886068371,
                            Status: &shared.GoogleRPCStatus{
                                Code: 8590638054199711489,
                                Details: []map[string]interface{}{
                                    map[string]interface{}{
                                        "id": "laudantium",
                                        "quis": "aspernatur",
                                        "quibusdam": "cupiditate",
                                    },
                                    map[string]interface{}{
                                        "aut": "reiciendis",
                                    },
                                },
                                Message: "voluptas",
                            },
                        },
                        LastExitCode: 2589978446189390501,
                        Restarted: 3381153955800394242,
                        StartTime: "distinctio",
                        Succeeded: 4330030033128116391,
                    },
                    shared.InstanceStatus{
                        CompletionTime: "beatae",
                        Failed: 3019085975435534377,
                        Index: 5237798031403217148,
                        LastAttemptResult: &shared.InstanceAttemptResult{
                            ExitCode: 6275637573416155703,
                            Status: &shared.GoogleRPCStatus{
                                Code: 366738830711251497,
                                Details: []map[string]interface{}{
                                    map[string]interface{}{
                                        "corrupti": "eum",
                                        "temporibus": "et",
                                    },
                                },
                                Message: "quia",
                            },
                        },
                        LastExitCode: 804547771258138340,
                        Restarted: 1032253867248932226,
                        StartTime: "veritatis",
                        Succeeded: 6671132121459243904,
                    },
                },
                ObservedGeneration: 8574942949169313192,
                StartTime: "et",
                Succeeded: 821777092402364754,
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### namespaces

* `RunNamespacesJobsCreate` - Create a job.
* `RunNamespacesJobsDelete` - Delete a job.
* `RunNamespacesJobsGet` - Get information about a job.
* `RunNamespacesJobsList` - List jobs.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
