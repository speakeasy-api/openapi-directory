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
            Parent: "voluptatem",
        },
        QueryParams: operations.CloudfunctionsProjectsLocationsFunctionsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "consequatur",
            Alt: "json",
            Callback: "vel",
            Fields: "sequi",
            FunctionID: "repellendus",
            Key: "non",
            OauthToken: "cum",
            PrettyPrint: true,
            QuotaUser: "earum",
            UploadType: "consectetur",
            UploadProtocol: "vero",
        },
        Request: &shared.FunctionInput{
            BuildConfig: &shared.BuildConfigInput{
                BuildpackStack: "perspiciatis",
                DockerRegistry: "CONTAINER_REGISTRY",
                DockerRepository: "facilis",
                EntryPoint: "id",
                EnvironmentVariables: map[string]string{
                    "quam": "odio",
                    "excepturi": "aspernatur",
                    "ducimus": "ut",
                },
                Runtime: "expedita",
                Source: &shared.Source{
                    RepoSource: &shared.RepoSource{
                        BranchName: "sequi",
                        CommitSha: "enim",
                        Dir: "explicabo",
                        InvertRegex: true,
                        ProjectID: "deleniti",
                        RepoName: "consequatur",
                        TagName: "facere",
                    },
                    StorageSource: &shared.StorageSource{
                        Bucket: "animi",
                        Generation: "ducimus",
                        Object: "sapiente",
                    },
                },
                SourceProvenance: &shared.SourceProvenance{
                    ResolvedRepoSource: &shared.RepoSource{
                        BranchName: "ipsum",
                        CommitSha: "atque",
                        Dir: "nisi",
                        InvertRegex: false,
                        ProjectID: "autem",
                        RepoName: "ipsam",
                        TagName: "rerum",
                    },
                    ResolvedStorageSource: &shared.StorageSource{
                        Bucket: "reiciendis",
                        Generation: "velit",
                        Object: "et",
                    },
                },
                WorkerPool: "ullam",
            },
            Description: "impedit",
            Environment: "GEN_1",
            EventTrigger: &shared.EventTriggerInput{
                Channel: "est",
                EventFilters: []shared.EventFilter{
                    shared.EventFilter{
                        Attribute: "asperiores",
                        Operator: "alias",
                        Value: "necessitatibus",
                    },
                },
                EventType: "et",
                PubsubTopic: "perspiciatis",
                RetryPolicy: "RETRY_POLICY_UNSPECIFIED",
                ServiceAccountEmail: "non",
                TriggerRegion: "voluptas",
            },
            Labels: map[string]string{
                "aspernatur": "facilis",
                "et": "doloribus",
            },
            Name: "excepturi",
            ServiceConfig: &shared.ServiceConfigInput{
                AllTrafficOnLatestRevision: true,
                AvailableCPU: "soluta",
                AvailableMemory: "similique",
                EnvironmentVariables: map[string]string{
                    "animi": "quisquam",
                    "enim": "incidunt",
                },
                IngressSettings: "ALLOW_ALL",
                MaxInstanceCount: 7689307747697478495,
                MaxInstanceRequestConcurrency: 6614803028872981226,
                MinInstanceCount: 6072307249965416689,
                SecretEnvironmentVariables: []shared.SecretEnvVar{
                    shared.SecretEnvVar{
                        Key: "hic",
                        ProjectID: "recusandae",
                        Secret: "numquam",
                        Version: "omnis",
                    },
                    shared.SecretEnvVar{
                        Key: "necessitatibus",
                        ProjectID: "culpa",
                        Secret: "cum",
                        Version: "fugiat",
                    },
                    shared.SecretEnvVar{
                        Key: "ut",
                        ProjectID: "incidunt",
                        Secret: "sit",
                        Version: "sint",
                    },
                },
                SecretVolumes: []shared.SecretVolume{
                    shared.SecretVolume{
                        MountPath: "vero",
                        ProjectID: "voluptatum",
                        Secret: "quo",
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: "ex",
                                Version: "similique",
                            },
                            shared.SecretVersion{
                                Path: "aut",
                                Version: "aspernatur",
                            },
                        },
                    },
                },
                SecurityLevel: "SECURE_OPTIONAL",
                ServiceAccountEmail: "voluptas",
                TimeoutSeconds: 2562921366260505538,
                VpcConnector: "molestias",
                VpcConnectorEgressSettings: "ALL_TRAFFIC",
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