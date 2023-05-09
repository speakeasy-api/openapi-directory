# styleGuide

### Available Operations

* [createStyleGuideJson](#createstyleguidejson) - Upload a new style guide
* [createStyleGuideMultipart](#createstyleguidemultipart) - Upload a new style guide
* [deleteStyleGuide](#deletestyleguide) - Delete a style guide
* [downloadGlobalStyleGuide](#downloadglobalstyleguide) - Download account style guide
* [downloadStyleGuide](#downloadstyleguide) - Download a style guide
* [getStyleGuide](#getstyleguide) - View a style guide
* [getStyleGuides](#getstyleguides) - View style guides
* [updateGlobalStyleGuideJson](#updateglobalstyleguidejson) - Create or update the account style guide
* [updateGlobalStyleGuideMultipart](#updateglobalstyleguidemultipart) - Create or update the account style guide
* [updateStyleGuideJson](#updatestyleguidejson) - Update a style guide
* [updateStyleGuideMultipart](#updatestyleguidemultipart) - Update a style guide

## createStyleGuideJson

Upload a new style guide

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateStyleGuideJsonRequest;
import org.openapis.openapi.models.operations.CreateStyleGuideJsonResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StyleGuideUploadRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateStyleGuideJsonRequest req = new CreateStyleGuideJsonRequest(24527L) {{
                styleGuideUploadRequest = new StyleGuideUploadRequest("voluptatum".getBytes());;
            }};            

            CreateStyleGuideJsonResponse res = sdk.styleGuide.createStyleGuideJson(req);

            if (res.styleGuideList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createStyleGuideMultipart

Upload a new style guide

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateStyleGuideMultipartRequest;
import org.openapis.openapi.models.operations.CreateStyleGuideMultipartResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StyleGuideUploadRequest1;
import org.openapis.openapi.models.shared.StyleGuideUploadRequestStyleguides;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateStyleGuideMultipartRequest req = new CreateStyleGuideMultipartRequest(922112L) {{
                styleGuideUploadRequest1 = new StyleGuideUploadRequest1(                new StyleGuideUploadRequestStyleguides("corporis".getBytes(), "et"););;
            }};            

            CreateStyleGuideMultipartResponse res = sdk.styleGuide.createStyleGuideMultipart(req);

            if (res.styleGuideList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteStyleGuide

Delete the existing style guide from the project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteStyleGuideRequest;
import org.openapis.openapi.models.operations.DeleteStyleGuideResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteStyleGuideRequest req = new DeleteStyleGuideRequest(405942L, 153627L);            

            DeleteStyleGuideResponse res = sdk.styleGuide.deleteStyleGuide(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## downloadGlobalStyleGuide

Download your account's global style guide. This endpoint is available only for corporate account customers. This style guide will be automatically attached to each new project under your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DownloadGlobalStyleGuideResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DownloadGlobalStyleGuideResponse res = sdk.styleGuide.downloadGlobalStyleGuide();

            if (res.downloadGlobalStyleGuide200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## downloadStyleGuide

Download a previously uploaded style guide file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DownloadStyleGuideRequest;
import org.openapis.openapi.models.operations.DownloadStyleGuideResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DownloadStyleGuideRequest req = new DownloadStyleGuideRequest(342611L, 906172L);            

            DownloadStyleGuideResponse res = sdk.styleGuide.downloadStyleGuide(req);

            if (res.downloadStyleGuide200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStyleGuide

View the details of a style guide uploaded to a project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStyleGuideRequest;
import org.openapis.openapi.models.operations.GetStyleGuideResponse;
import org.openapis.openapi.models.operations.GetStyleGuideWithEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetStyleGuideRequest req = new GetStyleGuideRequest(8511L, 279068L) {{
                with = new org.openapis.openapi.models.operations.GetStyleGuideWithEnum[]{{
                    add(GetStyleGuideWithEnum.PREVIEW),
                    add(GetStyleGuideWithEnum.PREVIEW),
                    add(GetStyleGuideWithEnum.PREVIEW),
                    add(GetStyleGuideWithEnum.PREVIEW),
                }};
            }};            

            GetStyleGuideResponse res = sdk.styleGuide.getStyleGuide(req);

            if (res.styleGuide != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStyleGuides

View a list of style guides in your project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStyleGuidesRequest;
import org.openapis.openapi.models.operations.GetStyleGuidesResponse;
import org.openapis.openapi.models.operations.GetStyleGuidesWithEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetStyleGuidesRequest req = new GetStyleGuidesRequest(690894L) {{
                with = new org.openapis.openapi.models.operations.GetStyleGuidesWithEnum[]{{
                    add(GetStyleGuidesWithEnum.PREVIEW),
                }};
            }};            

            GetStyleGuidesResponse res = sdk.styleGuide.getStyleGuides(req);

            if (res.styleGuideList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGlobalStyleGuideJson

Update your corporate account's global style guide. This endpoint is available only for corporate account customers. This style guide will be automatically attached to each new project under your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGlobalStyleGuideJsonResponse;
import org.openapis.openapi.models.shared.AccountStyleGuideUploadRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.AccountStyleGuideUploadRequest req = new AccountStyleGuideUploadRequest("occaecati".getBytes());            

            UpdateGlobalStyleGuideJsonResponse res = sdk.styleGuide.updateGlobalStyleGuideJson(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGlobalStyleGuideMultipart

Update your corporate account's global style guide. This endpoint is available only for corporate account customers. This style guide will be automatically attached to each new project under your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGlobalStyleGuideMultipartResponse;
import org.openapis.openapi.models.shared.AccountStyleGuideUploadRequest1;
import org.openapis.openapi.models.shared.AccountStyleGuideUploadRequestStyleguide;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.AccountStyleGuideUploadRequest1 req = new AccountStyleGuideUploadRequest1(                new AccountStyleGuideUploadRequestStyleguide("quidem".getBytes(), "atque"););            

            UpdateGlobalStyleGuideMultipartResponse res = sdk.styleGuide.updateGlobalStyleGuideMultipart(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateStyleGuideJson

Update the existing style guide in the project. Public users are allowed to have only 1 style guide per project and file name and contents will replaced with the new style guide that you are uploading via this endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateStyleGuideJsonRequest;
import org.openapis.openapi.models.operations.UpdateStyleGuideJsonResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StyleGuideUploadRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UpdateStyleGuideJsonRequest req = new UpdateStyleGuideJsonRequest(724148L, 948861L) {{
                styleGuideUploadRequest = new StyleGuideUploadRequest("laboriosam".getBytes());;
            }};            

            UpdateStyleGuideJsonResponse res = sdk.styleGuide.updateStyleGuideJson(req);

            if (res.styleGuide != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateStyleGuideMultipart

Update the existing style guide in the project. Public users are allowed to have only 1 style guide per project and file name and contents will replaced with the new style guide that you are uploading via this endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateStyleGuideMultipartRequest;
import org.openapis.openapi.models.operations.UpdateStyleGuideMultipartResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StyleGuideUploadRequest1;
import org.openapis.openapi.models.shared.StyleGuideUploadRequestStyleguides;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UpdateStyleGuideMultipartRequest req = new UpdateStyleGuideMultipartRequest(227084L, 647197L) {{
                styleGuideUploadRequest1 = new StyleGuideUploadRequest1(                new StyleGuideUploadRequestStyleguides("voluptate".getBytes(), "unde"););;
            }};            

            UpdateStyleGuideMultipartResponse res = sdk.styleGuide.updateStyleGuideMultipart(req);

            if (res.styleGuide != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
