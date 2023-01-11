# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accessPolicies

* `accesscontextmanagerAccessPoliciesAccessLevelsCreate` - Creates an access level. The long-running operation from this RPC has a successful status after the access level propagates to long-lasting storage. If access levels contain errors, an error response is returned for the first error encountered.
* `accesscontextmanagerAccessPoliciesAccessLevelsList` - Lists all access levels for an access policy.
* `accesscontextmanagerAccessPoliciesAccessLevelsReplaceAll` - Replaces all existing access levels in an access policy with the access levels provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. If the replacement contains errors, an error response is returned for the first error encountered. Upon error, the replacement is cancelled, and existing access levels are not affected. The Operation.response field contains ReplaceAccessLevelsResponse. Removing access levels contained in existing service perimeters result in an error.
* `accesscontextmanagerAccessPoliciesCreate` - Creates an access policy. This method fails if the organization already has an access policy. The long-running operation has a successful status after the access policy propagates to long-lasting storage. Syntactic and basic semantic errors are returned in `metadata` as a BadRequest proto.
* `accesscontextmanagerAccessPoliciesGetIamPolicy` - Gets the IAM policy for the specified Access Context Manager access policy.
* `accesscontextmanagerAccessPoliciesList` - Lists all access policies in an organization.
* `accesscontextmanagerAccessPoliciesServicePerimetersCommit` - Commits the dry-run specification for all the service perimeters in an access policy. A commit operation on a service perimeter involves copying its `spec` field to the `status` field of the service perimeter. Only service perimeters with `use_explicit_dry_run_spec` field set to true are affected by a commit operation. The long-running operation from this RPC has a successful status after the dry-run specifications for all the service perimeters have been committed. If a commit fails, it causes the long-running operation to return an error response and the entire commit operation is cancelled. When successful, the Operation.response field contains CommitServicePerimetersResponse. The `dry_run` and the `spec` fields are cleared after a successful commit operation.
* `accesscontextmanagerAccessPoliciesServicePerimetersCreate` - Creates a service perimeter. The long-running operation from this RPC has a successful status after the service perimeter propagates to long-lasting storage. If a service perimeter contains errors, an error response is returned for the first error encountered.
* `accesscontextmanagerAccessPoliciesServicePerimetersList` - Lists all service perimeters for an access policy.
* `accesscontextmanagerAccessPoliciesServicePerimetersReplaceAll` - Replace all existing service perimeters in an access policy with the service perimeters provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. Replacements containing errors result in an error response for the first error encountered. Upon an error, replacement are cancelled and existing service perimeters are not affected. The Operation.response field contains ReplaceServicePerimetersResponse.
* `accesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissions` - Returns the IAM permissions that the caller has on the specified Access Context Manager resource. The resource can be an AccessPolicy, AccessLevel, or ServicePerimeter. This method does not support other resources.
* `accesscontextmanagerAccessPoliciesSetIamPolicy` - Sets the IAM policy for the specified Access Context Manager access policy. This method replaces the existing IAM policy on the access policy. The IAM policy controls the set of users who can perform specific operations on the Access Context Manager access policy.

### operations

* `accesscontextmanagerOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### organizations

* `accesscontextmanagerOrganizationsGcpUserAccessBindingsCreate` - Creates a GcpUserAccessBinding. If the client specifies a name, the server ignores it. Fails if a resource already exists with the same group_key. Completion of this long-running operation does not necessarily signify that the new binding is deployed onto all affected users, which may take more time.
* `accesscontextmanagerOrganizationsGcpUserAccessBindingsDelete` - Deletes a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the binding deletion is deployed onto all affected users, which may take more time.
* `accesscontextmanagerOrganizationsGcpUserAccessBindingsGet` - Gets the GcpUserAccessBinding with the given name.
* `accesscontextmanagerOrganizationsGcpUserAccessBindingsList` - Lists all GcpUserAccessBindings for a Google Cloud organization.
* `accesscontextmanagerOrganizationsGcpUserAccessBindingsPatch` - Updates a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the changed binding is deployed onto all affected users, which may take more time.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
