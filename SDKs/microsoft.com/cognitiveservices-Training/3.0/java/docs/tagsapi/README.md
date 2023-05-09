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

            CreateTagRequest req = new CreateTagRequest("deleniti", "eum", "ec759e02-f370-42c5-88e2-d30ead3104fa") {{
                description = "dolore";
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

            DeleteTagRequest req = new DeleteTagRequest("iure", "07bf375b-4428-4282-9fdb-2f69e59267c7", "1cc8d3cd-4258-4d03-98a8-2c808fe2751a");            

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

            GetTagRequest req = new GetTagRequest("fugit", "047c0449-e143-4f96-99bb-7d40d5a11fa4", "36e62592-33f9-45c9-9237-397c785b5db4") {{
                iterationId = "f500183f-ebdf-4676-b720-6dab750052a5";
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

            GetTagsRequest req = new GetTagsRequest("nisi", "47edc439-ed8c-4432-8f41-240d4487ac69") {{
                iterationId = "3b94c3b9-d248-48d7-95aa-42fc405669f6";
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

            UpdateTagFormRequest req = new UpdateTagFormRequest(                new TagInput("iste", "animi", TagTypeEnum.REGULAR);, "doloremque", "6d212494-5081-49d7-83b1-b41844060e00", "310d023d-c901-4f5a-bd2a-6c44846ae9d8");            

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

            UpdateTagJsonRequest req = new UpdateTagJsonRequest(                new TagInput("occaecati", "eos", TagTypeEnum.REGULAR);, "amet", "c8962f48-96bf-451e-8652-d3c343d61778", "af491247-725e-4621-909e-91044a5de59a");            

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

            UpdateTagRawRequest req = new UpdateTagRawRequest("placeat".getBytes(), "nihil", "706670cf-1cf5-4932-a052-51e66bb42689", "7d99a2d3-3567-40e9-bee6-cf59f358aaea");            

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
