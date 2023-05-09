# v1

### Available Operations

* [domainsrdapGetDomains](#domainsrdapgetdomains) - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
* [domainsrdapGetEntities](#domainsrdapgetentities) - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
* [domainsrdapGetHelp](#domainsrdapgethelp) - Get help information for the RDAP API, including links to documentation.
* [domainsrdapGetIp](#domainsrdapgetip) - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
* [domainsrdapGetNameservers](#domainsrdapgetnameservers) - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

## domainsrdapGetDomains

The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsrdapGetDomainsRequest;
import org.openapis.openapi.models.operations.DomainsrdapGetDomainsResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsrdapGetDomainsRequest req = new DomainsrdapGetDomainsRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "natus";
                fields = "sed";
                key = "iste";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "laboriosam";
                uploadProtocol = "hic";
            }};            

            DomainsrdapGetDomainsResponse res = sdk.v1.domainsrdapGetDomains(req);

            if (res.rdapResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## domainsrdapGetEntities

The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsrdapGetEntitiesRequest;
import org.openapis.openapi.models.operations.DomainsrdapGetEntitiesResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsrdapGetEntitiesRequest req = new DomainsrdapGetEntitiesRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fuga";
                alt = AltEnum.MEDIA;
                callback = "corporis";
                fields = "iste";
                key = "iure";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "architecto";
                uploadProtocol = "ipsa";
            }};            

            DomainsrdapGetEntitiesResponse res = sdk.v1.domainsrdapGetEntities(req);

            if (res.rdapResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## domainsrdapGetHelp

Get help information for the RDAP API, including links to documentation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsrdapGetHelpRequest;
import org.openapis.openapi.models.operations.DomainsrdapGetHelpResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsrdapGetHelpRequest req = new DomainsrdapGetHelpRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "est";
                alt = AltEnum.MEDIA;
                callback = "laborum";
                fields = "dolores";
                key = "dolorem";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "nobis";
                uploadProtocol = "enim";
            }};            

            DomainsrdapGetHelpResponse res = sdk.v1.domainsrdapGetHelp(req);

            if (res.httpBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## domainsrdapGetIp

The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsrdapGetIpRequest;
import org.openapis.openapi.models.operations.DomainsrdapGetIpResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsrdapGetIpRequest req = new DomainsrdapGetIpRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nemo";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "accusantium";
                key = "iure";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "sapiente";
                uploadProtocol = "architecto";
            }};            

            DomainsrdapGetIpResponse res = sdk.v1.domainsrdapGetIp(req);

            if (res.httpBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## domainsrdapGetNameservers

The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsrdapGetNameserversRequest;
import org.openapis.openapi.models.operations.DomainsrdapGetNameserversResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsrdapGetNameserversRequest req = new DomainsrdapGetNameserversRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorem";
                alt = AltEnum.MEDIA;
                callback = "consequuntur";
                fields = "repellat";
                key = "mollitia";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "commodi";
                uploadProtocol = "quam";
            }};            

            DomainsrdapGetNameserversResponse res = sdk.v1.domainsrdapGetNameservers(req);

            if (res.rdapResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
