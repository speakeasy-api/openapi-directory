# interconnects

### Available Operations

* [computeInterconnectsDelete](#computeinterconnectsdelete) - Deletes the specified Interconnect.
* [computeInterconnectsGet](#computeinterconnectsget) - Returns the specified Interconnect. Get a list of available Interconnects by making a list() request.
* [computeInterconnectsGetDiagnostics](#computeinterconnectsgetdiagnostics) - Returns the interconnectDiagnostics for the specified Interconnect.
* [computeInterconnectsInsert](#computeinterconnectsinsert) - Creates an Interconnect in the specified project using the data included in the request.
* [computeInterconnectsList](#computeinterconnectslist) - Retrieves the list of Interconnects available to the specified project.
* [computeInterconnectsPatch](#computeinterconnectspatch) - Updates the specified Interconnect with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeInterconnectsSetLabels](#computeinterconnectssetlabels) - Sets the labels on an Interconnect. To learn more about labels, read the Labeling Resources documentation.

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

            ComputeInterconnectsDeleteRequest req = new ComputeInterconnectsDeleteRequest("saepe", "odit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "tenetur";
                alt = AltEnum.JSON;
                callback = "error";
                fields = "praesentium";
                key = "sequi";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "mollitia";
                requestId = "doloribus";
                uploadType = "harum";
                uploadProtocol = "doloremque";
                userIp = "odio";
            }};            

            ComputeInterconnectsDeleteResponse res = sdk.interconnects.computeInterconnectsDelete(req, new ComputeInterconnectsDeleteSecurity() {{
                option1 = new ComputeInterconnectsDeleteSecurityOption1("ratione", "corporis") {{
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

            ComputeInterconnectsGetRequest req = new ComputeInterconnectsGetRequest("eligendi", "expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magni";
                alt = AltEnum.MEDIA;
                callback = "corporis";
                fields = "facere";
                key = "labore";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "unde";
                uploadProtocol = "est";
                userIp = "fuga";
            }};            

            ComputeInterconnectsGetResponse res = sdk.interconnects.computeInterconnectsGet(req, new ComputeInterconnectsGetSecurity() {{
                option1 = new ComputeInterconnectsGetSecurityOption1("est", "quae") {{
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

            ComputeInterconnectsGetDiagnosticsRequest req = new ComputeInterconnectsGetDiagnosticsRequest("debitis", "quasi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "omnis";
                alt = AltEnum.JSON;
                callback = "nemo";
                fields = "nisi";
                key = "repellat";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "possimus";
                uploadType = "aspernatur";
                uploadProtocol = "recusandae";
                userIp = "repudiandae";
            }};            

            ComputeInterconnectsGetDiagnosticsResponse res = sdk.interconnects.computeInterconnectsGetDiagnostics(req, new ComputeInterconnectsGetDiagnosticsSecurity() {{
                option1 = new ComputeInterconnectsGetDiagnosticsSecurityOption1("eos", "perferendis") {{
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

            ComputeInterconnectsInsertRequest req = new ComputeInterconnectsInsertRequest("error") {{
                dollarXgafv = XgafvEnum.ONE;
                interconnect = new Interconnect() {{
                    adminEnabled = false;
                    circuitInfos = new org.openapis.openapi.models.shared.InterconnectCircuitInfo[]{{
                        add(new InterconnectCircuitInfo() {{
                            customerDemarcId = "corporis";
                            googleCircuitId = "tempore";
                            googleDemarcId = "maiores";
                        }}),
                    }};
                    creationTimestamp = "doloremque";
                    customerName = "consectetur";
                    description = "laborum";
                    expectedOutages = new org.openapis.openapi.models.shared.InterconnectOutageNotification[]{{
                        add(new InterconnectOutageNotification() {{
                            affectedCircuits = new String[]{{
                                add("repudiandae"),
                            }};
                            description = "provident";
                            endTime = "incidunt";
                            issueType = InterconnectOutageNotificationIssueTypeEnum.IT_PARTIAL_OUTAGE;
                            name = "Daniel Runte";
                            source = InterconnectOutageNotificationSourceEnum.GOOGLE;
                            startTime = "voluptatibus";
                            state = InterconnectOutageNotificationStateEnum.NS_ACTIVE;
                        }}),
                        add(new InterconnectOutageNotification() {{
                            affectedCircuits = new String[]{{
                                add("ipsa"),
                            }};
                            description = "ducimus";
                            endTime = "voluptatum";
                            issueType = InterconnectOutageNotificationIssueTypeEnum.OUTAGE;
                            name = "Emily Considine";
                            source = InterconnectOutageNotificationSourceEnum.GOOGLE;
                            startTime = "amet";
                            state = InterconnectOutageNotificationStateEnum.ACTIVE;
                        }}),
                        add(new InterconnectOutageNotification() {{
                            affectedCircuits = new String[]{{
                                add("quam"),
                            }};
                            description = "odit";
                            endTime = "saepe";
                            issueType = InterconnectOutageNotificationIssueTypeEnum.IT_OUTAGE;
                            name = "Taylor Kozey";
                            source = InterconnectOutageNotificationSourceEnum.NSRC_GOOGLE;
                            startTime = "in";
                            state = InterconnectOutageNotificationStateEnum.CANCELLED;
                        }}),
                    }};
                    googleIpAddress = "distinctio";
                    googleReferenceId = "error";
                    id = "odio";
                    interconnectAttachments = new String[]{{
                        add("corrupti"),
                        add("deleniti"),
                        add("possimus"),
                        add("at"),
                    }};
                    interconnectType = InterconnectInterconnectTypeEnum.PARTNER;
                    kind = "ipsum";
                    labelFingerprint = "commodi";
                    labels = new java.util.HashMap<String, String>() {{
                        put("facere", "inventore");
                        put("eligendi", "optio");
                        put("maxime", "nesciunt");
                        put("labore", "dicta");
                    }};
                    linkType = InterconnectLinkTypeEnum.LINK_TYPE_ETHERNET10_G_LR;
                    location = "quas";
                    name = "Jill Kunze";
                    nocContactEmail = "iure";
                    operationalStatus = InterconnectOperationalStatusEnum.OS_ACTIVE;
                    peerIpAddress = "doloribus";
                    provisionedLinkCount = 43443;
                    requestedLinkCount = 632678;
                    satisfiesPzs = false;
                    selfLink = "voluptate";
                    state = InterconnectStateEnum.ACTIVE;
                }};;
                accessToken = "eaque";
                alt = AltEnum.PROTO;
                callback = "cum";
                fields = "incidunt";
                key = "deserunt";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "magnam";
                requestId = "eius";
                uploadType = "illo";
                uploadProtocol = "impedit";
                userIp = "ipsum";
            }};            

            ComputeInterconnectsInsertResponse res = sdk.interconnects.computeInterconnectsInsert(req, new ComputeInterconnectsInsertSecurity() {{
                option1 = new ComputeInterconnectsInsertSecurityOption1("deserunt", "doloremque") {{
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
                accessToken = "esse";
                alt = AltEnum.MEDIA;
                callback = "velit";
                fields = "perspiciatis";
                filter = "omnis";
                key = "minima";
                maxResults = 874348L;
                oauthToken = "rem";
                orderBy = "voluptatem";
                pageToken = "corrupti";
                prettyPrint = false;
                quotaUser = "tempore";
                returnPartialSuccess = false;
                uploadType = "nam";
                uploadProtocol = "accusamus";
                userIp = "odio";
            }};            

            ComputeInterconnectsListResponse res = sdk.interconnects.computeInterconnectsList(req, new ComputeInterconnectsListSecurity() {{
                option1 = new ComputeInterconnectsListSecurityOption1("natus", "dolore") {{
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

            ComputeInterconnectsPatchRequest req = new ComputeInterconnectsPatchRequest("eius", "minima") {{
                dollarXgafv = XgafvEnum.ONE;
                interconnect1 = new Interconnect() {{
                    adminEnabled = false;
                    circuitInfos = new org.openapis.openapi.models.shared.InterconnectCircuitInfo[]{{
                        add(new InterconnectCircuitInfo() {{
                            customerDemarcId = "nobis";
                            googleCircuitId = "quo";
                            googleDemarcId = "nemo";
                        }}),
                        add(new InterconnectCircuitInfo() {{
                            customerDemarcId = "minima";
                            googleCircuitId = "consequatur";
                            googleDemarcId = "est";
                        }}),
                        add(new InterconnectCircuitInfo() {{
                            customerDemarcId = "beatae";
                            googleCircuitId = "impedit";
                            googleDemarcId = "ut";
                        }}),
                        add(new InterconnectCircuitInfo() {{
                            customerDemarcId = "qui";
                            googleCircuitId = "nisi";
                            googleDemarcId = "rerum";
                        }}),
                    }};
                    creationTimestamp = "nemo";
                    customerName = "cupiditate";
                    description = "maxime";
                    expectedOutages = new org.openapis.openapi.models.shared.InterconnectOutageNotification[]{{
                        add(new InterconnectOutageNotification() {{
                            affectedCircuits = new String[]{{
                                add("commodi"),
                            }};
                            description = "ea";
                            endTime = "asperiores";
                            issueType = InterconnectOutageNotificationIssueTypeEnum.PARTIAL_OUTAGE;
                            name = "Kim Braun";
                            source = InterconnectOutageNotificationSourceEnum.GOOGLE;
                            startTime = "voluptatum";
                            state = InterconnectOutageNotificationStateEnum.ACTIVE;
                        }}),
                        add(new InterconnectOutageNotification() {{
                            affectedCircuits = new String[]{{
                                add("et"),
                                add("expedita"),
                                add("quos"),
                                add("veniam"),
                            }};
                            description = "ad";
                            endTime = "accusamus";
                            issueType = InterconnectOutageNotificationIssueTypeEnum.OUTAGE;
                            name = "Terrance Steuber";
                            source = InterconnectOutageNotificationSourceEnum.NSRC_GOOGLE;
                            startTime = "error";
                            state = InterconnectOutageNotificationStateEnum.CANCELLED;
                        }}),
                        add(new InterconnectOutageNotification() {{
                            affectedCircuits = new String[]{{
                                add("necessitatibus"),
                            }};
                            description = "omnis";
                            endTime = "eaque";
                            issueType = InterconnectOutageNotificationIssueTypeEnum.IT_OUTAGE;
                            name = "Cecilia Brekke";
                            source = InterconnectOutageNotificationSourceEnum.NSRC_GOOGLE;
                            startTime = "voluptatum";
                            state = InterconnectOutageNotificationStateEnum.ACTIVE;
                        }}),
                    }};
                    googleIpAddress = "consequuntur";
                    googleReferenceId = "dolore";
                    id = "fugit";
                    interconnectAttachments = new String[]{{
                        add("voluptatum"),
                    }};
                    interconnectType = InterconnectInterconnectTypeEnum.PARTNER;
                    kind = "sapiente";
                    labelFingerprint = "at";
                    labels = new java.util.HashMap<String, String>() {{
                        put("consectetur", "eius");
                    }};
                    linkType = InterconnectLinkTypeEnum.LINK_TYPE_ETHERNET100_G_LR;
                    location = "dicta";
                    name = "Enrique Ledner";
                    nocContactEmail = "adipisci";
                    operationalStatus = InterconnectOperationalStatusEnum.OS_UNPROVISIONED;
                    peerIpAddress = "nihil";
                    provisionedLinkCount = 603089;
                    requestedLinkCount = 907615;
                    satisfiesPzs = false;
                    selfLink = "tenetur";
                    state = InterconnectStateEnum.UNPROVISIONED;
                }};;
                accessToken = "eveniet";
                alt = AltEnum.MEDIA;
                callback = "rerum";
                fields = "officia";
                key = "saepe";
                oauthToken = "tempore";
                prettyPrint = false;
                quotaUser = "mollitia";
                requestId = "libero";
                uploadType = "tempore";
                uploadProtocol = "odio";
                userIp = "iste";
            }};            

            ComputeInterconnectsPatchResponse res = sdk.interconnects.computeInterconnectsPatch(req, new ComputeInterconnectsPatchSecurity() {{
                option1 = new ComputeInterconnectsPatchSecurityOption1("ut", "voluptas") {{
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

            ComputeInterconnectsSetLabelsRequest req = new ComputeInterconnectsSetLabelsRequest("neque", "eum") {{
                dollarXgafv = XgafvEnum.TWO;
                globalSetLabelsRequest = new GlobalSetLabelsRequest() {{
                    labelFingerprint = "excepturi";
                    labels = new java.util.HashMap<String, String>() {{
                        put("velit", "quis");
                    }};
                }};;
                accessToken = "inventore";
                alt = AltEnum.PROTO;
                callback = "quidem";
                fields = "unde";
                key = "odio";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "adipisci";
                uploadType = "architecto";
                uploadProtocol = "iure";
                userIp = "odit";
            }};            

            ComputeInterconnectsSetLabelsResponse res = sdk.interconnects.computeInterconnectsSetLabels(req, new ComputeInterconnectsSetLabelsSecurity() {{
                option1 = new ComputeInterconnectsSetLabelsSecurityOption1("voluptatem", "quidem") {{
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
