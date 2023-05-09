# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accessPolicies](docs/accesspolicies/README.md)

* [accesscontextmanagerAccessPoliciesAccessLevelsCreate](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesaccesslevelscreate) - Create an Access Level. The longrunning operation from this RPC will have a successful status once the Access Level has propagated to long-lasting storage. Access Levels containing errors will result in an error response for the first error encountered.
* [accesscontextmanagerAccessPoliciesAccessLevelsList](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesaccesslevelslist) - List all Access Levels for an access policy.
* [accesscontextmanagerAccessPoliciesCreate](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciescreate) - Create an `AccessPolicy`. Fails if this organization already has a `AccessPolicy`. The longrunning Operation will have a successful status once the `AccessPolicy` has propagated to long-lasting storage. Syntactic and basic semantic errors will be returned in `metadata` as a BadRequest proto.
* [accesscontextmanagerAccessPoliciesList](docs/accesspolicies/README.md#accesscontextmanageraccesspolicieslist) - List all AccessPolicies under a container.
* [accesscontextmanagerAccessPoliciesServicePerimetersCreate](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesserviceperimeterscreate) - Create a Service Perimeter. The longrunning operation from this RPC will have a successful status once the Service Perimeter has propagated to long-lasting storage. Service Perimeters containing errors will result in an error response for the first error encountered.
* [accesscontextmanagerAccessPoliciesServicePerimetersDelete](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesserviceperimetersdelete) - Delete a Service Perimeter by resource name. The longrunning operation from this RPC will have a successful status once the Service Perimeter has been removed from long-lasting storage.
* [accesscontextmanagerAccessPoliciesServicePerimetersList](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesserviceperimeterslist) - List all Service Perimeters for an access policy.
* [accesscontextmanagerAccessPoliciesServicePerimetersPatch](docs/accesspolicies/README.md#accesscontextmanageraccesspoliciesserviceperimeterspatch) - Update a Service Perimeter. The longrunning operation from this RPC will have a successful status once the changes to the Service Perimeter have propagated to long-lasting storage. Service Perimeter containing errors will result in an error response for the first error encountered.

### [operations](docs/operations/README.md)

* [accesscontextmanagerOperationsGet](docs/operations/README.md#accesscontextmanageroperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
