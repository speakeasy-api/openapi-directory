# courseMetadata

### Available Operations

* [putCoursesContentIdMetadataCategory](#putcoursescontentidmetadatacategory) - Update course category
* [putCoursesContentIdMetadataLevel](#putcoursescontentidmetadatalevel) - Update course level
* [putCoursesContentIdMetadataTags](#putcoursescontentidmetadatatags) - Update course tags
* [putCoursesContentIdMetadataTopic](#putcoursescontentidmetadatatopic) - Update course topic

## putCoursesContentIdMetadataCategory

Add or update course category in the metadata of a course.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutCoursesContentIdMetadataCategoryRequest;
import org.openapis.openapi.models.operations.PutCoursesContentIdMetadataCategoryRequestBody;
import org.openapis.openapi.models.operations.PutCoursesContentIdMetadataCategoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutCoursesContentIdMetadataCategoryRequest req = new PutCoursesContentIdMetadataCategoryRequest(                new PutCoursesContentIdMetadataCategoryRequestBody() {{
                                category = "dicta";
                            }};, "harum");            

            PutCoursesContentIdMetadataCategoryResponse res = sdk.courseMetadata.putCoursesContentIdMetadataCategory(req);

            if (res.courseMetaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putCoursesContentIdMetadataLevel

Add or update the course level in the metadata of a course.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutCoursesContentIdMetadataLevelRequest;
import org.openapis.openapi.models.operations.PutCoursesContentIdMetadataLevelRequestBody;
import org.openapis.openapi.models.operations.PutCoursesContentIdMetadataLevelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutCoursesContentIdMetadataLevelRequest req = new PutCoursesContentIdMetadataLevelRequest(                new PutCoursesContentIdMetadataLevelRequestBody() {{
                                level = "accusamus";
                            }};, "commodi");            

            PutCoursesContentIdMetadataLevelResponse res = sdk.courseMetadata.putCoursesContentIdMetadataLevel(req);

            if (res.courseMetaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putCoursesContentIdMetadataTags

Add or update course tags in the metadata of a course.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutCoursesContentIdMetadataTagsRequest;
import org.openapis.openapi.models.operations.PutCoursesContentIdMetadataTagsRequestBody;
import org.openapis.openapi.models.operations.PutCoursesContentIdMetadataTagsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutCoursesContentIdMetadataTagsRequest req = new PutCoursesContentIdMetadataTagsRequest(                new PutCoursesContentIdMetadataTagsRequestBody() {{
                                tags = new String[]{{
                                    add("ipsum"),
                                }};
                            }};, "quidem");            

            PutCoursesContentIdMetadataTagsResponse res = sdk.courseMetadata.putCoursesContentIdMetadataTags(req);

            if (res.courseMetaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putCoursesContentIdMetadataTopic

Add or update the course topic in the metadata of a course.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutCoursesContentIdMetadataTopicRequest;
import org.openapis.openapi.models.operations.PutCoursesContentIdMetadataTopicRequestBody;
import org.openapis.openapi.models.operations.PutCoursesContentIdMetadataTopicResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutCoursesContentIdMetadataTopicRequest req = new PutCoursesContentIdMetadataTopicRequest(                new PutCoursesContentIdMetadataTopicRequestBody() {{
                                topic = "excepturi";
                            }};, "pariatur");            

            PutCoursesContentIdMetadataTopicResponse res = sdk.courseMetadata.putCoursesContentIdMetadataTopic(req);

            if (res.courseMetaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
