# uris

### Available Operations

* [webriskUrisSearch](#webriskurissearch) - This method is used to check whether a URI is on a given threatList. Multiple threatLists may be searched in a single query. The response will list all requested threatLists the URI was found to match. If the URI is not found on any of the requested ThreatList an empty response will be returned.

## webriskUrisSearch

This method is used to check whether a URI is on a given threatList. Multiple threatLists may be searched in a single query. The response will list all requested threatLists the URI was found to match. If the URI is not found on any of the requested ThreatList an empty response will be returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebriskUrisSearchRequest;
import org.openapis.openapi.models.operations.WebriskUrisSearchResponse;
import org.openapis.openapi.models.operations.WebriskUrisSearchSecurity;
import org.openapis.openapi.models.operations.WebriskUrisSearchThreatTypesEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebriskUrisSearchRequest req = new WebriskUrisSearchRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laborum";
                alt = AltEnum.MEDIA;
                callback = "enim";
                fields = "odit";
                key = "quo";
                oauthToken = "sequi";
                prettyPrint = false;
                quotaUser = "tenetur";
                threatTypes = new org.openapis.openapi.models.operations.WebriskUrisSearchThreatTypesEnum[]{{
                    add(WebriskUrisSearchThreatTypesEnum.UNWANTED_SOFTWARE),
                    add(WebriskUrisSearchThreatTypesEnum.SOCIAL_ENGINEERING_EXTENDED_COVERAGE),
                }};
                uploadType = "aut";
                uploadProtocol = "quasi";
                uri = "https://tattered-poem.com";
            }};            

            WebriskUrisSearchResponse res = sdk.uris.webriskUrisSearch(req, new WebriskUrisSearchSecurity("reiciendis", "voluptatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudWebriskV1SearchUrisResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
