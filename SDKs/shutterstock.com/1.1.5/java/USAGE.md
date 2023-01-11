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
                    id = "aperiam";
                }};
                request = new CollectionItemRequest() {{
                    items = new openapisdk.models.shared.CollectionItem[]() {{
                        add(new CollectionItem() {{
                            addedTime = "1986-05-01T11:09:06Z";
                            id = "mollitia";
                            mediaType = "inventore";
                        }}),
                        add(new CollectionItem() {{
                            addedTime = "2003-06-01T10:32:51Z";
                            id = "ipsa";
                            mediaType = "animi";
                        }}),
                        add(new CollectionItem() {{
                            addedTime = "2003-10-08T07:22:52Z";
                            id = "aliquam";
                            mediaType = "fuga";
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