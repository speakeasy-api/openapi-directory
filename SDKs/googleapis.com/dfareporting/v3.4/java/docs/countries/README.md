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

            DfareportingCountriesGetRequest req = new DfareportingCountriesGetRequest("nobis", "beatae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ex";
                alt = AltEnum.JSON;
                callback = "delectus";
                fields = "nobis";
                key = "possimus";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "optio";
                uploadType = "debitis";
                uploadProtocol = "architecto";
            }};            

            DfareportingCountriesGetResponse res = sdk.countries.dfareportingCountriesGet(req, new DfareportingCountriesGetSecurity("reiciendis", "consequatur") {{
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

            DfareportingCountriesListRequest req = new DfareportingCountriesListRequest("sunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "inventore";
                alt = AltEnum.MEDIA;
                callback = "quod";
                fields = "repudiandae";
                key = "consequuntur";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "sequi";
                uploadType = "sint";
                uploadProtocol = "accusamus";
            }};            

            DfareportingCountriesListResponse res = sdk.countries.dfareportingCountriesList(req, new DfareportingCountriesListSecurity("deleniti", "earum") {{
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
