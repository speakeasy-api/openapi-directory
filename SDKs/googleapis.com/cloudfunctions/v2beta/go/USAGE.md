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
            Parent: "et",
        },
        QueryParams: operations.CloudfunctionsProjectsLocationsFunctionsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "nesciunt",
            Alt: "proto",
            Callback: "pariatur",
            Fields: "odio",
            FunctionID: "occaecati",
            Key: "eveniet",
            OauthToken: "et",
            PrettyPrint: false,
            QuotaUser: "nostrum",
            UploadType: "quaerat",
            UploadProtocol: "voluptas",
        },
        Request: &shared.FunctionInput{
            BuildConfig: &shared.BuildConfigInput{
                BuildpackStack: "recusandae",
                DockerRegistry: "ARTIFACT_REGISTRY",
                DockerRepository: "eum",
                EntryPoint: "esse",
                EnvironmentVariables: map[string]string{
                    "pariatur": "omnis",
                    "perspiciatis": "et",
                    "impedit": "rem",
                },
                Runtime: "quam",
                Source: &shared.Source{
                    RepoSource: &shared.RepoSource{
                        BranchName: "maiores",
                        CommitSha: "ut",
                        Dir: "et",
                        InvertRegex: true,
                        ProjectID: "aperiam",
                        RepoName: "mollitia",
                        TagName: "officia",
                    },
                    StorageSource: &shared.StorageSource{
                        Bucket: "quaerat",
                        Generation: "nam",
                        Object: "modi",
                    },
                },
                SourceProvenance: &shared.SourceProvenance{
                    ResolvedRepoSource: &shared.RepoSource{
                        BranchName: "officia",
                        CommitSha: "in",
                        Dir: "commodi",
                        InvertRegex: false,
                        ProjectID: "laudantium",
                        RepoName: "vel",
                        TagName: "reprehenderit",
                    },
                    ResolvedStorageSource: &shared.StorageSource{
                        Bucket: "nihil",
                        Generation: "nam",
                        Object: "est",
                    },
                },
                WorkerPool: "dolorum",
            },
            Description: "voluptatem",
            Environment: "GEN_2",
            EventTrigger: &shared.EventTriggerInput{
                Channel: "magni",
                EventFilters: []shared.EventFilter{
                    shared.EventFilter{
                        Attribute: "quibusdam",
                        Operator: "dolore",
                        Value: "eveniet",
                    },
                    shared.EventFilter{
                        Attribute: "pariatur",
                        Operator: "quisquam",
                        Value: "sapiente",
                    },
                },
                EventType: "et",
                PubsubTopic: "ut",
                RetryPolicy: "RETRY_POLICY_RETRY",
                ServiceAccountEmail: "magnam",
                TriggerRegion: "at",
            },
            Labels: map[string]string{
                "cupiditate": "ut",
                "sint": "minus",
                "fugiat": "quae",
            },
            Name: "rerum",
            ServiceConfig: &shared.ServiceConfigInput{
                AllTrafficOnLatestRevision: false,
                AvailableCPU: "quo",
                AvailableMemory: "nemo",
                EnvironmentVariables: map[string]string{
                    "atque": "impedit",
                },
                IngressSettings: "INGRESS_SETTINGS_UNSPECIFIED",
                MaxInstanceCount: 792269188445923293,
                MaxInstanceRequestConcurrency: 7397228704190247381,
                MinInstanceCount: 1487699710755746120,
                SecretEnvironmentVariables: []shared.SecretEnvVar{
                    shared.SecretEnvVar{
                        Key: "earum",
                        ProjectID: "in",
                        Secret: "molestias",
                        Version: "delectus",
                    },
                },
                SecretVolumes: []shared.SecretVolume{
                    shared.SecretVolume{
                        MountPath: "omnis",
                        ProjectID: "ipsa",
                        Secret: "ut",
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: "culpa",
                                Version: "ut",
                            },
                        },
                    },
                    shared.SecretVolume{
                        MountPath: "velit",
                        ProjectID: "laudantium",
                        Secret: "rem",
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: "assumenda",
                                Version: "facere",
                            },
                        },
                    },
                },
                SecurityLevel: "SECURITY_LEVEL_UNSPECIFIED",
                ServiceAccountEmail: "in",
                TimeoutSeconds: 5600512735016871670,
                VpcConnector: "eum",
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