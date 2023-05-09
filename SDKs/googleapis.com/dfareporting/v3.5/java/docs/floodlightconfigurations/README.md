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

            DfareportingFloodlightConfigurationsGetRequest req = new DfareportingFloodlightConfigurationsGetRequest("porro", "consequuntur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "est";
                alt = AltEnum.JSON;
                callback = "temporibus";
                fields = "perspiciatis";
                key = "corrupti";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "sequi";
                uploadType = "esse";
                uploadProtocol = "nobis";
            }};            

            DfareportingFloodlightConfigurationsGetResponse res = sdk.floodlightConfigurations.dfareportingFloodlightConfigurationsGet(req, new DfareportingFloodlightConfigurationsGetSecurity("est", "totam") {{
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

            DfareportingFloodlightConfigurationsListRequest req = new DfareportingFloodlightConfigurationsListRequest("corporis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "adipisci";
                alt = AltEnum.PROTO;
                callback = "repudiandae";
                fields = "autem";
                ids = new String[]{{
                    add("ad"),
                    add("molestiae"),
                }};
                key = "ut";
                oauthToken = "possimus";
                prettyPrint = false;
                quotaUser = "harum";
                uploadType = "culpa";
                uploadProtocol = "reiciendis";
            }};            

            DfareportingFloodlightConfigurationsListResponse res = sdk.floodlightConfigurations.dfareportingFloodlightConfigurationsList(req, new DfareportingFloodlightConfigurationsListSecurity("natus", "labore") {{
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

            DfareportingFloodlightConfigurationsPatchRequest req = new DfareportingFloodlightConfigurationsPatchRequest("officia", "quam") {{
                dollarXgafv = XgafvEnum.TWO;
                floodlightConfiguration = new FloodlightConfiguration() {{
                    accountId = "sint";
                    advertiserId = "rem";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "a";
                        etag = "illo";
                        id = "3af28db2-cf2b-4f4f-bded-356d7e14b21c";
                        kind = "fugiat";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "voluptatum";
                    }};;
                    analyticsDataSharingEnabled = false;
                    customViewabilityMetric = new CustomViewabilityMetric() {{
                        configuration = new CustomViewabilityMetricConfiguration() {{
                            audible = false;
                            timeMillis = 107863;
                            timePercent = 616685;
                            viewabilityPercent = 399505;
                        }};;
                        id = "assumenda";
                        name = "Erica Olson";
                    }};;
                    exposureToConversionEnabled = false;
                    firstDayOfWeek = FloodlightConfigurationFirstDayOfWeekEnum.SUNDAY;
                    id = "mollitia";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "sunt";
                        etag = "quod";
                        id = "4b79ae33-681c-423c-b9a7-c0e17cb12c5b";
                        kind = "culpa";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "fugit";
                    }};;
                    inAppAttributionTrackingEnabled = false;
                    kind = "corporis";
                    lookbackConfiguration = new LookbackConfiguration() {{
                        clickDuration = 955683;
                        postImpressionActivitiesDuration = 900232;
                    }};;
                    naturalSearchConversionAttributionOption = FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum.EXCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION;
                    omnitureSettings = new OmnitureSettings() {{
                        omnitureCostDataEnabled = false;
                        omnitureIntegrationEnabled = false;
                    }};;
                    subaccountId = "eos";
                    tagSettings = new TagSettings() {{
                        dynamicTagEnabled = false;
                        imageTagEnabled = false;
                    }};;
                    thirdPartyAuthenticationTokens = new org.openapis.openapi.models.shared.ThirdPartyAuthenticationToken[]{{
                        add(new ThirdPartyAuthenticationToken() {{
                            name = "Lloyd Runolfsdottir";
                            value = "ex";
                        }}),
                        add(new ThirdPartyAuthenticationToken() {{
                            name = "Dominic Zieme";
                            value = "perspiciatis";
                        }}),
                        add(new ThirdPartyAuthenticationToken() {{
                            name = "Kathryn Paucek";
                            value = "voluptatum";
                        }}),
                        add(new ThirdPartyAuthenticationToken() {{
                            name = "Sylvia Stanton";
                            value = "nam";
                        }}),
                    }};
                    userDefinedVariableConfigurations = new org.openapis.openapi.models.shared.UserDefinedVariableConfiguration[]{{
                        add(new UserDefinedVariableConfiguration() {{
                            dataType = UserDefinedVariableConfigurationDataTypeEnum.NUMBER;
                            reportName = "placeat";
                            variableType = UserDefinedVariableConfigurationVariableTypeEnum.U91;
                        }}),
                        add(new UserDefinedVariableConfiguration() {{
                            dataType = UserDefinedVariableConfigurationDataTypeEnum.NUMBER;
                            reportName = "odit";
                            variableType = UserDefinedVariableConfigurationVariableTypeEnum.U83;
                        }}),
                        add(new UserDefinedVariableConfiguration() {{
                            dataType = UserDefinedVariableConfigurationDataTypeEnum.NUMBER;
                            reportName = "ea";
                            variableType = UserDefinedVariableConfigurationVariableTypeEnum.U60;
                        }}),
                        add(new UserDefinedVariableConfiguration() {{
                            dataType = UserDefinedVariableConfigurationDataTypeEnum.STRING;
                            reportName = "ea";
                            variableType = UserDefinedVariableConfigurationVariableTypeEnum.U100;
                        }}),
                    }};
                }};;
                accessToken = "quam";
                alt = AltEnum.PROTO;
                callback = "minus";
                fields = "nihil";
                key = "quibusdam";
                oauthToken = "assumenda";
                prettyPrint = false;
                quotaUser = "animi";
                uploadType = "molestiae";
                uploadProtocol = "ipsa";
            }};            

            DfareportingFloodlightConfigurationsPatchResponse res = sdk.floodlightConfigurations.dfareportingFloodlightConfigurationsPatch(req, new DfareportingFloodlightConfigurationsPatchSecurity("recusandae", "placeat") {{
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

            DfareportingFloodlightConfigurationsUpdateRequest req = new DfareportingFloodlightConfigurationsUpdateRequest("aliquid") {{
                dollarXgafv = XgafvEnum.ONE;
                floodlightConfiguration = new FloodlightConfiguration() {{
                    accountId = "vero";
                    advertiserId = "laboriosam";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "aut";
                        etag = "reprehenderit";
                        id = "5894d61c-14cd-4902-a7e3-7c0d977f1a54";
                        kind = "iste";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "similique";
                    }};;
                    analyticsDataSharingEnabled = false;
                    customViewabilityMetric = new CustomViewabilityMetric() {{
                        configuration = new CustomViewabilityMetricConfiguration() {{
                            audible = false;
                            timeMillis = 697314;
                            timePercent = 886903;
                            viewabilityPercent = 590002;
                        }};;
                        id = "dignissimos";
                        name = "Mr. Heather Ritchie";
                    }};;
                    exposureToConversionEnabled = false;
                    firstDayOfWeek = FloodlightConfigurationFirstDayOfWeekEnum.SUNDAY;
                    id = "qui";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "ratione";
                        etag = "repudiandae";
                        id = "03e69815-aae9-49fc-9e9e-729c9d4f2d8a";
                        kind = "aliquam";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "laboriosam";
                    }};;
                    inAppAttributionTrackingEnabled = false;
                    kind = "quaerat";
                    lookbackConfiguration = new LookbackConfiguration() {{
                        clickDuration = 1663;
                        postImpressionActivitiesDuration = 790176;
                    }};;
                    naturalSearchConversionAttributionOption = FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum.INCLUDE_NATURAL_SEARCH_TIERED_CONVERSION_ATTRIBUTION;
                    omnitureSettings = new OmnitureSettings() {{
                        omnitureCostDataEnabled = false;
                        omnitureIntegrationEnabled = false;
                    }};;
                    subaccountId = "commodi";
                    tagSettings = new TagSettings() {{
                        dynamicTagEnabled = false;
                        imageTagEnabled = false;
                    }};;
                    thirdPartyAuthenticationTokens = new org.openapis.openapi.models.shared.ThirdPartyAuthenticationToken[]{{
                        add(new ThirdPartyAuthenticationToken() {{
                            name = "Geoffrey Kovacek";
                            value = "consequuntur";
                        }}),
                    }};
                    userDefinedVariableConfigurations = new org.openapis.openapi.models.shared.UserDefinedVariableConfiguration[]{{
                        add(new UserDefinedVariableConfiguration() {{
                            dataType = UserDefinedVariableConfigurationDataTypeEnum.NUMBER;
                            reportName = "dolorem";
                            variableType = UserDefinedVariableConfigurationVariableTypeEnum.U99;
                        }}),
                        add(new UserDefinedVariableConfiguration() {{
                            dataType = UserDefinedVariableConfigurationDataTypeEnum.STRING;
                            reportName = "autem";
                            variableType = UserDefinedVariableConfigurationVariableTypeEnum.U45;
                        }}),
                        add(new UserDefinedVariableConfiguration() {{
                            dataType = UserDefinedVariableConfigurationDataTypeEnum.NUMBER;
                            reportName = "quisquam";
                            variableType = UserDefinedVariableConfigurationVariableTypeEnum.U7;
                        }}),
                        add(new UserDefinedVariableConfiguration() {{
                            dataType = UserDefinedVariableConfigurationDataTypeEnum.NUMBER;
                            reportName = "praesentium";
                            variableType = UserDefinedVariableConfigurationVariableTypeEnum.U82;
                        }}),
                    }};
                }};;
                accessToken = "fuga";
                alt = AltEnum.JSON;
                callback = "voluptas";
                fields = "et";
                key = "explicabo";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "aut";
                uploadType = "quia";
                uploadProtocol = "laboriosam";
            }};            

            DfareportingFloodlightConfigurationsUpdateResponse res = sdk.floodlightConfigurations.dfareportingFloodlightConfigurationsUpdate(req, new DfareportingFloodlightConfigurationsUpdateSecurity("laborum", "soluta") {{
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
