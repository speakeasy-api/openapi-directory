# rootCsr

## Overview

Certificate signing requests.

### Available Operations

* [deleteCsr](#deletecsr) - Delete a certificate signing request
* [generateCsr](#generatecsr) - Generate a new private key and return a certificate signing request
* [getAllCsrs](#getallcsrs) - Get all certificate signing requests

## deleteCsr

Deletes a certificate signing request corresponding to the provided ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCsrRequest;
import org.openapis.openapi.models.operations.DeleteCsrResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("molestiae", "magnam") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteCsrRequest req = new DeleteCsrRequest("odio");            

            DeleteCsrResponse res = sdk.rootCsr.deleteCsr(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## generateCsr

Generates a new private key and returns a base64 encoded PKCS#10 certificate signing request (CSR).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateCsrResponse;
import org.openapis.openapi.models.shared.CsrRequest;
import org.openapis.openapi.models.shared.GenericCsrRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("eius", "esse") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.GenericCsrRequest req = new GenericCsrRequest(                new CsrRequest(                new String[]{{
                                                add("rem"),
                                                add("fuga"),
                                            }}) {{
                                city = "Mauricehaven";
                                country = "Fiji";
                                emailAddress = "eum";
                                organization = "suscipit";
                                organizationUnit = "assumenda";
                                state = "eos";
                                surname = "praesentium";
                                uid = "quisquam";
                            }};, "veritatis");            

            GenerateCsrResponse res = sdk.rootCsr.generateCsr(req);

            if (res.csrSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllCsrs

Returns a list of summaries for every outstanding certificate signing request (CSR).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllCsrsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("ipsa", "id") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetAllCsrsResponse res = sdk.rootCsr.getAllCsrs();

            if (res.csrSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
