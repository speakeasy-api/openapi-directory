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

            ComputeSnapshotsDeleteRequest req = new ComputeSnapshotsDeleteRequest("architecto", "consequatur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "corrupti";
                alt = AltEnum.MEDIA;
                callback = "consectetur";
                fields = "nobis";
                key = "alias";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "quos";
                requestId = "quis";
                uploadType = "nostrum";
                uploadProtocol = "amet";
                userIp = "quisquam";
            }};            

            ComputeSnapshotsDeleteResponse res = sdk.snapshots.computeSnapshotsDelete(req, new ComputeSnapshotsDeleteSecurity() {{
                option1 = new ComputeSnapshotsDeleteSecurityOption1("officiis", "assumenda") {{
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

            ComputeSnapshotsGetRequest req = new ComputeSnapshotsGetRequest("voluptatibus", "inventore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "autem";
                alt = AltEnum.JSON;
                callback = "autem";
                fields = "aliquid";
                key = "ipsum";
                oauthToken = "animi";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "sequi";
                uploadProtocol = "expedita";
                userIp = "sint";
            }};            

            ComputeSnapshotsGetResponse res = sdk.snapshots.computeSnapshotsGet(req, new ComputeSnapshotsGetSecurity() {{
                option1 = new ComputeSnapshotsGetSecurityOption1("veritatis", "consequatur") {{
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

            ComputeSnapshotsGetIamPolicyRequest req = new ComputeSnapshotsGetIamPolicyRequest("blanditiis", "minus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sequi";
                alt = AltEnum.JSON;
                callback = "libero";
                fields = "ut";
                key = "vel";
                oauthToken = "ullam";
                optionsRequestedPolicyVersion = 571789L;
                prettyPrint = false;
                quotaUser = "dignissimos";
                uploadType = "sed";
                uploadProtocol = "tempora";
                userIp = "fuga";
            }};            

            ComputeSnapshotsGetIamPolicyResponse res = sdk.snapshots.computeSnapshotsGetIamPolicy(req, new ComputeSnapshotsGetIamPolicySecurity() {{
                option1 = new ComputeSnapshotsGetIamPolicySecurityOption1("atque", "voluptas") {{
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
import org.openapis.openapi.models.shared.GuestOsFeature;
import org.openapis.openapi.models.shared.GuestOsFeatureTypeEnum;
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

            ComputeSnapshotsInsertRequest req = new ComputeSnapshotsInsertRequest("optio") {{
                dollarXgafv = XgafvEnum.ONE;
                snapshot = new Snapshot() {{
                    architecture = SnapshotArchitectureEnum.ARM64;
                    autoCreated = false;
                    chainName = "rerum";
                    creationSizeBytes = "sunt";
                    creationTimestamp = "qui";
                    description = "mollitia";
                    diskSizeGb = "totam";
                    downloadBytes = "expedita";
                    guestFlush = false;
                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.MULTI_IP_SUBNET;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.SEV_LIVE_MIGRATABLE;
                        }}),
                    }};
                    id = "temporibus";
                    kind = "sint";
                    labelFingerprint = "incidunt";
                    labels = new java.util.HashMap<String, String>() {{
                        put("tempore", "nobis");
                        put("amet", "modi");
                        put("vel", "soluta");
                    }};
                    licenseCodes = new String[]{{
                        add("error"),
                        add("modi"),
                        add("iste"),
                        add("soluta"),
                    }};
                    licenses = new String[]{{
                        add("ipsam"),
                    }};
                    locationHint = "quod";
                    maxRetentionDays = 999802;
                    name = "Dr. Francis Rippin";
                    satisfiesPzs = false;
                    selfLink = "ab";
                    selfLinkWithId = "nam";
                    snapshotEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "deserunt";
                        kmsKeyServiceAccount = "a";
                        rawKey = "qui";
                        rsaEncryptedKey = "est";
                        sha256 = "officia";
                    }};;
                    snapshotType = SnapshotSnapshotTypeEnum.STANDARD;
                    sourceDisk = "ipsam";
                    sourceDiskEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "optio";
                        kmsKeyServiceAccount = "nulla";
                        rawKey = "unde";
                        rsaEncryptedKey = "corporis";
                        sha256 = "fuga";
                    }};;
                    sourceDiskForRecoveryCheckpoint = "illo";
                    sourceDiskId = "quas";
                    sourceInstantSnapshot = "itaque";
                    sourceInstantSnapshotId = "incidunt";
                    sourceSnapshotSchedulePolicy = "unde";
                    sourceSnapshotSchedulePolicyId = "eligendi";
                    status = SnapshotStatusEnum.UPLOADING;
                    storageBytes = "voluptate";
                    storageBytesStatus = SnapshotStorageBytesStatusEnum.UP_TO_DATE;
                    storageLocations = new String[]{{
                        add("libero"),
                        add("alias"),
                    }};
                    userLicenses = new String[]{{
                        add("ullam"),
                    }};
                }};;
                accessToken = "error";
                alt = AltEnum.PROTO;
                callback = "amet";
                fields = "aperiam";
                key = "quis";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "accusantium";
                requestId = "harum";
                uploadType = "quis";
                uploadProtocol = "officia";
                userIp = "eveniet";
            }};            

            ComputeSnapshotsInsertResponse res = sdk.snapshots.computeSnapshotsInsert(req, new ComputeSnapshotsInsertSecurity() {{
                option1 = new ComputeSnapshotsInsertSecurityOption1("iste", "voluptas") {{
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

            ComputeSnapshotsListRequest req = new ComputeSnapshotsListRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "omnis";
                alt = AltEnum.JSON;
                callback = "dolorum";
                fields = "in";
                filter = "rem";
                key = "ex";
                maxResults = 628411L;
                oauthToken = "libero";
                orderBy = "aut";
                pageToken = "assumenda";
                prettyPrint = false;
                quotaUser = "molestiae";
                returnPartialSuccess = false;
                uploadType = "aliquid";
                uploadProtocol = "autem";
                userIp = "amet";
            }};            

            ComputeSnapshotsListResponse res = sdk.snapshots.computeSnapshotsList(req, new ComputeSnapshotsListSecurity() {{
                option1 = new ComputeSnapshotsListSecurityOption1("quo", "molestiae") {{
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

            ComputeSnapshotsSetIamPolicyRequest req = new ComputeSnapshotsSetIamPolicyRequest("amet", "saepe") {{
                dollarXgafv = XgafvEnum.TWO;
                globalSetPolicyRequest = new GlobalSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "blanditiis";
                            condition = new Expr() {{
                                description = "illo";
                                expression = "est";
                                location = "laudantium";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("facere"),
                                add("cupiditate"),
                                add("corrupti"),
                            }};
                            role = "facilis";
                        }}),
                        add(new Binding() {{
                            bindingId = "cupiditate";
                            condition = new Expr() {{
                                description = "in";
                                expression = "neque";
                                location = "dolorum";
                                title = "Dr.";
                            }};
                            members = new String[]{{
                                add("incidunt"),
                                add("necessitatibus"),
                            }};
                            role = "repellendus";
                        }}),
                        add(new Binding() {{
                            bindingId = "similique";
                            condition = new Expr() {{
                                description = "eveniet";
                                expression = "debitis";
                                location = "quod";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("reiciendis"),
                                add("qui"),
                                add("sapiente"),
                                add("sequi"),
                            }};
                            role = "sit";
                        }}),
                    }};
                    etag = "at";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sunt"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("unde"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("officia"),
                                    add("a"),
                                    add("facere"),
                                }};
                                service = "natus";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "laboriosam";
                                condition = new Expr() {{
                                    description = "aperiam";
                                    expression = "omnis";
                                    location = "delectus";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("maiores"),
                                    add("dolor"),
                                    add("quidem"),
                                }};
                                role = "suscipit";
                            }}),
                            add(new Binding() {{
                                bindingId = "quasi";
                                condition = new Expr() {{
                                    description = "nemo";
                                    expression = "harum";
                                    location = "quas";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("consequuntur"),
                                    add("a"),
                                    add("officiis"),
                                    add("explicabo"),
                                }};
                                role = "possimus";
                            }}),
                            add(new Binding() {{
                                bindingId = "reprehenderit";
                                condition = new Expr() {{
                                    description = "voluptatibus";
                                    expression = "nemo";
                                    location = "laboriosam";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("harum"),
                                }};
                                role = "quasi";
                            }}),
                        }};
                        etag = "nihil";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "voluptate";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("quisquam"),
                                            add("magni"),
                                            add("rem"),
                                            add("placeat"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "deleniti";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("enim"),
                                            add("excepturi"),
                                            add("consequuntur"),
                                            add("enim"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "enim";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("similique"),
                                            add("eius"),
                                            add("quod"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "ratione";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("accusamus"),
                                            add("illo"),
                                        }};
                                    }}),
                                }};
                                description = "itaque";
                                ins = new String[]{{
                                    add("facere"),
                                    add("blanditiis"),
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
                                                    name = "Jean Corwin";
                                                    value = "sunt";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Kenny Little";
                                                    value = "illum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Fernando Mueller DVM";
                                                    value = "possimus";
                                                }}),
                                            }};
                                            field = "nemo";
                                            metric = "commodi";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Holly Emmerich";
                                                    value = "sit";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Merle Fritsch V";
                                                    value = "officia";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dr. Lula Corwin";
                                                    value = "quidem";
                                                }}),
                                            }};
                                            field = "incidunt";
                                            metric = "ex";
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
                                                    name = "Rick Harvey";
                                                    value = "tempora";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Lindsay Runte I";
                                                    value = "minus";
                                                }}),
                                            }};
                                            field = "ut";
                                            metric = "fugiat";
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
                                                    name = "Mrs. Irving Hoppe MD";
                                                    value = "a";
                                                }}),
                                            }};
                                            field = "sed";
                                            metric = "quos";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("impedit"),
                                    add("sed"),
                                    add("sed"),
                                    add("perspiciatis"),
                                }};
                                permissions = new String[]{{
                                    add("nisi"),
                                    add("minima"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "neque";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("autem"),
                                        }};
                                    }}),
                                }};
                                description = "eveniet";
                                ins = new String[]{{
                                    add("vitae"),
                                    add("atque"),
                                    add("dignissimos"),
                                    add("sunt"),
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
                                                    name = "Darryl Baumbach";
                                                    value = "voluptate";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Melissa Gleichner";
                                                    value = "soluta";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ismael Marks";
                                                    value = "occaecati";
                                                }}),
                                            }};
                                            field = "labore";
                                            metric = "soluta";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Gregg Waters Jr.";
                                                    value = "dolor";
                                                }}),
                                            }};
                                            field = "eligendi";
                                            metric = "nostrum";
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
                                                    name = "Ignacio King";
                                                    value = "asperiores";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mrs. Nicholas Koelpin";
                                                    value = "dolore";
                                                }}),
                                            }};
                                            field = "maxime";
                                            metric = "reiciendis";
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
                                                    name = "Gwendolyn Bosco";
                                                    value = "vitae";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Alonzo Simonis";
                                                    value = "consequatur";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Rebecca Schaden";
                                                    value = "sequi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Lisa Buckridge";
                                                    value = "fugit";
                                                }}),
                                            }};
                                            field = "facilis";
                                            metric = "modi";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("suscipit"),
                                }};
                                permissions = new String[]{{
                                    add("quos"),
                                    add("nostrum"),
                                    add("nulla"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "accusamus";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("officia"),
                                            add("ea"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "veniam";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("velit"),
                                            add("perferendis"),
                                        }};
                                    }}),
                                }};
                                description = "rerum";
                                ins = new String[]{{
                                    add("placeat"),
                                    add("dolor"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dexter Cormier";
                                                    value = "iusto";
                                                }}),
                                            }};
                                            field = "vel";
                                            metric = "neque";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Alonzo Simonis";
                                                    value = "commodi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Leon Kassulke Jr.";
                                                    value = "est";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Minnie Kuphal";
                                                    value = "accusantium";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jennifer Cartwright";
                                                    value = "provident";
                                                }}),
                                            }};
                                            field = "ex";
                                            metric = "autem";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("autem"),
                                    add("eos"),
                                }};
                                permissions = new String[]{{
                                    add("non"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "inventore";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("totam"),
                                            add("provident"),
                                            add("quisquam"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.IN;
                                        svc = "architecto";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("atque"),
                                            add("maiores"),
                                            add("optio"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "laboriosam";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("non"),
                                            add("voluptates"),
                                            add("ullam"),
                                        }};
                                    }}),
                                }};
                                description = "excepturi";
                                ins = new String[]{{
                                    add("quasi"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
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
                                                    name = "Garry Connelly";
                                                    value = "enim";
                                                }}),
                                            }};
                                            field = "illo";
                                            metric = "provident";
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
                                                    name = "Paula Dickinson";
                                                    value = "quisquam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Antonio Hoeger";
                                                    value = "sunt";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Roosevelt Medhurst PhD";
                                                    value = "quo";
                                                }}),
                                            }};
                                            field = "recusandae";
                                            metric = "quod";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("vitae"),
                                }};
                                permissions = new String[]{{
                                    add("deserunt"),
                                }};
                            }}),
                        }};
                        version = 677861;
                    }};;
                }};;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "tempora";
                fields = "ad";
                key = "laboriosam";
                oauthToken = "incidunt";
                prettyPrint = false;
                quotaUser = "autem";
                uploadType = "voluptas";
                uploadProtocol = "saepe";
                userIp = "esse";
            }};            

            ComputeSnapshotsSetIamPolicyResponse res = sdk.snapshots.computeSnapshotsSetIamPolicy(req, new ComputeSnapshotsSetIamPolicySecurity() {{
                option1 = new ComputeSnapshotsSetIamPolicySecurityOption1("magni", "velit") {{
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

            ComputeSnapshotsSetLabelsRequest req = new ComputeSnapshotsSetLabelsRequest("alias", "illo") {{
                dollarXgafv = XgafvEnum.ONE;
                globalSetLabelsRequest = new GlobalSetLabelsRequest() {{
                    labelFingerprint = "magni";
                    labels = new java.util.HashMap<String, String>() {{
                        put("omnis", "sint");
                    }};
                }};;
                accessToken = "vitae";
                alt = AltEnum.MEDIA;
                callback = "omnis";
                fields = "atque";
                key = "adipisci";
                oauthToken = "sunt";
                prettyPrint = false;
                quotaUser = "repudiandae";
                uploadType = "cupiditate";
                uploadProtocol = "harum";
                userIp = "nesciunt";
            }};            

            ComputeSnapshotsSetLabelsResponse res = sdk.snapshots.computeSnapshotsSetLabels(req, new ComputeSnapshotsSetLabelsSecurity() {{
                option1 = new ComputeSnapshotsSetLabelsSecurityOption1("quos", "dolor") {{
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

            ComputeSnapshotsTestIamPermissionsRequest req = new ComputeSnapshotsTestIamPermissionsRequest("rerum", "harum") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("ipsam"),
                        add("temporibus"),
                        add("autem"),
                        add("facilis"),
                    }};
                }};;
                accessToken = "accusamus";
                alt = AltEnum.PROTO;
                callback = "temporibus";
                fields = "vero";
                key = "dolorum";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "deleniti";
                uploadProtocol = "accusamus";
                userIp = "dolorum";
            }};            

            ComputeSnapshotsTestIamPermissionsResponse res = sdk.snapshots.computeSnapshotsTestIamPermissions(req, new ComputeSnapshotsTestIamPermissionsSecurity() {{
                option1 = new ComputeSnapshotsTestIamPermissionsSecurityOption1("sit", "debitis") {{
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
