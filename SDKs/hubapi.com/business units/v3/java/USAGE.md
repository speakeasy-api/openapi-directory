<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBusinessUnitsV3BusinessUnitsUserUserIdRequest;
import org.openapis.openapi.models.operations.GetBusinessUnitsV3BusinessUnitsUserUserIdResponse;
import org.openapis.openapi.models.operations.GetBusinessUnitsV3BusinessUnitsUserUserIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBusinessUnitsV3BusinessUnitsUserUserIdRequest req = new GetBusinessUnitsV3BusinessUnitsUserUserIdRequest("corrupti") {{
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

            GetBusinessUnitsV3BusinessUnitsUserUserIdResponse res = sdk.businessUnit.getBusinessUnitsV3BusinessUnitsUserUserId(req, new GetBusinessUnitsV3BusinessUnitsUserUserIdSecurity() {{
                oauth2Legacy = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.collectionResponsePublicBusinessUnitNoPaging != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->