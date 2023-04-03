<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetBusinessUnitsV3BusinessUnitsUserUserIdSecurity;
import org.openapis.openapi.models.operations.GetBusinessUnitsV3BusinessUnitsUserUserIdRequest;
import org.openapis.openapi.models.operations.GetBusinessUnitsV3BusinessUnitsUserUserIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBusinessUnitsV3BusinessUnitsUserUserIdRequest req = new GetBusinessUnitsV3BusinessUnitsUserUserIdRequest() {{
                name = new String[]{{
                    add("provident"),
                    add("distinctio"),
                    add("quibusdam"),
                }};
                properties = new String[]{{
                    add("nulla"),
                    add("corrupti"),
                    add("illum"),
                }};
                userId = "vel";
            }}            

            GetBusinessUnitsV3BusinessUnitsUserUserIdResponse res = sdk.businessUnit.getBusinessUnitsV3BusinessUnitsUserUserId(req, new GetBusinessUnitsV3BusinessUnitsUserUserIdSecurity() {{
                oauth2Legacy = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.collectionResponsePublicBusinessUnitNoPaging.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->