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
                            maxQuantity = 74.099998;
                            minQuantity = 53.099998;
                            numClusters = 15.100000;
                        }};
                        responseType = "expedita";
                        routing = new ClusterConfigurationRouting() {{
                            costPerMeter = 77.099998;
                            costPerSecond = 28.100000;
                            profile = "rerum";
                        }};
                    }};
                    customers = new openapisdk.models.shared.ClusterCustomer[]() {{
                        add(new ClusterCustomer() {{
                            address = new ClusterCustomerAddress() {{
                                lat = 48.099998;
                                lon = 26.200001;
                                streetHint = "dolorem";
                            }};
                            id = "et";
                            quantity = 94.199997;
                        }}),
                        add(new ClusterCustomer() {{
                            address = new ClusterCustomerAddress() {{
                                lat = 68.099998;
                                lon = 80.199997;
                                streetHint = "debitis";
                            }};
                            id = "vel";
                            quantity = 20.200001;
                        }}),
                        add(new ClusterCustomer() {{
                            address = new ClusterCustomerAddress() {{
                                lat = 12.200000;
                                lon = 88.199997;
                                streetHint = "commodi";
                            }};
                            id = "quis";
                            quantity = 93.099998;
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