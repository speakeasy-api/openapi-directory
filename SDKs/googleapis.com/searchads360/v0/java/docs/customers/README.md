# customers

### Available Operations

* [searchads360CustomersCustomColumnsList](#searchads360customerscustomcolumnslist) - Returns all the custom columns associated with the customer in full detail.
* [searchads360CustomersSearchAds360Search](#searchads360customerssearchads360search) - Returns all rows that match the search query. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QueryError]() [QuotaError]() [RequestError]()

## searchads360CustomersCustomColumnsList

Returns all the custom columns associated with the customer in full detail.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Searchads360CustomersCustomColumnsListRequest;
import org.openapis.openapi.models.operations.Searchads360CustomersCustomColumnsListResponse;
import org.openapis.openapi.models.operations.Searchads360CustomersCustomColumnsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Searchads360CustomersCustomColumnsListRequest req = new Searchads360CustomersCustomColumnsListRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "suscipit";
                key = "molestiae";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "voluptatum";
                uploadProtocol = "iusto";
            }};            

            Searchads360CustomersCustomColumnsListResponse res = sdk.customers.searchads360CustomersCustomColumnsList(req, new Searchads360CustomersCustomColumnsListSecurity("excepturi", "nisi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAdsSearchads360V0ServicesListCustomColumnsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchads360CustomersSearchAds360Search

Returns all rows that match the search query. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QueryError]() [QuotaError]() [RequestError]()

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Searchads360CustomersSearchAds360SearchRequest;
import org.openapis.openapi.models.operations.Searchads360CustomersSearchAds360SearchResponse;
import org.openapis.openapi.models.operations.Searchads360CustomersSearchAds360SearchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAdsSearchads360V0ServicesSearchSearchAds360Request;
import org.openapis.openapi.models.shared.GoogleAdsSearchads360V0ServicesSearchSearchAds360RequestSummaryRowSettingEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Searchads360CustomersSearchAds360SearchRequest req = new Searchads360CustomersSearchAds360SearchRequest("recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                googleAdsSearchads360V0ServicesSearchSearchAds360Request = new GoogleAdsSearchads360V0ServicesSearchSearchAds360Request() {{
                    pageSize = 71036;
                    pageToken = "quis";
                    query = "veritatis";
                    returnTotalResultsCount = false;
                    summaryRowSetting = GoogleAdsSearchads360V0ServicesSearchSearchAds360RequestSummaryRowSettingEnum.SUMMARY_ROW_WITH_RESULTS;
                    validateOnly = false;
                }};;
                accessToken = "perferendis";
                alt = AltEnum.MEDIA;
                callback = "repellendus";
                fields = "sapiente";
                key = "quo";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "at";
                uploadProtocol = "maiores";
            }};            

            Searchads360CustomersSearchAds360SearchResponse res = sdk.customers.searchads360CustomersSearchAds360Search(req, new Searchads360CustomersSearchAds360SearchSecurity("molestiae", "quod") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAdsSearchads360V0ServicesSearchSearchAds360Response != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
