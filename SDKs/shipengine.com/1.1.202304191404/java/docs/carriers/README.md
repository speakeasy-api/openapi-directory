# carriers

## Overview

carriers


### Available Operations

* [addFundsToCarrier](#addfundstocarrier) - Add Funds To Carrier
* [getCarrierById](#getcarrierbyid) - Get Carrier By ID
* [getCarrierOptions](#getcarrieroptions) - Get Carrier Options
* [listCarrierPackageTypes](#listcarrierpackagetypes) - List Carrier Package Types
* [listCarrierServices](#listcarrierservices) - List Carrier Services
* [listCarriers](#listcarriers) - List Carriers

## addFundsToCarrier

Add Funds To A Carrier

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddFundsToCarrierRequest;
import org.openapis.openapi.models.operations.AddFundsToCarrierResponse;
import org.openapis.openapi.models.shared.AddFundsToCarrierRequestBody;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddFundsToCarrierRequest req = new AddFundsToCarrierRequest(                new AddFundsToCarrierRequestBody(6531.4, "laborum");, "se-28529731");            

            AddFundsToCarrierResponse res = sdk.carriers.addFundsToCarrier(req);

            if (res.addFundsToCarrierResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCarrierById

Retrive carrier info by ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCarrierByIdRequest;
import org.openapis.openapi.models.operations.GetCarrierByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCarrierByIdRequest req = new GetCarrierByIdRequest("se-28529731");            

            GetCarrierByIdResponse res = sdk.carriers.getCarrierById(req);

            if (res.getCarrierByIdResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCarrierOptions

Get a list of the options available for the carrier

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCarrierOptionsRequest;
import org.openapis.openapi.models.operations.GetCarrierOptionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCarrierOptionsRequest req = new GetCarrierOptionsRequest("se-28529731");            

            GetCarrierOptionsResponse res = sdk.carriers.getCarrierOptions(req);

            if (res.getCarrierOptionsResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCarrierPackageTypes

List the package types associated with the carrier

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCarrierPackageTypesRequest;
import org.openapis.openapi.models.operations.ListCarrierPackageTypesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCarrierPackageTypesRequest req = new ListCarrierPackageTypesRequest("se-28529731");            

            ListCarrierPackageTypesResponse res = sdk.carriers.listCarrierPackageTypes(req);

            if (res.listCarrierPackageTypesResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCarrierServices

List the services associated with the carrier ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCarrierServicesRequest;
import org.openapis.openapi.models.operations.ListCarrierServicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCarrierServicesRequest req = new ListCarrierServicesRequest("se-28529731");            

            ListCarrierServicesResponse res = sdk.carriers.listCarrierServices(req);

            if (res.listCarrierServicesResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCarriers

List all carriers that have been added to this account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCarriersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCarriersResponse res = sdk.carriers.listCarriers();

            if (res.getCarriersResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
