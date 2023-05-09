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
import org.openapis.openapi.models.operations.OrgpolicyOrganizationsCustomConstraintsCreateRequest;
import org.openapis.openapi.models.operations.OrgpolicyOrganizationsCustomConstraintsCreateResponse;
import org.openapis.openapi.models.operations.OrgpolicyOrganizationsCustomConstraintsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudOrgpolicyV2CustomConstraintInput;
import org.openapis.openapi.models.shared.GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgpolicyOrganizationsCustomConstraintsCreateRequest req = new OrgpolicyOrganizationsCustomConstraintsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudOrgpolicyV2CustomConstraintInput = new GoogleCloudOrgpolicyV2CustomConstraintInput() {{
                    actionType = GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum.DENY;
                    condition = "quibusdam";
                    description = "unde";
                    displayName = "nulla";
                    methodTypes = new org.openapis.openapi.models.shared.GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum[]{{
                        add(GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum.DELETE),
                        add(GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum.CREATE),
                        add(GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum.UPDATE),
                    }};
                    name = "Rick Kertzmann";
                    resourceTypes = new String[]{{
                        add("delectus"),
                    }};
                }};;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "minus";
                key = "placeat";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "excepturi";
                uploadProtocol = "nisi";
            }};            

            OrgpolicyOrganizationsCustomConstraintsCreateResponse res = sdk.organizations.orgpolicyOrganizationsCustomConstraintsCreate(req, new OrgpolicyOrganizationsCustomConstraintsCreateSecurity("recusandae", "temporibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudOrgpolicyV2CustomConstraint != null) {
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


### [organizations](docs/organizations/README.md)

* [orgpolicyOrganizationsCustomConstraintsCreate](docs/organizations/README.md#orgpolicyorganizationscustomconstraintscreate) - Creates a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the organization does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the constraint already exists on the given organization.
* [orgpolicyOrganizationsCustomConstraintsList](docs/organizations/README.md#orgpolicyorganizationscustomconstraintslist) - Retrieves all of the custom constraints that exist on a particular organization resource.

### [projects](docs/projects/README.md)

* [orgpolicyProjectsConstraintsList](docs/projects/README.md#orgpolicyprojectsconstraintslist) - Lists constraints that could be applied on the specified resource.
* [orgpolicyProjectsPoliciesCreate](docs/projects/README.md#orgpolicyprojectspoliciescreate) - Creates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Google Cloud resource.
* [orgpolicyProjectsPoliciesDelete](docs/projects/README.md#orgpolicyprojectspoliciesdelete) - Deletes a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or organization policy does not exist.
* [orgpolicyProjectsPoliciesGet](docs/projects/README.md#orgpolicyprojectspoliciesget) - Gets a policy on a resource. If no policy is set on the resource, `NOT_FOUND` is returned. The `etag` value can be used with `UpdatePolicy()` to update a policy during read-modify-write.
* [orgpolicyProjectsPoliciesGetEffectivePolicy](docs/projects/README.md#orgpolicyprojectspoliciesgeteffectivepolicy) - Gets the effective policy on a resource. This is the result of merging policies in the resource hierarchy and evaluating conditions. The returned policy will not have an `etag` or `condition` set because it is an evaluated policy across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.
* [orgpolicyProjectsPoliciesList](docs/projects/README.md#orgpolicyprojectspolicieslist) - Retrieves all of the policies that exist on a particular resource.
* [orgpolicyProjectsPoliciesPatch](docs/projects/README.md#orgpolicyprojectspoliciespatch) - Updates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
