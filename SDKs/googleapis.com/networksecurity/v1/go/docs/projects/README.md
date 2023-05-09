# Projects

### Available Operations

* [NetworksecurityProjectsLocationsAuthorizationPoliciesCreate](#networksecurityprojectslocationsauthorizationpoliciescreate) - Creates a new AuthorizationPolicy in a given project and location.
* [NetworksecurityProjectsLocationsAuthorizationPoliciesList](#networksecurityprojectslocationsauthorizationpolicieslist) - Lists AuthorizationPolicies in a given project and location.
* [NetworksecurityProjectsLocationsClientTLSPoliciesCreate](#networksecurityprojectslocationsclienttlspoliciescreate) - Creates a new ClientTlsPolicy in a given project and location.
* [NetworksecurityProjectsLocationsClientTLSPoliciesList](#networksecurityprojectslocationsclienttlspolicieslist) - Lists ClientTlsPolicies in a given project and location.
* [NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreate](#networksecurityprojectslocationsgatewaysecuritypoliciescreate) - Creates a new GatewaySecurityPolicy in a given project and location.
* [NetworksecurityProjectsLocationsGatewaySecurityPoliciesList](#networksecurityprojectslocationsgatewaysecuritypolicieslist) - Lists GatewaySecurityPolicies in a given project and location.
* [NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreate](#networksecurityprojectslocationsgatewaysecuritypoliciesrulescreate) - Creates a new GatewaySecurityPolicy in a given project and location.
* [NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesList](#networksecurityprojectslocationsgatewaysecuritypoliciesruleslist) - Lists GatewaySecurityPolicyRules in a given project and location.
* [NetworksecurityProjectsLocationsList](#networksecurityprojectslocationslist) - Lists information about the supported locations for this service.
* [NetworksecurityProjectsLocationsOperationsCancel](#networksecurityprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [NetworksecurityProjectsLocationsOperationsList](#networksecurityprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [NetworksecurityProjectsLocationsServerTLSPoliciesCreate](#networksecurityprojectslocationsservertlspoliciescreate) - Creates a new ServerTlsPolicy in a given project and location.
* [NetworksecurityProjectsLocationsServerTLSPoliciesGetIamPolicy](#networksecurityprojectslocationsservertlspoliciesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [NetworksecurityProjectsLocationsServerTLSPoliciesList](#networksecurityprojectslocationsservertlspolicieslist) - Lists ServerTlsPolicies in a given project and location.
* [NetworksecurityProjectsLocationsServerTLSPoliciesSetIamPolicy](#networksecurityprojectslocationsservertlspoliciessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [NetworksecurityProjectsLocationsServerTLSPoliciesTestIamPermissions](#networksecurityprojectslocationsservertlspoliciestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [NetworksecurityProjectsLocationsTLSInspectionPoliciesCreate](#networksecurityprojectslocationstlsinspectionpoliciescreate) - Creates a new TlsInspectionPolicy in a given project and location.
* [NetworksecurityProjectsLocationsTLSInspectionPoliciesList](#networksecurityprojectslocationstlsinspectionpolicieslist) - Lists TlsInspectionPolicies in a given project and location.
* [NetworksecurityProjectsLocationsURLListsCreate](#networksecurityprojectslocationsurllistscreate) - Creates a new UrlList in a given project and location.
* [NetworksecurityProjectsLocationsURLListsDelete](#networksecurityprojectslocationsurllistsdelete) - Deletes a single UrlList.
* [NetworksecurityProjectsLocationsURLListsGet](#networksecurityprojectslocationsurllistsget) - Gets details of a single UrlList.
* [NetworksecurityProjectsLocationsURLListsList](#networksecurityprojectslocationsurllistslist) - Lists UrlLists in a given project and location.
* [NetworksecurityProjectsLocationsURLListsPatch](#networksecurityprojectslocationsurllistspatch) - Updates the parameters of a single UrlList.

## NetworksecurityProjectsLocationsAuthorizationPoliciesCreate

Creates a new AuthorizationPolicy in a given project and location.

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
    res, err := s.Projects.NetworksecurityProjectsLocationsAuthorizationPoliciesCreate(ctx, operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AuthorizationPolicyInput: &shared.AuthorizationPolicyInput{
            Action: shared.AuthorizationPolicyActionEnumDeny.ToPointer(),
            Description: sdk.String("animi"),
            Labels: map[string]string{
                "odit": "quo",
                "sequi": "tenetur",
            },
            Name: sdk.String("Mr. Alberta Schuster"),
            Rules: []shared.Rule{
                shared.Rule{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Hosts: []string{
                                "reiciendis",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: sdk.String("voluptatibus"),
                                RegexMatch: sdk.String("vero"),
                            },
                            Methods: []string{
                                "praesentium",
                                "voluptatibus",
                            },
                            Ports: []int64{
                                604846,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "cum",
                                "perferendis",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: sdk.String("doloremque"),
                                RegexMatch: sdk.String("reprehenderit"),
                            },
                            Methods: []string{
                                "maiores",
                                "dicta",
                            },
                            Ports: []int64{
                                296140,
                                480894,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "harum",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: sdk.String("enim"),
                                RegexMatch: sdk.String("accusamus"),
                            },
                            Methods: []string{
                                "repudiandae",
                                "quae",
                            },
                            Ports: []int64{
                                692472,
                            },
                        },
                    },
                    Sources: []shared.Source{
                        shared.Source{
                            IPBlocks: []string{
                                "pariatur",
                                "modi",
                                "praesentium",
                            },
                            Principals: []string{
                                "voluptates",
                                "quasi",
                                "repudiandae",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "veritatis",
                                "itaque",
                                "incidunt",
                            },
                            Principals: []string{
                                "consequatur",
                                "est",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "explicabo",
                                "deserunt",
                                "distinctio",
                                "quibusdam",
                            },
                            Principals: []string{
                                "modi",
                                "qui",
                            },
                        },
                    },
                },
                shared.Rule{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Hosts: []string{
                                "quos",
                                "perferendis",
                                "magni",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: sdk.String("assumenda"),
                                RegexMatch: sdk.String("ipsam"),
                            },
                            Methods: []string{
                                "fugit",
                            },
                            Ports: []int64{
                                569618,
                                270008,
                                703737,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "labore",
                                "delectus",
                                "eum",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: sdk.String("non"),
                                RegexMatch: sdk.String("eligendi"),
                            },
                            Methods: []string{
                                "aliquid",
                                "provident",
                                "necessitatibus",
                            },
                            Ports: []int64{
                                638921,
                                223081,
                                891555,
                            },
                        },
                    },
                    Sources: []shared.Source{
                        shared.Source{
                            IPBlocks: []string{
                                "in",
                                "in",
                                "illum",
                            },
                            Principals: []string{
                                "rerum",
                                "dicta",
                                "magnam",
                                "cumque",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "ea",
                                "aliquid",
                                "laborum",
                                "accusamus",
                            },
                            Principals: []string{
                                "occaecati",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "accusamus",
                                "delectus",
                            },
                            Principals: []string{
                                "provident",
                                "nam",
                                "id",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "deleniti",
                                "sapiente",
                                "amet",
                            },
                            Principals: []string{
                                "nisi",
                                "vel",
                                "natus",
                            },
                        },
                    },
                },
                shared.Rule{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Hosts: []string{
                                "perferendis",
                                "nihil",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: sdk.String("magnam"),
                                RegexMatch: sdk.String("distinctio"),
                            },
                            Methods: []string{
                                "labore",
                                "labore",
                                "suscipit",
                            },
                            Ports: []int64{
                                749170,
                                428769,
                                878453,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "architecto",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: sdk.String("magnam"),
                                RegexMatch: sdk.String("et"),
                            },
                            Methods: []string{
                                "ullam",
                                "provident",
                                "quos",
                            },
                            Ports: []int64{
                                33625,
                                653201,
                                968962,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "ad",
                                "eum",
                                "dolor",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: sdk.String("necessitatibus"),
                                RegexMatch: sdk.String("odit"),
                            },
                            Methods: []string{
                                "quasi",
                                "iure",
                            },
                            Ports: []int64{
                                891924,
                                260341,
                                806194,
                                537023,
                            },
                        },
                    },
                    Sources: []shared.Source{
                        shared.Source{
                            IPBlocks: []string{
                                "architecto",
                                "architecto",
                            },
                            Principals: []string{
                                "ullam",
                                "expedita",
                                "nihil",
                                "repellat",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "sed",
                                "saepe",
                                "pariatur",
                                "accusantium",
                            },
                            Principals: []string{
                                "praesentium",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "magni",
                                "sunt",
                                "quo",
                            },
                            Principals: []string{
                                "pariatur",
                                "maxime",
                                "ea",
                                "excepturi",
                            },
                        },
                    },
                },
                shared.Rule{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Hosts: []string{
                                "accusantium",
                                "ab",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: sdk.String("maiores"),
                                RegexMatch: sdk.String("quidem"),
                            },
                            Methods: []string{
                                "voluptate",
                                "autem",
                            },
                            Ports: []int64{
                                50588,
                                866383,
                                365496,
                            },
                        },
                    },
                    Sources: []shared.Source{
                        shared.Source{
                            IPBlocks: []string{
                                "fugiat",
                            },
                            Principals: []string{
                                "aut",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "corporis",
                                "hic",
                                "libero",
                                "nobis",
                            },
                            Principals: []string{
                                "quis",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "dignissimos",
                                "eaque",
                                "quis",
                            },
                            Principals: []string{
                                "eos",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "dolores",
                            },
                            Principals: []string{
                                "quam",
                                "dolor",
                                "vero",
                                "nostrum",
                            },
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        AuthorizationPolicyID: sdk.String("omnis"),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("perspiciatis"),
        Key: sdk.String("voluptatem"),
        OauthToken: sdk.String("porro"),
        Parent: "consequuntur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("blanditiis"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("eaque"),
    }, operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateSecurity{
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

## NetworksecurityProjectsLocationsAuthorizationPoliciesList

Lists AuthorizationPolicies in a given project and location.

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
    res, err := s.Projects.NetworksecurityProjectsLocationsAuthorizationPoliciesList(ctx, operations.NetworksecurityProjectsLocationsAuthorizationPoliciesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("rerum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("asperiores"),
        Fields: sdk.String("earum"),
        Key: sdk.String("modi"),
        OauthToken: sdk.String("iste"),
        PageSize: sdk.Int64(679091),
        PageToken: sdk.String("deleniti"),
        Parent: "pariatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("libero"),
    }, operations.NetworksecurityProjectsLocationsAuthorizationPoliciesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAuthorizationPoliciesResponse != nil {
        // handle response
    }
}
```

## NetworksecurityProjectsLocationsClientTLSPoliciesCreate

Creates a new ClientTlsPolicy in a given project and location.

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
    res, err := s.Projects.NetworksecurityProjectsLocationsClientTLSPoliciesCreate(ctx, operations.NetworksecurityProjectsLocationsClientTLSPoliciesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ClientTLSPolicyInput: &shared.ClientTLSPolicyInput{
            ClientCertificate: &shared.GoogleCloudNetworksecurityV1CertificateProvider{
                CertificateProviderInstance: &shared.CertificateProviderInstance{
                    PluginInstance: sdk.String("quaerat"),
                },
                GrpcEndpoint: &shared.GoogleCloudNetworksecurityV1GrpcEndpoint{
                    TargetURI: sdk.String("quos"),
                },
            },
            Description: sdk.String("aliquid"),
            Labels: map[string]string{
                "dolorem": "dolor",
            },
            Name: sdk.String("Tiffany Welch"),
            ServerValidationCa: []shared.ValidationCA{
                shared.ValidationCA{
                    CertificateProviderInstance: &shared.CertificateProviderInstance{
                        PluginInstance: sdk.String("dignissimos"),
                    },
                    GrpcEndpoint: &shared.GoogleCloudNetworksecurityV1GrpcEndpoint{
                        TargetURI: sdk.String("reiciendis"),
                    },
                },
                shared.ValidationCA{
                    CertificateProviderInstance: &shared.CertificateProviderInstance{
                        PluginInstance: sdk.String("amet"),
                    },
                    GrpcEndpoint: &shared.GoogleCloudNetworksecurityV1GrpcEndpoint{
                        TargetURI: sdk.String("dolorum"),
                    },
                },
            },
            Sni: sdk.String("numquam"),
        },
        AccessToken: sdk.String("veritatis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsa"),
        ClientTLSPolicyID: sdk.String("iure"),
        Fields: sdk.String("odio"),
        Key: sdk.String("quaerat"),
        OauthToken: sdk.String("accusamus"),
        Parent: "quidem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("natus"),
    }, operations.NetworksecurityProjectsLocationsClientTLSPoliciesCreateSecurity{
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

## NetworksecurityProjectsLocationsClientTLSPoliciesList

Lists ClientTlsPolicies in a given project and location.

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
    res, err := s.Projects.NetworksecurityProjectsLocationsClientTLSPoliciesList(ctx, operations.NetworksecurityProjectsLocationsClientTLSPoliciesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("atque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fugiat"),
        Fields: sdk.String("ab"),
        Key: sdk.String("soluta"),
        OauthToken: sdk.String("dolorum"),
        PageSize: sdk.Int64(478596),
        PageToken: sdk.String("voluptate"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("necessitatibus"),
    }, operations.NetworksecurityProjectsLocationsClientTLSPoliciesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListClientTLSPoliciesResponse != nil {
        // handle response
    }
}
```

## NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreate

Creates a new GatewaySecurityPolicy in a given project and location.

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
    res, err := s.Projects.NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreate(ctx, operations.NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GatewaySecurityPolicyInput: &shared.GatewaySecurityPolicyInput{
            Description: sdk.String("asperiores"),
            Name: sdk.String("Edna Klocko"),
            TLSInspectionPolicy: sdk.String("eius"),
        },
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("optio"),
        GatewaySecurityPolicyID: sdk.String("accusamus"),
        Key: sdk.String("ad"),
        OauthToken: sdk.String("saepe"),
        Parent: "suscipit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("minima"),
    }, operations.NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateSecurity{
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

## NetworksecurityProjectsLocationsGatewaySecurityPoliciesList

Lists GatewaySecurityPolicies in a given project and location.

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
    res, err := s.Projects.NetworksecurityProjectsLocationsGatewaySecurityPoliciesList(ctx, operations.NetworksecurityProjectsLocationsGatewaySecurityPoliciesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("alias"),
        Fields: sdk.String("at"),
        Key: sdk.String("quaerat"),
        OauthToken: sdk.String("tempora"),
        PageSize: sdk.Int64(425451),
        PageToken: sdk.String("quod"),
        Parent: "officiis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("a"),
    }, operations.NetworksecurityProjectsLocationsGatewaySecurityPoliciesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGatewaySecurityPoliciesResponse != nil {
        // handle response
    }
}
```

## NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreate

Creates a new GatewaySecurityPolicy in a given project and location.

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
    res, err := s.Projects.NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreate(ctx, operations.NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GatewaySecurityPolicyRuleInput: &shared.GatewaySecurityPolicyRuleInput{
            ApplicationMatcher: sdk.String("harum"),
            BasicProfile: shared.GatewaySecurityPolicyRuleBasicProfileEnumAllow.ToPointer(),
            Description: sdk.String("ipsum"),
            Enabled: sdk.Bool(false),
            Name: sdk.String("Saul Fay"),
            Priority: sdk.Int(253941),
            SessionMatcher: sdk.String("enim"),
            TLSInspectionEnabled: sdk.Bool(false),
        },
        AccessToken: sdk.String("dolorem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("nihil"),
        GatewaySecurityPolicyRuleID: sdk.String("sit"),
        Key: sdk.String("expedita"),
        OauthToken: sdk.String("neque"),
        Parent: "sed",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("voluptas"),
    }, operations.NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreateSecurity{
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

## NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesList

Lists GatewaySecurityPolicyRules in a given project and location.

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
    res, err := s.Projects.NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesList(ctx, operations.NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("incidunt"),
        Fields: sdk.String("qui"),
        Key: sdk.String("cupiditate"),
        OauthToken: sdk.String("maxime"),
        PageSize: sdk.Int64(863856),
        PageToken: sdk.String("soluta"),
        Parent: "dicta",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("incidunt"),
    }, operations.NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGatewaySecurityPolicyRulesResponse != nil {
        // handle response
    }
}
```

## NetworksecurityProjectsLocationsList

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
    res, err := s.Projects.NetworksecurityProjectsLocationsList(ctx, operations.NetworksecurityProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("aliquid"),
        Filter: sdk.String("quam"),
        Key: sdk.String("molestias"),
        Name: "Shawn Doyle",
        OauthToken: sdk.String("odio"),
        PageSize: sdk.Int64(124833),
        PageToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nam"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("voluptatem"),
    }, operations.NetworksecurityProjectsLocationsListSecurity{
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

## NetworksecurityProjectsLocationsOperationsCancel

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
    res, err := s.Projects.NetworksecurityProjectsLocationsOperationsCancel(ctx, operations.NetworksecurityProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "nobis": "et",
            "saepe": "ipsum",
            "veritatis": "nobis",
        },
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("cupiditate"),
        Fields: sdk.String("aperiam"),
        Key: sdk.String("delectus"),
        Name: "Joanne Grant",
        OauthToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quae"),
        UploadType: sdk.String("aut"),
        UploadProtocol: sdk.String("quas"),
    }, operations.NetworksecurityProjectsLocationsOperationsCancelSecurity{
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

## NetworksecurityProjectsLocationsOperationsList

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
    res, err := s.Projects.NetworksecurityProjectsLocationsOperationsList(ctx, operations.NetworksecurityProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("repellendus"),
        Fields: sdk.String("porro"),
        Filter: sdk.String("doloribus"),
        Key: sdk.String("ut"),
        Name: "Ms. Terrance Davis",
        OauthToken: sdk.String("occaecati"),
        PageSize: sdk.Int64(977496),
        PageToken: sdk.String("quisquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("quis"),
    }, operations.NetworksecurityProjectsLocationsOperationsListSecurity{
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

## NetworksecurityProjectsLocationsServerTLSPoliciesCreate

Creates a new ServerTlsPolicy in a given project and location.

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
    res, err := s.Projects.NetworksecurityProjectsLocationsServerTLSPoliciesCreate(ctx, operations.NetworksecurityProjectsLocationsServerTLSPoliciesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ServerTLSPolicyInput: &shared.ServerTLSPolicyInput{
            AllowOpen: sdk.Bool(false),
            Description: sdk.String("delectus"),
            Labels: map[string]string{
                "consectetur": "vero",
                "tenetur": "dignissimos",
            },
            MtlsPolicy: &shared.MTLSPolicy{
                ClientValidationCa: []shared.ValidationCA{
                    shared.ValidationCA{
                        CertificateProviderInstance: &shared.CertificateProviderInstance{
                            PluginInstance: sdk.String("distinctio"),
                        },
                        GrpcEndpoint: &shared.GoogleCloudNetworksecurityV1GrpcEndpoint{
                            TargetURI: sdk.String("quod"),
                        },
                    },
                    shared.ValidationCA{
                        CertificateProviderInstance: &shared.CertificateProviderInstance{
                            PluginInstance: sdk.String("odio"),
                        },
                        GrpcEndpoint: &shared.GoogleCloudNetworksecurityV1GrpcEndpoint{
                            TargetURI: sdk.String("similique"),
                        },
                    },
                    shared.ValidationCA{
                        CertificateProviderInstance: &shared.CertificateProviderInstance{
                            PluginInstance: sdk.String("facilis"),
                        },
                        GrpcEndpoint: &shared.GoogleCloudNetworksecurityV1GrpcEndpoint{
                            TargetURI: sdk.String("vero"),
                        },
                    },
                    shared.ValidationCA{
                        CertificateProviderInstance: &shared.CertificateProviderInstance{
                            PluginInstance: sdk.String("ducimus"),
                        },
                        GrpcEndpoint: &shared.GoogleCloudNetworksecurityV1GrpcEndpoint{
                            TargetURI: sdk.String("dolore"),
                        },
                    },
                },
                ClientValidationMode: shared.MTLSPolicyClientValidationModeEnumRejectInvalid.ToPointer(),
                ClientValidationTrustConfig: sdk.String("illum"),
            },
            Name: sdk.String("Dr. Faye Rutherford"),
            ServerCertificate: &shared.GoogleCloudNetworksecurityV1CertificateProvider{
                CertificateProviderInstance: &shared.CertificateProviderInstance{
                    PluginInstance: sdk.String("nulla"),
                },
                GrpcEndpoint: &shared.GoogleCloudNetworksecurityV1GrpcEndpoint{
                    TargetURI: sdk.String("fugit"),
                },
            },
        },
        AccessToken: sdk.String("porro"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("doloribus"),
        Fields: sdk.String("iusto"),
        Key: sdk.String("eligendi"),
        OauthToken: sdk.String("ducimus"),
        Parent: "alias",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        ServerTLSPolicyID: sdk.String("tempora"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("ea"),
    }, operations.NetworksecurityProjectsLocationsServerTLSPoliciesCreateSecurity{
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

## NetworksecurityProjectsLocationsServerTLSPoliciesGetIamPolicy

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
    res, err := s.Projects.NetworksecurityProjectsLocationsServerTLSPoliciesGetIamPolicy(ctx, operations.NetworksecurityProjectsLocationsServerTLSPoliciesGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("ratione"),
        Key: sdk.String("ex"),
        OauthToken: sdk.String("laudantium"),
        OptionsRequestedPolicyVersion: sdk.Int64(120657),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        Resource: "maiores",
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("ex"),
    }, operations.NetworksecurityProjectsLocationsServerTLSPoliciesGetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleIamV1Policy != nil {
        // handle response
    }
}
```

## NetworksecurityProjectsLocationsServerTLSPoliciesList

Lists ServerTlsPolicies in a given project and location.

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
    res, err := s.Projects.NetworksecurityProjectsLocationsServerTLSPoliciesList(ctx, operations.NetworksecurityProjectsLocationsServerTLSPoliciesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nostrum"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("quisquam"),
        OauthToken: sdk.String("saepe"),
        PageSize: sdk.Int64(411372),
        PageToken: sdk.String("impedit"),
        Parent: "corporis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veniam"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("inventore"),
    }, operations.NetworksecurityProjectsLocationsServerTLSPoliciesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServerTLSPoliciesResponse != nil {
        // handle response
    }
}
```

## NetworksecurityProjectsLocationsServerTLSPoliciesSetIamPolicy

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
    res, err := s.Projects.NetworksecurityProjectsLocationsServerTLSPoliciesSetIamPolicy(ctx, operations.NetworksecurityProjectsLocationsServerTLSPoliciesSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleIamV1SetIamPolicyRequest: &shared.GoogleIamV1SetIamPolicyRequest{
            Policy: &shared.GoogleIamV1Policy{
                AuditConfigs: []shared.GoogleIamV1AuditConfig{
                    shared.GoogleIamV1AuditConfig{
                        AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "recusandae",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "eaque",
                                    "a",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "aut",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "aliquam",
                                    "fugit",
                                    "accusamus",
                                    "inventore",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("et"),
                    },
                    shared.GoogleIamV1AuditConfig{
                        AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "placeat",
                                    "velit",
                                    "eum",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "quas",
                                    "assumenda",
                                    "nulla",
                                    "voluptas",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "tempora",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("explicabo"),
                    },
                },
                Bindings: []shared.GoogleIamV1Binding{
                    shared.GoogleIamV1Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("ipsa"),
                            Expression: sdk.String("molestiae"),
                            Location: sdk.String("magnam"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "esse",
                            "esse",
                        },
                        Role: sdk.String("rem"),
                    },
                    shared.GoogleIamV1Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("fuga"),
                            Expression: sdk.String("reprehenderit"),
                            Location: sdk.String("quidem"),
                            Title: sdk.String("Dr."),
                        },
                        Members: []string{
                            "eum",
                            "suscipit",
                        },
                        Role: sdk.String("assumenda"),
                    },
                    shared.GoogleIamV1Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("eos"),
                            Expression: sdk.String("praesentium"),
                            Location: sdk.String("quisquam"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "id",
                        },
                        Role: sdk.String("quidem"),
                    },
                },
                Etag: sdk.String("neque"),
                Version: sdk.Int(778696),
            },
            UpdateMask: sdk.String("illum"),
        },
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eius"),
        Fields: sdk.String("eos"),
        Key: sdk.String("voluptas"),
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cupiditate"),
        Resource: "consequatur",
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.NetworksecurityProjectsLocationsServerTLSPoliciesSetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleIamV1Policy != nil {
        // handle response
    }
}
```

## NetworksecurityProjectsLocationsServerTLSPoliciesTestIamPermissions

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
    res, err := s.Projects.NetworksecurityProjectsLocationsServerTLSPoliciesTestIamPermissions(ctx, operations.NetworksecurityProjectsLocationsServerTLSPoliciesTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleIamV1TestIamPermissionsRequest: &shared.GoogleIamV1TestIamPermissionsRequest{
            Permissions: []string{
                "sequi",
            },
        },
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("aperiam"),
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dignissimos"),
        Resource: "inventore",
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("totam"),
    }, operations.NetworksecurityProjectsLocationsServerTLSPoliciesTestIamPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleIamV1TestIamPermissionsResponse != nil {
        // handle response
    }
}
```

## NetworksecurityProjectsLocationsTLSInspectionPoliciesCreate

Creates a new TlsInspectionPolicy in a given project and location.

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
    res, err := s.Projects.NetworksecurityProjectsLocationsTLSInspectionPoliciesCreate(ctx, operations.NetworksecurityProjectsLocationsTLSInspectionPoliciesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TLSInspectionPolicyInput: &shared.TLSInspectionPolicyInput{
            CaPool: sdk.String("aliquam"),
            Description: sdk.String("odio"),
            Name: sdk.String("Leslie Williamson"),
        },
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("porro"),
        Fields: sdk.String("eum"),
        Key: sdk.String("quas"),
        OauthToken: sdk.String("praesentium"),
        Parent: "consequuntur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        TLSInspectionPolicyID: sdk.String("fugit"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.NetworksecurityProjectsLocationsTLSInspectionPoliciesCreateSecurity{
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

## NetworksecurityProjectsLocationsTLSInspectionPoliciesList

Lists TlsInspectionPolicies in a given project and location.

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
    res, err := s.Projects.NetworksecurityProjectsLocationsTLSInspectionPoliciesList(ctx, operations.NetworksecurityProjectsLocationsTLSInspectionPoliciesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("atque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("minima"),
        Fields: sdk.String("nisi"),
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("sapiente"),
        PageSize: sdk.Int64(159870),
        PageToken: sdk.String("ratione"),
        Parent: "explicabo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("atque"),
    }, operations.NetworksecurityProjectsLocationsTLSInspectionPoliciesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTLSInspectionPoliciesResponse != nil {
        // handle response
    }
}
```

## NetworksecurityProjectsLocationsURLListsCreate

Creates a new UrlList in a given project and location.

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
    res, err := s.Projects.NetworksecurityProjectsLocationsURLListsCreate(ctx, operations.NetworksecurityProjectsLocationsURLListsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        URLListInput: &shared.URLListInput{
            Description: sdk.String("esse"),
            Name: sdk.String("Sheldon Boehm"),
            Values: []string{
                "vero",
                "aliquid",
                "quasi",
            },
        },
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("harum"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("rerum"),
        OauthToken: sdk.String("occaecati"),
        Parent: "minima",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        UploadType: sdk.String("eligendi"),
        UploadProtocol: sdk.String("sit"),
        URLListID: sdk.String("culpa"),
    }, operations.NetworksecurityProjectsLocationsURLListsCreateSecurity{
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

## NetworksecurityProjectsLocationsURLListsDelete

Deletes a single UrlList.

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
    res, err := s.Projects.NetworksecurityProjectsLocationsURLListsDelete(ctx, operations.NetworksecurityProjectsLocationsURLListsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("adipisci"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Fields: sdk.String("consequatur"),
        Force: sdk.Bool(false),
        Key: sdk.String("minus"),
        Name: "Miranda Feest",
        OauthToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("a"),
        UploadType: sdk.String("nulla"),
        UploadProtocol: sdk.String("quas"),
    }, operations.NetworksecurityProjectsLocationsURLListsDeleteSecurity{
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

## NetworksecurityProjectsLocationsURLListsGet

Gets details of a single UrlList.

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
    res, err := s.Projects.NetworksecurityProjectsLocationsURLListsGet(ctx, operations.NetworksecurityProjectsLocationsURLListsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("sint"),
        Key: sdk.String("pariatur"),
        Name: "Howard Upton",
        OauthToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("similique"),
    }, operations.NetworksecurityProjectsLocationsURLListsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.URLList != nil {
        // handle response
    }
}
```

## NetworksecurityProjectsLocationsURLListsList

Lists UrlLists in a given project and location.

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
    res, err := s.Projects.NetworksecurityProjectsLocationsURLListsList(ctx, operations.NetworksecurityProjectsLocationsURLListsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quae"),
        Fields: sdk.String("earum"),
        Key: sdk.String("vel"),
        OauthToken: sdk.String("in"),
        PageSize: sdk.Int64(258684),
        PageToken: sdk.String("libero"),
        Parent: "illum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("soluta"),
        UploadType: sdk.String("accusantium"),
        UploadProtocol: sdk.String("aliquam"),
    }, operations.NetworksecurityProjectsLocationsURLListsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListURLListsResponse != nil {
        // handle response
    }
}
```

## NetworksecurityProjectsLocationsURLListsPatch

Updates the parameters of a single UrlList.

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
    res, err := s.Projects.NetworksecurityProjectsLocationsURLListsPatch(ctx, operations.NetworksecurityProjectsLocationsURLListsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        URLListInput: &shared.URLListInput{
            Description: sdk.String("dicta"),
            Name: sdk.String("Delores Hermiston IV"),
            Values: []string{
                "quibusdam",
            },
        },
        AccessToken: sdk.String("ex"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("itaque"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("architecto"),
        Name: "Irvin Boyle III",
        OauthToken: sdk.String("ipsa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        UpdateMask: sdk.String("veritatis"),
        UploadType: sdk.String("consectetur"),
        UploadProtocol: sdk.String("adipisci"),
    }, operations.NetworksecurityProjectsLocationsURLListsPatchSecurity{
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
