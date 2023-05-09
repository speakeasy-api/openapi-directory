# feature

### Available Operations

* [getFeaturesFeatureId](#getfeaturesfeatureid) - Get a feature by its featureId

## getFeaturesFeatureId

Get information about the geographical feature with the specified featureId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFeaturesFeatureIdRequest;
import org.openapis.openapi.models.operations.GetFeaturesFeatureIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFeaturesFeatureIdRequest req = new GetFeaturesFeatureIdRequest(592845L);            

            GetFeaturesFeatureIdResponse res = sdk.feature.getFeaturesFeatureId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
