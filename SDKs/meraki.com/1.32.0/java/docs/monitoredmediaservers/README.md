# monitoredMediaServers

### Available Operations

* [createOrganizationInsightMonitoredMediaServer](#createorganizationinsightmonitoredmediaserver) - Add a media server to be monitored for this organization
* [deleteOrganizationInsightMonitoredMediaServer](#deleteorganizationinsightmonitoredmediaserver) - Delete a monitored media server from this organization
* [getOrganizationInsightMonitoredMediaServer](#getorganizationinsightmonitoredmediaserver) - Return a monitored media server for this organization
* [getOrganizationInsightMonitoredMediaServers](#getorganizationinsightmonitoredmediaservers) - List the monitored media servers for this organization
* [updateOrganizationInsightMonitoredMediaServer](#updateorganizationinsightmonitoredmediaserver) - Update a monitored media server for this organization

## createOrganizationInsightMonitoredMediaServer

Add a media server to be monitored for this organization. Only valid for organizations with Meraki Insight.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrganizationInsightMonitoredMediaServerRequest;
import org.openapis.openapi.models.operations.CreateOrganizationInsightMonitoredMediaServerRequestBody;
import org.openapis.openapi.models.operations.CreateOrganizationInsightMonitoredMediaServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationInsightMonitoredMediaServerRequest req = new CreateOrganizationInsightMonitoredMediaServerRequest(                new CreateOrganizationInsightMonitoredMediaServerRequestBody("quos", "inventore") {{
                                bestEffortMonitoringEnabled = false;
                            }};, "laudantium");            

            CreateOrganizationInsightMonitoredMediaServerResponse res = sdk.monitoredMediaServers.createOrganizationInsightMonitoredMediaServer(req);

            if (res.createOrganizationInsightMonitoredMediaServer201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteOrganizationInsightMonitoredMediaServer

Delete a monitored media server from this organization. Only valid for organizations with Meraki Insight.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOrganizationInsightMonitoredMediaServerRequest;
import org.openapis.openapi.models.operations.DeleteOrganizationInsightMonitoredMediaServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationInsightMonitoredMediaServerRequest req = new DeleteOrganizationInsightMonitoredMediaServerRequest("quos", "reiciendis");            

            DeleteOrganizationInsightMonitoredMediaServerResponse res = sdk.monitoredMediaServers.deleteOrganizationInsightMonitoredMediaServer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationInsightMonitoredMediaServer

Return a monitored media server for this organization. Only valid for organizations with Meraki Insight.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationInsightMonitoredMediaServerRequest;
import org.openapis.openapi.models.operations.GetOrganizationInsightMonitoredMediaServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationInsightMonitoredMediaServerRequest req = new GetOrganizationInsightMonitoredMediaServerRequest("voluptates", "voluptate");            

            GetOrganizationInsightMonitoredMediaServerResponse res = sdk.monitoredMediaServers.getOrganizationInsightMonitoredMediaServer(req);

            if (res.getOrganizationInsightMonitoredMediaServer200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationInsightMonitoredMediaServers

List the monitored media servers for this organization. Only valid for organizations with Meraki Insight.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationInsightMonitoredMediaServersRequest;
import org.openapis.openapi.models.operations.GetOrganizationInsightMonitoredMediaServersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationInsightMonitoredMediaServersRequest req = new GetOrganizationInsightMonitoredMediaServersRequest("harum");            

            GetOrganizationInsightMonitoredMediaServersResponse res = sdk.monitoredMediaServers.getOrganizationInsightMonitoredMediaServers(req);

            if (res.getOrganizationInsightMonitoredMediaServers200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationInsightMonitoredMediaServer

Update a monitored media server for this organization. Only valid for organizations with Meraki Insight.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationInsightMonitoredMediaServerRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationInsightMonitoredMediaServerRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationInsightMonitoredMediaServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationInsightMonitoredMediaServerRequest req = new UpdateOrganizationInsightMonitoredMediaServerRequest("autem", "beatae") {{
                requestBody = new UpdateOrganizationInsightMonitoredMediaServerRequestBody() {{
                    address = "4546 Ivah Shoals";
                    bestEffortMonitoringEnabled = false;
                    name = "Jorge Reichel";
                }};;
            }};            

            UpdateOrganizationInsightMonitoredMediaServerResponse res = sdk.monitoredMediaServers.updateOrganizationInsightMonitoredMediaServer(req);

            if (res.updateOrganizationInsightMonitoredMediaServer200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
