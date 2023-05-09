# referenceData

### Available Operations

* [referencesAircraftByAircraftCodeGet](#referencesaircraftbyaircraftcodeget) - Aircraft
* [referencesAirlinesByAirlineCodeGet](#referencesairlinesbyairlinecodeget) - Airlines
* [referencesAirportsByAirportCodeGet](#referencesairportsbyairportcodeget) - Airports
* [referencesAirportsNearestByLatitudeAndLongitudeGet](#referencesairportsnearestbylatitudeandlongitudeget) - Nearest Airports
* [referencesCitiesByCityCodeGet](#referencescitiesbycitycodeget) - Cities
* [referencesCountriesByCountryCodeGet](#referencescountriesbycountrycodeget) - Countries

## referencesAircraftByAircraftCodeGet

List all aircraft types or one specific aircraft type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReferencesAircraftByAircraftCodeGetRequest;
import org.openapis.openapi.models.operations.ReferencesAircraftByAircraftCodeGetResponse;
import org.openapis.openapi.models.operations.ReferencesAircraftByAircraftCodeGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReferencesAircraftByAircraftCodeGetRequest req = new ReferencesAircraftByAircraftCodeGetRequest("qui", "impedit") {{
                limit = "cum";
                offset = "esse";
            }};            

            ReferencesAircraftByAircraftCodeGetResponse res = sdk.referenceData.referencesAircraftByAircraftCodeGet(req, new ReferencesAircraftByAircraftCodeGetSecurity("ipsum") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.referencesAircraftByAircraftCodeGet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## referencesAirlinesByAirlineCodeGet

List all airlines or one specific airline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReferencesAirlinesByAirlineCodeGetRequest;
import org.openapis.openapi.models.operations.ReferencesAirlinesByAirlineCodeGetResponse;
import org.openapis.openapi.models.operations.ReferencesAirlinesByAirlineCodeGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReferencesAirlinesByAirlineCodeGetRequest req = new ReferencesAirlinesByAirlineCodeGetRequest("excepturi", "aspernatur") {{
                limit = "perferendis";
                offset = "ad";
            }};            

            ReferencesAirlinesByAirlineCodeGetResponse res = sdk.referenceData.referencesAirlinesByAirlineCodeGet(req, new ReferencesAirlinesByAirlineCodeGetSecurity("natus") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.referencesAirlinesByAirlineCodeGet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## referencesAirportsByAirportCodeGet

List all airports or one specific airport. All airports response is very large. It is possible to request the response in a specific language.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReferencesAirportsByAirportCodeGetRequest;
import org.openapis.openapi.models.operations.ReferencesAirportsByAirportCodeGetResponse;
import org.openapis.openapi.models.operations.ReferencesAirportsByAirportCodeGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReferencesAirportsByAirportCodeGetRequest req = new ReferencesAirportsByAirportCodeGetRequest("sed", "iste") {{
                lHoperated = false;
                lang = "dolor";
                limit = "natus";
                offset = "laboriosam";
            }};            

            ReferencesAirportsByAirportCodeGetResponse res = sdk.referenceData.referencesAirportsByAirportCodeGet(req, new ReferencesAirportsByAirportCodeGetSecurity("hic") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.airportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## referencesAirportsNearestByLatitudeAndLongitudeGet

List the 5 closest airports to the given latitude and longitude, irrespective of the radius of the reference point.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest;
import org.openapis.openapi.models.operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse;
import org.openapis.openapi.models.operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest req = new ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest("saepe", 681820, 449950) {{
                lang = "corporis";
            }};            

            ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse res = sdk.referenceData.referencesAirportsNearestByLatitudeAndLongitudeGet(req, new ReferencesAirportsNearestByLatitudeAndLongitudeGetSecurity("iste") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.referencesAirportsNearestByLatitudeAndLongitudeGet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## referencesCitiesByCityCodeGet

List all cities or one specific city. It is possible to request the response in a specific language.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReferencesCitiesByCityCodeGetRequest;
import org.openapis.openapi.models.operations.ReferencesCitiesByCityCodeGetResponse;
import org.openapis.openapi.models.operations.ReferencesCitiesByCityCodeGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReferencesCitiesByCityCodeGetRequest req = new ReferencesCitiesByCityCodeGetRequest("iure", "saepe") {{
                lang = "quidem";
                limit = "architecto";
                offset = "ipsa";
            }};            

            ReferencesCitiesByCityCodeGetResponse res = sdk.referenceData.referencesCitiesByCityCodeGet(req, new ReferencesCitiesByCityCodeGetSecurity("reiciendis") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.referencesCitiesByCityCodeGet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## referencesCountriesByCountryCodeGet

List all countries or one specific country. It is possible to request the response in a specific language.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReferencesCountriesByCountryCodeGetRequest;
import org.openapis.openapi.models.operations.ReferencesCountriesByCountryCodeGetResponse;
import org.openapis.openapi.models.operations.ReferencesCountriesByCountryCodeGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReferencesCountriesByCountryCodeGetRequest req = new ReferencesCountriesByCountryCodeGetRequest("est", "mollitia") {{
                lang = "laborum";
                limit = "dolores";
                offset = "dolorem";
            }};            

            ReferencesCountriesByCountryCodeGetResponse res = sdk.referenceData.referencesCountriesByCountryCodeGet(req, new ReferencesCountriesByCountryCodeGetSecurity("corporis") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.referencesCountriesByCountryCodeGet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
