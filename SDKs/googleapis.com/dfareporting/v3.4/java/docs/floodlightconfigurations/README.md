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

            DfareportingFloodlightConfigurationsGetRequest req = new DfareportingFloodlightConfigurationsGetRequest("iste", "sunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequuntur";
                alt = AltEnum.PROTO;
                callback = "modi";
                fields = "natus";
                key = "fugiat";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "odit";
                uploadProtocol = "quis";
            }};            

            DfareportingFloodlightConfigurationsGetResponse res = sdk.floodlightConfigurations.dfareportingFloodlightConfigurationsGet(req, new DfareportingFloodlightConfigurationsGetSecurity("pariatur", "amet") {{
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

            DfareportingFloodlightConfigurationsListRequest req = new DfareportingFloodlightConfigurationsListRequest("eligendi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "delectus";
                alt = AltEnum.PROTO;
                callback = "minus";
                fields = "inventore";
                ids = new String[]{{
                    add("blanditiis"),
                    add("voluptates"),
                    add("saepe"),
                }};
                key = "animi";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "quaerat";
                uploadType = "quis";
                uploadProtocol = "dolores";
            }};            

            DfareportingFloodlightConfigurationsListResponse res = sdk.floodlightConfigurations.dfareportingFloodlightConfigurationsList(req, new DfareportingFloodlightConfigurationsListSecurity("dignissimos", "unde") {{
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

            DfareportingFloodlightConfigurationsPatchRequest req = new DfareportingFloodlightConfigurationsPatchRequest("odit", "tempore") {{
                dollarXgafv = XgafvEnum.TWO;
                floodlightConfiguration = new FloodlightConfiguration() {{
                    accountId = "possimus";
                    advertiserId = "non";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "ut";
                        etag = "ipsa";
                        id = "ea98becc-e048-46de-8d56-d73b005503e8";
                        kind = "fugiat";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "autem";
                    }};;
                    analyticsDataSharingEnabled = false;
                    customViewabilityMetric = new CustomViewabilityMetric() {{
                        configuration = new CustomViewabilityMetricConfiguration() {{
                            audible = false;
                            timeMillis = 129924;
                            timePercent = 407819;
                            viewabilityPercent = 986735;
                        }};;
                        id = "maiores";
                        name = "Courtney Rutherford";
                    }};;
                    exposureToConversionEnabled = false;
                    firstDayOfWeek = FloodlightConfigurationFirstDayOfWeekEnum.MONDAY;
                    id = "odio";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "enim";
                        etag = "delectus";
                        id = "5b70e3e4-cfcc-46a9-9ec5-2624d00014ef";
                        kind = "non";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "impedit";
                    }};;
                    inAppAttributionTrackingEnabled = false;
                    kind = "officiis";
                    lookbackConfiguration = new LookbackConfiguration() {{
                        clickDuration = 657173;
                        postImpressionActivitiesDuration = 118122;
                    }};;
                    naturalSearchConversionAttributionOption = FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum.EXCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION;
                    omnitureSettings = new OmnitureSettings() {{
                        omnitureCostDataEnabled = false;
                        omnitureIntegrationEnabled = false;
                    }};;
                    subaccountId = "laborum";
                    tagSettings = new TagSettings() {{
                        dynamicTagEnabled = false;
                        imageTagEnabled = false;
                    }};;
                    thirdPartyAuthenticationTokens = new org.openapis.openapi.models.shared.ThirdPartyAuthenticationToken[]{{
                        add(new ThirdPartyAuthenticationToken() {{
                            name = "Rita Trantow";
                            value = "suscipit";
                        }}),
                        add(new ThirdPartyAuthenticationToken() {{
                            name = "Priscilla Kuhlman";
                            value = "eius";
                        }}),
                        add(new ThirdPartyAuthenticationToken() {{
                            name = "Megan Bergnaum";
                            value = "ipsam";
                        }}),
                        add(new ThirdPartyAuthenticationToken() {{
                            name = "Sergio O'Reilly";
                            value = "debitis";
                        }}),
                    }};
                    userDefinedVariableConfigurations = new org.openapis.openapi.models.shared.UserDefinedVariableConfiguration[]{{
                        add(new UserDefinedVariableConfiguration() {{
                            dataType = UserDefinedVariableConfigurationDataTypeEnum.STRING;
                            reportName = "perferendis";
                            variableType = UserDefinedVariableConfigurationVariableTypeEnum.U66;
                        }}),
                        add(new UserDefinedVariableConfiguration() {{
                            dataType = UserDefinedVariableConfigurationDataTypeEnum.NUMBER;
                            reportName = "provident";
                            variableType = UserDefinedVariableConfigurationVariableTypeEnum.U99;
                        }}),
                    }};
                }};;
                accessToken = "unde";
                alt = AltEnum.JSON;
                callback = "minus";
                fields = "id";
                key = "earum";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "ipsa";
                uploadProtocol = "dolores";
            }};            

            DfareportingFloodlightConfigurationsPatchResponse res = sdk.floodlightConfigurations.dfareportingFloodlightConfigurationsPatch(req, new DfareportingFloodlightConfigurationsPatchSecurity("nemo", "a") {{
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

            DfareportingFloodlightConfigurationsUpdateRequest req = new DfareportingFloodlightConfigurationsUpdateRequest("architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                floodlightConfiguration = new FloodlightConfiguration() {{
                    accountId = "vitae";
                    advertiserId = "magnam";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "dignissimos";
                        etag = "sunt";
                        id = "8c6fa2fa-d0c0-46c5-9954-72cdd14fc43b";
                        kind = "in";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "distinctio";
                    }};;
                    analyticsDataSharingEnabled = false;
                    customViewabilityMetric = new CustomViewabilityMetric() {{
                        configuration = new CustomViewabilityMetricConfiguration() {{
                            audible = false;
                            timeMillis = 803138;
                            timePercent = 685799;
                            viewabilityPercent = 515768;
                        }};;
                        id = "blanditiis";
                        name = "Miss Ernesto Kulas";
                    }};;
                    exposureToConversionEnabled = false;
                    firstDayOfWeek = FloodlightConfigurationFirstDayOfWeekEnum.MONDAY;
                    id = "ipsum";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "exercitationem";
                        etag = "inventore";
                        id = "c3dd1eb8-f7f7-45f4-b23f-1c0a586c3ae7";
                        kind = "temporibus";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "soluta";
                    }};;
                    inAppAttributionTrackingEnabled = false;
                    kind = "voluptas";
                    lookbackConfiguration = new LookbackConfiguration() {{
                        clickDuration = 483896;
                        postImpressionActivitiesDuration = 969861;
                    }};;
                    naturalSearchConversionAttributionOption = FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum.INCLUDE_NATURAL_SEARCH_TIERED_CONVERSION_ATTRIBUTION;
                    omnitureSettings = new OmnitureSettings() {{
                        omnitureCostDataEnabled = false;
                        omnitureIntegrationEnabled = false;
                    }};;
                    subaccountId = "voluptates";
                    tagSettings = new TagSettings() {{
                        dynamicTagEnabled = false;
                        imageTagEnabled = false;
                    }};;
                    thirdPartyAuthenticationTokens = new org.openapis.openapi.models.shared.ThirdPartyAuthenticationToken[]{{
                        add(new ThirdPartyAuthenticationToken() {{
                            name = "Gretchen Bergnaum";
                            value = "pariatur";
                        }}),
                        add(new ThirdPartyAuthenticationToken() {{
                            name = "Dr. Dustin Reilly";
                            value = "eveniet";
                        }}),
                        add(new ThirdPartyAuthenticationToken() {{
                            name = "Merle Yost";
                            value = "quo";
                        }}),
                        add(new ThirdPartyAuthenticationToken() {{
                            name = "Hannah Bergnaum";
                            value = "itaque";
                        }}),
                    }};
                    userDefinedVariableConfigurations = new org.openapis.openapi.models.shared.UserDefinedVariableConfiguration[]{{
                        add(new UserDefinedVariableConfiguration() {{
                            dataType = UserDefinedVariableConfigurationDataTypeEnum.STRING;
                            reportName = "ducimus";
                            variableType = UserDefinedVariableConfigurationVariableTypeEnum.U55;
                        }}),
                        add(new UserDefinedVariableConfiguration() {{
                            dataType = UserDefinedVariableConfigurationDataTypeEnum.STRING;
                            reportName = "voluptate";
                            variableType = UserDefinedVariableConfigurationVariableTypeEnum.U38;
                        }}),
                        add(new UserDefinedVariableConfiguration() {{
                            dataType = UserDefinedVariableConfigurationDataTypeEnum.NUMBER;
                            reportName = "repudiandae";
                            variableType = UserDefinedVariableConfigurationVariableTypeEnum.U65;
                        }}),
                    }};
                }};;
                accessToken = "esse";
                alt = AltEnum.MEDIA;
                callback = "laudantium";
                fields = "quasi";
                key = "nihil";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "laboriosam";
                uploadType = "praesentium";
                uploadProtocol = "quae";
            }};            

            DfareportingFloodlightConfigurationsUpdateResponse res = sdk.floodlightConfigurations.dfareportingFloodlightConfigurationsUpdate(req, new DfareportingFloodlightConfigurationsUpdateSecurity("nisi", "amet") {{
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
