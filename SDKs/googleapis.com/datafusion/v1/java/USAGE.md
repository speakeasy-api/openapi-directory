<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesCreateSecurity;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesCreatePathParams;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesCreateQueryParams;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesCreateRequest;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesCreateResponse;
import org.openapis.openapi.models.shared.InstanceTypeEnum;
import org.openapis.openapi.models.shared.InstanceInput;
import org.openapis.openapi.models.shared.NetworkConfig;
import org.openapis.openapi.models.shared.EventPublishConfig;
import org.openapis.openapi.models.shared.CryptoKeyConfig;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatafusionProjectsLocationsInstancesCreateRequest req = new DatafusionProjectsLocationsInstancesCreateRequest() {{
                security = new DatafusionProjectsLocationsInstancesCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new DatafusionProjectsLocationsInstancesCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new DatafusionProjectsLocationsInstancesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    instanceId = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                }};
                request = new InstanceInput() {{
                    cryptoKeyConfig = new CryptoKeyConfig() {{
                        keyReference = "iure";
                    }};
                    dataprocServiceAccount = "magnam";
                    description = "debitis";
                    displayName = "ipsa";
                    enableRbac = false;
                    enableStackdriverLogging = false;
                    enableStackdriverMonitoring = false;
                    enableZoneSeparation = false;
                    eventPublishConfig = new EventPublishConfig() {{
                        enabled = false;
                        topic = "delectus";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("suscipit", "molestiae");
                        put("minus", "placeat");
                    }};
                    networkConfig = new NetworkConfig() {{
                        ipAllocation = "voluptatum";
                        network = "iusto";
                    }};
                    options = new java.util.HashMap<String, String>() {{
                        put("nisi", "recusandae");
                        put("temporibus", "ab");
                        put("quis", "veritatis");
                    }};
                    privateInstance = false;
                    type = "ENTERPRISE";
                    version = "perferendis";
                    zone = "ipsam";
                }};
            }};            

            DatafusionProjectsLocationsInstancesCreateResponse res = sdk.projects.datafusionProjectsLocationsInstancesCreate(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->