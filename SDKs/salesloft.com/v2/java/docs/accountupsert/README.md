# accountUpsert

## Overview

Account Upsert

### Available Operations

* [postV2AccountUpsertsJson](#postv2accountupsertsjson) - Upsert an account

## postV2AccountUpsertsJson

Upserts an account record. The upsert_key dictates how the upsert will be performed. The create and update behavior
is exactly the same as the individual create and update endpoints.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV2AccountUpsertsJsonRequestBody;
import org.openapis.openapi.models.operations.PostV2AccountUpsertsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV2AccountUpsertsJsonRequestBody req = new PostV2AccountUpsertsJsonRequestBody("quo", "odit") {{
                accountTierId = 870013L;
                city = "White Plains";
                companyStageId = 473608L;
                companyType = "quod";
                conversationalName = "quod";
                country = "Kiribati";
                crmId = "totam";
                crmIdType = "porro";
                customFields = new java.util.HashMap<String, Object>[]{{
                    add(new java.util.HashMap<String, Object>() {{
                        put("nam", "officia");
                    }}),
                    add(new java.util.HashMap<String, Object>() {{
                        put("fugit", "deleniti");
                        put("hic", "optio");
                        put("totam", "beatae");
                    }}),
                    add(new java.util.HashMap<String, Object>() {{
                        put("molestiae", "modi");
                        put("qui", "impedit");
                    }}),
                }};
                description = "cum";
                doNotContact = false;
                founded = "esse";
                id = 216550L;
                industry = "excepturi";
                linkedinUrl = "aspernatur";
                locale = "perferendis";
                ownerId = 324141L;
                phone = "(362) 639-9643 x6496";
                postalCode = "09666";
                revenueRange = "dolores";
                size = "dolorem";
                state = "corporis";
                street = "73633 Batz Knoll";
                tags = new String[]{{
                    add("doloribus"),
                    add("sapiente"),
                    add("architecto"),
                }};
                twitterHandle = "mollitia";
                upsertKey = "dolorem";
                website = "culpa";
            }};            

            PostV2AccountUpsertsJsonResponse res = sdk.accountUpsert.postV2AccountUpsertsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
