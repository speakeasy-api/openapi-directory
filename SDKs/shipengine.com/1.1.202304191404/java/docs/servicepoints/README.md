# servicePoints

### Available Operations

* [servicePointsGetById](#servicepointsgetbyid) - Get Service Point By ID
* [servicePointsList](#servicepointslist) - List Service Points

## servicePointsGetById

Returns a carrier service point by using the service_point_id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicePointsGetByIdRequest;
import org.openapis.openapi.models.operations.ServicePointsGetByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ServicePointsGetByIdRequest req = new ServicePointsGetByIdRequest("quos", "aliquid", "dolorem");            

            ServicePointsGetByIdResponse res = sdk.servicePoints.servicePointsGetById(req);

            if (res.getServicePointByIdResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicePointsList

List carrier service points by location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicePointsListResponse;
import org.openapis.openapi.models.shared.GetServicePointsRequestBody;
import org.openapis.openapi.models.shared.GetServicePointsRequestBodyAddress;
import org.openapis.openapi.models.shared.GetServicePointsRequestBodyProviders;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new GetServicePointsRequestBody(                new org.openapis.openapi.models.shared.GetServicePointsRequestBodyProviders[]{{
                                add(new GetServicePointsRequestBodyProviders() {{
                                    carrierId = "se-123456";
                                    serviceCode = new String[]{{
                                        add("chronoclassic"),
                                        add("chronoclassic"),
                                    }};
                                }}),
                                add(new GetServicePointsRequestBodyProviders() {{
                                    carrierId = "se-123456";
                                    serviceCode = new String[]{{
                                        add("chronoclassic"),
                                        add("chronoclassic"),
                                        add("chronoclassic"),
                                    }};
                                }}),
                                add(new GetServicePointsRequestBodyProviders() {{
                                    carrierId = "se-123456";
                                    serviceCode = new String[]{{
                                        add("chronoclassic"),
                                    }};
                                }}),
                                add(new GetServicePointsRequestBodyProviders() {{
                                    carrierId = "se-123456";
                                    serviceCode = new String[]{{
                                        add("chronoclassic"),
                                        add("chronoclassic"),
                                        add("chronoclassic"),
                                    }};
                                }}),
                            }}) {{
                address = new GetServicePointsRequestBodyAddress("odio") {{
                    addressLine1 = "dolor";
                    addressLine2 = "qui";
                    addressLine3 = "ipsum";
                    cityLocality = "hic";
                    countryCode = "MG";
                    postalCode = "44926-2000";
                    stateProvince = "iure";
                }};
                addressQuery = "177A Bleecker Street New York";
                lat = 48.874518928233094;
                long_ = 2.3591775711639404;
                maxResults = 25;
                providers = new org.openapis.openapi.models.shared.GetServicePointsRequestBodyProviders[]{{
                    add(new GetServicePointsRequestBodyProviders() {{
                        carrierId = "se-123456";
                        serviceCode = new String[]{{
                            add("chronoclassic"),
                            add("chronoclassic"),
                            add("chronoclassic"),
                            add("chronoclassic"),
                        }};
                    }}),
                    add(new GetServicePointsRequestBodyProviders() {{
                        carrierId = "se-123456";
                        serviceCode = new String[]{{
                            add("chronoclassic"),
                            add("chronoclassic"),
                            add("chronoclassic"),
                        }};
                    }}),
                }};
                radius = 500;
            }}            

            ServicePointsListResponse res = sdk.servicePoints.servicePointsList(req);

            if (res.listServicePointsResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
