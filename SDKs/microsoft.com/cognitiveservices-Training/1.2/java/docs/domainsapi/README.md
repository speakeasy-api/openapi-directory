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

            GetDomainRequest req = new GetDomainRequest("distinctio", "d9d8d69a-674e-40f4-a7cc-8796ed151a05");            

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

            GetDomainsRequest req = new GetDomainsRequest("repellendus");            

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
