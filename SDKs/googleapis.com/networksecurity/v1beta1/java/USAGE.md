<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAddressGroupsAddItemsRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAddressGroupsAddItemsResponse;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAddressGroupsAddItemsSecurity;
import org.openapis.openapi.models.shared.AddAddressGroupItemsRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsAddressGroupsAddItemsRequest req = new NetworksecurityProjectsLocationsAddressGroupsAddItemsRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                addAddressGroupItemsRequest = new AddAddressGroupItemsRequest() {{
                    items = new String[]{{
                        add("quibusdam"),
                        add("unde"),
                        add("nulla"),
                    }};
                    requestId = "corrupti";
                }};;
                accessToken = "illum";
                alt = AltEnum.MEDIA;
                callback = "error";
                fields = "deserunt";
                key = "suscipit";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "debitis";
                uploadProtocol = "ipsa";
            }};            

            NetworksecurityProjectsLocationsAddressGroupsAddItemsResponse res = sdk.projects.networksecurityProjectsLocationsAddressGroupsAddItems(req, new NetworksecurityProjectsLocationsAddressGroupsAddItemsSecurity("delectus", "tempora") {{
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
<!-- End SDK Example Usage -->