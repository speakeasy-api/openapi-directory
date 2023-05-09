# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudfunctions/v2alpha/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [CloudfunctionsProjectsLocationsFunctionsCreate](docs/projects/README.md#cloudfunctionsprojectslocationsfunctionscreate) - Creates a new function. If a function with the given name already exists in the specified project, the long running operation will return `ALREADY_EXISTS` error.
* [CloudfunctionsProjectsLocationsFunctionsDelete](docs/projects/README.md#cloudfunctionsprojectslocationsfunctionsdelete) - Deletes a function with the given name from the specified project. If the given function is used by some trigger, the trigger will be updated to remove this function.
* [CloudfunctionsProjectsLocationsFunctionsGenerateDownloadURL](docs/projects/README.md#cloudfunctionsprojectslocationsfunctionsgeneratedownloadurl) - Returns a signed URL for downloading deployed function source code. The URL is only valid for a limited period and should be used within 30 minutes of generation. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls
* [CloudfunctionsProjectsLocationsFunctionsGenerateUploadURL](docs/projects/README.md#cloudfunctionsprojectslocationsfunctionsgenerateuploadurl) - Returns a signed URL for uploading a function source code. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls. Once the function source code upload is complete, the used signed URL should be provided in CreateFunction or UpdateFunction request as a reference to the function source code. When uploading source code to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, these two headers need to be specified: * `content-type: application/zip` And this header SHOULD NOT be specified: * `Authorization: Bearer YOUR_TOKEN`
* [CloudfunctionsProjectsLocationsFunctionsGetIamPolicy](docs/projects/README.md#cloudfunctionsprojectslocationsfunctionsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [CloudfunctionsProjectsLocationsFunctionsList](docs/projects/README.md#cloudfunctionsprojectslocationsfunctionslist) - Returns a list of functions that belong to the requested project.
* [CloudfunctionsProjectsLocationsFunctionsPatch](docs/projects/README.md#cloudfunctionsprojectslocationsfunctionspatch) - Updates existing function.
* [CloudfunctionsProjectsLocationsFunctionsSetIamPolicy](docs/projects/README.md#cloudfunctionsprojectslocationsfunctionssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [CloudfunctionsProjectsLocationsFunctionsTestIamPermissions](docs/projects/README.md#cloudfunctionsprojectslocationsfunctionstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [CloudfunctionsProjectsLocationsList](docs/projects/README.md#cloudfunctionsprojectslocationslist) - Lists information about the supported locations for this service.
* [CloudfunctionsProjectsLocationsOperationsGet](docs/projects/README.md#cloudfunctionsprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [CloudfunctionsProjectsLocationsOperationsList](docs/projects/README.md#cloudfunctionsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [CloudfunctionsProjectsLocationsRuntimesList](docs/projects/README.md#cloudfunctionsprojectslocationsruntimeslist) - Returns a list of runtimes that are supported for the requested project.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
