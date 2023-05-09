# organizations

### Available Operations

* [getWorkspaceSlugOrganizations](#getworkspaceslugorganizations) - List organizations in a workspace
* [getWorkspaceSlugOrganizationsOrganizationId](#getworkspaceslugorganizationsorganizationid) - Get an organization
* [putWorkspaceSlugOrganizationsOrganizationId](#putworkspaceslugorganizationsorganizationid) - Update an organization

## getWorkspaceSlugOrganizations

List organizations in a workspace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspaceSlugOrganizationsDirectionEnum;
import org.openapis.openapi.models.operations.GetWorkspaceSlugOrganizationsItemsEnum;
import org.openapis.openapi.models.operations.GetWorkspaceSlugOrganizationsRequest;
import org.openapis.openapi.models.operations.GetWorkspaceSlugOrganizationsResponse;
import org.openapis.openapi.models.operations.GetWorkspaceSlugOrganizationsSecurity;
import org.openapis.openapi.models.operations.GetWorkspaceSlugOrganizationsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspaceSlugOrganizationsRequest req = new GetWorkspaceSlugOrganizationsRequest("ea") {{
                direction = GetWorkspaceSlugOrganizationsDirectionEnum.DESC;
                items = GetWorkspaceSlugOrganizationsItemsEnum.TEN;
                page = "ea";
                query = "accusantium";
                sort = GetWorkspaceSlugOrganizationsSortEnum.NAME;
            }};            

            GetWorkspaceSlugOrganizationsResponse res = sdk.organizations.getWorkspaceSlugOrganizations(req, new GetWorkspaceSlugOrganizationsSecurity("maiores") {{
                bearer = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkspaceSlugOrganizationsOrganizationId

Get an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspaceSlugOrganizationsOrganizationIdRequest;
import org.openapis.openapi.models.operations.GetWorkspaceSlugOrganizationsOrganizationIdResponse;
import org.openapis.openapi.models.operations.GetWorkspaceSlugOrganizationsOrganizationIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspaceSlugOrganizationsOrganizationIdRequest req = new GetWorkspaceSlugOrganizationsOrganizationIdRequest("quidem", "ipsam");            

            GetWorkspaceSlugOrganizationsOrganizationIdResponse res = sdk.organizations.getWorkspaceSlugOrganizationsOrganizationId(req, new GetWorkspaceSlugOrganizationsOrganizationIdSecurity("voluptate") {{
                bearer = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putWorkspaceSlugOrganizationsOrganizationId

Update an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutWorkspaceSlugOrganizationsOrganizationIdRequest;
import org.openapis.openapi.models.operations.PutWorkspaceSlugOrganizationsOrganizationIdResponse;
import org.openapis.openapi.models.operations.PutWorkspaceSlugOrganizationsOrganizationIdSecurity;
import org.openapis.openapi.models.shared.Organization;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutWorkspaceSlugOrganizationsOrganizationIdRequest req = new PutWorkspaceSlugOrganizationsOrganizationIdRequest("autem", "nam") {{
                organization = new Organization("eaque", "pariatur", "nemo") {{
                    crmUid = "voluptatibus";
                    dealClosedDate = "perferendis";
                    ownerEmail = "fugiat";
                    ownerName = "amet";
                    pricePlan = "aut";
                }};;
            }};            

            PutWorkspaceSlugOrganizationsOrganizationIdResponse res = sdk.organizations.putWorkspaceSlugOrganizationsOrganizationId(req, new PutWorkspaceSlugOrganizationsOrganizationIdSecurity("cumque") {{
                bearer = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
