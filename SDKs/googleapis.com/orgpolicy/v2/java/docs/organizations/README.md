# organizations

### Available Operations

* [orgpolicyOrganizationsCustomConstraintsCreate](#orgpolicyorganizationscustomconstraintscreate) - Creates a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the organization does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the constraint already exists on the given organization.
* [orgpolicyOrganizationsCustomConstraintsList](#orgpolicyorganizationscustomconstraintslist) - Retrieves all of the custom constraints that exist on a particular organization resource.

## orgpolicyOrganizationsCustomConstraintsCreate

Creates a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the organization does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the constraint already exists on the given organization.

### Example Usage

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

            OrgpolicyOrganizationsCustomConstraintsCreateRequest req = new OrgpolicyOrganizationsCustomConstraintsCreateRequest("ab") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudOrgpolicyV2CustomConstraintInput = new GoogleCloudOrgpolicyV2CustomConstraintInput() {{
                    actionType = GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum.ACTION_TYPE_UNSPECIFIED;
                    condition = "deserunt";
                    description = "perferendis";
                    displayName = "ipsam";
                    methodTypes = new org.openapis.openapi.models.shared.GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum[]{{
                        add(GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum.DELETE),
                        add(GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum.DELETE),
                        add(GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum.METHOD_TYPE_UNSPECIFIED),
                        add(GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum.DELETE),
                    }};
                    name = "Emilio Krajcik";
                    resourceTypes = new String[]{{
                        add("totam"),
                        add("porro"),
                    }};
                }};;
                accessToken = "dolorum";
                alt = AltEnum.JSON;
                callback = "nam";
                fields = "officia";
                key = "occaecati";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "hic";
                uploadProtocol = "optio";
            }};            

            OrgpolicyOrganizationsCustomConstraintsCreateResponse res = sdk.organizations.orgpolicyOrganizationsCustomConstraintsCreate(req, new OrgpolicyOrganizationsCustomConstraintsCreateSecurity("totam", "beatae") {{
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

## orgpolicyOrganizationsCustomConstraintsList

Retrieves all of the custom constraints that exist on a particular organization resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgpolicyOrganizationsCustomConstraintsListRequest;
import org.openapis.openapi.models.operations.OrgpolicyOrganizationsCustomConstraintsListResponse;
import org.openapis.openapi.models.operations.OrgpolicyOrganizationsCustomConstraintsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgpolicyOrganizationsCustomConstraintsListRequest req = new OrgpolicyOrganizationsCustomConstraintsListRequest("commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "impedit";
                fields = "cum";
                key = "esse";
                oauthToken = "ipsum";
                pageSize = 568434L;
                pageToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "ad";
                uploadProtocol = "natus";
            }};            

            OrgpolicyOrganizationsCustomConstraintsListResponse res = sdk.organizations.orgpolicyOrganizationsCustomConstraintsList(req, new OrgpolicyOrganizationsCustomConstraintsListSecurity("sed", "iste") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudOrgpolicyV2ListCustomConstraintsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
