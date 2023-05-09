# interconnects

### Available Operations

* [computeInterconnectsDelete](#computeinterconnectsdelete) - Deletes the specified Interconnect.
* [computeInterconnectsGet](#computeinterconnectsget) - Returns the specified Interconnect. Get a list of available Interconnects by making a list() request.
* [computeInterconnectsGetDiagnostics](#computeinterconnectsgetdiagnostics) - Returns the interconnectDiagnostics for the specified Interconnect.
* [computeInterconnectsInsert](#computeinterconnectsinsert) - Creates an Interconnect in the specified project using the data included in the request.
* [computeInterconnectsList](#computeinterconnectslist) - Retrieves the list of Interconnects available to the specified project.
* [computeInterconnectsPatch](#computeinterconnectspatch) - Updates the specified Interconnect with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeInterconnectsSetLabels](#computeinterconnectssetlabels) - Sets the labels on an Interconnect. To learn more about labels, read the Labeling Resources documentation.
* [computeInterconnectsTestIamPermissions](#computeinterconnectstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeInterconnectsDelete

Deletes the specified Interconnect.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInterconnectsDeleteRequest;
import org.openapis.openapi.models.operations.ComputeInterconnectsDeleteResponse;
import org.openapis.openapi.models.operations.ComputeInterconnectsDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeInterconnectsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInterconnectsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInterconnectsDeleteRequest req = new ComputeInterconnectsDeleteRequest("ipsum", "quisquam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "praesentium";
                alt = AltEnum.PROTO;
                callback = "inventore";
                fields = "ab";
                key = "dolore";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "nulla";
                requestId = "officia";
                uploadType = "natus";
                uploadProtocol = "nesciunt";
                userIp = "eaque";
            }};            

            ComputeInterconnectsDeleteResponse res = sdk.interconnects.computeInterconnectsDelete(req, new ComputeInterconnectsDeleteSecurity() {{
                option1 = new ComputeInterconnectsDeleteSecurityOption1("deleniti", "nobis") {{
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

## computeInterconnectsGet

Returns the specified Interconnect. Get a list of available Interconnects by making a list() request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInterconnectsGetRequest;
import org.openapis.openapi.models.operations.ComputeInterconnectsGetResponse;
import org.openapis.openapi.models.operations.ComputeInterconnectsGetSecurity;
import org.openapis.openapi.models.operations.ComputeInterconnectsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInterconnectsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInterconnectsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInterconnectsGetRequest req = new ComputeInterconnectsGetRequest("magni", "nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aut";
                alt = AltEnum.MEDIA;
                callback = "animi";
                fields = "reiciendis";
                key = "qui";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "et";
                uploadType = "voluptatum";
                uploadProtocol = "eius";
                userIp = "quaerat";
            }};            

            ComputeInterconnectsGetResponse res = sdk.interconnects.computeInterconnectsGet(req, new ComputeInterconnectsGetSecurity() {{
                option1 = new ComputeInterconnectsGetSecurityOption1("amet", "iste") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.interconnect != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInterconnectsGetDiagnostics

Returns the interconnectDiagnostics for the specified Interconnect.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInterconnectsGetDiagnosticsRequest;
import org.openapis.openapi.models.operations.ComputeInterconnectsGetDiagnosticsResponse;
import org.openapis.openapi.models.operations.ComputeInterconnectsGetDiagnosticsSecurity;
import org.openapis.openapi.models.operations.ComputeInterconnectsGetDiagnosticsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInterconnectsGetDiagnosticsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInterconnectsGetDiagnosticsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInterconnectsGetDiagnosticsRequest req = new ComputeInterconnectsGetDiagnosticsRequest("libero", "nesciunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "recusandae";
                alt = AltEnum.MEDIA;
                callback = "iure";
                fields = "quis";
                key = "eum";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "quisquam";
                uploadType = "optio";
                uploadProtocol = "eveniet";
                userIp = "incidunt";
            }};            

            ComputeInterconnectsGetDiagnosticsResponse res = sdk.interconnects.computeInterconnectsGetDiagnostics(req, new ComputeInterconnectsGetDiagnosticsSecurity() {{
                option1 = new ComputeInterconnectsGetDiagnosticsSecurityOption1("dignissimos", "accusantium") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.interconnectsGetDiagnosticsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInterconnectsInsert

Creates an Interconnect in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInterconnectsInsertRequest;
import org.openapis.openapi.models.operations.ComputeInterconnectsInsertResponse;
import org.openapis.openapi.models.operations.ComputeInterconnectsInsertSecurity;
import org.openapis.openapi.models.operations.ComputeInterconnectsInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInterconnectsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Interconnect;
import org.openapis.openapi.models.shared.InterconnectCircuitInfo;
import org.openapis.openapi.models.shared.InterconnectInterconnectTypeEnum;
import org.openapis.openapi.models.shared.InterconnectLinkTypeEnum;
import org.openapis.openapi.models.shared.InterconnectOperationalStatusEnum;
import org.openapis.openapi.models.shared.InterconnectOutageNotification;
import org.openapis.openapi.models.shared.InterconnectOutageNotificationIssueTypeEnum;
import org.openapis.openapi.models.shared.InterconnectOutageNotificationSourceEnum;
import org.openapis.openapi.models.shared.InterconnectOutageNotificationStateEnum;
import org.openapis.openapi.models.shared.InterconnectStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInterconnectsInsertRequest req = new ComputeInterconnectsInsertRequest("impedit") {{
                dollarXgafv = XgafvEnum.TWO;
                interconnect = new Interconnect() {{
                    adminEnabled = false;
                    circuitInfos = new org.openapis.openapi.models.shared.InterconnectCircuitInfo[]{{
                        add(new InterconnectCircuitInfo() {{
                            customerDemarcId = "veritatis";
                            googleCircuitId = "non";
                            googleDemarcId = "reprehenderit";
                        }}),
                    }};
                    creationTimestamp = "quidem";
                    customerName = "eum";
                    description = "recusandae";
                    expectedOutages = new org.openapis.openapi.models.shared.InterconnectOutageNotification[]{{
                        add(new InterconnectOutageNotification() {{
                            affectedCircuits = new String[]{{
                                add("ipsam"),
                            }};
                            description = "aspernatur";
                            endTime = "placeat";
                            issueType = InterconnectOutageNotificationIssueTypeEnum.PARTIAL_OUTAGE;
                            name = "Dr. Catherine Spinka";
                            source = InterconnectOutageNotificationSourceEnum.NSRC_GOOGLE;
                            startTime = "dolor";
                            state = InterconnectOutageNotificationStateEnum.NS_ACTIVE;
                        }}),
                        add(new InterconnectOutageNotification() {{
                            affectedCircuits = new String[]{{
                                add("facilis"),
                                add("natus"),
                            }};
                            description = "laborum";
                            endTime = "exercitationem";
                            issueType = InterconnectOutageNotificationIssueTypeEnum.OUTAGE;
                            name = "Virgil Farrell";
                            source = InterconnectOutageNotificationSourceEnum.NSRC_GOOGLE;
                            startTime = "vero";
                            state = InterconnectOutageNotificationStateEnum.COMPLETED;
                        }}),
                    }};
                    googleIpAddress = "iure";
                    googleReferenceId = "incidunt";
                    id = "repellat";
                    interconnectAttachments = new String[]{{
                        add("ut"),
                        add("tempore"),
                        add("et"),
                    }};
                    interconnectType = InterconnectInterconnectTypeEnum.PARTNER;
                    kind = "excepturi";
                    labelFingerprint = "placeat";
                    labels = new java.util.HashMap<String, String>() {{
                        put("natus", "molestiae");
                    }};
                    linkType = InterconnectLinkTypeEnum.LINK_TYPE_ETHERNET10_G_LR;
                    location = "temporibus";
                    name = "Milton Conroy";
                    nocContactEmail = "numquam";
                    operationalStatus = InterconnectOperationalStatusEnum.OS_ACTIVE;
                    peerIpAddress = "voluptates";
                    provisionedLinkCount = 105065;
                    requestedLinkCount = 662213;
                    satisfiesPzs = false;
                    selfLink = "unde";
                    state = InterconnectStateEnum.ACTIVE;
                }};;
                accessToken = "ratione";
                alt = AltEnum.MEDIA;
                callback = "recusandae";
                fields = "iste";
                key = "cupiditate";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "numquam";
                requestId = "porro";
                uploadType = "quas";
                uploadProtocol = "consequatur";
                userIp = "facilis";
            }};            

            ComputeInterconnectsInsertResponse res = sdk.interconnects.computeInterconnectsInsert(req, new ComputeInterconnectsInsertSecurity() {{
                option1 = new ComputeInterconnectsInsertSecurityOption1("ut", "nihil") {{
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

## computeInterconnectsList

Retrieves the list of Interconnects available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInterconnectsListRequest;
import org.openapis.openapi.models.operations.ComputeInterconnectsListResponse;
import org.openapis.openapi.models.operations.ComputeInterconnectsListSecurity;
import org.openapis.openapi.models.operations.ComputeInterconnectsListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInterconnectsListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInterconnectsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInterconnectsListRequest req = new ComputeInterconnectsListRequest("sint") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "atque";
                alt = AltEnum.MEDIA;
                callback = "architecto";
                fields = "molestias";
                filter = "dolores";
                key = "dolorem";
                maxResults = 752959L;
                oauthToken = "veritatis";
                orderBy = "deleniti";
                pageToken = "cumque";
                prettyPrint = false;
                quotaUser = "officia";
                returnPartialSuccess = false;
                uploadType = "rem";
                uploadProtocol = "facere";
                userIp = "vel";
            }};            

            ComputeInterconnectsListResponse res = sdk.interconnects.computeInterconnectsList(req, new ComputeInterconnectsListSecurity() {{
                option1 = new ComputeInterconnectsListSecurityOption1("cupiditate", "porro") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.interconnectList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInterconnectsPatch

Updates the specified Interconnect with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInterconnectsPatchRequest;
import org.openapis.openapi.models.operations.ComputeInterconnectsPatchResponse;
import org.openapis.openapi.models.operations.ComputeInterconnectsPatchSecurity;
import org.openapis.openapi.models.operations.ComputeInterconnectsPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInterconnectsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Interconnect;
import org.openapis.openapi.models.shared.InterconnectCircuitInfo;
import org.openapis.openapi.models.shared.InterconnectInterconnectTypeEnum;
import org.openapis.openapi.models.shared.InterconnectLinkTypeEnum;
import org.openapis.openapi.models.shared.InterconnectOperationalStatusEnum;
import org.openapis.openapi.models.shared.InterconnectOutageNotification;
import org.openapis.openapi.models.shared.InterconnectOutageNotificationIssueTypeEnum;
import org.openapis.openapi.models.shared.InterconnectOutageNotificationSourceEnum;
import org.openapis.openapi.models.shared.InterconnectOutageNotificationStateEnum;
import org.openapis.openapi.models.shared.InterconnectStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInterconnectsPatchRequest req = new ComputeInterconnectsPatchRequest("enim", "ex") {{
                dollarXgafv = XgafvEnum.TWO;
                interconnect1 = new Interconnect() {{
                    adminEnabled = false;
                    circuitInfos = new org.openapis.openapi.models.shared.InterconnectCircuitInfo[]{{
                        add(new InterconnectCircuitInfo() {{
                            customerDemarcId = "explicabo";
                            googleCircuitId = "vitae";
                            googleDemarcId = "tempora";
                        }}),
                        add(new InterconnectCircuitInfo() {{
                            customerDemarcId = "doloribus";
                            googleCircuitId = "animi";
                            googleDemarcId = "consequuntur";
                        }}),
                        add(new InterconnectCircuitInfo() {{
                            customerDemarcId = "doloremque";
                            googleCircuitId = "magni";
                            googleDemarcId = "alias";
                        }}),
                    }};
                    creationTimestamp = "reprehenderit";
                    customerName = "officiis";
                    description = "eius";
                    expectedOutages = new org.openapis.openapi.models.shared.InterconnectOutageNotification[]{{
                        add(new InterconnectOutageNotification() {{
                            affectedCircuits = new String[]{{
                                add("saepe"),
                                add("aut"),
                                add("ipsum"),
                            }};
                            description = "voluptatum";
                            endTime = "eligendi";
                            issueType = InterconnectOutageNotificationIssueTypeEnum.PARTIAL_OUTAGE;
                            name = "Mandy Bernier";
                            source = InterconnectOutageNotificationSourceEnum.GOOGLE;
                            startTime = "placeat";
                            state = InterconnectOutageNotificationStateEnum.NS_ACTIVE;
                        }}),
                        add(new InterconnectOutageNotification() {{
                            affectedCircuits = new String[]{{
                                add("dolorum"),
                                add("repellat"),
                                add("dignissimos"),
                            }};
                            description = "asperiores";
                            endTime = "optio";
                            issueType = InterconnectOutageNotificationIssueTypeEnum.IT_OUTAGE;
                            name = "Roosevelt Purdy";
                            source = InterconnectOutageNotificationSourceEnum.NSRC_GOOGLE;
                            startTime = "recusandae";
                            state = InterconnectOutageNotificationStateEnum.NS_CANCELED;
                        }}),
                        add(new InterconnectOutageNotification() {{
                            affectedCircuits = new String[]{{
                                add("temporibus"),
                            }};
                            description = "reiciendis";
                            endTime = "nisi";
                            issueType = InterconnectOutageNotificationIssueTypeEnum.OUTAGE;
                            name = "Shaun Swift";
                            source = InterconnectOutageNotificationSourceEnum.GOOGLE;
                            startTime = "earum";
                            state = InterconnectOutageNotificationStateEnum.NS_CANCELED;
                        }}),
                        add(new InterconnectOutageNotification() {{
                            affectedCircuits = new String[]{{
                                add("consequatur"),
                                add("expedita"),
                            }};
                            description = "itaque";
                            endTime = "alias";
                            issueType = InterconnectOutageNotificationIssueTypeEnum.IT_PARTIAL_OUTAGE;
                            name = "Emanuel Reilly";
                            source = InterconnectOutageNotificationSourceEnum.NSRC_GOOGLE;
                            startTime = "pariatur";
                            state = InterconnectOutageNotificationStateEnum.NS_CANCELED;
                        }}),
                    }};
                    googleIpAddress = "odio";
                    googleReferenceId = "sit";
                    id = "ut";
                    interconnectAttachments = new String[]{{
                        add("corrupti"),
                    }};
                    interconnectType = InterconnectInterconnectTypeEnum.DEDICATED;
                    kind = "saepe";
                    labelFingerprint = "consequatur";
                    labels = new java.util.HashMap<String, String>() {{
                        put("dolorem", "tenetur");
                        put("maxime", "in");
                        put("dolor", "animi");
                    }};
                    linkType = InterconnectLinkTypeEnum.LINK_TYPE_ETHERNET100_G_LR;
                    location = "similique";
                    name = "Sylvia Haag Jr.";
                    nocContactEmail = "ut";
                    operationalStatus = InterconnectOperationalStatusEnum.OS_UNPROVISIONED;
                    peerIpAddress = "sint";
                    provisionedLinkCount = 178015;
                    requestedLinkCount = 262777;
                    satisfiesPzs = false;
                    selfLink = "ratione";
                    state = InterconnectStateEnum.UNPROVISIONED;
                }};;
                accessToken = "maiores";
                alt = AltEnum.MEDIA;
                callback = "suscipit";
                fields = "occaecati";
                key = "totam";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "est";
                requestId = "eius";
                uploadType = "ducimus";
                uploadProtocol = "fugit";
                userIp = "libero";
            }};            

            ComputeInterconnectsPatchResponse res = sdk.interconnects.computeInterconnectsPatch(req, new ComputeInterconnectsPatchSecurity() {{
                option1 = new ComputeInterconnectsPatchSecurityOption1("esse", "sit") {{
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

## computeInterconnectsSetLabels

Sets the labels on an Interconnect. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInterconnectsSetLabelsRequest;
import org.openapis.openapi.models.operations.ComputeInterconnectsSetLabelsResponse;
import org.openapis.openapi.models.operations.ComputeInterconnectsSetLabelsSecurity;
import org.openapis.openapi.models.operations.ComputeInterconnectsSetLabelsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInterconnectsSetLabelsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GlobalSetLabelsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInterconnectsSetLabelsRequest req = new ComputeInterconnectsSetLabelsRequest("iste", "dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                globalSetLabelsRequest = new GlobalSetLabelsRequest() {{
                    labelFingerprint = "minima";
                    labels = new java.util.HashMap<String, String>() {{
                        put("accusamus", "eos");
                    }};
                }};;
                accessToken = "fugit";
                alt = AltEnum.JSON;
                callback = "voluptatem";
                fields = "dicta";
                key = "quae";
                oauthToken = "autem";
                prettyPrint = false;
                quotaUser = "rem";
                uploadType = "ad";
                uploadProtocol = "ipsum";
                userIp = "omnis";
            }};            

            ComputeInterconnectsSetLabelsResponse res = sdk.interconnects.computeInterconnectsSetLabels(req, new ComputeInterconnectsSetLabelsSecurity() {{
                option1 = new ComputeInterconnectsSetLabelsSecurityOption1("eligendi", "saepe") {{
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

## computeInterconnectsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInterconnectsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeInterconnectsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeInterconnectsTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeInterconnectsTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInterconnectsTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInterconnectsTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInterconnectsTestIamPermissionsRequest req = new ComputeInterconnectsTestIamPermissionsRequest("ipsa", "perspiciatis") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("repellendus"),
                    }};
                }};;
                accessToken = "vitae";
                alt = AltEnum.JSON;
                callback = "animi";
                fields = "quisquam";
                key = "possimus";
                oauthToken = "vitae";
                prettyPrint = false;
                quotaUser = "ad";
                uploadType = "quibusdam";
                uploadProtocol = "praesentium";
                userIp = "porro";
            }};            

            ComputeInterconnectsTestIamPermissionsResponse res = sdk.interconnects.computeInterconnectsTestIamPermissions(req, new ComputeInterconnectsTestIamPermissionsSecurity() {{
                option1 = new ComputeInterconnectsTestIamPermissionsSecurityOption1("quisquam", "ipsum") {{
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
