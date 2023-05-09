# profiles

### Available Operations

* [createNetworkSensorAlertsProfile](#createnetworksensoralertsprofile) - Creates a sensor alert profile for a network.
* [createOrganizationAlertsProfile](#createorganizationalertsprofile) - Create an organization-wide alert configuration
* [deleteNetworkSensorAlertsProfile](#deletenetworksensoralertsprofile) - Deletes a sensor alert profile from a network.
* [deleteOrganizationAlertsProfile](#deleteorganizationalertsprofile) - Removes an organization-wide alert config
* [getNetworkSensorAlertsProfile](#getnetworksensoralertsprofile) - Show details of a sensor alert profile for a network.
* [getNetworkSensorAlertsProfiles](#getnetworksensoralertsprofiles) - Lists all sensor alert profiles for a network.
* [getNetworkSmProfiles](#getnetworksmprofiles) - List all profiles in a network
* [getOrganizationAlertsProfiles](#getorganizationalertsprofiles) - List all organization-wide alert configurations
* [getOrganizationConfigTemplateSwitchProfilePort](#getorganizationconfigtemplateswitchprofileport) - Return a switch profile port
* [getOrganizationConfigTemplateSwitchProfilePorts](#getorganizationconfigtemplateswitchprofileports) - Return all the ports of a switch profile
* [getOrganizationConfigTemplateSwitchProfiles](#getorganizationconfigtemplateswitchprofiles) - List the switch profiles for your switch template configuration
* [updateNetworkSensorAlertsProfile](#updatenetworksensoralertsprofile) - Updates a sensor alert profile for a network.
* [updateOrganizationAlertsProfile](#updateorganizationalertsprofile) - Update an organization-wide alert config
* [updateOrganizationConfigTemplateSwitchProfilePort](#updateorganizationconfigtemplateswitchprofileport) - Update a switch profile port

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
                .setSecurity(new Security("dignissimos") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSensorAlertsProfileRequest req = new CreateNetworkSensorAlertsProfileRequest(                new CreateNetworkSensorAlertsProfileRequestBody(                new org.openapis.openapi.models.operations.CreateNetworkSensorAlertsProfileRequestBodyConditions[]{{
                                                add(new CreateNetworkSensorAlertsProfileRequestBodyConditions("quidem",                 new CreateNetworkSensorAlertsProfileRequestBodyConditionsThreshold() {{
                                                                    door = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor(false);;
                                                                    humidity = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity() {{
                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnum.POOR;
                                                                        relativePercentage = 57836L;
                                                                    }};;
                                                                    indoorAirQuality = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality() {{
                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnum.GOOD;
                                                                        score = 338690L;
                                                                    }};;
                                                                    noise = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise(                new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                                                                        level = 507153L;
                                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.GOOD;
                                                                                    }};);;
                                                                    pm25 = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25() {{
                                                                        concentration = 336223L;
                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnum.POOR;
                                                                    }};;
                                                                    temperature = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature() {{
                                                                        celsius = 1877.14;
                                                                        fahrenheit = 682.87;
                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnum.FAIR;
                                                                    }};;
                                                                    tvoc = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc() {{
                                                                        concentration = 137890L;
                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnum.POOR;
                                                                    }};;
                                                                    water = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater(false);;
                                                                }};) {{
                                                    direction = CreateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnum.ABOVE;
                                                    duration = CreateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnum.SIXTY;
                                                    metric = "consequuntur";
                                                    threshold = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThreshold() {{
                                                        door = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor(false) {{
                                                            open = false;
                                                        }};
                                                        humidity = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity() {{
                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnum.POOR;
                                                            relativePercentage = 558525L;
                                                        }};
                                                        indoorAirQuality = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality() {{
                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnum.INADEQUATE;
                                                            score = 778777L;
                                                        }};
                                                        noise = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise(                new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                                                            level = 680000L;
                                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.INADEQUATE;
                                                                        }};) {{
                                                            ambient = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                                                level = 622665L;
                                                                quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.POOR;
                                                            }};
                                                        }};
                                                        pm25 = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25() {{
                                                            concentration = 402291L;
                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnum.INADEQUATE;
                                                        }};
                                                        temperature = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature() {{
                                                            celsius = 3645.42;
                                                            fahrenheit = 4252.26;
                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnum.FAIR;
                                                        }};
                                                        tvoc = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc() {{
                                                            concentration = 520939L;
                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnum.POOR;
                                                        }};
                                                        water = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater(false) {{
                                                            present = false;
                                                        }};
                                                    }};
                                                }}),
                                                add(new CreateNetworkSensorAlertsProfileRequestBodyConditions("cum",                 new CreateNetworkSensorAlertsProfileRequestBodyConditionsThreshold() {{
                                                                    door = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor(false);;
                                                                    humidity = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity() {{
                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnum.POOR;
                                                                        relativePercentage = 631661L;
                                                                    }};;
                                                                    indoorAirQuality = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality() {{
                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnum.POOR;
                                                                        score = 802528L;
                                                                    }};;
                                                                    noise = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise(                new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                                                                        level = 448389L;
                                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.INADEQUATE;
                                                                                    }};);;
                                                                    pm25 = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25() {{
                                                                        concentration = 339357L;
                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnum.INADEQUATE;
                                                                    }};;
                                                                    temperature = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature() {{
                                                                        celsius = 1874.11;
                                                                        fahrenheit = 4074.09;
                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnum.INADEQUATE;
                                                                    }};;
                                                                    tvoc = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc() {{
                                                                        concentration = 943458L;
                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnum.GOOD;
                                                                    }};;
                                                                    water = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater(false);;
                                                                }};) {{
                                                    direction = CreateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnum.ABOVE;
                                                    duration = CreateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnum.ZERO;
                                                    metric = "qui";
                                                    threshold = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThreshold() {{
                                                        door = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor(false) {{
                                                            open = false;
                                                        }};
                                                        humidity = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity() {{
                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnum.INADEQUATE;
                                                            relativePercentage = 612573L;
                                                        }};
                                                        indoorAirQuality = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality() {{
                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnum.INADEQUATE;
                                                            score = 747399L;
                                                        }};
                                                        noise = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise(                new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                                                            level = 707254L;
                                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.POOR;
                                                                        }};) {{
                                                            ambient = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                                                level = 908839L;
                                                                quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.GOOD;
                                                            }};
                                                        }};
                                                        pm25 = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25() {{
                                                            concentration = 389508L;
                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnum.POOR;
                                                        }};
                                                        temperature = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature() {{
                                                            celsius = 470.98;
                                                            fahrenheit = 5647.93;
                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnum.FAIR;
                                                        }};
                                                        tvoc = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc() {{
                                                            concentration = 659854L;
                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnum.POOR;
                                                        }};
                                                        water = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater(false) {{
                                                            present = false;
                                                        }};
                                                    }};
                                                }}),
                                                add(new CreateNetworkSensorAlertsProfileRequestBodyConditions("excepturi",                 new CreateNetworkSensorAlertsProfileRequestBodyConditionsThreshold() {{
                                                                    door = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor(false);;
                                                                    humidity = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity() {{
                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnum.FAIR;
                                                                        relativePercentage = 360625L;
                                                                    }};;
                                                                    indoorAirQuality = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality() {{
                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnum.GOOD;
                                                                        score = 880232L;
                                                                    }};;
                                                                    noise = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise(                new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                                                                        level = 285904L;
                                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.GOOD;
                                                                                    }};);;
                                                                    pm25 = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25() {{
                                                                        concentration = 873866L;
                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnum.GOOD;
                                                                    }};;
                                                                    temperature = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature() {{
                                                                        celsius = 458.54;
                                                                        fahrenheit = 2928;
                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnum.GOOD;
                                                                    }};;
                                                                    tvoc = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc() {{
                                                                        concentration = 16153L;
                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnum.INADEQUATE;
                                                                    }};;
                                                                    water = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater(false);;
                                                                }};) {{
                                                    direction = CreateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnum.ABOVE;
                                                    duration = CreateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnum.SIX_HUNDRED;
                                                    metric = "quos";
                                                    threshold = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThreshold() {{
                                                        door = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor(false) {{
                                                            open = false;
                                                        }};
                                                        humidity = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity() {{
                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnum.POOR;
                                                            relativePercentage = 704828L;
                                                        }};
                                                        indoorAirQuality = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality() {{
                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnum.FAIR;
                                                            score = 445442L;
                                                        }};
                                                        noise = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise(                new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                                                            level = 107457L;
                                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.FAIR;
                                                                        }};) {{
                                                            ambient = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                                                level = 248275L;
                                                                quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.INADEQUATE;
                                                            }};
                                                        }};
                                                        pm25 = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25() {{
                                                            concentration = 229398L;
                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnum.POOR;
                                                        }};
                                                        temperature = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature() {{
                                                            celsius = 1981.97;
                                                            fahrenheit = 8429.57;
                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnum.FAIR;
                                                        }};
                                                        tvoc = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc() {{
                                                            concentration = 457367L;
                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnum.FAIR;
                                                        }};
                                                        water = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater(false) {{
                                                            present = false;
                                                        }};
                                                    }};
                                                }}),
                                                add(new CreateNetworkSensorAlertsProfileRequestBodyConditions("ratione",                 new CreateNetworkSensorAlertsProfileRequestBodyConditionsThreshold() {{
                                                                    door = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor(false);;
                                                                    humidity = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity() {{
                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnum.GOOD;
                                                                        relativePercentage = 998069L;
                                                                    }};;
                                                                    indoorAirQuality = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality() {{
                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnum.INADEQUATE;
                                                                        score = 310968L;
                                                                    }};;
                                                                    noise = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise(                new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                                                                        level = 871277L;
                                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.FAIR;
                                                                                    }};);;
                                                                    pm25 = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25() {{
                                                                        concentration = 424110L;
                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnum.GOOD;
                                                                    }};;
                                                                    temperature = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature() {{
                                                                        celsius = 9920.67;
                                                                        fahrenheit = 7335.5;
                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnum.INADEQUATE;
                                                                    }};;
                                                                    tvoc = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc() {{
                                                                        concentration = 855495L;
                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnum.POOR;
                                                                    }};;
                                                                    water = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater(false);;
                                                                }};) {{
                                                    direction = CreateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnum.ABOVE;
                                                    duration = CreateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnum.NINE_HUNDRED;
                                                    metric = "atque";
                                                    threshold = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThreshold() {{
                                                        door = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor(false) {{
                                                            open = false;
                                                        }};
                                                        humidity = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity() {{
                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnum.POOR;
                                                            relativePercentage = 78414L;
                                                        }};
                                                        indoorAirQuality = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality() {{
                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnum.POOR;
                                                            score = 780172L;
                                                        }};
                                                        noise = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise(                new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                                                            level = 668749L;
                                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.GOOD;
                                                                        }};) {{
                                                            ambient = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                                                level = 850507L;
                                                                quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.INADEQUATE;
                                                            }};
                                                        }};
                                                        pm25 = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25() {{
                                                            concentration = 348462L;
                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnum.FAIR;
                                                        }};
                                                        temperature = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature() {{
                                                            celsius = 2611.32;
                                                            fahrenheit = 3857.23;
                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnum.POOR;
                                                        }};
                                                        tvoc = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc() {{
                                                            concentration = 791249L;
                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnum.INADEQUATE;
                                                        }};
                                                        water = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater(false) {{
                                                            present = false;
                                                        }};
                                                    }};
                                                }}),
                                            }}, "magnam") {{
                                recipients = new CreateNetworkSensorAlertsProfileRequestBodyRecipients() {{
                                    emails = new String[]{{
                                        add("dolorum"),
                                        add("nostrum"),
                                    }};
                                    httpServerIds = new String[]{{
                                        add("consequuntur"),
                                    }};
                                    smsNumbers = new String[]{{
                                        add("voluptas"),
                                        add("sunt"),
                                        add("atque"),
                                        add("quo"),
                                    }};
                                }};;
                                schedule = new CreateNetworkSensorAlertsProfileRequestBodySchedule() {{
                                    id = "cc1caecc-a0b6-4c4e-a1b9-92c38030e0f6";
                                }};;
                                serials = new String[]{{
                                    add("illo"),
                                }};
                            }};, "cupiditate");            

            CreateNetworkSensorAlertsProfileResponse res = sdk.profiles.createNetworkSensorAlertsProfile(req);

            if (res.createNetworkSensorAlertsProfile200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createOrganizationAlertsProfile

Create an organization-wide alert configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrganizationAlertsProfileRequest;
import org.openapis.openapi.models.operations.CreateOrganizationAlertsProfileRequestBody;
import org.openapis.openapi.models.operations.CreateOrganizationAlertsProfileRequestBodyAlertCondition;
import org.openapis.openapi.models.operations.CreateOrganizationAlertsProfileRequestBodyAlertConditionInterfaceEnum;
import org.openapis.openapi.models.operations.CreateOrganizationAlertsProfileRequestBodyRecipients;
import org.openapis.openapi.models.operations.CreateOrganizationAlertsProfileRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.CreateOrganizationAlertsProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationAlertsProfileRequest req = new CreateOrganizationAlertsProfileRequest(                new CreateOrganizationAlertsProfileRequestBody(                new CreateOrganizationAlertsProfileRequestBodyAlertCondition() {{
                                                bitRateBps = 75068L;
                                                duration = 905109L;
                                                interface_ = CreateOrganizationAlertsProfileRequestBodyAlertConditionInterfaceEnum.WAN1;
                                                jitterMs = 300946L;
                                                latencyMs = 232551L;
                                                lossRatio = 3247.86;
                                                mos = 9187.55;
                                                window = 391849L;
                                            }};,                 new String[]{{
                                                add("reprehenderit"),
                                                add("expedita"),
                                                add("delectus"),
                                            }},                 new CreateOrganizationAlertsProfileRequestBodyRecipients() {{
                                                emails = new String[]{{
                                                    add("numquam"),
                                                    add("esse"),
                                                }};
                                                httpServerIds = new String[]{{
                                                    add("vel"),
                                                }};
                                            }};, CreateOrganizationAlertsProfileRequestBodyTypeEnum.APP_OUTAGE) {{
                                description = "sit";
                            }};, "doloremque");            

            CreateOrganizationAlertsProfileResponse res = sdk.profiles.createOrganizationAlertsProfile(req);

            if (res.createOrganizationAlertsProfile201ApplicationJSONObject != null) {
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
                .setSecurity(new Security("voluptatibus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSensorAlertsProfileRequest req = new DeleteNetworkSensorAlertsProfileRequest("temporibus", "nihil");            

            DeleteNetworkSensorAlertsProfileResponse res = sdk.profiles.deleteNetworkSensorAlertsProfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteOrganizationAlertsProfile

Removes an organization-wide alert config

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOrganizationAlertsProfileRequest;
import org.openapis.openapi.models.operations.DeleteOrganizationAlertsProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationAlertsProfileRequest req = new DeleteOrganizationAlertsProfileRequest("exercitationem", "odio");            

            DeleteOrganizationAlertsProfileResponse res = sdk.profiles.deleteOrganizationAlertsProfile(req);

            if (res.statusCode == 200) {
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
                .setSecurity(new Security("illum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSensorAlertsProfileRequest req = new GetNetworkSensorAlertsProfileRequest("ducimus", "in");            

            GetNetworkSensorAlertsProfileResponse res = sdk.profiles.getNetworkSensorAlertsProfile(req);

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
                .setSecurity(new Security("ea") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSensorAlertsProfilesRequest req = new GetNetworkSensorAlertsProfilesRequest("doloremque");            

            GetNetworkSensorAlertsProfilesResponse res = sdk.profiles.getNetworkSensorAlertsProfiles(req);

            if (res.getNetworkSensorAlertsProfiles200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmProfiles

List all profiles in a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmProfilesRequest;
import org.openapis.openapi.models.operations.GetNetworkSmProfilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmProfilesRequest req = new GetNetworkSmProfilesRequest("doloremque");            

            GetNetworkSmProfilesResponse res = sdk.profiles.getNetworkSmProfiles(req);

            if (res.getNetworkSmProfiles200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationAlertsProfiles

List all organization-wide alert configurations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationAlertsProfilesRequest;
import org.openapis.openapi.models.operations.GetOrganizationAlertsProfilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationAlertsProfilesRequest req = new GetOrganizationAlertsProfilesRequest("expedita");            

            GetOrganizationAlertsProfilesResponse res = sdk.profiles.getOrganizationAlertsProfiles(req);

            if (res.getOrganizationAlertsProfiles200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationConfigTemplateSwitchProfilePort

Return a switch profile port

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationConfigTemplateSwitchProfilePortRequest;
import org.openapis.openapi.models.operations.GetOrganizationConfigTemplateSwitchProfilePortResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationConfigTemplateSwitchProfilePortRequest req = new GetOrganizationConfigTemplateSwitchProfilePortRequest("ipsa", "dolores", "consequuntur", "nobis");            

            GetOrganizationConfigTemplateSwitchProfilePortResponse res = sdk.profiles.getOrganizationConfigTemplateSwitchProfilePort(req);

            if (res.getOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationConfigTemplateSwitchProfilePorts

Return all the ports of a switch profile

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationConfigTemplateSwitchProfilePortsRequest;
import org.openapis.openapi.models.operations.GetOrganizationConfigTemplateSwitchProfilePortsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationConfigTemplateSwitchProfilePortsRequest req = new GetOrganizationConfigTemplateSwitchProfilePortsRequest("minus", "accusantium", "dolor");            

            GetOrganizationConfigTemplateSwitchProfilePortsResponse res = sdk.profiles.getOrganizationConfigTemplateSwitchProfilePorts(req);

            if (res.getOrganizationConfigTemplateSwitchProfilePorts200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationConfigTemplateSwitchProfiles

List the switch profiles for your switch template configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationConfigTemplateSwitchProfilesRequest;
import org.openapis.openapi.models.operations.GetOrganizationConfigTemplateSwitchProfilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationConfigTemplateSwitchProfilesRequest req = new GetOrganizationConfigTemplateSwitchProfilesRequest("et", "quo");            

            GetOrganizationConfigTemplateSwitchProfilesResponse res = sdk.profiles.getOrganizationConfigTemplateSwitchProfiles(req);

            if (res.getOrganizationConfigTemplateSwitchProfiles200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("facere") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSensorAlertsProfileRequest req = new UpdateNetworkSensorAlertsProfileRequest("delectus", "laudantium") {{
                requestBody = new UpdateNetworkSensorAlertsProfileRequestBody() {{
                    conditions = new org.openapis.openapi.models.operations.UpdateNetworkSensorAlertsProfileRequestBodyConditions[]{{
                        add(new UpdateNetworkSensorAlertsProfileRequestBodyConditions("similique",                 new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThreshold() {{
                                            door = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor(false);;
                                            humidity = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity() {{
                                                quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnum.GOOD;
                                                relativePercentage = 896809L;
                                            }};;
                                            indoorAirQuality = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality() {{
                                                quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnum.INADEQUATE;
                                                score = 323017L;
                                            }};;
                                            noise = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise(                new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                                                level = 625828L;
                                                                quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.FAIR;
                                                            }};);;
                                            pm25 = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25() {{
                                                concentration = 655555L;
                                                quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnum.FAIR;
                                            }};;
                                            temperature = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature() {{
                                                celsius = 8055.05;
                                                fahrenheit = 3718.75;
                                                quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnum.POOR;
                                            }};;
                                            tvoc = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc() {{
                                                concentration = 677727L;
                                                quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnum.INADEQUATE;
                                            }};;
                                            water = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater(false);;
                                        }};) {{
                            direction = UpdateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnum.ABOVE;
                            duration = UpdateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnum.THREE_THOUSAND_SIX_HUNDRED;
                            metric = "sequi";
                            threshold = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThreshold() {{
                                door = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor(false) {{
                                    open = false;
                                }};
                                humidity = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity() {{
                                    quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnum.GOOD;
                                    relativePercentage = 53814L;
                                }};
                                indoorAirQuality = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality() {{
                                    quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnum.INADEQUATE;
                                    score = 316425L;
                                }};
                                noise = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise(                new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                                    level = 943106L;
                                                    quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.FAIR;
                                                }};) {{
                                    ambient = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                        level = 660179L;
                                        quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.GOOD;
                                    }};
                                }};
                                pm25 = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25() {{
                                    concentration = 518250L;
                                    quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnum.GOOD;
                                }};
                                temperature = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature() {{
                                    celsius = 723.53;
                                    fahrenheit = 5728.35;
                                    quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnum.INADEQUATE;
                                }};
                                tvoc = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc() {{
                                    concentration = 58395L;
                                    quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnum.INADEQUATE;
                                }};
                                water = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater(false) {{
                                    present = false;
                                }};
                            }};
                        }}),
                        add(new UpdateNetworkSensorAlertsProfileRequestBodyConditions("consequatur",                 new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThreshold() {{
                                            door = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor(false);;
                                            humidity = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity() {{
                                                quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnum.GOOD;
                                                relativePercentage = 7647L;
                                            }};;
                                            indoorAirQuality = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality() {{
                                                quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnum.POOR;
                                                score = 693242L;
                                            }};;
                                            noise = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise(                new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                                                level = 831410L;
                                                                quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.INADEQUATE;
                                                            }};);;
                                            pm25 = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25() {{
                                                concentration = 545133L;
                                                quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnum.INADEQUATE;
                                            }};;
                                            temperature = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature() {{
                                                celsius = 4500.39;
                                                fahrenheit = 3091.54;
                                                quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnum.FAIR;
                                            }};;
                                            tvoc = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc() {{
                                                concentration = 600871L;
                                                quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnum.GOOD;
                                            }};;
                                            water = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater(false);;
                                        }};) {{
                            direction = UpdateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnum.ABOVE;
                            duration = UpdateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnum.NINE_HUNDRED;
                            metric = "porro";
                            threshold = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThreshold() {{
                                door = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor(false) {{
                                    open = false;
                                }};
                                humidity = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity() {{
                                    quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnum.POOR;
                                    relativePercentage = 677184L;
                                }};
                                indoorAirQuality = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality() {{
                                    quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnum.POOR;
                                    score = 387799L;
                                }};
                                noise = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise(                new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                                    level = 460492L;
                                                    quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.GOOD;
                                                }};) {{
                                    ambient = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                        level = 716559L;
                                        quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.FAIR;
                                    }};
                                }};
                                pm25 = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25() {{
                                    concentration = 666393L;
                                    quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnum.GOOD;
                                }};
                                temperature = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature() {{
                                    celsius = 9681.62;
                                    fahrenheit = 1415.3;
                                    quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnum.GOOD;
                                }};
                                tvoc = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc() {{
                                    concentration = 288155L;
                                    quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnum.FAIR;
                                }};
                                water = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater(false) {{
                                    present = false;
                                }};
                            }};
                        }}),
                    }};
                    name = "Tony Brakus";
                    recipients = new UpdateNetworkSensorAlertsProfileRequestBodyRecipients() {{
                        emails = new String[]{{
                            add("quos"),
                            add("dolorum"),
                            add("magni"),
                        }};
                        httpServerIds = new String[]{{
                            add("ex"),
                            add("quibusdam"),
                            add("doloremque"),
                            add("quasi"),
                        }};
                        smsNumbers = new String[]{{
                            add("nam"),
                        }};
                    }};;
                    schedule = new UpdateNetworkSensorAlertsProfileRequestBodySchedule() {{
                        id = "e0e2c803-ca4d-46c9-9740-4e10d3a62f17";
                    }};;
                    serials = new String[]{{
                        add("ipsum"),
                        add("qui"),
                        add("quisquam"),
                    }};
                }};;
            }};            

            UpdateNetworkSensorAlertsProfileResponse res = sdk.profiles.updateNetworkSensorAlertsProfile(req);

            if (res.updateNetworkSensorAlertsProfile200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationAlertsProfile

Update an organization-wide alert config

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationAlertsProfileRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationAlertsProfileRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationAlertsProfileRequestBodyAlertCondition;
import org.openapis.openapi.models.operations.UpdateOrganizationAlertsProfileRequestBodyAlertConditionInterfaceEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationAlertsProfileRequestBodyRecipients;
import org.openapis.openapi.models.operations.UpdateOrganizationAlertsProfileRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationAlertsProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationAlertsProfileRequest req = new UpdateOrganizationAlertsProfileRequest("omnis", "suscipit") {{
                requestBody = new UpdateOrganizationAlertsProfileRequestBody() {{
                    alertCondition = new UpdateOrganizationAlertsProfileRequestBodyAlertCondition() {{
                        bitRateBps = 807604L;
                        duration = 195890L;
                        interface_ = UpdateOrganizationAlertsProfileRequestBodyAlertConditionInterfaceEnum.CELLULAR;
                        jitterMs = 502020L;
                        latencyMs = 336705L;
                        lossRatio = 2163;
                        mos = 4949.15;
                        window = 336775L;
                    }};;
                    description = "voluptatum";
                    enabled = false;
                    networkTags = new String[]{{
                        add("numquam"),
                        add("laboriosam"),
                        add("tempore"),
                        add("eaque"),
                    }};
                    recipients = new UpdateOrganizationAlertsProfileRequestBodyRecipients() {{
                        emails = new String[]{{
                            add("suscipit"),
                        }};
                        httpServerIds = new String[]{{
                            add("natus"),
                            add("laudantium"),
                            add("consectetur"),
                            add("necessitatibus"),
                        }};
                    }};;
                    type = UpdateOrganizationAlertsProfileRequestBodyTypeEnum.WAN_LATENCY;
                }};;
            }};            

            UpdateOrganizationAlertsProfileResponse res = sdk.profiles.updateOrganizationAlertsProfile(req);

            if (res.updateOrganizationAlertsProfile200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationConfigTemplateSwitchProfilePort

Update a switch profile port

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyProfile;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationConfigTemplateSwitchProfilePortRequest req = new UpdateOrganizationConfigTemplateSwitchProfilePortRequest("aliquid", "sit", "aliquid", "deserunt") {{
                requestBody = new UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody() {{
                    accessPolicyNumber = 424008L;
                    accessPolicyType = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum.CUSTOM_ACCESS_POLICY;
                    allowedVlans = "incidunt";
                    daiTrusted = false;
                    enabled = false;
                    flexibleStackingEnabled = false;
                    isolationEnabled = false;
                    linkNegotiation = "explicabo";
                    macAllowList = new String[]{{
                        add("asperiores"),
                        add("perferendis"),
                    }};
                    name = "Danny Olson";
                    poeEnabled = false;
                    portScheduleId = "error";
                    profile = new UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyProfile() {{
                        enabled = false;
                        id = "8f667c34-790c-4b1b-8c11-88b422844665";
                        iname = "explicabo";
                    }};;
                    rstpEnabled = false;
                    stickyMacAllowList = new String[]{{
                        add("temporibus"),
                        add("vitae"),
                    }};
                    stickyMacAllowListLimit = 621393L;
                    stormControlEnabled = false;
                    stpGuard = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum.ROOT_GUARD;
                    tags = new String[]{{
                        add("perspiciatis"),
                        add("quia"),
                        add("consequatur"),
                        add("illum"),
                    }};
                    type = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum.TRUNK;
                    udld = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum.ALERT_ONLY;
                    vlan = 202992L;
                    voiceVlan = 223663L;
                }};;
            }};            

            UpdateOrganizationConfigTemplateSwitchProfilePortResponse res = sdk.profiles.updateOrganizationConfigTemplateSwitchProfilePort(req);

            if (res.updateOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
