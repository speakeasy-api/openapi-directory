<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.EventarcProjectsLocationsChannelConnectionsCreateSecurity;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsChannelConnectionsCreatePathParams;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsChannelConnectionsCreateQueryParams;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsChannelConnectionsCreateRequest;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsChannelConnectionsCreateResponse;
import org.openapis.openapi.models.shared.ChannelConnectionInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EventarcProjectsLocationsChannelConnectionsCreateRequest req = new EventarcProjectsLocationsChannelConnectionsCreateRequest() {{
                security = new EventarcProjectsLocationsChannelConnectionsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new EventarcProjectsLocationsChannelConnectionsCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new EventarcProjectsLocationsChannelConnectionsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    channelConnectionId = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                }};
                request = new ChannelConnectionInput() {{
                    activationToken = "iure";
                    channel = "magnam";
                    name = "debitis";
                }};
            }};            

            EventarcProjectsLocationsChannelConnectionsCreateResponse res = sdk.projects.eventarcProjectsLocationsChannelConnectionsCreate(req);

            if (res.googleLongrunningOperation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->