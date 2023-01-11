<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            AsyncClusteringProblemRequest req = new AsyncClusteringProblemRequest() {{
                request = new ClusterRequest() {{
                    configuration = new ClusterConfiguration() {{
                        clustering = new ClusterConfigurationClustering() {{
                            maxQuantity = 75.099998;
                            minQuantity = 6.100000;
                            numClusters = 20.100000;
                        }};
                        responseType = "sed";
                        routing = new ClusterConfigurationRouting() {{
                            costPerMeter = 41.200001;
                            costPerSecond = 46.099998;
                            profile = "beatae";
                        }};
                    }};
                    customers = new openapisdk.models.shared.ClusterCustomer[]() {{
                        add(new ClusterCustomer() {{
                            address = new ClusterCustomerAddress() {{
                                lat = 92.099998;
                                lon = 2.200000;
                                streetHint = "harum";
                            }};
                            id = "repudiandae";
                            quantity = 20.200001;
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