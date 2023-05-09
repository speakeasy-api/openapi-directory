# v1

### Available Operations

* [createTicket](#createticket) - Create a new abuse ticket
* [getTicketInfo](#getticketinfo) - Return the abuse ticket data for a given ticket id
* [getTickets](#gettickets) - List all abuse tickets ids that match user provided filters

## createTicket

Create a new abuse ticket

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTicketResponse;
import org.openapis.openapi.models.shared.AbuseTicketCreate;
import org.openapis.openapi.models.shared.AbuseTicketCreateTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.AbuseTicketCreate req = new AbuseTicketCreate() {{
                info = "corrupti";
                infoUrl = "illum";
                intentional = false;
                proxy = "vel";
                source = "error";
                target = "deserunt";
                type = AbuseTicketCreateTypeEnum.FRAUD_WIRE;
            }};            

            CreateTicketResponse res = sdk.v1.createTicket(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTicketInfo

Return the abuse ticket data for a given ticket id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTicketInfoRequest;
import org.openapis.openapi.models.operations.GetTicketInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTicketInfoRequest req = new GetTicketInfoRequest("iure");            

            GetTicketInfoResponse res = sdk.v1.getTicketInfo(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTickets

List all abuse tickets ids that match user provided filters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTicketsRequest;
import org.openapis.openapi.models.operations.GetTicketsResponse;
import org.openapis.openapi.models.operations.GetTicketsTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTicketsRequest req = new GetTicketsRequest() {{
                closed = false;
                createdEnd = "magnam";
                createdStart = "debitis";
                limit = 56713L;
                offset = 963663L;
                sourceDomainOrIp = "tempora";
                target = "suscipit";
                type = GetTicketsTypeEnum.IP_BLOCK;
            }};            

            GetTicketsResponse res = sdk.v1.getTickets(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
