# floorPlans

### Available Operations

* [createNetworkFloorPlan](#createnetworkfloorplan) - Upload a floor plan
* [deleteNetworkFloorPlan](#deletenetworkfloorplan) - Destroy a floor plan
* [getNetworkFloorPlan](#getnetworkfloorplan) - Find a floor plan by ID
* [getNetworkFloorPlans](#getnetworkfloorplans) - List the floor plans that belong to your network
* [updateNetworkFloorPlan](#updatenetworkfloorplan) - Update a floor plan's geolocation and other meta data

## createNetworkFloorPlan

Upload a floor plan

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkFloorPlanRequest;
import org.openapis.openapi.models.operations.CreateNetworkFloorPlanRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkFloorPlanRequestBodyBottomLeftCorner;
import org.openapis.openapi.models.operations.CreateNetworkFloorPlanRequestBodyBottomRightCorner;
import org.openapis.openapi.models.operations.CreateNetworkFloorPlanRequestBodyCenter;
import org.openapis.openapi.models.operations.CreateNetworkFloorPlanRequestBodyTopLeftCorner;
import org.openapis.openapi.models.operations.CreateNetworkFloorPlanRequestBodyTopRightCorner;
import org.openapis.openapi.models.operations.CreateNetworkFloorPlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkFloorPlanRequest req = new CreateNetworkFloorPlanRequest(                new CreateNetworkFloorPlanRequestBody("voluptates", "iure") {{
                                bottomLeftCorner = new CreateNetworkFloorPlanRequestBodyBottomLeftCorner() {{
                                    lat = 2278.75;
                                    lng = 802.38;
                                }};;
                                bottomRightCorner = new CreateNetworkFloorPlanRequestBodyBottomRightCorner() {{
                                    lat = 1716.32;
                                    lng = 4119.39;
                                }};;
                                center = new CreateNetworkFloorPlanRequestBodyCenter() {{
                                    lat = 5135.11;
                                    lng = 1886.31;
                                }};;
                                topLeftCorner = new CreateNetworkFloorPlanRequestBodyTopLeftCorner() {{
                                    lat = 9525.72;
                                    lng = 9795.44;
                                }};;
                                topRightCorner = new CreateNetworkFloorPlanRequestBodyTopRightCorner() {{
                                    lat = 2788.66;
                                    lng = 5522.14;
                                }};;
                            }};, "minus");            

            CreateNetworkFloorPlanResponse res = sdk.floorPlans.createNetworkFloorPlan(req);

            if (res.createNetworkFloorPlan201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkFloorPlan

Destroy a floor plan

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkFloorPlanRequest;
import org.openapis.openapi.models.operations.DeleteNetworkFloorPlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkFloorPlanRequest req = new DeleteNetworkFloorPlanRequest("ad", "quisquam");            

            DeleteNetworkFloorPlanResponse res = sdk.floorPlans.deleteNetworkFloorPlan(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkFloorPlan

Find a floor plan by ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkFloorPlanRequest;
import org.openapis.openapi.models.operations.GetNetworkFloorPlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkFloorPlanRequest req = new GetNetworkFloorPlanRequest("sint", "fuga");            

            GetNetworkFloorPlanResponse res = sdk.floorPlans.getNetworkFloorPlan(req);

            if (res.getNetworkFloorPlan200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkFloorPlans

List the floor plans that belong to your network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkFloorPlansRequest;
import org.openapis.openapi.models.operations.GetNetworkFloorPlansResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkFloorPlansRequest req = new GetNetworkFloorPlansRequest("impedit");            

            GetNetworkFloorPlansResponse res = sdk.floorPlans.getNetworkFloorPlans(req);

            if (res.getNetworkFloorPlans200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkFloorPlan

Update a floor plan's geolocation and other meta data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkFloorPlanRequest;
import org.openapis.openapi.models.operations.UpdateNetworkFloorPlanRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkFloorPlanRequestBodyBottomLeftCorner;
import org.openapis.openapi.models.operations.UpdateNetworkFloorPlanRequestBodyBottomRightCorner;
import org.openapis.openapi.models.operations.UpdateNetworkFloorPlanRequestBodyCenter;
import org.openapis.openapi.models.operations.UpdateNetworkFloorPlanRequestBodyTopLeftCorner;
import org.openapis.openapi.models.operations.UpdateNetworkFloorPlanRequestBodyTopRightCorner;
import org.openapis.openapi.models.operations.UpdateNetworkFloorPlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkFloorPlanRequest req = new UpdateNetworkFloorPlanRequest("aut", "quidem") {{
                requestBody = new UpdateNetworkFloorPlanRequestBody() {{
                    bottomLeftCorner = new UpdateNetworkFloorPlanRequestBodyBottomLeftCorner() {{
                        lat = 5836.01;
                        lng = 1996.64;
                    }};;
                    bottomRightCorner = new UpdateNetworkFloorPlanRequestBodyBottomRightCorner() {{
                        lat = 5309.03;
                        lng = 9544.27;
                    }};;
                    center = new UpdateNetworkFloorPlanRequestBodyCenter() {{
                        lat = 3890.07;
                        lng = 8583.57;
                    }};;
                    imageContents = "porro";
                    name = "Derrick Nikolaus";
                    topLeftCorner = new UpdateNetworkFloorPlanRequestBodyTopLeftCorner() {{
                        lat = 4278.58;
                        lng = 8253.41;
                    }};;
                    topRightCorner = new UpdateNetworkFloorPlanRequestBodyTopRightCorner() {{
                        lat = 4480.52;
                        lng = 1996.13;
                    }};;
                }};;
            }};            

            UpdateNetworkFloorPlanResponse res = sdk.floorPlans.updateNetworkFloorPlan(req);

            if (res.updateNetworkFloorPlan200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
