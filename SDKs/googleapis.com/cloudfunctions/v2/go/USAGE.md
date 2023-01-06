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
            Parent: "magni",
        },
        QueryParams: operations.CloudfunctionsProjectsLocationsFunctionsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "consectetur",
            Alt: "proto",
            Callback: "eum",
            Fields: "rerum",
            FunctionID: "ut",
            Key: "est",
            OauthToken: "quas",
            PrettyPrint: true,
            QuotaUser: "rem",
            UploadType: "incidunt",
            UploadProtocol: "modi",
        },
        Request: &shared.FunctionInput{
            BuildConfig: &shared.BuildConfigInput{
                BuildpackStack: "voluptas",
                DockerRegistry: "DOCKER_REGISTRY_UNSPECIFIED",
                DockerRepository: "maiores",
                EntryPoint: "inventore",
                EnvironmentVariables: map[string]string{
                    "amet": "ullam",
                    "ut": "fugit",
                },
                Runtime: "temporibus",
                Source: &shared.Source{
                    RepoSource: &shared.RepoSource{
                        BranchName: "sunt",
                        CommitSha: "quo",
                        Dir: "aspernatur",
                        InvertRegex: false,
                        ProjectID: "veniam",
                        RepoName: "earum",
                        TagName: "omnis",
                    },
                    StorageSource: &shared.StorageSource{
                        Bucket: "sunt",
                        Generation: "eaque",
                        Object: "corrupti",
                    },
                },
                SourceProvenance: &shared.SourceProvenance{
                    ResolvedRepoSource: &shared.RepoSource{
                        BranchName: "quia",
                        CommitSha: "commodi",
                        Dir: "et",
                        InvertRegex: true,
                        ProjectID: "saepe",
                        RepoName: "laborum",
                        TagName: "ducimus",
                    },
                    ResolvedStorageSource: &shared.StorageSource{
                        Bucket: "rerum",
                        Generation: "autem",
                        Object: "sint",
                    },
                },
                WorkerPool: "alias",
            },
            Description: "blanditiis",
            Environment: "GEN_1",
            EventTrigger: &shared.EventTriggerInput{
                Channel: "sunt",
                EventFilters: []shared.EventFilter{
                    shared.EventFilter{
                        Attribute: "asperiores",
                        Operator: "ipsam",
                        Value: "deleniti",
                    },
                    shared.EventFilter{
                        Attribute: "impedit",
                        Operator: "eaque",
                        Value: "esse",
                    },
                },
                EventType: "ut",
                PubsubTopic: "sapiente",
                RetryPolicy: "RETRY_POLICY_RETRY",
                ServiceAccountEmail: "nobis",
                TriggerRegion: "tempora",
            },
            Labels: map[string]string{
                "ad": "culpa",
                "omnis": "maiores",
            },
            Name: "eligendi",
            ServiceConfig: &shared.ServiceConfigInput{
                AllTrafficOnLatestRevision: false,
                AvailableCPU: "eveniet",
                AvailableMemory: "est",
                EnvironmentVariables: map[string]string{
                    "blanditiis": "enim",
                    "ut": "odit",
                    "non": "porro",
                },
                IngressSettings: "ALLOW_ALL",
                MaxInstanceCount: 5042383167005935874,
                MaxInstanceRequestConcurrency: 1801121852245990253,
                MinInstanceCount: 2023465707882008127,
                SecretEnvironmentVariables: []shared.SecretEnvVar{
                    shared.SecretEnvVar{
                        Key: "aut",
                        ProjectID: "ex",
                        Secret: "modi",
                        Version: "qui",
                    },
                    shared.SecretEnvVar{
                        Key: "quia",
                        ProjectID: "maiores",
                        Secret: "nisi",
                        Version: "omnis",
                    },
                },
                SecretVolumes: []shared.SecretVolume{
                    shared.SecretVolume{
                        MountPath: "praesentium",
                        ProjectID: "totam",
                        Secret: "ut",
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: "eos",
                                Version: "voluptate",
                            },
                            shared.SecretVersion{
                                Path: "quaerat",
                                Version: "quod",
                            },
                            shared.SecretVersion{
                                Path: "nihil",
                                Version: "sapiente",
                            },
                        },
                    },
                    shared.SecretVolume{
                        MountPath: "qui",
                        ProjectID: "alias",
                        Secret: "rerum",
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: "quis",
                                Version: "sed",
                            },
                        },
                    },
                    shared.SecretVolume{
                        MountPath: "magni",
                        ProjectID: "iure",
                        Secret: "culpa",
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: "vel",
                                Version: "alias",
                            },
                        },
                    },
                },
                SecurityLevel: "SECURE_OPTIONAL",
                ServiceAccountEmail: "nostrum",
                TimeoutSeconds: 153247815945521756,
                VpcConnector: "molestiae",
                VpcConnectorEgressSettings: "PRIVATE_RANGES_ONLY",
            },
        },
    }
    
    res, err := s.Projects.CloudfunctionsProjectsLocationsFunctionsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->