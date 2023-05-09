# accessPolicies

### Available Operations

* [accesscontextmanagerAccessPoliciesAccessLevelsCreate](#accesscontextmanageraccesspoliciesaccesslevelscreate) - Creates an access level. The long-running operation from this RPC has a successful status after the access level propagates to long-lasting storage. If access levels contain errors, an error response is returned for the first error encountered.
* [accesscontextmanagerAccessPoliciesAccessLevelsList](#accesscontextmanageraccesspoliciesaccesslevelslist) - Lists all access levels for an access policy.
* [accesscontextmanagerAccessPoliciesAccessLevelsReplaceAll](#accesscontextmanageraccesspoliciesaccesslevelsreplaceall) - Replaces all existing access levels in an access policy with the access levels provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. If the replacement contains errors, an error response is returned for the first error encountered. Upon error, the replacement is cancelled, and existing access levels are not affected. The Operation.response field contains ReplaceAccessLevelsResponse. Removing access levels contained in existing service perimeters result in an error.
* [accesscontextmanagerAccessPoliciesAuthorizedOrgsDescsCreate](#accesscontextmanageraccesspoliciesauthorizedorgsdescscreate) - Creates an authorized orgs desc. The long-running operation from this RPC has a successful status after the authorized orgs desc propagates to long-lasting storage. If a authorized orgs desc contains errors, an error response is returned for the first error encountered. The name of this `AuthorizedOrgsDesc` will be assigned during creation.
* [accesscontextmanagerAccessPoliciesAuthorizedOrgsDescsList](#accesscontextmanageraccesspoliciesauthorizedorgsdescslist) - Lists all authorized orgs descs for an access policy.
* [accesscontextmanagerAccessPoliciesCreate](#accesscontextmanageraccesspoliciescreate) - Creates an access policy. This method fails if the organization already has an access policy. The long-running operation has a successful status after the access policy propagates to long-lasting storage. Syntactic and basic semantic errors are returned in `metadata` as a BadRequest proto.
* [accesscontextmanagerAccessPoliciesGetIamPolicy](#accesscontextmanageraccesspoliciesgetiampolicy) - Gets the IAM policy for the specified Access Context Manager access policy.
* [accesscontextmanagerAccessPoliciesList](#accesscontextmanageraccesspolicieslist) - Lists all access policies in an organization.
* [accesscontextmanagerAccessPoliciesServicePerimetersCommit](#accesscontextmanageraccesspoliciesserviceperimeterscommit) - Commits the dry-run specification for all the service perimeters in an access policy. A commit operation on a service perimeter involves copying its `spec` field to the `status` field of the service perimeter. Only service perimeters with `use_explicit_dry_run_spec` field set to true are affected by a commit operation. The long-running operation from this RPC has a successful status after the dry-run specifications for all the service perimeters have been committed. If a commit fails, it causes the long-running operation to return an error response and the entire commit operation is cancelled. When successful, the Operation.response field contains CommitServicePerimetersResponse. The `dry_run` and the `spec` fields are cleared after a successful commit operation.
* [accesscontextmanagerAccessPoliciesServicePerimetersCreate](#accesscontextmanageraccesspoliciesserviceperimeterscreate) - Creates a service perimeter. The long-running operation from this RPC has a successful status after the service perimeter propagates to long-lasting storage. If a service perimeter contains errors, an error response is returned for the first error encountered.
* [accesscontextmanagerAccessPoliciesServicePerimetersList](#accesscontextmanageraccesspoliciesserviceperimeterslist) - Lists all service perimeters for an access policy.
* [accesscontextmanagerAccessPoliciesServicePerimetersReplaceAll](#accesscontextmanageraccesspoliciesserviceperimetersreplaceall) - Replace all existing service perimeters in an access policy with the service perimeters provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. Replacements containing errors result in an error response for the first error encountered. Upon an error, replacement are cancelled and existing service perimeters are not affected. The Operation.response field contains ReplaceServicePerimetersResponse.
* [accesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissions](#accesscontextmanageraccesspoliciesserviceperimeterstestiampermissions) - Returns the IAM permissions that the caller has on the specified Access Context Manager resource. The resource can be an AccessPolicy, AccessLevel, or ServicePerimeter. This method does not support other resources.
* [accesscontextmanagerAccessPoliciesSetIamPolicy](#accesscontextmanageraccesspoliciessetiampolicy) - Sets the IAM policy for the specified Access Context Manager access policy. This method replaces the existing IAM policy on the access policy. The IAM policy controls the set of users who can perform specific operations on the Access Context Manager access policy.

## accesscontextmanagerAccessPoliciesAccessLevelsCreate

Creates an access level. The long-running operation from this RPC has a successful status after the access level propagates to long-lasting storage. If access levels contain errors, an error response is returned for the first error encountered.

### Example Usage

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

            AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest req = new AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest("quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessLevel = new AccessLevel() {{
                    basic = new BasicLevel() {{
                        combiningFunction = BasicLevelCombiningFunctionEnum.OR;
                        conditions = new org.openapis.openapi.models.shared.Condition[]{{
                            add(new Condition() {{
                                devicePolicy = new DevicePolicy() {{
                                    allowedDeviceManagementLevels = new org.openapis.openapi.models.shared.DevicePolicyAllowedDeviceManagementLevelsEnum[]{{
                                        add(DevicePolicyAllowedDeviceManagementLevelsEnum.BASIC),
                                        add(DevicePolicyAllowedDeviceManagementLevelsEnum.COMPLETE),
                                    }};
                                    allowedEncryptionStatuses = new org.openapis.openapi.models.shared.DevicePolicyAllowedEncryptionStatusesEnum[]{{
                                        add(DevicePolicyAllowedEncryptionStatusesEnum.UNENCRYPTED),
                                    }};
                                    osConstraints = new org.openapis.openapi.models.shared.OsConstraint[]{{
                                        add(new OsConstraint() {{
                                            minimumVersion = "cum";
                                            osType = OsConstraintOsTypeEnum.OS_UNSPECIFIED;
                                            requireVerifiedChromeOs = false;
                                        }}),
                                        add(new OsConstraint() {{
                                            minimumVersion = "doloremque";
                                            osType = OsConstraintOsTypeEnum.DESKTOP_LINUX;
                                            requireVerifiedChromeOs = false;
                                        }}),
                                    }};
                                    requireAdminApproval = false;
                                    requireCorpOwned = false;
                                    requireScreenlock = false;
                                }};
                                ipSubnetworks = new String[]{{
                                    add("maiores"),
                                    add("dicta"),
                                }};
                                members = new String[]{{
                                    add("dolore"),
                                    add("iusto"),
                                }};
                                negate = false;
                                regions = new String[]{{
                                    add("harum"),
                                }};
                                requiredAccessLevels = new String[]{{
                                    add("accusamus"),
                                    add("commodi"),
                                }};
                            }}),
                            add(new Condition() {{
                                devicePolicy = new DevicePolicy() {{
                                    allowedDeviceManagementLevels = new org.openapis.openapi.models.shared.DevicePolicyAllowedDeviceManagementLevelsEnum[]{{
                                        add(DevicePolicyAllowedDeviceManagementLevelsEnum.MANAGEMENT_UNSPECIFIED),
                                        add(DevicePolicyAllowedDeviceManagementLevelsEnum.MANAGEMENT_UNSPECIFIED),
                                        add(DevicePolicyAllowedDeviceManagementLevelsEnum.BASIC),
                                        add(DevicePolicyAllowedDeviceManagementLevelsEnum.BASIC),
                                    }};
                                    allowedEncryptionStatuses = new org.openapis.openapi.models.shared.DevicePolicyAllowedEncryptionStatusesEnum[]{{
                                        add(DevicePolicyAllowedEncryptionStatusesEnum.ENCRYPTED),
                                        add(DevicePolicyAllowedEncryptionStatusesEnum.ENCRYPTION_UNSUPPORTED),
                                        add(DevicePolicyAllowedEncryptionStatusesEnum.UNENCRYPTED),
                                    }};
                                    osConstraints = new org.openapis.openapi.models.shared.OsConstraint[]{{
                                        add(new OsConstraint() {{
                                            minimumVersion = "voluptates";
                                            osType = OsConstraintOsTypeEnum.OS_UNSPECIFIED;
                                            requireVerifiedChromeOs = false;
                                        }}),
                                        add(new OsConstraint() {{
                                            minimumVersion = "repudiandae";
                                            osType = OsConstraintOsTypeEnum.DESKTOP_CHROME_OS;
                                            requireVerifiedChromeOs = false;
                                        }}),
                                        add(new OsConstraint() {{
                                            minimumVersion = "veritatis";
                                            osType = OsConstraintOsTypeEnum.IOS;
                                            requireVerifiedChromeOs = false;
                                        }}),
                                    }};
                                    requireAdminApproval = false;
                                    requireCorpOwned = false;
                                    requireScreenlock = false;
                                }};
                                ipSubnetworks = new String[]{{
                                    add("enim"),
                                    add("consequatur"),
                                }};
                                members = new String[]{{
                                    add("quibusdam"),
                                    add("explicabo"),
                                    add("deserunt"),
                                }};
                                negate = false;
                                regions = new String[]{{
                                    add("quibusdam"),
                                    add("labore"),
                                    add("modi"),
                                }};
                                requiredAccessLevels = new String[]{{
                                    add("aliquid"),
                                }};
                            }}),
                            add(new Condition() {{
                                devicePolicy = new DevicePolicy() {{
                                    allowedDeviceManagementLevels = new org.openapis.openapi.models.shared.DevicePolicyAllowedDeviceManagementLevelsEnum[]{{
                                        add(DevicePolicyAllowedDeviceManagementLevelsEnum.BASIC),
                                        add(DevicePolicyAllowedDeviceManagementLevelsEnum.MANAGEMENT_UNSPECIFIED),
                                        add(DevicePolicyAllowedDeviceManagementLevelsEnum.MANAGEMENT_UNSPECIFIED),
                                    }};
                                    allowedEncryptionStatuses = new org.openapis.openapi.models.shared.DevicePolicyAllowedEncryptionStatusesEnum[]{{
                                        add(DevicePolicyAllowedEncryptionStatusesEnum.ENCRYPTION_UNSUPPORTED),
                                        add(DevicePolicyAllowedEncryptionStatusesEnum.ENCRYPTION_UNSPECIFIED),
                                        add(DevicePolicyAllowedEncryptionStatusesEnum.ENCRYPTION_UNSPECIFIED),
                                        add(DevicePolicyAllowedEncryptionStatusesEnum.UNENCRYPTED),
                                    }};
                                    osConstraints = new org.openapis.openapi.models.shared.OsConstraint[]{{
                                        add(new OsConstraint() {{
                                            minimumVersion = "tempora";
                                            osType = OsConstraintOsTypeEnum.DESKTOP_CHROME_OS;
                                            requireVerifiedChromeOs = false;
                                        }}),
                                        add(new OsConstraint() {{
                                            minimumVersion = "tempore";
                                            osType = OsConstraintOsTypeEnum.DESKTOP_WINDOWS;
                                            requireVerifiedChromeOs = false;
                                        }}),
                                        add(new OsConstraint() {{
                                            minimumVersion = "delectus";
                                            osType = OsConstraintOsTypeEnum.DESKTOP_LINUX;
                                            requireVerifiedChromeOs = false;
                                        }}),
                                    }};
                                    requireAdminApproval = false;
                                    requireCorpOwned = false;
                                    requireScreenlock = false;
                                }};
                                ipSubnetworks = new String[]{{
                                    add("eligendi"),
                                }};
                                members = new String[]{{
                                    add("aliquid"),
                                    add("provident"),
                                    add("necessitatibus"),
                                }};
                                negate = false;
                                regions = new String[]{{
                                    add("officia"),
                                    add("dolor"),
                                    add("debitis"),
                                }};
                                requiredAccessLevels = new String[]{{
                                    add("dolorum"),
                                    add("in"),
                                    add("in"),
                                    add("illum"),
                                }};
                            }}),
                            add(new Condition() {{
                                devicePolicy = new DevicePolicy() {{
                                    allowedDeviceManagementLevels = new org.openapis.openapi.models.shared.DevicePolicyAllowedDeviceManagementLevelsEnum[]{{
                                        add(DevicePolicyAllowedDeviceManagementLevelsEnum.BASIC),
                                        add(DevicePolicyAllowedDeviceManagementLevelsEnum.MANAGEMENT_UNSPECIFIED),
                                        add(DevicePolicyAllowedDeviceManagementLevelsEnum.NONE),
                                        add(DevicePolicyAllowedDeviceManagementLevelsEnum.COMPLETE),
                                    }};
                                    allowedEncryptionStatuses = new org.openapis.openapi.models.shared.DevicePolicyAllowedEncryptionStatusesEnum[]{{
                                        add(DevicePolicyAllowedEncryptionStatusesEnum.ENCRYPTION_UNSUPPORTED),
                                        add(DevicePolicyAllowedEncryptionStatusesEnum.ENCRYPTION_UNSUPPORTED),
                                        add(DevicePolicyAllowedEncryptionStatusesEnum.UNENCRYPTED),
                                        add(DevicePolicyAllowedEncryptionStatusesEnum.ENCRYPTED),
                                    }};
                                    osConstraints = new org.openapis.openapi.models.shared.OsConstraint[]{{
                                        add(new OsConstraint() {{
                                            minimumVersion = "occaecati";
                                            osType = OsConstraintOsTypeEnum.DESKTOP_WINDOWS;
                                            requireVerifiedChromeOs = false;
                                        }}),
                                    }};
                                    requireAdminApproval = false;
                                    requireCorpOwned = false;
                                    requireScreenlock = false;
                                }};
                                ipSubnetworks = new String[]{{
                                    add("delectus"),
                                    add("quidem"),
                                    add("provident"),
                                    add("nam"),
                                }};
                                members = new String[]{{
                                    add("blanditiis"),
                                    add("deleniti"),
                                    add("sapiente"),
                                }};
                                negate = false;
                                regions = new String[]{{
                                    add("deserunt"),
                                }};
                                requiredAccessLevels = new String[]{{
                                    add("vel"),
                                    add("natus"),
                                }};
                            }}),
                        }};
                    }};;
                    custom = new CustomLevel() {{
                        expr = new Expr() {{
                            description = "omnis";
                            expression = "molestiae";
                            location = "perferendis";
                            title = "Ms.";
                        }};;
                    }};;
                    description = "magnam";
                    name = "Alfonso Green";
                    title = "Miss";
                }};;
                accessToken = "nobis";
                alt = AltEnum.MEDIA;
                callback = "vero";
                fields = "aspernatur";
                key = "architecto";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "et";
                uploadType = "excepturi";
                uploadProtocol = "ullam";
            }};            

            AccesscontextmanagerAccessPoliciesAccessLevelsCreateResponse res = sdk.accessPolicies.accesscontextmanagerAccessPoliciesAccessLevelsCreate(req, new AccesscontextmanagerAccessPoliciesAccessLevelsCreateSecurity("provident", "quos") {{
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

## accesscontextmanagerAccessPoliciesAccessLevelsList

Lists all access levels for an access policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesAccessLevelsListAccessLevelFormatEnum;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesAccessLevelsListRequest;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesAccessLevelsListResponse;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesAccessLevelsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccesscontextmanagerAccessPoliciesAccessLevelsListRequest req = new AccesscontextmanagerAccessPoliciesAccessLevelsListRequest("sint") {{
                dollarXgafv = XgafvEnum.ONE;
                accessLevelFormat = AccesscontextmanagerAccessPoliciesAccessLevelsListAccessLevelFormatEnum.AS_DEFINED;
                accessToken = "reiciendis";
                alt = AltEnum.MEDIA;
                callback = "ad";
                fields = "eum";
                key = "dolor";
                oauthToken = "necessitatibus";
                pageSize = 141264L;
                pageToken = "nemo";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "iure";
                uploadProtocol = "doloribus";
            }};            

            AccesscontextmanagerAccessPoliciesAccessLevelsListResponse res = sdk.accessPolicies.accesscontextmanagerAccessPoliciesAccessLevelsList(req, new AccesscontextmanagerAccessPoliciesAccessLevelsListSecurity("debitis", "eius") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listAccessLevelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accesscontextmanagerAccessPoliciesAccessLevelsReplaceAll

Replaces all existing access levels in an access policy with the access levels provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. If the replacement contains errors, an error response is returned for the first error encountered. Upon error, the replacement is cancelled, and existing access levels are not affected. The Operation.response field contains ReplaceAccessLevelsResponse. Removing access levels contained in existing service perimeters result in an error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllRequest;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllResponse;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllSecurity;
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
import org.openapis.openapi.models.shared.ReplaceAccessLevelsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllRequest req = new AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllRequest("maxime") {{
                dollarXgafv = XgafvEnum.TWO;
                replaceAccessLevelsRequest = new ReplaceAccessLevelsRequest() {{
                    accessLevels = new org.openapis.openapi.models.shared.AccessLevel[]{{
                        add(new AccessLevel() {{
                            basic = new BasicLevel() {{
                                combiningFunction = BasicLevelCombiningFunctionEnum.AND;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        devicePolicy = new DevicePolicy() {{
                                            allowedDeviceManagementLevels = new org.openapis.openapi.models.shared.DevicePolicyAllowedDeviceManagementLevelsEnum[]{{
                                                add(DevicePolicyAllowedDeviceManagementLevelsEnum.COMPLETE),
                                            }};
                                            allowedEncryptionStatuses = new org.openapis.openapi.models.shared.DevicePolicyAllowedEncryptionStatusesEnum[]{{
                                                add(DevicePolicyAllowedEncryptionStatusesEnum.UNENCRYPTED),
                                                add(DevicePolicyAllowedEncryptionStatusesEnum.ENCRYPTION_UNSUPPORTED),
                                            }};
                                            osConstraints = new org.openapis.openapi.models.shared.OsConstraint[]{{
                                                add(new OsConstraint() {{
                                                    minimumVersion = "quibusdam";
                                                    osType = OsConstraintOsTypeEnum.DESKTOP_MAC;
                                                    requireVerifiedChromeOs = false;
                                                }}),
                                                add(new OsConstraint() {{
                                                    minimumVersion = "saepe";
                                                    osType = OsConstraintOsTypeEnum.IOS;
                                                    requireVerifiedChromeOs = false;
                                                }}),
                                                add(new OsConstraint() {{
                                                    minimumVersion = "accusantium";
                                                    osType = OsConstraintOsTypeEnum.DESKTOP_MAC;
                                                    requireVerifiedChromeOs = false;
                                                }}),
                                                add(new OsConstraint() {{
                                                    minimumVersion = "praesentium";
                                                    osType = OsConstraintOsTypeEnum.DESKTOP_CHROME_OS;
                                                    requireVerifiedChromeOs = false;
                                                }}),
                                            }};
                                            requireAdminApproval = false;
                                            requireCorpOwned = false;
                                            requireScreenlock = false;
                                        }};
                                        ipSubnetworks = new String[]{{
                                            add("sunt"),
                                        }};
                                        members = new String[]{{
                                            add("illum"),
                                            add("pariatur"),
                                            add("maxime"),
                                            add("ea"),
                                        }};
                                        negate = false;
                                        regions = new String[]{{
                                            add("odit"),
                                            add("ea"),
                                            add("accusantium"),
                                        }};
                                        requiredAccessLevels = new String[]{{
                                            add("maiores"),
                                        }};
                                    }}),
                                }};
                            }};
                            custom = new CustomLevel() {{
                                expr = new Expr() {{
                                    description = "quidem";
                                    expression = "ipsam";
                                    location = "voluptate";
                                    title = "Ms.";
                                }};
                            }};
                            description = "nam";
                            name = "Meredith Hickle PhD";
                            title = "Mrs.";
                        }}),
                        add(new AccessLevel() {{
                            basic = new BasicLevel() {{
                                combiningFunction = BasicLevelCombiningFunctionEnum.AND;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        devicePolicy = new DevicePolicy() {{
                                            allowedDeviceManagementLevels = new org.openapis.openapi.models.shared.DevicePolicyAllowedDeviceManagementLevelsEnum[]{{
                                                add(DevicePolicyAllowedDeviceManagementLevelsEnum.COMPLETE),
                                                add(DevicePolicyAllowedDeviceManagementLevelsEnum.BASIC),
                                            }};
                                            allowedEncryptionStatuses = new org.openapis.openapi.models.shared.DevicePolicyAllowedEncryptionStatusesEnum[]{{
                                                add(DevicePolicyAllowedEncryptionStatusesEnum.ENCRYPTION_UNSPECIFIED),
                                                add(DevicePolicyAllowedEncryptionStatusesEnum.ENCRYPTION_UNSUPPORTED),
                                                add(DevicePolicyAllowedEncryptionStatusesEnum.UNENCRYPTED),
                                            }};
                                            osConstraints = new org.openapis.openapi.models.shared.OsConstraint[]{{
                                                add(new OsConstraint() {{
                                                    minimumVersion = "eaque";
                                                    osType = OsConstraintOsTypeEnum.DESKTOP_WINDOWS;
                                                    requireVerifiedChromeOs = false;
                                                }}),
                                                add(new OsConstraint() {{
                                                    minimumVersion = "nesciunt";
                                                    osType = OsConstraintOsTypeEnum.DESKTOP_MAC;
                                                    requireVerifiedChromeOs = false;
                                                }}),
                                            }};
                                            requireAdminApproval = false;
                                            requireCorpOwned = false;
                                            requireScreenlock = false;
                                        }};
                                        ipSubnetworks = new String[]{{
                                            add("dolores"),
                                        }};
                                        members = new String[]{{
                                            add("quam"),
                                            add("dolor"),
                                            add("vero"),
                                            add("nostrum"),
                                        }};
                                        negate = false;
                                        regions = new String[]{{
                                            add("recusandae"),
                                            add("omnis"),
                                            add("facilis"),
                                            add("perspiciatis"),
                                        }};
                                        requiredAccessLevels = new String[]{{
                                            add("porro"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        devicePolicy = new DevicePolicy() {{
                                            allowedDeviceManagementLevels = new org.openapis.openapi.models.shared.DevicePolicyAllowedDeviceManagementLevelsEnum[]{{
                                                add(DevicePolicyAllowedDeviceManagementLevelsEnum.BASIC),
                                            }};
                                            allowedEncryptionStatuses = new org.openapis.openapi.models.shared.DevicePolicyAllowedEncryptionStatusesEnum[]{{
                                                add(DevicePolicyAllowedEncryptionStatusesEnum.ENCRYPTION_UNSPECIFIED),
                                                add(DevicePolicyAllowedEncryptionStatusesEnum.UNENCRYPTED),
                                                add(DevicePolicyAllowedEncryptionStatusesEnum.UNENCRYPTED),
                                            }};
                                            osConstraints = new org.openapis.openapi.models.shared.OsConstraint[]{{
                                                add(new OsConstraint() {{
                                                    minimumVersion = "asperiores";
                                                    osType = OsConstraintOsTypeEnum.IOS;
                                                    requireVerifiedChromeOs = false;
                                                }}),
                                            }};
                                            requireAdminApproval = false;
                                            requireCorpOwned = false;
                                            requireScreenlock = false;
                                        }};
                                        ipSubnetworks = new String[]{{
                                            add("iste"),
                                            add("dolorum"),
                                        }};
                                        members = new String[]{{
                                            add("pariatur"),
                                            add("provident"),
                                            add("nobis"),
                                        }};
                                        negate = false;
                                        regions = new String[]{{
                                            add("delectus"),
                                            add("quaerat"),
                                            add("quos"),
                                        }};
                                        requiredAccessLevels = new String[]{{
                                            add("dolorem"),
                                            add("dolorem"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        devicePolicy = new DevicePolicy() {{
                                            allowedDeviceManagementLevels = new org.openapis.openapi.models.shared.DevicePolicyAllowedDeviceManagementLevelsEnum[]{{
                                                add(DevicePolicyAllowedDeviceManagementLevelsEnum.MANAGEMENT_UNSPECIFIED),
                                            }};
                                            allowedEncryptionStatuses = new org.openapis.openapi.models.shared.DevicePolicyAllowedEncryptionStatusesEnum[]{{
                                                add(DevicePolicyAllowedEncryptionStatusesEnum.ENCRYPTED),
                                            }};
                                            osConstraints = new org.openapis.openapi.models.shared.OsConstraint[]{{
                                                add(new OsConstraint() {{
                                                    minimumVersion = "cum";
                                                    osType = OsConstraintOsTypeEnum.DESKTOP_LINUX;
                                                    requireVerifiedChromeOs = false;
                                                }}),
                                                add(new OsConstraint() {{
                                                    minimumVersion = "dignissimos";
                                                    osType = OsConstraintOsTypeEnum.IOS;
                                                    requireVerifiedChromeOs = false;
                                                }}),
                                                add(new OsConstraint() {{
                                                    minimumVersion = "amet";
                                                    osType = OsConstraintOsTypeEnum.DESKTOP_CHROME_OS;
                                                    requireVerifiedChromeOs = false;
                                                }}),
                                            }};
                                            requireAdminApproval = false;
                                            requireCorpOwned = false;
                                            requireScreenlock = false;
                                        }};
                                        ipSubnetworks = new String[]{{
                                            add("veritatis"),
                                            add("ipsa"),
                                        }};
                                        members = new String[]{{
                                            add("iure"),
                                        }};
                                        negate = false;
                                        regions = new String[]{{
                                            add("quaerat"),
                                            add("accusamus"),
                                        }};
                                        requiredAccessLevels = new String[]{{
                                            add("voluptatibus"),
                                            add("voluptas"),
                                            add("natus"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        devicePolicy = new DevicePolicy() {{
                                            allowedDeviceManagementLevels = new org.openapis.openapi.models.shared.DevicePolicyAllowedDeviceManagementLevelsEnum[]{{
                                                add(DevicePolicyAllowedDeviceManagementLevelsEnum.BASIC),
                                            }};
                                            allowedEncryptionStatuses = new org.openapis.openapi.models.shared.DevicePolicyAllowedEncryptionStatusesEnum[]{{
                                                add(DevicePolicyAllowedEncryptionStatusesEnum.ENCRYPTED),
                                            }};
                                            osConstraints = new org.openapis.openapi.models.shared.OsConstraint[]{{
                                                add(new OsConstraint() {{
                                                    minimumVersion = "soluta";
                                                    osType = OsConstraintOsTypeEnum.DESKTOP_CHROME_OS;
                                                    requireVerifiedChromeOs = false;
                                                }}),
                                            }};
                                            requireAdminApproval = false;
                                            requireCorpOwned = false;
                                            requireScreenlock = false;
                                        }};
                                        ipSubnetworks = new String[]{{
                                            add("voluptate"),
                                            add("dolorum"),
                                        }};
                                        members = new String[]{{
                                            add("omnis"),
                                            add("necessitatibus"),
                                            add("distinctio"),
                                        }};
                                        negate = false;
                                        regions = new String[]{{
                                            add("nihil"),
                                            add("ipsum"),
                                            add("voluptate"),
                                            add("id"),
                                        }};
                                        requiredAccessLevels = new String[]{{
                                            add("eius"),
                                            add("aspernatur"),
                                            add("perferendis"),
                                            add("amet"),
                                        }};
                                    }}),
                                }};
                            }};
                            custom = new CustomLevel() {{
                                expr = new Expr() {{
                                    description = "optio";
                                    expression = "accusamus";
                                    location = "ad";
                                    title = "Dr.";
                                }};
                            }};
                            description = "suscipit";
                            name = "Rene Hane";
                            title = "Miss";
                        }}),
                        add(new AccessLevel() {{
                            basic = new BasicLevel() {{
                                combiningFunction = BasicLevelCombiningFunctionEnum.AND;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        devicePolicy = new DevicePolicy() {{
                                            allowedDeviceManagementLevels = new org.openapis.openapi.models.shared.DevicePolicyAllowedDeviceManagementLevelsEnum[]{{
                                                add(DevicePolicyAllowedDeviceManagementLevelsEnum.NONE),
                                                add(DevicePolicyAllowedDeviceManagementLevelsEnum.NONE),
                                            }};
                                            allowedEncryptionStatuses = new org.openapis.openapi.models.shared.DevicePolicyAllowedEncryptionStatusesEnum[]{{
                                                add(DevicePolicyAllowedEncryptionStatusesEnum.ENCRYPTED),
                                                add(DevicePolicyAllowedEncryptionStatusesEnum.ENCRYPTION_UNSPECIFIED),
                                                add(DevicePolicyAllowedEncryptionStatusesEnum.UNENCRYPTED),
                                                add(DevicePolicyAllowedEncryptionStatusesEnum.ENCRYPTED),
                                            }};
                                            osConstraints = new org.openapis.openapi.models.shared.OsConstraint[]{{
                                                add(new OsConstraint() {{
                                                    minimumVersion = "harum";
                                                    osType = OsConstraintOsTypeEnum.DESKTOP_LINUX;
                                                    requireVerifiedChromeOs = false;
                                                }}),
                                                add(new OsConstraint() {{
                                                    minimumVersion = "ipsum";
                                                    osType = OsConstraintOsTypeEnum.ANDROID;
                                                    requireVerifiedChromeOs = false;
                                                }}),
                                            }};
                                            requireAdminApproval = false;
                                            requireCorpOwned = false;
                                            requireScreenlock = false;
                                        }};
                                        ipSubnetworks = new String[]{{
                                            add("amet"),
                                            add("tempore"),
                                            add("accusamus"),
                                            add("numquam"),
                                        }};
                                        members = new String[]{{
                                            add("dolorem"),
                                            add("sapiente"),
                                        }};
                                        negate = false;
                                        regions = new String[]{{
                                            add("nihil"),
                                            add("sit"),
                                            add("expedita"),
                                        }};
                                        requiredAccessLevels = new String[]{{
                                            add("sed"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        devicePolicy = new DevicePolicy() {{
                                            allowedDeviceManagementLevels = new org.openapis.openapi.models.shared.DevicePolicyAllowedDeviceManagementLevelsEnum[]{{
                                                add(DevicePolicyAllowedDeviceManagementLevelsEnum.BASIC),
                                                add(DevicePolicyAllowedDeviceManagementLevelsEnum.NONE),
                                            }};
                                            allowedEncryptionStatuses = new org.openapis.openapi.models.shared.DevicePolicyAllowedEncryptionStatusesEnum[]{{
                                                add(DevicePolicyAllowedEncryptionStatusesEnum.ENCRYPTION_UNSUPPORTED),
                                                add(DevicePolicyAllowedEncryptionStatusesEnum.ENCRYPTION_UNSPECIFIED),
                                                add(DevicePolicyAllowedEncryptionStatusesEnum.ENCRYPTION_UNSUPPORTED),
                                            }};
                                            osConstraints = new org.openapis.openapi.models.shared.OsConstraint[]{{
                                                add(new OsConstraint() {{
                                                    minimumVersion = "cupiditate";
                                                    osType = OsConstraintOsTypeEnum.ANDROID;
                                                    requireVerifiedChromeOs = false;
                                                }}),
                                            }};
                                            requireAdminApproval = false;
                                            requireCorpOwned = false;
                                            requireScreenlock = false;
                                        }};
                                        ipSubnetworks = new String[]{{
                                            add("soluta"),
                                            add("dicta"),
                                            add("laborum"),
                                            add("totam"),
                                        }};
                                        members = new String[]{{
                                            add("aspernatur"),
                                            add("dolores"),
                                        }};
                                        negate = false;
                                        regions = new String[]{{
                                            add("facilis"),
                                            add("aliquid"),
                                            add("quam"),
                                        }};
                                        requiredAccessLevels = new String[]{{
                                            add("temporibus"),
                                            add("qui"),
                                            add("neque"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        devicePolicy = new DevicePolicy() {{
                                            allowedDeviceManagementLevels = new org.openapis.openapi.models.shared.DevicePolicyAllowedDeviceManagementLevelsEnum[]{{
                                                add(DevicePolicyAllowedDeviceManagementLevelsEnum.MANAGEMENT_UNSPECIFIED),
                                            }};
                                            allowedEncryptionStatuses = new org.openapis.openapi.models.shared.DevicePolicyAllowedEncryptionStatusesEnum[]{{
                                                add(DevicePolicyAllowedEncryptionStatusesEnum.ENCRYPTION_UNSPECIFIED),
                                                add(DevicePolicyAllowedEncryptionStatusesEnum.ENCRYPTION_UNSUPPORTED),
                                            }};
                                            osConstraints = new org.openapis.openapi.models.shared.OsConstraint[]{{
                                                add(new OsConstraint() {{
                                                    minimumVersion = "hic";
                                                    osType = OsConstraintOsTypeEnum.OS_UNSPECIFIED;
                                                    requireVerifiedChromeOs = false;
                                                }}),
                                                add(new OsConstraint() {{
                                                    minimumVersion = "cumque";
                                                    osType = OsConstraintOsTypeEnum.ANDROID;
                                                    requireVerifiedChromeOs = false;
                                                }}),
                                                add(new OsConstraint() {{
                                                    minimumVersion = "nobis";
                                                    osType = OsConstraintOsTypeEnum.OS_UNSPECIFIED;
                                                    requireVerifiedChromeOs = false;
                                                }}),
                                            }};
                                            requireAdminApproval = false;
                                            requireCorpOwned = false;
                                            requireScreenlock = false;
                                        }};
                                        ipSubnetworks = new String[]{{
                                            add("ipsum"),
                                            add("veritatis"),
                                            add("nobis"),
                                            add("quos"),
                                        }};
                                        members = new String[]{{
                                            add("cupiditate"),
                                            add("aperiam"),
                                            add("delectus"),
                                        }};
                                        negate = false;
                                        regions = new String[]{{
                                            add("dolore"),
                                        }};
                                        requiredAccessLevels = new String[]{{
                                            add("adipisci"),
                                            add("dolorum"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        devicePolicy = new DevicePolicy() {{
                                            allowedDeviceManagementLevels = new org.openapis.openapi.models.shared.DevicePolicyAllowedDeviceManagementLevelsEnum[]{{
                                                add(DevicePolicyAllowedDeviceManagementLevelsEnum.MANAGEMENT_UNSPECIFIED),
                                            }};
                                            allowedEncryptionStatuses = new org.openapis.openapi.models.shared.DevicePolicyAllowedEncryptionStatusesEnum[]{{
                                                add(DevicePolicyAllowedEncryptionStatusesEnum.UNENCRYPTED),
                                            }};
                                            osConstraints = new org.openapis.openapi.models.shared.OsConstraint[]{{
                                                add(new OsConstraint() {{
                                                    minimumVersion = "consequatur";
                                                    osType = OsConstraintOsTypeEnum.DESKTOP_CHROME_OS;
                                                    requireVerifiedChromeOs = false;
                                                }}),
                                                add(new OsConstraint() {{
                                                    minimumVersion = "repellendus";
                                                    osType = OsConstraintOsTypeEnum.ANDROID;
                                                    requireVerifiedChromeOs = false;
                                                }}),
                                                add(new OsConstraint() {{
                                                    minimumVersion = "doloribus";
                                                    osType = OsConstraintOsTypeEnum.DESKTOP_MAC;
                                                    requireVerifiedChromeOs = false;
                                                }}),
                                                add(new OsConstraint() {{
                                                    minimumVersion = "facilis";
                                                    osType = OsConstraintOsTypeEnum.DESKTOP_CHROME_OS;
                                                    requireVerifiedChromeOs = false;
                                                }}),
                                            }};
                                            requireAdminApproval = false;
                                            requireCorpOwned = false;
                                            requireScreenlock = false;
                                        }};
                                        ipSubnetworks = new String[]{{
                                            add("quae"),
                                        }};
                                        members = new String[]{{
                                            add("odio"),
                                            add("occaecati"),
                                            add("voluptatibus"),
                                        }};
                                        negate = false;
                                        regions = new String[]{{
                                            add("vero"),
                                            add("omnis"),
                                            add("quis"),
                                            add("ipsum"),
                                        }};
                                        requiredAccessLevels = new String[]{{
                                            add("voluptate"),
                                            add("consectetur"),
                                            add("vero"),
                                            add("tenetur"),
                                        }};
                                    }}),
                                }};
                            }};
                            custom = new CustomLevel() {{
                                expr = new Expr() {{
                                    description = "dignissimos";
                                    expression = "hic";
                                    location = "distinctio";
                                    title = "Miss";
                                }};
                            }};
                            description = "odio";
                            name = "Malcolm Swift";
                            title = "Dr.";
                        }}),
                    }};
                    etag = "illum";
                }};;
                accessToken = "sequi";
                alt = AltEnum.MEDIA;
                callback = "impedit";
                fields = "aut";
                key = "voluptatibus";
                oauthToken = "exercitationem";
                prettyPrint = false;
                quotaUser = "nulla";
                uploadType = "fugit";
                uploadProtocol = "porro";
            }};            

            AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllResponse res = sdk.accessPolicies.accesscontextmanagerAccessPoliciesAccessLevelsReplaceAll(req, new AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllSecurity("maiores", "doloribus") {{
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

## accesscontextmanagerAccessPoliciesAuthorizedOrgsDescsCreate

Creates an authorized orgs desc. The long-running operation from this RPC has a successful status after the authorized orgs desc propagates to long-lasting storage. If a authorized orgs desc contains errors, an error response is returned for the first error encountered. The name of this `AuthorizedOrgsDesc` will be assigned during creation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsCreateRequest;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsCreateResponse;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuthorizedOrgsDesc;
import org.openapis.openapi.models.shared.AuthorizedOrgsDescAssetTypeEnum;
import org.openapis.openapi.models.shared.AuthorizedOrgsDescAuthorizationDirectionEnum;
import org.openapis.openapi.models.shared.AuthorizedOrgsDescAuthorizationTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsCreateRequest req = new AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsCreateRequest("iusto") {{
                dollarXgafv = XgafvEnum.TWO;
                authorizedOrgsDesc = new AuthorizedOrgsDesc() {{
                    assetType = AuthorizedOrgsDescAssetTypeEnum.ASSET_TYPE_DEVICE;
                    authorizationDirection = AuthorizedOrgsDescAuthorizationDirectionEnum.AUTHORIZATION_DIRECTION_UNSPECIFIED;
                    authorizationType = AuthorizedOrgsDescAuthorizationTypeEnum.AUTHORIZATION_TYPE_TRUST;
                    name = "Roberta Jenkins";
                    orgs = new String[]{{
                        add("magnam"),
                        add("ratione"),
                        add("ex"),
                        add("laudantium"),
                    }};
                }};;
                accessToken = "dicta";
                alt = AltEnum.JSON;
                callback = "maiores";
                fields = "quasi";
                key = "ex";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "voluptatibus";
                uploadProtocol = "nostrum";
            }};            

            AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsCreateResponse res = sdk.accessPolicies.accesscontextmanagerAccessPoliciesAuthorizedOrgsDescsCreate(req, new AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsCreateSecurity("sapiente", "quisquam") {{
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

## accesscontextmanagerAccessPoliciesAuthorizedOrgsDescsList

Lists all authorized orgs descs for an access policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsListRequest;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsListResponse;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsListRequest req = new AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsListRequest("saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "impedit";
                alt = AltEnum.MEDIA;
                callback = "veniam";
                fields = "aliquid";
                key = "inventore";
                oauthToken = "magnam";
                pageSize = 407241L;
                pageToken = "quo";
                prettyPrint = false;
                quotaUser = "consectetur";
                uploadType = "recusandae";
                uploadProtocol = "aspernatur";
            }};            

            AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsListResponse res = sdk.accessPolicies.accesscontextmanagerAccessPoliciesAuthorizedOrgsDescsList(req, new AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsListSecurity("minima", "eaque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listAuthorizedOrgsDescsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accesscontextmanagerAccessPoliciesCreate

Creates an access policy. This method fails if the organization already has an access policy. The long-running operation has a successful status after the access policy propagates to long-lasting storage. Syntactic and basic semantic errors are returned in `metadata` as a BadRequest proto.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesCreateRequest;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesCreateResponse;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesCreateSecurity;
import org.openapis.openapi.models.shared.AccessPolicy;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccesscontextmanagerAccessPoliciesCreateRequest req = new AccesscontextmanagerAccessPoliciesCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessPolicy = new AccessPolicy() {{
                    etag = "libero";
                    name = "Jennifer Lesch";
                    parent = "fugit";
                    scopes = new String[]{{
                        add("inventore"),
                        add("non"),
                        add("et"),
                        add("dolorum"),
                    }};
                    title = "Miss";
                }};;
                accessToken = "placeat";
                alt = AltEnum.JSON;
                callback = "eum";
                fields = "autem";
                key = "nobis";
                oauthToken = "quas";
                prettyPrint = false;
                quotaUser = "assumenda";
                uploadType = "nulla";
                uploadProtocol = "voluptas";
            }};            

            AccesscontextmanagerAccessPoliciesCreateResponse res = sdk.accessPolicies.accesscontextmanagerAccessPoliciesCreate(req, new AccesscontextmanagerAccessPoliciesCreateSecurity("libero", "quasi") {{
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

## accesscontextmanagerAccessPoliciesGetIamPolicy

Gets the IAM policy for the specified Access Context Manager access policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GetIamPolicyRequest;
import org.openapis.openapi.models.shared.GetPolicyOptions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccesscontextmanagerAccessPoliciesGetIamPolicyRequest req = new AccesscontextmanagerAccessPoliciesGetIamPolicyRequest("tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                getIamPolicyRequest = new GetIamPolicyRequest() {{
                    options = new GetPolicyOptions() {{
                        requestedPolicyVersion = 131482;
                    }};;
                }};;
                accessToken = "provident";
                alt = AltEnum.JSON;
                callback = "molestiae";
                fields = "magnam";
                key = "odio";
                oauthToken = "eius";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "esse";
                uploadProtocol = "rem";
            }};            

            AccesscontextmanagerAccessPoliciesGetIamPolicyResponse res = sdk.accessPolicies.accesscontextmanagerAccessPoliciesGetIamPolicy(req, new AccesscontextmanagerAccessPoliciesGetIamPolicySecurity("fuga", "reprehenderit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## accesscontextmanagerAccessPoliciesList

Lists all access policies in an organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesListRequest;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesListResponse;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccesscontextmanagerAccessPoliciesListRequest req = new AccesscontextmanagerAccessPoliciesListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fugiat";
                alt = AltEnum.JSON;
                callback = "eum";
                fields = "suscipit";
                key = "assumenda";
                oauthToken = "eos";
                pageSize = 509342L;
                pageToken = "quisquam";
                parent = "veritatis";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "id";
                uploadProtocol = "quidem";
            }};            

            AccesscontextmanagerAccessPoliciesListResponse res = sdk.accessPolicies.accesscontextmanagerAccessPoliciesList(req, new AccesscontextmanagerAccessPoliciesListSecurity("neque", "quo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listAccessPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accesscontextmanagerAccessPoliciesServicePerimetersCommit

Commits the dry-run specification for all the service perimeters in an access policy. A commit operation on a service perimeter involves copying its `spec` field to the `status` field of the service perimeter. Only service perimeters with `use_explicit_dry_run_spec` field set to true are affected by a commit operation. The long-running operation from this RPC has a successful status after the dry-run specifications for all the service perimeters have been committed. If a commit fails, it causes the long-running operation to return an error response and the entire commit operation is cancelled. When successful, the Operation.response field contains CommitServicePerimetersResponse. The `dry_run` and the `spec` fields are cleared after a successful commit operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesServicePerimetersCommitRequest;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesServicePerimetersCommitResponse;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesServicePerimetersCommitSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CommitServicePerimetersRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccesscontextmanagerAccessPoliciesServicePerimetersCommitRequest req = new AccesscontextmanagerAccessPoliciesServicePerimetersCommitRequest("illum") {{
                dollarXgafv = XgafvEnum.TWO;
                commitServicePerimetersRequest = new CommitServicePerimetersRequest() {{
                    etag = "fuga";
                }};;
                accessToken = "eius";
                alt = AltEnum.JSON;
                callback = "voluptas";
                fields = "ab";
                key = "cupiditate";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "debitis";
                uploadProtocol = "ipsam";
            }};            

            AccesscontextmanagerAccessPoliciesServicePerimetersCommitResponse res = sdk.accessPolicies.accesscontextmanagerAccessPoliciesServicePerimetersCommit(req, new AccesscontextmanagerAccessPoliciesServicePerimetersCommitSecurity("aspernatur", "sequi") {{
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

## accesscontextmanagerAccessPoliciesServicePerimetersCreate

Creates a service perimeter. The long-running operation from this RPC has a successful status after the service perimeter propagates to long-lasting storage. If a service perimeter contains errors, an error response is returned for the first error encountered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesServicePerimetersCreateRequest;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesServicePerimetersCreateResponse;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesServicePerimetersCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApiOperation;
import org.openapis.openapi.models.shared.EgressFrom;
import org.openapis.openapi.models.shared.EgressFromIdentityTypeEnum;
import org.openapis.openapi.models.shared.EgressPolicy;
import org.openapis.openapi.models.shared.EgressTo;
import org.openapis.openapi.models.shared.IngressFrom;
import org.openapis.openapi.models.shared.IngressFromIdentityTypeEnum;
import org.openapis.openapi.models.shared.IngressPolicy;
import org.openapis.openapi.models.shared.IngressSource;
import org.openapis.openapi.models.shared.IngressTo;
import org.openapis.openapi.models.shared.MethodSelector;
import org.openapis.openapi.models.shared.ServicePerimeter;
import org.openapis.openapi.models.shared.ServicePerimeterConfig;
import org.openapis.openapi.models.shared.ServicePerimeterPerimeterTypeEnum;
import org.openapis.openapi.models.shared.VpcAccessibleServices;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccesscontextmanagerAccessPoliciesServicePerimetersCreateRequest req = new AccesscontextmanagerAccessPoliciesServicePerimetersCreateRequest("quo") {{
                dollarXgafv = XgafvEnum.ONE;
                servicePerimeter = new ServicePerimeter() {{
                    description = "recusandae";
                    name = "Lola Schmidt IV";
                    perimeterType = ServicePerimeterPerimeterTypeEnum.PERIMETER_TYPE_BRIDGE;
                    spec = new ServicePerimeterConfig() {{
                        accessLevels = new String[]{{
                            add("aliquam"),
                            add("odio"),
                            add("occaecati"),
                            add("commodi"),
                        }};
                        egressPolicies = new org.openapis.openapi.models.shared.EgressPolicy[]{{
                            add(new EgressPolicy() {{
                                egressFrom = new EgressFrom() {{
                                    identities = new String[]{{
                                        add("deserunt"),
                                    }};
                                    identityType = EgressFromIdentityTypeEnum.ANY_IDENTITY;
                                }};
                                egressTo = new EgressTo() {{
                                    externalResources = new String[]{{
                                        add("porro"),
                                    }};
                                    operations = new org.openapis.openapi.models.shared.ApiOperation[]{{
                                        add(new ApiOperation() {{
                                            methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                add(new MethodSelector() {{
                                                    method = "praesentium";
                                                    permission = "consequuntur";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "deleniti";
                                                    permission = "fugit";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "fuga";
                                                    permission = "mollitia";
                                                }}),
                                            }};
                                            serviceName = "incidunt";
                                        }}),
                                        add(new ApiOperation() {{
                                            methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                add(new MethodSelector() {{
                                                    method = "explicabo";
                                                    permission = "minima";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "nisi";
                                                    permission = "fugit";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "sapiente";
                                                    permission = "consequuntur";
                                                }}),
                                            }};
                                            serviceName = "ratione";
                                        }}),
                                    }};
                                    resources = new String[]{{
                                        add("saepe"),
                                    }};
                                }};
                            }}),
                            add(new EgressPolicy() {{
                                egressFrom = new EgressFrom() {{
                                    identities = new String[]{{
                                        add("atque"),
                                        add("et"),
                                        add("esse"),
                                    }};
                                    identityType = EgressFromIdentityTypeEnum.ANY_SERVICE_ACCOUNT;
                                }};
                                egressTo = new EgressTo() {{
                                    externalResources = new String[]{{
                                        add("veritatis"),
                                        add("esse"),
                                        add("quod"),
                                        add("nam"),
                                    }};
                                    operations = new org.openapis.openapi.models.shared.ApiOperation[]{{
                                        add(new ApiOperation() {{
                                            methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                add(new MethodSelector() {{
                                                    method = "quasi";
                                                    permission = "saepe";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "vel";
                                                    permission = "harum";
                                                }}),
                                            }};
                                            serviceName = "molestiae";
                                        }}),
                                        add(new ApiOperation() {{
                                            methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                add(new MethodSelector() {{
                                                    method = "occaecati";
                                                    permission = "minima";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "distinctio";
                                                    permission = "eligendi";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "sit";
                                                    permission = "culpa";
                                                }}),
                                            }};
                                            serviceName = "tempore";
                                        }}),
                                        add(new ApiOperation() {{
                                            methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                add(new MethodSelector() {{
                                                    method = "cumque";
                                                    permission = "consequuntur";
                                                }}),
                                            }};
                                            serviceName = "consequatur";
                                        }}),
                                        add(new ApiOperation() {{
                                            methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                add(new MethodSelector() {{
                                                    method = "quaerat";
                                                    permission = "sapiente";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "consectetur";
                                                    permission = "esse";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "blanditiis";
                                                    permission = "provident";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "a";
                                                    permission = "nulla";
                                                }}),
                                            }};
                                            serviceName = "quas";
                                        }}),
                                    }};
                                    resources = new String[]{{
                                        add("quasi"),
                                        add("a"),
                                    }};
                                }};
                            }}),
                            add(new EgressPolicy() {{
                                egressFrom = new EgressFrom() {{
                                    identities = new String[]{{
                                        add("sint"),
                                        add("pariatur"),
                                        add("possimus"),
                                    }};
                                    identityType = EgressFromIdentityTypeEnum.IDENTITY_TYPE_UNSPECIFIED;
                                }};
                                egressTo = new EgressTo() {{
                                    externalResources = new String[]{{
                                        add("asperiores"),
                                        add("facere"),
                                        add("veritatis"),
                                        add("consequuntur"),
                                    }};
                                    operations = new org.openapis.openapi.models.shared.ApiOperation[]{{
                                        add(new ApiOperation() {{
                                            methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                add(new MethodSelector() {{
                                                    method = "culpa";
                                                    permission = "aliquid";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "tenetur";
                                                    permission = "quae";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "earum";
                                                    permission = "vel";
                                                }}),
                                            }};
                                            serviceName = "in";
                                        }}),
                                    }};
                                    resources = new String[]{{
                                        add("libero"),
                                        add("illum"),
                                    }};
                                }};
                            }}),
                            add(new EgressPolicy() {{
                                egressFrom = new EgressFrom() {{
                                    identities = new String[]{{
                                        add("accusantium"),
                                        add("aliquam"),
                                        add("sapiente"),
                                    }};
                                    identityType = EgressFromIdentityTypeEnum.IDENTITY_TYPE_UNSPECIFIED;
                                }};
                                egressTo = new EgressTo() {{
                                    externalResources = new String[]{{
                                        add("reprehenderit"),
                                        add("ullam"),
                                    }};
                                    operations = new org.openapis.openapi.models.shared.ApiOperation[]{{
                                        add(new ApiOperation() {{
                                            methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                add(new MethodSelector() {{
                                                    method = "voluptatum";
                                                    permission = "qui";
                                                }}),
                                            }};
                                            serviceName = "quibusdam";
                                        }}),
                                        add(new ApiOperation() {{
                                            methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                add(new MethodSelector() {{
                                                    method = "deleniti";
                                                    permission = "itaque";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "dolorum";
                                                    permission = "architecto";
                                                }}),
                                            }};
                                            serviceName = "omnis";
                                        }}),
                                    }};
                                    resources = new String[]{{
                                        add("quasi"),
                                        add("at"),
                                        add("et"),
                                        add("voluptate"),
                                    }};
                                }};
                            }}),
                        }};
                        ingressPolicies = new org.openapis.openapi.models.shared.IngressPolicy[]{{
                            add(new IngressPolicy() {{
                                ingressFrom = new IngressFrom() {{
                                    identities = new String[]{{
                                        add("veritatis"),
                                        add("consectetur"),
                                    }};
                                    identityType = IngressFromIdentityTypeEnum.IDENTITY_TYPE_UNSPECIFIED;
                                    sources = new org.openapis.openapi.models.shared.IngressSource[]{{
                                        add(new IngressSource() {{
                                            accessLevel = "temporibus";
                                            resource = "accusantium";
                                        }}),
                                        add(new IngressSource() {{
                                            accessLevel = "rem";
                                            resource = "aut";
                                        }}),
                                        add(new IngressSource() {{
                                            accessLevel = "laudantium";
                                            resource = "eum";
                                        }}),
                                    }};
                                }};
                                ingressTo = new IngressTo() {{
                                    operations = new org.openapis.openapi.models.shared.ApiOperation[]{{
                                        add(new ApiOperation() {{
                                            methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                add(new MethodSelector() {{
                                                    method = "corrupti";
                                                    permission = "non";
                                                }}),
                                            }};
                                            serviceName = "voluptatem";
                                        }}),
                                        add(new ApiOperation() {{
                                            methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                add(new MethodSelector() {{
                                                    method = "occaecati";
                                                    permission = "numquam";
                                                }}),
                                            }};
                                            serviceName = "impedit";
                                        }}),
                                        add(new ApiOperation() {{
                                            methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                add(new MethodSelector() {{
                                                    method = "voluptas";
                                                    permission = "aut";
                                                }}),
                                            }};
                                            serviceName = "dignissimos";
                                        }}),
                                    }};
                                    resources = new String[]{{
                                        add("maiores"),
                                    }};
                                }};
                            }}),
                        }};
                        resources = new String[]{{
                            add("velit"),
                            add("voluptatibus"),
                            add("voluptas"),
                        }};
                        restrictedServices = new String[]{{
                            add("aperiam"),
                            add("ea"),
                            add("quaerat"),
                            add("consequuntur"),
                        }};
                        vpcAccessibleServices = new VpcAccessibleServices() {{
                            allowedServices = new String[]{{
                                add("officia"),
                                add("maxime"),
                                add("dignissimos"),
                                add("officia"),
                            }};
                            enableRestriction = false;
                        }};;
                    }};;
                    status = new ServicePerimeterConfig() {{
                        accessLevels = new String[]{{
                            add("nemo"),
                            add("quae"),
                            add("quaerat"),
                            add("porro"),
                        }};
                        egressPolicies = new org.openapis.openapi.models.shared.EgressPolicy[]{{
                            add(new EgressPolicy() {{
                                egressFrom = new EgressFrom() {{
                                    identities = new String[]{{
                                        add("ab"),
                                        add("adipisci"),
                                    }};
                                    identityType = EgressFromIdentityTypeEnum.ANY_USER_ACCOUNT;
                                }};
                                egressTo = new EgressTo() {{
                                    externalResources = new String[]{{
                                        add("suscipit"),
                                        add("velit"),
                                        add("culpa"),
                                    }};
                                    operations = new org.openapis.openapi.models.shared.ApiOperation[]{{
                                        add(new ApiOperation() {{
                                            methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                add(new MethodSelector() {{
                                                    method = "totam";
                                                    permission = "fugiat";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "vel";
                                                    permission = "ducimus";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "quos";
                                                    permission = "vel";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "labore";
                                                    permission = "possimus";
                                                }}),
                                            }};
                                            serviceName = "facilis";
                                        }}),
                                        add(new ApiOperation() {{
                                            methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                add(new MethodSelector() {{
                                                    method = "commodi";
                                                    permission = "in";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "corporis";
                                                    permission = "reiciendis";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "assumenda";
                                                    permission = "nemo";
                                                }}),
                                            }};
                                            serviceName = "recusandae";
                                        }}),
                                        add(new ApiOperation() {{
                                            methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                add(new MethodSelector() {{
                                                    method = "aperiam";
                                                    permission = "cum";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "consectetur";
                                                    permission = "in";
                                                }}),
                                            }};
                                            serviceName = "exercitationem";
                                        }}),
                                    }};
                                    resources = new String[]{{
                                        add("facere"),
                                        add("numquam"),
                                        add("doloribus"),
                                        add("suscipit"),
                                    }};
                                }};
                            }}),
                            add(new EgressPolicy() {{
                                egressFrom = new EgressFrom() {{
                                    identities = new String[]{{
                                        add("quidem"),
                                        add("saepe"),
                                        add("necessitatibus"),
                                        add("dolore"),
                                    }};
                                    identityType = EgressFromIdentityTypeEnum.IDENTITY_TYPE_UNSPECIFIED;
                                }};
                                egressTo = new EgressTo() {{
                                    externalResources = new String[]{{
                                        add("adipisci"),
                                        add("non"),
                                        add("amet"),
                                        add("beatae"),
                                    }};
                                    operations = new org.openapis.openapi.models.shared.ApiOperation[]{{
                                        add(new ApiOperation() {{
                                            methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                add(new MethodSelector() {{
                                                    method = "debitis";
                                                    permission = "consectetur";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "corporis";
                                                    permission = "harum";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "laboriosam";
                                                    permission = "ipsa";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "voluptates";
                                                    permission = "libero";
                                                }}),
                                            }};
                                            serviceName = "vitae";
                                        }}),
                                        add(new ApiOperation() {{
                                            methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                add(new MethodSelector() {{
                                                    method = "similique";
                                                    permission = "tempora";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "aspernatur";
                                                    permission = "voluptas";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "voluptas";
                                                    permission = "voluptas";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "minima";
                                                    permission = "nobis";
                                                }}),
                                            }};
                                            serviceName = "dolorum";
                                        }}),
                                    }};
                                    resources = new String[]{{
                                        add("minus"),
                                    }};
                                }};
                            }}),
                            add(new EgressPolicy() {{
                                egressFrom = new EgressFrom() {{
                                    identities = new String[]{{
                                        add("blanditiis"),
                                    }};
                                    identityType = EgressFromIdentityTypeEnum.ANY_IDENTITY;
                                }};
                                egressTo = new EgressTo() {{
                                    externalResources = new String[]{{
                                        add("aliquam"),
                                        add("officiis"),
                                    }};
                                    operations = new org.openapis.openapi.models.shared.ApiOperation[]{{
                                        add(new ApiOperation() {{
                                            methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                add(new MethodSelector() {{
                                                    method = "adipisci";
                                                    permission = "cum";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "blanditiis";
                                                    permission = "quas";
                                                }}),
                                            }};
                                            serviceName = "hic";
                                        }}),
                                        add(new ApiOperation() {{
                                            methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                add(new MethodSelector() {{
                                                    method = "culpa";
                                                    permission = "corrupti";
                                                }}),
                                            }};
                                            serviceName = "pariatur";
                                        }}),
                                        add(new ApiOperation() {{
                                            methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                add(new MethodSelector() {{
                                                    method = "hic";
                                                    permission = "exercitationem";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "nobis";
                                                    permission = "sit";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "rerum";
                                                    permission = "sed";
                                                }}),
                                            }};
                                            serviceName = "reiciendis";
                                        }}),
                                        add(new ApiOperation() {{
                                            methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                add(new MethodSelector() {{
                                                    method = "asperiores";
                                                    permission = "facilis";
                                                }}),
                                            }};
                                            serviceName = "voluptate";
                                        }}),
                                    }};
                                    resources = new String[]{{
                                        add("ab"),
                                        add("iste"),
                                        add("dolore"),
                                    }};
                                }};
                            }}),
                            add(new EgressPolicy() {{
                                egressFrom = new EgressFrom() {{
                                    identities = new String[]{{
                                        add("sed"),
                                        add("in"),
                                        add("commodi"),
                                    }};
                                    identityType = EgressFromIdentityTypeEnum.ANY_USER_ACCOUNT;
                                }};
                                egressTo = new EgressTo() {{
                                    externalResources = new String[]{{
                                        add("voluptas"),
                                    }};
                                    operations = new org.openapis.openapi.models.shared.ApiOperation[]{{
                                        add(new ApiOperation() {{
                                            methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                add(new MethodSelector() {{
                                                    method = "suscipit";
                                                    permission = "sapiente";
                                                }}),
                                            }};
                                            serviceName = "debitis";
                                        }}),
                                        add(new ApiOperation() {{
                                            methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                add(new MethodSelector() {{
                                                    method = "reiciendis";
                                                    permission = "perferendis";
                                                }}),
                                            }};
                                            serviceName = "corrupti";
                                        }}),
                                        add(new ApiOperation() {{
                                            methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                add(new MethodSelector() {{
                                                    method = "incidunt";
                                                    permission = "sed";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "provident";
                                                    permission = "eius";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "necessitatibus";
                                                    permission = "ipsum";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "ea";
                                                    permission = "occaecati";
                                                }}),
                                            }};
                                            serviceName = "quos";
                                        }}),
                                    }};
                                    resources = new String[]{{
                                        add("tempora"),
                                        add("tempora"),
                                        add("voluptate"),
                                        add("reiciendis"),
                                    }};
                                }};
                            }}),
                        }};
                        ingressPolicies = new org.openapis.openapi.models.shared.IngressPolicy[]{{
                            add(new IngressPolicy() {{
                                ingressFrom = new IngressFrom() {{
                                    identities = new String[]{{
                                        add("non"),
                                    }};
                                    identityType = IngressFromIdentityTypeEnum.ANY_SERVICE_ACCOUNT;
                                    sources = new org.openapis.openapi.models.shared.IngressSource[]{{
                                        add(new IngressSource() {{
                                            accessLevel = "facilis";
                                            resource = "quaerat";
                                        }}),
                                        add(new IngressSource() {{
                                            accessLevel = "incidunt";
                                            resource = "ipsam";
                                        }}),
                                        add(new IngressSource() {{
                                            accessLevel = "debitis";
                                            resource = "rem";
                                        }}),
                                    }};
                                }};
                                ingressTo = new IngressTo() {{
                                    operations = new org.openapis.openapi.models.shared.ApiOperation[]{{
                                        add(new ApiOperation() {{
                                            methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                add(new MethodSelector() {{
                                                    method = "error";
                                                    permission = "veniam";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "minima";
                                                    permission = "recusandae";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "reiciendis";
                                                    permission = "nulla";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "magni";
                                                    permission = "aperiam";
                                                }}),
                                            }};
                                            serviceName = "saepe";
                                        }}),
                                    }};
                                    resources = new String[]{{
                                        add("veniam"),
                                        add("in"),
                                    }};
                                }};
                            }}),
                            add(new IngressPolicy() {{
                                ingressFrom = new IngressFrom() {{
                                    identities = new String[]{{
                                        add("beatae"),
                                        add("laudantium"),
                                        add("exercitationem"),
                                        add("praesentium"),
                                    }};
                                    identityType = IngressFromIdentityTypeEnum.ANY_USER_ACCOUNT;
                                    sources = new org.openapis.openapi.models.shared.IngressSource[]{{
                                        add(new IngressSource() {{
                                            accessLevel = "dolorum";
                                            resource = "voluptatum";
                                        }}),
                                        add(new IngressSource() {{
                                            accessLevel = "error";
                                            resource = "hic";
                                        }}),
                                    }};
                                }};
                                ingressTo = new IngressTo() {{
                                    operations = new org.openapis.openapi.models.shared.ApiOperation[]{{
                                        add(new ApiOperation() {{
                                            methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                add(new MethodSelector() {{
                                                    method = "neque";
                                                    permission = "dolorum";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "nostrum";
                                                    permission = "officia";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "dolorum";
                                                    permission = "corrupti";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "accusamus";
                                                    permission = "tempora";
                                                }}),
                                            }};
                                            serviceName = "atque";
                                        }}),
                                        add(new ApiOperation() {{
                                            methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                add(new MethodSelector() {{
                                                    method = "ut";
                                                    permission = "fugiat";
                                                }}),
                                            }};
                                            serviceName = "voluptatem";
                                        }}),
                                        add(new ApiOperation() {{
                                            methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                add(new MethodSelector() {{
                                                    method = "expedita";
                                                    permission = "magnam";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "consequatur";
                                                    permission = "esse";
                                                }}),
                                                add(new MethodSelector() {{
                                                    method = "ipsam";
                                                    permission = "sit";
                                                }}),
                                            }};
                                            serviceName = "voluptatum";
                                        }}),
                                    }};
                                    resources = new String[]{{
                                        add("repudiandae"),
                                        add("corporis"),
                                        add("et"),
                                    }};
                                }};
                            }}),
                        }};
                        resources = new String[]{{
                            add("ex"),
                            add("sed"),
                            add("sit"),
                        }};
                        restrictedServices = new String[]{{
                            add("nostrum"),
                            add("saepe"),
                        }};
                        vpcAccessibleServices = new VpcAccessibleServices() {{
                            allowedServices = new String[]{{
                                add("consequatur"),
                                add("incidunt"),
                                add("reiciendis"),
                            }};
                            enableRestriction = false;
                        }};;
                    }};;
                    title = "Mrs.";
                    useExplicitDryRunSpec = false;
                }};;
                accessToken = "harum";
                alt = AltEnum.JSON;
                callback = "architecto";
                fields = "occaecati";
                key = "labore";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "atque";
                uploadType = "laborum";
                uploadProtocol = "nam";
            }};            

            AccesscontextmanagerAccessPoliciesServicePerimetersCreateResponse res = sdk.accessPolicies.accesscontextmanagerAccessPoliciesServicePerimetersCreate(req, new AccesscontextmanagerAccessPoliciesServicePerimetersCreateSecurity("tenetur", "laboriosam") {{
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

## accesscontextmanagerAccessPoliciesServicePerimetersList

Lists all service perimeters for an access policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesServicePerimetersListRequest;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesServicePerimetersListResponse;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesServicePerimetersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccesscontextmanagerAccessPoliciesServicePerimetersListRequest req = new AccesscontextmanagerAccessPoliciesServicePerimetersListRequest("alias") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "unde";
                fields = "reiciendis";
                key = "provident";
                oauthToken = "repellendus";
                pageSize = 962771L;
                pageToken = "voluptates";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "est";
                uploadProtocol = "quidem";
            }};            

            AccesscontextmanagerAccessPoliciesServicePerimetersListResponse res = sdk.accessPolicies.accesscontextmanagerAccessPoliciesServicePerimetersList(req, new AccesscontextmanagerAccessPoliciesServicePerimetersListSecurity("reprehenderit", "facere") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listServicePerimetersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accesscontextmanagerAccessPoliciesServicePerimetersReplaceAll

Replace all existing service perimeters in an access policy with the service perimeters provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. Replacements containing errors result in an error response for the first error encountered. Upon an error, replacement are cancelled and existing service perimeters are not affected. The Operation.response field contains ReplaceServicePerimetersResponse.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllRequest;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllResponse;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApiOperation;
import org.openapis.openapi.models.shared.EgressFrom;
import org.openapis.openapi.models.shared.EgressFromIdentityTypeEnum;
import org.openapis.openapi.models.shared.EgressPolicy;
import org.openapis.openapi.models.shared.EgressTo;
import org.openapis.openapi.models.shared.IngressFrom;
import org.openapis.openapi.models.shared.IngressFromIdentityTypeEnum;
import org.openapis.openapi.models.shared.IngressPolicy;
import org.openapis.openapi.models.shared.IngressSource;
import org.openapis.openapi.models.shared.IngressTo;
import org.openapis.openapi.models.shared.MethodSelector;
import org.openapis.openapi.models.shared.ReplaceServicePerimetersRequest;
import org.openapis.openapi.models.shared.ServicePerimeter;
import org.openapis.openapi.models.shared.ServicePerimeterConfig;
import org.openapis.openapi.models.shared.ServicePerimeterPerimeterTypeEnum;
import org.openapis.openapi.models.shared.VpcAccessibleServices;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllRequest req = new AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllRequest("fuga") {{
                dollarXgafv = XgafvEnum.TWO;
                replaceServicePerimetersRequest = new ReplaceServicePerimetersRequest() {{
                    etag = "mollitia";
                    servicePerimeters = new org.openapis.openapi.models.shared.ServicePerimeter[]{{
                        add(new ServicePerimeter() {{
                            description = "voluptatem";
                            name = "Phil Boyer";
                            perimeterType = ServicePerimeterPerimeterTypeEnum.PERIMETER_TYPE_BRIDGE;
                            spec = new ServicePerimeterConfig() {{
                                accessLevels = new String[]{{
                                    add("suscipit"),
                                    add("quidem"),
                                    add("maxime"),
                                }};
                                egressPolicies = new org.openapis.openapi.models.shared.EgressPolicy[]{{
                                    add(new EgressPolicy() {{
                                        egressFrom = new EgressFrom() {{
                                            identities = new String[]{{
                                                add("amet"),
                                                add("assumenda"),
                                            }};
                                            identityType = EgressFromIdentityTypeEnum.ANY_IDENTITY;
                                        }};
                                        egressTo = new EgressTo() {{
                                            externalResources = new String[]{{
                                                add("error"),
                                                add("officiis"),
                                                add("officiis"),
                                            }};
                                            operations = new org.openapis.openapi.models.shared.ApiOperation[]{{
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "minima";
                                                            permission = "aspernatur";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "ex";
                                                            permission = "maiores";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "corrupti";
                                                            permission = "at";
                                                        }}),
                                                    }};
                                                    serviceName = "error";
                                                }}),
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "suscipit";
                                                            permission = "repudiandae";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "atque";
                                                            permission = "atque";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "sunt";
                                                            permission = "recusandae";
                                                        }}),
                                                    }};
                                                    serviceName = "dolorum";
                                                }}),
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "labore";
                                                            permission = "reiciendis";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "doloremque";
                                                            permission = "repudiandae";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "dicta";
                                                            permission = "accusantium";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "beatae";
                                                            permission = "dolores";
                                                        }}),
                                                    }};
                                                    serviceName = "enim";
                                                }}),
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "velit";
                                                            permission = "a";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "molestias";
                                                            permission = "magnam";
                                                        }}),
                                                    }};
                                                    serviceName = "saepe";
                                                }}),
                                            }};
                                            resources = new String[]{{
                                                add("occaecati"),
                                            }};
                                        }};
                                    }}),
                                }};
                                ingressPolicies = new org.openapis.openapi.models.shared.IngressPolicy[]{{
                                    add(new IngressPolicy() {{
                                        ingressFrom = new IngressFrom() {{
                                            identities = new String[]{{
                                                add("in"),
                                                add("adipisci"),
                                                add("eveniet"),
                                            }};
                                            identityType = IngressFromIdentityTypeEnum.ANY_USER_ACCOUNT;
                                            sources = new org.openapis.openapi.models.shared.IngressSource[]{{
                                                add(new IngressSource() {{
                                                    accessLevel = "fugit";
                                                    resource = "id";
                                                }}),
                                            }};
                                        }};
                                        ingressTo = new IngressTo() {{
                                            operations = new org.openapis.openapi.models.shared.ApiOperation[]{{
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "error";
                                                            permission = "illo";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "corporis";
                                                            permission = "quidem";
                                                        }}),
                                                    }};
                                                    serviceName = "eveniet";
                                                }}),
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "vero";
                                                            permission = "doloremque";
                                                        }}),
                                                    }};
                                                    serviceName = "iure";
                                                }}),
                                            }};
                                            resources = new String[]{{
                                                add("totam"),
                                            }};
                                        }};
                                    }}),
                                    add(new IngressPolicy() {{
                                        ingressFrom = new IngressFrom() {{
                                            identities = new String[]{{
                                                add("molestiae"),
                                            }};
                                            identityType = IngressFromIdentityTypeEnum.ANY_SERVICE_ACCOUNT;
                                            sources = new org.openapis.openapi.models.shared.IngressSource[]{{
                                                add(new IngressSource() {{
                                                    accessLevel = "cum";
                                                    resource = "iure";
                                                }}),
                                            }};
                                        }};
                                        ingressTo = new IngressTo() {{
                                            operations = new org.openapis.openapi.models.shared.ApiOperation[]{{
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "laborum";
                                                            permission = "distinctio";
                                                        }}),
                                                    }};
                                                    serviceName = "voluptatum";
                                                }}),
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "aliquam";
                                                            permission = "ad";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "repellat";
                                                            permission = "alias";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "corporis";
                                                            permission = "perspiciatis";
                                                        }}),
                                                    }};
                                                    serviceName = "nihil";
                                                }}),
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "voluptas";
                                                            permission = "alias";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "maiores";
                                                            permission = "reiciendis";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "dolores";
                                                            permission = "id";
                                                        }}),
                                                    }};
                                                    serviceName = "minima";
                                                }}),
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "dolorum";
                                                            permission = "nesciunt";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "quae";
                                                            permission = "recusandae";
                                                        }}),
                                                    }};
                                                    serviceName = "omnis";
                                                }}),
                                            }};
                                            resources = new String[]{{
                                                add("molestiae"),
                                                add("ex"),
                                            }};
                                        }};
                                    }}),
                                    add(new IngressPolicy() {{
                                        ingressFrom = new IngressFrom() {{
                                            identities = new String[]{{
                                                add("culpa"),
                                                add("adipisci"),
                                            }};
                                            identityType = IngressFromIdentityTypeEnum.ANY_SERVICE_ACCOUNT;
                                            sources = new org.openapis.openapi.models.shared.IngressSource[]{{
                                                add(new IngressSource() {{
                                                    accessLevel = "eum";
                                                    resource = "nemo";
                                                }}),
                                                add(new IngressSource() {{
                                                    accessLevel = "recusandae";
                                                    resource = "esse";
                                                }}),
                                                add(new IngressSource() {{
                                                    accessLevel = "provident";
                                                    resource = "quis";
                                                }}),
                                            }};
                                        }};
                                        ingressTo = new IngressTo() {{
                                            operations = new org.openapis.openapi.models.shared.ApiOperation[]{{
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "provident";
                                                            permission = "aspernatur";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "ullam";
                                                            permission = "quasi";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "animi";
                                                            permission = "nostrum";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "mollitia";
                                                            permission = "provident";
                                                        }}),
                                                    }};
                                                    serviceName = "possimus";
                                                }}),
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "ex";
                                                            permission = "aliquid";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "accusantium";
                                                            permission = "repellat";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "doloribus";
                                                            permission = "ullam";
                                                        }}),
                                                    }};
                                                    serviceName = "in";
                                                }}),
                                            }};
                                            resources = new String[]{{
                                                add("earum"),
                                                add("officia"),
                                                add("laborum"),
                                            }};
                                        }};
                                    }}),
                                    add(new IngressPolicy() {{
                                        ingressFrom = new IngressFrom() {{
                                            identities = new String[]{{
                                                add("modi"),
                                                add("voluptatibus"),
                                                add("molestias"),
                                                add("officiis"),
                                            }};
                                            identityType = IngressFromIdentityTypeEnum.ANY_SERVICE_ACCOUNT;
                                            sources = new org.openapis.openapi.models.shared.IngressSource[]{{
                                                add(new IngressSource() {{
                                                    accessLevel = "vitae";
                                                    resource = "rerum";
                                                }}),
                                                add(new IngressSource() {{
                                                    accessLevel = "tempora";
                                                    resource = "quis";
                                                }}),
                                                add(new IngressSource() {{
                                                    accessLevel = "inventore";
                                                    resource = "fugit";
                                                }}),
                                                add(new IngressSource() {{
                                                    accessLevel = "cumque";
                                                    resource = "quae";
                                                }}),
                                            }};
                                        }};
                                        ingressTo = new IngressTo() {{
                                            operations = new org.openapis.openapi.models.shared.ApiOperation[]{{
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "aspernatur";
                                                            permission = "eum";
                                                        }}),
                                                    }};
                                                    serviceName = "eius";
                                                }}),
                                            }};
                                            resources = new String[]{{
                                                add("at"),
                                                add("impedit"),
                                                add("eos"),
                                            }};
                                        }};
                                    }}),
                                }};
                                resources = new String[]{{
                                    add("eum"),
                                    add("dicta"),
                                    add("minima"),
                                    add("beatae"),
                                }};
                                restrictedServices = new String[]{{
                                    add("provident"),
                                    add("earum"),
                                    add("soluta"),
                                }};
                                vpcAccessibleServices = new VpcAccessibleServices() {{
                                    allowedServices = new String[]{{
                                        add("illum"),
                                        add("eaque"),
                                        add("earum"),
                                        add("perspiciatis"),
                                    }};
                                    enableRestriction = false;
                                }};
                            }};
                            status = new ServicePerimeterConfig() {{
                                accessLevels = new String[]{{
                                    add("debitis"),
                                    add("aliquid"),
                                    add("porro"),
                                    add("suscipit"),
                                }};
                                egressPolicies = new org.openapis.openapi.models.shared.EgressPolicy[]{{
                                    add(new EgressPolicy() {{
                                        egressFrom = new EgressFrom() {{
                                            identities = new String[]{{
                                                add("cumque"),
                                            }};
                                            identityType = EgressFromIdentityTypeEnum.ANY_USER_ACCOUNT;
                                        }};
                                        egressTo = new EgressTo() {{
                                            externalResources = new String[]{{
                                                add("animi"),
                                            }};
                                            operations = new org.openapis.openapi.models.shared.ApiOperation[]{{
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "consequatur";
                                                            permission = "quasi";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "et";
                                                            permission = "ducimus";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "natus";
                                                            permission = "occaecati";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "suscipit";
                                                            permission = "adipisci";
                                                        }}),
                                                    }};
                                                    serviceName = "quasi";
                                                }}),
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "doloribus";
                                                            permission = "nulla";
                                                        }}),
                                                    }};
                                                    serviceName = "necessitatibus";
                                                }}),
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "tempora";
                                                            permission = "nihil";
                                                        }}),
                                                    }};
                                                    serviceName = "molestiae";
                                                }}),
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "iusto";
                                                            permission = "esse";
                                                        }}),
                                                    }};
                                                    serviceName = "praesentium";
                                                }}),
                                            }};
                                            resources = new String[]{{
                                                add("reiciendis"),
                                                add("vel"),
                                                add("architecto"),
                                                add("fugiat"),
                                            }};
                                        }};
                                    }}),
                                }};
                                ingressPolicies = new org.openapis.openapi.models.shared.IngressPolicy[]{{
                                    add(new IngressPolicy() {{
                                        ingressFrom = new IngressFrom() {{
                                            identities = new String[]{{
                                                add("odio"),
                                            }};
                                            identityType = IngressFromIdentityTypeEnum.ANY_IDENTITY;
                                            sources = new org.openapis.openapi.models.shared.IngressSource[]{{
                                                add(new IngressSource() {{
                                                    accessLevel = "ex";
                                                    resource = "consectetur";
                                                }}),
                                                add(new IngressSource() {{
                                                    accessLevel = "aliquid";
                                                    resource = "ipsa";
                                                }}),
                                            }};
                                        }};
                                        ingressTo = new IngressTo() {{
                                            operations = new org.openapis.openapi.models.shared.ApiOperation[]{{
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "nostrum";
                                                            permission = "fugiat";
                                                        }}),
                                                    }};
                                                    serviceName = "expedita";
                                                }}),
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "officia";
                                                            permission = "suscipit";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "aliquid";
                                                            permission = "perferendis";
                                                        }}),
                                                    }};
                                                    serviceName = "eum";
                                                }}),
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "iste";
                                                            permission = "id";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "ab";
                                                            permission = "error";
                                                        }}),
                                                    }};
                                                    serviceName = "possimus";
                                                }}),
                                            }};
                                            resources = new String[]{{
                                                add("mollitia"),
                                                add("laborum"),
                                                add("libero"),
                                                add("ad"),
                                            }};
                                        }};
                                    }}),
                                }};
                                resources = new String[]{{
                                    add("enim"),
                                    add("vitae"),
                                    add("repellendus"),
                                }};
                                restrictedServices = new String[]{{
                                    add("quo"),
                                    add("ex"),
                                }};
                                vpcAccessibleServices = new VpcAccessibleServices() {{
                                    allowedServices = new String[]{{
                                        add("ad"),
                                        add("expedita"),
                                    }};
                                    enableRestriction = false;
                                }};
                            }};
                            title = "Mr.";
                            useExplicitDryRunSpec = false;
                        }}),
                        add(new ServicePerimeter() {{
                            description = "molestias";
                            name = "Gene Brekke";
                            perimeterType = ServicePerimeterPerimeterTypeEnum.PERIMETER_TYPE_REGULAR;
                            spec = new ServicePerimeterConfig() {{
                                accessLevels = new String[]{{
                                    add("est"),
                                    add("culpa"),
                                    add("voluptatem"),
                                }};
                                egressPolicies = new org.openapis.openapi.models.shared.EgressPolicy[]{{
                                    add(new EgressPolicy() {{
                                        egressFrom = new EgressFrom() {{
                                            identities = new String[]{{
                                                add("architecto"),
                                                add("fuga"),
                                                add("pariatur"),
                                                add("debitis"),
                                            }};
                                            identityType = EgressFromIdentityTypeEnum.IDENTITY_TYPE_UNSPECIFIED;
                                        }};
                                        egressTo = new EgressTo() {{
                                            externalResources = new String[]{{
                                                add("deleniti"),
                                            }};
                                            operations = new org.openapis.openapi.models.shared.ApiOperation[]{{
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "sapiente";
                                                            permission = "rem";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "minus";
                                                            permission = "nemo";
                                                        }}),
                                                    }};
                                                    serviceName = "asperiores";
                                                }}),
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "ullam";
                                                            permission = "perferendis";
                                                        }}),
                                                    }};
                                                    serviceName = "illum";
                                                }}),
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "impedit";
                                                            permission = "quibusdam";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "nam";
                                                            permission = "ipsam";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "culpa";
                                                            permission = "dolor";
                                                        }}),
                                                    }};
                                                    serviceName = "aliquam";
                                                }}),
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "deleniti";
                                                            permission = "veritatis";
                                                        }}),
                                                    }};
                                                    serviceName = "tempora";
                                                }}),
                                            }};
                                            resources = new String[]{{
                                                add("consequatur"),
                                            }};
                                        }};
                                    }}),
                                    add(new EgressPolicy() {{
                                        egressFrom = new EgressFrom() {{
                                            identities = new String[]{{
                                                add("sit"),
                                            }};
                                            identityType = EgressFromIdentityTypeEnum.ANY_IDENTITY;
                                        }};
                                        egressTo = new EgressTo() {{
                                            externalResources = new String[]{{
                                                add("ab"),
                                            }};
                                            operations = new org.openapis.openapi.models.shared.ApiOperation[]{{
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "dolor";
                                                            permission = "fugiat";
                                                        }}),
                                                    }};
                                                    serviceName = "ipsam";
                                                }}),
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "ipsa";
                                                            permission = "quas";
                                                        }}),
                                                    }};
                                                    serviceName = "eveniet";
                                                }}),
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "officiis";
                                                            permission = "esse";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "necessitatibus";
                                                            permission = "sed";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "veniam";
                                                            permission = "nesciunt";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "expedita";
                                                            permission = "eum";
                                                        }}),
                                                    }};
                                                    serviceName = "vel";
                                                }}),
                                            }};
                                            resources = new String[]{{
                                                add("magnam"),
                                                add("exercitationem"),
                                                add("ab"),
                                            }};
                                        }};
                                    }}),
                                    add(new EgressPolicy() {{
                                        egressFrom = new EgressFrom() {{
                                            identities = new String[]{{
                                                add("autem"),
                                                add("nobis"),
                                                add("laboriosam"),
                                                add("recusandae"),
                                            }};
                                            identityType = EgressFromIdentityTypeEnum.IDENTITY_TYPE_UNSPECIFIED;
                                        }};
                                        egressTo = new EgressTo() {{
                                            externalResources = new String[]{{
                                                add("exercitationem"),
                                            }};
                                            operations = new org.openapis.openapi.models.shared.ApiOperation[]{{
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "nisi";
                                                            permission = "at";
                                                        }}),
                                                    }};
                                                    serviceName = "vero";
                                                }}),
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "harum";
                                                            permission = "sequi";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "doloribus";
                                                            permission = "repudiandae";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "optio";
                                                            permission = "occaecati";
                                                        }}),
                                                    }};
                                                    serviceName = "nemo";
                                                }}),
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "blanditiis";
                                                            permission = "officia";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "voluptas";
                                                            permission = "numquam";
                                                        }}),
                                                    }};
                                                    serviceName = "nemo";
                                                }}),
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "eius";
                                                            permission = "aspernatur";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "ducimus";
                                                            permission = "nesciunt";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "fuga";
                                                            permission = "laudantium";
                                                        }}),
                                                    }};
                                                    serviceName = "incidunt";
                                                }}),
                                            }};
                                            resources = new String[]{{
                                                add("rem"),
                                            }};
                                        }};
                                    }}),
                                    add(new EgressPolicy() {{
                                        egressFrom = new EgressFrom() {{
                                            identities = new String[]{{
                                                add("dicta"),
                                                add("nisi"),
                                                add("consequuntur"),
                                                add("consectetur"),
                                            }};
                                            identityType = EgressFromIdentityTypeEnum.IDENTITY_TYPE_UNSPECIFIED;
                                        }};
                                        egressTo = new EgressTo() {{
                                            externalResources = new String[]{{
                                                add("reiciendis"),
                                                add("soluta"),
                                                add("alias"),
                                            }};
                                            operations = new org.openapis.openapi.models.shared.ApiOperation[]{{
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "occaecati";
                                                            permission = "iste";
                                                        }}),
                                                    }};
                                                    serviceName = "magni";
                                                }}),
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "fuga";
                                                            permission = "accusamus";
                                                        }}),
                                                    }};
                                                    serviceName = "voluptatibus";
                                                }}),
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "omnis";
                                                            permission = "delectus";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "minima";
                                                            permission = "praesentium";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "maxime";
                                                            permission = "magnam";
                                                        }}),
                                                    }};
                                                    serviceName = "temporibus";
                                                }}),
                                            }};
                                            resources = new String[]{{
                                                add("commodi"),
                                                add("itaque"),
                                                add("commodi"),
                                            }};
                                        }};
                                    }}),
                                }};
                                ingressPolicies = new org.openapis.openapi.models.shared.IngressPolicy[]{{
                                    add(new IngressPolicy() {{
                                        ingressFrom = new IngressFrom() {{
                                            identities = new String[]{{
                                                add("modi"),
                                                add("nam"),
                                                add("vero"),
                                                add("voluptatem"),
                                            }};
                                            identityType = IngressFromIdentityTypeEnum.ANY_IDENTITY;
                                            sources = new org.openapis.openapi.models.shared.IngressSource[]{{
                                                add(new IngressSource() {{
                                                    accessLevel = "alias";
                                                    resource = "quasi";
                                                }}),
                                                add(new IngressSource() {{
                                                    accessLevel = "non";
                                                    resource = "maiores";
                                                }}),
                                            }};
                                        }};
                                        ingressTo = new IngressTo() {{
                                            operations = new org.openapis.openapi.models.shared.ApiOperation[]{{
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "nulla";
                                                            permission = "deserunt";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "esse";
                                                            permission = "nemo";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "reprehenderit";
                                                            permission = "est";
                                                        }}),
                                                    }};
                                                    serviceName = "quis";
                                                }}),
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "accusamus";
                                                            permission = "impedit";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "hic";
                                                            permission = "necessitatibus";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "asperiores";
                                                            permission = "ex";
                                                        }}),
                                                    }};
                                                    serviceName = "voluptas";
                                                }}),
                                            }};
                                            resources = new String[]{{
                                                add("delectus"),
                                                add("quae"),
                                                add("minus"),
                                                add("fuga"),
                                            }};
                                        }};
                                    }}),
                                    add(new IngressPolicy() {{
                                        ingressFrom = new IngressFrom() {{
                                            identities = new String[]{{
                                                add("consectetur"),
                                                add("velit"),
                                                add("atque"),
                                            }};
                                            identityType = IngressFromIdentityTypeEnum.IDENTITY_TYPE_UNSPECIFIED;
                                            sources = new org.openapis.openapi.models.shared.IngressSource[]{{
                                                add(new IngressSource() {{
                                                    accessLevel = "magni";
                                                    resource = "soluta";
                                                }}),
                                                add(new IngressSource() {{
                                                    accessLevel = "repudiandae";
                                                    resource = "nam";
                                                }}),
                                                add(new IngressSource() {{
                                                    accessLevel = "dolore";
                                                    resource = "iusto";
                                                }}),
                                                add(new IngressSource() {{
                                                    accessLevel = "voluptate";
                                                    resource = "sequi";
                                                }}),
                                            }};
                                        }};
                                        ingressTo = new IngressTo() {{
                                            operations = new org.openapis.openapi.models.shared.ApiOperation[]{{
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "quo";
                                                            permission = "deleniti";
                                                        }}),
                                                    }};
                                                    serviceName = "quibusdam";
                                                }}),
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "odit";
                                                            permission = "voluptatibus";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "vel";
                                                            permission = "magnam";
                                                        }}),
                                                    }};
                                                    serviceName = "quibusdam";
                                                }}),
                                            }};
                                            resources = new String[]{{
                                                add("facere"),
                                            }};
                                        }};
                                    }}),
                                    add(new IngressPolicy() {{
                                        ingressFrom = new IngressFrom() {{
                                            identities = new String[]{{
                                                add("architecto"),
                                                add("voluptatibus"),
                                                add("quia"),
                                            }};
                                            identityType = IngressFromIdentityTypeEnum.ANY_SERVICE_ACCOUNT;
                                            sources = new org.openapis.openapi.models.shared.IngressSource[]{{
                                                add(new IngressSource() {{
                                                    accessLevel = "velit";
                                                    resource = "illo";
                                                }}),
                                                add(new IngressSource() {{
                                                    accessLevel = "accusantium";
                                                    resource = "vel";
                                                }}),
                                            }};
                                        }};
                                        ingressTo = new IngressTo() {{
                                            operations = new org.openapis.openapi.models.shared.ApiOperation[]{{
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "vero";
                                                            permission = "excepturi";
                                                        }}),
                                                    }};
                                                    serviceName = "eum";
                                                }}),
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "ut";
                                                            permission = "perspiciatis";
                                                        }}),
                                                    }};
                                                    serviceName = "earum";
                                                }}),
                                            }};
                                            resources = new String[]{{
                                                add("impedit"),
                                            }};
                                        }};
                                    }}),
                                }};
                                resources = new String[]{{
                                    add("iste"),
                                    add("itaque"),
                                    add("alias"),
                                    add("nisi"),
                                }};
                                restrictedServices = new String[]{{
                                    add("velit"),
                                    add("laborum"),
                                    add("non"),
                                    add("dolor"),
                                }};
                                vpcAccessibleServices = new VpcAccessibleServices() {{
                                    allowedServices = new String[]{{
                                        add("sit"),
                                        add("doloremque"),
                                    }};
                                    enableRestriction = false;
                                }};
                            }};
                            status = new ServicePerimeterConfig() {{
                                accessLevels = new String[]{{
                                    add("officia"),
                                }};
                                egressPolicies = new org.openapis.openapi.models.shared.EgressPolicy[]{{
                                    add(new EgressPolicy() {{
                                        egressFrom = new EgressFrom() {{
                                            identities = new String[]{{
                                                add("quidem"),
                                                add("voluptas"),
                                            }};
                                            identityType = EgressFromIdentityTypeEnum.ANY_USER_ACCOUNT;
                                        }};
                                        egressTo = new EgressTo() {{
                                            externalResources = new String[]{{
                                                add("perspiciatis"),
                                                add("expedita"),
                                                add("deleniti"),
                                                add("a"),
                                            }};
                                            operations = new org.openapis.openapi.models.shared.ApiOperation[]{{
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "unde";
                                                            permission = "necessitatibus";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "animi";
                                                            permission = "impedit";
                                                        }}),
                                                    }};
                                                    serviceName = "ipsam";
                                                }}),
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "est";
                                                            permission = "error";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "esse";
                                                            permission = "labore";
                                                        }}),
                                                    }};
                                                    serviceName = "veritatis";
                                                }}),
                                            }};
                                            resources = new String[]{{
                                                add("consectetur"),
                                                add("vitae"),
                                                add("inventore"),
                                                add("dolorem"),
                                            }};
                                        }};
                                    }}),
                                    add(new EgressPolicy() {{
                                        egressFrom = new EgressFrom() {{
                                            identities = new String[]{{
                                                add("qui"),
                                                add("iste"),
                                            }};
                                            identityType = EgressFromIdentityTypeEnum.ANY_IDENTITY;
                                        }};
                                        egressTo = new EgressTo() {{
                                            externalResources = new String[]{{
                                                add("soluta"),
                                                add("libero"),
                                            }};
                                            operations = new org.openapis.openapi.models.shared.ApiOperation[]{{
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "odio";
                                                            permission = "fugit";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "alias";
                                                            permission = "magni";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "vel";
                                                            permission = "quae";
                                                        }}),
                                                    }};
                                                    serviceName = "quae";
                                                }}),
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "neque";
                                                            permission = "exercitationem";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "itaque";
                                                            permission = "et";
                                                        }}),
                                                    }};
                                                    serviceName = "ipsum";
                                                }}),
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "nulla";
                                                            permission = "distinctio";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "maxime";
                                                            permission = "quia";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "quia";
                                                            permission = "nostrum";
                                                        }}),
                                                    }};
                                                    serviceName = "omnis";
                                                }}),
                                            }};
                                            resources = new String[]{{
                                                add("dicta"),
                                                add("id"),
                                                add("libero"),
                                            }};
                                        }};
                                    }}),
                                    add(new EgressPolicy() {{
                                        egressFrom = new EgressFrom() {{
                                            identities = new String[]{{
                                                add("officia"),
                                                add("quos"),
                                                add("placeat"),
                                                add("sit"),
                                            }};
                                            identityType = EgressFromIdentityTypeEnum.ANY_IDENTITY;
                                        }};
                                        egressTo = new EgressTo() {{
                                            externalResources = new String[]{{
                                                add("voluptates"),
                                            }};
                                            operations = new org.openapis.openapi.models.shared.ApiOperation[]{{
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "totam";
                                                            permission = "dolore";
                                                        }}),
                                                    }};
                                                    serviceName = "eligendi";
                                                }}),
                                            }};
                                            resources = new String[]{{
                                                add("voluptatem"),
                                                add("autem"),
                                                add("esse"),
                                            }};
                                        }};
                                    }}),
                                    add(new EgressPolicy() {{
                                        egressFrom = new EgressFrom() {{
                                            identities = new String[]{{
                                                add("assumenda"),
                                            }};
                                            identityType = EgressFromIdentityTypeEnum.IDENTITY_TYPE_UNSPECIFIED;
                                        }};
                                        egressTo = new EgressTo() {{
                                            externalResources = new String[]{{
                                                add("facere"),
                                                add("corrupti"),
                                                add("molestiae"),
                                            }};
                                            operations = new org.openapis.openapi.models.shared.ApiOperation[]{{
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "necessitatibus";
                                                            permission = "tempore";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "sint";
                                                            permission = "ea";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "autem";
                                                            permission = "ipsam";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "rerum";
                                                            permission = "laudantium";
                                                        }}),
                                                    }};
                                                    serviceName = "corporis";
                                                }}),
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "voluptatibus";
                                                            permission = "cum";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "at";
                                                            permission = "alias";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "quia";
                                                            permission = "quidem";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "fuga";
                                                            permission = "repudiandae";
                                                        }}),
                                                    }};
                                                    serviceName = "accusantium";
                                                }}),
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "officiis";
                                                            permission = "eos";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "quibusdam";
                                                            permission = "odio";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "praesentium";
                                                            permission = "odit";
                                                        }}),
                                                    }};
                                                    serviceName = "explicabo";
                                                }}),
                                            }};
                                            resources = new String[]{{
                                                add("error"),
                                                add("earum"),
                                            }};
                                        }};
                                    }}),
                                }};
                                ingressPolicies = new org.openapis.openapi.models.shared.IngressPolicy[]{{
                                    add(new IngressPolicy() {{
                                        ingressFrom = new IngressFrom() {{
                                            identities = new String[]{{
                                                add("similique"),
                                                add("ut"),
                                                add("quidem"),
                                                add("quis"),
                                            }};
                                            identityType = IngressFromIdentityTypeEnum.IDENTITY_TYPE_UNSPECIFIED;
                                            sources = new org.openapis.openapi.models.shared.IngressSource[]{{
                                                add(new IngressSource() {{
                                                    accessLevel = "molestiae";
                                                    resource = "delectus";
                                                }}),
                                                add(new IngressSource() {{
                                                    accessLevel = "cupiditate";
                                                    resource = "fugit";
                                                }}),
                                                add(new IngressSource() {{
                                                    accessLevel = "numquam";
                                                    resource = "numquam";
                                                }}),
                                            }};
                                        }};
                                        ingressTo = new IngressTo() {{
                                            operations = new org.openapis.openapi.models.shared.ApiOperation[]{{
                                                add(new ApiOperation() {{
                                                    methodSelectors = new org.openapis.openapi.models.shared.MethodSelector[]{{
                                                        add(new MethodSelector() {{
                                                            method = "officia";
                                                            permission = "dignissimos";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "optio";
                                                            permission = "necessitatibus";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "corporis";
                                                            permission = "qui";
                                                        }}),
                                                        add(new MethodSelector() {{
                                                            method = "expedita";
                                                            permission = "voluptatum";
                                                        }}),
                                                    }};
                                                    serviceName = "cupiditate";
                                                }}),
                                            }};
                                            resources = new String[]{{
                                                add("placeat"),
                                                add("enim"),
                                            }};
                                        }};
                                    }}),
                                }};
                                resources = new String[]{{
                                    add("in"),
                                }};
                                restrictedServices = new String[]{{
                                    add("eum"),
                                    add("modi"),
                                    add("corporis"),
                                    add("magnam"),
                                }};
                                vpcAccessibleServices = new VpcAccessibleServices() {{
                                    allowedServices = new String[]{{
                                        add("maiores"),
                                        add("tempore"),
                                        add("aperiam"),
                                        add("libero"),
                                    }};
                                    enableRestriction = false;
                                }};
                            }};
                            title = "Mr.";
                            useExplicitDryRunSpec = false;
                        }}),
                    }};
                }};;
                accessToken = "labore";
                alt = AltEnum.MEDIA;
                callback = "occaecati";
                fields = "voluptas";
                key = "quo";
                oauthToken = "velit";
                prettyPrint = false;
                quotaUser = "minus";
                uploadType = "fuga";
                uploadProtocol = "nostrum";
            }};            

            AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllResponse res = sdk.accessPolicies.accesscontextmanagerAccessPoliciesServicePerimetersReplaceAll(req, new AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllSecurity("est", "impedit") {{
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

## accesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissions

Returns the IAM permissions that the caller has on the specified Access Context Manager resource. The resource can be an AccessPolicy, AccessLevel, or ServicePerimeter. This method does not support other resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsRequest req = new AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsRequest("delectus") {{
                dollarXgafv = XgafvEnum.TWO;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("odit"),
                        add("repellat"),
                        add("pariatur"),
                        add("nemo"),
                    }};
                }};;
                accessToken = "reprehenderit";
                alt = AltEnum.JSON;
                callback = "odio";
                fields = "minima";
                key = "in";
                oauthToken = "ducimus";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "dolores";
                uploadProtocol = "error";
            }};            

            AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsResponse res = sdk.accessPolicies.accesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissions(req, new AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsSecurity("veritatis", "ducimus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## accesscontextmanagerAccessPoliciesSetIamPolicy

Sets the IAM policy for the specified Access Context Manager access policy. This method replaces the existing IAM policy on the access policy. The IAM policy controls the set of users who can perform specific operations on the Access Context Manager access policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesSetIamPolicySecurity;
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

            AccesscontextmanagerAccessPoliciesSetIamPolicyRequest req = new AccesscontextmanagerAccessPoliciesSetIamPolicyRequest("voluptate") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ex"),
                                            add("quaerat"),
                                            add("commodi"),
                                            add("officiis"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("exercitationem"),
                                            add("quam"),
                                            add("dolorem"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sint"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "sequi";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dicta"),
                                            add("earum"),
                                            add("veniam"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("nam"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("necessitatibus"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ducimus"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "veritatis";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("pariatur"),
                                            add("libero"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "occaecati";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("nostrum"),
                                            add("doloribus"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("enim"),
                                            add("hic"),
                                            add("animi"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "totam";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "odio";
                                    expression = "eaque";
                                    location = "saepe";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("iste"),
                                    add("assumenda"),
                                    add("tempore"),
                                }};
                                role = "libero";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "velit";
                                    expression = "doloremque";
                                    location = "delectus";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("ipsum"),
                                    add("adipisci"),
                                    add("saepe"),
                                }};
                                role = "deserunt";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "doloremque";
                                    expression = "quis";
                                    location = "veniam";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("cupiditate"),
                                }};
                                role = "molestiae";
                            }}),
                        }};
                        etag = "eligendi";
                        version = 820023;
                    }};;
                    updateMask = "non";
                }};;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "sed";
                fields = "asperiores";
                key = "veniam";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "facere";
                uploadType = "laudantium";
                uploadProtocol = "odit";
            }};            

            AccesscontextmanagerAccessPoliciesSetIamPolicyResponse res = sdk.accessPolicies.accesscontextmanagerAccessPoliciesSetIamPolicy(req, new AccesscontextmanagerAccessPoliciesSetIamPolicySecurity("pariatur", "amet") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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
