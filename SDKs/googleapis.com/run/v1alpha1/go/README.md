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
            Parent: "sit",
        },
        QueryParams: operations.RunNamespacesJobsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.Job{
            APIVersion: "dicta",
            Kind: "debitis",
            Metadata: &shared.ObjectMeta{
                Annotations: map[string]string{
                    "et": "ut",
                },
                ClusterName: "dolorem",
                CreationTimestamp: "et",
                DeletionGracePeriodSeconds: 7373105480197164748,
                DeletionTimestamp: "iste",
                Finalizers: []string{
                    "totam",
                },
                GenerateName: "dolores",
                Generation: 1929546706668609706,
                Labels: map[string]string{
                    "vel": "odio",
                },
                Name: "dolore",
                Namespace: "id",
                OwnerReferences: []shared.OwnerReference{
                    shared.OwnerReference{
                        APIVersion: "accusantium",
                        BlockOwnerDeletion: false,
                        Controller: false,
                        Kind: "quis",
                        Name: "est",
                        UID: "aut",
                    },
                },
                ResourceVersion: "odit",
                SelfLink: "non",
                UID: "voluptas",
            },
            Spec: &shared.JobSpec{
                ActiveDeadlineSeconds: "omnis",
                BackoffLimit: 1059542851699319360,
                Completions: 6972732843819909978,
                Parallelism: 5558237345453186302,
                Template: &shared.InstanceTemplateSpec{
                    Spec: &shared.InstanceSpec{
                        ActiveDeadlineSeconds: "officiis",
                        Containers: []shared.Container{
                            shared.Container{
                                Args: []string{
                                    "nobis",
                                },
                                Command: []string{
                                    "qui",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: "at",
                                        Value: "ipsum",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "eveniet",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "modi",
                                                },
                                                Name: "sint",
                                                Optional: true,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "ut",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "exercitationem",
                                                },
                                                Name: "aut",
                                                Optional: false,
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: "tempore",
                                        Value: "maiores",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "incidunt",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "dolor",
                                                },
                                                Name: "beatae",
                                                Optional: true,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "in",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "et",
                                                },
                                                Name: "omnis",
                                                Optional: false,
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: "ex",
                                        Value: "dolores",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "placeat",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "vel",
                                                },
                                                Name: "rerum",
                                                Optional: true,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "voluptas",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "quam",
                                                },
                                                Name: "reprehenderit",
                                                Optional: true,
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "unde",
                                            },
                                            Name: "in",
                                            Optional: false,
                                        },
                                        Prefix: "qui",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "ut",
                                            },
                                            Name: "itaque",
                                            Optional: false,
                                        },
                                    },
                                },
                                Image: "neque",
                                ImagePullPolicy: "ullam",
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "accusantium",
                                            "esse",
                                            "architecto",
                                        },
                                    },
                                    FailureThreshold: 9021104375654741729,
                                    Grpc: &shared.GrpcAction{
                                        Port: 3604381780091280195,
                                        Service: "cumque",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "soluta",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "voluptates",
                                                Value: "magni",
                                            },
                                            shared.HTTPHeader{
                                                Name: "et",
                                                Value: "optio",
                                            },
                                        },
                                        Path: "qui",
                                        Scheme: "earum",
                                    },
                                    InitialDelaySeconds: 4391202566038595699,
                                    PeriodSeconds: 6215632031706852400,
                                    SuccessThreshold: 241482278320610612,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "consequatur",
                                        Port: 5364953311572054685,
                                    },
                                    TimeoutSeconds: 7945398411639602224,
                                },
                                Name: "error",
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: 4989862523986425397,
                                        Name: "nostrum",
                                        Protocol: "ut",
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "sed",
                                            "a",
                                            "soluta",
                                        },
                                    },
                                    FailureThreshold: 7540276489530073149,
                                    Grpc: &shared.GrpcAction{
                                        Port: 7638413271565042464,
                                        Service: "consequuntur",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "laudantium",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "ipsa",
                                                Value: "expedita",
                                            },
                                        },
                                        Path: "doloremque",
                                        Scheme: "perferendis",
                                    },
                                    InitialDelaySeconds: 8497925768463229012,
                                    PeriodSeconds: 5311927246208705713,
                                    SuccessThreshold: 3967212276624460248,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "explicabo",
                                        Port: 1115785012616387305,
                                    },
                                    TimeoutSeconds: 2629911606854649819,
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "perferendis": "et",
                                    },
                                    Requests: map[string]string{
                                        "reiciendis": "quis",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: 5026609382502824278,
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "necessitatibus",
                                        },
                                    },
                                    FailureThreshold: 9205243623417456715,
                                    Grpc: &shared.GrpcAction{
                                        Port: 190417550815006435,
                                        Service: "eum",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "labore",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "impedit",
                                                Value: "ad",
                                            },
                                            shared.HTTPHeader{
                                                Name: "expedita",
                                                Value: "vel",
                                            },
                                        },
                                        Path: "qui",
                                        Scheme: "modi",
                                    },
                                    InitialDelaySeconds: 8279128640960530079,
                                    PeriodSeconds: 1011676084465510524,
                                    SuccessThreshold: 8764227983217623240,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "eaque",
                                        Port: 7941830299651147569,
                                    },
                                    TimeoutSeconds: 157519078836327761,
                                },
                                TerminationMessagePath: "autem",
                                TerminationMessagePolicy: "quis",
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: "vel",
                                        Name: "placeat",
                                        ReadOnly: true,
                                        SubPath: "nisi",
                                    },
                                    shared.VolumeMount{
                                        MountPath: "quis",
                                        Name: "adipisci",
                                        ReadOnly: false,
                                        SubPath: "rerum",
                                    },
                                },
                                WorkingDir: "et",
                            },
                            shared.Container{
                                Args: []string{
                                    "numquam",
                                    "laborum",
                                    "rerum",
                                },
                                Command: []string{
                                    "laborum",
                                    "fugit",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: "minus",
                                        Value: "soluta",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "aperiam",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "consequuntur",
                                                },
                                                Name: "excepturi",
                                                Optional: true,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "inventore",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "delectus",
                                                },
                                                Name: "ipsa",
                                                Optional: false,
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: "animi",
                                        Value: "ut",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "aliquam",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "fuga",
                                                },
                                                Name: "sed",
                                                Optional: false,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "et",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "consequuntur",
                                                },
                                                Name: "non",
                                                Optional: true,
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: "provident",
                                        Value: "molestiae",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "pariatur",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "quasi",
                                                },
                                                Name: "corrupti",
                                                Optional: false,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "qui",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "sit",
                                                },
                                                Name: "possimus",
                                                Optional: true,
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "consequuntur",
                                            },
                                            Name: "quia",
                                            Optional: true,
                                        },
                                        Prefix: "est",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "occaecati",
                                            },
                                            Name: "ex",
                                            Optional: true,
                                        },
                                    },
                                },
                                Image: "quia",
                                ImagePullPolicy: "temporibus",
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "quae",
                                        },
                                    },
                                    FailureThreshold: 5042961816383320698,
                                    Grpc: &shared.GrpcAction{
                                        Port: 283784251954593037,
                                        Service: "necessitatibus",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "in",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "voluptatem",
                                                Value: "dolorum",
                                            },
                                            shared.HTTPHeader{
                                                Name: "doloribus",
                                                Value: "saepe",
                                            },
                                            shared.HTTPHeader{
                                                Name: "sunt",
                                                Value: "earum",
                                            },
                                        },
                                        Path: "et",
                                        Scheme: "ut",
                                    },
                                    InitialDelaySeconds: 1514803956160473307,
                                    PeriodSeconds: 8363070169127058929,
                                    SuccessThreshold: 5192917599516086534,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "ipsum",
                                        Port: 6787227741588449494,
                                    },
                                    TimeoutSeconds: 4883506937319508494,
                                },
                                Name: "nihil",
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: 8481809518534237594,
                                        Name: "impedit",
                                        Protocol: "non",
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "ut",
                                        },
                                    },
                                    FailureThreshold: 3357930257403748968,
                                    Grpc: &shared.GrpcAction{
                                        Port: 371208508841907247,
                                        Service: "qui",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "quia",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "ducimus",
                                                Value: "enim",
                                            },
                                            shared.HTTPHeader{
                                                Name: "blanditiis",
                                                Value: "distinctio",
                                            },
                                            shared.HTTPHeader{
                                                Name: "delectus",
                                                Value: "rerum",
                                            },
                                        },
                                        Path: "dolore",
                                        Scheme: "repellat",
                                    },
                                    InitialDelaySeconds: 7796777083842162182,
                                    PeriodSeconds: 1469755398674317289,
                                    SuccessThreshold: 8230160685758639177,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "sunt",
                                        Port: 29372123613087746,
                                    },
                                    TimeoutSeconds: 4286316651252402687,
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "a": "qui",
                                        "excepturi": "autem",
                                        "corporis": "dicta",
                                    },
                                    Requests: map[string]string{
                                        "doloremque": "quae",
                                        "nisi": "recusandae",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: 7110471015351200494,
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "et",
                                            "rerum",
                                        },
                                    },
                                    FailureThreshold: 7434067341455688771,
                                    Grpc: &shared.GrpcAction{
                                        Port: 9068966224370832188,
                                        Service: "eos",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "et",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "aspernatur",
                                                Value: "praesentium",
                                            },
                                            shared.HTTPHeader{
                                                Name: "porro",
                                                Value: "nihil",
                                            },
                                            shared.HTTPHeader{
                                                Name: "adipisci",
                                                Value: "consequatur",
                                            },
                                        },
                                        Path: "illum",
                                        Scheme: "accusantium",
                                    },
                                    InitialDelaySeconds: 5615798573507722061,
                                    PeriodSeconds: 1444501184389758573,
                                    SuccessThreshold: 6965195451650017723,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "quidem",
                                        Port: 2803265238606586800,
                                    },
                                    TimeoutSeconds: 9117043256905423229,
                                },
                                TerminationMessagePath: "vero",
                                TerminationMessagePolicy: "alias",
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: "deserunt",
                                        Name: "eius",
                                        ReadOnly: false,
                                        SubPath: "beatae",
                                    },
                                    shared.VolumeMount{
                                        MountPath: "omnis",
                                        Name: "totam",
                                        ReadOnly: false,
                                        SubPath: "et",
                                    },
                                    shared.VolumeMount{
                                        MountPath: "magni",
                                        Name: "necessitatibus",
                                        ReadOnly: false,
                                        SubPath: "culpa",
                                    },
                                },
                                WorkingDir: "repellendus",
                            },
                        },
                        RestartPolicy: "voluptas",
                        ServiceAccountName: "ut",
                        TerminationGracePeriodSeconds: "veniam",
                        Volumes: []shared.Volume{
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: 9207329833049742865,
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: "quo",
                                            Mode: 7465719782626729327,
                                            Path: "saepe",
                                        },
                                        shared.KeyToPath{
                                            Key: "commodi",
                                            Mode: 4178331056796501958,
                                            Path: "quibusdam",
                                        },
                                        shared.KeyToPath{
                                            Key: "asperiores",
                                            Mode: 5721519542403305305,
                                            Path: "ea",
                                        },
                                    },
                                    Name: "soluta",
                                    Optional: true,
                                },
                                Name: "commodi",
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: 434570727381690637,
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: "in",
                                            Mode: 8079844328673265272,
                                            Path: "odit",
                                        },
                                        shared.KeyToPath{
                                            Key: "est",
                                            Mode: 7054703545425477159,
                                            Path: "ipsum",
                                        },
                                    },
                                    Optional: false,
                                    SecretName: "perspiciatis",
                                },
                            },
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: 9182685730299275088,
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: "voluptatem",
                                            Mode: 4642525602086184656,
                                            Path: "magni",
                                        },
                                        shared.KeyToPath{
                                            Key: "vero",
                                            Mode: 2348459223939882374,
                                            Path: "cumque",
                                        },
                                    },
                                    Name: "ea",
                                    Optional: false,
                                },
                                Name: "non",
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: 930977177771307407,
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: "quae",
                                            Mode: 2073310069225302801,
                                            Path: "magni",
                                        },
                                        shared.KeyToPath{
                                            Key: "minus",
                                            Mode: 8662026721107688812,
                                            Path: "aut",
                                        },
                                        shared.KeyToPath{
                                            Key: "neque",
                                            Mode: 542203605369773217,
                                            Path: "quia",
                                        },
                                    },
                                    Optional: false,
                                    SecretName: "debitis",
                                },
                            },
                        },
                    },
                },
                TTLSecondsAfterFinished: 3507238623703885833,
            },
            Status: &shared.JobStatus{
                Active: 2350280920086746644,
                CompletionTime: "enim",
                Conditions: []shared.JobCondition{
                    shared.JobCondition{
                        LastTransitionTime: "non",
                        Message: "nihil",
                        Reason: "laborum",
                        Severity: "recusandae",
                        Status: "nihil",
                        Type: "exercitationem",
                    },
                    shared.JobCondition{
                        LastTransitionTime: "iste",
                        Message: "perferendis",
                        Reason: "id",
                        Severity: "autem",
                        Status: "hic",
                        Type: "voluptatem",
                    },
                    shared.JobCondition{
                        LastTransitionTime: "omnis",
                        Message: "libero",
                        Reason: "qui",
                        Severity: "omnis",
                        Status: "minus",
                        Type: "nostrum",
                    },
                },
                Failed: 2734276392450386024,
                ImageDigest: "sit",
                Instances: []shared.InstanceStatus{
                    shared.InstanceStatus{
                        CompletionTime: "quo",
                        Failed: 2422259341021744438,
                        Index: 4500698545012642604,
                        LastAttemptResult: &shared.InstanceAttemptResult{
                            ExitCode: 8645970321281326832,
                            Status: &shared.GoogleRPCStatus{
                                Code: 7136207181802684899,
                                Details: []map[string]interface{}{
                                    map[string]interface{}{
                                        "aut": "tempora",
                                    },
                                    map[string]interface{}{
                                        "mollitia": "non",
                                        "magni": "recusandae",
                                        "illum": "consequatur",
                                    },
                                    map[string]interface{}{
                                        "hic": "nihil",
                                        "explicabo": "ex",
                                        "iure": "et",
                                    },
                                },
                                Message: "quos",
                            },
                        },
                        LastExitCode: 6531361177861028646,
                        Restarted: 2099360370584244541,
                        StartTime: "necessitatibus",
                        Succeeded: 5252551447369431039,
                    },
                },
                ObservedGeneration: 704530383849749415,
                StartTime: "in",
                Succeeded: 2245863337273937304,
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
