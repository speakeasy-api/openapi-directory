# cities

### Available Operations

* [dfareportingCitiesList](#dfareportingcitieslist) - Retrieves a list of cities, possibly filtered.

## dfareportingCitiesList

Retrieves a list of cities, possibly filtered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCitiesListRequest;
import org.openapis.openapi.models.operations.DfareportingCitiesListResponse;
import org.openapis.openapi.models.operations.DfareportingCitiesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCitiesListRequest req = new DfareportingCitiesListRequest("minus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "accusantium";
                alt = AltEnum.JSON;
                callback = "quasi";
                countryDartIds = new String[]{{
                    add("quia"),
                    add("aspernatur"),
                    add("minus"),
                    add("illum"),
                }};
                dartIds = new String[]{{
                    add("exercitationem"),
                    add("quod"),
                }};
                fields = "quod";
                key = "alias";
                namePrefix = "nemo";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "modi";
                regionDartIds = new String[]{{
                    add("quasi"),
                    add("laudantium"),
                    add("ut"),
                }};
                uploadType = "possimus";
                uploadProtocol = "nihil";
            }};            

            DfareportingCitiesListResponse res = sdk.cities.dfareportingCitiesList(req, new DfareportingCitiesListSecurity("voluptas", "facere") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.citiesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
