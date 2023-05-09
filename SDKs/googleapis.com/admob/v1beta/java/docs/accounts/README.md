# accounts

### Available Operations

* [admobAccountsAdSourcesList](#admobaccountsadsourceslist) - List the ad sources.
* [admobAccountsAdUnitsList](#admobaccountsadunitslist) - List the ad units under the specified AdMob account.
* [admobAccountsAppsList](#admobaccountsappslist) - List the apps under the specified AdMob account.
* [admobAccountsGet](#admobaccountsget) - Gets information about the specified AdMob publisher account.
* [admobAccountsList](#admobaccountslist) - Lists the AdMob publisher account that was most recently signed in to from the AdMob UI. For more information, see https://support.google.com/admob/answer/10243672.
* [admobAccountsMediationReportGenerate](#admobaccountsmediationreportgenerate) - Generates an AdMob mediation report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.
* [admobAccountsNetworkReportGenerate](#admobaccountsnetworkreportgenerate) - Generates an AdMob Network report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.

## admobAccountsAdSourcesList

List the ad sources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdmobAccountsAdSourcesListRequest;
import org.openapis.openapi.models.operations.AdmobAccountsAdSourcesListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdmobAccountsAdSourcesListRequest req = new AdmobAccountsAdSourcesListRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "suscipit";
                key = "molestiae";
                oauthToken = "minus";
                pageSize = 812169L;
                pageToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "excepturi";
                uploadProtocol = "nisi";
            }};            

            AdmobAccountsAdSourcesListResponse res = sdk.accounts.admobAccountsAdSourcesList(req);

            if (res.listAdSourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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

            AdmobAccountsAdUnitsListRequest req = new AdmobAccountsAdUnitsListRequest("recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ab";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                fields = "deserunt";
                key = "perferendis";
                oauthToken = "ipsam";
                pageSize = 832620L;
                pageToken = "sapiente";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "odit";
                uploadProtocol = "at";
            }};            

            AdmobAccountsAdUnitsListResponse res = sdk.accounts.admobAccountsAdUnitsList(req, new AdmobAccountsAdUnitsListSecurity("at", "maiores") {{
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

            AdmobAccountsAppsListRequest req = new AdmobAccountsAppsListRequest("molestiae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quod";
                alt = AltEnum.MEDIA;
                callback = "totam";
                fields = "porro";
                key = "dolorum";
                oauthToken = "dicta";
                pageSize = 720633L;
                pageToken = "officia";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "fugit";
                uploadProtocol = "deleniti";
            }};            

            AdmobAccountsAppsListResponse res = sdk.accounts.admobAccountsAppsList(req, new AdmobAccountsAppsListSecurity("hic", "optio") {{
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
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "commodi";
                alt = AltEnum.MEDIA;
                callback = "modi";
                fields = "qui";
                key = "impedit";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "ipsum";
                uploadProtocol = "excepturi";
            }};            

            AdmobAccountsGetResponse res = sdk.accounts.admobAccountsGet(req, new AdmobAccountsGetSecurity() {{
                option1 = new AdmobAccountsGetSecurityOption1("aspernatur", "perferendis") {{
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
                accessToken = "natus";
                alt = AltEnum.JSON;
                callback = "iste";
                fields = "dolor";
                key = "natus";
                oauthToken = "laboriosam";
                pageSize = 943749L;
                pageToken = "saepe";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "in";
                uploadProtocol = "corporis";
            }};            

            AdmobAccountsListResponse res = sdk.accounts.admobAccountsList(req, new AdmobAccountsListSecurity() {{
                option1 = new AdmobAccountsListSecurityOption1("iste", "iure") {{
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

            AdmobAccountsMediationReportGenerateRequest req = new AdmobAccountsMediationReportGenerateRequest("saepe") {{
                dollarXgafv = XgafvEnum.TWO;
                generateMediationReportRequest = new GenerateMediationReportRequest() {{
                    reportSpec = new MediationReportSpec() {{
                        dateRange = new DateRange() {{
                            endDate = new Date() {{
                                day = 99280;
                                month = 60225;
                                year = 969810;
                            }};;
                            startDate = new Date() {{
                                day = 666767;
                                month = 653140;
                                year = 670638;
                            }};;
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.MediationReportSpecDimensionFilter[]{{
                            add(new MediationReportSpecDimensionFilter() {{
                                dimension = MediationReportSpecDimensionFilterDimensionEnum.WEEK;
                                matchesAny = new StringList() {{
                                    values = new String[]{{
                                        add("explicabo"),
                                        add("nobis"),
                                    }};
                                }};
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.MediationReportSpecDimensionsEnum[]{{
                            add(MediationReportSpecDimensionsEnum.COUNTRY),
                            add(MediationReportSpecDimensionsEnum.AD_SOURCE_INSTANCE),
                        }};
                        localizationSettings = new LocalizationSettings() {{
                            currencyCode = "minima";
                            languageCode = "excepturi";
                        }};;
                        maxReportRows = 38425;
                        metrics = new org.openapis.openapi.models.shared.MediationReportSpecMetricsEnum[]{{
                            add(MediationReportSpecMetricsEnum.IMPRESSION_CTR),
                            add(MediationReportSpecMetricsEnum.OBSERVED_ECPM),
                        }};
                        sortConditions = new org.openapis.openapi.models.shared.MediationReportSpecSortCondition[]{{
                            add(new MediationReportSpecSortCondition() {{
                                dimension = MediationReportSpecSortConditionDimensionEnum.DATE;
                                metric = MediationReportSpecSortConditionMetricEnum.IMPRESSION_CTR;
                                order = MediationReportSpecSortConditionOrderEnum.SORT_ORDER_UNSPECIFIED;
                            }}),
                            add(new MediationReportSpecSortCondition() {{
                                dimension = MediationReportSpecSortConditionDimensionEnum.FORMAT;
                                metric = MediationReportSpecSortConditionMetricEnum.AD_REQUESTS;
                                order = MediationReportSpecSortConditionOrderEnum.DESCENDING;
                            }}),
                            add(new MediationReportSpecSortCondition() {{
                                dimension = MediationReportSpecSortConditionDimensionEnum.FORMAT;
                                metric = MediationReportSpecSortConditionMetricEnum.IMPRESSION_CTR;
                                order = MediationReportSpecSortConditionOrderEnum.SORT_ORDER_UNSPECIFIED;
                            }}),
                            add(new MediationReportSpecSortCondition() {{
                                dimension = MediationReportSpecSortConditionDimensionEnum.AD_UNIT;
                                metric = MediationReportSpecSortConditionMetricEnum.IMPRESSIONS;
                                order = MediationReportSpecSortConditionOrderEnum.ASCENDING;
                            }}),
                        }};
                        timeZone = "velit";
                    }};;
                }};;
                accessToken = "error";
                alt = AltEnum.JSON;
                callback = "quis";
                fields = "vitae";
                key = "laborum";
                oauthToken = "animi";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "odit";
                uploadProtocol = "quo";
            }};            

            AdmobAccountsMediationReportGenerateResponse res = sdk.accounts.admobAccountsMediationReportGenerate(req, new AdmobAccountsMediationReportGenerateSecurity() {{
                option1 = new AdmobAccountsMediationReportGenerateSecurityOption1("sequi", "tenetur") {{
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

            AdmobAccountsNetworkReportGenerateRequest req = new AdmobAccountsNetworkReportGenerateRequest("ipsam") {{
                dollarXgafv = XgafvEnum.TWO;
                generateNetworkReportRequest = new GenerateNetworkReportRequest() {{
                    reportSpec = new NetworkReportSpec() {{
                        dateRange = new DateRange() {{
                            endDate = new Date() {{
                                day = 820994;
                                month = 13571;
                                year = 97101;
                            }};;
                            startDate = new Date() {{
                                day = 622846;
                                month = 837945;
                                year = 673660;
                            }};;
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.NetworkReportSpecDimensionFilter[]{{
                            add(new NetworkReportSpecDimensionFilter() {{
                                dimension = NetworkReportSpecDimensionFilterDimensionEnum.SERVING_RESTRICTION;
                                matchesAny = new StringList() {{
                                    values = new String[]{{
                                        add("vero"),
                                        add("nihil"),
                                        add("praesentium"),
                                        add("voluptatibus"),
                                    }};
                                }};
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.NetworkReportSpecDimensionsEnum[]{{
                            add(NetworkReportSpecDimensionsEnum.FORMAT),
                        }};
                        localizationSettings = new LocalizationSettings() {{
                            currencyCode = "voluptate";
                            languageCode = "cum";
                        }};;
                        maxReportRows = 19987;
                        metrics = new org.openapis.openapi.models.shared.NetworkReportSpecMetricsEnum[]{{
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
