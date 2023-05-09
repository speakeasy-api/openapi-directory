# search

## Overview

Health ID Search APIs

### Available Operations

* [searchUserByAccountUsingPOST](#searchuserbyaccountusingpost) - Search a user by Health ID Number.
* [searchUserByMobileUsingPOST](#searchuserbymobileusingpost) - Search users with a mobile number.
* [searchUserByUseridUsingPOST](#searchuserbyuseridusingpost) - Search a user by Health IDs.

## searchUserByAccountUsingPOST

Search a user by Health ID Number.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchUserByAccountUsingPOSTRequest;
import org.openapis.openapi.models.operations.SearchUserByAccountUsingPOSTResponse;
import org.openapis.openapi.models.operations.SearchUserByAccountUsingPOSTSecurity;
import org.openapis.openapi.models.shared.SearchByHealthIdRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchUserByAccountUsingPOSTRequest req = new SearchUserByAccountUsingPOSTRequest(                new SearchByHealthIdRequest() {{
                                healthId = "provident";
                            }};) {{
                acceptLanguage = "ipsa";
            }};            

            SearchUserByAccountUsingPOSTResponse res = sdk.search.searchUserByAccountUsingPOST(req, new SearchUserByAccountUsingPOSTSecurity() {{
                authorization = "YOUR_API_KEY_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchUserByMobileUsingPOST

Search users with a mobile number.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchUserByMobileUsingPOSTRequest;
import org.openapis.openapi.models.operations.SearchUserByMobileUsingPOSTResponse;
import org.openapis.openapi.models.operations.SearchUserByMobileUsingPOSTSecurity;
import org.openapis.openapi.models.shared.SearchByMobileRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchUserByMobileUsingPOSTRequest req = new SearchUserByMobileUsingPOSTRequest(                new SearchByMobileRequest() {{
                                gender = "female";
                                mobile = "524-556-4682 x438";
                                name = "Mr. Irma Schaefer";
                                yearOfBirth = "quidem";
                            }};) {{
                acceptLanguage = "neque";
            }};            

            SearchUserByMobileUsingPOSTResponse res = sdk.search.searchUserByMobileUsingPOST(req, new SearchUserByMobileUsingPOSTSecurity() {{
                authorization = "YOUR_API_KEY_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchUserByUseridUsingPOST

Search a user by Health IDs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchUserByUseridUsingPOSTRequest;
import org.openapis.openapi.models.operations.SearchUserByUseridUsingPOSTResponse;
import org.openapis.openapi.models.operations.SearchUserByUseridUsingPOSTSecurity;
import org.openapis.openapi.models.shared.SearchByHealthIdRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchUserByUseridUsingPOSTRequest req = new SearchUserByUseridUsingPOSTRequest(                new SearchByHealthIdRequest() {{
                                healthId = "quo";
                            }};) {{
                acceptLanguage = "illum";
            }};            

            SearchUserByUseridUsingPOSTResponse res = sdk.search.searchUserByUseridUsingPOST(req, new SearchUserByUseridUsingPOSTSecurity() {{
                authorization = "YOUR_API_KEY_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
