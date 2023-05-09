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

            ComputeSubnetworksAggregatedListRequest req = new ComputeSubnetworksAggregatedListRequest("atque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aliquam";
                alt = AltEnum.MEDIA;
                callback = "doloribus";
                fields = "optio";
                filter = "suscipit";
                includeAllScopes = false;
                key = "ab";
                maxResults = 216832L;
                oauthToken = "minus";
                orderBy = "nobis";
                pageToken = "ipsam";
                prettyPrint = false;
                quotaUser = "quia";
                returnPartialSuccess = false;
                uploadType = "illo";
                uploadProtocol = "odio";
                userIp = "et";
            }};            

            ComputeSubnetworksAggregatedListResponse res = sdk.subnetworks.computeSubnetworksAggregatedList(req, new ComputeSubnetworksAggregatedListSecurity() {{
                option1 = new ComputeSubnetworksAggregatedListSecurityOption1("assumenda", "expedita") {{
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

            ComputeSubnetworksDeleteRequest req = new ComputeSubnetworksDeleteRequest("sint", "a", "nulla") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "blanditiis";
                alt = AltEnum.PROTO;
                callback = "veritatis";
                fields = "possimus";
                key = "nulla";
                oauthToken = "consectetur";
                prettyPrint = false;
                quotaUser = "veniam";
                requestId = "non";
                uploadType = "rerum";
                uploadProtocol = "laborum";
                userIp = "laborum";
            }};            

            ComputeSubnetworksDeleteResponse res = sdk.subnetworks.computeSubnetworksDelete(req, new ComputeSubnetworksDeleteSecurity() {{
                option1 = new ComputeSubnetworksDeleteSecurityOption1("corrupti", "voluptatum") {{
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

            ComputeSubnetworksExpandIpCidrRangeRequest req = new ComputeSubnetworksExpandIpCidrRangeRequest("rem", "at", "quod") {{
                dollarXgafv = XgafvEnum.TWO;
                subnetworksExpandIpCidrRangeRequest = new SubnetworksExpandIpCidrRangeRequest() {{
                    ipCidrRange = "beatae";
                }};;
                accessToken = "nam";
                alt = AltEnum.MEDIA;
                callback = "reprehenderit";
                fields = "quam";
                key = "quae";
                oauthToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "iusto";
                requestId = "aspernatur";
                uploadType = "occaecati";
                uploadProtocol = "dolorem";
                userIp = "fugit";
            }};            

            ComputeSubnetworksExpandIpCidrRangeResponse res = sdk.subnetworks.computeSubnetworksExpandIpCidrRange(req, new ComputeSubnetworksExpandIpCidrRangeSecurity() {{
                option1 = new ComputeSubnetworksExpandIpCidrRangeSecurityOption1("asperiores", "molestiae") {{
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

            ComputeSubnetworksGetRequest req = new ComputeSubnetworksGetRequest("quaerat", "aliquid", "consectetur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "aliquid";
                fields = "sapiente";
                key = "illum";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "rerum";
                uploadType = "quia";
                uploadProtocol = "enim";
                userIp = "eveniet";
            }};            

            ComputeSubnetworksGetResponse res = sdk.subnetworks.computeSubnetworksGet(req, new ComputeSubnetworksGetSecurity() {{
                option1 = new ComputeSubnetworksGetSecurityOption1("quod", "illo") {{
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

            ComputeSubnetworksGetIamPolicyRequest req = new ComputeSubnetworksGetIamPolicyRequest("aliquam", "facilis", "perspiciatis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "saepe";
                alt = AltEnum.JSON;
                callback = "quidem";
                fields = "itaque";
                key = "temporibus";
                oauthToken = "aliquam";
                optionsRequestedPolicyVersion = 608426L;
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "reiciendis";
                uploadProtocol = "animi";
                userIp = "ipsum";
            }};            

            ComputeSubnetworksGetIamPolicyResponse res = sdk.subnetworks.computeSubnetworksGetIamPolicy(req, new ComputeSubnetworksGetIamPolicySecurity() {{
                option1 = new ComputeSubnetworksGetIamPolicySecurityOption1("ab", "magni") {{
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

            ComputeSubnetworksInsertRequest req = new ComputeSubnetworksInsertRequest("aspernatur", "sint") {{
                dollarXgafv = XgafvEnum.ONE;
                subnetwork = new Subnetwork() {{
                    allowSubnetCidrRoutesOverlap = false;
                    creationTimestamp = "commodi";
                    description = "ea";
                    enableFlowLogs = false;
                    externalIpv6Prefix = "labore";
                    fingerprint = "id";
                    gatewayAddress = "porro";
                    id = "asperiores";
                    internalIpv6Prefix = "consequuntur";
                    ipCidrRange = "laudantium";
                    ipv6AccessType = SubnetworkIpv6AccessTypeEnum.INTERNAL;
                    ipv6CidrRange = "dolorem";
                    kind = "voluptas";
                    logConfig = new SubnetworkLogConfig() {{
                        aggregationInterval = SubnetworkLogConfigAggregationIntervalEnum.INTERVAL1_MIN;
                        enable = false;
                        filterExpr = "a";
                        flowSampling = 1401.26;
                        metadata = SubnetworkLogConfigMetadataEnum.INCLUDE_ALL_METADATA;
                        metadataFields = new String[]{{
                            add("pariatur"),
                            add("maiores"),
                        }};
                    }};;
                    name = "Shelley Rowe";
                    network = "facilis";
                    privateIpGoogleAccess = false;
                    privateIpv6GoogleAccess = SubnetworkPrivateIpv6GoogleAccessEnum.DISABLE_GOOGLE_ACCESS;
                    purpose = SubnetworkPurposeEnum.REGIONAL_MANAGED_PROXY;
                    region = "dolorem";
                    reservedInternalRange = "veritatis";
                    role = SubnetworkRoleEnum.ACTIVE;
                    secondaryIpRanges = new org.openapis.openapi.models.shared.SubnetworkSecondaryRange[]{{
                        add(new SubnetworkSecondaryRange() {{
                            ipCidrRange = "non";
                            rangeName = "recusandae";
                            reservedInternalRange = "consequatur";
                        }}),
                        add(new SubnetworkSecondaryRange() {{
                            ipCidrRange = "excepturi";
                            rangeName = "numquam";
                            reservedInternalRange = "dolore";
                        }}),
                        add(new SubnetworkSecondaryRange() {{
                            ipCidrRange = "laborum";
                            rangeName = "aperiam";
                            reservedInternalRange = "ipsum";
                        }}),
                        add(new SubnetworkSecondaryRange() {{
                            ipCidrRange = "provident";
                            rangeName = "sit";
                            reservedInternalRange = "voluptatum";
                        }}),
                    }};
                    selfLink = "natus";
                    stackType = SubnetworkStackTypeEnum.IPV4_IPV6;
                    state = SubnetworkStateEnum.DRAINING;
                }};;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "modi";
                fields = "qui";
                key = "eos";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "incidunt";
                requestId = "hic";
                uploadType = "cupiditate";
                uploadProtocol = "natus";
                userIp = "sit";
            }};            

            ComputeSubnetworksInsertResponse res = sdk.subnetworks.computeSubnetworksInsert(req, new ComputeSubnetworksInsertSecurity() {{
                option1 = new ComputeSubnetworksInsertSecurityOption1("modi", "error") {{
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

            ComputeSubnetworksListRequest req = new ComputeSubnetworksListRequest("iure", "nostrum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "beatae";
                alt = AltEnum.JSON;
                callback = "nisi";
                fields = "quo";
                filter = "maxime";
                key = "maxime";
                maxResults = 995007L;
                oauthToken = "iste";
                orderBy = "deserunt";
                pageToken = "tempore";
                prettyPrint = false;
                quotaUser = "reiciendis";
                returnPartialSuccess = false;
                uploadType = "accusamus";
                uploadProtocol = "esse";
                userIp = "dolores";
            }};            

            ComputeSubnetworksListResponse res = sdk.subnetworks.computeSubnetworksList(req, new ComputeSubnetworksListSecurity() {{
                option1 = new ComputeSubnetworksListSecurityOption1("in", "minus") {{
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

            ComputeSubnetworksListUsableRequest req = new ComputeSubnetworksListUsableRequest("non") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "reprehenderit";
                alt = AltEnum.PROTO;
                callback = "itaque";
                fields = "nulla";
                filter = "qui";
                key = "maiores";
                maxResults = 343913L;
                oauthToken = "ratione";
                orderBy = "autem";
                pageToken = "beatae";
                prettyPrint = false;
                quotaUser = "natus";
                returnPartialSuccess = false;
                serviceProject = "voluptates";
                uploadType = "dicta";
                uploadProtocol = "non";
                userIp = "odio";
            }};            

            ComputeSubnetworksListUsableResponse res = sdk.subnetworks.computeSubnetworksListUsable(req, new ComputeSubnetworksListUsableSecurity() {{
                option1 = new ComputeSubnetworksListUsableSecurityOption1("neque", "quidem") {{
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

            ComputeSubnetworksPatchRequest req = new ComputeSubnetworksPatchRequest("ipsa", "tempora", "autem") {{
                dollarXgafv = XgafvEnum.ONE;
                subnetwork1 = new Subnetwork() {{
                    allowSubnetCidrRoutesOverlap = false;
                    creationTimestamp = "rerum";
                    description = "quasi";
                    enableFlowLogs = false;
                    externalIpv6Prefix = "provident";
                    fingerprint = "praesentium";
                    gatewayAddress = "quasi";
                    id = "ipsa";
                    internalIpv6Prefix = "vitae";
                    ipCidrRange = "veniam";
                    ipv6AccessType = SubnetworkIpv6AccessTypeEnum.INTERNAL;
                    ipv6CidrRange = "ratione";
                    kind = "delectus";
                    logConfig = new SubnetworkLogConfig() {{
                        aggregationInterval = SubnetworkLogConfigAggregationIntervalEnum.INTERVAL15_MIN;
                        enable = false;
                        filterExpr = "fugit";
                        flowSampling = 6106.29;
                        metadata = SubnetworkLogConfigMetadataEnum.EXCLUDE_ALL_METADATA;
                        metadataFields = new String[]{{
                            add("laudantium"),
                            add("exercitationem"),
                            add("animi"),
                            add("est"),
                        }};
                    }};;
                    name = "Cynthia Abshire";
                    network = "dicta";
                    privateIpGoogleAccess = false;
                    privateIpv6GoogleAccess = SubnetworkPrivateIpv6GoogleAccessEnum.ENABLE_BIDIRECTIONAL_ACCESS_TO_GOOGLE;
                    purpose = SubnetworkPurposeEnum.REGIONAL_MANAGED_PROXY;
                    region = "accusantium";
                    reservedInternalRange = "tempore";
                    role = SubnetworkRoleEnum.ACTIVE;
                    secondaryIpRanges = new org.openapis.openapi.models.shared.SubnetworkSecondaryRange[]{{
                        add(new SubnetworkSecondaryRange() {{
                            ipCidrRange = "est";
                            rangeName = "quaerat";
                            reservedInternalRange = "non";
                        }}),
                        add(new SubnetworkSecondaryRange() {{
                            ipCidrRange = "dolorum";
                            rangeName = "nulla";
                            reservedInternalRange = "consequuntur";
                        }}),
                    }};
                    selfLink = "necessitatibus";
                    stackType = SubnetworkStackTypeEnum.IPV4_ONLY;
                    state = SubnetworkStateEnum.DRAINING;
                }};;
                accessToken = "facilis";
                alt = AltEnum.PROTO;
                callback = "tenetur";
                drainTimeoutSeconds = 652155L;
                fields = "inventore";
                key = "quod";
                oauthToken = "harum";
                prettyPrint = false;
                quotaUser = "id";
                requestId = "iusto";
                uploadType = "eligendi";
                uploadProtocol = "nostrum";
                userIp = "iste";
            }};            

            ComputeSubnetworksPatchResponse res = sdk.subnetworks.computeSubnetworksPatch(req, new ComputeSubnetworksPatchSecurity() {{
                option1 = new ComputeSubnetworksPatchSecurityOption1("iste", "quasi") {{
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

            ComputeSubnetworksSetIamPolicyRequest req = new ComputeSubnetworksSetIamPolicyRequest("nesciunt", "provident", "quia") {{
                dollarXgafv = XgafvEnum.ONE;
                regionSetPolicyRequest = new RegionSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "esse";
                            condition = new Expr() {{
                                description = "cum";
                                expression = "autem";
                                location = "eos";
                                title = "Dr.";
                            }};
                            members = new String[]{{
                                add("esse"),
                                add("doloremque"),
                                add("enim"),
                                add("explicabo"),
                            }};
                            role = "in";
                        }}),
                        add(new Binding() {{
                            bindingId = "recusandae";
                            condition = new Expr() {{
                                description = "eaque";
                                expression = "consequatur";
                                location = "accusamus";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("culpa"),
                                add("quia"),
                                add("soluta"),
                                add("sint"),
                            }};
                            role = "ipsa";
                        }}),
                        add(new Binding() {{
                            bindingId = "illo";
                            condition = new Expr() {{
                                description = "consectetur";
                                expression = "placeat";
                                location = "deleniti";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("explicabo"),
                                add("quo"),
                                add("eaque"),
                            }};
                            role = "distinctio";
                        }}),
                        add(new Binding() {{
                            bindingId = "ex";
                            condition = new Expr() {{
                                description = "impedit";
                                expression = "modi";
                                location = "dolores";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("quae"),
                                add("occaecati"),
                                add("ex"),
                            }};
                            role = "est";
                        }}),
                    }};
                    etag = "aliquid";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("similique"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("ut"),
                                    add("optio"),
                                    add("corporis"),
                                }};
                                service = "expedita";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ullam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("nesciunt"),
                                    add("fugit"),
                                    add("inventore"),
                                    add("tenetur"),
                                }};
                                service = "eligendi";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("deleniti"),
                                            add("atque"),
                                            add("dicta"),
                                            add("soluta"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("cumque"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("molestiae"),
                                    add("nisi"),
                                    add("cupiditate"),
                                    add("accusantium"),
                                }};
                                service = "ducimus";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "quas";
                                condition = new Expr() {{
                                    description = "assumenda";
                                    expression = "accusamus";
                                    location = "exercitationem";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("natus"),
                                    add("ullam"),
                                    add("sunt"),
                                }};
                                role = "debitis";
                            }}),
                            add(new Binding() {{
                                bindingId = "voluptatum";
                                condition = new Expr() {{
                                    description = "omnis";
                                    expression = "iste";
                                    location = "qui";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("sint"),
                                    add("accusamus"),
                                }};
                                role = "illum";
                            }}),
                            add(new Binding() {{
                                bindingId = "quidem";
                                condition = new Expr() {{
                                    description = "deserunt";
                                    expression = "nobis";
                                    location = "tempore";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("reiciendis"),
                                    add("eum"),
                                    add("tempore"),
                                }};
                                role = "vero";
                            }}),
                        }};
                        etag = "nulla";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "occaecati";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("quaerat"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "mollitia";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("sequi"),
                                        }};
                                    }}),
                                }};
                                description = "aliquam";
                                ins = new String[]{{
                                    add("autem"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Catherine Wolf";
                                                    value = "quis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Archie Abbott";
                                                    value = "dolor";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mr. Theodore Nolan Sr.";
                                                    value = "amet";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Scott Trantow";
                                                    value = "officia";
                                                }}),
                                            }};
                                            field = "amet";
                                            metric = "harum";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Gail King";
                                                    value = "repellendus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Hubert Doyle";
                                                    value = "alias";
                                                }}),
                                            }};
                                            field = "voluptate";
                                            metric = "itaque";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("adipisci"),
                                    add("eius"),
                                }};
                                permissions = new String[]{{
                                    add("quod"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "dignissimos";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("porro"),
                                            add("distinctio"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "alias";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("reprehenderit"),
                                            add("aliquam"),
                                            add("ad"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.IN;
                                        svc = "quod";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("saepe"),
                                            add("rem"),
                                            add("debitis"),
                                            add("quae"),
                                        }};
                                    }}),
                                }};
                                description = "modi";
                                ins = new String[]{{
                                    add("animi"),
                                    add("porro"),
                                    add("nisi"),
                                    add("accusantium"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
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
                                                    name = "Alyssa Kunze";
                                                    value = "alias";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Pearl Dickinson";
                                                    value = "excepturi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Andrea Kassulke III";
                                                    value = "atque";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Janice Davis";
                                                    value = "sed";
                                                }}),
                                            }};
                                            field = "a";
                                            metric = "ab";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Velma Cremin";
                                                    value = "sint";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Randal Reinger";
                                                    value = "aut";
                                                }}),
                                            }};
                                            field = "inventore";
                                            metric = "dicta";
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
                                                    name = "Jackie Aufderhar";
                                                    value = "maxime";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Troy Simonis";
                                                    value = "reiciendis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Sidney Keebler DDS";
                                                    value = "eius";
                                                }}),
                                            }};
                                            field = "nam";
                                            metric = "id";
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
                                                    name = "Lauren Braun";
                                                    value = "suscipit";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Barry Carroll";
                                                    value = "similique";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Noel Beier";
                                                    value = "neque";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jasmine Connelly";
                                                    value = "cum";
                                                }}),
                                            }};
                                            field = "numquam";
                                            metric = "aliquid";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("illum"),
                                    add("laboriosam"),
                                }};
                                permissions = new String[]{{
                                    add("beatae"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "expedita";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("error"),
                                            add("iure"),
                                            add("repellendus"),
                                        }};
                                    }}),
                                }};
                                description = "quis";
                                ins = new String[]{{
                                    add("sit"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
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
                                                    name = "Roosevelt O'Hara";
                                                    value = "a";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Marilyn Wiegand";
                                                    value = "dicta";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Felix Stanton";
                                                    value = "sint";
                                                }}),
                                            }};
                                            field = "labore";
                                            metric = "dolore";
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
                                                    name = "Clinton Parisian";
                                                    value = "voluptatum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Forrest Hauck";
                                                    value = "optio";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Vicki Flatley";
                                                    value = "voluptatum";
                                                }}),
                                            }};
                                            field = "aspernatur";
                                            metric = "fugiat";
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
                                                    name = "Krystal Douglas";
                                                    value = "rerum";
                                                }}),
                                            }};
                                            field = "minima";
                                            metric = "quis";
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
                                                    name = "Lula Halvorson";
                                                    value = "inventore";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Frank Roberts";
                                                    value = "placeat";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Tyler Rowe";
                                                    value = "doloremque";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Clyde Schmitt";
                                                    value = "perspiciatis";
                                                }}),
                                            }};
                                            field = "aliquid";
                                            metric = "libero";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("provident"),
                                }};
                                permissions = new String[]{{
                                    add("maiores"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "cum";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("rem"),
                                            add("minima"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "alias";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("molestiae"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "amet";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("excepturi"),
                                        }};
                                    }}),
                                }};
                                description = "eligendi";
                                ins = new String[]{{
                                    add("soluta"),
                                    add("commodi"),
                                    add("magnam"),
                                    add("soluta"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Robin Gleichner";
                                                    value = "at";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Charlotte Moen";
                                                    value = "explicabo";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Emilio Howe";
                                                    value = "mollitia";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Leonard Schumm";
                                                    value = "excepturi";
                                                }}),
                                            }};
                                            field = "doloremque";
                                            metric = "maiores";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("a"),
                                    add("quasi"),
                                    add("id"),
                                    add("beatae"),
                                }};
                                permissions = new String[]{{
                                    add("consequuntur"),
                                    add("architecto"),
                                    add("fugit"),
                                    add("debitis"),
                                }};
                            }}),
                        }};
                        version = 888333;
                    }};;
                }};;
                accessToken = "doloribus";
                alt = AltEnum.MEDIA;
                callback = "quos";
                fields = "accusantium";
                key = "voluptatem";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "soluta";
                uploadType = "quas";
                uploadProtocol = "impedit";
                userIp = "suscipit";
            }};            

            ComputeSubnetworksSetIamPolicyResponse res = sdk.subnetworks.computeSubnetworksSetIamPolicy(req, new ComputeSubnetworksSetIamPolicySecurity() {{
                option1 = new ComputeSubnetworksSetIamPolicySecurityOption1("sint", "ratione") {{
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

            ComputeSubnetworksSetPrivateIpGoogleAccessRequest req = new ComputeSubnetworksSetPrivateIpGoogleAccessRequest("maxime", "illum", "quos") {{
                dollarXgafv = XgafvEnum.ONE;
                subnetworksSetPrivateIpGoogleAccessRequest = new SubnetworksSetPrivateIpGoogleAccessRequest() {{
                    privateIpGoogleAccess = false;
                }};;
                accessToken = "veritatis";
                alt = AltEnum.JSON;
                callback = "repudiandae";
                fields = "doloremque";
                key = "rem";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "eveniet";
                requestId = "laudantium";
                uploadType = "nulla";
                uploadProtocol = "ea";
                userIp = "fugit";
            }};            

            ComputeSubnetworksSetPrivateIpGoogleAccessResponse res = sdk.subnetworks.computeSubnetworksSetPrivateIpGoogleAccess(req, new ComputeSubnetworksSetPrivateIpGoogleAccessSecurity() {{
                option1 = new ComputeSubnetworksSetPrivateIpGoogleAccessSecurityOption1("corporis", "ea") {{
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

            ComputeSubnetworksTestIamPermissionsRequest req = new ComputeSubnetworksTestIamPermissionsRequest("aliquid", "quaerat", "molestiae") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("praesentium"),
                        add("cumque"),
                    }};
                }};;
                accessToken = "sunt";
                alt = AltEnum.MEDIA;
                callback = "ut";
                fields = "enim";
                key = "dolor";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "quae";
                uploadType = "eaque";
                uploadProtocol = "libero";
                userIp = "perspiciatis";
            }};            

            ComputeSubnetworksTestIamPermissionsResponse res = sdk.subnetworks.computeSubnetworksTestIamPermissions(req, new ComputeSubnetworksTestIamPermissionsSecurity() {{
                option1 = new ComputeSubnetworksTestIamPermissionsSecurityOption1("earum", "molestias") {{
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
