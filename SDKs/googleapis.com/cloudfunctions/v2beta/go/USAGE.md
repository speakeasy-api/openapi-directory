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
        Security: operations.CloudfunctionsProjectsLocationsFunctionsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.CloudfunctionsProjectsLocationsFunctionsCreatePathParams{
            Parent: "unde",
        },
        QueryParams: operations.CloudfunctionsProjectsLocationsFunctionsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            FunctionID: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
        },
        Request: &shared.FunctionInput{
            BuildConfig: &shared.BuildConfigInput{
                BuildpackStack: "iusto",
                DockerRegistry: "DOCKER_REGISTRY_UNSPECIFIED",
                DockerRepository: "saepe",
                EntryPoint: "inventore",
                EnvironmentVariables: map[string]string{
                    "enim": "eum",
                    "voluptatum": "autem",
                    "vel": "non",
                    "deleniti": "similique",
                },
                Runtime: "reprehenderit",
                Source: &shared.Source{
                    RepoSource: &shared.RepoSource{
                        BranchName: "molestiae",
                        CommitSha: "quo",
                        Dir: "quasi",
                        InvertRegex: false,
                        ProjectID: "laboriosam",
                        RepoName: "dicta",
                        TagName: "est",
                    },
                    StorageSource: &shared.StorageSource{
                        Bucket: "voluptatem",
                        Generation: "consequatur",
                        Object: "fugiat",
                    },
                },
                SourceProvenance: &shared.SourceProvenance{
                    ResolvedRepoSource: &shared.RepoSource{
                        BranchName: "a",
                        CommitSha: "omnis",
                        Dir: "eos",
                        InvertRegex: false,
                        ProjectID: "accusamus",
                        RepoName: "accusamus",
                        TagName: "reiciendis",
                    },
                    ResolvedStorageSource: &shared.StorageSource{
                        Bucket: "rem",
                        Generation: "quibusdam",
                        Object: "et",
                    },
                },
                WorkerPool: "praesentium",
            },
            Description: "occaecati",
            Environment: "GEN_2",
            EventTrigger: &shared.EventTriggerInput{
                Channel: "soluta",
                EventFilters: []shared.EventFilter{
                    shared.EventFilter{
                        Attribute: "quisquam",
                        Operator: "rerum",
                        Value: "culpa",
                    },
                },
                EventType: "qui",
                PubsubTopic: "sed",
                RetryPolicy: "RETRY_POLICY_RETRY",
                ServiceAccountEmail: "possimus",
                TriggerRegion: "occaecati",
            },
            KmsKeyName: "odit",
            Labels: map[string]string{
                "rem": "voluptatem",
                "amet": "est",
            },
            Name: "id",
            ServiceConfig: &shared.ServiceConfigInput{
                AllTrafficOnLatestRevision: false,
                AvailableCPU: "blanditiis",
                AvailableMemory: "numquam",
                EnvironmentVariables: map[string]string{
                    "dolores": "sit",
                    "quia": "et",
                    "voluptatem": "laborum",
                },
                IngressSettings: "INGRESS_SETTINGS_UNSPECIFIED",
                MaxInstanceCount: 616934,
                MaxInstanceRequestConcurrency: 386489,
                MinInstanceCount: 943749,
                SecretEnvironmentVariables: []shared.SecretEnvVar{
                    shared.SecretEnvVar{
                        Key: "soluta",
                        ProjectID: "qui",
                        Secret: "ea",
                        Version: "laborum",
                    },
                    shared.SecretEnvVar{
                        Key: "iusto",
                        ProjectID: "ut",
                        Secret: "optio",
                        Version: "aspernatur",
                    },
                    shared.SecretEnvVar{
                        Key: "inventore",
                        ProjectID: "ut",
                        Secret: "libero",
                        Version: "et",
                    },
                    shared.SecretEnvVar{
                        Key: "libero",
                        ProjectID: "ipsum",
                        Secret: "non",
                        Version: "ea",
                    },
                },
                SecretVolumes: []shared.SecretVolume{
                    shared.SecretVolume{
                        MountPath: "placeat",
                        ProjectID: "ipsam",
                        Secret: "est",
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: "quia",
                                Version: "similique",
                            },
                            shared.SecretVersion{
                                Path: "eaque",
                                Version: "odio",
                            },
                        },
                    },
                },
                SecurityLevel: "SECURE_ALWAYS",
                ServiceAccountEmail: "doloribus",
                TimeoutSeconds: 958950,
                VpcConnector: "aut",
                VpcConnectorEgressSettings: "PRIVATE_RANGES_ONLY",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.CloudfunctionsProjectsLocationsFunctionsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->