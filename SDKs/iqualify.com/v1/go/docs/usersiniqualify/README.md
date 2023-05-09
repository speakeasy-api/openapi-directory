# UsersInIQualify

### Available Operations

* [GetUsersUserEmail](#getusersuseremail) - Find user by email
* [GetUsersUserEmailOfferings](#getusersuseremailofferings) - Find user's offerings
* [PatchUsersUserEmail](#patchusersuseremail) - Update user
* [PostUsers](#postusers) - Add new user
* [PostUsersUserEmailInviteEmail](#postusersuseremailinviteemail) - Resend invitation email
* [PostUsersUserEmailOfferings](#postusersuseremailofferings) - Adds the user to the specified offerings as a learner
* [PostUsersUserEmailPermissionsPermissionName](#postusersuseremailpermissionspermissionname) - Add permission to user
* [PutUsersUserEmailSuspend](#putusersuseremailsuspend) - Suspend user

## GetUsersUserEmail

Responds with a user matching the specified email.

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
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.UsersInIQualify.GetUsersUserEmail(ctx, operations.GetUsersUserEmailRequest{
        UserEmail: "Tevin.Herman99@gmail.com",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserResponse != nil {
        // handle response
    }
}
```

## GetUsersUserEmailOfferings

Responds with all offerings that the user in.

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
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.UsersInIQualify.GetUsersUserEmailOfferings(ctx, operations.GetUsersUserEmailOfferingsRequest{
        UserEmail: "Camden.Turner16@hotmail.com",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OfferingMetadataResponses != nil {
        // handle response
    }
}
```

## PatchUsersUserEmail

Updates the specified user by email.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.UsersInIQualify.PatchUsersUserEmail(ctx, operations.PatchUsersUserEmailRequest{
        User: &shared.User{
            Email: sdk.String("Levi77@yahoo.com"),
            FirstName: sdk.String("Rosendo"),
            LastName: sdk.String("Streich"),
            Metadata: &shared.UserMetadata{
                Tags: []string{
                    "ea",
                    "excepturi",
                    "odit",
                    "ea",
                },
            },
            PersonID: sdk.String("accusantium"),
            Profile: &shared.UserProfileRequest{
                DisplayName: sdk.String("ab"),
            },
            SendInvite: sdk.Bool(false),
        },
        UserEmail: "Max.Hintz@hotmail.com",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserResponse != nil {
        // handle response
    }
}
```

## PostUsers

Creates a new user.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.UsersInIQualify.PostUsers(ctx, shared.User{
        Email: sdk.String("Ambrose_Streich@hotmail.com"),
        FirstName: sdk.String("Agnes"),
        LastName: sdk.String("Steuber"),
        Metadata: &shared.UserMetadata{
            Tags: []string{
                "aut",
            },
        },
        PersonID: sdk.String("cumque"),
        Profile: &shared.UserProfileRequest{
            DisplayName: sdk.String("corporis"),
        },
        SendInvite: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserResponse != nil {
        // handle response
    }
}
```

## PostUsersUserEmailInviteEmail

Re-sends an invitation e-mail to the specified user.

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
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.UsersInIQualify.PostUsersUserEmailInviteEmail(ctx, operations.PostUsersUserEmailInviteEmailRequest{
        UserEmail: "Morgan33@hotmail.com",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostUsersUserEmailOfferings

Adds a user to an array of offerings by offeringId.

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
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.UsersInIQualify.PostUsersUserEmailOfferings(ctx, operations.PostUsersUserEmailOfferingsRequest{
        RequestBody: []string{
            "dignissimos",
            "eaque",
            "quis",
        },
        UserEmail: "Chelsea79@gmail.com",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OfferingMetadataResponses != nil {
        // handle response
    }
}
```

## PostUsersUserEmailPermissionsPermissionName

Adds additional permissions to the specified user.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.UsersInIQualify.PostUsersUserEmailPermissionsPermissionName(ctx, operations.PostUsersUserEmailPermissionsPermissionNameRequest{
        PermissionName: shared.PermissionNameEnumBuilder,
        UserEmail: "Seamus_Hegmann60@gmail.com",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserResponse != nil {
        // handle response
    }
}
```

## PutUsersUserEmailSuspend

Suspends the specified user's account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.UsersInIQualify.PutUsersUserEmailSuspend(ctx, operations.PutUsersUserEmailSuspendRequest{
        SuspendedRequest: shared.SuspendedRequest{
            Suspended: sdk.Bool(false),
        },
        UserEmail: "Lauryn.Bartoletti50@hotmail.com",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
