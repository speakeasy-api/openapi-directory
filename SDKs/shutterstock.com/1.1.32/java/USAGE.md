<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddTrackCollectionItemsRequest;
import org.openapis.openapi.models.operations.AddTrackCollectionItemsResponse;
import org.openapis.openapi.models.operations.AddTrackCollectionItemsSecurity;
import org.openapis.openapi.models.shared.CollectionItem;
import org.openapis.openapi.models.shared.CollectionItemRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddTrackCollectionItemsRequest req = new AddTrackCollectionItemsRequest(                new CollectionItemRequest(                new org.openapis.openapi.models.shared.CollectionItem[]{{
                                                add(new CollectionItem("sapiente") {{
                                                    addedTime = OffsetDateTime.parse("2021-07-27T21:52:56.087Z");
                                                    id = "d9d8d69a-674e-40f4-a7cc-8796ed151a05";
                                                    mediaType = "repellendus";
                                                }}),
                                                add(new CollectionItem("natus") {{
                                                    addedTime = OffsetDateTime.parse("2022-07-31T07:34:52.790Z");
                                                    id = "ddf7cc78-ca1b-4a92-8fc8-16742cb73920";
                                                    mediaType = "ad";
                                                }}),
                                                add(new CollectionItem("sapiente") {{
                                                    addedTime = OffsetDateTime.parse("2022-05-22T14:02:28.908Z");
                                                    id = "396fea75-96eb-410f-aaa2-352c5955907a";
                                                    mediaType = "doloribus";
                                                }}),
                                            }});, "architecto");            

            AddTrackCollectionItemsResponse res = sdk.audio.addTrackCollectionItems(req, new AddTrackCollectionItemsSecurity("mollitia") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->