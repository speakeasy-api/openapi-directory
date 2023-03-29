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
            Parent: "unde",
        },
        QueryParams: operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            AuthorizationPolicyID: "id",
            Callback: "vero",
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
        },
        Request: &shared.AuthorizationPolicyInput{
            Action: "ALLOW",
            Description: "ullam",
            Labels: map[string]string{
                "inventore": "sapiente",
                "enim": "eum",
                "voluptatum": "autem",
                "vel": "non",
            },
            Name: "deleniti",
            Rules: []shared.Rule{
                shared.Rule{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Hosts: []string{
                                "quo",
                                "quasi",
                                "laboriosam",
                                "dicta",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "est",
                                RegexMatch: "voluptatem",
                            },
                            Methods: []string{
                                "fugiat",
                                "a",
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
                                "quibusdam",
                                "et",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "praesentium",
                                RegexMatch: "occaecati",
                            },
                            Methods: []string{
                                "soluta",
                                "sed",
                                "quisquam",
                                "rerum",
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
                                "odit",
                                "esse",
                                "rem",
                            },
                            Principals: []string{
                                "amet",
                                "est",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "blanditiis",
                                "numquam",
                                "similique",
                            },
                            Principals: []string{
                                "sit",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "et",
                                "voluptatem",
                            },
                            Principals: []string{
                                "modi",
                                "et",
                                "iure",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "ut",
                                "soluta",
                                "qui",
                                "ea",
                            },
                            Principals: []string{
                                "iusto",
                                "ut",
                                "optio",
                            },
                        },
                    },
                },
                shared.Rule{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Hosts: []string{
                                "ut",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "libero",
                                RegexMatch: "et",
                            },
                            Methods: []string{
                                "ipsum",
                                "non",
                                "ea",
                            },
                            Ports: []int64{
                                750686,
                            },
                        },
                    },
                    Sources: []shared.Source{
                        shared.Source{
                            IPBlocks: []string{
                                "commodi",
                                "quia",
                                "similique",
                            },
                            Principals: []string{
                                "odio",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "doloribus",
                                "a",
                                "aut",
                            },
                            Principals: []string{
                                "non",
                                "quidem",
                                "neque",
                            },
                        },
                    },
                },
                shared.Rule{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Hosts: []string{
                                "culpa",
                                "aliquam",
                                "esse",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "totam",
                                RegexMatch: "voluptatum",
                            },
                            Methods: []string{
                                "fuga",
                            },
                            Ports: []int64{
                                338007,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "cum",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "expedita",
                                RegexMatch: "ipsam",
                            },
                            Methods: []string{
                                "omnis",
                            },
                            Ports: []int64{
                                949572,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "distinctio",
                                "qui",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "perferendis",
                                RegexMatch: "aspernatur",
                            },
                            Methods: []string{
                                "quo",
                                "tempore",
                                "explicabo",
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
                                "illo",
                                "id",
                                "qui",
                                "quod",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "sit",
                                RegexMatch: "eaque",
                            },
                            Methods: []string{
                                "veniam",
                                "reiciendis",
                            },
                            Ports: []int64{
                                359444,
                            },
                        },
                    },
                    Sources: []shared.Source{
                        shared.Source{
                            IPBlocks: []string{
                                "sed",
                                "est",
                            },
                            Principals: []string{
                                "aut",
                                "esse",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "veritatis",
                                "numquam",
                                "eligendi",
                                "error",
                            },
                            Principals: []string{
                                "et",
                                "ut",
                                "molestias",
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
* `NetworksecurityProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
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
