# tagsApi

### Available Operations

* [createTag](#createtag) - Create a tag for the project.
* [deleteTag](#deletetag) - Delete a tag from the project.
* [getTag](#gettag) - Get information about a specific tag.
* [getTags](#gettags) - Get the tags for a given project and iteration.
* [updateTagForm](#updatetagform) - Update a tag.
* [updateTagJson](#updatetagjson) - Update a tag.
* [updateTagRaw](#updatetagraw) - Update a tag.

## createTag

Create a tag for the project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTagRequest;
import org.openapis.openapi.models.operations.CreateTagResponse;
import org.openapis.openapi.models.operations.CreateTagTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateTagRequest req = new CreateTagRequest("commodi", "dolores", "17c29776-7633-4425-8038-bfb5971e9819") {{
                description = "perferendis";
                type = CreateTagTypeEnum.REGULAR;
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

Delete a tag from the project.

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

            DeleteTagRequest req = new DeleteTagRequest("ullam", "7389cedb-ac7f-4da3-9594-d66bc2ae4806", "32b9954b-6fa2-4206-b698-28553cb10006");            

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

Get information about a specific tag.

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

            GetTagRequest req = new GetTagRequest("tempore", "ef4921ec-2053-4b74-9366-ac8ee0f2bf19", "588d40d0-3f3d-4eba-a97b-e3e90bc40df8") {{
                iterationId = "68fd5240-5cb3-431d-892f-4f127fb0e0bf";
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

Get the tags for a given project and iteration.

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

            GetTagsRequest req = new GetTagsRequest("beatae", "f8217978-d0ac-4ca7-baeb-7b7021a52046") {{
                iterationId = "b64e99fb-0e67-4e09-8fdf-ed5540ef53a3";
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

Update a tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTagFormRequest;
import org.openapis.openapi.models.operations.UpdateTagFormResponse;
import org.openapis.openapi.models.shared.TagInput;
import org.openapis.openapi.models.shared.TagTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateTagFormRequest req = new UpdateTagFormRequest(                new TagInput() {{
                                description = "ut";
                                name = "Ryan Prosacco";
                                type = TagTypeEnum.NEGATIVE;
                            }};, "perspiciatis", "9731adc0-5d85-4ae2-9fb7-0fb3874290d3", "36561eca-16ef-4894-91bd-76eeeb518c4d");            

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

Update a tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTagJsonRequest;
import org.openapis.openapi.models.operations.UpdateTagJsonResponse;
import org.openapis.openapi.models.shared.TagInput;
import org.openapis.openapi.models.shared.TagTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateTagJsonRequest req = new UpdateTagJsonRequest(                new TagInput() {{
                                description = "similique";
                                name = "Ollie Osinski";
                                type = TagTypeEnum.REGULAR;
                            }};, "quis", "12f06d4e-5b72-4f0f-9485-68a0424e00a1", "d6eb9434-645d-4030-84fb-ba5cceff5cb0");            

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

Update a tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTagRawRequest;
import org.openapis.openapi.models.operations.UpdateTagRawResponse;
import org.openapis.openapi.models.shared.TagInput;
import org.openapis.openapi.models.shared.TagTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateTagRawRequest req = new UpdateTagRawRequest("illo".getBytes(), "reiciendis", "e51e528a-45ac-482b-85f8-bc2caba8da41", "27dd597f-f471-41aa-9bc7-4b86cecc74f7");            

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
