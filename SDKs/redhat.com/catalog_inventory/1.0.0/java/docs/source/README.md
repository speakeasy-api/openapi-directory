# source

### Available Operations

* [incrementalRefreshSource](#incrementalrefreshsource) - Incremental Refresh an existing Source
* [listSourceServiceInstances](#listsourceserviceinstances) - List ServiceInstances for Source
* [listSourceServiceInventories](#listsourceserviceinventories) - List ServiceInventories for Source
* [listSourceServiceOfferingNodes](#listsourceserviceofferingnodes) - List ServiceOfferingNodes for Source
* [listSourceServiceOfferings](#listsourceserviceofferings) - List ServiceOfferings for Source
* [listSourceServicePlans](#listsourceserviceplans) - List ServicePlans for Source
* [listSourceTasks](#listsourcetasks) - List Tasks for Source
* [listSources](#listsources) - List Sources
* [refreshSource](#refreshsource) -  Refresh an existing Source
* [showSource](#showsource) - Show an existing Source

## incrementalRefreshSource

Incremental Refresh a source object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IncrementalRefreshSourceRequest;
import org.openapis.openapi.models.operations.IncrementalRefreshSourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto", "magnam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            IncrementalRefreshSourceRequest req = new IncrementalRefreshSourceRequest("et");            

            IncrementalRefreshSourceResponse res = sdk.source.incrementalRefreshSource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSourceServiceInstances

Returns an array of ServiceInstance objects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSourceServiceInstancesRequest;
import org.openapis.openapi.models.operations.ListSourceServiceInstancesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi", "ullam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ListSourceServiceInstancesRequest req = new ListSourceServiceInstancesRequest("provident") {{
                filter = new java.util.HashMap<String, Object>() {{
                    put("sint", "accusantium");
                    put("mollitia", "reiciendis");
                    put("mollitia", "ad");
                }};
                limit = 431418L;
                offset = 221262L;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("odit", "nemo");
                    put("quasi", "iure");
                    put("doloribus", "debitis");
                    put("eius", "maxime");
                }};
            }};            

            ListSourceServiceInstancesResponse res = sdk.source.listSourceServiceInstances(req);

            if (res.serviceInstancesCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSourceServiceInventories

Returns an array of ServiceInventory objects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSourceServiceInventoriesRequest;
import org.openapis.openapi.models.operations.ListSourceServiceInventoriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti", "facilis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ListSourceServiceInventoriesRequest req = new ListSourceServiceInventoriesRequest("in") {{
                filter = new java.util.HashMap<String, Object>() {{
                    put("architecto", "repudiandae");
                }};
                limit = 352312L;
                offset = 714242L;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("repellat", "quibusdam");
                    put("sed", "saepe");
                }};
            }};            

            ListSourceServiceInventoriesResponse res = sdk.source.listSourceServiceInventories(req);

            if (res.serviceInventoriesCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSourceServiceOfferingNodes

Returns an array of ServiceOfferingNode objects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSourceServiceOfferingNodesRequest;
import org.openapis.openapi.models.operations.ListSourceServiceOfferingNodesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur", "accusantium") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ListSourceServiceOfferingNodesRequest req = new ListSourceServiceOfferingNodesRequest("consequuntur") {{
                filter = new java.util.HashMap<String, Object>() {{
                    put("natus", "magni");
                    put("sunt", "quo");
                    put("illum", "pariatur");
                }};
                limit = 807319L;
                offset = 411397L;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("odit", "ea");
                    put("accusantium", "ab");
                    put("maiores", "quidem");
                }};
            }};            

            ListSourceServiceOfferingNodesResponse res = sdk.source.listSourceServiceOfferingNodes(req);

            if (res.serviceOfferingNodesCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSourceServiceOfferings

Returns an array of ServiceOffering objects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSourceServiceOfferingsRequest;
import org.openapis.openapi.models.operations.ListSourceServiceOfferingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam", "voluptate") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ListSourceServiceOfferingsRequest req = new ListSourceServiceOfferingsRequest("autem") {{
                filter = new java.util.HashMap<String, Object>() {{
                    put("eaque", "pariatur");
                    put("nemo", "voluptatibus");
                    put("perferendis", "fugiat");
                }};
                limit = 230742L;
                offset = 11714L;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("corporis", "hic");
                    put("libero", "nobis");
                    put("dolores", "quis");
                    put("totam", "dignissimos");
                }};
            }};            

            ListSourceServiceOfferingsResponse res = sdk.source.listSourceServiceOfferings(req);

            if (res.serviceOfferingsCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSourceServicePlans

Returns an array of ServicePlan objects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSourceServicePlansRequest;
import org.openapis.openapi.models.operations.ListSourceServicePlansResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque", "quis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ListSourceServicePlansRequest req = new ListSourceServicePlansRequest("nesciunt") {{
                filter = new java.util.HashMap<String, Object>() {{
                    put("perferendis", "dolores");
                }};
                limit = 793698L;
                offset = 463451L;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("vero", "nostrum");
                }};
            }};            

            ListSourceServicePlansResponse res = sdk.source.listSourceServicePlans(req);

            if (res.servicePlansCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSourceTasks

Returns an array of Task objects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSourceTasksRequest;
import org.openapis.openapi.models.operations.ListSourceTasksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic", "recusandae") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ListSourceTasksRequest req = new ListSourceTasksRequest("omnis") {{
                filter = new java.util.HashMap<String, Object>() {{
                    put("perspiciatis", "voluptatem");
                    put("porro", "consequuntur");
                    put("blanditiis", "error");
                }};
                limit = 50370L;
                offset = 577229L;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("adipisci", "asperiores");
                    put("earum", "modi");
                    put("iste", "dolorum");
                }};
            }};            

            ListSourceTasksResponse res = sdk.source.listSourceTasks(req);

            if (res.tasksCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSources

Returns an array of Source objects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSourcesRequest;
import org.openapis.openapi.models.operations.ListSourcesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti", "pariatur") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ListSourcesRequest req = new ListSourcesRequest() {{
                filter = new java.util.HashMap<String, Object>() {{
                    put("nobis", "libero");
                    put("delectus", "quaerat");
                    put("quos", "aliquid");
                }};
                limit = 212390L;
                offset = 209843L;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("qui", "ipsum");
                }};
            }};            

            ListSourcesResponse res = sdk.source.listSources(req);

            if (res.sourcesCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## refreshSource

Refresh a source object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RefreshSourceRequest;
import org.openapis.openapi.models.operations.RefreshSourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic", "excepturi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            RefreshSourceRequest req = new RefreshSourceRequest("cum");            

            RefreshSourceResponse res = sdk.source.refreshSource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## showSource

Returns a Source object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ShowSourceRequest;
import org.openapis.openapi.models.operations.ShowSourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate", "dignissimos") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ShowSourceRequest req = new ShowSourceRequest("reiciendis");            

            ShowSourceResponse res = sdk.source.showSource(req);

            if (res.source != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
