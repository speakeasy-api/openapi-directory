# OfferingLearners

### Available Operations

* [DeleteOfferingsOfferingIDUsersMarkerEmailMarks](#deleteofferingsofferingidusersmarkeremailmarks) - Remove learners from coach's marking list
* [DeleteOfferingsOfferingIDUsersUserEmail](#deleteofferingsofferingidusersuseremail) - Removes user from the offering
* [GetOfferingsOfferingIDUsers](#getofferingsofferingidusers) - Find offering's users
* [GetOfferingsOfferingIDUsersMarkerEmailMarks](#getofferingsofferingidusersmarkeremailmarks) - Find Learners marked by a coach
* [PatchUsersUserEmailTransfer](#patchusersuseremailtransfer) - Transfer a user between offerings
* [PostOfferingsOfferingIDUsers](#postofferingsofferingidusers) - Adds user to the offering
* [PostOfferingsOfferingIDUsersMarkerEmailMarks](#postofferingsofferingidusersmarkeremailmarks) - Add learners to be marked by a coach

## DeleteOfferingsOfferingIDUsersMarkerEmailMarks

Removes an array of learners from coach's marking list.

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
    res, err := s.OfferingLearners.DeleteOfferingsOfferingIDUsersMarkerEmailMarks(ctx, operations.DeleteOfferingsOfferingIDUsersMarkerEmailMarksRequest{
        RequestBody: []string{
            "cum",
            "perferendis",
        },
        MarkerEmail: "doloremque",
        OfferingID: "reprehenderit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OfferingUsers != nil {
        // handle response
    }
}
```

## DeleteOfferingsOfferingIDUsersUserEmail

Removes a user from the offering.

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
    res, err := s.OfferingLearners.DeleteOfferingsOfferingIDUsersUserEmail(ctx, operations.DeleteOfferingsOfferingIDUsersUserEmailRequest{
        OfferingID: "ut",
        UserEmail: "Blanche48@hotmail.com",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOfferingsOfferingIDUsers

Responds with a list of users in the offering (facilitators, learners and markers.).

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
    res, err := s.OfferingLearners.GetOfferingsOfferingIDUsers(ctx, operations.GetOfferingsOfferingIDUsersRequest{
        Facilitators: operations.GetOfferingsOfferingIDUsersFacilitatorsEnumTrue.ToPointer(),
        Learners: operations.GetOfferingsOfferingIDUsersLearnersEnumFalse.ToPointer(),
        Markers: operations.GetOfferingsOfferingIDUsersMarkersEnumTrue.ToPointer(),
        OfferingID: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OfferingUserResponses != nil {
        // handle response
    }
}
```

## GetOfferingsOfferingIDUsersMarkerEmailMarks

Responds with all learners marked by the specified coach.

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
    res, err := s.OfferingLearners.GetOfferingsOfferingIDUsersMarkerEmailMarks(ctx, operations.GetOfferingsOfferingIDUsersMarkerEmailMarksRequest{
        MarkerEmail: "commodi",
        OfferingID: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OfferingUsers != nil {
        // handle response
    }
}
```

## PatchUsersUserEmailTransfer

Moves the user's access and progress from one offering to another.

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
    res, err := s.OfferingLearners.PatchUsersUserEmailTransfer(ctx, operations.PatchUsersUserEmailTransferRequest{
        TransferRequest: shared.TransferRequest{
            FromOfferingID: sdk.String("quae"),
            SendInvite: sdk.Bool(false),
            ToOfferingID: sdk.String("ipsum"),
        },
        UserEmail: "Kennedi.Mante50@hotmail.com",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostOfferingsOfferingIDUsers

Adds one or more users to the offering.

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
    res, err := s.OfferingLearners.PostOfferingsOfferingIDUsers(ctx, operations.PostOfferingsOfferingIDUsersRequest{
        RequestBody: []shared.OfferingUser{
            shared.OfferingUser{
                Email: "Aurelia.Waelchi@hotmail.com",
                FirstName: sdk.String("Tobin"),
                IsFacilitator: sdk.Bool(false),
                IsMarker: sdk.Bool(false),
                IsReadonly: sdk.Bool(false),
                LastName: sdk.String("Gottlieb"),
                Metadata: &shared.UserMetadata{
                    Tags: []string{
                        "consequatur",
                        "est",
                    },
                },
                PersonID: sdk.String("quibusdam"),
                Profile: &shared.UserProfileRequest{
                    DisplayName: sdk.String("explicabo"),
                },
                SendInvite: sdk.Bool(false),
                SendNotificationEmail: sdk.Bool(false),
            },
            shared.OfferingUser{
                Email: "Michelle26@yahoo.com",
                FirstName: sdk.String("Christa"),
                IsFacilitator: sdk.Bool(false),
                IsMarker: sdk.Bool(false),
                IsReadonly: sdk.Bool(false),
                LastName: sdk.String("Jacobi"),
                Metadata: &shared.UserMetadata{
                    Tags: []string{
                        "quos",
                        "perferendis",
                        "magni",
                    },
                },
                PersonID: sdk.String("assumenda"),
                Profile: &shared.UserProfileRequest{
                    DisplayName: sdk.String("ipsam"),
                },
                SendInvite: sdk.Bool(false),
                SendNotificationEmail: sdk.Bool(false),
            },
            shared.OfferingUser{
                Email: "Caden.Pagac@gmail.com",
                FirstName: sdk.String("Mckayla"),
                IsFacilitator: sdk.Bool(false),
                IsMarker: sdk.Bool(false),
                IsReadonly: sdk.Bool(false),
                LastName: sdk.String("Rice"),
                Metadata: &shared.UserMetadata{
                    Tags: []string{
                        "delectus",
                        "eum",
                    },
                },
                PersonID: sdk.String("non"),
                Profile: &shared.UserProfileRequest{
                    DisplayName: sdk.String("eligendi"),
                },
                SendInvite: sdk.Bool(false),
                SendNotificationEmail: sdk.Bool(false),
            },
        },
        OfferingID: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OfferingUserAddResponses != nil {
        // handle response
    }
}
```

## PostOfferingsOfferingIDUsersMarkerEmailMarks

Adds an array of learners to be marked by the specified coach.

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
    res, err := s.OfferingLearners.PostOfferingsOfferingIDUsersMarkerEmailMarks(ctx, operations.PostOfferingsOfferingIDUsersMarkerEmailMarksRequest{
        RequestBody: []string{
            "provident",
            "necessitatibus",
        },
        MarkerEmail: "sint",
        OfferingID: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OfferingUsers != nil {
        // handle response
    }
}
```
