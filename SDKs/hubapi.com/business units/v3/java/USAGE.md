<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetBusinessUnitsV3BusinessUnitsUserUserIdSecurity;
import org.openapis.openapi.models.operations.GetBusinessUnitsV3BusinessUnitsUserUserIdPathParams;
import org.openapis.openapi.models.operations.GetBusinessUnitsV3BusinessUnitsUserUserIdQueryParams;
import org.openapis.openapi.models.operations.GetBusinessUnitsV3BusinessUnitsUserUserIdRequest;
import org.openapis.openapi.models.operations.GetBusinessUnitsV3BusinessUnitsUserUserIdResponse;
import org.openapis.openapi.models.shared.SchemeOauth2Legacy;
import org.openapis.openapi.models.shared.SchemePrivateAppsLegacy;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBusinessUnitsV3BusinessUnitsUserUserIdRequest req = new GetBusinessUnitsV3BusinessUnitsUserUserIdRequest() {{
                security = new GetBusinessUnitsV3BusinessUnitsUserUserIdSecurity() {{
                    oauth2Legacy = new SchemeOauth2Legacy() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new GetBusinessUnitsV3BusinessUnitsUserUserIdPathParams() {{
                    userId = "corrupti";
                }};
                queryParams = new GetBusinessUnitsV3BusinessUnitsUserUserIdQueryParams() {{
                    name = new String[]{{
                        add("distinctio"),
                        add("quibusdam"),
                        add("unde"),
                    }};
                    properties = new String[]{{
                        add("corrupti"),
                        add("illum"),
                        add("vel"),
                        add("error"),
                    }};
                }};
            }};            

            GetBusinessUnitsV3BusinessUnitsUserUserIdResponse res = sdk.businessUnit.getBusinessUnitsV3BusinessUnitsUserUserId(req);

            if (res.collectionResponsePublicBusinessUnitNoPaging.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->