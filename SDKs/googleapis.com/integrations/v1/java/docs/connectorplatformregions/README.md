# connectorPlatformRegions

### Available Operations

* [integrationsConnectorPlatformRegionsEnumerate](#integrationsconnectorplatformregionsenumerate) - Enumerates the regions for which Connector Platform is provisioned.

## integrationsConnectorPlatformRegionsEnumerate

Enumerates the regions for which Connector Platform is provisioned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsConnectorPlatformRegionsEnumerateRequest;
import org.openapis.openapi.models.operations.IntegrationsConnectorPlatformRegionsEnumerateResponse;
import org.openapis.openapi.models.operations.IntegrationsConnectorPlatformRegionsEnumerateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsConnectorPlatformRegionsEnumerateRequest req = new IntegrationsConnectorPlatformRegionsEnumerateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sapiente";
                alt = AltEnum.PROTO;
                callback = "odit";
                fields = "at";
                key = "at";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "quod";
                uploadProtocol = "quod";
            }};            

            IntegrationsConnectorPlatformRegionsEnumerateResponse res = sdk.connectorPlatformRegions.integrationsConnectorPlatformRegionsEnumerate(req, new IntegrationsConnectorPlatformRegionsEnumerateSecurity("esse", "totam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIntegrationsV1alphaEnumerateConnectorPlatformRegionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
