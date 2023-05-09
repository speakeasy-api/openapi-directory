# accessPolicies

### Available Operations

* [accesscontextmanagerAccessPoliciesAccessLevelsCreate](#accesscontextmanageraccesspoliciesaccesslevelscreate) - Create an Access Level. The longrunning operation from this RPC will have a successful status once the Access Level has propagated to long-lasting storage. Access Levels containing errors will result in an error response for the first error encountered.
* [accesscontextmanagerAccessPoliciesAccessLevelsList](#accesscontextmanageraccesspoliciesaccesslevelslist) - List all Access Levels for an access policy.
* [accesscontextmanagerAccessPoliciesCreate](#accesscontextmanageraccesspoliciescreate) - Create an `AccessPolicy`. Fails if this organization already has a `AccessPolicy`. The longrunning Operation will have a successful status once the `AccessPolicy` has propagated to long-lasting storage. Syntactic and basic semantic errors will be returned in `metadata` as a BadRequest proto.
* [accesscontextmanagerAccessPoliciesList](#accesscontextmanageraccesspolicieslist) - List all AccessPolicies under a container.
* [accesscontextmanagerAccessPoliciesServicePerimetersCreate](#accesscontextmanageraccesspoliciesserviceperimeterscreate) - Create a Service Perimeter. The longrunning operation from this RPC will have a successful status once the Service Perimeter has propagated to long-lasting storage. Service Perimeters containing errors will result in an error response for the first error encountered.
* [accesscontextmanagerAccessPoliciesServicePerimetersDelete](#accesscontextmanageraccesspoliciesserviceperimetersdelete) - Delete a Service Perimeter by resource name. The longrunning operation from this RPC will have a successful status once the Service Perimeter has been removed from long-lasting storage.
* [accesscontextmanagerAccessPoliciesServicePerimetersList](#accesscontextmanageraccesspoliciesserviceperimeterslist) - List all Service Perimeters for an access policy.
* [accesscontextmanagerAccessPoliciesServicePerimetersPatch](#accesscontextmanageraccesspoliciesserviceperimeterspatch) - Update a Service Perimeter. The longrunning operation from this RPC will have a successful status once the changes to the Service Perimeter have propagated to long-lasting storage. Service Perimeter containing errors will result in an error response for the first error encountered.

## accesscontextmanagerAccessPoliciesAccessLevelsCreate

Create an Access Level. The longrunning operation from this RPC will have a successful status once the Access Level has propagated to long-lasting storage. Access Levels containing errors will result in an error response for the first error encountered.

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

List all Access Levels for an access policy.

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

## accesscontextmanagerAccessPoliciesCreate

Create an `AccessPolicy`. Fails if this organization already has a `AccessPolicy`. The longrunning Operation will have a successful status once the `AccessPolicy` has propagated to long-lasting storage. Syntactic and basic semantic errors will be returned in `metadata` as a BadRequest proto.

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
                    name = "Mr. Andres King";
                    parent = "ullam";
                    title = "Miss";
                }};;
                accessToken = "nihil";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "sed";
                key = "saepe";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "consequuntur";
                uploadProtocol = "praesentium";
            }};            

            AccesscontextmanagerAccessPoliciesCreateResponse res = sdk.accessPolicies.accesscontextmanagerAccessPoliciesCreate(req, new AccesscontextmanagerAccessPoliciesCreateSecurity("natus", "magni") {{
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

## accesscontextmanagerAccessPoliciesList

List all AccessPolicies under a container.

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
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quo";
                alt = AltEnum.PROTO;
                callback = "pariatur";
                fields = "maxime";
                key = "ea";
                oauthToken = "excepturi";
                pageSize = 139972L;
                pageToken = "ea";
                parent = "accusantium";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "maiores";
                uploadProtocol = "quidem";
            }};            

            AccesscontextmanagerAccessPoliciesListResponse res = sdk.accessPolicies.accesscontextmanagerAccessPoliciesList(req, new AccesscontextmanagerAccessPoliciesListSecurity("ipsam", "voluptate") {{
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

## accesscontextmanagerAccessPoliciesServicePerimetersCreate

Create a Service Perimeter. The longrunning operation from this RPC will have a successful status once the Service Perimeter has propagated to long-lasting storage. Service Perimeters containing errors will result in an error response for the first error encountered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesServicePerimetersCreateRequest;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesServicePerimetersCreateResponse;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesServicePerimetersCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
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

            AccesscontextmanagerAccessPoliciesServicePerimetersCreateRequest req = new AccesscontextmanagerAccessPoliciesServicePerimetersCreateRequest("autem") {{
                dollarXgafv = XgafvEnum.TWO;
                servicePerimeter = new ServicePerimeter() {{
                    description = "eaque";
                    name = "Dr. Herman Wolf";
                    perimeterType = ServicePerimeterPerimeterTypeEnum.PERIMETER_TYPE_REGULAR;
                    status = new ServicePerimeterConfig() {{
                        accessLevels = new String[]{{
                            add("corporis"),
                            add("hic"),
                            add("libero"),
                            add("nobis"),
                        }};
                        resources = new String[]{{
                            add("quis"),
                        }};
                        restrictedServices = new String[]{{
                            add("dignissimos"),
                            add("eaque"),
                            add("quis"),
                        }};
                        unrestrictedServices = new String[]{{
                            add("eos"),
                        }};
                        vpcAccessibleServices = new VpcAccessibleServices() {{
                            allowedServices = new String[]{{
                                add("dolores"),
                            }};
                            enableRestriction = false;
                        }};;
                    }};;
                    title = "Miss";
                }};;
                accessToken = "quam";
                alt = AltEnum.JSON;
                callback = "vero";
                fields = "nostrum";
                key = "hic";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "facilis";
                uploadProtocol = "perspiciatis";
            }};            

            AccesscontextmanagerAccessPoliciesServicePerimetersCreateResponse res = sdk.accessPolicies.accesscontextmanagerAccessPoliciesServicePerimetersCreate(req, new AccesscontextmanagerAccessPoliciesServicePerimetersCreateSecurity("voluptatem", "porro") {{
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

## accesscontextmanagerAccessPoliciesServicePerimetersDelete

Delete a Service Perimeter by resource name. The longrunning operation from this RPC will have a successful status once the Service Perimeter has been removed from long-lasting storage.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesServicePerimetersDeleteRequest;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesServicePerimetersDeleteResponse;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesServicePerimetersDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccesscontextmanagerAccessPoliciesServicePerimetersDeleteRequest req = new AccesscontextmanagerAccessPoliciesServicePerimetersDeleteRequest("consequuntur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "error";
                alt = AltEnum.JSON;
                callback = "occaecati";
                fields = "rerum";
                key = "adipisci";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "earum";
                uploadType = "modi";
                uploadProtocol = "iste";
            }};            

            AccesscontextmanagerAccessPoliciesServicePerimetersDeleteResponse res = sdk.accessPolicies.accesscontextmanagerAccessPoliciesServicePerimetersDelete(req, new AccesscontextmanagerAccessPoliciesServicePerimetersDeleteSecurity("dolorum", "deleniti") {{
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

List all Service Perimeters for an access policy.

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

            AccesscontextmanagerAccessPoliciesServicePerimetersListRequest req = new AccesscontextmanagerAccessPoliciesServicePerimetersListRequest("pariatur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nobis";
                alt = AltEnum.PROTO;
                callback = "delectus";
                fields = "quaerat";
                key = "quos";
                oauthToken = "aliquid";
                pageSize = 212390L;
                pageToken = "dolorem";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "qui";
                uploadProtocol = "ipsum";
            }};            

            AccesscontextmanagerAccessPoliciesServicePerimetersListResponse res = sdk.accessPolicies.accesscontextmanagerAccessPoliciesServicePerimetersList(req, new AccesscontextmanagerAccessPoliciesServicePerimetersListSecurity("hic", "excepturi") {{
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

## accesscontextmanagerAccessPoliciesServicePerimetersPatch

Update a Service Perimeter. The longrunning operation from this RPC will have a successful status once the changes to the Service Perimeter have propagated to long-lasting storage. Service Perimeter containing errors will result in an error response for the first error encountered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesServicePerimetersPatchRequest;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesServicePerimetersPatchResponse;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesServicePerimetersPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
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

            AccesscontextmanagerAccessPoliciesServicePerimetersPatchRequest req = new AccesscontextmanagerAccessPoliciesServicePerimetersPatchRequest("cum") {{
                dollarXgafv = XgafvEnum.ONE;
                servicePerimeter = new ServicePerimeter() {{
                    description = "dignissimos";
                    name = "Allen Parisian Jr.";
                    perimeterType = ServicePerimeterPerimeterTypeEnum.PERIMETER_TYPE_REGULAR;
                    status = new ServicePerimeterConfig() {{
                        accessLevels = new String[]{{
                            add("odio"),
                            add("quaerat"),
                        }};
                        resources = new String[]{{
                            add("quidem"),
                            add("voluptatibus"),
                            add("voluptas"),
                            add("natus"),
                        }};
                        restrictedServices = new String[]{{
                            add("atque"),
                        }};
                        unrestrictedServices = new String[]{{
                            add("fugiat"),
                        }};
                        vpcAccessibleServices = new VpcAccessibleServices() {{
                            allowedServices = new String[]{{
                                add("soluta"),
                            }};
                            enableRestriction = false;
                        }};;
                    }};;
                    title = "Miss";
                }};;
                accessToken = "iusto";
                alt = AltEnum.MEDIA;
                callback = "dolorum";
                fields = "deleniti";
                key = "omnis";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "distinctio";
                updateMask = "asperiores";
                uploadType = "nihil";
                uploadProtocol = "ipsum";
            }};            

            AccesscontextmanagerAccessPoliciesServicePerimetersPatchResponse res = sdk.accessPolicies.accesscontextmanagerAccessPoliciesServicePerimetersPatch(req, new AccesscontextmanagerAccessPoliciesServicePerimetersPatchSecurity("voluptate", "id") {{
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
