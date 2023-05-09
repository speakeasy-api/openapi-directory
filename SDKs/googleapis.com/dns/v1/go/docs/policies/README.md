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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Policy: &shared.Policy{
            AlternativeNameServerConfig: &shared.PolicyAlternativeNameServerConfig{
                Kind: sdk.String("architecto"),
                TargetNameServers: []shared.PolicyAlternativeNameServerConfigTargetNameServer{
                    shared.PolicyAlternativeNameServerConfigTargetNameServer{
                        ForwardingPath: shared.PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumPrivate.ToPointer(),
                        Ipv4Address: sdk.String("dolor"),
                        Ipv6Address: sdk.String("expedita"),
                        Kind: sdk.String("libero"),
                    },
                    shared.PolicyAlternativeNameServerConfigTargetNameServer{
                        ForwardingPath: shared.PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumPrivate.ToPointer(),
                        Ipv4Address: sdk.String("illo"),
                        Ipv6Address: sdk.String("minus"),
                        Kind: sdk.String("quos"),
                    },
                    shared.PolicyAlternativeNameServerConfigTargetNameServer{
                        ForwardingPath: shared.PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumPrivate.ToPointer(),
                        Ipv4Address: sdk.String("sint"),
                        Ipv6Address: sdk.String("iusto"),
                        Kind: sdk.String("enim"),
                    },
                },
            },
            Description: sdk.String("accusamus"),
            EnableInboundForwarding: sdk.Bool(false),
            EnableLogging: sdk.Bool(false),
            ID: sdk.String("aperiam"),
            Kind: sdk.String("voluptates"),
            Name: sdk.String("Eddie Bergnaum"),
            Networks: []shared.PolicyNetwork{
                shared.PolicyNetwork{
                    Kind: sdk.String("tenetur"),
                    NetworkURL: sdk.String("deleniti"),
                },
                shared.PolicyNetwork{
                    Kind: sdk.String("modi"),
                    NetworkURL: sdk.String("earum"),
                },
                shared.PolicyNetwork{
                    Kind: sdk.String("architecto"),
                    NetworkURL: sdk.String("aliquam"),
                },
            },
        },
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sequi"),
        ClientOperationID: sdk.String("saepe"),
        Fields: sdk.String("consequatur"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        Project: "facere",
        QuotaUser: sdk.String("quisquam"),
        UploadType: sdk.String("cumque"),
        UploadProtocol: sdk.String("aliquam"),
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
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("reiciendis"),
        ClientOperationID: sdk.String("sequi"),
        Fields: sdk.String("porro"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("nobis"),
        Policy: "quibusdam",
        PrettyPrint: sdk.Bool(false),
        Project: "omnis",
        QuotaUser: sdk.String("aut"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("officia"),
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
        AccessToken: sdk.String("reprehenderit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        ClientOperationID: sdk.String("accusantium"),
        Fields: sdk.String("ad"),
        Key: sdk.String("nisi"),
        OauthToken: sdk.String("molestiae"),
        Policy: "quia",
        PrettyPrint: sdk.Bool(false),
        Project: "laudantium",
        QuotaUser: sdk.String("sed"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("iusto"),
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
        AccessToken: sdk.String("eos"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nesciunt"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("sint"),
        MaxResults: sdk.Int64(291389),
        OauthToken: sdk.String("esse"),
        PageToken: sdk.String("accusantium"),
        PrettyPrint: sdk.Bool(false),
        Project: "distinctio",
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("quam"),
        UploadProtocol: sdk.String("est"),
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
                Kind: sdk.String("delectus"),
                TargetNameServers: []shared.PolicyAlternativeNameServerConfigTargetNameServer{
                    shared.PolicyAlternativeNameServerConfigTargetNameServer{
                        ForwardingPath: shared.PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumPrivate.ToPointer(),
                        Ipv4Address: sdk.String("iusto"),
                        Ipv6Address: sdk.String("quod"),
                        Kind: sdk.String("voluptatibus"),
                    },
                    shared.PolicyAlternativeNameServerConfigTargetNameServer{
                        ForwardingPath: shared.PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumDefault.ToPointer(),
                        Ipv4Address: sdk.String("non"),
                        Ipv6Address: sdk.String("ullam"),
                        Kind: sdk.String("laborum"),
                    },
                    shared.PolicyAlternativeNameServerConfigTargetNameServer{
                        ForwardingPath: shared.PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumDefault.ToPointer(),
                        Ipv4Address: sdk.String("doloribus"),
                        Ipv6Address: sdk.String("animi"),
                        Kind: sdk.String("recusandae"),
                    },
                },
            },
            Description: sdk.String("corporis"),
            EnableInboundForwarding: sdk.Bool(false),
            EnableLogging: sdk.Bool(false),
            ID: sdk.String("non"),
            Kind: sdk.String("necessitatibus"),
            Name: sdk.String("Miss Cary Howe"),
            Networks: []shared.PolicyNetwork{
                shared.PolicyNetwork{
                    Kind: sdk.String("vitae"),
                    NetworkURL: sdk.String("voluptatibus"),
                },
            },
        },
        AccessToken: sdk.String("doloremque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("amet"),
        ClientOperationID: sdk.String("rerum"),
        Fields: sdk.String("in"),
        Key: sdk.String("nostrum"),
        OauthToken: sdk.String("temporibus"),
        PolicyPathParameter: "ratione",
        PrettyPrint: sdk.Bool(false),
        Project: "dolor",
        QuotaUser: sdk.String("nisi"),
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("reiciendis"),
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
                Kind: sdk.String("vitae"),
                TargetNameServers: []shared.PolicyAlternativeNameServerConfigTargetNameServer{
                    shared.PolicyAlternativeNameServerConfigTargetNameServer{
                        ForwardingPath: shared.PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumDefault.ToPointer(),
                        Ipv4Address: sdk.String("quod"),
                        Ipv6Address: sdk.String("minus"),
                        Kind: sdk.String("quos"),
                    },
                    shared.PolicyAlternativeNameServerConfigTargetNameServer{
                        ForwardingPath: shared.PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumPrivate.ToPointer(),
                        Ipv4Address: sdk.String("maiores"),
                        Ipv6Address: sdk.String("odio"),
                        Kind: sdk.String("provident"),
                    },
                    shared.PolicyAlternativeNameServerConfigTargetNameServer{
                        ForwardingPath: shared.PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumPrivate.ToPointer(),
                        Ipv4Address: sdk.String("aperiam"),
                        Ipv6Address: sdk.String("similique"),
                        Kind: sdk.String("nesciunt"),
                    },
                },
            },
            Description: sdk.String("provident"),
            EnableInboundForwarding: sdk.Bool(false),
            EnableLogging: sdk.Bool(false),
            ID: sdk.String("ex"),
            Kind: sdk.String("repellendus"),
            Name: sdk.String("James Rutherford"),
            Networks: []shared.PolicyNetwork{
                shared.PolicyNetwork{
                    Kind: sdk.String("expedita"),
                    NetworkURL: sdk.String("in"),
                },
                shared.PolicyNetwork{
                    Kind: sdk.String("quisquam"),
                    NetworkURL: sdk.String("sunt"),
                },
            },
        },
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("maiores"),
        ClientOperationID: sdk.String("distinctio"),
        Fields: sdk.String("mollitia"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("accusamus"),
        PolicyPathParameter: "et",
        PrettyPrint: sdk.Bool(false),
        Project: "quas",
        QuotaUser: sdk.String("blanditiis"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("dicta"),
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
