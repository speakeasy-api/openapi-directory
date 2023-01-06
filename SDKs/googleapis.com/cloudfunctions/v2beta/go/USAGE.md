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
            Parent: "nobis",
        },
        QueryParams: operations.CloudfunctionsProjectsLocationsFunctionsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "exercitationem",
            Alt: "proto",
            Callback: "necessitatibus",
            Fields: "similique",
            FunctionID: "ipsam",
            Key: "quia",
            OauthToken: "voluptatum",
            PrettyPrint: false,
            QuotaUser: "et",
            UploadType: "fuga",
            UploadProtocol: "consequatur",
        },
        Request: &shared.FunctionInput{
            BuildConfig: &shared.BuildConfigInput{
                BuildpackStack: "dignissimos",
                DockerRegistry: "DOCKER_REGISTRY_UNSPECIFIED",
                DockerRepository: "voluptatem",
                EntryPoint: "velit",
                EnvironmentVariables: map[string]string{
                    "sit": "maiores",
                    "sunt": "odio",
                },
                Runtime: "quo",
                Source: &shared.Source{
                    RepoSource: &shared.RepoSource{
                        BranchName: "dolor",
                        CommitSha: "eos",
                        Dir: "perspiciatis",
                        InvertRegex: false,
                        ProjectID: "commodi",
                        RepoName: "voluptatem",
                        TagName: "ut",
                    },
                    StorageSource: &shared.StorageSource{
                        Bucket: "rerum",
                        Generation: "labore",
                        Object: "quasi",
                    },
                },
                SourceProvenance: &shared.SourceProvenance{
                    ResolvedRepoSource: &shared.RepoSource{
                        BranchName: "occaecati",
                        CommitSha: "voluptatem",
                        Dir: "delectus",
                        InvertRegex: true,
                        ProjectID: "consequuntur",
                        RepoName: "provident",
                        TagName: "earum",
                    },
                    ResolvedStorageSource: &shared.StorageSource{
                        Bucket: "eos",
                        Generation: "sapiente",
                        Object: "sit",
                    },
                },
                WorkerPool: "quos",
            },
            Description: "numquam",
            Environment: "ENVIRONMENT_UNSPECIFIED",
            EventTrigger: &shared.EventTriggerInput{
                Channel: "ullam",
                EventFilters: []shared.EventFilter{
                    shared.EventFilter{
                        Attribute: "quia",
                        Operator: "vero",
                        Value: "ex",
                    },
                },
                EventType: "excepturi",
                PubsubTopic: "esse",
                RetryPolicy: "RETRY_POLICY_UNSPECIFIED",
                ServiceAccountEmail: "incidunt",
                TriggerRegion: "doloremque",
            },
            Labels: map[string]string{
                "quis": "repellat",
            },
            Name: "omnis",
            ServiceConfig: &shared.ServiceConfigInput{
                AllTrafficOnLatestRevision: false,
                AvailableCPU: "aperiam",
                AvailableMemory: "omnis",
                EnvironmentVariables: map[string]string{
                    "consequuntur": "iure",
                    "qui": "dolores",
                },
                IngressSettings: "ALLOW_INTERNAL_AND_GCLB",
                MaxInstanceCount: 6826306643766641779,
                MaxInstanceRequestConcurrency: 4803924266802479623,
                MinInstanceCount: 6945687780949239951,
                SecretEnvironmentVariables: []shared.SecretEnvVar{
                    shared.SecretEnvVar{
                        Key: "ullam",
                        ProjectID: "incidunt",
                        Secret: "qui",
                        Version: "hic",
                    },
                    shared.SecretEnvVar{
                        Key: "excepturi",
                        ProjectID: "modi",
                        Secret: "quis",
                        Version: "consequatur",
                    },
                    shared.SecretEnvVar{
                        Key: "ut",
                        ProjectID: "est",
                        Secret: "ad",
                        Version: "voluptatem",
                    },
                },
                SecretVolumes: []shared.SecretVolume{
                    shared.SecretVolume{
                        MountPath: "aut",
                        ProjectID: "in",
                        Secret: "voluptas",
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: "placeat",
                                Version: "numquam",
                            },
                            shared.SecretVersion{
                                Path: "quos",
                                Version: "qui",
                            },
                        },
                    },
                    shared.SecretVolume{
                        MountPath: "veniam",
                        ProjectID: "blanditiis",
                        Secret: "repellendus",
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: "et",
                                Version: "hic",
                            },
                            shared.SecretVersion{
                                Path: "eaque",
                                Version: "dolor",
                            },
                            shared.SecretVersion{
                                Path: "corrupti",
                                Version: "dicta",
                            },
                        },
                    },
                },
                SecurityLevel: "SECURE_OPTIONAL",
                ServiceAccountEmail: "temporibus",
                TimeoutSeconds: 7115884889774063854,
                VpcConnector: "ab",
                VpcConnectorEgressSettings: "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED",
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