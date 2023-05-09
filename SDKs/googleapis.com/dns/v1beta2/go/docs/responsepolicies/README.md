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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ResponsePolicy: &shared.ResponsePolicy{
            Description: sdk.String("nemo"),
            GkeClusters: []shared.ResponsePolicyGKECluster{
                shared.ResponsePolicyGKECluster{
                    GkeClusterName: sdk.String("quae"),
                    Kind: sdk.String("quaerat"),
                },
            },
            ID: sdk.String("suscipit"),
            Kind: sdk.String("rerum"),
            Labels: map[string]string{
                "aliquam": "repudiandae",
                "unde": "excepturi",
            },
            Networks: []shared.ResponsePolicyNetwork{
                shared.ResponsePolicyNetwork{
                    Kind: sdk.String("facilis"),
                    NetworkURL: sdk.String("doloremque"),
                },
                shared.ResponsePolicyNetwork{
                    Kind: sdk.String("officiis"),
                    NetworkURL: sdk.String("nisi"),
                },
                shared.ResponsePolicyNetwork{
                    Kind: sdk.String("reprehenderit"),
                    NetworkURL: sdk.String("necessitatibus"),
                },
                shared.ResponsePolicyNetwork{
                    Kind: sdk.String("alias"),
                    NetworkURL: sdk.String("provident"),
                },
            },
            ResponsePolicyName: sdk.String("ut"),
        },
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tenetur"),
        ClientOperationID: sdk.String("saepe"),
        Fields: sdk.String("assumenda"),
        Key: sdk.String("exercitationem"),
        OauthToken: sdk.String("exercitationem"),
        PrettyPrint: sdk.Bool(false),
        Project: "dolore",
        QuotaUser: sdk.String("sit"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("a"),
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
        AccessToken: sdk.String("neque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("velit"),
        ClientOperationID: sdk.String("ut"),
        Fields: sdk.String("est"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("rerum"),
        PrettyPrint: sdk.Bool(false),
        Project: "blanditiis",
        QuotaUser: sdk.String("sapiente"),
        ResponsePolicy: "recusandae",
        UploadType: sdk.String("perspiciatis"),
        UploadProtocol: sdk.String("natus"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolorem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fuga"),
        ClientOperationID: sdk.String("nulla"),
        Fields: sdk.String("cumque"),
        Key: sdk.String("aperiam"),
        OauthToken: sdk.String("ad"),
        PrettyPrint: sdk.Bool(false),
        Project: "fugiat",
        QuotaUser: sdk.String("quas"),
        ResponsePolicy: "quis",
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("eveniet"),
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
        AccessToken: sdk.String("illum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("rerum"),
        Fields: sdk.String("voluptate"),
        Key: sdk.String("perferendis"),
        MaxResults: sdk.Int64(979665),
        OauthToken: sdk.String("harum"),
        PageToken: sdk.String("ratione"),
        PrettyPrint: sdk.Bool(false),
        Project: "molestias",
        QuotaUser: sdk.String("odio"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("magni"),
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
            Description: sdk.String("consequatur"),
            GkeClusters: []shared.ResponsePolicyGKECluster{
                shared.ResponsePolicyGKECluster{
                    GkeClusterName: sdk.String("adipisci"),
                    Kind: sdk.String("dolorem"),
                },
                shared.ResponsePolicyGKECluster{
                    GkeClusterName: sdk.String("ex"),
                    Kind: sdk.String("quis"),
                },
                shared.ResponsePolicyGKECluster{
                    GkeClusterName: sdk.String("eum"),
                    Kind: sdk.String("et"),
                },
                shared.ResponsePolicyGKECluster{
                    GkeClusterName: sdk.String("officiis"),
                    Kind: sdk.String("quo"),
                },
            },
            ID: sdk.String("culpa"),
            Kind: sdk.String("architecto"),
            Labels: map[string]string{
                "eveniet": "doloribus",
                "praesentium": "iste",
            },
            Networks: []shared.ResponsePolicyNetwork{
                shared.ResponsePolicyNetwork{
                    Kind: sdk.String("ad"),
                    NetworkURL: sdk.String("ab"),
                },
                shared.ResponsePolicyNetwork{
                    Kind: sdk.String("harum"),
                    NetworkURL: sdk.String("facere"),
                },
            },
            ResponsePolicyName: sdk.String("ducimus"),
        },
        AccessToken: sdk.String("nisi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officiis"),
        ClientOperationID: sdk.String("necessitatibus"),
        Fields: sdk.String("nam"),
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        Project: "molestias",
        QuotaUser: sdk.String("impedit"),
        ResponsePolicyPathParameter: "modi",
        UploadType: sdk.String("possimus"),
        UploadProtocol: sdk.String("similique"),
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
            Description: sdk.String("asperiores"),
            GkeClusters: []shared.ResponsePolicyGKECluster{
                shared.ResponsePolicyGKECluster{
                    GkeClusterName: sdk.String("repellendus"),
                    Kind: sdk.String("dolor"),
                },
                shared.ResponsePolicyGKECluster{
                    GkeClusterName: sdk.String("nemo"),
                    Kind: sdk.String("quis"),
                },
                shared.ResponsePolicyGKECluster{
                    GkeClusterName: sdk.String("quasi"),
                    Kind: sdk.String("odit"),
                },
            },
            ID: sdk.String("delectus"),
            Kind: sdk.String("doloremque"),
            Labels: map[string]string{
                "nulla": "dolore",
                "itaque": "enim",
            },
            Networks: []shared.ResponsePolicyNetwork{
                shared.ResponsePolicyNetwork{
                    Kind: sdk.String("dignissimos"),
                    NetworkURL: sdk.String("consequuntur"),
                },
                shared.ResponsePolicyNetwork{
                    Kind: sdk.String("sapiente"),
                    NetworkURL: sdk.String("alias"),
                },
                shared.ResponsePolicyNetwork{
                    Kind: sdk.String("doloribus"),
                    NetworkURL: sdk.String("nemo"),
                },
            },
            ResponsePolicyName: sdk.String("dolore"),
        },
        AccessToken: sdk.String("corrupti"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("commodi"),
        ClientOperationID: sdk.String("laudantium"),
        Fields: sdk.String("est"),
        Key: sdk.String("consequatur"),
        OauthToken: sdk.String("incidunt"),
        PrettyPrint: sdk.Bool(false),
        Project: "dolores",
        QuotaUser: sdk.String("labore"),
        ResponsePolicyPathParameter: "earum",
        UploadType: sdk.String("consequatur"),
        UploadProtocol: sdk.String("voluptatem"),
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
