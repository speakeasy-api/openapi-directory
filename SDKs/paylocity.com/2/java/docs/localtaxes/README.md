# localTaxes

### Available Operations

* [addLocalTax](#addlocaltax) - Add new local tax
* [deleteLocalTaxByTaxCode](#deletelocaltaxbytaxcode) - Delete local tax by tax code
* [getAllLocalTaxes](#getalllocaltaxes) - Get all local taxes
* [getLocalTaxByTaxCode](#getlocaltaxbytaxcode) - Get local taxes by tax code

## addLocalTax

Sends new employee local tax information directly to Web Pay.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddLocalTaxRequest;
import org.openapis.openapi.models.operations.AddLocalTaxResponse;
import org.openapis.openapi.models.operations.AddLocalTaxSecurity;
import org.openapis.openapi.models.shared.LocalTax;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddLocalTaxRequest req = new AddLocalTaxRequest("officia", "suscipit",                 new LocalTax() {{
                                exemptions = 3991.61;
                                exemptions2 = 219.73;
                                filingStatus = "eum";
                                residentPSD = "voluptas";
                                taxCode = "iste";
                                workPSD = "id";
                            }};);            

            AddLocalTaxResponse res = sdk.localTaxes.addLocalTax(req, new AddLocalTaxSecurity("ab") {{
                paylocityAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## deleteLocalTaxByTaxCode

Delete local tax by tax code

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLocalTaxByTaxCodeRequest;
import org.openapis.openapi.models.operations.DeleteLocalTaxByTaxCodeResponse;
import org.openapis.openapi.models.operations.DeleteLocalTaxByTaxCodeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteLocalTaxByTaxCodeRequest req = new DeleteLocalTaxByTaxCodeRequest("error", "possimus", "voluptates");            

            DeleteLocalTaxByTaxCodeResponse res = sdk.localTaxes.deleteLocalTaxByTaxCode(req, new DeleteLocalTaxByTaxCodeSecurity("mollitia") {{
                paylocityAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## getAllLocalTaxes

Returns all local taxes for the selected employee.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllLocalTaxesRequest;
import org.openapis.openapi.models.operations.GetAllLocalTaxesResponse;
import org.openapis.openapi.models.operations.GetAllLocalTaxesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllLocalTaxesRequest req = new GetAllLocalTaxesRequest("laborum", "libero");            

            GetAllLocalTaxesResponse res = sdk.localTaxes.getAllLocalTaxes(req, new GetAllLocalTaxesSecurity("ad") {{
                paylocityAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.localTaxes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLocalTaxByTaxCode

Returns all local taxes with the provided tax code for the selected employee.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLocalTaxByTaxCodeRequest;
import org.openapis.openapi.models.operations.GetLocalTaxByTaxCodeResponse;
import org.openapis.openapi.models.operations.GetLocalTaxByTaxCodeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLocalTaxByTaxCodeRequest req = new GetLocalTaxByTaxCodeRequest("deleniti", "enim", "vitae");            

            GetLocalTaxByTaxCodeResponse res = sdk.localTaxes.getLocalTaxByTaxCode(req, new GetLocalTaxByTaxCodeSecurity("repellendus") {{
                paylocityAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.localTaxes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
