# regionInstantSnapshots

### Available Operations

* [computeRegionInstantSnapshotsDelete](#computeregioninstantsnapshotsdelete) - Deletes the specified InstantSnapshot resource. Keep in mind that deleting a single instantSnapshot might not necessarily delete all the data on that instantSnapshot. If any data on the instantSnapshot that is marked for deletion is needed for subsequent instantSnapshots, the data will be moved to the next corresponding instantSnapshot. For more information, see Deleting instantSnapshots.
* [computeRegionInstantSnapshotsExport](#computeregioninstantsnapshotsexport) - Export the changed blocks between two instant snapshots to a customer's bucket in the user specified format.
* [computeRegionInstantSnapshotsGet](#computeregioninstantsnapshotsget) - Returns the specified InstantSnapshot resource in the specified region.
* [computeRegionInstantSnapshotsGetIamPolicy](#computeregioninstantsnapshotsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeRegionInstantSnapshotsInsert](#computeregioninstantsnapshotsinsert) - Creates an instant snapshot in the specified region.
* [computeRegionInstantSnapshotsList](#computeregioninstantsnapshotslist) - Retrieves the list of InstantSnapshot resources contained within the specified region.
* [computeRegionInstantSnapshotsSetIamPolicy](#computeregioninstantsnapshotssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeRegionInstantSnapshotsSetLabels](#computeregioninstantsnapshotssetlabels) - Sets the labels on a instantSnapshot in the given region. To learn more about labels, read the Labeling Resources documentation.
* [computeRegionInstantSnapshotsTestIamPermissions](#computeregioninstantsnapshotstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeRegionInstantSnapshotsDelete

Deletes the specified InstantSnapshot resource. Keep in mind that deleting a single instantSnapshot might not necessarily delete all the data on that instantSnapshot. If any data on the instantSnapshot that is marked for deletion is needed for subsequent instantSnapshots, the data will be moved to the next corresponding instantSnapshot. For more information, see Deleting instantSnapshots.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsDeleteRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsDeleteResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstantSnapshotsDeleteRequest req = new ComputeRegionInstantSnapshotsDeleteRequest("deleniti", "nobis", "quas") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptas";
                alt = AltEnum.PROTO;
                callback = "aliquid";
                fields = "similique";
                key = "optio";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "inventore";
                requestId = "qui";
                uploadType = "sapiente";
                uploadProtocol = "pariatur";
                userIp = "tenetur";
            }};            

            ComputeRegionInstantSnapshotsDeleteResponse res = sdk.regionInstantSnapshots.computeRegionInstantSnapshotsDelete(req, new ComputeRegionInstantSnapshotsDeleteSecurity() {{
                option1 = new ComputeRegionInstantSnapshotsDeleteSecurityOption1("placeat", "dolores") {{
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

## computeRegionInstantSnapshotsExport

Export the changed blocks between two instant snapshots to a customer's bucket in the user specified format.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsExportRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsExportResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsExportSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsExportSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsExportSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomerEncryptionKey;
import org.openapis.openapi.models.shared.InstantSnapshotExportParams;
import org.openapis.openapi.models.shared.InstantSnapshotExportParamsOutputTypeEnum;
import org.openapis.openapi.models.shared.RegionInstantSnapshotsExportRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstantSnapshotsExportRequest req = new ComputeRegionInstantSnapshotsExportRequest("aut", "quas", "laudantium") {{
                dollarXgafv = XgafvEnum.TWO;
                regionInstantSnapshotsExportRequest = new RegionInstantSnapshotsExportRequest() {{
                    exportParams = new InstantSnapshotExportParams() {{
                        baseInstantSnapshot = "aspernatur";
                        bucketName = "consequuntur";
                        encryptionKey = new CustomerEncryptionKey() {{
                            kmsKeyName = "omnis";
                            kmsKeyServiceAccount = "non";
                            rawKey = "voluptatum";
                            rsaEncryptedKey = "ea";
                            sha256 = "sunt";
                        }};;
                        objectName = "occaecati";
                        outputType = InstantSnapshotExportParamsOutputTypeEnum.METADATA_ONLY;
                    }};;
                }};;
                accessToken = "laborum";
                alt = AltEnum.MEDIA;
                callback = "facilis";
                fields = "eius";
                key = "eaque";
                oauthToken = "velit";
                prettyPrint = false;
                quotaUser = "non";
                requestId = "ad";
                uploadType = "quaerat";
                uploadProtocol = "occaecati";
                userIp = "omnis";
            }};            

            ComputeRegionInstantSnapshotsExportResponse res = sdk.regionInstantSnapshots.computeRegionInstantSnapshotsExport(req, new ComputeRegionInstantSnapshotsExportSecurity() {{
                option1 = new ComputeRegionInstantSnapshotsExportSecurityOption1("voluptatem", "numquam") {{
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

## computeRegionInstantSnapshotsGet

Returns the specified InstantSnapshot resource in the specified region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsGetRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsGetResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsGetSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstantSnapshotsGetRequest req = new ComputeRegionInstantSnapshotsGetRequest("excepturi", "doloremque", "autem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aut";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                fields = "magni";
                key = "voluptate";
                oauthToken = "sequi";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "doloremque";
                uploadProtocol = "esse";
                userIp = "eligendi";
            }};            

            ComputeRegionInstantSnapshotsGetResponse res = sdk.regionInstantSnapshots.computeRegionInstantSnapshotsGet(req, new ComputeRegionInstantSnapshotsGetSecurity() {{
                option1 = new ComputeRegionInstantSnapshotsGetSecurityOption1("voluptatibus", "suscipit") {{
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

## computeRegionInstantSnapshotsGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsGetIamPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstantSnapshotsGetIamPolicyRequest req = new ComputeRegionInstantSnapshotsGetIamPolicyRequest("suscipit", "omnis", "voluptates") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "adipisci";
                alt = AltEnum.PROTO;
                callback = "distinctio";
                fields = "temporibus";
                key = "velit";
                oauthToken = "necessitatibus";
                optionsRequestedPolicyVersion = 640785L;
                prettyPrint = false;
                quotaUser = "et";
                uploadType = "expedita";
                uploadProtocol = "quibusdam";
                userIp = "corporis";
            }};            

            ComputeRegionInstantSnapshotsGetIamPolicyResponse res = sdk.regionInstantSnapshots.computeRegionInstantSnapshotsGetIamPolicy(req, new ComputeRegionInstantSnapshotsGetIamPolicySecurity() {{
                option1 = new ComputeRegionInstantSnapshotsGetIamPolicySecurityOption1("optio", "sapiente") {{
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

## computeRegionInstantSnapshotsInsert

Creates an instant snapshot in the specified region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsInsertRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsInsertResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsInsertSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsInsertSecurityOption2;
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

            ComputeRegionInstantSnapshotsInsertRequest req = new ComputeRegionInstantSnapshotsInsertRequest("vero", "iusto") {{
                dollarXgafv = XgafvEnum.TWO;
                instantSnapshot = new InstantSnapshot() {{
                    architecture = InstantSnapshotArchitectureEnum.X8664;
                    creationTimestamp = "maiores";
                    description = "beatae";
                    diskSizeGb = "veritatis";
                    guestFlush = false;
                    id = "corporis";
                    kind = "nemo";
                    labelFingerprint = "esse";
                    labels = new java.util.HashMap<String, String>() {{
                        put("laboriosam", "modi");
                        put("deleniti", "voluptates");
                        put("vitae", "labore");
                    }};
                    name = "Thelma Fay";
                    region = "labore";
                    resourceStatus = new InstantSnapshotResourceStatus() {{
                        storageSizeBytes = "quod";
                    }};;
                    satisfiesPzs = false;
                    selfLink = "labore";
                    selfLinkWithId = "est";
                    sourceDisk = "quis";
                    sourceDiskId = "commodi";
                    status = InstantSnapshotStatusEnum.READY;
                    zone = "velit";
                }};;
                accessToken = "aspernatur";
                alt = AltEnum.MEDIA;
                callback = "odio";
                fields = "cupiditate";
                key = "enim";
                oauthToken = "rem";
                prettyPrint = false;
                quotaUser = "aspernatur";
                requestId = "nemo";
                uploadType = "ex";
                uploadProtocol = "nihil";
                userIp = "officia";
            }};            

            ComputeRegionInstantSnapshotsInsertResponse res = sdk.regionInstantSnapshots.computeRegionInstantSnapshotsInsert(req, new ComputeRegionInstantSnapshotsInsertSecurity() {{
                option1 = new ComputeRegionInstantSnapshotsInsertSecurityOption1("tempore", "esse") {{
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

## computeRegionInstantSnapshotsList

Retrieves the list of InstantSnapshot resources contained within the specified region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsListRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsListResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsListSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstantSnapshotsListRequest req = new ComputeRegionInstantSnapshotsListRequest("distinctio", "aliquam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "officiis";
                alt = AltEnum.MEDIA;
                callback = "quaerat";
                fields = "nobis";
                filter = "perferendis";
                key = "itaque";
                maxResults = 561430L;
                oauthToken = "recusandae";
                orderBy = "et";
                pageToken = "tempore";
                prettyPrint = false;
                quotaUser = "possimus";
                returnPartialSuccess = false;
                uploadType = "rem";
                uploadProtocol = "voluptate";
                userIp = "sit";
            }};            

            ComputeRegionInstantSnapshotsListResponse res = sdk.regionInstantSnapshots.computeRegionInstantSnapshotsList(req, new ComputeRegionInstantSnapshotsListSecurity() {{
                option1 = new ComputeRegionInstantSnapshotsListSecurityOption1("illo", "commodi") {{
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

## computeRegionInstantSnapshotsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsSetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsSetIamPolicySecurityOption2;
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

            ComputeRegionInstantSnapshotsSetIamPolicyRequest req = new ComputeRegionInstantSnapshotsSetIamPolicyRequest("molestiae", "at", "eum") {{
                dollarXgafv = XgafvEnum.TWO;
                regionSetPolicyRequest = new RegionSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "laboriosam";
                            condition = new Expr() {{
                                description = "est";
                                expression = "quasi";
                                location = "saepe";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("tenetur"),
                                add("amet"),
                                add("animi"),
                            }};
                            role = "dolores";
                        }}),
                        add(new Binding() {{
                            bindingId = "nihil";
                            condition = new Expr() {{
                                description = "nesciunt";
                                expression = "corrupti";
                                location = "laudantium";
                                title = "Mrs.";
                            }};
                            members = new String[]{{
                                add("numquam"),
                                add("odit"),
                            }};
                            role = "nesciunt";
                        }}),
                    }};
                    etag = "quam";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("error"),
                                            add("hic"),
                                            add("reprehenderit"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("assumenda"),
                                    add("consequuntur"),
                                    add("possimus"),
                                    add("reprehenderit"),
                                }};
                                service = "id";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dolores"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("natus"),
                                    add("maiores"),
                                    add("eligendi"),
                                    add("perferendis"),
                                }};
                                service = "assumenda";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "libero";
                                condition = new Expr() {{
                                    description = "iure";
                                    expression = "facilis";
                                    location = "maxime";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("totam"),
                                    add("itaque"),
                                }};
                                role = "commodi";
                            }}),
                            add(new Binding() {{
                                bindingId = "consequuntur";
                                condition = new Expr() {{
                                    description = "excepturi";
                                    expression = "velit";
                                    location = "eveniet";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("eveniet"),
                                }};
                                role = "quia";
                            }}),
                            add(new Binding() {{
                                bindingId = "minima";
                                condition = new Expr() {{
                                    description = "dolor";
                                    expression = "a";
                                    location = "quo";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("pariatur"),
                                    add("quas"),
                                    add("illum"),
                                }};
                                role = "vero";
                            }}),
                            add(new Binding() {{
                                bindingId = "fugit";
                                condition = new Expr() {{
                                    description = "delectus";
                                    expression = "adipisci";
                                    location = "ullam";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("vitae"),
                                    add("placeat"),
                                    add("cum"),
                                }};
                                role = "odit";
                            }}),
                        }};
                        etag = "necessitatibus";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.DENY_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "nisi";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("aliquam"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "eum";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("est"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "aspernatur";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("necessitatibus"),
                                        }};
                                    }}),
                                }};
                                description = "dolores";
                                ins = new String[]{{
                                    add("ipsam"),
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
                                                    name = "Alyssa Reilly";
                                                    value = "id";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Daisy Ebert Jr.";
                                                    value = "quibusdam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Marjorie Greenholt PhD";
                                                    value = "sapiente";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Guillermo Cartwright";
                                                    value = "dicta";
                                                }}),
                                            }};
                                            field = "numquam";
                                            metric = "maxime";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("consequatur"),
                                    add("inventore"),
                                    add("rem"),
                                }};
                                permissions = new String[]{{
                                    add("libero"),
                                    add("sunt"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "fugit";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("illo"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "velit";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("sed"),
                                            add("ducimus"),
                                            add("iusto"),
                                            add("quia"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "nulla";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("corrupti"),
                                            add("voluptates"),
                                            add("ipsa"),
                                        }};
                                    }}),
                                }};
                                description = "hic";
                                ins = new String[]{{
                                    add("aspernatur"),
                                    add("quod"),
                                    add("cumque"),
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
                                                    name = "Leonard Robel";
                                                    value = "dolore";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Luz Heaney";
                                                    value = "amet";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Fred Feeney";
                                                    value = "delectus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Bert Koelpin";
                                                    value = "vero";
                                                }}),
                                            }};
                                            field = "nihil";
                                            metric = "doloribus";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("iste"),
                                    add("quo"),
                                }};
                                permissions = new String[]{{
                                    add("perspiciatis"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "optio";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("reiciendis"),
                                            add("voluptate"),
                                        }};
                                    }}),
                                }};
                                description = "nemo";
                                ins = new String[]{{
                                    add("fuga"),
                                    add("et"),
                                    add("delectus"),
                                    add("quia"),
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
                                                    name = "Mr. Faith Willms DDS";
                                                    value = "corporis";
                                                }}),
                                            }};
                                            field = "consequatur";
                                            metric = "optio";
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
                                                    name = "Jimmie Barton PhD";
                                                    value = "velit";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mabel Witting";
                                                    value = "accusantium";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Terence Bosco II";
                                                    value = "eligendi";
                                                }}),
                                            }};
                                            field = "harum";
                                            metric = "culpa";
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
                                                    name = "Sylvia Goyette";
                                                    value = "sit";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Rex Marks";
                                                    value = "perferendis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jacqueline Carroll";
                                                    value = "aspernatur";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ora Von";
                                                    value = "harum";
                                                }}),
                                            }};
                                            field = "natus";
                                            metric = "quibusdam";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
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
                                                    name = "Mattie Schamberger";
                                                    value = "quibusdam";
                                                }}),
                                            }};
                                            field = "adipisci";
                                            metric = "repudiandae";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("similique"),
                                    add("soluta"),
                                    add("natus"),
                                }};
                                permissions = new String[]{{
                                    add("itaque"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "vitae";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("provident"),
                                            add("ipsam"),
                                            add("delectus"),
                                            add("aliquam"),
                                        }};
                                    }}),
                                }};
                                description = "repellat";
                                ins = new String[]{{
                                    add("explicabo"),
                                    add("quia"),
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
                                                    name = "Dr. Krystal McKenzie";
                                                    value = "dolores";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Russell Dooley";
                                                    value = "id";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Pedro Schamberger";
                                                    value = "nulla";
                                                }}),
                                            }};
                                            field = "earum";
                                            metric = "rerum";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("a"),
                                }};
                                permissions = new String[]{{
                                    add("aperiam"),
                                    add("alias"),
                                }};
                            }}),
                        }};
                        version = 218814;
                    }};;
                }};;
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "cupiditate";
                fields = "vel";
                key = "corrupti";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "et";
                uploadType = "quia";
                uploadProtocol = "accusantium";
                userIp = "error";
            }};            

            ComputeRegionInstantSnapshotsSetIamPolicyResponse res = sdk.regionInstantSnapshots.computeRegionInstantSnapshotsSetIamPolicy(req, new ComputeRegionInstantSnapshotsSetIamPolicySecurity() {{
                option1 = new ComputeRegionInstantSnapshotsSetIamPolicySecurityOption1("dignissimos", "fuga") {{
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

## computeRegionInstantSnapshotsSetLabels

Sets the labels on a instantSnapshot in the given region. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsSetLabelsRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsSetLabelsResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsSetLabelsSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsSetLabelsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsSetLabelsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RegionSetLabelsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstantSnapshotsSetLabelsRequest req = new ComputeRegionInstantSnapshotsSetLabelsRequest("ratione", "ut", "debitis") {{
                dollarXgafv = XgafvEnum.TWO;
                regionSetLabelsRequest = new RegionSetLabelsRequest() {{
                    labelFingerprint = "dicta";
                    labels = new java.util.HashMap<String, String>() {{
                        put("aspernatur", "modi");
                        put("illo", "quo");
                        put("voluptas", "doloribus");
                        put("tenetur", "cum");
                    }};
                }};;
                accessToken = "dignissimos";
                alt = AltEnum.JSON;
                callback = "aliquam";
                fields = "perferendis";
                key = "quaerat";
                oauthToken = "sequi";
                prettyPrint = false;
                quotaUser = "porro";
                requestId = "error";
                uploadType = "alias";
                uploadProtocol = "repellat";
                userIp = "exercitationem";
            }};            

            ComputeRegionInstantSnapshotsSetLabelsResponse res = sdk.regionInstantSnapshots.computeRegionInstantSnapshotsSetLabels(req, new ComputeRegionInstantSnapshotsSetLabelsSecurity() {{
                option1 = new ComputeRegionInstantSnapshotsSetLabelsSecurityOption1("ea", "vel") {{
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

## computeRegionInstantSnapshotsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstantSnapshotsTestIamPermissionsRequest req = new ComputeRegionInstantSnapshotsTestIamPermissionsRequest("recusandae", "tempore", "veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("omnis"),
                    }};
                }};;
                accessToken = "facere";
                alt = AltEnum.MEDIA;
                callback = "est";
                fields = "earum";
                key = "sapiente";
                oauthToken = "autem";
                prettyPrint = false;
                quotaUser = "neque";
                uploadType = "doloribus";
                uploadProtocol = "dignissimos";
                userIp = "libero";
            }};            

            ComputeRegionInstantSnapshotsTestIamPermissionsResponse res = sdk.regionInstantSnapshots.computeRegionInstantSnapshotsTestIamPermissions(req, new ComputeRegionInstantSnapshotsTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionInstantSnapshotsTestIamPermissionsSecurityOption1("amet", "ab") {{
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
