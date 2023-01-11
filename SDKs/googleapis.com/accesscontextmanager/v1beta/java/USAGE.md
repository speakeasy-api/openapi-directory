<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest req = new AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest() {{
                security = new AccesscontextmanagerAccessPoliciesAccessLevelsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new AccesscontextmanagerAccessPoliciesAccessLevelsCreatePathParams() {{
                    parent = "sit";
                }};
                queryParams = new AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new AccessLevel() {{
                    basic = new BasicLevel() {{
                        combiningFunction = "OR";
                        conditions = new openapisdk.models.shared.Condition[]() {{
                            add(new Condition() {{
                                devicePolicy = new DevicePolicy() {{
                                    allowedDeviceManagementLevels = new openapisdk.models.shared.DevicePolicyAllowedDeviceManagementLevelsEnum[]() {{
                                        add("BASIC"),
                                    }};
                                    allowedEncryptionStatuses = new openapisdk.models.shared.DevicePolicyAllowedEncryptionStatusesEnum[]() {{
                                        add("UNENCRYPTED"),
                                        add("UNENCRYPTED"),
                                        add("UNENCRYPTED"),
                                    }};
                                    osConstraints = new openapisdk.models.shared.OsConstraint[]() {{
                                        add(new OsConstraint() {{
                                            minimumVersion = "vitae";
                                            osType = "DESKTOP_CHROME_OS";
                                            requireVerifiedChromeOs = true;
                                        }}),
                                        add(new OsConstraint() {{
                                            minimumVersion = "illum";
                                            osType = "DESKTOP_LINUX";
                                            requireVerifiedChromeOs = false;
                                        }}),
                                        add(new OsConstraint() {{
                                            minimumVersion = "odio";
                                            osType = "OS_UNSPECIFIED";
                                            requireVerifiedChromeOs = false;
                                        }}),
                                    }};
                                    requireAdminApproval = true;
                                    requireCorpOwned = true;
                                    requireScreenlock = false;
                                }};
                                ipSubnetworks = new String[]() {{
                                    add("quis"),
                                    add("est"),
                                }};
                                members = new String[]() {{
                                    add("odit"),
                                    add("non"),
                                    add("voluptas"),
                                }};
                                negate = true;
                                regions = new String[]() {{
                                    add("illo"),
                                }};
                                requiredAccessLevels = new String[]() {{
                                    add("officiis"),
                                    add("autem"),
                                    add("consectetur"),
                                }};
                            }}),
                        }};
                    }};
                    custom = new CustomLevel() {{
                        expr = new Expr() {{
                            description = "nobis";
                            expression = "odio";
                            location = "qui";
                            title = "recusandae";
                        }};
                    }};
                    description = "at";
                    name = "ipsum";
                    title = "eveniet";
                }};
            }};

            AccesscontextmanagerAccessPoliciesAccessLevelsCreateResponse res = sdk.accessPolicies.accesscontextmanagerAccessPoliciesAccessLevelsCreate(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->