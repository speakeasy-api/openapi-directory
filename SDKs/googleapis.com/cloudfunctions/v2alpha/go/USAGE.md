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
            Parent: "qui",
        },
        QueryParams: operations.CloudfunctionsProjectsLocationsFunctionsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "dicta",
            Alt: "json",
            Callback: "eveniet",
            Fields: "corrupti",
            FunctionID: "ut",
            Key: "itaque",
            OauthToken: "fugiat",
            PrettyPrint: false,
            QuotaUser: "quod",
            UploadType: "sint",
            UploadProtocol: "pariatur",
        },
        Request: &shared.FunctionInput{
            BuildConfig: &shared.BuildConfigInput{
                BuildpackStack: "aut",
                DockerRegistry: "DOCKER_REGISTRY_UNSPECIFIED",
                DockerRepository: "eum",
                EntryPoint: "repellat",
                EnvironmentVariables: map[string]string{
                    "facilis": "ipsam",
                },
                Runtime: "odio",
                Source: &shared.Source{
                    RepoSource: &shared.RepoSource{
                        BranchName: "sit",
                        CommitSha: "voluptas",
                        Dir: "aut",
                        InvertRegex: true,
                        ProjectID: "non",
                        RepoName: "quia",
                        TagName: "accusantium",
                    },
                    StorageSource: &shared.StorageSource{
                        Bucket: "placeat",
                        Generation: "magni",
                        Object: "et",
                    },
                },
                SourceProvenance: &shared.SourceProvenance{
                    ResolvedRepoSource: &shared.RepoSource{
                        BranchName: "est",
                        CommitSha: "dolorum",
                        Dir: "ab",
                        InvertRegex: true,
                        ProjectID: "quaerat",
                        RepoName: "sit",
                        TagName: "eum",
                    },
                    ResolvedStorageSource: &shared.StorageSource{
                        Bucket: "consequuntur",
                        Generation: "est",
                        Object: "perspiciatis",
                    },
                },
                WorkerPool: "repellendus",
            },
            Description: "delectus",
            Environment: "GEN_2",
            EventTrigger: &shared.EventTriggerInput{
                Channel: "quae",
                EventFilters: []shared.EventFilter{
                    shared.EventFilter{
                        Attribute: "voluptatibus",
                        Operator: "facere",
                        Value: "omnis",
                    },
                    shared.EventFilter{
                        Attribute: "nobis",
                        Operator: "nulla",
                        Value: "nesciunt",
                    },
                },
                EventType: "quia",
                PubsubTopic: "dolores",
                RetryPolicy: "RETRY_POLICY_RETRY",
                ServiceAccountEmail: "sit",
                TriggerRegion: "excepturi",
            },
            Labels: map[string]string{
                "delectus": "suscipit",
                "et": "consectetur",
            },
            Name: "et",
            ServiceConfig: &shared.ServiceConfigInput{
                AllTrafficOnLatestRevision: true,
                AvailableCPU: "distinctio",
                AvailableMemory: "ex",
                EnvironmentVariables: map[string]string{
                    "repellendus": "harum",
                    "officiis": "molestiae",
                },
                IngressSettings: "ALLOW_INTERNAL_AND_GCLB",
                MaxInstanceCount: 8526738631223038308,
                MaxInstanceRequestConcurrency: 8593344483447830691,
                MinInstanceCount: 6830313465676496395,
                SecretEnvironmentVariables: []shared.SecretEnvVar{
                    shared.SecretEnvVar{
                        Key: "vero",
                        ProjectID: "nisi",
                        Secret: "omnis",
                        Version: "ducimus",
                    },
                    shared.SecretEnvVar{
                        Key: "nulla",
                        ProjectID: "non",
                        Secret: "et",
                        Version: "dolore",
                    },
                },
                SecretVolumes: []shared.SecretVolume{
                    shared.SecretVolume{
                        MountPath: "non",
                        ProjectID: "quo",
                        Secret: "quisquam",
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: "aspernatur",
                                Version: "quae",
                            },
                            shared.SecretVersion{
                                Path: "voluptatem",
                                Version: "recusandae",
                            },
                        },
                    },
                    shared.SecretVolume{
                        MountPath: "nostrum",
                        ProjectID: "maxime",
                        Secret: "et",
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: "assumenda",
                                Version: "repudiandae",
                            },
                        },
                    },
                    shared.SecretVolume{
                        MountPath: "similique",
                        ProjectID: "consequatur",
                        Secret: "est",
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: "consequatur",
                                Version: "nulla",
                            },
                            shared.SecretVersion{
                                Path: "fugiat",
                                Version: "eligendi",
                            },
                        },
                    },
                },
                SecurityLevel: "SECURITY_LEVEL_UNSPECIFIED",
                ServiceAccountEmail: "rerum",
                TimeoutSeconds: 7486404432023299614,
                VpcConnector: "voluptatem",
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