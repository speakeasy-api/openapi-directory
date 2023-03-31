<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AddTrackCollectionItemsSecurity;
import org.openapis.openapi.models.operations.AddTrackCollectionItemsPathParams;
import org.openapis.openapi.models.operations.AddTrackCollectionItemsRequest;
import org.openapis.openapi.models.operations.AddTrackCollectionItemsResponse;
import org.openapis.openapi.models.shared.CollectionItemRequest;
import org.openapis.openapi.models.shared.CollectionItem;
import org.openapis.openapi.models.shared.SchemeCustomerAccessCode;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddTrackCollectionItemsRequest req = new AddTrackCollectionItemsRequest() {{
                security = new AddTrackCollectionItemsSecurity() {{
                    customerAccessCode = new SchemeCustomerAccessCode() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new AddTrackCollectionItemsPathParams() {{
                    id = "corrupti";
                }};
                request = new CollectionItemRequest() {{
                    items = new org.openapis.openapi.models.shared.CollectionItem[]{{
                        add(new CollectionItem() {{
                            addedTime = "2021-04-24T16:27:50.833Z";
                            id = "unde";
                            mediaType = "nulla";
                        }}),
                        add(new CollectionItem() {{
                            addedTime = "2021-04-22T12:08:58.275Z";
                            id = "vel";
                            mediaType = "error";
                        }}),
                        add(new CollectionItem() {{
                            addedTime = "2022-03-26T09:37:56.283Z";
                            id = "iure";
                            mediaType = "magnam";
                        }}),
                    }};
                }};
            }};            

            AddTrackCollectionItemsResponse res = sdk.audio.addTrackCollectionItems(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->