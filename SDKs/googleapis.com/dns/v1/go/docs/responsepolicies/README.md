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
            Description: sdk.String("numquam"),
            GkeClusters: []shared.ResponsePolicyGKECluster{
                shared.ResponsePolicyGKECluster{
                    GkeClusterName: sdk.String("est"),
                    Kind: sdk.String("quaerat"),
                },
            },
            ID: sdk.String("facere"),
            Kind: sdk.String("vitae"),
            Labels: map[string]string{
                "alias": "sapiente",
                "officiis": "expedita",
                "quia": "vitae",
            },
            Networks: []shared.ResponsePolicyNetwork{
                shared.ResponsePolicyNetwork{
                    Kind: sdk.String("quas"),
                    NetworkURL: sdk.String("ipsa"),
                },
                shared.ResponsePolicyNetwork{
                    Kind: sdk.String("distinctio"),
                    NetworkURL: sdk.String("placeat"),
                },
            },
            ResponsePolicyName: sdk.String("quod"),
        },
        AccessToken: sdk.String("eligendi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("possimus"),
        ClientOperationID: sdk.String("distinctio"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("assumenda"),
        OauthToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        Project: "soluta",
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("laudantium"),
        UploadProtocol: sdk.String("tempora"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("doloremque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("reiciendis"),
        ClientOperationID: sdk.String("facilis"),
        Fields: sdk.String("aliquam"),
        Key: sdk.String("repudiandae"),
        OauthToken: sdk.String("amet"),
        PrettyPrint: sdk.Bool(false),
        Project: "natus",
        QuotaUser: sdk.String("ab"),
        ResponsePolicy: "officiis",
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("rerum"),
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
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("blanditiis"),
        ClientOperationID: sdk.String("porro"),
        Fields: sdk.String("labore"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("ut"),
        PrettyPrint: sdk.Bool(false),
        Project: "earum",
        QuotaUser: sdk.String("ullam"),
        ResponsePolicy: "numquam",
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("cupiditate"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("consectetur"),
        Fields: sdk.String("modi"),
        Key: sdk.String("aspernatur"),
        MaxResults: sdk.Int64(129762),
        OauthToken: sdk.String("suscipit"),
        PageToken: sdk.String("ipsa"),
        PrettyPrint: sdk.Bool(false),
        Project: "eveniet",
        QuotaUser: sdk.String("sint"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("qui"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ResponsePolicy1: &shared.ResponsePolicy{
            Description: sdk.String("consequatur"),
            GkeClusters: []shared.ResponsePolicyGKECluster{
                shared.ResponsePolicyGKECluster{
                    GkeClusterName: sdk.String("recusandae"),
                    Kind: sdk.String("voluptate"),
                },
                shared.ResponsePolicyGKECluster{
                    GkeClusterName: sdk.String("deleniti"),
                    Kind: sdk.String("est"),
                },
                shared.ResponsePolicyGKECluster{
                    GkeClusterName: sdk.String("et"),
                    Kind: sdk.String("expedita"),
                },
                shared.ResponsePolicyGKECluster{
                    GkeClusterName: sdk.String("quibusdam"),
                    Kind: sdk.String("quos"),
                },
            },
            ID: sdk.String("maiores"),
            Kind: sdk.String("quidem"),
            Labels: map[string]string{
                "culpa": "doloremque",
                "fuga": "dicta",
            },
            Networks: []shared.ResponsePolicyNetwork{
                shared.ResponsePolicyNetwork{
                    Kind: sdk.String("suscipit"),
                    NetworkURL: sdk.String("eligendi"),
                },
            },
            ResponsePolicyName: sdk.String("officiis"),
        },
        AccessToken: sdk.String("dignissimos"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ratione"),
        ClientOperationID: sdk.String("possimus"),
        Fields: sdk.String("quaerat"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("natus"),
        PrettyPrint: sdk.Bool(false),
        Project: "esse",
        QuotaUser: sdk.String("delectus"),
        ResponsePolicyPathParameter: "deserunt",
        UploadType: sdk.String("ratione"),
        UploadProtocol: sdk.String("ipsa"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ResponsePolicy1: &shared.ResponsePolicy{
            Description: sdk.String("iste"),
            GkeClusters: []shared.ResponsePolicyGKECluster{
                shared.ResponsePolicyGKECluster{
                    GkeClusterName: sdk.String("hic"),
                    Kind: sdk.String("ducimus"),
                },
                shared.ResponsePolicyGKECluster{
                    GkeClusterName: sdk.String("consequuntur"),
                    Kind: sdk.String("ipsam"),
                },
                shared.ResponsePolicyGKECluster{
                    GkeClusterName: sdk.String("libero"),
                    Kind: sdk.String("quia"),
                },
            },
            ID: sdk.String("omnis"),
            Kind: sdk.String("dicta"),
            Labels: map[string]string{
                "explicabo": "consequatur",
            },
            Networks: []shared.ResponsePolicyNetwork{
                shared.ResponsePolicyNetwork{
                    Kind: sdk.String("consequatur"),
                    NetworkURL: sdk.String("fugiat"),
                },
            },
            ResponsePolicyName: sdk.String("voluptatum"),
        },
        AccessToken: sdk.String("velit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ullam"),
        ClientOperationID: sdk.String("deserunt"),
        Fields: sdk.String("itaque"),
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("iusto"),
        PrettyPrint: sdk.Bool(false),
        Project: "dignissimos",
        QuotaUser: sdk.String("provident"),
        ResponsePolicyPathParameter: "occaecati",
        UploadType: sdk.String("assumenda"),
        UploadProtocol: sdk.String("sunt"),
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
