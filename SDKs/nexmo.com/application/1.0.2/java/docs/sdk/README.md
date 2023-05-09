# SDK

## Overview

<div class="Vlt-callout Vlt-callout--critical"> <i></i> <div class="Vlt-callout__content">
  <h4>Applications V1 is deprecated</h4>
  This version of the API has been deprecated. Please use <a href="/api/application.v2">version 2</a> going forwards
</div> </div>
A Nexmo application contains the security and configuration information you need to connect to Nexmo endpoints and easily use our products.

<https://developer.nexmo.com/api/developer/application>
### Available Operations

* [createApplication](#createapplication) - Create Application
* [deleteApplication](#deleteapplication) - Destroy Application
* [retrieveApplication](#retrieveapplication) - Retrieve Application
* [retrieveApplications](#retrieveapplications) - Retrieve all Applications
* [updateApplication](#updateapplication) - Update Application

## createApplication

You use a `POST` request to create a new application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApplicationRequestBody;
import org.openapis.openapi.models.operations.CreateApplicationRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.CreateApplicationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateApplicationRequestBody req = new CreateApplicationRequestBody("ap1k3y", "230e6cf0709417176df1b4fc1e083adc", "My Application", CreateApplicationRequestBodyTypeEnum.VOICE) {{
                answerMethod = "GET";
                answerUrl = "https://example.com/webhooks/answer";
                eventMethod = "POST";
                eventUrl = "https://example.com/webhooks/event";
                inboundMethod = "POST";
                inboundUrl = "https://example.com/webhooks/inbound";
                statusMethod = "POST";
                statusUrl = "https://example.com/webhooks/status";
            }};            

            CreateApplicationResponse res = sdk.sdk.createApplication(req);

            if (res.applicationCreated != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApplication

You use a `DELETE` request to delete a single application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApplicationRequest;
import org.openapis.openapi.models.operations.DeleteApplicationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteApplicationRequest req = new DeleteApplicationRequest("corrupti");            

            DeleteApplicationResponse res = sdk.sdk.deleteApplication(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveApplication

You use a `GET` request to retrieve details about a single application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveApplicationRequest;
import org.openapis.openapi.models.operations.RetrieveApplicationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveApplicationRequest req = new RetrieveApplicationRequest("provident", "distinctio", "quibusdam");            

            RetrieveApplicationResponse res = sdk.sdk.retrieveApplication(req);

            if (res.application != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveApplications

You use a `GET` request to retrieve details of all applications associated with your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveApplicationsRequest;
import org.openapis.openapi.models.operations.RetrieveApplicationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveApplicationsRequest req = new RetrieveApplicationsRequest("unde", "nulla") {{
                pageIndex = 544883L;
                pageSize = 847252L;
            }};            

            RetrieveApplicationsResponse res = sdk.sdk.retrieveApplications(req);

            if (res.applications != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateApplication

You use a `PUT` request to update an existing application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateApplicationRequest;
import org.openapis.openapi.models.operations.UpdateApplicationRequestBody;
import org.openapis.openapi.models.operations.UpdateApplicationRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.UpdateApplicationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateApplicationRequest req = new UpdateApplicationRequest("vel") {{
                requestBody = new UpdateApplicationRequestBody("ap1k3y", "230e6cf0709417176df1b4fc1e083adc", "UpdatedApplication", UpdateApplicationRequestBodyTypeEnum.VOICE) {{
                    answerMethod = "GET";
                    answerUrl = "https://example.com/webhooks/answer";
                    eventMethod = "POST";
                    eventUrl = "https://example.com/webhooks/event";
                }};;
            }};            

            UpdateApplicationResponse res = sdk.sdk.updateApplication(req);

            if (res.application != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
