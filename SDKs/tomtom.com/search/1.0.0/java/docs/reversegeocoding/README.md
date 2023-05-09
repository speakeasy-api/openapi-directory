# reverseGeocoding

### Available Operations

* [getSearchVersionNumberReverseGeocodeCrossStreetPositionExt](#getsearchversionnumberreversegeocodecrossstreetpositionext) - Cross Street lookup
* [getSearchVersionNumberReverseGeocodePositionExt](#getsearchversionnumberreversegeocodepositionext) - Reverse Geocode

## getSearchVersionNumberReverseGeocodeCrossStreetPositionExt

Cross Street lookup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest;
import org.openapis.openapi.models.operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtResponse;
import org.openapis.openapi.models.shared.ExtEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VersionNumberEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest req = new GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest(ExtEnum.JS, "dolorem", VersionNumberEnum.TWO) {{
                heading = 6350.59;
                language = "consequuntur";
                limit = 995300L;
                radius = 653108L;
                spatialKeys = false;
            }};            

            GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtResponse res = sdk.reverseGeocoding.getSearchVersionNumberReverseGeocodeCrossStreetPositionExt(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSearchVersionNumberReverseGeocodePositionExt

Reverse Geocode

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSearchVersionNumberReverseGeocodePositionExtRequest;
import org.openapis.openapi.models.operations.GetSearchVersionNumberReverseGeocodePositionExtResponse;
import org.openapis.openapi.models.shared.ExtEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VersionNumberEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSearchVersionNumberReverseGeocodePositionExtRequest req = new GetSearchVersionNumberReverseGeocodePositionExtRequest(ExtEnum.JSONP, "commodi", VersionNumberEnum.TWO) {{
                callback = "quam";
                heading = 4746.97;
                number = "velit";
                radius = 623510L;
                returnRoadUse = false;
                returnSpeedLimit = false;
                roadUse = "quia";
                spatialKeys = false;
            }};            

            GetSearchVersionNumberReverseGeocodePositionExtResponse res = sdk.reverseGeocoding.getSearchVersionNumberReverseGeocodePositionExt(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
