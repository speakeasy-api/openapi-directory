# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.DNSChangesCreateRequest{
        Security: operations.DNSChangesCreateSecurity{
            Option1: &operations.DNSChangesCreateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.DNSChangesCreatePathParams{
            ManagedZone: "sit",
            Project: "voluptas",
        },
        QueryParams: operations.DNSChangesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "expedita",
            Alt: "proto",
            Callback: "dolor",
            ClientOperationID: "expedita",
            Fields: "voluptas",
            Key: "fugit",
            OauthToken: "et",
            PrettyPrint: true,
            QuotaUser: "rerum",
            UploadType: "dicta",
            UploadProtocol: "debitis",
        },
        Request: &shared.Change{
            Additions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "et",
                    Name: "ut",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: true,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "iste",
                                                IPProtocol: "undefined",
                                                Kind: "totam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "illum",
                                                Port: "debitis",
                                                Project: "vel",
                                                Region: "odio",
                                            },
                                        },
                                    },
                                    Kind: "dolore",
                                    Location: "id",
                                    Rrdatas: []string{
                                        "accusantium",
                                    },
                                    SignatureRrdatas: []string{
                                        "commodi",
                                        "quis",
                                        "est",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "odit",
                                                IPProtocol: "udp",
                                                Kind: "voluptas",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "aut",
                                                Port: "illo",
                                                Project: "sed",
                                                Region: "officiis",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "autem",
                                                IPProtocol: "undefined",
                                                Kind: "nobis",
                                                LoadBalancerType: "none",
                                                NetworkURL: "qui",
                                                Port: "recusandae",
                                                Project: "at",
                                                Region: "ipsum",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "eveniet",
                                                IPProtocol: "tcp",
                                                Kind: "sint",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "ut",
                                                Port: "exercitationem",
                                                Project: "aut",
                                                Region: "reprehenderit",
                                            },
                                        },
                                    },
                                    Kind: "tempore",
                                    Location: "maiores",
                                    Rrdatas: []string{
                                        "dolor",
                                        "beatae",
                                        "veritatis",
                                    },
                                    SignatureRrdatas: []string{
                                        "et",
                                        "omnis",
                                        "ipsum",
                                    },
                                },
                            },
                            Kind: "ex",
                        },
                        Kind: "dolores",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: true,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "mollitia",
                                                    IPProtocol: "tcp",
                                                    Kind: "quam",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "qui",
                                                    Port: "qui",
                                                    Project: "unde",
                                                    Region: "in",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "autem",
                                                    IPProtocol: "undefined",
                                                    Kind: "ut",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "ab",
                                                    Port: "neque",
                                                    Project: "ullam",
                                                    Region: "et",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "accusantium",
                                                    IPProtocol: "tcp",
                                                    Kind: "architecto",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "velit",
                                                    Port: "cumque",
                                                    Project: "soluta",
                                                    Region: "sunt",
                                                },
                                            },
                                        },
                                        Kind: "voluptates",
                                        Location: "magni",
                                        Rrdatas: []string{
                                            "optio",
                                            "qui",
                                            "earum",
                                        },
                                        SignatureRrdatas: []string{
                                            "omnis",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "consequatur",
                                                    IPProtocol: "tcp",
                                                    Kind: "commodi",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "reprehenderit",
                                                    Port: "consectetur",
                                                    Project: "nostrum",
                                                    Region: "ut",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "laboriosam",
                                                    IPProtocol: "udp",
                                                    Kind: "a",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "aut",
                                                    Port: "quas",
                                                    Project: "consequuntur",
                                                    Region: "laudantium",
                                                },
                                            },
                                        },
                                        Kind: "autem",
                                        Location: "ipsa",
                                        Rrdatas: []string{
                                            "doloremque",
                                            "perferendis",
                                        },
                                        SignatureRrdatas: []string{
                                            "ratione",
                                        },
                                    },
                                },
                                Kind: "quisquam",
                            },
                            Kind: "explicabo",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "maxime",
                                        IPProtocol: "undefined",
                                        Kind: "perferendis",
                                        LoadBalancerType: "none",
                                        NetworkURL: "rerum",
                                        Port: "reiciendis",
                                        Project: "quis",
                                        Region: "cumque",
                                    },
                                },
                            },
                            TrickleTraffic: 79.199997,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "eum",
                                                IPProtocol: "undefined",
                                                Kind: "et",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "ad",
                                                Port: "expedita",
                                                Project: "vel",
                                                Region: "qui",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "modi",
                                                IPProtocol: "undefined",
                                                Kind: "tempora",
                                                LoadBalancerType: "none",
                                                NetworkURL: "eaque",
                                                Port: "sunt",
                                                Project: "sit",
                                                Region: "autem",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quis",
                                                IPProtocol: "tcp",
                                                Kind: "vel",
                                                LoadBalancerType: "none",
                                                NetworkURL: "qui",
                                                Port: "nisi",
                                                Project: "quis",
                                                Region: "adipisci",
                                            },
                                        },
                                    },
                                    Kind: "porro",
                                    Rrdatas: []string{
                                        "et",
                                        "accusamus",
                                        "numquam",
                                    },
                                    SignatureRrdatas: []string{
                                        "rerum",
                                        "ut",
                                        "laborum",
                                    },
                                    Weight: 92.199997,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "soluta",
                                                IPProtocol: "tcp",
                                                Kind: "consequuntur",
                                                LoadBalancerType: "none",
                                                NetworkURL: "mollitia",
                                                Port: "inventore",
                                                Project: "delectus",
                                                Region: "ipsa",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "animi",
                                                IPProtocol: "tcp",
                                                Kind: "ut",
                                                LoadBalancerType: "none",
                                                NetworkURL: "fuga",
                                                Port: "sed",
                                                Project: "sed",
                                                Region: "et",
                                            },
                                        },
                                    },
                                    Kind: "consequuntur",
                                    Rrdatas: []string{
                                        "cupiditate",
                                        "provident",
                                        "molestiae",
                                    },
                                    SignatureRrdatas: []string{
                                        "quasi",
                                        "corrupti",
                                        "enim",
                                    },
                                    Weight: 85.099998,
                                },
                            },
                            Kind: "possimus",
                        },
                    },
                    Rrdatas: []string{
                        "neque",
                        "consequuntur",
                    },
                    SignatureRrdatas: []string{
                        "et",
                    },
                    TTL: 1613338873740606132,
                    Type: "occaecati",
                },
            },
            Deletions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "voluptatem",
                    Name: "quia",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "est",
                                                IPProtocol: "udp",
                                                Kind: "necessitatibus",
                                                LoadBalancerType: "none",
                                                NetworkURL: "possimus",
                                                Port: "voluptatem",
                                                Project: "dolorum",
                                                Region: "doloribus",
                                            },
                                        },
                                    },
                                    Kind: "saepe",
                                    Location: "sunt",
                                    Rrdatas: []string{
                                        "et",
                                    },
                                    SignatureRrdatas: []string{
                                        "asperiores",
                                        "et",
                                    },
                                },
                            },
                            Kind: "est",
                        },
                        Kind: "ipsum",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "dolores",
                                                    IPProtocol: "tcp",
                                                    Kind: "impedit",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "magnam",
                                                    Port: "ut",
                                                    Project: "possimus",
                                                    Region: "illo",
                                                },
                                            },
                                        },
                                        Kind: "qui",
                                        Location: "quia",
                                        Rrdatas: []string{
                                            "ducimus",
                                            "enim",
                                            "blanditiis",
                                        },
                                        SignatureRrdatas: []string{
                                            "delectus",
                                        },
                                    },
                                },
                                Kind: "rerum",
                            },
                            Kind: "dolore",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "velit",
                                        IPProtocol: "udp",
                                        Kind: "modi",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "voluptas",
                                        Port: "amet",
                                        Project: "et",
                                        Region: "a",
                                    },
                                },
                            },
                            TrickleTraffic: 80.099998,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dicta",
                                                IPProtocol: "tcp",
                                                Kind: "doloremque",
                                                LoadBalancerType: "none",
                                                NetworkURL: "nisi",
                                                Port: "recusandae",
                                                Project: "qui",
                                                Region: "minus",
                                            },
                                        },
                                    },
                                    Kind: "et",
                                    Rrdatas: []string{
                                        "ut",
                                        "rem",
                                        "eos",
                                    },
                                    SignatureRrdatas: []string{
                                        "reiciendis",
                                    },
                                    Weight: 74.099998,
                                },
                            },
                            Kind: "porro",
                        },
                    },
                    Rrdatas: []string{
                        "adipisci",
                    },
                    SignatureRrdatas: []string{
                        "illum",
                        "accusantium",
                        "atque",
                    },
                    TTL: 1444501184389758573,
                    Type: "nisi",
                },
            },
            ID: "quidem",
            IsServing: false,
            Kind: "quo",
            StartTime: "vero",
            Status: "done",
        },
    }
    
    res, err := s.Changes.DNSChangesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Change != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### changes

