# snapshots

### Available Operations

* [computeSnapshotsDelete](#computesnapshotsdelete) - Deletes the specified Snapshot resource. Keep in mind that deleting a single snapshot might not necessarily delete all the data on that snapshot. If any data on the snapshot that is marked for deletion is needed for subsequent snapshots, the data will be moved to the next corresponding snapshot. For more information, see Deleting snapshots.
* [computeSnapshotsGet](#computesnapshotsget) - Returns the specified Snapshot resource.
* [computeSnapshotsGetIamPolicy](#computesnapshotsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeSnapshotsInsert](#computesnapshotsinsert) - Creates a snapshot in the specified project using the data included in the request. For regular snapshot creation, consider using this method instead of disks.createSnapshot, as this method supports more features, such as creating snapshots in a project different from the source disk project.
* [computeSnapshotsList](#computesnapshotslist) - Retrieves the list of Snapshot resources contained within the specified project.
* [computeSnapshotsSetIamPolicy](#computesnapshotssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeSnapshotsSetLabels](#computesnapshotssetlabels) - Sets the labels on a snapshot. To learn more about labels, read the Labeling Resources documentation.
* [computeSnapshotsTestIamPermissions](#computesnapshotstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeSnapshotsDelete

Deletes the specified Snapshot resource. Keep in mind that deleting a single snapshot might not necessarily delete all the data on that snapshot. If any data on the snapshot that is marked for deletion is needed for subsequent snapshots, the data will be moved to the next corresponding snapshot. For more information, see Deleting snapshots.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSnapshotsDeleteRequest;
import org.openapis.openapi.models.operations.ComputeSnapshotsDeleteResponse;
import org.openapis.openapi.models.operations.ComputeSnapshotsDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeSnapshotsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSnapshotsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSnapshotsDeleteRequest req = new ComputeSnapshotsDeleteRequest("officia", "sed") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsam";
                alt = AltEnum.PROTO;
                callback = "quisquam";
                fields = "officiis";
                key = "optio";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "eligendi";
                requestId = "delectus";
                uploadType = "id";
                uploadProtocol = "fuga";
                userIp = "nulla";
            }};            

            ComputeSnapshotsDeleteResponse res = sdk.snapshots.computeSnapshotsDelete(req, new ComputeSnapshotsDeleteSecurity() {{
                option1 = new ComputeSnapshotsDeleteSecurityOption1("porro", "consequuntur") {{
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

## computeSnapshotsGet

Returns the specified Snapshot resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSnapshotsGetRequest;
import org.openapis.openapi.models.operations.ComputeSnapshotsGetResponse;
import org.openapis.openapi.models.operations.ComputeSnapshotsGetSecurity;
import org.openapis.openapi.models.operations.ComputeSnapshotsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSnapshotsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeSnapshotsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSnapshotsGetRequest req = new ComputeSnapshotsGetRequest("labore", "expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reiciendis";
                alt = AltEnum.MEDIA;
                callback = "laborum";
                fields = "consequatur";
                key = "sit";
                oauthToken = "optio";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "ea";
                uploadProtocol = "corporis";
                userIp = "ullam";
            }};            

            ComputeSnapshotsGetResponse res = sdk.snapshots.computeSnapshotsGet(req, new ComputeSnapshotsGetSecurity() {{
                option1 = new ComputeSnapshotsGetSecurityOption1("quia", "quae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.snapshot != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeSnapshotsGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSnapshotsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeSnapshotsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeSnapshotsGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeSnapshotsGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeSnapshotsGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.ComputeSnapshotsGetIamPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSnapshotsGetIamPolicyRequest req = new ComputeSnapshotsGetIamPolicyRequest("repellendus", "sapiente") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "blanditiis";
                alt = AltEnum.JSON;
                callback = "iste";
                fields = "tenetur";
                key = "voluptates";
                oauthToken = "numquam";
                optionsRequestedPolicyVersion = 854011L;
                prettyPrint = false;
                quotaUser = "optio";
                uploadType = "ea";
                uploadProtocol = "earum";
                userIp = "totam";
            }};            

            ComputeSnapshotsGetIamPolicyResponse res = sdk.snapshots.computeSnapshotsGetIamPolicy(req, new ComputeSnapshotsGetIamPolicySecurity() {{
                option1 = new ComputeSnapshotsGetIamPolicySecurityOption1("repellendus", "odit") {{
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

## computeSnapshotsInsert

Creates a snapshot in the specified project using the data included in the request. For regular snapshot creation, consider using this method instead of disks.createSnapshot, as this method supports more features, such as creating snapshots in a project different from the source disk project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSnapshotsInsertRequest;
import org.openapis.openapi.models.operations.ComputeSnapshotsInsertResponse;
import org.openapis.openapi.models.operations.ComputeSnapshotsInsertSecurity;
import org.openapis.openapi.models.operations.ComputeSnapshotsInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSnapshotsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomerEncryptionKey;
import org.openapis.openapi.models.shared.Snapshot;
import org.openapis.openapi.models.shared.SnapshotArchitectureEnum;
import org.openapis.openapi.models.shared.SnapshotSnapshotTypeEnum;
import org.openapis.openapi.models.shared.SnapshotStatusEnum;
import org.openapis.openapi.models.shared.SnapshotStorageBytesStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSnapshotsInsertRequest req = new ComputeSnapshotsInsertRequest("fugiat") {{
                dollarXgafv = XgafvEnum.TWO;
                snapshot = new Snapshot() {{
                    architecture = SnapshotArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                    autoCreated = false;
                    chainName = "eveniet";
                    creationSizeBytes = "pariatur";
                    creationTimestamp = "unde";
                    description = "optio";
                    diskSizeGb = "magnam";
                    downloadBytes = "dicta";
                    id = "saepe";
                    kind = "veritatis";
                    labelFingerprint = "neque";
                    labels = new java.util.HashMap<String, String>() {{
                        put("alias", "sed");
                        put("molestiae", "maxime");
                    }};
                    licenseCodes = new String[]{{
                        add("quo"),
                        add("aut"),
                        add("harum"),
                        add("harum"),
                    }};
                    licenses = new String[]{{
                        add("provident"),
                        add("hic"),
                        add("quasi"),
                    }};
                    locationHint = "dolores";
                    name = "Melba Skiles";
                    satisfiesPzs = false;
                    selfLink = "vitae";
                    snapshotEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "laboriosam";
                        kmsKeyServiceAccount = "iste";
                        rawKey = "odit";
                        rsaEncryptedKey = "aut";
                        sha256 = "laudantium";
                    }};;
                    snapshotType = SnapshotSnapshotTypeEnum.ARCHIVE;
                    sourceDisk = "animi";
                    sourceDiskEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "suscipit";
                        kmsKeyServiceAccount = "ab";
                        rawKey = "commodi";
                        rsaEncryptedKey = "dolorem";
                        sha256 = "ratione";
                    }};;
                    sourceDiskId = "ut";
                    sourceSnapshotSchedulePolicy = "hic";
                    sourceSnapshotSchedulePolicyId = "deleniti";
                    status = SnapshotStatusEnum.CREATING;
                    storageBytes = "repudiandae";
                    storageBytesStatus = SnapshotStorageBytesStatusEnum.UP_TO_DATE;
                    storageLocations = new String[]{{
                        add("quas"),
                        add("consequatur"),
                        add("dicta"),
                    }};
                }};;
                accessToken = "impedit";
                alt = AltEnum.JSON;
                callback = "eaque";
                fields = "fugit";
                key = "fugiat";
                oauthToken = "similique";
                prettyPrint = false;
                quotaUser = "vel";
                requestId = "inventore";
                uploadType = "saepe";
                uploadProtocol = "recusandae";
                userIp = "occaecati";
            }};            

            ComputeSnapshotsInsertResponse res = sdk.snapshots.computeSnapshotsInsert(req, new ComputeSnapshotsInsertSecurity() {{
                option1 = new ComputeSnapshotsInsertSecurityOption1("vel", "corporis") {{
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

## computeSnapshotsList

Retrieves the list of Snapshot resources contained within the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSnapshotsListRequest;
import org.openapis.openapi.models.operations.ComputeSnapshotsListResponse;
import org.openapis.openapi.models.operations.ComputeSnapshotsListSecurity;
import org.openapis.openapi.models.operations.ComputeSnapshotsListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSnapshotsListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeSnapshotsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSnapshotsListRequest req = new ComputeSnapshotsListRequest("doloremque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "minima";
                alt = AltEnum.JSON;
                callback = "nam";
                fields = "alias";
                filter = "inventore";
                key = "dolorem";
                maxResults = 958938L;
                oauthToken = "fugiat";
                orderBy = "vel";
                pageToken = "eum";
                prettyPrint = false;
                quotaUser = "veritatis";
                returnPartialSuccess = false;
                uploadType = "repellendus";
                uploadProtocol = "maxime";
                userIp = "dolore";
            }};            

            ComputeSnapshotsListResponse res = sdk.snapshots.computeSnapshotsList(req, new ComputeSnapshotsListSecurity() {{
                option1 = new ComputeSnapshotsListSecurityOption1("officiis", "rerum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.snapshotList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeSnapshotsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSnapshotsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeSnapshotsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeSnapshotsSetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeSnapshotsSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeSnapshotsSetIamPolicySecurityOption2;
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

            ComputeSnapshotsSetIamPolicyRequest req = new ComputeSnapshotsSetIamPolicyRequest("quibusdam", "illo") {{
                dollarXgafv = XgafvEnum.ONE;
                globalSetPolicyRequest = new GlobalSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "non";
                            condition = new Expr() {{
                                description = "assumenda";
                                expression = "necessitatibus";
                                location = "sed";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("necessitatibus"),
                            }};
                            role = "perferendis";
                        }}),
                        add(new Binding() {{
                            bindingId = "vel";
                            condition = new Expr() {{
                                description = "maiores";
                                expression = "consectetur";
                                location = "vero";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("ex"),
                            }};
                            role = "natus";
                        }}),
                        add(new Binding() {{
                            bindingId = "placeat";
                            condition = new Expr() {{
                                description = "quibusdam";
                                expression = "minima";
                                location = "maxime";
                                title = "Dr.";
                            }};
                            members = new String[]{{
                                add("occaecati"),
                            }};
                            role = "deleniti";
                        }}),
                        add(new Binding() {{
                            bindingId = "cupiditate";
                            condition = new Expr() {{
                                description = "unde";
                                expression = "ipsum";
                                location = "consequuntur";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("fugiat"),
                            }};
                            role = "fugit";
                        }}),
                    }};
                    etag = "repellat";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sunt"),
                                            add("nobis"),
                                            add("praesentium"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("alias"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("nam"),
                                            add("sit"),
                                            add("iusto"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("excepturi"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("illum"),
                                }};
                                service = "dolore";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("labore"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dolorum"),
                                            add("recusandae"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("officia"),
                                            add("reprehenderit"),
                                            add("deleniti"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("error"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("amet"),
                                    add("neque"),
                                    add("tenetur"),
                                }};
                                service = "voluptate";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ipsam"),
                                            add("quaerat"),
                                            add("nisi"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("laboriosam"),
                                }};
                                service = "fugit";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dignissimos"),
                                            add("maiores"),
                                            add("nihil"),
                                            add("doloribus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("ipsum"),
                                    add("amet"),
                                }};
                                service = "veritatis";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "pariatur";
                                condition = new Expr() {{
                                    description = "libero";
                                    expression = "necessitatibus";
                                    location = "magni";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("quod"),
                                    add("voluptas"),
                                    add("cum"),
                                    add("optio"),
                                }};
                                role = "iusto";
                            }}),
                            add(new Binding() {{
                                bindingId = "accusantium";
                                condition = new Expr() {{
                                    description = "iste";
                                    expression = "delectus";
                                    location = "sapiente";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("at"),
                                }};
                                role = "tenetur";
                            }}),
                        }};
                        etag = "similique";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.NO_ACTION;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.IN;
                                        svc = "fuga";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("in"),
                                            add("minima"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "voluptates";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("hic"),
                                            add("alias"),
                                            add("sapiente"),
                                            add("blanditiis"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.IN;
                                        svc = "ad";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("qui"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.IN;
                                        svc = "rerum";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("quaerat"),
                                            add("consequatur"),
                                        }};
                                    }}),
                                }};
                                description = "quia";
                                ins = new String[]{{
                                    add("dolorum"),
                                    add("vero"),
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
                                                    name = "Johnathan Reynolds PhD";
                                                    value = "consectetur";
                                                }}),
                                            }};
                                            field = "aliquam";
                                            metric = "facilis";
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
                                                    name = "Arlene Armstrong";
                                                    value = "delectus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Isaac Ebert DVM";
                                                    value = "quae";
                                                }}),
                                            }};
                                            field = "alias";
                                            metric = "perferendis";
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
                                                    name = "Darrin Carter";
                                                    value = "provident";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Bessie Goyette";
                                                    value = "deleniti";
                                                }}),
                                            }};
                                            field = "nihil";
                                            metric = "iusto";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("veritatis"),
                                    add("cumque"),
                                    add("tempore"),
                                }};
                                permissions = new String[]{{
                                    add("laboriosam"),
                                    add("inventore"),
                                    add("illum"),
                                    add("et"),
                                }};
                            }}),
                        }};
                        version = 333218;
                    }};;
                }};;
                accessToken = "laborum";
                alt = AltEnum.MEDIA;
                callback = "commodi";
                fields = "dolorem";
                key = "dolore";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "autem";
                uploadProtocol = "unde";
                userIp = "ratione";
            }};            

            ComputeSnapshotsSetIamPolicyResponse res = sdk.snapshots.computeSnapshotsSetIamPolicy(req, new ComputeSnapshotsSetIamPolicySecurity() {{
                option1 = new ComputeSnapshotsSetIamPolicySecurityOption1("rerum", "recusandae") {{
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

## computeSnapshotsSetLabels

Sets the labels on a snapshot. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSnapshotsSetLabelsRequest;
import org.openapis.openapi.models.operations.ComputeSnapshotsSetLabelsResponse;
import org.openapis.openapi.models.operations.ComputeSnapshotsSetLabelsSecurity;
import org.openapis.openapi.models.operations.ComputeSnapshotsSetLabelsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSnapshotsSetLabelsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GlobalSetLabelsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSnapshotsSetLabelsRequest req = new ComputeSnapshotsSetLabelsRequest("eligendi", "ab") {{
                dollarXgafv = XgafvEnum.ONE;
                globalSetLabelsRequest = new GlobalSetLabelsRequest() {{
                    labelFingerprint = "laboriosam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("sunt", "modi");
                        put("odio", "quis");
                    }};
                }};;
                accessToken = "iste";
                alt = AltEnum.PROTO;
                callback = "quas";
                fields = "labore";
                key = "quia";
                oauthToken = "aperiam";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "iure";
                uploadProtocol = "ad";
                userIp = "minus";
            }};            

            ComputeSnapshotsSetLabelsResponse res = sdk.snapshots.computeSnapshotsSetLabels(req, new ComputeSnapshotsSetLabelsSecurity() {{
                option1 = new ComputeSnapshotsSetLabelsSecurityOption1("maxime", "ullam") {{
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

## computeSnapshotsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSnapshotsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeSnapshotsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeSnapshotsTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeSnapshotsTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSnapshotsTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeSnapshotsTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSnapshotsTestIamPermissionsRequest req = new ComputeSnapshotsTestIamPermissionsRequest("nihil", "provident") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("suscipit"),
                        add("provident"),
                    }};
                }};;
                accessToken = "quod";
                alt = AltEnum.MEDIA;
                callback = "itaque";
                fields = "natus";
                key = "ullam";
                oauthToken = "soluta";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "magni";
                uploadProtocol = "nobis";
                userIp = "odit";
            }};            

            ComputeSnapshotsTestIamPermissionsResponse res = sdk.snapshots.computeSnapshotsTestIamPermissions(req, new ComputeSnapshotsTestIamPermissionsSecurity() {{
                option1 = new ComputeSnapshotsTestIamPermissionsSecurityOption1("et", "illo") {{
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
