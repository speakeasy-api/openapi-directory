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
                    parent = "fuga";
                }};
                queryParams = new AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "autem";
                    alt = "proto";
                    callback = "omnis";
                    fields = "esse";
                    key = "veritatis";
                    oauthToken = "voluptas";
                    prettyPrint = false;
                    quotaUser = "sit";
                    uploadType = "saepe";
                    uploadProtocol = "est";
                }};
                request = new AccessLevel() {{
                    basic = new BasicLevel() {{
                        combiningFunction = "OR";
                        conditions = new openapisdk.models.shared.Condition[]() {{
                            add(new Condition() {{
                                devicePolicy = new DevicePolicy() {{
                                    allowedDeviceManagementLevels = new openapisdk.models.shared.DevicePolicyAllowedDeviceManagementLevelsEnum[]() {{
                                        add("MANAGEMENT_UNSPECIFIED"),
                                    }};
                                    allowedEncryptionStatuses = new openapisdk.models.shared.DevicePolicyAllowedEncryptionStatusesEnum[]() {{
                                        add("ENCRYPTION_UNSUPPORTED"),
                                        add("ENCRYPTION_UNSUPPORTED"),
                                    }};
                                    osConstraints = new openapisdk.models.shared.OsConstraint[]() {{
                                        add(new OsConstraint() {{
                                            minimumVersion = "repellat";
                                            osType = "DESKTOP_LINUX";
                                            requireVerifiedChromeOs = true;
                                        }}),
                                    }};
                                    requireAdminApproval = true;
                                    requireCorpOwned = true;
                                    requireScreenlock = true;
                                }};
                                ipSubnetworks = new String[]() {{
                                    add("nemo"),
                                    add("architecto"),
                                    add("neque"),
                                }};
                                members = new String[]() {{
                                    add("saepe"),
                                }};
                                negate = false;
                                regions = new String[]() {{
                                    add("consequuntur"),
                                }};
                                requiredAccessLevels = new String[]() {{
                                    add("mollitia"),
                                    add("autem"),
                                    add("distinctio"),
                                }};
                            }}),
                        }};
                    }};
                    custom = new CustomLevel() {{
                        expr = new Expr() {{
                            description = "consequuntur";
                            expression = "autem";
                            location = "vitae";
                            title = "fugit";
                        }};
                    }};
                    description = "non";
                    name = "aut";
                    title = "autem";
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