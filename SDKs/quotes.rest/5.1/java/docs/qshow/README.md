# qshow

## Overview

Access Qshow - quote collection service. Create curated quotes collection. You can group quotes by any way you want and access them as a single unit. You need an API key to access this service.

### Available Operations

* [deleteQshow](#deleteqshow) - Delete a qshow.

* [getQshow](#getqshow) - Gets a details about a qshow.

* [getQshowList](#getqshowlist) - Get the list of Qshows in They Said So platform.
* [getQshowQuotes](#getqshowquotes) - Get the quotes in a given Qshow.
* [patchQshow](#patchqshow) - Update an existing qshow.
* [postQshowQuotesAdd](#postqshowquotesadd) - Add a quote to a given Qshow.
* [postQshowQuotesRemove](#postqshowquotesremove) - Remove a quote to a given Qshow.
* [putQshow](#putqshow) - Create and add a new qshow to your private collection.

## deleteQshow

Delete a qshow.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteQshowRequest;
import org.openapis.openapi.models.operations.DeleteQshowResponse;
import org.openapis.openapi.models.operations.DeleteQshowSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteQshowRequest req = new DeleteQshowRequest("dolorum");            

            DeleteQshowResponse res = sdk.qshow.deleteQshow(req, new DeleteQshowSecurity("dicta") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQshow

Gets a details about a qshow.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQshowRequest;
import org.openapis.openapi.models.operations.GetQshowResponse;
import org.openapis.openapi.models.operations.GetQshowSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQshowRequest req = new GetQshowRequest("nam");            

            GetQshowResponse res = sdk.qshow.getQshow(req, new GetQshowSecurity("officia") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQshowList

Get the list of Qshows in They Said So platform.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQshowListRequest;
import org.openapis.openapi.models.operations.GetQshowListResponse;
import org.openapis.openapi.models.operations.GetQshowListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQshowListRequest req = new GetQshowListRequest() {{
                public_ = false;
                start = 582020;
            }};            

            GetQshowListResponse res = sdk.qshow.getQshowList(req, new GetQshowListSecurity("fugit") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQshowQuotes

Get the quotes in a given Qshow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQshowQuotesRequest;
import org.openapis.openapi.models.operations.GetQshowQuotesResponse;
import org.openapis.openapi.models.operations.GetQshowQuotesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQshowQuotesRequest req = new GetQshowQuotesRequest("deleniti");            

            GetQshowQuotesResponse res = sdk.qshow.getQshowQuotes(req, new GetQshowQuotesSecurity("hic") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchQshow

Update an existing qshow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchQshowRequest;
import org.openapis.openapi.models.operations.PatchQshowResponse;
import org.openapis.openapi.models.operations.PatchQshowSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchQshowRequest req = new PatchQshowRequest("optio") {{
                description = "totam";
                tags = new String[]{{
                    add("commodi"),
                }};
                title = "molestiae";
            }};            

            PatchQshowResponse res = sdk.qshow.patchQshow(req, new PatchQshowSecurity("modi") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postQshowQuotesAdd

Add a quote to a given Qshow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostQshowQuotesAddRequest;
import org.openapis.openapi.models.operations.PostQshowQuotesAddResponse;
import org.openapis.openapi.models.operations.PostQshowQuotesAddSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostQshowQuotesAddRequest req = new PostQshowQuotesAddRequest("qui", "impedit");            

            PostQshowQuotesAddResponse res = sdk.qshow.postQshowQuotesAdd(req, new PostQshowQuotesAddSecurity("cum") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postQshowQuotesRemove

Remove a quote to a given Qshow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostQshowQuotesRemoveRequest;
import org.openapis.openapi.models.operations.PostQshowQuotesRemoveResponse;
import org.openapis.openapi.models.operations.PostQshowQuotesRemoveSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostQshowQuotesRemoveRequest req = new PostQshowQuotesRemoveRequest("esse", "ipsum");            

            PostQshowQuotesRemoveResponse res = sdk.qshow.postQshowQuotesRemove(req, new PostQshowQuotesRemoveSecurity("excepturi") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putQshow

Create and add a new qshow to your private collection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutQshowRequest;
import org.openapis.openapi.models.operations.PutQshowResponse;
import org.openapis.openapi.models.operations.PutQshowSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutQshowRequest req = new PutQshowRequest("aspernatur") {{
                description = "perferendis";
                tags = new String[]{{
                    add("natus"),
                    add("sed"),
                }};
            }};            

            PutQshowResponse res = sdk.qshow.putQshow(req, new PutQshowSecurity("iste") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
