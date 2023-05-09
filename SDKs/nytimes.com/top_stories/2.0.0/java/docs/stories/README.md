# stories

### Available Operations

* [getSectionFormat](#getsectionformat) - Top Stories

## getSectionFormat

The Top Stories API returns a list of articles and associated images currently on the specified section.  Support JSON and JSONP.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSectionFormatFormatEnum;
import org.openapis.openapi.models.operations.GetSectionFormatRequest;
import org.openapis.openapi.models.operations.GetSectionFormatResponse;
import org.openapis.openapi.models.operations.GetSectionFormatSectionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSectionFormatRequest req = new GetSectionFormatRequest(GetSectionFormatFormatEnum.JSONP, GetSectionFormatSectionEnum.MOVIES) {{
                callback = "illum";
            }};            

            GetSectionFormatResponse res = sdk.stories.getSectionFormat(req);

            if (res.getSectionFormat200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
