<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesCreateRequest;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesCreateResponse;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CryptoKeyConfig;
import org.openapis.openapi.models.shared.EventPublishConfig;
import org.openapis.openapi.models.shared.InstanceInput;
import org.openapis.openapi.models.shared.InstanceTypeEnum;
import org.openapis.openapi.models.shared.NetworkConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatafusionProjectsLocationsInstancesCreateRequest req = new DatafusionProjectsLocationsInstancesCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceInput = new InstanceInput() {{
                    cryptoKeyConfig = new CryptoKeyConfig() {{
                        keyReference = "distinctio";
                    }};;
                    dataprocServiceAccount = "quibusdam";
                    description = "unde";
                    displayName = "nulla";
                    enableRbac = false;
                    enableStackdriverLogging = false;
                    enableStackdriverMonitoring = false;
                    enableZoneSeparation = false;
                    eventPublishConfig = new EventPublishConfig() {{
                        enabled = false;
                        topic = "corrupti";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("vel", "error");
                        put("deserunt", "suscipit");
                        put("iure", "magnam");
                        put("debitis", "ipsa");
                    }};
                    networkConfig = new NetworkConfig() {{
                        ipAllocation = "delectus";
                        network = "tempora";
                    }};;
                    options = new java.util.HashMap<String, String>() {{
                        put("molestiae", "minus");
                        put("placeat", "voluptatum");
                    }};
                    privateInstance = false;
                    type = InstanceTypeEnum.BASIC;
                    version = "excepturi";
                    zone = "nisi";
                }};;
                accessToken = "recusandae";
                alt = AltEnum.PROTO;
                callback = "ab";
                fields = "quis";
                instanceId = "veritatis";
                key = "deserunt";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "repellendus";
                uploadProtocol = "sapiente";
            }};            

            DatafusionProjectsLocationsInstancesCreateResponse res = sdk.projects.datafusionProjectsLocationsInstancesCreate(req, new DatafusionProjectsLocationsInstancesCreateSecurity("quo", "odit") {{
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