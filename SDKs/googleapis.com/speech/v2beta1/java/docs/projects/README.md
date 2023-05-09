# projects

### Available Operations

* [speechProjectsLocationsOperationsGet](#speechprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [speechProjectsLocationsOperationsList](#speechprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

## speechProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SpeechProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.SpeechProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.operations.SpeechProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SpeechProjectsLocationsOperationsGetRequest req = new SpeechProjectsLocationsOperationsGetRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "suscipit";
                key = "molestiae";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "voluptatum";
                uploadProtocol = "iusto";
            }};            

            SpeechProjectsLocationsOperationsGetResponse res = sdk.projects.speechProjectsLocationsOperationsGet(req, new SpeechProjectsLocationsOperationsGetSecurity("excepturi", "nisi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## speechProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SpeechProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.SpeechProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.SpeechProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SpeechProjectsLocationsOperationsListRequest req = new SpeechProjectsLocationsOperationsListRequest("recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ab";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                fields = "deserunt";
                filter = "perferendis";
                key = "ipsam";
                oauthToken = "repellendus";
                pageSize = 957156L;
                pageToken = "quo";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "at";
                uploadProtocol = "at";
            }};            

            SpeechProjectsLocationsOperationsListResponse res = sdk.projects.speechProjectsLocationsOperationsList(req, new SpeechProjectsLocationsOperationsListSecurity("maiores", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
