# Projects

### Available Operations

* [CloudfunctionsProjectsLocationsFunctionsCreate](#cloudfunctionsprojectslocationsfunctionscreate) - Creates a new function. If a function with the given name already exists in the specified project, the long running operation will return `ALREADY_EXISTS` error.
* [CloudfunctionsProjectsLocationsFunctionsDelete](#cloudfunctionsprojectslocationsfunctionsdelete) - Deletes a function with the given name from the specified project. If the given function is used by some trigger, the trigger will be updated to remove this function.
* [CloudfunctionsProjectsLocationsFunctionsGenerateDownloadURL](#cloudfunctionsprojectslocationsfunctionsgeneratedownloadurl) - Returns a signed URL for downloading deployed function source code. The URL is only valid for a limited period and should be used within 30 minutes of generation. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls
* [CloudfunctionsProjectsLocationsFunctionsGenerateUploadURL](#cloudfunctionsprojectslocationsfunctionsgenerateuploadurl) - Returns a signed URL for uploading a function source code. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls. Once the function source code upload is complete, the used signed URL should be provided in CreateFunction or UpdateFunction request as a reference to the function source code. When uploading source code to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, these two headers need to be specified: * `content-type: application/zip` And this header SHOULD NOT be specified: * `Authorization: Bearer YOUR_TOKEN`
* [CloudfunctionsProjectsLocationsFunctionsGetIamPolicy](#cloudfunctionsprojectslocationsfunctionsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [CloudfunctionsProjectsLocationsFunctionsList](#cloudfunctionsprojectslocationsfunctionslist) - Returns a list of functions that belong to the requested project.
* [CloudfunctionsProjectsLocationsFunctionsPatch](#cloudfunctionsprojectslocationsfunctionspatch) - Updates existing function.
* [CloudfunctionsProjectsLocationsFunctionsSetIamPolicy](#cloudfunctionsprojectslocationsfunctionssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [CloudfunctionsProjectsLocationsFunctionsTestIamPermissions](#cloudfunctionsprojectslocationsfunctionstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [CloudfunctionsProjectsLocationsList](#cloudfunctionsprojectslocationslist) - Lists information about the supported locations for this service.
* [CloudfunctionsProjectsLocationsOperationsGet](#cloudfunctionsprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [CloudfunctionsProjectsLocationsOperationsList](#cloudfunctionsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [CloudfunctionsProjectsLocationsRuntimesList](#cloudfunctionsprojectslocationsruntimeslist) - Returns a list of runtimes that are supported for the requested project.

## CloudfunctionsProjectsLocationsFunctionsCreate

Creates a new function. If a function with the given name already exists in the specified project, the long running operation will return `ALREADY_EXISTS` error.

### Example Usage

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        FunctionInput: &shared.FunctionInput{
            BuildConfig: &shared.BuildConfigInput{
                DockerRegistry: shared.BuildConfigDockerRegistryEnumArtifactRegistry.ToPointer(),
                DockerRepository: sdk.String("voluptatibus"),
                EntryPoint: sdk.String("vero"),
                EnvironmentVariables: map[string]string{
                    "praesentium": "voluptatibus",
                    "ipsa": "omnis",
                },
                Runtime: sdk.String("voluptate"),
                Source: &shared.Source{
                    RepoSource: &shared.RepoSource{
                        BranchName: sdk.String("cum"),
                        CommitSha: sdk.String("perferendis"),
                        Dir: sdk.String("doloremque"),
                        InvertRegex: sdk.Bool(false),
                        ProjectID: sdk.String("reprehenderit"),
                        RepoName: sdk.String("ut"),
                        TagName: sdk.String("maiores"),
                    },
                    StorageSource: &shared.StorageSource{
                        Bucket: sdk.String("dicta"),
                        Generation: sdk.String("corporis"),
                        Object: sdk.String("dolore"),
                    },
                },
                SourceProvenance: &shared.SourceProvenance{
                    ResolvedRepoSource: &shared.RepoSource{
                        BranchName: sdk.String("iusto"),
                        CommitSha: sdk.String("dicta"),
                        Dir: sdk.String("harum"),
                        InvertRegex: sdk.Bool(false),
                        ProjectID: sdk.String("enim"),
                        RepoName: sdk.String("accusamus"),
                        TagName: sdk.String("commodi"),
                    },
                    ResolvedStorageSource: &shared.StorageSource{
                        Bucket: sdk.String("repudiandae"),
                        Generation: sdk.String("quae"),
                        Object: sdk.String("ipsum"),
                    },
                },
                WorkerPool: sdk.String("quidem"),
            },
            Description: sdk.String("molestias"),
            Environment: shared.FunctionEnvironmentEnumGen1.ToPointer(),
            EventTrigger: &shared.EventTriggerInput{
                Channel: sdk.String("pariatur"),
                EventFilters: []shared.EventFilter{
                    shared.EventFilter{
                        Attribute: sdk.String("praesentium"),
                        Operator: sdk.String("rem"),
                        Value: sdk.String("voluptates"),
                    },
                    shared.EventFilter{
                        Attribute: sdk.String("quasi"),
                        Operator: sdk.String("repudiandae"),
                        Value: sdk.String("sint"),
                    },
                },
                EventType: sdk.String("veritatis"),
                PubsubTopic: sdk.String("itaque"),
                RetryPolicy: shared.EventTriggerRetryPolicyEnumRetryPolicyUnspecified.ToPointer(),
                ServiceAccountEmail: sdk.String("enim"),
                TriggerRegion: sdk.String("consequatur"),
            },
            KmsKeyName: sdk.String("est"),
            Labels: map[string]string{
                "explicabo": "deserunt",
                "distinctio": "quibusdam",
                "labore": "modi",
                "qui": "aliquid",
            },
            Name: sdk.String("Isaac Aufderhar"),
            ServiceConfig: &shared.ServiceConfigInput{
                AllTrafficOnLatestRevision: sdk.Bool(false),
                AvailableCPU: sdk.String("ipsam"),
                AvailableMemory: sdk.String("alias"),
                EnvironmentVariables: map[string]string{
                    "dolorum": "excepturi",
                },
                IngressSettings: shared.ServiceConfigIngressSettingsEnumAllowAll.ToPointer(),
                MaxInstanceCount: sdk.Int(703737),
                MaxInstanceRequestConcurrency: sdk.Int(735194),
                MinInstanceCount: sdk.Int(288476),
                SecretEnvironmentVariables: []shared.SecretEnvVar{
                    shared.SecretEnvVar{
                        Key: sdk.String("eum"),
                        ProjectID: sdk.String("non"),
                        Secret: sdk.String("eligendi"),
                        Version: sdk.String("sint"),
                    },
                    shared.SecretEnvVar{
                        Key: sdk.String("aliquid"),
                        ProjectID: sdk.String("provident"),
                        Secret: sdk.String("necessitatibus"),
                        Version: sdk.String("sint"),
                    },
                    shared.SecretEnvVar{
                        Key: sdk.String("officia"),
                        ProjectID: sdk.String("dolor"),
                        Secret: sdk.String("debitis"),
                        Version: sdk.String("a"),
                    },
                    shared.SecretEnvVar{
                        Key: sdk.String("dolorum"),
                        ProjectID: sdk.String("in"),
                        Secret: sdk.String("in"),
                        Version: sdk.String("illum"),
                    },
                },
                SecretVolumes: []shared.SecretVolume{
                    shared.SecretVolume{
                        MountPath: sdk.String("rerum"),
                        ProjectID: sdk.String("dicta"),
                        Secret: sdk.String("magnam"),
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: sdk.String("facere"),
                                Version: sdk.String("ea"),
                            },
                            shared.SecretVersion{
                                Path: sdk.String("aliquid"),
                                Version: sdk.String("laborum"),
                            },
                            shared.SecretVersion{
                                Path: sdk.String("accusamus"),
                                Version: sdk.String("non"),
                            },
                            shared.SecretVersion{
                                Path: sdk.String("occaecati"),
                                Version: sdk.String("enim"),
                            },
                        },
                    },
                    shared.SecretVolume{
                        MountPath: sdk.String("accusamus"),
                        ProjectID: sdk.String("delectus"),
                        Secret: sdk.String("quidem"),
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: sdk.String("nam"),
                                Version: sdk.String("id"),
                            },
                            shared.SecretVersion{
                                Path: sdk.String("blanditiis"),
                                Version: sdk.String("deleniti"),
                            },
                            shared.SecretVersion{
                                Path: sdk.String("sapiente"),
                                Version: sdk.String("amet"),
                            },
                        },
                    },
                    shared.SecretVolume{
                        MountPath: sdk.String("deserunt"),
                        ProjectID: sdk.String("nisi"),
                        Secret: sdk.String("vel"),
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: sdk.String("omnis"),
                                Version: sdk.String("molestiae"),
                            },
                            shared.SecretVersion{
                                Path: sdk.String("perferendis"),
                                Version: sdk.String("nihil"),
                            },
                            shared.SecretVersion{
                                Path: sdk.String("magnam"),
                                Version: sdk.String("distinctio"),
                            },
                        },
                    },
                    shared.SecretVolume{
                        MountPath: sdk.String("id"),
                        ProjectID: sdk.String("labore"),
                        Secret: sdk.String("labore"),
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: sdk.String("natus"),
                                Version: sdk.String("nobis"),
                            },
                            shared.SecretVersion{
                                Path: sdk.String("eum"),
                                Version: sdk.String("vero"),
                            },
                        },
                    },
                },
                SecurityLevel: shared.ServiceConfigSecurityLevelEnumSecurityLevelUnspecified.ToPointer(),
                ServiceAccountEmail: sdk.String("architecto"),
                TimeoutSeconds: sdk.Int(298282),
                VpcConnector: sdk.String("et"),
                VpcConnectorEgressSettings: shared.ServiceConfigVpcConnectorEgressSettingsEnumPrivateRangesOnly.ToPointer(),
            },
        },
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("sint"),
        FunctionID: sdk.String("accusantium"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("reiciendis"),
        Parent: "mollitia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ad"),
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("dolor"),
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

