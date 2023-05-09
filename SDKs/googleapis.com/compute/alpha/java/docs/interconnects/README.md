# interconnects

### Available Operations

* [computeInterconnectsDelete](#computeinterconnectsdelete) - Deletes the specified Interconnect.
* [computeInterconnectsGet](#computeinterconnectsget) - Returns the specified Interconnect. Get a list of available Interconnects by making a list() request.
* [computeInterconnectsGetDiagnostics](#computeinterconnectsgetdiagnostics) - Returns the interconnectDiagnostics for the specified Interconnect.
* [computeInterconnectsGetIamPolicy](#computeinterconnectsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeInterconnectsGetMacsecConfig](#computeinterconnectsgetmacsecconfig) - Returns the interconnectMacsecConfig for the specified Interconnect.
* [computeInterconnectsInsert](#computeinterconnectsinsert) - Creates an Interconnect in the specified project using the data included in the request.
* [computeInterconnectsList](#computeinterconnectslist) - Retrieves the list of Interconnects available to the specified project.
* [computeInterconnectsPatch](#computeinterconnectspatch) - Updates the specified Interconnect with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeInterconnectsSetIamPolicy](#computeinterconnectssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
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

            ComputeInterconnectsDeleteRequest req = new ComputeInterconnectsDeleteRequest("provident", "accusamus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laboriosam";
                alt = AltEnum.JSON;
                callback = "quibusdam";
                fields = "debitis";
                key = "adipisci";
                oauthToken = "quia";
                prettyPrint = false;
                quotaUser = "amet";
                requestId = "blanditiis";
                uploadType = "reprehenderit";
                uploadProtocol = "enim";
                userIp = "laborum";
            }};            

            ComputeInterconnectsDeleteResponse res = sdk.interconnects.computeInterconnectsDelete(req, new ComputeInterconnectsDeleteSecurity() {{
                option1 = new ComputeInterconnectsDeleteSecurityOption1("labore", "animi") {{
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

            ComputeInterconnectsGetRequest req = new ComputeInterconnectsGetRequest("magni", "earum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptate";
                alt = AltEnum.PROTO;
                callback = "voluptatum";
                fields = "ducimus";
                key = "nobis";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "vitae";
                uploadType = "recusandae";
                uploadProtocol = "dolores";
                userIp = "aspernatur";
            }};            

            ComputeInterconnectsGetResponse res = sdk.interconnects.computeInterconnectsGet(req, new ComputeInterconnectsGetSecurity() {{
                option1 = new ComputeInterconnectsGetSecurityOption1("voluptates", "iusto") {{
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

            ComputeInterconnectsGetDiagnosticsRequest req = new ComputeInterconnectsGetDiagnosticsRequest("molestiae", "optio") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "necessitatibus";
                alt = AltEnum.MEDIA;
                callback = "recusandae";
                fields = "dicta";
                key = "vitae";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "atque";
                uploadType = "corrupti";
                uploadProtocol = "dolorem";
                userIp = "ratione";
            }};            

            ComputeInterconnectsGetDiagnosticsResponse res = sdk.interconnects.computeInterconnectsGetDiagnostics(req, new ComputeInterconnectsGetDiagnosticsSecurity() {{
                option1 = new ComputeInterconnectsGetDiagnosticsSecurityOption1("eos", "laboriosam") {{
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

## computeInterconnectsGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInterconnectsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeInterconnectsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeInterconnectsGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeInterconnectsGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeInterconnectsGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.ComputeInterconnectsGetIamPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInterconnectsGetIamPolicyRequest req = new ComputeInterconnectsGetIamPolicyRequest("pariatur", "minus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "harum";
                alt = AltEnum.JSON;
                callback = "aperiam";
                fields = "ipsum";
                key = "voluptatem";
                oauthToken = "suscipit";
                optionsRequestedPolicyVersion = 449313L;
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "corrupti";
                uploadProtocol = "error";
                userIp = "excepturi";
            }};            

            ComputeInterconnectsGetIamPolicyResponse res = sdk.interconnects.computeInterconnectsGetIamPolicy(req, new ComputeInterconnectsGetIamPolicySecurity() {{
                option1 = new ComputeInterconnectsGetIamPolicySecurityOption1("recusandae", "aspernatur") {{
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

## computeInterconnectsGetMacsecConfig

Returns the interconnectMacsecConfig for the specified Interconnect.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInterconnectsGetMacsecConfigRequest;
import org.openapis.openapi.models.operations.ComputeInterconnectsGetMacsecConfigResponse;
import org.openapis.openapi.models.operations.ComputeInterconnectsGetMacsecConfigSecurity;
import org.openapis.openapi.models.operations.ComputeInterconnectsGetMacsecConfigSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInterconnectsGetMacsecConfigSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInterconnectsGetMacsecConfigSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInterconnectsGetMacsecConfigRequest req = new ComputeInterconnectsGetMacsecConfigRequest("enim", "minus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorum";
                alt = AltEnum.JSON;
                callback = "quisquam";
                fields = "dicta";
                key = "non";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "quasi";
                uploadProtocol = "molestias";
                userIp = "molestiae";
            }};            

            ComputeInterconnectsGetMacsecConfigResponse res = sdk.interconnects.computeInterconnectsGetMacsecConfig(req, new ComputeInterconnectsGetMacsecConfigSecurity() {{
                option1 = new ComputeInterconnectsGetMacsecConfigSecurityOption1("tempora", "excepturi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.interconnectsGetMacsecConfigResponse != null) {
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
import org.openapis.openapi.models.shared.InterconnectAvailableFeaturesEnum;
import org.openapis.openapi.models.shared.InterconnectCircuitInfo;
import org.openapis.openapi.models.shared.InterconnectInterconnectTypeEnum;
import org.openapis.openapi.models.shared.InterconnectLinkTypeEnum;
import org.openapis.openapi.models.shared.InterconnectMacsec;
import org.openapis.openapi.models.shared.InterconnectMacsecPreSharedKey;
import org.openapis.openapi.models.shared.InterconnectOperationalStatusEnum;
import org.openapis.openapi.models.shared.InterconnectOutageNotification;
import org.openapis.openapi.models.shared.InterconnectOutageNotificationIssueTypeEnum;
import org.openapis.openapi.models.shared.InterconnectOutageNotificationSourceEnum;
import org.openapis.openapi.models.shared.InterconnectOutageNotificationStateEnum;
import org.openapis.openapi.models.shared.InterconnectRequestedFeaturesEnum;
import org.openapis.openapi.models.shared.InterconnectStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInterconnectsInsertRequest req = new ComputeInterconnectsInsertRequest("molestiae") {{
                dollarXgafv = XgafvEnum.TWO;
                interconnect = new Interconnect() {{
                    adminEnabled = false;
                    availableFeatures = new org.openapis.openapi.models.shared.InterconnectAvailableFeaturesEnum[]{{
                        add(InterconnectAvailableFeaturesEnum.IF_MACSEC),
                    }};
                    circuitInfos = new org.openapis.openapi.models.shared.InterconnectCircuitInfo[]{{
                        add(new InterconnectCircuitInfo() {{
                            customerDemarcId = "consequatur";
                            googleCircuitId = "laudantium";
                            googleDemarcId = "et";
                        }}),
                        add(new InterconnectCircuitInfo() {{
                            customerDemarcId = "laboriosam";
                            googleCircuitId = "velit";
                            googleDemarcId = "quasi";
                        }}),
                    }};
                    creationTimestamp = "fuga";
                    customerName = "dicta";
                    description = "laboriosam";
                    expectedOutages = new org.openapis.openapi.models.shared.InterconnectOutageNotification[]{{
                        add(new InterconnectOutageNotification() {{
                            affectedCircuits = new String[]{{
                                add("alias"),
                            }};
                            description = "reprehenderit";
                            endTime = "sit";
                            issueType = InterconnectOutageNotificationIssueTypeEnum.PARTIAL_OUTAGE;
                            name = "Shelia Runolfsson";
                            source = InterconnectOutageNotificationSourceEnum.GOOGLE;
                            startTime = "saepe";
                            state = InterconnectOutageNotificationStateEnum.CANCELLED;
                        }}),
                        add(new InterconnectOutageNotification() {{
                            affectedCircuits = new String[]{{
                                add("recusandae"),
                            }};
                            description = "animi";
                            endTime = "modi";
                            issueType = InterconnectOutageNotificationIssueTypeEnum.IT_PARTIAL_OUTAGE;
                            name = "Miss Virginia Aufderhar I";
                            source = InterconnectOutageNotificationSourceEnum.NSRC_GOOGLE;
                            startTime = "tempore";
                            state = InterconnectOutageNotificationStateEnum.CANCELLED;
                        }}),
                    }};
                    googleIpAddress = "commodi";
                    googleReferenceId = "magni";
                    id = "natus";
                    interconnectAttachments = new String[]{{
                        add("non"),
                    }};
                    interconnectType = InterconnectInterconnectTypeEnum.PARTNER;
                    kind = "minima";
                    labelFingerprint = "sit";
                    labels = new java.util.HashMap<String, String>() {{
                        put("ducimus", "nemo");
                        put("illo", "distinctio");
                        put("fugit", "praesentium");
                        put("quam", "animi");
                    }};
                    linkType = InterconnectLinkTypeEnum.LINK_TYPE_ETHERNET100_G_LR;
                    location = "consectetur";
                    macsec = new InterconnectMacsec() {{
                        failOpen = false;
                        preSharedKeys = new org.openapis.openapi.models.shared.InterconnectMacsecPreSharedKey[]{{
                            add(new InterconnectMacsecPreSharedKey() {{
                                name = "Shane Roob";
                                startTime = "animi";
                            }}),
                            add(new InterconnectMacsecPreSharedKey() {{
                                name = "Jan Lueilwitz";
                                startTime = "in";
                            }}),
                            add(new InterconnectMacsecPreSharedKey() {{
                                name = "Jodi Altenwerth";
                                startTime = "adipisci";
                            }}),
                        }};
                    }};;
                    macsecEnabled = false;
                    name = "Michael Corwin";
                    nocContactEmail = "pariatur";
                    operationalStatus = InterconnectOperationalStatusEnum.OS_ACTIVE;
                    peerIpAddress = "provident";
                    provisionedLinkCount = 826964;
                    remoteLocation = "alias";
                    requestedFeatures = new org.openapis.openapi.models.shared.InterconnectRequestedFeaturesEnum[]{{
                        add(InterconnectRequestedFeaturesEnum.IF_MACSEC),
                        add(InterconnectRequestedFeaturesEnum.IF_MACSEC),
                        add(InterconnectRequestedFeaturesEnum.IF_MACSEC),
                        add(InterconnectRequestedFeaturesEnum.IF_MACSEC),
                    }};
                    requestedLinkCount = 787928;
                    satisfiesPzs = false;
                    selfLink = "commodi";
                    selfLinkWithId = "aut";
                    state = InterconnectStateEnum.UNPROVISIONED;
                }};;
                accessToken = "a";
                alt = AltEnum.PROTO;
                callback = "laudantium";
                fields = "hic";
                key = "eveniet";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "officiis";
                requestId = "eaque";
                uploadType = "officiis";
                uploadProtocol = "tempora";
                userIp = "voluptas";
            }};            

            ComputeInterconnectsInsertResponse res = sdk.interconnects.computeInterconnectsInsert(req, new ComputeInterconnectsInsertSecurity() {{
                option1 = new ComputeInterconnectsInsertSecurityOption1("delectus", "qui") {{
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

            ComputeInterconnectsListRequest req = new ComputeInterconnectsListRequest("fugit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "debitis";
                alt = AltEnum.JSON;
                callback = "occaecati";
                fields = "repellendus";
                filter = "reprehenderit";
                key = "excepturi";
                maxResults = 837187L;
                oauthToken = "non";
                orderBy = "excepturi";
                pageToken = "possimus";
                prettyPrint = false;
                quotaUser = "blanditiis";
                returnPartialSuccess = false;
                uploadType = "esse";
                uploadProtocol = "omnis";
                userIp = "consequatur";
            }};            

            ComputeInterconnectsListResponse res = sdk.interconnects.computeInterconnectsList(req, new ComputeInterconnectsListSecurity() {{
                option1 = new ComputeInterconnectsListSecurityOption1("eveniet", "sed") {{
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
import org.openapis.openapi.models.shared.InterconnectAvailableFeaturesEnum;
import org.openapis.openapi.models.shared.InterconnectCircuitInfo;
import org.openapis.openapi.models.shared.InterconnectInterconnectTypeEnum;
import org.openapis.openapi.models.shared.InterconnectLinkTypeEnum;
import org.openapis.openapi.models.shared.InterconnectMacsec;
import org.openapis.openapi.models.shared.InterconnectMacsecPreSharedKey;
import org.openapis.openapi.models.shared.InterconnectOperationalStatusEnum;
import org.openapis.openapi.models.shared.InterconnectOutageNotification;
import org.openapis.openapi.models.shared.InterconnectOutageNotificationIssueTypeEnum;
import org.openapis.openapi.models.shared.InterconnectOutageNotificationSourceEnum;
import org.openapis.openapi.models.shared.InterconnectOutageNotificationStateEnum;
import org.openapis.openapi.models.shared.InterconnectRequestedFeaturesEnum;
import org.openapis.openapi.models.shared.InterconnectStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInterconnectsPatchRequest req = new ComputeInterconnectsPatchRequest("voluptates", "autem") {{
                dollarXgafv = XgafvEnum.ONE;
                interconnect1 = new Interconnect() {{
                    adminEnabled = false;
                    availableFeatures = new org.openapis.openapi.models.shared.InterconnectAvailableFeaturesEnum[]{{
                        add(InterconnectAvailableFeaturesEnum.IF_MACSEC),
                    }};
                    circuitInfos = new org.openapis.openapi.models.shared.InterconnectCircuitInfo[]{{
                        add(new InterconnectCircuitInfo() {{
                            customerDemarcId = "deserunt";
                            googleCircuitId = "consectetur";
                            googleDemarcId = "sequi";
                        }}),
                        add(new InterconnectCircuitInfo() {{
                            customerDemarcId = "pariatur";
                            googleCircuitId = "perspiciatis";
                            googleDemarcId = "iusto";
                        }}),
                    }};
                    creationTimestamp = "consequatur";
                    customerName = "rerum";
                    description = "fugit";
                    expectedOutages = new org.openapis.openapi.models.shared.InterconnectOutageNotification[]{{
                        add(new InterconnectOutageNotification() {{
                            affectedCircuits = new String[]{{
                                add("ipsum"),
                                add("veritatis"),
                            }};
                            description = "rerum";
                            endTime = "doloribus";
                            issueType = InterconnectOutageNotificationIssueTypeEnum.OUTAGE;
                            name = "Michelle Tromp";
                            source = InterconnectOutageNotificationSourceEnum.GOOGLE;
                            startTime = "sapiente";
                            state = InterconnectOutageNotificationStateEnum.COMPLETED;
                        }}),
                        add(new InterconnectOutageNotification() {{
                            affectedCircuits = new String[]{{
                                add("veniam"),
                                add("vero"),
                                add("dolor"),
                                add("occaecati"),
                            }};
                            description = "explicabo";
                            endTime = "delectus";
                            issueType = InterconnectOutageNotificationIssueTypeEnum.IT_OUTAGE;
                            name = "Jan Kling";
                            source = InterconnectOutageNotificationSourceEnum.NSRC_GOOGLE;
                            startTime = "iusto";
                            state = InterconnectOutageNotificationStateEnum.NS_ACTIVE;
                        }}),
                        add(new InterconnectOutageNotification() {{
                            affectedCircuits = new String[]{{
                                add("ab"),
                                add("tempore"),
                                add("suscipit"),
                                add("neque"),
                            }};
                            description = "eveniet";
                            endTime = "placeat";
                            issueType = InterconnectOutageNotificationIssueTypeEnum.PARTIAL_OUTAGE;
                            name = "Dr. James Lindgren";
                            source = InterconnectOutageNotificationSourceEnum.NSRC_GOOGLE;
                            startTime = "consequatur";
                            state = InterconnectOutageNotificationStateEnum.NS_ACTIVE;
                        }}),
                    }};
                    googleIpAddress = "aperiam";
                    googleReferenceId = "ad";
                    id = "voluptas";
                    interconnectAttachments = new String[]{{
                        add("autem"),
                    }};
                    interconnectType = InterconnectInterconnectTypeEnum.PARTNER;
                    kind = "corporis";
                    labelFingerprint = "sequi";
                    labels = new java.util.HashMap<String, String>() {{
                        put("ut", "quae");
                        put("ipsam", "occaecati");
                        put("error", "exercitationem");
                        put("nostrum", "minus");
                    }};
                    linkType = InterconnectLinkTypeEnum.LINK_TYPE_ETHERNET100_G_LR;
                    location = "maxime";
                    macsec = new InterconnectMacsec() {{
                        failOpen = false;
                        preSharedKeys = new org.openapis.openapi.models.shared.InterconnectMacsecPreSharedKey[]{{
                            add(new InterconnectMacsecPreSharedKey() {{
                                name = "Mrs. Arlene Keebler";
                                startTime = "provident";
                            }}),
                            add(new InterconnectMacsecPreSharedKey() {{
                                name = "Shawna Feil";
                                startTime = "quasi";
                            }}),
                        }};
                    }};;
                    macsecEnabled = false;
                    name = "Lionel Spencer";
                    nocContactEmail = "corrupti";
                    operationalStatus = InterconnectOperationalStatusEnum.OS_ACTIVE;
                    peerIpAddress = "quos";
                    provisionedLinkCount = 128723;
                    remoteLocation = "impedit";
                    requestedFeatures = new org.openapis.openapi.models.shared.InterconnectRequestedFeaturesEnum[]{{
                        add(InterconnectRequestedFeaturesEnum.IF_MACSEC),
                    }};
                    requestedLinkCount = 146641;
                    satisfiesPzs = false;
                    selfLink = "aliquid";
                    selfLinkWithId = "minima";
                    state = InterconnectStateEnum.UNPROVISIONED;
                }};;
                accessToken = "sint";
                alt = AltEnum.JSON;
                callback = "quod";
                fields = "labore";
                key = "nobis";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "eligendi";
                requestId = "perspiciatis";
                uploadType = "delectus";
                uploadProtocol = "corrupti";
                userIp = "similique";
            }};            

            ComputeInterconnectsPatchResponse res = sdk.interconnects.computeInterconnectsPatch(req, new ComputeInterconnectsPatchSecurity() {{
                option1 = new ComputeInterconnectsPatchSecurityOption1("alias", "deserunt") {{
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

## computeInterconnectsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInterconnectsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeInterconnectsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeInterconnectsSetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeInterconnectsSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeInterconnectsSetIamPolicySecurityOption2;
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
import org.openapis.openapi.models.shared.GlobalSetPolicyRequest;
import org.openapis.openapi.models.shared.LogConfig;
import org.openapis.openapi.models.shared.LogConfigCloudAuditOptions;
import org.openapis.openapi.models.shared.LogConfigCloudAuditOptionsLogNameEnum;
import org.openapis.openapi.models.shared.LogConfigCounterOptions;
import org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField;
import org.openapis.openapi.models.shared.LogConfigDataAccessOptions;
import org.openapis.openapi.models.shared.LogConfigDataAccessOptionsLogModeEnum;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleActionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInterconnectsSetIamPolicyRequest req = new ComputeInterconnectsSetIamPolicyRequest("impedit", "quae") {{
                dollarXgafv = XgafvEnum.TWO;
                globalSetPolicyRequest = new GlobalSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "numquam";
                            condition = new Expr() {{
                                description = "illum";
                                expression = "aspernatur";
                                location = "officia";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("libero"),
                                add("aut"),
                                add("minus"),
                                add("temporibus"),
                            }};
                            role = "repudiandae";
                        }}),
                    }};
                    etag = "perferendis";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("necessitatibus"),
                                            add("quisquam"),
                                            add("delectus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quos"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("amet"),
                                            add("consequatur"),
                                            add("dolor"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dolorem"),
                                            add("doloribus"),
                                            add("sit"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("sunt"),
                                    add("quas"),
                                    add("expedita"),
                                }};
                                service = "explicabo";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "repellat";
                                condition = new Expr() {{
                                    description = "consequatur";
                                    expression = "nisi";
                                    location = "nulla";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("architecto"),
                                    add("odio"),
                                    add("deleniti"),
                                    add("ullam"),
                                }};
                                role = "consequuntur";
                            }}),
                        }};
                        etag = "assumenda";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.DENY_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "at";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("ab"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.IN;
                                        svc = "error";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("doloribus"),
                                            add("praesentium"),
                                            add("consectetur"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.IN;
                                        svc = "cupiditate";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("atque"),
                                            add("dolore"),
                                            add("repudiandae"),
                                        }};
                                    }}),
                                }};
                                description = "similique";
                                ins = new String[]{{
                                    add("pariatur"),
                                    add("soluta"),
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
                                                    name = "Roger Heaney";
                                                    value = "voluptas";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Josh Auer";
                                                    value = "dolorum";
                                                }}),
                                            }};
                                            field = "nisi";
                                            metric = "esse";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("occaecati"),
                                    add("molestiae"),
                                }};
                                permissions = new String[]{{
                                    add("cumque"),
                                    add("soluta"),
                                    add("voluptates"),
                                    add("distinctio"),
                                }};
                            }}),
                        }};
                        version = 495291;
                    }};;
                }};;
                accessToken = "sint";
                alt = AltEnum.MEDIA;
                callback = "explicabo";
                fields = "tempore";
                key = "est";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "animi";
                uploadProtocol = "quam";
                userIp = "illum";
            }};            

            ComputeInterconnectsSetIamPolicyResponse res = sdk.interconnects.computeInterconnectsSetIamPolicy(req, new ComputeInterconnectsSetIamPolicySecurity() {{
                option1 = new ComputeInterconnectsSetIamPolicySecurityOption1("animi", "ex") {{
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

            ComputeInterconnectsSetLabelsRequest req = new ComputeInterconnectsSetLabelsRequest("optio", "eos") {{
                dollarXgafv = XgafvEnum.TWO;
                globalSetLabelsRequest = new GlobalSetLabelsRequest() {{
                    labelFingerprint = "facilis";
                    labels = new java.util.HashMap<String, String>() {{
                        put("velit", "molestias");
                        put("officiis", "exercitationem");
                        put("inventore", "similique");
                    }};
                }};;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "iure";
                fields = "accusamus";
                key = "nulla";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "dignissimos";
                uploadProtocol = "a";
                userIp = "asperiores";
            }};            

            ComputeInterconnectsSetLabelsResponse res = sdk.interconnects.computeInterconnectsSetLabels(req, new ComputeInterconnectsSetLabelsSecurity() {{
                option1 = new ComputeInterconnectsSetLabelsSecurityOption1("eaque", "modi") {{
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

            ComputeInterconnectsTestIamPermissionsRequest req = new ComputeInterconnectsTestIamPermissionsRequest("asperiores", "pariatur") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("non"),
                    }};
                }};;
                accessToken = "commodi";
                alt = AltEnum.MEDIA;
                callback = "cupiditate";
                fields = "officiis";
                key = "fuga";
                oauthToken = "voluptates";
                prettyPrint = false;
                quotaUser = "quas";
                uploadType = "sunt";
                uploadProtocol = "deleniti";
                userIp = "fugit";
            }};            

            ComputeInterconnectsTestIamPermissionsResponse res = sdk.interconnects.computeInterconnectsTestIamPermissions(req, new ComputeInterconnectsTestIamPermissionsSecurity() {{
                option1 = new ComputeInterconnectsTestIamPermissionsSecurityOption1("tempora", "aperiam") {{
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
