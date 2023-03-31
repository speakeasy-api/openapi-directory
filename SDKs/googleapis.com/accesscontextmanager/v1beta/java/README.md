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

import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateSecurity;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreatePathParams;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest;
import org.openapis.openapi.models.operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateResponse;
import org.openapis.openapi.models.shared.AccessLevel;
import org.openapis.openapi.models.shared.CustomLevel;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.BasicLevelCombiningFunctionEnum;
import org.openapis.openapi.models.shared.BasicLevel;
import org.openapis.openapi.models.shared.Condition;
import org.openapis.openapi.models.shared.DevicePolicyAllowedDeviceManagementLevelsEnum;
import org.openapis.openapi.models.shared.DevicePolicyAllowedEncryptionStatusesEnum;
import org.openapis.openapi.models.shared.DevicePolicy;
import org.openapis.openapi.models.shared.OsConstraintOsTypeEnum;
import org.openapis.openapi.models.shared.OsConstraint;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    parent = "corrupti";
                }};
                queryParams = new AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new AccessLevel() {{
                    basic = new BasicLevel() {{
                        combiningFunction = "AND";
                        conditions = new org.openapis.openapi.models.shared.Condition[]{{
                            add(new Condition() {{
                                devicePolicy = new DevicePolicy() {{
                                    allowedDeviceManagementLevels = new org.openapis.openapi.models.shared.DevicePolicyAllowedDeviceManagementLevelsEnum[]{{
                                        add("COMPLETE"),
                                        add("MANAGEMENT_UNSPECIFIED"),
                                    }};
                                    allowedEncryptionStatuses = new org.openapis.openapi.models.shared.DevicePolicyAllowedEncryptionStatusesEnum[]{{
                                        add("ENCRYPTION_UNSUPPORTED"),
                                        add("ENCRYPTION_UNSUPPORTED"),
                                        add("ENCRYPTION_UNSUPPORTED"),
                                        add("ENCRYPTED"),
                                    }};
                                    osConstraints = new org.openapis.openapi.models.shared.OsConstraint[]{{
                                        add(new OsConstraint() {{
                                            minimumVersion = "voluptatum";
                                            osType = "DESKTOP_LINUX";
                                            requireVerifiedChromeOs = false;
                                        }}),
                                        add(new OsConstraint() {{
                                            minimumVersion = "excepturi";
                                            osType = "DESKTOP_WINDOWS";
                                            requireVerifiedChromeOs = false;
                                        }}),
                                        add(new OsConstraint() {{
                                            minimumVersion = "recusandae";
                                            osType = "ANDROID";
                                            requireVerifiedChromeOs = false;
                                        }}),
                                        add(new OsConstraint() {{
                                            minimumVersion = "ab";
                                            osType = "DESKTOP_WINDOWS";
                                            requireVerifiedChromeOs = false;
                                        }}),
                                    }};
                                    requireAdminApproval = false;
                                    requireCorpOwned = false;
                                    requireScreenlock = false;
                                }};
                                ipSubnetworks = new String[]{{
                                    add("deserunt"),
                                }};
                                members = new String[]{{
                                    add("ipsam"),
                                }};
                                negate = false;
                                regions = new String[]{{
                                    add("sapiente"),
                                    add("quo"),
                                    add("odit"),
                                    add("at"),
                                }};
                                requiredAccessLevels = new String[]{{
                                    add("maiores"),
                                    add("molestiae"),
                                    add("quod"),
                                    add("quod"),
                                }};
                            }}),
                            add(new Condition() {{
                                devicePolicy = new DevicePolicy() {{
                                    allowedDeviceManagementLevels = new org.openapis.openapi.models.shared.DevicePolicyAllowedDeviceManagementLevelsEnum[]{{
                                        add("BASIC"),
                                        add("COMPLETE"),
                                    }};
                                    allowedEncryptionStatuses = new org.openapis.openapi.models.shared.DevicePolicyAllowedEncryptionStatusesEnum[]{{
                                        add("ENCRYPTION_UNSPECIFIED"),
                                        add("UNENCRYPTED"),
                                        add("UNENCRYPTED"),
                                    }};
                                    osConstraints = new org.openapis.openapi.models.shared.OsConstraint[]{{
                                        add(new OsConstraint() {{
                                            minimumVersion = "fugit";
                                            osType = "DESKTOP_LINUX";
                                            requireVerifiedChromeOs = false;
                                        }}),
                                        add(new OsConstraint() {{
                                            minimumVersion = "hic";
                                            osType = "ANDROID";
                                            requireVerifiedChromeOs = false;
                                        }}),
                                        add(new OsConstraint() {{
                                            minimumVersion = "totam";
                                            osType = "OS_UNSPECIFIED";
                                            requireVerifiedChromeOs = false;
                                        }}),
                                    }};
                                    requireAdminApproval = false;
                                    requireCorpOwned = false;
                                    requireScreenlock = false;
                                }};
                                ipSubnetworks = new String[]{{
                                    add("molestiae"),
                                    add("modi"),
                                }};
                                members = new String[]{{
                                    add("impedit"),
                                }};
                                negate = false;
                                regions = new String[]{{
                                    add("esse"),
                                    add("ipsum"),
                                    add("excepturi"),
                                }};
                                requiredAccessLevels = new String[]{{
                                    add("perferendis"),
                                }};
                            }}),
                        }};
                    }};
                    custom = new CustomLevel() {{
                        expr = new Expr() {{
                            description = "ad";
                            expression = "natus";
                            location = "sed";
                            title = "Miss";
                        }};
                    }};
                    description = "dolor";
                    name = "natus";
                    title = "Mrs.";
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### accessPolicies

* `accesscontextmanagerAccessPoliciesAccessLevelsCreate` - Create an Access Level. The longrunning operation from this RPC will have a successful status once the Access Level has propagated to long-lasting storage. Access Levels containing errors will result in an error response for the first error encountered.
* `accesscontextmanagerAccessPoliciesAccessLevelsList` - List all Access Levels for an access policy.
* `accesscontextmanagerAccessPoliciesCreate` - Create an `AccessPolicy`. Fails if this organization already has a `AccessPolicy`. The longrunning Operation will have a successful status once the `AccessPolicy` has propagated to long-lasting storage. Syntactic and basic semantic errors will be returned in `metadata` as a BadRequest proto.
* `accesscontextmanagerAccessPoliciesList` - List all AccessPolicies under a container.
* `accesscontextmanagerAccessPoliciesServicePerimetersCreate` - Create a Service Perimeter. The longrunning operation from this RPC will have a successful status once the Service Perimeter has propagated to long-lasting storage. Service Perimeters containing errors will result in an error response for the first error encountered.
* `accesscontextmanagerAccessPoliciesServicePerimetersDelete` - Delete a Service Perimeter by resource name. The longrunning operation from this RPC will have a successful status once the Service Perimeter has been removed from long-lasting storage.
* `accesscontextmanagerAccessPoliciesServicePerimetersList` - List all Service Perimeters for an access policy.
* `accesscontextmanagerAccessPoliciesServicePerimetersPatch` - Update a Service Perimeter. The longrunning operation from this RPC will have a successful status once the changes to the Service Perimeter have propagated to long-lasting storage. Service Perimeter containing errors will result in an error response for the first error encountered.

### operations

* `accesscontextmanagerOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
