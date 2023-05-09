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

            CreateTagRequest req = new CreateTagRequest("veniam", "perspiciatis", "6217c297-7676-4334-a540-38bfb5971e98") {{
                description = "inventore";
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

            DeleteTagRequest req = new DeleteTagRequest("perspiciatis", "0557389c-edba-4c7f-9a39-594d66bc2ae4", "80632b99-54b6-4fa2-a063-69828553cb10");            

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

            GetTagRequest req = new GetTagRequest("accusantium", "06bef492-1ec2-4053-b749-366ac8ee0f2b", "f19588d4-0d03-4f3d-aba2-97be3e90bc40") {{
                iterationId = "df868fd5-2405-4cb3-b1d4-92f4f127fb0e";
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

            GetTagsRequest req = new GetTagsRequest("voluptatem", "bf1f8217-978d-40ac-8a77-aeb7b7021a52") {{
                iterationId = "046b64e9-9fb0-4e67-a094-fdfed5540ef5";
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
                                description = "neque";
                                name = "Jacob Goyette MD";
                            }};, "blanditiis", "fe99731a-dc05-4d85-ae2d-fb70fb387429", "0d336561-eca1-46ef-8945-1bd76eeeb518");            

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
                                description = "impedit";
                                name = "Dr. Elena Murazik";
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
