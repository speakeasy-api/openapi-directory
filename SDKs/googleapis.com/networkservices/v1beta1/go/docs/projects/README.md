# Projects

### Available Operations

* [NetworkservicesProjectsLocationsEndpointPoliciesCreate](#networkservicesprojectslocationsendpointpoliciescreate) - Creates a new EndpointPolicy in a given project and location.
* [NetworkservicesProjectsLocationsEndpointPoliciesList](#networkservicesprojectslocationsendpointpolicieslist) - Lists EndpointPolicies in a given project and location.
* [NetworkservicesProjectsLocationsGatewaysCreate](#networkservicesprojectslocationsgatewayscreate) - Creates a new Gateway in a given project and location.
* [NetworkservicesProjectsLocationsGatewaysList](#networkservicesprojectslocationsgatewayslist) - Lists Gateways in a given project and location.
* [NetworkservicesProjectsLocationsGrpcRoutesCreate](#networkservicesprojectslocationsgrpcroutescreate) - Creates a new GrpcRoute in a given project and location.
* [NetworkservicesProjectsLocationsGrpcRoutesList](#networkservicesprojectslocationsgrpcrouteslist) - Lists GrpcRoutes in a given project and location.
* [NetworkservicesProjectsLocationsHTTPRoutesCreate](#networkservicesprojectslocationshttproutescreate) - Creates a new HttpRoute in a given project and location.
* [NetworkservicesProjectsLocationsHTTPRoutesList](#networkservicesprojectslocationshttprouteslist) - Lists HttpRoute in a given project and location.
* [NetworkservicesProjectsLocationsList](#networkservicesprojectslocationslist) - Lists information about the supported locations for this service.
* [NetworkservicesProjectsLocationsMeshesCreate](#networkservicesprojectslocationsmeshescreate) - Creates a new Mesh in a given project and location.
* [NetworkservicesProjectsLocationsMeshesList](#networkservicesprojectslocationsmesheslist) - Lists Meshes in a given project and location.
* [NetworkservicesProjectsLocationsOperationsCancel](#networkservicesprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [NetworkservicesProjectsLocationsOperationsList](#networkservicesprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [NetworkservicesProjectsLocationsServiceBindingsCreate](#networkservicesprojectslocationsservicebindingscreate) - Creates a new ServiceBinding in a given project and location.
* [NetworkservicesProjectsLocationsServiceBindingsGetIamPolicy](#networkservicesprojectslocationsservicebindingsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [NetworkservicesProjectsLocationsServiceBindingsList](#networkservicesprojectslocationsservicebindingslist) - Lists ServiceBinding in a given project and location.
* [NetworkservicesProjectsLocationsServiceBindingsSetIamPolicy](#networkservicesprojectslocationsservicebindingssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [NetworkservicesProjectsLocationsServiceBindingsTestIamPermissions](#networkservicesprojectslocationsservicebindingstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [NetworkservicesProjectsLocationsTCPRoutesCreate](#networkservicesprojectslocationstcproutescreate) - Creates a new TcpRoute in a given project and location.
* [NetworkservicesProjectsLocationsTCPRoutesList](#networkservicesprojectslocationstcprouteslist) - Lists TcpRoute in a given project and location.
* [NetworkservicesProjectsLocationsTLSRoutesCreate](#networkservicesprojectslocationstlsroutescreate) - Creates a new TlsRoute in a given project and location.
* [NetworkservicesProjectsLocationsTLSRoutesDelete](#networkservicesprojectslocationstlsroutesdelete) - Deletes a single TlsRoute.
* [NetworkservicesProjectsLocationsTLSRoutesGet](#networkservicesprojectslocationstlsroutesget) - Gets details of a single TlsRoute.
* [NetworkservicesProjectsLocationsTLSRoutesList](#networkservicesprojectslocationstlsrouteslist) - Lists TlsRoute in a given project and location.
* [NetworkservicesProjectsLocationsTLSRoutesPatch](#networkservicesprojectslocationstlsroutespatch) - Updates the parameters of a single TlsRoute.

## NetworkservicesProjectsLocationsEndpointPoliciesCreate

Creates a new EndpointPolicy in a given project and location.

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
    res, err := s.Projects.NetworkservicesProjectsLocationsEndpointPoliciesCreate(ctx, operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        EndpointPolicyInput: &shared.EndpointPolicyInput{
            AuthorizationPolicy: sdk.String("totam"),
            ClientTLSPolicy: sdk.String("porro"),
            Description: sdk.String("dolorum"),
            EndpointMatcher: &shared.EndpointMatcher{
                MetadataLabelMatcher: &shared.MetadataLabelMatcher{
                    MetadataLabelMatchCriteria: shared.MetadataLabelMatcherMetadataLabelMatchCriteriaEnumMetadataLabelMatchCriteriaUnspecified.ToPointer(),
                    MetadataLabels: []shared.MetadataLabels{
                        shared.MetadataLabels{
                            LabelName: sdk.String("officia"),
                            LabelValue: sdk.String("occaecati"),
                        },
                        shared.MetadataLabels{
                            LabelName: sdk.String("fugit"),
                            LabelValue: sdk.String("deleniti"),
                        },
                        shared.MetadataLabels{
                            LabelName: sdk.String("hic"),
                            LabelValue: sdk.String("optio"),
                        },
                    },
                },
            },
            Labels: map[string]string{
                "beatae": "commodi",
                "molestiae": "modi",
                "qui": "impedit",
            },
            Name: sdk.String("Cory Emmerich"),
            ServerTLSPolicy: sdk.String("perferendis"),
            TrafficPortSelector: &shared.TrafficPortSelector{
                Ports: []string{
                    "natus",
                    "sed",
                },
            },
            Type: shared.EndpointPolicyTypeEnumSidecarProxy.ToPointer(),
        },
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laboriosam"),
        EndpointPolicyID: sdk.String("hic"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("fuga"),
        OauthToken: sdk.String("in"),
        Parent: "corporis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateSecurity{
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

## NetworkservicesProjectsLocationsEndpointPoliciesList

Lists EndpointPolicies in a given project and location.

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
    res, err := s.Projects.NetworkservicesProjectsLocationsEndpointPoliciesList(ctx, operations.NetworkservicesProjectsLocationsEndpointPoliciesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("est"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("laborum"),
        PageSize: sdk.Int64(170909),
        PageToken: sdk.String("dolorem"),
        Parent: "corporis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("explicabo"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("enim"),
    }, operations.NetworkservicesProjectsLocationsEndpointPoliciesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEndpointPoliciesResponse != nil {
        // handle response
    }
}
```

## NetworkservicesProjectsLocationsGatewaysCreate

Creates a new Gateway in a given project and location.

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
    res, err := s.Projects.NetworkservicesProjectsLocationsGatewaysCreate(ctx, operations.NetworkservicesProjectsLocationsGatewaysCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GatewayInput: &shared.GatewayInput{
            Addresses: []string{
                "minima",
                "excepturi",
            },
            CertificateUrls: []string{
                "iure",
            },
            Description: sdk.String("culpa"),
            GatewaySecurityPolicy: sdk.String("doloribus"),
            Labels: map[string]string{
                "architecto": "mollitia",
                "dolorem": "culpa",
                "consequuntur": "repellat",
                "mollitia": "occaecati",
            },
            Name: sdk.String("Lucy Konopelski"),
            Network: sdk.String("error"),
            Ports: []int{
                338007,
            },
            Scope: sdk.String("vitae"),
            ServerTLSPolicy: sdk.String("laborum"),
            Subnetwork: sdk.String("animi"),
            Type: shared.GatewayTypeEnumTypeUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sequi"),
        Fields: sdk.String("tenetur"),
        GatewayID: sdk.String("ipsam"),
        Key: sdk.String("id"),
        OauthToken: sdk.String("possimus"),
        Parent: "aut",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("temporibus"),
    }, operations.NetworkservicesProjectsLocationsGatewaysCreateSecurity{
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

## NetworkservicesProjectsLocationsGatewaysList

Lists Gateways in a given project and location.

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
    res, err := s.Projects.NetworkservicesProjectsLocationsGatewaysList(ctx, operations.NetworkservicesProjectsLocationsGatewaysListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("vero"),
        Key: sdk.String("nihil"),
        OauthToken: sdk.String("praesentium"),
        PageSize: sdk.Int64(976762),
        PageToken: sdk.String("ipsa"),
        Parent: "omnis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.NetworkservicesProjectsLocationsGatewaysListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGatewaysResponse != nil {
        // handle response
    }
}
```

## NetworkservicesProjectsLocationsGrpcRoutesCreate

Creates a new GrpcRoute in a given project and location.

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
    res, err := s.Projects.NetworkservicesProjectsLocationsGrpcRoutesCreate(ctx, operations.NetworkservicesProjectsLocationsGrpcRoutesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GrpcRouteInput: &shared.GrpcRouteInput{
            Description: sdk.String("reprehenderit"),
            Gateways: []string{
                "maiores",
                "dicta",
            },
            Hostnames: []string{
                "dolore",
                "iusto",
            },
            Labels: map[string]string{
                "harum": "enim",
            },
            Meshes: []string{
                "commodi",
                "repudiandae",
                "quae",
                "ipsum",
            },
            Name: sdk.String("Virgil Mante"),
            Rules: []shared.GrpcRouteRouteRule{
                shared.GrpcRouteRouteRule{
                    Action: &shared.GrpcRouteRouteAction{
                        Destinations: []shared.GrpcRouteDestination{
                            shared.GrpcRouteDestination{
                                ServiceName: sdk.String("voluptates"),
                                Weight: sdk.Int(93940),
                            },
                            shared.GrpcRouteDestination{
                                ServiceName: sdk.String("repudiandae"),
                                Weight: sdk.Int(575947),
                            },
                            shared.GrpcRouteDestination{
                                ServiceName: sdk.String("veritatis"),
                                Weight: sdk.Int(929297),
                            },
                        },
                        FaultInjectionPolicy: &shared.GrpcRouteFaultInjectionPolicy{
                            Abort: &shared.GrpcRouteFaultInjectionPolicyAbort{
                                HTTPStatus: sdk.Int(277718),
                                Percentage: sdk.Int(318569),
                            },
                            Delay: &shared.GrpcRouteFaultInjectionPolicyDelay{
                                FixedDelay: sdk.String("consequatur"),
                                Percentage: sdk.Int(667411),
                            },
                        },
                        RetryPolicy: &shared.GrpcRouteRetryPolicy{
                            NumRetries: sdk.Int64(842342),
                            RetryConditions: []string{
                                "deserunt",
                            },
                        },
                        Timeout: sdk.String("distinctio"),
                    },
                    Matches: []shared.GrpcRouteRouteMatch{
                        shared.GrpcRouteRouteMatch{
                            Headers: []shared.GrpcRouteHeaderMatch{
                                shared.GrpcRouteHeaderMatch{
                                    Key: sdk.String("modi"),
                                    Type: shared.GrpcRouteHeaderMatchTypeEnumTypeUnspecified.ToPointer(),
                                    Value: sdk.String("aliquid"),
                                },
                                shared.GrpcRouteHeaderMatch{
                                    Key: sdk.String("cupiditate"),
                                    Type: shared.GrpcRouteHeaderMatchTypeEnumExact.ToPointer(),
                                    Value: sdk.String("perferendis"),
                                },
                            },
                            Method: &shared.GrpcRouteMethodMatch{
                                CaseSensitive: sdk.Bool(false),
                                GrpcMethod: sdk.String("magni"),
                                GrpcService: sdk.String("assumenda"),
                                Type: shared.GrpcRouteMethodMatchTypeEnumExact.ToPointer(),
                            },
                        },
                        shared.GrpcRouteRouteMatch{
                            Headers: []shared.GrpcRouteHeaderMatch{
                                shared.GrpcRouteHeaderMatch{
                                    Key: sdk.String("fugit"),
                                    Type: shared.GrpcRouteHeaderMatchTypeEnumRegularExpression.ToPointer(),
                                    Value: sdk.String("excepturi"),
                                },
                            },
                            Method: &shared.GrpcRouteMethodMatch{
                                CaseSensitive: sdk.Bool(false),
                                GrpcMethod: sdk.String("tempora"),
                                GrpcService: sdk.String("facilis"),
                                Type: shared.GrpcRouteMethodMatchTypeEnumRegularExpression.ToPointer(),
                            },
                        },
                        shared.GrpcRouteRouteMatch{
                            Headers: []shared.GrpcRouteHeaderMatch{
                                shared.GrpcRouteHeaderMatch{
                                    Key: sdk.String("delectus"),
                                    Type: shared.GrpcRouteHeaderMatchTypeEnumExact.ToPointer(),
                                    Value: sdk.String("non"),
                                },
                                shared.GrpcRouteHeaderMatch{
                                    Key: sdk.String("eligendi"),
                                    Type: shared.GrpcRouteHeaderMatchTypeEnumExact.ToPointer(),
                                    Value: sdk.String("aliquid"),
                                },
                            },
                            Method: &shared.GrpcRouteMethodMatch{
                                CaseSensitive: sdk.Bool(false),
                                GrpcMethod: sdk.String("provident"),
                                GrpcService: sdk.String("necessitatibus"),
                                Type: shared.GrpcRouteMethodMatchTypeEnumExact.ToPointer(),
                            },
                        },
                        shared.GrpcRouteRouteMatch{
                            Headers: []shared.GrpcRouteHeaderMatch{
                                shared.GrpcRouteHeaderMatch{
                                    Key: sdk.String("dolor"),
                                    Type: shared.GrpcRouteHeaderMatchTypeEnumRegularExpression.ToPointer(),
                                    Value: sdk.String("a"),
                                },
                                shared.GrpcRouteHeaderMatch{
                                    Key: sdk.String("dolorum"),
                                    Type: shared.GrpcRouteHeaderMatchTypeEnumExact.ToPointer(),
                                    Value: sdk.String("in"),
                                },
                                shared.GrpcRouteHeaderMatch{
                                    Key: sdk.String("illum"),
                                    Type: shared.GrpcRouteHeaderMatchTypeEnumRegularExpression.ToPointer(),
                                    Value: sdk.String("rerum"),
                                },
                            },
                            Method: &shared.GrpcRouteMethodMatch{
                                CaseSensitive: sdk.Bool(false),
                                GrpcMethod: sdk.String("dicta"),
                                GrpcService: sdk.String("magnam"),
                                Type: shared.GrpcRouteMethodMatchTypeEnumRegularExpression.ToPointer(),
                            },
                        },
                    },
                },
                shared.GrpcRouteRouteRule{
                    Action: &shared.GrpcRouteRouteAction{
                        Destinations: []shared.GrpcRouteDestination{
                            shared.GrpcRouteDestination{
                                ServiceName: sdk.String("ea"),
                                Weight: sdk.Int(396506),
                            },
                            shared.GrpcRouteDestination{
                                ServiceName: sdk.String("laborum"),
                                Weight: sdk.Int(881104),
                            },
                            shared.GrpcRouteDestination{
                                ServiceName: sdk.String("non"),
                                Weight: sdk.Int(581273),
                            },
                            shared.GrpcRouteDestination{
                                ServiceName: sdk.String("enim"),
                                Weight: sdk.Int(881736),
                            },
                        },
                        FaultInjectionPolicy: &shared.GrpcRouteFaultInjectionPolicy{
                            Abort: &shared.GrpcRouteFaultInjectionPolicyAbort{
                                HTTPStatus: sdk.Int(965417),
                                Percentage: sdk.Int(692532),
                            },
                            Delay: &shared.GrpcRouteFaultInjectionPolicyDelay{
                                FixedDelay: sdk.String("provident"),
                                Percentage: sdk.Int(725255),
                            },
                        },
                        RetryPolicy: &shared.GrpcRouteRetryPolicy{
                            NumRetries: sdk.Int64(659669),
                            RetryConditions: []string{
                                "deleniti",
                                "sapiente",
                                "amet",
                            },
                        },
                        Timeout: sdk.String("deserunt"),
                    },
                    Matches: []shared.GrpcRouteRouteMatch{
                        shared.GrpcRouteRouteMatch{
                            Headers: []shared.GrpcRouteHeaderMatch{
                                shared.GrpcRouteHeaderMatch{
                                    Key: sdk.String("natus"),
                                    Type: shared.GrpcRouteHeaderMatchTypeEnumExact.ToPointer(),
                                    Value: sdk.String("molestiae"),
                                },
                                shared.GrpcRouteHeaderMatch{
                                    Key: sdk.String("perferendis"),
                                    Type: shared.GrpcRouteHeaderMatchTypeEnumExact.ToPointer(),
                                    Value: sdk.String("magnam"),
                                },
                            },
                            Method: &shared.GrpcRouteMethodMatch{
                                CaseSensitive: sdk.Bool(false),
                                GrpcMethod: sdk.String("distinctio"),
                                GrpcService: sdk.String("id"),
                                Type: shared.GrpcRouteMethodMatchTypeEnumTypeUnspecified.ToPointer(),
                            },
                        },
                        shared.GrpcRouteRouteMatch{
                            Headers: []shared.GrpcRouteHeaderMatch{
                                shared.GrpcRouteHeaderMatch{
                                    Key: sdk.String("suscipit"),
                                    Type: shared.GrpcRouteHeaderMatchTypeEnumExact.ToPointer(),
                                    Value: sdk.String("nobis"),
                                },
                                shared.GrpcRouteHeaderMatch{
                                    Key: sdk.String("eum"),
                                    Type: shared.GrpcRouteHeaderMatchTypeEnumRegularExpression.ToPointer(),
                                    Value: sdk.String("aspernatur"),
                                },
                            },
                            Method: &shared.GrpcRouteMethodMatch{
                                CaseSensitive: sdk.Bool(false),
                                GrpcMethod: sdk.String("architecto"),
                                GrpcService: sdk.String("magnam"),
                                Type: shared.GrpcRouteMethodMatchTypeEnumTypeUnspecified.ToPointer(),
                            },
                        },
                    },
                },
                shared.GrpcRouteRouteRule{
                    Action: &shared.GrpcRouteRouteAction{
                        Destinations: []shared.GrpcRouteDestination{
                            shared.GrpcRouteDestination{
                                ServiceName: sdk.String("ullam"),
                                Weight: sdk.Int(590873),
                            },
                            shared.GrpcRouteDestination{
                                ServiceName: sdk.String("quos"),
                                Weight: sdk.Int(574325),
                            },
                            shared.GrpcRouteDestination{
                                ServiceName: sdk.String("accusantium"),
                                Weight: sdk.Int(653201),
                            },
                        },
                        FaultInjectionPolicy: &shared.GrpcRouteFaultInjectionPolicy{
                            Abort: &shared.GrpcRouteFaultInjectionPolicyAbort{
                                HTTPStatus: sdk.Int(968962),
                                Percentage: sdk.Int(652103),
                            },
                            Delay: &shared.GrpcRouteFaultInjectionPolicyDelay{
                                FixedDelay: sdk.String("ad"),
                                Percentage: sdk.Int(431418),
                            },
                        },
                        RetryPolicy: &shared.GrpcRouteRetryPolicy{
                            NumRetries: sdk.Int64(221262),
                            RetryConditions: []string{
                                "odit",
                                "nemo",
                                "quasi",
                                "iure",
                            },
                        },
                        Timeout: sdk.String("doloribus"),
                    },
                    Matches: []shared.GrpcRouteRouteMatch{
                        shared.GrpcRouteRouteMatch{
                            Headers: []shared.GrpcRouteHeaderMatch{
                                shared.GrpcRouteHeaderMatch{
                                    Key: sdk.String("maxime"),
                                    Type: shared.GrpcRouteHeaderMatchTypeEnumExact.ToPointer(),
                                    Value: sdk.String("facilis"),
                                },
                                shared.GrpcRouteHeaderMatch{
                                    Key: sdk.String("in"),
                                    Type: shared.GrpcRouteHeaderMatchTypeEnumTypeUnspecified.ToPointer(),
                                    Value: sdk.String("architecto"),
                                },
                            },
                            Method: &shared.GrpcRouteMethodMatch{
                                CaseSensitive: sdk.Bool(false),
                                GrpcMethod: sdk.String("repudiandae"),
                                GrpcService: sdk.String("ullam"),
                                Type: shared.GrpcRouteMethodMatchTypeEnumRegularExpression.ToPointer(),
                            },
                        },
                        shared.GrpcRouteRouteMatch{
                            Headers: []shared.GrpcRouteHeaderMatch{
                                shared.GrpcRouteHeaderMatch{
                                    Key: sdk.String("repellat"),
                                    Type: shared.GrpcRouteHeaderMatchTypeEnumRegularExpression.ToPointer(),
                                    Value: sdk.String("sed"),
                                },
                                shared.GrpcRouteHeaderMatch{
                                    Key: sdk.String("saepe"),
                                    Type: shared.GrpcRouteHeaderMatchTypeEnumRegularExpression.ToPointer(),
                                    Value: sdk.String("accusantium"),
                                },
                            },
                            Method: &shared.GrpcRouteMethodMatch{
                                CaseSensitive: sdk.Bool(false),
                                GrpcMethod: sdk.String("consequuntur"),
                                GrpcService: sdk.String("praesentium"),
                                Type: shared.GrpcRouteMethodMatchTypeEnumExact.ToPointer(),
                            },
                        },
                        shared.GrpcRouteRouteMatch{
                            Headers: []shared.GrpcRouteHeaderMatch{
                                shared.GrpcRouteHeaderMatch{
                                    Key: sdk.String("sunt"),
                                    Type: shared.GrpcRouteHeaderMatchTypeEnumRegularExpression.ToPointer(),
                                    Value: sdk.String("illum"),
                                },
                            },
                            Method: &shared.GrpcRouteMethodMatch{
                                CaseSensitive: sdk.Bool(false),
                                GrpcMethod: sdk.String("pariatur"),
                                GrpcService: sdk.String("maxime"),
                                Type: shared.GrpcRouteMethodMatchTypeEnumExact.ToPointer(),
                            },
                        },
                        shared.GrpcRouteRouteMatch{
                            Headers: []shared.GrpcRouteHeaderMatch{
                                shared.GrpcRouteHeaderMatch{
                                    Key: sdk.String("odit"),
                                    Type: shared.GrpcRouteHeaderMatchTypeEnumExact.ToPointer(),
                                    Value: sdk.String("accusantium"),
                                },
                                shared.GrpcRouteHeaderMatch{
                                    Key: sdk.String("ab"),
                                    Type: shared.GrpcRouteHeaderMatchTypeEnumRegularExpression.ToPointer(),
                                    Value: sdk.String("quidem"),
                                },
                                shared.GrpcRouteHeaderMatch{
                                    Key: sdk.String("ipsam"),
                                    Type: shared.GrpcRouteHeaderMatchTypeEnumExact.ToPointer(),
                                    Value: sdk.String("autem"),
                                },
                            },
                            Method: &shared.GrpcRouteMethodMatch{
                                CaseSensitive: sdk.Bool(false),
                                GrpcMethod: sdk.String("nam"),
                                GrpcService: sdk.String("eaque"),
                                Type: shared.GrpcRouteMethodMatchTypeEnumRegularExpression.ToPointer(),
                            },
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("fugiat"),
        GrpcRouteID: sdk.String("amet"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("cumque"),
        Parent: "corporis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("nobis"),
    }, operations.NetworkservicesProjectsLocationsGrpcRoutesCreateSecurity{
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

## NetworkservicesProjectsLocationsGrpcRoutesList

Lists GrpcRoutes in a given project and location.

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
    res, err := s.Projects.NetworkservicesProjectsLocationsGrpcRoutesList(ctx, operations.NetworkservicesProjectsLocationsGrpcRoutesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dignissimos"),
        Fields: sdk.String("eaque"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("nesciunt"),
        PageSize: sdk.Int64(179490),
        PageToken: sdk.String("perferendis"),
        Parent: "dolores",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minus"),
        UploadType: sdk.String("quam"),
        UploadProtocol: sdk.String("dolor"),
    }, operations.NetworkservicesProjectsLocationsGrpcRoutesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGrpcRoutesResponse != nil {
        // handle response
    }
}
```

## NetworkservicesProjectsLocationsHTTPRoutesCreate

Creates a new HttpRoute in a given project and location.

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
    res, err := s.Projects.NetworkservicesProjectsLocationsHTTPRoutesCreate(ctx, operations.NetworkservicesProjectsLocationsHTTPRoutesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        HTTPRouteInput: &shared.HTTPRouteInput{
            Description: sdk.String("nostrum"),
            Gateways: []string{
                "recusandae",
                "omnis",
                "facilis",
                "perspiciatis",
            },
            Hostnames: []string{
                "porro",
            },
            Labels: map[string]string{
                "blanditiis": "error",
            },
            Meshes: []string{
                "occaecati",
            },
            Name: sdk.String("Travis Zemlak"),
            Rules: []shared.HTTPRouteRouteRule{
                shared.HTTPRouteRouteRule{
                    Action: &shared.HTTPRouteRouteAction{
                        CorsPolicy: &shared.HTTPRouteCorsPolicy{
                            AllowCredentials: sdk.Bool(false),
                            AllowHeaders: []string{
                                "deleniti",
                                "pariatur",
                                "provident",
                            },
                            AllowMethods: []string{
                                "libero",
                                "delectus",
                                "quaerat",
                                "quos",
                            },
                            AllowOriginRegexes: []string{
                                "dolorem",
                                "dolorem",
                            },
                            AllowOrigins: []string{
                                "qui",
                            },
                            Disabled: sdk.Bool(false),
                            ExposeHeaders: []string{
                                "hic",
                            },
                            MaxAge: sdk.String("excepturi"),
                        },
                        Destinations: []shared.HTTPRouteDestination{
                            shared.HTTPRouteDestination{
                                ServiceName: sdk.String("voluptate"),
                                Weight: sdk.Int(490459),
                            },
                            shared.HTTPRouteDestination{
                                ServiceName: sdk.String("reiciendis"),
                                Weight: sdk.Int(227414),
                            },
                            shared.HTTPRouteDestination{
                                ServiceName: sdk.String("dolorum"),
                                Weight: sdk.Int(254356),
                            },
                        },
                        FaultInjectionPolicy: &shared.HTTPRouteFaultInjectionPolicy{
                            Abort: &shared.HTTPRouteFaultInjectionPolicyAbort{
                                HTTPStatus: sdk.Int(85295),
                                Percentage: sdk.Int(58029),
                            },
                            Delay: &shared.HTTPRouteFaultInjectionPolicyDelay{
                                FixedDelay: sdk.String("ipsa"),
                                Percentage: sdk.Int(434417),
                            },
                        },
                        Redirect: &shared.HTTPRouteRedirect{
                            HostRedirect: sdk.String("odio"),
                            HTTPSRedirect: sdk.Bool(false),
                            PathRedirect: sdk.String("quaerat"),
                            PortRedirect: sdk.Int(881005),
                            PrefixRewrite: sdk.String("quidem"),
                            ResponseCode: shared.HTTPRouteRedirectResponseCodeEnumPermanentRedirect.ToPointer(),
                            StripQuery: sdk.Bool(false),
                        },
                        RequestHeaderModifier: &shared.HTTPRouteHeaderModifier{
                            Add: map[string]string{
                                "natus": "eos",
                                "atque": "sit",
                            },
                            Remove: []string{
                                "ab",
                                "soluta",
                                "dolorum",
                                "iusto",
                            },
                            Set: map[string]string{
                                "dolorum": "deleniti",
                                "omnis": "necessitatibus",
                            },
                        },
                        RequestMirrorPolicy: &shared.HTTPRouteRequestMirrorPolicy{
                            Destination: &shared.HTTPRouteDestination{
                                ServiceName: sdk.String("distinctio"),
                                Weight: sdk.Int(990339),
                            },
                        },
                        ResponseHeaderModifier: &shared.HTTPRouteHeaderModifier{
                            Add: map[string]string{
                                "ipsum": "voluptate",
                                "id": "saepe",
                            },
                            Remove: []string{
                                "aspernatur",
                                "perferendis",
                            },
                            Set: map[string]string{
                                "optio": "accusamus",
                            },
                        },
                        RetryPolicy: &shared.HTTPRouteRetryPolicy{
                            NumRetries: sdk.Int(320017),
                            PerTryTimeout: sdk.String("saepe"),
                            RetryConditions: []string{
                                "deserunt",
                                "provident",
                            },
                        },
                        Timeout: sdk.String("minima"),
                        URLRewrite: &shared.HTTPRouteURLRewrite{
                            HostRewrite: sdk.String("repellendus"),
                            PathPrefixRewrite: sdk.String("totam"),
                        },
                    },
                    Matches: []shared.HTTPRouteRouteMatch{
                        shared.HTTPRouteRouteMatch{
                            FullPathMatch: sdk.String("alias"),
                            Headers: []shared.HTTPRouteHeaderMatch{
                                shared.HTTPRouteHeaderMatch{
                                    ExactMatch: sdk.String("quaerat"),
                                    Header: sdk.String("tempora"),
                                    InvertMatch: sdk.Bool(false),
                                    PrefixMatch: sdk.String("vel"),
                                    PresentMatch: sdk.Bool(false),
                                    RangeMatch: &shared.HTTPRouteHeaderMatchIntegerRange{
                                        End: sdk.Int(798047),
                                        Start: sdk.Int(885338),
                                    },
                                    RegexMatch: sdk.String("qui"),
                                    SuffixMatch: sdk.String("dolorum"),
                                },
                                shared.HTTPRouteHeaderMatch{
                                    ExactMatch: sdk.String("a"),
                                    Header: sdk.String("esse"),
                                    InvertMatch: sdk.Bool(false),
                                    PrefixMatch: sdk.String("harum"),
                                    PresentMatch: sdk.Bool(false),
                                    RangeMatch: &shared.HTTPRouteHeaderMatchIntegerRange{
                                        End: sdk.Int(483409),
                                        Start: sdk.Int(215507),
                                    },
                                    RegexMatch: sdk.String("quisquam"),
                                    SuffixMatch: sdk.String("tenetur"),
                                },
                                shared.HTTPRouteHeaderMatch{
                                    ExactMatch: sdk.String("amet"),
                                    Header: sdk.String("tempore"),
                                    InvertMatch: sdk.Bool(false),
                                    PrefixMatch: sdk.String("accusamus"),
                                    PresentMatch: sdk.Bool(false),
                                    RangeMatch: &shared.HTTPRouteHeaderMatchIntegerRange{
                                        End: sdk.Int(253941),
                                        Start: sdk.Int(313692),
                                    },
                                    RegexMatch: sdk.String("dolorem"),
                                    SuffixMatch: sdk.String("sapiente"),
                                },
                                shared.HTTPRouteHeaderMatch{
                                    ExactMatch: sdk.String("totam"),
                                    Header: sdk.String("nihil"),
                                    InvertMatch: sdk.Bool(false),
                                    PrefixMatch: sdk.String("sit"),
                                    PresentMatch: sdk.Bool(false),
                                    RangeMatch: &shared.HTTPRouteHeaderMatchIntegerRange{
                                        End: sdk.Int(711584),
                                        Start: sdk.Int(207470),
                                    },
                                    RegexMatch: sdk.String("sed"),
                                    SuffixMatch: sdk.String("vel"),
                                },
                            },
                            IgnoreCase: sdk.Bool(false),
                            PrefixMatch: sdk.String("libero"),
                            QueryParameters: []shared.HTTPRouteQueryParameterMatch{
                                shared.HTTPRouteQueryParameterMatch{
                                    ExactMatch: sdk.String("deserunt"),
                                    PresentMatch: sdk.Bool(false),
                                    QueryParameter: sdk.String("quam"),
                                    RegexMatch: sdk.String("ipsum"),
                                },
                                shared.HTTPRouteQueryParameterMatch{
                                    ExactMatch: sdk.String("incidunt"),
                                    PresentMatch: sdk.Bool(false),
                                    QueryParameter: sdk.String("qui"),
                                    RegexMatch: sdk.String("cupiditate"),
                                },
                            },
                            RegexMatch: sdk.String("maxime"),
                        },
                        shared.HTTPRouteRouteMatch{
                            FullPathMatch: sdk.String("pariatur"),
                            Headers: []shared.HTTPRouteHeaderMatch{
                                shared.HTTPRouteHeaderMatch{
                                    ExactMatch: sdk.String("dicta"),
                                    Header: sdk.String("laborum"),
                                    InvertMatch: sdk.Bool(false),
                                    PrefixMatch: sdk.String("totam"),
                                    PresentMatch: sdk.Bool(false),
                                    RangeMatch: &shared.HTTPRouteHeaderMatchIntegerRange{
                                        End: sdk.Int(276894),
                                        Start: sdk.Int(132068),
                                    },
                                    RegexMatch: sdk.String("dolores"),
                                    SuffixMatch: sdk.String("distinctio"),
                                },
                                shared.HTTPRouteHeaderMatch{
                                    ExactMatch: sdk.String("facilis"),
                                    Header: sdk.String("aliquid"),
                                    InvertMatch: sdk.Bool(false),
                                    PrefixMatch: sdk.String("quam"),
                                    PresentMatch: sdk.Bool(false),
                                    RangeMatch: &shared.HTTPRouteHeaderMatchIntegerRange{
                                        End: sdk.Int(565421),
                                        Start: sdk.Int(840429),
                                    },
                                    RegexMatch: sdk.String("qui"),
                                    SuffixMatch: sdk.String("neque"),
                                },
                                shared.HTTPRouteHeaderMatch{
                                    ExactMatch: sdk.String("fugit"),
                                    Header: sdk.String("magni"),
                                    InvertMatch: sdk.Bool(false),
                                    PrefixMatch: sdk.String("odio"),
                                    PresentMatch: sdk.Bool(false),
                                    RangeMatch: &shared.HTTPRouteHeaderMatchIntegerRange{
                                        End: sdk.Int(124833),
                                        Start: sdk.Int(355613),
                                    },
                                    RegexMatch: sdk.String("nam"),
                                    SuffixMatch: sdk.String("hic"),
                                },
                            },
                            IgnoreCase: sdk.Bool(false),
                            PrefixMatch: sdk.String("voluptatem"),
                            QueryParameters: []shared.HTTPRouteQueryParameterMatch{
                                shared.HTTPRouteQueryParameterMatch{
                                    ExactMatch: sdk.String("soluta"),
                                    PresentMatch: sdk.Bool(false),
                                    QueryParameter: sdk.String("nobis"),
                                    RegexMatch: sdk.String("et"),
                                },
                                shared.HTTPRouteQueryParameterMatch{
                                    ExactMatch: sdk.String("saepe"),
                                    PresentMatch: sdk.Bool(false),
                                    QueryParameter: sdk.String("ipsum"),
                                    RegexMatch: sdk.String("veritatis"),
                                },
                                shared.HTTPRouteQueryParameterMatch{
                                    ExactMatch: sdk.String("nobis"),
                                    PresentMatch: sdk.Bool(false),
                                    QueryParameter: sdk.String("quos"),
                                    RegexMatch: sdk.String("tempore"),
                                },
                                shared.HTTPRouteQueryParameterMatch{
                                    ExactMatch: sdk.String("cupiditate"),
                                    PresentMatch: sdk.Bool(false),
                                    QueryParameter: sdk.String("aperiam"),
                                    RegexMatch: sdk.String("delectus"),
                                },
                            },
                            RegexMatch: sdk.String("dolorem"),
                        },
                        shared.HTTPRouteRouteMatch{
                            FullPathMatch: sdk.String("dolore"),
                            Headers: []shared.HTTPRouteHeaderMatch{
                                shared.HTTPRouteHeaderMatch{
                                    ExactMatch: sdk.String("adipisci"),
                                    Header: sdk.String("dolorum"),
                                    InvertMatch: sdk.Bool(false),
                                    PrefixMatch: sdk.String("architecto"),
                                    PresentMatch: sdk.Bool(false),
                                    RangeMatch: &shared.HTTPRouteHeaderMatchIntegerRange{
                                        End: sdk.Int(63038),
                                        Start: sdk.Int(16429),
                                    },
                                    RegexMatch: sdk.String("quas"),
                                    SuffixMatch: sdk.String("itaque"),
                                },
                                shared.HTTPRouteHeaderMatch{
                                    ExactMatch: sdk.String("consequatur"),
                                    Header: sdk.String("est"),
                                    InvertMatch: sdk.Bool(false),
                                    PrefixMatch: sdk.String("repellendus"),
                                    PresentMatch: sdk.Bool(false),
                                    RangeMatch: &shared.HTTPRouteHeaderMatchIntegerRange{
                                        End: sdk.Int(785153),
                                        Start: sdk.Int(984330),
                                    },
                                    RegexMatch: sdk.String("ut"),
                                    SuffixMatch: sdk.String("facilis"),
                                },
                            },
                            IgnoreCase: sdk.Bool(false),
                            PrefixMatch: sdk.String("cupiditate"),
                            QueryParameters: []shared.HTTPRouteQueryParameterMatch{
                                shared.HTTPRouteQueryParameterMatch{
                                    ExactMatch: sdk.String("quae"),
                                    PresentMatch: sdk.Bool(false),
                                    QueryParameter: sdk.String("laudantium"),
                                    RegexMatch: sdk.String("odio"),
                                },
                            },
                            RegexMatch: sdk.String("occaecati"),
                        },
                    },
                },
                shared.HTTPRouteRouteRule{
                    Action: &shared.HTTPRouteRouteAction{
                        CorsPolicy: &shared.HTTPRouteCorsPolicy{
                            AllowCredentials: sdk.Bool(false),
                            AllowHeaders: []string{
                                "quisquam",
                                "vero",
                                "omnis",
                                "quis",
                            },
                            AllowMethods: []string{
                                "delectus",
                            },
                            AllowOriginRegexes: []string{
                                "consectetur",
                                "vero",
                            },
                            AllowOrigins: []string{
                                "dignissimos",
                                "hic",
                                "distinctio",
                                "quod",
                            },
                            Disabled: sdk.Bool(false),
                            ExposeHeaders: []string{
                                "similique",
                                "facilis",
                            },
                            MaxAge: sdk.String("vero"),
                        },
                        Destinations: []shared.HTTPRouteDestination{
                            shared.HTTPRouteDestination{
                                ServiceName: sdk.String("dolore"),
                                Weight: sdk.Int(844550),
                            },
                            shared.HTTPRouteDestination{
                                ServiceName: sdk.String("illum"),
                                Weight: sdk.Int(194342),
                            },
                        },
                        FaultInjectionPolicy: &shared.HTTPRouteFaultInjectionPolicy{
                            Abort: &shared.HTTPRouteFaultInjectionPolicyAbort{
                                HTTPStatus: sdk.Int(617877),
                                Percentage: sdk.Int(773326),
                            },
                            Delay: &shared.HTTPRouteFaultInjectionPolicyDelay{
                                FixedDelay: sdk.String("aut"),
                                Percentage: sdk.Int(974259),
                            },
                        },
                        Redirect: &shared.HTTPRouteRedirect{
                            HostRedirect: sdk.String("exercitationem"),
                            HTTPSRedirect: sdk.Bool(false),
                            PathRedirect: sdk.String("nulla"),
                            PortRedirect: sdk.Int(148141),
                            PrefixRewrite: sdk.String("porro"),
                            ResponseCode: shared.HTTPRouteRedirectResponseCodeEnumPermanentRedirect.ToPointer(),
                            StripQuery: sdk.Bool(false),
                        },
                        RequestHeaderModifier: &shared.HTTPRouteHeaderModifier{
                            Add: map[string]string{
                                "iusto": "eligendi",
                                "ducimus": "alias",
                                "officia": "tempora",
                                "ipsam": "ea",
                            },
                            Remove: []string{
                                "vel",
                            },
                            Set: map[string]string{
                                "magnam": "ratione",
                                "ex": "laudantium",
                                "dicta": "dolor",
                                "maiores": "quasi",
                            },
                        },
                        RequestMirrorPolicy: &shared.HTTPRouteRequestMirrorPolicy{
                            Destination: &shared.HTTPRouteDestination{
                                ServiceName: sdk.String("ex"),
                                Weight: sdk.Int(862192),
                            },
                        },
                        ResponseHeaderModifier: &shared.HTTPRouteHeaderModifier{
                            Add: map[string]string{
                                "voluptatibus": "nostrum",
                                "sapiente": "quisquam",
                                "saepe": "ea",
                            },
                            Remove: []string{
                                "corporis",
                                "veniam",
                                "aliquid",
                                "inventore",
                            },
                            Set: map[string]string{
                                "ea": "quo",
                                "consectetur": "recusandae",
                            },
                        },
                        RetryPolicy: &shared.HTTPRouteRetryPolicy{
                            NumRetries: sdk.Int(132487),
                            PerTryTimeout: sdk.String("minima"),
                            RetryConditions: []string{
                                "a",
                            },
                        },
                        Timeout: sdk.String("libero"),
                        URLRewrite: &shared.HTTPRouteURLRewrite{
                            HostRewrite: sdk.String("aut"),
                            PathPrefixRewrite: sdk.String("aut"),
                        },
                    },
                    Matches: []shared.HTTPRouteRouteMatch{
                        shared.HTTPRouteRouteMatch{
                            FullPathMatch: sdk.String("impedit"),
                            Headers: []shared.HTTPRouteHeaderMatch{
                                shared.HTTPRouteHeaderMatch{
                                    ExactMatch: sdk.String("fugit"),
                                    Header: sdk.String("accusamus"),
                                    InvertMatch: sdk.Bool(false),
                                    PrefixMatch: sdk.String("inventore"),
                                    PresentMatch: sdk.Bool(false),
                                    RangeMatch: &shared.HTTPRouteHeaderMatchIntegerRange{
                                        End: sdk.Int(250622),
                                        Start: sdk.Int(89603),
                                    },
                                    RegexMatch: sdk.String("dolorum"),
                                    SuffixMatch: sdk.String("laborum"),
                                },
                                shared.HTTPRouteHeaderMatch{
                                    ExactMatch: sdk.String("placeat"),
                                    Header: sdk.String("velit"),
                                    InvertMatch: sdk.Bool(false),
                                    PrefixMatch: sdk.String("eum"),
                                    PresentMatch: sdk.Bool(false),
                                    RangeMatch: &shared.HTTPRouteHeaderMatchIntegerRange{
                                        End: sdk.Int(420539),
                                        Start: sdk.Int(752135),
                                    },
                                    RegexMatch: sdk.String("quas"),
                                    SuffixMatch: sdk.String("assumenda"),
                                },
                            },
                            IgnoreCase: sdk.Bool(false),
                            PrefixMatch: sdk.String("nulla"),
                            QueryParameters: []shared.HTTPRouteQueryParameterMatch{
                                shared.HTTPRouteQueryParameterMatch{
                                    ExactMatch: sdk.String("libero"),
                                    PresentMatch: sdk.Bool(false),
                                    QueryParameter: sdk.String("quasi"),
                                    RegexMatch: sdk.String("tempora"),
                                },
                                shared.HTTPRouteQueryParameterMatch{
                                    ExactMatch: sdk.String("numquam"),
                                    PresentMatch: sdk.Bool(false),
                                    QueryParameter: sdk.String("explicabo"),
                                    RegexMatch: sdk.String("provident"),
                                },
                            },
                            RegexMatch: sdk.String("ipsa"),
                        },
                        shared.HTTPRouteRouteMatch{
                            FullPathMatch: sdk.String("molestiae"),
                            Headers: []shared.HTTPRouteHeaderMatch{
                                shared.HTTPRouteHeaderMatch{
                                    ExactMatch: sdk.String("odio"),
                                    Header: sdk.String("eius"),
                                    InvertMatch: sdk.Bool(false),
                                    PrefixMatch: sdk.String("esse"),
                                    PresentMatch: sdk.Bool(false),
                                    RangeMatch: &shared.HTTPRouteHeaderMatchIntegerRange{
                                        End: sdk.Int(456141),
                                        Start: sdk.Int(524593),
                                    },
                                    RegexMatch: sdk.String("fuga"),
                                    SuffixMatch: sdk.String("reprehenderit"),
                                },
                                shared.HTTPRouteHeaderMatch{
                                    ExactMatch: sdk.String("quidem"),
                                    Header: sdk.String("fugiat"),
                                    InvertMatch: sdk.Bool(false),
                                    PrefixMatch: sdk.String("ut"),
                                    PresentMatch: sdk.Bool(false),
                                    RangeMatch: &shared.HTTPRouteHeaderMatchIntegerRange{
                                        End: sdk.Int(433439),
                                        Start: sdk.Int(379927),
                                    },
                                    RegexMatch: sdk.String("assumenda"),
                                    SuffixMatch: sdk.String("eos"),
                                },
                            },
                            IgnoreCase: sdk.Bool(false),
                            PrefixMatch: sdk.String("praesentium"),
                            QueryParameters: []shared.HTTPRouteQueryParameterMatch{
                                shared.HTTPRouteQueryParameterMatch{
                                    ExactMatch: sdk.String("veritatis"),
                                    PresentMatch: sdk.Bool(false),
                                    QueryParameter: sdk.String("ipsa"),
                                    RegexMatch: sdk.String("id"),
                                },
                                shared.HTTPRouteQueryParameterMatch{
                                    ExactMatch: sdk.String("quidem"),
                                    PresentMatch: sdk.Bool(false),
                                    QueryParameter: sdk.String("neque"),
                                    RegexMatch: sdk.String("quo"),
                                },
                                shared.HTTPRouteQueryParameterMatch{
                                    ExactMatch: sdk.String("illum"),
                                    PresentMatch: sdk.Bool(false),
                                    QueryParameter: sdk.String("quo"),
                                    RegexMatch: sdk.String("fuga"),
                                },
                                shared.HTTPRouteQueryParameterMatch{
                                    ExactMatch: sdk.String("eius"),
                                    PresentMatch: sdk.Bool(false),
                                    QueryParameter: sdk.String("eos"),
                                    RegexMatch: sdk.String("voluptas"),
                                },
                            },
                            RegexMatch: sdk.String("ab"),
                        },
                        shared.HTTPRouteRouteMatch{
                            FullPathMatch: sdk.String("cupiditate"),
                            Headers: []shared.HTTPRouteHeaderMatch{
                                shared.HTTPRouteHeaderMatch{
                                    ExactMatch: sdk.String("tempora"),
                                    Header: sdk.String("debitis"),
                                    InvertMatch: sdk.Bool(false),
                                    PrefixMatch: sdk.String("ipsam"),
                                    PresentMatch: sdk.Bool(false),
                                    RangeMatch: &shared.HTTPRouteHeaderMatchIntegerRange{
                                        End: sdk.Int(133465),
                                        Start: sdk.Int(197054),
                                    },
                                    RegexMatch: sdk.String("quo"),
                                    SuffixMatch: sdk.String("esse"),
                                },
                            },
                            IgnoreCase: sdk.Bool(false),
                            PrefixMatch: sdk.String("recusandae"),
                            QueryParameters: []shared.HTTPRouteQueryParameterMatch{
                                shared.HTTPRouteQueryParameterMatch{
                                    ExactMatch: sdk.String("distinctio"),
                                    PresentMatch: sdk.Bool(false),
                                    QueryParameter: sdk.String("quod"),
                                    RegexMatch: sdk.String("dignissimos"),
                                },
                            },
                            RegexMatch: sdk.String("inventore"),
                        },
                    },
                },
                shared.HTTPRouteRouteRule{
                    Action: &shared.HTTPRouteRouteAction{
                        CorsPolicy: &shared.HTTPRouteCorsPolicy{
                            AllowCredentials: sdk.Bool(false),
                            AllowHeaders: []string{
                                "totam",
                                "accusamus",
                            },
                            AllowMethods: []string{
                                "odio",
                                "occaecati",
                            },
                            AllowOriginRegexes: []string{
                                "sapiente",
                                "dolores",
                            },
                            AllowOrigins: []string{
                                "molestiae",
                                "accusantium",
                                "porro",
                            },
                            Disabled: sdk.Bool(false),
                            ExposeHeaders: []string{
                                "quas",
                                "praesentium",
                            },
                            MaxAge: sdk.String("consequuntur"),
                        },
                        Destinations: []shared.HTTPRouteDestination{
                            shared.HTTPRouteDestination{
                                ServiceName: sdk.String("fugit"),
                                Weight: sdk.Int(681393),
                            },
                            shared.HTTPRouteDestination{
                                ServiceName: sdk.String("mollitia"),
                                Weight: sdk.Int(277596),
                            },
                            shared.HTTPRouteDestination{
                                ServiceName: sdk.String("atque"),
                                Weight: sdk.Int(128860),
                            },
                        },
                        FaultInjectionPolicy: &shared.HTTPRouteFaultInjectionPolicy{
                            Abort: &shared.HTTPRouteFaultInjectionPolicyAbort{
                                HTTPStatus: sdk.Int(325685),
                                Percentage: sdk.Int(392676),
                            },
                            Delay: &shared.HTTPRouteFaultInjectionPolicyDelay{
                                FixedDelay: sdk.String("fugit"),
                                Percentage: sdk.Int(956406),
                            },
                        },
                        Redirect: &shared.HTTPRouteRedirect{
                            HostRedirect: sdk.String("consequuntur"),
                            HTTPSRedirect: sdk.Bool(false),
                            PathRedirect: sdk.String("ratione"),
                            PortRedirect: sdk.Int(129412),
                            PrefixRewrite: sdk.String("saepe"),
                            ResponseCode: shared.HTTPRouteRedirectResponseCodeEnumSeeOther.ToPointer(),
                            StripQuery: sdk.Bool(false),
                        },
                        RequestHeaderModifier: &shared.HTTPRouteHeaderModifier{
                            Add: map[string]string{
                                "et": "esse",
                                "eveniet": "accusamus",
                                "veritatis": "esse",
                            },
                            Remove: []string{
                                "nam",
                                "vero",
                                "aliquid",
                                "quasi",
                            },
                            Set: map[string]string{
                                "vel": "harum",
                                "molestiae": "rerum",
                                "occaecati": "minima",
                                "distinctio": "eligendi",
                            },
                        },
                        RequestMirrorPolicy: &shared.HTTPRouteRequestMirrorPolicy{
                            Destination: &shared.HTTPRouteDestination{
                                ServiceName: sdk.String("sit"),
                                Weight: sdk.Int(636061),
                            },
                        },
                        ResponseHeaderModifier: &shared.HTTPRouteHeaderModifier{
                            Add: map[string]string{
                                "adipisci": "cumque",
                                "consequuntur": "consequatur",
                                "minus": "quaerat",
                            },
                            Remove: []string{
                                "consectetur",
                                "esse",
                                "blanditiis",
                                "provident",
                            },
                            Set: map[string]string{
                                "nulla": "quas",
                                "esse": "quasi",
                                "a": "error",
                                "sint": "pariatur",
                            },
                        },
                        RetryPolicy: &shared.HTTPRouteRetryPolicy{
                            NumRetries: sdk.Int(820767),
                            PerTryTimeout: sdk.String("quia"),
                            RetryConditions: []string{
                                "asperiores",
                                "facere",
                                "veritatis",
                                "consequuntur",
                            },
                        },
                        Timeout: sdk.String("quasi"),
                        URLRewrite: &shared.HTTPRouteURLRewrite{
                            HostRewrite: sdk.String("similique"),
                            PathPrefixRewrite: sdk.String("culpa"),
                        },
                    },
                    Matches: []shared.HTTPRouteRouteMatch{
                        shared.HTTPRouteRouteMatch{
                            FullPathMatch: sdk.String("tenetur"),
                            Headers: []shared.HTTPRouteHeaderMatch{
                                shared.HTTPRouteHeaderMatch{
                                    ExactMatch: sdk.String("earum"),
                                    Header: sdk.String("vel"),
                                    InvertMatch: sdk.Bool(false),
                                    PrefixMatch: sdk.String("in"),
                                    PresentMatch: sdk.Bool(false),
                                    RangeMatch: &shared.HTTPRouteHeaderMatchIntegerRange{
                                        End: sdk.Int(258684),
                                        Start: sdk.Int(727697),
                                    },
                                    RegexMatch: sdk.String("illum"),
                                    SuffixMatch: sdk.String("soluta"),
                                },
                            },
                            IgnoreCase: sdk.Bool(false),
                            PrefixMatch: sdk.String("accusantium"),
                            QueryParameters: []shared.HTTPRouteQueryParameterMatch{
                                shared.HTTPRouteQueryParameterMatch{
                                    ExactMatch: sdk.String("sapiente"),
                                    PresentMatch: sdk.Bool(false),
                                    QueryParameter: sdk.String("dicta"),
                                    RegexMatch: sdk.String("ullam"),
                                },
                                shared.HTTPRouteQueryParameterMatch{
                                    ExactMatch: sdk.String("reprehenderit"),
                                    PresentMatch: sdk.Bool(false),
                                    QueryParameter: sdk.String("ullam"),
                                    RegexMatch: sdk.String("nisi"),
                                },
                            },
                            RegexMatch: sdk.String("aut"),
                        },
                        shared.HTTPRouteRouteMatch{
                            FullPathMatch: sdk.String("voluptatum"),
                            Headers: []shared.HTTPRouteHeaderMatch{
                                shared.HTTPRouteHeaderMatch{
                                    ExactMatch: sdk.String("quibusdam"),
                                    Header: sdk.String("ex"),
                                    InvertMatch: sdk.Bool(false),
                                    PrefixMatch: sdk.String("deleniti"),
                                    PresentMatch: sdk.Bool(false),
                                    RangeMatch: &shared.HTTPRouteHeaderMatchIntegerRange{
                                        End: sdk.Int(929292),
                                        Start: sdk.Int(680270),
                                    },
                                    RegexMatch: sdk.String("architecto"),
                                    SuffixMatch: sdk.String("omnis"),
                                },
                            },
                            IgnoreCase: sdk.Bool(false),
                            PrefixMatch: sdk.String("tenetur"),
                            QueryParameters: []shared.HTTPRouteQueryParameterMatch{
                                shared.HTTPRouteQueryParameterMatch{
                                    ExactMatch: sdk.String("at"),
                                    PresentMatch: sdk.Bool(false),
                                    QueryParameter: sdk.String("et"),
                                    RegexMatch: sdk.String("voluptate"),
                                },
                            },
                            RegexMatch: sdk.String("ipsa"),
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("consectetur"),
        Fields: sdk.String("adipisci"),
        HTTPRouteID: sdk.String("iste"),
        Key: sdk.String("temporibus"),
        OauthToken: sdk.String("accusantium"),
        Parent: "rem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aut"),
        UploadType: sdk.String("laudantium"),
        UploadProtocol: sdk.String("eum"),
    }, operations.NetworkservicesProjectsLocationsHTTPRoutesCreateSecurity{
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

## NetworkservicesProjectsLocationsHTTPRoutesList

Lists HttpRoute in a given project and location.

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
    res, err := s.Projects.NetworkservicesProjectsLocationsHTTPRoutesList(ctx, operations.NetworkservicesProjectsLocationsHTTPRoutesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("non"),
        Fields: sdk.String("voluptatem"),
        Key: sdk.String("dolor"),
        OauthToken: sdk.String("occaecati"),
        PageSize: sdk.Int64(253191),
        PageToken: sdk.String("impedit"),
        Parent: "explicabo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptas"),
        UploadType: sdk.String("aut"),
        UploadProtocol: sdk.String("dignissimos"),
    }, operations.NetworkservicesProjectsLocationsHTTPRoutesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListHTTPRoutesResponse != nil {
        // handle response
    }
}
```

## NetworkservicesProjectsLocationsList

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
    res, err := s.Projects.NetworkservicesProjectsLocationsList(ctx, operations.NetworkservicesProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("velit"),
        Fields: sdk.String("voluptatibus"),
        Filter: sdk.String("voluptas"),
        Key: sdk.String("asperiores"),
        Name: "Eileen Hagenes",
        OauthToken: sdk.String("officia"),
        PageSize: sdk.Int64(807023),
        PageToken: sdk.String("dignissimos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("asperiores"),
        UploadProtocol: sdk.String("nemo"),
    }, operations.NetworkservicesProjectsLocationsListSecurity{
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

## NetworkservicesProjectsLocationsMeshesCreate

Creates a new Mesh in a given project and location.

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
    res, err := s.Projects.NetworkservicesProjectsLocationsMeshesCreate(ctx, operations.NetworkservicesProjectsLocationsMeshesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        MeshInput: &shared.MeshInput{
            Description: sdk.String("quaerat"),
            InterceptionPort: sdk.Int(783235),
            Labels: map[string]string{
                "labore": "ab",
                "adipisci": "fuga",
                "id": "suscipit",
                "velit": "culpa",
            },
            Name: sdk.String("Clay Larson"),
        },
        AccessToken: sdk.String("ducimus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("vel"),
        Fields: sdk.String("labore"),
        Key: sdk.String("possimus"),
        MeshID: sdk.String("facilis"),
        OauthToken: sdk.String("cum"),
        Parent: "commodi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.NetworkservicesProjectsLocationsMeshesCreateSecurity{
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

## NetworkservicesProjectsLocationsMeshesList

Lists Meshes in a given project and location.

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
    res, err := s.Projects.NetworkservicesProjectsLocationsMeshesList(ctx, operations.NetworkservicesProjectsLocationsMeshesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("aperiam"),
        Key: sdk.String("cum"),
        OauthToken: sdk.String("consectetur"),
        PageSize: sdk.Int64(449083),
        PageToken: sdk.String("exercitationem"),
        Parent: "earum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facere"),
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("doloribus"),
    }, operations.NetworkservicesProjectsLocationsMeshesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMeshesResponse != nil {
        // handle response
    }
}
```

## NetworkservicesProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

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
    res, err := s.Projects.NetworkservicesProjectsLocationsOperationsCancel(ctx, operations.NetworkservicesProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "quidem": "saepe",
            "necessitatibus": "dolore",
            "sunt": "asperiores",
            "adipisci": "non",
        },
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dignissimos"),
        Fields: sdk.String("a"),
        Key: sdk.String("debitis"),
        Name: "Stacy Pollich DVM",
        OauthToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vitae"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("similique"),
    }, operations.NetworkservicesProjectsLocationsOperationsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## NetworkservicesProjectsLocationsOperationsList

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
    res, err := s.Projects.NetworkservicesProjectsLocationsOperationsList(ctx, operations.NetworkservicesProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("voluptas"),
        Filter: sdk.String("minima"),
        Key: sdk.String("nobis"),
        Name: "Travis Schinner",
        OauthToken: sdk.String("in"),
        PageSize: sdk.Int64(296242),
        PageToken: sdk.String("aliquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officiis"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("ullam"),
    }, operations.NetworkservicesProjectsLocationsOperationsListSecurity{
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

## NetworkservicesProjectsLocationsServiceBindingsCreate

Creates a new ServiceBinding in a given project and location.

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
    res, err := s.Projects.NetworkservicesProjectsLocationsServiceBindingsCreate(ctx, operations.NetworkservicesProjectsLocationsServiceBindingsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ServiceBindingInput: &shared.ServiceBindingInput{
            Description: sdk.String("cum"),
            Labels: map[string]string{
                "quas": "hic",
                "nesciunt": "culpa",
                "corrupti": "pariatur",
            },
            Name: sdk.String("Terrell Heidenreich MD"),
            Service: sdk.String("sed"),
        },
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("asperiores"),
        Fields: sdk.String("facilis"),
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("expedita"),
        Parent: "ab",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        ServiceBindingID: sdk.String("dolore"),
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("sed"),
    }, operations.NetworkservicesProjectsLocationsServiceBindingsCreateSecurity{
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

## NetworkservicesProjectsLocationsServiceBindingsGetIamPolicy

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
    res, err := s.Projects.NetworkservicesProjectsLocationsServiceBindingsGetIamPolicy(ctx, operations.NetworkservicesProjectsLocationsServiceBindingsGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("explicabo"),
        Fields: sdk.String("voluptas"),
        Key: sdk.String("unde"),
        OauthToken: sdk.String("architecto"),
        OptionsRequestedPolicyVersion: sdk.Int64(382808),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        Resource: "debitis",
        UploadType: sdk.String("illo"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.NetworkservicesProjectsLocationsServiceBindingsGetIamPolicySecurity{
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

## NetworkservicesProjectsLocationsServiceBindingsList

Lists ServiceBinding in a given project and location.

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
    res, err := s.Projects.NetworkservicesProjectsLocationsServiceBindingsList(ctx, operations.NetworkservicesProjectsLocationsServiceBindingsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("corrupti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("incidunt"),
        Fields: sdk.String("sed"),
        Key: sdk.String("provident"),
        OauthToken: sdk.String("eius"),
        PageSize: sdk.Int64(896762),
        PageToken: sdk.String("ipsum"),
        Parent: "ea",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.NetworkservicesProjectsLocationsServiceBindingsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServiceBindingsResponse != nil {
        // handle response
    }
}
```

## NetworkservicesProjectsLocationsServiceBindingsSetIamPolicy

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
    res, err := s.Projects.NetworkservicesProjectsLocationsServiceBindingsSetIamPolicy(ctx, operations.NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "ex",
                                    "sit",
                                    "non",
                                    "officiis",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "quaerat",
                                    "incidunt",
                                    "ipsam",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("rem"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "error",
                                    "veniam",
                                    "minima",
                                    "recusandae",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("nulla"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("aperiam"),
                            Expression: sdk.String("saepe"),
                            Location: sdk.String("numquam"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "officiis",
                            "beatae",
                        },
                        Role: sdk.String("laudantium"),
                    },
                },
                Etag: sdk.String("exercitationem"),
                Version: sdk.Int(510629),
            },
            UpdateMask: sdk.String("cum"),
        },
        AccessToken: sdk.String("laboriosam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatum"),
        Fields: sdk.String("error"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("expedita"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        Resource: "neque",
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("nostrum"),
    }, operations.NetworkservicesProjectsLocationsServiceBindingsSetIamPolicySecurity{
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

## NetworkservicesProjectsLocationsServiceBindingsTestIamPermissions

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
    res, err := s.Projects.NetworkservicesProjectsLocationsServiceBindingsTestIamPermissions(ctx, operations.NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "corrupti",
                "accusamus",
                "tempora",
            },
        },
        AccessToken: sdk.String("atque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ut"),
        Fields: sdk.String("fugiat"),
        Key: sdk.String("voluptatem"),
        OauthToken: sdk.String("culpa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("expedita"),
        Resource: "magnam",
        UploadType: sdk.String("consequatur"),
        UploadProtocol: sdk.String("esse"),
    }, operations.NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsSecurity{
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

## NetworkservicesProjectsLocationsTCPRoutesCreate

Creates a new TcpRoute in a given project and location.

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
    res, err := s.Projects.NetworkservicesProjectsLocationsTCPRoutesCreate(ctx, operations.NetworkservicesProjectsLocationsTCPRoutesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TCPRouteInput: &shared.TCPRouteInput{
            Description: sdk.String("sit"),
            Gateways: []string{
                "quas",
                "repudiandae",
                "corporis",
            },
            Labels: map[string]string{
                "blanditiis": "ex",
            },
            Meshes: []string{
                "sit",
            },
            Name: sdk.String("Bernice Ullrich II"),
            Rules: []shared.TCPRouteRouteRule{
                shared.TCPRouteRouteRule{
                    Action: &shared.TCPRouteRouteAction{
                        Destinations: []shared.TCPRouteRouteDestination{
                            shared.TCPRouteRouteDestination{
                                ServiceName: sdk.String("harum"),
                                Weight: sdk.Int(115703),
                            },
                        },
                        OriginalDestination: sdk.Bool(false),
                    },
                    Matches: []shared.TCPRouteRouteMatch{
                        shared.TCPRouteRouteMatch{
                            Address: sdk.String("2656 White Hills"),
                            Port: sdk.String("alias"),
                        },
                    },
                },
                shared.TCPRouteRouteRule{
                    Action: &shared.TCPRouteRouteAction{
                        Destinations: []shared.TCPRouteRouteDestination{
                            shared.TCPRouteRouteDestination{
                                ServiceName: sdk.String("deserunt"),
                                Weight: sdk.Int(454860),
                            },
                        },
                        OriginalDestination: sdk.Bool(false),
                    },
                    Matches: []shared.TCPRouteRouteMatch{
                        shared.TCPRouteRouteMatch{
                            Address: sdk.String("589 Armstrong Point"),
                            Port: sdk.String("quidem"),
                        },
                        shared.TCPRouteRouteMatch{
                            Address: sdk.String("8656 Alessia Skyway"),
                            Port: sdk.String("repudiandae"),
                        },
                        shared.TCPRouteRouteMatch{
                            Address: sdk.String("54953 Schoen Cliff"),
                            Port: sdk.String("esse"),
                        },
                    },
                },
                shared.TCPRouteRouteRule{
                    Action: &shared.TCPRouteRouteAction{
                        Destinations: []shared.TCPRouteRouteDestination{
                            shared.TCPRouteRouteDestination{
                                ServiceName: sdk.String("assumenda"),
                                Weight: sdk.Int(410301),
                            },
                        },
                        OriginalDestination: sdk.Bool(false),
                    },
                    Matches: []shared.TCPRouteRouteMatch{
                        shared.TCPRouteRouteMatch{
                            Address: sdk.String("8886 Bret Island"),
                            Port: sdk.String("maiores"),
                        },
                        shared.TCPRouteRouteMatch{
                            Address: sdk.String("8653 Littel Mill"),
                            Port: sdk.String("sunt"),
                        },
                        shared.TCPRouteRouteMatch{
                            Address: sdk.String("682 Baumbach Valleys"),
                            Port: sdk.String("dicta"),
                        },
                    },
                },
                shared.TCPRouteRouteRule{
                    Action: &shared.TCPRouteRouteAction{
                        Destinations: []shared.TCPRouteRouteDestination{
                            shared.TCPRouteRouteDestination{
                                ServiceName: sdk.String("beatae"),
                                Weight: sdk.Int(174772),
                            },
                        },
                        OriginalDestination: sdk.Bool(false),
                    },
                    Matches: []shared.TCPRouteRouteMatch{
                        shared.TCPRouteRouteMatch{
                            Address: sdk.String("2953 Cronin Orchard"),
                            Port: sdk.String("officiis"),
                        },
                        shared.TCPRouteRouteMatch{
                            Address: sdk.String("4295 Buster Plains"),
                            Port: sdk.String("quis"),
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("reprehenderit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("illo"),
        Fields: sdk.String("corporis"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("eveniet"),
        Parent: "non",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        TCPRouteID: sdk.String("doloremque"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.NetworkservicesProjectsLocationsTCPRoutesCreateSecurity{
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

## NetworkservicesProjectsLocationsTCPRoutesList

Lists TcpRoute in a given project and location.

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
    res, err := s.Projects.NetworkservicesProjectsLocationsTCPRoutesList(ctx, operations.NetworkservicesProjectsLocationsTCPRoutesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eveniet"),
        Fields: sdk.String("qui"),
        Key: sdk.String("cum"),
        OauthToken: sdk.String("iure"),
        PageSize: sdk.Int64(898063),
        PageToken: sdk.String("ratione"),
        Parent: "laborum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("rem"),
    }, operations.NetworkservicesProjectsLocationsTCPRoutesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTCPRoutesResponse != nil {
        // handle response
    }
}
```

## NetworkservicesProjectsLocationsTLSRoutesCreate

Creates a new TlsRoute in a given project and location.

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
    res, err := s.Projects.NetworkservicesProjectsLocationsTLSRoutesCreate(ctx, operations.NetworkservicesProjectsLocationsTLSRoutesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TLSRouteInput: &shared.TLSRouteInput{
            Description: sdk.String("ad"),
            Gateways: []string{
                "alias",
                "corporis",
                "perspiciatis",
                "nihil",
            },
            Meshes: []string{
                "voluptas",
                "alias",
                "maiores",
            },
            Name: sdk.String("Todd O'Reilly"),
            Rules: []shared.TLSRouteRouteRule{
                shared.TLSRouteRouteRule{
                    Action: &shared.TLSRouteRouteAction{
                        Destinations: []shared.TLSRouteRouteDestination{
                            shared.TLSRouteRouteDestination{
                                ServiceName: sdk.String("quae"),
                                Weight: sdk.Int(925703),
                            },
                        },
                    },
                    Matches: []shared.TLSRouteRouteMatch{
                        shared.TLSRouteRouteMatch{
                            Alpn: []string{
                                "molestiae",
                                "ex",
                            },
                            SniHost: []string{
                                "culpa",
                                "adipisci",
                            },
                        },
                        shared.TLSRouteRouteMatch{
                            Alpn: []string{
                                "laudantium",
                                "eum",
                                "nemo",
                                "recusandae",
                            },
                            SniHost: []string{
                                "provident",
                                "quis",
                            },
                        },
                        shared.TLSRouteRouteMatch{
                            Alpn: []string{
                                "reiciendis",
                                "provident",
                            },
                            SniHost: []string{
                                "ullam",
                            },
                        },
                    },
                },
                shared.TLSRouteRouteRule{
                    Action: &shared.TLSRouteRouteAction{
                        Destinations: []shared.TLSRouteRouteDestination{
                            shared.TLSRouteRouteDestination{
                                ServiceName: sdk.String("animi"),
                                Weight: sdk.Int(343392),
                            },
                        },
                    },
                    Matches: []shared.TLSRouteRouteMatch{
                        shared.TLSRouteRouteMatch{
                            Alpn: []string{
                                "possimus",
                                "animi",
                                "ex",
                            },
                            SniHost: []string{
                                "accusantium",
                                "repellat",
                            },
                        },
                        shared.TLSRouteRouteMatch{
                            Alpn: []string{
                                "ullam",
                                "in",
                                "nam",
                                "earum",
                            },
                            SniHost: []string{
                                "laborum",
                                "placeat",
                                "modi",
                            },
                        },
                        shared.TLSRouteRouteMatch{
                            Alpn: []string{
                                "molestias",
                                "officiis",
                                "sapiente",
                                "cumque",
                            },
                            SniHost: []string{
                                "rerum",
                            },
                        },
                    },
                },
                shared.TLSRouteRouteRule{
                    Action: &shared.TLSRouteRouteAction{
                        Destinations: []shared.TLSRouteRouteDestination{
                            shared.TLSRouteRouteDestination{
                                ServiceName: sdk.String("quis"),
                                Weight: sdk.Int(82057),
                            },
                            shared.TLSRouteRouteDestination{
                                ServiceName: sdk.String("fugit"),
                                Weight: sdk.Int(765271),
                            },
                        },
                    },
                    Matches: []shared.TLSRouteRouteMatch{
                        shared.TLSRouteRouteMatch{
                            Alpn: []string{
                                "velit",
                            },
                            SniHost: []string{
                                "eum",
                            },
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("eius"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("at"),
        Fields: sdk.String("impedit"),
        Key: sdk.String("eos"),
        OauthToken: sdk.String("sapiente"),
        Parent: "eum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        TLSRouteID: sdk.String("minima"),
        UploadType: sdk.String("beatae"),
        UploadProtocol: sdk.String("cupiditate"),
    }, operations.NetworkservicesProjectsLocationsTLSRoutesCreateSecurity{
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

## NetworkservicesProjectsLocationsTLSRoutesDelete

Deletes a single TlsRoute.

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
    res, err := s.Projects.NetworkservicesProjectsLocationsTLSRoutesDelete(ctx, operations.NetworkservicesProjectsLocationsTLSRoutesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("earum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("illum"),
        Key: sdk.String("eaque"),
        Name: "Freddie Wyman",
        OauthToken: sdk.String("porro"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("fugit"),
    }, operations.NetworkservicesProjectsLocationsTLSRoutesDeleteSecurity{
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

## NetworkservicesProjectsLocationsTLSRoutesGet

Gets details of a single TlsRoute.

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
    res, err := s.Projects.NetworkservicesProjectsLocationsTLSRoutesGet(ctx, operations.NetworkservicesProjectsLocationsTLSRoutesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("fuga"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("animi"),
        Fields: sdk.String("necessitatibus"),
        Key: sdk.String("nulla"),
        Name: "Joyce Borer",
        OauthToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("adipisci"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.NetworkservicesProjectsLocationsTLSRoutesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TLSRoute != nil {
        // handle response
    }
}
```

## NetworkservicesProjectsLocationsTLSRoutesList

Lists TlsRoute in a given project and location.

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
    res, err := s.Projects.NetworkservicesProjectsLocationsTLSRoutesList(ctx, operations.NetworkservicesProjectsLocationsTLSRoutesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("doloribus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("nihil"),
        PageSize: sdk.Int64(473190),
        PageToken: sdk.String("dicta"),
        Parent: "iusto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("maiores"),
    }, operations.NetworkservicesProjectsLocationsTLSRoutesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTLSRoutesResponse != nil {
        // handle response
    }
}
```

## NetworkservicesProjectsLocationsTLSRoutesPatch

Updates the parameters of a single TlsRoute.

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
    res, err := s.Projects.NetworkservicesProjectsLocationsTLSRoutesPatch(ctx, operations.NetworkservicesProjectsLocationsTLSRoutesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TLSRouteInput: &shared.TLSRouteInput{
            Description: sdk.String("vel"),
            Gateways: []string{
                "fugiat",
            },
            Meshes: []string{
                "dicta",
            },
            Name: sdk.String("Anita Koch"),
            Rules: []shared.TLSRouteRouteRule{
                shared.TLSRouteRouteRule{
                    Action: &shared.TLSRouteRouteAction{
                        Destinations: []shared.TLSRouteRouteDestination{
                            shared.TLSRouteRouteDestination{
                                ServiceName: sdk.String("laborum"),
                                Weight: sdk.Int(123844),
                            },
                        },
                    },
                    Matches: []shared.TLSRouteRouteMatch{
                        shared.TLSRouteRouteMatch{
                            Alpn: []string{
                                "expedita",
                                "aliquid",
                                "officia",
                                "suscipit",
                            },
                            SniHost: []string{
                                "perferendis",
                                "eum",
                            },
                        },
                        shared.TLSRouteRouteMatch{
                            Alpn: []string{
                                "iste",
                                "id",
                            },
                            SniHost: []string{
                                "error",
                            },
                        },
                    },
                },
                shared.TLSRouteRouteRule{
                    Action: &shared.TLSRouteRouteAction{
                        Destinations: []shared.TLSRouteRouteDestination{
                            shared.TLSRouteRouteDestination{
                                ServiceName: sdk.String("voluptates"),
                                Weight: sdk.Int(653421),
                            },
                            shared.TLSRouteRouteDestination{
                                ServiceName: sdk.String("laborum"),
                                Weight: sdk.Int(726343),
                            },
                            shared.TLSRouteRouteDestination{
                                ServiceName: sdk.String("ad"),
                                Weight: sdk.Int(536923),
                            },
                            shared.TLSRouteRouteDestination{
                                ServiceName: sdk.String("enim"),
                                Weight: sdk.Int(110477),
                            },
                        },
                    },
                    Matches: []shared.TLSRouteRouteMatch{
                        shared.TLSRouteRouteMatch{
                            Alpn: []string{
                                "quo",
                                "ex",
                            },
                            SniHost: []string{
                                "ad",
                                "expedita",
                            },
                        },
                        shared.TLSRouteRouteMatch{
                            Alpn: []string{
                                "molestias",
                            },
                            SniHost: []string{
                                "aliquid",
                                "beatae",
                                "voluptatum",
                            },
                        },
                        shared.TLSRouteRouteMatch{
                            Alpn: []string{
                                "veritatis",
                                "rerum",
                                "est",
                            },
                            SniHost: []string{
                                "voluptatem",
                                "sapiente",
                                "officiis",
                            },
                        },
                        shared.TLSRouteRouteMatch{
                            Alpn: []string{
                                "fuga",
                            },
                            SniHost: []string{
                                "debitis",
                                "voluptatem",
                                "alias",
                                "deleniti",
                            },
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("earum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("rem"),
        Key: sdk.String("minus"),
        Name: "Ollie Dicki PhD",
        OauthToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("impedit"),
        UpdateMask: sdk.String("quibusdam"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.NetworkservicesProjectsLocationsTLSRoutesPatchSecurity{
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
