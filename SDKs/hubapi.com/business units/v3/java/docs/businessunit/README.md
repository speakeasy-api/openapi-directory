# businessUnit

## Overview

Get Business Unit information.

### Available Operations

* [getBusinessUnitsV3BusinessUnitsUserUserId](#getbusinessunitsv3businessunitsuseruserid) - Get Business Units for a user

## getBusinessUnitsV3BusinessUnitsUserUserId

Get Business Units identified by `userId`. The `userId` refers to the user’s ID.

### Example Usage

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

            GetBusinessUnitsV3BusinessUnitsUserUserIdRequest req = new GetBusinessUnitsV3BusinessUnitsUserUserIdRequest("deserunt") {{
                name = new String[]{{
                    add("iure"),
                    add("magnam"),
                }};
                properties = new String[]{{
                    add("ipsa"),
                    add("delectus"),
                    add("tempora"),
                    add("suscipit"),
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
