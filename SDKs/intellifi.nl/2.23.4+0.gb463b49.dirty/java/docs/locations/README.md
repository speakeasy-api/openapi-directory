# locations

## Overview

The `locations` resource is an abstraction for the area around a physical location that items can be localized at.


<https://intellifi.zendesk.com/hc/en-us/articles/360007502554>
### Available Operations

* [addLocation](#addlocation) - Create location
* [deleteLocation](#deletelocation) - Delete location
* [getLocationById](#getlocationbyid) - Get location
* [getLocations](#getlocations) - Get all locations
* [updateLocation](#updatelocation) - Update existing location

## addLocation

Create location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddLocationResponse;
import org.openapis.openapi.models.shared.LocationInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.LocationInput req = new LocationInput() {{
                custom = "veritatis";
                label = "Foo Bar";
                metadata = new java.util.HashMap<String, Object>() {{
                    put("incidunt", "enim");
                    put("consequatur", "est");
                    put("quibusdam", "explicabo");
                    put("deserunt", "distinctio");
                }};
            }};            

            AddLocationResponse res = sdk.locations.addLocation(req);

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLocation

Delete location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLocationRequest;
import org.openapis.openapi.models.operations.DeleteLocationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLocationRequest req = new DeleteLocationRequest("quibusdam");            

            DeleteLocationResponse res = sdk.locations.deleteLocation(req);

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLocationById

Get location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLocationByIdRequest;
import org.openapis.openapi.models.operations.GetLocationByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLocationByIdRequest req = new GetLocationByIdRequest("labore");            

            GetLocationByIdResponse res = sdk.locations.getLocationById(req);

            if (res.location != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLocations

Get all locations

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLocationsRequest;
import org.openapis.openapi.models.operations.GetLocationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLocationsRequest req = new GetLocationsRequest() {{
                after = OffsetDateTime.parse("2022-10-26T03:14:36.345Z");
                afterId = "aliquid";
                before = "cupiditate";
                beforeId = "quos";
                from = "perferendis";
                fromId = "magni";
                id = "5b7d6cbd7503c445552a1664";
                idOnly = false;
                label = "Foo Bar";
                limit = 828940L;
                metadata = "ipsam";
                populate = "alias";
                resultsOnly = false;
                select = "fugit";
                sort = "dolorum";
                text = "excepturi";
                timeCreated = "2018-08-30T09:51:59.737Z";
                timeUpdated = "2018-08-30T09:51:59.737Z";
                timeoutS = 2700.08;
                until = "facilis";
                untilId = "tempore";
            }};            

            GetLocationsResponse res = sdk.locations.getLocations(req);

            if (res.getLocations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLocation

Update existing location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLocationRequest;
import org.openapis.openapi.models.operations.UpdateLocationResponse;
import org.openapis.openapi.models.shared.LocationInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLocationRequest req = new UpdateLocationRequest(                new LocationInput() {{
                                custom = "labore";
                                label = "Foo Bar";
                                metadata = new java.util.HashMap<String, Object>() {{
                                    put("eum", "non");
                                    put("eligendi", "sint");
                                    put("aliquid", "provident");
                                    put("necessitatibus", "sint");
                                }};
                            }};, "officia");            

            UpdateLocationResponse res = sdk.locations.updateLocation(req);

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
