# tagsApi

### Available Operations

* [createTag](#createtag) - Create a tag for the project
* [deleteTag](#deletetag) - Delete a tag from the project
* [getTag](#gettag) - Get information about a specific tag
* [getTags](#gettags) - Get the tags for a given project and iteration
* [updateTagForm](#updatetagform) - Update a tag
* [updateTagJson](#updatetagjson) - Update a tag
* [updateTagRaw](#updatetagraw) - Update a tag

## createTag

Create a tag for the project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTagRequest;
import org.openapis.openapi.models.operations.CreateTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateTagRequest req = new CreateTagRequest("commodi", "dolores", "17c29776-7633-4425-8038-bfb5971e9819") {{
                description = "perferendis";
            }};            

            CreateTagResponse res = sdk.tagsApi.createTag(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTag

Delete a tag from the project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTagRequest;
import org.openapis.openapi.models.operations.DeleteTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteTagRequest req = new DeleteTagRequest("corporis", "57389ced-bac7-4fda-b959-4d66bc2ae480", "632b9954-b6fa-4220-a369-828553cb1000");            

            DeleteTagResponse res = sdk.tagsApi.deleteTag(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTag

Get information about a specific tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagRequest;
import org.openapis.openapi.models.operations.GetTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagRequest req = new GetTagRequest("autem", "bef4921e-c205-43b7-8936-6ac8ee0f2bf1", "9588d40d-03f3-4deb-a297-be3e90bc40df") {{
                iterationId = "868fd524-05cb-4331-9492-f4f127fb0e0b";
            }};            

            GetTagResponse res = sdk.tagsApi.getTag(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTags

Get the tags for a given project and iteration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsRequest;
import org.openapis.openapi.models.operations.GetTagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagsRequest req = new GetTagsRequest("hic", "1f821797-8d0a-4cca-b7ae-b7b7021a5204") {{
                iterationId = "6b64e99f-b0e6-47e0-94fd-fed5540ef53a";
            }};            

            GetTagsResponse res = sdk.tagsApi.getTags(req);

            if (res.tags != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTagForm

Update a tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTagFormRequest;
import org.openapis.openapi.models.operations.UpdateTagFormResponse;
import org.openapis.openapi.models.shared.TagInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateTagFormRequest req = new UpdateTagFormRequest(                new TagInput() {{
                                description = "velit";
                                name = "Genevieve Boyle";
                            }};, "sapiente", "e99731ad-c05d-485a-a2df-b70fb3874290", "d336561e-ca16-4ef8-9451-bd76eeeb518c");            

            UpdateTagFormResponse res = sdk.tagsApi.updateTagForm(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTagJson

Update a tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTagJsonRequest;
import org.openapis.openapi.models.operations.UpdateTagJsonResponse;
import org.openapis.openapi.models.shared.TagInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateTagJsonRequest req = new UpdateTagJsonRequest(                new TagInput() {{
                                description = "modi";
                                name = "Dana Bradtke";
                            }};, "repellendus", "35512f06-d4e5-4b72-b0f5-48568a0424e0", "0a1d6eb9-4346-445d-8308-4fbba5cceff5");            

            UpdateTagJsonResponse res = sdk.tagsApi.updateTagJson(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTagRaw

Update a tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTagRawRequest;
import org.openapis.openapi.models.operations.UpdateTagRawResponse;
import org.openapis.openapi.models.shared.TagInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateTagRawRequest req = new UpdateTagRawRequest("quod".getBytes(), "facilis", "01fe51e5-28a4-45ac-82b8-5f8bc2caba8d", "a4127dd5-97ff-4471-9aa1-bc74b86cecc7");            

            UpdateTagRawResponse res = sdk.tagsApi.updateTagRaw(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
