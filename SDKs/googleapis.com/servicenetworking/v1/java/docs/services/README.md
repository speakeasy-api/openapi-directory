# services

### Available Operations

* [servicenetworkingServicesAddSubnetwork](#servicenetworkingservicesaddsubnetwork) - For service producers, provisions a new subnet in a peered service's shared VPC network in the requested region and with the requested size that's expressed as a CIDR range (number of leading bits of ipV4 network mask). The method checks against the assigned allocated ranges to find a non-conflicting IP address range. The method will reuse a subnet if subsequent calls contain the same subnet name, region, and prefix length. This method will make producer's tenant project to be a shared VPC service project as needed.
* [servicenetworkingServicesConnectionsCreate](#servicenetworkingservicesconnectionscreate) - Creates a private connection that establishes a VPC Network Peering connection to a VPC network in the service producer's organization. The administrator of the service consumer's VPC network invokes this method. The administrator must assign one or more allocated IP ranges for provisioning subnetworks in the service producer's VPC network. This connection is used for all supported services in the service producer's organization, so it only needs to be invoked once.
* [servicenetworkingServicesConnectionsDeleteConnection](#servicenetworkingservicesconnectionsdeleteconnection) - Deletes a private service access connection.
* [servicenetworkingServicesConnectionsList](#servicenetworkingservicesconnectionslist) - List the private connections that are configured in a service consumer's VPC network.
* [servicenetworkingServicesConnectionsPatch](#servicenetworkingservicesconnectionspatch) - Updates the allocated ranges that are assigned to a connection.
* [servicenetworkingServicesDisableVpcServiceControls](#servicenetworkingservicesdisablevpcservicecontrols) - Disables VPC service controls for a connection.
* [servicenetworkingServicesDnsRecordSetsAdd](#servicenetworkingservicesdnsrecordsetsadd) - Service producers can use this method to add DNS record sets to private DNS zones in the shared producer host project.
* [servicenetworkingServicesDnsRecordSetsRemove](#servicenetworkingservicesdnsrecordsetsremove) - Service producers can use this method to remove DNS record sets from private DNS zones in the shared producer host project.
* [servicenetworkingServicesDnsRecordSetsUpdate](#servicenetworkingservicesdnsrecordsetsupdate) - Service producers can use this method to update DNS record sets from private DNS zones in the shared producer host project.
* [servicenetworkingServicesDnsZonesAdd](#servicenetworkingservicesdnszonesadd) - Service producers can use this method to add private DNS zones in the shared producer host project and matching peering zones in the consumer project.
* [servicenetworkingServicesDnsZonesRemove](#servicenetworkingservicesdnszonesremove) - Service producers can use this method to remove private DNS zones in the shared producer host project and matching peering zones in the consumer project.
* [servicenetworkingServicesEnableVpcServiceControls](#servicenetworkingservicesenablevpcservicecontrols) - Enables VPC service controls for a connection.
* [servicenetworkingServicesProjectsGlobalNetworksGet](#servicenetworkingservicesprojectsglobalnetworksget) - Service producers use this method to get the configuration of their connection including the import/export of custom routes and subnetwork routes with public IP.
* [servicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreate](#servicenetworkingservicesprojectsglobalnetworkspeereddnsdomainscreate) - Creates a peered DNS domain which sends requests for records in given namespace originating in the service producer VPC network to the consumer VPC network to be resolved.
* [servicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDelete](#servicenetworkingservicesprojectsglobalnetworkspeereddnsdomainsdelete) - Deletes a peered DNS domain.
* [servicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsList](#servicenetworkingservicesprojectsglobalnetworkspeereddnsdomainslist) - Lists peered DNS domains for a connection.
* [servicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfig](#servicenetworkingservicesprojectsglobalnetworksupdateconsumerconfig) - Service producers use this method to update the configuration of their connection including the import/export of custom routes and subnetwork routes with public IP.
* [servicenetworkingServicesRolesAdd](#servicenetworkingservicesrolesadd) - Service producers can use this method to add roles in the shared VPC host project. Each role is bound to the provided member. Each role must be selected from within an allowlisted set of roles. Each role is applied at only the granularity specified in the allowlist.
* [servicenetworkingServicesSearchRange](#servicenetworkingservicessearchrange) - Service producers can use this method to find a currently unused range within consumer allocated ranges. This returned range is not reserved, and not guaranteed to remain unused. It will validate previously provided allocated ranges, find non-conflicting sub-range of requested size (expressed in number of leading bits of ipv4 network mask, as in CIDR range notation).
* [servicenetworkingServicesValidate](#servicenetworkingservicesvalidate) - Service producers use this method to validate if the consumer provided network, project and requested range are valid. This allows them to use a fail-fast mechanism for consumer requests, and not have to wait for AddSubnetwork operation completion to determine if user request is invalid.

## servicenetworkingServicesAddSubnetwork

For service producers, provisions a new subnet in a peered service's shared VPC network in the requested region and with the requested size that's expressed as a CIDR range (number of leading bits of ipV4 network mask). The method checks against the assigned allocated ranges to find a non-conflicting IP address range. The method will reuse a subnet if subsequent calls contain the same subnet name, region, and prefix length. This method will make producer's tenant project to be a shared VPC service project as needed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicenetworkingServicesAddSubnetworkRequest;
import org.openapis.openapi.models.operations.ServicenetworkingServicesAddSubnetworkResponse;
import org.openapis.openapi.models.operations.ServicenetworkingServicesAddSubnetworkSecurity;
import org.openapis.openapi.models.operations.ServicenetworkingServicesAddSubnetworkSecurityOption1;
import org.openapis.openapi.models.operations.ServicenetworkingServicesAddSubnetworkSecurityOption2;
import org.openapis.openapi.models.shared.AddSubnetworkRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SecondaryIpRangeSpec;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicenetworkingServicesAddSubnetworkRequest req = new ServicenetworkingServicesAddSubnetworkRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                addSubnetworkRequest = new AddSubnetworkRequest() {{
                    allowSubnetCidrRoutesOverlap = false;
                    checkServiceNetworkingUsePermission = false;
                    computeIdempotencyWindow = "quod";
                    consumer = "quod";
                    consumerNetwork = "esse";
                    description = "totam";
                    ipPrefixLength = 780529;
                    outsideAllocationPublicIpRange = "dolorum";
                    privateIpv6GoogleAccess = "dicta";
                    purpose = "nam";
                    region = "officia";
                    requestedAddress = "occaecati";
                    requestedRanges = new String[]{{
                        add("deleniti"),
                    }};
                    role = "hic";
                    secondaryIpRangeSpecs = new org.openapis.openapi.models.shared.SecondaryIpRangeSpec[]{{
                        add(new SecondaryIpRangeSpec() {{
                            ipPrefixLength = 521848;
                            outsideAllocationPublicIpRange = "beatae";
                            rangeName = "commodi";
                            requestedAddress = "molestiae";
                        }}),
                        add(new SecondaryIpRangeSpec() {{
                            ipPrefixLength = 264555;
                            outsideAllocationPublicIpRange = "qui";
                            rangeName = "impedit";
                            requestedAddress = "cum";
                        }}),
                        add(new SecondaryIpRangeSpec() {{
                            ipPrefixLength = 456150;
                            outsideAllocationPublicIpRange = "ipsum";
                            rangeName = "excepturi";
                            requestedAddress = "aspernatur";
                        }}),
                        add(new SecondaryIpRangeSpec() {{
                            ipPrefixLength = 18789;
                            outsideAllocationPublicIpRange = "ad";
                            rangeName = "natus";
                            requestedAddress = "sed";
                        }}),
                    }};
                    subnetwork = "iste";
                    subnetworkUsers = new String[]{{
                        add("natus"),
                    }};
                    useCustomComputeIdempotencyWindow = false;
                }};;
                accessToken = "laboriosam";
                alt = AltEnum.PROTO;
                callback = "saepe";
                fields = "fuga";
                key = "in";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "iure";
                uploadProtocol = "saepe";
            }};            

            ServicenetworkingServicesAddSubnetworkResponse res = sdk.services.servicenetworkingServicesAddSubnetwork(req, new ServicenetworkingServicesAddSubnetworkSecurity() {{
                option1 = new ServicenetworkingServicesAddSubnetworkSecurityOption1("quidem", "architecto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicenetworkingServicesConnectionsCreate

Creates a private connection that establishes a VPC Network Peering connection to a VPC network in the service producer's organization. The administrator of the service consumer's VPC network invokes this method. The administrator must assign one or more allocated IP ranges for provisioning subnetworks in the service producer's VPC network. This connection is used for all supported services in the service producer's organization, so it only needs to be invoked once.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicenetworkingServicesConnectionsCreateRequest;
import org.openapis.openapi.models.operations.ServicenetworkingServicesConnectionsCreateResponse;
import org.openapis.openapi.models.operations.ServicenetworkingServicesConnectionsCreateSecurity;
import org.openapis.openapi.models.operations.ServicenetworkingServicesConnectionsCreateSecurityOption1;
import org.openapis.openapi.models.operations.ServicenetworkingServicesConnectionsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConnectionInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicenetworkingServicesConnectionsCreateRequest req = new ServicenetworkingServicesConnectionsCreateRequest("ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                connectionInput = new ConnectionInput() {{
                    network = "est";
                    reservedPeeringRanges = new String[]{{
                        add("laborum"),
                        add("dolores"),
                        add("dolorem"),
                    }};
                }};;
                accessToken = "corporis";
                alt = AltEnum.JSON;
                callback = "nobis";
                fields = "enim";
                key = "omnis";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "minima";
                uploadType = "excepturi";
                uploadProtocol = "accusantium";
            }};            

            ServicenetworkingServicesConnectionsCreateResponse res = sdk.services.servicenetworkingServicesConnectionsCreate(req, new ServicenetworkingServicesConnectionsCreateSecurity() {{
                option1 = new ServicenetworkingServicesConnectionsCreateSecurityOption1("iure", "culpa") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicenetworkingServicesConnectionsDeleteConnection

Deletes a private service access connection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicenetworkingServicesConnectionsDeleteConnectionRequest;
import org.openapis.openapi.models.operations.ServicenetworkingServicesConnectionsDeleteConnectionResponse;
import org.openapis.openapi.models.operations.ServicenetworkingServicesConnectionsDeleteConnectionSecurity;
import org.openapis.openapi.models.operations.ServicenetworkingServicesConnectionsDeleteConnectionSecurityOption1;
import org.openapis.openapi.models.operations.ServicenetworkingServicesConnectionsDeleteConnectionSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DeleteConnectionRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicenetworkingServicesConnectionsDeleteConnectionRequest req = new ServicenetworkingServicesConnectionsDeleteConnectionRequest("doloribus") {{
                dollarXgafv = XgafvEnum.TWO;
                deleteConnectionRequest = new DeleteConnectionRequest() {{
                    consumerNetwork = "architecto";
                }};;
                accessToken = "mollitia";
                alt = AltEnum.JSON;
                callback = "culpa";
                fields = "consequuntur";
                key = "repellat";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "numquam";
                uploadProtocol = "commodi";
            }};            

            ServicenetworkingServicesConnectionsDeleteConnectionResponse res = sdk.services.servicenetworkingServicesConnectionsDeleteConnection(req, new ServicenetworkingServicesConnectionsDeleteConnectionSecurity() {{
                option1 = new ServicenetworkingServicesConnectionsDeleteConnectionSecurityOption1("quam", "molestiae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicenetworkingServicesConnectionsList

List the private connections that are configured in a service consumer's VPC network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicenetworkingServicesConnectionsListRequest;
import org.openapis.openapi.models.operations.ServicenetworkingServicesConnectionsListResponse;
import org.openapis.openapi.models.operations.ServicenetworkingServicesConnectionsListSecurity;
import org.openapis.openapi.models.operations.ServicenetworkingServicesConnectionsListSecurityOption1;
import org.openapis.openapi.models.operations.ServicenetworkingServicesConnectionsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicenetworkingServicesConnectionsListRequest req = new ServicenetworkingServicesConnectionsListRequest("velit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quia";
                alt = AltEnum.MEDIA;
                callback = "vitae";
                fields = "laborum";
                key = "animi";
                network = "enim";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "sequi";
                uploadProtocol = "tenetur";
            }};            

            ServicenetworkingServicesConnectionsListResponse res = sdk.services.servicenetworkingServicesConnectionsList(req, new ServicenetworkingServicesConnectionsListSecurity() {{
                option1 = new ServicenetworkingServicesConnectionsListSecurityOption1("ipsam", "id") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listConnectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicenetworkingServicesConnectionsPatch

Updates the allocated ranges that are assigned to a connection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicenetworkingServicesConnectionsPatchRequest;
import org.openapis.openapi.models.operations.ServicenetworkingServicesConnectionsPatchResponse;
import org.openapis.openapi.models.operations.ServicenetworkingServicesConnectionsPatchSecurity;
import org.openapis.openapi.models.operations.ServicenetworkingServicesConnectionsPatchSecurityOption1;
import org.openapis.openapi.models.operations.ServicenetworkingServicesConnectionsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConnectionInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicenetworkingServicesConnectionsPatchRequest req = new ServicenetworkingServicesConnectionsPatchRequest("possimus") {{
                dollarXgafv = XgafvEnum.ONE;
                connectionInput = new ConnectionInput() {{
                    network = "quasi";
                    reservedPeeringRanges = new String[]{{
                        add("temporibus"),
                        add("laborum"),
                        add("quasi"),
                    }};
                }};;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "vero";
                fields = "nihil";
                force = false;
                key = "praesentium";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "ipsa";
                updateMask = "omnis";
                uploadType = "voluptate";
                uploadProtocol = "cum";
            }};            

            ServicenetworkingServicesConnectionsPatchResponse res = sdk.services.servicenetworkingServicesConnectionsPatch(req, new ServicenetworkingServicesConnectionsPatchSecurity() {{
                option1 = new ServicenetworkingServicesConnectionsPatchSecurityOption1("perferendis", "doloremque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicenetworkingServicesDisableVpcServiceControls

Disables VPC service controls for a connection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicenetworkingServicesDisableVpcServiceControlsRequest;
import org.openapis.openapi.models.operations.ServicenetworkingServicesDisableVpcServiceControlsResponse;
import org.openapis.openapi.models.operations.ServicenetworkingServicesDisableVpcServiceControlsSecurity;
import org.openapis.openapi.models.operations.ServicenetworkingServicesDisableVpcServiceControlsSecurityOption1;
import org.openapis.openapi.models.operations.ServicenetworkingServicesDisableVpcServiceControlsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DisableVpcServiceControlsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicenetworkingServicesDisableVpcServiceControlsRequest req = new ServicenetworkingServicesDisableVpcServiceControlsRequest("reprehenderit") {{
                dollarXgafv = XgafvEnum.ONE;
                disableVpcServiceControlsRequest = new DisableVpcServiceControlsRequest() {{
                    consumerNetwork = "maiores";
                }};;
                accessToken = "dicta";
                alt = AltEnum.MEDIA;
                callback = "dolore";
                fields = "iusto";
                key = "dicta";
                oauthToken = "harum";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "accusamus";
                uploadProtocol = "commodi";
            }};            

            ServicenetworkingServicesDisableVpcServiceControlsResponse res = sdk.services.servicenetworkingServicesDisableVpcServiceControls(req, new ServicenetworkingServicesDisableVpcServiceControlsSecurity() {{
                option1 = new ServicenetworkingServicesDisableVpcServiceControlsSecurityOption1("repudiandae", "quae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicenetworkingServicesDnsRecordSetsAdd

Service producers can use this method to add DNS record sets to private DNS zones in the shared producer host project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicenetworkingServicesDnsRecordSetsAddRequest;
import org.openapis.openapi.models.operations.ServicenetworkingServicesDnsRecordSetsAddResponse;
import org.openapis.openapi.models.operations.ServicenetworkingServicesDnsRecordSetsAddSecurity;
import org.openapis.openapi.models.operations.ServicenetworkingServicesDnsRecordSetsAddSecurityOption1;
import org.openapis.openapi.models.operations.ServicenetworkingServicesDnsRecordSetsAddSecurityOption2;
import org.openapis.openapi.models.shared.AddDnsRecordSetRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DnsRecordSet;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicenetworkingServicesDnsRecordSetsAddRequest req = new ServicenetworkingServicesDnsRecordSetsAddRequest("ipsum") {{
                dollarXgafv = XgafvEnum.TWO;
                addDnsRecordSetRequest = new AddDnsRecordSetRequest() {{
                    consumerNetwork = "molestias";
                    dnsRecordSet = new DnsRecordSet() {{
                        data = new String[]{{
                            add("pariatur"),
                            add("modi"),
                            add("praesentium"),
                        }};
                        domain = "rem";
                        ttl = "voluptates";
                        type = "quasi";
                    }};;
                    zone = "repudiandae";
                }};;
                accessToken = "sint";
                alt = AltEnum.JSON;
                callback = "itaque";
                fields = "incidunt";
                key = "enim";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "quibusdam";
                uploadProtocol = "explicabo";
            }};            

            ServicenetworkingServicesDnsRecordSetsAddResponse res = sdk.services.servicenetworkingServicesDnsRecordSetsAdd(req, new ServicenetworkingServicesDnsRecordSetsAddSecurity() {{
                option1 = new ServicenetworkingServicesDnsRecordSetsAddSecurityOption1("deserunt", "distinctio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicenetworkingServicesDnsRecordSetsRemove

Service producers can use this method to remove DNS record sets from private DNS zones in the shared producer host project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicenetworkingServicesDnsRecordSetsRemoveRequest;
import org.openapis.openapi.models.operations.ServicenetworkingServicesDnsRecordSetsRemoveResponse;
import org.openapis.openapi.models.operations.ServicenetworkingServicesDnsRecordSetsRemoveSecurity;
import org.openapis.openapi.models.operations.ServicenetworkingServicesDnsRecordSetsRemoveSecurityOption1;
import org.openapis.openapi.models.operations.ServicenetworkingServicesDnsRecordSetsRemoveSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DnsRecordSet;
import org.openapis.openapi.models.shared.RemoveDnsRecordSetRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicenetworkingServicesDnsRecordSetsRemoveRequest req = new ServicenetworkingServicesDnsRecordSetsRemoveRequest("quibusdam") {{
                dollarXgafv = XgafvEnum.ONE;
                removeDnsRecordSetRequest = new RemoveDnsRecordSetRequest() {{
                    consumerNetwork = "modi";
                    dnsRecordSet = new DnsRecordSet() {{
                        data = new String[]{{
                            add("aliquid"),
                        }};
                        domain = "cupiditate";
                        ttl = "quos";
                        type = "perferendis";
                    }};;
                    zone = "magni";
                }};;
                accessToken = "assumenda";
                alt = AltEnum.MEDIA;
                callback = "alias";
                fields = "fugit";
                key = "dolorum";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "facilis";
                uploadProtocol = "tempore";
            }};            

            ServicenetworkingServicesDnsRecordSetsRemoveResponse res = sdk.services.servicenetworkingServicesDnsRecordSetsRemove(req, new ServicenetworkingServicesDnsRecordSetsRemoveSecurity() {{
                option1 = new ServicenetworkingServicesDnsRecordSetsRemoveSecurityOption1("labore", "delectus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicenetworkingServicesDnsRecordSetsUpdate

Service producers can use this method to update DNS record sets from private DNS zones in the shared producer host project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicenetworkingServicesDnsRecordSetsUpdateRequest;
import org.openapis.openapi.models.operations.ServicenetworkingServicesDnsRecordSetsUpdateResponse;
import org.openapis.openapi.models.operations.ServicenetworkingServicesDnsRecordSetsUpdateSecurity;
import org.openapis.openapi.models.operations.ServicenetworkingServicesDnsRecordSetsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.ServicenetworkingServicesDnsRecordSetsUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DnsRecordSet;
import org.openapis.openapi.models.shared.UpdateDnsRecordSetRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicenetworkingServicesDnsRecordSetsUpdateRequest req = new ServicenetworkingServicesDnsRecordSetsUpdateRequest("eum") {{
                dollarXgafv = XgafvEnum.ONE;
                updateDnsRecordSetRequest = new UpdateDnsRecordSetRequest() {{
                    consumerNetwork = "eligendi";
                    existingDnsRecordSet = new DnsRecordSet() {{
                        data = new String[]{{
                            add("aliquid"),
                            add("provident"),
                            add("necessitatibus"),
                        }};
                        domain = "sint";
                        ttl = "officia";
                        type = "dolor";
                    }};;
                    newDnsRecordSet = new DnsRecordSet() {{
                        data = new String[]{{
                            add("a"),
                            add("dolorum"),
                            add("in"),
                            add("in"),
                        }};
                        domain = "illum";
                        ttl = "maiores";
                        type = "rerum";
                    }};;
                    zone = "dicta";
                }};;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "facere";
                fields = "ea";
                key = "aliquid";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "non";
                uploadProtocol = "occaecati";
            }};            

            ServicenetworkingServicesDnsRecordSetsUpdateResponse res = sdk.services.servicenetworkingServicesDnsRecordSetsUpdate(req, new ServicenetworkingServicesDnsRecordSetsUpdateSecurity() {{
                option1 = new ServicenetworkingServicesDnsRecordSetsUpdateSecurityOption1("enim", "accusamus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicenetworkingServicesDnsZonesAdd

Service producers can use this method to add private DNS zones in the shared producer host project and matching peering zones in the consumer project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicenetworkingServicesDnsZonesAddRequest;
import org.openapis.openapi.models.operations.ServicenetworkingServicesDnsZonesAddResponse;
import org.openapis.openapi.models.operations.ServicenetworkingServicesDnsZonesAddSecurity;
import org.openapis.openapi.models.operations.ServicenetworkingServicesDnsZonesAddSecurityOption1;
import org.openapis.openapi.models.operations.ServicenetworkingServicesDnsZonesAddSecurityOption2;
import org.openapis.openapi.models.shared.AddDnsZoneRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicenetworkingServicesDnsZonesAddRequest req = new ServicenetworkingServicesDnsZonesAddRequest("delectus") {{
                dollarXgafv = XgafvEnum.TWO;
                addDnsZoneRequest = new AddDnsZoneRequest() {{
                    consumerNetwork = "provident";
                    dnsSuffix = "nam";
                    name = "Nelson Lesch";
                }};;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "vel";
                fields = "natus";
                key = "omnis";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "nihil";
                uploadProtocol = "magnam";
            }};            

            ServicenetworkingServicesDnsZonesAddResponse res = sdk.services.servicenetworkingServicesDnsZonesAdd(req, new ServicenetworkingServicesDnsZonesAddSecurity() {{
                option1 = new ServicenetworkingServicesDnsZonesAddSecurityOption1("distinctio", "id") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicenetworkingServicesDnsZonesRemove

Service producers can use this method to remove private DNS zones in the shared producer host project and matching peering zones in the consumer project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicenetworkingServicesDnsZonesRemoveRequest;
import org.openapis.openapi.models.operations.ServicenetworkingServicesDnsZonesRemoveResponse;
import org.openapis.openapi.models.operations.ServicenetworkingServicesDnsZonesRemoveSecurity;
import org.openapis.openapi.models.operations.ServicenetworkingServicesDnsZonesRemoveSecurityOption1;
import org.openapis.openapi.models.operations.ServicenetworkingServicesDnsZonesRemoveSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RemoveDnsZoneRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicenetworkingServicesDnsZonesRemoveRequest req = new ServicenetworkingServicesDnsZonesRemoveRequest("labore") {{
                dollarXgafv = XgafvEnum.ONE;
                removeDnsZoneRequest = new RemoveDnsZoneRequest() {{
                    consumerNetwork = "suscipit";
                    name = "Robin Keebler";
                }};;
                accessToken = "architecto";
                alt = AltEnum.JSON;
                callback = "et";
                fields = "excepturi";
                key = "ullam";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "sint";
                uploadProtocol = "accusantium";
            }};            

            ServicenetworkingServicesDnsZonesRemoveResponse res = sdk.services.servicenetworkingServicesDnsZonesRemove(req, new ServicenetworkingServicesDnsZonesRemoveSecurity() {{
                option1 = new ServicenetworkingServicesDnsZonesRemoveSecurityOption1("mollitia", "reiciendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicenetworkingServicesEnableVpcServiceControls

Enables VPC service controls for a connection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicenetworkingServicesEnableVpcServiceControlsRequest;
import org.openapis.openapi.models.operations.ServicenetworkingServicesEnableVpcServiceControlsResponse;
import org.openapis.openapi.models.operations.ServicenetworkingServicesEnableVpcServiceControlsSecurity;
import org.openapis.openapi.models.operations.ServicenetworkingServicesEnableVpcServiceControlsSecurityOption1;
import org.openapis.openapi.models.operations.ServicenetworkingServicesEnableVpcServiceControlsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EnableVpcServiceControlsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicenetworkingServicesEnableVpcServiceControlsRequest req = new ServicenetworkingServicesEnableVpcServiceControlsRequest("mollitia") {{
                dollarXgafv = XgafvEnum.ONE;
                enableVpcServiceControlsRequest = new EnableVpcServiceControlsRequest() {{
                    consumerNetwork = "eum";
                }};;
                accessToken = "dolor";
                alt = AltEnum.PROTO;
                callback = "odit";
                fields = "nemo";
                key = "quasi";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "debitis";
                uploadProtocol = "eius";
            }};            

            ServicenetworkingServicesEnableVpcServiceControlsResponse res = sdk.services.servicenetworkingServicesEnableVpcServiceControls(req, new ServicenetworkingServicesEnableVpcServiceControlsSecurity() {{
                option1 = new ServicenetworkingServicesEnableVpcServiceControlsSecurityOption1("maxime", "deleniti") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicenetworkingServicesProjectsGlobalNetworksGet

Service producers use this method to get the configuration of their connection including the import/export of custom routes and subnetwork routes with public IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicenetworkingServicesProjectsGlobalNetworksGetRequest;
import org.openapis.openapi.models.operations.ServicenetworkingServicesProjectsGlobalNetworksGetResponse;
import org.openapis.openapi.models.operations.ServicenetworkingServicesProjectsGlobalNetworksGetSecurity;
import org.openapis.openapi.models.operations.ServicenetworkingServicesProjectsGlobalNetworksGetSecurityOption1;
import org.openapis.openapi.models.operations.ServicenetworkingServicesProjectsGlobalNetworksGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicenetworkingServicesProjectsGlobalNetworksGetRequest req = new ServicenetworkingServicesProjectsGlobalNetworksGetRequest("facilis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "architecto";
                alt = AltEnum.JSON;
                callback = "repudiandae";
                fields = "ullam";
                includeUsedIpRanges = false;
                key = "expedita";
                oauthToken = "nihil";
                pageSize = 998848L;
                pageToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "saepe";
                uploadProtocol = "pariatur";
            }};            

            ServicenetworkingServicesProjectsGlobalNetworksGetResponse res = sdk.services.servicenetworkingServicesProjectsGlobalNetworksGet(req, new ServicenetworkingServicesProjectsGlobalNetworksGetSecurity() {{
                option1 = new ServicenetworkingServicesProjectsGlobalNetworksGetSecurityOption1("accusantium", "consequuntur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.consumerConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreate

Creates a peered DNS domain which sends requests for records in given namespace originating in the service producer VPC network to the consumer VPC network to be resolved.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateRequest;
import org.openapis.openapi.models.operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateResponse;
import org.openapis.openapi.models.operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurity;
import org.openapis.openapi.models.operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurityOption1;
import org.openapis.openapi.models.operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PeeredDnsDomain;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateRequest req = new ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateRequest("praesentium") {{
                dollarXgafv = XgafvEnum.TWO;
                peeredDnsDomain = new PeeredDnsDomain() {{
                    dnsSuffix = "magni";
                    name = "Angelica Stanton";
                }};;
                accessToken = "ea";
                alt = AltEnum.MEDIA;
                callback = "odit";
                fields = "ea";
                key = "accusantium";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "quidem";
                uploadProtocol = "ipsam";
            }};            

            ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateResponse res = sdk.services.servicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreate(req, new ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurity() {{
                option1 = new ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurityOption1("voluptate", "autem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDelete

Deletes a peered DNS domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteRequest;
import org.openapis.openapi.models.operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteResponse;
import org.openapis.openapi.models.operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurity;
import org.openapis.openapi.models.operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteRequest req = new ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteRequest("nam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "pariatur";
                alt = AltEnum.MEDIA;
                callback = "voluptatibus";
                fields = "perferendis";
                key = "fugiat";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "aut";
                uploadType = "cumque";
                uploadProtocol = "corporis";
            }};            

            ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteResponse res = sdk.services.servicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDelete(req, new ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurity() {{
                option1 = new ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurityOption1("hic", "libero") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsList

Lists peered DNS domains for a connection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListRequest;
import org.openapis.openapi.models.operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListResponse;
import org.openapis.openapi.models.operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurity;
import org.openapis.openapi.models.operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurityOption1;
import org.openapis.openapi.models.operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListRequest req = new ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListRequest("nobis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quis";
                alt = AltEnum.MEDIA;
                callback = "dignissimos";
                fields = "eaque";
                key = "quis";
                oauthToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "eos";
                uploadType = "perferendis";
                uploadProtocol = "dolores";
            }};            

            ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListResponse res = sdk.services.servicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsList(req, new ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurity() {{
                option1 = new ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurityOption1("minus", "quam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listPeeredDnsDomainsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfig

Service producers use this method to update the configuration of their connection including the import/export of custom routes and subnetwork routes with public IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigRequest;
import org.openapis.openapi.models.operations.ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigResponse;
import org.openapis.openapi.models.operations.ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurity;
import org.openapis.openapi.models.operations.ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurityOption1;
import org.openapis.openapi.models.operations.ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CloudSQLConfig;
import org.openapis.openapi.models.shared.ConsumerConfigInput;
import org.openapis.openapi.models.shared.UpdateConsumerConfigRequestInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigRequest req = new ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                updateConsumerConfigRequestInput = new UpdateConsumerConfigRequestInput() {{
                    consumerConfig = new ConsumerConfigInput() {{
                        cloudsqlConfigs = new org.openapis.openapi.models.shared.CloudSQLConfig[]{{
                            add(new CloudSQLConfig() {{
                                service = "hic";
                                umbrellaNetwork = "recusandae";
                                umbrellaProject = "omnis";
                            }}),
                            add(new CloudSQLConfig() {{
                                service = "facilis";
                                umbrellaNetwork = "perspiciatis";
                                umbrellaProject = "voluptatem";
                            }}),
                        }};
                        consumerExportCustomRoutes = false;
                        consumerExportSubnetRoutesWithPublicIp = false;
                        consumerImportCustomRoutes = false;
                        consumerImportSubnetRoutesWithPublicIp = false;
                        producerExportCustomRoutes = false;
                        producerExportSubnetRoutesWithPublicIp = false;
                        producerImportCustomRoutes = false;
                        producerImportSubnetRoutesWithPublicIp = false;
                    }};;
                }};;
                accessToken = "porro";
                alt = AltEnum.JSON;
                callback = "blanditiis";
                fields = "error";
                key = "eaque";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "rerum";
                uploadType = "adipisci";
                uploadProtocol = "asperiores";
            }};            

            ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigResponse res = sdk.services.servicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfig(req, new ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurity() {{
                option1 = new ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurityOption1("earum", "modi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicenetworkingServicesRolesAdd

Service producers can use this method to add roles in the shared VPC host project. Each role is bound to the provided member. Each role must be selected from within an allowlisted set of roles. Each role is applied at only the granularity specified in the allowlist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicenetworkingServicesRolesAddRequest;
import org.openapis.openapi.models.operations.ServicenetworkingServicesRolesAddResponse;
import org.openapis.openapi.models.operations.ServicenetworkingServicesRolesAddSecurity;
import org.openapis.openapi.models.operations.ServicenetworkingServicesRolesAddSecurityOption1;
import org.openapis.openapi.models.operations.ServicenetworkingServicesRolesAddSecurityOption2;
import org.openapis.openapi.models.shared.AddRolesRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PolicyBinding;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicenetworkingServicesRolesAddRequest req = new ServicenetworkingServicesRolesAddRequest("iste") {{
                dollarXgafv = XgafvEnum.TWO;
                addRolesRequest = new AddRolesRequest() {{
                    consumerNetwork = "deleniti";
                    policyBinding = new org.openapis.openapi.models.shared.PolicyBinding[]{{
                        add(new PolicyBinding() {{
                            member = "provident";
                            role = "nobis";
                        }}),
                        add(new PolicyBinding() {{
                            member = "libero";
                            role = "delectus";
                        }}),
                        add(new PolicyBinding() {{
                            member = "quaerat";
                            role = "quos";
                        }}),
                        add(new PolicyBinding() {{
                            member = "aliquid";
                            role = "dolorem";
                        }}),
                    }};
                }};;
                accessToken = "dolorem";
                alt = AltEnum.JSON;
                callback = "qui";
                fields = "ipsum";
                key = "hic";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "voluptate";
                uploadProtocol = "dignissimos";
            }};            

            ServicenetworkingServicesRolesAddResponse res = sdk.services.servicenetworkingServicesRolesAdd(req, new ServicenetworkingServicesRolesAddSecurity() {{
                option1 = new ServicenetworkingServicesRolesAddSecurityOption1("reiciendis", "amet") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicenetworkingServicesSearchRange

Service producers can use this method to find a currently unused range within consumer allocated ranges. This returned range is not reserved, and not guaranteed to remain unused. It will validate previously provided allocated ranges, find non-conflicting sub-range of requested size (expressed in number of leading bits of ipv4 network mask, as in CIDR range notation).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicenetworkingServicesSearchRangeRequest;
import org.openapis.openapi.models.operations.ServicenetworkingServicesSearchRangeResponse;
import org.openapis.openapi.models.operations.ServicenetworkingServicesSearchRangeSecurity;
import org.openapis.openapi.models.operations.ServicenetworkingServicesSearchRangeSecurityOption1;
import org.openapis.openapi.models.operations.ServicenetworkingServicesSearchRangeSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SearchRangeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicenetworkingServicesSearchRangeRequest req = new ServicenetworkingServicesSearchRangeRequest("dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                searchRangeRequest = new SearchRangeRequest() {{
                    ipPrefixLength = 85295;
                    network = "ipsa";
                }};;
                accessToken = "ipsa";
                alt = AltEnum.MEDIA;
                callback = "odio";
                fields = "quaerat";
                key = "accusamus";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "voluptas";
                uploadProtocol = "natus";
            }};            

            ServicenetworkingServicesSearchRangeResponse res = sdk.services.servicenetworkingServicesSearchRange(req, new ServicenetworkingServicesSearchRangeSecurity() {{
                option1 = new ServicenetworkingServicesSearchRangeSecurityOption1("eos", "atque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicenetworkingServicesValidate

Service producers use this method to validate if the consumer provided network, project and requested range are valid. This allows them to use a fail-fast mechanism for consumer requests, and not have to wait for AddSubnetwork operation completion to determine if user request is invalid.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicenetworkingServicesValidateRequest;
import org.openapis.openapi.models.operations.ServicenetworkingServicesValidateResponse;
import org.openapis.openapi.models.operations.ServicenetworkingServicesValidateSecurity;
import org.openapis.openapi.models.operations.ServicenetworkingServicesValidateSecurityOption1;
import org.openapis.openapi.models.operations.ServicenetworkingServicesValidateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConsumerProject;
import org.openapis.openapi.models.shared.RangeReservation;
import org.openapis.openapi.models.shared.SecondaryIpRange;
import org.openapis.openapi.models.shared.Subnetwork;
import org.openapis.openapi.models.shared.ValidateConsumerConfigRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicenetworkingServicesValidateRequest req = new ServicenetworkingServicesValidateRequest("sit") {{
                dollarXgafv = XgafvEnum.TWO;
                validateConsumerConfigRequest = new ValidateConsumerConfigRequest() {{
                    checkServiceNetworkingUsePermission = false;
                    consumerNetwork = "ab";
                    consumerProject = new ConsumerProject() {{
                        projectNum = "soluta";
                    }};;
                    rangeReservation = new RangeReservation() {{
                        ipPrefixLength = 679393;
                        requestedRanges = new String[]{{
                            add("voluptate"),
                            add("dolorum"),
                        }};
                        secondaryRangeIpPrefixLengths = new Integer[]{{
                            add(607045),
                            add(896672),
                            add(714697),
                        }};
                        subnetworkCandidates = new org.openapis.openapi.models.shared.Subnetwork[]{{
                            add(new Subnetwork() {{
                                ipCidrRange = "nihil";
                                name = "Tamara Ondricka";
                                network = "aspernatur";
                                outsideAllocation = false;
                                region = "perferendis";
                                secondaryIpRanges = new org.openapis.openapi.models.shared.SecondaryIpRange[]{{
                                    add(new SecondaryIpRange() {{
                                        ipCidrRange = "optio";
                                        rangeName = "accusamus";
                                    }}),
                                }};
                            }}),
                            add(new Subnetwork() {{
                                ipCidrRange = "ad";
                                name = "Sam Oberbrunner";
                                network = "repellendus";
                                outsideAllocation = false;
                                region = "totam";
                                secondaryIpRanges = new org.openapis.openapi.models.shared.SecondaryIpRange[]{{
                                    add(new SecondaryIpRange() {{
                                        ipCidrRange = "alias";
                                        rangeName = "at";
                                    }}),
                                    add(new SecondaryIpRange() {{
                                        ipCidrRange = "quaerat";
                                        rangeName = "tempora";
                                    }}),
                                    add(new SecondaryIpRange() {{
                                        ipCidrRange = "vel";
                                        rangeName = "quod";
                                    }}),
                                }};
                            }}),
                            add(new Subnetwork() {{
                                ipCidrRange = "officiis";
                                name = "Jan Wilderman";
                                network = "iusto";
                                outsideAllocation = false;
                                region = "ipsum";
                                secondaryIpRanges = new org.openapis.openapi.models.shared.SecondaryIpRange[]{{
                                    add(new SecondaryIpRange() {{
                                        ipCidrRange = "tenetur";
                                        rangeName = "amet";
                                    }}),
                                    add(new SecondaryIpRange() {{
                                        ipCidrRange = "tempore";
                                        rangeName = "accusamus";
                                    }}),
                                    add(new SecondaryIpRange() {{
                                        ipCidrRange = "numquam";
                                        rangeName = "enim";
                                    }}),
                                    add(new SecondaryIpRange() {{
                                        ipCidrRange = "dolorem";
                                        rangeName = "sapiente";
                                    }}),
                                }};
                            }}),
                            add(new Subnetwork() {{
                                ipCidrRange = "totam";
                                name = "Karen Rath";
                                network = "vel";
                                outsideAllocation = false;
                                region = "libero";
                                secondaryIpRanges = new org.openapis.openapi.models.shared.SecondaryIpRange[]{{
                                    add(new SecondaryIpRange() {{
                                        ipCidrRange = "deserunt";
                                        rangeName = "quam";
                                    }}),
                                    add(new SecondaryIpRange() {{
                                        ipCidrRange = "ipsum";
                                        rangeName = "incidunt";
                                    }}),
                                }};
                            }}),
                        }};
                    }};;
                    validateNetwork = false;
                }};;
                accessToken = "qui";
                alt = AltEnum.MEDIA;
                callback = "maxime";
                fields = "pariatur";
                key = "soluta";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "totam";
                uploadProtocol = "incidunt";
            }};            

            ServicenetworkingServicesValidateResponse res = sdk.services.servicenetworkingServicesValidate(req, new ServicenetworkingServicesValidateSecurity() {{
                option1 = new ServicenetworkingServicesValidateSecurityOption1("aspernatur", "dolores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.validateConsumerConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
