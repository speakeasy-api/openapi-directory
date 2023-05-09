# domains

### Available Operations

* [gmailpostmastertoolsDomainsList](#gmailpostmastertoolsdomainslist) - Lists the domains that have been registered by the client. The order of domains in the response is unspecified and non-deterministic. Newly created domains will not necessarily be added to the end of this list.
* [gmailpostmastertoolsDomainsTrafficStatsGet](#gmailpostmastertoolsdomainstrafficstatsget) - Get traffic statistics for a domain on a specific date. Returns PERMISSION_DENIED if user does not have permission to access TrafficStats for the domain.
* [gmailpostmastertoolsDomainsTrafficStatsList](#gmailpostmastertoolsdomainstrafficstatslist) - List traffic statistics for all available days. Returns PERMISSION_DENIED if user does not have permission to access TrafficStats for the domain.

## gmailpostmastertoolsDomainsList

Lists the domains that have been registered by the client. The order of domains in the response is unspecified and non-deterministic. Newly created domains will not necessarily be added to the end of this list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GmailpostmastertoolsDomainsListRequest;
import org.openapis.openapi.models.operations.GmailpostmastertoolsDomainsListResponse;
import org.openapis.openapi.models.operations.GmailpostmastertoolsDomainsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GmailpostmastertoolsDomainsListRequest req = new GmailpostmastertoolsDomainsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "suscipit";
                key = "molestiae";
                oauthToken = "minus";
                pageSize = 812169L;
                pageToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "excepturi";
                uploadProtocol = "nisi";
            }};            

            GmailpostmastertoolsDomainsListResponse res = sdk.domains.gmailpostmastertoolsDomainsList(req, new GmailpostmastertoolsDomainsListSecurity("recusandae", "temporibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listDomainsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gmailpostmastertoolsDomainsTrafficStatsGet

Get traffic statistics for a domain on a specific date. Returns PERMISSION_DENIED if user does not have permission to access TrafficStats for the domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GmailpostmastertoolsDomainsTrafficStatsGetRequest;
import org.openapis.openapi.models.operations.GmailpostmastertoolsDomainsTrafficStatsGetResponse;
import org.openapis.openapi.models.operations.GmailpostmastertoolsDomainsTrafficStatsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GmailpostmastertoolsDomainsTrafficStatsGetRequest req = new GmailpostmastertoolsDomainsTrafficStatsGetRequest("ab") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "veritatis";
                alt = AltEnum.MEDIA;
                callback = "perferendis";
                fields = "ipsam";
                key = "repellendus";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "odit";
                uploadProtocol = "at";
            }};            

            GmailpostmastertoolsDomainsTrafficStatsGetResponse res = sdk.domains.gmailpostmastertoolsDomainsTrafficStatsGet(req, new GmailpostmastertoolsDomainsTrafficStatsGetSecurity("at", "maiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.trafficStats != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gmailpostmastertoolsDomainsTrafficStatsList

List traffic statistics for all available days. Returns PERMISSION_DENIED if user does not have permission to access TrafficStats for the domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GmailpostmastertoolsDomainsTrafficStatsListRequest;
import org.openapis.openapi.models.operations.GmailpostmastertoolsDomainsTrafficStatsListResponse;
import org.openapis.openapi.models.operations.GmailpostmastertoolsDomainsTrafficStatsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GmailpostmastertoolsDomainsTrafficStatsListRequest req = new GmailpostmastertoolsDomainsTrafficStatsListRequest("molestiae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quod";
                alt = AltEnum.MEDIA;
                callback = "totam";
                endDateDay = 780529L;
                endDateMonth = 678880L;
                endDateYear = 118274L;
                fields = "nam";
                key = "officia";
                oauthToken = "occaecati";
                pageSize = 143353L;
                pageToken = "deleniti";
                prettyPrint = false;
                quotaUser = "hic";
                startDateDay = 758616L;
                startDateMonth = 521848L;
                startDateYear = 105907L;
                uploadType = "commodi";
                uploadProtocol = "molestiae";
            }};            

            GmailpostmastertoolsDomainsTrafficStatsListResponse res = sdk.domains.gmailpostmastertoolsDomainsTrafficStatsList(req, new GmailpostmastertoolsDomainsTrafficStatsListSecurity("modi", "qui") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listTrafficStatsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
