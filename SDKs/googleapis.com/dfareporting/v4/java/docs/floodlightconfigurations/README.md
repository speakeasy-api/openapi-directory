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

            DfareportingFloodlightConfigurationsGetRequest req = new DfareportingFloodlightConfigurationsGetRequest("magni", "molestiae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laboriosam";
                alt = AltEnum.MEDIA;
                callback = "quibusdam";
                fields = "quidem";
                key = "molestias";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "labore";
                uploadProtocol = "perspiciatis";
            }};            

            DfareportingFloodlightConfigurationsGetResponse res = sdk.floodlightConfigurations.dfareportingFloodlightConfigurationsGet(req, new DfareportingFloodlightConfigurationsGetSecurity("officiis", "consectetur") {{
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

            DfareportingFloodlightConfigurationsListRequest req = new DfareportingFloodlightConfigurationsListRequest("provident") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "incidunt";
                alt = AltEnum.MEDIA;
                callback = "quasi";
                fields = "beatae";
                ids = new String[]{{
                    add("minus"),
                    add("in"),
                    add("corporis"),
                    add("itaque"),
                }};
                key = "incidunt";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "alias";
                uploadType = "eligendi";
                uploadProtocol = "accusantium";
            }};            

            DfareportingFloodlightConfigurationsListResponse res = sdk.floodlightConfigurations.dfareportingFloodlightConfigurationsList(req, new DfareportingFloodlightConfigurationsListSecurity("voluptatem", "non") {{
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

            DfareportingFloodlightConfigurationsPatchRequest req = new DfareportingFloodlightConfigurationsPatchRequest("soluta", "minima") {{
                dollarXgafv = XgafvEnum.TWO;
                floodlightConfiguration = new FloodlightConfiguration() {{
                    accountId = "rerum";
                    advertiserId = "molestiae";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "ipsam";
                        etag = "quos";
                        id = "cc94562f-0069-4685-bcd1-a173d84bbe24";
                        kind = "tenetur";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "error";
                    }};;
                    analyticsDataSharingEnabled = false;
                    customViewabilityMetric = new CustomViewabilityMetric() {{
                        configuration = new CustomViewabilityMetricConfiguration() {{
                            audible = false;
                            timeMillis = 509215;
                            timePercent = 195139;
                            viewabilityPercent = 299592;
                        }};;
                        id = "mollitia";
                        name = "Roderick Batz";
                    }};;
                    exposureToConversionEnabled = false;
                    firstDayOfWeek = FloodlightConfigurationFirstDayOfWeekEnum.MONDAY;
                    id = "eligendi";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "expedita";
                        etag = "laboriosam";
                        id = "285d4a29-aaa1-4e16-9156-f7d2ee209505";
                        kind = "tempore";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "doloremque";
                    }};;
                    inAppAttributionTrackingEnabled = false;
                    kind = "consectetur";
                    lookbackConfiguration = new LookbackConfiguration() {{
                        clickDuration = 674080;
                        postImpressionActivitiesDuration = 581873;
                    }};;
                    naturalSearchConversionAttributionOption = FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum.EXCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION;
                    omnitureSettings = new OmnitureSettings() {{
                        omnitureCostDataEnabled = false;
                        omnitureIntegrationEnabled = false;
                    }};;
                    subaccountId = "repudiandae";
                    tagSettings = new TagSettings() {{
                        dynamicTagEnabled = false;
                        imageTagEnabled = false;
                    }};;
                    thirdPartyAuthenticationTokens = new org.openapis.openapi.models.shared.ThirdPartyAuthenticationToken[]{{
                        add(new ThirdPartyAuthenticationToken() {{
                            name = "Miss Hazel Legros";
                            value = "ratione";
                        }}),
                        add(new ThirdPartyAuthenticationToken() {{
                            name = "Mr. Tami Reilly";
                            value = "voluptatum";
                        }}),
                        add(new ThirdPartyAuthenticationToken() {{
                            name = "Jose Dietrich";
                            value = "porro";
                        }}),
                    }};
                    userDefinedVariableConfigurations = new org.openapis.openapi.models.shared.UserDefinedVariableConfiguration[]{{
                        add(new UserDefinedVariableConfiguration() {{
                            dataType = UserDefinedVariableConfigurationDataTypeEnum.STRING;
                            reportName = "nesciunt";
                            variableType = UserDefinedVariableConfigurationVariableTypeEnum.U10;
                        }}),
                    }};
                }};;
                accessToken = "quam";
                alt = AltEnum.JSON;
                callback = "saepe";
                fields = "odit";
                key = "assumenda";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "provident";
                uploadProtocol = "recusandae";
            }};            

            DfareportingFloodlightConfigurationsPatchResponse res = sdk.floodlightConfigurations.dfareportingFloodlightConfigurationsPatch(req, new DfareportingFloodlightConfigurationsPatchSecurity("minus", "in") {{
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

            DfareportingFloodlightConfigurationsUpdateRequest req = new DfareportingFloodlightConfigurationsUpdateRequest("numquam") {{
                dollarXgafv = XgafvEnum.TWO;
                floodlightConfiguration = new FloodlightConfiguration() {{
                    accountId = "error";
                    advertiserId = "odio";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "necessitatibus";
                        etag = "corrupti";
                        id = "8ddb36fd-1ccc-4341-8865-73474f0a740f";
                        kind = "cum";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "deserunt";
                    }};;
                    analyticsDataSharingEnabled = false;
                    customViewabilityMetric = new CustomViewabilityMetric() {{
                        configuration = new CustomViewabilityMetricConfiguration() {{
                            audible = false;
                            timeMillis = 719652;
                            timePercent = 300514;
                            viewabilityPercent = 263333;
                        }};;
                        id = "illo";
                        name = "Ms. Dale Nolan";
                    }};;
                    exposureToConversionEnabled = false;
                    firstDayOfWeek = FloodlightConfigurationFirstDayOfWeekEnum.MONDAY;
                    id = "commodi";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "velit";
                        etag = "perspiciatis";
                        id = "95d808bb-e794-4455-abc5-50a1c426b59c";
                        kind = "voluptatum";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "commodi";
                    }};;
                    inAppAttributionTrackingEnabled = false;
                    kind = "ea";
                    lookbackConfiguration = new LookbackConfiguration() {{
                        clickDuration = 992447;
                        postImpressionActivitiesDuration = 814227;
                    }};;
                    naturalSearchConversionAttributionOption = FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum.INCLUDE_NATURAL_SEARCH_TIERED_CONVERSION_ATTRIBUTION;
                    omnitureSettings = new OmnitureSettings() {{
                        omnitureCostDataEnabled = false;
                        omnitureIntegrationEnabled = false;
                    }};;
                    subaccountId = "minus";
                    tagSettings = new TagSettings() {{
                        dynamicTagEnabled = false;
                        imageTagEnabled = false;
                    }};;
                    thirdPartyAuthenticationTokens = new org.openapis.openapi.models.shared.ThirdPartyAuthenticationToken[]{{
                        add(new ThirdPartyAuthenticationToken() {{
                            name = "Lynn Hickle";
                            value = "quisquam";
                        }}),
                    }};
                    userDefinedVariableConfigurations = new org.openapis.openapi.models.shared.UserDefinedVariableConfiguration[]{{
                        add(new UserDefinedVariableConfiguration() {{
                            dataType = UserDefinedVariableConfigurationDataTypeEnum.NUMBER;
                            reportName = "quos";
                            variableType = UserDefinedVariableConfigurationVariableTypeEnum.U34;
                        }}),
                    }};
                }};;
                accessToken = "ad";
                alt = AltEnum.PROTO;
                callback = "laudantium";
                fields = "atque";
                key = "cupiditate";
                oauthToken = "fugiat";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "officiis";
                uploadProtocol = "hic";
            }};            

            DfareportingFloodlightConfigurationsUpdateResponse res = sdk.floodlightConfigurations.dfareportingFloodlightConfigurationsUpdate(req, new DfareportingFloodlightConfigurationsUpdateSecurity("error", "consectetur") {{
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
