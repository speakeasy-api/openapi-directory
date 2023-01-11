<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    parent = "ratione";
                }};
                queryParams = new EventarcProjectsLocationsChannelConnectionsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "ut";
                    alt = "json";
                    callback = "ut";
                    channelConnectionId = "corrupti";
                    fields = "ducimus";
                    key = "delectus";
                    oauthToken = "non";
                    prettyPrint = true;
                    quotaUser = "eum";
                    uploadType = "sed";
                    uploadProtocol = "placeat";
                }};
                request = new ChannelConnectionInput() {{
                    activationToken = "quis";
                    channel = "rerum";
                    name = "repellat";
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