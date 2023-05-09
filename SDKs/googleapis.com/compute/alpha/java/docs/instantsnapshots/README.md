# instantSnapshots

### Available Operations

* [computeInstantSnapshotsAggregatedList](#computeinstantsnapshotsaggregatedlist) - Retrieves an aggregated list of instantSnapshots.
* [computeInstantSnapshotsDelete](#computeinstantsnapshotsdelete) - Deletes the specified InstantSnapshot resource. Keep in mind that deleting a single instantSnapshot might not necessarily delete all the data on that instantSnapshot. If any data on the instantSnapshot that is marked for deletion is needed for subsequent instantSnapshots, the data will be moved to the next corresponding instantSnapshot. For more information, see Deleting instantSnapshots.
* [computeInstantSnapshotsExport](#computeinstantsnapshotsexport) - Export the changed blocks between two instant snapshots to a customer's bucket in the user specified format.
* [computeInstantSnapshotsGet](#computeinstantsnapshotsget) - Returns the specified InstantSnapshot resource in the specified zone.
* [computeInstantSnapshotsGetIamPolicy](#computeinstantsnapshotsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeInstantSnapshotsInsert](#computeinstantsnapshotsinsert) - Creates an instant snapshot in the specified zone.
* [computeInstantSnapshotsList](#computeinstantsnapshotslist) - Retrieves the list of InstantSnapshot resources contained within the specified zone.
* [computeInstantSnapshotsSetIamPolicy](#computeinstantsnapshotssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeInstantSnapshotsSetLabels](#computeinstantsnapshotssetlabels) - Sets the labels on a instantSnapshot in the given zone. To learn more about labels, read the Labeling Resources documentation.
* [computeInstantSnapshotsTestIamPermissions](#computeinstantsnapshotstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeInstantSnapshotsAggregatedList

Retrieves an aggregated list of instantSnapshots.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstantSnapshotsAggregatedListRequest req = new ComputeInstantSnapshotsAggregatedListRequest("laboriosam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laborum";
                alt = AltEnum.JSON;
                callback = "commodi";
                fields = "ipsa";
                filter = "suscipit";
                includeAllScopes = false;
                key = "ratione";
                maxResults = 584020L;
                oauthToken = "iste";
                orderBy = "accusamus";
                pageToken = "hic";
                prettyPrint = false;
                quotaUser = "beatae";
                returnPartialSuccess = false;
                uploadType = "iusto";
                uploadProtocol = "cum";
                userIp = "deleniti";
            }};            

            ComputeInstantSnapshotsAggregatedListResponse res = sdk.instantSnapshots.computeInstantSnapshotsAggregatedList(req, new ComputeInstantSnapshotsAggregatedListSecurity() {{
                option1 = new ComputeInstantSnapshotsAggregatedListSecurityOption1("sunt", "reprehenderit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.instantSnapshotAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInstantSnapshotsDelete

Deletes the specified InstantSnapshot resource. Keep in mind that deleting a single instantSnapshot might not necessarily delete all the data on that instantSnapshot. If any data on the instantSnapshot that is marked for deletion is needed for subsequent instantSnapshots, the data will be moved to the next corresponding instantSnapshot. For more information, see Deleting instantSnapshots.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsDeleteRequest;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsDeleteResponse;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstantSnapshotsDeleteRequest req = new ComputeInstantSnapshotsDeleteRequest("ullam", "deleniti", "repellendus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laborum";
                alt = AltEnum.PROTO;
                callback = "veniam";
                fields = "expedita";
                key = "impedit";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "alias";
                requestId = "nulla";
                uploadType = "accusamus";
                uploadProtocol = "id";
                userIp = "reprehenderit";
            }};            

            ComputeInstantSnapshotsDeleteResponse res = sdk.instantSnapshots.computeInstantSnapshotsDelete(req, new ComputeInstantSnapshotsDeleteSecurity() {{
                option1 = new ComputeInstantSnapshotsDeleteSecurityOption1("dignissimos", "doloribus") {{
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

## computeInstantSnapshotsExport

Export the changed blocks between two instant snapshots to a customer's bucket in the user specified format.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsExportRequest;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsExportResponse;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsExportSecurity;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsExportSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsExportSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomerEncryptionKey;
import org.openapis.openapi.models.shared.InstantSnapshotExportParams;
import org.openapis.openapi.models.shared.InstantSnapshotExportParamsOutputTypeEnum;
import org.openapis.openapi.models.shared.InstantSnapshotsExportRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstantSnapshotsExportRequest req = new ComputeInstantSnapshotsExportRequest("quibusdam", "omnis", "cupiditate") {{
                dollarXgafv = XgafvEnum.ONE;
                instantSnapshotsExportRequest = new InstantSnapshotsExportRequest() {{
                    exportParams = new InstantSnapshotExportParams() {{
                        baseInstantSnapshot = "illo";
                        bucketName = "debitis";
                        encryptionKey = new CustomerEncryptionKey() {{
                            kmsKeyName = "maxime";
                            kmsKeyServiceAccount = "molestias";
                            rawKey = "quibusdam";
                            rsaEncryptedKey = "quasi";
                            sha256 = "aperiam";
                        }};;
                        objectName = "aliquid";
                        outputType = InstantSnapshotExportParamsOutputTypeEnum.METADATA_ONLY;
                    }};;
                }};;
                accessToken = "tenetur";
                alt = AltEnum.PROTO;
                callback = "magni";
                fields = "quisquam";
                key = "dolores";
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "culpa";
                requestId = "distinctio";
                uploadType = "corrupti";
                uploadProtocol = "dolore";
                userIp = "doloremque";
            }};            

            ComputeInstantSnapshotsExportResponse res = sdk.instantSnapshots.computeInstantSnapshotsExport(req, new ComputeInstantSnapshotsExportSecurity() {{
                option1 = new ComputeInstantSnapshotsExportSecurityOption1("animi", "quia") {{
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

## computeInstantSnapshotsGet

Returns the specified InstantSnapshot resource in the specified zone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsGetRequest;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsGetResponse;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsGetSecurity;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstantSnapshotsGetRequest req = new ComputeInstantSnapshotsGetRequest("totam", "repudiandae", "id") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "commodi";
                alt = AltEnum.MEDIA;
                callback = "quia";
                fields = "quibusdam";
                key = "autem";
                oauthToken = "soluta";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "neque";
                uploadProtocol = "dolorum";
                userIp = "sequi";
            }};            

            ComputeInstantSnapshotsGetResponse res = sdk.instantSnapshots.computeInstantSnapshotsGet(req, new ComputeInstantSnapshotsGetSecurity() {{
                option1 = new ComputeInstantSnapshotsGetSecurityOption1("ut", "maxime") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.instantSnapshot != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInstantSnapshotsGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsGetIamPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstantSnapshotsGetIamPolicyRequest req = new ComputeInstantSnapshotsGetIamPolicyRequest("deserunt", "labore", "consectetur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cumque";
                alt = AltEnum.PROTO;
                callback = "nam";
                fields = "adipisci";
                key = "dicta";
                oauthToken = "tempora";
                optionsRequestedPolicyVersion = 592655L;
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "et";
                uploadProtocol = "molestias";
                userIp = "reiciendis";
            }};            

            ComputeInstantSnapshotsGetIamPolicyResponse res = sdk.instantSnapshots.computeInstantSnapshotsGetIamPolicy(req, new ComputeInstantSnapshotsGetIamPolicySecurity() {{
                option1 = new ComputeInstantSnapshotsGetIamPolicySecurityOption1("qui", "quis") {{
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

## computeInstantSnapshotsInsert

Creates an instant snapshot in the specified zone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsInsertRequest;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsInsertResponse;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsInsertSecurity;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstantSnapshot;
import org.openapis.openapi.models.shared.InstantSnapshotArchitectureEnum;
import org.openapis.openapi.models.shared.InstantSnapshotResourceStatus;
import org.openapis.openapi.models.shared.InstantSnapshotStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstantSnapshotsInsertRequest req = new ComputeInstantSnapshotsInsertRequest("sed", "perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                instantSnapshot = new InstantSnapshot() {{
                    architecture = InstantSnapshotArchitectureEnum.ARM64;
                    creationTimestamp = "similique";
                    description = "sunt";
                    diskSizeGb = "praesentium";
                    guestFlush = false;
                    id = "mollitia";
                    kind = "magnam";
                    labelFingerprint = "tempore";
                    labels = new java.util.HashMap<String, String>() {{
                        put("nulla", "fuga");
                    }};
                    name = "Levi Hagenes";
                    region = "placeat";
                    resourceStatus = new InstantSnapshotResourceStatus() {{
                        storageSizeBytes = "voluptatibus";
                    }};;
                    satisfiesPzs = false;
                    selfLink = "consequatur";
                    selfLinkWithId = "eum";
                    sourceDisk = "sunt";
                    sourceDiskId = "ex";
                    status = InstantSnapshotStatusEnum.READY;
                    zone = "recusandae";
                }};;
                accessToken = "perspiciatis";
                alt = AltEnum.JSON;
                callback = "quia";
                fields = "molestiae";
                key = "ullam";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "exercitationem";
                requestId = "soluta";
                uploadType = "nulla";
                uploadProtocol = "iure";
                userIp = "doloremque";
            }};            

            ComputeInstantSnapshotsInsertResponse res = sdk.instantSnapshots.computeInstantSnapshotsInsert(req, new ComputeInstantSnapshotsInsertSecurity() {{
                option1 = new ComputeInstantSnapshotsInsertSecurityOption1("pariatur", "officia") {{
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

## computeInstantSnapshotsList

Retrieves the list of InstantSnapshot resources contained within the specified zone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsListRequest;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsListResponse;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsListSecurity;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstantSnapshotsListRequest req = new ComputeInstantSnapshotsListRequest("est", "voluptatem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quae";
                alt = AltEnum.JSON;
                callback = "unde";
                fields = "placeat";
                filter = "pariatur";
                key = "dicta";
                maxResults = 797756L;
                oauthToken = "quod";
                orderBy = "assumenda";
                pageToken = "illum";
                prettyPrint = false;
                quotaUser = "ipsum";
                returnPartialSuccess = false;
                uploadType = "ea";
                uploadProtocol = "magni";
                userIp = "rerum";
            }};            

            ComputeInstantSnapshotsListResponse res = sdk.instantSnapshots.computeInstantSnapshotsList(req, new ComputeInstantSnapshotsListSecurity() {{
                option1 = new ComputeInstantSnapshotsListSecurityOption1("quidem", "reiciendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.instantSnapshotList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInstantSnapshotsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsSetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsSetIamPolicySecurityOption2;
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
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleActionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.ZoneSetPolicyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstantSnapshotsSetIamPolicyRequest req = new ComputeInstantSnapshotsSetIamPolicyRequest("sint", "qui", "amet") {{
                dollarXgafv = XgafvEnum.TWO;
                zoneSetPolicyRequest = new ZoneSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "aperiam";
                            condition = new Expr() {{
                                description = "illo";
                                expression = "quis";
                                location = "a";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("deleniti"),
                                add("excepturi"),
                            }};
                            role = "unde";
                        }}),
                    }};
                    etag = "optio";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("delectus"),
                                            add("accusamus"),
                                            add("cum"),
                                            add("excepturi"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("impedit"),
                                            add("ullam"),
                                            add("aperiam"),
                                            add("nesciunt"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("laborum"),
                                    add("voluptatum"),
                                    add("vitae"),
                                }};
                                service = "eveniet";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("beatae"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("omnis"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("odio"),
                                            add("soluta"),
                                            add("incidunt"),
                                            add("nemo"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("quas"),
                                    add("ipsam"),
                                    add("enim"),
                                }};
                                service = "repudiandae";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("rem"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("praesentium"),
                                            add("id"),
                                            add("ratione"),
                                            add("magni"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("magnam"),
                                }};
                                service = "beatae";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("eligendi"),
                                            add("quod"),
                                            add("impedit"),
                                            add("culpa"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ratione"),
                                            add("facere"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("deleniti"),
                                            add("ad"),
                                            add("iste"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("dicta"),
                                    add("distinctio"),
                                    add("amet"),
                                    add("dolores"),
                                }};
                                service = "quidem";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "magni";
                                condition = new Expr() {{
                                    description = "vitae";
                                    expression = "consectetur";
                                    location = "repudiandae";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("dolor"),
                                    add("vitae"),
                                    add("porro"),
                                }};
                                role = "temporibus";
                            }}),
                            add(new Binding() {{
                                bindingId = "ea";
                                condition = new Expr() {{
                                    description = "dolorum";
                                    expression = "exercitationem";
                                    location = "expedita";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("incidunt"),
                                    add("omnis"),
                                }};
                                role = "doloremque";
                            }}),
                            add(new Binding() {{
                                bindingId = "vel";
                                condition = new Expr() {{
                                    description = "expedita";
                                    expression = "excepturi";
                                    location = "vel";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("nesciunt"),
                                    add("vel"),
                                }};
                                role = "vero";
                            }}),
                        }};
                        etag = "voluptate";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.NO_ACTION;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "quaerat";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("dolore"),
                                        }};
                                    }}),
                                }};
                                description = "excepturi";
                                ins = new String[]{{
                                    add("quae"),
                                    add("distinctio"),
                                    add("rem"),
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
                                                    name = "Mrs. Nathaniel Grady";
                                                    value = "dignissimos";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ms. Kelli Ebert";
                                                    value = "dicta";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Sheila Stehr";
                                                    value = "aut";
                                                }}),
                                            }};
                                            field = "ex";
                                            metric = "inventore";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ramona Hessel";
                                                    value = "molestias";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Loren Spencer";
                                                    value = "odio";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Leon Rodriguez";
                                                    value = "exercitationem";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Debra Roberts";
                                                    value = "ipsum";
                                                }}),
                                            }};
                                            field = "nihil";
                                            metric = "accusantium";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("dignissimos"),
                                    add("rem"),
                                    add("dolore"),
                                }};
                                permissions = new String[]{{
                                    add("nobis"),
                                    add("architecto"),
                                    add("tempora"),
                                    add("eum"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "architecto";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("minima"),
                                            add("rerum"),
                                            add("voluptates"),
                                            add("suscipit"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "velit";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("quam"),
                                        }};
                                    }}),
                                }};
                                description = "beatae";
                                ins = new String[]{{
                                    add("dolores"),
                                    add("voluptatum"),
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
                                                    name = "Courtney Schroeder";
                                                    value = "labore";
                                                }}),
                                            }};
                                            field = "consectetur";
                                            metric = "occaecati";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Steve Schowalter";
                                                    value = "alias";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Sue Spinka";
                                                    value = "minus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Sophia Roberts";
                                                    value = "quo";
                                                }}),
                                            }};
                                            field = "iste";
                                            metric = "itaque";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("aliquam"),
                                    add("incidunt"),
                                }};
                                permissions = new String[]{{
                                    add("ipsam"),
                                    add("quidem"),
                                    add("eum"),
                                    add("numquam"),
                                }};
                            }}),
                        }};
                        version = 316153;
                    }};;
                }};;
                accessToken = "fuga";
                alt = AltEnum.JSON;
                callback = "est";
                fields = "maiores";
                key = "quia";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "deserunt";
                uploadProtocol = "distinctio";
                userIp = "placeat";
            }};            

            ComputeInstantSnapshotsSetIamPolicyResponse res = sdk.instantSnapshots.computeInstantSnapshotsSetIamPolicy(req, new ComputeInstantSnapshotsSetIamPolicySecurity() {{
                option1 = new ComputeInstantSnapshotsSetIamPolicySecurityOption1("quisquam", "nam") {{
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

## computeInstantSnapshotsSetLabels

Sets the labels on a instantSnapshot in the given zone. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsSetLabelsRequest;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsSetLabelsResponse;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsSetLabelsSecurity;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsSetLabelsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsSetLabelsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.ZoneSetLabelsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstantSnapshotsSetLabelsRequest req = new ComputeInstantSnapshotsSetLabelsRequest("quo", "fuga", "nesciunt") {{
                dollarXgafv = XgafvEnum.ONE;
                zoneSetLabelsRequest = new ZoneSetLabelsRequest() {{
                    labelFingerprint = "excepturi";
                    labels = new java.util.HashMap<String, String>() {{
                        put("quis", "officiis");
                    }};
                }};;
                accessToken = "cum";
                alt = AltEnum.JSON;
                callback = "ex";
                fields = "dolorum";
                key = "autem";
                oauthToken = "maxime";
                prettyPrint = false;
                quotaUser = "est";
                requestId = "distinctio";
                uploadType = "officiis";
                uploadProtocol = "fugit";
                userIp = "explicabo";
            }};            

            ComputeInstantSnapshotsSetLabelsResponse res = sdk.instantSnapshots.computeInstantSnapshotsSetLabels(req, new ComputeInstantSnapshotsSetLabelsSecurity() {{
                option1 = new ComputeInstantSnapshotsSetLabelsSecurityOption1("officia", "et") {{
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

## computeInstantSnapshotsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstantSnapshotsTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstantSnapshotsTestIamPermissionsRequest req = new ComputeInstantSnapshotsTestIamPermissionsRequest("sunt", "asperiores", "quam") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("nihil"),
                        add("ipsam"),
                        add("quibusdam"),
                    }};
                }};;
                accessToken = "totam";
                alt = AltEnum.PROTO;
                callback = "tenetur";
                fields = "tempora";
                key = "quaerat";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "harum";
                uploadProtocol = "eveniet";
                userIp = "fugiat";
            }};            

            ComputeInstantSnapshotsTestIamPermissionsResponse res = sdk.instantSnapshots.computeInstantSnapshotsTestIamPermissions(req, new ComputeInstantSnapshotsTestIamPermissionsSecurity() {{
                option1 = new ComputeInstantSnapshotsTestIamPermissionsSecurityOption1("iusto", "modi") {{
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