## CloudfunctionsProjectsLocationsFunctionsDelete

Deletes a function with the given name from the specified project. If the given function is used by some trigger, the trigger will be updated to remove this function.

### Example Usage

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
    res, err := s.Projects.CloudfunctionsProjectsLocationsFunctionsDelete(ctx, operations.CloudfunctionsProjectsLocationsFunctionsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("iure"),
        Key: sdk.String("doloribus"),
        Name: "Frederick Schoen",
        OauthToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("repudiandae"),
    }, operations.CloudfunctionsProjectsLocationsFunctionsDeleteSecurity{
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

## CloudfunctionsProjectsLocationsFunctionsGenerateDownloadURL

Returns a signed URL for downloading deployed function source code. The URL is only valid for a limited period and should be used within 30 minutes of generation. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls

### Example Usage

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
    res, err := s.Projects.CloudfunctionsProjectsLocationsFunctionsGenerateDownloadURL(ctx, operations.CloudfunctionsProjectsLocationsFunctionsGenerateDownloadURLRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "nihil": "repellat",
            "quibusdam": "sed",
            "saepe": "pariatur",
        },
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("natus"),
        Key: sdk.String("magni"),
        Name: "Angelica Stanton",
        OauthToken: sdk.String("ea"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("ea"),
    }, operations.CloudfunctionsProjectsLocationsFunctionsGenerateDownloadURLSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateDownloadURLResponse != nil {
        // handle response
    }
}
```

## CloudfunctionsProjectsLocationsFunctionsGenerateUploadURL

Returns a signed URL for uploading a function source code. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls. Once the function source code upload is complete, the used signed URL should be provided in CreateFunction or UpdateFunction request as a reference to the function source code. When uploading source code to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, these two headers need to be specified: * `content-type: application/zip` And this header SHOULD NOT be specified: * `Authorization: Bearer YOUR_TOKEN`

### Example Usage

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
    res, err := s.Projects.CloudfunctionsProjectsLocationsFunctionsGenerateUploadURL(ctx, operations.CloudfunctionsProjectsLocationsFunctionsGenerateUploadURLRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GenerateUploadURLRequest: &shared.GenerateUploadURLRequest{
            KmsKeyName: sdk.String("ab"),
        },
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("voluptate"),
        Key: sdk.String("autem"),
        OauthToken: sdk.String("nam"),
        Parent: "eaque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.CloudfunctionsProjectsLocationsFunctionsGenerateUploadURLSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateUploadURLResponse != nil {
        // handle response
    }
}
```

