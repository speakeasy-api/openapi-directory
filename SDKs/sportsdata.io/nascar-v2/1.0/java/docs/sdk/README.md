# SDK

### Available Operations

* [driverDetails](#driverdetails) - Driver Details
* [driverRaceProjectionsEntryList](#driverraceprojectionsentrylist) - Driver Race Projections (Entry List)
* [drivers](#drivers) - Drivers
* [raceResults](#raceresults) - Race Results
* [racesSchedule](#racesschedule) - Races / Schedule
* [series](#series) - Series

## driverDetails

Driver Details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriverDetailsFormatEnum;
import org.openapis.openapi.models.operations.DriverDetailsRequest;
import org.openapis.openapi.models.operations.DriverDetailsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            DriverDetailsRequest req = new DriverDetailsRequest("distinctio", DriverDetailsFormatEnum.JSON);            

            DriverDetailsResponse res = sdk.sdk.driverDetails(req);

            if (res.driver != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## driverRaceProjectionsEntryList

Driver Race Projections (Entry List)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriverRaceProjectionsEntryListFormatEnum;
import org.openapis.openapi.models.operations.DriverRaceProjectionsEntryListRequest;
import org.openapis.openapi.models.operations.DriverRaceProjectionsEntryListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            DriverRaceProjectionsEntryListRequest req = new DriverRaceProjectionsEntryListRequest(DriverRaceProjectionsEntryListFormatEnum.JSON, "nulla");            

            DriverRaceProjectionsEntryListResponse res = sdk.sdk.driverRaceProjectionsEntryList(req);

            if (res.driverRaceProjections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## drivers

Drivers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriversFormatEnum;
import org.openapis.openapi.models.operations.DriversRequest;
import org.openapis.openapi.models.operations.DriversResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            DriversRequest req = new DriversRequest(DriversFormatEnum.JSON);            

            DriversResponse res = sdk.sdk.drivers(req);

            if (res.drivers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## raceResults

Race Results

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RaceResultsFormatEnum;
import org.openapis.openapi.models.operations.RaceResultsRequest;
import org.openapis.openapi.models.operations.RaceResultsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            RaceResultsRequest req = new RaceResultsRequest(RaceResultsFormatEnum.JSON, "vel");            

            RaceResultsResponse res = sdk.sdk.raceResults(req);

            if (res.raceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## racesSchedule

Races / Schedule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RacesScheduleFormatEnum;
import org.openapis.openapi.models.operations.RacesScheduleRequest;
import org.openapis.openapi.models.operations.RacesScheduleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            RacesScheduleRequest req = new RacesScheduleRequest(RacesScheduleFormatEnum.JSON, "deserunt");            

            RacesScheduleResponse res = sdk.sdk.racesSchedule(req);

            if (res.races != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## series

Series

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SeriesFormatEnum;
import org.openapis.openapi.models.operations.SeriesRequest;
import org.openapis.openapi.models.operations.SeriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            SeriesRequest req = new SeriesRequest(SeriesFormatEnum.XML);            

            SeriesResponse res = sdk.sdk.series(req);

            if (res.series != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
