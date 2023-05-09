# bidders

### Available Operations

* [adexchangebuyer2BiddersFilterSetsBidMetricsList](#adexchangebuyer2biddersfiltersetsbidmetricslist) - Lists all metrics that are measured in terms of number of bids.
* [adexchangebuyer2BiddersFilterSetsBidResponseErrorsList](#adexchangebuyer2biddersfiltersetsbidresponseerrorslist) - List all errors that occurred in bid responses, with the number of bid responses affected for each reason.
* [adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsList](#adexchangebuyer2biddersfiltersetsbidresponseswithoutbidslist) - List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason.
* [adexchangebuyer2BiddersFilterSetsCreate](#adexchangebuyer2biddersfiltersetscreate) - Creates the specified filter set for the account with the given account ID.
* [adexchangebuyer2BiddersFilterSetsDelete](#adexchangebuyer2biddersfiltersetsdelete) - Deletes the requested filter set from the account with the given account ID.
* [adexchangebuyer2BiddersFilterSetsFilteredBidRequestsList](#adexchangebuyer2biddersfiltersetsfilteredbidrequestslist) - List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason.
* [adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesList](#adexchangebuyer2biddersfiltersetsfilteredbidscreativeslist) - List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative.
* [adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsList](#adexchangebuyer2biddersfiltersetsfilteredbidsdetailslist) - List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail.
* [adexchangebuyer2BiddersFilterSetsFilteredBidsList](#adexchangebuyer2biddersfiltersetsfilteredbidslist) - List all reasons for which bids were filtered, with the number of bids filtered for each reason.
* [adexchangebuyer2BiddersFilterSetsGet](#adexchangebuyer2biddersfiltersetsget) - Retrieves the requested filter set for the account with the given account ID.
* [adexchangebuyer2BiddersFilterSetsImpressionMetricsList](#adexchangebuyer2biddersfiltersetsimpressionmetricslist) - Lists all metrics that are measured in terms of number of impressions.
* [adexchangebuyer2BiddersFilterSetsList](#adexchangebuyer2biddersfiltersetslist) - Lists all filter sets for the account with the given account ID.
* [adexchangebuyer2BiddersFilterSetsLosingBidsList](#adexchangebuyer2biddersfiltersetslosingbidslist) - List all reasons for which bids lost in the auction, with the number of bids that lost for each reason.
* [adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsList](#adexchangebuyer2biddersfiltersetsnonbillablewinningbidslist) - List all reasons for which winning bids were not billable, with the number of bids not billed for each reason.

## adexchangebuyer2BiddersFilterSetsBidMetricsList

Lists all metrics that are measured in terms of number of bids.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsBidMetricsListRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsBidMetricsListResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsBidMetricsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2BiddersFilterSetsBidMetricsListRequest req = new Adexchangebuyer2BiddersFilterSetsBidMetricsListRequest("praesentium") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "fugiat";
                alt = AltEnum.JSON;
                callback = "iure";
                fields = "laudantium";
                key = "modi";
                oauthToken = "magnam";
                pageSize = 882157L;
                pageToken = "nulla";
                prettyPrint = false;
                quotaUser = "repudiandae";
                uploadType = "quibusdam";
                uploadProtocol = "praesentium";
            }};            

            Adexchangebuyer2BiddersFilterSetsBidMetricsListResponse res = sdk.bidders.adexchangebuyer2BiddersFilterSetsBidMetricsList(req, new Adexchangebuyer2BiddersFilterSetsBidMetricsListSecurity("enim", "animi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listBidMetricsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2BiddersFilterSetsBidResponseErrorsList

List all errors that occurred in bid responses, with the number of bid responses affected for each reason.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListRequest req = new Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListRequest("unde") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eum";
                alt = AltEnum.MEDIA;
                callback = "eveniet";
                fields = "laboriosam";
                key = "ratione";
                oauthToken = "blanditiis";
                pageSize = 697729L;
                pageToken = "illum";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "placeat";
                uploadProtocol = "dolores";
            }};            

            Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListResponse res = sdk.bidders.adexchangebuyer2BiddersFilterSetsBidResponseErrorsList(req, new Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListSecurity("consequatur", "nesciunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listBidResponseErrorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsList

List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListRequest req = new Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListRequest("quia") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptas";
                alt = AltEnum.PROTO;
                callback = "laudantium";
                fields = "dignissimos";
                key = "omnis";
                oauthToken = "omnis";
                pageSize = 144397L;
                pageToken = "dolorem";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "molestiae";
                uploadProtocol = "debitis";
            }};            

            Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListResponse res = sdk.bidders.adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsList(req, new Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListSecurity("vitae", "dolor") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listBidResponsesWithoutBidsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2BiddersFilterSetsCreate

Creates the specified filter set for the account with the given account ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsCreateRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsCreateResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsCreateSecurity;
import org.openapis.openapi.models.shared.AbsoluteDateRange;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.FilterSet;
import org.openapis.openapi.models.shared.FilterSetBreakdownDimensionsEnum;
import org.openapis.openapi.models.shared.FilterSetEnvironmentEnum;
import org.openapis.openapi.models.shared.FilterSetFormatEnum;
import org.openapis.openapi.models.shared.FilterSetFormatsEnum;
import org.openapis.openapi.models.shared.FilterSetPlatformsEnum;
import org.openapis.openapi.models.shared.FilterSetTimeSeriesGranularityEnum;
import org.openapis.openapi.models.shared.RealtimeTimeRange;
import org.openapis.openapi.models.shared.RelativeDateRange;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2BiddersFilterSetsCreateRequest req = new Adexchangebuyer2BiddersFilterSetsCreateRequest("ad") {{
                dollarXgafv = XgafvEnum.TWO;
                filterSet = new FilterSet() {{
                    absoluteDateRange = new AbsoluteDateRange() {{
                        endDate = new Date() {{
                            day = 284779;
                            month = 989765;
                            year = 444625;
                        }};;
                        startDate = new Date() {{
                            day = 644129;
                            month = 930127;
                            year = 93254;
                        }};;
                    }};;
                    breakdownDimensions = new org.openapis.openapi.models.shared.FilterSetBreakdownDimensionsEnum[]{{
                        add(FilterSetBreakdownDimensionsEnum.PUBLISHER_IDENTIFIER),
                    }};
                    creativeId = "ex";
                    dealId = "praesentium";
                    environment = FilterSetEnvironmentEnum.WEB;
                    format = FilterSetFormatEnum.FORMAT_UNSPECIFIED;
                    formats = new org.openapis.openapi.models.shared.FilterSetFormatsEnum[]{{
                        add(FilterSetFormatsEnum.NATIVE_VIDEO),
                        add(FilterSetFormatsEnum.FORMAT_UNSPECIFIED),
                        add(FilterSetFormatsEnum.NON_NATIVE_DISPLAY),
                        add(FilterSetFormatsEnum.NON_NATIVE_VIDEO),
                    }};
                    name = "Stephanie Hermiston IV";
                    platforms = new org.openapis.openapi.models.shared.FilterSetPlatformsEnum[]{{
                        add(FilterSetPlatformsEnum.PLATFORM_UNSPECIFIED),
                    }};
                    publisherIdentifiers = new String[]{{
                        add("exercitationem"),
                    }};
                    realtimeTimeRange = new RealtimeTimeRange() {{
                        startTimestamp = "amet";
                    }};;
                    relativeDateRange = new RelativeDateRange() {{
                        durationDays = 454165;
                        offsetDays = 454232;
                    }};;
                    sellerNetworkIds = new Integer[]{{
                        add(791421),
                        add(955065),
                        add(686301),
                        add(518926),
                    }};
                    timeSeriesGranularity = FilterSetTimeSeriesGranularityEnum.HOURLY;
                }};;
                accessToken = "at";
                alt = AltEnum.PROTO;
                callback = "omnis";
                fields = "quam";
                isTransient = false;
                key = "exercitationem";
                oauthToken = "voluptates";
                prettyPrint = false;
                quotaUser = "sequi";
                uploadType = "quis";
                uploadProtocol = "commodi";
            }};            

            Adexchangebuyer2BiddersFilterSetsCreateResponse res = sdk.bidders.adexchangebuyer2BiddersFilterSetsCreate(req, new Adexchangebuyer2BiddersFilterSetsCreateSecurity("vel", "rem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.filterSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2BiddersFilterSetsDelete

Deletes the requested filter set from the account with the given account ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsDeleteRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsDeleteResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2BiddersFilterSetsDeleteRequest req = new Adexchangebuyer2BiddersFilterSetsDeleteRequest("aliquid") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "perspiciatis";
                alt = AltEnum.JSON;
                callback = "itaque";
                fields = "unde";
                key = "cumque";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "repellendus";
                uploadType = "temporibus";
                uploadProtocol = "minus";
            }};            

            Adexchangebuyer2BiddersFilterSetsDeleteResponse res = sdk.bidders.adexchangebuyer2BiddersFilterSetsDelete(req, new Adexchangebuyer2BiddersFilterSetsDeleteSecurity("minima", "a") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2BiddersFilterSetsFilteredBidRequestsList

List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListRequest req = new Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListRequest("beatae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "veritatis";
                alt = AltEnum.PROTO;
                callback = "earum";
                fields = "laborum";
                key = "dicta";
                oauthToken = "voluptatem";
                pageSize = 140909L;
                pageToken = "aliquid";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "enim";
                uploadProtocol = "numquam";
            }};            

            Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListResponse res = sdk.bidders.adexchangebuyer2BiddersFilterSetsFilteredBidRequestsList(req, new Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListSecurity("architecto", "est") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listFilteredBidRequestsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesList

List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListRequest req = new Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListRequest(309852L, "facere") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "omnis";
                alt = AltEnum.JSON;
                callback = "sapiente";
                fields = "officiis";
                key = "expedita";
                oauthToken = "quia";
                pageSize = 112751L;
                pageToken = "odio";
                prettyPrint = false;
                quotaUser = "quas";
                uploadType = "ipsa";
                uploadProtocol = "distinctio";
            }};            

            Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListResponse res = sdk.bidders.adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesList(req, new Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListSecurity("placeat", "quod") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCreativeStatusBreakdownByCreativeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsList

List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListRequest req = new Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListRequest(756074L, "sit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "assumenda";
                fields = "illum";
                key = "soluta";
                oauthToken = "magnam";
                pageSize = 512349L;
                pageToken = "tempora";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "doloremque";
                uploadProtocol = "corrupti";
            }};            

            Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListResponse res = sdk.bidders.adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsList(req, new Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListSecurity("reiciendis", "facilis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCreativeStatusBreakdownByDetailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2BiddersFilterSetsFilteredBidsList

List all reasons for which bids were filtered, with the number of bids filtered for each reason.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsListRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsListResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2BiddersFilterSetsFilteredBidsListRequest req = new Adexchangebuyer2BiddersFilterSetsFilteredBidsListRequest("aliquam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "amet";
                alt = AltEnum.MEDIA;
                callback = "ab";
                fields = "officiis";
                key = "eum";
                oauthToken = "rerum";
                pageSize = 808608L;
                pageToken = "ab";
                prettyPrint = false;
                quotaUser = "ad";
                uploadType = "blanditiis";
                uploadProtocol = "porro";
            }};            

            Adexchangebuyer2BiddersFilterSetsFilteredBidsListResponse res = sdk.bidders.adexchangebuyer2BiddersFilterSetsFilteredBidsList(req, new Adexchangebuyer2BiddersFilterSetsFilteredBidsListSecurity("labore", "impedit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listFilteredBidsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2BiddersFilterSetsGet

Retrieves the requested filter set for the account with the given account ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsGetRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsGetResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2BiddersFilterSetsGetRequest req = new Adexchangebuyer2BiddersFilterSetsGetRequest("ut") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ullam";
                alt = AltEnum.JSON;
                callback = "enim";
                fields = "cupiditate";
                key = "occaecati";
                oauthToken = "itaque";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "consectetur";
                uploadProtocol = "modi";
            }};            

            Adexchangebuyer2BiddersFilterSetsGetResponse res = sdk.bidders.adexchangebuyer2BiddersFilterSetsGet(req, new Adexchangebuyer2BiddersFilterSetsGetSecurity("aspernatur", "explicabo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.filterSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2BiddersFilterSetsImpressionMetricsList

Lists all metrics that are measured in terms of number of impressions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsImpressionMetricsListRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsImpressionMetricsListResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsImpressionMetricsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2BiddersFilterSetsImpressionMetricsListRequest req = new Adexchangebuyer2BiddersFilterSetsImpressionMetricsListRequest("suscipit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eveniet";
                alt = AltEnum.MEDIA;
                callback = "nobis";
                fields = "qui";
                key = "accusantium";
                oauthToken = "consequatur";
                pageSize = 773262L;
                pageToken = "recusandae";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "deleniti";
                uploadProtocol = "est";
            }};            

            Adexchangebuyer2BiddersFilterSetsImpressionMetricsListResponse res = sdk.bidders.adexchangebuyer2BiddersFilterSetsImpressionMetricsList(req, new Adexchangebuyer2BiddersFilterSetsImpressionMetricsListSecurity("et", "expedita") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listImpressionMetricsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2BiddersFilterSetsList

Lists all filter sets for the account with the given account ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsListRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsListResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2BiddersFilterSetsListRequest req = new Adexchangebuyer2BiddersFilterSetsListRequest("quibusdam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "maiores";
                alt = AltEnum.PROTO;
                callback = "in";
                fields = "culpa";
                key = "doloremque";
                oauthToken = "fuga";
                pageSize = 117546L;
                pageToken = "architecto";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "eligendi";
                uploadProtocol = "officiis";
            }};            

            Adexchangebuyer2BiddersFilterSetsListResponse res = sdk.bidders.adexchangebuyer2BiddersFilterSetsList(req, new Adexchangebuyer2BiddersFilterSetsListSecurity("dignissimos", "fugit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listFilterSetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2BiddersFilterSetsLosingBidsList

List all reasons for which bids lost in the auction, with the number of bids that lost for each reason.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsLosingBidsListRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsLosingBidsListResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsLosingBidsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2BiddersFilterSetsLosingBidsListRequest req = new Adexchangebuyer2BiddersFilterSetsLosingBidsListRequest("ratione") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quaerat";
                alt = AltEnum.JSON;
                callback = "natus";
                fields = "esse";
                key = "delectus";
                oauthToken = "deserunt";
                pageSize = 188081L;
                pageToken = "ipsa";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "iste";
                uploadProtocol = "deserunt";
            }};            

            Adexchangebuyer2BiddersFilterSetsLosingBidsListResponse res = sdk.bidders.adexchangebuyer2BiddersFilterSetsLosingBidsList(req, new Adexchangebuyer2BiddersFilterSetsLosingBidsListSecurity("hic", "ducimus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLosingBidsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsList

List all reasons for which winning bids were not billable, with the number of bids not billed for each reason.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListResponse;
import org.openapis.openapi.models.operations.Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListRequest req = new Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListRequest("consequuntur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "libero";
                alt = AltEnum.JSON;
                callback = "omnis";
                fields = "dicta";
                key = "qui";
                oauthToken = "explicabo";
                pageSize = 6203L;
                pageToken = "amet";
                prettyPrint = false;
                quotaUser = "consequatur";
                uploadType = "fugiat";
                uploadProtocol = "voluptatum";
            }};            

            Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListResponse res = sdk.bidders.adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsList(req, new Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListSecurity("velit", "hic") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listNonBillableWinningBidsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