## CloudfunctionsProjectsLocationsFunctionsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

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
    res, err := s.Projects.CloudfunctionsProjectsLocationsFunctionsGetIamPolicy(ctx, operations.CloudfunctionsProjectsLocationsFunctionsGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("fugiat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aut"),
        Fields: sdk.String("cumque"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("hic"),
        OptionsRequestedPolicyVersion: sdk.Int64(729991),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        Resource: "dolores",
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("totam"),
    }, operations.CloudfunctionsProjectsLocationsFunctionsGetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## CloudfunctionsProjectsLocationsFunctionsList

Returns a list of functions that belong to the requested project.

### Example Usage

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
    res, err := s.Projects.CloudfunctionsProjectsLocationsFunctionsList(ctx, operations.CloudfunctionsProjectsLocationsFunctionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("eaque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nesciunt"),
        Fields: sdk.String("eos"),
        Filter: sdk.String("perferendis"),
        Key: sdk.String("dolores"),
        OauthToken: sdk.String("minus"),
        OrderBy: sdk.String("quam"),
        PageSize: sdk.Int64(223924),
        PageToken: sdk.String("vero"),
        Parent: "nostrum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.CloudfunctionsProjectsLocationsFunctionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFunctionsResponse != nil {
        // handle response
    }
}
```

## CloudfunctionsProjectsLocationsFunctionsPatch

Updates existing function.

### Example Usage

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
    res, err := s.Projects.CloudfunctionsProjectsLocationsFunctionsPatch(ctx, operations.CloudfunctionsProjectsLocationsFunctionsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        FunctionInput: &shared.FunctionInput{
            BuildConfig: &shared.BuildConfigInput{
                DockerRegistry: shared.BuildConfigDockerRegistryEnumContainerRegistry.ToPointer(),
                DockerRepository: sdk.String("voluptatem"),
                EntryPoint: sdk.String("porro"),
                EnvironmentVariables: map[string]string{
                    "blanditiis": "error",
                },
                Runtime: sdk.String("eaque"),
                Source: &shared.Source{
                    RepoSource: &shared.RepoSource{
                        BranchName: sdk.String("occaecati"),
                        CommitSha: sdk.String("rerum"),
                        Dir: sdk.String("adipisci"),
                        InvertRegex: sdk.Bool(false),
                        ProjectID: sdk.String("asperiores"),
                        RepoName: sdk.String("earum"),
                        TagName: sdk.String("modi"),
                    },
                    StorageSource: &shared.StorageSource{
                        Bucket: sdk.String("iste"),
                        Generation: sdk.String("dolorum"),
                        Object: sdk.String("deleniti"),
                    },
                },
                SourceProvenance: &shared.SourceProvenance{
                    ResolvedRepoSource: &shared.RepoSource{
                        BranchName: sdk.String("pariatur"),
                        CommitSha: sdk.String("provident"),
                        Dir: sdk.String("nobis"),
                        InvertRegex: sdk.Bool(false),
                        ProjectID: sdk.String("libero"),
                        RepoName: sdk.String("delectus"),
                        TagName: sdk.String("quaerat"),
                    },
                    ResolvedStorageSource: &shared.StorageSource{
                        Bucket: sdk.String("quos"),
                        Generation: sdk.String("aliquid"),
                        Object: sdk.String("dolorem"),
                    },
                },
                WorkerPool: sdk.String("dolorem"),
            },
            Description: sdk.String("dolor"),
            Environment: shared.FunctionEnvironmentEnumEnvironmentUnspecified.ToPointer(),
            EventTrigger: &shared.EventTriggerInput{
                Channel: sdk.String("ipsum"),
                EventFilters: []shared.EventFilter{
                    shared.EventFilter{
                        Attribute: sdk.String("excepturi"),
                        Operator: sdk.String("cum"),
                        Value: sdk.String("voluptate"),
                    },
                    shared.EventFilter{
                        Attribute: sdk.String("dignissimos"),
                        Operator: sdk.String("reiciendis"),
                        Value: sdk.String("amet"),
                    },
                    shared.EventFilter{
                        Attribute: sdk.String("dolorum"),
                        Operator: sdk.String("numquam"),
                        Value: sdk.String("veritatis"),
                    },
                    shared.EventFilter{
                        Attribute: sdk.String("ipsa"),
                        Operator: sdk.String("ipsa"),
                        Value: sdk.String("iure"),
                    },
                },
                EventType: sdk.String("odio"),
                PubsubTopic: sdk.String("quaerat"),
                RetryPolicy: shared.EventTriggerRetryPolicyEnumRetryPolicyRetry.ToPointer(),
                ServiceAccountEmail: sdk.String("quidem"),
                TriggerRegion: sdk.String("voluptatibus"),
            },
            KmsKeyName: sdk.String("voluptas"),
            Labels: map[string]string{
                "eos": "atque",
                "sit": "fugiat",
                "ab": "soluta",
            },
            Name: sdk.String("Ted Kling"),
            ServiceConfig: &shared.ServiceConfigInput{
                AllTrafficOnLatestRevision: sdk.Bool(false),
                AvailableCPU: sdk.String("omnis"),
                AvailableMemory: sdk.String("necessitatibus"),
                EnvironmentVariables: map[string]string{
                    "asperiores": "nihil",
                    "ipsum": "voluptate",
                    "id": "saepe",
                },
                IngressSettings: shared.ServiceConfigIngressSettingsEnumAllowAll.ToPointer(),
                MaxInstanceCount: sdk.Int(137220),
                MaxInstanceRequestConcurrency: sdk.Int(20651),
                MinInstanceCount: sdk.Int(229219),
                SecretEnvironmentVariables: []shared.SecretEnvVar{
                    shared.SecretEnvVar{
                        Key: sdk.String("accusamus"),
                        ProjectID: sdk.String("ad"),
                        Secret: sdk.String("saepe"),
                        Version: sdk.String("suscipit"),
                    },
                    shared.SecretEnvVar{
                        Key: sdk.String("deserunt"),
                        ProjectID: sdk.String("provident"),
                        Secret: sdk.String("minima"),
                        Version: sdk.String("repellendus"),
                    },
                    shared.SecretEnvVar{
                        Key: sdk.String("totam"),
                        ProjectID: sdk.String("similique"),
                        Secret: sdk.String("alias"),
                        Version: sdk.String("at"),
                    },
                    shared.SecretEnvVar{
                        Key: sdk.String("quaerat"),
                        ProjectID: sdk.String("tempora"),
                        Secret: sdk.String("vel"),
                        Version: sdk.String("quod"),
                    },
                },
                SecretVolumes: []shared.SecretVolume{
                    shared.SecretVolume{
                        MountPath: sdk.String("qui"),
                        ProjectID: sdk.String("dolorum"),
                        Secret: sdk.String("a"),
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: sdk.String("harum"),
                                Version: sdk.String("iusto"),
                            },
                            shared.SecretVersion{
                                Path: sdk.String("ipsum"),
                                Version: sdk.String("quisquam"),
                            },
                        },
                    },
                    shared.SecretVolume{
                        MountPath: sdk.String("tenetur"),
                        ProjectID: sdk.String("amet"),
                        Secret: sdk.String("tempore"),
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: sdk.String("numquam"),
                                Version: sdk.String("enim"),
                            },
                            shared.SecretVersion{
                                Path: sdk.String("dolorem"),
                                Version: sdk.String("sapiente"),
                            },
                            shared.SecretVersion{
                                Path: sdk.String("totam"),
                                Version: sdk.String("nihil"),
                            },
                            shared.SecretVersion{
                                Path: sdk.String("sit"),
                                Version: sdk.String("expedita"),
                            },
                        },
                    },
                    shared.SecretVolume{
                        MountPath: sdk.String("neque"),
                        ProjectID: sdk.String("sed"),
                        Secret: sdk.String("vel"),
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: sdk.String("voluptas"),
                                Version: sdk.String("deserunt"),
                            },
                            shared.SecretVersion{
                                Path: sdk.String("quam"),
                                Version: sdk.String("ipsum"),
                            },
                            shared.SecretVersion{
                                Path: sdk.String("incidunt"),
                                Version: sdk.String("qui"),
                            },
                        },
                    },
                    shared.SecretVolume{
                        MountPath: sdk.String("cupiditate"),
                        ProjectID: sdk.String("maxime"),
                        Secret: sdk.String("pariatur"),
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: sdk.String("dicta"),
                                Version: sdk.String("laborum"),
                            },
                            shared.SecretVersion{
                                Path: sdk.String("totam"),
                                Version: sdk.String("incidunt"),
                            },
                            shared.SecretVersion{
                                Path: sdk.String("aspernatur"),
                                Version: sdk.String("dolores"),
                            },
                        },
                    },
                },
                SecurityLevel: shared.ServiceConfigSecurityLevelEnumSecureOptional.ToPointer(),
                ServiceAccountEmail: sdk.String("facilis"),
                TimeoutSeconds: sdk.Int(396060),
                VpcConnector: sdk.String("quam"),
                VpcConnectorEgressSettings: shared.ServiceConfigVpcConnectorEgressSettingsEnumPrivateRangesOnly.ToPointer(),
            },
        },
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("neque"),
        Fields: sdk.String("fugit"),
        Key: sdk.String("magni"),
        Name: "Ashley Hermiston",
        OauthToken: sdk.String("voluptatem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cumque"),
        UpdateMask: sdk.String("soluta"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("et"),
    }, operations.CloudfunctionsProjectsLocationsFunctionsPatchSecurity{
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

## CloudfunctionsProjectsLocationsFunctionsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

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
    res, err := s.Projects.CloudfunctionsProjectsLocationsFunctionsSetIamPolicy(ctx, operations.CloudfunctionsProjectsLocationsFunctionsSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "quos",
                                    "tempore",
                                    "cupiditate",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                        },
                        Service: sdk.String("delectus"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("dolore"),
                            Expression: sdk.String("labore"),
                            Location: sdk.String("adipisci"),
                            Title: sdk.String("Miss"),
                        },
                        Members: []string{
                            "quae",
                        },
                        Role: sdk.String("aut"),
                    },
                },
                Etag: sdk.String("quas"),
                Version: sdk.Int(929530),
            },
            UpdateMask: sdk.String("consequatur"),
        },
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("porro"),
        Fields: sdk.String("doloribus"),
        Key: sdk.String("ut"),
        OauthToken: sdk.String("facilis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cupiditate"),
        Resource: "qui",
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("laudantium"),
    }, operations.CloudfunctionsProjectsLocationsFunctionsSetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## CloudfunctionsProjectsLocationsFunctionsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

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
    res, err := s.Projects.CloudfunctionsProjectsLocationsFunctionsTestIamPermissions(ctx, operations.CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "voluptatibus",
                "quisquam",
                "vero",
            },
        },
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("delectus"),
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("consectetur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        Resource: "tenetur",
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("hic"),
    }, operations.CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```

## CloudfunctionsProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

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
    res, err := s.Projects.CloudfunctionsProjectsLocationsList(ctx, operations.CloudfunctionsProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("similique"),
        Fields: sdk.String("facilis"),
        Filter: sdk.String("vero"),
        Key: sdk.String("ducimus"),
        Name: "Rosemarie Stanton",
        OauthToken: sdk.String("impedit"),
        PageSize: sdk.Int64(13236),
        PageToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("exercitationem"),
        UploadType: sdk.String("nulla"),
        UploadProtocol: sdk.String("fugit"),
    }, operations.CloudfunctionsProjectsLocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```

## CloudfunctionsProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

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
    res, err := s.Projects.CloudfunctionsProjectsLocationsOperationsGet(ctx, operations.CloudfunctionsProjectsLocationsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("iusto"),
        Fields: sdk.String("eligendi"),
        Key: sdk.String("ducimus"),
        Name: "Brandi Glover",
        OauthToken: sdk.String("aspernatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("possimus"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.CloudfunctionsProjectsLocationsOperationsGetSecurity{
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

## CloudfunctionsProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

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
    res, err := s.Projects.CloudfunctionsProjectsLocationsOperationsList(ctx, operations.CloudfunctionsProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ex"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("dolor"),
        Filter: sdk.String("maiores"),
        Key: sdk.String("quasi"),
        Name: "Freda Marks",
        OauthToken: sdk.String("sapiente"),
        PageSize: sdk.Int64(788873),
        PageToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("corporis"),
    }, operations.CloudfunctionsProjectsLocationsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```

## CloudfunctionsProjectsLocationsRuntimesList

Returns a list of runtimes that are supported for the requested project.

### Example Usage

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
    res, err := s.Projects.CloudfunctionsProjectsLocationsRuntimesList(ctx, operations.CloudfunctionsProjectsLocationsRuntimesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("ea"),
        Filter: sdk.String("quo"),
        Key: sdk.String("consectetur"),
        OauthToken: sdk.String("recusandae"),
        Parent: "aspernatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        UploadType: sdk.String("eaque"),
        UploadProtocol: sdk.String("a"),
    }, operations.CloudfunctionsProjectsLocationsRuntimesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRuntimesResponse != nil {
        // handle response
    }
}
```
