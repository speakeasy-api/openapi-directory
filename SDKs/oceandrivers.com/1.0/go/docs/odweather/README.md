# ODWeather

## Overview

ODWeather API service

### Available Operations

* [CompareStation](#comparestation) - Get forecast and realtime information for known points<br/>None
* [GetAemetStation](#getaemetstation) - Get data from the aemet stations<br/>None
* [GetEasywind](#geteasywind) - Get data from the easywind weather stations<br/>None
* [GetEventStations](#geteventstations) - Get stations in an event<br/>None
* [GetForecastPoints](#getforecastpoints) - Get forecast points of a yatchclub<br/>None
* [GetForecastTimeSeries](#getforecasttimeseries) - Get timeseries forecast information<br/>None
* [GetForecastTimeSeriesWrf](#getforecasttimeserieswrf) - Get timeseries forecast information<br/>None
* [GetSocibWeatherStation](#getsocibweatherstation) - Get data from the socib bahia de palma buoy<br/>None
* [GetWeatherDisplay](#getweatherdisplay) - Get data from the weather display software<br/>None
* [GetWebCams](#getwebcams) - Get forecast and realtime information for known points<br/>None

## CompareStation

Get forecast and realtime information for known points<br/>None

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ODWeather.CompareStation(ctx, operations.CompareStationRequest{
        StationName: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAemetStation

Get data from the aemet stations<br/>None

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ODWeather.GetAemetStation(ctx, operations.GetAemetStationRequest{
        Period: "distinctio",
        StationName: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetEasywind

Get data from the easywind weather stations<br/>None

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ODWeather.GetEasywind(ctx, operations.GetEasywindRequest{
        EasywindID: "unde",
        Period: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetEventStations

Get stations in an event<br/>None

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ODWeather.GetEventStations(ctx, operations.GetEventStationsRequest{
        EventID: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetForecastPoints

Get forecast points of a yatchclub<br/>None

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ODWeather.GetForecastPoints(ctx, operations.GetForecastPointsRequest{
        Language: "illum",
        Yatchclubid: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetForecastTimeSeries

Get timeseries forecast information<br/>None

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ODWeather.GetForecastTimeSeries(ctx, operations.GetForecastTimeSeriesRequest{
        Days: sdk.Int(623564),
        Endtime: sdk.String("deserunt"),
        Entryid: sdk.String("suscipit"),
        Hours: sdk.Int(437587),
        Inittime: sdk.String("magnam"),
        Latitude: 8917.73,
        Longitude: 567.13,
        Wave: sdk.String("delectus"),
        Weather: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetForecastTimeSeriesWrf

Get timeseries forecast information<br/>None

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ODWeather.GetForecastTimeSeriesWrf(ctx, operations.GetForecastTimeSeriesWrfRequest{
        Days: sdk.Int(383441),
        Endtime: sdk.String("molestiae"),
        Entryid: sdk.String("minus"),
        Hours: sdk.Int(812169),
        Inittime: sdk.String("voluptatum"),
        Latitude: 4799.77,
        Longitude: 5680.45,
        Wave: sdk.String("nisi"),
        Weather: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSocibWeatherStation

Get data from the socib bahia de palma buoy<br/>None

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ODWeather.GetSocibWeatherStation(ctx, operations.GetSocibWeatherStationRequest{
        Period: "temporibus",
        StationName: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetWeatherDisplay

Get data from the weather display software<br/>None

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ODWeather.GetWeatherDisplay(ctx, operations.GetWeatherDisplayRequest{
        Period: "quis",
        StationName: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetWebCams

Get forecast and realtime information for known points<br/>None

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ODWeather.GetWebCams(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
