# User

### Available Operations

* [UserGet](#userget) - Get all Users detail
This will return all properties related to User entity
            
* [UserRegisterUser](#userregisteruser) - Register a new User
            
* [UserUpdateUser](#userupdateuser) - Update an exsisting User
            

## UserGet

Get all Users detail
This will return all properties related to User entity
            

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.UserGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.UserDTO != nil {
        // handle response
    }
}
```

## UserRegisterUser

Register a new User
            

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.UserRegisterUser(ctx, operations.UserRegisterUserRequest{
        AccountNumber: sdk.String("aliquid"),
        ExternalEntityNumber: sdk.String("dolorem"),
        Guardian: sdk.Int(209843),
        GymNumber: sdk.String("dolor"),
        IntroduceBy: sdk.Int(186193),
        Name: sdk.String("Mindy Marks"),
        Number: sdk.String("dignissimos"),
        TypeID: sdk.Int(970237),
        UserID: sdk.Int(227414),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UserUpdateUser

Update an exsisting User
            

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.UserUpdateUser(ctx, operations.UserUpdateUserRequest{
        AccountNumber: sdk.String("dolorum"),
        ExternalEntityNumber: sdk.String("numquam"),
        Guardian: sdk.Int(85295),
        GymNumber: sdk.String("ipsa"),
        IntroduceBy: sdk.Int(56418),
        Name: sdk.String("Viola Hahn"),
        Number: sdk.String("voluptatibus"),
        TypeID: sdk.Int(377752),
        UserID: sdk.Int(617658),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
