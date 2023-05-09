<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectionsCreateRequest;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectionsCreateResponse;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectionsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BeyondcorpProjectsLocationsAppConnectionsCreateRequest req = new BeyondcorpProjectsLocationsAppConnectionsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudBeyondcorpAppconnectionsV1AppConnectionInput = new GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput() {{
                    applicationEndpoint = new GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint() {{
                        host = "distinctio";
                        port = 844266;
                    }};;
                    connectors = new String[]{{
                        add("nulla"),
                        add("corrupti"),
                        add("illum"),
                    }};
                    displayName = "vel";
                    gateway = new GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput() {{
                        appGateway = "error";
                        type = GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum.GCP_REGIONAL_MIG;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("iure", "magnam");
                        put("debitis", "ipsa");
                    }};
                    name = "Ricky Hoppe";
                    type = GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum.TCP_PROXY;
                }};;
                accessToken = "voluptatum";
                alt = AltEnum.MEDIA;
                appConnectionId = "excepturi";
                callback = "nisi";
                fields = "recusandae";
                key = "temporibus";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "quis";
                requestId = "veritatis";
                uploadType = "deserunt";
                uploadProtocol = "perferendis";
                validateOnly = false;
            }};            

            BeyondcorpProjectsLocationsAppConnectionsCreateResponse res = sdk.projects.beyondcorpProjectsLocationsAppConnectionsCreate(req, new BeyondcorpProjectsLocationsAppConnectionsCreateSecurity("ipsam", "repellendus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->