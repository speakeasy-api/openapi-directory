# domainsApi

### Available Operations

* [getDomain](#getdomain) - Get information about a specific domain
* [getDomains](#getdomains) - Get a list of the available domains

## getDomain

Get information about a specific domain

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomainRequest;
import org.openapis.openapi.models.operations.GetDomainResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDomainRequest req = new GetDomainRequest("perferendis", "5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb");            

            GetDomainResponse res = sdk.domainsApi.getDomain(req);

            if (res.domain != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDomains

Get a list of the available domains

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomainsRequest;
import org.openapis.openapi.models.operations.GetDomainsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDomainsRequest req = new GetDomainsRequest("esse");            

            GetDomainsResponse res = sdk.domainsApi.getDomains(req);

            if (res.domains != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
