# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/networksecurity/v1/go
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

    req := operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest{
        DollarXgafv: "2",
        AuthorizationPolicyInput: &shared.AuthorizationPolicyInput{
            Action: "ALLOW",
            Description: "distinctio",
            Labels: map[string]string{
                "unde": "nulla",
                "corrupti": "illum",
                "vel": "error",
                "deserunt": "suscipit",
            },
            Name: "iure",
            Rules: []shared.Rule{
                shared.Rule{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Hosts: []string{
                                "delectus",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "tempora",
                                RegexMatch: "suscipit",
                            },
                            Methods: []string{
                                "minus",
                                "placeat",
                            },
                            Ports: []int64{
                                479977,
                                568045,
                                392785,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "temporibus",
                                "ab",
                                "quis",
                                "veritatis",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "deserunt",
                                RegexMatch: "perferendis",
                            },
                            Methods: []string{
                                "repellendus",
                                "sapiente",
                            },
                            Ports: []int64{
                                140350,
                                870013,
                                870088,
                                978619,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "quod",
                                "quod",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "esse",
                                RegexMatch: "totam",
                            },
                            Methods: []string{
                                "dolorum",
                                "dicta",
                                "nam",
                                "officia",
                            },
                            Ports: []int64{
                                143353,
                                537373,
                                944669,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "totam",
                                "beatae",
                                "commodi",
                                "molestiae",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "modi",
                                RegexMatch: "qui",
                            },
                            Methods: []string{
                                "cum",
                                "esse",
                                "ipsum",
                                "excepturi",
                            },
                            Ports: []int64{
                                18789,
                            },
                        },
                    },
                    Sources: []shared.Source{
                        shared.Source{
                            IPBlocks: []string{
                                "sed",
                                "iste",
                                "dolor",
                            },
                            Principals: []string{
                                "laboriosam",
                                "hic",
                                "saepe",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "in",
                                "corporis",
                                "iste",
                            },
                            Principals: []string{
                                "saepe",
                                "quidem",
                            },
                        },
                    },
                },
                shared.Rule{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Hosts: []string{
                                "reiciendis",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "est",
                                RegexMatch: "mollitia",
                            },
                            Methods: []string{
                                "dolores",
                                "dolorem",
                                "corporis",
                            },
                            Ports: []int64{
                                750686,
                            },
                        },
                    },
                    Sources: []shared.Source{
                        shared.Source{
                            IPBlocks: []string{
                                "nemo",
                                "minima",
                                "excepturi",
                            },
                            Principals: []string{
                                "iure",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "doloribus",
                                "sapiente",
                                "architecto",
                            },
                            Principals: []string{
                                "dolorem",
                                "culpa",
                                "consequuntur",
                            },
                        },
                    },
                },
            },
        },
        AccessToken: "repellat",
        Alt: "media",
        AuthorizationPolicyID: "occaecati",
        Callback: "numquam",
        Fields: "commodi",
        Key: "quam",
        OauthToken: "molestiae",
        Parent: "velit",
        PrettyPrint: false,
        QuotaUser: "error",
        UploadType: "quia",
        UploadProtocol: "quis",
    }

    ctx := context.Background()
    res, err := s.Projects.NetworksecurityProjectsLocationsAuthorizationPoliciesCreate(ctx, req, operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateSecurity{
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

* `NetworksecurityProjectsLocationsAuthorizationPoliciesCreate` - Creates a new AuthorizationPolicy in a given project and location.
* `NetworksecurityProjectsLocationsAuthorizationPoliciesList` - Lists AuthorizationPolicies in a given project and location.
* `NetworksecurityProjectsLocationsClientTLSPoliciesCreate` - Creates a new ClientTlsPolicy in a given project and location.
* `NetworksecurityProjectsLocationsClientTLSPoliciesList` - Lists ClientTlsPolicies in a given project and location.
* `NetworksecurityProjectsLocationsList` - Lists information about the supported locations for this service.
* `NetworksecurityProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `NetworksecurityProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `NetworksecurityProjectsLocationsServerTLSPoliciesCreate` - Creates a new ServerTlsPolicy in a given project and location.
* `NetworksecurityProjectsLocationsServerTLSPoliciesDelete` - Deletes a single ServerTlsPolicy.
* `NetworksecurityProjectsLocationsServerTLSPoliciesGet` - Gets details of a single ServerTlsPolicy.
* `NetworksecurityProjectsLocationsServerTLSPoliciesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `NetworksecurityProjectsLocationsServerTLSPoliciesList` - Lists ServerTlsPolicies in a given project and location.
* `NetworksecurityProjectsLocationsServerTLSPoliciesPatch` - Updates the parameters of a single ServerTlsPolicy.
* `NetworksecurityProjectsLocationsServerTLSPoliciesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `NetworksecurityProjectsLocationsServerTLSPoliciesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
