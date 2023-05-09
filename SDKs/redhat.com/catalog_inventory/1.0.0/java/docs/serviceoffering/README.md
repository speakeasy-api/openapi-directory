# serviceOffering

### Available Operations

* [appliedInventoriesTagsForServiceOffering](#appliedinventoriestagsforserviceoffering) - Invokes computing of ServiceInventories tags for given ServiceOffering
* [listServiceOfferingServiceInstances](#listserviceofferingserviceinstances) - List ServiceInstances for ServiceOffering
* [listServiceOfferingServiceOfferingNodes](#listserviceofferingserviceofferingnodes) - List ServiceOfferingNodes for ServiceOffering
* [listServiceOfferingServicePlans](#listserviceofferingserviceplans) - List ServicePlans for ServiceOffering
* [listServiceOfferings](#listserviceofferings) - List ServiceOfferings
* [orderServiceOffering](#orderserviceoffering) - Order an existing ServiceOffering
* [showServiceOffering](#showserviceoffering) - Show an existing ServiceOffering

## appliedInventoriesTagsForServiceOffering

Returns an array of inventories tags

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppliedInventoriesTagsForServiceOfferingRequest;
import org.openapis.openapi.models.operations.AppliedInventoriesTagsForServiceOfferingResponse;
import org.openapis.openapi.models.shared.AppliedInventoriesParametersServicePlan;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia", "quis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            AppliedInventoriesTagsForServiceOfferingRequest req = new AppliedInventoriesTagsForServiceOfferingRequest(                new AppliedInventoriesParametersServicePlan() {{
                                serviceParameters = new java.util.HashMap<String, Object>() {{
                                    put("laborum", "animi");
                                }};
                            }};, "enim");            

            AppliedInventoriesTagsForServiceOfferingResponse res = sdk.serviceOffering.appliedInventoriesTagsForServiceOffering(req);

            if (res.tags != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServiceOfferingServiceInstances

Returns an array of ServiceInstance objects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceOfferingServiceInstancesRequest;
import org.openapis.openapi.models.operations.ListServiceOfferingServiceInstancesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit", "quo") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ListServiceOfferingServiceInstancesRequest req = new ListServiceOfferingServiceInstancesRequest("sequi") {{
                filter = new java.util.HashMap<String, Object>() {{
                    put("ipsam", "id");
                    put("possimus", "aut");
                    put("quasi", "error");
                    put("temporibus", "laborum");
                }};
                limit = 96098L;
                offset = 971945L;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("vero", "nihil");
                    put("praesentium", "voluptatibus");
                    put("ipsa", "omnis");
                    put("voluptate", "cum");
                }};
            }};            

            ListServiceOfferingServiceInstancesResponse res = sdk.serviceOffering.listServiceOfferingServiceInstances(req);

            if (res.serviceInstancesCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServiceOfferingServiceOfferingNodes

Returns an array of ServiceOfferingNode objects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceOfferingServiceOfferingNodesRequest;
import org.openapis.openapi.models.operations.ListServiceOfferingServiceOfferingNodesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis", "doloremque") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ListServiceOfferingServiceOfferingNodesRequest req = new ListServiceOfferingServiceOfferingNodesRequest("reprehenderit") {{
                filter = new java.util.HashMap<String, Object>() {{
                    put("maiores", "dicta");
                    put("corporis", "dolore");
                }};
                limit = 480894L;
                offset = 118727L;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("enim", "accusamus");
                    put("commodi", "repudiandae");
                    put("quae", "ipsum");
                }};
            }};            

            ListServiceOfferingServiceOfferingNodesResponse res = sdk.serviceOffering.listServiceOfferingServiceOfferingNodes(req);

            if (res.serviceOfferingNodesCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServiceOfferingServicePlans

Returns an array of ServicePlan objects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceOfferingServicePlansRequest;
import org.openapis.openapi.models.operations.ListServiceOfferingServicePlansResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem", "molestias") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ListServiceOfferingServicePlansRequest req = new ListServiceOfferingServicePlansRequest("excepturi") {{
                filter = new java.util.HashMap<String, Object>() {{
                    put("modi", "praesentium");
                    put("rem", "voluptates");
                    put("quasi", "repudiandae");
                    put("sint", "veritatis");
                }};
                limit = 929297L;
                offset = 277718L;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("consequatur", "est");
                    put("quibusdam", "explicabo");
                }};
            }};            

            ListServiceOfferingServicePlansResponse res = sdk.serviceOffering.listServiceOfferingServicePlans(req);

            if (res.servicePlansCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServiceOfferings

Returns an array of ServiceOffering objects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceOfferingsRequest;
import org.openapis.openapi.models.operations.ListServiceOfferingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt", "distinctio") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ListServiceOfferingsRequest req = new ListServiceOfferingsRequest() {{
                filter = new java.util.HashMap<String, Object>() {{
                    put("labore", "modi");
                    put("qui", "aliquid");
                    put("cupiditate", "quos");
                    put("perferendis", "magni");
                }};
                limit = 828940L;
                offset = 369808L;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("fugit", "dolorum");
                }};
            }};            

            ListServiceOfferingsResponse res = sdk.serviceOffering.listServiceOfferings(req);

            if (res.serviceOfferingsCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderServiceOffering

Returns a Task id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderServiceOfferingRequest;
import org.openapis.openapi.models.operations.OrderServiceOfferingResponse;
import org.openapis.openapi.models.shared.OrderParametersServiceOfferingInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi", "tempora") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            OrderServiceOfferingRequest req = new OrderServiceOfferingRequest(                new OrderParametersServiceOfferingInput() {{
                                providerControlParameters = new java.util.HashMap<String, Object>() {{
                                    put("tempore", "labore");
                                    put("delectus", "eum");
                                    put("non", "eligendi");
                                }};
                                serviceParameters = new java.util.HashMap<String, Object>() {{
                                    put("aliquid", "provident");
                                    put("necessitatibus", "sint");
                                    put("officia", "dolor");
                                }};
                            }};, "debitis");            

            OrderServiceOfferingResponse res = sdk.serviceOffering.orderServiceOffering(req);

            if (res.orderServiceOffering200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## showServiceOffering

Returns a ServiceOffering object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ShowServiceOfferingRequest;
import org.openapis.openapi.models.operations.ShowServiceOfferingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a", "dolorum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ShowServiceOfferingRequest req = new ShowServiceOfferingRequest("in");            

            ShowServiceOfferingResponse res = sdk.serviceOffering.showServiceOffering(req);

            if (res.serviceOffering != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
