# insight

### Available Operations

* [createOrganizationInsightMonitoredMediaServer](#createorganizationinsightmonitoredmediaserver) - Add a media server to be monitored for this organization
* [deleteOrganizationInsightMonitoredMediaServer](#deleteorganizationinsightmonitoredmediaserver) - Delete a monitored media server from this organization
* [getNetworkInsightApplicationHealthByTime](#getnetworkinsightapplicationhealthbytime) - Get application health by time
* [getOrganizationInsightApplications](#getorganizationinsightapplications) - List all Insight tracked applications
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
                .setSecurity(new Security("itaque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationInsightMonitoredMediaServerRequest req = new CreateOrganizationInsightMonitoredMediaServerRequest(                new CreateOrganizationInsightMonitoredMediaServerRequestBody("quidem", "maiores") {{
                                bestEffortMonitoringEnabled = false;
                            }};, "repudiandae");            

            CreateOrganizationInsightMonitoredMediaServerResponse res = sdk.insight.createOrganizationInsightMonitoredMediaServer(req);

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
                .setSecurity(new Security("voluptate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationInsightMonitoredMediaServerRequest req = new DeleteOrganizationInsightMonitoredMediaServerRequest("unde", "sequi");            

            DeleteOrganizationInsightMonitoredMediaServerResponse res = sdk.insight.deleteOrganizationInsightMonitoredMediaServer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkInsightApplicationHealthByTime

Get application health by time

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkInsightApplicationHealthByTimeRequest;
import org.openapis.openapi.models.operations.GetNetworkInsightApplicationHealthByTimeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkInsightApplicationHealthByTimeRequest req = new GetNetworkInsightApplicationHealthByTimeRequest("culpa", "temporibus") {{
                resolution = 196019L;
                t0 = "repellendus";
                t1 = "minima";
                timespan = 1867.56;
            }};            

            GetNetworkInsightApplicationHealthByTimeResponse res = sdk.insight.getNetworkInsightApplicationHealthByTime(req);

            if (res.getNetworkInsightApplicationHealthByTime200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationInsightApplications

List all Insight tracked applications

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationInsightApplicationsRequest;
import org.openapis.openapi.models.operations.GetOrganizationInsightApplicationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationInsightApplicationsRequest req = new GetOrganizationInsightApplicationsRequest("autem");            

            GetOrganizationInsightApplicationsResponse res = sdk.insight.getOrganizationInsightApplications(req);

            if (res.getOrganizationInsightApplications200ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("ab") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationInsightMonitoredMediaServerRequest req = new GetOrganizationInsightMonitoredMediaServerRequest("possimus", "optio");            

            GetOrganizationInsightMonitoredMediaServerResponse res = sdk.insight.getOrganizationInsightMonitoredMediaServer(req);

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
                .setSecurity(new Security("tempore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationInsightMonitoredMediaServersRequest req = new GetOrganizationInsightMonitoredMediaServersRequest("dignissimos");            

            GetOrganizationInsightMonitoredMediaServersResponse res = sdk.insight.getOrganizationInsightMonitoredMediaServers(req);

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
                .setSecurity(new Security("quibusdam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationInsightMonitoredMediaServerRequest req = new UpdateOrganizationInsightMonitoredMediaServerRequest("quos", "explicabo") {{
                requestBody = new UpdateOrganizationInsightMonitoredMediaServerRequestBody() {{
                    address = "447 Moriah Pine";
                    bestEffortMonitoringEnabled = false;
                    name = "Miss Raquel Rath II";
                }};;
            }};            

            UpdateOrganizationInsightMonitoredMediaServerResponse res = sdk.insight.updateOrganizationInsightMonitoredMediaServer(req);

            if (res.updateOrganizationInsightMonitoredMediaServer200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
