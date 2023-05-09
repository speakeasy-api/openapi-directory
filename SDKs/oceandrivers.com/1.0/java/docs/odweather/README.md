# odWeather

## Overview

ODWeather API service

### Available Operations

* [compareStation](#comparestation) - Get forecast and realtime information for known points<br/>None
* [getAemetStation](#getaemetstation) - Get data from the aemet stations<br/>None
* [getEasywind](#geteasywind) - Get data from the easywind weather stations<br/>None
* [getEventStations](#geteventstations) - Get stations in an event<br/>None
* [getForecastPoints](#getforecastpoints) - Get forecast points of a yatchclub<br/>None
* [getForecastTimeSeries](#getforecasttimeseries) - Get timeseries forecast information<br/>None
* [getForecastTimeSeriesWrf](#getforecasttimeserieswrf) - Get timeseries forecast information<br/>None
* [getSocibWeatherStation](#getsocibweatherstation) - Get data from the socib bahia de palma buoy<br/>None
* [getWeatherDisplay](#getweatherdisplay) - Get data from the weather display software<br/>None
* [getWebCams](#getwebcams) - Get forecast and realtime information for known points<br/>None

## compareStation

Get forecast and realtime information for known points<br/>None

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompareStationRequest;
import org.openapis.openapi.models.operations.CompareStationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompareStationRequest req = new CompareStationRequest("provident");            

            CompareStationResponse res = sdk.odWeather.compareStation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAemetStation

Get data from the aemet stations<br/>None

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAemetStationRequest;
import org.openapis.openapi.models.operations.GetAemetStationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAemetStationRequest req = new GetAemetStationRequest("distinctio", "quibusdam");            

            GetAemetStationResponse res = sdk.odWeather.getAemetStation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEasywind

Get data from the easywind weather stations<br/>None

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEasywindRequest;
import org.openapis.openapi.models.operations.GetEasywindResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEasywindRequest req = new GetEasywindRequest("unde", "nulla");            

            GetEasywindResponse res = sdk.odWeather.getEasywind(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEventStations

Get stations in an event<br/>None

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventStationsRequest;
import org.openapis.openapi.models.operations.GetEventStationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventStationsRequest req = new GetEventStationsRequest("corrupti");            

            GetEventStationsResponse res = sdk.odWeather.getEventStations(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getForecastPoints

Get forecast points of a yatchclub<br/>None

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetForecastPointsRequest;
import org.openapis.openapi.models.operations.GetForecastPointsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetForecastPointsRequest req = new GetForecastPointsRequest("illum", "vel");            

            GetForecastPointsResponse res = sdk.odWeather.getForecastPoints(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getForecastTimeSeries

Get timeseries forecast information<br/>None

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetForecastTimeSeriesRequest;
import org.openapis.openapi.models.operations.GetForecastTimeSeriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetForecastTimeSeriesRequest req = new GetForecastTimeSeriesRequest(6235.64, 6458.94, "suscipit") {{
                days = 437587;
                endtime = "magnam";
                entryid = "debitis";
                hours = 56713;
                inittime = "delectus";
                wave = "tempora";
            }};            

            GetForecastTimeSeriesResponse res = sdk.odWeather.getForecastTimeSeries(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getForecastTimeSeriesWrf

Get timeseries forecast information<br/>None

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetForecastTimeSeriesWrfRequest;
import org.openapis.openapi.models.operations.GetForecastTimeSeriesWrfResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetForecastTimeSeriesWrfRequest req = new GetForecastTimeSeriesWrfRequest(3834.41, 4776.65, "minus") {{
                days = 812169;
                endtime = "voluptatum";
                entryid = "iusto";
                hours = 568045;
                inittime = "nisi";
                wave = "recusandae";
            }};            

            GetForecastTimeSeriesWrfResponse res = sdk.odWeather.getForecastTimeSeriesWrf(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSocibWeatherStation

Get data from the socib bahia de palma buoy<br/>None

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSocibWeatherStationRequest;
import org.openapis.openapi.models.operations.GetSocibWeatherStationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSocibWeatherStationRequest req = new GetSocibWeatherStationRequest("temporibus", "ab");            

            GetSocibWeatherStationResponse res = sdk.odWeather.getSocibWeatherStation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWeatherDisplay

Get data from the weather display software<br/>None

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWeatherDisplayRequest;
import org.openapis.openapi.models.operations.GetWeatherDisplayResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWeatherDisplayRequest req = new GetWeatherDisplayRequest("quis", "veritatis");            

            GetWeatherDisplayResponse res = sdk.odWeather.getWeatherDisplay(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWebCams

Get forecast and realtime information for known points<br/>None

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWebCamsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWebCamsResponse res = sdk.odWeather.getWebCams();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
