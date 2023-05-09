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

            DfareportingCitiesListRequest req = new DfareportingCitiesListRequest("suscipit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nobis";
                alt = AltEnum.JSON;
                callback = "repellendus";
                countryDartIds = new String[]{{
                    add("consequuntur"),
                    add("delectus"),
                }};
                dartIds = new String[]{{
                    add("possimus"),
                    add("laborum"),
                    add("optio"),
                    add("debitis"),
                }};
                fields = "architecto";
                key = "reiciendis";
                namePrefix = "consequatur";
                oauthToken = "sunt";
                prettyPrint = false;
                quotaUser = "odit";
                regionDartIds = new String[]{{
                    add("laboriosam"),
                }};
                uploadType = "quod";
                uploadProtocol = "repudiandae";
            }};            

            DfareportingCitiesListResponse res = sdk.cities.dfareportingCitiesList(req, new DfareportingCitiesListSecurity("consequuntur", "aspernatur") {{
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
