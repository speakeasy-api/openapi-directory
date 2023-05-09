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
                .setSecurity(new Security("aspernatur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkFloorPlanRequest req = new CreateNetworkFloorPlanRequest(                new CreateNetworkFloorPlanRequestBody("sequi", "quo") {{
                                bottomLeftCorner = new CreateNetworkFloorPlanRequestBodyBottomLeftCorner() {{
                                    lat = 4598.56;
                                    lng = 9251.64;
                                }};;
                                bottomRightCorner = new CreateNetworkFloorPlanRequestBodyBottomRightCorner() {{
                                    lat = 446.12;
                                    lng = 7151.79;
                                }};;
                                center = new CreateNetworkFloorPlanRequestBodyCenter() {{
                                    lat = 7997.96;
                                    lng = 4908.19;
                                }};;
                                topLeftCorner = new CreateNetworkFloorPlanRequestBodyTopLeftCorner() {{
                                    lat = 769.56;
                                    lng = 4694.98;
                                }};;
                                topRightCorner = new CreateNetworkFloorPlanRequestBodyTopRightCorner() {{
                                    lat = 5188.35;
                                    lng = 8827.1;
                                }};;
                            }};, "aliquam");            

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
                .setSecurity(new Security("odio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkFloorPlanRequest req = new DeleteNetworkFloorPlanRequest("occaecati", "commodi");            

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
                .setSecurity(new Security("sapiente") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkFloorPlanRequest req = new GetNetworkFloorPlanRequest("dolores", "deserunt");            

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
                .setSecurity(new Security("molestiae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkFloorPlansRequest req = new GetNetworkFloorPlansRequest("accusantium");            

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
                .setSecurity(new Security("porro") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkFloorPlanRequest req = new UpdateNetworkFloorPlanRequest("eum", "quas") {{
                requestBody = new UpdateNetworkFloorPlanRequestBody() {{
                    bottomLeftCorner = new UpdateNetworkFloorPlanRequestBodyBottomLeftCorner() {{
                        lat = 5100.17;
                        lng = 1598.67;
                    }};;
                    bottomRightCorner = new UpdateNetworkFloorPlanRequestBodyBottomRightCorner() {{
                        lat = 5361.78;
                        lng = 1438.29;
                    }};;
                    center = new UpdateNetworkFloorPlanRequestBodyCenter() {{
                        lat = 6813.93;
                        lng = 6494.63;
                    }};;
                    imageContents = "incidunt";
                    name = "Roy Hansen";
                    topLeftCorner = new UpdateNetworkFloorPlanRequestBodyTopLeftCorner() {{
                        lat = 9564.06;
                        lng = 1598.7;
                    }};;
                    topRightCorner = new UpdateNetworkFloorPlanRequestBodyTopRightCorner() {{
                        lat = 1871.31;
                        lng = 1294.12;
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
