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
                .setSecurity(new Security("consequuntur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSwitchLinkAggregationRequest req = new CreateNetworkSwitchLinkAggregationRequest("quasi") {{
                requestBody = new CreateNetworkSwitchLinkAggregationRequestBody() {{
                    switchPorts = new org.openapis.openapi.models.operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts[]{{
                        add(new CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts("tenetur", "quae") {{
                            portId = "culpa";
                            serial = "aliquid";
                        }}),
                        add(new CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts("in", "eius") {{
                            portId = "earum";
                            serial = "vel";
                        }}),
                        add(new CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts("soluta", "accusantium") {{
                            portId = "libero";
                            serial = "illum";
                        }}),
                    }};
                    switchProfilePorts = new org.openapis.openapi.models.operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts[]{{
                        add(new CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts("ullam", "reprehenderit") {{
                            portId = "sapiente";
                            profile = "dicta";
                        }}),
                        add(new CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts("aut", "voluptatum") {{
                            portId = "ullam";
                            profile = "nisi";
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
                .setSecurity(new Security("qui") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSwitchLinkAggregationRequest req = new DeleteNetworkSwitchLinkAggregationRequest("quibusdam", "ex");            

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
                .setSecurity(new Security("deleniti") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchLinkAggregationsRequest req = new GetNetworkSwitchLinkAggregationsRequest("itaque");            

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
                .setSecurity(new Security("dolorum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchLinkAggregationRequest req = new UpdateNetworkSwitchLinkAggregationRequest("architecto", "omnis") {{
                requestBody = new UpdateNetworkSwitchLinkAggregationRequestBody() {{
                    switchPorts = new org.openapis.openapi.models.operations.UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts[]{{
                        add(new UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts("et", "voluptate") {{
                            portId = "quasi";
                            serial = "at";
                        }}),
                        add(new UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts("veritatis", "consectetur") {{
                            portId = "ipsa";
                            serial = "minima";
                        }}),
                        add(new UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts("temporibus", "accusantium") {{
                            portId = "adipisci";
                            serial = "iste";
                        }}),
                        add(new UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts("laudantium", "eum") {{
                            portId = "rem";
                            serial = "aut";
                        }}),
                    }};
                    switchProfilePorts = new org.openapis.openapi.models.operations.UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts[]{{
                        add(new UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts("non", "voluptatem") {{
                            portId = "ab";
                            profile = "corrupti";
                        }}),
                        add(new UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts("numquam", "impedit") {{
                            portId = "dolor";
                            profile = "occaecati";
                        }}),
                        add(new UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts("aut", "dignissimos") {{
                            portId = "explicabo";
                            profile = "voluptas";
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
