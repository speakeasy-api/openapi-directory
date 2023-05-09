# serviceaccountkeys

### Available Operations

* [androidenterpriseServiceaccountkeysDelete](#androidenterpriseserviceaccountkeysdelete) - Removes and invalidates the specified credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.
* [androidenterpriseServiceaccountkeysInsert](#androidenterpriseserviceaccountkeysinsert) - Generates new credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount. Only the type of the key should be populated in the resource to be inserted.
* [androidenterpriseServiceaccountkeysList](#androidenterpriseserviceaccountkeyslist) - Lists all active credentials for the service account associated with this enterprise. Only the ID and key type are returned. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.

## androidenterpriseServiceaccountkeysDelete

Removes and invalidates the specified credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseServiceaccountkeysDeleteRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseServiceaccountkeysDeleteResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseServiceaccountkeysDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseServiceaccountkeysDeleteRequest req = new AndroidenterpriseServiceaccountkeysDeleteRequest("dolorum", "nesciunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "recusandae";
                alt = AltEnum.MEDIA;
                callback = "quaerat";
                fields = "molestiae";
                key = "ex";
                oauthToken = "ut";
                prettyPrint = false;
                quotaUser = "culpa";
                uploadType = "adipisci";
                uploadProtocol = "debitis";
            }};            

            AndroidenterpriseServiceaccountkeysDeleteResponse res = sdk.serviceaccountkeys.androidenterpriseServiceaccountkeysDelete(req, new AndroidenterpriseServiceaccountkeysDeleteSecurity("laudantium", "eum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseServiceaccountkeysInsert

Generates new credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount. Only the type of the key should be populated in the resource to be inserted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseServiceaccountkeysInsertRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseServiceaccountkeysInsertResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseServiceaccountkeysInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ServiceAccountKey;
import org.openapis.openapi.models.shared.ServiceAccountKeyTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseServiceaccountkeysInsertRequest req = new AndroidenterpriseServiceaccountkeysInsertRequest("nemo") {{
                dollarXgafv = XgafvEnum.TWO;
                serviceAccountKey = new ServiceAccountKey() {{
                    data = "esse";
                    id = "956f9251-a5a9-4da6-a0ff-57bfaad4f9ef";
                    publicData = "cumque";
                    type = ServiceAccountKeyTypeEnum.GOOGLE_CREDENTIALS;
                }};;
                accessToken = "rerum";
                alt = AltEnum.JSON;
                callback = "quis";
                fields = "inventore";
                key = "fugit";
                oauthToken = "cumque";
                prettyPrint = false;
                quotaUser = "quae";
                uploadType = "perferendis";
                uploadProtocol = "velit";
            }};            

            AndroidenterpriseServiceaccountkeysInsertResponse res = sdk.serviceaccountkeys.androidenterpriseServiceaccountkeysInsert(req, new AndroidenterpriseServiceaccountkeysInsertSecurity("aspernatur", "eum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.serviceAccountKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseServiceaccountkeysList

Lists all active credentials for the service account associated with this enterprise. Only the ID and key type are returned. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseServiceaccountkeysListRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseServiceaccountkeysListResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseServiceaccountkeysListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseServiceaccountkeysListRequest req = new AndroidenterpriseServiceaccountkeysListRequest("eius") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "at";
                alt = AltEnum.PROTO;
                callback = "eos";
                fields = "sapiente";
                key = "eum";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "minima";
                uploadType = "beatae";
                uploadProtocol = "cupiditate";
            }};            

            AndroidenterpriseServiceaccountkeysListResponse res = sdk.serviceaccountkeys.androidenterpriseServiceaccountkeysList(req, new AndroidenterpriseServiceaccountkeysListSecurity("provident", "earum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.serviceAccountKeysListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
