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
            Parent: "sit",
        },
        QueryParams: operations.CloudfunctionsProjectsLocationsFunctionsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            FunctionID: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
        },
        Request: &shared.FunctionInput{
            BuildConfig: &shared.BuildConfigInput{
                BuildpackStack: "debitis",
                DockerRegistry: "DOCKER_REGISTRY_UNSPECIFIED",
                DockerRepository: "et",
                EntryPoint: "ut",
                EnvironmentVariables: map[string]string{
                    "et": "voluptate",
                    "iste": "vitae",
                    "totam": "dolores",
                },
                Runtime: "illum",
                Source: &shared.Source{
                    RepoSource: &shared.RepoSource{
                        BranchName: "debitis",
                        CommitSha: "vel",
                        Dir: "odio",
                        InvertRegex: true,
                        ProjectID: "id",
                        RepoName: "aspernatur",
                        TagName: "accusantium",
                    },
                    StorageSource: &shared.StorageSource{
                        Bucket: "totam",
                        Generation: "commodi",
                        Object: "quis",
                    },
                },
                SourceProvenance: &shared.SourceProvenance{
                    ResolvedRepoSource: &shared.RepoSource{
                        BranchName: "est",
                        CommitSha: "aut",
                        Dir: "odit",
                        InvertRegex: true,
                        ProjectID: "voluptas",
                        RepoName: "omnis",
                        TagName: "aut",
                    },
                    ResolvedStorageSource: &shared.StorageSource{
                        Bucket: "illo",
                        Generation: "sed",
                        Object: "officiis",
                    },
                },
                WorkerPool: "autem",
            },
            Description: "consectetur",
            Environment: "ENVIRONMENT_UNSPECIFIED",
            EventTrigger: &shared.EventTriggerInput{
                Channel: "odio",
                EventFilters: []shared.EventFilter{
                    shared.EventFilter{
                        Attribute: "recusandae",
                        Operator: "at",
                        Value: "ipsum",
                    },
                },
                EventType: "eveniet",
                PubsubTopic: "modi",
                RetryPolicy: "RETRY_POLICY_UNSPECIFIED",
                ServiceAccountEmail: "inventore",
                TriggerRegion: "ut",
            },
            Labels: map[string]string{
                "aut": "reprehenderit",
                "tempore": "maiores",
                "incidunt": "dolor",
            },
            Name: "beatae",
            ServiceConfig: &shared.ServiceConfigInput{
                AllTrafficOnLatestRevision: true,
                AvailableCPU: "in",
                AvailableMemory: "et",
                EnvironmentVariables: map[string]string{
                    "ipsum": "ex",
                    "dolores": "placeat",
                },
                IngressSettings: "ALLOW_INTERNAL_ONLY",
                MaxInstanceCount: 2587000937929698613,
                MaxInstanceRequestConcurrency: 8489437897698681073,
                MinInstanceCount: 1938800996802160635,
                SecretEnvironmentVariables: []shared.SecretEnvVar{
                    shared.SecretEnvVar{
                        Key: "reprehenderit",
                        ProjectID: "qui",
                        Secret: "qui",
                        Version: "unde",
                    },
                },
                SecretVolumes: []shared.SecretVolume{
                    shared.SecretVolume{
                        MountPath: "autem",
                        ProjectID: "qui",
                        Secret: "ut",
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: "ab",
                                Version: "neque",
                            },
                            shared.SecretVersion{
                                Path: "ullam",
                                Version: "et",
                            },
                            shared.SecretVersion{
                                Path: "accusantium",
                                Version: "esse",
                            },
                        },
                    },
                    shared.SecretVolume{
                        MountPath: "architecto",
                        ProjectID: "quam",
                        Secret: "velit",
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: "soluta",
                                Version: "sunt",
                            },
                            shared.SecretVersion{
                                Path: "voluptates",
                                Version: "magni",
                            },
                        },
                    },
                },
                SecurityLevel: "SECURE_OPTIONAL",
                ServiceAccountEmail: "optio",
                TimeoutSeconds: 8482125374365136680,
                VpcConnector: "earum",
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