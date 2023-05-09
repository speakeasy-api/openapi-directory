# User

### Available Operations

* [ApproveVendorApplication](#approvevendorapplication)
* [CreateUser](#createuser) - Create a new user
* [DeleteAccount](#deleteaccount) - Delete your account
* [DeleteUserAccount](#deleteuseraccount) - Delete requester account
* [DowngradeProofreader](#downgradeproofreader)
* [DowngradeUserProofreader](#downgradeuserproofreader)
* [FreezeAccount](#freezeaccount) - Freeze account
* [FreezeUserAccount](#freezeuseraccount) - Freeze requester account for project notifications
* [GetAllVendorTags](#getallvendortags) - Returns all vendor tags for vendors filter
* [GetEarnings](#getearnings) - View your vendor earnings
* [GetFilteredVendors](#getfilteredvendors) - Filter vendors based on provided parameters
* [GetMe](#getme) - View your account info
* [GetPaymentInfo](#getpaymentinfo) - View your payment and billing info
* [GetPermissions](#getpermissions) - View your permissions
* [GetResponsivity](#getresponsivity) - View your vendor responsiveness
* [GetStats](#getstats) - View your account statistics
* [GetThisUserGroups](#getthisusergroups) - Returns a list of user groups that this user belongs to.
* [GetUser](#getuser) - Get user information, including client or vendor specific info.
* [GetUserEarnings](#getuserearnings) - Returns your vendor earnings. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects. Also includes total earnings and string edits.
* [GetUserGroups](#getusergroups) - View your user groups
* [GetUserPaymentInfo](#getuserpaymentinfo) - View user's payment and billing info
* [GetUserPermissions](#getuserpermissions) - Returns a list of permissions that this user is authorized for.
* [GetUserPopularPairs](#getuserpopularpairs) - Returns the language pairs that the user has ordered most.
* [GetUserProjectStats](#getuserprojectstats) - Returns a user's project statistics.
* [GetUserResponsivity](#getuserresponsivity) - Returns a user's vendor responsivity stats
* [GetUserStats](#getuserstats) - Returns a user's client and vendor statistics. This used to be called "summary" (\@deprecated).
* [GetUsers](#getusers) - Get a list of platform users
* [LogLocation](#loglocation) - Log user's current location. This data is used in our Intelligent Project Manager for various data analysis, including project prioritization for vendors and account validation.
* [MakeProofreader](#makeproofreader)
* [MakeUserProofreader](#makeuserproofreader)
* [RejectVendorApplication](#rejectvendorapplication)
* [SendEmailConfirmation](#sendemailconfirmation) - Sends email confirmation email for current user
* [SendPasswordReminder](#sendpasswordreminder) - Sends password reset email to the user's registered email address
* [SendUserEmailConfirmation](#senduseremailconfirmation) - Sends email confirmation email for a user
* [SubscribeNotification](#subscribenotification) - Subscribe to push notifications
* [SubscribeUserNotification](#subscribeusernotification)
* [SuspendUser](#suspenduser)
* [UnfreezeAccount](#unfreezeaccount) - Defreeze your account
* [UnfreezeUserAccount](#unfreezeuseraccount) - Unfreeze requester account for project notifications
* [UnsubscribeNotification](#unsubscribenotification)
* [UnsubscribeUserNotification](#unsubscribeusernotification)
* [UpdateMe](#updateme) - Update your account info
* [UpdatePassword](#updatepassword) - Update your account password
* [UpdatePaymentInfo](#updatepaymentinfo) - Update payment info
* [UpdateUser](#updateuser)
* [UpdateUserGroup](#updateusergroup)
* [UpdateUserPaymentInfo](#updateuserpaymentinfo) - Update user payment info
* [UploadProfilePictureJSON](#uploadprofilepicturejson) - Upload profile picture
* [UploadProfilePictureMultipart](#uploadprofilepicturemultipart) - Upload profile picture
* [UploadUserProfilePictureJSON](#uploaduserprofilepicturejson)
* [UploadUserProfilePictureMultipart](#uploaduserprofilepicturemultipart)

## ApproveVendorApplication

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
    res, err := s.User.ApproveVendorApplication(ctx, operations.ApproveVendorApplicationRequest{
        UserID: 631126,
    }, operations.ApproveVendorApplicationSecurity{
        MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## CreateUser

Create a new platform user

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.CreateUser(ctx, operations.CreateUserRequest{
        User: &shared.User{
            Billing: &shared.BillingAddress{
                City: sdk.String("East Genevieve"),
                Country: sdk.String("Haiti"),
                Name: sdk.String("Cathy Rohan"),
                Phone: sdk.String("354-438-8327 x55926"),
                State: sdk.String("corrupti"),
                Street: sdk.String("593 Bailey Ramp"),
                Zip: sdk.String("sed"),
            },
            Birthday: types.MustDateFromString("2022-08-09"),
            CanWorkManualFiles: sdk.Bool(false),
            City: sdk.String("Port Arthur"),
            Client: &shared.UserClient{
                Corporate: &shared.UserClientCorporate{
                    Email: sdk.String("Melvin.Bernier@yahoo.com"),
                    ID: sdk.Int64(671907),
                    Logo: sdk.String("sed"),
                    Name: sdk.String("Tonya Predovic"),
                    PhoneNumber: sdk.String("unde"),
                },
                Nps: sdk.Float32(1000.32),
                Subjects: map[string]int64{
                    "sapiente": 895386,
                    "illo": 967795,
                },
            },
            CorporateID: sdk.Int64(19300),
            Country: sdk.String("Malta"),
            CreatedAt: sdk.Int64(979574),
            DoNotContact: sdk.Bool(false),
            Email: sdk.String("Cali89@gmail.com"),
            FirstName: sdk.String("Cruz"),
            HasPwd: sdk.Bool(false),
            ID: sdk.Int64(406733),
            IsClient: sdk.Bool(false),
            IsDeveloper: sdk.Bool(false),
            IsProofreader: sdk.Bool(false),
            IsProspect: sdk.Bool(false),
            IsSalesPerson: sdk.Bool(false),
            IsVendor: sdk.Bool(false),
            LanguagePairs: []shared.LanguagePair{
                shared.LanguagePair{
                    SourceLanguage: sdk.String("quos"),
                    TargetLanguage: sdk.String("voluptatibus"),
                },
                shared.LanguagePair{
                    SourceLanguage: sdk.String("tempora"),
                    TargetLanguage: sdk.String("tempora"),
                },
                shared.LanguagePair{
                    SourceLanguage: sdk.String("voluptate"),
                    TargetLanguage: sdk.String("reiciendis"),
                },
            },
            LastName: sdk.String("Jacobson"),
            LastSeenOnlineAt: sdk.Int64(25497),
            Links: &shared.UserLinks{
                LoginAs: &shared.Href{
                    Href: sdk.String("non"),
                },
                Projects: &shared.Href{
                    Href: sdk.String("officiis"),
                },
                Responsivity: &shared.Href{
                    Href: sdk.String("praesentium"),
                },
                Self: &shared.Href{
                    Href: sdk.String("facilis"),
                },
                Stats: &shared.Href{
                    Href: sdk.String("quaerat"),
                },
            },
            Locale: sdk.String("incidunt"),
            Mailing: &shared.Address{
                City: sdk.String("Fort Judy"),
                Country: sdk.String("Anguilla"),
                Phone: sdk.String("733-998-1092 x34815"),
                State: sdk.String("exercitationem"),
                Street: sdk.String("7365 Welch Rapid"),
                Zip: sdk.String("debitis"),
            },
            Name: sdk.String("Sonya Heaney"),
            NativeLanguage: sdk.String("corrupti"),
            Nps: sdk.Float32(8792.35),
            PhoneNumber: sdk.String("tempora"),
            ProfilePicturePath: sdk.String("atque"),
            SocialMedia: &shared.SocialMedia{
                FacebookURL: sdk.String("fugit"),
                LinkedInURL: sdk.String("ut"),
                TwitterURL: sdk.String("fugiat"),
            },
            State: sdk.String("voluptatem"),
            Status: sdk.String("culpa"),
            Street: sdk.String("204 Alberto Meadows"),
            Timezone: sdk.String("quas"),
            TmsUserName: sdk.String("repudiandae"),
            UserGroups: []shared.UserGroup{
                shared.UserGroup{
                    CorporateID: sdk.Int64(89494),
                    ID: sdk.Int64(502710),
                    Name: sdk.String("Jane Bailey"),
                    Permissions: []string{
                        "error",
                        "consequatur",
                        "incidunt",
                        "reiciendis",
                    },
                },
                shared.UserGroup{
                    CorporateID: sdk.Int64(209750),
                    ID: sdk.Int64(690894),
                    Name: sdk.String("Diane Mayer"),
                    Permissions: []string{
                        "laborum",
                        "nam",
                        "tenetur",
                    },
                },
            },
            Vendor: &shared.UserVendor{
                CanWorkManualFiles: sdk.Bool(false),
                EmailOpenRate: sdk.Float32(3888.67),
                IsFrozen: sdk.Bool(false),
                IsProofreader: sdk.Bool(false),
                LanguagePairs: []shared.LanguagePair{
                    shared.LanguagePair{
                        SourceLanguage: sdk.String("amet"),
                        TargetLanguage: sdk.String("deserunt"),
                    },
                },
                NativeLanguage: sdk.String("voluptate"),
                PamTqs: sdk.Float32(6003.92),
                PaypalEmail: sdk.String("reiciendis"),
                ProfileSurvey: &shared.ProfileSurvey{
                    CurrentServices: sdk.String("provident"),
                    DailyProofreadingCapacity: sdk.String("repellendus"),
                    DailyTranslationCapacity: sdk.String("delectus"),
                    DtpSoftware: sdk.String("voluptates"),
                    Experience: sdk.String("perferendis"),
                    IsCertifiedTranslator: sdk.String("est"),
                    IsSwornTranslator: sdk.String("quidem"),
                    Memoq: sdk.String("reprehenderit"),
                    Memsource: sdk.String("facere"),
                    Omegat: sdk.String("fuga"),
                    ProofreaderExperience: sdk.String("praesentium"),
                    ProvidesCreativeWritingService: sdk.String("mollitia"),
                    ProvidesPosteditService: sdk.String("veniam"),
                    Reference: sdk.String("voluptatem"),
                    SdlTrados: sdk.String("quisquam"),
                    SkypeID: sdk.String("repudiandae"),
                    Smartcat: sdk.String("quasi"),
                    Smartling: sdk.String("atque"),
                    Software: sdk.String("reprehenderit"),
                    Specialization: sdk.String("asperiores"),
                    SubtitleEdit: sdk.String("totam"),
                    SubtitleWorkshop: sdk.String("suscipit"),
                    TranslatorAssociation: sdk.String("quidem"),
                    Transsuite2000: sdk.String("maxime"),
                    VendorProfileLsp: sdk.String("et"),
                    Wordbee: sdk.String("esse"),
                    Wordfast: sdk.String("amet"),
                    WorkType: sdk.String("assumenda"),
                    WorkWith: sdk.String("ea"),
                    WorkingAs: sdk.String("atque"),
                    WorkingTimezone: sdk.String("error"),
                    Xbench: sdk.String("officiis"),
                    Xtm: sdk.String("officiis"),
                },
                Require1099: sdk.Bool(false),
                Tags: []string{
                    "natus",
                    "minima",
                    "aspernatur",
                    "ex",
                },
                TmsUserName: sdk.String("maiores"),
                VendorType: sdk.String("corrupti"),
            },
            ZipCode: sdk.String("65395-5196"),
        },
        Notify: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## DeleteAccount

Delete your MotaWord account. Be careful; once deleted, you will not have access to MotaWord via API or your dashboards.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.DeleteAccount(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## DeleteUserAccount

Delete requester account

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.DeleteUserAccount(ctx, operations.DeleteUserAccountRequest{
        UserID: 829898,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## DowngradeProofreader

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.DowngradeProofreader(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## DowngradeUserProofreader

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
    res, err := s.User.DowngradeUserProofreader(ctx, operations.DowngradeUserProofreaderRequest{
        UserID: 287119,
    }, operations.DowngradeUserProofreaderSecurity{
        MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## FreezeAccount

Freeze your account temporarily, especially to stop receiving project notifications.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.FreezeAccount(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## FreezeUserAccount

Freeze requester account for project notifications

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.FreezeUserAccount(ctx, operations.FreezeUserAccountRequest{
        UserID: 968287,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## GetAllVendorTags

Returns all vendor tags for vendors filter

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.GetAllVendorTags(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.VendorTags != nil {
        // handle response
    }
}
```

## GetEarnings

View your vendor earnings from your translation activites. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects, as well as total earnings and string edits.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.GetEarnings(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Earnings != nil {
        // handle response
    }
}
```

## GetFilteredVendors

Get a list of vendors available for the criteria given

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.GetFilteredVendors(ctx, operations.GetFilteredVendorsRequest{
        FilterVendorRequest: &shared.FilterVendorRequest{
            Clients: []int64{
                919783,
            },
            CommunicationChannel: []string{
                "accusantium",
            },
            CorporateIdsForAuth: []int64{
                174772,
            },
            Corporates: []int64{
                389135,
                246535,
            },
            Country: []string{
                "molestias",
                "magnam",
                "saepe",
                "consequuntur",
            },
            CreatedAt: sdk.String("occaecati"),
            CurrentServices: []string{
                "perspiciatis",
                "in",
                "adipisci",
                "eveniet",
            },
            DailyProofreadingCapacity: sdk.Int64(580887),
            DailyTranslationCapacity: sdk.Int64(160230),
            DestinationLanguages: []int64{
                661118,
            },
            DtpSoftware: []string{
                "reprehenderit",
                "error",
            },
            EmailAddress: sdk.String("illo"),
            Experience: []string{
                "quidem",
                "eveniet",
            },
            FirstName: sdk.String("Delilah"),
            ID: []int64{
                39615,
                434156,
                59944,
                517612,
            },
            IsCertifiedTranslator: sdk.Bool(false),
            IsSwornTranslator: sdk.Bool(false),
            LanguagePairs: [][]int64{
                []int64{
                    907733,
                    184362,
                },
            },
            LastName: sdk.String("Ritchie"),
            LastOnline: sdk.String("iure"),
            LastWorked: sdk.String("necessitatibus"),
            Memoq: sdk.Int64(187552),
            Memsource: sdk.Int64(672582),
            MinTqs: sdk.Float64(7152.08),
            Omegat: sdk.Int64(528940),
            ProjectCount: sdk.Int64(523006),
            ProofreaderExperience: sdk.Int64(304446),
            ProvidesCreativeWritingService: sdk.Bool(false),
            ProvidesPosteditService: sdk.Bool(false),
            QuoteFileSubjects: []string{
                "repellat",
                "alias",
            },
            Reference: sdk.String("corporis"),
            SdlTrados: sdk.Int64(597303),
            Search: sdk.String("nihil"),
            SkypeID: sdk.String("mollitia"),
            Smartcat: sdk.Int64(378245),
            Smartling: sdk.Int64(5189),
            SourceLanguages: []int64{
                970222,
                174658,
                663866,
                327988,
            },
            Specialization: []string{
                "dolorum",
                "nesciunt",
            },
            Status: []string{
                "recusandae",
            },
            SubtitleEdit: sdk.Int64(607249),
            SubtitleWorkshop: sdk.Int64(309251),
            TranslatorAssociation: sdk.String("molestiae"),
            Transsuite2000: sdk.Int64(403218),
            UserWorkingTimezone: []string{
                "culpa",
                "adipisci",
            },
            VendorProfileLsp: sdk.String("debitis"),
            VendorTags: []string{
                "eum",
                "nemo",
                "recusandae",
            },
            VendorType: []string{
                "provident",
                "quis",
            },
            VendorWorkingTimezone: []string{
                "reiciendis",
                "provident",
            },
            WordCount: sdk.Int64(133439),
            Wordbee: sdk.Int64(354506),
            Wordfast: sdk.Int64(96804),
            WorkType: sdk.String("animi"),
            WorkWith: sdk.String("nostrum"),
            WorkingAs: []string{
                "provident",
                "possimus",
                "animi",
            },
            Xbench: sdk.Int64(402767),
            Xtm: sdk.Int64(397257),
        },
        Order: sdk.String("accusantium"),
        OrderBy: sdk.String("repellat"),
        Page: sdk.Int64(984632),
        PerPage: sdk.Int64(351893),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserList != nil {
        // handle response
    }
}
```

## GetMe

Get your user information, including client, corporate account and vendor account information.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.GetMe(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## GetPaymentInfo

Returns billing and saved credit card information for user, and their corporate account if present & allowed.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.GetPaymentInfo(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentInfo != nil {
        // handle response
    }
}
```

## GetPermissions

View a list of permissions that your user account is authorized for, configured either by default, or by your account administator.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.GetPermissions(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PermissionList != nil {
        // handle response
    }
}
```

## GetResponsivity

View your statistical analysis of responsiveness to our translation projects, invitations, notifications and such.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.GetResponsivity(ctx, operations.GetResponsivityRequest{
        Period: operations.GetResponsivityPeriodEnumMonthly.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponsivityList != nil {
        // handle response
    }
}
```

## GetStats

View your client and vendor statistics.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.GetStats(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Stats != nil {
        // handle response
    }
}
```

## GetThisUserGroups

Returns a list of user groups that this user belongs to.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.GetThisUserGroups(ctx, operations.GetThisUserGroupsRequest{
        UserID: 721407,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserGroupList != nil {
        // handle response
    }
}
```

## GetUser

Get user information, including client or vendor specific info.

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
    res, err := s.User.GetUser(ctx, operations.GetUserRequest{
        UserID: 937636,
    }, operations.GetUserSecurity{
        MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## GetUserEarnings

Returns your vendor earnings. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects. Also includes total earnings and string edits.

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
    res, err := s.User.GetUserEarnings(ctx, operations.GetUserEarningsRequest{
        UserID: 637583,
    }, operations.GetUserEarningsSecurity{
        MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Earnings != nil {
        // handle response
    }
}
```

## GetUserGroups

View the user groups that your user account belongs to. This is typically configured by your account administator's dashboard.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.GetUserGroups(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.UserGroupList != nil {
        // handle response
    }
}
```

## GetUserPaymentInfo

Returns billing and saved credit card information for user, and their corporate account if present & allowed.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.GetUserPaymentInfo(ctx, operations.GetUserPaymentInfoRequest{
        UserID: 672041,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentInfo != nil {
        // handle response
    }
}
```

## GetUserPermissions

Returns a list of permissions that this user is authorized for.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.GetUserPermissions(ctx, operations.GetUserPermissionsRequest{
        UserID: 813054,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PermissionList != nil {
        // handle response
    }
}
```

## GetUserPopularPairs

Returns the language pairs that the user has ordered most.

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
    res, err := s.User.GetUserPopularPairs(ctx, operations.GetUserPopularPairsRequest{
        UserID: 266697,
    }, operations.GetUserPopularPairsSecurity{
        MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PopularLanguagePairs != nil {
        // handle response
    }
}
```

## GetUserProjectStats

Returns a user's project statistics.

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
    res, err := s.User.GetUserProjectStats(ctx, operations.GetUserProjectStatsRequest{
        UserID: 976226,
    }, operations.GetUserProjectStatsSecurity{
        MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientProjectStats != nil {
        // handle response
    }
}
```

## GetUserResponsivity

Returns a user's vendor responsivity stats

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
    res, err := s.User.GetUserResponsivity(ctx, operations.GetUserResponsivityRequest{
        Period: operations.GetUserResponsivityPeriodEnumWeekly.ToPointer(),
        UserID: 889794,
    }, operations.GetUserResponsivitySecurity{
        MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponsivityList != nil {
        // handle response
    }
}
```

## GetUserStats

Returns a user's client and vendor statistics. This used to be called "summary" (\@deprecated).

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
    res, err := s.User.GetUserStats(ctx, operations.GetUserStatsRequest{
        UserID: 956933,
    }, operations.GetUserStatsSecurity{
        MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Stats != nil {
        // handle response
    }
}
```

## GetUsers

Get a list of platform users

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.GetUsers(ctx, operations.GetUsersRequest{
        Email: sdk.String("Bessie33@hotmail.com"),
        Page: sdk.Int64(82057),
        PerPage: sdk.Int64(147685),
        Search: sdk.String("cumque"),
        UserType: operations.GetUsersUserTypeEnumVendor.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserList != nil {
        // handle response
    }
}
```

## LogLocation

Log user's current location. This data is used in our Intelligent Project Manager for various data analysis, including project prioritization for vendors and account validation.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.LogLocation(ctx, shared.LocationUpdateContent{
        Lat: 216.88,
        Lon: 2419.01,
        Timestamp: sdk.Int64(137251),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## MakeProofreader

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.MakeProofreader(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## MakeUserProofreader

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
    res, err := s.User.MakeUserProofreader(ctx, operations.MakeUserProofreaderRequest{
        UserID: 432281,
    }, operations.MakeUserProofreaderSecurity{
        MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## RejectVendorApplication

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
    res, err := s.User.RejectVendorApplication(ctx, operations.RejectVendorApplicationRequest{
        UserID: 260628,
    }, operations.RejectVendorApplicationSecurity{
        MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## SendEmailConfirmation

Sends email confirmation email for current user

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.SendEmailConfirmation(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SendEmailConfirmation200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SendPasswordReminder

Sends password reset email to the user's registered email address

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.SendPasswordReminder(ctx, shared.Email{
        Email: sdk.String("Sasha95@yahoo.com"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## SendUserEmailConfirmation

Sends email confirmation email for a user

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
    res, err := s.User.SendUserEmailConfirmation(ctx, operations.SendUserEmailConfirmationRequest{
        UserID: 433279,
    }, operations.SendUserEmailConfirmationSecurity{
        MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendUserEmailConfirmation200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SubscribeNotification

Subscribe to push notifications to receive project and platform notifications.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.SubscribeNotification(ctx, shared.NotificationSubscription{
        Device: shared.NotificationSubscriptionDeviceEnumAndroid.ToPointer(),
        Endpoint: sdk.String("minima"),
        Type: shared.NotificationSubscriptionTypeEnumOneSignal.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## SubscribeUserNotification

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.User.SubscribeUserNotification(ctx, operations.SubscribeUserNotificationRequest{
        NotificationSubscription: &shared.NotificationSubscription{
            Device: shared.NotificationSubscriptionDeviceEnumAndroid.ToPointer(),
            Endpoint: sdk.String("cupiditate"),
            Type: shared.NotificationSubscriptionTypeEnumOneSignal.ToPointer(),
        },
        UserID: 589695,
    }, operations.SubscribeUserNotificationSecurity{
        MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## SuspendUser

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.User.SuspendUser(ctx, operations.SuspendUserRequest{
        SuspendUserRequest: &shared.SuspendUserRequest{
            Reason: sdk.String("earum"),
        },
        UserID: 745398,
    }, operations.SuspendUserSecurity{
        MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## UnfreezeAccount

Reactive your account to start receiving notifications.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.UnfreezeAccount(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## UnfreezeUserAccount

Unfreeze requester account for project notifications

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.UnfreezeUserAccount(ctx, operations.UnfreezeUserAccountRequest{
        UserID: 940782,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## UnsubscribeNotification

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.UnsubscribeNotification(ctx, shared.NotificationSubscription{
        Device: shared.NotificationSubscriptionDeviceEnumWindows.ToPointer(),
        Endpoint: sdk.String("eaque"),
        Type: shared.NotificationSubscriptionTypeEnumOneSignal.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## UnsubscribeUserNotification

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.User.UnsubscribeUserNotification(ctx, operations.UnsubscribeUserNotificationRequest{
        NotificationSubscription: &shared.NotificationSubscription{
            Device: shared.NotificationSubscriptionDeviceEnumMacOs.ToPointer(),
            Endpoint: sdk.String("perspiciatis"),
            Type: shared.NotificationSubscriptionTypeEnumOneSignal.ToPointer(),
        },
        UserID: 983427,
    }, operations.UnsubscribeUserNotificationSecurity{
        MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## UpdateMe

Update your account info

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.UpdateMe(ctx, shared.UserUpdateContent{
        Birthday: types.MustDateFromString("2021-10-20"),
        City: sdk.String("Hoegerberg"),
        Country: sdk.String("Cameroon"),
        Email: sdk.String("Marlene_Dickens@hotmail.com"),
        FirstName: sdk.String("Sage"),
        ID: sdk.Int64(8931),
        LastName: sdk.String("Boyle"),
        Notifications: &shared.UserUpdateContentNotifications{
            PhoneNumber: sdk.String("et"),
            SmsEnabled: sdk.Bool(false),
        },
        Notify: sdk.Bool(false),
        PaypalEmail: sdk.String("ducimus"),
        Phone: sdk.String("(632) 219-8802 x4414"),
        Require1099: sdk.Bool(false),
        State: sdk.String("esse"),
        Street: sdk.String("9940 Batz Corners"),
        UserGroups: []int64{
            271252,
            458259,
        },
        Zip: sdk.String("ex"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## UpdatePassword

Password should contain at least one uppercase, lowercase character and one number

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.UpdatePassword(ctx, shared.PasswordUpdateContent{
        Password: sdk.String("consectetur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## UpdatePaymentInfo

Update your billing and saved credit card information

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.UpdatePaymentInfo(ctx, shared.UpdatePaymentInfo{
        Bin: sdk.String("aliquid"),
        City: sdk.String("Lake Bradfordborough"),
        Country: sdk.String("Sweden"),
        Phone: sdk.String("563.504.3660 x6896"),
        SaveAsCorporatePrimary: sdk.Bool(false),
        ShareWithCorporateUsers: sdk.Bool(false),
        State: sdk.String("laborum"),
        Street: sdk.String("353 Robb Island"),
        StripeToken: sdk.String("quo"),
        Zip: sdk.String("ex"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentInfo != nil {
        // handle response
    }
}
```

## UpdateUser

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.UpdateUser(ctx, operations.UpdateUserRequest{
        UserUpdateContent: &shared.UserUpdateContent{
            Birthday: types.MustDateFromString("2022-09-05"),
            City: sdk.String("Bartellstad"),
            Country: sdk.String("Russian Federation"),
            Email: sdk.String("Bernhard.Lemke@yahoo.com"),
            FirstName: sdk.String("Mazie"),
            ID: sdk.Int64(665678),
            LastName: sdk.String("Nicolas"),
            Notifications: &shared.UserUpdateContentNotifications{
                PhoneNumber: sdk.String("voluptatem"),
                SmsEnabled: sdk.Bool(false),
            },
            Notify: sdk.Bool(false),
            PaypalEmail: sdk.String("sapiente"),
            Phone: sdk.String("1-268-900-5949 x57391"),
            Require1099: sdk.Bool(false),
            State: sdk.String("ullam"),
            Street: sdk.String("85787 Lorena Extensions"),
            UserGroups: []int64{
                80532,
                537279,
            },
            Zip: sdk.String("veritatis"),
        },
        UserID: 274575,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## UpdateUserGroup

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.User.UpdateUserGroup(ctx, operations.UpdateUserGroupRequest{
        ActiveWidget: &shared.ActiveWidget{
            AdminMode: sdk.Bool(false),
            AllowHashInURL: sdk.Bool(false),
            AllowQueryInURL: sdk.Bool(false),
            AutoDetectSourceLanguage: sdk.Bool(false),
            CreatedAt: types.MustTimeFromString("2022-12-28T19:52:33.730Z"),
            DebugMode: sdk.Bool(false),
            Elements: sdk.String("architecto"),
            FollowUser: sdk.Bool(false),
            ForceCacheRefreshInterval: sdk.Bool(false),
            HitBackendForExisting: sdk.Bool(false),
            ID: sdk.Int64(24944),
            LanguageMappings: sdk.String("modi"),
            Live: sdk.Bool(false),
            ModifyLinks: sdk.Bool(false),
            Name: sdk.String("Mrs. Rebecca Larkin"),
            OptimizePerPage: sdk.Bool(false),
            Pages: sdk.String("ipsam"),
            PathRegex: sdk.String("consequuntur"),
            Position: sdk.String("ipsa"),
            QueryName: sdk.String("quas"),
            RebootOnURLChange: sdk.Bool(false),
            RestrictedDomains: sdk.String("eveniet"),
            Sections: sdk.String("impedit"),
            TestMode: sdk.Bool(false),
            Theme: sdk.String("officiis"),
            Token: sdk.String("esse"),
            URLChangeMode: sdk.String("necessitatibus"),
            URLMode: sdk.String("sed"),
            UseCache: sdk.Bool(false),
            UseDummyTranslations: sdk.Bool(false),
            Variables: sdk.String("veniam"),
        },
        UserID: 199596,
    }, operations.UpdateUserGroupSecurity{
        MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserGroupList != nil {
        // handle response
    }
}
```

## UpdateUserPaymentInfo

Update user's billing and saved credit card information

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.UpdateUserPaymentInfo(ctx, operations.UpdateUserPaymentInfoRequest{
        PaymentInfo: &shared.PaymentInfo{
            Billing: &shared.BillingAddress{
                City: sdk.String("Kemmerview"),
                Country: sdk.String("Madagascar"),
                Name: sdk.String("Annette Bernier"),
                Phone: sdk.String("591-238-0388 x66199"),
                State: sdk.String("optio"),
                Street: sdk.String("3456 Deontae Haven"),
                Zip: sdk.String("quos"),
            },
            Card: &shared.CreditCard{
                Bin: sdk.String("eius"),
                ID: sdk.Int64(131903),
                IsDefault: sdk.Bool(false),
                PaymentCode: sdk.String("ducimus"),
            },
            Cards: []shared.CreditCard{
                shared.CreditCard{
                    Bin: sdk.String("fuga"),
                    ID: sdk.Int64(514054),
                    IsDefault: sdk.Bool(false),
                    PaymentCode: sdk.String("incidunt"),
                },
            },
            Corporate: &shared.PaymentInfoCorporate{
                AllowAPIInvoicing: sdk.Bool(false),
                AllowPaymentCode: sdk.Bool(false),
                AutoCharge: sdk.Bool(false),
                Billing: &shared.BillingAddress{
                    City: sdk.String("New Roxanneland"),
                    Country: sdk.String("Hungary"),
                    Name: sdk.String("Edith Beahan"),
                    Phone: sdk.String("261.661.0689 x7693"),
                    State: sdk.String("praesentium"),
                    Street: sdk.String("385 Tomasa Junction"),
                    Zip: sdk.String("totam"),
                },
                Card: &shared.CreditCard{
                    Bin: sdk.String("earum"),
                    ID: sdk.Int64(267207),
                    IsDefault: sdk.Bool(false),
                    PaymentCode: sdk.String("nam"),
                },
                ContactEmailAddress: sdk.String("vero"),
                PaymentCode: sdk.String("voluptatem"),
            },
            SharedCard: &shared.CreditCard{
                Bin: sdk.String("ipsam"),
                ID: sdk.Int64(425946),
                IsDefault: sdk.Bool(false),
                PaymentCode: sdk.String("alias"),
            },
        },
        UserID: 93894,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## UploadProfilePictureJSON

Upload a profile picture on your account. This is used where your profile is mentioned throughout the platform. Your picture is not used publicly.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.UploadProfilePictureJSON(ctx, shared.ProfilePictureUpload{
        ProfilePicture: []byte("non"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## UploadProfilePictureMultipart

Upload a profile picture on your account. This is used where your profile is mentioned throughout the platform. Your picture is not used publicly.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.UploadProfilePictureMultipart(ctx, shared.ProfilePictureUpload1{
        ProfilePicture: shared.ProfilePictureUploadProfilePicture{
            Content: []byte("maiores"),
            ProfilePicture: "enim",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## UploadUserProfilePictureJSON

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.User.UploadUserProfilePictureJSON(ctx, operations.UploadUserProfilePictureJSONRequest{
        ProfilePictureUpload: &shared.ProfilePictureUpload{
            ProfilePicture: []byte("sint"),
        },
        UserID: 858778,
    }, operations.UploadUserProfilePictureJSONSecurity{
        MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## UploadUserProfilePictureMultipart

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.User.UploadUserProfilePictureMultipart(ctx, operations.UploadUserProfilePictureMultipartRequest{
        ProfilePictureUpload1: &shared.ProfilePictureUpload1{
            ProfilePicture: shared.ProfilePictureUploadProfilePicture{
                Content: []byte("deserunt"),
                ProfilePicture: "esse",
            },
        },
        UserID: 364463,
    }, operations.UploadUserProfilePictureMultipartSecurity{
        MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```
