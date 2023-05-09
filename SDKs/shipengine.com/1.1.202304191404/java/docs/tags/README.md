# tags

## Overview

tags


### Available Operations

* [createTag](#createtag) - Create a New Tag
* [deleteTag](#deletetag) - Delete Tag
* [listTags](#listtags) - Get Tags
* [renameTag](#renametag) - Update Tag Name

## createTag

Create a new Tag for customizing how you track your shipments

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTagRequest;
import org.openapis.openapi.models.operations.CreateTagResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTagRequest req = new CreateTagRequest("Fragile");            

            CreateTagResponse res = sdk.tags.createTag(req);

            if (res.createTagResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTag

Delete a tag that is no longer needed

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
                .setSecurity(new Security("sit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTagRequest req = new DeleteTagRequest("Fragile");            

            DeleteTagResponse res = sdk.tags.deleteTag(req);

            if (res.emptyResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTags

Get a list of all tags associated with an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsResponse res = sdk.tags.listTags();

            if (res.listTagsResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## renameTag

Change a tag name while still keeping the relevant shipments attached to it

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RenameTagRequest;
import org.openapis.openapi.models.operations.RenameTagResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RenameTagRequest req = new RenameTagRequest("Fragile", "Fragile");            

            RenameTagResponse res = sdk.tags.renameTag(req);

            if (res.emptyResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
