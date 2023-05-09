# geolocation

### Available Operations

* [geocodeAddress](#geocodeaddress) - Geocode Address
* [geocodeReverse](#geocodereverse) - Geocode Reverse
* [ipInfo](#ipinfo) - IP Info

## geocodeAddress

Geocode an address, partial address or just the name of a place

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GeocodeAddressRequest;
import org.openapis.openapi.models.operations.GeocodeAddressResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at", "at") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    userId = "YOUR_API_KEY_HERE";
                }})
                .build();

            GeocodeAddressRequest req = new GeocodeAddressRequest() {{
                address = "478 Jovan Shore";
                city = "Carrollcester";
                countryCode = "NA";
                county = "occaecati";
                fuzzySearch = false;
                houseNumber = "fugit";
                languageCode = "deleniti";
                postalCode = "75144-2177";
                state = "esse";
                street = "51036 Leora Extensions";
            }};            

            GeocodeAddressResponse res = sdk.geolocation.geocodeAddress(req);

            if (res.geocodeAddressResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## geocodeReverse

Convert a geographic coordinate (latitude and longitude) into a real world address

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GeocodeReverseRequest;
import org.openapis.openapi.models.operations.GeocodeReverseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus", "laboriosam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    userId = "YOUR_API_KEY_HERE";
                }})
                .build();

            GeocodeReverseRequest req = new GeocodeReverseRequest("hic", "saepe") {{
                languageCode = "fuga";
                zoom = "in";
            }};            

            GeocodeReverseResponse res = sdk.geolocation.geocodeReverse(req);

            if (res.geocodeReverseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ipInfo

Get location information about an IP address and do reverse DNS (PTR) lookups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IPInfoRequest;
import org.openapis.openapi.models.operations.IPInfoResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis", "iste") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    userId = "YOUR_API_KEY_HERE";
                }})
                .build();

            IPInfoRequest req = new IPInfoRequest("iure") {{
                reverseLookup = false;
            }};            

            IPInfoResponse res = sdk.geolocation.ipInfo(req);

            if (res.ipInfoResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
