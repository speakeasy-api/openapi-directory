# Policies

### Available Operations

* [DNSPoliciesCreate](#dnspoliciescreate) - Creates a new Policy.
* [DNSPoliciesDelete](#dnspoliciesdelete) - Deletes a previously created Policy. Fails if the policy is still being referenced by a network.
* [DNSPoliciesGet](#dnspoliciesget) - Fetches the representation of an existing Policy.
* [DNSPoliciesList](#dnspolicieslist) - Enumerates all Policies associated with a project.
* [DNSPoliciesPatch](#dnspoliciespatch) - Applies a partial update to an existing Policy.
* [DNSPoliciesUpdate](#dnspoliciesupdate) - Updates an existing Policy.

## DNSPoliciesCreate

Creates a new Policy.

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
    res, err := s.Policies.DNSPoliciesCreate(ctx, operations.DNSPoliciesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Policy: &shared.Policy{
            AlternativeNameServerConfig: &shared.PolicyAlternativeNameServerConfig{
                Kind: sdk.String("doloremque"),
                TargetNameServers: []shared.PolicyAlternativeNameServerConfigTargetNameServer{
                    shared.PolicyAlternativeNameServerConfigTargetNameServer{
                        ForwardingPath: shared.PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumPrivate.ToPointer(),
                        Ipv4Address: sdk.String("eaque"),
                        Ipv6Address: sdk.String("deserunt"),
                        Kind: sdk.String("aliquid"),
                    },
                    shared.PolicyAlternativeNameServerConfigTargetNameServer{
                        ForwardingPath: shared.PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumPrivate.ToPointer(),
                        Ipv4Address: sdk.String("magni"),
                        Ipv6Address: sdk.String("tempora"),
                        Kind: sdk.String("possimus"),
                    },
                    shared.PolicyAlternativeNameServerConfigTargetNameServer{
                        ForwardingPath: shared.PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumDefault.ToPointer(),
                        Ipv4Address: sdk.String("rerum"),
                        Ipv6Address: sdk.String("sed"),
                        Kind: sdk.String("accusamus"),
                    },
                },
            },
            Description: sdk.String("optio"),
            EnableInboundForwarding: sdk.Bool(false),
            EnableLogging: sdk.Bool(false),
            ID: sdk.String("delectus"),
            Kind: sdk.String("minus"),
            Name: sdk.String("Julian Ziemann"),
            Networks: []shared.PolicyNetwork{
                shared.PolicyNetwork{
                    Kind: sdk.String("accusantium"),
                    NetworkURL: sdk.String("illo"),
                },
                shared.PolicyNetwork{
                    Kind: sdk.String("aut"),
                    NetworkURL: sdk.String("doloribus"),
                },
            },
        },
        AccessToken: sdk.String("nostrum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("possimus"),
        ClientOperationID: sdk.String("neque"),
        Fields: sdk.String("pariatur"),
        Key: sdk.String("vel"),
        Location: "sapiente",
        OauthToken: sdk.String("mollitia"),
        PrettyPrint: sdk.Bool(false),
        Project: "quae",
        QuotaUser: sdk.String("quos"),
        UploadType: sdk.String("aperiam"),
        UploadProtocol: sdk.String("non"),
    }, operations.DNSPoliciesCreateSecurity{
        Option1: &operations.DNSPoliciesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## DNSPoliciesDelete

Deletes a previously created Policy. Fails if the policy is still being referenced by a network.

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
    res, err := s.Policies.DNSPoliciesDelete(ctx, operations.DNSPoliciesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ad"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quisquam"),
        ClientOperationID: sdk.String("quas"),
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("maiores"),
        Location: "inventore",
        OauthToken: sdk.String("aliquid"),
        Policy: "laudantium",
        PrettyPrint: sdk.Bool(false),
        Project: "est",
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("consectetur"),
    }, operations.DNSPoliciesDeleteSecurity{
        Option1: &operations.DNSPoliciesDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DNSPoliciesGet

Fetches the representation of an existing Policy.

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
    res, err := s.Policies.DNSPoliciesGet(ctx, operations.DNSPoliciesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("rem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ducimus"),
        ClientOperationID: sdk.String("adipisci"),
        Fields: sdk.String("recusandae"),
        Key: sdk.String("tempora"),
        Location: "blanditiis",
        OauthToken: sdk.String("numquam"),
        Policy: "sequi",
        PrettyPrint: sdk.Bool(false),
        Project: "voluptatum",
        QuotaUser: sdk.String("sit"),
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("veritatis"),
    }, operations.DNSPoliciesGetSecurity{
        Option1: &operations.DNSPoliciesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## DNSPoliciesList

Enumerates all Policies associated with a project.

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
    res, err := s.Policies.DNSPoliciesList(ctx, operations.DNSPoliciesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("autem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("porro"),
        Key: sdk.String("deserunt"),
        Location: "magni",
        MaxResults: sdk.Int64(471207),
        OauthToken: sdk.String("voluptas"),
        PageToken: sdk.String("animi"),
        PrettyPrint: sdk.Bool(false),
        Project: "commodi",
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("aut"),
    }, operations.DNSPoliciesListSecurity{
        Option1: &operations.DNSPoliciesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PoliciesListResponse != nil {
        // handle response
    }
}
```

## DNSPoliciesPatch

Applies a partial update to an existing Policy.

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
    res, err := s.Policies.DNSPoliciesPatch(ctx, operations.DNSPoliciesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Policy1: &shared.Policy{
            AlternativeNameServerConfig: &shared.PolicyAlternativeNameServerConfig{
                Kind: sdk.String("maxime"),
                TargetNameServers: []shared.PolicyAlternativeNameServerConfigTargetNameServer{
                    shared.PolicyAlternativeNameServerConfigTargetNameServer{
                        ForwardingPath: shared.PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumPrivate.ToPointer(),
                        Ipv4Address: sdk.String("ullam"),
                        Ipv6Address: sdk.String("eligendi"),
                        Kind: sdk.String("placeat"),
                    },
                    shared.PolicyAlternativeNameServerConfigTargetNameServer{
                        ForwardingPath: shared.PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumDefault.ToPointer(),
                        Ipv4Address: sdk.String("occaecati"),
                        Ipv6Address: sdk.String("unde"),
                        Kind: sdk.String("illo"),
                    },
                },
            },
            Description: sdk.String("nihil"),
            EnableInboundForwarding: sdk.Bool(false),
            EnableLogging: sdk.Bool(false),
            ID: sdk.String("inventore"),
            Kind: sdk.String("libero"),
            Name: sdk.String("Miss Joyce Runolfsson"),
            Networks: []shared.PolicyNetwork{
                shared.PolicyNetwork{
                    Kind: sdk.String("beatae"),
                    NetworkURL: sdk.String("cumque"),
                },
                shared.PolicyNetwork{
                    Kind: sdk.String("delectus"),
                    NetworkURL: sdk.String("labore"),
                },
                shared.PolicyNetwork{
                    Kind: sdk.String("expedita"),
                    NetworkURL: sdk.String("corrupti"),
                },
            },
        },
        AccessToken: sdk.String("rem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("officiis"),
        ClientOperationID: sdk.String("cum"),
        Fields: sdk.String("pariatur"),
        Key: sdk.String("sapiente"),
        Location: "quo",
        OauthToken: sdk.String("incidunt"),
        PolicyPathParameter: "quod",
        PrettyPrint: sdk.Bool(false),
        Project: "minus",
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.DNSPoliciesPatchSecurity{
        Option1: &operations.DNSPoliciesPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PoliciesPatchResponse != nil {
        // handle response
    }
}
```

## DNSPoliciesUpdate

Updates an existing Policy.

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
    res, err := s.Policies.DNSPoliciesUpdate(ctx, operations.DNSPoliciesUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Policy1: &shared.Policy{
            AlternativeNameServerConfig: &shared.PolicyAlternativeNameServerConfig{
                Kind: sdk.String("libero"),
                TargetNameServers: []shared.PolicyAlternativeNameServerConfigTargetNameServer{
                    shared.PolicyAlternativeNameServerConfigTargetNameServer{
                        ForwardingPath: shared.PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumDefault.ToPointer(),
                        Ipv4Address: sdk.String("hic"),
                        Ipv6Address: sdk.String("maxime"),
                        Kind: sdk.String("accusantium"),
                    },
                    shared.PolicyAlternativeNameServerConfigTargetNameServer{
                        ForwardingPath: shared.PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumPrivate.ToPointer(),
                        Ipv4Address: sdk.String("fugit"),
                        Ipv6Address: sdk.String("pariatur"),
                        Kind: sdk.String("eligendi"),
                    },
                    shared.PolicyAlternativeNameServerConfigTargetNameServer{
                        ForwardingPath: shared.PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumPrivate.ToPointer(),
                        Ipv4Address: sdk.String("veritatis"),
                        Ipv6Address: sdk.String("aut"),
                        Kind: sdk.String("laudantium"),
                    },
                    shared.PolicyAlternativeNameServerConfigTargetNameServer{
                        ForwardingPath: shared.PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumDefault.ToPointer(),
                        Ipv4Address: sdk.String("dolor"),
                        Ipv6Address: sdk.String("voluptates"),
                        Kind: sdk.String("tempora"),
                    },
                },
            },
            Description: sdk.String("magni"),
            EnableInboundForwarding: sdk.Bool(false),
            EnableLogging: sdk.Bool(false),
            ID: sdk.String("rerum"),
            Kind: sdk.String("doloremque"),
            Name: sdk.String("Natalie Swift"),
            Networks: []shared.PolicyNetwork{
                shared.PolicyNetwork{
                    Kind: sdk.String("blanditiis"),
                    NetworkURL: sdk.String("nihil"),
                },
                shared.PolicyNetwork{
                    Kind: sdk.String("atque"),
                    NetworkURL: sdk.String("rerum"),
                },
                shared.PolicyNetwork{
                    Kind: sdk.String("deserunt"),
                    NetworkURL: sdk.String("atque"),
                },
            },
        },
        AccessToken: sdk.String("nostrum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("architecto"),
        ClientOperationID: sdk.String("est"),
        Fields: sdk.String("enim"),
        Key: sdk.String("rem"),
        Location: "magni",
        OauthToken: sdk.String("quae"),
        PolicyPathParameter: "quas",
        PrettyPrint: sdk.Bool(false),
        Project: "placeat",
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.DNSPoliciesUpdateSecurity{
        Option1: &operations.DNSPoliciesUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PoliciesUpdateResponse != nil {
        // handle response
    }
}
```
