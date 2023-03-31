<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAddressGroupsAddItemsSecurity;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAddressGroupsAddItemsPathParams;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAddressGroupsAddItemsQueryParams;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAddressGroupsAddItemsRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAddressGroupsAddItemsResponse;
import org.openapis.openapi.models.shared.AddAddressGroupItemsRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsAddressGroupsAddItemsRequest req = new NetworksecurityProjectsLocationsAddressGroupsAddItemsRequest() {{
                security = new NetworksecurityProjectsLocationsAddressGroupsAddItemsSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new NetworksecurityProjectsLocationsAddressGroupsAddItemsPathParams() {{
                    addressGroup = "corrupti";
                }};
                queryParams = new NetworksecurityProjectsLocationsAddressGroupsAddItemsQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new AddAddressGroupItemsRequest() {{
                    items = new String[]{{
                        add("iure"),
                        add("magnam"),
                    }};
                    requestId = "debitis";
                }};
            }};            

            NetworksecurityProjectsLocationsAddressGroupsAddItemsResponse res = sdk.projects.networksecurityProjectsLocationsAddressGroupsAddItems(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->