<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.CloudfunctionsProjectsLocationsFunctionsCreate(ctx, operations.CloudfunctionsProjectsLocationsFunctionsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        FunctionInput: &shared.FunctionInput{
            BuildConfig: &shared.BuildConfigInput{
                DockerRegistry: shared.BuildConfigDockerRegistryEnumContainerRegistry.ToPointer(),
                DockerRepository: sdk.String("distinctio"),
                EntryPoint: sdk.String("quibusdam"),
                EnvironmentVariables: map[string]string{
                    "nulla": "corrupti",
                    "illum": "vel",
                    "error": "deserunt",
                },
                Runtime: sdk.String("suscipit"),
                Source: &shared.Source{
                    RepoSource: &shared.RepoSource{
                        BranchName: sdk.String("iure"),
                        CommitSha: sdk.String("magnam"),
                        Dir: sdk.String("debitis"),
                        InvertRegex: sdk.Bool(false),
                        ProjectID: sdk.String("ipsa"),
                        RepoName: sdk.String("delectus"),
                        TagName: sdk.String("tempora"),
                    },
                    StorageSource: &shared.StorageSource{
                        Bucket: sdk.String("suscipit"),
                        Generation: sdk.String("molestiae"),
                        Object: sdk.String("minus"),
                    },
                },
                SourceProvenance: &shared.SourceProvenance{
                    ResolvedRepoSource: &shared.RepoSource{
                        BranchName: sdk.String("placeat"),
                        CommitSha: sdk.String("voluptatum"),
                        Dir: sdk.String("iusto"),
                        InvertRegex: sdk.Bool(false),
                        ProjectID: sdk.String("excepturi"),
                        RepoName: sdk.String("nisi"),
                        TagName: sdk.String("recusandae"),
                    },
                    ResolvedStorageSource: &shared.StorageSource{
                        Bucket: sdk.String("temporibus"),
                        Generation: sdk.String("ab"),
                        Object: sdk.String("quis"),
                    },
                },
                WorkerPool: sdk.String("veritatis"),
            },
            Description: sdk.String("deserunt"),
            Environment: shared.FunctionEnvironmentEnumEnvironmentUnspecified.ToPointer(),
            EventTrigger: &shared.EventTriggerInput{
                Channel: sdk.String("ipsam"),
                EventFilters: []shared.EventFilter{
                    shared.EventFilter{
                        Attribute: sdk.String("sapiente"),
                        Operator: sdk.String("quo"),
                        Value: sdk.String("odit"),
                    },
                    shared.EventFilter{
                        Attribute: sdk.String("at"),
                        Operator: sdk.String("at"),
                        Value: sdk.String("maiores"),
                    },
                    shared.EventFilter{
                        Attribute: sdk.String("molestiae"),
                        Operator: sdk.String("quod"),
                        Value: sdk.String("quod"),
                    },
                    shared.EventFilter{
                        Attribute: sdk.String("esse"),
                        Operator: sdk.String("totam"),
                        Value: sdk.String("porro"),
                    },
                },
                EventType: sdk.String("dolorum"),
                PubsubTopic: sdk.String("dicta"),
                RetryPolicy: shared.EventTriggerRetryPolicyEnumRetryPolicyRetry.ToPointer(),
                ServiceAccountEmail: sdk.String("officia"),
                TriggerRegion: sdk.String("occaecati"),
            },
            KmsKeyName: sdk.String("fugit"),
            Labels: map[string]string{
                "hic": "optio",
                "totam": "beatae",
                "commodi": "molestiae",
            },
            Name: sdk.String("Norma Ryan"),
            ServiceConfig: &shared.ServiceConfigInput{
                AllTrafficOnLatestRevision: sdk.Bool(false),
                AvailableCPU: sdk.String("ipsum"),
                AvailableMemory: sdk.String("excepturi"),
                EnvironmentVariables: map[string]string{
                    "perferendis": "ad",
                },
                IngressSettings: shared.ServiceConfigIngressSettingsEnumAllowInternalOnly.ToPointer(),
                MaxInstanceCount: sdk.Int(149675),
                MaxInstanceRequestConcurrency: sdk.Int(612096),
                MinInstanceCount: sdk.Int(222321),
                SecretEnvironmentVariables: []shared.SecretEnvVar{
                    shared.SecretEnvVar{
                        Key: sdk.String("laboriosam"),
                        ProjectID: sdk.String("hic"),
                        Secret: sdk.String("saepe"),
                        Version: sdk.String("fuga"),
                    },
                    shared.SecretEnvVar{
                        Key: sdk.String("in"),
                        ProjectID: sdk.String("corporis"),
                        Secret: sdk.String("iste"),
                        Version: sdk.String("iure"),
                    },
                    shared.SecretEnvVar{
                        Key: sdk.String("saepe"),
                        ProjectID: sdk.String("quidem"),
                        Secret: sdk.String("architecto"),
                        Version: sdk.String("ipsa"),
                    },
                },
                SecretVolumes: []shared.SecretVolume{
                    shared.SecretVolume{
                        MountPath: sdk.String("est"),
                        ProjectID: sdk.String("mollitia"),
                        Secret: sdk.String("laborum"),
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: sdk.String("dolorem"),
                                Version: sdk.String("corporis"),
                            },
                        },
                    },
                    shared.SecretVolume{
                        MountPath: sdk.String("explicabo"),
                        ProjectID: sdk.String("nobis"),
                        Secret: sdk.String("enim"),
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: sdk.String("nemo"),
                                Version: sdk.String("minima"),
                            },
                            shared.SecretVersion{
                                Path: sdk.String("excepturi"),
                                Version: sdk.String("accusantium"),
                            },
                            shared.SecretVersion{
                                Path: sdk.String("iure"),
                                Version: sdk.String("culpa"),
                            },
                        },
                    },
                    shared.SecretVolume{
                        MountPath: sdk.String("doloribus"),
                        ProjectID: sdk.String("sapiente"),
                        Secret: sdk.String("architecto"),
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: sdk.String("dolorem"),
                                Version: sdk.String("culpa"),
                            },
                            shared.SecretVersion{
                                Path: sdk.String("consequuntur"),
                                Version: sdk.String("repellat"),
                            },
                            shared.SecretVersion{
                                Path: sdk.String("mollitia"),
                                Version: sdk.String("occaecati"),
                            },
                        },
                    },
                    shared.SecretVolume{
                        MountPath: sdk.String("numquam"),
                        ProjectID: sdk.String("commodi"),
                        Secret: sdk.String("quam"),
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: sdk.String("velit"),
                                Version: sdk.String("error"),
                            },
                            shared.SecretVersion{
                                Path: sdk.String("quia"),
                                Version: sdk.String("quis"),
                            },
                        },
                    },
                },
                SecurityLevel: shared.ServiceConfigSecurityLevelEnumSecurityLevelUnspecified.ToPointer(),
                ServiceAccountEmail: sdk.String("laborum"),
                TimeoutSeconds: sdk.Int(656330),
                VpcConnector: sdk.String("enim"),
                VpcConnectorEgressSettings: shared.ServiceConfigVpcConnectorEgressSettingsEnumVpcConnectorEgressSettingsUnspecified.ToPointer(),
            },
        },
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tenetur"),
        Fields: sdk.String("ipsam"),
        FunctionID: sdk.String("id"),
        Key: sdk.String("possimus"),
        OauthToken: sdk.String("aut"),
        Parent: "quasi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.CloudfunctionsProjectsLocationsFunctionsCreateSecurity{
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