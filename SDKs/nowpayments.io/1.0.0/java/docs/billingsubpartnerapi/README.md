# billingSubPartnerAPI

## Overview

NOWPayments allows you to create sub-partner accounts for your users, enabling full-fledged crypto billing solution.

### Available Operations

* [getAllTransfers](#getalltransfers) - Get all transfers
* [getSubPartnerBalance](#getsubpartnerbalance) - Get sub-partner balance
* [getSubPartners](#getsubpartners) - Get sub-partners
* [getTransfer](#gettransfer) - Get transfer

## getAllTransfers

Returns the entire list of transfers created by your sub-partners.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllTransfersRequest;
import org.openapis.openapi.models.operations.GetAllTransfersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllTransfersRequest req = new GetAllTransfersRequest() {{
                id = "111";
                limit = "10";
                offset = "0";
                order = "ASC";
                status = "CREATED";
            }};            

            GetAllTransfersResponse res = sdk.billingSubPartnerAPI.getAllTransfers(req);

            if (res.getAllTransfers200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubPartnerBalance

This request can be made only from a whitelisted IP.  
If IP whitelisting is disabled, this request can be made by any user that has an API key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubPartnerBalanceRequest;
import org.openapis.openapi.models.operations.GetSubPartnerBalanceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSubPartnerBalanceRequest req = new GetSubPartnerBalanceRequest("corrupti") {{
                xApiKey = "{{your_api_key}}";
            }};            

            GetSubPartnerBalanceResponse res = sdk.billingSubPartnerAPI.getSubPartnerBalance(req);

            if (res.getSubPartnerBalance200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubPartners

This method returns the entire list of your sub-partners.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubPartnersRequest;
import org.openapis.openapi.models.operations.GetSubPartnersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSubPartnersRequest req = new GetSubPartnersRequest() {{
                id = "111";
                limit = "10";
                offset = "0";
                order = "DESC";
            }};            

            GetSubPartnersResponse res = sdk.billingSubPartnerAPI.getSubPartners(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTransfer

Get the actual information about the transfer. You need to provide the transfer ID in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransferRequest;
import org.openapis.openapi.models.operations.GetTransferResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTransferRequest req = new GetTransferRequest("provident");            

            GetTransferResponse res = sdk.billingSubPartnerAPI.getTransfer(req);

            if (res.getTransfer200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
