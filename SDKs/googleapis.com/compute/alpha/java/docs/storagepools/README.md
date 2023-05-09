# storagePools

### Available Operations

* [computeStoragePoolsAggregatedList](#computestoragepoolsaggregatedlist) - Retrieves an aggregated list of storage pools.
* [computeStoragePoolsDelete](#computestoragepoolsdelete) - Deletes the specified storage pool. Deleting a storagePool removes its data permanently and is irreversible. However, deleting a storagePool does not delete any snapshots previously made from the storagePool. You must separately delete snapshots.
* [computeStoragePoolsGet](#computestoragepoolsget) - Returns a specified storage pool. Gets a list of available storage pools by making a list() request.
* [computeStoragePoolsGetIamPolicy](#computestoragepoolsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeStoragePoolsInsert](#computestoragepoolsinsert) - Creates a storage pool in the specified project using the data in the request.
* [computeStoragePoolsList](#computestoragepoolslist) - Retrieves a list of storage pools contained within the specified zone.
* [computeStoragePoolsSetIamPolicy](#computestoragepoolssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeStoragePoolsSetLabels](#computestoragepoolssetlabels) - Sets the labels on a storage pools. To learn more about labels, read the Labeling Resources documentation.
* [computeStoragePoolsTestIamPermissions](#computestoragepoolstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeStoragePoolsUpdate](#computestoragepoolsupdate) - Updates the specified storagePool with the data included in the request. The update is performed only on selected fields included as part of update-mask. Only the following fields can be modified: size_tb and provisioned_iops.

## computeStoragePoolsAggregatedList

Retrieves an aggregated list of storage pools.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeStoragePoolsAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeStoragePoolsAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeStoragePoolsAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeStoragePoolsAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeStoragePoolsAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeStoragePoolsAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeStoragePoolsAggregatedListRequest req = new ComputeStoragePoolsAggregatedListRequest("tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quae";
                alt = AltEnum.PROTO;
                callback = "ipsum";
                fields = "libero";
                filter = "ratione";
                includeAllScopes = false;
                key = "natus";
                maxResults = 813042L;
                oauthToken = "laborum";
                orderBy = "quas";
                pageToken = "asperiores";
                prettyPrint = false;
                quotaUser = "aliquam";
                returnPartialSuccess = false;
                uploadType = "neque";
                uploadProtocol = "repellendus";
                userIp = "harum";
            }};            

            ComputeStoragePoolsAggregatedListResponse res = sdk.storagePools.computeStoragePoolsAggregatedList(req, new ComputeStoragePoolsAggregatedListSecurity() {{
                option1 = new ComputeStoragePoolsAggregatedListSecurityOption1("fugit", "laborum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.storagePoolAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeStoragePoolsDelete

Deletes the specified storage pool. Deleting a storagePool removes its data permanently and is irreversible. However, deleting a storagePool does not delete any snapshots previously made from the storagePool. You must separately delete snapshots.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeStoragePoolsDeleteRequest;
import org.openapis.openapi.models.operations.ComputeStoragePoolsDeleteResponse;
import org.openapis.openapi.models.operations.ComputeStoragePoolsDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeStoragePoolsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeStoragePoolsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeStoragePoolsDeleteRequest req = new ComputeStoragePoolsDeleteRequest("minus", "quasi", "minima") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ad";
                alt = AltEnum.MEDIA;
                callback = "repellendus";
                fields = "consectetur";
                key = "iusto";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "consectetur";
                requestId = "ea";
                uploadType = "earum";
                uploadProtocol = "ipsum";
                userIp = "repellendus";
            }};            

            ComputeStoragePoolsDeleteResponse res = sdk.storagePools.computeStoragePoolsDelete(req, new ComputeStoragePoolsDeleteSecurity() {{
                option1 = new ComputeStoragePoolsDeleteSecurityOption1("quia", "perferendis") {{
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

## computeStoragePoolsGet

Returns a specified storage pool. Gets a list of available storage pools by making a list() request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeStoragePoolsGetRequest;
import org.openapis.openapi.models.operations.ComputeStoragePoolsGetResponse;
import org.openapis.openapi.models.operations.ComputeStoragePoolsGetSecurity;
import org.openapis.openapi.models.operations.ComputeStoragePoolsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeStoragePoolsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeStoragePoolsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeStoragePoolsGetRequest req = new ComputeStoragePoolsGetRequest("at", "aut", "nisi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laborum";
                alt = AltEnum.PROTO;
                callback = "quo";
                fields = "vel";
                key = "libero";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "fugit";
                uploadProtocol = "tenetur";
                userIp = "dolor";
            }};            

            ComputeStoragePoolsGetResponse res = sdk.storagePools.computeStoragePoolsGet(req, new ComputeStoragePoolsGetSecurity() {{
                option1 = new ComputeStoragePoolsGetSecurityOption1("corrupti", "enim") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.storagePool != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeStoragePoolsGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeStoragePoolsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeStoragePoolsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeStoragePoolsGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeStoragePoolsGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeStoragePoolsGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.ComputeStoragePoolsGetIamPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeStoragePoolsGetIamPolicyRequest req = new ComputeStoragePoolsGetIamPolicyRequest("voluptates", "sapiente", "illo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ad";
                alt = AltEnum.PROTO;
                callback = "culpa";
                fields = "animi";
                key = "reiciendis";
                oauthToken = "saepe";
                optionsRequestedPolicyVersion = 858024L;
                prettyPrint = false;
                quotaUser = "facere";
                uploadType = "quis";
                uploadProtocol = "mollitia";
                userIp = "iusto";
            }};            

            ComputeStoragePoolsGetIamPolicyResponse res = sdk.storagePools.computeStoragePoolsGetIamPolicy(req, new ComputeStoragePoolsGetIamPolicySecurity() {{
                option1 = new ComputeStoragePoolsGetIamPolicySecurityOption1("et", "quia") {{
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

## computeStoragePoolsInsert

Creates a storage pool in the specified project using the data in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeStoragePoolsInsertRequest;
import org.openapis.openapi.models.operations.ComputeStoragePoolsInsertResponse;
import org.openapis.openapi.models.operations.ComputeStoragePoolsInsertSecurity;
import org.openapis.openapi.models.operations.ComputeStoragePoolsInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeStoragePoolsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.StoragePool;
import org.openapis.openapi.models.shared.StoragePoolResourceStatus;
import org.openapis.openapi.models.shared.StoragePoolStateEnum;
import org.openapis.openapi.models.shared.StoragePoolTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeStoragePoolsInsertRequest req = new ComputeStoragePoolsInsertRequest("consequuntur", "repellendus") {{
                dollarXgafv = XgafvEnum.ONE;
                storagePool = new StoragePool() {{
                    creationTimestamp = "quo";
                    description = "est";
                    id = "iure";
                    kind = "quibusdam";
                    labelFingerprint = "eum";
                    labels = new java.util.HashMap<String, String>() {{
                        put("explicabo", "quo");
                    }};
                    name = "Sergio Dietrich";
                    provisionedIops = "repudiandae";
                    resourceStatus = new StoragePoolResourceStatus() {{
                        aggregateDiskProvisionedIops = "adipisci";
                        aggregateDiskSizeGb = "sequi";
                        lastResizeTimestamp = "sunt";
                        maxAggregateDiskSizeGb = "molestiae";
                        numberOfDisks = "libero";
                        usedBytes = "harum";
                        usedReducedBytes = "molestiae";
                    }};;
                    selfLink = "maiores";
                    selfLinkWithId = "repellat";
                    sizeGb = "fugit";
                    state = StoragePoolStateEnum.FAILED;
                    type = StoragePoolTypeEnum.SSD;
                    zone = "repudiandae";
                }};;
                accessToken = "eveniet";
                alt = AltEnum.PROTO;
                callback = "perspiciatis";
                fields = "dolores";
                key = "quidem";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "veniam";
                requestId = "quo";
                uploadType = "doloremque";
                uploadProtocol = "earum";
                userIp = "eos";
            }};            

            ComputeStoragePoolsInsertResponse res = sdk.storagePools.computeStoragePoolsInsert(req, new ComputeStoragePoolsInsertSecurity() {{
                option1 = new ComputeStoragePoolsInsertSecurityOption1("libero", "temporibus") {{
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

## computeStoragePoolsList

Retrieves a list of storage pools contained within the specified zone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeStoragePoolsListRequest;
import org.openapis.openapi.models.operations.ComputeStoragePoolsListResponse;
import org.openapis.openapi.models.operations.ComputeStoragePoolsListSecurity;
import org.openapis.openapi.models.operations.ComputeStoragePoolsListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeStoragePoolsListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeStoragePoolsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeStoragePoolsListRequest req = new ComputeStoragePoolsListRequest("ducimus", "ad") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nemo";
                alt = AltEnum.MEDIA;
                callback = "reiciendis";
                fields = "labore";
                filter = "nulla";
                key = "tempore";
                maxResults = 11902L;
                oauthToken = "quis";
                orderBy = "in";
                pageToken = "et";
                prettyPrint = false;
                quotaUser = "quasi";
                returnPartialSuccess = false;
                uploadType = "neque";
                uploadProtocol = "illo";
                userIp = "quaerat";
            }};            

            ComputeStoragePoolsListResponse res = sdk.storagePools.computeStoragePoolsList(req, new ComputeStoragePoolsListSecurity() {{
                option1 = new ComputeStoragePoolsListSecurityOption1("labore", "nemo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.storagePoolList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeStoragePoolsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeStoragePoolsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeStoragePoolsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeStoragePoolsSetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeStoragePoolsSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeStoragePoolsSetIamPolicySecurityOption2;
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

            ComputeStoragePoolsSetIamPolicyRequest req = new ComputeStoragePoolsSetIamPolicyRequest("reiciendis", "soluta", "nostrum") {{
                dollarXgafv = XgafvEnum.ONE;
                zoneSetPolicyRequest = new ZoneSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "debitis";
                            condition = new Expr() {{
                                description = "facilis";
                                expression = "sapiente";
                                location = "quidem";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("architecto"),
                                add("incidunt"),
                            }};
                            role = "blanditiis";
                        }}),
                        add(new Binding() {{
                            bindingId = "esse";
                            condition = new Expr() {{
                                description = "cupiditate";
                                expression = "autem";
                                location = "a";
                                title = "Mrs.";
                            }};
                            members = new String[]{{
                                add("perspiciatis"),
                                add("omnis"),
                                add("nesciunt"),
                            }};
                            role = "consequatur";
                        }}),
                        add(new Binding() {{
                            bindingId = "tempora";
                            condition = new Expr() {{
                                description = "hic";
                                expression = "eius";
                                location = "dolore";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("amet"),
                                add("eligendi"),
                                add("eius"),
                            }};
                            role = "voluptatum";
                        }}),
                    }};
                    etag = "voluptate";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("laboriosam"),
                                            add("atque"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ad"),
                                            add("id"),
                                            add("at"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("temporibus"),
                                    add("officiis"),
                                }};
                                service = "quaerat";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "atque";
                                condition = new Expr() {{
                                    description = "recusandae";
                                    expression = "asperiores";
                                    location = "molestiae";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("at"),
                                    add("facilis"),
                                    add("vel"),
                                    add("consequatur"),
                                }};
                                role = "cumque";
                            }}),
                        }};
                        etag = "repudiandae";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.NO_ACTION;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "architecto";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("ratione"),
                                            add("quod"),
                                            add("voluptates"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "facere";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("sed"),
                                            add("accusamus"),
                                            add("sapiente"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "atque";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("sequi"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "sapiente";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("atque"),
                                            add("vel"),
                                            add("velit"),
                                            add("qui"),
                                        }};
                                    }}),
                                }};
                                description = "provident";
                                ins = new String[]{{
                                    add("facilis"),
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
                                                    name = "Alfonso Leannon";
                                                    value = "porro";
                                                }}),
                                            }};
                                            field = "adipisci";
                                            metric = "natus";
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
                                                    name = "Hugo Ruecker";
                                                    value = "iusto";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jonathon Boyle";
                                                    value = "laborum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Miss Kate Osinski";
                                                    value = "illo";
                                                }}),
                                            }};
                                            field = "tempora";
                                            metric = "recusandae";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("ea"),
                                    add("nemo"),
                                }};
                                permissions = new String[]{{
                                    add("voluptatibus"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "possimus";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("debitis"),
                                            add("placeat"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "occaecati";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("libero"),
                                            add("dicta"),
                                            add("praesentium"),
                                            add("nisi"),
                                        }};
                                    }}),
                                }};
                                description = "autem";
                                ins = new String[]{{
                                    add("expedita"),
                                    add("et"),
                                    add("tenetur"),
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
                                                    name = "Mr. Kelly Nikolaus DDS";
                                                    value = "aperiam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Erin Smith";
                                                    value = "vel";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Myra Gerhold";
                                                    value = "aspernatur";
                                                }}),
                                            }};
                                            field = "quibusdam";
                                            metric = "dicta";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("magni"),
                                    add("aut"),
                                    add("culpa"),
                                }};
                                permissions = new String[]{{
                                    add("iure"),
                                    add("ipsam"),
                                    add("animi"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.NO_ACTION;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "pariatur";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("cupiditate"),
                                            add("corporis"),
                                            add("minima"),
                                            add("libero"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "alias";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("numquam"),
                                            add("accusamus"),
                                            add("sequi"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "expedita";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("ex"),
                                            add("vel"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "ducimus";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("recusandae"),
                                            add("dolore"),
                                            add("rem"),
                                            add("quibusdam"),
                                        }};
                                    }}),
                                }};
                                description = "rem";
                                ins = new String[]{{
                                    add("dolorum"),
                                    add("vero"),
                                    add("nihil"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.PERMISSION_TYPE_UNSPECIFIED;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Frances Dickinson III";
                                                    value = "non";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Harriet Nolan";
                                                    value = "inventore";
                                                }}),
                                            }};
                                            field = "asperiores";
                                            metric = "eum";
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
                                                    name = "Denise Brown";
                                                    value = "temporibus";
                                                }}),
                                            }};
                                            field = "ut";
                                            metric = "ducimus";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("natus"),
                                }};
                                permissions = new String[]{{
                                    add("ipsum"),
                                    add("deserunt"),
                                    add("optio"),
                                    add("reiciendis"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.IN;
                                        svc = "placeat";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("fugit"),
                                            add("eveniet"),
                                            add("accusantium"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "voluptate";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("beatae"),
                                        }};
                                    }}),
                                }};
                                description = "laborum";
                                ins = new String[]{{
                                    add("a"),
                                    add("molestiae"),
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
                                                    name = "Angie Littel";
                                                    value = "magni";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Sadie Skiles";
                                                    value = "repudiandae";
                                                }}),
                                            }};
                                            field = "officiis";
                                            metric = "odit";
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
                                                    name = "Dr. Ronald Beier";
                                                    value = "corrupti";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Paul Weissnat";
                                                    value = "facilis";
                                                }}),
                                            }};
                                            field = "a";
                                            metric = "eius";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("assumenda"),
                                    add("facilis"),
                                }};
                                permissions = new String[]{{
                                    add("modi"),
                                    add("vel"),
                                    add("ad"),
                                    add("sapiente"),
                                }};
                            }}),
                        }};
                        version = 94968;
                    }};;
                }};;
                accessToken = "eum";
                alt = AltEnum.MEDIA;
                callback = "eligendi";
                fields = "doloremque";
                key = "porro";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "voluptatem";
                uploadProtocol = "odio";
                userIp = "nobis";
            }};            

            ComputeStoragePoolsSetIamPolicyResponse res = sdk.storagePools.computeStoragePoolsSetIamPolicy(req, new ComputeStoragePoolsSetIamPolicySecurity() {{
                option1 = new ComputeStoragePoolsSetIamPolicySecurityOption1("doloribus", "iure") {{
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

## computeStoragePoolsSetLabels

Sets the labels on a storage pools. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeStoragePoolsSetLabelsRequest;
import org.openapis.openapi.models.operations.ComputeStoragePoolsSetLabelsResponse;
import org.openapis.openapi.models.operations.ComputeStoragePoolsSetLabelsSecurity;
import org.openapis.openapi.models.operations.ComputeStoragePoolsSetLabelsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeStoragePoolsSetLabelsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.ZoneSetLabelsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeStoragePoolsSetLabelsRequest req = new ComputeStoragePoolsSetLabelsRequest("aspernatur", "maxime", "ullam") {{
                dollarXgafv = XgafvEnum.ONE;
                zoneSetLabelsRequest = new ZoneSetLabelsRequest() {{
                    labelFingerprint = "quaerat";
                    labels = new java.util.HashMap<String, String>() {{
                        put("ab", "corrupti");
                    }};
                }};;
                accessToken = "neque";
                alt = AltEnum.PROTO;
                callback = "eligendi";
                fields = "quisquam";
                key = "reprehenderit";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "repudiandae";
                requestId = "dolores";
                uploadType = "aut";
                uploadProtocol = "vero";
                userIp = "voluptatum";
            }};            

            ComputeStoragePoolsSetLabelsResponse res = sdk.storagePools.computeStoragePoolsSetLabels(req, new ComputeStoragePoolsSetLabelsSecurity() {{
                option1 = new ComputeStoragePoolsSetLabelsSecurityOption1("modi", "harum") {{
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

## computeStoragePoolsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeStoragePoolsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeStoragePoolsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeStoragePoolsTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeStoragePoolsTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeStoragePoolsTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeStoragePoolsTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeStoragePoolsTestIamPermissionsRequest req = new ComputeStoragePoolsTestIamPermissionsRequest("ex", "soluta", "voluptas") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("labore"),
                    }};
                }};;
                accessToken = "velit";
                alt = AltEnum.PROTO;
                callback = "ducimus";
                fields = "esse";
                key = "nisi";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "voluptatibus";
                uploadProtocol = "enim";
                userIp = "quos";
            }};            

            ComputeStoragePoolsTestIamPermissionsResponse res = sdk.storagePools.computeStoragePoolsTestIamPermissions(req, new ComputeStoragePoolsTestIamPermissionsSecurity() {{
                option1 = new ComputeStoragePoolsTestIamPermissionsSecurityOption1("earum", "inventore") {{
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

## computeStoragePoolsUpdate

Updates the specified storagePool with the data included in the request. The update is performed only on selected fields included as part of update-mask. Only the following fields can be modified: size_tb and provisioned_iops.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeStoragePoolsUpdateRequest;
import org.openapis.openapi.models.operations.ComputeStoragePoolsUpdateResponse;
import org.openapis.openapi.models.operations.ComputeStoragePoolsUpdateSecurity;
import org.openapis.openapi.models.operations.ComputeStoragePoolsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.ComputeStoragePoolsUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.StoragePool;
import org.openapis.openapi.models.shared.StoragePoolResourceStatus;
import org.openapis.openapi.models.shared.StoragePoolStateEnum;
import org.openapis.openapi.models.shared.StoragePoolTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeStoragePoolsUpdateRequest req = new ComputeStoragePoolsUpdateRequest("eaque", "facilis", "nobis") {{
                dollarXgafv = XgafvEnum.ONE;
                storagePool1 = new StoragePool() {{
                    creationTimestamp = "non";
                    description = "amet";
                    id = "maxime";
                    kind = "nulla";
                    labelFingerprint = "odio";
                    labels = new java.util.HashMap<String, String>() {{
                        put("numquam", "aperiam");
                    }};
                    name = "Geneva Tromp";
                    provisionedIops = "ipsa";
                    resourceStatus = new StoragePoolResourceStatus() {{
                        aggregateDiskProvisionedIops = "sed";
                        aggregateDiskSizeGb = "aut";
                        lastResizeTimestamp = "id";
                        maxAggregateDiskSizeGb = "iusto";
                        numberOfDisks = "aspernatur";
                        usedBytes = "tempora";
                        usedReducedBytes = "iusto";
                    }};;
                    selfLink = "nobis";
                    selfLinkWithId = "neque";
                    sizeGb = "quasi";
                    state = StoragePoolStateEnum.DELETING;
                    type = StoragePoolTypeEnum.UNSPECIFIED;
                    zone = "nulla";
                }};;
                accessToken = "veniam";
                alt = AltEnum.MEDIA;
                callback = "ullam";
                fields = "recusandae";
                key = "inventore";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "suscipit";
                requestId = "voluptatum";
                updateMask = "mollitia";
                uploadType = "ex";
                uploadProtocol = "nesciunt";
                userIp = "aspernatur";
            }};            

            ComputeStoragePoolsUpdateResponse res = sdk.storagePools.computeStoragePoolsUpdate(req, new ComputeStoragePoolsUpdateSecurity() {{
                option1 = new ComputeStoragePoolsUpdateSecurityOption1("est", "dolor") {{
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
