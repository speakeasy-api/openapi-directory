<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.KgsearchEntitiesSearchQueryParams;
import org.openapis.openapi.models.operations.KgsearchEntitiesSearchRequest;
import org.openapis.openapi.models.operations.KgsearchEntitiesSearchResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KgsearchEntitiesSearchRequest req = new KgsearchEntitiesSearchRequest() {{
                queryParams = new KgsearchEntitiesSearchQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    ids = new String[]{{
                        add("corrupti"),
                        add("illum"),
                        add("vel"),
                        add("error"),
                    }};
                    indent = false;
                    key = "deserunt";
                    languages = new String[]{{
                        add("iure"),
                        add("magnam"),
                    }};
                    limit = 891773;
                    oauthToken = "ipsa";
                    prefix = false;
                    prettyPrint = false;
                    query = "delectus";
                    quotaUser = "tempora";
                    types = new String[]{{
                        add("molestiae"),
                        add("minus"),
                    }};
                    uploadType = "placeat";
                    uploadProtocol = "voluptatum";
                }};
            }};            

            KgsearchEntitiesSearchResponse res = sdk.entities.kgsearchEntitiesSearch(req);

            if (res.searchResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->