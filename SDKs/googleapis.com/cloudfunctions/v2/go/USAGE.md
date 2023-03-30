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
            Parent: "corrupti",
        },
        QueryParams: operations.CloudfunctionsProjectsLocationsFunctionsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            FunctionID: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
        },
        Request: &shared.FunctionInput{
            BuildConfig: &shared.BuildConfigInput{
                BuildpackStack: "iure",
                DockerRegistry: "DOCKER_REGISTRY_UNSPECIFIED",
                DockerRepository: "debitis",
                EntryPoint: "ipsa",
                EnvironmentVariables: map[string]string{
                    "tempora": "suscipit",
                    "molestiae": "minus",
                    "placeat": "voluptatum",
                    "iusto": "excepturi",
                },
                Runtime: "nisi",
                Source: &shared.Source{
                    RepoSource: &shared.RepoSource{
                        BranchName: "recusandae",
                        CommitSha: "temporibus",
                        Dir: "ab",
                        InvertRegex: false,
                        ProjectID: "quis",
                        RepoName: "veritatis",
                        TagName: "deserunt",
                    },
                    StorageSource: &shared.StorageSource{
                        Bucket: "perferendis",
                        Generation: "ipsam",
                        Object: "repellendus",
                    },
                },
                SourceProvenance: &shared.SourceProvenance{
                    ResolvedRepoSource: &shared.RepoSource{
                        BranchName: "sapiente",
                        CommitSha: "quo",
                        Dir: "odit",
                        InvertRegex: false,
                        ProjectID: "at",
                        RepoName: "at",
                        TagName: "maiores",
                    },
                    ResolvedStorageSource: &shared.StorageSource{
                        Bucket: "molestiae",
                        Generation: "quod",
                        Object: "quod",
                    },
                },
                WorkerPool: "esse",
            },
            Description: "totam",
            Environment: "GEN_2",
            EventTrigger: &shared.EventTriggerInput{
                Channel: "dolorum",
                EventFilters: []shared.EventFilter{
                    shared.EventFilter{
                        Attribute: "nam",
                        Operator: "officia",
                        Value: "occaecati",
                    },
                },
                EventType: "fugit",
                PubsubTopic: "deleniti",
                RetryPolicy: "RETRY_POLICY_RETRY",
                ServiceAccountEmail: "optio",
                TriggerRegion: "totam",
            },
            KmsKeyName: "beatae",
            Labels: map[string]string{
                "molestiae": "modi",
                "qui": "impedit",
            },
            Name: "cum",
            ServiceConfig: &shared.ServiceConfigInput{
                AllTrafficOnLatestRevision: false,
                AvailableCPU: "esse",
                AvailableMemory: "ipsum",
                EnvironmentVariables: map[string]string{
                    "aspernatur": "perferendis",
                    "ad": "natus",
                    "sed": "iste",
                },
                IngressSettings: "INGRESS_SETTINGS_UNSPECIFIED",
                MaxInstanceCount: 616934,
                MaxInstanceRequestConcurrency: 386489,
                MinInstanceCount: 943749,
                SecretEnvironmentVariables: []shared.SecretEnvVar{
                    shared.SecretEnvVar{
                        Key: "fuga",
                        ProjectID: "in",
                        Secret: "corporis",
                        Version: "iste",
                    },
                    shared.SecretEnvVar{
                        Key: "iure",
                        ProjectID: "saepe",
                        Secret: "quidem",
                        Version: "architecto",
                    },
                    shared.SecretEnvVar{
                        Key: "ipsa",
                        ProjectID: "reiciendis",
                        Secret: "est",
                        Version: "mollitia",
                    },
                    shared.SecretEnvVar{
                        Key: "laborum",
                        ProjectID: "dolores",
                        Secret: "dolorem",
                        Version: "corporis",
                    },
                },
                SecretVolumes: []shared.SecretVolume{
                    shared.SecretVolume{
                        MountPath: "nobis",
                        ProjectID: "enim",
                        Secret: "omnis",
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: "minima",
                                Version: "excepturi",
                            },
                            shared.SecretVersion{
                                Path: "accusantium",
                                Version: "iure",
                            },
                        },
                    },
                },
                SecurityLevel: "SECURE_ALWAYS",
                ServiceAccountEmail: "doloribus",
                TimeoutSeconds: 958950,
                VpcConnector: "architecto",
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