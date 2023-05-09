# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [deleteContent](#deletecontent) - Deletes a Content resource
* [fetchApprovalFetch](#fetchapprovalfetch) - Fetch a Content resource's approval status by its unique Content Sid
* [fetchContent](#fetchcontent) - Fetch a Content resource by its unique Content Sid
* [listContent](#listcontent) - Retrieve a list of Contents belonging to the account used to make the request
* [listContentAndApprovals](#listcontentandapprovals) - Retrieve a list of Contents with approval statuses belonging to the account used to make the request
* [listLegacyContent](#listlegacycontent) - Retrieve a list of Legacy Contents belonging to the account used to make the request

## deleteContent

Deletes a Content resource

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteContentRequest;
import org.openapis.openapi.models.operations.DeleteContentResponse;
import org.openapis.openapi.models.operations.DeleteContentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteContentRequest req = new DeleteContentRequest("quibusdam");            

            DeleteContentResponse res = sdk.sdk.deleteContent(req, new DeleteContentSecurity("unde", "nulla") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## fetchApprovalFetch

Fetch a Content resource's approval status by its unique Content Sid

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchApprovalFetchRequest;
import org.openapis.openapi.models.operations.FetchApprovalFetchResponse;
import org.openapis.openapi.models.operations.FetchApprovalFetchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchApprovalFetchRequest req = new FetchApprovalFetchRequest("corrupti");            

            FetchApprovalFetchResponse res = sdk.sdk.fetchApprovalFetch(req, new FetchApprovalFetchSecurity("illum", "vel") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.contentV1ContentApprovalFetch != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchContent

Fetch a Content resource by its unique Content Sid

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchContentRequest;
import org.openapis.openapi.models.operations.FetchContentResponse;
import org.openapis.openapi.models.operations.FetchContentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchContentRequest req = new FetchContentRequest("error");            

            FetchContentResponse res = sdk.sdk.fetchContent(req, new FetchContentSecurity("deserunt", "suscipit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.contentV1Content != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listContent

Retrieve a list of Contents belonging to the account used to make the request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListContentRequest;
import org.openapis.openapi.models.operations.ListContentResponse;
import org.openapis.openapi.models.operations.ListContentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListContentRequest req = new ListContentRequest() {{
                page = 437587L;
                pageSize = 297534L;
                pageToken = "debitis";
            }};            

            ListContentResponse res = sdk.sdk.listContent(req, new ListContentSecurity("ipsa", "delectus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listContentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listContentAndApprovals

Retrieve a list of Contents with approval statuses belonging to the account used to make the request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListContentAndApprovalsRequest;
import org.openapis.openapi.models.operations.ListContentAndApprovalsResponse;
import org.openapis.openapi.models.operations.ListContentAndApprovalsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListContentAndApprovalsRequest req = new ListContentAndApprovalsRequest() {{
                page = 272656L;
                pageSize = 383441L;
                pageToken = "molestiae";
            }};            

            ListContentAndApprovalsResponse res = sdk.sdk.listContentAndApprovals(req, new ListContentAndApprovalsSecurity("minus", "placeat") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listContentAndApprovalsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLegacyContent

Retrieve a list of Legacy Contents belonging to the account used to make the request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLegacyContentRequest;
import org.openapis.openapi.models.operations.ListLegacyContentResponse;
import org.openapis.openapi.models.operations.ListLegacyContentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListLegacyContentRequest req = new ListLegacyContentRequest() {{
                page = 528895L;
                pageSize = 479977L;
                pageToken = "excepturi";
            }};            

            ListLegacyContentResponse res = sdk.sdk.listLegacyContent(req, new ListLegacyContentSecurity("nisi", "recusandae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listLegacyContentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
