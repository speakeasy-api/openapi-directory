# customReports

### Available Operations

* [getReportsCustomCreate](#getreportscustomcreate) - Step 3 of executing custom report
* [getReportsCustomGenerate](#getreportscustomgenerate) - Step 1 of executing custom report
* [getReportsCustomInsert](#getreportscustominsert) - Step 2 of executing custom report
* [postReportsCustomCreate](#postreportscustomcreate) - Step 3 of executing custom report
* [postReportsCustomGenerate](#postreportscustomgenerate) - Step 1 of executing custom report
* [postReportsCustomInsert](#postreportscustominsert) - Step 2 of executing custom report

## getReportsCustomCreate

Used to create a custom report. This report treats the list of ids or handles as the audience (not their followers as in the twitter report). To create follower or tweet reports other methods must be used.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReportsCustomCreateRequest;
import org.openapis.openapi.models.operations.GetReportsCustomCreateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetReportsCustomCreateRequest req = new GetReportsCustomCreateRequest("nulla") {{
                filter = "corrupti";
            }};            

            GetReportsCustomCreateResponse res = sdk.customReports.getReportsCustomCreate(req);

            if (res.customCreate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReportsCustomGenerate

Used to create a custom report. This report treats the list of ids or handles as the audience (not their followers as in the twitter report). To create follower or tweet reports other methods must be used.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReportsCustomGenerateRequest;
import org.openapis.openapi.models.operations.GetReportsCustomGenerateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetReportsCustomGenerateRequest req = new GetReportsCustomGenerateRequest("vel");            

            GetReportsCustomGenerateResponse res = sdk.customReports.getReportsCustomGenerate(req);

            if (res.customGenerate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReportsCustomInsert

Inserting twitter ids or handles into a custom report. This is used for custom reports only


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReportsCustomInsertRequest;
import org.openapis.openapi.models.operations.GetReportsCustomInsertResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetReportsCustomInsertRequest req = new GetReportsCustomInsertRequest(                new Object[]{{
                                add("suscipit"),
                                add("iure"),
                                add("magnam"),
                            }}, "debitis");            

            GetReportsCustomInsertResponse res = sdk.customReports.getReportsCustomInsert(req);

            if (res.customInsert != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postReportsCustomCreate

Used to create a custom report. This report treats the list of ids or handles as the audience (not their followers as in the twitter report). To create follower or tweet reports other methods must be used.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostReportsCustomCreateRequest;
import org.openapis.openapi.models.operations.PostReportsCustomCreateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostReportsCustomCreateRequest req = new PostReportsCustomCreateRequest("delectus") {{
                filter = "tempora";
            }};            

            PostReportsCustomCreateResponse res = sdk.customReports.postReportsCustomCreate(req);

            if (res.customCreate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postReportsCustomGenerate

Used to create a custom report. This report treats the list of ids or handles as the audience (not their followers as in the twitter report). To create follower or tweet reports other methods must be used.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostReportsCustomGenerateRequest;
import org.openapis.openapi.models.operations.PostReportsCustomGenerateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostReportsCustomGenerateRequest req = new PostReportsCustomGenerateRequest("molestiae");            

            PostReportsCustomGenerateResponse res = sdk.customReports.postReportsCustomGenerate(req);

            if (res.customGenerate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postReportsCustomInsert

Inserting twitter ids or handles into a custom report. This is used for custom reports only


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostReportsCustomInsertRequest;
import org.openapis.openapi.models.operations.PostReportsCustomInsertResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostReportsCustomInsertRequest req = new PostReportsCustomInsertRequest(                new Object[]{{
                                add("voluptatum"),
                                add("iusto"),
                                add("excepturi"),
                                add("nisi"),
                            }}, "recusandae");            

            PostReportsCustomInsertResponse res = sdk.customReports.postReportsCustomInsert(req);

            if (res.customInsert != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
