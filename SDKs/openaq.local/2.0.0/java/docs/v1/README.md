# v1

### Available Operations

* [citiesGetv1V1CitiesGet](#citiesgetv1v1citiesget) - Provides a simple listing of cities within the platform
* [countriesGetV1CountriesCountryIdGet](#countriesgetv1countriescountryidget) - Countries Get
* [countriesGetv1V1CountriesGet](#countriesgetv1v1countriesget) - Countries Getv1
* [latestV1GetV1LatestLocationIdGet](#latestv1getv1latestlocationidget) - Latest V1 Get
* [latestV1GetV1LatestGet](#latestv1getv1latestget) - Latest V1 Get
* [locationsv1GetV1LocationsLocationIdGet](#locationsv1getv1locationslocationidget) - Locationsv1 Get
* [locationsv1GetV1LocationsGet](#locationsv1getv1locationsget) - Locationsv1 Get
* [measurementsGetV1V1MeasurementsGet](#measurementsgetv1v1measurementsget) - Measurements Get V1
* [parametersGetv1V1ParametersGet](#parametersgetv1v1parametersget) - Parameters Getv1
* [sourcesV1GetV1SourcesGet](#sourcesv1getv1sourcesget) - Sources V1 Get

## citiesGetv1V1CitiesGet

Provides a simple listing of cities within the platform

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CitiesGetv1V1CitiesGetOrderByCitiesOrderEnum;
import org.openapis.openapi.models.operations.CitiesGetv1V1CitiesGetRequest;
import org.openapis.openapi.models.operations.CitiesGetv1V1CitiesGetResponse;
import org.openapis.openapi.models.operations.CitiesGetv1V1CitiesGetSortSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CitiesGetv1V1CitiesGetRequest req = new CitiesGetv1V1CitiesGetRequest() {{
                city = new String[]{{
                    add("provident"),
                    add("distinctio"),
                    add("quibusdam"),
                }};
                country = new String[]{{
                    add("nulla"),
                    add("corrupti"),
                    add("illum"),
                }};
                countryId = "vel";
                entity = "error";
                limit = 645894L;
                offset = 384382L;
                orderBy = CitiesGetv1V1CitiesGetOrderByCitiesOrderEnum.COUNTRY;
                page = 297534L;
                sort = CitiesGetv1V1CitiesGetSortSortEnum.DESC;
            }};            

            CitiesGetv1V1CitiesGetResponse res = sdk.v1.citiesGetv1V1CitiesGet(req);

            if (res.openAQCitiesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## countriesGetV1CountriesCountryIdGet

Countries Get

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CountriesGetV1CountriesCountryIdGetOrderByCountriesOrderEnum;
import org.openapis.openapi.models.operations.CountriesGetV1CountriesCountryIdGetRequest;
import org.openapis.openapi.models.operations.CountriesGetV1CountriesCountryIdGetResponse;
import org.openapis.openapi.models.operations.CountriesGetV1CountriesCountryIdGetSortSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CountriesGetV1CountriesCountryIdGetRequest req = new CountriesGetV1CountriesCountryIdGetRequest("ipsa") {{
                country = new String[]{{
                    add("tempora"),
                    add("suscipit"),
                    add("molestiae"),
                    add("minus"),
                }};
                limit = 812169L;
                offset = 528895L;
                orderBy = CountriesGetV1CountriesCountryIdGetOrderByCountriesOrderEnum.LAST_UPDATED;
                page = 568045L;
                sort = CountriesGetV1CountriesCountryIdGetSortSortEnum.ASC;
            }};            

            CountriesGetV1CountriesCountryIdGetResponse res = sdk.v1.countriesGetV1CountriesCountryIdGet(req);

            if (res.openAQCountriesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## countriesGetv1V1CountriesGet

Countries Getv1

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CountriesGetv1V1CountriesGetOrderByCountriesOrderEnum;
import org.openapis.openapi.models.operations.CountriesGetv1V1CountriesGetRequest;
import org.openapis.openapi.models.operations.CountriesGetv1V1CountriesGetResponse;
import org.openapis.openapi.models.operations.CountriesGetv1V1CountriesGetSortSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CountriesGetv1V1CountriesGetRequest req = new CountriesGetv1V1CountriesGetRequest() {{
                country = new String[]{{
                    add("temporibus"),
                    add("ab"),
                    add("quis"),
                    add("veritatis"),
                }};
                countryId = "deserunt";
                limit = 20218L;
                offset = 368241L;
                orderBy = CountriesGetv1V1CountriesGetOrderByCountriesOrderEnum.COUNT;
                page = 957156L;
                sort = CountriesGetv1V1CountriesGetSortSortEnum.DESC;
            }};            

            CountriesGetv1V1CountriesGetResponse res = sdk.v1.countriesGetv1V1CountriesGet(req);

            if (res.openAQCountriesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## latestV1GetV1LatestLocationIdGet

Latest V1 Get

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LatestV1GetV1LatestLocationIdGetOrderByLocationsOrderEnum;
import org.openapis.openapi.models.operations.LatestV1GetV1LatestLocationIdGetRequest;
import org.openapis.openapi.models.operations.LatestV1GetV1LatestLocationIdGetResponse;
import org.openapis.openapi.models.operations.LatestV1GetV1LatestLocationIdGetSortSortEnum;
import org.openapis.openapi.models.shared.EntityTypesEnum;
import org.openapis.openapi.models.shared.SensorTypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LatestV1GetV1LatestLocationIdGetRequest req = new LatestV1GetV1LatestLocationIdGetRequest(140350L) {{
                city = new String[]{{
                    add("at"),
                    add("maiores"),
                    add("molestiae"),
                    add("quod"),
                }};
                coordinates = "quod";
                country = new String[]{{
                    add("totam"),
                    add("porro"),
                }};
                countryId = "dolorum";
                dumpRaw = false;
                entity = EntityTypesEnum.GOVERNMENT;
                hasGeo = false;
                isAnalysis = false;
                isMobile = false;
                limit = 720633L;
                location = new Object[]{{
                    add("fugit"),
                    add("hic"),
                    add("totam"),
                }};
                manufacturerName = new String[]{{
                    add("commodi"),
                }};
                modelName = new String[]{{
                    add("modi"),
                    add("qui"),
                }};
                offset = 774234L;
                orderBy = LatestV1GetV1LatestLocationIdGetOrderByLocationsOrderEnum.LAST_UPDATED;
                page = 456150L;
                parameter = new Object[]{{
                    add("aspernatur"),
                }};
                parameterId = 18789L;
                radius = 324141L;
                sensorType = SensorTypesEnum.LOW_COST_SENSOR;
                sort = LatestV1GetV1LatestLocationIdGetSortSortEnum.ASC;
                sourceName = new String[]{{
                    add("dolor"),
                    add("natus"),
                    add("laboriosam"),
                }};
                unit = new String[]{{
                    add("saepe"),
                    add("fuga"),
                    add("in"),
                    add("corporis"),
                }};
            }};            

            LatestV1GetV1LatestLocationIdGetResponse res = sdk.v1.latestV1GetV1LatestLocationIdGet(req);

            if (res.openAQResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## latestV1GetV1LatestGet

Latest V1 Get

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LatestV1GetV1LatestGetOrderByLocationsOrderEnum;
import org.openapis.openapi.models.operations.LatestV1GetV1LatestGetRequest;
import org.openapis.openapi.models.operations.LatestV1GetV1LatestGetResponse;
import org.openapis.openapi.models.operations.LatestV1GetV1LatestGetSortSortEnum;
import org.openapis.openapi.models.shared.EntityTypesEnum;
import org.openapis.openapi.models.shared.SensorTypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LatestV1GetV1LatestGetRequest req = new LatestV1GetV1LatestGetRequest() {{
                city = new String[]{{
                    add("iure"),
                    add("saepe"),
                    add("quidem"),
                }};
                coordinates = "architecto";
                country = new String[]{{
                    add("reiciendis"),
                }};
                countryId = "est";
                dumpRaw = false;
                entity = EntityTypesEnum.COMMUNITY;
                hasGeo = false;
                isAnalysis = false;
                isMobile = false;
                limit = 670638L;
                location = new Object[]{{
                    add(358152L),
                }};
                locationId = 128926L;
                manufacturerName = new String[]{{
                    add("enim"),
                    add("omnis"),
                    add("nemo"),
                    add("minima"),
                }};
                modelName = new String[]{{
                    add("accusantium"),
                    add("iure"),
                    add("culpa"),
                }};
                offset = 988374L;
                orderBy = LatestV1GetV1LatestGetOrderByLocationsOrderEnum.RANDOM;
                page = 102044L;
                parameter = new Object[]{{
                    add(635059L),
                    add(995300L),
                    add("occaecati"),
                }};
                parameterId = 253291L;
                radius = 414369L;
                sensorType = SensorTypesEnum.REFERENCE_GRADE;
                sort = LatestV1GetV1LatestGetSortSortEnum.ASC;
                sourceName = new String[]{{
                    add("error"),
                }};
                unit = new String[]{{
                    add("quis"),
                }};
            }};            

            LatestV1GetV1LatestGetResponse res = sdk.v1.latestV1GetV1LatestGet(req);

            if (res.openAQResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## locationsv1GetV1LocationsLocationIdGet

Locationsv1 Get

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Locationsv1GetV1LocationsLocationIdGetOrderByLocationsOrderEnum;
import org.openapis.openapi.models.operations.Locationsv1GetV1LocationsLocationIdGetRequest;
import org.openapis.openapi.models.operations.Locationsv1GetV1LocationsLocationIdGetResponse;
import org.openapis.openapi.models.operations.Locationsv1GetV1LocationsLocationIdGetSortSortEnum;
import org.openapis.openapi.models.shared.EntityTypesEnum;
import org.openapis.openapi.models.shared.SensorTypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Locationsv1GetV1LocationsLocationIdGetRequest req = new Locationsv1GetV1LocationsLocationIdGetRequest(110375L) {{
                city = new String[]{{
                    add("animi"),
                    add("enim"),
                    add("odit"),
                }};
                coordinates = "quo";
                country = new String[]{{
                    add("tenetur"),
                }};
                countryId = "ipsam";
                dumpRaw = false;
                entity = EntityTypesEnum.COMMUNITY;
                hasGeo = false;
                isAnalysis = false;
                isMobile = false;
                limit = 820994L;
                location = new Object[]{{
                    add(622846L),
                }};
                manufacturerName = new String[]{{
                    add("laborum"),
                    add("quasi"),
                    add("reiciendis"),
                    add("voluptatibus"),
                }};
                modelName = new String[]{{
                    add("nihil"),
                    add("praesentium"),
                    add("voluptatibus"),
                    add("ipsa"),
                }};
                offset = 604846L;
                orderBy = Locationsv1GetV1LocationsLocationIdGetOrderByLocationsOrderEnum.SOURCE_NAME;
                page = 739264L;
                parameter = new Object[]{{
                    add(441711L),
                }};
                parameterId = 282807L;
                radius = 979587L;
                sensorType = SensorTypesEnum.REFERENCE_GRADE;
                sort = Locationsv1GetV1LocationsLocationIdGetSortSortEnum.ASC;
                sourceName = new String[]{{
                    add("iusto"),
                    add("dicta"),
                }};
                unit = new String[]{{
                    add("enim"),
                    add("accusamus"),
                    add("commodi"),
                }};
            }};            

            Locationsv1GetV1LocationsLocationIdGetResponse res = sdk.v1.locationsv1GetV1LocationsLocationIdGet(req);

            if (res.openAQResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## locationsv1GetV1LocationsGet

Locationsv1 Get

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Locationsv1GetV1LocationsGetOrderByLocationsOrderEnum;
import org.openapis.openapi.models.operations.Locationsv1GetV1LocationsGetRequest;
import org.openapis.openapi.models.operations.Locationsv1GetV1LocationsGetResponse;
import org.openapis.openapi.models.operations.Locationsv1GetV1LocationsGetSortSortEnum;
import org.openapis.openapi.models.shared.EntityTypesEnum;
import org.openapis.openapi.models.shared.SensorTypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Locationsv1GetV1LocationsGetRequest req = new Locationsv1GetV1LocationsGetRequest() {{
                city = new String[]{{
                    add("quae"),
                    add("ipsum"),
                    add("quidem"),
                    add("molestias"),
                }};
                coordinates = "excepturi";
                country = new String[]{{
                    add("modi"),
                    add("praesentium"),
                    add("rem"),
                    add("voluptates"),
                }};
                countryId = "quasi";
                dumpRaw = false;
                entity = EntityTypesEnum.RESEARCH;
                hasGeo = false;
                isAnalysis = false;
                isMobile = false;
                limit = 575947L;
                location = new Object[]{{
                    add("incidunt"),
                }};
                locationId = 318569L;
                manufacturerName = new String[]{{
                    add("est"),
                }};
                modelName = new String[]{{
                    add("explicabo"),
                    add("deserunt"),
                    add("distinctio"),
                    add("quibusdam"),
                }};
                offset = 289406L;
                orderBy = Locationsv1GetV1LocationsGetOrderByLocationsOrderEnum.LOCATION;
                page = 183191L;
                parameter = new Object[]{{
                    add("quos"),
                    add(164940L),
                }};
                parameterId = 828940L;
                radius = 369808L;
                sensorType = SensorTypesEnum.REFERENCE_GRADE;
                sort = Locationsv1GetV1LocationsGetSortSortEnum.ASC;
                sourceName = new String[]{{
                    add("excepturi"),
                    add("tempora"),
                    add("facilis"),
                }};
                unit = new String[]{{
                    add("labore"),
                    add("delectus"),
                    add("eum"),
                }};
            }};            

            Locationsv1GetV1LocationsGetResponse res = sdk.v1.locationsv1GetV1LocationsGet(req);

            if (res.openAQResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## measurementsGetV1V1MeasurementsGet

Measurements Get V1

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MeasurementsGetV1V1MeasurementsGetOrderByMeasOrderEnum;
import org.openapis.openapi.models.operations.MeasurementsGetV1V1MeasurementsGetRequest;
import org.openapis.openapi.models.operations.MeasurementsGetV1V1MeasurementsGetResponse;
import org.openapis.openapi.models.operations.MeasurementsGetV1V1MeasurementsGetSortSortEnum;
import org.openapis.openapi.models.shared.EntityTypesEnum;
import org.openapis.openapi.models.shared.SensorTypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MeasurementsGetV1V1MeasurementsGetRequest req = new MeasurementsGetV1V1MeasurementsGetRequest() {{
                city = new String[]{{
                    add("eligendi"),
                }};
                coordinates = "sint";
                country = new String[]{{
                    add("provident"),
                    add("necessitatibus"),
                }};
                countryId = "sint";
                dateFrom = LocalDate.parse("2022-02-09");
                dateTo = LocalDate.parse("2022-02-08");
                entity = EntityTypesEnum.COMMUNITY;
                format = "illum";
                hasGeo = false;
                includeFields = "maiores";
                isAnalysis = false;
                isMobile = false;
                limit = 699479L;
                location = new Object[]{{
                    add(767024L),
                }};
                locationId = 813798L;
                offset = 411820L;
                orderBy = MeasurementsGetV1V1MeasurementsGetOrderByMeasOrderEnum.COUNTRY;
                page = 675439L;
                parameter = new Object[]{{
                    add(581273L),
                    add(881736L),
                    add("quidem"),
                    add("nam"),
                }};
                parameterId = 659669L;
                project = 501324L;
                radius = 533206L;
                sensorType = SensorTypesEnum.LOW_COST_SENSOR;
                sort = MeasurementsGetV1V1MeasurementsGetSortSortEnum.ASC;
                unit = new String[]{{
                    add("nisi"),
                    add("vel"),
                    add("natus"),
                }};
                valueFrom = 6063.93;
                valueTo = 4748.67;
            }};            

            MeasurementsGetV1V1MeasurementsGetResponse res = sdk.v1.measurementsGetV1V1MeasurementsGet(req);

            if (res.measurementsGetV1V1MeasurementsGet200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## parametersGetv1V1ParametersGet

Parameters Getv1

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ParametersGetv1V1ParametersGetRequest;
import org.openapis.openapi.models.operations.ParametersGetv1V1ParametersGetResponse;
import org.openapis.openapi.models.operations.ParametersGetv1V1ParametersGetSortSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ParametersGetv1V1ParametersGetRequest req = new ParametersGetv1V1ParametersGetRequest() {{
                limit = 19193L;
                offset = 470132L;
                orderBy = "distinctio";
                page = 660174L;
                sort = ParametersGetv1V1ParametersGetSortSortEnum.ASC;
                sourceId = new Long[]{{
                    add(383462L),
                    add(618016L),
                }};
                sourceName = new String[]{{
                    add("eum"),
                    add("vero"),
                    add("aspernatur"),
                }};
                sourceSlug = new String[]{{
                    add("magnam"),
                }};
            }};            

            ParametersGetv1V1ParametersGetResponse res = sdk.v1.parametersGetv1V1ParametersGet(req);

            if (res.openAQParametersResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sourcesV1GetV1SourcesGet

Sources V1 Get

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SourcesV1GetV1SourcesGetOrderBySourcesV1OrderEnum;
import org.openapis.openapi.models.operations.SourcesV1GetV1SourcesGetRequest;
import org.openapis.openapi.models.operations.SourcesV1GetV1SourcesGetResponse;
import org.openapis.openapi.models.operations.SourcesV1GetV1SourcesGetSortSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SourcesV1GetV1SourcesGetRequest req = new SourcesV1GetV1SourcesGetRequest() {{
                limit = 92373L;
                name = "Derrick McLaughlin";
                offset = 33625L;
                orderBy = SourcesV1GetV1SourcesGetOrderBySourcesV1OrderEnum.NAME;
                page = 653201L;
                sort = SourcesV1GetV1SourcesGetSortSortEnum.DESC;
            }};            

            SourcesV1GetV1SourcesGetResponse res = sdk.v1.sourcesV1GetV1SourcesGet(req);

            if (res.openAQResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
