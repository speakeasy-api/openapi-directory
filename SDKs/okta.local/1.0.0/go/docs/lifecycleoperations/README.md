# LifecycleOperations

### Available Operations

* [ActivateUser](#activateuser) - Activate User
* [DeactivateUser](#deactivateuser) - Deactivate User
* [ResetPassword](#resetpassword) - Reset Password
* [SetTempPassword](#settemppassword) - Set Temp Password
* [SuspendUser](#suspenduser) - Suspend User
* [UnlockUser](#unlockuser) - Unlock User
* [UnsuspendUser](#unsuspenduser) - Unsuspend User

## ActivateUser

Activate User

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
    res, err := s.LifecycleOperations.ActivateUser(ctx, operations.ActivateUserRequest{
        RequestBody: []byte("minus"),
        SendEmail: sdk.String("false"),
        UserID: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeactivateUser

Deactivate User

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
    res, err := s.LifecycleOperations.DeactivateUser(ctx, operations.DeactivateUserRequest{
        RequestBody: []byte("voluptatum"),
        UserID: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ResetPassword

Reset Password

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
    res, err := s.LifecycleOperations.ResetPassword(ctx, operations.ResetPasswordRequest{
        RequestBody: []byte("excepturi"),
        SendEmail: sdk.String("false"),
        UserID: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SetTempPassword

Set Temp Password

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
    res, err := s.LifecycleOperations.SetTempPassword(ctx, operations.SetTempPasswordRequest{
        RequestBody: []byte("recusandae"),
        TempPassword: sdk.String("true"),
        UserID: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SuspendUser

Suspend User

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
    res, err := s.LifecycleOperations.SuspendUser(ctx, operations.SuspendUserRequest{
        RequestBody: []byte("ab"),
        UserID: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UnlockUser

Unlock User

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
    res, err := s.LifecycleOperations.UnlockUser(ctx, operations.UnlockUserRequest{
        RequestBody: []byte("veritatis"),
        UserID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UnsuspendUser

Unsuspend User

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
    res, err := s.LifecycleOperations.UnsuspendUser(ctx, operations.UnsuspendUserRequest{
        RequestBody: []byte("perferendis"),
        UserID: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
