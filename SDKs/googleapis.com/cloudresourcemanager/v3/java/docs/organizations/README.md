# organizations

### Available Operations

* [cloudresourcemanagerOrganizationsSearch](#cloudresourcemanagerorganizationssearch) - Searches organization resources that are visible to the user and satisfy the specified filter. This method returns organizations in an unspecified order. New organizations do not necessarily appear at the end of the results, and may take a small amount of time to appear. Search will only return organizations on which the user has the permission `resourcemanager.organizations.get`

## cloudresourcemanagerOrganizationsSearch

Searches organization resources that are visible to the user and satisfy the specified filter. This method returns organizations in an unspecified order. New organizations do not necessarily appear at the end of the results, and may take a small amount of time to appear. Search will only return organizations on which the user has the permission `resourcemanager.organizations.get`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsSearchRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsSearchResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsSearchSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsSearchSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerOrganizationsSearchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerOrganizationsSearchRequest req = new CloudresourcemanagerOrganizationsSearchRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "commodi";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "velit";
                key = "error";
                oauthToken = "quia";
                pageSize = 338007L;
                pageToken = "vitae";
                prettyPrint = false;
                query = "laborum";
                quotaUser = "animi";
                uploadType = "enim";
                uploadProtocol = "odit";
            }};            

            CloudresourcemanagerOrganizationsSearchResponse res = sdk.organizations.cloudresourcemanagerOrganizationsSearch(req, new CloudresourcemanagerOrganizationsSearchSecurity() {{
                option1 = new CloudresourcemanagerOrganizationsSearchSecurityOption1("quo", "sequi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.searchOrganizationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
