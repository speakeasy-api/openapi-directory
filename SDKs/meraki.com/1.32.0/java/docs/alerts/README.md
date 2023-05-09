# alerts

### Available Operations

* [createNetworkSensorAlertsProfile](#createnetworksensoralertsprofile) - Creates a sensor alert profile for a network.
* [createOrganizationAlertsProfile](#createorganizationalertsprofile) - Create an organization-wide alert configuration
* [deleteNetworkSensorAlertsProfile](#deletenetworksensoralertsprofile) - Deletes a sensor alert profile from a network.
* [deleteOrganizationAlertsProfile](#deleteorganizationalertsprofile) - Removes an organization-wide alert config
* [getNetworkAlertsHistory](#getnetworkalertshistory) - Return the alert history for this network
* [getNetworkAlertsSettings](#getnetworkalertssettings) - Return the alert configuration for this network
* [getNetworkHealthAlerts](#getnetworkhealthalerts) - Return all global alerts on this network
* [getNetworkSensorAlertsCurrentOverviewByMetric](#getnetworksensoralertscurrentoverviewbymetric) - Return an overview of currently alerting sensors by metric
* [getNetworkSensorAlertsOverviewByMetric](#getnetworksensoralertsoverviewbymetric) - Return an overview of alert occurrences over a timespan, by metric
* [getNetworkSensorAlertsProfile](#getnetworksensoralertsprofile) - Show details of a sensor alert profile for a network.
* [getNetworkSensorAlertsProfiles](#getnetworksensoralertsprofiles) - Lists all sensor alert profiles for a network.
* [getOrganizationAlertsProfiles](#getorganizationalertsprofiles) - List all organization-wide alert configurations
* [updateNetworkAlertsSettings](#updatenetworkalertssettings) - Update the alert configuration for this network
* [updateNetworkSensorAlertsProfile](#updatenetworksensoralertsprofile) - Updates a sensor alert profile for a network.
* [updateOrganizationAlertsProfile](#updateorganizationalertsprofile) - Update an organization-wide alert config

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
                .setSecurity(new Security("eveniet") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSensorAlertsProfileRequest req = new CreateNetworkSensorAlertsProfileRequest(                new CreateNetworkSensorAlertsProfileRequestBody(                new org.openapis.openapi.models.operations.CreateNetworkSensorAlertsProfileRequestBodyConditions[]{{
                                                add(new CreateNetworkSensorAlertsProfileRequestBodyConditions("ad",                 new CreateNetworkSensorAlertsProfileRequestBodyConditionsThreshold() {{
                                                                    door = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor(false);;
                                                                    humidity = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity() {{
                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnum.POOR;
                                                                        relativePercentage = 3099L;
                                                                    }};;
                                                                    indoorAirQuality = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality() {{
                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnum.GOOD;
                                                                        score = 597303L;
                                                                    }};;
                                                                    noise = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise(                new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                                                                        level = 470649L;
                                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.INADEQUATE;
                                                                                    }};);;
                                                                    pm25 = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25() {{
                                                                        concentration = 378245L;
                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnum.FAIR;
                                                                    }};;
                                                                    temperature = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature() {{
                                                                        celsius = 9795.27;
                                                                        fahrenheit = 9702.22;
                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnum.FAIR;
                                                                    }};;
                                                                    tvoc = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc() {{
                                                                        concentration = 663866L;
                                                                        quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnum.GOOD;
                                                                    }};;
                                                                    water = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater(false);;
                                                                }};) {{
                                                    direction = CreateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnum.BELOW;
                                                    duration = CreateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnum.ZERO;
                                                    metric = "iure";
                                                    threshold = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThreshold() {{
                                                        door = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor(false) {{
                                                            open = false;
                                                        }};
                                                        humidity = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity() {{
                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnum.FAIR;
                                                            relativePercentage = 517612L;
                                                        }};
                                                        indoorAirQuality = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality() {{
                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnum.FAIR;
                                                            score = 474668L;
                                                        }};
                                                        noise = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise(                new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                                                            level = 739884L;
                                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.GOOD;
                                                                        }};) {{
                                                            ambient = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                                                level = 907733L;
                                                                quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.FAIR;
                                                            }};
                                                        }};
                                                        pm25 = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25() {{
                                                            concentration = 898063L;
                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnum.FAIR;
                                                        }};
                                                        temperature = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature() {{
                                                            celsius = 6725.82;
                                                            fahrenheit = 7152.08;
                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnum.INADEQUATE;
                                                        }};
                                                        tvoc = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc() {{
                                                            concentration = 523006L;
                                                            quality = CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnum.GOOD;
                                                        }};
                                                        water = new CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater(false) {{
                                                            present = false;
                                                        }};
                                                    }};
                                                }}),
                                            }}, "dolore") {{
                                recipients = new CreateNetworkSensorAlertsProfileRequestBodyRecipients() {{
                                    emails = new String[]{{
                                        add("nesciunt"),
                                        add("quae"),
                                        add("recusandae"),
                                    }};
                                    httpServerIds = new String[]{{
                                        add("quaerat"),
                                        add("molestiae"),
                                        add("ex"),
                                    }};
                                    smsNumbers = new String[]{{
                                        add("culpa"),
                                        add("adipisci"),
                                    }};
                                }};;
                                schedule = new CreateNetworkSensorAlertsProfileRequestBodySchedule() {{
                                    id = "e865e795-6f92-451a-9a9d-a660ff57bfaa";
                                }};;
                                serials = new String[]{{
                                    add("modi"),
                                    add("voluptatibus"),
                                    add("molestias"),
                                    add("officiis"),
                                }};
                            }};, "sapiente");            

            CreateNetworkSensorAlertsProfileResponse res = sdk.alerts.createNetworkSensorAlertsProfile(req);

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
                .setSecurity(new Security("cumque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationAlertsProfileRequest req = new CreateOrganizationAlertsProfileRequest(                new CreateOrganizationAlertsProfileRequestBody(                new CreateOrganizationAlertsProfileRequestBodyAlertCondition() {{
                                                bitRateBps = 113486L;
                                                duration = 698249L;
                                                interface_ = CreateOrganizationAlertsProfileRequestBodyAlertConditionInterfaceEnum.CELLULAR;
                                                jitterMs = 335498L;
                                                latencyMs = 82057L;
                                                lossRatio = 1476.85;
                                                mos = 7652.71;
                                                window = 62636L;
                                            }};,                 new String[]{{
                                                add("velit"),
                                            }},                 new CreateOrganizationAlertsProfileRequestBodyRecipients() {{
                                                emails = new String[]{{
                                                    add("eum"),
                                                }};
                                                httpServerIds = new String[]{{
                                                    add("rem"),
                                                    add("at"),
                                                }};
                                            }};, CreateOrganizationAlertsProfileRequestBodyTypeEnum.WAN_STATUS) {{
                                description = "eos";
                            }};, "sapiente");            

            CreateOrganizationAlertsProfileResponse res = sdk.alerts.createOrganizationAlertsProfile(req);

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
                .setSecurity(new Security("eum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSensorAlertsProfileRequest req = new DeleteNetworkSensorAlertsProfileRequest("dicta", "minima");            

            DeleteNetworkSensorAlertsProfileResponse res = sdk.alerts.deleteNetworkSensorAlertsProfile(req);

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
                .setSecurity(new Security("beatae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationAlertsProfileRequest req = new DeleteOrganizationAlertsProfileRequest("cupiditate", "provident");            

            DeleteOrganizationAlertsProfileResponse res = sdk.alerts.deleteOrganizationAlertsProfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkAlertsHistory

Return the alert history for this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkAlertsHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkAlertsHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkAlertsHistoryRequest req = new GetNetworkAlertsHistoryRequest("soluta") {{
                endingBefore = "hic";
                perPage = 848151L;
                startingAfter = "eaque";
            }};            

            GetNetworkAlertsHistoryResponse res = sdk.alerts.getNetworkAlertsHistory(req);

            if (res.getNetworkAlertsHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkAlertsSettings

Return the alert configuration for this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkAlertsSettingsRequest;
import org.openapis.openapi.models.operations.GetNetworkAlertsSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkAlertsSettingsRequest req = new GetNetworkAlertsSettingsRequest("perspiciatis");            

            GetNetworkAlertsSettingsResponse res = sdk.alerts.getNetworkAlertsSettings(req);

            if (res.getNetworkAlertsSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkHealthAlerts

Return all global alerts on this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkHealthAlertsRequest;
import org.openapis.openapi.models.operations.GetNetworkHealthAlertsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkHealthAlertsRequest req = new GetNetworkHealthAlertsRequest("debitis");            

            GetNetworkHealthAlertsResponse res = sdk.alerts.getNetworkHealthAlerts(req);

            if (res.getNetworkHealthAlerts200ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("aliquid") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSensorAlertsCurrentOverviewByMetricRequest req = new GetNetworkSensorAlertsCurrentOverviewByMetricRequest("porro");            

            GetNetworkSensorAlertsCurrentOverviewByMetricResponse res = sdk.alerts.getNetworkSensorAlertsCurrentOverviewByMetric(req);

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
                .setSecurity(new Security("suscipit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSensorAlertsOverviewByMetricRequest req = new GetNetworkSensorAlertsOverviewByMetricRequest("dolorem") {{
                interval = 147808L;
                t0 = "cumque";
                t1 = "fuga";
                timespan = 1890.62;
            }};            

            GetNetworkSensorAlertsOverviewByMetricResponse res = sdk.alerts.getNetworkSensorAlertsOverviewByMetric(req);

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
                .setSecurity(new Security("animi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSensorAlertsProfileRequest req = new GetNetworkSensorAlertsProfileRequest("necessitatibus", "nulla");            

            GetNetworkSensorAlertsProfileResponse res = sdk.alerts.getNetworkSensorAlertsProfile(req);

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
                .setSecurity(new Security("consequatur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSensorAlertsProfilesRequest req = new GetNetworkSensorAlertsProfilesRequest("quasi");            

            GetNetworkSensorAlertsProfilesResponse res = sdk.alerts.getNetworkSensorAlertsProfiles(req);

            if (res.getNetworkSensorAlertsProfiles200ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("et") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationAlertsProfilesRequest req = new GetOrganizationAlertsProfilesRequest("ducimus");            

            GetOrganizationAlertsProfilesResponse res = sdk.alerts.getOrganizationAlertsProfiles(req);

            if (res.getOrganizationAlertsProfiles200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkAlertsSettings

Update the alert configuration for this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkAlertsSettingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkAlertsSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkAlertsSettingsRequestBodyAlerts;
import org.openapis.openapi.models.operations.UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations;
import org.openapis.openapi.models.operations.UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations;
import org.openapis.openapi.models.operations.UpdateNetworkAlertsSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkAlertsSettingsRequest req = new UpdateNetworkAlertsSettingsRequest("occaecati") {{
                requestBody = new UpdateNetworkAlertsSettingsRequestBody() {{
                    alerts = new org.openapis.openapi.models.operations.UpdateNetworkAlertsSettingsRequestBodyAlerts[]{{
                        add(new UpdateNetworkAlertsSettingsRequestBodyAlerts("maiores") {{
                            alertDestinations = new UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations() {{
                                allAdmins = false;
                                emails = new String[]{{
                                    add("quasi"),
                                }};
                                httpServerIds = new String[]{{
                                    add("doloribus"),
                                }};
                                snmp = false;
                            }};
                            enabled = false;
                            filters = new java.util.HashMap<String, Object>() {{
                                put("necessitatibus", "ipsa");
                                put("tempora", "nihil");
                                put("molestiae", "dicta");
                                put("iusto", "esse");
                            }};
                            type = "praesentium";
                        }}),
                        add(new UpdateNetworkAlertsSettingsRequestBodyAlerts("laborum") {{
                            alertDestinations = new UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations() {{
                                allAdmins = false;
                                emails = new String[]{{
                                    add("vel"),
                                    add("architecto"),
                                    add("fugiat"),
                                    add("doloremque"),
                                }};
                                httpServerIds = new String[]{{
                                    add("odio"),
                                }};
                                snmp = false;
                            }};
                            enabled = false;
                            filters = new java.util.HashMap<String, Object>() {{
                                put("esse", "ex");
                                put("consectetur", "aliquid");
                            }};
                            type = "ipsa";
                        }}),
                    }};
                    defaultDestinations = new UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations() {{
                        allAdmins = false;
                        emails = new String[]{{
                            add("nostrum"),
                        }};
                        httpServerIds = new String[]{{
                            add("expedita"),
                            add("aliquid"),
                            add("officia"),
                            add("suscipit"),
                        }};
                        snmp = false;
                    }};;
                }};;
            }};            

            UpdateNetworkAlertsSettingsResponse res = sdk.alerts.updateNetworkAlertsSettings(req);

            if (res.updateNetworkAlertsSettings200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("aliquid") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSensorAlertsProfileRequest req = new UpdateNetworkSensorAlertsProfileRequest("perferendis", "eum") {{
                requestBody = new UpdateNetworkSensorAlertsProfileRequestBody() {{
                    conditions = new org.openapis.openapi.models.operations.UpdateNetworkSensorAlertsProfileRequestBodyConditions[]{{
                        add(new UpdateNetworkSensorAlertsProfileRequestBodyConditions("ad",                 new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThreshold() {{
                                            door = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor(false);;
                                            humidity = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity() {{
                                                quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnum.INADEQUATE;
                                                relativePercentage = 29950L;
                                            }};;
                                            indoorAirQuality = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality() {{
                                                quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnum.INADEQUATE;
                                                score = 737254L;
                                            }};;
                                            noise = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise(                new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                                                level = 399660L;
                                                                quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.FAIR;
                                                            }};);;
                                            pm25 = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25() {{
                                                concentration = 530860L;
                                                quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnum.INADEQUATE;
                                            }};;
                                            temperature = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature() {{
                                                celsius = 852.33;
                                                fahrenheit = 7032.18;
                                                quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnum.INADEQUATE;
                                            }};;
                                            tvoc = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc() {{
                                                concentration = 634786L;
                                                quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnum.FAIR;
                                            }};;
                                            water = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater(false);;
                                        }};) {{
                            direction = UpdateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnum.BELOW;
                            duration = UpdateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnum.SIX_HUNDRED;
                            metric = "ab";
                            threshold = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThreshold() {{
                                door = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor(false) {{
                                    open = false;
                                }};
                                humidity = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity() {{
                                    quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnum.INADEQUATE;
                                    relativePercentage = 822407L;
                                }};
                                indoorAirQuality = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality() {{
                                    quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnum.POOR;
                                    score = 653421L;
                                }};
                                noise = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise(                new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                                    level = 324083L;
                                                    quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.INADEQUATE;
                                                }};) {{
                                    ambient = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                        level = 671794L;
                                        quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.INADEQUATE;
                                    }};
                                }};
                                pm25 = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25() {{
                                    concentration = 316220L;
                                    quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnum.FAIR;
                                }};
                                temperature = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature() {{
                                    celsius = 8333.16;
                                    fahrenheit = 4050.36;
                                    quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnum.POOR;
                                }};
                                tvoc = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc() {{
                                    concentration = 405373L;
                                    quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnum.GOOD;
                                }};
                                water = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater(false) {{
                                    present = false;
                                }};
                            }};
                        }}),
                        add(new UpdateNetworkSensorAlertsProfileRequestBodyConditions("perferendis",                 new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThreshold() {{
                                            door = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor(false);;
                                            humidity = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity() {{
                                                quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnum.POOR;
                                                relativePercentage = 518150L;
                                            }};;
                                            indoorAirQuality = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality() {{
                                                quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnum.POOR;
                                                score = 842777L;
                                            }};;
                                            noise = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise(                new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                                                level = 720528L;
                                                                quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.GOOD;
                                                            }};);;
                                            pm25 = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25() {{
                                                concentration = 633415L;
                                                quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnum.FAIR;
                                            }};;
                                            temperature = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature() {{
                                                celsius = 3073.76;
                                                fahrenheit = 805.32;
                                                quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnum.INADEQUATE;
                                            }};;
                                            tvoc = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc() {{
                                                concentration = 85311L;
                                                quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnum.GOOD;
                                            }};;
                                            water = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater(false);;
                                        }};) {{
                            direction = UpdateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnum.BELOW;
                            duration = UpdateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnum.ONE_THOUSAND_EIGHT_HUNDRED;
                            metric = "architecto";
                            threshold = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThreshold() {{
                                door = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor(false) {{
                                    open = false;
                                }};
                                humidity = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity() {{
                                    quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnum.INADEQUATE;
                                    relativePercentage = 867168L;
                                }};
                                indoorAirQuality = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality() {{
                                    quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnum.POOR;
                                    score = 29190L;
                                }};
                                noise = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise(                new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                                    level = 937219L;
                                                    quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.GOOD;
                                                }};) {{
                                    ambient = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient() {{
                                        level = 1207L;
                                        quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum.INADEQUATE;
                                    }};
                                }};
                                pm25 = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25() {{
                                    concentration = 958308L;
                                    quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnum.INADEQUATE;
                                }};
                                temperature = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature() {{
                                    celsius = 7963.2;
                                    fahrenheit = 3651;
                                    quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnum.POOR;
                                }};
                                tvoc = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc() {{
                                    concentration = 190567L;
                                    quality = UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnum.GOOD;
                                }};
                                water = new UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater(false) {{
                                    present = false;
                                }};
                            }};
                        }}),
                    }};
                    name = "Mrs. Elizabeth Bradtke";
                    recipients = new UpdateNetworkSensorAlertsProfileRequestBodyRecipients() {{
                        emails = new String[]{{
                            add("laudantium"),
                        }};
                        httpServerIds = new String[]{{
                            add("dolor"),
                        }};
                        smsNumbers = new String[]{{
                            add("ipsam"),
                            add("consequuntur"),
                            add("ipsa"),
                            add("quas"),
                        }};
                    }};;
                    schedule = new UpdateNetworkSensorAlertsProfileRequestBodySchedule() {{
                        id = "ece7e253-b668-4451-86c6-e205e16deab3";
                    }};;
                    serials = new String[]{{
                        add("repudiandae"),
                        add("optio"),
                        add("occaecati"),
                        add("nemo"),
                    }};
                }};;
            }};            

            UpdateNetworkSensorAlertsProfileResponse res = sdk.alerts.updateNetworkSensorAlertsProfile(req);

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
                .setSecurity(new Security("voluptate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationAlertsProfileRequest req = new UpdateOrganizationAlertsProfileRequest("blanditiis", "officia") {{
                requestBody = new UpdateOrganizationAlertsProfileRequestBody() {{
                    alertCondition = new UpdateOrganizationAlertsProfileRequestBodyAlertCondition() {{
                        bitRateBps = 376389L;
                        duration = 254025L;
                        interface_ = UpdateOrganizationAlertsProfileRequestBodyAlertConditionInterfaceEnum.WAN1;
                        jitterMs = 551079L;
                        latencyMs = 260904L;
                        lossRatio = 1319.03;
                        mos = 4959.7;
                        window = 200516L;
                    }};;
                    description = "fuga";
                    enabled = false;
                    networkTags = new String[]{{
                        add("incidunt"),
                        add("quasi"),
                        add("rem"),
                    }};
                    recipients = new UpdateOrganizationAlertsProfileRequestBodyRecipients() {{
                        emails = new String[]{{
                            add("dicta"),
                            add("nisi"),
                            add("consequuntur"),
                            add("consectetur"),
                        }};
                        httpServerIds = new String[]{{
                            add("cupiditate"),
                        }};
                    }};;
                    type = UpdateOrganizationAlertsProfileRequestBodyTypeEnum.WAN_UTILIZATION;
                }};;
            }};            

            UpdateOrganizationAlertsProfileResponse res = sdk.alerts.updateOrganizationAlertsProfile(req);

            if (res.updateOrganizationAlertsProfile200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
