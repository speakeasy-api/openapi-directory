# personUpsert

## Overview

Person Upsert

### Available Operations

* [postV2PersonUpsertsJson](#postv2personupsertsjson) - Upsert a person

## postV2PersonUpsertsJson

Upserts a person record. The upsert_key dictates how the upsert will be performed. The create and update behavior
is exactly the same as the individual create and update endpoints.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV2PersonUpsertsJsonRequestBody;
import org.openapis.openapi.models.operations.PostV2PersonUpsertsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV2PersonUpsertsJsonRequestBody req = new PostV2PersonUpsertsJsonRequestBody() {{
                accountId = 886961L;
                city = "North Las Vegas";
                contactRestrictions = new String[]{{
                    add("aspernatur"),
                    add("ex"),
                }};
                country = "Wallis and Futuna";
                crmId = "corrupti";
                crmIdType = "at";
                customFields = new java.util.HashMap<String, Object>() {{
                    put("blanditiis", "suscipit");
                    put("repudiandae", "atque");
                    put("atque", "sunt");
                }};
                doNotContact = false;
                emailAddress = "recusandae";
                firstName = "Marina";
                homePhone = "repellendus";
                id = 287119L;
                importId = 968287L;
                jobSeniority = "doloremque";
                lastName = "Waelchi";
                linkedinUrl = "dicta";
                locale = "accusantium";
                mobilePhone = "beatae";
                ownerId = 174772L;
                personCompanyIndustry = "enim";
                personCompanyName = "laboriosam";
                personCompanyWebsite = "velit";
                personStageId = 952143L;
                personalEmailAddress = "molestias";
                personalWebsite = "magnam";
                phone = "1-358-642-9511 x63460";
                phoneExtension = "corporis";
                secondaryEmailAddress = "quidem";
                state = "eveniet";
                tags = new String[]{{
                    add("vero"),
                }};
                title = "Mr.";
                twitterHandle = "iure";
                upsertKey = "ipsa";
                workCity = "totam";
                workCountry = "quae";
                workState = "molestiae";
            }};            

            PostV2PersonUpsertsJsonResponse res = sdk.personUpsert.postV2PersonUpsertsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
