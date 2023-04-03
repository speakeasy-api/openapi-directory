<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesCreateSecurity;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesCreateRequest;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstanceTypeEnum;
import org.openapis.openapi.models.shared.InstanceInput;
import org.openapis.openapi.models.shared.NetworkConfig;
import org.openapis.openapi.models.shared.EventPublishConfig;
import org.openapis.openapi.models.shared.CryptoKeyConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatafusionProjectsLocationsInstancesCreateRequest req = new DatafusionProjectsLocationsInstancesCreateRequest() {{
                dollarXgafv = "2";
                instanceInput = new InstanceInput() {{
                    cryptoKeyConfig = new CryptoKeyConfig() {{
                        keyReference = "provident";
                    }};
                    dataprocServiceAccount = "distinctio";
                    description = "quibusdam";
                    displayName = "unde";
                    enableRbac = false;
                    enableStackdriverLogging = false;
                    enableStackdriverMonitoring = false;
                    enableZoneSeparation = false;
                    eventPublishConfig = new EventPublishConfig() {{
                        enabled = false;
                        topic = "nulla";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("illum", "vel");
                        put("error", "deserunt");
                        put("suscipit", "iure");
                    }};
                    networkConfig = new NetworkConfig() {{
                        ipAllocation = "magnam";
                        network = "debitis";
                    }};
                    options = new java.util.HashMap<String, String>() {{
                        put("delectus", "tempora");
                    }};
                    privateInstance = false;
                    type = "BASIC";
                    version = "molestiae";
                    zone = "minus";
                }};
                accessToken = "placeat";
                alt = "media";
                callback = "iusto";
                fields = "excepturi";
                instanceId = "nisi";
                key = "recusandae";
                oauthToken = "temporibus";
                parent = "ab";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "veritatis";
                uploadProtocol = "deserunt";
            }}            

            DatafusionProjectsLocationsInstancesCreateResponse res = sdk.projects.datafusionProjectsLocationsInstancesCreate(req, new DatafusionProjectsLocationsInstancesCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->