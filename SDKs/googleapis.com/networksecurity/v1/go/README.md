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
        Security: operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            AuthorizationPolicyID: "unde",
            Callback: "nulla",
            Fields: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
        },
        Request: &shared.AuthorizationPolicyInput{
            Action: "ALLOW",
            Description: "magnam",
            Labels: map[string]string{
                "ipsa": "delectus",
                "tempora": "suscipit",
                "molestiae": "minus",
                "placeat": "voluptatum",
            },
            Name: "iusto",
            Rules: []shared.Rule{
                shared.Rule{
                    Destinations: []shared.Destination{
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
                    },
                    Sources: []shared.Source{
                        shared.Source{
                            IPBlocks: []string{
                                "beatae",
                                "commodi",
                                "molestiae",
                            },
                            Principals: []string{
                                "qui",
                                "impedit",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "esse",
                                "ipsum",
                                "excepturi",
                            },
                            Principals: []string{
                                "perferendis",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "natus",
                                "sed",
                            },
                            Principals: []string{
                                "dolor",
                                "natus",
                                "laboriosam",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "saepe",
                                "fuga",
                                "in",
                                "corporis",
                            },
                            Principals: []string{
                                "iure",
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
                shared.Rule{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Hosts: []string{
                                "occaecati",
                                "numquam",
                                "commodi",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "quam",
                                RegexMatch: "molestiae",
                            },
                            Methods: []string{
                                "error",
                            },
                            Ports: []int64{
                                338007,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "laborum",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "animi",
                                RegexMatch: "enim",
                            },
                            Methods: []string{
                                "quo",
                            },
                            Ports: []int64{
                                949572,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "id",
                                "possimus",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "aut",
                                RegexMatch: "quasi",
                            },
                            Methods: []string{
                                "temporibus",
                                "laborum",
                                "quasi",
                            },
                            Ports: []int64{
                                976460,
                                878194,
                                468651,
                                509624,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "ipsa",
                                "omnis",
                                "voluptate",
                                "cum",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "perferendis",
                                RegexMatch: "doloremque",
                            },
                            Methods: []string{
                                "ut",
                                "maiores",
                            },
                            Ports: []int64{
                                359444,
                            },
                        },
                    },
                    Sources: []shared.Source{
                        shared.Source{
                            IPBlocks: []string{
                                "dicta",
                                "harum",
                            },
                            Principals: []string{
                                "accusamus",
                                "commodi",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "quae",
                                "ipsum",
                                "quidem",
                                "molestias",
                            },
                            Principals: []string{
                                "pariatur",
                                "modi",
                                "praesentium",
                            },
                        },
                    },
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.NetworksecurityProjectsLocationsAuthorizationPoliciesCreate(ctx, req)
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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
