# floodlightConfigurations

### Available Operations

* [dfareportingFloodlightConfigurationsGet](#dfareportingfloodlightconfigurationsget) - Gets one floodlight configuration by ID.
* [dfareportingFloodlightConfigurationsList](#dfareportingfloodlightconfigurationslist) - Retrieves a list of floodlight configurations, possibly filtered.
* [dfareportingFloodlightConfigurationsPatch](#dfareportingfloodlightconfigurationspatch) - Updates an existing floodlight configuration. This method supports patch semantics.
* [dfareportingFloodlightConfigurationsUpdate](#dfareportingfloodlightconfigurationsupdate) - Updates an existing floodlight configuration.

## dfareportingFloodlightConfigurationsGet

Gets one floodlight configuration by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingFloodlightConfigurationsGetRequest;
import org.openapis.openapi.models.operations.DfareportingFloodlightConfigurationsGetResponse;
import org.openapis.openapi.models.operations.DfareportingFloodlightConfigurationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingFloodlightConfigurationsGetRequest req = new DfareportingFloodlightConfigurationsGetRequest("voluptate", "odio") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deleniti";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                fields = "minus";
                key = "iure";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "iure";
                uploadProtocol = "deserunt";
            }};            

            DfareportingFloodlightConfigurationsGetResponse res = sdk.floodlightConfigurations.dfareportingFloodlightConfigurationsGet(req, new DfareportingFloodlightConfigurationsGetSecurity("blanditiis", "dolores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.floodlightConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingFloodlightConfigurationsList

Retrieves a list of floodlight configurations, possibly filtered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingFloodlightConfigurationsListRequest;
import org.openapis.openapi.models.operations.DfareportingFloodlightConfigurationsListResponse;
import org.openapis.openapi.models.operations.DfareportingFloodlightConfigurationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingFloodlightConfigurationsListRequest req = new DfareportingFloodlightConfigurationsListRequest("necessitatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vero";
                alt = AltEnum.MEDIA;
                callback = "eos";
                fields = "delectus";
                ids = new String[]{{
                    add("consequuntur"),
                    add("praesentium"),
                    add("fugiat"),
                    add("beatae"),
                }};
                key = "perferendis";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "aperiam";
                uploadType = "harum";
                uploadProtocol = "iusto";
            }};            

            DfareportingFloodlightConfigurationsListResponse res = sdk.floodlightConfigurations.dfareportingFloodlightConfigurationsList(req, new DfareportingFloodlightConfigurationsListSecurity("debitis", "sint") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.floodlightConfigurationsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingFloodlightConfigurationsPatch

Updates an existing floodlight configuration. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingFloodlightConfigurationsPatchRequest;
import org.openapis.openapi.models.operations.DfareportingFloodlightConfigurationsPatchResponse;
import org.openapis.openapi.models.operations.DfareportingFloodlightConfigurationsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomViewabilityMetric;
import org.openapis.openapi.models.shared.CustomViewabilityMetricConfiguration;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.FloodlightConfiguration;
import org.openapis.openapi.models.shared.FloodlightConfigurationFirstDayOfWeekEnum;
import org.openapis.openapi.models.shared.FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum;
import org.openapis.openapi.models.shared.LookbackConfiguration;
import org.openapis.openapi.models.shared.OmnitureSettings;
import org.openapis.openapi.models.shared.TagSettings;
import org.openapis.openapi.models.shared.ThirdPartyAuthenticationToken;
import org.openapis.openapi.models.shared.UserDefinedVariableConfiguration;
import org.openapis.openapi.models.shared.UserDefinedVariableConfigurationDataTypeEnum;
import org.openapis.openapi.models.shared.UserDefinedVariableConfigurationVariableTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingFloodlightConfigurationsPatchRequest req = new DfareportingFloodlightConfigurationsPatchRequest("beatae", "ratione") {{
                dollarXgafv = XgafvEnum.TWO;
                floodlightConfiguration = new FloodlightConfiguration() {{
                    accountId = "qui";
                    advertiserId = "dolorum";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "distinctio";
                        etag = "incidunt";
                        id = "4cb18350-08f4-461c-a53e-914498a9ba46";
                        kind = "aperiam";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "nulla";
                    }};;
                    analyticsDataSharingEnabled = false;
                    customViewabilityMetric = new CustomViewabilityMetric() {{
                        configuration = new CustomViewabilityMetricConfiguration() {{
                            audible = false;
                            timeMillis = 866224;
                            timePercent = 969294;
                            viewabilityPercent = 838075;
                        }};;
                        id = "officiis";
                        name = "Carolyn Bauch";
                    }};;
                    exposureToConversionEnabled = false;
                    firstDayOfWeek = FloodlightConfigurationFirstDayOfWeekEnum.MONDAY;
                    id = "possimus";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "culpa";
                        etag = "animi";
                        id = "9182a49d-9625-4d3c-affc-198eea445279";
                        kind = "odit";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "maxime";
                    }};;
                    inAppAttributionTrackingEnabled = false;
                    kind = "possimus";
                    lookbackConfiguration = new LookbackConfiguration() {{
                        clickDuration = 251811;
                        postImpressionActivitiesDuration = 285288;
                    }};;
                    naturalSearchConversionAttributionOption = FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum.EXCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION;
                    omnitureSettings = new OmnitureSettings() {{
                        omnitureCostDataEnabled = false;
                        omnitureIntegrationEnabled = false;
                    }};;
                    subaccountId = "saepe";
                    tagSettings = new TagSettings() {{
                        dynamicTagEnabled = false;
                        imageTagEnabled = false;
                    }};;
                    thirdPartyAuthenticationTokens = new org.openapis.openapi.models.shared.ThirdPartyAuthenticationToken[]{{
                        add(new ThirdPartyAuthenticationToken() {{
                            name = "Johnnie Reilly";
                            value = "porro";
                        }}),
                        add(new ThirdPartyAuthenticationToken() {{
                            name = "Edward Greenfelder";
                            value = "pariatur";
                        }}),
                        add(new ThirdPartyAuthenticationToken() {{
                            name = "Thomas Skiles";
                            value = "repellendus";
                        }}),
                    }};
                    userDefinedVariableConfigurations = new org.openapis.openapi.models.shared.UserDefinedVariableConfiguration[]{{
                        add(new UserDefinedVariableConfiguration() {{
                            dataType = UserDefinedVariableConfigurationDataTypeEnum.STRING;
                            reportName = "distinctio";
                            variableType = UserDefinedVariableConfigurationVariableTypeEnum.U2;
                        }}),
                        add(new UserDefinedVariableConfiguration() {{
                            dataType = UserDefinedVariableConfigurationDataTypeEnum.STRING;
                            reportName = "quis";
                            variableType = UserDefinedVariableConfigurationVariableTypeEnum.U37;
                        }}),
                    }};
                }};;
                accessToken = "accusantium";
                alt = AltEnum.JSON;
                callback = "voluptates";
                fields = "totam";
                key = "fugiat";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "autem";
                uploadType = "explicabo";
                uploadProtocol = "ea";
            }};            

            DfareportingFloodlightConfigurationsPatchResponse res = sdk.floodlightConfigurations.dfareportingFloodlightConfigurationsPatch(req, new DfareportingFloodlightConfigurationsPatchSecurity("doloribus", "maiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.floodlightConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingFloodlightConfigurationsUpdate

Updates an existing floodlight configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingFloodlightConfigurationsUpdateRequest;
import org.openapis.openapi.models.operations.DfareportingFloodlightConfigurationsUpdateResponse;
import org.openapis.openapi.models.operations.DfareportingFloodlightConfigurationsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomViewabilityMetric;
import org.openapis.openapi.models.shared.CustomViewabilityMetricConfiguration;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.FloodlightConfiguration;
import org.openapis.openapi.models.shared.FloodlightConfigurationFirstDayOfWeekEnum;
import org.openapis.openapi.models.shared.FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum;
import org.openapis.openapi.models.shared.LookbackConfiguration;
import org.openapis.openapi.models.shared.OmnitureSettings;
import org.openapis.openapi.models.shared.TagSettings;
import org.openapis.openapi.models.shared.ThirdPartyAuthenticationToken;
import org.openapis.openapi.models.shared.UserDefinedVariableConfiguration;
import org.openapis.openapi.models.shared.UserDefinedVariableConfigurationDataTypeEnum;
import org.openapis.openapi.models.shared.UserDefinedVariableConfigurationVariableTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingFloodlightConfigurationsUpdateRequest req = new DfareportingFloodlightConfigurationsUpdateRequest("nihil") {{
                dollarXgafv = XgafvEnum.ONE;
                floodlightConfiguration = new FloodlightConfiguration() {{
                    accountId = "impedit";
                    advertiserId = "iure";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "ullam";
                        etag = "aliquid";
                        id = "75f5b70e-3e4c-4fcc-aa91-ec52624d0001";
                        kind = "tempora";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "hic";
                    }};;
                    analyticsDataSharingEnabled = false;
                    customViewabilityMetric = new CustomViewabilityMetric() {{
                        configuration = new CustomViewabilityMetricConfiguration() {{
                            audible = false;
                            timeMillis = 251555;
                            timePercent = 324238;
                            viewabilityPercent = 774339;
                        }};;
                        id = "officiis";
                        name = "Samuel Bruen";
                    }};;
                    exposureToConversionEnabled = false;
                    firstDayOfWeek = FloodlightConfigurationFirstDayOfWeekEnum.MONDAY;
                    id = "neque";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "debitis";
                        etag = "quidem";
                        id = "b6587f34-0414-4c5b-9ace-e400ae9f92ca";
                        kind = "earum";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "nobis";
                    }};;
                    inAppAttributionTrackingEnabled = false;
                    kind = "ipsa";
                    lookbackConfiguration = new LookbackConfiguration() {{
                        clickDuration = 171624;
                        postImpressionActivitiesDuration = 362656;
                    }};;
                    naturalSearchConversionAttributionOption = FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum.INCLUDE_NATURAL_SEARCH_TIERED_CONVERSION_ATTRIBUTION;
                    omnitureSettings = new OmnitureSettings() {{
                        omnitureCostDataEnabled = false;
                        omnitureIntegrationEnabled = false;
                    }};;
                    subaccountId = "architecto";
                    tagSettings = new TagSettings() {{
                        dynamicTagEnabled = false;
                        imageTagEnabled = false;
                    }};;
                    thirdPartyAuthenticationTokens = new org.openapis.openapi.models.shared.ThirdPartyAuthenticationToken[]{{
                        add(new ThirdPartyAuthenticationToken() {{
                            name = "Ms. Danielle Kunde";
                            value = "nisi";
                        }}),
                        add(new ThirdPartyAuthenticationToken() {{
                            name = "Rex Champlin";
                            value = "quibusdam";
                        }}),
                        add(new ThirdPartyAuthenticationToken() {{
                            name = "Erma Barton";
                            value = "veniam";
                        }}),
                        add(new ThirdPartyAuthenticationToken() {{
                            name = "Salvador Heller";
                            value = "magni";
                        }}),
                    }};
                    userDefinedVariableConfigurations = new org.openapis.openapi.models.shared.UserDefinedVariableConfiguration[]{{
                        add(new UserDefinedVariableConfiguration() {{
                            dataType = UserDefinedVariableConfigurationDataTypeEnum.NUMBER;
                            reportName = "nulla";
                            variableType = UserDefinedVariableConfigurationVariableTypeEnum.U13;
                        }}),
                        add(new UserDefinedVariableConfiguration() {{
                            dataType = UserDefinedVariableConfigurationDataTypeEnum.STRING;
                            reportName = "doloribus";
                            variableType = UserDefinedVariableConfigurationVariableTypeEnum.U79;
                        }}),
                        add(new UserDefinedVariableConfiguration() {{
                            dataType = UserDefinedVariableConfigurationDataTypeEnum.STRING;
                            reportName = "nesciunt";
                            variableType = UserDefinedVariableConfigurationVariableTypeEnum.U74;
                        }}),
                        add(new UserDefinedVariableConfiguration() {{
                            dataType = UserDefinedVariableConfigurationDataTypeEnum.STRING;
                            reportName = "quae";
                            variableType = UserDefinedVariableConfigurationVariableTypeEnum.U72;
                        }}),
                    }};
                }};;
                accessToken = "maxime";
                alt = AltEnum.PROTO;
                callback = "laudantium";
                fields = "blanditiis";
                key = "reiciendis";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "dignissimos";
                uploadType = "eaque";
                uploadProtocol = "quo";
            }};            

            DfareportingFloodlightConfigurationsUpdateResponse res = sdk.floodlightConfigurations.dfareportingFloodlightConfigurationsUpdate(req, new DfareportingFloodlightConfigurationsUpdateSecurity("labore", "consectetur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.floodlightConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
