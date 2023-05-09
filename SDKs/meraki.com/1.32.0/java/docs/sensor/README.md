# sensor

### Available Operations

* [createNetworkSensorAlertsProfile](#createnetworksensoralertsprofile) - Creates a sensor alert profile for a network.
* [deleteNetworkSensorAlertsProfile](#deletenetworksensoralertsprofile) - Deletes a sensor alert profile from a network.
* [getDeviceSensorRelationships](#getdevicesensorrelationships) - List the sensor roles for a given sensor or camera device.
* [getNetworkSensorAlertsCurrentOverviewByMetric](#getnetworksensoralertscurrentoverviewbymetric) - Return an overview of currently alerting sensors by metric
* [getNetworkSensorAlertsOverviewByMetric](#getnetworksensoralertsoverviewbymetric) - Return an overview of alert occurrences over a timespan, by metric
* [getNetworkSensorAlertsProfile](#getnetworksensoralertsprofile) - Show details of a sensor alert profile for a network.
* [getNetworkSensorAlertsProfiles](#getnetworksensoralertsprofiles) - Lists all sensor alert profiles for a network.
* [getNetworkSensorRelationships](#getnetworksensorrelationships) - List the sensor roles for devices in a given network
* [getOrganizationSensorReadingsHistory](#getorganizationsensorreadingshistory) - Return all reported readings from sensors in a given timespan, sorted by timestamp
* [getOrganizationSensorReadingsLatest](#getorganizationsensorreadingslatest) - Return the latest available reading for each metric from each sensor, sorted by sensor serial
* [updateDeviceSensorRelationships](#updatedevicesensorrelationships) - Assign one or more sensor roles to a given sensor or camera device.
* [updateNetworkSensorAlertsProfile](#updatenetworksensoralertsprofile) - Updates a sensor alert profile for a network.

## createNetworkSensorAlertsProfile

Creates a sensor alert profile for a network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkSensorAlertsProfileRequest;
import org.openapis.openapi.models.operations.CreateNetworkSensorAlertsProfileRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkSensorAlertsProfileRequestBodyConditions;
import org.openapis.openapi.models.operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnum;
import org.openapis.openapi.models.operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnum;
import org.openapis.openapi.models.operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThreshold;
import org.openapis.openapi.models.operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor;
import org.openapis.openapi.models.operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity;
import org.openapis.openapi.models.operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnum;
import org.openapis.openapi.models.operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality;
import org.openapis.openapi.models.operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnum;
import org.openapis.openapi.models.operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise;
import org.openapis.openapi.models.operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient;
import org.openapis.openapi.models.operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum;
import org.openapis.openapi.models.operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25;
import org.openapis.openapi.models.operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnum;
import org.openapis.openapi.models.operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature;
import org.openapis.openapi.models.operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnum;
import org.openapis.openapi.models.operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc;
import org.openapis.openapi.models.operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnum;
import org.openapis.openapi.models.operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater;
import org.openapis.openapi.models.operations.CreateNetworkSensorAlertsProfileRequestBodyRecipients;
import org.openapis.openapi.models.operations.CreateNetworkSensorAlertsProfileRequestBodySchedule;
import org.openapis.openapi.models.operations.CreateNetworkSensorAlertsProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSensorAlertsProfileRequest req = new CreateNetworkSensorAlertsProfileRequest(                new CreateNetworkSensorAlertsProfileRequestBody(                new org.openapis.openapi.models.operations.CreateNetworkSensorAlertsProfileRequestBodyConditions[]{{
                                                add(new CreateNetworkSensorAlertsProfileRequestBodyConditions("temporibus",                 new CreateNetworkSensorAlertsProfileRequestBodyConditionsThreshold() {{
                                                                    door = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor(false);;
                                                                    humidity = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity() {{
                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnum.POOR;
                                                                        relativePercentage = 453495L;
                                                                    }};;
                                                                    indoorAirQuality = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality() {{
                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnum.INADEQUATE;
                                                                        score = 290426L;
                                                                    }};;
                                                                    noise = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise(                new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                                                                        level = 870192L;
                                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.GOOD;
                                                                                    }};);;
                                                                    pm25 = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25() {{
                                                                        concentration = 980741L;
                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnum.POOR;
                                                                    }};;
                                                                    temperature = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature() {{
                                                                        celsius = 6685.83;
                                                                        fahrenheit = 1638.34;
                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnum.POOR;
                                                                    }};;
                                                                    tvoc = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc() {{
                                                                        concentration = 855872L;
                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnum.INADEQUATE;
                                                                    }};;
                                                                    water = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater(false);;
                                                                }};) {{
                                                    direction = CreateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnum.BELOW;
                                                    duration = CreateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnum.ONE_HUNDRED_AND_EIGHTY;
                                                    metric = "mollitia";
                                                    threshold = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThreshold() {{
                                                        door = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor(false) {{
                                                            open = false;
                                                        }};
                                                        humidity = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity() {{
                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnum.POOR;
                                                            relativePercentage = 198334L;
                                                        }};
                                                        indoorAirQuality = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality() {{
                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnum.FAIR;
                                                            score = 444537L;
                                                        }};
                                                        noise = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise(                new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                                                            level = 895606L;
                                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.GOOD;
                                                                        }};) {{
                                                            ambient = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                                                level = 633329L;
                                                                quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.INADEQUATE;
                                                            }};
                                                        }};
                                                        pm25 = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25() {{
                                                            concentration = 249048L;
                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnum.FAIR;
                                                        }};
                                                        temperature = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature() {{
                                                            celsius = 1992.51;
                                                            fahrenheit = 3884.04;
                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnum.POOR;
                                                        }};
                                                        tvoc = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc() {{
                                                            concentration = 530224L;
                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnum.FAIR;
                                                        }};
                                                        water = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater(false) {{
                                                            present = false;
                                                        }};
                                                    }};
                                                }}),
                                            }}, "eveniet") {{
                                recipients = new CreateNetworkSensorAlertsProfileRequestBodyRecipients() {{
                                    emails = new String[]{{
                                        add("dolores"),
                                    }};
                                    httpServerIds = new String[]{{
                                        add("iste"),
                                    }};
                                    smsNumbers = new String[]{{
                                        add("at"),
                                    }};
                                }};;
                                schedule = new CreateNetworkSensorAlertsProfileRequestBodySchedule() {{
                                    id = "9975a944-0562-43e5-8fdf-b424a25e83b6";
                                }};;
                                serials = new String[]{{
                                    add("quidem"),
                                }};
                            }};, "placeat");            

            CreateNetworkSensorAlertsProfileResponse res = sdk.sensor.createNetworkSensorAlertsProfile(req);

            if (res.createNetworkSensorAlertsProfile200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkSensorAlertsProfile

Deletes a sensor alert profile from a network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkSensorAlertsProfileRequest;
import org.openapis.openapi.models.operations.DeleteNetworkSensorAlertsProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSensorAlertsProfileRequest req = new DeleteNetworkSensorAlertsProfileRequest("corrupti", "asperiores");            

            DeleteNetworkSensorAlertsProfileResponse res = sdk.sensor.deleteNetworkSensorAlertsProfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceSensorRelationships

List the sensor roles for a given sensor or camera device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceSensorRelationshipsRequest;
import org.openapis.openapi.models.operations.GetDeviceSensorRelationshipsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSensorRelationshipsRequest req = new GetDeviceSensorRelationshipsRequest("aspernatur");            

            GetDeviceSensorRelationshipsResponse res = sdk.sensor.getDeviceSensorRelationships(req);

            if (res.getDeviceSensorRelationships200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSensorAlertsCurrentOverviewByMetric

Return an overview of currently alerting sensors by metric

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSensorAlertsCurrentOverviewByMetricRequest;
import org.openapis.openapi.models.operations.GetNetworkSensorAlertsCurrentOverviewByMetricResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSensorAlertsCurrentOverviewByMetricRequest req = new GetNetworkSensorAlertsCurrentOverviewByMetricRequest("ex");            

            GetNetworkSensorAlertsCurrentOverviewByMetricResponse res = sdk.sensor.getNetworkSensorAlertsCurrentOverviewByMetric(req);

            if (res.getNetworkSensorAlertsCurrentOverviewByMetric200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSensorAlertsOverviewByMetric

Return an overview of alert occurrences over a timespan, by metric

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSensorAlertsOverviewByMetricRequest;
import org.openapis.openapi.models.operations.GetNetworkSensorAlertsOverviewByMetricResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSensorAlertsOverviewByMetricRequest req = new GetNetworkSensorAlertsOverviewByMetricRequest("molestias") {{
                interval = 107598L;
                t0 = "placeat";
                t1 = "pariatur";
                timespan = 3459.43;
            }};            

            GetNetworkSensorAlertsOverviewByMetricResponse res = sdk.sensor.getNetworkSensorAlertsOverviewByMetric(req);

            if (res.getNetworkSensorAlertsOverviewByMetric200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSensorAlertsProfile

Show details of a sensor alert profile for a network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSensorAlertsProfileRequest;
import org.openapis.openapi.models.operations.GetNetworkSensorAlertsProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSensorAlertsProfileRequest req = new GetNetworkSensorAlertsProfileRequest("saepe", "aut");            

            GetNetworkSensorAlertsProfileResponse res = sdk.sensor.getNetworkSensorAlertsProfile(req);

            if (res.getNetworkSensorAlertsProfile200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSensorAlertsProfiles

Lists all sensor alert profiles for a network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSensorAlertsProfilesRequest;
import org.openapis.openapi.models.operations.GetNetworkSensorAlertsProfilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSensorAlertsProfilesRequest req = new GetNetworkSensorAlertsProfilesRequest("ex");            

            GetNetworkSensorAlertsProfilesResponse res = sdk.sensor.getNetworkSensorAlertsProfiles(req);

            if (res.getNetworkSensorAlertsProfiles200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSensorRelationships

List the sensor roles for devices in a given network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSensorRelationshipsRequest;
import org.openapis.openapi.models.operations.GetNetworkSensorRelationshipsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSensorRelationshipsRequest req = new GetNetworkSensorRelationshipsRequest("numquam");            

            GetNetworkSensorRelationshipsResponse res = sdk.sensor.getNetworkSensorRelationships(req);

            if (res.getNetworkSensorRelationships200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSensorReadingsHistory

Return all reported readings from sensors in a given timespan, sorted by timestamp

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSensorReadingsHistoryRequest;
import org.openapis.openapi.models.operations.GetOrganizationSensorReadingsHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSensorReadingsHistoryRequest req = new GetOrganizationSensorReadingsHistoryRequest("numquam") {{
                endingBefore = "consequuntur";
                metrics = new String[]{{
                    add("enim"),
                    add("voluptatum"),
                }};
                networkIds = new String[]{{
                    add("accusantium"),
                    add("repellat"),
                }};
                perPage = 550425L;
                serials = new String[]{{
                    add("eaque"),
                    add("deserunt"),
                    add("consequatur"),
                    add("distinctio"),
                }};
                startingAfter = "quibusdam";
                t0 = "exercitationem";
                t1 = "odit";
                timespan = 6419.54;
            }};            

            GetOrganizationSensorReadingsHistoryResponse res = sdk.sensor.getOrganizationSensorReadingsHistory(req);

            if (res.getOrganizationSensorReadingsHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSensorReadingsLatest

Return the latest available reading for each metric from each sensor, sorted by sensor serial

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSensorReadingsLatestRequest;
import org.openapis.openapi.models.operations.GetOrganizationSensorReadingsLatestResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSensorReadingsLatestRequest req = new GetOrganizationSensorReadingsLatestRequest("doloremque") {{
                endingBefore = "explicabo";
                metrics = new String[]{{
                    add("repellat"),
                    add("doloribus"),
                }};
                networkIds = new String[]{{
                    add("quos"),
                    add("voluptas"),
                    add("optio"),
                }};
                perPage = 467910L;
                serials = new String[]{{
                    add("aliquam"),
                    add("nobis"),
                    add("laborum"),
                }};
                startingAfter = "ducimus";
            }};            

            GetOrganizationSensorReadingsLatestResponse res = sdk.sensor.getOrganizationSensorReadingsLatest(req);

            if (res.getOrganizationSensorReadingsLatest200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceSensorRelationships

Assign one or more sensor roles to a given sensor or camera device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceSensorRelationshipsRequest;
import org.openapis.openapi.models.operations.UpdateDeviceSensorRelationshipsRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceSensorRelationshipsRequestBodyLivestream;
import org.openapis.openapi.models.operations.UpdateDeviceSensorRelationshipsRequestBodyLivestreamRelatedDevices;
import org.openapis.openapi.models.operations.UpdateDeviceSensorRelationshipsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceSensorRelationshipsRequest req = new UpdateDeviceSensorRelationshipsRequest("repellat") {{
                requestBody = new UpdateDeviceSensorRelationshipsRequestBody() {{
                    livestream = new UpdateDeviceSensorRelationshipsRequestBodyLivestream() {{
                        relatedDevices = new org.openapis.openapi.models.operations.UpdateDeviceSensorRelationshipsRequestBodyLivestreamRelatedDevices[]{{
                            add(new UpdateDeviceSensorRelationshipsRequestBodyLivestreamRelatedDevices("in") {{
                                serial = "recusandae";
                            }}),
                            add(new UpdateDeviceSensorRelationshipsRequestBodyLivestreamRelatedDevices("numquam") {{
                                serial = "fugiat";
                            }}),
                            add(new UpdateDeviceSensorRelationshipsRequestBodyLivestreamRelatedDevices("maxime") {{
                                serial = "illo";
                            }}),
                        }};
                    }};;
                }};;
            }};            

            UpdateDeviceSensorRelationshipsResponse res = sdk.sensor.updateDeviceSensorRelationships(req);

            if (res.updateDeviceSensorRelationships200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSensorAlertsProfile

Updates a sensor alert profile for a network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSensorAlertsProfileRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSensorAlertsProfileRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSensorAlertsProfileRequestBodyConditions;
import org.openapis.openapi.models.operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThreshold;
import org.openapis.openapi.models.operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor;
import org.openapis.openapi.models.operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity;
import org.openapis.openapi.models.operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality;
import org.openapis.openapi.models.operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise;
import org.openapis.openapi.models.operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient;
import org.openapis.openapi.models.operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25;
import org.openapis.openapi.models.operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature;
import org.openapis.openapi.models.operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc;
import org.openapis.openapi.models.operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater;
import org.openapis.openapi.models.operations.UpdateNetworkSensorAlertsProfileRequestBodyRecipients;
import org.openapis.openapi.models.operations.UpdateNetworkSensorAlertsProfileRequestBodySchedule;
import org.openapis.openapi.models.operations.UpdateNetworkSensorAlertsProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSensorAlertsProfileRequest req = new UpdateNetworkSensorAlertsProfileRequest("sequi", "nemo") {{
                requestBody = new UpdateNetworkSensorAlertsProfileRequestBody() {{
                    conditions = new org.openapis.openapi.models.operations.UpdateNetworkSensorAlertsProfileRequestBodyConditions[]{{
                        add(new UpdateNetworkSensorAlertsProfileRequestBodyConditions("quod",                 new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThreshold() {{
                                            door = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor(false);;
                                            humidity = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity() {{
                                                quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnum.INADEQUATE;
                                                relativePercentage = 564094L;
                                            }};;
                                            indoorAirQuality = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality() {{
                                                quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnum.POOR;
                                                score = 675885L;
                                            }};;
                                            noise = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise(                new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                                                level = 133477L;
                                                                quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.INADEQUATE;
                                                            }};);;
                                            pm25 = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25() {{
                                                concentration = 319710L;
                                                quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnum.FAIR;
                                            }};;
                                            temperature = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature() {{
                                                celsius = 7528.28;
                                                fahrenheit = 7788.83;
                                                quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnum.GOOD;
                                            }};;
                                            tvoc = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc() {{
                                                concentration = 232807L;
                                                quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnum.FAIR;
                                            }};;
                                            water = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater(false);;
                                        }};) {{
                            direction = UpdateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnum.BELOW;
                            duration = UpdateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnum.ZERO;
                            metric = "ad";
                            threshold = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThreshold() {{
                                door = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor(false) {{
                                    open = false;
                                }};
                                humidity = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity() {{
                                    quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnum.INADEQUATE;
                                    relativePercentage = 683372L;
                                }};
                                indoorAirQuality = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality() {{
                                    quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnum.POOR;
                                    score = 204993L;
                                }};
                                noise = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise(                new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                                    level = 102556L;
                                                    quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.INADEQUATE;
                                                }};) {{
                                    ambient = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                        level = 615357L;
                                        quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.GOOD;
                                    }};
                                }};
                                pm25 = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25() {{
                                    concentration = 607715L;
                                    quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnum.GOOD;
                                }};
                                temperature = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature() {{
                                    celsius = 7538.38;
                                    fahrenheit = 9914.06;
                                    quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnum.GOOD;
                                }};
                                tvoc = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc() {{
                                    concentration = 513934L;
                                    quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnum.POOR;
                                }};
                                water = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater(false) {{
                                    present = false;
                                }};
                            }};
                        }}),
                    }};
                    name = "Fannie Cassin";
                    recipients = new UpdateNetworkSensorAlertsProfileRequestBodyRecipients() {{
                        emails = new String[]{{
                            add("in"),
                            add("harum"),
                        }};
                        httpServerIds = new String[]{{
                            add("facilis"),
                            add("asperiores"),
                        }};
                        smsNumbers = new String[]{{
                            add("voluptates"),
                        }};
                    }};;
                    schedule = new UpdateNetworkSensorAlertsProfileRequestBodySchedule() {{
                        id = "218b258a-cdeb-4a05-ae9d-d1f3c88029c9";
                    }};;
                    serials = new String[]{{
                        add("neque"),
                        add("repudiandae"),
                        add("optio"),
                    }};
                }};;
            }};            

            UpdateNetworkSensorAlertsProfileResponse res = sdk.sensor.updateNetworkSensorAlertsProfile(req);

            if (res.updateNetworkSensorAlertsProfile200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
