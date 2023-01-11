<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            AddTrackCollectionItemsRequest req = new AddTrackCollectionItemsRequest() {{
                security = new AddTrackCollectionItemsSecurity() {{
                    customerAccessCode = new SchemeCustomerAccessCode() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new AddTrackCollectionItemsPathParams() {{
                    id = "sit";
                }};
                request = new CollectionItemRequest() {{
                    items = new openapisdk.models.shared.CollectionItem[]() {{
                        add(new CollectionItem() {{
                            addedTime = "1978-05-13T03:50:47Z";
                            id = "expedita";
                            mediaType = "consequuntur";
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