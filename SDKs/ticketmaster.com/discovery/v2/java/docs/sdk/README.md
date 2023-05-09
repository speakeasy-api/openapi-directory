# SDK

## Overview

The Ticketmaster Discovery API allows you to search for events, attractions, or venues.

### Available Operations

* [find](#find) - Attraction Search
* [get](#get) - Get Attraction Details
* [getGenre](#getgenre) - Get Genre Details
* [getImages](#getimages) - Get Event Images
* [getSegment](#getsegment) - Get Segment Details
* [getSubgenre](#getsubgenre) - Get Sub-Genre Details
* [getDiscoveryV2Classifications](#getdiscoveryv2classifications) - Classification Search
* [getDiscoveryV2ClassificationsId](#getdiscoveryv2classificationsid) - Get Classification Details
* [getDiscoveryV2Events](#getdiscoveryv2events) - Event Search
* [getDiscoveryV2EventsId](#getdiscoveryv2eventsid) - Get Event Details
* [getDiscoveryV2Venues](#getdiscoveryv2venues) - Venue Search
* [getDiscoveryV2VenuesId](#getdiscoveryv2venuesid) - Get Venue Details

## find

Find attractions (artists, sports, packages, plays and so on) and filter your search by name, and much more.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindIncludeLicensedContentEnum;
import org.openapis.openapi.models.operations.FindIncludeSpellcheckEnum;
import org.openapis.openapi.models.operations.FindIncludeTestEnum;
import org.openapis.openapi.models.operations.FindRequest;
import org.openapis.openapi.models.operations.FindResponse;
import org.openapis.openapi.models.operations.FindSourceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindRequest req = new FindRequest() {{
                classificationId = new Object[]{{
                    add("nam"),
                }};
                classificationName = new Object[]{{
                    add("occaecati"),
                    add("fugit"),
                    add("deleniti"),
                }};
                id = "fc816742-cb73-4920-9929-396fea7596eb";
                includeLicensedContent = FindIncludeLicensedContentEnum.YES;
                includeSpellcheck = FindIncludeSpellcheckEnum.YES;
                includeTest = FindIncludeTestEnum.ONLY;
                keyword = "est";
                locale = "mollitia";
                page = "laborum";
                size = "dolores";
                sort = "dolorem";
                source = FindSourceEnum.UNIVERSE;
            }};            

            FindResponse res = sdk.sdk.find(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## get

Get details for a specific attraction using the unique identifier for the attraction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIncludeLicensedContentEnum;
import org.openapis.openapi.models.operations.GetRequest;
import org.openapis.openapi.models.operations.GetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRequest req = new GetRequest("explicabo") {{
                includeLicensedContent = GetIncludeLicensedContentEnum.NO;
                locale = "enim";
            }};            

            GetResponse res = sdk.sdk.get(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGenre

Get details for a specific genre using its unique identifier.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGenreIncludeLicensedContentEnum;
import org.openapis.openapi.models.operations.GetGenreRequest;
import org.openapis.openapi.models.operations.GetGenreResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGenreRequest req = new GetGenreRequest("omnis") {{
                includeLicensedContent = GetGenreIncludeLicensedContentEnum.YES;
                locale = "minima";
            }};            

            GetGenreResponse res = sdk.sdk.getGenre(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getImages

Get images for a specific event using the unique identifier for the event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImagesIncludeLicensedContentEnum;
import org.openapis.openapi.models.operations.GetImagesRequest;
import org.openapis.openapi.models.operations.GetImagesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetImagesRequest req = new GetImagesRequest("excepturi") {{
                includeLicensedContent = GetImagesIncludeLicensedContentEnum.YES;
                locale = "iure";
            }};            

            GetImagesResponse res = sdk.sdk.getImages(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSegment

Get details for a specific segment using its unique identifier.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSegmentIncludeLicensedContentEnum;
import org.openapis.openapi.models.operations.GetSegmentRequest;
import org.openapis.openapi.models.operations.GetSegmentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSegmentRequest req = new GetSegmentRequest("culpa") {{
                includeLicensedContent = GetSegmentIncludeLicensedContentEnum.NO;
                locale = "sapiente";
            }};            

            GetSegmentResponse res = sdk.sdk.getSegment(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubgenre

Get details for a specific sub-genre using its unique identifier.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubgenreIncludeLicensedContentEnum;
import org.openapis.openapi.models.operations.GetSubgenreRequest;
import org.openapis.openapi.models.operations.GetSubgenreResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSubgenreRequest req = new GetSubgenreRequest("architecto") {{
                includeLicensedContent = GetSubgenreIncludeLicensedContentEnum.NO;
                locale = "dolorem";
            }};            

            GetSubgenreResponse res = sdk.sdk.getSubgenre(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDiscoveryV2Classifications

Find classifications and filter your search by name, and much more. Classifications help define the nature of attractions and events.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDiscoveryV2ClassificationsIncludeLicensedContentEnum;
import org.openapis.openapi.models.operations.GetDiscoveryV2ClassificationsIncludeSpellcheckEnum;
import org.openapis.openapi.models.operations.GetDiscoveryV2ClassificationsIncludeTestEnum;
import org.openapis.openapi.models.operations.GetDiscoveryV2ClassificationsRequest;
import org.openapis.openapi.models.operations.GetDiscoveryV2ClassificationsResponse;
import org.openapis.openapi.models.operations.GetDiscoveryV2ClassificationsSourceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDiscoveryV2ClassificationsRequest req = new GetDiscoveryV2ClassificationsRequest() {{
                id = "a2fa9467-7392-451a-a52c-3f5ad019da1f";
                includeLicensedContent = GetDiscoveryV2ClassificationsIncludeLicensedContentEnum.NO;
                includeSpellcheck = GetDiscoveryV2ClassificationsIncludeSpellcheckEnum.NO;
                includeTest = GetDiscoveryV2ClassificationsIncludeTestEnum.NO;
                keyword = "praesentium";
                locale = "voluptatibus";
                page = "ipsa";
                size = "omnis";
                sort = "voluptate";
                source = GetDiscoveryV2ClassificationsSourceEnum.FRONTGATE;
            }};            

            GetDiscoveryV2ClassificationsResponse res = sdk.sdk.getDiscoveryV2Classifications(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDiscoveryV2ClassificationsId

Get details for a specific segment, genre, or sub-genre using its unique identifier.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDiscoveryV2ClassificationsIdIncludeLicensedContentEnum;
import org.openapis.openapi.models.operations.GetDiscoveryV2ClassificationsIdRequest;
import org.openapis.openapi.models.operations.GetDiscoveryV2ClassificationsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDiscoveryV2ClassificationsIdRequest req = new GetDiscoveryV2ClassificationsIdRequest("perferendis") {{
                includeLicensedContent = GetDiscoveryV2ClassificationsIdIncludeLicensedContentEnum.YES;
                locale = "reprehenderit";
            }};            

            GetDiscoveryV2ClassificationsIdResponse res = sdk.sdk.getDiscoveryV2ClassificationsId(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDiscoveryV2Events

Find events and filter your search by location, date, availability, and much more.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDiscoveryV2EventsIncludeLicensedContentEnum;
import org.openapis.openapi.models.operations.GetDiscoveryV2EventsIncludeSpellcheckEnum;
import org.openapis.openapi.models.operations.GetDiscoveryV2EventsIncludeTbaEnum;
import org.openapis.openapi.models.operations.GetDiscoveryV2EventsIncludeTbdEnum;
import org.openapis.openapi.models.operations.GetDiscoveryV2EventsIncludeTestEnum;
import org.openapis.openapi.models.operations.GetDiscoveryV2EventsRequest;
import org.openapis.openapi.models.operations.GetDiscoveryV2EventsResponse;
import org.openapis.openapi.models.operations.GetDiscoveryV2EventsSourceEnum;
import org.openapis.openapi.models.operations.GetDiscoveryV2EventsUnitEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDiscoveryV2EventsRequest req = new GetDiscoveryV2EventsRequest() {{
                attractionId = "ut";
                city = "Buena Park";
                classificationId = new Object[]{{
                    add("dolore"),
                    add("iusto"),
                }};
                classificationName = new Object[]{{
                    add("harum"),
                }};
                clientVisibility = "enim";
                countryCode = "TK";
                dmaId = "commodi";
                endDateTime = "repudiandae";
                geoPoint = "quae";
                id = "3b99d488-e1e9-41e4-90ad-2abd44269802";
                includeLicensedContent = GetDiscoveryV2EventsIncludeLicensedContentEnum.NO;
                includeSpellcheck = GetDiscoveryV2EventsIncludeSpellcheckEnum.YES;
                includeTBA = GetDiscoveryV2EventsIncludeTbaEnum.YES;
                includeTBD = GetDiscoveryV2EventsIncludeTbdEnum.YES;
                includeTest = GetDiscoveryV2EventsIncludeTestEnum.ONLY;
                keyword = "excepturi";
                latlong = "tempora";
                locale = "facilis";
                marketId = "tempore";
                onsaleEndDateTime = "labore";
                onsaleOnAfterStartDate = "delectus";
                onsaleOnStartDate = "eum";
                onsaleStartDateTime = "non";
                page = "eligendi";
                postalCode = "35856-2896";
                promoterId = "in";
                radius = "in";
                segmentId = "illum";
                segmentName = "maiores";
                size = "rerum";
                sort = "dicta";
                source = GetDiscoveryV2EventsSourceEnum.UNIVERSE;
                startDateTime = "cumque";
                stateCode = "facere";
                unit = GetDiscoveryV2EventsUnitEnum.MILES;
                venueId = "aliquid";
            }};            

            GetDiscoveryV2EventsResponse res = sdk.sdk.getDiscoveryV2Events(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDiscoveryV2EventsId

Get details for a specific event using the unique identifier for the event. This includes the venue and location, the attraction(s), and the Ticketmaster Website URL for purchasing tickets for the event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDiscoveryV2EventsIdIncludeLicensedContentEnum;
import org.openapis.openapi.models.operations.GetDiscoveryV2EventsIdRequest;
import org.openapis.openapi.models.operations.GetDiscoveryV2EventsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDiscoveryV2EventsIdRequest req = new GetDiscoveryV2EventsIdRequest("laborum") {{
                includeLicensedContent = GetDiscoveryV2EventsIdIncludeLicensedContentEnum.NO;
                locale = "non";
            }};            

            GetDiscoveryV2EventsIdResponse res = sdk.sdk.getDiscoveryV2EventsId(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDiscoveryV2Venues

Find venues and filter your search by name, and much more.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDiscoveryV2VenuesIncludeLicensedContentEnum;
import org.openapis.openapi.models.operations.GetDiscoveryV2VenuesIncludeSpellcheckEnum;
import org.openapis.openapi.models.operations.GetDiscoveryV2VenuesIncludeTestEnum;
import org.openapis.openapi.models.operations.GetDiscoveryV2VenuesRequest;
import org.openapis.openapi.models.operations.GetDiscoveryV2VenuesResponse;
import org.openapis.openapi.models.operations.GetDiscoveryV2VenuesSourceEnum;
import org.openapis.openapi.models.operations.GetDiscoveryV2VenuesUnitEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDiscoveryV2VenuesRequest req = new GetDiscoveryV2VenuesRequest() {{
                countryCode = "ML";
                geoPoint = "enim";
                id = "efb9ba88-f3a6-4699-b074-ba4469b6e214";
                includeLicensedContent = GetDiscoveryV2VenuesIncludeLicensedContentEnum.YES;
                includeSpellcheck = GetDiscoveryV2VenuesIncludeSpellcheckEnum.NO;
                includeTest = GetDiscoveryV2VenuesIncludeTestEnum.NO;
                keyword = "provident";
                latlong = "quos";
                locale = "sint";
                page = "accusantium";
                radius = "mollitia";
                size = "reiciendis";
                sort = "mollitia";
                source = GetDiscoveryV2VenuesSourceEnum.UNIVERSE;
                stateCode = "eum";
                unit = GetDiscoveryV2VenuesUnitEnum.MILES;
            }};            

            GetDiscoveryV2VenuesResponse res = sdk.sdk.getDiscoveryV2Venues(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDiscoveryV2VenuesId

Get details for a specific venue using the unique identifier for the venue.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDiscoveryV2VenuesIdIncludeLicensedContentEnum;
import org.openapis.openapi.models.operations.GetDiscoveryV2VenuesIdRequest;
import org.openapis.openapi.models.operations.GetDiscoveryV2VenuesIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDiscoveryV2VenuesIdRequest req = new GetDiscoveryV2VenuesIdRequest("necessitatibus") {{
                includeLicensedContent = GetDiscoveryV2VenuesIdIncludeLicensedContentEnum.YES;
                locale = "nemo";
            }};            

            GetDiscoveryV2VenuesIdResponse res = sdk.sdk.getDiscoveryV2VenuesId(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
