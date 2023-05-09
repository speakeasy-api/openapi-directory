# feature

### Available Operations

* [getFeature](#getfeature) - Feature Detail
* [listFeatureTypes](#listfeaturetypes) - Feature Type Collection
* [listFeatures](#listfeatures) - Feature Collection

## getFeature

Return the content of the selected feature.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFeatureRequest;
import org.openapis.openapi.models.operations.GetFeatureResponse;
import org.openapis.openapi.models.operations.GetFeatureSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFeatureRequest req = new GetFeatureRequest("quo");            

            GetFeatureResponse res = sdk.feature.getFeature(req, new GetFeatureSecurity("odit") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.getFeature200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFeatureTypes

Return a collection of Feature Types.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFeatureTypesResponse;
import org.openapis.openapi.models.operations.ListFeatureTypesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListFeatureTypesResponse res = sdk.feature.listFeatureTypes(new ListFeatureTypesSecurity("at") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.listFeatureTypes200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFeatures

Return a collection of Feature.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFeaturesRequest;
import org.openapis.openapi.models.operations.ListFeaturesResponse;
import org.openapis.openapi.models.operations.ListFeaturesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListFeaturesRequest req = new ListFeaturesRequest() {{
                date = "at";
                end = "maiores";
                start = "molestiae";
                type = "quod";
            }};            

            ListFeaturesResponse res = sdk.feature.listFeatures(req, new ListFeaturesSecurity("quod") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.listFeatures200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
