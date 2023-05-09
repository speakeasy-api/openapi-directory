# partners

### Available Operations

* [getPartnersStoresJson](#getpartnersstoresjson) - Retrieve statistics.
* [getStoreCheckStatusJson](#getstorecheckstatusjson) - Retrive store creation status.
* [postStoreCreateJson](#poststorecreatejson) - Create a Partnered Store

## getPartnersStoresJson

Retrieve statistics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPartnersStoresJsonRequest;
import org.openapis.openapi.models.operations.GetPartnersStoresJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPartnersStoresJsonRequest req = new GetPartnersStoresJsonRequest("natus", "impedit", "aut", "voluptatibus") {{
                page = 347233L;
            }};            

            GetPartnersStoresJsonResponse res = sdk.partners.getPartnersStoresJson(req);

            if (res.types != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStoreCheckStatusJson

Retrive store creation status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStoreCheckStatusJsonRequest;
import org.openapis.openapi.models.operations.GetStoreCheckStatusJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStoreCheckStatusJsonRequest req = new GetStoreCheckStatusJsonRequest("nulla", "fugit", "porro") {{
                locale = "maiores";
            }};            

            GetStoreCheckStatusJsonResponse res = sdk.partners.getStoreCheckStatusJson(req);

            if (res.getStoreCheckStatusJSON200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postStoreCreateJson

Create a Partnered Store

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostStoreCreateJsonRequest;
import org.openapis.openapi.models.operations.PostStoreCreateJsonResponse;
import org.openapis.openapi.models.shared.PartnerStoreCreate;
import org.openapis.openapi.models.shared.PartnerStoreCreatePlanNameEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostStoreCreateJsonRequest req = new PostStoreCreateJsonRequest(                new PartnerStoreCreate() {{
                                aff = "doloribus";
                                email = "Nick63@yahoo.com";
                                locale = "tempora";
                                password = "ipsam";
                                planName = PartnerStoreCreatePlanNameEnum.PLUS;
                                rejectDuplicates = false;
                                storeName = "aspernatur";
                            }};, "vel", "possimus");            

            PostStoreCreateJsonResponse res = sdk.partners.postStoreCreateJson(req);

            if (res.partnerStoreCode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
