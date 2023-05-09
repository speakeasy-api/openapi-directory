# subnetworks

### Available Operations

* [computeSubnetworksAggregatedList](#computesubnetworksaggregatedlist) - Retrieves an aggregated list of subnetworks.
* [computeSubnetworksDelete](#computesubnetworksdelete) - Deletes the specified subnetwork.
* [computeSubnetworksExpandIpCidrRange](#computesubnetworksexpandipcidrrange) - Expands the IP CIDR range of the subnetwork to a specified value.
* [computeSubnetworksGet](#computesubnetworksget) - Returns the specified subnetwork.
* [computeSubnetworksGetIamPolicy](#computesubnetworksgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeSubnetworksInsert](#computesubnetworksinsert) - Creates a subnetwork in the specified project using the data included in the request.
* [computeSubnetworksList](#computesubnetworkslist) - Retrieves a list of subnetworks available to the specified project.
* [computeSubnetworksListUsable](#computesubnetworkslistusable) - Retrieves an aggregated list of all usable subnetworks in the project.
* [computeSubnetworksPatch](#computesubnetworkspatch) - Patches the specified subnetwork with the data included in the request. Only certain fields can be updated with a patch request as indicated in the field descriptions. You must specify the current fingerprint of the subnetwork resource being patched.
* [computeSubnetworksSetIamPolicy](#computesubnetworkssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeSubnetworksSetPrivateIpGoogleAccess](#computesubnetworkssetprivateipgoogleaccess) - Set whether VMs in this subnet can access Google services without assigning external IP addresses through Private Google Access.
* [computeSubnetworksTestIamPermissions](#computesubnetworkstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeSubnetworksAggregatedList

Retrieves an aggregated list of subnetworks.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSubnetworksAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeSubnetworksAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeSubnetworksAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeSubnetworksAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSubnetworksAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeSubnetworksAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSubnetworksAggregatedListRequest req = new ComputeSubnetworksAggregatedListRequest("culpa") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolores";
                alt = AltEnum.JSON;
                callback = "enim";
                fields = "iste";
                filter = "est";
                includeAllScopes = false;
                key = "ipsum";
                maxResults = 272566L;
                oauthToken = "in";
                orderBy = "maiores";
                pageToken = "ad";
                prettyPrint = false;
                quotaUser = "expedita";
                returnPartialSuccess = false;
                uploadType = "velit";
                uploadProtocol = "sit";
                userIp = "dicta";
            }};            

            ComputeSubnetworksAggregatedListResponse res = sdk.subnetworks.computeSubnetworksAggregatedList(req, new ComputeSubnetworksAggregatedListSecurity() {{
                option1 = new ComputeSubnetworksAggregatedListSecurityOption1("corrupti", "excepturi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.subnetworkAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeSubnetworksDelete

Deletes the specified subnetwork.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSubnetworksDeleteRequest;
import org.openapis.openapi.models.operations.ComputeSubnetworksDeleteResponse;
import org.openapis.openapi.models.operations.ComputeSubnetworksDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeSubnetworksDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSubnetworksDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSubnetworksDeleteRequest req = new ComputeSubnetworksDeleteRequest("vitae", "voluptates", "mollitia") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eius";
                alt = AltEnum.PROTO;
                callback = "consequatur";
                fields = "quisquam";
                key = "neque";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "qui";
                requestId = "accusantium";
                uploadType = "optio";
                uploadProtocol = "occaecati";
                userIp = "ipsa";
            }};            

            ComputeSubnetworksDeleteResponse res = sdk.subnetworks.computeSubnetworksDelete(req, new ComputeSubnetworksDeleteSecurity() {{
                option1 = new ComputeSubnetworksDeleteSecurityOption1("asperiores", "ipsa") {{
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

## computeSubnetworksExpandIpCidrRange

Expands the IP CIDR range of the subnetwork to a specified value.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSubnetworksExpandIpCidrRangeRequest;
import org.openapis.openapi.models.operations.ComputeSubnetworksExpandIpCidrRangeResponse;
import org.openapis.openapi.models.operations.ComputeSubnetworksExpandIpCidrRangeSecurity;
import org.openapis.openapi.models.operations.ComputeSubnetworksExpandIpCidrRangeSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSubnetworksExpandIpCidrRangeSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SubnetworksExpandIpCidrRangeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSubnetworksExpandIpCidrRangeRequest req = new ComputeSubnetworksExpandIpCidrRangeRequest("commodi", "repudiandae", "eius") {{
                dollarXgafv = XgafvEnum.ONE;
                subnetworksExpandIpCidrRangeRequest = new SubnetworksExpandIpCidrRangeRequest() {{
                    ipCidrRange = "sint";
                }};;
                accessToken = "a";
                alt = AltEnum.PROTO;
                callback = "iusto";
                fields = "ab";
                key = "quis";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "eveniet";
                requestId = "eaque";
                uploadType = "quae";
                uploadProtocol = "perferendis";
                userIp = "iste";
            }};            

            ComputeSubnetworksExpandIpCidrRangeResponse res = sdk.subnetworks.computeSubnetworksExpandIpCidrRange(req, new ComputeSubnetworksExpandIpCidrRangeSecurity() {{
                option1 = new ComputeSubnetworksExpandIpCidrRangeSecurityOption1("blanditiis", "quo") {{
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

## computeSubnetworksGet

Returns the specified subnetwork.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSubnetworksGetRequest;
import org.openapis.openapi.models.operations.ComputeSubnetworksGetResponse;
import org.openapis.openapi.models.operations.ComputeSubnetworksGetSecurity;
import org.openapis.openapi.models.operations.ComputeSubnetworksGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSubnetworksGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeSubnetworksGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSubnetworksGetRequest req = new ComputeSubnetworksGetRequest("asperiores", "nisi", "aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ullam";
                alt = AltEnum.PROTO;
                callback = "nihil";
                fields = "fugiat";
                key = "consequatur";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "sunt";
                uploadType = "eveniet";
                uploadProtocol = "ipsum";
                userIp = "iure";
            }};            

            ComputeSubnetworksGetResponse res = sdk.subnetworks.computeSubnetworksGet(req, new ComputeSubnetworksGetSecurity() {{
                option1 = new ComputeSubnetworksGetSecurityOption1("aliquam", "maxime") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.subnetwork != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeSubnetworksGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSubnetworksGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeSubnetworksGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeSubnetworksGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeSubnetworksGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeSubnetworksGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.ComputeSubnetworksGetIamPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSubnetworksGetIamPolicyRequest req = new ComputeSubnetworksGetIamPolicyRequest("inventore", "delectus", "voluptatem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nemo";
                alt = AltEnum.PROTO;
                callback = "molestiae";
                fields = "consequatur";
                key = "optio";
                oauthToken = "incidunt";
                optionsRequestedPolicyVersion = 180472L;
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "perspiciatis";
                uploadProtocol = "corporis";
                userIp = "adipisci";
            }};            

            ComputeSubnetworksGetIamPolicyResponse res = sdk.subnetworks.computeSubnetworksGetIamPolicy(req, new ComputeSubnetworksGetIamPolicySecurity() {{
                option1 = new ComputeSubnetworksGetIamPolicySecurityOption1("dolore", "veritatis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeSubnetworksInsert

Creates a subnetwork in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSubnetworksInsertRequest;
import org.openapis.openapi.models.operations.ComputeSubnetworksInsertResponse;
import org.openapis.openapi.models.operations.ComputeSubnetworksInsertSecurity;
import org.openapis.openapi.models.operations.ComputeSubnetworksInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSubnetworksInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Subnetwork;
import org.openapis.openapi.models.shared.SubnetworkAggregationIntervalEnum;
import org.openapis.openapi.models.shared.SubnetworkIpv6AccessTypeEnum;
import org.openapis.openapi.models.shared.SubnetworkLogConfig;
import org.openapis.openapi.models.shared.SubnetworkLogConfigAggregationIntervalEnum;
import org.openapis.openapi.models.shared.SubnetworkLogConfigMetadataEnum;
import org.openapis.openapi.models.shared.SubnetworkMetadataEnum;
import org.openapis.openapi.models.shared.SubnetworkPrivateIpv6GoogleAccessEnum;
import org.openapis.openapi.models.shared.SubnetworkPurposeEnum;
import org.openapis.openapi.models.shared.SubnetworkRoleEnum;
import org.openapis.openapi.models.shared.SubnetworkSecondaryRange;
import org.openapis.openapi.models.shared.SubnetworkStackTypeEnum;
import org.openapis.openapi.models.shared.SubnetworkStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSubnetworksInsertRequest req = new ComputeSubnetworksInsertRequest("necessitatibus", "mollitia") {{
                dollarXgafv = XgafvEnum.ONE;
                subnetwork = new Subnetwork() {{
                    aggregationInterval = SubnetworkAggregationIntervalEnum.INTERVAL10_MIN;
                    allowSubnetCidrRoutesOverlap = false;
                    creationTimestamp = "exercitationem";
                    description = "sunt";
                    enableFlowLogs = false;
                    enableL2 = false;
                    enablePrivateV6Access = false;
                    externalIpv6Prefix = "minima";
                    fingerprint = "nesciunt";
                    flowSampling = 2992.85;
                    gatewayAddress = "nesciunt";
                    id = "quam";
                    internalIpv6Prefix = "rem";
                    ipCidrRange = "iusto";
                    ipv6AccessType = SubnetworkIpv6AccessTypeEnum.EXTERNAL;
                    ipv6CidrRange = "id";
                    kind = "mollitia";
                    logConfig = new SubnetworkLogConfig() {{
                        aggregationInterval = SubnetworkLogConfigAggregationIntervalEnum.INTERVAL30_SEC;
                        enable = false;
                        filterExpr = "beatae";
                        flowSampling = 2610.62;
                        metadata = SubnetworkLogConfigMetadataEnum.CUSTOM_METADATA;
                        metadataFields = new String[]{{
                            add("pariatur"),
                            add("sed"),
                        }};
                    }};;
                    metadata = SubnetworkMetadataEnum.INCLUDE_ALL_METADATA;
                    name = "Tami Pfannerstill";
                    network = "recusandae";
                    privateIpGoogleAccess = false;
                    privateIpv6GoogleAccess = SubnetworkPrivateIpv6GoogleAccessEnum.ENABLE_OUTBOUND_VM_ACCESS_TO_GOOGLE;
                    purpose = SubnetworkPurposeEnum.PRIVATE_SERVICE_CONNECT;
                    region = "doloremque";
                    reservedInternalRange = "doloribus";
                    role = SubnetworkRoleEnum.ACTIVE;
                    secondaryIpRanges = new org.openapis.openapi.models.shared.SubnetworkSecondaryRange[]{{
                        add(new SubnetworkSecondaryRange() {{
                            ipCidrRange = "doloribus";
                            rangeName = "minima";
                            reservedInternalRange = "deleniti";
                        }}),
                        add(new SubnetworkSecondaryRange() {{
                            ipCidrRange = "veritatis";
                            rangeName = "dignissimos";
                            reservedInternalRange = "libero";
                        }}),
                    }};
                    selfLink = "blanditiis";
                    selfLinkWithId = "esse";
                    stackType = SubnetworkStackTypeEnum.IPV4_IPV6;
                    state = SubnetworkStateEnum.READY;
                    vlans = new Integer[]{{
                        add(554213),
                    }};
                }};;
                accessToken = "enim";
                alt = AltEnum.MEDIA;
                callback = "sint";
                fields = "amet";
                key = "id";
                oauthToken = "eaque";
                prettyPrint = false;
                quotaUser = "unde";
                requestId = "ipsum";
                uploadType = "excepturi";
                uploadProtocol = "aliquam";
                userIp = "doloribus";
            }};            

            ComputeSubnetworksInsertResponse res = sdk.subnetworks.computeSubnetworksInsert(req, new ComputeSubnetworksInsertSecurity() {{
                option1 = new ComputeSubnetworksInsertSecurityOption1("non", "quod") {{
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

## computeSubnetworksList

Retrieves a list of subnetworks available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSubnetworksListRequest;
import org.openapis.openapi.models.operations.ComputeSubnetworksListResponse;
import org.openapis.openapi.models.operations.ComputeSubnetworksListSecurity;
import org.openapis.openapi.models.operations.ComputeSubnetworksListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSubnetworksListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeSubnetworksListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSubnetworksListRequest req = new ComputeSubnetworksListRequest("id", "doloribus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "non";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "cum";
                filter = "sunt";
                key = "vero";
                maxResults = 730275L;
                oauthToken = "libero";
                orderBy = "tempore";
                pageToken = "aliquid";
                prettyPrint = false;
                quotaUser = "molestias";
                returnPartialSuccess = false;
                uploadType = "quidem";
                uploadProtocol = "natus";
                userIp = "quis";
            }};            

            ComputeSubnetworksListResponse res = sdk.subnetworks.computeSubnetworksList(req, new ComputeSubnetworksListSecurity() {{
                option1 = new ComputeSubnetworksListSecurityOption1("eligendi", "ratione") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.subnetworkList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeSubnetworksListUsable

Retrieves an aggregated list of all usable subnetworks in the project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSubnetworksListUsableRequest;
import org.openapis.openapi.models.operations.ComputeSubnetworksListUsableResponse;
import org.openapis.openapi.models.operations.ComputeSubnetworksListUsableSecurity;
import org.openapis.openapi.models.operations.ComputeSubnetworksListUsableSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSubnetworksListUsableSecurityOption2;
import org.openapis.openapi.models.operations.ComputeSubnetworksListUsableSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSubnetworksListUsableRequest req = new ComputeSubnetworksListUsableRequest("quod") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "et";
                alt = AltEnum.PROTO;
                callback = "quas";
                fields = "occaecati";
                filter = "nemo";
                key = "molestiae";
                maxResults = 591745L;
                oauthToken = "iure";
                orderBy = "inventore";
                pageToken = "sed";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                returnPartialSuccess = false;
                serviceProject = "illo";
                uploadType = "culpa";
                uploadProtocol = "laudantium";
                userIp = "ullam";
            }};            

            ComputeSubnetworksListUsableResponse res = sdk.subnetworks.computeSubnetworksListUsable(req, new ComputeSubnetworksListUsableSecurity() {{
                option1 = new ComputeSubnetworksListUsableSecurityOption1("numquam", "esse") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.usableSubnetworksAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeSubnetworksPatch

Patches the specified subnetwork with the data included in the request. Only certain fields can be updated with a patch request as indicated in the field descriptions. You must specify the current fingerprint of the subnetwork resource being patched.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSubnetworksPatchRequest;
import org.openapis.openapi.models.operations.ComputeSubnetworksPatchResponse;
import org.openapis.openapi.models.operations.ComputeSubnetworksPatchSecurity;
import org.openapis.openapi.models.operations.ComputeSubnetworksPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSubnetworksPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Subnetwork;
import org.openapis.openapi.models.shared.SubnetworkAggregationIntervalEnum;
import org.openapis.openapi.models.shared.SubnetworkIpv6AccessTypeEnum;
import org.openapis.openapi.models.shared.SubnetworkLogConfig;
import org.openapis.openapi.models.shared.SubnetworkLogConfigAggregationIntervalEnum;
import org.openapis.openapi.models.shared.SubnetworkLogConfigMetadataEnum;
import org.openapis.openapi.models.shared.SubnetworkMetadataEnum;
import org.openapis.openapi.models.shared.SubnetworkPrivateIpv6GoogleAccessEnum;
import org.openapis.openapi.models.shared.SubnetworkPurposeEnum;
import org.openapis.openapi.models.shared.SubnetworkRoleEnum;
import org.openapis.openapi.models.shared.SubnetworkSecondaryRange;
import org.openapis.openapi.models.shared.SubnetworkStackTypeEnum;
import org.openapis.openapi.models.shared.SubnetworkStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSubnetworksPatchRequest req = new ComputeSubnetworksPatchRequest("vitae", "culpa", "est") {{
                dollarXgafv = XgafvEnum.ONE;
                subnetwork1 = new Subnetwork() {{
                    aggregationInterval = SubnetworkAggregationIntervalEnum.INTERVAL5_MIN;
                    allowSubnetCidrRoutesOverlap = false;
                    creationTimestamp = "sequi";
                    description = "quidem";
                    enableFlowLogs = false;
                    enableL2 = false;
                    enablePrivateV6Access = false;
                    externalIpv6Prefix = "nulla";
                    fingerprint = "voluptate";
                    flowSampling = 1848.2;
                    gatewayAddress = "modi";
                    id = "tempore";
                    internalIpv6Prefix = "eveniet";
                    ipCidrRange = "ut";
                    ipv6AccessType = SubnetworkIpv6AccessTypeEnum.INTERNAL;
                    ipv6CidrRange = "dolores";
                    kind = "tenetur";
                    logConfig = new SubnetworkLogConfig() {{
                        aggregationInterval = SubnetworkLogConfigAggregationIntervalEnum.INTERVAL15_MIN;
                        enable = false;
                        filterExpr = "reprehenderit";
                        flowSampling = 3184.35;
                        metadata = SubnetworkLogConfigMetadataEnum.INCLUDE_ALL_METADATA;
                        metadataFields = new String[]{{
                            add("ea"),
                            add("consequuntur"),
                        }};
                    }};;
                    metadata = SubnetworkMetadataEnum.EXCLUDE_ALL_METADATA;
                    name = "Thomas O'Conner";
                    network = "est";
                    privateIpGoogleAccess = false;
                    privateIpv6GoogleAccess = SubnetworkPrivateIpv6GoogleAccessEnum.DISABLE_GOOGLE_ACCESS;
                    purpose = SubnetworkPurposeEnum.PRIVATE_RFC1918;
                    region = "numquam";
                    reservedInternalRange = "consequatur";
                    role = SubnetworkRoleEnum.BACKUP;
                    secondaryIpRanges = new org.openapis.openapi.models.shared.SubnetworkSecondaryRange[]{{
                        add(new SubnetworkSecondaryRange() {{
                            ipCidrRange = "occaecati";
                            rangeName = "voluptatem";
                            reservedInternalRange = "illo";
                        }}),
                    }};
                    selfLink = "doloremque";
                    selfLinkWithId = "aperiam";
                    stackType = SubnetworkStackTypeEnum.IPV4_ONLY;
                    state = SubnetworkStateEnum.READY;
                    vlans = new Integer[]{{
                        add(485011),
                    }};
                }};;
                accessToken = "nam";
                alt = AltEnum.JSON;
                callback = "corporis";
                drainTimeoutSeconds = 948034L;
                fields = "quis";
                key = "cum";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "minima";
                requestId = "eaque";
                uploadType = "veniam";
                uploadProtocol = "deleniti";
                userIp = "at";
            }};            

            ComputeSubnetworksPatchResponse res = sdk.subnetworks.computeSubnetworksPatch(req, new ComputeSubnetworksPatchSecurity() {{
                option1 = new ComputeSubnetworksPatchSecurityOption1("dolorum", "necessitatibus") {{
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

## computeSubnetworksSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSubnetworksSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeSubnetworksSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeSubnetworksSetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeSubnetworksSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeSubnetworksSetIamPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditConfig;
import org.openapis.openapi.models.shared.AuditLogConfig;
import org.openapis.openapi.models.shared.AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.AuthorizationLoggingOptions;
import org.openapis.openapi.models.shared.AuthorizationLoggingOptionsPermissionTypeEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Condition;
import org.openapis.openapi.models.shared.ConditionIamEnum;
import org.openapis.openapi.models.shared.ConditionOpEnum;
import org.openapis.openapi.models.shared.ConditionSysEnum;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.LogConfig;
import org.openapis.openapi.models.shared.LogConfigCloudAuditOptions;
import org.openapis.openapi.models.shared.LogConfigCloudAuditOptionsLogNameEnum;
import org.openapis.openapi.models.shared.LogConfigCounterOptions;
import org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField;
import org.openapis.openapi.models.shared.LogConfigDataAccessOptions;
import org.openapis.openapi.models.shared.LogConfigDataAccessOptionsLogModeEnum;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.RegionSetPolicyRequest;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleActionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSubnetworksSetIamPolicyRequest req = new ComputeSubnetworksSetIamPolicyRequest("rerum", "culpa", "quia") {{
                dollarXgafv = XgafvEnum.TWO;
                regionSetPolicyRequest = new RegionSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "quidem";
                            condition = new Expr() {{
                                description = "enim";
                                expression = "similique";
                                location = "numquam";
                                title = "Mrs.";
                            }};
                            members = new String[]{{
                                add("repellat"),
                                add("at"),
                            }};
                            role = "hic";
                        }}),
                    }};
                    etag = "sint";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("nisi"),
                                            add("delectus"),
                                            add("placeat"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quis"),
                                            add("provident"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("cupiditate"),
                                    add("soluta"),
                                }};
                                service = "assumenda";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("pariatur"),
                                            add("consectetur"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("accusamus"),
                                            add("eveniet"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ipsum"),
                                            add("vitae"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("quia"),
                                }};
                                service = "omnis";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("molestiae"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quia"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("labore"),
                                            add("consequatur"),
                                            add("hic"),
                                            add("dolores"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("occaecati"),
                                    add("blanditiis"),
                                    add("in"),
                                    add("quos"),
                                }};
                                service = "ut";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "qui";
                                condition = new Expr() {{
                                    description = "voluptatum";
                                    expression = "deleniti";
                                    location = "totam";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("accusantium"),
                                    add("praesentium"),
                                    add("ratione"),
                                }};
                                role = "harum";
                            }}),
                            add(new Binding() {{
                                bindingId = "libero";
                                condition = new Expr() {{
                                    description = "minus";
                                    expression = "facilis";
                                    location = "voluptas";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("assumenda"),
                                    add("dolore"),
                                    add("dolor"),
                                }};
                                role = "tempore";
                            }}),
                            add(new Binding() {{
                                bindingId = "officiis";
                                condition = new Expr() {{
                                    description = "neque";
                                    expression = "nam";
                                    location = "molestiae";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("repellat"),
                                    add("fugit"),
                                    add("animi"),
                                    add("mollitia"),
                                }};
                                role = "sunt";
                            }}),
                            add(new Binding() {{
                                bindingId = "nobis";
                                condition = new Expr() {{
                                    description = "quaerat";
                                    expression = "id";
                                    location = "consectetur";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("quam"),
                                    add("suscipit"),
                                }};
                                role = "culpa";
                            }}),
                        }};
                        etag = "laudantium";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.DENY_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "rem";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("facilis"),
                                            add("odio"),
                                            add("quia"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "sapiente";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("blanditiis"),
                                            add("quidem"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "eos";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("temporibus"),
                                            add("maiores"),
                                            add("vitae"),
                                            add("tempora"),
                                        }};
                                    }}),
                                }};
                                description = "eos";
                                ins = new String[]{{
                                    add("doloribus"),
                                    add("a"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Harriet Willms";
                                                    value = "ad";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Phyllis Jaskolski";
                                                    value = "id";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Olive Kihn";
                                                    value = "amet";
                                                }}),
                                            }};
                                            field = "atque";
                                            metric = "blanditiis";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.PERMISSION_TYPE_UNSPECIFIED;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Miss Cora Christiansen";
                                                    value = "suscipit";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Brooke Ratke";
                                                    value = "assumenda";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Isabel McGlynn";
                                                    value = "ea";
                                                }}),
                                            }};
                                            field = "deleniti";
                                            metric = "alias";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.PERMISSION_TYPE_UNSPECIFIED;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Theresa Schmitt";
                                                    value = "nostrum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Miss Jean Luettgen";
                                                    value = "ab";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Marlon Hermann";
                                                    value = "accusantium";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Juan Thiel";
                                                    value = "nihil";
                                                }}),
                                            }};
                                            field = "ad";
                                            metric = "at";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("asperiores"),
                                    add("illum"),
                                }};
                                permissions = new String[]{{
                                    add("quia"),
                                    add("vero"),
                                    add("quasi"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "cupiditate";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("odio"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "commodi";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("nulla"),
                                            add("explicabo"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "tempore";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("aspernatur"),
                                            add("dolore"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "eveniet";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("aliquam"),
                                            add("aliquid"),
                                            add("ullam"),
                                            add("consequuntur"),
                                        }};
                                    }}),
                                }};
                                description = "odit";
                                ins = new String[]{{
                                    add("ipsam"),
                                    add("dignissimos"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mr. Silvia Zboncak";
                                                    value = "quibusdam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Thelma Jaskolski";
                                                    value = "in";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Bertha Stanton";
                                                    value = "voluptatum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ms. Gail Dare";
                                                    value = "praesentium";
                                                }}),
                                            }};
                                            field = "maiores";
                                            metric = "repellat";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("fugiat"),
                                    add("beatae"),
                                    add("quo"),
                                }};
                                permissions = new String[]{{
                                    add("eos"),
                                    add("esse"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "adipisci";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("dolorem"),
                                            add("dicta"),
                                            add("commodi"),
                                            add("dicta"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "magni";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("ea"),
                                            add("assumenda"),
                                            add("sed"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "mollitia";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("odit"),
                                            add("ex"),
                                            add("culpa"),
                                            add("illum"),
                                        }};
                                    }}),
                                }};
                                description = "rerum";
                                ins = new String[]{{
                                    add("reprehenderit"),
                                    add("exercitationem"),
                                    add("ducimus"),
                                    add("fugit"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Emma Halvorson";
                                                    value = "impedit";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Geraldine Labadie";
                                                    value = "saepe";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Joel Jacobson";
                                                    value = "dolorum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Carla Raynor";
                                                    value = "ipsum";
                                                }}),
                                            }};
                                            field = "nemo";
                                            metric = "animi";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.PERMISSION_TYPE_UNSPECIFIED;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Anita Thompson";
                                                    value = "dicta";
                                                }}),
                                            }};
                                            field = "eligendi";
                                            metric = "numquam";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Shawn Bins";
                                                    value = "repellendus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Opal Rosenbaum";
                                                    value = "excepturi";
                                                }}),
                                            }};
                                            field = "cupiditate";
                                            metric = "eum";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Charlotte Ziemann";
                                                    value = "officia";
                                                }}),
                                            }};
                                            field = "eos";
                                            metric = "quis";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("rem"),
                                }};
                                permissions = new String[]{{
                                    add("explicabo"),
                                    add("ratione"),
                                    add("itaque"),
                                }};
                            }}),
                        }};
                        version = 615092;
                    }};;
                }};;
                accessToken = "fugiat";
                alt = AltEnum.MEDIA;
                callback = "iste";
                fields = "nulla";
                key = "quidem";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "fugiat";
                uploadProtocol = "iusto";
                userIp = "similique";
            }};            

            ComputeSubnetworksSetIamPolicyResponse res = sdk.subnetworks.computeSubnetworksSetIamPolicy(req, new ComputeSubnetworksSetIamPolicySecurity() {{
                option1 = new ComputeSubnetworksSetIamPolicySecurityOption1("officia", "et") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeSubnetworksSetPrivateIpGoogleAccess

Set whether VMs in this subnet can access Google services without assigning external IP addresses through Private Google Access.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSubnetworksSetPrivateIpGoogleAccessRequest;
import org.openapis.openapi.models.operations.ComputeSubnetworksSetPrivateIpGoogleAccessResponse;
import org.openapis.openapi.models.operations.ComputeSubnetworksSetPrivateIpGoogleAccessSecurity;
import org.openapis.openapi.models.operations.ComputeSubnetworksSetPrivateIpGoogleAccessSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSubnetworksSetPrivateIpGoogleAccessSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SubnetworksSetPrivateIpGoogleAccessRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSubnetworksSetPrivateIpGoogleAccessRequest req = new ComputeSubnetworksSetPrivateIpGoogleAccessRequest("iusto", "fuga", "doloribus") {{
                dollarXgafv = XgafvEnum.ONE;
                subnetworksSetPrivateIpGoogleAccessRequest = new SubnetworksSetPrivateIpGoogleAccessRequest() {{
                    privateIpGoogleAccess = false;
                }};;
                accessToken = "voluptatibus";
                alt = AltEnum.MEDIA;
                callback = "omnis";
                fields = "porro";
                key = "dignissimos";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "expedita";
                requestId = "modi";
                uploadType = "enim";
                uploadProtocol = "explicabo";
                userIp = "odio";
            }};            

            ComputeSubnetworksSetPrivateIpGoogleAccessResponse res = sdk.subnetworks.computeSubnetworksSetPrivateIpGoogleAccess(req, new ComputeSubnetworksSetPrivateIpGoogleAccessSecurity() {{
                option1 = new ComputeSubnetworksSetPrivateIpGoogleAccessSecurityOption1("alias", "libero") {{
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

## computeSubnetworksTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSubnetworksTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeSubnetworksTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeSubnetworksTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeSubnetworksTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSubnetworksTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeSubnetworksTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSubnetworksTestIamPermissionsRequest req = new ComputeSubnetworksTestIamPermissionsRequest("at", "culpa", "totam") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("porro"),
                    }};
                }};;
                accessToken = "dolore";
                alt = AltEnum.MEDIA;
                callback = "deserunt";
                fields = "quam";
                key = "ad";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "eveniet";
                uploadProtocol = "commodi";
                userIp = "voluptas";
            }};            

            ComputeSubnetworksTestIamPermissionsResponse res = sdk.subnetworks.computeSubnetworksTestIamPermissions(req, new ComputeSubnetworksTestIamPermissionsSecurity() {{
                option1 = new ComputeSubnetworksTestIamPermissionsSecurityOption1("doloribus", "consequatur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.testPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
