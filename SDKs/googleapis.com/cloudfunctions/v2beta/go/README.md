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
        Security: operations.CloudfunctionsProjectsLocationsFunctionsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.CloudfunctionsProjectsLocationsFunctionsCreatePathParams{
            Parent: "unde",
        },
        QueryParams: operations.CloudfunctionsProjectsLocationsFunctionsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            FunctionID: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
        },
        Request: &shared.FunctionInput{
            BuildConfig: &shared.BuildConfigInput{
                BuildpackStack: "iusto",
                DockerRegistry: "DOCKER_REGISTRY_UNSPECIFIED",
                DockerRepository: "saepe",
                EntryPoint: "inventore",
                EnvironmentVariables: map[string]string{
                    "enim": "eum",
                    "voluptatum": "autem",
                    "vel": "non",
                    "deleniti": "similique",
                },
                Runtime: "reprehenderit",
                Source: &shared.Source{
                    RepoSource: &shared.RepoSource{
                        BranchName: "molestiae",
                        CommitSha: "quo",
                        Dir: "quasi",
                        InvertRegex: false,
                        ProjectID: "laboriosam",
                        RepoName: "dicta",
                        TagName: "est",
                    },
                    StorageSource: &shared.StorageSource{
                        Bucket: "voluptatem",
                        Generation: "consequatur",
                        Object: "fugiat",
                    },
                },
                SourceProvenance: &shared.SourceProvenance{
                    ResolvedRepoSource: &shared.RepoSource{
                        BranchName: "a",
                        CommitSha: "omnis",
                        Dir: "eos",
                        InvertRegex: false,
                        ProjectID: "accusamus",
                        RepoName: "accusamus",
                        TagName: "reiciendis",
                    },
                    ResolvedStorageSource: &shared.StorageSource{
                        Bucket: "rem",
                        Generation: "quibusdam",
                        Object: "et",
                    },
                },
                WorkerPool: "praesentium",
            },
            Description: "occaecati",
            Environment: "GEN_2",
            EventTrigger: &shared.EventTriggerInput{
                Channel: "soluta",
                EventFilters: []shared.EventFilter{
                    shared.EventFilter{
                        Attribute: "quisquam",
                        Operator: "rerum",
                        Value: "culpa",
                    },
                },
                EventType: "qui",
                PubsubTopic: "sed",
                RetryPolicy: "RETRY_POLICY_RETRY",
                ServiceAccountEmail: "possimus",
                TriggerRegion: "occaecati",
            },
            KmsKeyName: "odit",
            Labels: map[string]string{
                "rem": "voluptatem",
                "amet": "est",
            },
            Name: "id",
            ServiceConfig: &shared.ServiceConfigInput{
                AllTrafficOnLatestRevision: false,
                AvailableCPU: "blanditiis",
                AvailableMemory: "numquam",
                EnvironmentVariables: map[string]string{
                    "dolores": "sit",
                    "quia": "et",
                    "voluptatem": "laborum",
                },
                IngressSettings: "INGRESS_SETTINGS_UNSPECIFIED",
                MaxInstanceCount: 616934,
                MaxInstanceRequestConcurrency: 386489,
                MinInstanceCount: 943749,
                SecretEnvironmentVariables: []shared.SecretEnvVar{
                    shared.SecretEnvVar{
                        Key: "soluta",
                        ProjectID: "qui",
                        Secret: "ea",
                        Version: "laborum",
                    },
                    shared.SecretEnvVar{
                        Key: "iusto",
                        ProjectID: "ut",
                        Secret: "optio",
                        Version: "aspernatur",
                    },
                    shared.SecretEnvVar{
                        Key: "inventore",
                        ProjectID: "ut",
                        Secret: "libero",
                        Version: "et",
                    },
                    shared.SecretEnvVar{
                        Key: "libero",
                        ProjectID: "ipsum",
                        Secret: "non",
                        Version: "ea",
                    },
                },
                SecretVolumes: []shared.SecretVolume{
                    shared.SecretVolume{
                        MountPath: "placeat",
                        ProjectID: "ipsam",
                        Secret: "est",
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: "quia",
                                Version: "similique",
                            },
                            shared.SecretVersion{
                                Path: "eaque",
                                Version: "odio",
                            },
                        },
                    },
                },
                SecurityLevel: "SECURE_ALWAYS",
                ServiceAccountEmail: "doloribus",
                TimeoutSeconds: 958950,
                VpcConnector: "aut",
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


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
* `CloudfunctionsProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `CloudfunctionsProjectsLocationsRuntimesList` - Returns a list of runtimes that are supported for the requested project.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
