# ResponsePolicies

### Available Operations

* [DNSResponsePoliciesCreate](#dnsresponsepoliciescreate) - Creates a new Response Policy
* [DNSResponsePoliciesDelete](#dnsresponsepoliciesdelete) - Deletes a previously created Response Policy. Fails if the response policy is non-empty or still being referenced by a network.
* [DNSResponsePoliciesGet](#dnsresponsepoliciesget) - Fetches the representation of an existing Response Policy.
* [DNSResponsePoliciesList](#dnsresponsepolicieslist) - Enumerates all Response Policies associated with a project.
* [DNSResponsePoliciesPatch](#dnsresponsepoliciespatch) - Applies a partial update to an existing Response Policy.
* [DNSResponsePoliciesUpdate](#dnsresponsepoliciesupdate) - Updates an existing Response Policy.

## DNSResponsePoliciesCreate

Creates a new Response Policy

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
    res, err := s.ResponsePolicies.DNSResponsePoliciesCreate(ctx, operations.DNSResponsePoliciesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ResponsePolicy: &shared.ResponsePolicy{
            Description: sdk.String("facilis"),
            GkeClusters: []shared.ResponsePolicyGKECluster{
                shared.ResponsePolicyGKECluster{
                    GkeClusterName: sdk.String("incidunt"),
                    Kind: sdk.String("eos"),
                },
                shared.ResponsePolicyGKECluster{
                    GkeClusterName: sdk.String("magnam"),
                    Kind: sdk.String("dolores"),
                },
                shared.ResponsePolicyGKECluster{
                    GkeClusterName: sdk.String("aliquid"),
                    Kind: sdk.String("eum"),
                },
                shared.ResponsePolicyGKECluster{
                    GkeClusterName: sdk.String("vel"),
                    Kind: sdk.String("ad"),
                },
            },
            ID: sdk.String("quos"),
            Kind: sdk.String("illo"),
            Labels: map[string]string{
                "quibusdam": "fugiat",
                "impedit": "culpa",
            },
            Networks: []shared.ResponsePolicyNetwork{
                shared.ResponsePolicyNetwork{
                    Kind: sdk.String("voluptates"),
                    NetworkURL: sdk.String("maiores"),
                },
                shared.ResponsePolicyNetwork{
                    Kind: sdk.String("nemo"),
                    NetworkURL: sdk.String("illo"),
                },
                shared.ResponsePolicyNetwork{
                    Kind: sdk.String("doloribus"),
                    NetworkURL: sdk.String("cumque"),
                },
            },
            ResponsePolicyName: sdk.String("expedita"),
        },
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsam"),
        ClientOperationID: sdk.String("occaecati"),
        Fields: sdk.String("ipsum"),
        Key: sdk.String("accusamus"),
        Location: "quisquam",
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        Project: "fugit",
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.DNSResponsePoliciesCreateSecurity{
        Option1: &operations.DNSResponsePoliciesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponsePolicy != nil {
        // handle response
    }
}
```

## DNSResponsePoliciesDelete

Deletes a previously created Response Policy. Fails if the response policy is non-empty or still being referenced by a network.

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
    res, err := s.ResponsePolicies.DNSResponsePoliciesDelete(ctx, operations.DNSResponsePoliciesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("accusamus"),
        ClientOperationID: sdk.String("placeat"),
        Fields: sdk.String("quam"),
        Key: sdk.String("similique"),
        Location: "delectus",
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        Project: "facere",
        QuotaUser: sdk.String("nobis"),
        ResponsePolicy: "at",
        UploadType: sdk.String("molestias"),
        UploadProtocol: sdk.String("aut"),
    }, operations.DNSResponsePoliciesDeleteSecurity{
        Option1: &operations.DNSResponsePoliciesDeleteSecurityOption1{
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

## DNSResponsePoliciesGet

Fetches the representation of an existing Response Policy.

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
    res, err := s.ResponsePolicies.DNSResponsePoliciesGet(ctx, operations.DNSResponsePoliciesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tenetur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("numquam"),
        ClientOperationID: sdk.String("corrupti"),
        Fields: sdk.String("similique"),
        Key: sdk.String("dolore"),
        Location: "esse",
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        Project: "iste",
        QuotaUser: sdk.String("amet"),
        ResponsePolicy: "occaecati",
        UploadType: sdk.String("aut"),
        UploadProtocol: sdk.String("impedit"),
    }, operations.DNSResponsePoliciesGetSecurity{
        Option1: &operations.DNSResponsePoliciesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponsePolicy != nil {
        // handle response
    }
}
```

## DNSResponsePoliciesList

Enumerates all Response Policies associated with a project.

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
    res, err := s.ResponsePolicies.DNSResponsePoliciesList(ctx, operations.DNSResponsePoliciesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quas"),
        Fields: sdk.String("voluptatem"),
        Key: sdk.String("provident"),
        Location: "quas",
        MaxResults: sdk.Int64(218413),
        OauthToken: sdk.String("vero"),
        PageToken: sdk.String("fuga"),
        PrettyPrint: sdk.Bool(false),
        Project: "facilis",
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("recusandae"),
    }, operations.DNSResponsePoliciesListSecurity{
        Option1: &operations.DNSResponsePoliciesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponsePoliciesListResponse != nil {
        // handle response
    }
}
```

## DNSResponsePoliciesPatch

Applies a partial update to an existing Response Policy.

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
    res, err := s.ResponsePolicies.DNSResponsePoliciesPatch(ctx, operations.DNSResponsePoliciesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ResponsePolicy1: &shared.ResponsePolicy{
            Description: sdk.String("consectetur"),
            GkeClusters: []shared.ResponsePolicyGKECluster{
                shared.ResponsePolicyGKECluster{
                    GkeClusterName: sdk.String("voluptatibus"),
                    Kind: sdk.String("assumenda"),
                },
                shared.ResponsePolicyGKECluster{
                    GkeClusterName: sdk.String("repellendus"),
                    Kind: sdk.String("omnis"),
                },
                shared.ResponsePolicyGKECluster{
                    GkeClusterName: sdk.String("delectus"),
                    Kind: sdk.String("odio"),
                },
                shared.ResponsePolicyGKECluster{
                    GkeClusterName: sdk.String("voluptatibus"),
                    Kind: sdk.String("aut"),
                },
            },
            ID: sdk.String("quam"),
            Kind: sdk.String("omnis"),
            Labels: map[string]string{
                "asperiores": "modi",
                "facere": "neque",
                "quis": "in",
            },
            Networks: []shared.ResponsePolicyNetwork{
                shared.ResponsePolicyNetwork{
                    Kind: sdk.String("non"),
                    NetworkURL: sdk.String("porro"),
                },
            },
            ResponsePolicyName: sdk.String("fugiat"),
        },
        AccessToken: sdk.String("soluta"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("reiciendis"),
        ClientOperationID: sdk.String("labore"),
        Fields: sdk.String("vero"),
        Key: sdk.String("eos"),
        Location: "quas",
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        Project: "architecto",
        QuotaUser: sdk.String("praesentium"),
        ResponsePolicyPathParameter: "iusto",
        UploadType: sdk.String("fugiat"),
        UploadProtocol: sdk.String("enim"),
    }, operations.DNSResponsePoliciesPatchSecurity{
        Option1: &operations.DNSResponsePoliciesPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponsePoliciesPatchResponse != nil {
        // handle response
    }
}
```

## DNSResponsePoliciesUpdate

Updates an existing Response Policy.

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
    res, err := s.ResponsePolicies.DNSResponsePoliciesUpdate(ctx, operations.DNSResponsePoliciesUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ResponsePolicy1: &shared.ResponsePolicy{
            Description: sdk.String("laudantium"),
            GkeClusters: []shared.ResponsePolicyGKECluster{
                shared.ResponsePolicyGKECluster{
                    GkeClusterName: sdk.String("magnam"),
                    Kind: sdk.String("accusamus"),
                },
                shared.ResponsePolicyGKECluster{
                    GkeClusterName: sdk.String("nulla"),
                    Kind: sdk.String("repudiandae"),
                },
            },
            ID: sdk.String("quibusdam"),
            Kind: sdk.String("praesentium"),
            Labels: map[string]string{
                "animi": "unde",
                "quae": "eum",
            },
            Networks: []shared.ResponsePolicyNetwork{
                shared.ResponsePolicyNetwork{
                    Kind: sdk.String("eveniet"),
                    NetworkURL: sdk.String("laboriosam"),
                },
                shared.ResponsePolicyNetwork{
                    Kind: sdk.String("ratione"),
                    NetworkURL: sdk.String("blanditiis"),
                },
            },
            ResponsePolicyName: sdk.String("quidem"),
        },
        AccessToken: sdk.String("illum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("placeat"),
        ClientOperationID: sdk.String("dolores"),
        Fields: sdk.String("consequatur"),
        Key: sdk.String("nesciunt"),
        Location: "quia",
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        Project: "voluptas",
        QuotaUser: sdk.String("quo"),
        ResponsePolicyPathParameter: "laudantium",
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.DNSResponsePoliciesUpdateSecurity{
        Option1: &operations.DNSResponsePoliciesUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponsePoliciesUpdateResponse != nil {
        // handle response
    }
}
```
