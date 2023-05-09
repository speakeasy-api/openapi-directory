# SessionController

### Available Operations

* [SessionControllerChangePassword](#sessioncontrollerchangepassword) - Change the password of a customer given their existing and new password.
* [SessionControllerCreateLandlordLogin](#sessioncontrollercreatelandlordlogin) - Send a request to the in-tray to create a landlord login.
* [SessionControllerGetSessionInfo](#sessioncontrollergetsessioninfo) - Gets information about the currently logged on customer.
* [SessionControllerLogin](#sessioncontrollerlogin) - Login as a customer given their username and password.
* [SessionControllerLogout](#sessioncontrollerlogout) - Logout a customer previously logged in via the Login endpoint.
* [SessionControllerResetPassword](#sessioncontrollerresetpassword) - Reset the customer's password. An email will be sent out to reset.

## SessionControllerChangePassword

Change the password of a customer given their existing and new password.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SessionController.SessionControllerChangePassword(ctx, operations.SessionControllerChangePasswordRequest{
        NewPassword: "mollitia",
        OldPassword: "laborum",
        ShortName: "dolores",
        Token: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SessionControllerCreateLandlordLogin

Send a request to the in-tray to create a landlord login.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SessionController.SessionControllerCreateLandlordLogin(ctx, operations.SessionControllerCreateLandlordLoginRequest{
        BranchID: sdk.String("corporis"),
        ContactDetails: "explicabo",
        Email: "Emerald.Mohr@hotmail.com",
        Forename: "excepturi",
        PropertyAddress: "accusantium",
        ShortName: "iure",
        Surname: "culpa",
        Title: "Dr.",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SessionControllerGetSessionInfo

Gets information about the currently logged on customer.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SessionController.SessionControllerGetSessionInfo(ctx, operations.SessionControllerGetSessionInfoRequest{
        ShortName: "sapiente",
        Token: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SessionControllerGetSessionInfo200ApplicationJSONString != nil {
        // handle response
    }
}
```

## SessionControllerLogin

Login as a customer given their username and password.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SessionController.SessionControllerLogin(ctx, operations.SessionControllerLoginRequest{
        Password: "mollitia",
        ShortName: "dolorem",
        Username: "Lorine_Crooks58",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SessionControllerLogin200ApplicationJSONString != nil {
        // handle response
    }
}
```

## SessionControllerLogout

Logout a customer previously logged in via the Login endpoint.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SessionController.SessionControllerLogout(ctx, operations.SessionControllerLogoutRequest{
        ShortName: "numquam",
        Token: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SessionControllerResetPassword

Reset the customer's password. An email will be sent out to reset.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SessionController.SessionControllerResetPassword(ctx, operations.SessionControllerResetPasswordRequest{
        Email: "Jarred.Frami@yahoo.com",
        ShortName: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
