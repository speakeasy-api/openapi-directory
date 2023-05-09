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

            CreateTagRequest req = new CreateTagRequest("suscipit", "vitae", "b0d30871-4c20-4a3d-9863-7ca85c3fe655") {{
                description = "molestiae";
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

            DeleteTagRequest req = new DeleteTagRequest("possimus", "baf94a7c-98f1-43af-a8db-2cf2bf4f3ded", "356d7e14-b21c-4d98-996d-55af69a1c4b7");            

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

            GetTagRequest req = new GetTagRequest("natus", "ae33681c-23c3-49a7-80e1-7cb12c5ba825", "fe22cd5c-ba6f-4bfe-8932-af6813d65bfe") {{
                iterationId = "cec2dd69-16f7-4fc7-9da7-0ec60e607589";
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

            GetTagsRequest req = new GetTagsRequest("numquam", "d61c14cd-9022-47e3-bc0d-977f1a5491ab") {{
                iterationId = "e9751b10-6d23-4e03-a698-15aae99fcde9";
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

            UpdateTagFormRequest req = new UpdateTagFormRequest(                new TagInput("voluptates", "in", TagTypeEnum.REGULAR);, "iste", "c9d4f2d8-a446-440c-a60d-b73a2f93f467", "dc0d8da5-6122-4026-ab8f-277485c1976a");            

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

            UpdateTagJsonRequest req = new UpdateTagJsonRequest(                new TagInput("tenetur", "error", TagTypeEnum.NEGATIVE);, "aut", "da7a089f-c44d-4b27-8530-e5cc7c6d0cbc", "fdcd334b-6f62-43bc-acab-50aee5e0da8b");            

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

            UpdateTagRawRequest req = new UpdateTagRawRequest("sint".getBytes(), "laborum", "f6ad0548-6e7b-4413-8be2-d176dc1c43d4", "0f61d171-157c-4be5-ae4f-7211840772f3");            

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
