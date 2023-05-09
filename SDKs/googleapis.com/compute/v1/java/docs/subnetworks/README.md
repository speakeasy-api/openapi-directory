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

            ComputeSubnetworksAggregatedListRequest req = new ComputeSubnetworksAggregatedListRequest("assumenda") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quisquam";
                alt = AltEnum.MEDIA;
                callback = "a";
                fields = "alias";
                filter = "quae";
                includeAllScopes = false;
                key = "asperiores";
                maxResults = 94530L;
                oauthToken = "inventore";
                orderBy = "dolore";
                pageToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "reiciendis";
                returnPartialSuccess = false;
                uploadType = "ducimus";
                uploadProtocol = "dicta";
                userIp = "id";
            }};            

            ComputeSubnetworksAggregatedListResponse res = sdk.subnetworks.computeSubnetworksAggregatedList(req, new ComputeSubnetworksAggregatedListSecurity() {{
                option1 = new ComputeSubnetworksAggregatedListSecurityOption1("sint", "officiis") {{
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

            ComputeSubnetworksDeleteRequest req = new ComputeSubnetworksDeleteRequest("quam", "nobis", "magni") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eaque";
                alt = AltEnum.MEDIA;
                callback = "consequuntur";
                fields = "unde";
                key = "enim";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "dolorum";
                requestId = "sequi";
                uploadType = "quisquam";
                uploadProtocol = "nostrum";
                userIp = "iste";
            }};            

            ComputeSubnetworksDeleteResponse res = sdk.subnetworks.computeSubnetworksDelete(req, new ComputeSubnetworksDeleteSecurity() {{
                option1 = new ComputeSubnetworksDeleteSecurityOption1("quia", "consequuntur") {{
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

            ComputeSubnetworksExpandIpCidrRangeRequest req = new ComputeSubnetworksExpandIpCidrRangeRequest("reiciendis", "dolorum", "iure") {{
                dollarXgafv = XgafvEnum.TWO;
                subnetworksExpandIpCidrRangeRequest = new SubnetworksExpandIpCidrRangeRequest() {{
                    ipCidrRange = "provident";
                }};;
                accessToken = "voluptates";
                alt = AltEnum.MEDIA;
                callback = "numquam";
                fields = "maxime";
                key = "fuga";
                oauthToken = "ducimus";
                prettyPrint = false;
                quotaUser = "doloribus";
                requestId = "laboriosam";
                uploadType = "in";
                uploadProtocol = "odio";
                userIp = "optio";
            }};            

            ComputeSubnetworksExpandIpCidrRangeResponse res = sdk.subnetworks.computeSubnetworksExpandIpCidrRange(req, new ComputeSubnetworksExpandIpCidrRangeSecurity() {{
                option1 = new ComputeSubnetworksExpandIpCidrRangeSecurityOption1("necessitatibus", "dicta") {{
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

            ComputeSubnetworksGetRequest req = new ComputeSubnetworksGetRequest("odio", "laborum", "a") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "praesentium";
                alt = AltEnum.PROTO;
                callback = "sint";
                fields = "ducimus";
                key = "mollitia";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "accusamus";
                uploadProtocol = "exercitationem";
                userIp = "similique";
            }};            

            ComputeSubnetworksGetResponse res = sdk.subnetworks.computeSubnetworksGet(req, new ComputeSubnetworksGetSecurity() {{
                option1 = new ComputeSubnetworksGetSecurityOption1("maiores", "commodi") {{
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

            ComputeSubnetworksGetIamPolicyRequest req = new ComputeSubnetworksGetIamPolicyRequest("consequatur", "reprehenderit", "earum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sapiente";
                alt = AltEnum.MEDIA;
                callback = "odio";
                fields = "inventore";
                key = "magni";
                oauthToken = "rerum";
                optionsRequestedPolicyVersion = 644366L;
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "natus";
                uploadProtocol = "quae";
                userIp = "ut";
            }};            

            ComputeSubnetworksGetIamPolicyResponse res = sdk.subnetworks.computeSubnetworksGetIamPolicy(req, new ComputeSubnetworksGetIamPolicySecurity() {{
                option1 = new ComputeSubnetworksGetIamPolicySecurityOption1("aliquid", "illum") {{
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
import org.openapis.openapi.models.shared.SubnetworkIpv6AccessTypeEnum;
import org.openapis.openapi.models.shared.SubnetworkLogConfig;
import org.openapis.openapi.models.shared.SubnetworkLogConfigAggregationIntervalEnum;
import org.openapis.openapi.models.shared.SubnetworkLogConfigMetadataEnum;
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

            ComputeSubnetworksInsertRequest req = new ComputeSubnetworksInsertRequest("maiores", "natus") {{
                dollarXgafv = XgafvEnum.ONE;
                subnetwork = new Subnetwork() {{
                    creationTimestamp = "delectus";
                    description = "explicabo";
                    enableFlowLogs = false;
                    externalIpv6Prefix = "consequatur";
                    fingerprint = "commodi";
                    gatewayAddress = "temporibus";
                    id = "repudiandae";
                    internalIpv6Prefix = "occaecati";
                    ipCidrRange = "cum";
                    ipv6AccessType = SubnetworkIpv6AccessTypeEnum.INTERNAL;
                    ipv6CidrRange = "sunt";
                    kind = "sint";
                    logConfig = new SubnetworkLogConfig() {{
                        aggregationInterval = SubnetworkLogConfigAggregationIntervalEnum.INTERVAL5_MIN;
                        enable = false;
                        filterExpr = "quod";
                        flowSampling = 5441.38;
                        metadata = SubnetworkLogConfigMetadataEnum.INCLUDE_ALL_METADATA;
                        metadataFields = new String[]{{
                            add("exercitationem"),
                            add("accusamus"),
                            add("ipsam"),
                            add("rem"),
                        }};
                    }};;
                    name = "Miss Manuel Schuppe";
                    network = "delectus";
                    privateIpGoogleAccess = false;
                    privateIpv6GoogleAccess = SubnetworkPrivateIpv6GoogleAccessEnum.ENABLE_OUTBOUND_VM_ACCESS_TO_GOOGLE;
                    purpose = SubnetworkPurposeEnum.REGIONAL_MANAGED_PROXY;
                    region = "repellat";
                    role = SubnetworkRoleEnum.BACKUP;
                    secondaryIpRanges = new org.openapis.openapi.models.shared.SubnetworkSecondaryRange[]{{
                        add(new SubnetworkSecondaryRange() {{
                            ipCidrRange = "esse";
                            rangeName = "vitae";
                        }}),
                        add(new SubnetworkSecondaryRange() {{
                            ipCidrRange = "ipsam";
                            rangeName = "voluptates";
                        }}),
                        add(new SubnetworkSecondaryRange() {{
                            ipCidrRange = "aliquid";
                            rangeName = "aspernatur";
                        }}),
                        add(new SubnetworkSecondaryRange() {{
                            ipCidrRange = "porro";
                            rangeName = "corporis";
                        }}),
                    }};
                    selfLink = "quidem";
                    stackType = SubnetworkStackTypeEnum.IPV4_IPV6;
                    state = SubnetworkStateEnum.DRAINING;
                }};;
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "vitae";
                fields = "non";
                key = "voluptates";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "eveniet";
                requestId = "nostrum";
                uploadType = "nulla";
                uploadProtocol = "omnis";
                userIp = "fugit";
            }};            

            ComputeSubnetworksInsertResponse res = sdk.subnetworks.computeSubnetworksInsert(req, new ComputeSubnetworksInsertSecurity() {{
                option1 = new ComputeSubnetworksInsertSecurityOption1("quibusdam", "quaerat") {{
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

            ComputeSubnetworksListRequest req = new ComputeSubnetworksListRequest("voluptas", "modi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.PROTO;
                callback = "temporibus";
                fields = "in";
                filter = "earum";
                key = "voluptate";
                maxResults = 337790L;
                oauthToken = "ullam";
                orderBy = "nemo";
                pageToken = "est";
                prettyPrint = false;
                quotaUser = "quisquam";
                returnPartialSuccess = false;
                uploadType = "totam";
                uploadProtocol = "iusto";
                userIp = "ducimus";
            }};            

            ComputeSubnetworksListResponse res = sdk.subnetworks.computeSubnetworksList(req, new ComputeSubnetworksListSecurity() {{
                option1 = new ComputeSubnetworksListSecurityOption1("vero", "amet") {{
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

            ComputeSubnetworksListUsableRequest req = new ComputeSubnetworksListUsableRequest("eum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptatibus";
                alt = AltEnum.MEDIA;
                callback = "deleniti";
                fields = "quos";
                filter = "expedita";
                key = "doloribus";
                maxResults = 374977L;
                oauthToken = "id";
                orderBy = "molestias";
                pageToken = "at";
                prettyPrint = false;
                quotaUser = "hic";
                returnPartialSuccess = false;
                uploadType = "fugit";
                uploadProtocol = "quia";
                userIp = "nisi";
            }};            

            ComputeSubnetworksListUsableResponse res = sdk.subnetworks.computeSubnetworksListUsable(req, new ComputeSubnetworksListUsableSecurity() {{
                option1 = new ComputeSubnetworksListUsableSecurityOption1("voluptatibus", "dolores") {{
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
import org.openapis.openapi.models.shared.SubnetworkIpv6AccessTypeEnum;
import org.openapis.openapi.models.shared.SubnetworkLogConfig;
import org.openapis.openapi.models.shared.SubnetworkLogConfigAggregationIntervalEnum;
import org.openapis.openapi.models.shared.SubnetworkLogConfigMetadataEnum;
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

            ComputeSubnetworksPatchRequest req = new ComputeSubnetworksPatchRequest("quas", "suscipit", "illum") {{
                dollarXgafv = XgafvEnum.ONE;
                subnetwork1 = new Subnetwork() {{
                    creationTimestamp = "excepturi";
                    description = "quidem";
                    enableFlowLogs = false;
                    externalIpv6Prefix = "corrupti";
                    fingerprint = "nihil";
                    gatewayAddress = "repudiandae";
                    id = "voluptatem";
                    internalIpv6Prefix = "nemo";
                    ipCidrRange = "modi";
                    ipv6AccessType = SubnetworkIpv6AccessTypeEnum.EXTERNAL;
                    ipv6CidrRange = "reprehenderit";
                    kind = "accusamus";
                    logConfig = new SubnetworkLogConfig() {{
                        aggregationInterval = SubnetworkLogConfigAggregationIntervalEnum.INTERVAL5_MIN;
                        enable = false;
                        filterExpr = "assumenda";
                        flowSampling = 6696.65;
                        metadata = SubnetworkLogConfigMetadataEnum.CUSTOM_METADATA;
                        metadataFields = new String[]{{
                            add("incidunt"),
                            add("veniam"),
                            add("sunt"),
                        }};
                    }};;
                    name = "Willard Davis";
                    network = "totam";
                    privateIpGoogleAccess = false;
                    privateIpv6GoogleAccess = SubnetworkPrivateIpv6GoogleAccessEnum.ENABLE_BIDIRECTIONAL_ACCESS_TO_GOOGLE;
                    purpose = SubnetworkPurposeEnum.REGIONAL_MANAGED_PROXY;
                    region = "deserunt";
                    role = SubnetworkRoleEnum.BACKUP;
                    secondaryIpRanges = new org.openapis.openapi.models.shared.SubnetworkSecondaryRange[]{{
                        add(new SubnetworkSecondaryRange() {{
                            ipCidrRange = "excepturi";
                            rangeName = "optio";
                        }}),
                        add(new SubnetworkSecondaryRange() {{
                            ipCidrRange = "beatae";
                            rangeName = "quisquam";
                        }}),
                    }};
                    selfLink = "commodi";
                    stackType = SubnetworkStackTypeEnum.IPV4_ONLY;
                    state = SubnetworkStateEnum.READY;
                }};;
                accessToken = "occaecati";
                alt = AltEnum.MEDIA;
                callback = "odio";
                drainTimeoutSeconds = 904511L;
                fields = "incidunt";
                key = "quibusdam";
                oauthToken = "tenetur";
                prettyPrint = false;
                quotaUser = "beatae";
                requestId = "ab";
                uploadType = "maiores";
                uploadProtocol = "doloribus";
                userIp = "suscipit";
            }};            

            ComputeSubnetworksPatchResponse res = sdk.subnetworks.computeSubnetworksPatch(req, new ComputeSubnetworksPatchSecurity() {{
                option1 = new ComputeSubnetworksPatchSecurityOption1("facere", "accusamus") {{
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

            ComputeSubnetworksSetIamPolicyRequest req = new ComputeSubnetworksSetIamPolicyRequest("sed", "ea", "numquam") {{
                dollarXgafv = XgafvEnum.ONE;
                regionSetPolicyRequest = new RegionSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "facilis";
                            condition = new Expr() {{
                                description = "eaque";
                                expression = "nihil";
                                location = "laborum";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("consequuntur"),
                                add("at"),
                            }};
                            role = "harum";
                        }}),
                        add(new Binding() {{
                            bindingId = "facere";
                            condition = new Expr() {{
                                description = "cumque";
                                expression = "odio";
                                location = "labore";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("inventore"),
                                add("maxime"),
                                add("consequuntur"),
                                add("est"),
                            }};
                            role = "repudiandae";
                        }}),
                    }};
                    etag = "quia";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("assumenda"),
                                            add("eos"),
                                            add("blanditiis"),
                                            add("quibusdam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("minima"),
                                            add("quibusdam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("suscipit"),
                                            add("quo"),
                                            add("provident"),
                                            add("ea"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("consectetur"),
                                            add("nesciunt"),
                                            add("incidunt"),
                                            add("consequuntur"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("quibusdam"),
                                }};
                                service = "maxime";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "quibusdam";
                                condition = new Expr() {{
                                    description = "provident";
                                    expression = "nihil";
                                    location = "temporibus";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("quidem"),
                                    add("harum"),
                                    add("fugiat"),
                                }};
                                role = "vitae";
                            }}),
                            add(new Binding() {{
                                bindingId = "similique";
                                condition = new Expr() {{
                                    description = "dolorum";
                                    expression = "ad";
                                    location = "ipsa";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("reprehenderit"),
                                    add("consequatur"),
                                    add("est"),
                                }};
                                role = "consequuntur";
                            }}),
                            add(new Binding() {{
                                bindingId = "delectus";
                                condition = new Expr() {{
                                    description = "fuga";
                                    expression = "accusantium";
                                    location = "velit";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("quasi"),
                                }};
                                role = "nemo";
                            }}),
                            add(new Binding() {{
                                bindingId = "voluptatem";
                                condition = new Expr() {{
                                    description = "facere";
                                    expression = "perspiciatis";
                                    location = "hic";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("culpa"),
                                }};
                                role = "magnam";
                            }}),
                        }};
                        etag = "voluptatum";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.NO_ACTION;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "eaque";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("delectus"),
                                            add("consequuntur"),
                                            add("ut"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.IN;
                                        svc = "vel";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("vel"),
                                            add("facere"),
                                            add("est"),
                                            add("rem"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "at";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("repudiandae"),
                                            add("quasi"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.IN;
                                        svc = "et";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("cum"),
                                        }};
                                    }}),
                                }};
                                description = "voluptatum";
                                ins = new String[]{{
                                    add("corrupti"),
                                    add("occaecati"),
                                    add("natus"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
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
                                                    name = "Woodrow Metz";
                                                    value = "quis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Melvin Rosenbaum";
                                                    value = "delectus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Melanie Wunsch";
                                                    value = "est";
                                                }}),
                                            }};
                                            field = "doloribus";
                                            metric = "incidunt";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Erma Rau";
                                                    value = "quia";
                                                }}),
                                            }};
                                            field = "magni";
                                            metric = "voluptates";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("neque"),
                                    add("eum"),
                                }};
                                permissions = new String[]{{
                                    add("molestias"),
                                    add("voluptatibus"),
                                    add("cupiditate"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.IN;
                                        svc = "dignissimos";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("eaque"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "suscipit";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("fuga"),
                                            add("assumenda"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "maxime";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("repudiandae"),
                                            add("repellat"),
                                            add("dolorem"),
                                            add("facilis"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "rerum";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("ducimus"),
                                            add("numquam"),
                                        }};
                                    }}),
                                }};
                                description = "corrupti";
                                ins = new String[]{{
                                    add("eveniet"),
                                    add("natus"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Felipe Kreiger";
                                                    value = "corporis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Pablo Stoltenberg";
                                                    value = "animi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Josefina Torp";
                                                    value = "cum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Everett Barrows";
                                                    value = "maxime";
                                                }}),
                                            }};
                                            field = "odio";
                                            metric = "quo";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Amelia Mante";
                                                    value = "consectetur";
                                                }}),
                                            }};
                                            field = "minima";
                                            metric = "delectus";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Joyce Tillman";
                                                    value = "dicta";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Fannie Bailey";
                                                    value = "natus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ollie Wolf DDS";
                                                    value = "id";
                                                }}),
                                            }};
                                            field = "natus";
                                            metric = "repellendus";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("asperiores"),
                                    add("reprehenderit"),
                                    add("saepe"),
                                    add("blanditiis"),
                                }};
                                permissions = new String[]{{
                                    add("illo"),
                                }};
                            }}),
                        }};
                        version = 609208;
                    }};;
                }};;
                accessToken = "architecto";
                alt = AltEnum.JSON;
                callback = "tempora";
                fields = "earum";
                key = "dolor";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "laboriosam";
                uploadType = "harum";
                uploadProtocol = "maiores";
                userIp = "magnam";
            }};            

            ComputeSubnetworksSetIamPolicyResponse res = sdk.subnetworks.computeSubnetworksSetIamPolicy(req, new ComputeSubnetworksSetIamPolicySecurity() {{
                option1 = new ComputeSubnetworksSetIamPolicySecurityOption1("saepe", "dignissimos") {{
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

            ComputeSubnetworksSetPrivateIpGoogleAccessRequest req = new ComputeSubnetworksSetPrivateIpGoogleAccessRequest("officia", "tempore", "facere") {{
                dollarXgafv = XgafvEnum.TWO;
                subnetworksSetPrivateIpGoogleAccessRequest = new SubnetworksSetPrivateIpGoogleAccessRequest() {{
                    privateIpGoogleAccess = false;
                }};;
                accessToken = "illo";
                alt = AltEnum.PROTO;
                callback = "laborum";
                fields = "harum";
                key = "consequatur";
                oauthToken = "eaque";
                prettyPrint = false;
                quotaUser = "maxime";
                requestId = "vitae";
                uploadType = "officiis";
                uploadProtocol = "recusandae";
                userIp = "expedita";
            }};            

            ComputeSubnetworksSetPrivateIpGoogleAccessResponse res = sdk.subnetworks.computeSubnetworksSetPrivateIpGoogleAccess(req, new ComputeSubnetworksSetPrivateIpGoogleAccessSecurity() {{
                option1 = new ComputeSubnetworksSetPrivateIpGoogleAccessSecurityOption1("commodi", "nihil") {{
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

            ComputeSubnetworksTestIamPermissionsRequest req = new ComputeSubnetworksTestIamPermissionsRequest("omnis", "dicta", "nulla") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("eos"),
                        add("laboriosam"),
                        add("veniam"),
                        add("cupiditate"),
                    }};
                }};;
                accessToken = "aut";
                alt = AltEnum.PROTO;
                callback = "vero";
                fields = "reprehenderit";
                key = "cumque";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "ex";
                uploadType = "atque";
                uploadProtocol = "reprehenderit";
                userIp = "quisquam";
            }};            

            ComputeSubnetworksTestIamPermissionsResponse res = sdk.subnetworks.computeSubnetworksTestIamPermissions(req, new ComputeSubnetworksTestIamPermissionsSecurity() {{
                option1 = new ComputeSubnetworksTestIamPermissionsSecurityOption1("quidem", "maxime") {{
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
