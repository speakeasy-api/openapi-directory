# licenses

### Available Operations

* [computeLicensesDelete](#computelicensesdelete) - Deletes the specified license. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* [computeLicensesGet](#computelicensesget) - Returns the specified License resource. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* [computeLicensesGetIamPolicy](#computelicensesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* [computeLicensesInsert](#computelicensesinsert) - Create a License resource in the specified project. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* [computeLicensesList](#computelicenseslist) - Retrieves the list of licenses available in the specified project. This method does not get any licenses that belong to other projects, including licenses attached to publicly-available images, like Debian 9. If you want to get a list of publicly-available licenses, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* [computeLicensesSetIamPolicy](#computelicensessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* [computeLicensesTestIamPermissions](#computelicensestestiampermissions) - Returns permissions that a caller has on the specified resource. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

## computeLicensesDelete

Deletes the specified license. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeLicensesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeLicensesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeLicensesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeLicensesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeLicensesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeLicensesDeleteRequest req = new ComputeLicensesDeleteRequest("provident", "quod") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "velit";
                alt = AltEnum.MEDIA;
                callback = "incidunt";
                fields = "sint";
                key = "voluptatem";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "quas";
                requestId = "aliquam";
                uploadType = "deleniti";
                uploadProtocol = "quos";
                userIp = "qui";
            }};            

            ComputeLicensesDeleteResponse res = sdk.licenses.computeLicensesDelete(req, new ComputeLicensesDeleteSecurity() {{
                option1 = new ComputeLicensesDeleteSecurityOption1("ex", "nam") {{
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

## computeLicensesGet

Returns the specified License resource. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeLicensesGetRequest;
import org.openapis.openapi.models.operations.ComputeLicensesGetResponse;
import org.openapis.openapi.models.operations.ComputeLicensesGetSecurity;
import org.openapis.openapi.models.operations.ComputeLicensesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeLicensesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeLicensesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeLicensesGetRequest req = new ComputeLicensesGetRequest("distinctio", "aperiam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "porro";
                alt = AltEnum.MEDIA;
                callback = "asperiores";
                fields = "possimus";
                key = "consequuntur";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "debitis";
                uploadProtocol = "dolore";
                userIp = "in";
            }};            

            ComputeLicensesGetResponse res = sdk.licenses.computeLicensesGet(req, new ComputeLicensesGetSecurity() {{
                option1 = new ComputeLicensesGetSecurityOption1("corrupti", "iusto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.license != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeLicensesGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeLicensesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeLicensesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeLicensesGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeLicensesGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeLicensesGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.ComputeLicensesGetIamPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeLicensesGetIamPolicyRequest req = new ComputeLicensesGetIamPolicyRequest("architecto", "culpa") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "atque";
                alt = AltEnum.PROTO;
                callback = "possimus";
                fields = "in";
                key = "qui";
                oauthToken = "laborum";
                optionsRequestedPolicyVersion = 129904L;
                prettyPrint = false;
                quotaUser = "repellendus";
                uploadType = "eius";
                uploadProtocol = "est";
                userIp = "repellat";
            }};            

            ComputeLicensesGetIamPolicyResponse res = sdk.licenses.computeLicensesGetIamPolicy(req, new ComputeLicensesGetIamPolicySecurity() {{
                option1 = new ComputeLicensesGetIamPolicySecurityOption1("quaerat", "quasi") {{
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

## computeLicensesInsert

Create a License resource in the specified project. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeLicensesInsertRequest;
import org.openapis.openapi.models.operations.ComputeLicensesInsertResponse;
import org.openapis.openapi.models.operations.ComputeLicensesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeLicensesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeLicensesInsertSecurityOption2;
import org.openapis.openapi.models.operations.ComputeLicensesInsertSecurityOption3;
import org.openapis.openapi.models.operations.ComputeLicensesInsertSecurityOption4;
import org.openapis.openapi.models.operations.ComputeLicensesInsertSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.License;
import org.openapis.openapi.models.shared.LicenseResourceRequirements;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeLicensesInsertRequest req = new ComputeLicensesInsertRequest("minima") {{
                dollarXgafv = XgafvEnum.TWO;
                license = new License() {{
                    chargesUseFee = false;
                    creationTimestamp = "id";
                    description = "impedit";
                    id = "magni";
                    kind = "repellendus";
                    licenseCode = "doloremque";
                    name = "Paul Ziemann";
                    resourceRequirements = new LicenseResourceRequirements() {{
                        minGuestCpuCount = 758860;
                        minMemoryMb = 240787;
                    }};;
                    selfLink = "libero";
                    transferable = false;
                }};;
                accessToken = "totam";
                alt = AltEnum.MEDIA;
                callback = "tempore";
                fields = "ut";
                key = "molestiae";
                oauthToken = "eaque";
                prettyPrint = false;
                quotaUser = "tempora";
                requestId = "aut";
                uploadType = "possimus";
                uploadProtocol = "aut";
                userIp = "assumenda";
            }};            

            ComputeLicensesInsertResponse res = sdk.licenses.computeLicensesInsert(req, new ComputeLicensesInsertSecurity() {{
                option1 = new ComputeLicensesInsertSecurityOption1("excepturi", "quos") {{
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

## computeLicensesList

Retrieves the list of licenses available in the specified project. This method does not get any licenses that belong to other projects, including licenses attached to publicly-available images, like Debian 9. If you want to get a list of publicly-available licenses, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeLicensesListRequest;
import org.openapis.openapi.models.operations.ComputeLicensesListResponse;
import org.openapis.openapi.models.operations.ComputeLicensesListSecurity;
import org.openapis.openapi.models.operations.ComputeLicensesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeLicensesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeLicensesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeLicensesListRequest req = new ComputeLicensesListRequest("necessitatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fugiat";
                alt = AltEnum.MEDIA;
                callback = "eos";
                fields = "porro";
                filter = "nostrum";
                key = "officiis";
                maxResults = 238266L;
                oauthToken = "alias";
                orderBy = "nisi";
                pageToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "corporis";
                returnPartialSuccess = false;
                uploadType = "nostrum";
                uploadProtocol = "molestiae";
                userIp = "aliquid";
            }};            

            ComputeLicensesListResponse res = sdk.licenses.computeLicensesList(req, new ComputeLicensesListSecurity() {{
                option1 = new ComputeLicensesListSecurityOption1("maiores", "nemo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.licensesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeLicensesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeLicensesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeLicensesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeLicensesSetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeLicensesSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeLicensesSetIamPolicySecurityOption2;
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

            ComputeLicensesSetIamPolicyRequest req = new ComputeLicensesSetIamPolicyRequest("quisquam", "quibusdam") {{
                dollarXgafv = XgafvEnum.TWO;
                globalSetPolicyRequest = new GlobalSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "consequatur";
                            condition = new Expr() {{
                                description = "eos";
                                expression = "totam";
                                location = "ea";
                                title = "Dr.";
                            }};
                            members = new String[]{{
                                add("distinctio"),
                            }};
                            role = "maxime";
                        }}),
                        add(new Binding() {{
                            bindingId = "aliquam";
                            condition = new Expr() {{
                                description = "adipisci";
                                expression = "harum";
                                location = "veritatis";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("expedita"),
                                add("ipsum"),
                                add("molestiae"),
                            }};
                            role = "corrupti";
                        }}),
                        add(new Binding() {{
                            bindingId = "sapiente";
                            condition = new Expr() {{
                                description = "consequuntur";
                                expression = "asperiores";
                                location = "quisquam";
                                title = "Dr.";
                            }};
                            members = new String[]{{
                                add("laudantium"),
                                add("beatae"),
                                add("assumenda"),
                                add("quibusdam"),
                            }};
                            role = "hic";
                        }}),
                    }};
                    etag = "dignissimos";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("totam"),
                                            add("repellat"),
                                            add("iusto"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("delectus"),
                                    add("quis"),
                                    add("quaerat"),
                                    add("eligendi"),
                                }};
                                service = "sint";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("laboriosam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("unde"),
                                    add("qui"),
                                    add("aliquid"),
                                }};
                                service = "sequi";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("libero"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("hic"),
                                    add("quo"),
                                }};
                                service = "explicabo";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("illum"),
                                            add("fugit"),
                                            add("reprehenderit"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("doloremque"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quidem"),
                                            add("vel"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("fugiat"),
                                            add("laboriosam"),
                                            add("necessitatibus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("quasi"),
                                    add("pariatur"),
                                    add("excepturi"),
                                    add("fugiat"),
                                }};
                                service = "ipsum";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "voluptas";
                                condition = new Expr() {{
                                    description = "aliquid";
                                    expression = "perferendis";
                                    location = "nesciunt";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("mollitia"),
                                    add("dicta"),
                                }};
                                role = "sunt";
                            }}),
                            add(new Binding() {{
                                bindingId = "id";
                                condition = new Expr() {{
                                    description = "id";
                                    expression = "ab";
                                    location = "nulla";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("magni"),
                                    add("quia"),
                                    add("modi"),
                                    add("nihil"),
                                }};
                                role = "assumenda";
                            }}),
                            add(new Binding() {{
                                bindingId = "debitis";
                                condition = new Expr() {{
                                    description = "perspiciatis";
                                    expression = "libero";
                                    location = "dolorem";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("laboriosam"),
                                    add("quasi"),
                                }};
                                role = "ducimus";
                            }}),
                        }};
                        etag = "eaque";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.DENY;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "perspiciatis";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("facilis"),
                                            add("sequi"),
                                            add("iste"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.IN;
                                        svc = "voluptatum";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("perspiciatis"),
                                        }};
                                    }}),
                                }};
                                description = "rem";
                                ins = new String[]{{
                                    add("tempore"),
                                    add("dolorum"),
                                    add("architecto"),
                                    add("expedita"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
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
                                                    name = "Norma Fadel";
                                                    value = "tenetur";
                                                }}),
                                            }};
                                            field = "aliquid";
                                            metric = "amet";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Anita Christiansen";
                                                    value = "facilis";
                                                }}),
                                            }};
                                            field = "dolores";
                                            metric = "beatae";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
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
                                                    name = "Hannah Morar III";
                                                    value = "enim";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Shelley Breitenberg";
                                                    value = "optio";
                                                }}),
                                            }};
                                            field = "culpa";
                                            metric = "excepturi";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("odit"),
                                    add("reiciendis"),
                                }};
                                permissions = new String[]{{
                                    add("veniam"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "harum";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("porro"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "ex";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("a"),
                                        }};
                                    }}),
                                }};
                                description = "maiores";
                                ins = new String[]{{
                                    add("blanditiis"),
                                    add("reprehenderit"),
                                    add("dolore"),
                                    add("nostrum"),
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
                                                    name = "Jody Franecki";
                                                    value = "consectetur";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Leigh Bayer";
                                                    value = "sapiente";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Krista Franecki";
                                                    value = "ea";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Carrie Wiegand";
                                                    value = "laudantium";
                                                }}),
                                            }};
                                            field = "corporis";
                                            metric = "quis";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("est"),
                                }};
                                permissions = new String[]{{
                                    add("repudiandae"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "vel";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("tenetur"),
                                            add("atque"),
                                            add("ea"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "eos";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("eaque"),
                                            add("incidunt"),
                                            add("aut"),
                                            add("eligendi"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "id";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("iste"),
                                            add("voluptatem"),
                                            add("voluptas"),
                                            add("hic"),
                                        }};
                                    }}),
                                }};
                                description = "ea";
                                ins = new String[]{{
                                    add("soluta"),
                                    add("at"),
                                    add("nostrum"),
                                    add("officia"),
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
                                                    name = "Rita McLaughlin";
                                                    value = "dolores";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Winifred Jakubowski";
                                                    value = "rerum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ms. Constance Effertz I";
                                                    value = "itaque";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Patty Walter";
                                                    value = "dolorem";
                                                }}),
                                            }};
                                            field = "debitis";
                                            metric = "consequatur";
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
                                                    name = "Nathan Gutmann";
                                                    value = "placeat";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Natasha McLaughlin";
                                                    value = "recusandae";
                                                }}),
                                            }};
                                            field = "voluptas";
                                            metric = "debitis";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
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
                                                    name = "Mr. Wendy Hagenes";
                                                    value = "natus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Samantha Wiza";
                                                    value = "quam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Edith Vandervort";
                                                    value = "repudiandae";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Amy Mayer";
                                                    value = "dolores";
                                                }}),
                                            }};
                                            field = "illo";
                                            metric = "repellat";
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
                                                    name = "Janis Morar";
                                                    value = "a";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Andre Mohr";
                                                    value = "sed";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Kim Walsh";
                                                    value = "cum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Megan Wisozk";
                                                    value = "ad";
                                                }}),
                                            }};
                                            field = "illo";
                                            metric = "ratione";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("id"),
                                    add("nam"),
                                    add("saepe"),
                                }};
                                permissions = new String[]{{
                                    add("esse"),
                                    add("voluptatem"),
                                    add("blanditiis"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.NO_ACTION;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.IN;
                                        svc = "iste";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("velit"),
                                            add("quas"),
                                            add("veniam"),
                                            add("illum"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.IN;
                                        svc = "aperiam";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("omnis"),
                                            add("quibusdam"),
                                            add("nostrum"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "velit";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("nemo"),
                                            add("dignissimos"),
                                            add("eum"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "ullam";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("error"),
                                        }};
                                    }}),
                                }};
                                description = "officiis";
                                ins = new String[]{{
                                    add("est"),
                                    add("eos"),
                                    add("qui"),
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
                                                    name = "Clinton Huel";
                                                    value = "laudantium";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Henrietta Weber";
                                                    value = "ipsam";
                                                }}),
                                            }};
                                            field = "sapiente";
                                            metric = "nulla";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
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
                                                    name = "Mrs. Felix O'Keefe";
                                                    value = "perferendis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Arlene Lubowitz I";
                                                    value = "quisquam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mabel Howell";
                                                    value = "neque";
                                                }}),
                                            }};
                                            field = "omnis";
                                            metric = "earum";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("saepe"),
                                    add("illo"),
                                    add("esse"),
                                }};
                                permissions = new String[]{{
                                    add("reiciendis"),
                                    add("maiores"),
                                }};
                            }}),
                        }};
                        version = 629421;
                    }};;
                }};;
                accessToken = "iste";
                alt = AltEnum.JSON;
                callback = "autem";
                fields = "similique";
                key = "voluptates";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "error";
                uploadProtocol = "soluta";
                userIp = "nihil";
            }};            

            ComputeLicensesSetIamPolicyResponse res = sdk.licenses.computeLicensesSetIamPolicy(req, new ComputeLicensesSetIamPolicySecurity() {{
                option1 = new ComputeLicensesSetIamPolicySecurityOption1("fugit", "debitis") {{
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

## computeLicensesTestIamPermissions

Returns permissions that a caller has on the specified resource. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeLicensesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeLicensesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeLicensesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeLicensesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeLicensesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeLicensesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeLicensesTestIamPermissionsRequest req = new ComputeLicensesTestIamPermissionsRequest("quidem", "vel") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("vel"),
                        add("accusantium"),
                    }};
                }};;
                accessToken = "consectetur";
                alt = AltEnum.JSON;
                callback = "doloribus";
                fields = "accusamus";
                key = "sunt";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "neque";
                uploadType = "reprehenderit";
                uploadProtocol = "voluptas";
                userIp = "eligendi";
            }};            

            ComputeLicensesTestIamPermissionsResponse res = sdk.licenses.computeLicensesTestIamPermissions(req, new ComputeLicensesTestIamPermissionsSecurity() {{
                option1 = new ComputeLicensesTestIamPermissionsSecurityOption1("explicabo", "expedita") {{
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
