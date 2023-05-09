# dnsKeys

### Available Operations

* [dnsDnsKeysGet](#dnsdnskeysget) - Fetches the representation of an existing DnsKey.
* [dnsDnsKeysList](#dnsdnskeyslist) - Enumerates DnsKeys to a ResourceRecordSet collection.

## dnsDnsKeysGet

Fetches the representation of an existing DnsKey.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsDnsKeysGetRequest;
import org.openapis.openapi.models.operations.DnsDnsKeysGetResponse;
import org.openapis.openapi.models.operations.DnsDnsKeysGetSecurity;
import org.openapis.openapi.models.operations.DnsDnsKeysGetSecurityOption1;
import org.openapis.openapi.models.operations.DnsDnsKeysGetSecurityOption2;
import org.openapis.openapi.models.operations.DnsDnsKeysGetSecurityOption3;
import org.openapis.openapi.models.operations.DnsDnsKeysGetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsDnsKeysGetRequest req = new DnsDnsKeysGetRequest("vel", "ad", "quos") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "suscipit";
                alt = AltEnum.PROTO;
                callback = "fugiat";
                clientOperationId = "impedit";
                digestType = "culpa";
                fields = "atque";
                key = "voluptates";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "illo";
                uploadProtocol = "doloribus";
            }};            

            DnsDnsKeysGetResponse res = sdk.dnsKeys.dnsDnsKeysGet(req, new DnsDnsKeysGetSecurity() {{
                option1 = new DnsDnsKeysGetSecurityOption1("cumque", "expedita") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.dnsKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dnsDnsKeysList

Enumerates DnsKeys to a ResourceRecordSet collection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsDnsKeysListRequest;
import org.openapis.openapi.models.operations.DnsDnsKeysListResponse;
import org.openapis.openapi.models.operations.DnsDnsKeysListSecurity;
import org.openapis.openapi.models.operations.DnsDnsKeysListSecurityOption1;
import org.openapis.openapi.models.operations.DnsDnsKeysListSecurityOption2;
import org.openapis.openapi.models.operations.DnsDnsKeysListSecurityOption3;
import org.openapis.openapi.models.operations.DnsDnsKeysListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsDnsKeysListRequest req = new DnsDnsKeysListRequest("modi", "cumque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "accusamus";
                digestType = "quisquam";
                fields = "quasi";
                key = "fugit";
                maxResults = 779823L;
                oauthToken = "temporibus";
                pageToken = "mollitia";
                prettyPrint = false;
                quotaUser = "id";
                uploadType = "quibusdam";
                uploadProtocol = "ipsa";
            }};            

            DnsDnsKeysListResponse res = sdk.dnsKeys.dnsDnsKeysList(req, new DnsDnsKeysListSecurity() {{
                option1 = new DnsDnsKeysListSecurityOption1("accusamus", "placeat") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.dnsKeysListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
