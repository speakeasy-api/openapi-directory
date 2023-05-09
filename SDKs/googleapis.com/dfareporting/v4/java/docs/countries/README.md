# countries

### Available Operations

* [dfareportingCountriesGet](#dfareportingcountriesget) - Gets one country by ID.
* [dfareportingCountriesList](#dfareportingcountrieslist) - Retrieves a list of countries.

## dfareportingCountriesGet

Gets one country by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCountriesGetRequest;
import org.openapis.openapi.models.operations.DfareportingCountriesGetResponse;
import org.openapis.openapi.models.operations.DfareportingCountriesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCountriesGetRequest req = new DfareportingCountriesGetRequest("enim", "quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsam";
                alt = AltEnum.JSON;
                callback = "atque";
                fields = "animi";
                key = "eius";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "minus";
                uploadProtocol = "quos";
            }};            

            DfareportingCountriesGetResponse res = sdk.countries.dfareportingCountriesGet(req, new DfareportingCountriesGetSecurity("explicabo", "distinctio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.country != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingCountriesList

Retrieves a list of countries.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCountriesListRequest;
import org.openapis.openapi.models.operations.DfareportingCountriesListResponse;
import org.openapis.openapi.models.operations.DfareportingCountriesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCountriesListRequest req = new DfareportingCountriesListRequest("praesentium") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "maiores";
                alt = AltEnum.MEDIA;
                callback = "libero";
                fields = "placeat";
                key = "explicabo";
                oauthToken = "placeat";
                prettyPrint = false;
                quotaUser = "animi";
                uploadType = "expedita";
                uploadProtocol = "laborum";
            }};            

            DfareportingCountriesListResponse res = sdk.countries.dfareportingCountriesList(req, new DfareportingCountriesListSecurity("atque", "assumenda") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.countriesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
