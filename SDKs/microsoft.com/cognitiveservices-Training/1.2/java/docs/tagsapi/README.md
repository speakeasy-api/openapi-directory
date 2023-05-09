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

            CreateTagRequest req = new CreateTagRequest("ad", "a", "da840774-a68a-49a3-9d08-6b6f66fef020") {{
                description = "voluptates";
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

            DeleteTagRequest req = new DeleteTagRequest("provident", "f443b425-7b99-42c8-9bda-6a61efa21982", "58fd0a9e-ba47-4f7d-bef0-49640d6a1831");            

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

            GetTagRequest req = new GetTagRequest("quisquam", "87adf596-fdf1-4ad8-b7ae-80c1c19c95ba", "998678fa-3f69-4699-9af3-88ce03614448") {{
                iterationId = "c7977a0e-f2f5-4360-a8ef-eef934152ed7";
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

            GetTagsRequest req = new GetTagsRequest("itaque", "253f4c15-7dea-4a71-b0f4-45accf667aaf") {{
                iterationId = "9bbad185-fe43-41d6-bf5c-838fbb8c20cb";
            }};            

            GetTagsResponse res = sdk.tagsApi.getTags(req);

            if (res.tagList != null) {
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
                                description = "ex";
                                name = "Lucia Schinner";
                            }};, "eius", "25e99e62-34c9-4f7b-b9df-eb77a5c38d4b", "af91e506-ef89-40a5-8b47-5f16f56d385a");            

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
                                description = "sequi";
                                name = "Bradley Osinski";
                            }};, "adipisci", "1b99e26c-ed8f-49fd-b941-0f63bbf81783", "7b01afdd-7886-4241-89eb-44873f5033f1");            

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

            UpdateTagRawRequest req = new UpdateTagRawRequest("sint".getBytes(), "possimus", "bf125ce4-152e-4ab9-8d7e-5224a6a0e123", "b7847ec5-9e1f-467f-bc4c-ce4b6d7696ff");            

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
