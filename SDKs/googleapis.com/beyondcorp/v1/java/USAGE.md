<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectionsCreateSecurity;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectionsCreatePathParams;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectionsCreateQueryParams;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectionsCreateRequest;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectionsCreateResponse;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BeyondcorpProjectsLocationsAppConnectionsCreateRequest req = new BeyondcorpProjectsLocationsAppConnectionsCreateRequest() {{
                security = new BeyondcorpProjectsLocationsAppConnectionsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new BeyondcorpProjectsLocationsAppConnectionsCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new BeyondcorpProjectsLocationsAppConnectionsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    appConnectionId = "unde";
                    callback = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    requestId = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                    validateOnly = false;
                }};
                request = new GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput() {{
                    applicationEndpoint = new GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint() {{
                        host = "magnam";
                        port = 891773;
                    }};
                    connectors = new String[]{{
                        add("delectus"),
                    }};
                    displayName = "tempora";
                    gateway = new GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput() {{
                        appGateway = "suscipit";
                        type = "TYPE_UNSPECIFIED";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("placeat", "voluptatum");
                        put("iusto", "excepturi");
                        put("nisi", "recusandae");
                        put("temporibus", "ab");
                    }};
                    name = "quis";
                    type = "TYPE_UNSPECIFIED";
                }};
            }};            

            BeyondcorpProjectsLocationsAppConnectionsCreateResponse res = sdk.projects.beyondcorpProjectsLocationsAppConnectionsCreate(req);

            if (res.googleLongrunningOperation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->