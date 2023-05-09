# propertyController

### Available Operations

* [propertyControllerGetPropertiesPhotos](#propertycontrollergetpropertiesphotos) - A collection showing all the photos linked to a specific block, property or room

## propertyControllerGetPropertiesPhotos

A collection showing all the photos linked to a specific block, property or room

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PropertyControllerGetPropertiesPhotosRequest;
import org.openapis.openapi.models.operations.PropertyControllerGetPropertiesPhotosResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PropertyControllerGetPropertiesPhotosRequest req = new PropertyControllerGetPropertiesPhotosRequest(639921, 582020, "fugit", "deleniti", "hic");            

            PropertyControllerGetPropertiesPhotosResponse res = sdk.propertyController.propertyControllerGetPropertiesPhotos(req);

            if (res.landlordPhotoModelResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
