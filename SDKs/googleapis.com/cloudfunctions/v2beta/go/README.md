# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudfunctions/v2beta/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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
        DollarXgafv: "2",
        FunctionInput: &shared.FunctionInput{
            BuildConfig: &shared.BuildConfigInput{
                BuildpackStack: "provident",
                DockerRegistry: "ARTIFACT_REGISTRY",
                DockerRepository: "quibusdam",
                EntryPoint: "unde",
                EnvironmentVariables: map[string]string{
                    "corrupti": "illum",
                    "vel": "error",
                    "deserunt": "suscipit",
                    "iure": "magnam",
                },
                Runtime: "debitis",
                Source: &shared.Source{
                    RepoSource: &shared.RepoSource{
                        BranchName: "ipsa",
                        CommitSha: "delectus",
                        Dir: "tempora",
                        InvertRegex: false,
                        ProjectID: "suscipit",
                        RepoName: "molestiae",
                        TagName: "minus",
                    },
                    StorageSource: &shared.StorageSource{
                        Bucket: "placeat",
                        Generation: "voluptatum",
                        Object: "iusto",
                    },
                },
                SourceProvenance: &shared.SourceProvenance{
                    ResolvedRepoSource: &shared.RepoSource{
                        BranchName: "excepturi",
                        CommitSha: "nisi",
                        Dir: "recusandae",
                        InvertRegex: false,
                        ProjectID: "temporibus",
                        RepoName: "ab",
                        TagName: "quis",
                    },
                    ResolvedStorageSource: &shared.StorageSource{
                        Bucket: "veritatis",
                        Generation: "deserunt",
                        Object: "perferendis",
                    },
                },
                WorkerPool: "ipsam",
            },
            Description: "repellendus",
            Environment: "GEN_2",
            EventTrigger: &shared.EventTriggerInput{
                Channel: "quo",
                EventFilters: []shared.EventFilter{
                    shared.EventFilter{
                        Attribute: "at",
                        Operator: "at",
                        Value: "maiores",
                    },
                },
                EventType: "molestiae",
                PubsubTopic: "quod",
                RetryPolicy: "RETRY_POLICY_RETRY",
                ServiceAccountEmail: "esse",
                TriggerRegion: "totam",
            },
            KmsKeyName: "porro",
            Labels: map[string]string{
                "dicta": "nam",
                "officia": "occaecati",
                "fugit": "deleniti",
            },
            Name: "hic",
            ServiceConfig: &shared.ServiceConfigInput{
                AllTrafficOnLatestRevision: false,
                AvailableCPU: "optio",
                AvailableMemory: "totam",
                EnvironmentVariables: map[string]string{
                    "commodi": "molestiae",
                },
                IngressSettings: "ALLOW_ALL",
                MaxInstanceCount: 186332,
                MaxInstanceRequestConcurrency: 774234,
                MinInstanceCount: 736918,
                SecretEnvironmentVariables: []shared.SecretEnvVar{
                    shared.SecretEnvVar{
                        Key: "ipsum",
                        ProjectID: "excepturi",
                        Secret: "aspernatur",
                        Version: "perferendis",
                    },
                    shared.SecretEnvVar{
                        Key: "ad",
                        ProjectID: "natus",
                        Secret: "sed",
                        Version: "iste",
                    },
                },
                SecretVolumes: []shared.SecretVolume{
                    shared.SecretVolume{
                        MountPath: "natus",
                        ProjectID: "laboriosam",
                        Secret: "hic",
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: "fuga",
                                Version: "in",
                            },
                            shared.SecretVersion{
                                Path: "corporis",
                                Version: "iste",
                            },
                            shared.SecretVersion{
                                Path: "iure",
                                Version: "saepe",
                            },
                            shared.SecretVersion{
                                Path: "quidem",
                                Version: "architecto",
                            },
                        },
                    },
                },
                SecurityLevel: "SECURITY_LEVEL_UNSPECIFIED",
                ServiceAccountEmail: "reiciendis",
                TimeoutSeconds: 666767,
                VpcConnector: "mollitia",
                VpcConnectorEgressSettings: "ALL_TRAFFIC",
            },
        },
        AccessToken: "dolores",
        Alt: "json",
        Callback: "corporis",
        Fields: "explicabo",
        FunctionID: "nobis",
        Key: "enim",
        OauthToken: "omnis",
        Parent: "nemo",
        PrettyPrint: false,
        QuotaUser: "minima",
        UploadType: "excepturi",
        UploadProtocol: "accusantium",
    }

    ctx := context.Background()
    res, err := s.Projects.CloudfunctionsProjectsLocationsFunctionsCreate(ctx, req, operations.CloudfunctionsProjectsLocationsFunctionsCreateSecurity{
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


### Projects

* `CloudfunctionsProjectsLocationsFunctionsCreate` - Creates a new function. If a function with the given name already exists in the specified project, the long running operation will return `ALREADY_EXISTS` error.
* `CloudfunctionsProjectsLocationsFunctionsDelete` - Deletes a function with the given name from the specified project. If the given function is used by some trigger, the trigger will be updated to remove this function.
* `CloudfunctionsProjectsLocationsFunctionsGenerateDownloadURL` - Returns a signed URL for downloading deployed function source code. The URL is only valid for a limited period and should be used within 30 minutes of generation. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls
* `CloudfunctionsProjectsLocationsFunctionsGenerateUploadURL` - Returns a signed URL for uploading a function source code. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls. Once the function source code upload is complete, the used signed URL should be provided in CreateFunction or UpdateFunction request as a reference to the function source code. When uploading source code to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, these two headers need to be specified: * `content-type: application/zip` And this header SHOULD NOT be specified: * `Authorization: Bearer YOUR_TOKEN`
* `CloudfunctionsProjectsLocationsFunctionsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `CloudfunctionsProjectsLocationsFunctionsList` - Returns a list of functions that belong to the requested project.
* `CloudfunctionsProjectsLocationsFunctionsPatch` - Updates existing function.
* `CloudfunctionsProjectsLocationsFunctionsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `CloudfunctionsProjectsLocationsFunctionsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `CloudfunctionsProjectsLocationsList` - Lists information about the supported locations for this service.
* `CloudfunctionsProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `CloudfunctionsProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `CloudfunctionsProjectsLocationsRuntimesList` - Returns a list of runtimes that are supported for the requested project.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
