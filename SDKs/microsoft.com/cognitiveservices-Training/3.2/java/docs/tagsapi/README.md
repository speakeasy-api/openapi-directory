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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTagRequest req = new CreateTagRequest("doloremque", "6d212494-5081-49d7-83b1-b41844060e00") {{
                description = "nesciunt";
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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTagRequest req = new DeleteTagRequest("d023dc90-1f5a-4fd2-a6c4-4846ae9d8925", "3c8962f4-896b-4f51-a465-2d3c343d6177");            

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTagRequest req = new GetTagRequest("af491247-725e-4621-909e-91044a5de59a", "c7706670-cf1c-4f59-b260-5251e66bb426") {{
                iterationId = "897d99a2-d335-4670-a93e-e6cf59f358aa";
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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTagsRequest req = new GetTagsRequest("acae323a-31bf-47ba-9cc9-7716c802cc9e") {{
                iterationId = "0c7d9d32-3f1a-4a63-ad9c-f1c856bcba51";
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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagInput;
import org.openapis.openapi.models.shared.TagTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTagFormRequest req = new UpdateTagFormRequest(                new TagInput("maiores", "odit", TagTypeEnum.REGULAR);, "54a47fac-f116-4cdd-9444-a7562873c7dd", "9efaf43d-c623-4620-b313-8f30df3db022");            

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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagInput;
import org.openapis.openapi.models.shared.TagTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTagJsonRequest req = new UpdateTagJsonRequest(                new TagInput("similique", "id", TagTypeEnum.REGULAR);, "65fb8f65-2ebb-49d3-8383-8790243b293d", "ab30e917-f50f-4da0-8c8b-1bb55a292b0b");            

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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagInput;
import org.openapis.openapi.models.shared.TagTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTagRawRequest req = new UpdateTagRawRequest("non".getBytes(), "bb744664-eb1d-4033-88b0-d1bb17afee74", "b6feb945-7c7e-4daf-b9d1-6fbf76fd162b");            

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
