# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
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
            Parent: "saepe",
        },
        QueryParams: operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "et",
            Alt: "media",
            AuthorizationPolicyID: "quas",
            Callback: "doloribus",
            Fields: "qui",
            Key: "aliquam",
            OauthToken: "sequi",
            PrettyPrint: true,
            QuotaUser: "officia",
            UploadType: "sint",
            UploadProtocol: "et",
        },
        Request: &shared.AuthorizationPolicyInput{
            Action: "ACTION_UNSPECIFIED",
            Description: "commodi",
            Labels: map[string]string{
                "temporibus": "aut",
                "beatae": "aut",
            },
            Name: "tempora",
            Rules: []shared.Rule{
                shared.Rule{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Hosts: []string{
                                "architecto",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "omnis",
                                RegexMatch: "est",
                            },
                            Methods: []string{
                                "beatae",
                                "laboriosam",
                            },
                            Ports: []int64{
                                7415710680596502931,
                            },
                        },
                    },
                    Sources: []shared.Source{
                        shared.Source{
                            IPBlocks: []string{
                                "ipsum",
                                "asperiores",
                                "deleniti",
                            },
                            Principals: []string{
                                "cupiditate",
                            },
                        },
                    },
                },
                shared.Rule{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Hosts: []string{
                                "dolore",
                                "eos",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "autem",
                                RegexMatch: "ut",
                            },
                            Methods: []string{
                                "odio",
                                "quia",
                                "voluptas",
                            },
                            Ports: []int64{
                                6128040509177040184,
                                4551968008281478867,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "nulla",
                                "quia",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "enim",
                                RegexMatch: "cum",
                            },
                            Methods: []string{
                                "veniam",
                                "ipsum",
                                "harum",
                            },
                            Ports: []int64{
                                4371946014492395686,
                                1464290273605482076,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "dolorem",
                                "sunt",
                                "molestiae",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "nam",
                                RegexMatch: "eius",
                            },
                            Methods: []string{
                                "ex",
                            },
                            Ports: []int64{
                                7744083498162407862,
                                3478255059356988526,
                                8028515407834417809,
                            },
                        },
                    },
                    Sources: []shared.Source{
                        shared.Source{
                            IPBlocks: []string{
                                "maxime",
                                "quod",
                            },
                            Principals: []string{
                                "occaecati",
                                "nisi",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "iste",
                                "ducimus",
                                "ipsam",
                            },
                            Principals: []string{
                                "voluptas",
                                "animi",
                                "quos",
                            },
                        },
                    },
                },
                shared.Rule{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Hosts: []string{
                                "labore",
                                "voluptatem",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "id",
                                RegexMatch: "labore",
                            },
                            Methods: []string{
                                "iste",
                                "quia",
                                "fugiat",
                            },
                            Ports: []int64{
                                559646147369155099,
                                3006668431082548483,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "esse",
                                "ex",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "magnam",
                                RegexMatch: "aliquam",
                            },
                            Methods: []string{
                                "vitae",
                                "suscipit",
                            },
                            Ports: []int64{
                                2484632256685155095,
                                7341035035727093925,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "doloremque",
                                "accusamus",
                                "quo",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "veritatis",
                                RegexMatch: "mollitia",
                            },
                            Methods: []string{
                                "harum",
                                "dolor",
                            },
                            Ports: []int64{
                                1265033285511156307,
                                6666991780916946900,
                            },
                        },
                    },
                    Sources: []shared.Source{
                        shared.Source{
                            IPBlocks: []string{
                                "quod",
                                "delectus",
                                "eius",
                            },
                            Principals: []string{
                                "maiores",
                                "fuga",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "in",
                                "quae",
                                "ipsum",
                            },
                            Principals: []string{
                                "et",
                                "ipsum",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "autem",
                                "laboriosam",
                            },
                            Principals: []string{
                                "incidunt",
                                "distinctio",
                            },
                        },
                    },
                },
            },
        },
    }
    
    res, err := s.Projects.NetworksecurityProjectsLocationsAuthorizationPoliciesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

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
