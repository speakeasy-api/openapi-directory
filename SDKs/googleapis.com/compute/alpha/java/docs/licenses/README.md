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

            ComputeLicensesDeleteRequest req = new ComputeLicensesDeleteRequest("eaque", "accusantium") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "expedita";
                alt = AltEnum.JSON;
                callback = "ratione";
                fields = "incidunt";
                key = "voluptates";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "velit";
                requestId = "porro";
                uploadType = "commodi";
                uploadProtocol = "nobis";
                userIp = "dolor";
            }};            

            ComputeLicensesDeleteResponse res = sdk.licenses.computeLicensesDelete(req, new ComputeLicensesDeleteSecurity() {{
                option1 = new ComputeLicensesDeleteSecurityOption1("ex", "deserunt") {{
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

            ComputeLicensesGetRequest req = new ComputeLicensesGetRequest("corporis", "voluptas") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "adipisci";
                alt = AltEnum.MEDIA;
                callback = "quibusdam";
                fields = "ullam";
                key = "rerum";
                oauthToken = "repellat";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "unde";
                uploadProtocol = "labore";
                userIp = "ipsa";
            }};            

            ComputeLicensesGetResponse res = sdk.licenses.computeLicensesGet(req, new ComputeLicensesGetSecurity() {{
                option1 = new ComputeLicensesGetSecurityOption1("at", "tempora") {{
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

            ComputeLicensesGetIamPolicyRequest req = new ComputeLicensesGetIamPolicyRequest("autem", "repellendus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eaque";
                alt = AltEnum.JSON;
                callback = "iste";
                fields = "repellendus";
                key = "numquam";
                oauthToken = "quos";
                optionsRequestedPolicyVersion = 565293L;
                prettyPrint = false;
                quotaUser = "animi";
                uploadType = "hic";
                uploadProtocol = "autem";
                userIp = "voluptatem";
            }};            

            ComputeLicensesGetIamPolicyResponse res = sdk.licenses.computeLicensesGetIamPolicy(req, new ComputeLicensesGetIamPolicySecurity() {{
                option1 = new ComputeLicensesGetIamPolicySecurityOption1("perferendis", "ipsam") {{
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

            ComputeLicensesInsertRequest req = new ComputeLicensesInsertRequest("magnam") {{
                dollarXgafv = XgafvEnum.ONE;
                license = new License() {{
                    chargesUseFee = false;
                    creationTimestamp = "perferendis";
                    description = "distinctio";
                    id = "voluptatem";
                    kind = "ullam";
                    licenseCode = "doloribus";
                    name = "Ann Trantow";
                    resourceRequirements = new LicenseResourceRequirements() {{
                        minGuestCpuCount = 838720;
                        minMemoryMb = 520229;
                    }};;
                    selfLink = "autem";
                    selfLinkWithId = "ut";
                    transferable = false;
                }};;
                accessToken = "non";
                alt = AltEnum.MEDIA;
                callback = "commodi";
                fields = "voluptatum";
                key = "possimus";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "aperiam";
                requestId = "repellendus";
                uploadType = "odio";
                uploadProtocol = "in";
                userIp = "sequi";
            }};            

            ComputeLicensesInsertResponse res = sdk.licenses.computeLicensesInsert(req, new ComputeLicensesInsertSecurity() {{
                option1 = new ComputeLicensesInsertSecurityOption1("similique", "ipsa") {{
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

            ComputeLicensesListRequest req = new ComputeLicensesListRequest("quam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sequi";
                alt = AltEnum.JSON;
                callback = "odio";
                fields = "commodi";
                filter = "placeat";
                key = "corrupti";
                maxResults = 411133L;
                oauthToken = "dolores";
                orderBy = "facere";
                pageToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "occaecati";
                returnPartialSuccess = false;
                uploadType = "ea";
                uploadProtocol = "occaecati";
                userIp = "qui";
            }};            

            ComputeLicensesListResponse res = sdk.licenses.computeLicensesList(req, new ComputeLicensesListSecurity() {{
                option1 = new ComputeLicensesListSecurityOption1("a", "iste") {{
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

            ComputeLicensesSetIamPolicyRequest req = new ComputeLicensesSetIamPolicyRequest("vero", "officia") {{
                dollarXgafv = XgafvEnum.TWO;
                globalSetPolicyRequest = new GlobalSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "quisquam";
                            condition = new Expr() {{
                                description = "voluptatem";
                                expression = "ipsum";
                                location = "id";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("voluptatibus"),
                            }};
                            role = "sed";
                        }}),
                        add(new Binding() {{
                            bindingId = "dolor";
                            condition = new Expr() {{
                                description = "possimus";
                                expression = "maxime";
                                location = "blanditiis";
                                title = "Mrs.";
                            }};
                            members = new String[]{{
                                add("sequi"),
                                add("eligendi"),
                            }};
                            role = "dicta";
                        }}),
                    }};
                    etag = "nihil";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ex"),
                                            add("dolore"),
                                            add("officiis"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("explicabo"),
                                            add("saepe"),
                                            add("voluptatibus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("optio"),
                                            add("inventore"),
                                            add("corrupti"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("deserunt"),
                                    add("dolor"),
                                    add("pariatur"),
                                }};
                                service = "repudiandae";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sit"),
                                            add("quisquam"),
                                            add("perspiciatis"),
                                            add("sit"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ad"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("placeat"),
                                            add("et"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("ex"),
                                }};
                                service = "eos";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "assumenda";
                                condition = new Expr() {{
                                    description = "debitis";
                                    expression = "non";
                                    location = "ipsam";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("sapiente"),
                                    add("magnam"),
                                }};
                                role = "vitae";
                            }}),
                            add(new Binding() {{
                                bindingId = "accusamus";
                                condition = new Expr() {{
                                    description = "dolore";
                                    expression = "eos";
                                    location = "facere";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("molestiae"),
                                    add("ab"),
                                    add("eius"),
                                }};
                                role = "itaque";
                            }}),
                        }};
                        etag = "cupiditate";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "iste";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("modi"),
                                            add("facere"),
                                            add("impedit"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.IN;
                                        svc = "dolor";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("sed"),
                                            add("ex"),
                                        }};
                                    }}),
                                }};
                                description = "autem";
                                ins = new String[]{{
                                    add("sit"),
                                    add("saepe"),
                                    add("ipsam"),
                                    add("sit"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.PERMISSION_TYPE_UNSPECIFIED;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Janice Sauer";
                                                    value = "esse";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Deborah Larson DVM";
                                                    value = "voluptatibus";
                                                }}),
                                            }};
                                            field = "molestiae";
                                            metric = "tempore";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("laborum"),
                                }};
                                permissions = new String[]{{
                                    add("modi"),
                                    add("asperiores"),
                                    add("voluptates"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "vero";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("tempore"),
                                            add("deserunt"),
                                            add("fugit"),
                                            add("ducimus"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "nulla";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("dolor"),
                                        }};
                                    }}),
                                }};
                                description = "dolore";
                                ins = new String[]{{
                                    add("ipsam"),
                                    add("eum"),
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
                                                    name = "Mrs. Timothy Douglas";
                                                    value = "in";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Naomi Von V";
                                                    value = "ipsa";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Pete Jast";
                                                    value = "ratione";
                                                }}),
                                            }};
                                            field = "veniam";
                                            metric = "exercitationem";
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
                                                    name = "Dr. Sadie Harris";
                                                    value = "ratione";
                                                }}),
                                            }};
                                            field = "deserunt";
                                            metric = "rem";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Marcella Johns";
                                                    value = "nobis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Andy Greenfelder";
                                                    value = "aspernatur";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ethel Dickens";
                                                    value = "a";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Salvatore Carter";
                                                    value = "sequi";
                                                }}),
                                            }};
                                            field = "perspiciatis";
                                            metric = "voluptates";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Fred Franecki";
                                                    value = "nostrum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Lorraine Stracke";
                                                    value = "temporibus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Velma Sporer";
                                                    value = "eius";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Elias Gutkowski";
                                                    value = "ea";
                                                }}),
                                            }};
                                            field = "fugiat";
                                            metric = "quas";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("porro"),
                                }};
                                permissions = new String[]{{
                                    add("a"),
                                }};
                            }}),
                        }};
                        version = 927286;
                    }};;
                }};;
                accessToken = "aperiam";
                alt = AltEnum.JSON;
                callback = "dolorum";
                fields = "tempora";
                key = "amet";
                oauthToken = "quas";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "odio";
                uploadProtocol = "nostrum";
                userIp = "quas";
            }};            

            ComputeLicensesSetIamPolicyResponse res = sdk.licenses.computeLicensesSetIamPolicy(req, new ComputeLicensesSetIamPolicySecurity() {{
                option1 = new ComputeLicensesSetIamPolicySecurityOption1("vel", "nemo") {{
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

            ComputeLicensesTestIamPermissionsRequest req = new ComputeLicensesTestIamPermissionsRequest("non", "ex") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("labore"),
                    }};
                }};;
                accessToken = "ducimus";
                alt = AltEnum.MEDIA;
                callback = "autem";
                fields = "adipisci";
                key = "hic";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "modi";
                uploadProtocol = "natus";
                userIp = "iste";
            }};            

            ComputeLicensesTestIamPermissionsResponse res = sdk.licenses.computeLicensesTestIamPermissions(req, new ComputeLicensesTestIamPermissionsSecurity() {{
                option1 = new ComputeLicensesTestIamPermissionsSecurityOption1("delectus", "eius") {{
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
