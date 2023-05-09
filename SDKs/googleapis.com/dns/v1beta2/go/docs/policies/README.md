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
                Kind: sdk.String("modi"),
                TargetNameServers: []shared.PolicyAlternativeNameServerConfigTargetNameServer{
                    shared.PolicyAlternativeNameServerConfigTargetNameServer{
                        ForwardingPath: shared.PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumPrivate.ToPointer(),
                        Ipv4Address: sdk.String("aliquid"),
                        Ipv6Address: sdk.String("optio"),
                        Kind: sdk.String("adipisci"),
                    },
                },
            },
            Description: sdk.String("ab"),
            EnableInboundForwarding: sdk.Bool(false),
            EnableLogging: sdk.Bool(false),
            ID: sdk.String("maxime"),
            Kind: sdk.String("porro"),
            Name: sdk.String("Lela Cartwright"),
            Networks: []shared.PolicyNetwork{
                shared.PolicyNetwork{
                    Kind: sdk.String("ullam"),
                    NetworkURL: sdk.String("sunt"),
                },
                shared.PolicyNetwork{
                    Kind: sdk.String("quisquam"),
                    NetworkURL: sdk.String("sint"),
                },
                shared.PolicyNetwork{
                    Kind: sdk.String("id"),
                    NetworkURL: sdk.String("ut"),
                },
            },
        },
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("reiciendis"),
        ClientOperationID: sdk.String("distinctio"),
        Fields: sdk.String("itaque"),
        Key: sdk.String("iste"),
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        Project: "quidem",
        QuotaUser: sdk.String("temporibus"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("natus"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("commodi"),
        ClientOperationID: sdk.String("veniam"),
        Fields: sdk.String("debitis"),
        Key: sdk.String("doloremque"),
        OauthToken: sdk.String("esse"),
        Policy: "aliquid",
        PrettyPrint: sdk.Bool(false),
        Project: "porro",
        QuotaUser: sdk.String("quisquam"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("mollitia"),
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
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("beatae"),
        ClientOperationID: sdk.String("suscipit"),
        Fields: sdk.String("eveniet"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("ipsam"),
        Policy: "porro",
        PrettyPrint: sdk.Bool(false),
        Project: "molestiae",
        QuotaUser: sdk.String("inventore"),
        UploadType: sdk.String("vel"),
        UploadProtocol: sdk.String("modi"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolore"),
        Fields: sdk.String("soluta"),
        Key: sdk.String("occaecati"),
        MaxResults: sdk.Int64(23007),
        OauthToken: sdk.String("asperiores"),
        PageToken: sdk.String("aspernatur"),
        PrettyPrint: sdk.Bool(false),
        Project: "officiis",
        QuotaUser: sdk.String("sit"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("nulla"),
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
                Kind: sdk.String("natus"),
                TargetNameServers: []shared.PolicyAlternativeNameServerConfigTargetNameServer{
                    shared.PolicyAlternativeNameServerConfigTargetNameServer{
                        ForwardingPath: shared.PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumDefault.ToPointer(),
                        Ipv4Address: sdk.String("a"),
                        Ipv6Address: sdk.String("cumque"),
                        Kind: sdk.String("explicabo"),
                    },
                    shared.PolicyAlternativeNameServerConfigTargetNameServer{
                        ForwardingPath: shared.PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumPrivate.ToPointer(),
                        Ipv4Address: sdk.String("natus"),
                        Ipv6Address: sdk.String("earum"),
                        Kind: sdk.String("fugit"),
                    },
                    shared.PolicyAlternativeNameServerConfigTargetNameServer{
                        ForwardingPath: shared.PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumPrivate.ToPointer(),
                        Ipv4Address: sdk.String("vitae"),
                        Ipv6Address: sdk.String("consequatur"),
                        Kind: sdk.String("nemo"),
                    },
                    shared.PolicyAlternativeNameServerConfigTargetNameServer{
                        ForwardingPath: shared.PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumPrivate.ToPointer(),
                        Ipv4Address: sdk.String("numquam"),
                        Ipv6Address: sdk.String("numquam"),
                        Kind: sdk.String("tempore"),
                    },
                },
            },
            Description: sdk.String("molestias"),
            EnableInboundForwarding: sdk.Bool(false),
            EnableLogging: sdk.Bool(false),
            ID: sdk.String("amet"),
            Kind: sdk.String("enim"),
            Name: sdk.String("Aaron Fisher"),
            Networks: []shared.PolicyNetwork{
                shared.PolicyNetwork{
                    Kind: sdk.String("dolores"),
                    NetworkURL: sdk.String("asperiores"),
                },
                shared.PolicyNetwork{
                    Kind: sdk.String("occaecati"),
                    NetworkURL: sdk.String("doloremque"),
                },
            },
        },
        AccessToken: sdk.String("blanditiis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("excepturi"),
        ClientOperationID: sdk.String("fugiat"),
        Fields: sdk.String("laboriosam"),
        Key: sdk.String("id"),
        OauthToken: sdk.String("itaque"),
        PolicyPathParameter: "assumenda",
        PrettyPrint: sdk.Bool(false),
        Project: "quaerat",
        QuotaUser: sdk.String("id"),
        UploadType: sdk.String("eveniet"),
        UploadProtocol: sdk.String("optio"),
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
                Kind: sdk.String("dignissimos"),
                TargetNameServers: []shared.PolicyAlternativeNameServerConfigTargetNameServer{
                    shared.PolicyAlternativeNameServerConfigTargetNameServer{
                        ForwardingPath: shared.PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumDefault.ToPointer(),
                        Ipv4Address: sdk.String("esse"),
                        Ipv6Address: sdk.String("placeat"),
                        Kind: sdk.String("at"),
                    },
                    shared.PolicyAlternativeNameServerConfigTargetNameServer{
                        ForwardingPath: shared.PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnumPrivate.ToPointer(),
                        Ipv4Address: sdk.String("eos"),
                        Ipv6Address: sdk.String("odit"),
                        Kind: sdk.String("quia"),
                    },
                },
            },
            Description: sdk.String("maxime"),
            EnableInboundForwarding: sdk.Bool(false),
            EnableLogging: sdk.Bool(false),
            ID: sdk.String("excepturi"),
            Kind: sdk.String("sapiente"),
            Name: sdk.String("Greg Kutch"),
            Networks: []shared.PolicyNetwork{
                shared.PolicyNetwork{
                    Kind: sdk.String("error"),
                    NetworkURL: sdk.String("id"),
                },
            },
        },
        AccessToken: sdk.String("harum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("laborum"),
        ClientOperationID: sdk.String("aspernatur"),
        Fields: sdk.String("vero"),
        Key: sdk.String("odio"),
        OauthToken: sdk.String("eum"),
        PolicyPathParameter: "quasi",
        PrettyPrint: sdk.Bool(false),
        Project: "tenetur",
        QuotaUser: sdk.String("accusantium"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("id"),
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
