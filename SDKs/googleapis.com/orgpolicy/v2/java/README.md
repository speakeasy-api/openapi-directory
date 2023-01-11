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

            OrgpolicyOrganizationsCustomConstraintsCreateRequest req = new OrgpolicyOrganizationsCustomConstraintsCreateRequest() {{
                security = new OrgpolicyOrganizationsCustomConstraintsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new OrgpolicyOrganizationsCustomConstraintsCreatePathParams() {{
                    parent = "laudantium";
                }};
                queryParams = new OrgpolicyOrganizationsCustomConstraintsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "delectus";
                    alt = "proto";
                    callback = "alias";
                    fields = "rerum";
                    key = "omnis";
                    oauthToken = "non";
                    prettyPrint = false;
                    quotaUser = "dicta";
                    uploadType = "reiciendis";
                    uploadProtocol = "maiores";
                }};
                request = new GoogleCloudOrgpolicyV2CustomConstraintInput() {{
                    actionType = "DENY";
                    condition = "dolorum";
                    description = "quia";
                    displayName = "fugiat";
                    methodTypes = new openapisdk.models.shared.GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum[]() {{
                        add("CREATE"),
                        add("CREATE"),
                        add("METHOD_TYPE_UNSPECIFIED"),
                    }};
                    name = "omnis";
                    resourceTypes = new String[]() {{
                        add("alias"),
                    }};
                }};
            }};

            OrgpolicyOrganizationsCustomConstraintsCreateResponse res = sdk.organizations.orgpolicyOrganizationsCustomConstraintsCreate(req);

            if (res.googleCloudOrgpolicyV2CustomConstraint.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### organizations

* `orgpolicyOrganizationsCustomConstraintsCreate` - Creates a CustomConstraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the organization does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the constraint already exists on the given organization.
* `orgpolicyOrganizationsCustomConstraintsList` - Retrieves all of the `CustomConstraints` that exist on a particular organization resource.

### projects

* `orgpolicyProjectsConstraintsList` - Lists `Constraints` that could be applied on the specified resource.
* `orgpolicyProjectsPoliciesCreate` - Creates a Policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Cloud resource.
* `orgpolicyProjectsPoliciesDelete` - Deletes a Policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or Org Policy does not exist.
* `orgpolicyProjectsPoliciesGet` - Gets a `Policy` on a resource. If no `Policy` is set on the resource, NOT_FOUND is returned. The `etag` value can be used with `UpdatePolicy()` to update a `Policy` during read-modify-write.
* `orgpolicyProjectsPoliciesGetEffectivePolicy` - Gets the effective `Policy` on a resource. This is the result of merging `Policies` in the resource hierarchy and evaluating conditions. The returned `Policy` will not have an `etag` or `condition` set because it is a computed `Policy` across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.
* `orgpolicyProjectsPoliciesList` - Retrieves all of the `Policies` that exist on a particular resource.
* `orgpolicyProjectsPoliciesPatch` - Updates a Policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
