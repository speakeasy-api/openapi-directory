# CreateUser

### Available Operations

* [CreateUserInGroup](#createuseringroup) - Create User in Group

## CreateUserInGroup

Create User in Group

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
    res, err := s.CreateUser.CreateUserInGroup(ctx, operations.CreateUserInGroupRequest{
        RequestBody: &operations.CreateUserInGroupRequestBody{
            GroupIds: []string{
                "{{groupId}}",
                "{{groupId}}",
                "{{groupId}}",
                "{{groupId}}",
            },
            Profile: &operations.CreateUserInGroupRequestBodyProfile{
                Email: sdk.String("isaac@{{email-suffix}}"),
                FirstName: sdk.String("Isaac"),
                LastName: sdk.String("Brock"),
                Login: sdk.String("isaac@{{email-suffix}}"),
            },
        },
        Activate: sdk.String("false"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