* `DNSChangesCreate` - Atomically updates the ResourceRecordSet collection.
* `DNSChangesGet` - Fetches the representation of an existing Change.
* `DNSChangesList` - Enumerates Changes to a ResourceRecordSet collection.

### dnsKeys

* `DNSDNSKeysGet` - Fetches the representation of an existing DnsKey.
* `DNSDNSKeysList` - Enumerates DnsKeys to a ResourceRecordSet collection.

### managedZoneOperations

* `DNSManagedZoneOperationsGet` - Fetches the representation of an existing Operation.
* `DNSManagedZoneOperationsList` - Enumerates Operations for the given ManagedZone.

### managedZones

* `DNSManagedZonesCreate` - Creates a new ManagedZone.
* `DNSManagedZonesDelete` - Deletes a previously created ManagedZone.
* `DNSManagedZonesGet` - Fetches the representation of an existing ManagedZone.
* `DNSManagedZonesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `DNSManagedZonesList` - Enumerates ManagedZones that have been created but not yet deleted.
* `DNSManagedZonesPatch` - Applies a partial update to an existing ManagedZone.
* `DNSManagedZonesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `DNSManagedZonesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this returns an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `DNSManagedZonesUpdate` - Updates an existing ManagedZone.

### policies

* `DNSPoliciesCreate` - Creates a new Policy.
* `DNSPoliciesDelete` - Deletes a previously created Policy. Fails if the policy is still being referenced by a network.
* `DNSPoliciesGet` - Fetches the representation of an existing Policy.
* `DNSPoliciesList` - Enumerates all Policies associated with a project.
* `DNSPoliciesPatch` - Applies a partial update to an existing Policy.
* `DNSPoliciesUpdate` - Updates an existing Policy.

### projects

* `DNSProjectsGet` - Fetches the representation of an existing Project.

### resourceRecordSets

* `DNSResourceRecordSetsCreate` - Creates a new ResourceRecordSet.
* `DNSResourceRecordSetsDelete` - Deletes a previously created ResourceRecordSet.
* `DNSResourceRecordSetsGet` - Fetches the representation of an existing ResourceRecordSet.
* `DNSResourceRecordSetsList` - Enumerates ResourceRecordSets that you have created but not yet deleted.
* `DNSResourceRecordSetsPatch` - Applies a partial update to an existing ResourceRecordSet.

### responsePolicies

* `DNSResponsePoliciesCreate` - Creates a new Response Policy
* `DNSResponsePoliciesDelete` - Deletes a previously created Response Policy. Fails if the response policy is non-empty or still being referenced by a network.
* `DNSResponsePoliciesGet` - Fetches the representation of an existing Response Policy.
* `DNSResponsePoliciesList` - Enumerates all Response Policies associated with a project.
* `DNSResponsePoliciesPatch` - Applies a partial update to an existing Response Policy.
* `DNSResponsePoliciesUpdate` - Updates an existing Response Policy.

### responsePolicyRules

* `DNSResponsePolicyRulesCreate` - Creates a new Response Policy Rule.
* `DNSResponsePolicyRulesDelete` - Deletes a previously created Response Policy Rule.
* `DNSResponsePolicyRulesGet` - Fetches the representation of an existing Response Policy Rule.
* `DNSResponsePolicyRulesList` - Enumerates all Response Policy Rules associated with a project.
* `DNSResponsePolicyRulesPatch` - Applies a partial update to an existing Response Policy Rule.
* `DNSResponsePolicyRulesUpdate` - Updates an existing Response Policy Rule.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
