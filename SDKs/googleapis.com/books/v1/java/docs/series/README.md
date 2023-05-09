# series

### Available Operations

* [booksSeriesGet](#booksseriesget) - Returns Series metadata for the given series ids.
* [booksSeriesMembershipGet](#booksseriesmembershipget) - Returns Series membership data given the series id.

## booksSeriesGet

Returns Series metadata for the given series ids.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksSeriesGetRequest;
import org.openapis.openapi.models.operations.BooksSeriesGetResponse;
import org.openapis.openapi.models.operations.BooksSeriesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksSeriesGetRequest req = new BooksSeriesGetRequest(                new String[]{{
                                add("earum"),
                                add("facere"),
                            }}) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "doloribus";
                alt = AltEnum.MEDIA;
                callback = "reiciendis";
                fields = "quidem";
                key = "saepe";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "dolore";
                uploadType = "sunt";
                uploadProtocol = "asperiores";
            }};            

            BooksSeriesGetResponse res = sdk.series.booksSeriesGet(req, new BooksSeriesGetSecurity("adipisci", "non") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.series != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksSeriesMembershipGet

Returns Series membership data given the series id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksSeriesMembershipGetRequest;
import org.openapis.openapi.models.operations.BooksSeriesMembershipGetResponse;
import org.openapis.openapi.models.operations.BooksSeriesMembershipGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksSeriesMembershipGetRequest req = new BooksSeriesMembershipGetRequest("amet") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dignissimos";
                alt = AltEnum.PROTO;
                callback = "debitis";
                fields = "consectetur";
                key = "corporis";
                oauthToken = "harum";
                pageSize = 385237L;
                pageToken = "ipsa";
                prettyPrint = false;
                quotaUser = "voluptates";
                uploadType = "libero";
                uploadProtocol = "vitae";
            }};            

            BooksSeriesMembershipGetResponse res = sdk.series.booksSeriesMembershipGet(req, new BooksSeriesMembershipGetSecurity("accusamus", "similique") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.seriesmembership != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
