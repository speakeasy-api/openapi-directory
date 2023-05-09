# interconnectAttachments

### Available Operations

* [computeInterconnectAttachmentsAggregatedList](#computeinterconnectattachmentsaggregatedlist) - Retrieves an aggregated list of interconnect attachments.
* [computeInterconnectAttachmentsDelete](#computeinterconnectattachmentsdelete) - Deletes the specified interconnect attachment.
* [computeInterconnectAttachmentsGet](#computeinterconnectattachmentsget) - Returns the specified interconnect attachment.
* [computeInterconnectAttachmentsGetIamPolicy](#computeinterconnectattachmentsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeInterconnectAttachmentsInsert](#computeinterconnectattachmentsinsert) - Creates an InterconnectAttachment in the specified project using the data included in the request.
* [computeInterconnectAttachmentsList](#computeinterconnectattachmentslist) - Retrieves the list of interconnect attachments contained within the specified region.
* [computeInterconnectAttachmentsPatch](#computeinterconnectattachmentspatch) - Updates the specified interconnect attachment with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeInterconnectAttachmentsSetIamPolicy](#computeinterconnectattachmentssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeInterconnectAttachmentsSetLabels](#computeinterconnectattachmentssetlabels) - Sets the labels on an InterconnectAttachment. To learn more about labels, read the Labeling Resources documentation.
* [computeInterconnectAttachmentsTestIamPermissions](#computeinterconnectattachmentstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeInterconnectAttachmentsAggregatedList

Retrieves an aggregated list of interconnect attachments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInterconnectAttachmentsAggregatedListRequest req = new ComputeInterconnectAttachmentsAggregatedListRequest("ducimus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "a";
                alt = AltEnum.PROTO;
                callback = "modi";
                fields = "blanditiis";
                filter = "minus";
                includeAllScopes = false;
                key = "odit";
                maxResults = 560156L;
                oauthToken = "dolores";
                orderBy = "harum";
                pageToken = "praesentium";
                prettyPrint = false;
                quotaUser = "nihil";
                returnPartialSuccess = false;
                uploadType = "beatae";
                uploadProtocol = "suscipit";
                userIp = "porro";
            }};            

            ComputeInterconnectAttachmentsAggregatedListResponse res = sdk.interconnectAttachments.computeInterconnectAttachmentsAggregatedList(req, new ComputeInterconnectAttachmentsAggregatedListSecurity() {{
                option1 = new ComputeInterconnectAttachmentsAggregatedListSecurityOption1("fugit", "iure") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.interconnectAttachmentAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInterconnectAttachmentsDelete

Deletes the specified interconnect attachment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsDeleteRequest;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsDeleteResponse;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInterconnectAttachmentsDeleteRequest req = new ComputeInterconnectAttachmentsDeleteRequest("doloribus", "aliquid", "libero") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptate";
                alt = AltEnum.JSON;
                callback = "dignissimos";
                fields = "atque";
                key = "alias";
                oauthToken = "ratione";
                prettyPrint = false;
                quotaUser = "voluptatem";
                requestId = "incidunt";
                uploadType = "maxime";
                uploadProtocol = "tempora";
                userIp = "aperiam";
            }};            

            ComputeInterconnectAttachmentsDeleteResponse res = sdk.interconnectAttachments.computeInterconnectAttachmentsDelete(req, new ComputeInterconnectAttachmentsDeleteSecurity() {{
                option1 = new ComputeInterconnectAttachmentsDeleteSecurityOption1("error", "impedit") {{
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

## computeInterconnectAttachmentsGet

Returns the specified interconnect attachment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsGetRequest;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsGetResponse;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsGetSecurity;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInterconnectAttachmentsGetRequest req = new ComputeInterconnectAttachmentsGetRequest("magni", "expedita", "magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "temporibus";
                alt = AltEnum.MEDIA;
                callback = "eos";
                fields = "exercitationem";
                key = "ut";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "nulla";
                uploadType = "eveniet";
                uploadProtocol = "velit";
                userIp = "molestiae";
            }};            

            ComputeInterconnectAttachmentsGetResponse res = sdk.interconnectAttachments.computeInterconnectAttachmentsGet(req, new ComputeInterconnectAttachmentsGetSecurity() {{
                option1 = new ComputeInterconnectAttachmentsGetSecurityOption1("molestiae", "dolores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.interconnectAttachment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInterconnectAttachmentsGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsGetIamPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInterconnectAttachmentsGetIamPolicyRequest req = new ComputeInterconnectAttachmentsGetIamPolicyRequest("incidunt", "consectetur", "exercitationem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "officiis";
                alt = AltEnum.PROTO;
                callback = "deleniti";
                fields = "nemo";
                key = "dolorum";
                oauthToken = "odio";
                optionsRequestedPolicyVersion = 962525L;
                prettyPrint = false;
                quotaUser = "rem";
                uploadType = "placeat";
                uploadProtocol = "minus";
                userIp = "consequuntur";
            }};            

            ComputeInterconnectAttachmentsGetIamPolicyResponse res = sdk.interconnectAttachments.computeInterconnectAttachmentsGetIamPolicy(req, new ComputeInterconnectAttachmentsGetIamPolicySecurity() {{
                option1 = new ComputeInterconnectAttachmentsGetIamPolicySecurityOption1("iste", "veritatis") {{
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

## computeInterconnectAttachmentsInsert

Creates an InterconnectAttachment in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsInsertRequest;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsInsertResponse;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsInsertSecurity;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InterconnectAttachment;
import org.openapis.openapi.models.shared.InterconnectAttachmentBandwidthEnum;
import org.openapis.openapi.models.shared.InterconnectAttachmentConfigurationConstraints;
import org.openapis.openapi.models.shared.InterconnectAttachmentConfigurationConstraintsBgpMd5Enum;
import org.openapis.openapi.models.shared.InterconnectAttachmentConfigurationConstraintsBgpPeerASNRange;
import org.openapis.openapi.models.shared.InterconnectAttachmentEdgeAvailabilityDomainEnum;
import org.openapis.openapi.models.shared.InterconnectAttachmentEncryptionEnum;
import org.openapis.openapi.models.shared.InterconnectAttachmentOperationalStatusEnum;
import org.openapis.openapi.models.shared.InterconnectAttachmentPartnerMetadata;
import org.openapis.openapi.models.shared.InterconnectAttachmentPrivateInfo;
import org.openapis.openapi.models.shared.InterconnectAttachmentStackTypeEnum;
import org.openapis.openapi.models.shared.InterconnectAttachmentStateEnum;
import org.openapis.openapi.models.shared.InterconnectAttachmentTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInterconnectAttachmentsInsertRequest req = new ComputeInterconnectAttachmentsInsertRequest("ab", "dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                interconnectAttachment = new InterconnectAttachment() {{
                    adminEnabled = false;
                    bandwidth = InterconnectAttachmentBandwidthEnum.BPS500_M;
                    candidateIpv6Subnets = new String[]{{
                        add("debitis"),
                        add("distinctio"),
                    }};
                    candidateSubnets = new String[]{{
                        add("porro"),
                        add("commodi"),
                        add("alias"),
                        add("doloremque"),
                    }};
                    cloudRouterIpAddress = "perspiciatis";
                    cloudRouterIpv6Address = "sapiente";
                    cloudRouterIpv6InterfaceId = "voluptatem";
                    configurationConstraints = new InterconnectAttachmentConfigurationConstraints() {{
                        bgpMd5 = InterconnectAttachmentConfigurationConstraintsBgpMd5Enum.MD5_OPTIONAL;
                        bgpPeerAsnRanges = new org.openapis.openapi.models.shared.InterconnectAttachmentConfigurationConstraintsBgpPeerASNRange[]{{
                            add(new InterconnectAttachmentConfigurationConstraintsBgpPeerASNRange() {{
                                max = 848389L;
                                min = 240039L;
                            }}),
                            add(new InterconnectAttachmentConfigurationConstraintsBgpPeerASNRange() {{
                                max = 540495L;
                                min = 333131L;
                            }}),
                            add(new InterconnectAttachmentConfigurationConstraintsBgpPeerASNRange() {{
                                max = 149535L;
                                min = 232941L;
                            }}),
                            add(new InterconnectAttachmentConfigurationConstraintsBgpPeerASNRange() {{
                                max = 778452L;
                                min = 867773L;
                            }}),
                        }};
                    }};;
                    creationTimestamp = "animi";
                    customerRouterIpAddress = "magnam";
                    customerRouterIpv6Address = "officiis";
                    customerRouterIpv6InterfaceId = "soluta";
                    dataplaneVersion = 719455;
                    description = "iste";
                    edgeAvailabilityDomain = InterconnectAttachmentEdgeAvailabilityDomainEnum.AVAILABILITY_DOMAIN_ANY;
                    encryption = InterconnectAttachmentEncryptionEnum.NONE;
                    googleReferenceId = "laudantium";
                    id = "sequi";
                    interconnect = "repellat";
                    ipsecInternalAddresses = new String[]{{
                        add("neque"),
                        add("repellendus"),
                        add("asperiores"),
                    }};
                    kind = "iste";
                    labelFingerprint = "quidem";
                    labels = new java.util.HashMap<String, String>() {{
                        put("minus", "numquam");
                    }};
                    mtu = 424174;
                    name = "Timothy Moore";
                    operationalStatus = InterconnectAttachmentOperationalStatusEnum.OS_ACTIVE;
                    pairingKey = "recusandae";
                    partnerAsn = "provident";
                    partnerMetadata = new InterconnectAttachmentPartnerMetadata() {{
                        interconnectName = "quod";
                        partnerName = "explicabo";
                        portalUrl = "qui";
                    }};;
                    privateInterconnectInfo = new InterconnectAttachmentPrivateInfo() {{
                        tag8021q = 15495L;
                    }};;
                    region = "ipsam";
                    remoteService = "nulla";
                    router = "delectus";
                    satisfiesPzs = false;
                    selfLink = "saepe";
                    selfLinkWithId = "odio";
                    stackType = InterconnectAttachmentStackTypeEnum.IPV4_IPV6;
                    state = InterconnectAttachmentStateEnum.PARTNER_REQUEST_RECEIVED;
                    subnetLength = 725363;
                    type = InterconnectAttachmentTypeEnum.PARTNER_PROVIDER;
                    vlanTag8021q = 954245;
                }};;
                accessToken = "rerum";
                alt = AltEnum.PROTO;
                callback = "quidem";
                fields = "rem";
                key = "commodi";
                oauthToken = "aperiam";
                prettyPrint = false;
                quotaUser = "quasi";
                requestId = "ad";
                uploadType = "maiores";
                uploadProtocol = "magni";
                userIp = "veritatis";
                validateOnly = false;
            }};            

            ComputeInterconnectAttachmentsInsertResponse res = sdk.interconnectAttachments.computeInterconnectAttachmentsInsert(req, new ComputeInterconnectAttachmentsInsertSecurity() {{
                option1 = new ComputeInterconnectAttachmentsInsertSecurityOption1("aliquid", "est") {{
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

## computeInterconnectAttachmentsList

Retrieves the list of interconnect attachments contained within the specified region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsListRequest;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsListResponse;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsListSecurity;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInterconnectAttachmentsListRequest req = new ComputeInterconnectAttachmentsListRequest("fuga", "eaque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aut";
                alt = AltEnum.MEDIA;
                callback = "consequatur";
                fields = "odio";
                filter = "hic";
                key = "dolorum";
                maxResults = 462162L;
                oauthToken = "amet";
                orderBy = "unde";
                pageToken = "corrupti";
                prettyPrint = false;
                quotaUser = "odit";
                returnPartialSuccess = false;
                uploadType = "modi";
                uploadProtocol = "odio";
                userIp = "officia";
            }};            

            ComputeInterconnectAttachmentsListResponse res = sdk.interconnectAttachments.computeInterconnectAttachmentsList(req, new ComputeInterconnectAttachmentsListSecurity() {{
                option1 = new ComputeInterconnectAttachmentsListSecurityOption1("totam", "esse") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.interconnectAttachmentList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInterconnectAttachmentsPatch

Updates the specified interconnect attachment with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsPatchRequest;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsPatchResponse;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsPatchSecurity;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InterconnectAttachment;
import org.openapis.openapi.models.shared.InterconnectAttachmentBandwidthEnum;
import org.openapis.openapi.models.shared.InterconnectAttachmentConfigurationConstraints;
import org.openapis.openapi.models.shared.InterconnectAttachmentConfigurationConstraintsBgpMd5Enum;
import org.openapis.openapi.models.shared.InterconnectAttachmentConfigurationConstraintsBgpPeerASNRange;
import org.openapis.openapi.models.shared.InterconnectAttachmentEdgeAvailabilityDomainEnum;
import org.openapis.openapi.models.shared.InterconnectAttachmentEncryptionEnum;
import org.openapis.openapi.models.shared.InterconnectAttachmentOperationalStatusEnum;
import org.openapis.openapi.models.shared.InterconnectAttachmentPartnerMetadata;
import org.openapis.openapi.models.shared.InterconnectAttachmentPrivateInfo;
import org.openapis.openapi.models.shared.InterconnectAttachmentStackTypeEnum;
import org.openapis.openapi.models.shared.InterconnectAttachmentStateEnum;
import org.openapis.openapi.models.shared.InterconnectAttachmentTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInterconnectAttachmentsPatchRequest req = new ComputeInterconnectAttachmentsPatchRequest("sed", "beatae", "esse") {{
                dollarXgafv = XgafvEnum.TWO;
                interconnectAttachment1 = new InterconnectAttachment() {{
                    adminEnabled = false;
                    bandwidth = InterconnectAttachmentBandwidthEnum.BPS50_M;
                    candidateIpv6Subnets = new String[]{{
                        add("sint"),
                        add("commodi"),
                        add("qui"),
                        add("possimus"),
                    }};
                    candidateSubnets = new String[]{{
                        add("consectetur"),
                        add("debitis"),
                        add("itaque"),
                        add("recusandae"),
                    }};
                    cloudRouterIpAddress = "dignissimos";
                    cloudRouterIpv6Address = "porro";
                    cloudRouterIpv6InterfaceId = "consectetur";
                    configurationConstraints = new InterconnectAttachmentConfigurationConstraints() {{
                        bgpMd5 = InterconnectAttachmentConfigurationConstraintsBgpMd5Enum.MD5_REQUIRED;
                        bgpPeerAsnRanges = new org.openapis.openapi.models.shared.InterconnectAttachmentConfigurationConstraintsBgpPeerASNRange[]{{
                            add(new InterconnectAttachmentConfigurationConstraintsBgpPeerASNRange() {{
                                max = 775768L;
                                min = 449656L;
                            }}),
                            add(new InterconnectAttachmentConfigurationConstraintsBgpPeerASNRange() {{
                                max = 619414L;
                                min = 447567L;
                            }}),
                        }};
                    }};;
                    creationTimestamp = "consequatur";
                    customerRouterIpAddress = "officiis";
                    customerRouterIpv6Address = "dicta";
                    customerRouterIpv6InterfaceId = "harum";
                    dataplaneVersion = 109545;
                    description = "culpa";
                    edgeAvailabilityDomain = InterconnectAttachmentEdgeAvailabilityDomainEnum.AVAILABILITY_DOMAIN2;
                    encryption = InterconnectAttachmentEncryptionEnum.NONE;
                    googleReferenceId = "quidem";
                    id = "impedit";
                    interconnect = "earum";
                    ipsecInternalAddresses = new String[]{{
                        add("saepe"),
                        add("et"),
                    }};
                    kind = "perspiciatis";
                    labelFingerprint = "cum";
                    labels = new java.util.HashMap<String, String>() {{
                        put("aperiam", "ab");
                        put("fugit", "impedit");
                        put("ut", "modi");
                    }};
                    mtu = 264521;
                    name = "Miss Benjamin Ernser";
                    operationalStatus = InterconnectAttachmentOperationalStatusEnum.OS_ACTIVE;
                    pairingKey = "magnam";
                    partnerAsn = "dignissimos";
                    partnerMetadata = new InterconnectAttachmentPartnerMetadata() {{
                        interconnectName = "in";
                        partnerName = "sed";
                        portalUrl = "iusto";
                    }};;
                    privateInterconnectInfo = new InterconnectAttachmentPrivateInfo() {{
                        tag8021q = 842686L;
                    }};;
                    region = "eveniet";
                    remoteService = "iste";
                    router = "ullam";
                    satisfiesPzs = false;
                    selfLink = "voluptatibus";
                    selfLinkWithId = "esse";
                    stackType = InterconnectAttachmentStackTypeEnum.IPV4_IPV6;
                    state = InterconnectAttachmentStateEnum.PENDING_PARTNER;
                    subnetLength = 856101;
                    type = InterconnectAttachmentTypeEnum.PARTNER_PROVIDER;
                    vlanTag8021q = 734310;
                }};;
                accessToken = "hic";
                alt = AltEnum.MEDIA;
                callback = "rem";
                fields = "perferendis";
                key = "eaque";
                oauthToken = "tempore";
                prettyPrint = false;
                quotaUser = "eaque";
                requestId = "quasi";
                uploadType = "tempore";
                uploadProtocol = "placeat";
                userIp = "tempore";
            }};            

            ComputeInterconnectAttachmentsPatchResponse res = sdk.interconnectAttachments.computeInterconnectAttachmentsPatch(req, new ComputeInterconnectAttachmentsPatchSecurity() {{
                option1 = new ComputeInterconnectAttachmentsPatchSecurityOption1("quod", "aperiam") {{
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

## computeInterconnectAttachmentsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsSetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsSetIamPolicySecurityOption2;
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

            ComputeInterconnectAttachmentsSetIamPolicyRequest req = new ComputeInterconnectAttachmentsSetIamPolicyRequest("ipsum", "sunt", "delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                regionSetPolicyRequest = new RegionSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "illo";
                            condition = new Expr() {{
                                description = "omnis";
                                expression = "quibusdam";
                                location = "tempore";
                                title = "Dr.";
                            }};
                            members = new String[]{{
                                add("architecto"),
                                add("et"),
                            }};
                            role = "architecto";
                        }}),
                        add(new Binding() {{
                            bindingId = "culpa";
                            condition = new Expr() {{
                                description = "molestias";
                                expression = "commodi";
                                location = "assumenda";
                                title = "Dr.";
                            }};
                            members = new String[]{{
                                add("quae"),
                            }};
                            role = "ullam";
                        }}),
                        add(new Binding() {{
                            bindingId = "consequuntur";
                            condition = new Expr() {{
                                description = "ratione";
                                expression = "necessitatibus";
                                location = "consectetur";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("sequi"),
                            }};
                            role = "autem";
                        }}),
                        add(new Binding() {{
                            bindingId = "quaerat";
                            condition = new Expr() {{
                                description = "aspernatur";
                                expression = "illo";
                                location = "reprehenderit";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("repudiandae"),
                                add("ad"),
                            }};
                            role = "excepturi";
                        }}),
                    }};
                    etag = "suscipit";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dicta"),
                                            add("facilis"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("odit"),
                                            add("aperiam"),
                                            add("nostrum"),
                                            add("ipsum"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quos"),
                                            add("maxime"),
                                            add("nesciunt"),
                                            add("ab"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("fugit"),
                                }};
                                service = "nemo";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("eveniet"),
                                            add("eaque"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("iste"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sed"),
                                            add("voluptas"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("totam"),
                                    add("sunt"),
                                    add("dolor"),
                                }};
                                service = "atque";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("optio"),
                                            add("itaque"),
                                            add("laboriosam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dolores"),
                                            add("officia"),
                                            add("consequatur"),
                                            add("error"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("facilis"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ab"),
                                            add("reprehenderit"),
                                            add("aliquid"),
                                            add("ipsa"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("sequi"),
                                    add("quisquam"),
                                }};
                                service = "esse";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "natus";
                                condition = new Expr() {{
                                    description = "animi";
                                    expression = "eos";
                                    location = "id";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("vero"),
                                    add("distinctio"),
                                    add("veritatis"),
                                }};
                                role = "sunt";
                            }}),
                            add(new Binding() {{
                                bindingId = "excepturi";
                                condition = new Expr() {{
                                    description = "assumenda";
                                    expression = "minus";
                                    location = "ipsam";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("deserunt"),
                                    add("nam"),
                                }};
                                role = "libero";
                            }}),
                            add(new Binding() {{
                                bindingId = "iure";
                                condition = new Expr() {{
                                    description = "facilis";
                                    expression = "inventore";
                                    location = "eaque";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("asperiores"),
                                    add("quia"),
                                    add("magnam"),
                                }};
                                role = "magnam";
                            }}),
                        }};
                        etag = "illum";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "consequatur";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("voluptatem"),
                                        }};
                                    }}),
                                }};
                                description = "id";
                                ins = new String[]{{
                                    add("dolore"),
                                    add("nulla"),
                                    add("doloremque"),
                                    add("esse"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
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
                                                    name = "Miriam Howell";
                                                    value = "commodi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Rachael Hauck";
                                                    value = "distinctio";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Terri Ernser";
                                                    value = "dolorem";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Eva Stamm";
                                                    value = "minima";
                                                }}),
                                            }};
                                            field = "quas";
                                            metric = "nam";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("alias"),
                                    add("ullam"),
                                    add("numquam"),
                                }};
                                permissions = new String[]{{
                                    add("officiis"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "deserunt";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("hic"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "error";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("tenetur"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "sed";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("accusamus"),
                                            add("excepturi"),
                                            add("laborum"),
                                        }};
                                    }}),
                                }};
                                description = "nemo";
                                ins = new String[]{{
                                    add("optio"),
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
                                                    name = "Stewart Cartwright";
                                                    value = "hic";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Hannah Weissnat";
                                                    value = "minus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Rebecca McGlynn";
                                                    value = "illum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Deborah Gibson";
                                                    value = "fuga";
                                                }}),
                                            }};
                                            field = "eveniet";
                                            metric = "reprehenderit";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("ipsum"),
                                    add("eius"),
                                    add("nulla"),
                                }};
                                permissions = new String[]{{
                                    add("recusandae"),
                                    add("harum"),
                                    add("nobis"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "hic";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("iure"),
                                            add("ab"),
                                            add("cum"),
                                            add("ipsa"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.IN;
                                        svc = "consequuntur";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("suscipit"),
                                            add("nemo"),
                                            add("amet"),
                                            add("vel"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "consectetur";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("modi"),
                                            add("vitae"),
                                            add("aliquam"),
                                        }};
                                    }}),
                                }};
                                description = "culpa";
                                ins = new String[]{{
                                    add("fugit"),
                                    add("unde"),
                                    add("incidunt"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
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
                                                    name = "Billie Nienow";
                                                    value = "eligendi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ms. Kristi Larkin III";
                                                    value = "et";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Alfred Hermann";
                                                    value = "dolorum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Eunice Johns";
                                                    value = "facere";
                                                }}),
                                            }};
                                            field = "pariatur";
                                            metric = "quisquam";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
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
                                                    name = "Fannie Larkin";
                                                    value = "porro";
                                                }}),
                                            }};
                                            field = "rem";
                                            metric = "nemo";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Sheldon Homenick";
                                                    value = "dolore";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Joel Howe";
                                                    value = "sed";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ron Conn";
                                                    value = "impedit";
                                                }}),
                                            }};
                                            field = "facere";
                                            metric = "iure";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
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
                                                    name = "Lydia Conroy";
                                                    value = "fuga";
                                                }}),
                                            }};
                                            field = "aut";
                                            metric = "adipisci";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("amet"),
                                    add("culpa"),
                                    add("illo"),
                                }};
                                permissions = new String[]{{
                                    add("veritatis"),
                                    add("saepe"),
                                    add("quam"),
                                    add("est"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "esse";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("corporis"),
                                        }};
                                    }}),
                                }};
                                description = "officiis";
                                ins = new String[]{{
                                    add("nesciunt"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dr. Warren Mayert";
                                                    value = "corrupti";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jacqueline Miller";
                                                    value = "et";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Shawn Crooks";
                                                    value = "quo";
                                                }}),
                                            }};
                                            field = "officia";
                                            metric = "quibusdam";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
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
                                                    name = "Mr. Anita Herzog MD";
                                                    value = "minima";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Curtis Kautzer";
                                                    value = "magni";
                                                }}),
                                            }};
                                            field = "sunt";
                                            metric = "eveniet";
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
                                                    name = "Jessica Okuneva";
                                                    value = "modi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Eula Hegmann";
                                                    value = "delectus";
                                                }}),
                                            }};
                                            field = "ea";
                                            metric = "eius";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Audrey Rowe";
                                                    value = "voluptate";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Brenda Turner";
                                                    value = "soluta";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Marlene Thiel";
                                                    value = "laborum";
                                                }}),
                                            }};
                                            field = "mollitia";
                                            metric = "hic";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("assumenda"),
                                    add("quas"),
                                    add("adipisci"),
                                }};
                                permissions = new String[]{{
                                    add("molestiae"),
                                }};
                            }}),
                        }};
                        version = 921106;
                    }};;
                }};;
                accessToken = "rem";
                alt = AltEnum.PROTO;
                callback = "esse";
                fields = "quibusdam";
                key = "non";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "vitae";
                uploadProtocol = "incidunt";
                userIp = "nemo";
            }};            

            ComputeInterconnectAttachmentsSetIamPolicyResponse res = sdk.interconnectAttachments.computeInterconnectAttachmentsSetIamPolicy(req, new ComputeInterconnectAttachmentsSetIamPolicySecurity() {{
                option1 = new ComputeInterconnectAttachmentsSetIamPolicySecurityOption1("recusandae", "quidem") {{
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

## computeInterconnectAttachmentsSetLabels

Sets the labels on an InterconnectAttachment. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsSetLabelsRequest;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsSetLabelsResponse;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsSetLabelsSecurity;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsSetLabelsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsSetLabelsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RegionSetLabelsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInterconnectAttachmentsSetLabelsRequest req = new ComputeInterconnectAttachmentsSetLabelsRequest("vero", "assumenda", "praesentium") {{
                dollarXgafv = XgafvEnum.ONE;
                regionSetLabelsRequest = new RegionSetLabelsRequest() {{
                    labelFingerprint = "ratione";
                    labels = new java.util.HashMap<String, String>() {{
                        put("a", "consequuntur");
                        put("optio", "vitae");
                        put("iure", "nihil");
                    }};
                }};;
                accessToken = "excepturi";
                alt = AltEnum.PROTO;
                callback = "deleniti";
                fields = "similique";
                key = "sit";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "dolore";
                requestId = "nisi";
                uploadType = "iure";
                uploadProtocol = "modi";
                userIp = "suscipit";
            }};            

            ComputeInterconnectAttachmentsSetLabelsResponse res = sdk.interconnectAttachments.computeInterconnectAttachmentsSetLabels(req, new ComputeInterconnectAttachmentsSetLabelsSecurity() {{
                option1 = new ComputeInterconnectAttachmentsSetLabelsSecurityOption1("itaque", "minus") {{
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

## computeInterconnectAttachmentsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInterconnectAttachmentsTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInterconnectAttachmentsTestIamPermissionsRequest req = new ComputeInterconnectAttachmentsTestIamPermissionsRequest("ea", "ipsam", "laudantium") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("rem"),
                    }};
                }};;
                accessToken = "ab";
                alt = AltEnum.MEDIA;
                callback = "eligendi";
                fields = "fugiat";
                key = "itaque";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "culpa";
                uploadType = "recusandae";
                uploadProtocol = "necessitatibus";
                userIp = "totam";
            }};            

            ComputeInterconnectAttachmentsTestIamPermissionsResponse res = sdk.interconnectAttachments.computeInterconnectAttachmentsTestIamPermissions(req, new ComputeInterconnectAttachmentsTestIamPermissionsSecurity() {{
                option1 = new ComputeInterconnectAttachmentsTestIamPermissionsSecurityOption1("impedit", "reprehenderit") {{
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
