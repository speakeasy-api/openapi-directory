# Projects

### Available Operations

* [NetworksecurityProjectsLocationsAddressGroupsAddItems](#networksecurityprojectslocationsaddressgroupsadditems) - Adds items to an address group.
* [NetworksecurityProjectsLocationsAddressGroupsCloneItems](#networksecurityprojectslocationsaddressgroupscloneitems) - Clones items from one address group to another.
* [NetworksecurityProjectsLocationsAddressGroupsCreate](#networksecurityprojectslocationsaddressgroupscreate) - Creates a new address group in a given project and location.
* [NetworksecurityProjectsLocationsAddressGroupsList](#networksecurityprojectslocationsaddressgroupslist) - Lists address groups in a given project and location.
* [NetworksecurityProjectsLocationsAddressGroupsListReferences](#networksecurityprojectslocationsaddressgroupslistreferences) - Lists references of an address group.
* [NetworksecurityProjectsLocationsAddressGroupsRemoveItems](#networksecurityprojectslocationsaddressgroupsremoveitems) - Removes items from an address group.
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

## NetworksecurityProjectsLocationsAddressGroupsAddItems

Adds items to an address group.

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
    res, err := s.Projects.NetworksecurityProjectsLocationsAddressGroupsAddItems(ctx, operations.NetworksecurityProjectsLocationsAddressGroupsAddItemsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AddAddressGroupItemsRequest: &shared.AddAddressGroupItemsRequest{
            Items: []string{
                "suscipit",
                "molestiae",
            },
            RequestID: sdk.String("minus"),
        },
        AccessToken: sdk.String("placeat"),
        AddressGroup: "voluptatum",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("nisi"),
        Key: sdk.String("recusandae"),
        OauthToken: sdk.String("temporibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ab"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("veritatis"),
    }, operations.NetworksecurityProjectsLocationsAddressGroupsAddItemsSecurity{
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

## NetworksecurityProjectsLocationsAddressGroupsCloneItems

Clones items from one address group to another.

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
    res, err := s.Projects.NetworksecurityProjectsLocationsAddressGroupsCloneItems(ctx, operations.NetworksecurityProjectsLocationsAddressGroupsCloneItemsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CloneAddressGroupItemsRequest: &shared.CloneAddressGroupItemsRequest{
            RequestID: sdk.String("perferendis"),
            SourceAddressGroup: sdk.String("ipsam"),
        },
        AccessToken: sdk.String("repellendus"),
        AddressGroup: "sapiente",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("odit"),
        Fields: sdk.String("at"),
        Key: sdk.String("at"),
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("quod"),
    }, operations.NetworksecurityProjectsLocationsAddressGroupsCloneItemsSecurity{
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

## NetworksecurityProjectsLocationsAddressGroupsCreate

Creates a new address group in a given project and location.

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
    res, err := s.Projects.NetworksecurityProjectsLocationsAddressGroupsCreate(ctx, operations.NetworksecurityProjectsLocationsAddressGroupsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AddressGroupInput: &shared.AddressGroupInput{
            Capacity: sdk.Int(520478),
            Description: sdk.String("porro"),
            Items: []string{
                "dicta",
                "nam",
                "officia",
            },
            Labels: map[string]string{
                "fugit": "deleniti",
                "hic": "optio",
                "totam": "beatae",
            },
            Name: sdk.String("Tanya Gleason"),
            Type: shared.AddressGroupTypeEnumIpv6.ToPointer(),
        },
        AccessToken: sdk.String("esse"),
        AddressGroupID: sdk.String("ipsum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("ad"),
        OauthToken: sdk.String("natus"),
        Parent: "sed",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        RequestID: sdk.String("dolor"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("laboriosam"),
    }, operations.NetworksecurityProjectsLocationsAddressGroupsCreateSecurity{
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

## NetworksecurityProjectsLocationsAddressGroupsList

Lists address groups in a given project and location.

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
    res, err := s.Projects.NetworksecurityProjectsLocationsAddressGroupsList(ctx, operations.NetworksecurityProjectsLocationsAddressGroupsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("in"),
        Fields: sdk.String("corporis"),
        Key: sdk.String("iste"),
        OauthToken: sdk.String("iure"),
        PageSize: sdk.Int64(902349),
        PageToken: sdk.String("quidem"),
        Parent: "architecto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("est"),
    }, operations.NetworksecurityProjectsLocationsAddressGroupsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAddressGroupsResponse != nil {
        // handle response
    }
}
```

## NetworksecurityProjectsLocationsAddressGroupsListReferences

Lists references of an address group.

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
    res, err := s.Projects.NetworksecurityProjectsLocationsAddressGroupsListReferences(ctx, operations.NetworksecurityProjectsLocationsAddressGroupsListReferencesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("laborum"),
        AddressGroup: "dolores",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("explicabo"),
        Key: sdk.String("nobis"),
        OauthToken: sdk.String("enim"),
        PageSize: sdk.Int64(607831),
        PageToken: sdk.String("nemo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("accusantium"),
    }, operations.NetworksecurityProjectsLocationsAddressGroupsListReferencesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAddressGroupReferencesResponse != nil {
        // handle response
    }
}
```

## NetworksecurityProjectsLocationsAddressGroupsRemoveItems

Removes items from an address group.

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
    res, err := s.Projects.NetworksecurityProjectsLocationsAddressGroupsRemoveItems(ctx, operations.NetworksecurityProjectsLocationsAddressGroupsRemoveItemsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RemoveAddressGroupItemsRequest: &shared.RemoveAddressGroupItemsRequest{
            Items: []string{
                "doloribus",
                "sapiente",
                "architecto",
            },
            RequestID: sdk.String("mollitia"),
        },
        AccessToken: sdk.String("dolorem"),
        AddressGroup: "culpa",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repellat"),
        Fields: sdk.String("mollitia"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("numquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("quam"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.NetworksecurityProjectsLocationsAddressGroupsRemoveItemsSecurity{
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
            Action: shared.AuthorizationPolicyActionEnumAllow.ToPointer(),
            Description: sdk.String("quia"),
            Labels: map[string]string{
                "vitae": "laborum",
                "animi": "enim",
            },
            Name: sdk.String("Angelica Dietrich"),
            Rules: []shared.Rule{
                shared.Rule{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Hosts: []string{
                                "quasi",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: sdk.String("error"),
                                RegexMatch: sdk.String("temporibus"),
                            },
                            Methods: []string{
                                "quasi",
                                "reiciendis",
                                "voluptatibus",
                            },
                            Ports: []int64{
                                468651,
                                509624,
                                976762,
                                55714,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "voluptate",
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
                        shared.Destination{
                            Hosts: []string{
                                "excepturi",
                                "pariatur",
                                "modi",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: sdk.String("praesentium"),
                                RegexMatch: sdk.String("rem"),
                            },
                            Methods: []string{
                                "quasi",
                                "repudiandae",
                                "sint",
                                "veritatis",
                            },
                            Ports: []int64{
                                277718,
                                318569,
                                9356,
                                667411,
                            },
                        },
                    },
                    Sources: []shared.Source{
                        shared.Source{
                            IPBlocks: []string{
                                "deserunt",
                            },
                            Principals: []string{
                                "quibusdam",
                                "labore",
                                "modi",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "aliquid",
                            },
                            Principals: []string{
                                "quos",
                                "perferendis",
                                "magni",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "ipsam",
                                "alias",
                                "fugit",
                                "dolorum",
                            },
                            Principals: []string{
                                "tempora",
                                "facilis",
                                "tempore",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "delectus",
                                "eum",
                            },
                            Principals: []string{
                                "eligendi",
                            },
                        },
                    },
                },
                shared.Rule{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Hosts: []string{
                                "provident",
                                "necessitatibus",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: sdk.String("sint"),
                                RegexMatch: sdk.String("officia"),
                            },
                            Methods: []string{
                                "debitis",
                            },
                            Ports: []int64{
                                680056,
                                447125,
                                449198,
                                846409,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "rerum",
                                "dicta",
                                "magnam",
                                "cumque",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: sdk.String("facere"),
                                RegexMatch: sdk.String("ea"),
                            },
                            Methods: []string{
                                "laborum",
                                "accusamus",
                            },
                            Ports: []int64{
                                581273,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "accusamus",
                                "delectus",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: sdk.String("quidem"),
                                RegexMatch: sdk.String("provident"),
                            },
                            Methods: []string{
                                "id",
                                "blanditiis",
                                "deleniti",
                            },
                            Ports: []int64{
                                230533,
                                643990,
                                394869,
                                423855,
                            },
                        },
                    },
                    Sources: []shared.Source{
                        shared.Source{
                            IPBlocks: []string{
                                "molestiae",
                                "perferendis",
                                "nihil",
                            },
                            Principals: []string{
                                "distinctio",
                                "id",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "labore",
                                "suscipit",
                            },
                            Principals: []string{
                                "nobis",
                                "eum",
                                "vero",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "architecto",
                            },
                            Principals: []string{
                                "et",
                                "excepturi",
                            },
                        },
                    },
                },
                shared.Rule{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Hosts: []string{
                                "quos",
                                "sint",
                                "accusantium",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: sdk.String("mollitia"),
                                RegexMatch: sdk.String("reiciendis"),
                            },
                            Methods: []string{
                                "ad",
                                "eum",
                                "dolor",
                            },
                            Ports: []int64{
                                141264,
                                367562,
                                97260,
                                435865,
                            },
                        },
                        shared.Destination{
                            Hosts: []string{
                                "debitis",
                                "eius",
                                "maxime",
                                "deleniti",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: sdk.String("facilis"),
                                RegexMatch: sdk.String("in"),
                            },
                            Methods: []string{
                                "architecto",
                            },
                            Ports: []int64{
                                352312,
                                714242,
                                469249,
                                998848,
                            },
                        },
                    },
                    Sources: []shared.Source{
                        shared.Source{
                            IPBlocks: []string{
                                "saepe",
                            },
                            Principals: []string{
                                "accusantium",
                                "consequuntur",
                                "praesentium",
                                "natus",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "sunt",
                            },
                            Principals: []string{
                                "illum",
                                "pariatur",
                                "maxime",
                                "ea",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "odit",
                                "ea",
                                "accusantium",
                            },
                            Principals: []string{
                                "maiores",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "ipsam",
                                "voluptate",
                                "autem",
                            },
                            Principals: []string{
                                "eaque",
                                "pariatur",
                                "nemo",
                            },
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AuthorizationPolicyID: sdk.String("fugiat"),
        Callback: sdk.String("amet"),
        Fields: sdk.String("aut"),
        Key: sdk.String("cumque"),
        OauthToken: sdk.String("corporis"),
        Parent: "hic",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("libero"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("dolores"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eaque"),
        Fields: sdk.String("quis"),
        Key: sdk.String("nesciunt"),
        OauthToken: sdk.String("eos"),
        PageSize: sdk.Int64(18521),
        PageToken: sdk.String("dolores"),
        Parent: "minus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quam"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("vero"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ClientTLSPolicyInput: &shared.ClientTLSPolicyInput{
            ClientCertificate: &shared.GoogleCloudNetworksecurityV1beta1CertificateProvider{
                CertificateProviderInstance: &shared.CertificateProviderInstance{
                    PluginInstance: sdk.String("hic"),
                },
                GrpcEndpoint: &shared.GoogleCloudNetworksecurityV1beta1GrpcEndpoint{
                    TargetURI: sdk.String("recusandae"),
                },
            },
            Description: sdk.String("omnis"),
            Labels: map[string]string{
                "perspiciatis": "voluptatem",
                "porro": "consequuntur",
                "blanditiis": "error",
            },
            Name: sdk.String("Violet Price"),
            ServerValidationCa: []shared.ValidationCA{
                shared.ValidationCA{
                    CertificateProviderInstance: &shared.CertificateProviderInstance{
                        PluginInstance: sdk.String("modi"),
                    },
                    GrpcEndpoint: &shared.GoogleCloudNetworksecurityV1beta1GrpcEndpoint{
                        TargetURI: sdk.String("iste"),
                    },
                },
                shared.ValidationCA{
                    CertificateProviderInstance: &shared.CertificateProviderInstance{
                        PluginInstance: sdk.String("dolorum"),
                    },
                    GrpcEndpoint: &shared.GoogleCloudNetworksecurityV1beta1GrpcEndpoint{
                        TargetURI: sdk.String("deleniti"),
                    },
                },
                shared.ValidationCA{
                    CertificateProviderInstance: &shared.CertificateProviderInstance{
                        PluginInstance: sdk.String("pariatur"),
                    },
                    GrpcEndpoint: &shared.GoogleCloudNetworksecurityV1beta1GrpcEndpoint{
                        TargetURI: sdk.String("provident"),
                    },
                },
                shared.ValidationCA{
                    CertificateProviderInstance: &shared.CertificateProviderInstance{
                        PluginInstance: sdk.String("nobis"),
                    },
                    GrpcEndpoint: &shared.GoogleCloudNetworksecurityV1beta1GrpcEndpoint{
                        TargetURI: sdk.String("libero"),
                    },
                },
            },
            Sni: sdk.String("delectus"),
        },
        AccessToken: sdk.String("quaerat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aliquid"),
        ClientTLSPolicyID: sdk.String("dolorem"),
        Fields: sdk.String("dolorem"),
        Key: sdk.String("dolor"),
        OauthToken: sdk.String("qui"),
        Parent: "ipsum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("cum"),
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
        AccessToken: sdk.String("dignissimos"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("numquam"),
        OauthToken: sdk.String("veritatis"),
        PageSize: sdk.Int64(58029),
        PageToken: sdk.String("ipsa"),
        Parent: "iure",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odio"),
        UploadType: sdk.String("quaerat"),
        UploadProtocol: sdk.String("accusamus"),
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
            Description: sdk.String("voluptatibus"),
            Name: sdk.String("Faye Daugherty PhD"),
            TLSInspectionPolicy: sdk.String("ab"),
        },
        AccessToken: sdk.String("soluta"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("iusto"),
        Fields: sdk.String("voluptate"),
        GatewaySecurityPolicyID: sdk.String("dolorum"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("omnis"),
        Parent: "necessitatibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        UploadType: sdk.String("asperiores"),
        UploadProtocol: sdk.String("nihil"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("eius"),
        Key: sdk.String("aspernatur"),
        OauthToken: sdk.String("perferendis"),
        PageSize: sdk.Int64(229219),
        PageToken: sdk.String("optio"),
        Parent: "accusamus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ad"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("suscipit"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GatewaySecurityPolicyRuleInput: &shared.GatewaySecurityPolicyRuleInput{
            ApplicationMatcher: sdk.String("provident"),
            BasicProfile: shared.GatewaySecurityPolicyRuleBasicProfileEnumBasicProfileUnspecified.ToPointer(),
            Description: sdk.String("repellendus"),
            Enabled: sdk.Bool(false),
            Name: sdk.String("Donnie Abbott"),
            Priority: sdk.Int(273542),
            SessionMatcher: sdk.String("vel"),
            TLSInspectionEnabled: sdk.Bool(false),
        },
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("dolorum"),
        GatewaySecurityPolicyRuleID: sdk.String("a"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("harum"),
        Parent: "iusto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("quisquam"),
        UploadProtocol: sdk.String("tenetur"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("tempore"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("numquam"),
        Fields: sdk.String("enim"),
        Key: sdk.String("dolorem"),
        OauthToken: sdk.String("sapiente"),
        PageSize: sdk.Int64(518201),
        PageToken: sdk.String("nihil"),
        Parent: "sit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("expedita"),
        UploadType: sdk.String("neque"),
        UploadProtocol: sdk.String("sed"),
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
        AccessToken: sdk.String("libero"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("quam"),
        Filter: sdk.String("ipsum"),
        Key: sdk.String("incidunt"),
        Name: "Shelly Schoen",
        OauthToken: sdk.String("dicta"),
        PageSize: sdk.Int64(674848),
        PageToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("incidunt"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("dolores"),
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
            "aliquid": "quam",
            "molestias": "temporibus",
            "qui": "neque",
        },
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("odio"),
        Fields: sdk.String("sunt"),
        Key: sdk.String("ullam"),
        Name: "Terrell Bartell",
        OauthToken: sdk.String("nobis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("et"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("ipsum"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tempore"),
        Fields: sdk.String("cupiditate"),
        Filter: sdk.String("aperiam"),
        Key: sdk.String("delectus"),
        Name: "Joanne Grant",
        OauthToken: sdk.String("architecto"),
        PageSize: sdk.Int64(63038),
        PageToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quas"),
        UploadType: sdk.String("itaque"),
        UploadProtocol: sdk.String("consequatur"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ServerTLSPolicyInput: &shared.ServerTLSPolicyInput{
            AllowOpen: sdk.Bool(false),
            Description: sdk.String("repellendus"),
            Labels: map[string]string{
                "doloribus": "ut",
                "facilis": "cupiditate",
                "qui": "quae",
                "laudantium": "odio",
            },
            MtlsPolicy: &shared.MTLSPolicy{
                ClientValidationCa: []shared.ValidationCA{
                    shared.ValidationCA{
                        CertificateProviderInstance: &shared.CertificateProviderInstance{
                            PluginInstance: sdk.String("voluptatibus"),
                        },
                        GrpcEndpoint: &shared.GoogleCloudNetworksecurityV1beta1GrpcEndpoint{
                            TargetURI: sdk.String("quisquam"),
                        },
                    },
                    shared.ValidationCA{
                        CertificateProviderInstance: &shared.CertificateProviderInstance{
                            PluginInstance: sdk.String("vero"),
                        },
                        GrpcEndpoint: &shared.GoogleCloudNetworksecurityV1beta1GrpcEndpoint{
                            TargetURI: sdk.String("omnis"),
                        },
                    },
                    shared.ValidationCA{
                        CertificateProviderInstance: &shared.CertificateProviderInstance{
                            PluginInstance: sdk.String("quis"),
                        },
                        GrpcEndpoint: &shared.GoogleCloudNetworksecurityV1beta1GrpcEndpoint{
                            TargetURI: sdk.String("ipsum"),
                        },
                    },
                },
                ClientValidationMode: shared.MTLSPolicyClientValidationModeEnumRejectInvalid.ToPointer(),
                ClientValidationTrustConfig: sdk.String("voluptate"),
            },
            Name: sdk.String("Meghan Wiegand"),
            ServerCertificate: &shared.GoogleCloudNetworksecurityV1beta1CertificateProvider{
                CertificateProviderInstance: &shared.CertificateProviderInstance{
                    PluginInstance: sdk.String("distinctio"),
                },
                GrpcEndpoint: &shared.GoogleCloudNetworksecurityV1beta1GrpcEndpoint{
                    TargetURI: sdk.String("quod"),
                },
            },
        },
        AccessToken: sdk.String("odio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("vero"),
        Key: sdk.String("ducimus"),
        OauthToken: sdk.String("dolore"),
        Parent: "quibusdam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illum"),
        ServerTLSPolicyID: sdk.String("sequi"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("impedit"),
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
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nulla"),
        Fields: sdk.String("fugit"),
        Key: sdk.String("porro"),
        OauthToken: sdk.String("maiores"),
        OptionsRequestedPolicyVersion: sdk.Int64(985033),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        Resource: "eligendi",
        UploadType: sdk.String("ducimus"),
        UploadProtocol: sdk.String("alias"),
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
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ea"),
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("vel"),
        OauthToken: sdk.String("possimus"),
        PageSize: sdk.Int64(297842),
        PageToken: sdk.String("ratione"),
        Parent: "ex",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laudantium"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("dolor"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleIamV1SetIamPolicyRequest: &shared.GoogleIamV1SetIamPolicyRequest{
            Policy: &shared.GoogleIamV1Policy{
                AuditConfigs: []shared.GoogleIamV1AuditConfig{
                    shared.GoogleIamV1AuditConfig{
                        AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "excepturi",
                                    "voluptatibus",
                                    "nostrum",
                                    "sapiente",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "ea",
                                    "impedit",
                                    "corporis",
                                    "veniam",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("inventore"),
                    },
                },
                Bindings: []shared.GoogleIamV1Binding{
                    shared.GoogleIamV1Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("ea"),
                            Expression: sdk.String("quo"),
                            Location: sdk.String("consectetur"),
                            Title: sdk.String("Dr."),
                        },
                        Members: []string{
                            "minima",
                        },
                        Role: sdk.String("eaque"),
                    },
                    shared.GoogleIamV1Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("a"),
                            Expression: sdk.String("libero"),
                            Location: sdk.String("aut"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "impedit",
                            "aliquam",
                            "fugit",
                        },
                        Role: sdk.String("accusamus"),
                    },
                },
                Etag: sdk.String("inventore"),
                Version: sdk.Int(250622),
            },
            UpdateMask: sdk.String("et"),
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("placeat"),
        Fields: sdk.String("velit"),
        Key: sdk.String("eum"),
        OauthToken: sdk.String("autem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        Resource: "quas",
        UploadType: sdk.String("assumenda"),
        UploadProtocol: sdk.String("nulla"),
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
                "quasi",
                "tempora",
                "numquam",
            },
        },
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("odio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eius"),
        Resource: "esse",
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("rem"),
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
            CaPool: sdk.String("reprehenderit"),
            Description: sdk.String("quidem"),
            Name: sdk.String("Bernard Kerluke"),
        },
        AccessToken: sdk.String("eos"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quisquam"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("id"),
        Parent: "quidem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("neque"),
        TLSInspectionPolicyID: sdk.String("quo"),
        UploadType: sdk.String("illum"),
        UploadProtocol: sdk.String("quo"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("eius"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("ab"),
        Key: sdk.String("cupiditate"),
        OauthToken: sdk.String("consequatur"),
        PageSize: sdk.Int64(272822),
        PageToken: sdk.String("debitis"),
        Parent: "ipsam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("sequi"),
        UploadProtocol: sdk.String("quo"),
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
            Description: sdk.String("recusandae"),
            Name: sdk.String("Lola Schmidt IV"),
            Values: []string{
                "accusamus",
                "aliquam",
                "odio",
            },
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("dolores"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("molestiae"),
        Parent: "accusantium",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("quas"),
        URLListID: sdk.String("praesentium"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fuga"),
        Fields: sdk.String("mollitia"),
        Force: sdk.Bool(false),
        Key: sdk.String("incidunt"),
        Name: "Roy Hansen",
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        UploadType: sdk.String("ratione"),
        UploadProtocol: sdk.String("explicabo"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("et"),
        Fields: sdk.String("esse"),
        Key: sdk.String("eveniet"),
        Name: "Patrick Koch",
        OauthToken: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("saepe"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("harum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("rerum"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("minima"),
        OauthToken: sdk.String("distinctio"),
        PageSize: sdk.Int64(756779),
        PageToken: sdk.String("sit"),
        Parent: "culpa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempore"),
        UploadType: sdk.String("adipisci"),
        UploadProtocol: sdk.String("cumque"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        URLListInput: &shared.URLListInput{
            Description: sdk.String("consequatur"),
            Name: sdk.String("Calvin Williamson"),
            Values: []string{
                "provident",
                "a",
                "nulla",
            },
        },
        AccessToken: sdk.String("quas"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("a"),
        Key: sdk.String("error"),
        Name: "Jody Schuster",
        OauthToken: sdk.String("asperiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facere"),
        UpdateMask: sdk.String("veritatis"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("quasi"),
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
