# nameAuthority

### Available Operations

* [getNameAuthorities](#getnameauthorities) - Get all name authorities

## getNameAuthorities

Gets a list of all name authorities responsible for naming decisions of the geographical names in the BC Geographical Names Information System (BCGNIS)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNameAuthoritiesOutputFormatEnum;
import org.openapis.openapi.models.operations.GetNameAuthoritiesRequest;
import org.openapis.openapi.models.operations.GetNameAuthoritiesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNameAuthoritiesRequest req = new GetNameAuthoritiesRequest(GetNameAuthoritiesOutputFormatEnum.XML);            

            GetNameAuthoritiesResponse res = sdk.nameAuthority.getNameAuthorities(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
