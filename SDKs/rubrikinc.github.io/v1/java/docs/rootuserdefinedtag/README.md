# rootUserDefinedTag

## Overview

User-defined resource tag management.

### Available Operations

* [createUserDefinedTag](#createuserdefinedtag) - Create a user-defined resource tag for tagging cloud compute resources
* [deleteUserDefinedTag](#deleteuserdefinedtag) - Delete a user-defined resource tag
* [deleteUserDefinedTagBulk](#deleteuserdefinedtagbulk) - Delete a list of user-defined resource tags
* [getUserDefinedTag](#getuserdefinedtag) - Get user-defined tag
* [queryUserDefinedTag](#queryuserdefinedtag) - Get user-defined resource tags
* [updateUserDefinedTag](#updateuserdefinedtag) - Update the value of a user-defined resource tag

## createUserDefinedTag

Create a user-defined resource tag for tagging cloud compute resources created by CloudOn and CloutOut.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUserDefinedTagResponse;
import org.openapis.openapi.models.shared.ResourceTagDefinition;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("aperiam", "voluptates") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.ResourceTagDefinition req = new ResourceTagDefinition("possimus", "fugit", "voluptatem");            

            CreateUserDefinedTagResponse res = sdk.rootUserDefinedTag.createUserDefinedTag(req);

            if (res.resourceTagDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUserDefinedTag

Delete a user-defined resource tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserDefinedTagRequest;
import org.openapis.openapi.models.operations.DeleteUserDefinedTagResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("repudiandae", "corporis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteUserDefinedTagRequest req = new DeleteUserDefinedTagRequest("ea");            

            DeleteUserDefinedTagResponse res = sdk.rootUserDefinedTag.deleteUserDefinedTag(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUserDefinedTagBulk

Delete a list of user-defined resource tags in one delete operation.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserDefinedTagBulkRequest;
import org.openapis.openapi.models.operations.DeleteUserDefinedTagBulkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("eos", "aliquam") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteUserDefinedTagBulkRequest req = new DeleteUserDefinedTagBulkRequest(                new String[]{{
                                add("hic"),
                                add("maiores"),
                                add("asperiores"),
                            }});            

            DeleteUserDefinedTagBulkResponse res = sdk.rootUserDefinedTag.deleteUserDefinedTagBulk(req);

            if (res.resourceTagDeleteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserDefinedTag

Retrieve details of a user-defined resource tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserDefinedTagRequest;
import org.openapis.openapi.models.operations.GetUserDefinedTagResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("autem", "nesciunt") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetUserDefinedTagRequest req = new GetUserDefinedTagRequest("cupiditate");            

            GetUserDefinedTagResponse res = sdk.rootUserDefinedTag.getUserDefinedTag(req);

            if (res.resourceTagDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryUserDefinedTag

Get user-defined resource tags for the cloud compute resources created by CloudOn and CloudOut.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryUserDefinedTagRequest;
import org.openapis.openapi.models.operations.QueryUserDefinedTagResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("animi", "provident") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryUserDefinedTagRequest req = new QueryUserDefinedTagRequest() {{
                key = "beatae";
                scopeRefId = "ipsa";
            }};            

            QueryUserDefinedTagResponse res = sdk.rootUserDefinedTag.queryUserDefinedTag(req);

            if (res.resourceTagGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUserDefinedTag

Update the value of a user-defined resource tag.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUserDefinedTagRequest;
import org.openapis.openapi.models.operations.UpdateUserDefinedTagResponse;
import org.openapis.openapi.models.shared.ResourceTagUpdate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("mollitia", "nam") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateUserDefinedTagRequest req = new UpdateUserDefinedTagRequest(                new ResourceTagUpdate("assumenda");, "quo");            

            UpdateUserDefinedTagResponse res = sdk.rootUserDefinedTag.updateUserDefinedTag(req);

            if (res.resourceTagDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
