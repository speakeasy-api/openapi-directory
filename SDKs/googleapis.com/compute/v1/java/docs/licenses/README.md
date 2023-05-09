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

            ComputeLicensesDeleteRequest req = new ComputeLicensesDeleteRequest("a", "a") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quaerat";
                alt = AltEnum.MEDIA;
                callback = "velit";
                fields = "officiis";
                key = "perspiciatis";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "quas";
                requestId = "sint";
                uploadType = "necessitatibus";
                uploadProtocol = "totam";
                userIp = "reprehenderit";
            }};            

            ComputeLicensesDeleteResponse res = sdk.licenses.computeLicensesDelete(req, new ComputeLicensesDeleteSecurity() {{
                option1 = new ComputeLicensesDeleteSecurityOption1("inventore", "asperiores") {{
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

            ComputeLicensesGetRequest req = new ComputeLicensesGetRequest("nulla", "soluta") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "at";
                alt = AltEnum.MEDIA;
                callback = "perspiciatis";
                fields = "molestiae";
                key = "tempore";
                oauthToken = "facere";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "perspiciatis";
                uploadProtocol = "quisquam";
                userIp = "molestias";
            }};            

            ComputeLicensesGetResponse res = sdk.licenses.computeLicensesGet(req, new ComputeLicensesGetSecurity() {{
                option1 = new ComputeLicensesGetSecurityOption1("corrupti", "corporis") {{
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

            ComputeLicensesGetIamPolicyRequest req = new ComputeLicensesGetIamPolicyRequest("repudiandae", "incidunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iusto";
                alt = AltEnum.JSON;
                callback = "numquam";
                fields = "officia";
                key = "quis";
                oauthToken = "pariatur";
                optionsRequestedPolicyVersion = 440376L;
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "quibusdam";
                uploadProtocol = "cupiditate";
                userIp = "itaque";
            }};            

            ComputeLicensesGetIamPolicyResponse res = sdk.licenses.computeLicensesGetIamPolicy(req, new ComputeLicensesGetIamPolicySecurity() {{
                option1 = new ComputeLicensesGetIamPolicySecurityOption1("nulla", "repellendus") {{
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

            ComputeLicensesInsertRequest req = new ComputeLicensesInsertRequest("in") {{
                dollarXgafv = XgafvEnum.TWO;
                license = new License() {{
                    chargesUseFee = false;
                    creationTimestamp = "nostrum";
                    description = "expedita";
                    id = "vero";
                    kind = "quis";
                    licenseCode = "earum";
                    name = "Iris Weimann";
                    resourceRequirements = new LicenseResourceRequirements() {{
                        minGuestCpuCount = 324243;
                        minMemoryMb = 172985;
                    }};;
                    selfLink = "occaecati";
                    transferable = false;
                }};;
                accessToken = "nihil";
                alt = AltEnum.PROTO;
                callback = "mollitia";
                fields = "laboriosam";
                key = "explicabo";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "sunt";
                requestId = "repellat";
                uploadType = "aliquam";
                uploadProtocol = "modi";
                userIp = "eveniet";
            }};            

            ComputeLicensesInsertResponse res = sdk.licenses.computeLicensesInsert(req, new ComputeLicensesInsertSecurity() {{
                option1 = new ComputeLicensesInsertSecurityOption1("dolorem", "laborum") {{
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

            ComputeLicensesListRequest req = new ComputeLicensesListRequest("eos") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "consectetur";
                alt = AltEnum.MEDIA;
                callback = "eius";
                fields = "id";
                filter = "eum";
                key = "rem";
                maxResults = 756998L;
                oauthToken = "optio";
                orderBy = "deleniti";
                pageToken = "sit";
                prettyPrint = false;
                quotaUser = "illum";
                returnPartialSuccess = false;
                uploadType = "ratione";
                uploadProtocol = "alias";
                userIp = "delectus";
            }};            

            ComputeLicensesListResponse res = sdk.licenses.computeLicensesList(req, new ComputeLicensesListSecurity() {{
                option1 = new ComputeLicensesListSecurityOption1("hic", "ducimus") {{
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

            ComputeLicensesSetIamPolicyRequest req = new ComputeLicensesSetIamPolicyRequest("dolores", "illo") {{
                dollarXgafv = XgafvEnum.ONE;
                globalSetPolicyRequest = new GlobalSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "temporibus";
                            condition = new Expr() {{
                                description = "alias";
                                expression = "deserunt";
                                location = "occaecati";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("voluptates"),
                                add("provident"),
                                add("illum"),
                                add("iste"),
                            }};
                            role = "autem";
                        }}),
                        add(new Binding() {{
                            bindingId = "minima";
                            condition = new Expr() {{
                                description = "nemo";
                                expression = "adipisci";
                                location = "tempore";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("necessitatibus"),
                                add("perferendis"),
                                add("consequatur"),
                            }};
                            role = "doloremque";
                        }}),
                    }};
                    etag = "excepturi";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("error"),
                                            add("explicabo"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("in"),
                                            add("nam"),
                                            add("ipsum"),
                                            add("voluptas"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("sed"),
                                }};
                                service = "eaque";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("voluptas"),
                                            add("error"),
                                            add("error"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("deserunt"),
                                    add("voluptates"),
                                }};
                                service = "in";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("fuga"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("omnis"),
                                            add("alias"),
                                            add("rem"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("repudiandae"),
                                            add("consectetur"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("perspiciatis"),
                                    add("quae"),
                                }};
                                service = "dolorum";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ullam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("error"),
                                            add("deleniti"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("reiciendis"),
                                            add("consequatur"),
                                            add("ipsum"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("quidem"),
                                    add("molestiae"),
                                    add("reprehenderit"),
                                }};
                                service = "nam";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "quasi";
                                condition = new Expr() {{
                                    description = "blanditiis";
                                    expression = "a";
                                    location = "aut";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("dolor"),
                                }};
                                role = "iste";
                            }}),
                            add(new Binding() {{
                                bindingId = "quos";
                                condition = new Expr() {{
                                    description = "ut";
                                    expression = "exercitationem";
                                    location = "sit";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("accusantium"),
                                    add("voluptates"),
                                    add("consectetur"),
                                    add("occaecati"),
                                }};
                                role = "impedit";
                            }}),
                            add(new Binding() {{
                                bindingId = "quam";
                                condition = new Expr() {{
                                    description = "saepe";
                                    expression = "odit";
                                    location = "consectetur";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("quidem"),
                                    add("voluptatem"),
                                    add("voluptas"),
                                    add("aperiam"),
                                }};
                                role = "numquam";
                            }}),
                        }};
                        etag = "nisi";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "similique";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("autem"),
                                            add("quo"),
                                            add("voluptas"),
                                            add("quis"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "unde";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("rem"),
                                            add("earum"),
                                            add("molestiae"),
                                            add("hic"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "sed";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("occaecati"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.IN;
                                        svc = "dolorum";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("excepturi"),
                                            add("at"),
                                            add("neque"),
                                        }};
                                    }}),
                                }};
                                description = "animi";
                                ins = new String[]{{
                                    add("repellendus"),
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
                                                    name = "Phil Grady";
                                                    value = "ipsum";
                                                }}),
                                            }};
                                            field = "voluptate";
                                            metric = "eveniet";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("qui"),
                                    add("officia"),
                                    add("fugiat"),
                                    add("laboriosam"),
                                }};
                                permissions = new String[]{{
                                    add("harum"),
                                    add("inventore"),
                                    add("aut"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.NO_ACTION;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.IN;
                                        svc = "reiciendis";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("aliquam"),
                                            add("corrupti"),
                                            add("ipsa"),
                                            add("assumenda"),
                                        }};
                                    }}),
                                }};
                                description = "voluptas";
                                ins = new String[]{{
                                    add("adipisci"),
                                    add("ipsum"),
                                    add("ipsa"),
                                    add("totam"),
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
                                                    name = "Timmy Berge";
                                                    value = "molestias";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Wilma Oberbrunner";
                                                    value = "deleniti";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Marianne Schumm";
                                                    value = "assumenda";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Lorene Runolfsson";
                                                    value = "magni";
                                                }}),
                                            }};
                                            field = "quod";
                                            metric = "aliquid";
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
                                                    name = "Jacquelyn Dicki";
                                                    value = "nostrum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Eduardo Rau";
                                                    value = "veniam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Phillip Kautzer";
                                                    value = "modi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Kelley Dibbert";
                                                    value = "corrupti";
                                                }}),
                                            }};
                                            field = "numquam";
                                            metric = "corrupti";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("officiis"),
                                }};
                                permissions = new String[]{{
                                    add("ab"),
                                    add("neque"),
                                }};
                            }}),
                        }};
                        version = 991472;
                    }};;
                }};;
                accessToken = "autem";
                alt = AltEnum.PROTO;
                callback = "excepturi";
                fields = "at";
                key = "magni";
                oauthToken = "similique";
                prettyPrint = false;
                quotaUser = "possimus";
                uploadType = "dolor";
                uploadProtocol = "molestiae";
                userIp = "quod";
            }};            

            ComputeLicensesSetIamPolicyResponse res = sdk.licenses.computeLicensesSetIamPolicy(req, new ComputeLicensesSetIamPolicySecurity() {{
                option1 = new ComputeLicensesSetIamPolicySecurityOption1("dolorem", "eaque") {{
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

            ComputeLicensesTestIamPermissionsRequest req = new ComputeLicensesTestIamPermissionsRequest("error", "occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("esse"),
                        add("nobis"),
                    }};
                }};;
                accessToken = "quae";
                alt = AltEnum.JSON;
                callback = "rerum";
                fields = "laboriosam";
                key = "deleniti";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "sed";
                uploadProtocol = "veritatis";
                userIp = "commodi";
            }};            

            ComputeLicensesTestIamPermissionsResponse res = sdk.licenses.computeLicensesTestIamPermissions(req, new ComputeLicensesTestIamPermissionsSecurity() {{
                option1 = new ComputeLicensesTestIamPermissionsSecurityOption1("amet", "eveniet") {{
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
