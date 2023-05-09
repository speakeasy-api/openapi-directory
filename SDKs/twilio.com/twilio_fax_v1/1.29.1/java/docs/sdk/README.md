# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [deleteFax](#deletefax) - Delete a specific fax and its associated media.
* [deleteFaxMedia](#deletefaxmedia) - Delete a specific fax media instance.
* [fetchFax](#fetchfax) - Fetch a specific fax.
* [fetchFaxMedia](#fetchfaxmedia) - Fetch a specific fax media instance.
* [listFax](#listfax) - Retrieve a list of all faxes.
* [listFaxMedia](#listfaxmedia) - Retrieve a list of all fax media instances for the specified fax.

## deleteFax

Delete a specific fax and its associated media.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFaxRequest;
import org.openapis.openapi.models.operations.DeleteFaxResponse;
import org.openapis.openapi.models.operations.DeleteFaxSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteFaxRequest req = new DeleteFaxRequest("quibusdam");            

            DeleteFaxResponse res = sdk.sdk.deleteFax(req, new DeleteFaxSecurity("unde", "nulla") {{
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

## deleteFaxMedia

Delete a specific fax media instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFaxMediaRequest;
import org.openapis.openapi.models.operations.DeleteFaxMediaResponse;
import org.openapis.openapi.models.operations.DeleteFaxMediaSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteFaxMediaRequest req = new DeleteFaxMediaRequest("corrupti", "illum");            

            DeleteFaxMediaResponse res = sdk.sdk.deleteFaxMedia(req, new DeleteFaxMediaSecurity("vel", "error") {{
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

## fetchFax

Fetch a specific fax.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchFaxRequest;
import org.openapis.openapi.models.operations.FetchFaxResponse;
import org.openapis.openapi.models.operations.FetchFaxSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchFaxRequest req = new FetchFaxRequest("deserunt");            

            FetchFaxResponse res = sdk.sdk.fetchFax(req, new FetchFaxSecurity("suscipit", "iure") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.faxV1Fax != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchFaxMedia

Fetch a specific fax media instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchFaxMediaRequest;
import org.openapis.openapi.models.operations.FetchFaxMediaResponse;
import org.openapis.openapi.models.operations.FetchFaxMediaSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchFaxMediaRequest req = new FetchFaxMediaRequest("magnam", "debitis");            

            FetchFaxMediaResponse res = sdk.sdk.fetchFaxMedia(req, new FetchFaxMediaSecurity("ipsa", "delectus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.faxV1FaxFaxMedia != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFax

Retrieve a list of all faxes.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFaxRequest;
import org.openapis.openapi.models.operations.ListFaxResponse;
import org.openapis.openapi.models.operations.ListFaxSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListFaxRequest req = new ListFaxRequest() {{
                dateCreatedAfter = OffsetDateTime.parse("2022-08-14T01:03:07.567Z");
                dateCreatedOnOrBefore = OffsetDateTime.parse("2022-03-18T00:29:19.137Z");
                from = "placeat";
                pageSize = 528895L;
                to = "iusto";
            }};            

            ListFaxResponse res = sdk.sdk.listFax(req, new ListFaxSecurity("excepturi", "nisi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listFaxResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFaxMedia

Retrieve a list of all fax media instances for the specified fax.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFaxMediaRequest;
import org.openapis.openapi.models.operations.ListFaxMediaResponse;
import org.openapis.openapi.models.operations.ListFaxMediaSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListFaxMediaRequest req = new ListFaxMediaRequest("recusandae") {{
                pageSize = 836079L;
            }};            

            ListFaxMediaResponse res = sdk.sdk.listFaxMedia(req, new ListFaxMediaSecurity("ab", "quis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listFaxMediaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
