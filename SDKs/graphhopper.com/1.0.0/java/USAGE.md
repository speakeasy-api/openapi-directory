<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AsyncClusteringProblemRequest;
import org.openapis.openapi.models.operations.AsyncClusteringProblemResponse;
import org.openapis.openapi.models.shared.ClusterRequest;
import org.openapis.openapi.models.shared.ClusterCustomer;
import org.openapis.openapi.models.shared.ClusterCustomerAddress;
import org.openapis.openapi.models.shared.ClusterConfiguration;
import org.openapis.openapi.models.shared.ClusterConfigurationRouting;
import org.openapis.openapi.models.shared.ClusterConfigurationClustering;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            AsyncClusteringProblemRequest req = new AsyncClusteringProblemRequest() {{
                request = new ClusterRequest() {{
                    configuration = new ClusterConfiguration() {{
                        clustering = new ClusterConfigurationClustering() {{
                            maxQuantity = 50;
                            minQuantity = 30;
                            numClusters = 10;
                        }};
                        responseType = "json";
                        routing = new ClusterConfigurationRouting() {{
                            costPerMeter = 5488.14;
                            costPerSecond = 1;
                            profile = "car";
                        }};
                    }};
                    customers = new org.openapis.openapi.models.shared.ClusterCustomer[]{{
                        add(new ClusterCustomer() {{
                            address = new ClusterCustomerAddress() {{
                                lat = 48.118434;
                                lon = 11.53941;
                                streetHint = "Lindenschmitstraße 52";
                            }};
                            id = "GraphHopper GmbH";
                            quantity = 10;
                        }}),
                        add(new ClusterCustomer() {{
                            address = new ClusterCustomerAddress() {{
                                lat = 48.118434;
                                lon = 11.53941;
                                streetHint = "Lindenschmitstraße 52";
                            }};
                            id = "GraphHopper GmbH";
                            quantity = 10;
                        }}),
                        add(new ClusterCustomer() {{
                            address = new ClusterCustomerAddress() {{
                                lat = 48.118434;
                                lon = 11.53941;
                                streetHint = "Lindenschmitstraße 52";
                            }};
                            id = "GraphHopper GmbH";
                            quantity = 10;
                        }}),
                    }};
                }};
            }};            

            AsyncClusteringProblemResponse res = sdk.clusterAPI.asyncClusteringProblem(req);

            if (res.jobId.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->