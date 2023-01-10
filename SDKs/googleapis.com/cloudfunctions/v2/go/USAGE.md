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
            Parent: "iure",
        },
        QueryParams: operations.CloudfunctionsProjectsLocationsFunctionsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "facilis",
            Alt: "media",
            Callback: "perferendis",
            Fields: "et",
            FunctionID: "tenetur",
            Key: "laudantium",
            OauthToken: "tenetur",
            PrettyPrint: true,
            QuotaUser: "corrupti",
            UploadType: "vel",
            UploadProtocol: "non",
        },
        Request: &shared.FunctionInput{
            BuildConfig: &shared.BuildConfigInput{
                BuildpackStack: "cumque",
                DockerRegistry: "ARTIFACT_REGISTRY",
                DockerRepository: "unde",
                EntryPoint: "eum",
                EnvironmentVariables: map[string]string{
                    "fuga": "non",
                    "reprehenderit": "debitis",
                },
                Runtime: "iste",
                Source: &shared.Source{
                    RepoSource: &shared.RepoSource{
                        BranchName: "voluptatum",
                        CommitSha: "numquam",
                        Dir: "accusamus",
                        InvertRegex: false,
                        ProjectID: "sed",
                        RepoName: "rerum",
                        TagName: "exercitationem",
                    },
                    StorageSource: &shared.StorageSource{
                        Bucket: "corrupti",
                        Generation: "architecto",
                        Object: "nihil",
                    },
                },
                SourceProvenance: &shared.SourceProvenance{
                    ResolvedRepoSource: &shared.RepoSource{
                        BranchName: "aut",
                        CommitSha: "eaque",
                        Dir: "natus",
                        InvertRegex: false,
                        ProjectID: "qui",
                        RepoName: "commodi",
                        TagName: "hic",
                    },
                    ResolvedStorageSource: &shared.StorageSource{
                        Bucket: "nemo",
                        Generation: "in",
                        Object: "enim",
                    },
                },
                WorkerPool: "voluptates",
            },
            Description: "tempore",
            Environment: "ENVIRONMENT_UNSPECIFIED",
            EventTrigger: &shared.EventTriggerInput{
                Channel: "labore",
                EventFilters: []shared.EventFilter{
                    shared.EventFilter{
                        Attribute: "cupiditate",
                        Operator: "voluptatem",
                        Value: "doloribus",
                    },
                },
                EventType: "non",
                PubsubTopic: "mollitia",
                RetryPolicy: "RETRY_POLICY_DO_NOT_RETRY",
                ServiceAccountEmail: "est",
                TriggerRegion: "aspernatur",
            },
            Labels: map[string]string{
                "molestiae": "soluta",
                "cumque": "aut",
            },
            Name: "autem",
            ServiceConfig: &shared.ServiceConfigInput{
                AllTrafficOnLatestRevision: true,
                AvailableCPU: "quas",
                AvailableMemory: "omnis",
                EnvironmentVariables: map[string]string{
                    "est": "quia",
                    "quis": "et",
                    "consequatur": "et",
                },
                IngressSettings: "ALLOW_INTERNAL_ONLY",
                MaxInstanceCount: 3404160775247558679,
                MaxInstanceRequestConcurrency: 3565360713834926833,
                MinInstanceCount: 6878051429988505760,
                SecretEnvironmentVariables: []shared.SecretEnvVar{
                    shared.SecretEnvVar{
                        Key: "minus",
                        ProjectID: "voluptas",
                        Secret: "molestiae",
                        Version: "earum",
                    },
                    shared.SecretEnvVar{
                        Key: "atque",
                        ProjectID: "vel",
                        Secret: "vero",
                        Version: "qui",
                    },
                },
                SecretVolumes: []shared.SecretVolume{
                    shared.SecretVolume{
                        MountPath: "laudantium",
                        ProjectID: "est",
                        Secret: "et",
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: "tenetur",
                                Version: "omnis",
                            },
                        },
                    },
                    shared.SecretVolume{
                        MountPath: "excepturi",
                        ProjectID: "voluptas",
                        Secret: "ut",
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: "asperiores",
                                Version: "eum",
                            },
                            shared.SecretVersion{
                                Path: "soluta",
                                Version: "mollitia",
                            },
                            shared.SecretVersion{
                                Path: "tenetur",
                                Version: "sit",
                            },
                        },
                    },
                },
                SecurityLevel: "SECURE_OPTIONAL",
                ServiceAccountEmail: "earum",
                TimeoutSeconds: 8992597555331895288,
                VpcConnector: "sed",
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