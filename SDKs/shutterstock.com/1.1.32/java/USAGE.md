<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AddTrackCollectionItemsSecurity;
import org.openapis.openapi.models.operations.AddTrackCollectionItemsRequest;
import org.openapis.openapi.models.operations.AddTrackCollectionItemsResponse;
import org.openapis.openapi.models.shared.CollectionItemRequest;
import org.openapis.openapi.models.shared.CollectionItem;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddTrackCollectionItemsRequest req = new AddTrackCollectionItemsRequest() {{
                collectionItemRequest = new CollectionItemRequest() {{
                    items = new org.openapis.openapi.models.shared.CollectionItem[]{{
                        add(new CollectionItem() {{
                            addedTime = "2021-07-27T21:52:56.087Z";
                            id = "quibusdam";
                            mediaType = "unde";
                        }}),
                        add(new CollectionItem() {{
                            addedTime = "2021-05-14T08:28:11.899Z";
                            id = "illum";
                            mediaType = "vel";
                        }}),
                        add(new CollectionItem() {{
                            addedTime = "2021-09-16T11:56:06.019Z";
                            id = "suscipit";
                            mediaType = "iure";
                        }}),
                    }};
                }};
                id = "magnam";
            }}            

            AddTrackCollectionItemsResponse res = sdk.audio.addTrackCollectionItems(req, new AddTrackCollectionItemsSecurity() {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->