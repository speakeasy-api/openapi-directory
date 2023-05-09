# offeringMetadata

### Available Operations

* [putOfferingsOfferingIdMetadataCategory](#putofferingsofferingidmetadatacategory) - Update offering category metadata
* [putOfferingsOfferingIdMetadataLevel](#putofferingsofferingidmetadatalevel) - Update offering level metadata
* [putOfferingsOfferingIdMetadataTags](#putofferingsofferingidmetadatatags) - Update offering tags metadata
* [putOfferingsOfferingIdMetadataTopic](#putofferingsofferingidmetadatatopic) - Update offering topic metadata

## putOfferingsOfferingIdMetadataCategory

Updates the offering category metadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutOfferingsOfferingIdMetadataCategoryRequest;
import org.openapis.openapi.models.operations.PutOfferingsOfferingIdMetadataCategoryRequestBody;
import org.openapis.openapi.models.operations.PutOfferingsOfferingIdMetadataCategoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutOfferingsOfferingIdMetadataCategoryRequest req = new PutOfferingsOfferingIdMetadataCategoryRequest(                new PutOfferingsOfferingIdMetadataCategoryRequestBody() {{
                                category = "odit";
                            }};, "nemo");            

            PutOfferingsOfferingIdMetadataCategoryResponse res = sdk.offeringMetadata.putOfferingsOfferingIdMetadataCategory(req);

            if (res.offeringMetadataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putOfferingsOfferingIdMetadataLevel

Updates the offering level metadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutOfferingsOfferingIdMetadataLevelRequest;
import org.openapis.openapi.models.operations.PutOfferingsOfferingIdMetadataLevelRequestBody;
import org.openapis.openapi.models.operations.PutOfferingsOfferingIdMetadataLevelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutOfferingsOfferingIdMetadataLevelRequest req = new PutOfferingsOfferingIdMetadataLevelRequest(                new PutOfferingsOfferingIdMetadataLevelRequestBody() {{
                                level = "iure";
                            }};, "doloribus");            

            PutOfferingsOfferingIdMetadataLevelResponse res = sdk.offeringMetadata.putOfferingsOfferingIdMetadataLevel(req);

            if (res.offeringMetadataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putOfferingsOfferingIdMetadataTags

Updates the offering tags metadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutOfferingsOfferingIdMetadataTagsRequest;
import org.openapis.openapi.models.operations.PutOfferingsOfferingIdMetadataTagsRequestBody;
import org.openapis.openapi.models.operations.PutOfferingsOfferingIdMetadataTagsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutOfferingsOfferingIdMetadataTagsRequest req = new PutOfferingsOfferingIdMetadataTagsRequest(                new PutOfferingsOfferingIdMetadataTagsRequestBody() {{
                                tags = new String[]{{
                                    add("maxime"),
                                    add("deleniti"),
                                }};
                            }};, "facilis");            

            PutOfferingsOfferingIdMetadataTagsResponse res = sdk.offeringMetadata.putOfferingsOfferingIdMetadataTags(req);

            if (res.offeringMetadataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putOfferingsOfferingIdMetadataTopic

Updates the offering topic metadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutOfferingsOfferingIdMetadataTopicRequest;
import org.openapis.openapi.models.operations.PutOfferingsOfferingIdMetadataTopicRequestBody;
import org.openapis.openapi.models.operations.PutOfferingsOfferingIdMetadataTopicResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutOfferingsOfferingIdMetadataTopicRequest req = new PutOfferingsOfferingIdMetadataTopicRequest(                new PutOfferingsOfferingIdMetadataTopicRequestBody() {{
                                topic = "architecto";
                            }};, "architecto");            

            PutOfferingsOfferingIdMetadataTopicResponse res = sdk.offeringMetadata.putOfferingsOfferingIdMetadataTopic(req);

            if (res.offeringMetadataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
