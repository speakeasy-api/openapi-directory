# account

## Overview

An external-account used as the `from` field in the Messages API and Dispatch API

### Available Operations

* [getAllAccounts](#getallaccounts) - Retrieve all accounts you own

## getAllAccounts

Retrieve all accounts you own

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllAccountsProviderEnum;
import org.openapis.openapi.models.operations.GetAllAccountsRequest;
import org.openapis.openapi.models.operations.GetAllAccountsResponse;
import org.openapis.openapi.models.operations.GetAllAccountsSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllAccountsRequest req = new GetAllAccountsRequest() {{
                pageNumber = 1L;
                pageSize = 1L;
                provider = GetAllAccountsProviderEnum.WHATSAPP;
            }};            

            GetAllAccountsResponse res = sdk.account.getAllAccounts(req, new GetAllAccountsSecurity() {{
                basicAuth = new SchemeBasicAuth("unde", "nulla") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.getAllAccounts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
