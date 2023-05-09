# offers

### Available Operations

* [allFares](#allfares) - All Fares
* [bestFares](#bestfares) - Best Fares
* [deepLinks](#deeplinks) - Deep Links
* [fares](#fares) - Fares
* [faresSubscriptions](#faressubscriptions) - Fares Subscriptions
* [lhDeepLinksFFP](#lhdeeplinksffp) - LH Deep Links - FFP
* [lhDeepLinksITCO](#lhdeeplinksitco) - LH Deep Links - ITCO
* [lowestFares](#lowestfares) - Lowest Fares
* [ondRoute](#ondroute) - OND Route
* [ondStatus](#ondstatus) - OND Status
* [topOND](#topond) - Top OND

## allFares

Retrieves all available fares for a specific Origin & Destination pair on a given date. Available fares are: One-way and Return for 4U. Return only for OS

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllFaresRequest;
import org.openapis.openapi.models.operations.AllFaresResponse;
import org.openapis.openapi.models.operations.AllFaresSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AllFaresRequest req = new AllFaresRequest("corrupti", "illum", "vel", "error") {{
                accept = "deserunt";
                cabinClass = "suscipit";
                fareFamily = "iure";
                returnDate = "magnam";
                trackingid = "debitis";
                travelers = "ipsa";
            }};            

            AllFaresResponse res = sdk.offers.allFares(req, new AllFaresSecurity("delectus") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.allFares200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bestFares

Retrieve best fares for the requested journey across multiple days or multiple months.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BestFaresRequest;
import org.openapis.openapi.models.operations.BestFaresResponse;
import org.openapis.openapi.models.operations.BestFaresSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BestFaresRequest req = new BestFaresRequest("tempora", "suscipit", "molestiae", "minus", "placeat", "voluptatum", "iusto") {{
                cabinClass = "excepturi";
                country = "Hong Kong";
                fareFamily = "recusandae";
                trackingid = "temporibus";
            }};            

            BestFaresResponse res = sdk.offers.bestFares(req, new BestFaresSecurity("ab") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bestFares200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deepLinks

Returns valid deep links for the provided input parameters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeepLinksRequest;
import org.openapis.openapi.models.operations.DeepLinksResponse;
import org.openapis.openapi.models.operations.DeepLinksSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeepLinksRequest req = new DeepLinksRequest("quis", "veritatis", "deserunt", "perferendis", "ipsam") {{
                cabinClass = "repellendus";
                destination = "sapiente";
                destinationName = "quo";
                encryptionKey = "odit";
                fare = "at";
                fareCurrency = "at";
                netFare = "maiores";
                origin = "molestiae";
                originName = "quod";
                outboundSegments = "quod";
                partnerid = "esse";
                returnDate = "totam";
                returnSegments = "porro";
                travelDate = "dolorum";
                travelers = "dicta";
            }};            

            DeepLinksResponse res = sdk.offers.deepLinks(req, new DeepLinksSecurity("nam") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.deepLinks200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fares

Retrieve all available fares per fare family for a specific Origin & Destination on a given date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FaresRequest;
import org.openapis.openapi.models.operations.FaresResponse;
import org.openapis.openapi.models.operations.FaresSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FaresRequest req = new FaresRequest("officia", "occaecati", "fugit", "deleniti") {{
                fareTypes = "hic";
                travelers = "optio";
            }};            

            FaresResponse res = sdk.offers.fares(req, new FaresSecurity("totam") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.fares200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## faresSubscriptions

Create a subscription for best price O&D. Receive regular updates on lowest fares

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FaresSubscriptionsRequest;
import org.openapis.openapi.models.operations.FaresSubscriptionsResponse;
import org.openapis.openapi.models.operations.FaresSubscriptionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FaresSubscriptionsRequest req = new FaresSubscriptionsRequest("beatae", "commodi", "molestiae", "modi", "qui", "impedit", "cum") {{
                country = "Kenya";
                trackingid = "ipsum";
            }};            

            FaresSubscriptionsResponse res = sdk.offers.faresSubscriptions(req, new FaresSubscriptionsSecurity("excepturi") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.faresSubscriptions200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lhDeepLinksFFP

Returns valid LH deep links (FFP - links to flight selection screen on LH.COM)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LHDeepLinksFFPRequest;
import org.openapis.openapi.models.operations.LHDeepLinksFFPResponse;
import org.openapis.openapi.models.operations.LHDeepLinksFFPSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LHDeepLinksFFPRequest req = new LHDeepLinksFFPRequest("aspernatur", "perferendis", "ad", "natus", "sed", "iste", "dolor", "natus") {{
                cabinClass = "laboriosam";
                encryptionKey = "hic";
                partnerid = "saepe";
                returnDate = "fuga";
                travelers = "in";
            }};            

            LHDeepLinksFFPResponse res = sdk.offers.lhDeepLinksFFP(req, new LHDeepLinksFFPSecurity("corporis") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.lhDeepLinksFFP200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lhDeepLinksITCO

Returns valid LH deep links (ITCO - links to shopping cart on LH.COM)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LHDeepLinksITCORequest;
import org.openapis.openapi.models.operations.LHDeepLinksITCOResponse;
import org.openapis.openapi.models.operations.LHDeepLinksITCOSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LHDeepLinksITCORequest req = new LHDeepLinksITCORequest("iste", "iure", "saepe", "quidem", "architecto", "ipsa", "reiciendis", "est", "mollitia", "laborum", "dolores") {{
                cabinClass = "dolorem";
                encryptionKey = "corporis";
                netFare = "explicabo";
                partnerid = "nobis";
                returnDate = "enim";
                returnSegments = "omnis";
                travelers = "nemo";
            }};            

            LHDeepLinksITCOResponse res = sdk.offers.lhDeepLinksITCO(req, new LHDeepLinksITCOSecurity("minima") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.lhDeepLinksITCO200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lowestFares

Retrieve lowest fare for a specific Origin & Destination pair on a given date. Available fares are: One-way and Return for 4U. Return only for OS & LH

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LowestFaresRequest;
import org.openapis.openapi.models.operations.LowestFaresResponse;
import org.openapis.openapi.models.operations.LowestFaresSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LowestFaresRequest req = new LowestFaresRequest("excepturi", "accusantium", "iure", "culpa", "doloribus") {{
                cabinClass = "sapiente";
                country = "Bhutan";
                fareFamily = "mollitia";
                returnDate = "dolorem";
                travelers = "culpa";
            }};            

            LowestFaresResponse res = sdk.offers.lowestFares(req, new LowestFaresSecurity("consequuntur") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.lowestFares200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ondRoute

Returns LH route origin & destination information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ONDRouteRequest;
import org.openapis.openapi.models.operations.ONDRouteResponse;
import org.openapis.openapi.models.operations.ONDRouteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ONDRouteRequest req = new ONDRouteRequest("repellat", "mollitia", "occaecati") {{
                catalogues = "numquam";
                limit = "commodi";
                offset = "quam";
            }};            

            ONDRouteResponse res = sdk.offers.ondRoute(req, new ONDRouteSecurity("molestiae") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ondRoute200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ondStatus

Returns LH network route status information. Search for recently added or retired routes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ONDStatusRequest;
import org.openapis.openapi.models.operations.ONDStatusResponse;
import org.openapis.openapi.models.operations.ONDStatusSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ONDStatusRequest req = new ONDStatusRequest("velit") {{
                catalogues = "error";
                newRoutes = "quia";
                oldRoutes = "quis";
            }};            

            ONDStatusResponse res = sdk.offers.ondStatus(req, new ONDStatusSecurity("vitae") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ondStatus200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## topOND

Returns LH Top routes per country or across all countries

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TopONDRequest;
import org.openapis.openapi.models.operations.TopONDResponse;
import org.openapis.openapi.models.operations.TopONDSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TopONDRequest req = new TopONDRequest("laborum") {{
                catalogues = "animi";
                origin = "enim";
            }};            

            TopONDResponse res = sdk.offers.topOND(req, new TopONDSecurity("odit") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.topOND200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
