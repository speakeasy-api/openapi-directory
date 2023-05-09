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

            DnsDnsKeysGetRequest req = new DnsDnsKeysGetRequest("consequatur", "vero", "id") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ratione";
                alt = AltEnum.JSON;
                callback = "distinctio";
                clientOperationId = "voluptas";
                digestType = "sint";
                fields = "maiores";
                key = "nihil";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "cumque";
                uploadType = "consequuntur";
                uploadProtocol = "maiores";
            }};            

            DnsDnsKeysGetResponse res = sdk.dnsKeys.dnsDnsKeysGet(req, new DnsDnsKeysGetSecurity() {{
                option1 = new DnsDnsKeysGetSecurityOption1("esse", "explicabo") {{
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

            DnsDnsKeysListRequest req = new DnsDnsKeysListRequest("delectus", "quos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "enim";
                alt = AltEnum.JSON;
                callback = "voluptatem";
                digestType = "natus";
                fields = "voluptatem";
                key = "tempora";
                maxResults = 577622L;
                oauthToken = "quasi";
                pageToken = "veritatis";
                prettyPrint = false;
                quotaUser = "ex";
                uploadType = "doloremque";
                uploadProtocol = "quas";
            }};            

            DnsDnsKeysListResponse res = sdk.dnsKeys.dnsDnsKeysList(req, new DnsDnsKeysListSecurity() {{
                option1 = new DnsDnsKeysListSecurityOption1("dolores", "perferendis") {{
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
