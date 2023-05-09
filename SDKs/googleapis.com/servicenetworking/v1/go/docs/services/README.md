# Services

### Available Operations

* [ServicenetworkingServicesAddSubnetwork](#servicenetworkingservicesaddsubnetwork) - For service producers, provisions a new subnet in a peered service's shared VPC network in the requested region and with the requested size that's expressed as a CIDR range (number of leading bits of ipV4 network mask). The method checks against the assigned allocated ranges to find a non-conflicting IP address range. The method will reuse a subnet if subsequent calls contain the same subnet name, region, and prefix length. This method will make producer's tenant project to be a shared VPC service project as needed.
* [ServicenetworkingServicesConnectionsCreate](#servicenetworkingservicesconnectionscreate) - Creates a private connection that establishes a VPC Network Peering connection to a VPC network in the service producer's organization. The administrator of the service consumer's VPC network invokes this method. The administrator must assign one or more allocated IP ranges for provisioning subnetworks in the service producer's VPC network. This connection is used for all supported services in the service producer's organization, so it only needs to be invoked once.
* [ServicenetworkingServicesConnectionsDeleteConnection](#servicenetworkingservicesconnectionsdeleteconnection) - Deletes a private service access connection.
* [ServicenetworkingServicesConnectionsList](#servicenetworkingservicesconnectionslist) - List the private connections that are configured in a service consumer's VPC network.
* [ServicenetworkingServicesConnectionsPatch](#servicenetworkingservicesconnectionspatch) - Updates the allocated ranges that are assigned to a connection.
* [ServicenetworkingServicesDisableVpcServiceControls](#servicenetworkingservicesdisablevpcservicecontrols) - Disables VPC service controls for a connection.
* [ServicenetworkingServicesDNSRecordSetsAdd](#servicenetworkingservicesdnsrecordsetsadd) - Service producers can use this method to add DNS record sets to private DNS zones in the shared producer host project.
* [ServicenetworkingServicesDNSRecordSetsRemove](#servicenetworkingservicesdnsrecordsetsremove) - Service producers can use this method to remove DNS record sets from private DNS zones in the shared producer host project.
* [ServicenetworkingServicesDNSRecordSetsUpdate](#servicenetworkingservicesdnsrecordsetsupdate) - Service producers can use this method to update DNS record sets from private DNS zones in the shared producer host project.
* [ServicenetworkingServicesDNSZonesAdd](#servicenetworkingservicesdnszonesadd) - Service producers can use this method to add private DNS zones in the shared producer host project and matching peering zones in the consumer project.
* [ServicenetworkingServicesDNSZonesRemove](#servicenetworkingservicesdnszonesremove) - Service producers can use this method to remove private DNS zones in the shared producer host project and matching peering zones in the consumer project.
* [ServicenetworkingServicesEnableVpcServiceControls](#servicenetworkingservicesenablevpcservicecontrols) - Enables VPC service controls for a connection.
* [ServicenetworkingServicesProjectsGlobalNetworksGet](#servicenetworkingservicesprojectsglobalnetworksget) - Service producers use this method to get the configuration of their connection including the import/export of custom routes and subnetwork routes with public IP.
* [ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsCreate](#servicenetworkingservicesprojectsglobalnetworkspeereddnsdomainscreate) - Creates a peered DNS domain which sends requests for records in given namespace originating in the service producer VPC network to the consumer VPC network to be resolved.
* [ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsDelete](#servicenetworkingservicesprojectsglobalnetworkspeereddnsdomainsdelete) - Deletes a peered DNS domain.
* [ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsList](#servicenetworkingservicesprojectsglobalnetworkspeereddnsdomainslist) - Lists peered DNS domains for a connection.
* [ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfig](#servicenetworkingservicesprojectsglobalnetworksupdateconsumerconfig) - Service producers use this method to update the configuration of their connection including the import/export of custom routes and subnetwork routes with public IP.
* [ServicenetworkingServicesRolesAdd](#servicenetworkingservicesrolesadd) - Service producers can use this method to add roles in the shared VPC host project. Each role is bound to the provided member. Each role must be selected from within an allowlisted set of roles. Each role is applied at only the granularity specified in the allowlist.
* [ServicenetworkingServicesSearchRange](#servicenetworkingservicessearchrange) - Service producers can use this method to find a currently unused range within consumer allocated ranges. This returned range is not reserved, and not guaranteed to remain unused. It will validate previously provided allocated ranges, find non-conflicting sub-range of requested size (expressed in number of leading bits of ipv4 network mask, as in CIDR range notation).
* [ServicenetworkingServicesValidate](#servicenetworkingservicesvalidate) - Service producers use this method to validate if the consumer provided network, project and requested range are valid. This allows them to use a fail-fast mechanism for consumer requests, and not have to wait for AddSubnetwork operation completion to determine if user request is invalid.

## ServicenetworkingServicesAddSubnetwork

For service producers, provisions a new subnet in a peered service's shared VPC network in the requested region and with the requested size that's expressed as a CIDR range (number of leading bits of ipV4 network mask). The method checks against the assigned allocated ranges to find a non-conflicting IP address range. The method will reuse a subnet if subsequent calls contain the same subnet name, region, and prefix length. This method will make producer's tenant project to be a shared VPC service project as needed.

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
    res, err := s.Services.ServicenetworkingServicesAddSubnetwork(ctx, operations.ServicenetworkingServicesAddSubnetworkRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AddSubnetworkRequest: &shared.AddSubnetworkRequest{
            AllowSubnetCidrRoutesOverlap: sdk.Bool(false),
            CheckServiceNetworkingUsePermission: sdk.Bool(false),
            ComputeIdempotencyWindow: sdk.String("quod"),
            Consumer: sdk.String("esse"),
            ConsumerNetwork: sdk.String("totam"),
            Description: sdk.String("porro"),
            IPPrefixLength: sdk.Int(678880),
            OutsideAllocationPublicIPRange: sdk.String("dicta"),
            PrivateIpv6GoogleAccess: sdk.String("nam"),
            Purpose: sdk.String("officia"),
            Region: sdk.String("occaecati"),
            RequestedAddress: sdk.String("fugit"),
            RequestedRanges: []string{
                "hic",
                "optio",
                "totam",
            },
            Role: sdk.String("beatae"),
            SecondaryIPRangeSpecs: []shared.SecondaryIPRangeSpec{
                shared.SecondaryIPRangeSpec{
                    IPPrefixLength: sdk.Int(473600),
                    OutsideAllocationPublicIPRange: sdk.String("modi"),
                    RangeName: sdk.String("qui"),
                    RequestedAddress: sdk.String("impedit"),
                },
                shared.SecondaryIPRangeSpec{
                    IPPrefixLength: sdk.Int(736918),
                    OutsideAllocationPublicIPRange: sdk.String("esse"),
                    RangeName: sdk.String("ipsum"),
                    RequestedAddress: sdk.String("excepturi"),
                },
            },
            Subnetwork: sdk.String("aspernatur"),
            SubnetworkUsers: []string{
                "ad",
            },
            UseCustomComputeIdempotencyWindow: sdk.Bool(false),
        },
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iste"),
        Fields: sdk.String("dolor"),
        Key: sdk.String("natus"),
        OauthToken: sdk.String("laboriosam"),
        Parent: "hic",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("in"),
    }, operations.ServicenetworkingServicesAddSubnetworkSecurity{
        Option1: &operations.ServicenetworkingServicesAddSubnetworkSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## ServicenetworkingServicesConnectionsCreate

Creates a private connection that establishes a VPC Network Peering connection to a VPC network in the service producer's organization. The administrator of the service consumer's VPC network invokes this method. The administrator must assign one or more allocated IP ranges for provisioning subnetworks in the service producer's VPC network. This connection is used for all supported services in the service producer's organization, so it only needs to be invoked once.

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
    res, err := s.Services.ServicenetworkingServicesConnectionsCreate(ctx, operations.ServicenetworkingServicesConnectionsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ConnectionInput: &shared.ConnectionInput{
            Network: sdk.String("iste"),
            ReservedPeeringRanges: []string{
                "saepe",
                "quidem",
            },
        },
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("est"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("laborum"),
        Parent: "dolores",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorem"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("explicabo"),
    }, operations.ServicenetworkingServicesConnectionsCreateSecurity{
        Option1: &operations.ServicenetworkingServicesConnectionsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## ServicenetworkingServicesConnectionsDeleteConnection

Deletes a private service access connection.

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
    res, err := s.Services.ServicenetworkingServicesConnectionsDeleteConnection(ctx, operations.ServicenetworkingServicesConnectionsDeleteConnectionRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DeleteConnectionRequest: &shared.DeleteConnectionRequest{
            ConsumerNetwork: sdk.String("enim"),
        },
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("minima"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("accusantium"),
        Name: "Cecilia Yundt MD",
        OauthToken: sdk.String("dolorem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("culpa"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("repellat"),
    }, operations.ServicenetworkingServicesConnectionsDeleteConnectionSecurity{
        Option1: &operations.ServicenetworkingServicesConnectionsDeleteConnectionSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## ServicenetworkingServicesConnectionsList

List the private connections that are configured in a service consumer's VPC network.

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
    res, err := s.Services.ServicenetworkingServicesConnectionsList(ctx, operations.ServicenetworkingServicesConnectionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("commodi"),
        Fields: sdk.String("quam"),
        Key: sdk.String("molestiae"),
        Network: sdk.String("velit"),
        OauthToken: sdk.String("error"),
        Parent: "quia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("vitae"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.ServicenetworkingServicesConnectionsListSecurity{
        Option1: &operations.ServicenetworkingServicesConnectionsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConnectionsResponse != nil {
        // handle response
    }
}
```

## ServicenetworkingServicesConnectionsPatch

Updates the allocated ranges that are assigned to a connection.

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
    res, err := s.Services.ServicenetworkingServicesConnectionsPatch(ctx, operations.ServicenetworkingServicesConnectionsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ConnectionInput: &shared.ConnectionInput{
            Network: sdk.String("enim"),
            ReservedPeeringRanges: []string{
                "quo",
            },
        },
        AccessToken: sdk.String("sequi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("id"),
        Force: sdk.Bool(false),
        Key: sdk.String("possimus"),
        Name: "Joyce Mueller",
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UpdateMask: sdk.String("voluptatibus"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("nihil"),
    }, operations.ServicenetworkingServicesConnectionsPatchSecurity{
        Option1: &operations.ServicenetworkingServicesConnectionsPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## ServicenetworkingServicesDisableVpcServiceControls

Disables VPC service controls for a connection.

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
    res, err := s.Services.ServicenetworkingServicesDisableVpcServiceControls(ctx, operations.ServicenetworkingServicesDisableVpcServiceControlsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DisableVpcServiceControlsRequest: &shared.DisableVpcServiceControlsRequest{
            ConsumerNetwork: sdk.String("voluptatibus"),
        },
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("cum"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("doloremque"),
        Parent: "reprehenderit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ut"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.ServicenetworkingServicesDisableVpcServiceControlsSecurity{
        Option1: &operations.ServicenetworkingServicesDisableVpcServiceControlsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## ServicenetworkingServicesDNSRecordSetsAdd

Service producers can use this method to add DNS record sets to private DNS zones in the shared producer host project.

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
    res, err := s.Services.ServicenetworkingServicesDNSRecordSetsAdd(ctx, operations.ServicenetworkingServicesDNSRecordSetsAddRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AddDNSRecordSetRequest: &shared.AddDNSRecordSetRequest{
            ConsumerNetwork: sdk.String("dolore"),
            DNSRecordSet: &shared.DNSRecordSet{
                Data: []string{
                    "dicta",
                    "harum",
                },
                Domain: sdk.String("enim"),
                TTL: sdk.String("accusamus"),
                Type: sdk.String("commodi"),
            },
            Zone: sdk.String("repudiandae"),
        },
        AccessToken: sdk.String("quae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("molestias"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("pariatur"),
        Parent: "modi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("praesentium"),
        UploadType: sdk.String("rem"),
        UploadProtocol: sdk.String("voluptates"),
    }, operations.ServicenetworkingServicesDNSRecordSetsAddSecurity{
        Option1: &operations.ServicenetworkingServicesDNSRecordSetsAddSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## ServicenetworkingServicesDNSRecordSetsRemove

Service producers can use this method to remove DNS record sets from private DNS zones in the shared producer host project.

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
    res, err := s.Services.ServicenetworkingServicesDNSRecordSetsRemove(ctx, operations.ServicenetworkingServicesDNSRecordSetsRemoveRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RemoveDNSRecordSetRequest: &shared.RemoveDNSRecordSetRequest{
            ConsumerNetwork: sdk.String("repudiandae"),
            DNSRecordSet: &shared.DNSRecordSet{
                Data: []string{
                    "veritatis",
                    "itaque",
                    "incidunt",
                },
                Domain: sdk.String("enim"),
                TTL: sdk.String("consequatur"),
                Type: sdk.String("est"),
            },
            Zone: sdk.String("quibusdam"),
        },
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("distinctio"),
        Fields: sdk.String("quibusdam"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("modi"),
        Parent: "qui",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("quos"),
    }, operations.ServicenetworkingServicesDNSRecordSetsRemoveSecurity{
        Option1: &operations.ServicenetworkingServicesDNSRecordSetsRemoveSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## ServicenetworkingServicesDNSRecordSetsUpdate

Service producers can use this method to update DNS record sets from private DNS zones in the shared producer host project.

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
    res, err := s.Services.ServicenetworkingServicesDNSRecordSetsUpdate(ctx, operations.ServicenetworkingServicesDNSRecordSetsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UpdateDNSRecordSetRequest: &shared.UpdateDNSRecordSetRequest{
            ConsumerNetwork: sdk.String("magni"),
            ExistingDNSRecordSet: &shared.DNSRecordSet{
                Data: []string{
                    "ipsam",
                    "alias",
                    "fugit",
                    "dolorum",
                },
                Domain: sdk.String("excepturi"),
                TTL: sdk.String("tempora"),
                Type: sdk.String("facilis"),
            },
            NewDNSRecordSet: &shared.DNSRecordSet{
                Data: []string{
                    "labore",
                    "delectus",
                    "eum",
                },
                Domain: sdk.String("non"),
                TTL: sdk.String("eligendi"),
                Type: sdk.String("sint"),
            },
            Zone: sdk.String("aliquid"),
        },
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("officia"),
        Key: sdk.String("dolor"),
        OauthToken: sdk.String("debitis"),
        Parent: "a",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("in"),
    }, operations.ServicenetworkingServicesDNSRecordSetsUpdateSecurity{
        Option1: &operations.ServicenetworkingServicesDNSRecordSetsUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## ServicenetworkingServicesDNSZonesAdd

Service producers can use this method to add private DNS zones in the shared producer host project and matching peering zones in the consumer project.

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
    res, err := s.Services.ServicenetworkingServicesDNSZonesAdd(ctx, operations.ServicenetworkingServicesDNSZonesAddRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AddDNSZoneRequest: &shared.AddDNSZoneRequest{
            ConsumerNetwork: sdk.String("maiores"),
            DNSSuffix: sdk.String("rerum"),
            Name: sdk.String("Valerie Runolfsson"),
        },
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("non"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("enim"),
        Parent: "accusamus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("provident"),
    }, operations.ServicenetworkingServicesDNSZonesAddSecurity{
        Option1: &operations.ServicenetworkingServicesDNSZonesAddSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## ServicenetworkingServicesDNSZonesRemove

Service producers can use this method to remove private DNS zones in the shared producer host project and matching peering zones in the consumer project.

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
    res, err := s.Services.ServicenetworkingServicesDNSZonesRemove(ctx, operations.ServicenetworkingServicesDNSZonesRemoveRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RemoveDNSZoneRequest: &shared.RemoveDNSZoneRequest{
            ConsumerNetwork: sdk.String("id"),
            Name: sdk.String("Jaime Will"),
        },
        AccessToken: sdk.String("nisi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("perferendis"),
        Parent: "nihil",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("id"),
    }, operations.ServicenetworkingServicesDNSZonesRemoveSecurity{
        Option1: &operations.ServicenetworkingServicesDNSZonesRemoveSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## ServicenetworkingServicesEnableVpcServiceControls

Enables VPC service controls for a connection.

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
    res, err := s.Services.ServicenetworkingServicesEnableVpcServiceControls(ctx, operations.ServicenetworkingServicesEnableVpcServiceControlsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        EnableVpcServiceControlsRequest: &shared.EnableVpcServiceControlsRequest{
            ConsumerNetwork: sdk.String("labore"),
        },
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("eum"),
        Key: sdk.String("vero"),
        OauthToken: sdk.String("aspernatur"),
        Parent: "architecto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("et"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.ServicenetworkingServicesEnableVpcServiceControlsSecurity{
        Option1: &operations.ServicenetworkingServicesEnableVpcServiceControlsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## ServicenetworkingServicesProjectsGlobalNetworksGet

Service producers use this method to get the configuration of their connection including the import/export of custom routes and subnetwork routes with public IP.

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
    res, err := s.Services.ServicenetworkingServicesProjectsGlobalNetworksGet(ctx, operations.ServicenetworkingServicesProjectsGlobalNetworksGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("accusantium"),
        IncludeUsedIPRanges: sdk.Bool(false),
        Key: sdk.String("mollitia"),
        Name: "Shaun Hammes",
        OauthToken: sdk.String("necessitatibus"),
        PageSize: sdk.Int64(141264),
        PageToken: sdk.String("nemo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("doloribus"),
    }, operations.ServicenetworkingServicesProjectsGlobalNetworksGetSecurity{
        Option1: &operations.ServicenetworkingServicesProjectsGlobalNetworksGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConsumerConfig != nil {
        // handle response
    }
}
```

## ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsCreate

Creates a peered DNS domain which sends requests for records in given namespace originating in the service producer VPC network to the consumer VPC network to be resolved.

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
    res, err := s.Services.ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsCreate(ctx, operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        PeeredDNSDomain: &shared.PeeredDNSDomain{
            DNSSuffix: sdk.String("eius"),
            Name: sdk.String("Alfredo Prosacco Sr."),
        },
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("expedita"),
        Fields: sdk.String("nihil"),
        Key: sdk.String("repellat"),
        OauthToken: sdk.String("quibusdam"),
        Parent: "sed",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("accusantium"),
    }, operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsCreateSecurity{
        Option1: &operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsDelete

Deletes a peered DNS domain.

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
    res, err := s.Services.ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsDelete(ctx, operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("sunt"),
        Key: sdk.String("quo"),
        Name: "Ervin Schoen",
        OauthToken: sdk.String("odit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("accusantium"),
        UploadProtocol: sdk.String("ab"),
    }, operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsDeleteSecurity{
        Option1: &operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsList

Lists peered DNS domains for a connection.

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
    res, err := s.Services.ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsList(ctx, operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("autem"),
        Key: sdk.String("nam"),
        OauthToken: sdk.String("eaque"),
        Parent: "pariatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nemo"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsListSecurity{
        Option1: &operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPeeredDNSDomainsResponse != nil {
        // handle response
    }
}
```

## ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfig

Service producers use this method to update the configuration of their connection including the import/export of custom routes and subnetwork routes with public IP.

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
    res, err := s.Services.ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfig(ctx, operations.ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        UpdateConsumerConfigRequestInput: &shared.UpdateConsumerConfigRequestInput{
            ConsumerConfig: &shared.ConsumerConfigInput{
                CloudsqlConfigs: []shared.CloudSQLConfig{
                    shared.CloudSQLConfig{
                        Service: sdk.String("aut"),
                        UmbrellaNetwork: sdk.String("cumque"),
                        UmbrellaProject: sdk.String("corporis"),
                    },
                },
                ConsumerExportCustomRoutes: sdk.Bool(false),
                ConsumerExportSubnetRoutesWithPublicIP: sdk.Bool(false),
                ConsumerImportCustomRoutes: sdk.Bool(false),
                ConsumerImportSubnetRoutesWithPublicIP: sdk.Bool(false),
                ProducerExportCustomRoutes: sdk.Bool(false),
                ProducerExportSubnetRoutesWithPublicIP: sdk.Bool(false),
                ProducerImportCustomRoutes: sdk.Bool(false),
                ProducerImportSubnetRoutesWithPublicIP: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("dolores"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("totam"),
        Parent: "dignissimos",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eaque"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("nesciunt"),
    }, operations.ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurity{
        Option1: &operations.ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## ServicenetworkingServicesRolesAdd

Service producers can use this method to add roles in the shared VPC host project. Each role is bound to the provided member. Each role must be selected from within an allowlisted set of roles. Each role is applied at only the granularity specified in the allowlist.

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
    res, err := s.Services.ServicenetworkingServicesRolesAdd(ctx, operations.ServicenetworkingServicesRolesAddRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AddRolesRequest: &shared.AddRolesRequest{
            ConsumerNetwork: sdk.String("perferendis"),
            PolicyBinding: []shared.PolicyBinding{
                shared.PolicyBinding{
                    Member: sdk.String("minus"),
                    Role: sdk.String("quam"),
                },
            },
        },
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nostrum"),
        Fields: sdk.String("hic"),
        Key: sdk.String("recusandae"),
        OauthToken: sdk.String("omnis"),
        Parent: "facilis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perspiciatis"),
        UploadType: sdk.String("voluptatem"),
        UploadProtocol: sdk.String("porro"),
    }, operations.ServicenetworkingServicesRolesAddSecurity{
        Option1: &operations.ServicenetworkingServicesRolesAddSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## ServicenetworkingServicesSearchRange

Service producers can use this method to find a currently unused range within consumer allocated ranges. This returned range is not reserved, and not guaranteed to remain unused. It will validate previously provided allocated ranges, find non-conflicting sub-range of requested size (expressed in number of leading bits of ipv4 network mask, as in CIDR range notation).

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
    res, err := s.Services.ServicenetworkingServicesSearchRange(ctx, operations.ServicenetworkingServicesSearchRangeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SearchRangeRequest: &shared.SearchRangeRequest{
            IPPrefixLength: sdk.Int(500026),
            Network: sdk.String("error"),
        },
        AccessToken: sdk.String("eaque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("rerum"),
        Fields: sdk.String("adipisci"),
        Key: sdk.String("asperiores"),
        OauthToken: sdk.String("earum"),
        Parent: "modi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.ServicenetworkingServicesSearchRangeSecurity{
        Option1: &operations.ServicenetworkingServicesSearchRangeSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## ServicenetworkingServicesValidate

Service producers use this method to validate if the consumer provided network, project and requested range are valid. This allows them to use a fail-fast mechanism for consumer requests, and not have to wait for AddSubnetwork operation completion to determine if user request is invalid.

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
    res, err := s.Services.ServicenetworkingServicesValidate(ctx, operations.ServicenetworkingServicesValidateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ValidateConsumerConfigRequest: &shared.ValidateConsumerConfigRequest{
            CheckServiceNetworkingUsePermission: sdk.Bool(false),
            ConsumerNetwork: sdk.String("provident"),
            ConsumerProject: &shared.ConsumerProject{
                ProjectNum: sdk.String("nobis"),
            },
            RangeReservation: &shared.RangeReservation{
                IPPrefixLength: sdk.Int(730122),
                RequestedRanges: []string{
                    "quaerat",
                    "quos",
                    "aliquid",
                    "dolorem",
                },
                SecondaryRangeIPPrefixLengths: []int{
                    222443,
                },
                SubnetworkCandidates: []shared.Subnetwork{
                    shared.Subnetwork{
                        IPCidrRange: sdk.String("ipsum"),
                        Name: sdk.String("Marshall Ritchie"),
                        Network: sdk.String("reiciendis"),
                        OutsideAllocation: sdk.Bool(false),
                        Region: sdk.String("amet"),
                        SecondaryIPRanges: []shared.SecondaryIPRange{
                            shared.SecondaryIPRange{
                                IPCidrRange: sdk.String("numquam"),
                                RangeName: sdk.String("veritatis"),
                            },
                            shared.SecondaryIPRange{
                                IPCidrRange: sdk.String("ipsa"),
                                RangeName: sdk.String("ipsa"),
                            },
                            shared.SecondaryIPRange{
                                IPCidrRange: sdk.String("iure"),
                                RangeName: sdk.String("odio"),
                            },
                        },
                    },
                },
            },
            ValidateNetwork: sdk.Bool(false),
        },
        AccessToken: sdk.String("quaerat"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("voluptatibus"),
        Key: sdk.String("voluptas"),
        OauthToken: sdk.String("natus"),
        Parent: "eos",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("atque"),
        UploadType: sdk.String("sit"),
        UploadProtocol: sdk.String("fugiat"),
    }, operations.ServicenetworkingServicesValidateSecurity{
        Option1: &operations.ServicenetworkingServicesValidateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ValidateConsumerConfigResponse != nil {
        // handle response
    }
}
```
