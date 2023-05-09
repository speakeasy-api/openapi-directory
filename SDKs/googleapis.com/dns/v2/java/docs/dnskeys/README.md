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

            DnsDnsKeysGetRequest req = new DnsDnsKeysGetRequest("aliquam", "blanditiis", "hic", "maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "autem";
                alt = AltEnum.JSON;
                callback = "cupiditate";
                clientOperationId = "animi";
                digestType = "provident";
                fields = "beatae";
                key = "ipsa";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "assumenda";
                uploadProtocol = "quo";
            }};            

            DnsDnsKeysGetResponse res = sdk.dnsKeys.dnsDnsKeysGet(req, new DnsDnsKeysGetSecurity() {{
                option1 = new DnsDnsKeysGetSecurityOption1("fuga", "tempore") {{
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

            DnsDnsKeysListRequest req = new DnsDnsKeysListRequest("commodi", "fugit", "suscipit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nisi";
                alt = AltEnum.MEDIA;
                callback = "provident";
                digestType = "laboriosam";
                fields = "accusamus";
                key = "ab";
                maxResults = 929067L;
                oauthToken = "quisquam";
                pageToken = "eaque";
                prettyPrint = false;
                quotaUser = "alias";
                uploadType = "qui";
                uploadProtocol = "consequuntur";
            }};            

            DnsDnsKeysListResponse res = sdk.dnsKeys.dnsDnsKeysList(req, new DnsDnsKeysListSecurity() {{
                option1 = new DnsDnsKeysListSecurityOption1("vitae", "quidem") {{
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
