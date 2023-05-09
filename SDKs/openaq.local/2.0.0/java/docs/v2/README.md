# v2

### Available Operations

* [averagesV2GetV2AveragesGet](#averagesv2getv2averagesget) - Averages V2 Get
* [citiesGetV2CitiesGet](#citiesgetv2citiesget) - Provides a simple listing of cities within the platform
* [countriesGetV2CountriesCountryIdGet](#countriesgetv2countriescountryidget) - Countries Get
* [countriesGetV2CountriesGet](#countriesgetv2countriesget) - Countries Get
* [demoV2LocationsTilesViewerGet](#demov2locationstilesviewerget) - Demo
* [getMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGet](#getmobilegentilev2locationstilesmobilegeneralizedzxypbfget) - Get Mobilegentile
* [getMobiletileV2LocationsTilesMobileZXYPbfGet](#getmobiletilev2locationstilesmobilezxypbfget) - Get Mobiletile
* [getTileV2LocationsTilesZXYPbfGet](#gettilev2locationstileszxypbfget) - Get Tile
* [latestGetV2LatestLocationIdGet](#latestgetv2latestlocationidget) - Latest Get
* [latestGetV2LatestGet](#latestgetv2latestget) - Latest Get
* [locationsGetV2LocationsLocationIdGet](#locationsgetv2locationslocationidget) - Locations Get
* [locationsGetV2LocationsGet](#locationsgetv2locationsget) - Locations Get
* [measurementsGetV2MeasurementsGet](#measurementsgetv2measurementsget) - Measurements Get
* [mfrGetV2ManufacturersGet](#mfrgetv2manufacturersget) - Mfr Get
* [mobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJsonGet](#mobilegentilejsonv2locationstilesmobilegeneralizedtilesjsonget) - Mobilegentilejson
* [mobiletilejsonV2LocationsTilesMobileTilesJsonGet](#mobiletilejsonv2locationstilesmobiletilesjsonget) - Mobiletilejson
* [modelGetV2ModelsGet](#modelgetv2modelsget) - Model Get
* [parametersGetV2ParametersGet](#parametersgetv2parametersget) - Parameters Get
* [projectsGetV2ProjectsProjectIdGet](#projectsgetv2projectsprojectidget) - Projects Get
* [projectsGetV2ProjectsGet](#projectsgetv2projectsget) - Projects Get
* [readmeGetV2SourcesReadmeSlugGet](#readmegetv2sourcesreadmeslugget) - Readme Get
* [sourcesGetV2SourcesGet](#sourcesgetv2sourcesget) - Sources Get
* [summaryGetV2SummaryGet](#summarygetv2summaryget) - Summary Get
* [tilejsonV2LocationsTilesTilesJsonGet](#tilejsonv2locationstilestilesjsonget) - Tilejson

## averagesV2GetV2AveragesGet

Averages V2 Get

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AveragesV2GetV2AveragesGetRequest;
import org.openapis.openapi.models.operations.AveragesV2GetV2AveragesGetResponse;
import org.openapis.openapi.models.operations.AveragesV2GetV2AveragesGetSortSortEnum;
import org.openapis.openapi.models.shared.SpatialEnum;
import org.openapis.openapi.models.shared.TemporalEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AveragesV2GetV2AveragesGetRequest req = new AveragesV2GetV2AveragesGetRequest(SpatialEnum.PROJECT, TemporalEnum.YEAR) {{
                country = new String[]{{
                    add("dolor"),
                    add("necessitatibus"),
                }};
                countryId = "odit";
                dateFrom = OffsetDateTime.parse("2022-07-25T21:49:23.340Z");
                dateTo = LocalDate.parse("2022-03-21");
                group = false;
                limit = 806194L;
                location = new String[]{{
                    add("facilis"),
                    add("in"),
                    add("architecto"),
                }};
                offset = 99569L;
                page = 919483L;
                parameter = new Object[]{{
                    add("nihil"),
                    add("quibusdam"),
                }};
                parameterId = 149448L;
                project = new Object[]{{
                    add("accusantium"),
                    add(508315L),
                    add("magni"),
                    add(779051L),
                }};
                projectId = 848009L;
                sort = AveragesV2GetV2AveragesGetSortSortEnum.DESC;
                unit = new String[]{{
                    add("ea"),
                    add("excepturi"),
                    add("odit"),
                    add("ea"),
                }};
            }};            

            AveragesV2GetV2AveragesGetResponse res = sdk.v2.averagesV2GetV2AveragesGet(req);

            if (res.openAQResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## citiesGetV2CitiesGet

Provides a simple listing of cities within the platform

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CitiesGetV2CitiesGetOrderByCitiesOrderEnum;
import org.openapis.openapi.models.operations.CitiesGetV2CitiesGetRequest;
import org.openapis.openapi.models.operations.CitiesGetV2CitiesGetResponse;
import org.openapis.openapi.models.operations.CitiesGetV2CitiesGetSortSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CitiesGetV2CitiesGetRequest req = new CitiesGetV2CitiesGetRequest() {{
                city = new String[]{{
                    add("ab"),
                }};
                country = new String[]{{
                    add("quidem"),
                    add("ipsam"),
                    add("voluptate"),
                    add("autem"),
                }};
                countryId = "nam";
                entity = "eaque";
                limit = 866383L;
                offset = 365496L;
                orderBy = CitiesGetV2CitiesGetOrderByCitiesOrderEnum.LAST_UPDATED;
                page = 16627L;
                sort = CitiesGetV2CitiesGetSortSortEnum.DESC;
            }};            

            CitiesGetV2CitiesGetResponse res = sdk.v2.citiesGetV2CitiesGet(req);

            if (res.openAQCitiesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## countriesGetV2CountriesCountryIdGet

Countries Get

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CountriesGetV2CountriesCountryIdGetOrderByCountriesOrderEnum;
import org.openapis.openapi.models.operations.CountriesGetV2CountriesCountryIdGetRequest;
import org.openapis.openapi.models.operations.CountriesGetV2CountriesCountryIdGetResponse;
import org.openapis.openapi.models.operations.CountriesGetV2CountriesCountryIdGetSortSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CountriesGetV2CountriesCountryIdGetRequest req = new CountriesGetV2CountriesCountryIdGetRequest("amet") {{
                country = new String[]{{
                    add("cumque"),
                }};
                limit = 359978L;
                offset = 944124L;
                orderBy = CountriesGetV2CountriesCountryIdGetOrderByCountriesOrderEnum.LOCATIONS;
                page = 749999L;
                sort = CountriesGetV2CountriesCountryIdGetSortSortEnum.ASC;
            }};            

            CountriesGetV2CountriesCountryIdGetResponse res = sdk.v2.countriesGetV2CountriesCountryIdGet(req);

            if (res.openAQCountriesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## countriesGetV2CountriesGet

Countries Get

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CountriesGetV2CountriesGetOrderByCountriesOrderEnum;
import org.openapis.openapi.models.operations.CountriesGetV2CountriesGetRequest;
import org.openapis.openapi.models.operations.CountriesGetV2CountriesGetResponse;
import org.openapis.openapi.models.operations.CountriesGetV2CountriesGetSortSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CountriesGetV2CountriesGetRequest req = new CountriesGetV2CountriesGetRequest() {{
                country = new String[]{{
                    add("totam"),
                    add("dignissimos"),
                }};
                countryId = "eaque";
                limit = 338985L;
                offset = 199996L;
                orderBy = CountriesGetV2CountriesGetOrderByCountriesOrderEnum.COUNTRY;
                page = 18521L;
                sort = CountriesGetV2CountriesGetSortSortEnum.ASC;
            }};            

            CountriesGetV2CountriesGetResponse res = sdk.v2.countriesGetV2CountriesGet(req);

            if (res.openAQCountriesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## demoV2LocationsTilesViewerGet

Demo

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DemoV2LocationsTilesViewerGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DemoV2LocationsTilesViewerGetResponse res = sdk.v2.demoV2LocationsTilesViewerGet();

            if (res.demoV2LocationsTilesViewerGet200TextHTMLString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGet

Get Mobilegentile

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetRequest;
import org.openapis.openapi.models.operations.GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetRequest req = new GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetRequest(793698L, 463451L, 223924L) {{
                isAnalysis = false;
                isMobile = false;
                lastUpdatedFrom = LocalDate.parse("2022-01-21");
                lastUpdatedTo = LocalDate.parse("2021-08-04");
                location = new Long[]{{
                    add(31838L),
                    add(783645L),
                    add(164694L),
                }};
                parameter = "error";
                project = 50370L;
            }};            

            GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetResponse res = sdk.v2.getMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGet(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMobiletileV2LocationsTilesMobileZXYPbfGet

Get Mobiletile

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMobiletileV2LocationsTilesMobileZXYPbfGetRequest;
import org.openapis.openapi.models.operations.GetMobiletileV2LocationsTilesMobileZXYPbfGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMobiletileV2LocationsTilesMobileZXYPbfGetRequest req = new GetMobiletileV2LocationsTilesMobileZXYPbfGetRequest(LocalDate.parse("2022-07-11"), LocalDate.parse("2022-03-14"), 613966L, 679091L, 535633L) {{
                isAnalysis = false;
                isMobile = false;
                lastUpdatedFrom = LocalDate.parse("2021-07-01");
                lastUpdatedTo = LocalDate.parse("2022-01-24");
                location = new Long[]{{
                    add(398221L),
                    add(212390L),
                    add(209843L),
                }};
                parameter = 186193L;
                project = 218749L;
            }};            

            GetMobiletileV2LocationsTilesMobileZXYPbfGetResponse res = sdk.v2.getMobiletileV2LocationsTilesMobileZXYPbfGet(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTileV2LocationsTilesZXYPbfGet

Get Tile

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTileV2LocationsTilesZXYPbfGetRequest;
import org.openapis.openapi.models.operations.GetTileV2LocationsTilesZXYPbfGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTileV2LocationsTilesZXYPbfGetRequest req = new GetTileV2LocationsTilesZXYPbfGetRequest(944373L, 569574L, 739551L) {{
                isAnalysis = false;
                isMobile = false;
                lastUpdatedFrom = OffsetDateTime.parse("2022-01-11T20:43:35.875Z");
                lastUpdatedTo = OffsetDateTime.parse("2022-06-29T07:40:27.174Z");
                location = new Long[]{{
                    add(58029L),
                }};
                parameter = 434417L;
                project = 487838L;
            }};            

            GetTileV2LocationsTilesZXYPbfGetResponse res = sdk.v2.getTileV2LocationsTilesZXYPbfGet(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## latestGetV2LatestLocationIdGet

Latest Get

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LatestGetV2LatestLocationIdGetOrderByLocationsOrderEnum;
import org.openapis.openapi.models.operations.LatestGetV2LatestLocationIdGetRequest;
import org.openapis.openapi.models.operations.LatestGetV2LatestLocationIdGetResponse;
import org.openapis.openapi.models.operations.LatestGetV2LatestLocationIdGetSortSortEnum;
import org.openapis.openapi.models.shared.EntityTypesEnum;
import org.openapis.openapi.models.shared.SensorTypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LatestGetV2LatestLocationIdGetRequest req = new LatestGetV2LatestLocationIdGetRequest(311796L) {{
                city = new String[]{{
                    add("quidem"),
                    add("voluptatibus"),
                    add("voluptas"),
                    add("natus"),
                }};
                coordinates = "eos";
                country = new String[]{{
                    add("sit"),
                    add("fugiat"),
                    add("ab"),
                }};
                countryId = "soluta";
                dumpRaw = false;
                entity = EntityTypesEnum.RESEARCH;
                hasGeo = false;
                isAnalysis = false;
                isMobile = false;
                limit = 478596L;
                location = new Object[]{{
                    add("deleniti"),
                    add("necessitatibus"),
                }};
                manufacturerName = new String[]{{
                    add("asperiores"),
                    add("nihil"),
                    add("ipsum"),
                }};
                modelName = new String[]{{
                    add("id"),
                    add("saepe"),
                }};
                offset = 263322L;
                orderBy = LatestGetV2LatestLocationIdGetOrderByLocationsOrderEnum.COUNTRY;
                page = 20651L;
                parameter = new Object[]{{
                    add("accusamus"),
                }};
                parameterId = 320017L;
                radius = 904425L;
                sensorType = SensorTypesEnum.REFERENCE_GRADE;
                sort = LatestGetV2LatestLocationIdGetSortSortEnum.DESC;
                sourceName = new String[]{{
                    add("minima"),
                    add("repellendus"),
                    add("totam"),
                }};
                unit = new String[]{{
                    add("alias"),
                    add("at"),
                    add("quaerat"),
                }};
            }};            

            LatestGetV2LatestLocationIdGetResponse res = sdk.v2.latestGetV2LatestLocationIdGet(req);

            if (res.openAQResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## latestGetV2LatestGet

Latest Get

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LatestGetV2LatestGetOrderByLocationsOrderEnum;
import org.openapis.openapi.models.operations.LatestGetV2LatestGetRequest;
import org.openapis.openapi.models.operations.LatestGetV2LatestGetResponse;
import org.openapis.openapi.models.operations.LatestGetV2LatestGetSortSortEnum;
import org.openapis.openapi.models.shared.EntityTypesEnum;
import org.openapis.openapi.models.shared.SensorTypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LatestGetV2LatestGetRequest req = new LatestGetV2LatestGetRequest() {{
                city = new String[]{{
                    add("vel"),
                    add("quod"),
                }};
                coordinates = "officiis";
                country = new String[]{{
                    add("dolorum"),
                }};
                countryId = "a";
                dumpRaw = false;
                entity = EntityTypesEnum.COMMUNITY;
                hasGeo = false;
                isAnalysis = false;
                isMobile = false;
                limit = 687488L;
                location = new Object[]{{
                    add(788740L),
                    add("amet"),
                }};
                locationId = 730856L;
                manufacturerName = new String[]{{
                    add("numquam"),
                    add("enim"),
                    add("dolorem"),
                    add("sapiente"),
                }};
                modelName = new String[]{{
                    add("nihil"),
                    add("sit"),
                    add("expedita"),
                }};
                offset = 207470L;
                orderBy = LatestGetV2LatestGetOrderByLocationsOrderEnum.COUNTRY;
                page = 424685L;
                parameter = new Object[]{{
                    add(646265L),
                    add(214880L),
                    add(186458L),
                }};
                parameterId = 586784L;
                radius = 807581L;
                sensorType = SensorTypesEnum.LOW_COST_SENSOR;
                sort = LatestGetV2LatestGetSortSortEnum.DESC;
                sourceName = new String[]{{
                    add("laborum"),
                }};
                unit = new String[]{{
                    add("incidunt"),
                    add("aspernatur"),
                    add("dolores"),
                }};
            }};            

            LatestGetV2LatestGetResponse res = sdk.v2.latestGetV2LatestGet(req);

            if (res.openAQResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## locationsGetV2LocationsLocationIdGet

Locations Get

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LocationsGetV2LocationsLocationIdGetOrderByLocationsOrderEnum;
import org.openapis.openapi.models.operations.LocationsGetV2LocationsLocationIdGetRequest;
import org.openapis.openapi.models.operations.LocationsGetV2LocationsLocationIdGetResponse;
import org.openapis.openapi.models.operations.LocationsGetV2LocationsLocationIdGetSortSortEnum;
import org.openapis.openapi.models.shared.EntityTypesEnum;
import org.openapis.openapi.models.shared.SensorTypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LocationsGetV2LocationsLocationIdGetRequest req = new LocationsGetV2LocationsLocationIdGetRequest(716860L) {{
                city = new String[]{{
                    add("aliquid"),
                    add("quam"),
                    add("molestias"),
                }};
                coordinates = "temporibus";
                country = new String[]{{
                    add("neque"),
                }};
                countryId = "fugit";
                dumpRaw = false;
                entity = EntityTypesEnum.GOVERNMENT;
                hasGeo = false;
                isAnalysis = false;
                isMobile = false;
                limit = 488056L;
                location = new Object[]{{
                    add(722081L),
                }};
                manufacturerName = new String[]{{
                    add("voluptatem"),
                    add("cumque"),
                    add("soluta"),
                    add("nobis"),
                }};
                modelName = new String[]{{
                    add("saepe"),
                }};
                offset = 217450L;
                orderBy = LocationsGetV2LocationsLocationIdGetOrderByLocationsOrderEnum.CITY;
                page = 749255L;
                parameter = new Object[]{{
                    add("cupiditate"),
                    add(961937L),
                    add(292147L),
                }};
                parameterId = 286915L;
                radius = 240829L;
                sensorType = SensorTypesEnum.LOW_COST_SENSOR;
                sort = LocationsGetV2LocationsLocationIdGetSortSortEnum.ASC;
                sourceName = new String[]{{
                    add("aut"),
                }};
                unit = new String[]{{
                    add("itaque"),
                    add("consequatur"),
                    add("est"),
                }};
            }};            

            LocationsGetV2LocationsLocationIdGetResponse res = sdk.v2.locationsGetV2LocationsLocationIdGet(req);

            if (res.openAQResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## locationsGetV2LocationsGet

Locations Get

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LocationsGetV2LocationsGetOrderByLocationsOrderEnum;
import org.openapis.openapi.models.operations.LocationsGetV2LocationsGetRequest;
import org.openapis.openapi.models.operations.LocationsGetV2LocationsGetResponse;
import org.openapis.openapi.models.operations.LocationsGetV2LocationsGetSortSortEnum;
import org.openapis.openapi.models.shared.EntityTypesEnum;
import org.openapis.openapi.models.shared.SensorTypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LocationsGetV2LocationsGetRequest req = new LocationsGetV2LocationsGetRequest() {{
                city = new String[]{{
                    add("porro"),
                    add("doloribus"),
                    add("ut"),
                    add("facilis"),
                }};
                coordinates = "cupiditate";
                country = new String[]{{
                    add("quae"),
                }};
                countryId = "laudantium";
                dumpRaw = false;
                entity = EntityTypesEnum.COMMUNITY;
                hasGeo = false;
                isAnalysis = false;
                isMobile = false;
                limit = 580447L;
                location = new Object[]{{
                    add("vero"),
                    add("quis"),
                    add(961571L),
                    add(231701L),
                }};
                locationId = 878870L;
                manufacturerName = new String[]{{
                    add("dignissimos"),
                    add("hic"),
                    add("distinctio"),
                    add("quod"),
                }};
                modelName = new String[]{{
                    add("similique"),
                    add("facilis"),
                }};
                offset = 874288L;
                orderBy = LocationsGetV2LocationsGetOrderByLocationsOrderEnum.SOURCE_NAME;
                page = 293020L;
                parameter = new Object[]{{
                    add("sequi"),
                    add("impedit"),
                    add(974259L),
                    add(862310L),
                }};
                parameterId = 148141L;
                radius = 780427L;
                sensorType = SensorTypesEnum.LOW_COST_SENSOR;
                sort = LocationsGetV2LocationsGetSortSortEnum.DESC;
                sourceName = new String[]{{
                    add("eligendi"),
                    add("ducimus"),
                }};
                unit = new String[]{{
                    add("officia"),
                }};
            }};            

            LocationsGetV2LocationsGetResponse res = sdk.v2.locationsGetV2LocationsGet(req);

            if (res.openAQResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## measurementsGetV2MeasurementsGet

Measurements Get

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MeasurementsGetV2MeasurementsGetOrderByMeasOrderEnum;
import org.openapis.openapi.models.operations.MeasurementsGetV2MeasurementsGetRequest;
import org.openapis.openapi.models.operations.MeasurementsGetV2MeasurementsGetResponse;
import org.openapis.openapi.models.operations.MeasurementsGetV2MeasurementsGetSortSortEnum;
import org.openapis.openapi.models.shared.EntityTypesEnum;
import org.openapis.openapi.models.shared.SensorTypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MeasurementsGetV2MeasurementsGetRequest req = new MeasurementsGetV2MeasurementsGetRequest() {{
                city = new String[]{{
                    add("ipsam"),
                    add("ea"),
                }};
                coordinates = "aspernatur";
                country = new String[]{{
                    add("possimus"),
                    add("magnam"),
                }};
                countryId = "ratione";
                dateFrom = OffsetDateTime.parse("2022-10-04T22:05:21.038Z");
                dateTo = OffsetDateTime.parse("2022-09-15T20:38:47.955Z");
                entity = EntityTypesEnum.COMMUNITY;
                format = "nulla";
                hasGeo = false;
                includeFields = "excepturi";
                isAnalysis = false;
                isMobile = false;
                limit = 972920L;
                location = new Object[]{{
                    add("quisquam"),
                    add("ea"),
                }};
                locationId = 774048L;
                offset = 359271L;
                orderBy = MeasurementsGetV2MeasurementsGetOrderByMeasOrderEnum.COUNTRY;
                page = 399499L;
                parameter = new Object[]{{
                    add(407241L),
                }};
                parameterId = 775220L;
                project = 232234L;
                radius = 926213L;
                sensorType = SensorTypesEnum.REFERENCE_GRADE;
                sort = MeasurementsGetV2MeasurementsGetSortSortEnum.ASC;
                unit = new String[]{{
                    add("a"),
                }};
                valueFrom = 7255.95;
                valueTo = 139.48;
            }};            

            MeasurementsGetV2MeasurementsGetResponse res = sdk.v2.measurementsGetV2MeasurementsGet(req);

            if (res.measurementsGetV2MeasurementsGet200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mfrGetV2ManufacturersGet

Mfr Get

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MfrGetV2ManufacturersGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MfrGetV2ManufacturersGetResponse res = sdk.v2.mfrGetV2ManufacturersGet();

            if (res.openAQResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJsonGet

Mobilegentilejson

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJsonGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJsonGetResponse res = sdk.v2.mobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJsonGet();

            if (res.tileJSON != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mobiletilejsonV2LocationsTilesMobileTilesJsonGet

Mobiletilejson

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MobiletilejsonV2LocationsTilesMobileTilesJsonGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MobiletilejsonV2LocationsTilesMobileTilesJsonGetResponse res = sdk.v2.mobiletilejsonV2LocationsTilesMobileTilesJsonGet();

            if (res.tileJSON != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modelGetV2ModelsGet

Model Get

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModelGetV2ModelsGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ModelGetV2ModelsGetResponse res = sdk.v2.modelGetV2ModelsGet();

            if (res.openAQResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## parametersGetV2ParametersGet

Parameters Get

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ParametersGetV2ParametersGetRequest;
import org.openapis.openapi.models.operations.ParametersGetV2ParametersGetResponse;
import org.openapis.openapi.models.operations.ParametersGetV2ParametersGetSortSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ParametersGetV2ParametersGetRequest req = new ParametersGetV2ParametersGetRequest() {{
                limit = 11427L;
                offset = 533466L;
                orderBy = "aliquam";
                page = 146946L;
                sort = ParametersGetV2ParametersGetSortSortEnum.DESC;
                sourceId = new Long[]{{
                    add(250622L),
                }};
                sourceName = new String[]{{
                    add("dolorum"),
                }};
                sourceSlug = new String[]{{
                    add("placeat"),
                    add("velit"),
                    add("eum"),
                }};
            }};            

            ParametersGetV2ParametersGetResponse res = sdk.v2.parametersGetV2ParametersGet(req);

            if (res.openAQParametersResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectsGetV2ProjectsProjectIdGet

Projects Get

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectsGetV2ProjectsProjectIdGetOrderByProjectsOrderEnum;
import org.openapis.openapi.models.operations.ProjectsGetV2ProjectsProjectIdGetRequest;
import org.openapis.openapi.models.operations.ProjectsGetV2ProjectsProjectIdGetResponse;
import org.openapis.openapi.models.operations.ProjectsGetV2ProjectsProjectIdGetSortSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProjectsGetV2ProjectsProjectIdGetRequest req = new ProjectsGetV2ProjectsProjectIdGetRequest(420539L) {{
                country = new String[]{{
                    add("quas"),
                    add("assumenda"),
                    add("nulla"),
                    add("voluptas"),
                }};
                countryId = "libero";
                entity = "quasi";
                isAnalysis = false;
                isMobile = false;
                limit = 270328L;
                offset = 256139L;
                orderBy = ProjectsGetV2ProjectsProjectIdGetOrderByProjectsOrderEnum.ID;
                page = 591935L;
                parameter = new Object[]{{
                    add(301598L),
                }};
                parameterId = 487935L;
                project = new Object[]{{
                    add(456141L),
                    add("fuga"),
                }};
                sensorType = "reprehenderit";
                sort = ProjectsGetV2ProjectsProjectIdGetSortSortEnum.DESC;
                sourceName = new String[]{{
                    add("ut"),
                    add("eum"),
                    add("suscipit"),
                    add("assumenda"),
                }};
                unit = new String[]{{
                    add("praesentium"),
                }};
            }};            

            ProjectsGetV2ProjectsProjectIdGetResponse res = sdk.v2.projectsGetV2ProjectsProjectIdGet(req);

            if (res.openAQProjectsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectsGetV2ProjectsGet

Projects Get

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectsGetV2ProjectsGetOrderByProjectsOrderEnum;
import org.openapis.openapi.models.operations.ProjectsGetV2ProjectsGetRequest;
import org.openapis.openapi.models.operations.ProjectsGetV2ProjectsGetResponse;
import org.openapis.openapi.models.operations.ProjectsGetV2ProjectsGetSortSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProjectsGetV2ProjectsGetRequest req = new ProjectsGetV2ProjectsGetRequest() {{
                country = new String[]{{
                    add("veritatis"),
                    add("ipsa"),
                    add("id"),
                    add("quidem"),
                }};
                countryId = "neque";
                entity = "quo";
                isAnalysis = false;
                isMobile = false;
                limit = 847276L;
                offset = 777408L;
                orderBy = ProjectsGetV2ProjectsGetOrderByProjectsOrderEnum.FIRST_UPDATED;
                page = 259422L;
                parameter = new Object[]{{
                    add(69859L),
                }};
                parameterId = 587600L;
                project = new Object[]{{
                    add(892050L),
                }};
                projectId = 370853L;
                sensorType = "aspernatur";
                sort = ProjectsGetV2ProjectsGetSortSortEnum.ASC;
                sourceName = new String[]{{
                    add("esse"),
                    add("recusandae"),
                    add("aperiam"),
                    add("distinctio"),
                }};
                unit = new String[]{{
                    add("dignissimos"),
                    add("inventore"),
                    add("nihil"),
                    add("totam"),
                }};
            }};            

            ProjectsGetV2ProjectsGetResponse res = sdk.v2.projectsGetV2ProjectsGet(req);

            if (res.openAQProjectsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## readmeGetV2SourcesReadmeSlugGet

Readme Get

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReadmeGetV2SourcesReadmeSlugGetRequest;
import org.openapis.openapi.models.operations.ReadmeGetV2SourcesReadmeSlugGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReadmeGetV2SourcesReadmeSlugGetRequest req = new ReadmeGetV2SourcesReadmeSlugGetRequest("accusamus");            

            ReadmeGetV2SourcesReadmeSlugGetResponse res = sdk.v2.readmeGetV2SourcesReadmeSlugGet(req);

            if (res.readmeGetV2SourcesReadmeSlugGet200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sourcesGetV2SourcesGet

Sources Get

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SourcesGetV2SourcesGetOrderBySourcesOrderEnum;
import org.openapis.openapi.models.operations.SourcesGetV2SourcesGetRequest;
import org.openapis.openapi.models.operations.SourcesGetV2SourcesGetResponse;
import org.openapis.openapi.models.operations.SourcesGetV2SourcesGetSortSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SourcesGetV2SourcesGetRequest req = new SourcesGetV2SourcesGetRequest() {{
                limit = 306810L;
                offset = 488410L;
                orderBy = SourcesGetV2SourcesGetOrderBySourcesOrderEnum.FIRST_UPDATED;
                page = 414567L;
                sort = SourcesGetV2SourcesGetSortSortEnum.DESC;
                sourceId = new Long[]{{
                    add(645570L),
                }};
                sourceName = new String[]{{
                    add("accusantium"),
                    add("porro"),
                }};
                sourceSlug = new String[]{{
                    add("quas"),
                    add("praesentium"),
                }};
            }};            

            SourcesGetV2SourcesGetResponse res = sdk.v2.sourcesGetV2SourcesGet(req);

            if (res.openAQResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## summaryGetV2SummaryGet

Summary Get

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SummaryGetV2SummaryGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SummaryGetV2SummaryGetResponse res = sdk.v2.summaryGetV2SummaryGet();

            if (res.openAQResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tilejsonV2LocationsTilesTilesJsonGet

Tilejson

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TilejsonV2LocationsTilesTilesJsonGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TilejsonV2LocationsTilesTilesJsonGetResponse res = sdk.v2.tilejsonV2LocationsTilesTilesJsonGet();

            if (res.tileJSON != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
