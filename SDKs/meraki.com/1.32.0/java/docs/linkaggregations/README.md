# linkAggregations

### Available Operations

* [createNetworkSwitchLinkAggregation](#createnetworkswitchlinkaggregation) - Create a link aggregation group
* [deleteNetworkSwitchLinkAggregation](#deletenetworkswitchlinkaggregation) - Split a link aggregation group into separate ports
* [getNetworkSwitchLinkAggregations](#getnetworkswitchlinkaggregations) - List link aggregation groups
* [updateNetworkSwitchLinkAggregation](#updatenetworkswitchlinkaggregation) - Update a link aggregation group

## createNetworkSwitchLinkAggregation

Create a link aggregation group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkSwitchLinkAggregationRequest;
import org.openapis.openapi.models.operations.CreateNetworkSwitchLinkAggregationRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts;
import org.openapis.openapi.models.operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts;
import org.openapis.openapi.models.operations.CreateNetworkSwitchLinkAggregationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSwitchLinkAggregationRequest req = new CreateNetworkSwitchLinkAggregationRequest("ea") {{
                requestBody = new CreateNetworkSwitchLinkAggregationRequestBody() {{
                    switchPorts = new org.openapis.openapi.models.operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts[]{{
                        add(new CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts("eum", "nihil") {{
                            portId = "nihil";
                            serial = "vitae";
                        }}),
                    }};
                    switchProfilePorts = new org.openapis.openapi.models.operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts[]{{
                        add(new CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts("deleniti", "ipsum") {{
                            portId = "eius";
                            profile = "amet";
                        }}),
                        add(new CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts("ab", "est") {{
                            portId = "in";
                            profile = "repellendus";
                        }}),
                    }};
                }};;
            }};            

            CreateNetworkSwitchLinkAggregationResponse res = sdk.linkAggregations.createNetworkSwitchLinkAggregation(req);

            if (res.createNetworkSwitchLinkAggregation201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkSwitchLinkAggregation

Split a link aggregation group into separate ports

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchLinkAggregationRequest;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchLinkAggregationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSwitchLinkAggregationRequest req = new DeleteNetworkSwitchLinkAggregationRequest("voluptatibus", "earum");            

            DeleteNetworkSwitchLinkAggregationResponse res = sdk.linkAggregations.deleteNetworkSwitchLinkAggregation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchLinkAggregations

List link aggregation groups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchLinkAggregationsRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchLinkAggregationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchLinkAggregationsRequest req = new GetNetworkSwitchLinkAggregationsRequest("facilis");            

            GetNetworkSwitchLinkAggregationsResponse res = sdk.linkAggregations.getNetworkSwitchLinkAggregations(req);

            if (res.getNetworkSwitchLinkAggregations200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchLinkAggregation

Update a link aggregation group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchLinkAggregationRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchLinkAggregationRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchLinkAggregationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchLinkAggregationRequest req = new UpdateNetworkSwitchLinkAggregationRequest("quisquam", "cumque") {{
                requestBody = new UpdateNetworkSwitchLinkAggregationRequestBody() {{
                    switchPorts = new org.openapis.openapi.models.operations.UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts[]{{
                        add(new UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts("mollitia", "asperiores") {{
                            portId = "voluptatum";
                            serial = "rerum";
                        }}),
                    }};
                    switchProfilePorts = new org.openapis.openapi.models.operations.UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts[]{{
                        add(new UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts("vitae", "deserunt") {{
                            portId = "labore";
                            profile = "voluptatum";
                        }}),
                        add(new UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts("quod", "nam") {{
                            portId = "distinctio";
                            profile = "voluptatibus";
                        }}),
                        add(new UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts("optio", "distinctio") {{
                            portId = "suscipit";
                            profile = "inventore";
                        }}),
                        add(new UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts("quam", "nisi") {{
                            portId = "magni";
                            profile = "voluptatibus";
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkSwitchLinkAggregationResponse res = sdk.linkAggregations.updateNetworkSwitchLinkAggregation(req);

            if (res.updateNetworkSwitchLinkAggregation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
