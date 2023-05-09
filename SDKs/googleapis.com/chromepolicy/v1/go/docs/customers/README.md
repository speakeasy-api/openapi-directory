# Customers

### Available Operations

* [ChromepolicyCustomersPoliciesGroupsBatchDelete](#chromepolicycustomerspoliciesgroupsbatchdelete) - Delete multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* [ChromepolicyCustomersPoliciesGroupsBatchModify](#chromepolicycustomerspoliciesgroupsbatchmodify) - Modify multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* [ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrdering](#chromepolicycustomerspoliciesgroupslistgrouppriorityordering) - Retrieve a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
* [ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrdering](#chromepolicycustomerspoliciesgroupsupdategrouppriorityordering) - Update a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
* [ChromepolicyCustomersPoliciesNetworksDefineCertificate](#chromepolicycustomerspoliciesnetworksdefinecertificate) - Creates a certificate at a specified OU for a customer.
* [ChromepolicyCustomersPoliciesNetworksDefineNetwork](#chromepolicycustomerspoliciesnetworksdefinenetwork) - Define a new network.
* [ChromepolicyCustomersPoliciesNetworksRemoveCertificate](#chromepolicycustomerspoliciesnetworksremovecertificate) - Remove an existing certificate by guid.
* [ChromepolicyCustomersPoliciesNetworksRemoveNetwork](#chromepolicycustomerspoliciesnetworksremovenetwork) - Remove an existing network by guid.
* [ChromepolicyCustomersPoliciesOrgunitsBatchInherit](#chromepolicycustomerspoliciesorgunitsbatchinherit) - Modify multiple policy values that are applied to a specific org unit so that they now inherit the value from a parent (if applicable). All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* [ChromepolicyCustomersPoliciesOrgunitsBatchModify](#chromepolicycustomerspoliciesorgunitsbatchmodify) - Modify multiple policy values that are applied to a specific org unit. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* [ChromepolicyCustomersPoliciesResolve](#chromepolicycustomerspoliciesresolve) - Gets the resolved policy values for a list of policies that match a search query.
* [ChromepolicyCustomersPolicySchemasGet](#chromepolicycustomerspolicyschemasget) - Get a specific policy schema for a customer by its resource name.
* [ChromepolicyCustomersPolicySchemasList](#chromepolicycustomerspolicyschemaslist) - Gets a list of policy schemas that match a specified filter value for a given customer.

## ChromepolicyCustomersPoliciesGroupsBatchDelete

Delete multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.

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
    res, err := s.Customers.ChromepolicyCustomersPoliciesGroupsBatchDelete(ctx, operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest: &shared.GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest{
            Requests: []shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest{
                shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest{
                    PolicySchema: sdk.String("quod"),
                    PolicyTargetKey: &shared.GoogleChromePolicyVersionsV1PolicyTargetKey{
                        AdditionalTargetKeys: map[string]string{
                            "totam": "porro",
                            "dolorum": "dicta",
                        },
                        TargetResource: sdk.String("nam"),
                    },
                },
                shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest{
                    PolicySchema: sdk.String("officia"),
                    PolicyTargetKey: &shared.GoogleChromePolicyVersionsV1PolicyTargetKey{
                        AdditionalTargetKeys: map[string]string{
                            "fugit": "deleniti",
                            "hic": "optio",
                            "totam": "beatae",
                        },
                        TargetResource: sdk.String("commodi"),
                    },
                },
                shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest{
                    PolicySchema: sdk.String("molestiae"),
                    PolicyTargetKey: &shared.GoogleChromePolicyVersionsV1PolicyTargetKey{
                        AdditionalTargetKeys: map[string]string{
                            "qui": "impedit",
                            "cum": "esse",
                        },
                        TargetResource: sdk.String("ipsum"),
                    },
                },
                shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest{
                    PolicySchema: sdk.String("excepturi"),
                    PolicyTargetKey: &shared.GoogleChromePolicyVersionsV1PolicyTargetKey{
                        AdditionalTargetKeys: map[string]string{
                            "perferendis": "ad",
                        },
                        TargetResource: sdk.String("natus"),
                    },
                },
            },
        },
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolor"),
        Customer: "natus",
        Fields: sdk.String("laboriosam"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fuga"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("corporis"),
    }, operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## ChromepolicyCustomersPoliciesGroupsBatchModify

Modify multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.

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
    res, err := s.Customers.ChromepolicyCustomersPoliciesGroupsBatchModify(ctx, operations.ChromepolicyCustomersPoliciesGroupsBatchModifyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequest: &shared.GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequest{
            Requests: []shared.GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest{
                shared.GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest{
                    PolicyTargetKey: &shared.GoogleChromePolicyVersionsV1PolicyTargetKey{
                        AdditionalTargetKeys: map[string]string{
                            "quidem": "architecto",
                            "ipsa": "reiciendis",
                            "est": "mollitia",
                            "laborum": "dolores",
                        },
                        TargetResource: sdk.String("dolorem"),
                    },
                    PolicyValue: &shared.GoogleChromePolicyVersionsV1PolicyValue{
                        PolicySchema: sdk.String("corporis"),
                        Value: map[string]interface{}{
                            "nobis": "enim",
                        },
                    },
                    UpdateMask: sdk.String("omnis"),
                },
                shared.GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest{
                    PolicyTargetKey: &shared.GoogleChromePolicyVersionsV1PolicyTargetKey{
                        AdditionalTargetKeys: map[string]string{
                            "minima": "excepturi",
                            "accusantium": "iure",
                        },
                        TargetResource: sdk.String("culpa"),
                    },
                    PolicyValue: &shared.GoogleChromePolicyVersionsV1PolicyValue{
                        PolicySchema: sdk.String("doloribus"),
                        Value: map[string]interface{}{
                            "architecto": "mollitia",
                            "dolorem": "culpa",
                            "consequuntur": "repellat",
                            "mollitia": "occaecati",
                        },
                    },
                    UpdateMask: sdk.String("numquam"),
                },
            },
        },
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestiae"),
        Customer: "velit",
        Fields: sdk.String("error"),
        Key: sdk.String("quia"),
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vitae"),
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("animi"),
    }, operations.ChromepolicyCustomersPoliciesGroupsBatchModifySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrdering

Retrieve a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.

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
    res, err := s.Customers.ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrdering(ctx, operations.ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest: &shared.GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest{
            PolicyNamespace: sdk.String("odit"),
            PolicySchema: sdk.String("quo"),
            PolicyTargetKey: &shared.GoogleChromePolicyVersionsV1PolicyTargetKey{
                AdditionalTargetKeys: map[string]string{
                    "tenetur": "ipsam",
                },
                TargetResource: sdk.String("id"),
            },
        },
        AccessToken: sdk.String("possimus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quasi"),
        Customer: "error",
        Fields: sdk.String("temporibus"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("vero"),
    }, operations.ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurity{
        Option1: &operations.ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse != nil {
        // handle response
    }
}
```

## ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrdering

Update a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.

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
    res, err := s.Customers.ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrdering(ctx, operations.ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrderingRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest: &shared.GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest{
            GroupIds: []string{
                "voluptatibus",
                "ipsa",
                "omnis",
            },
            PolicyNamespace: sdk.String("voluptate"),
            PolicySchema: sdk.String("cum"),
            PolicyTargetKey: &shared.GoogleChromePolicyVersionsV1PolicyTargetKey{
                AdditionalTargetKeys: map[string]string{
                    "doloremque": "reprehenderit",
                },
                TargetResource: sdk.String("ut"),
            },
        },
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("corporis"),
        Customer: "dolore",
        Fields: sdk.String("iusto"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("harum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("commodi"),
    }, operations.ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrderingSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## ChromepolicyCustomersPoliciesNetworksDefineCertificate

Creates a certificate at a specified OU for a customer.

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
    res, err := s.Customers.ChromepolicyCustomersPoliciesNetworksDefineCertificate(ctx, operations.ChromepolicyCustomersPoliciesNetworksDefineCertificateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleChromePolicyVersionsV1DefineCertificateRequest: &shared.GoogleChromePolicyVersionsV1DefineCertificateRequest{
            CeritificateName: sdk.String("quae"),
            Certificate: sdk.String("ipsum"),
            Settings: []shared.GoogleChromePolicyVersionsV1NetworkSetting{
                shared.GoogleChromePolicyVersionsV1NetworkSetting{
                    PolicySchema: sdk.String("molestias"),
                    Value: map[string]interface{}{
                        "pariatur": "modi",
                        "praesentium": "rem",
                        "voluptates": "quasi",
                    },
                },
                shared.GoogleChromePolicyVersionsV1NetworkSetting{
                    PolicySchema: sdk.String("repudiandae"),
                    Value: map[string]interface{}{
                        "veritatis": "itaque",
                        "incidunt": "enim",
                        "consequatur": "est",
                    },
                },
                shared.GoogleChromePolicyVersionsV1NetworkSetting{
                    PolicySchema: sdk.String("quibusdam"),
                    Value: map[string]interface{}{
                        "deserunt": "distinctio",
                    },
                },
            },
            TargetResource: sdk.String("quibusdam"),
        },
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("qui"),
        Customer: "aliquid",
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("quos"),
        OauthToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magni"),
        UploadType: sdk.String("assumenda"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.ChromepolicyCustomersPoliciesNetworksDefineCertificateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleChromePolicyVersionsV1DefineCertificateResponse != nil {
        // handle response
    }
}
```

## ChromepolicyCustomersPoliciesNetworksDefineNetwork

Define a new network.

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
    res, err := s.Customers.ChromepolicyCustomersPoliciesNetworksDefineNetwork(ctx, operations.ChromepolicyCustomersPoliciesNetworksDefineNetworkRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleChromePolicyVersionsV1DefineNetworkRequest: &shared.GoogleChromePolicyVersionsV1DefineNetworkRequest{
            Name: sdk.String("Sonya Marks"),
            Settings: []shared.GoogleChromePolicyVersionsV1NetworkSetting{
                shared.GoogleChromePolicyVersionsV1NetworkSetting{
                    PolicySchema: sdk.String("labore"),
                    Value: map[string]interface{}{
                        "eum": "non",
                        "eligendi": "sint",
                        "aliquid": "provident",
                        "necessitatibus": "sint",
                    },
                },
                shared.GoogleChromePolicyVersionsV1NetworkSetting{
                    PolicySchema: sdk.String("officia"),
                    Value: map[string]interface{}{
                        "debitis": "a",
                    },
                },
                shared.GoogleChromePolicyVersionsV1NetworkSetting{
                    PolicySchema: sdk.String("dolorum"),
                    Value: map[string]interface{}{
                        "in": "illum",
                        "maiores": "rerum",
                    },
                },
            },
            TargetResource: sdk.String("dicta"),
        },
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("facere"),
        Customer: "ea",
        Fields: sdk.String("aliquid"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("non"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("enim"),
    }, operations.ChromepolicyCustomersPoliciesNetworksDefineNetworkSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleChromePolicyVersionsV1DefineNetworkResponse != nil {
        // handle response
    }
}
```

## ChromepolicyCustomersPoliciesNetworksRemoveCertificate

Remove an existing certificate by guid.

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
    res, err := s.Customers.ChromepolicyCustomersPoliciesNetworksRemoveCertificate(ctx, operations.ChromepolicyCustomersPoliciesNetworksRemoveCertificateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleChromePolicyVersionsV1RemoveCertificateRequest: &shared.GoogleChromePolicyVersionsV1RemoveCertificateRequest{
            NetworkID: sdk.String("delectus"),
            TargetResource: sdk.String("quidem"),
        },
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("id"),
        Customer: "blanditiis",
        Fields: sdk.String("deleniti"),
        Key: sdk.String("sapiente"),
        OauthToken: sdk.String("amet"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("nisi"),
        UploadProtocol: sdk.String("vel"),
    }, operations.ChromepolicyCustomersPoliciesNetworksRemoveCertificateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleChromePolicyVersionsV1RemoveCertificateResponse != nil {
        // handle response
    }
}
```

## ChromepolicyCustomersPoliciesNetworksRemoveNetwork

Remove an existing network by guid.

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
    res, err := s.Customers.ChromepolicyCustomersPoliciesNetworksRemoveNetwork(ctx, operations.ChromepolicyCustomersPoliciesNetworksRemoveNetworkRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleChromePolicyVersionsV1RemoveNetworkRequest: &shared.GoogleChromePolicyVersionsV1RemoveNetworkRequest{
            NetworkID: sdk.String("omnis"),
            TargetResource: sdk.String("molestiae"),
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magnam"),
        Customer: "distinctio",
        Fields: sdk.String("id"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("nobis"),
    }, operations.ChromepolicyCustomersPoliciesNetworksRemoveNetworkSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleChromePolicyVersionsV1RemoveNetworkResponse != nil {
        // handle response
    }
}
```

## ChromepolicyCustomersPoliciesOrgunitsBatchInherit

Modify multiple policy values that are applied to a specific org unit so that they now inherit the value from a parent (if applicable). All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.

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
    res, err := s.Customers.ChromepolicyCustomersPoliciesOrgunitsBatchInherit(ctx, operations.ChromepolicyCustomersPoliciesOrgunitsBatchInheritRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequest: &shared.GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequest{
            Requests: []shared.GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest{
                shared.GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest{
                    PolicySchema: sdk.String("aspernatur"),
                    PolicyTargetKey: &shared.GoogleChromePolicyVersionsV1PolicyTargetKey{
                        AdditionalTargetKeys: map[string]string{
                            "magnam": "et",
                        },
                        TargetResource: sdk.String("excepturi"),
                    },
                },
                shared.GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest{
                    PolicySchema: sdk.String("ullam"),
                    PolicyTargetKey: &shared.GoogleChromePolicyVersionsV1PolicyTargetKey{
                        AdditionalTargetKeys: map[string]string{
                            "quos": "sint",
                            "accusantium": "mollitia",
                            "reiciendis": "mollitia",
                        },
                        TargetResource: sdk.String("ad"),
                    },
                },
                shared.GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest{
                    PolicySchema: sdk.String("eum"),
                    PolicyTargetKey: &shared.GoogleChromePolicyVersionsV1PolicyTargetKey{
                        AdditionalTargetKeys: map[string]string{
                            "necessitatibus": "odit",
                        },
                        TargetResource: sdk.String("nemo"),
                    },
                },
                shared.GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest{
                    PolicySchema: sdk.String("quasi"),
                    PolicyTargetKey: &shared.GoogleChromePolicyVersionsV1PolicyTargetKey{
                        AdditionalTargetKeys: map[string]string{
                            "doloribus": "debitis",
                            "eius": "maxime",
                        },
                        TargetResource: sdk.String("deleniti"),
                    },
                },
            },
        },
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("architecto"),
        Customer: "architecto",
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("ullam"),
        OauthToken: sdk.String("expedita"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("quibusdam"),
    }, operations.ChromepolicyCustomersPoliciesOrgunitsBatchInheritSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## ChromepolicyCustomersPoliciesOrgunitsBatchModify

Modify multiple policy values that are applied to a specific org unit. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.

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
    res, err := s.Customers.ChromepolicyCustomersPoliciesOrgunitsBatchModify(ctx, operations.ChromepolicyCustomersPoliciesOrgunitsBatchModifyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest: &shared.GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest{
            Requests: []shared.GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest{
                shared.GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest{
                    PolicyTargetKey: &shared.GoogleChromePolicyVersionsV1PolicyTargetKey{
                        AdditionalTargetKeys: map[string]string{
                            "accusantium": "consequuntur",
                            "praesentium": "natus",
                            "magni": "sunt",
                            "quo": "illum",
                        },
                        TargetResource: sdk.String("pariatur"),
                    },
                    PolicyValue: &shared.GoogleChromePolicyVersionsV1PolicyValue{
                        PolicySchema: sdk.String("maxime"),
                        Value: map[string]interface{}{
                            "excepturi": "odit",
                            "ea": "accusantium",
                        },
                    },
                    UpdateMask: sdk.String("ab"),
                },
                shared.GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest{
                    PolicyTargetKey: &shared.GoogleChromePolicyVersionsV1PolicyTargetKey{
                        AdditionalTargetKeys: map[string]string{
                            "quidem": "ipsam",
                            "voluptate": "autem",
                            "nam": "eaque",
                            "pariatur": "nemo",
                        },
                        TargetResource: sdk.String("voluptatibus"),
                    },
                    PolicyValue: &shared.GoogleChromePolicyVersionsV1PolicyValue{
                        PolicySchema: sdk.String("perferendis"),
                        Value: map[string]interface{}{
                            "amet": "aut",
                            "cumque": "corporis",
                            "hic": "libero",
                            "nobis": "dolores",
                        },
                    },
                    UpdateMask: sdk.String("quis"),
                },
                shared.GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest{
                    PolicyTargetKey: &shared.GoogleChromePolicyVersionsV1PolicyTargetKey{
                        AdditionalTargetKeys: map[string]string{
                            "dignissimos": "eaque",
                            "quis": "nesciunt",
                            "eos": "perferendis",
                        },
                        TargetResource: sdk.String("dolores"),
                    },
                    PolicyValue: &shared.GoogleChromePolicyVersionsV1PolicyValue{
                        PolicySchema: sdk.String("minus"),
                        Value: map[string]interface{}{
                            "dolor": "vero",
                            "nostrum": "hic",
                        },
                    },
                    UpdateMask: sdk.String("recusandae"),
                },
                shared.GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest{
                    PolicyTargetKey: &shared.GoogleChromePolicyVersionsV1PolicyTargetKey{
                        AdditionalTargetKeys: map[string]string{
                            "facilis": "perspiciatis",
                            "voluptatem": "porro",
                            "consequuntur": "blanditiis",
                        },
                        TargetResource: sdk.String("error"),
                    },
                    PolicyValue: &shared.GoogleChromePolicyVersionsV1PolicyValue{
                        PolicySchema: sdk.String("eaque"),
                        Value: map[string]interface{}{
                            "rerum": "adipisci",
                            "asperiores": "earum",
                            "modi": "iste",
                        },
                    },
                    UpdateMask: sdk.String("dolorum"),
                },
            },
        },
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("provident"),
        Customer: "nobis",
        Fields: sdk.String("libero"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("quaerat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quos"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.ChromepolicyCustomersPoliciesOrgunitsBatchModifySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## ChromepolicyCustomersPoliciesResolve

Gets the resolved policy values for a list of policies that match a search query.

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
    res, err := s.Customers.ChromepolicyCustomersPoliciesResolve(ctx, operations.ChromepolicyCustomersPoliciesResolveRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleChromePolicyVersionsV1ResolveRequest: &shared.GoogleChromePolicyVersionsV1ResolveRequest{
            PageSize: sdk.Int(222443),
            PageToken: sdk.String("qui"),
            PolicySchemaFilter: sdk.String("ipsum"),
            PolicyTargetKey: &shared.GoogleChromePolicyVersionsV1PolicyTargetKey{
                AdditionalTargetKeys: map[string]string{
                    "excepturi": "cum",
                    "voluptate": "dignissimos",
                    "reiciendis": "amet",
                    "dolorum": "numquam",
                },
                TargetResource: sdk.String("veritatis"),
            },
        },
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iure"),
        Customer: "odio",
        Fields: sdk.String("quaerat"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("natus"),
    }, operations.ChromepolicyCustomersPoliciesResolveSecurity{
        Option1: &operations.ChromepolicyCustomersPoliciesResolveSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleChromePolicyVersionsV1ResolveResponse != nil {
        // handle response
    }
}
```

## ChromepolicyCustomersPolicySchemasGet

Get a specific policy schema for a customer by its resource name.

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
    res, err := s.Customers.ChromepolicyCustomersPolicySchemasGet(ctx, operations.ChromepolicyCustomersPolicySchemasGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("atque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fugiat"),
        Fields: sdk.String("ab"),
        Key: sdk.String("soluta"),
        Name: "Ted Kling",
        OauthToken: sdk.String("omnis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("asperiores"),
    }, operations.ChromepolicyCustomersPolicySchemasGetSecurity{
        Option1: &operations.ChromepolicyCustomersPolicySchemasGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleChromePolicyVersionsV1PolicySchema != nil {
        // handle response
    }
}
```

## ChromepolicyCustomersPolicySchemasList

Gets a list of policy schemas that match a specified filter value for a given customer.

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
    res, err := s.Customers.ChromepolicyCustomersPolicySchemasList(ctx, operations.ChromepolicyCustomersPolicySchemasListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("id"),
        Fields: sdk.String("saepe"),
        Filter: sdk.String("eius"),
        Key: sdk.String("aspernatur"),
        OauthToken: sdk.String("perferendis"),
        PageSize: sdk.Int64(229219),
        PageToken: sdk.String("optio"),
        Parent: "accusamus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ad"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.ChromepolicyCustomersPolicySchemasListSecurity{
        Option1: &operations.ChromepolicyCustomersPolicySchemasListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleChromePolicyVersionsV1ListPolicySchemasResponse != nil {
        // handle response
    }
}
```
