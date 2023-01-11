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
                    parent = "dolores";
                }};
                queryParams = new AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "maiores";
                    alt = "media";
                    callback = "quaerat";
                    fields = "possimus";
                    key = "harum";
                    oauthToken = "laudantium";
                    prettyPrint = true;
                    quotaUser = "deserunt";
                    uploadType = "qui";
                    uploadProtocol = "inventore";
                }};
                request = new AccessLevel() {{
                    basic = new BasicLevel() {{
                        combiningFunction = "OR";
                        conditions = new openapisdk.models.shared.Condition[]() {{
                            add(new Condition() {{
                                devicePolicy = new DevicePolicy() {{
                                    allowedDeviceManagementLevels = new openapisdk.models.shared.DevicePolicyAllowedDeviceManagementLevelsEnum[]() {{
                                        add("COMPLETE"),
                                        add("MANAGEMENT_UNSPECIFIED"),
                                    }};
                                    allowedEncryptionStatuses = new openapisdk.models.shared.DevicePolicyAllowedEncryptionStatusesEnum[]() {{
                                        add("ENCRYPTED"),
                                    }};
                                    osConstraints = new openapisdk.models.shared.OsConstraint[]() {{
                                        add(new OsConstraint() {{
                                            minimumVersion = "adipisci";
                                            osType = "IOS";
                                            requireVerifiedChromeOs = true;
                                        }}),
                                        add(new OsConstraint() {{
                                            minimumVersion = "omnis";
                                            osType = "DESKTOP_CHROME_OS";
                                            requireVerifiedChromeOs = false;
                                        }}),
                                    }};
                                    requireAdminApproval = false;
                                    requireCorpOwned = true;
                                    requireScreenlock = true;
                                }};
                                ipSubnetworks = new String[]() {{
                                    add("ex"),
                                }};
                                members = new String[]() {{
                                    add("nihil"),
                                    add("quam"),
                                    add("et"),
                                }};
                                negate = false;
                                regions = new String[]() {{
                                    add("provident"),
                                    add("voluptatem"),
                                    add("qui"),
                                }};
                                requiredAccessLevels = new String[]() {{
                                    add("omnis"),
                                    add("corporis"),
                                }};
                            }}),
                            add(new Condition() {{
                                devicePolicy = new DevicePolicy() {{
                                    allowedDeviceManagementLevels = new openapisdk.models.shared.DevicePolicyAllowedDeviceManagementLevelsEnum[]() {{
                                        add("MANAGEMENT_UNSPECIFIED"),
                                        add("BASIC"),
                                    }};
                                    allowedEncryptionStatuses = new openapisdk.models.shared.DevicePolicyAllowedEncryptionStatusesEnum[]() {{
                                        add("UNENCRYPTED"),
                                        add("UNENCRYPTED"),
                                    }};
                                    osConstraints = new openapisdk.models.shared.OsConstraint[]() {{
                                        add(new OsConstraint() {{
                                            minimumVersion = "iure";
                                            osType = "DESKTOP_LINUX";
                                            requireVerifiedChromeOs = true;
                                        }}),
                                        add(new OsConstraint() {{
                                            minimumVersion = "aut";
                                            osType = "OS_UNSPECIFIED";
                                            requireVerifiedChromeOs = true;
                                        }}),
                                        add(new OsConstraint() {{
                                            minimumVersion = "eligendi";
                                            osType = "DESKTOP_CHROME_OS";
                                            requireVerifiedChromeOs = false;
                                        }}),
                                    }};
                                    requireAdminApproval = true;
                                    requireCorpOwned = true;
                                    requireScreenlock = false;
                                }};
                                ipSubnetworks = new String[]() {{
                                    add("molestiae"),
                                    add("numquam"),
                                }};
                                members = new String[]() {{
                                    add("consequatur"),
                                }};
                                negate = false;
                                regions = new String[]() {{
                                    add("quos"),
                                }};
                                requiredAccessLevels = new String[]() {{
                                    add("est"),
                                    add("neque"),
                                }};
                            }}),
                        }};
                    }};
                    custom = new CustomLevel() {{
                        expr = new Expr() {{
                            description = "explicabo";
                            expression = "quis";
                            location = "eius";
                            title = "voluptatum";
                        }};
                    }};
                    description = "rerum";
                    name = "voluptas";
                    title = "aut";
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