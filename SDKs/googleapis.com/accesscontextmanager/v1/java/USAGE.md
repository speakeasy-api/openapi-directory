<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateResponse;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateSecurity;
import org.openapis.openapi.models.shared.AccessLevel;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BasicLevel;
import org.openapis.openapi.models.shared.BasicLevelCombiningFunctionEnum;
import org.openapis.openapi.models.shared.Condition;
import org.openapis.openapi.models.shared.CustomLevel;
import org.openapis.openapi.models.shared.DevicePolicy;
import org.openapis.openapi.models.shared.DevicePolicyAllowedDeviceManagementLevelsEnum;
import org.openapis.openapi.models.shared.DevicePolicyAllowedEncryptionStatusesEnum;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.OsConstraint;
import org.openapis.openapi.models.shared.OsConstraintOsTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest req = new AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessLevel = new AccessLevel() {{
                    basic = new BasicLevel() {{
                        combiningFunction = BasicLevelCombiningFunctionEnum.OR;
                        conditions = new org.openapis.openapi.models.shared.Condition[]{{
                            add(new Condition() {{
                                devicePolicy = new DevicePolicy() {{
                                    allowedDeviceManagementLevels = new org.openapis.openapi.models.shared.DevicePolicyAllowedDeviceManagementLevelsEnum[]{{
                                        add(DevicePolicyAllowedDeviceManagementLevelsEnum.COMPLETE),
                                        add(DevicePolicyAllowedDeviceManagementLevelsEnum.BASIC),
                                        add(DevicePolicyAllowedDeviceManagementLevelsEnum.COMPLETE),
                                    }};
                                    allowedEncryptionStatuses = new org.openapis.openapi.models.shared.DevicePolicyAllowedEncryptionStatusesEnum[]{{
                                        add(DevicePolicyAllowedEncryptionStatusesEnum.UNENCRYPTED),
                                        add(DevicePolicyAllowedEncryptionStatusesEnum.UNENCRYPTED),
                                    }};
                                    osConstraints = new org.openapis.openapi.models.shared.OsConstraint[]{{
                                        add(new OsConstraint() {{
                                            minimumVersion = "iure";
                                            osType = OsConstraintOsTypeEnum.DESKTOP_WINDOWS;
                                            requireVerifiedChromeOs = false;
                                        }}),
                                        add(new OsConstraint() {{
                                            minimumVersion = "debitis";
                                            osType = OsConstraintOsTypeEnum.OS_UNSPECIFIED;
                                            requireVerifiedChromeOs = false;
                                        }}),
                                    }};
                                    requireAdminApproval = false;
                                    requireCorpOwned = false;
                                    requireScreenlock = false;
                                }};
                                ipSubnetworks = new String[]{{
                                    add("tempora"),
                                    add("suscipit"),
                                    add("molestiae"),
                                    add("minus"),
                                }};
                                members = new String[]{{
                                    add("voluptatum"),
                                    add("iusto"),
                                    add("excepturi"),
                                    add("nisi"),
                                }};
                                negate = false;
                                regions = new String[]{{
                                    add("temporibus"),
                                    add("ab"),
                                    add("quis"),
                                    add("veritatis"),
                                }};
                                requiredAccessLevels = new String[]{{
                                    add("perferendis"),
                                    add("ipsam"),
                                    add("repellendus"),
                                }};
                            }}),
                            add(new Condition() {{
                                devicePolicy = new DevicePolicy() {{
                                    allowedDeviceManagementLevels = new org.openapis.openapi.models.shared.DevicePolicyAllowedDeviceManagementLevelsEnum[]{{
                                        add(DevicePolicyAllowedDeviceManagementLevelsEnum.COMPLETE),
                                        add(DevicePolicyAllowedDeviceManagementLevelsEnum.MANAGEMENT_UNSPECIFIED),
                                        add(DevicePolicyAllowedDeviceManagementLevelsEnum.COMPLETE),
                                        add(DevicePolicyAllowedDeviceManagementLevelsEnum.COMPLETE),
                                    }};
                                    allowedEncryptionStatuses = new org.openapis.openapi.models.shared.DevicePolicyAllowedEncryptionStatusesEnum[]{{
                                        add(DevicePolicyAllowedEncryptionStatusesEnum.ENCRYPTION_UNSUPPORTED),
                                        add(DevicePolicyAllowedEncryptionStatusesEnum.ENCRYPTED),
                                        add(DevicePolicyAllowedEncryptionStatusesEnum.ENCRYPTED),
                                        add(DevicePolicyAllowedEncryptionStatusesEnum.ENCRYPTION_UNSUPPORTED),
                                    }};
                                    osConstraints = new org.openapis.openapi.models.shared.OsConstraint[]{{
                                        add(new OsConstraint() {{
                                            minimumVersion = "porro";
                                            osType = OsConstraintOsTypeEnum.DESKTOP_CHROME_OS;
                                            requireVerifiedChromeOs = false;
                                        }}),
                                        add(new OsConstraint() {{
                                            minimumVersion = "dicta";
                                            osType = OsConstraintOsTypeEnum.ANDROID;
                                            requireVerifiedChromeOs = false;
                                        }}),
                                        add(new OsConstraint() {{
                                            minimumVersion = "officia";
                                            osType = OsConstraintOsTypeEnum.DESKTOP_CHROME_OS;
                                            requireVerifiedChromeOs = false;
                                        }}),
                                    }};
                                    requireAdminApproval = false;
                                    requireCorpOwned = false;
                                    requireScreenlock = false;
                                }};
                                ipSubnetworks = new String[]{{
                                    add("deleniti"),
                                }};
                                members = new String[]{{
                                    add("optio"),
                                    add("totam"),
                                    add("beatae"),
                                    add("commodi"),
                                }};
                                negate = false;
                                regions = new String[]{{
                                    add("modi"),
                                    add("qui"),
                                }};
                                requiredAccessLevels = new String[]{{
                                    add("cum"),
                                    add("esse"),
                                    add("ipsum"),
                                    add("excepturi"),
                                }};
                            }}),
                            add(new Condition() {{
                                devicePolicy = new DevicePolicy() {{
                                    allowedDeviceManagementLevels = new org.openapis.openapi.models.shared.DevicePolicyAllowedDeviceManagementLevelsEnum[]{{
                                        add(DevicePolicyAllowedDeviceManagementLevelsEnum.MANAGEMENT_UNSPECIFIED),
                                    }};
                                    allowedEncryptionStatuses = new org.openapis.openapi.models.shared.DevicePolicyAllowedEncryptionStatusesEnum[]{{
                                        add(DevicePolicyAllowedEncryptionStatusesEnum.UNENCRYPTED),
                                        add(DevicePolicyAllowedEncryptionStatusesEnum.ENCRYPTION_UNSPECIFIED),
                                    }};
                                    osConstraints = new org.openapis.openapi.models.shared.OsConstraint[]{{
                                        add(new OsConstraint() {{
                                            minimumVersion = "dolor";
                                            osType = OsConstraintOsTypeEnum.DESKTOP_CHROME_OS;
                                            requireVerifiedChromeOs = false;
                                        }}),
                                        add(new OsConstraint() {{
                                            minimumVersion = "laboriosam";
                                            osType = OsConstraintOsTypeEnum.IOS;
                                            requireVerifiedChromeOs = false;
                                        }}),
                                        add(new OsConstraint() {{
                                            minimumVersion = "saepe";
                                            osType = OsConstraintOsTypeEnum.DESKTOP_CHROME_OS;
                                            requireVerifiedChromeOs = false;
                                        }}),
                                    }};
                                    requireAdminApproval = false;
                                    requireCorpOwned = false;
                                    requireScreenlock = false;
                                }};
                                ipSubnetworks = new String[]{{
                                    add("corporis"),
                                    add("iste"),
                                }};
                                members = new String[]{{
                                    add("saepe"),
                                    add("quidem"),
                                }};
                                negate = false;
                                regions = new String[]{{
                                    add("ipsa"),
                                }};
                                requiredAccessLevels = new String[]{{
                                    add("est"),
                                    add("mollitia"),
                                    add("laborum"),
                                    add("dolores"),
                                }};
                            }}),
                            add(new Condition() {{
                                devicePolicy = new DevicePolicy() {{
                                    allowedDeviceManagementLevels = new org.openapis.openapi.models.shared.DevicePolicyAllowedDeviceManagementLevelsEnum[]{{
                                        add(DevicePolicyAllowedDeviceManagementLevelsEnum.NONE),
                                    }};
                                    allowedEncryptionStatuses = new org.openapis.openapi.models.shared.DevicePolicyAllowedEncryptionStatusesEnum[]{{
                                        add(DevicePolicyAllowedEncryptionStatusesEnum.ENCRYPTED),
                                    }};
                                    osConstraints = new org.openapis.openapi.models.shared.OsConstraint[]{{
                                        add(new OsConstraint() {{
                                            minimumVersion = "omnis";
                                            osType = OsConstraintOsTypeEnum.DESKTOP_WINDOWS;
                                            requireVerifiedChromeOs = false;
                                        }}),
                                        add(new OsConstraint() {{
                                            minimumVersion = "minima";
                                            osType = OsConstraintOsTypeEnum.DESKTOP_LINUX;
                                            requireVerifiedChromeOs = false;
                                        }}),
                                    }};
                                    requireAdminApproval = false;
                                    requireCorpOwned = false;
                                    requireScreenlock = false;
                                }};
                                ipSubnetworks = new String[]{{
                                    add("iure"),
                                }};
                                members = new String[]{{
                                    add("doloribus"),
                                    add("sapiente"),
                                    add("architecto"),
                                }};
                                negate = false;
                                regions = new String[]{{
                                    add("dolorem"),
                                    add("culpa"),
                                    add("consequuntur"),
                                }};
                                requiredAccessLevels = new String[]{{
                                    add("mollitia"),
                                    add("occaecati"),
                                    add("numquam"),
                                    add("commodi"),
                                }};
                            }}),
                        }};
                    }};;
                    custom = new CustomLevel() {{
                        expr = new Expr() {{
                            description = "quam";
                            expression = "molestiae";
                            location = "velit";
                            title = "Miss";
                        }};;
                    }};;
                    description = "quia";
                    name = "Gloria Padberg";
                    title = "Mr.";
                }};;
                accessToken = "quo";
                alt = AltEnum.JSON;
                callback = "tenetur";
                fields = "ipsam";
                key = "id";
                oauthToken = "possimus";
                prettyPrint = false;
                quotaUser = "aut";
                uploadType = "quasi";
                uploadProtocol = "error";
            }};            

            AccesscontextmanagerAccessPoliciesAccessLevelsCreateResponse res = sdk.accessPolicies.accesscontextmanagerAccessPoliciesAccessLevelsCreate(req, new AccesscontextmanagerAccessPoliciesAccessLevelsCreateSecurity("temporibus", "laborum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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
<!-- End SDK Example Usage -->