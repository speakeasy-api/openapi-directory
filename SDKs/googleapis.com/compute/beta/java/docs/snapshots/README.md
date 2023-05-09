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

            ComputeSnapshotsDeleteRequest req = new ComputeSnapshotsDeleteRequest("quod", "optio") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "perspiciatis";
                alt = AltEnum.PROTO;
                callback = "minima";
                fields = "itaque";
                key = "ratione";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "odit";
                requestId = "nisi";
                uploadType = "architecto";
                uploadProtocol = "dolor";
                userIp = "natus";
            }};            

            ComputeSnapshotsDeleteResponse res = sdk.snapshots.computeSnapshotsDelete(req, new ComputeSnapshotsDeleteSecurity() {{
                option1 = new ComputeSnapshotsDeleteSecurityOption1("quisquam", "aliquam") {{
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

            ComputeSnapshotsGetRequest req = new ComputeSnapshotsGetRequest("dolore", "cum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sed";
                alt = AltEnum.JSON;
                callback = "alias";
                fields = "ipsam";
                key = "minima";
                oauthToken = "ratione";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "expedita";
                uploadProtocol = "molestias";
                userIp = "sed";
            }};            

            ComputeSnapshotsGetResponse res = sdk.snapshots.computeSnapshotsGet(req, new ComputeSnapshotsGetSecurity() {{
                option1 = new ComputeSnapshotsGetSecurityOption1("ipsum", "sed") {{
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

            ComputeSnapshotsGetIamPolicyRequest req = new ComputeSnapshotsGetIamPolicyRequest("aspernatur", "omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "architecto";
                alt = AltEnum.MEDIA;
                callback = "fugiat";
                fields = "eaque";
                key = "voluptate";
                oauthToken = "neque";
                optionsRequestedPolicyVersion = 596257L;
                prettyPrint = false;
                quotaUser = "quas";
                uploadType = "doloremque";
                uploadProtocol = "aperiam";
                userIp = "doloremque";
            }};            

            ComputeSnapshotsGetIamPolicyResponse res = sdk.snapshots.computeSnapshotsGetIamPolicy(req, new ComputeSnapshotsGetIamPolicySecurity() {{
                option1 = new ComputeSnapshotsGetIamPolicySecurityOption1("amet", "assumenda") {{
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

            ComputeSnapshotsInsertRequest req = new ComputeSnapshotsInsertRequest("aut") {{
                dollarXgafv = XgafvEnum.ONE;
                snapshot = new Snapshot() {{
                    architecture = SnapshotArchitectureEnum.ARM64;
                    autoCreated = false;
                    chainName = "sunt";
                    creationSizeBytes = "explicabo";
                    creationTimestamp = "autem";
                    description = "ipsa";
                    diskSizeGb = "ducimus";
                    downloadBytes = "ipsam";
                    guestFlush = false;
                    id = "nihil";
                    kind = "distinctio";
                    labelFingerprint = "quidem";
                    labels = new java.util.HashMap<String, String>() {{
                        put("alias", "impedit");
                        put("temporibus", "qui");
                        put("veritatis", "tempore");
                        put("veritatis", "nostrum");
                    }};
                    licenseCodes = new String[]{{
                        add("ratione"),
                        add("alias"),
                        add("similique"),
                        add("neque"),
                    }};
                    licenses = new String[]{{
                        add("consequatur"),
                        add("alias"),
                    }};
                    locationHint = "consectetur";
                    name = "Angelo Donnelly";
                    satisfiesPzs = false;
                    selfLink = "architecto";
                    snapshotEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "autem";
                        kmsKeyServiceAccount = "deserunt";
                        rawKey = "quidem";
                        rsaEncryptedKey = "eaque";
                        sha256 = "corporis";
                    }};;
                    snapshotType = SnapshotSnapshotTypeEnum.STANDARD;
                    sourceDisk = "repellat";
                    sourceDiskEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "laboriosam";
                        kmsKeyServiceAccount = "error";
                        rawKey = "officiis";
                        rsaEncryptedKey = "vitae";
                        sha256 = "eos";
                    }};;
                    sourceDiskId = "autem";
                    sourceSnapshotSchedulePolicy = "rem";
                    sourceSnapshotSchedulePolicyId = "iste";
                    status = SnapshotStatusEnum.FAILED;
                    storageBytes = "voluptatibus";
                    storageBytesStatus = SnapshotStorageBytesStatusEnum.UP_TO_DATE;
                    storageLocations = new String[]{{
                        add("cupiditate"),
                        add("nobis"),
                        add("similique"),
                    }};
                    userLicenses = new String[]{{
                        add("vel"),
                        add("itaque"),
                        add("totam"),
                    }};
                }};;
                accessToken = "quae";
                alt = AltEnum.MEDIA;
                callback = "corrupti";
                fields = "molestias";
                key = "ipsum";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "illo";
                requestId = "mollitia";
                uploadType = "repudiandae";
                uploadProtocol = "nisi";
                userIp = "voluptates";
            }};            

            ComputeSnapshotsInsertResponse res = sdk.snapshots.computeSnapshotsInsert(req, new ComputeSnapshotsInsertSecurity() {{
                option1 = new ComputeSnapshotsInsertSecurityOption1("reiciendis", "esse") {{
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

            ComputeSnapshotsListRequest req = new ComputeSnapshotsListRequest("suscipit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptate";
                alt = AltEnum.JSON;
                callback = "alias";
                fields = "enim";
                filter = "aliquid";
                key = "totam";
                maxResults = 170171L;
                oauthToken = "consequatur";
                orderBy = "excepturi";
                pageToken = "praesentium";
                prettyPrint = false;
                quotaUser = "magnam";
                returnPartialSuccess = false;
                uploadType = "deleniti";
                uploadProtocol = "perspiciatis";
                userIp = "libero";
            }};            

            ComputeSnapshotsListResponse res = sdk.snapshots.computeSnapshotsList(req, new ComputeSnapshotsListSecurity() {{
                option1 = new ComputeSnapshotsListSecurityOption1("debitis", "nesciunt") {{
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

            ComputeSnapshotsSetIamPolicyRequest req = new ComputeSnapshotsSetIamPolicyRequest("dolores", "impedit") {{
                dollarXgafv = XgafvEnum.ONE;
                globalSetPolicyRequest = new GlobalSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "eveniet";
                            condition = new Expr() {{
                                description = "vitae";
                                expression = "ratione";
                                location = "fugiat";
                                title = "Mrs.";
                            }};
                            members = new String[]{{
                                add("nulla"),
                            }};
                            role = "dolore";
                        }}),
                        add(new Binding() {{
                            bindingId = "error";
                            condition = new Expr() {{
                                description = "voluptate";
                                expression = "similique";
                                location = "ipsum";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("pariatur"),
                                add("laborum"),
                                add("commodi"),
                                add("nisi"),
                            }};
                            role = "ullam";
                        }}),
                        add(new Binding() {{
                            bindingId = "sint";
                            condition = new Expr() {{
                                description = "est";
                                expression = "perspiciatis";
                                location = "quod";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("debitis"),
                            }};
                            role = "quae";
                        }}),
                        add(new Binding() {{
                            bindingId = "quod";
                            condition = new Expr() {{
                                description = "facere";
                                expression = "porro";
                                location = "hic";
                                title = "Dr.";
                            }};
                            members = new String[]{{
                                add("enim"),
                                add("asperiores"),
                                add("fuga"),
                                add("sapiente"),
                            }};
                            role = "perspiciatis";
                        }}),
                    }};
                    etag = "cum";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("nemo"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ducimus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("beatae"),
                                            add("praesentium"),
                                            add("saepe"),
                                            add("quos"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("consequuntur"),
                                    add("ex"),
                                    add("minima"),
                                }};
                                service = "aliquid";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quo"),
                                            add("quibusdam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("impedit"),
                                    add("aperiam"),
                                    add("reiciendis"),
                                    add("ullam"),
                                }};
                                service = "nesciunt";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "mollitia";
                                condition = new Expr() {{
                                    description = "dolor";
                                    expression = "aliquid";
                                    location = "saepe";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("praesentium"),
                                    add("excepturi"),
                                    add("in"),
                                }};
                                role = "aliquid";
                            }}),
                            add(new Binding() {{
                                bindingId = "voluptatum";
                                condition = new Expr() {{
                                    description = "nihil";
                                    expression = "illum";
                                    location = "iure";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("explicabo"),
                                    add("sit"),
                                    add("hic"),
                                }};
                                role = "suscipit";
                            }}),
                            add(new Binding() {{
                                bindingId = "corrupti";
                                condition = new Expr() {{
                                    description = "cupiditate";
                                    expression = "aliquid";
                                    location = "adipisci";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("dignissimos"),
                                    add("culpa"),
                                    add("quisquam"),
                                    add("esse"),
                                }};
                                role = "ipsa";
                            }}),
                        }};
                        etag = "sapiente";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.NO_ACTION;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "officia";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("sint"),
                                        }};
                                    }}),
                                }};
                                description = "voluptatibus";
                                ins = new String[]{{
                                    add("molestiae"),
                                    add("vel"),
                                    add("expedita"),
                                    add("sit"),
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
                                                    name = "Dwayne Moore";
                                                    value = "possimus";
                                                }}),
                                            }};
                                            field = "cum";
                                            metric = "saepe";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("repudiandae"),
                                    add("corrupti"),
                                    add("vitae"),
                                    add("cum"),
                                }};
                                permissions = new String[]{{
                                    add("fugiat"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "reprehenderit";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("nam"),
                                            add("temporibus"),
                                            add("harum"),
                                        }};
                                    }}),
                                }};
                                description = "occaecati";
                                ins = new String[]{{
                                    add("reiciendis"),
                                    add("commodi"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
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
                                                    name = "Laura Deckow";
                                                    value = "velit";
                                                }}),
                                            }};
                                            field = "deleniti";
                                            metric = "distinctio";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("consequuntur"),
                                }};
                                permissions = new String[]{{
                                    add("quo"),
                                    add("consectetur"),
                                    add("tempora"),
                                }};
                            }}),
                        }};
                        version = 660540;
                    }};;
                }};;
                accessToken = "cum";
                alt = AltEnum.PROTO;
                callback = "sed";
                fields = "animi";
                key = "beatae";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "inventore";
                uploadProtocol = "quaerat";
                userIp = "quae";
            }};            

            ComputeSnapshotsSetIamPolicyResponse res = sdk.snapshots.computeSnapshotsSetIamPolicy(req, new ComputeSnapshotsSetIamPolicySecurity() {{
                option1 = new ComputeSnapshotsSetIamPolicySecurityOption1("architecto", "recusandae") {{
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

            ComputeSnapshotsSetLabelsRequest req = new ComputeSnapshotsSetLabelsRequest("ipsam", "mollitia") {{
                dollarXgafv = XgafvEnum.ONE;
                globalSetLabelsRequest = new GlobalSetLabelsRequest() {{
                    labelFingerprint = "officiis";
                    labels = new java.util.HashMap<String, String>() {{
                        put("atque", "fuga");
                        put("enim", "dolorum");
                        put("reprehenderit", "perferendis");
                        put("et", "laudantium");
                    }};
                }};;
                accessToken = "nesciunt";
                alt = AltEnum.JSON;
                callback = "ad";
                fields = "tempore";
                key = "incidunt";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "molestiae";
                uploadProtocol = "laborum";
                userIp = "molestiae";
            }};            

            ComputeSnapshotsSetLabelsResponse res = sdk.snapshots.computeSnapshotsSetLabels(req, new ComputeSnapshotsSetLabelsSecurity() {{
                option1 = new ComputeSnapshotsSetLabelsSecurityOption1("fuga", "nisi") {{
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

            ComputeSnapshotsTestIamPermissionsRequest req = new ComputeSnapshotsTestIamPermissionsRequest("odit", "excepturi") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("amet"),
                        add("sequi"),
                        add("dignissimos"),
                    }};
                }};;
                accessToken = "vitae";
                alt = AltEnum.MEDIA;
                callback = "quasi";
                fields = "sit";
                key = "nemo";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "cumque";
                uploadType = "tempore";
                uploadProtocol = "nihil";
                userIp = "sequi";
            }};            

            ComputeSnapshotsTestIamPermissionsResponse res = sdk.snapshots.computeSnapshotsTestIamPermissions(req, new ComputeSnapshotsTestIamPermissionsSecurity() {{
                option1 = new ComputeSnapshotsTestIamPermissionsSecurityOption1("quas", "voluptatibus") {{
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
