# interconnectAttachments

### Available Operations

* [computeInterconnectAttachmentsAggregatedList](#computeinterconnectattachmentsaggregatedlist) - Retrieves an aggregated list of interconnect attachments.
* [computeInterconnectAttachmentsDelete](#computeinterconnectattachmentsdelete) - Deletes the specified interconnect attachment.
* [computeInterconnectAttachmentsGet](#computeinterconnectattachmentsget) - Returns the specified interconnect attachment.
* [computeInterconnectAttachmentsInsert](#computeinterconnectattachmentsinsert) - Creates an InterconnectAttachment in the specified project using the data included in the request.
* [computeInterconnectAttachmentsList](#computeinterconnectattachmentslist) - Retrieves the list of interconnect attachments contained within the specified region.
* [computeInterconnectAttachmentsPatch](#computeinterconnectattachmentspatch) - Updates the specified interconnect attachment with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
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

            ComputeInterconnectAttachmentsAggregatedListRequest req = new ComputeInterconnectAttachmentsAggregatedListRequest("sunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "magni";
                alt = AltEnum.MEDIA;
                callback = "fugit";
                fields = "quidem";
                filter = "minus";
                includeAllScopes = false;
                key = "cupiditate";
                maxResults = 810982L;
                oauthToken = "ratione";
                orderBy = "magni";
                pageToken = "sunt";
                prettyPrint = false;
                quotaUser = "vitae";
                returnPartialSuccess = false;
                uploadType = "ex";
                uploadProtocol = "sint";
                userIp = "dignissimos";
            }};            

            ComputeInterconnectAttachmentsAggregatedListResponse res = sdk.interconnectAttachments.computeInterconnectAttachmentsAggregatedList(req, new ComputeInterconnectAttachmentsAggregatedListSecurity() {{
                option1 = new ComputeInterconnectAttachmentsAggregatedListSecurityOption1("rerum", "inventore") {{
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

            ComputeInterconnectAttachmentsDeleteRequest req = new ComputeInterconnectAttachmentsDeleteRequest("quas", "deleniti", "voluptatem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "cumque";
                alt = AltEnum.PROTO;
                callback = "expedita";
                fields = "odit";
                key = "distinctio";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "neque";
                requestId = "maxime";
                uploadType = "ab";
                uploadProtocol = "nostrum";
                userIp = "repellat";
            }};            

            ComputeInterconnectAttachmentsDeleteResponse res = sdk.interconnectAttachments.computeInterconnectAttachmentsDelete(req, new ComputeInterconnectAttachmentsDeleteSecurity() {{
                option1 = new ComputeInterconnectAttachmentsDeleteSecurityOption1("eum", "molestiae") {{
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

            ComputeInterconnectAttachmentsGetRequest req = new ComputeInterconnectAttachmentsGetRequest("alias", "libero", "at") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nihil";
                alt = AltEnum.MEDIA;
                callback = "numquam";
                fields = "blanditiis";
                key = "sequi";
                oauthToken = "sunt";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "exercitationem";
                uploadProtocol = "dolor";
                userIp = "debitis";
            }};            

            ComputeInterconnectAttachmentsGetResponse res = sdk.interconnectAttachments.computeInterconnectAttachmentsGet(req, new ComputeInterconnectAttachmentsGetSecurity() {{
                option1 = new ComputeInterconnectAttachmentsGetSecurityOption1("necessitatibus", "harum") {{
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

            ComputeInterconnectAttachmentsInsertRequest req = new ComputeInterconnectAttachmentsInsertRequest("amet", "tempore") {{
                dollarXgafv = XgafvEnum.ONE;
                interconnectAttachment = new InterconnectAttachment() {{
                    adminEnabled = false;
                    bandwidth = InterconnectAttachmentBandwidthEnum.BPS50_M;
                    candidateIpv6Subnets = new String[]{{
                        add("quaerat"),
                    }};
                    candidateSubnets = new String[]{{
                        add("quisquam"),
                    }};
                    cloudRouterIpAddress = "adipisci";
                    cloudRouterIpv6Address = "quasi";
                    cloudRouterIpv6InterfaceId = "alias";
                    creationTimestamp = "occaecati";
                    customerRouterIpAddress = "perspiciatis";
                    customerRouterIpv6Address = "deleniti";
                    customerRouterIpv6InterfaceId = "dolor";
                    dataplaneVersion = 431192;
                    description = "eum";
                    edgeAvailabilityDomain = InterconnectAttachmentEdgeAvailabilityDomainEnum.AVAILABILITY_DOMAIN1;
                    encryption = InterconnectAttachmentEncryptionEnum.NONE;
                    googleReferenceId = "vel";
                    id = "commodi";
                    interconnect = "quibusdam";
                    ipsecInternalAddresses = new String[]{{
                        add("libero"),
                        add("expedita"),
                        add("reprehenderit"),
                        add("nulla"),
                    }};
                    kind = "reiciendis";
                    labelFingerprint = "aliquid";
                    labels = new java.util.HashMap<String, String>() {{
                        put("soluta", "aperiam");
                        put("molestias", "nobis");
                        put("totam", "distinctio");
                        put("modi", "aperiam");
                    }};
                    mtu = 508513;
                    name = "Mrs. Jose Konopelski";
                    operationalStatus = InterconnectAttachmentOperationalStatusEnum.OS_ACTIVE;
                    pairingKey = "magnam";
                    partnerAsn = "repellendus";
                    partnerMetadata = new InterconnectAttachmentPartnerMetadata() {{
                        interconnectName = "saepe";
                        partnerName = "non";
                        portalUrl = "a";
                    }};;
                    privateInterconnectInfo = new InterconnectAttachmentPrivateInfo() {{
                        tag8021q = 914093L;
                    }};;
                    region = "vero";
                    router = "quae";
                    satisfiesPzs = false;
                    selfLink = "doloremque";
                    stackType = InterconnectAttachmentStackTypeEnum.IPV4_IPV6;
                    state = InterconnectAttachmentStateEnum.STATE_UNSPECIFIED;
                    type = InterconnectAttachmentTypeEnum.PARTNER;
                    vlanTag8021q = 460194;
                }};;
                accessToken = "praesentium";
                alt = AltEnum.JSON;
                callback = "laborum";
                fields = "dicta";
                key = "doloremque";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "eius";
                requestId = "odio";
                uploadType = "rerum";
                uploadProtocol = "provident";
                userIp = "nostrum";
                validateOnly = false;
            }};            

            ComputeInterconnectAttachmentsInsertResponse res = sdk.interconnectAttachments.computeInterconnectAttachmentsInsert(req, new ComputeInterconnectAttachmentsInsertSecurity() {{
                option1 = new ComputeInterconnectAttachmentsInsertSecurityOption1("perferendis", "aliquam") {{
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

            ComputeInterconnectAttachmentsListRequest req = new ComputeInterconnectAttachmentsListRequest("accusantium", "possimus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "minus";
                alt = AltEnum.MEDIA;
                callback = "soluta";
                fields = "quia";
                filter = "similique";
                key = "ipsam";
                maxResults = 954406L;
                oauthToken = "alias";
                orderBy = "perferendis";
                pageToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "sed";
                returnPartialSuccess = false;
                uploadType = "sit";
                uploadProtocol = "esse";
                userIp = "accusamus";
            }};            

            ComputeInterconnectAttachmentsListResponse res = sdk.interconnectAttachments.computeInterconnectAttachmentsList(req, new ComputeInterconnectAttachmentsListSecurity() {{
                option1 = new ComputeInterconnectAttachmentsListSecurityOption1("ut", "quae") {{
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

            ComputeInterconnectAttachmentsPatchRequest req = new ComputeInterconnectAttachmentsPatchRequest("dolore", "molestias", "maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                interconnectAttachment1 = new InterconnectAttachment() {{
                    adminEnabled = false;
                    bandwidth = InterconnectAttachmentBandwidthEnum.BPS100_M;
                    candidateIpv6Subnets = new String[]{{
                        add("sit"),
                    }};
                    candidateSubnets = new String[]{{
                        add("earum"),
                        add("illum"),
                        add("consequuntur"),
                    }};
                    cloudRouterIpAddress = "occaecati";
                    cloudRouterIpv6Address = "doloremque";
                    cloudRouterIpv6InterfaceId = "qui";
                    creationTimestamp = "esse";
                    customerRouterIpAddress = "quos";
                    customerRouterIpv6Address = "accusamus";
                    customerRouterIpv6InterfaceId = "quidem";
                    dataplaneVersion = 306065;
                    description = "fuga";
                    edgeAvailabilityDomain = InterconnectAttachmentEdgeAvailabilityDomainEnum.AVAILABILITY_DOMAIN_ANY;
                    encryption = InterconnectAttachmentEncryptionEnum.NONE;
                    googleReferenceId = "pariatur";
                    id = "suscipit";
                    interconnect = "ut";
                    ipsecInternalAddresses = new String[]{{
                        add("iure"),
                    }};
                    kind = "ab";
                    labelFingerprint = "recusandae";
                    labels = new java.util.HashMap<String, String>() {{
                        put("sunt", "corporis");
                        put("quae", "alias");
                        put("ratione", "sed");
                    }};
                    mtu = 225621;
                    name = "Ms. Craig Rosenbaum";
                    operationalStatus = InterconnectAttachmentOperationalStatusEnum.OS_UNPROVISIONED;
                    pairingKey = "consequuntur";
                    partnerAsn = "tempora";
                    partnerMetadata = new InterconnectAttachmentPartnerMetadata() {{
                        interconnectName = "voluptate";
                        partnerName = "odio";
                        portalUrl = "dicta";
                    }};;
                    privateInterconnectInfo = new InterconnectAttachmentPrivateInfo() {{
                        tag8021q = 937988L;
                    }};;
                    region = "nemo";
                    router = "laboriosam";
                    satisfiesPzs = false;
                    selfLink = "aliquid";
                    stackType = InterconnectAttachmentStackTypeEnum.IPV4_ONLY;
                    state = InterconnectAttachmentStateEnum.UNPROVISIONED;
                    type = InterconnectAttachmentTypeEnum.PARTNER;
                    vlanTag8021q = 705317;
                }};;
                accessToken = "in";
                alt = AltEnum.PROTO;
                callback = "porro";
                fields = "dignissimos";
                key = "nisi";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "iure";
                requestId = "ea";
                uploadType = "labore";
                uploadProtocol = "perspiciatis";
                userIp = "possimus";
            }};            

            ComputeInterconnectAttachmentsPatchResponse res = sdk.interconnectAttachments.computeInterconnectAttachmentsPatch(req, new ComputeInterconnectAttachmentsPatchSecurity() {{
                option1 = new ComputeInterconnectAttachmentsPatchSecurityOption1("atque", "aliquam") {{
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

            ComputeInterconnectAttachmentsSetLabelsRequest req = new ComputeInterconnectAttachmentsSetLabelsRequest("necessitatibus", "tempore", "provident") {{
                dollarXgafv = XgafvEnum.TWO;
                regionSetLabelsRequest = new RegionSetLabelsRequest() {{
                    labelFingerprint = "numquam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("a", "at");
                        put("dolores", "odit");
                        put("molestiae", "ex");
                        put("officiis", "sit");
                    }};
                }};;
                accessToken = "expedita";
                alt = AltEnum.MEDIA;
                callback = "deleniti";
                fields = "repellat";
                key = "harum";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "iure";
                requestId = "nulla";
                uploadType = "aliquid";
                uploadProtocol = "asperiores";
                userIp = "similique";
            }};            

            ComputeInterconnectAttachmentsSetLabelsResponse res = sdk.interconnectAttachments.computeInterconnectAttachmentsSetLabels(req, new ComputeInterconnectAttachmentsSetLabelsSecurity() {{
                option1 = new ComputeInterconnectAttachmentsSetLabelsSecurityOption1("veniam", "cum") {{
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

            ComputeInterconnectAttachmentsTestIamPermissionsRequest req = new ComputeInterconnectAttachmentsTestIamPermissionsRequest("vel", "earum", "corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("sapiente"),
                        add("praesentium"),
                        add("dicta"),
                    }};
                }};;
                accessToken = "qui";
                alt = AltEnum.PROTO;
                callback = "blanditiis";
                fields = "nesciunt";
                key = "nam";
                oauthToken = "inventore";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "animi";
                uploadProtocol = "autem";
                userIp = "laborum";
            }};            

            ComputeInterconnectAttachmentsTestIamPermissionsResponse res = sdk.interconnectAttachments.computeInterconnectAttachmentsTestIamPermissions(req, new ComputeInterconnectAttachmentsTestIamPermissionsSecurity() {{
                option1 = new ComputeInterconnectAttachmentsTestIamPermissionsSecurityOption1("omnis", "voluptatibus") {{
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
