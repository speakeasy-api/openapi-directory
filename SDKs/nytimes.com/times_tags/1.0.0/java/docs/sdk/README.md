# SDK

## Overview

With the TimesTags API, you can mine the riches of the New York Times tag set. The TimesTags service matches your query to the controlled vocabularies that fuel NYTimes.com metadata. You supply a string of characters, and the service returns a ranked list of suggested terms.

<http://developer.nytimes.com/>
### Available Operations

* [getTimestags](#gettimestags)

## getTimestags

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTimestagsFilterEnum;
import org.openapis.openapi.models.operations.GetTimestagsRequest;
import org.openapis.openapi.models.operations.GetTimestagsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTimestagsRequest req = new GetTimestagsRequest("nulla") {{
                filter = GetTimestagsFilterEnum.ORG;
                max = 847252L;
            }};            

            GetTimestagsResponse res = sdk.sdk.getTimestags(req);

            if (res.getTimestags200ApplicationJSONArrays != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
