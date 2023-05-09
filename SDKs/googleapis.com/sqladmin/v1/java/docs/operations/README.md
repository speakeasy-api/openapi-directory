# operations

### Available Operations

* [sqlOperationsGet](#sqloperationsget) - Retrieves an instance operation that has been performed on an instance.
* [sqlOperationsList](#sqloperationslist) - Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.

## sqlOperationsGet

Retrieves an instance operation that has been performed on an instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlOperationsGetRequest;
import org.openapis.openapi.models.operations.SqlOperationsGetResponse;
import org.openapis.openapi.models.operations.SqlOperationsGetSecurity;
import org.openapis.openapi.models.operations.SqlOperationsGetSecurityOption1;
import org.openapis.openapi.models.operations.SqlOperationsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlOperationsGetRequest req = new SqlOperationsGetRequest("ad", "repellat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "corporis";
                alt = AltEnum.MEDIA;
                callback = "nihil";
                fields = "mollitia";
                key = "voluptas";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "reiciendis";
                uploadProtocol = "dolores";
            }};            

            SqlOperationsGetResponse res = sdk.operations.sqlOperationsGet(req, new SqlOperationsGetSecurity() {{
                option1 = new SqlOperationsGetSecurityOption1("id", "minima") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sqlOperationsList

Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlOperationsListRequest;
import org.openapis.openapi.models.operations.SqlOperationsListResponse;
import org.openapis.openapi.models.operations.SqlOperationsListSecurity;
import org.openapis.openapi.models.operations.SqlOperationsListSecurityOption1;
import org.openapis.openapi.models.operations.SqlOperationsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlOperationsListRequest req = new SqlOperationsListRequest("dolore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nesciunt";
                alt = AltEnum.JSON;
                callback = "recusandae";
                fields = "omnis";
                instance = "quaerat";
                key = "molestiae";
                maxResults = 403218L;
                oauthToken = "ut";
                pageToken = "culpa";
                prettyPrint = false;
                quotaUser = "adipisci";
                uploadType = "debitis";
                uploadProtocol = "laudantium";
            }};            

            SqlOperationsListResponse res = sdk.operations.sqlOperationsList(req, new SqlOperationsListSecurity() {{
                option1 = new SqlOperationsListSecurityOption1("eum", "nemo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operationsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
