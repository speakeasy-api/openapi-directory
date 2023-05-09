# subaccountManagement

## Overview

This section shows how you can create, retrieve and modify subaccounts of a primary account.

### Available Operations

* [createSubAccount](#createsubaccount) - Create subaccount
* [modifySubaccount](#modifysubaccount) - Modify a subaccount
* [retrieveSubaccount](#retrievesubaccount) - Retrieve a subaccount
* [retrieveSubaccountsList](#retrievesubaccountslist) - Retrieve list of subaccounts

## createSubAccount

Create a subaccount for a given primary account.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSubAccountRequest;
import org.openapis.openapi.models.operations.CreateSubAccountResponse;
import org.openapis.openapi.models.operations.CreateSubAccountSecurity;
import org.openapis.openapi.models.shared.NewSubaccountRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSubAccountRequest req = new CreateSubAccountRequest(                new NewSubaccountRequest("Subaccount department A") {{
                                secret = "Password123";
                                usePrimaryAccountBalance = false;
                            }};, "quibusdam");            

            CreateSubAccountResponse res = sdk.subaccountManagement.createSubAccount(req, new CreateSubAccountSecurity("unde", "nulla") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.subaccountCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modifySubaccount

Change one or more properties of a subaccount.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifySubaccountRequest;
import org.openapis.openapi.models.operations.ModifySubaccountResponse;
import org.openapis.openapi.models.operations.ModifySubaccountSecurity;
import org.openapis.openapi.models.shared.ModifySubaccountRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ModifySubaccountRequest req = new ModifySubaccountRequest(                new ModifySubaccountRequest() {{
                                name = "Subaccount department B";
                                suspended = true;
                                usePrimaryAccountBalance = false;
                            }};, "corrupti", "illum");            

            ModifySubaccountResponse res = sdk.subaccountManagement.modifySubaccount(req, new ModifySubaccountSecurity("vel", "error") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.subaccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveSubaccount

Get the information of a subaccount specified with its API key.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveSubaccountRequest;
import org.openapis.openapi.models.operations.RetrieveSubaccountResponse;
import org.openapis.openapi.models.operations.RetrieveSubaccountSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveSubaccountRequest req = new RetrieveSubaccountRequest("deserunt", "suscipit");            

            RetrieveSubaccountResponse res = sdk.subaccountManagement.retrieveSubaccount(req, new RetrieveSubaccountSecurity("iure", "magnam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.subaccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveSubaccountsList

Get the information of all the subaccounts owned by the primary account.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveSubaccountsListRequest;
import org.openapis.openapi.models.operations.RetrieveSubaccountsListResponse;
import org.openapis.openapi.models.operations.RetrieveSubaccountsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveSubaccountsListRequest req = new RetrieveSubaccountsListRequest("debitis");            

            RetrieveSubaccountsListResponse res = sdk.subaccountManagement.retrieveSubaccountsList(req, new RetrieveSubaccountsListSecurity("ipsa", "delectus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.subaccountsAllResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
