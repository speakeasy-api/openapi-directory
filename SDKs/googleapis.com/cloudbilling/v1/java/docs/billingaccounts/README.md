# billingAccounts

### Available Operations

* [cloudbillingBillingAccountsCreate](#cloudbillingbillingaccountscreate) - This method creates [billing subaccounts](https://cloud.google.com/billing/docs/concepts#subaccounts). Google Cloud resellers should use the Channel Services APIs, [accounts.customers.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers/create) and [accounts.customers.entitlements.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers.entitlements/create). When creating a subaccount, the current authenticated user must have the `billing.accounts.update` IAM permission on the parent account, which is typically given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access). This method will return an error if the parent account has not been provisioned as a reseller account.
* [cloudbillingBillingAccountsGet](#cloudbillingbillingaccountsget) - Gets information about a billing account. The current authenticated user must be a [viewer of the billing account](https://cloud.google.com/billing/docs/how-to/billing-access).
* [cloudbillingBillingAccountsGetIamPolicy](#cloudbillingbillingaccountsgetiampolicy) - Gets the access control policy for a billing account. The caller must have the `billing.accounts.getIamPolicy` permission on the account, which is often given to billing account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).
* [cloudbillingBillingAccountsList](#cloudbillingbillingaccountslist) - Lists the billing accounts that the current authenticated user has permission to [view](https://cloud.google.com/billing/docs/how-to/billing-access).
* [cloudbillingBillingAccountsPatch](#cloudbillingbillingaccountspatch) - Updates a billing account's fields. Currently the only field that can be edited is `display_name`. The current authenticated user must have the `billing.accounts.update` IAM permission, which is typically given to the [administrator](https://cloud.google.com/billing/docs/how-to/billing-access) of the billing account.
* [cloudbillingBillingAccountsProjectsList](#cloudbillingbillingaccountsprojectslist) - Lists the projects associated with a billing account. The current authenticated user must have the `billing.resourceAssociations.list` IAM permission, which is often given to billing account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).
* [cloudbillingBillingAccountsSetIamPolicy](#cloudbillingbillingaccountssetiampolicy) - Sets the access control policy for a billing account. Replaces any existing policy. The caller must have the `billing.accounts.setIamPolicy` permission on the account, which is often given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access).
* [cloudbillingBillingAccountsTestIamPermissions](#cloudbillingbillingaccountstestiampermissions) - Tests the access control policy for a billing account. This method takes the resource and a set of permissions as input and returns the subset of the input permissions that the caller is allowed for that resource.

## cloudbillingBillingAccountsCreate

This method creates [billing subaccounts](https://cloud.google.com/billing/docs/concepts#subaccounts). Google Cloud resellers should use the Channel Services APIs, [accounts.customers.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers/create) and [accounts.customers.entitlements.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers.entitlements/create). When creating a subaccount, the current authenticated user must have the `billing.accounts.update` IAM permission on the parent account, which is typically given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access). This method will return an error if the parent account has not been provisioned as a reseller account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsCreateRequest;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsCreateResponse;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsCreateSecurity;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsCreateSecurityOption1;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BillingAccountInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudbillingBillingAccountsCreateRequest req = new CloudbillingBillingAccountsCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                billingAccountInput = new BillingAccountInput() {{
                    displayName = "ipsa";
                    masterBillingAccount = "delectus";
                }};;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "minus";
                key = "placeat";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "excepturi";
                uploadProtocol = "nisi";
            }};            

            CloudbillingBillingAccountsCreateResponse res = sdk.billingAccounts.cloudbillingBillingAccountsCreate(req, new CloudbillingBillingAccountsCreateSecurity() {{
                option1 = new CloudbillingBillingAccountsCreateSecurityOption1("recusandae", "temporibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.billingAccount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudbillingBillingAccountsGet

Gets information about a billing account. The current authenticated user must be a [viewer of the billing account](https://cloud.google.com/billing/docs/how-to/billing-access).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsGetRequest;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsGetResponse;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsGetSecurity;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsGetSecurityOption1;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsGetSecurityOption2;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudbillingBillingAccountsGetRequest req = new CloudbillingBillingAccountsGetRequest("ab") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "veritatis";
                alt = AltEnum.MEDIA;
                callback = "perferendis";
                fields = "ipsam";
                key = "repellendus";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "odit";
                uploadProtocol = "at";
            }};            

            CloudbillingBillingAccountsGetResponse res = sdk.billingAccounts.cloudbillingBillingAccountsGet(req, new CloudbillingBillingAccountsGetSecurity() {{
                option1 = new CloudbillingBillingAccountsGetSecurityOption1("at", "maiores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.billingAccount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudbillingBillingAccountsGetIamPolicy

Gets the access control policy for a billing account. The caller must have the `billing.accounts.getIamPolicy` permission on the account, which is often given to billing account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsGetIamPolicySecurity;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsGetIamPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudbillingBillingAccountsGetIamPolicyRequest req = new CloudbillingBillingAccountsGetIamPolicyRequest("molestiae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quod";
                alt = AltEnum.MEDIA;
                callback = "totam";
                fields = "porro";
                key = "dolorum";
                oauthToken = "dicta";
                optionsRequestedPolicyVersion = 720633L;
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "occaecati";
                uploadProtocol = "fugit";
            }};            

            CloudbillingBillingAccountsGetIamPolicyResponse res = sdk.billingAccounts.cloudbillingBillingAccountsGetIamPolicy(req, new CloudbillingBillingAccountsGetIamPolicySecurity() {{
                option1 = new CloudbillingBillingAccountsGetIamPolicySecurityOption1("deleniti", "hic") {{
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

## cloudbillingBillingAccountsList

Lists the billing accounts that the current authenticated user has permission to [view](https://cloud.google.com/billing/docs/how-to/billing-access).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsListRequest;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsListResponse;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsListSecurity;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsListSecurityOption1;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsListSecurityOption2;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudbillingBillingAccountsListRequest req = new CloudbillingBillingAccountsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "totam";
                alt = AltEnum.JSON;
                callback = "commodi";
                fields = "molestiae";
                filter = "modi";
                key = "qui";
                oauthToken = "impedit";
                pageSize = 736918L;
                pageToken = "esse";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "excepturi";
                uploadProtocol = "aspernatur";
            }};            

            CloudbillingBillingAccountsListResponse res = sdk.billingAccounts.cloudbillingBillingAccountsList(req, new CloudbillingBillingAccountsListSecurity() {{
                option1 = new CloudbillingBillingAccountsListSecurityOption1("perferendis", "ad") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listBillingAccountsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudbillingBillingAccountsPatch

Updates a billing account's fields. Currently the only field that can be edited is `display_name`. The current authenticated user must have the `billing.accounts.update` IAM permission, which is typically given to the [administrator](https://cloud.google.com/billing/docs/how-to/billing-access) of the billing account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsPatchRequest;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsPatchResponse;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsPatchSecurity;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsPatchSecurityOption1;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BillingAccountInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudbillingBillingAccountsPatchRequest req = new CloudbillingBillingAccountsPatchRequest("natus") {{
                dollarXgafv = XgafvEnum.ONE;
                billingAccountInput = new BillingAccountInput() {{
                    displayName = "iste";
                    masterBillingAccount = "dolor";
                }};;
                accessToken = "natus";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "saepe";
                key = "fuga";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "corporis";
                updateMask = "iste";
                uploadType = "iure";
                uploadProtocol = "saepe";
            }};            

            CloudbillingBillingAccountsPatchResponse res = sdk.billingAccounts.cloudbillingBillingAccountsPatch(req, new CloudbillingBillingAccountsPatchSecurity() {{
                option1 = new CloudbillingBillingAccountsPatchSecurityOption1("quidem", "architecto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.billingAccount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudbillingBillingAccountsProjectsList

Lists the projects associated with a billing account. The current authenticated user must have the `billing.resourceAssociations.list` IAM permission, which is often given to billing account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsProjectsListRequest;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsProjectsListResponse;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsProjectsListSecurity;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsProjectsListSecurityOption1;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsProjectsListSecurityOption2;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsProjectsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudbillingBillingAccountsProjectsListRequest req = new CloudbillingBillingAccountsProjectsListRequest("ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "est";
                alt = AltEnum.MEDIA;
                callback = "laborum";
                fields = "dolores";
                key = "dolorem";
                oauthToken = "corporis";
                pageSize = 128926L;
                pageToken = "nobis";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "omnis";
                uploadProtocol = "nemo";
            }};            

            CloudbillingBillingAccountsProjectsListResponse res = sdk.billingAccounts.cloudbillingBillingAccountsProjectsList(req, new CloudbillingBillingAccountsProjectsListSecurity() {{
                option1 = new CloudbillingBillingAccountsProjectsListSecurityOption1("minima", "excepturi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listProjectBillingInfoResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudbillingBillingAccountsSetIamPolicy

Sets the access control policy for a billing account. Replaces any existing policy. The caller must have the `billing.accounts.setIamPolicy` permission on the account, which is often given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsSetIamPolicySecurity;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsSetIamPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditConfig;
import org.openapis.openapi.models.shared.AuditLogConfig;
import org.openapis.openapi.models.shared.AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.SetIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudbillingBillingAccountsSetIamPolicyRequest req = new CloudbillingBillingAccountsSetIamPolicyRequest("accusantium") {{
                dollarXgafv = XgafvEnum.ONE;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("architecto"),
                                            add("mollitia"),
                                            add("dolorem"),
                                            add("culpa"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("mollitia"),
                                            add("occaecati"),
                                            add("numquam"),
                                            add("commodi"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("velit"),
                                            add("error"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("vitae"),
                                            add("laborum"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "enim";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sequi"),
                                            add("tenetur"),
                                            add("ipsam"),
                                            add("id"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "aut";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("temporibus"),
                                            add("laborum"),
                                            add("quasi"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "voluptatibus";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "nihil";
                                    expression = "praesentium";
                                    location = "voluptatibus";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("voluptate"),
                                    add("cum"),
                                    add("perferendis"),
                                }};
                                role = "doloremque";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "reprehenderit";
                                    expression = "ut";
                                    location = "maiores";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("dolore"),
                                    add("iusto"),
                                }};
                                role = "dicta";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "harum";
                                    expression = "enim";
                                    location = "accusamus";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("quae"),
                                    add("ipsum"),
                                    add("quidem"),
                                    add("molestias"),
                                }};
                                role = "excepturi";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "pariatur";
                                    expression = "modi";
                                    location = "praesentium";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("quasi"),
                                    add("repudiandae"),
                                    add("sint"),
                                    add("veritatis"),
                                }};
                                role = "itaque";
                            }}),
                        }};
                        etag = "incidunt";
                        version = 318569;
                    }};;
                    updateMask = "consequatur";
                }};;
                accessToken = "est";
                alt = AltEnum.PROTO;
                callback = "explicabo";
                fields = "deserunt";
                key = "distinctio";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "modi";
                uploadProtocol = "qui";
            }};            

            CloudbillingBillingAccountsSetIamPolicyResponse res = sdk.billingAccounts.cloudbillingBillingAccountsSetIamPolicy(req, new CloudbillingBillingAccountsSetIamPolicySecurity() {{
                option1 = new CloudbillingBillingAccountsSetIamPolicySecurityOption1("aliquid", "cupiditate") {{
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

## cloudbillingBillingAccountsTestIamPermissions

Tests the access control policy for a billing account. This method takes the resource and a set of permissions as input and returns the subset of the input permissions that the caller is allowed for that resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudbillingBillingAccountsTestIamPermissionsRequest req = new CloudbillingBillingAccountsTestIamPermissionsRequest("quos") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("assumenda"),
                    }};
                }};;
                accessToken = "ipsam";
                alt = AltEnum.JSON;
                callback = "fugit";
                fields = "dolorum";
                key = "excepturi";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "tempore";
                uploadProtocol = "labore";
            }};            

            CloudbillingBillingAccountsTestIamPermissionsResponse res = sdk.billingAccounts.cloudbillingBillingAccountsTestIamPermissions(req, new CloudbillingBillingAccountsTestIamPermissionsSecurity() {{
                option1 = new CloudbillingBillingAccountsTestIamPermissionsSecurityOption1("delectus", "eum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.testIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
