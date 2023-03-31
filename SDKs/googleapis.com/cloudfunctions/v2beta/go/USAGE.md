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

    req := operations.CloudfunctionsProjectsLocationsFunctionsCreateRequest{
        DollarXgafv: "2",
        FunctionInput: &shared.FunctionInput{
            BuildConfig: &shared.BuildConfigInput{
                BuildpackStack: "provident",
                DockerRegistry: "ARTIFACT_REGISTRY",
                DockerRepository: "quibusdam",
                EntryPoint: "unde",
                EnvironmentVariables: map[string]string{
                    "corrupti": "illum",
                    "vel": "error",
                    "deserunt": "suscipit",
                    "iure": "magnam",
                },
                Runtime: "debitis",
                Source: &shared.Source{
                    RepoSource: &shared.RepoSource{
                        BranchName: "ipsa",
                        CommitSha: "delectus",
                        Dir: "tempora",
                        InvertRegex: false,
                        ProjectID: "suscipit",
                        RepoName: "molestiae",
                        TagName: "minus",
                    },
                    StorageSource: &shared.StorageSource{
                        Bucket: "placeat",
                        Generation: "voluptatum",
                        Object: "iusto",
                    },
                },
                SourceProvenance: &shared.SourceProvenance{
                    ResolvedRepoSource: &shared.RepoSource{
                        BranchName: "excepturi",
                        CommitSha: "nisi",
                        Dir: "recusandae",
                        InvertRegex: false,
                        ProjectID: "temporibus",
                        RepoName: "ab",
                        TagName: "quis",
                    },
                    ResolvedStorageSource: &shared.StorageSource{
                        Bucket: "veritatis",
                        Generation: "deserunt",
                        Object: "perferendis",
                    },
                },
                WorkerPool: "ipsam",
            },
            Description: "repellendus",
            Environment: "GEN_2",
            EventTrigger: &shared.EventTriggerInput{
                Channel: "quo",
                EventFilters: []shared.EventFilter{
                    shared.EventFilter{
                        Attribute: "at",
                        Operator: "at",
                        Value: "maiores",
                    },
                },
                EventType: "molestiae",
                PubsubTopic: "quod",
                RetryPolicy: "RETRY_POLICY_RETRY",
                ServiceAccountEmail: "esse",
                TriggerRegion: "totam",
            },
            KmsKeyName: "porro",
            Labels: map[string]string{
                "dicta": "nam",
                "officia": "occaecati",
                "fugit": "deleniti",
            },
            Name: "hic",
            ServiceConfig: &shared.ServiceConfigInput{
                AllTrafficOnLatestRevision: false,
                AvailableCPU: "optio",
                AvailableMemory: "totam",
                EnvironmentVariables: map[string]string{
                    "commodi": "molestiae",
                },
                IngressSettings: "ALLOW_ALL",
                MaxInstanceCount: 186332,
                MaxInstanceRequestConcurrency: 774234,
                MinInstanceCount: 736918,
                SecretEnvironmentVariables: []shared.SecretEnvVar{
                    shared.SecretEnvVar{
                        Key: "ipsum",
                        ProjectID: "excepturi",
                        Secret: "aspernatur",
                        Version: "perferendis",
                    },
                    shared.SecretEnvVar{
                        Key: "ad",
                        ProjectID: "natus",
                        Secret: "sed",
                        Version: "iste",
                    },
                },
                SecretVolumes: []shared.SecretVolume{
                    shared.SecretVolume{
                        MountPath: "natus",
                        ProjectID: "laboriosam",
                        Secret: "hic",
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: "fuga",
                                Version: "in",
                            },
                            shared.SecretVersion{
                                Path: "corporis",
                                Version: "iste",
                            },
                            shared.SecretVersion{
                                Path: "iure",
                                Version: "saepe",
                            },
                            shared.SecretVersion{
                                Path: "quidem",
                                Version: "architecto",
                            },
                        },
                    },
                },
                SecurityLevel: "SECURITY_LEVEL_UNSPECIFIED",
                ServiceAccountEmail: "reiciendis",
                TimeoutSeconds: 666767,
                VpcConnector: "mollitia",
                VpcConnectorEgressSettings: "ALL_TRAFFIC",
            },
        },
        AccessToken: "dolores",
        Alt: "json",
        Callback: "corporis",
        Fields: "explicabo",
        FunctionID: "nobis",
        Key: "enim",
        OauthToken: "omnis",
        Parent: "nemo",
        PrettyPrint: false,
        QuotaUser: "minima",
        UploadType: "excepturi",
        UploadProtocol: "accusantium",
    }

    ctx := context.Background()
    res, err := s.Projects.CloudfunctionsProjectsLocationsFunctionsCreate(ctx, req, operations.CloudfunctionsProjectsLocationsFunctionsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->