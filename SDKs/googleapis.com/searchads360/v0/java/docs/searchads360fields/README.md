# searchAds360Fields

### Available Operations

* [searchads360SearchAds360FieldsGet](#searchads360searchads360fieldsget) - Returns just the requested field. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
* [searchads360SearchAds360FieldsSearch](#searchads360searchads360fieldssearch) - Returns all fields that match the search query. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QueryError]() [QuotaError]() [RequestError]()

## searchads360SearchAds360FieldsGet

Returns just the requested field. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Searchads360SearchAds360FieldsGetRequest;
import org.openapis.openapi.models.operations.Searchads360SearchAds360FieldsGetResponse;
import org.openapis.openapi.models.operations.Searchads360SearchAds360FieldsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Searchads360SearchAds360FieldsGetRequest req = new Searchads360SearchAds360FieldsGetRequest("quod") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "totam";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                fields = "dicta";
                key = "nam";
                oauthToken = "officia";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "fugit";
                uploadProtocol = "deleniti";
            }};            

            Searchads360SearchAds360FieldsGetResponse res = sdk.searchAds360Fields.searchads360SearchAds360FieldsGet(req, new Searchads360SearchAds360FieldsGetSecurity("hic", "optio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAdsSearchads360V0ResourcesSearchAds360Field != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchads360SearchAds360FieldsSearch

Returns all fields that match the search query. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QueryError]() [QuotaError]() [RequestError]()

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Searchads360SearchAds360FieldsSearchRequest;
import org.openapis.openapi.models.operations.Searchads360SearchAds360FieldsSearchResponse;
import org.openapis.openapi.models.operations.Searchads360SearchAds360FieldsSearchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAdsSearchads360V0ServicesSearchSearchAds360FieldsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Searchads360SearchAds360FieldsSearchRequest req = new Searchads360SearchAds360FieldsSearchRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                googleAdsSearchads360V0ServicesSearchSearchAds360FieldsRequest = new GoogleAdsSearchads360V0ServicesSearchSearchAds360FieldsRequest() {{
                    pageSize = 105907;
                    pageToken = "commodi";
                    query = "molestiae";
                }};;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "impedit";
                fields = "cum";
                key = "esse";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "aspernatur";
                uploadProtocol = "perferendis";
            }};            

            Searchads360SearchAds360FieldsSearchResponse res = sdk.searchAds360Fields.searchads360SearchAds360FieldsSearch(req, new Searchads360SearchAds360FieldsSearchSecurity("ad", "natus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAdsSearchads360V0ServicesSearchSearchAds360FieldsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
