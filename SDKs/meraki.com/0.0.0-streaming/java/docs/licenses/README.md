# licenses

### Available Operations

* [assignOrganizationLicensesSeats](#assignorganizationlicensesseats) - Assign SM seats to a network
* [getOrganizationLicense](#getorganizationlicense) - Display a license
* [getOrganizationLicenseState](#getorganizationlicensestate) - Return an overview of the license state for an organization
* [getOrganizationLicenses](#getorganizationlicenses) - List the licenses for an organization
* [moveOrganizationLicensesSeats](#moveorganizationlicensesseats) - Move SM seats to another organization
* [renewOrganizationLicensesSeats](#reneworganizationlicensesseats) - Renew SM seats of a license

## assignOrganizationLicensesSeats

Assign SM seats to a network. This will increase the managed SM device limit of the network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssignOrganizationLicensesSeatsRequest;
import org.openapis.openapi.models.operations.AssignOrganizationLicensesSeatsRequestBody;
import org.openapis.openapi.models.operations.AssignOrganizationLicensesSeatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssignOrganizationLicensesSeatsRequest req = new AssignOrganizationLicensesSeatsRequest(                new AssignOrganizationLicensesSeatsRequestBody("adipisci", "cumque", 160538L);, "consequatur");            

            AssignOrganizationLicensesSeatsResponse res = sdk.licenses.assignOrganizationLicensesSeats(req);

            if (res.assignOrganizationLicensesSeats200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationLicense

Display a license

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationLicenseRequest;
import org.openapis.openapi.models.operations.GetOrganizationLicenseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationLicenseRequest req = new GetOrganizationLicenseRequest("quaerat", "sapiente");            

            GetOrganizationLicenseResponse res = sdk.licenses.getOrganizationLicense(req);

            if (res.getOrganizationLicense200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationLicenseState

Return an overview of the license state for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationLicenseStateRequest;
import org.openapis.openapi.models.operations.GetOrganizationLicenseStateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationLicenseStateRequest req = new GetOrganizationLicenseStateRequest("esse");            

            GetOrganizationLicenseStateResponse res = sdk.licenses.getOrganizationLicenseState(req);

            if (res.getOrganizationLicenseState200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationLicenses

List the licenses for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationLicensesRequest;
import org.openapis.openapi.models.operations.GetOrganizationLicensesResponse;
import org.openapis.openapi.models.operations.GetOrganizationLicensesStateEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationLicensesRequest req = new GetOrganizationLicensesRequest("provident") {{
                deviceSerial = "a";
                endingBefore = "nulla";
                networkId = "quas";
                perPage = 457223L;
                startingAfter = "quasi";
                state = GetOrganizationLicensesStateEnum.UNUSED_ACTIVE;
            }};            

            GetOrganizationLicensesResponse res = sdk.licenses.getOrganizationLicenses(req);

            if (res.getOrganizationLicenses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## moveOrganizationLicensesSeats

Move SM seats to another organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MoveOrganizationLicensesSeatsRequest;
import org.openapis.openapi.models.operations.MoveOrganizationLicensesSeatsRequestBody;
import org.openapis.openapi.models.operations.MoveOrganizationLicensesSeatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            MoveOrganizationLicensesSeatsRequest req = new MoveOrganizationLicensesSeatsRequest(                new MoveOrganizationLicensesSeatsRequestBody("sint", "pariatur", 820767L);, "quia");            

            MoveOrganizationLicensesSeatsResponse res = sdk.licenses.moveOrganizationLicensesSeats(req);

            if (res.moveOrganizationLicensesSeats200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## renewOrganizationLicensesSeats

Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RenewOrganizationLicensesSeatsRequest;
import org.openapis.openapi.models.operations.RenewOrganizationLicensesSeatsRequestBody;
import org.openapis.openapi.models.operations.RenewOrganizationLicensesSeatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eveniet") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RenewOrganizationLicensesSeatsRequest req = new RenewOrganizationLicensesSeatsRequest(                new RenewOrganizationLicensesSeatsRequestBody("asperiores", "facere");, "veritatis");            

            RenewOrganizationLicensesSeatsResponse res = sdk.licenses.renewOrganizationLicensesSeats(req);

            if (res.renewOrganizationLicensesSeats200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
