# accounts

### Available Operations

* [admobAccountsAdUnitsList](#admobaccountsadunitslist) - List the ad units under the specified AdMob account.
* [admobAccountsAppsList](#admobaccountsappslist) - List the apps under the specified AdMob account.
* [admobAccountsGet](#admobaccountsget) - Gets information about the specified AdMob publisher account.
* [admobAccountsList](#admobaccountslist) - Lists the AdMob publisher account that was most recently signed in to from the AdMob UI. For more information, see https://support.google.com/admob/answer/10243672.
* [admobAccountsMediationReportGenerate](#admobaccountsmediationreportgenerate) - Generates an AdMob mediation report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.
* [admobAccountsNetworkReportGenerate](#admobaccountsnetworkreportgenerate) - Generates an AdMob Network report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.

## admobAccountsAdUnitsList

List the ad units under the specified AdMob account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdmobAccountsAdUnitsListRequest;
import org.openapis.openapi.models.operations.AdmobAccountsAdUnitsListResponse;
import org.openapis.openapi.models.operations.AdmobAccountsAdUnitsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdmobAccountsAdUnitsListRequest req = new AdmobAccountsAdUnitsListRequest("ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "minus";
                key = "placeat";
                oauthToken = "voluptatum";
                pageSize = 479977L;
                pageToken = "excepturi";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "recusandae";
                uploadProtocol = "temporibus";
            }};            

            AdmobAccountsAdUnitsListResponse res = sdk.accounts.admobAccountsAdUnitsList(req, new AdmobAccountsAdUnitsListSecurity("ab", "quis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listAdUnitsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## admobAccountsAppsList

List the apps under the specified AdMob account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdmobAccountsAppsListRequest;
import org.openapis.openapi.models.operations.AdmobAccountsAppsListResponse;
import org.openapis.openapi.models.operations.AdmobAccountsAppsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdmobAccountsAppsListRequest req = new AdmobAccountsAppsListRequest("veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "perferendis";
                alt = AltEnum.MEDIA;
                callback = "repellendus";
                fields = "sapiente";
                key = "quo";
                oauthToken = "odit";
                pageSize = 870013L;
                pageToken = "at";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "molestiae";
                uploadProtocol = "quod";
            }};            

            AdmobAccountsAppsListResponse res = sdk.accounts.admobAccountsAppsList(req, new AdmobAccountsAppsListSecurity("quod", "esse") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listAppsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## admobAccountsGet

Gets information about the specified AdMob publisher account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdmobAccountsGetRequest;
import org.openapis.openapi.models.operations.AdmobAccountsGetResponse;
import org.openapis.openapi.models.operations.AdmobAccountsGetSecurity;
import org.openapis.openapi.models.operations.AdmobAccountsGetSecurityOption1;
import org.openapis.openapi.models.operations.AdmobAccountsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdmobAccountsGetRequest req = new AdmobAccountsGetRequest("totam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorum";
                alt = AltEnum.JSON;
                callback = "nam";
                fields = "officia";
                key = "occaecati";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "hic";
                uploadProtocol = "optio";
            }};            

            AdmobAccountsGetResponse res = sdk.accounts.admobAccountsGet(req, new AdmobAccountsGetSecurity() {{
                option1 = new AdmobAccountsGetSecurityOption1("totam", "beatae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.publisherAccount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## admobAccountsList

Lists the AdMob publisher account that was most recently signed in to from the AdMob UI. For more information, see https://support.google.com/admob/answer/10243672.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdmobAccountsListRequest;
import org.openapis.openapi.models.operations.AdmobAccountsListResponse;
import org.openapis.openapi.models.operations.AdmobAccountsListSecurity;
import org.openapis.openapi.models.operations.AdmobAccountsListSecurityOption1;
import org.openapis.openapi.models.operations.AdmobAccountsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdmobAccountsListRequest req = new AdmobAccountsListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "qui";
                fields = "impedit";
                key = "cum";
                oauthToken = "esse";
                pageSize = 216550L;
                pageToken = "excepturi";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "perferendis";
                uploadProtocol = "ad";
            }};            

            AdmobAccountsListResponse res = sdk.accounts.admobAccountsList(req, new AdmobAccountsListSecurity() {{
                option1 = new AdmobAccountsListSecurityOption1("natus", "sed") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listPublisherAccountsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## admobAccountsMediationReportGenerate

Generates an AdMob mediation report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdmobAccountsMediationReportGenerateRequest;
import org.openapis.openapi.models.operations.AdmobAccountsMediationReportGenerateResponse;
import org.openapis.openapi.models.operations.AdmobAccountsMediationReportGenerateSecurity;
import org.openapis.openapi.models.operations.AdmobAccountsMediationReportGenerateSecurityOption1;
import org.openapis.openapi.models.operations.AdmobAccountsMediationReportGenerateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.DateRange;
import org.openapis.openapi.models.shared.GenerateMediationReportRequest;
import org.openapis.openapi.models.shared.LocalizationSettings;
import org.openapis.openapi.models.shared.MediationReportSpec;
import org.openapis.openapi.models.shared.MediationReportSpecDimensionFilter;
import org.openapis.openapi.models.shared.MediationReportSpecDimensionFilterDimensionEnum;
import org.openapis.openapi.models.shared.MediationReportSpecDimensionsEnum;
import org.openapis.openapi.models.shared.MediationReportSpecMetricsEnum;
import org.openapis.openapi.models.shared.MediationReportSpecSortCondition;
import org.openapis.openapi.models.shared.MediationReportSpecSortConditionDimensionEnum;
import org.openapis.openapi.models.shared.MediationReportSpecSortConditionMetricEnum;
import org.openapis.openapi.models.shared.MediationReportSpecSortConditionOrderEnum;
import org.openapis.openapi.models.shared.StringList;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdmobAccountsMediationReportGenerateRequest req = new AdmobAccountsMediationReportGenerateRequest("iste") {{
                dollarXgafv = XgafvEnum.ONE;
                generateMediationReportRequest = new GenerateMediationReportRequest() {{
                    reportSpec = new MediationReportSpec() {{
                        dateRange = new DateRange() {{
                            endDate = new Date() {{
                                day = 616934;
                                month = 386489;
                                year = 943749;
                            }};;
                            startDate = new Date() {{
                                day = 902599;
                                month = 681820;
                                year = 449950;
                            }};;
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.MediationReportSpecDimensionFilter[]{{
                            add(new MediationReportSpecDimensionFilter() {{
                                dimension = MediationReportSpecDimensionFilterDimensionEnum.COUNTRY;
                                matchesAny = new StringList() {{
                                    values = new String[]{{
                                        add("saepe"),
                                        add("quidem"),
                                    }};
                                }};
                            }}),
                            add(new MediationReportSpecDimensionFilter() {{
                                dimension = MediationReportSpecDimensionFilterDimensionEnum.DATE;
                                matchesAny = new StringList() {{
                                    values = new String[]{{
                                        add("reiciendis"),
                                    }};
                                }};
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.MediationReportSpecDimensionsEnum[]{{
                            add(MediationReportSpecDimensionsEnum.FORMAT),
                            add(MediationReportSpecDimensionsEnum.FORMAT),
                            add(MediationReportSpecDimensionsEnum.MONTH),
                        }};
                        localizationSettings = new LocalizationSettings() {{
                            currencyCode = "dolorem";
                            languageCode = "corporis";
                        }};;
                        maxReportRows = 128926;
                        metrics = new org.openapis.openapi.models.shared.MediationReportSpecMetricsEnum[]{{
                            add(MediationReportSpecMetricsEnum.CLICKS),
                            add(MediationReportSpecMetricsEnum.IMPRESSION_CTR),
                            add(MediationReportSpecMetricsEnum.ESTIMATED_EARNINGS),
                            add(MediationReportSpecMetricsEnum.CLICKS),
                        }};
                        sortConditions = new org.openapis.openapi.models.shared.MediationReportSpecSortCondition[]{{
                            add(new MediationReportSpecSortCondition() {{
                                dimension = MediationReportSpecSortConditionDimensionEnum.DIMENSION_UNSPECIFIED;
                                metric = MediationReportSpecSortConditionMetricEnum.ESTIMATED_EARNINGS;
                                order = MediationReportSpecSortConditionOrderEnum.ASCENDING;
                            }}),
                            add(new MediationReportSpecSortCondition() {{
                                dimension = MediationReportSpecSortConditionDimensionEnum.SERVING_RESTRICTION;
                                metric = MediationReportSpecSortConditionMetricEnum.OBSERVED_ECPM;
                                order = MediationReportSpecSortConditionOrderEnum.SORT_ORDER_UNSPECIFIED;
                            }}),
                            add(new MediationReportSpecSortCondition() {{
                                dimension = MediationReportSpecSortConditionDimensionEnum.FORMAT;
                                metric = MediationReportSpecSortConditionMetricEnum.AD_REQUESTS;
                                order = MediationReportSpecSortConditionOrderEnum.ASCENDING;
                            }}),
                        }};
                        timeZone = "consequuntur";
                    }};;
                }};;
                accessToken = "repellat";
                alt = AltEnum.MEDIA;
                callback = "occaecati";
                fields = "numquam";
                key = "commodi";
                oauthToken = "quam";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "velit";
                uploadProtocol = "error";
            }};            

            AdmobAccountsMediationReportGenerateResponse res = sdk.accounts.admobAccountsMediationReportGenerate(req, new AdmobAccountsMediationReportGenerateSecurity() {{
                option1 = new AdmobAccountsMediationReportGenerateSecurityOption1("quia", "quis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.generateMediationReportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## admobAccountsNetworkReportGenerate

Generates an AdMob Network report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdmobAccountsNetworkReportGenerateRequest;
import org.openapis.openapi.models.operations.AdmobAccountsNetworkReportGenerateResponse;
import org.openapis.openapi.models.operations.AdmobAccountsNetworkReportGenerateSecurity;
import org.openapis.openapi.models.operations.AdmobAccountsNetworkReportGenerateSecurityOption1;
import org.openapis.openapi.models.operations.AdmobAccountsNetworkReportGenerateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.DateRange;
import org.openapis.openapi.models.shared.GenerateNetworkReportRequest;
import org.openapis.openapi.models.shared.LocalizationSettings;
import org.openapis.openapi.models.shared.NetworkReportSpec;
import org.openapis.openapi.models.shared.NetworkReportSpecDimensionFilter;
import org.openapis.openapi.models.shared.NetworkReportSpecDimensionFilterDimensionEnum;
import org.openapis.openapi.models.shared.NetworkReportSpecDimensionsEnum;
import org.openapis.openapi.models.shared.NetworkReportSpecMetricsEnum;
import org.openapis.openapi.models.shared.NetworkReportSpecSortCondition;
import org.openapis.openapi.models.shared.NetworkReportSpecSortConditionDimensionEnum;
import org.openapis.openapi.models.shared.NetworkReportSpecSortConditionMetricEnum;
import org.openapis.openapi.models.shared.NetworkReportSpecSortConditionOrderEnum;
import org.openapis.openapi.models.shared.StringList;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdmobAccountsNetworkReportGenerateRequest req = new AdmobAccountsNetworkReportGenerateRequest("vitae") {{
                dollarXgafv = XgafvEnum.TWO;
                generateNetworkReportRequest = new GenerateNetworkReportRequest() {{
                    reportSpec = new NetworkReportSpec() {{
                        dateRange = new DateRange() {{
                            endDate = new Date() {{
                                day = 656330;
                                month = 317202;
                                year = 138183;
                            }};;
                            startDate = new Date() {{
                                day = 778346;
                                month = 196582;
                                year = 949572;
                            }};;
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.NetworkReportSpecDimensionFilter[]{{
                            add(new NetworkReportSpecDimensionFilter() {{
                                dimension = NetworkReportSpecDimensionFilterDimensionEnum.PLATFORM;
                                matchesAny = new StringList() {{
                                    values = new String[]{{
                                        add("aut"),
                                        add("quasi"),
                                        add("error"),
                                        add("temporibus"),
                                    }};
                                }};
                            }}),
                            add(new NetworkReportSpecDimensionFilter() {{
                                dimension = NetworkReportSpecDimensionFilterDimensionEnum.PLATFORM;
                                matchesAny = new StringList() {{
                                    values = new String[]{{
                                        add("reiciendis"),
                                    }};
                                }};
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.NetworkReportSpecDimensionsEnum[]{{
                            add(NetworkReportSpecDimensionsEnum.APP_VERSION_NAME),
                            add(NetworkReportSpecDimensionsEnum.AD_TYPE),
                            add(NetworkReportSpecDimensionsEnum.COUNTRY),
                            add(NetworkReportSpecDimensionsEnum.SERVING_RESTRICTION),
                        }};
                        localizationSettings = new LocalizationSettings() {{
                            currencyCode = "ipsa";
                            languageCode = "omnis";
                        }};;
                        maxReportRows = 451159;
                        metrics = new org.openapis.openapi.models.shared.NetworkReportSpecMetricsEnum[]{{
                            add(NetworkReportSpecMetricsEnum.METRIC_UNSPECIFIED),
                            add(NetworkReportSpecMetricsEnum.METRIC_UNSPECIFIED),
                            add(NetworkReportSpecMetricsEnum.IMPRESSIONS),
                        }};
                        sortConditions = new org.openapis.openapi.models.shared.NetworkReportSpecSortCondition[]{{
                            add(new NetworkReportSpecSortCondition() {{
                                dimension = NetworkReportSpecSortConditionDimensionEnum.SERVING_RESTRICTION;
                                metric = NetworkReportSpecSortConditionMetricEnum.AD_REQUESTS;
                                order = NetworkReportSpecSortConditionOrderEnum.ASCENDING;
                            }}),
                            add(new NetworkReportSpecSortCondition() {{
                                dimension = NetworkReportSpecSortConditionDimensionEnum.AD_UNIT;
                                metric = NetworkReportSpecSortConditionMetricEnum.IMPRESSIONS;
                                order = NetworkReportSpecSortConditionOrderEnum.SORT_ORDER_UNSPECIFIED;
                            }}),
                        }};
                        timeZone = "harum";
                    }};;
                }};;
                accessToken = "enim";
                alt = AltEnum.PROTO;
                callback = "commodi";
                fields = "repudiandae";
                key = "quae";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "molestias";
                uploadProtocol = "excepturi";
            }};            

            AdmobAccountsNetworkReportGenerateResponse res = sdk.accounts.admobAccountsNetworkReportGenerate(req, new AdmobAccountsNetworkReportGenerateSecurity() {{
                option1 = new AdmobAccountsNetworkReportGenerateSecurityOption1("pariatur", "modi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.generateNetworkReportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
