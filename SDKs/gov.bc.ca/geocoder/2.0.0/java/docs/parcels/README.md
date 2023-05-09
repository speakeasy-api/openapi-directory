# parcels

### Available Operations

* [getParcelsPidsSiteIDOutputFormat](#getparcelspidssiteidoutputformat) - Get a comma-separated string of all pids for a given site

## getParcelsPidsSiteIDOutputFormat

Represents all parcel identifiers associated with an individual site

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetParcelsPidsSiteIDOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetParcelsPidsSiteIDOutputFormatRequest;
import org.openapis.openapi.models.operations.GetParcelsPidsSiteIDOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetParcelsPidsSiteIDOutputFormatRequest req = new GetParcelsPidsSiteIDOutputFormatRequest(GetParcelsPidsSiteIDOutputFormatOutputFormatEnum.GML, "voluptate");            

            GetParcelsPidsSiteIDOutputFormatResponse res = sdk.parcels.getParcelsPidsSiteIDOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
