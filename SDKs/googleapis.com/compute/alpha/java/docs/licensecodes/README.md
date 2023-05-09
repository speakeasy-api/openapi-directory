# licenseCodes

### Available Operations

* [computeLicenseCodesGet](#computelicensecodesget) - Return a specified license code. License codes are mirrored across all projects that have permissions to read the License Code. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* [computeLicenseCodesGetIamPolicy](#computelicensecodesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* [computeLicenseCodesSetIamPolicy](#computelicensecodessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* [computeLicenseCodesTestIamPermissions](#computelicensecodestestiampermissions) - Returns permissions that a caller has on the specified resource. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

## computeLicenseCodesGet

Return a specified license code. License codes are mirrored across all projects that have permissions to read the License Code. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeLicenseCodesGetRequest;
import org.openapis.openapi.models.operations.ComputeLicenseCodesGetResponse;
import org.openapis.openapi.models.operations.ComputeLicenseCodesGetSecurity;
import org.openapis.openapi.models.operations.ComputeLicenseCodesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeLicenseCodesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeLicenseCodesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeLicenseCodesGetRequest req = new ComputeLicenseCodesGetRequest("nesciunt", "nisi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nostrum";
                alt = AltEnum.PROTO;
                callback = "laborum";
                fields = "excepturi";
                key = "consequuntur";
                oauthToken = "sequi";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "modi";
                uploadProtocol = "occaecati";
                userIp = "occaecati";
            }};            

            ComputeLicenseCodesGetResponse res = sdk.licenseCodes.computeLicenseCodesGet(req, new ComputeLicenseCodesGetSecurity() {{
                option1 = new ComputeLicenseCodesGetSecurityOption1("vitae", "provident") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.licenseCode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeLicenseCodesGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeLicenseCodesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeLicenseCodesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeLicenseCodesGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeLicenseCodesGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeLicenseCodesGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.ComputeLicenseCodesGetIamPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeLicenseCodesGetIamPolicyRequest req = new ComputeLicenseCodesGetIamPolicyRequest("necessitatibus", "tempore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sunt";
                alt = AltEnum.PROTO;
                callback = "tenetur";
                fields = "iusto";
                key = "quam";
                oauthToken = "iste";
                optionsRequestedPolicyVersion = 367914L;
                prettyPrint = false;
                quotaUser = "sequi";
                uploadType = "quos";
                uploadProtocol = "optio";
                userIp = "expedita";
            }};            

            ComputeLicenseCodesGetIamPolicyResponse res = sdk.licenseCodes.computeLicenseCodesGetIamPolicy(req, new ComputeLicenseCodesGetIamPolicySecurity() {{
                option1 = new ComputeLicenseCodesGetIamPolicySecurityOption1("quidem", "voluptatibus") {{
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

## computeLicenseCodesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeLicenseCodesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeLicenseCodesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeLicenseCodesSetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeLicenseCodesSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeLicenseCodesSetIamPolicySecurityOption2;
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

            ComputeLicenseCodesSetIamPolicyRequest req = new ComputeLicenseCodesSetIamPolicyRequest("quod", "temporibus") {{
                dollarXgafv = XgafvEnum.TWO;
                globalSetPolicyRequest = new GlobalSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "officiis";
                            condition = new Expr() {{
                                description = "porro";
                                expression = "debitis";
                                location = "iste";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("quisquam"),
                                add("magnam"),
                                add("reiciendis"),
                            }};
                            role = "expedita";
                        }}),
                        add(new Binding() {{
                            bindingId = "modi";
                            condition = new Expr() {{
                                description = "fugit";
                                expression = "cumque";
                                location = "dolor";
                                title = "Mrs.";
                            }};
                            members = new String[]{{
                                add("ut"),
                            }};
                            role = "provident";
                        }}),
                    }};
                    etag = "vel";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("rerum"),
                                            add("molestiae"),
                                            add("beatae"),
                                            add("repellendus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("aspernatur"),
                                            add("corporis"),
                                            add("sit"),
                                            add("cum"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("quo"),
                                }};
                                service = "dignissimos";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "dicta";
                                condition = new Expr() {{
                                    description = "illum";
                                    expression = "magni";
                                    location = "id";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("necessitatibus"),
                                    add("totam"),
                                    add("tempore"),
                                }};
                                role = "provident";
                            }}),
                            add(new Binding() {{
                                bindingId = "rem";
                                condition = new Expr() {{
                                    description = "consequuntur";
                                    expression = "molestias";
                                    location = "officiis";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("aliquam"),
                                    add("iure"),
                                }};
                                role = "ab";
                            }}),
                        }};
                        etag = "dolorum";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.NO_ACTION;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "reprehenderit";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("cupiditate"),
                                            add("incidunt"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "modi";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("architecto"),
                                            add("magnam"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.IN;
                                        svc = "tenetur";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("ratione"),
                                            add("fugiat"),
                                            add("dolorem"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "aperiam";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("perferendis"),
                                        }};
                                    }}),
                                }};
                                description = "dicta";
                                ins = new String[]{{
                                    add("iusto"),
                                    add("optio"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Miss Diane Johnson";
                                                    value = "debitis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Silvia Mills";
                                                    value = "commodi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Eunice Ankunding";
                                                    value = "voluptatibus";
                                                }}),
                                            }};
                                            field = "quo";
                                            metric = "ducimus";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
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
                                                    name = "Rudy Nikolaus Jr.";
                                                    value = "officia";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Moses Grady";
                                                    value = "nihil";
                                                }}),
                                            }};
                                            field = "dolores";
                                            metric = "eveniet";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
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
                                                    name = "Phyllis D'Amore";
                                                    value = "corporis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Gertrude Braun";
                                                    value = "corrupti";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mr. Ethel Crooks";
                                                    value = "ducimus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Darrell Mills";
                                                    value = "beatae";
                                                }}),
                                            }};
                                            field = "nemo";
                                            metric = "aliquam";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Caleb Erdman";
                                                    value = "molestias";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Sadie Donnelly";
                                                    value = "optio";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ms. Herbert Marvin";
                                                    value = "molestiae";
                                                }}),
                                            }};
                                            field = "natus";
                                            metric = "odio";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("praesentium"),
                                    add("repellendus"),
                                    add("illo"),
                                }};
                                permissions = new String[]{{
                                    add("ea"),
                                    add("earum"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "velit";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("harum"),
                                            add("voluptatum"),
                                            add("temporibus"),
                                        }};
                                    }}),
                                }};
                                description = "eaque";
                                ins = new String[]{{
                                    add("odit"),
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
                                                    name = "Mable Schimmel II";
                                                    value = "occaecati";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Fernando Vandervort DVM";
                                                    value = "sunt";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Kay Hilll";
                                                    value = "quam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Shawn Hahn";
                                                    value = "neque";
                                                }}),
                                            }};
                                            field = "culpa";
                                            metric = "maxime";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
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
                                                    name = "Fred Jenkins";
                                                    value = "excepturi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Angie Hoppe";
                                                    value = "doloremque";
                                                }}),
                                            }};
                                            field = "laudantium";
                                            metric = "voluptas";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mrs. Lauren Predovic";
                                                    value = "qui";
                                                }}),
                                            }};
                                            field = "laudantium";
                                            metric = "repudiandae";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("odit"),
                                    add("quae"),
                                    add("beatae"),
                                }};
                                permissions = new String[]{{
                                    add("optio"),
                                    add("reiciendis"),
                                    add("nobis"),
                                    add("voluptate"),
                                }};
                            }}),
                        }};
                        version = 296964;
                    }};;
                }};;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "maiores";
                fields = "hic";
                key = "minima";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "repudiandae";
                uploadType = "dolore";
                uploadProtocol = "voluptatibus";
                userIp = "aspernatur";
            }};            

            ComputeLicenseCodesSetIamPolicyResponse res = sdk.licenseCodes.computeLicenseCodesSetIamPolicy(req, new ComputeLicenseCodesSetIamPolicySecurity() {{
                option1 = new ComputeLicenseCodesSetIamPolicySecurityOption1("expedita", "eaque") {{
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

## computeLicenseCodesTestIamPermissions

Returns permissions that a caller has on the specified resource. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeLicenseCodesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeLicenseCodesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeLicenseCodesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeLicenseCodesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeLicenseCodesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeLicenseCodesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeLicenseCodesTestIamPermissionsRequest req = new ComputeLicenseCodesTestIamPermissionsRequest("culpa", "blanditiis") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("soluta"),
                        add("nobis"),
                    }};
                }};;
                accessToken = "saepe";
                alt = AltEnum.PROTO;
                callback = "molestias";
                fields = "ab";
                key = "voluptatibus";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "sequi";
                uploadType = "numquam";
                uploadProtocol = "rerum";
                userIp = "voluptas";
            }};            

            ComputeLicenseCodesTestIamPermissionsResponse res = sdk.licenseCodes.computeLicenseCodesTestIamPermissions(req, new ComputeLicenseCodesTestIamPermissionsSecurity() {{
                option1 = new ComputeLicenseCodesTestIamPermissionsSecurityOption1("et", "sint") {{
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
