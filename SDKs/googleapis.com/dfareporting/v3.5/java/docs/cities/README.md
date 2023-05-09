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

            DfareportingCitiesListRequest req = new DfareportingCitiesListRequest("provident") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "minus";
                alt = AltEnum.PROTO;
                callback = "minima";
                countryDartIds = new String[]{{
                    add("rerum"),
                    add("praesentium"),
                    add("vel"),
                    add("doloremque"),
                }};
                dartIds = new String[]{{
                    add("quas"),
                    add("impedit"),
                    add("illum"),
                    add("ullam"),
                }};
                fields = "praesentium";
                key = "perferendis";
                namePrefix = "soluta";
                oauthToken = "animi";
                prettyPrint = false;
                quotaUser = "molestiae";
                regionDartIds = new String[]{{
                    add("quas"),
                }};
                uploadType = "sunt";
                uploadProtocol = "aperiam";
            }};            

            DfareportingCitiesListResponse res = sdk.cities.dfareportingCitiesList(req, new DfareportingCitiesListSecurity("itaque", "quaerat") {{
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
