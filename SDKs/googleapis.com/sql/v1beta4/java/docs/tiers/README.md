# tiers

### Available Operations

* [sqlTiersList](#sqltierslist) - Lists all available machine types (tiers) for Cloud SQL, for example, `db-custom-1-3840`. For related information, see [Pricing](/sql/pricing).

## sqlTiersList

Lists all available machine types (tiers) for Cloud SQL, for example, `db-custom-1-3840`. For related information, see [Pricing](/sql/pricing).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlTiersListRequest;
import org.openapis.openapi.models.operations.SqlTiersListResponse;
import org.openapis.openapi.models.operations.SqlTiersListSecurity;
import org.openapis.openapi.models.operations.SqlTiersListSecurityOption1;
import org.openapis.openapi.models.operations.SqlTiersListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlTiersListRequest req = new SqlTiersListRequest("fugit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laudantium";
                alt = AltEnum.JSON;
                callback = "dolor";
                fields = "fugiat";
                key = "ipsam";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "quas";
                uploadProtocol = "eveniet";
            }};            

            SqlTiersListResponse res = sdk.tiers.sqlTiersList(req, new SqlTiersListSecurity() {{
                option1 = new SqlTiersListSecurityOption1("impedit", "officiis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.tiersListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
