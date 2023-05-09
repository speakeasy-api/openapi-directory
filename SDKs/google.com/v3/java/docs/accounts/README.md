# accounts

### Available Operations

* [travelpartnerAccountsAccountLinksCreate](#travelpartneraccountsaccountlinkscreate) - Creates a new account link between a Hotel Center account and a Google Ads account.
* [travelpartnerAccountsAccountLinksDelete](#travelpartneraccountsaccountlinksdelete) - Deletes an account link.
* [travelpartnerAccountsAccountLinksList](#travelpartneraccountsaccountlinkslist) - Returns the account links for a Hotel Center account.
* [travelpartnerAccountsBrandsCreate](#travelpartneraccountsbrandscreate) - Creates a new brand. Because Google detects brands from your existing properties, you only need this operation when you want to configure a brand before you send its properties to Google. Note that it might take a couple of days after your listing feed first provides a brand for the brand to appear.
* [travelpartnerAccountsBrandsList](#travelpartneraccountsbrandslist) - Returns the brands for a partner account.
* [travelpartnerAccountsBrandsPatch](#travelpartneraccountsbrandspatch) - Updates a brand.
* [travelpartnerAccountsFreeBookingLinksReportViewsQuery](#travelpartneraccountsfreebookinglinksreportviewsquery) - **DEPRECATED:** Use PropertyPerformanceReportService.QueryPropertyPerformanceReport, which also has impression reporting, instead. Provides the ability to query (get, filter, and segment) a free booking links report for a specific account.
* [travelpartnerAccountsHotelViewsList](#travelpartneraccountshotelviewslist) - Returns the list of hotel views.
* [travelpartnerAccountsHotelViewsSummarize](#travelpartneraccountshotelviewssummarize) - Returns summarized information about hotels.
* [travelpartnerAccountsHotelsSetLiveOnGoogle](#travelpartneraccountshotelssetliveongoogle) - Collection-level custom method to update the Live on Google status for multiple properties. Each call can turn on or off multiple hotels. To turn some hotels on and turn some hotels off, you will have to make multiple calls.
* [travelpartnerAccountsIconsCreate](#travelpartneraccountsiconscreate) - Uploads a new icon and starts its review process. Generates an `icon_id` and includes it in the icon's resource name, which is the format `accounts/{account_id}/icons/{icon_id}` Returns HTTP status 400 and doesn't trigger the review process if the icon has any of these conditions: * Image is not in PNG format, or not convertible to PNG format. * Size less than 72 pixels * Size greater than 1200 pixels * Aspect ratio other than 1:1
* [travelpartnerAccountsIconsList](#travelpartneraccountsiconslist) - Returns the `Icon`s for a partner account.
* [travelpartnerAccountsListingsVerify](#travelpartneraccountslistingsverify) - returns verified listings with data issues and serving eligibilities
* [travelpartnerAccountsParticipationReportViewsQuery](#travelpartneraccountsparticipationreportviewsquery) - Provides the ability to query (get, filter, and segment) a participation report for a particular account.
* [travelpartnerAccountsPriceAccuracyViewsList](#travelpartneraccountspriceaccuracyviewslist) - Lists the available price accuracy views.
* [travelpartnerAccountsPriceAccuracyViewsSummarize](#travelpartneraccountspriceaccuracyviewssummarize) - Returns the price accuracy summary.
* [travelpartnerAccountsPriceCoverageViewsGetLatest](#travelpartneraccountspricecoverageviewsgetlatest) - Returns the latest price coverage view in full detail.
* [travelpartnerAccountsPriceCoverageViewsList](#travelpartneraccountspricecoverageviewslist) - Returns the entire price coverage history.
* [travelpartnerAccountsPropertyPerformanceReportViewsQuery](#travelpartneraccountspropertyperformancereportviewsquery) - Provides the ability to query (get, filter, and segment) a property performance links report for a specific account.
* [travelpartnerAccountsReconciliationReportsCreate](#travelpartneraccountsreconciliationreportscreate) - Creates a reconciliation report and uploads it to Google.
* [travelpartnerAccountsReconciliationReportsGet](#travelpartneraccountsreconciliationreportsget) - Returns a reconciliation report.
* [travelpartnerAccountsReconciliationReportsList](#travelpartneraccountsreconciliationreportslist) - Returns a list of the names of created reconciliation reports.
* [travelpartnerAccountsReconciliationReportsValidate](#travelpartneraccountsreconciliationreportsvalidate) - Validates a reconciliation report.

## travelpartnerAccountsAccountLinksCreate

Creates a new account link between a Hotel Center account and a Google Ads account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TravelpartnerAccountsAccountLinksCreateRequest;
import org.openapis.openapi.models.operations.TravelpartnerAccountsAccountLinksCreateResponse;
import org.openapis.openapi.models.shared.AccountLink;
import org.openapis.openapi.models.shared.AccountLinkStatusEnum;
import org.openapis.openapi.models.shared.AccountLinkTarget;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.HotelList;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TravelpartnerAccountsAccountLinksCreateRequest req = new TravelpartnerAccountsAccountLinksCreateRequest("voluptatum") {{
                dollarXgafv = XgafvEnum.ONE;
                accountLink = new AccountLink() {{
                    accountLinkTarget = new AccountLinkTarget() {{
                        allHotels = false;
                        hotelList = new HotelList() {{
                            partnerHotelIds = new String[]{{
                                add("nisi"),
                                add("recusandae"),
                                add("temporibus"),
                            }};
                        }};;
                    }};;
                    googleAdsCustomerName = "ab";
                    name = "Mrs. Marie O'Connell";
                    status = AccountLinkStatusEnum.APPROVED;
                }};;
                accessToken = "quo";
                alt = AltEnum.JSON;
                callback = "at";
                fields = "at";
                key = "maiores";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "quod";
                uploadProtocol = "esse";
            }};            

            TravelpartnerAccountsAccountLinksCreateResponse res = sdk.accounts.travelpartnerAccountsAccountLinksCreate(req);

            if (res.accountLink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## travelpartnerAccountsAccountLinksDelete

Deletes an account link.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TravelpartnerAccountsAccountLinksDeleteRequest;
import org.openapis.openapi.models.operations.TravelpartnerAccountsAccountLinksDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TravelpartnerAccountsAccountLinksDeleteRequest req = new TravelpartnerAccountsAccountLinksDeleteRequest("totam") {{
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

            TravelpartnerAccountsAccountLinksDeleteResponse res = sdk.accounts.travelpartnerAccountsAccountLinksDelete(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## travelpartnerAccountsAccountLinksList

Returns the account links for a Hotel Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TravelpartnerAccountsAccountLinksListRequest;
import org.openapis.openapi.models.operations.TravelpartnerAccountsAccountLinksListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TravelpartnerAccountsAccountLinksListRequest req = new TravelpartnerAccountsAccountLinksListRequest("totam") {{
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

            TravelpartnerAccountsAccountLinksListResponse res = sdk.accounts.travelpartnerAccountsAccountLinksList(req);

            if (res.listAccountLinksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## travelpartnerAccountsBrandsCreate

Creates a new brand. Because Google detects brands from your existing properties, you only need this operation when you want to configure a brand before you send its properties to Google. Note that it might take a couple of days after your listing feed first provides a brand for the brand to appear.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TravelpartnerAccountsBrandsCreateRequest;
import org.openapis.openapi.models.operations.TravelpartnerAccountsBrandsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BrandInput;
import org.openapis.openapi.models.shared.LocalizedText;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TravelpartnerAccountsBrandsCreateRequest req = new TravelpartnerAccountsBrandsCreateRequest("aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                brandInput = new BrandInput() {{
                    displayNames = new org.openapis.openapi.models.shared.LocalizedText[]{{
                        add(new LocalizedText() {{
                            languageCode = "natus";
                            text = "sed";
                        }}),
                        add(new LocalizedText() {{
                            languageCode = "iste";
                            text = "dolor";
                        }}),
                    }};
                    icon = "natus";
                }};;
                accessToken = "laboriosam";
                alt = AltEnum.PROTO;
                brandId = "saepe";
                callback = "fuga";
                fields = "in";
                key = "corporis";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "saepe";
                uploadProtocol = "quidem";
            }};            

            TravelpartnerAccountsBrandsCreateResponse res = sdk.accounts.travelpartnerAccountsBrandsCreate(req);

            if (res.brand != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## travelpartnerAccountsBrandsList

Returns the brands for a partner account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TravelpartnerAccountsBrandsListRequest;
import org.openapis.openapi.models.operations.TravelpartnerAccountsBrandsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TravelpartnerAccountsBrandsListRequest req = new TravelpartnerAccountsBrandsListRequest("architecto") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "mollitia";
                fields = "laborum";
                key = "dolores";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "explicabo";
                uploadProtocol = "nobis";
            }};            

            TravelpartnerAccountsBrandsListResponse res = sdk.accounts.travelpartnerAccountsBrandsList(req);

            if (res.listBrandsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## travelpartnerAccountsBrandsPatch

Updates a brand.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TravelpartnerAccountsBrandsPatchRequest;
import org.openapis.openapi.models.operations.TravelpartnerAccountsBrandsPatchResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BrandInput;
import org.openapis.openapi.models.shared.LocalizedText;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TravelpartnerAccountsBrandsPatchRequest req = new TravelpartnerAccountsBrandsPatchRequest("enim") {{
                dollarXgafv = XgafvEnum.TWO;
                brandInput = new BrandInput() {{
                    displayNames = new org.openapis.openapi.models.shared.LocalizedText[]{{
                        add(new LocalizedText() {{
                            languageCode = "minima";
                            text = "excepturi";
                        }}),
                        add(new LocalizedText() {{
                            languageCode = "accusantium";
                            text = "iure";
                        }}),
                    }};
                    icon = "culpa";
                }};;
                accessToken = "doloribus";
                allowMissing = false;
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "mollitia";
                key = "dolorem";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "consequuntur";
                updateMask = "repellat";
                uploadType = "mollitia";
                uploadProtocol = "occaecati";
            }};            

            TravelpartnerAccountsBrandsPatchResponse res = sdk.accounts.travelpartnerAccountsBrandsPatch(req);

            if (res.brand != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## travelpartnerAccountsFreeBookingLinksReportViewsQuery

**DEPRECATED:** Use PropertyPerformanceReportService.QueryPropertyPerformanceReport, which also has impression reporting, instead. Provides the ability to query (get, filter, and segment) a free booking links report for a specific account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TravelpartnerAccountsFreeBookingLinksReportViewsQueryRequest;
import org.openapis.openapi.models.operations.TravelpartnerAccountsFreeBookingLinksReportViewsQueryResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TravelpartnerAccountsFreeBookingLinksReportViewsQueryRequest req = new TravelpartnerAccountsFreeBookingLinksReportViewsQueryRequest("numquam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quam";
                aggregateBy = "molestiae";
                alt = AltEnum.JSON;
                callback = "error";
                fields = "quia";
                filter = "quis";
                key = "vitae";
                oauthToken = "laborum";
                pageSize = 656330L;
                pageToken = "enim";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "quo";
                uploadProtocol = "sequi";
            }};            

            TravelpartnerAccountsFreeBookingLinksReportViewsQueryResponse res = sdk.accounts.travelpartnerAccountsFreeBookingLinksReportViewsQuery(req);

            if (res.queryFreeBookingLinksReportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## travelpartnerAccountsHotelViewsList

Returns the list of hotel views.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TravelpartnerAccountsHotelViewsListRequest;
import org.openapis.openapi.models.operations.TravelpartnerAccountsHotelViewsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TravelpartnerAccountsHotelViewsListRequest req = new TravelpartnerAccountsHotelViewsListRequest("tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "id";
                alt = AltEnum.PROTO;
                callback = "aut";
                fields = "quasi";
                filter = "error";
                key = "temporibus";
                oauthToken = "laborum";
                pageSize = 96098L;
                pageToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "vero";
                uploadProtocol = "nihil";
            }};            

            TravelpartnerAccountsHotelViewsListResponse res = sdk.accounts.travelpartnerAccountsHotelViewsList(req);

            if (res.listHotelViewsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## travelpartnerAccountsHotelViewsSummarize

Returns summarized information about hotels.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TravelpartnerAccountsHotelViewsSummarizeRequest;
import org.openapis.openapi.models.operations.TravelpartnerAccountsHotelViewsSummarizeResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TravelpartnerAccountsHotelViewsSummarizeRequest req = new TravelpartnerAccountsHotelViewsSummarizeRequest("praesentium") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.MEDIA;
                callback = "voluptate";
                fields = "cum";
                key = "perferendis";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                uploadType = "ut";
                uploadProtocol = "maiores";
            }};            

            TravelpartnerAccountsHotelViewsSummarizeResponse res = sdk.accounts.travelpartnerAccountsHotelViewsSummarize(req);

            if (res.summarizeHotelViewsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## travelpartnerAccountsHotelsSetLiveOnGoogle

Collection-level custom method to update the Live on Google status for multiple properties. Each call can turn on or off multiple hotels. To turn some hotels on and turn some hotels off, you will have to make multiple calls.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TravelpartnerAccountsHotelsSetLiveOnGoogleRequest;
import org.openapis.openapi.models.operations.TravelpartnerAccountsHotelsSetLiveOnGoogleResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SetLiveOnGoogleRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TravelpartnerAccountsHotelsSetLiveOnGoogleRequest req = new TravelpartnerAccountsHotelsSetLiveOnGoogleRequest("dicta") {{
                dollarXgafv = XgafvEnum.ONE;
                setLiveOnGoogleRequest = new SetLiveOnGoogleRequest() {{
                    liveOnGoogle = false;
                    partnerHotelIds = new String[]{{
                        add("iusto"),
                        add("dicta"),
                    }};
                }};;
                accessToken = "harum";
                alt = AltEnum.JSON;
                callback = "accusamus";
                fields = "commodi";
                key = "repudiandae";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "quidem";
                uploadProtocol = "molestias";
            }};            

            TravelpartnerAccountsHotelsSetLiveOnGoogleResponse res = sdk.accounts.travelpartnerAccountsHotelsSetLiveOnGoogle(req);

            if (res.setLiveOnGoogleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## travelpartnerAccountsIconsCreate

Uploads a new icon and starts its review process. Generates an `icon_id` and includes it in the icon's resource name, which is the format `accounts/{account_id}/icons/{icon_id}` Returns HTTP status 400 and doesn't trigger the review process if the icon has any of these conditions: * Image is not in PNG format, or not convertible to PNG format. * Size less than 72 pixels * Size greater than 1200 pixels * Aspect ratio other than 1:1

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TravelpartnerAccountsIconsCreateRequest;
import org.openapis.openapi.models.operations.TravelpartnerAccountsIconsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.IconInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TravelpartnerAccountsIconsCreateRequest req = new TravelpartnerAccountsIconsCreateRequest("excepturi") {{
                dollarXgafv = XgafvEnum.TWO;
                iconInput = new IconInput() {{
                    imageData = "modi";
                    reference = "praesentium";
                }};;
                accessToken = "rem";
                alt = AltEnum.PROTO;
                callback = "quasi";
                fields = "repudiandae";
                key = "sint";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "itaque";
                uploadType = "incidunt";
                uploadProtocol = "enim";
            }};            

            TravelpartnerAccountsIconsCreateResponse res = sdk.accounts.travelpartnerAccountsIconsCreate(req);

            if (res.icon != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## travelpartnerAccountsIconsList

Returns the `Icon`s for a partner account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TravelpartnerAccountsIconsListRequest;
import org.openapis.openapi.models.operations.TravelpartnerAccountsIconsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TravelpartnerAccountsIconsListRequest req = new TravelpartnerAccountsIconsListRequest("consequatur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "distinctio";
                key = "quibusdam";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "qui";
                uploadProtocol = "aliquid";
            }};            

            TravelpartnerAccountsIconsListResponse res = sdk.accounts.travelpartnerAccountsIconsList(req);

            if (res.listIconsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## travelpartnerAccountsListingsVerify

returns verified listings with data issues and serving eligibilities

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TravelpartnerAccountsListingsVerifyRequest;
import org.openapis.openapi.models.operations.TravelpartnerAccountsListingsVerifyResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.VerifyListingsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TravelpartnerAccountsListingsVerifyRequest req = new TravelpartnerAccountsListingsVerifyRequest("cupiditate") {{
                dollarXgafv = XgafvEnum.TWO;
                verifyListingsRequest = new VerifyListingsRequest() {{
                    xmlListing = "perferendis";
                }};;
                accessToken = "magni";
                alt = AltEnum.PROTO;
                callback = "ipsam";
                fields = "alias";
                key = "fugit";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "tempora";
                uploadProtocol = "facilis";
            }};            

            TravelpartnerAccountsListingsVerifyResponse res = sdk.accounts.travelpartnerAccountsListingsVerify(req);

            if (res.verifyListingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## travelpartnerAccountsParticipationReportViewsQuery

Provides the ability to query (get, filter, and segment) a participation report for a particular account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TravelpartnerAccountsParticipationReportViewsQueryRequest;
import org.openapis.openapi.models.operations.TravelpartnerAccountsParticipationReportViewsQueryResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TravelpartnerAccountsParticipationReportViewsQueryRequest req = new TravelpartnerAccountsParticipationReportViewsQueryRequest("tempore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "delectus";
                aggregateBy = "eum";
                alt = AltEnum.JSON;
                callback = "eligendi";
                fields = "sint";
                filter = "aliquid";
                key = "provident";
                oauthToken = "necessitatibus";
                pageSize = 572252L;
                pageToken = "officia";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "debitis";
                uploadProtocol = "a";
            }};            

            TravelpartnerAccountsParticipationReportViewsQueryResponse res = sdk.accounts.travelpartnerAccountsParticipationReportViewsQuery(req);

            if (res.queryParticipationReportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## travelpartnerAccountsPriceAccuracyViewsList

Lists the available price accuracy views.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TravelpartnerAccountsPriceAccuracyViewsListRequest;
import org.openapis.openapi.models.operations.TravelpartnerAccountsPriceAccuracyViewsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TravelpartnerAccountsPriceAccuracyViewsListRequest req = new TravelpartnerAccountsPriceAccuracyViewsListRequest("dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "in";
                alt = AltEnum.PROTO;
                callback = "maiores";
                fields = "rerum";
                key = "dicta";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "cumque";
                uploadType = "facere";
                uploadProtocol = "ea";
            }};            

            TravelpartnerAccountsPriceAccuracyViewsListResponse res = sdk.accounts.travelpartnerAccountsPriceAccuracyViewsList(req);

            if (res.listPriceAccuracyViewsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## travelpartnerAccountsPriceAccuracyViewsSummarize

Returns the price accuracy summary.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TravelpartnerAccountsPriceAccuracyViewsSummarizeRequest;
import org.openapis.openapi.models.operations.TravelpartnerAccountsPriceAccuracyViewsSummarizeResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TravelpartnerAccountsPriceAccuracyViewsSummarizeRequest req = new TravelpartnerAccountsPriceAccuracyViewsSummarizeRequest("aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusamus";
                alt = AltEnum.JSON;
                callback = "occaecati";
                fields = "enim";
                key = "accusamus";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "provident";
                uploadProtocol = "nam";
            }};            

            TravelpartnerAccountsPriceAccuracyViewsSummarizeResponse res = sdk.accounts.travelpartnerAccountsPriceAccuracyViewsSummarize(req);

            if (res.summarizePriceAccuracyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## travelpartnerAccountsPriceCoverageViewsGetLatest

Returns the latest price coverage view in full detail.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TravelpartnerAccountsPriceCoverageViewsGetLatestRequest;
import org.openapis.openapi.models.operations.TravelpartnerAccountsPriceCoverageViewsGetLatestResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TravelpartnerAccountsPriceCoverageViewsGetLatestRequest req = new TravelpartnerAccountsPriceCoverageViewsGetLatestRequest("id") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "amet";
                fields = "deserunt";
                key = "nisi";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "omnis";
                uploadProtocol = "molestiae";
            }};            

            TravelpartnerAccountsPriceCoverageViewsGetLatestResponse res = sdk.accounts.travelpartnerAccountsPriceCoverageViewsGetLatest(req);

            if (res.priceCoverageView != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## travelpartnerAccountsPriceCoverageViewsList

Returns the entire price coverage history.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TravelpartnerAccountsPriceCoverageViewsListRequest;
import org.openapis.openapi.models.operations.TravelpartnerAccountsPriceCoverageViewsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TravelpartnerAccountsPriceCoverageViewsListRequest req = new TravelpartnerAccountsPriceCoverageViewsListRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "id";
                fields = "labore";
                key = "labore";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "nobis";
                uploadProtocol = "eum";
            }};            

            TravelpartnerAccountsPriceCoverageViewsListResponse res = sdk.accounts.travelpartnerAccountsPriceCoverageViewsList(req);

            if (res.listPriceCoverageViewsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## travelpartnerAccountsPropertyPerformanceReportViewsQuery

Provides the ability to query (get, filter, and segment) a property performance links report for a specific account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TravelpartnerAccountsPropertyPerformanceReportViewsQueryRequest;
import org.openapis.openapi.models.operations.TravelpartnerAccountsPropertyPerformanceReportViewsQueryResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TravelpartnerAccountsPropertyPerformanceReportViewsQueryRequest req = new TravelpartnerAccountsPropertyPerformanceReportViewsQueryRequest("vero") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "architecto";
                aggregateBy = "magnam";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "ullam";
                filter = "provident";
                key = "quos";
                oauthToken = "sint";
                pageSize = 33625L;
                pageToken = "mollitia";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "mollitia";
                uploadProtocol = "ad";
            }};            

            TravelpartnerAccountsPropertyPerformanceReportViewsQueryResponse res = sdk.accounts.travelpartnerAccountsPropertyPerformanceReportViewsQuery(req);

            if (res.queryPropertyPerformanceReportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## travelpartnerAccountsReconciliationReportsCreate

Creates a reconciliation report and uploads it to Google.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TravelpartnerAccountsReconciliationReportsCreateRequest;
import org.openapis.openapi.models.operations.TravelpartnerAccountsReconciliationReportsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ReconciliationReport;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TravelpartnerAccountsReconciliationReportsCreateRequest req = new TravelpartnerAccountsReconciliationReportsCreateRequest("eum") {{
                dollarXgafv = XgafvEnum.ONE;
                reconciliationReport = new ReconciliationReport() {{
                    contents = "necessitatibus";
                    fileName = "odit";
                    name = "Joyce Kertzmann";
                }};;
                accessToken = "eius";
                alt = AltEnum.PROTO;
                callback = "deleniti";
                fields = "facilis";
                key = "in";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "repudiandae";
                uploadProtocol = "ullam";
            }};            

            TravelpartnerAccountsReconciliationReportsCreateResponse res = sdk.accounts.travelpartnerAccountsReconciliationReportsCreate(req);

            if (res.createReconciliationReportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## travelpartnerAccountsReconciliationReportsGet

Returns a reconciliation report.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TravelpartnerAccountsReconciliationReportsGetRequest;
import org.openapis.openapi.models.operations.TravelpartnerAccountsReconciliationReportsGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TravelpartnerAccountsReconciliationReportsGetRequest req = new TravelpartnerAccountsReconciliationReportsGetRequest("expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellat";
                alt = AltEnum.PROTO;
                callback = "sed";
                fields = "saepe";
                includeMatchedPrices = false;
                includeNonScoring = false;
                includePixels = false;
                key = "pariatur";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "praesentium";
                uploadProtocol = "natus";
            }};            

            TravelpartnerAccountsReconciliationReportsGetResponse res = sdk.accounts.travelpartnerAccountsReconciliationReportsGet(req);

            if (res.reconciliationReport != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## travelpartnerAccountsReconciliationReportsList

Returns a list of the names of created reconciliation reports.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TravelpartnerAccountsReconciliationReportsListRequest;
import org.openapis.openapi.models.operations.TravelpartnerAccountsReconciliationReportsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TravelpartnerAccountsReconciliationReportsListRequest req = new TravelpartnerAccountsReconciliationReportsListRequest("magni") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quo";
                alt = AltEnum.PROTO;
                callback = "pariatur";
                endDate = "maxime";
                fields = "ea";
                key = "excepturi";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "ea";
                startDate = "accusantium";
                uploadType = "ab";
                uploadProtocol = "maiores";
            }};            

            TravelpartnerAccountsReconciliationReportsListResponse res = sdk.accounts.travelpartnerAccountsReconciliationReportsList(req);

            if (res.listReconciliationReportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## travelpartnerAccountsReconciliationReportsValidate

Validates a reconciliation report.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TravelpartnerAccountsReconciliationReportsValidateRequest;
import org.openapis.openapi.models.operations.TravelpartnerAccountsReconciliationReportsValidateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ReconciliationReport;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TravelpartnerAccountsReconciliationReportsValidateRequest req = new TravelpartnerAccountsReconciliationReportsValidateRequest("quidem") {{
                dollarXgafv = XgafvEnum.ONE;
                reconciliationReport = new ReconciliationReport() {{
                    contents = "voluptate";
                    fileName = "autem";
                    name = "Gary Streich";
                }};;
                accessToken = "perferendis";
                alt = AltEnum.PROTO;
                callback = "amet";
                fields = "aut";
                key = "cumque";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "libero";
                uploadProtocol = "nobis";
            }};            

            TravelpartnerAccountsReconciliationReportsValidateResponse res = sdk.accounts.travelpartnerAccountsReconciliationReportsValidate(req);

            if (res.validateReconciliationReportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
