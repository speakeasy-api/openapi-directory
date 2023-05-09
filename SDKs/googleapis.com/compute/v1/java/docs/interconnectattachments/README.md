# interconnectAttachments

### Available Operations

* [computeInterconnectAttachmentsAggregatedList](#computeinterconnectattachmentsaggregatedlist) - Retrieves an aggregated list of interconnect attachments.
* [computeInterconnectAttachmentsDelete](#computeinterconnectattachmentsdelete) - Deletes the specified interconnect attachment.
* [computeInterconnectAttachmentsGet](#computeinterconnectattachmentsget) - Returns the specified interconnect attachment.
* [computeInterconnectAttachmentsInsert](#computeinterconnectattachmentsinsert) - Creates an InterconnectAttachment in the specified project using the data included in the request.
* [computeInterconnectAttachmentsList](#computeinterconnectattachmentslist) - Retrieves the list of interconnect attachments contained within the specified region.
* [computeInterconnectAttachmentsPatch](#computeinterconnectattachmentspatch) - Updates the specified interconnect attachment with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeInterconnectAttachmentsSetLabels](#computeinterconnectattachmentssetlabels) - Sets the labels on an InterconnectAttachment. To learn more about labels, read the Labeling Resources documentation.

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

            ComputeInterconnectAttachmentsAggregatedListRequest req = new ComputeInterconnectAttachmentsAggregatedListRequest("temporibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "autem";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "delectus";
                filter = "id";
                includeAllScopes = false;
                key = "inventore";
                maxResults = 7092L;
                oauthToken = "architecto";
                orderBy = "vitae";
                pageToken = "id";
                prettyPrint = false;
                quotaUser = "voluptatem";
                returnPartialSuccess = false;
                uploadType = "unde";
                uploadProtocol = "et";
                userIp = "cum";
            }};            

            ComputeInterconnectAttachmentsAggregatedListResponse res = sdk.interconnectAttachments.computeInterconnectAttachmentsAggregatedList(req, new ComputeInterconnectAttachmentsAggregatedListSecurity() {{
                option1 = new ComputeInterconnectAttachmentsAggregatedListSecurityOption1("dolor", "necessitatibus") {{
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

            ComputeInterconnectAttachmentsDeleteRequest req = new ComputeInterconnectAttachmentsDeleteRequest("porro", "laudantium", "tempore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "velit";
                alt = AltEnum.MEDIA;
                callback = "nisi";
                fields = "dolores";
                key = "nulla";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "illo";
                requestId = "fuga";
                uploadType = "molestias";
                uploadProtocol = "at";
                userIp = "vitae";
            }};            

            ComputeInterconnectAttachmentsDeleteResponse res = sdk.interconnectAttachments.computeInterconnectAttachmentsDelete(req, new ComputeInterconnectAttachmentsDeleteSecurity() {{
                option1 = new ComputeInterconnectAttachmentsDeleteSecurityOption1("aliquam", "asperiores") {{
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

            ComputeInterconnectAttachmentsGetRequest req = new ComputeInterconnectAttachmentsGetRequest("debitis", "reprehenderit", "sed") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsam";
                alt = AltEnum.JSON;
                callback = "illo";
                fields = "asperiores";
                key = "iste";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "ipsa";
                uploadProtocol = "consectetur";
                userIp = "possimus";
            }};            

            ComputeInterconnectAttachmentsGetResponse res = sdk.interconnectAttachments.computeInterconnectAttachmentsGet(req, new ComputeInterconnectAttachmentsGetSecurity() {{
                option1 = new ComputeInterconnectAttachmentsGetSecurityOption1("asperiores", "quo") {{
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

            ComputeInterconnectAttachmentsInsertRequest req = new ComputeInterconnectAttachmentsInsertRequest("adipisci", "non") {{
                dollarXgafv = XgafvEnum.TWO;
                interconnectAttachment = new InterconnectAttachment() {{
                    adminEnabled = false;
                    bandwidth = InterconnectAttachmentBandwidthEnum.BPS1_G;
                    candidateIpv6Subnets = new String[]{{
                        add("molestiae"),
                        add("reiciendis"),
                        add("hic"),
                    }};
                    candidateSubnets = new String[]{{
                        add("error"),
                        add("ea"),
                        add("repellendus"),
                        add("vitae"),
                    }};
                    cloudRouterIpAddress = "pariatur";
                    cloudRouterIpv6Address = "sequi";
                    cloudRouterIpv6InterfaceId = "aspernatur";
                    creationTimestamp = "consequatur";
                    customerRouterIpAddress = "occaecati";
                    customerRouterIpv6Address = "alias";
                    customerRouterIpv6InterfaceId = "doloribus";
                    dataplaneVersion = 777083;
                    description = "quasi";
                    edgeAvailabilityDomain = InterconnectAttachmentEdgeAvailabilityDomainEnum.AVAILABILITY_DOMAIN2;
                    encryption = InterconnectAttachmentEncryptionEnum.IPSEC;
                    googleReferenceId = "mollitia";
                    id = "cumque";
                    interconnect = "molestias";
                    ipsecInternalAddresses = new String[]{{
                        add("accusamus"),
                        add("dicta"),
                        add("sint"),
                        add("ex"),
                    }};
                    kind = "vitae";
                    labelFingerprint = "eligendi";
                    labels = new java.util.HashMap<String, String>() {{
                        put("perspiciatis", "nam");
                        put("vero", "aliquam");
                        put("architecto", "eligendi");
                        put("atque", "nisi");
                    }};
                    mtu = 609194;
                    name = "Carroll Kunze";
                    operationalStatus = InterconnectAttachmentOperationalStatusEnum.OS_ACTIVE;
                    pairingKey = "illo";
                    partnerAsn = "unde";
                    partnerMetadata = new InterconnectAttachmentPartnerMetadata() {{
                        interconnectName = "repellendus";
                        partnerName = "consequatur";
                        portalUrl = "dignissimos";
                    }};;
                    privateInterconnectInfo = new InterconnectAttachmentPrivateInfo() {{
                        tag8021q = 689029L;
                    }};;
                    region = "odit";
                    router = "aut";
                    satisfiesPzs = false;
                    selfLink = "eaque";
                    stackType = InterconnectAttachmentStackTypeEnum.IPV4_ONLY;
                    state = InterconnectAttachmentStateEnum.PARTNER_REQUEST_RECEIVED;
                    type = InterconnectAttachmentTypeEnum.PARTNER;
                    vlanTag8021q = 966945;
                }};;
                accessToken = "a";
                alt = AltEnum.PROTO;
                callback = "consequuntur";
                fields = "iste";
                key = "suscipit";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "nulla";
                requestId = "delectus";
                uploadType = "laudantium";
                uploadProtocol = "sapiente";
                userIp = "facere";
                validateOnly = false;
            }};            

            ComputeInterconnectAttachmentsInsertResponse res = sdk.interconnectAttachments.computeInterconnectAttachmentsInsert(req, new ComputeInterconnectAttachmentsInsertSecurity() {{
                option1 = new ComputeInterconnectAttachmentsInsertSecurityOption1("laudantium", "praesentium") {{
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

            ComputeInterconnectAttachmentsListRequest req = new ComputeInterconnectAttachmentsListRequest("sed", "fuga") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusamus";
                alt = AltEnum.MEDIA;
                callback = "eaque";
                fields = "tempore";
                filter = "accusamus";
                key = "commodi";
                maxResults = 178960L;
                oauthToken = "perferendis";
                orderBy = "eligendi";
                pageToken = "facere";
                prettyPrint = false;
                quotaUser = "molestias";
                returnPartialSuccess = false;
                uploadType = "quisquam";
                uploadProtocol = "veniam";
                userIp = "officia";
            }};            

            ComputeInterconnectAttachmentsListResponse res = sdk.interconnectAttachments.computeInterconnectAttachmentsList(req, new ComputeInterconnectAttachmentsListSecurity() {{
                option1 = new ComputeInterconnectAttachmentsListSecurityOption1("sapiente", "possimus") {{
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

            ComputeInterconnectAttachmentsPatchRequest req = new ComputeInterconnectAttachmentsPatchRequest("quibusdam", "doloremque", "ut") {{
                dollarXgafv = XgafvEnum.TWO;
                interconnectAttachment1 = new InterconnectAttachment() {{
                    adminEnabled = false;
                    bandwidth = InterconnectAttachmentBandwidthEnum.BPS1_G;
                    candidateIpv6Subnets = new String[]{{
                        add("corporis"),
                        add("aspernatur"),
                    }};
                    candidateSubnets = new String[]{{
                        add("quasi"),
                        add("consequuntur"),
                    }};
                    cloudRouterIpAddress = "harum";
                    cloudRouterIpv6Address = "earum";
                    cloudRouterIpv6InterfaceId = "mollitia";
                    creationTimestamp = "officiis";
                    customerRouterIpAddress = "quasi";
                    customerRouterIpv6Address = "vero";
                    customerRouterIpv6InterfaceId = "atque";
                    dataplaneVersion = 455711;
                    description = "itaque";
                    edgeAvailabilityDomain = InterconnectAttachmentEdgeAvailabilityDomainEnum.AVAILABILITY_DOMAIN_ANY;
                    encryption = InterconnectAttachmentEncryptionEnum.NONE;
                    googleReferenceId = "corporis";
                    id = "delectus";
                    interconnect = "nulla";
                    ipsecInternalAddresses = new String[]{{
                        add("saepe"),
                        add("animi"),
                        add("deleniti"),
                        add("eveniet"),
                    }};
                    kind = "molestiae";
                    labelFingerprint = "laborum";
                    labels = new java.util.HashMap<String, String>() {{
                        put("blanditiis", "adipisci");
                        put("et", "et");
                        put("commodi", "laboriosam");
                    }};
                    mtu = 187267;
                    name = "Josh Parker";
                    operationalStatus = InterconnectAttachmentOperationalStatusEnum.OS_ACTIVE;
                    pairingKey = "voluptate";
                    partnerAsn = "cumque";
                    partnerMetadata = new InterconnectAttachmentPartnerMetadata() {{
                        interconnectName = "sunt";
                        partnerName = "fugiat";
                        portalUrl = "rem";
                    }};;
                    privateInterconnectInfo = new InterconnectAttachmentPrivateInfo() {{
                        tag8021q = 387848L;
                    }};;
                    region = "doloremque";
                    router = "nisi";
                    satisfiesPzs = false;
                    selfLink = "eum";
                    stackType = InterconnectAttachmentStackTypeEnum.IPV4_IPV6;
                    state = InterconnectAttachmentStateEnum.DEFUNCT;
                    type = InterconnectAttachmentTypeEnum.PARTNER;
                    vlanTag8021q = 844248;
                }};;
                accessToken = "tempora";
                alt = AltEnum.JSON;
                callback = "magni";
                fields = "molestiae";
                key = "blanditiis";
                oauthToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "aliquid";
                requestId = "quibusdam";
                uploadType = "quidem";
                uploadProtocol = "molestias";
                userIp = "culpa";
            }};            

            ComputeInterconnectAttachmentsPatchResponse res = sdk.interconnectAttachments.computeInterconnectAttachmentsPatch(req, new ComputeInterconnectAttachmentsPatchSecurity() {{
                option1 = new ComputeInterconnectAttachmentsPatchSecurityOption1("molestiae", "labore") {{
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

            ComputeInterconnectAttachmentsSetLabelsRequest req = new ComputeInterconnectAttachmentsSetLabelsRequest("perspiciatis", "officiis", "consectetur") {{
                dollarXgafv = XgafvEnum.TWO;
                regionSetLabelsRequest = new RegionSetLabelsRequest() {{
                    labelFingerprint = "totam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("exercitationem", "quasi");
                        put("beatae", "impedit");
                    }};
                }};;
                accessToken = "minus";
                alt = AltEnum.MEDIA;
                callback = "corporis";
                fields = "itaque";
                key = "incidunt";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "alias";
                requestId = "eligendi";
                uploadType = "accusantium";
                uploadProtocol = "voluptatem";
                userIp = "non";
            }};            

            ComputeInterconnectAttachmentsSetLabelsResponse res = sdk.interconnectAttachments.computeInterconnectAttachmentsSetLabels(req, new ComputeInterconnectAttachmentsSetLabelsSecurity() {{
                option1 = new ComputeInterconnectAttachmentsSetLabelsSecurityOption1("soluta", "minima") {{
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
