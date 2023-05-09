# pam

### Available Operations

* [getClientProfileForPam](#getclientprofileforpam) - Get the Pam profile of a client for this client ID
* [getProjectCompletionReportForPam](#getprojectcompletionreportforpam) - Get completion report data of a project
* [postMessage](#postmessage) - Sends a message to chat

## getClientProfileForPam

Get the Pam  profile of a client for this client ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClientProfileForPamRequest;
import org.openapis.openapi.models.operations.GetClientProfileForPamResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetClientProfileForPamRequest req = new GetClientProfileForPamRequest(980700L);            

            GetClientProfileForPamResponse res = sdk.pam.getClientProfileForPam(req);

            if (res.clientProfile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjectCompletionReportForPam

Get completion report data of a project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectCompletionReportForPamRequest;
import org.openapis.openapi.models.operations.GetProjectCompletionReportForPamResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetProjectCompletionReportForPamRequest req = new GetProjectCompletionReportForPamRequest(406120L);            

            GetProjectCompletionReportForPamResponse res = sdk.pam.getProjectCompletionReportForPam(req);

            if (res.projectCompletionReport != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postMessage

Sends a message to the channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMessageResponse;
import org.openapis.openapi.models.shared.PamMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PamMessage req = new PamMessage() {{
                message = "excepturi";
                recipients = new String[]{{
                    add("nostrum"),
                    add("sapiente"),
                    add("quisquam"),
                    add("saepe"),
                }};
                slots = new String[]{{
                    add("impedit"),
                    add("corporis"),
                }};
                threadId = "veniam";
                threadKey = "aliquid";
            }};            

            PostMessageResponse res = sdk.pam.postMessage(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
