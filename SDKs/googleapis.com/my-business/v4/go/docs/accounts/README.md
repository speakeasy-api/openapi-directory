# Accounts

### Available Operations

* [MybusinessAccountsCreate](#mybusinessaccountscreate) - Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups. 
* [MybusinessAccountsGenerateAccountNumber](#mybusinessaccountsgenerateaccountnumber) - Generates an account number for this account. The account number is not provisioned when an account is created. Use this request to create an account number when it is required.
* [MybusinessAccountsInvitationsAccept](#mybusinessaccountsinvitationsaccept) - Accepts the specified invitation.
* [MybusinessAccountsInvitationsDecline](#mybusinessaccountsinvitationsdecline) - Declines the specified invitation.
* [MybusinessAccountsInvitationsList](#mybusinessaccountsinvitationslist) - Lists pending invitations for the specified account.
* [MybusinessAccountsList](#mybusinessaccountslist) - Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.
* [MybusinessAccountsListRecommendGoogleLocations](#mybusinessaccountslistrecommendgooglelocations) - List all the GoogleLocations that have been recommended to the specified Business Profile account. Recommendations are provided for personal accounts and location groups only, requests for all other account types will result in an error. The recommendations for location groups are based on the locations in that group. The recommendations for personal accounts are based on all of the locations that the user has access to on Business Profile (which includes locations they can access through location groups), and is a superset of all recommendations generated for the user.
* [MybusinessAccountsLocationsAdminsCreate](#mybusinessaccountslocationsadminscreate) - Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.
* [MybusinessAccountsLocationsAdminsList](#mybusinessaccountslocationsadminslist) - Lists all of the admins for the specified location.
* [MybusinessAccountsLocationsAssociate](#mybusinessaccountslocationsassociate) - Associates a location to a place ID. Any previous association is overwritten. This operation is only valid if the location is unverified. The association must be valid, that is, it appears in the list of `FindMatchingLocations`.
* [MybusinessAccountsLocationsBatchGet](#mybusinessaccountslocationsbatchget) - Gets all of the specified locations in the given account.
* [MybusinessAccountsLocationsBatchGetReviews](#mybusinessaccountslocationsbatchgetreviews) - Returns the paginated list of reviews for all specified locations. This operation is only valid if the specified locations are verified. *Note:* Reviews are limited to a batch size of 200 `location_names` per call.
* [MybusinessAccountsLocationsClearAssociation](#mybusinessaccountslocationsclearassociation) - Clears an association between a location and its place ID. This operation is only valid if the location is unverified.
* [MybusinessAccountsLocationsCreate](#mybusinessaccountslocationscreate) - Creates a new location owned by the specified account, and returns it.
* [MybusinessAccountsLocationsFetchVerificationOptions](#mybusinessaccountslocationsfetchverificationoptions) - Reports all eligible verification options for a location in a specific language.
* [MybusinessAccountsLocationsFindMatches](#mybusinessaccountslocationsfindmatches) - Finds all of the possible locations that are a match to the specified location. This operation is only valid if the location is unverified.
* [MybusinessAccountsLocationsGetGoogleUpdated](#mybusinessaccountslocationsgetgoogleupdated) - Gets the Google-updated version of the specified location. Returns `NOT_FOUND` if the location does not exist.
* [MybusinessAccountsLocationsInsuranceNetworksList](#mybusinessaccountslocationsinsurancenetworkslist) - Returns a list of all insurance networks supported by Google.
* [MybusinessAccountsLocationsList](#mybusinessaccountslocationslist) - Lists the locations for the specified account.
* [MybusinessAccountsLocationsLocalPostsCreate](#mybusinessaccountslocationslocalpostscreate) - Creates a new local post associated with the specified location, and returns it.
* [MybusinessAccountsLocationsLocalPostsList](#mybusinessaccountslocationslocalpostslist) - Returns a list of local posts associated with a location.
* [MybusinessAccountsLocationsLocalPostsReportInsights](#mybusinessaccountslocationslocalpostsreportinsights) - Returns insights for a set of local posts associated with a single listing. Which metrics and how they are reported are options specified in the request proto. *Note:* Insight reports are limited to 100 `local_post_names` per call.
* [MybusinessAccountsLocationsLodgingGetGoogleUpdated](#mybusinessaccountslocationslodginggetgoogleupdated) - Returns the Google updated Lodging of a specific location.
* [MybusinessAccountsLocationsMediaCreate](#mybusinessaccountslocationsmediacreate) - Creates a new media item for the location.
* [MybusinessAccountsLocationsMediaCustomersList](#mybusinessaccountslocationsmediacustomerslist) - Returns a list of media items associated with a location that have been contributed by customers.
* [MybusinessAccountsLocationsMediaList](#mybusinessaccountslocationsmedialist) - Returns a list of media items associated with a location.
* [MybusinessAccountsLocationsMediaStartUpload](#mybusinessaccountslocationsmediastartupload) - Generates a `MediaItemDataRef` for media item uploading.
* [MybusinessAccountsLocationsQuestionsAnswersDelete](#mybusinessaccountslocationsquestionsanswersdelete) - Deletes the answer written by the current user to a question.
* [MybusinessAccountsLocationsQuestionsAnswersList](#mybusinessaccountslocationsquestionsanswerslist) - Returns the paginated list of answers for a specified question.
* [MybusinessAccountsLocationsQuestionsAnswersUpsert](#mybusinessaccountslocationsquestionsanswersupsert) - Creates an answer or updates the existing answer written by the user for the specified question. A user can only create one answer per question.
* [MybusinessAccountsLocationsQuestionsCreate](#mybusinessaccountslocationsquestionscreate) - Adds a question for the specified location.
* [MybusinessAccountsLocationsQuestionsDelete](#mybusinessaccountslocationsquestionsdelete) - Deletes a specific question written by the current user.
* [MybusinessAccountsLocationsQuestionsList](#mybusinessaccountslocationsquestionslist) - Returns the paginated list of questions and some of its answers for a specified location.
* [MybusinessAccountsLocationsQuestionsPatch](#mybusinessaccountslocationsquestionspatch) - Updates a specific question written by the current user.
* [MybusinessAccountsLocationsReportInsights](#mybusinessaccountslocationsreportinsights) - Returns a report containing insights on one or more metrics by location. *Note:* Insight reports are limited to a batch size of 10 `location_names` per call.
* [MybusinessAccountsLocationsReviewsDeleteReply](#mybusinessaccountslocationsreviewsdeletereply) - Deletes the response to the specified review. This operation is only valid if the specified location is verified.
* [MybusinessAccountsLocationsReviewsList](#mybusinessaccountslocationsreviewslist) - Returns the paginated list of reviews for the specified location. This operation is only valid if the specified location is verified.
* [MybusinessAccountsLocationsReviewsUpdateReply](#mybusinessaccountslocationsreviewsupdatereply) - Updates the reply to the specified review. A reply is created if one does not exist. This operation is only valid if the specified location is verified.
* [MybusinessAccountsLocationsTransfer](#mybusinessaccountslocationstransfer) - Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account. Returns the Location with its new resource name.
* [MybusinessAccountsLocationsVerificationsComplete](#mybusinessaccountslocationsverificationscomplete) - Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.
* [MybusinessAccountsLocationsVerificationsList](#mybusinessaccountslocationsverificationslist) - List verifications of a location, ordered by create time.
* [MybusinessAccountsLocationsVerify](#mybusinessaccountslocationsverify) - Starts the verification process for a location.
* [MybusinessAccountsUpdateNotifications](#mybusinessaccountsupdatenotifications) - Sets the pubsub notification settings for the account informing Business Profile which topic to send pubsub notifications for: - New reviews for locations administered by the account. - Updated reviews for locations administered by the account. - New `GoogleUpdates` for locations administered by the account. An account will only have one notification settings resource, and only one pubsub topic can be set.

## MybusinessAccountsCreate

Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups. 

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
    res, err := s.Accounts.MybusinessAccountsCreate(ctx, operations.MybusinessAccountsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Account: &shared.Account{
            AccountName: sdk.String("porro"),
            AccountNumber: sdk.String("dolorum"),
            Name: sdk.String("Antoinette Nikolaus"),
            OrganizationInfo: &shared.OrganizationInfo{
                PhoneNumber: sdk.String("deleniti"),
                PostalAddress: &shared.PostalAddress{
                    AddressLines: []string{
                        "optio",
                        "totam",
                        "beatae",
                        "commodi",
                    },
                    AdministrativeArea: sdk.String("molestiae"),
                    LanguageCode: sdk.String("modi"),
                    Locality: sdk.String("qui"),
                    Organization: sdk.String("impedit"),
                    PostalCode: sdk.String("42510-3616"),
                    Recipients: []string{
                        "natus",
                    },
                    RegionCode: sdk.String("laboriosam"),
                    Revision: sdk.Int(943749),
                    SortingCode: sdk.String("saepe"),
                    Sublocality: sdk.String("fuga"),
                },
                RegisteredDomain: sdk.String("in"),
            },
            PermissionLevel: shared.AccountPermissionLevelEnumOwnerLevel.ToPointer(),
            Role: shared.AccountRoleEnumManager.ToPointer(),
            State: &shared.AccountState{
                Status: shared.AccountStateStatusEnumVerified.ToPointer(),
            },
            Type: shared.AccountTypeEnumOrganization.ToPointer(),
        },
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("est"),
        OauthToken: sdk.String("mollitia"),
        PrettyPrint: sdk.Bool(false),
        PrimaryOwner: sdk.String("laborum"),
        QuotaUser: sdk.String("dolores"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```

## MybusinessAccountsGenerateAccountNumber

Generates an account number for this account. The account number is not provisioned when an account is created. Use this request to create an account number when it is required.

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
    res, err := s.Accounts.MybusinessAccountsGenerateAccountNumber(ctx, operations.MybusinessAccountsGenerateAccountNumberRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "enim": "omnis",
            "nemo": "minima",
            "excepturi": "accusantium",
            "iure": "culpa",
        },
        AccessToken: sdk.String("doloribus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("mollitia"),
        Key: sdk.String("dolorem"),
        Name: "Carlos Ziemann",
        OauthToken: sdk.String("numquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("quam"),
        UploadProtocol: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```

## MybusinessAccountsInvitationsAccept

Accepts the specified invitation.

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
    res, err := s.Accounts.MybusinessAccountsInvitationsAccept(ctx, operations.MybusinessAccountsInvitationsAcceptRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "quia": "quis",
            "vitae": "laborum",
            "animi": "enim",
        },
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sequi"),
        Fields: sdk.String("tenetur"),
        Key: sdk.String("ipsam"),
        Name: "Miss Rufus Ankunding",
        OauthToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## MybusinessAccountsInvitationsDecline

Declines the specified invitation.

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
    res, err := s.Accounts.MybusinessAccountsInvitationsDecline(ctx, operations.MybusinessAccountsInvitationsDeclineRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "praesentium": "voluptatibus",
            "ipsa": "omnis",
        },
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("doloremque"),
        Key: sdk.String("reprehenderit"),
        Name: "Shawna Carter",
        OauthToken: sdk.String("iusto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("harum"),
        UploadProtocol: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## MybusinessAccountsInvitationsList

Lists pending invitations for the specified account.

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
    res, err := s.Accounts.MybusinessAccountsInvitationsList(ctx, operations.MybusinessAccountsInvitationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quae"),
        Fields: sdk.String("ipsum"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("molestias"),
        Parent: "excepturi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        TargetType: operations.MybusinessAccountsInvitationsListTargetTypeEnumAll.ToPointer(),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("rem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInvitationsResponse != nil {
        // handle response
    }
}
```

## MybusinessAccountsList

Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.

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
    res, err := s.Accounts.MybusinessAccountsList(ctx, operations.MybusinessAccountsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("veritatis"),
        Filter: sdk.String("itaque"),
        Key: sdk.String("incidunt"),
        Name: sdk.String("Elizabeth Orn"),
        OauthToken: sdk.String("deserunt"),
        PageSize: sdk.Int64(716327),
        PageToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccountsResponse != nil {
        // handle response
    }
}
```

## MybusinessAccountsListRecommendGoogleLocations

List all the GoogleLocations that have been recommended to the specified Business Profile account. Recommendations are provided for personal accounts and location groups only, requests for all other account types will result in an error. The recommendations for location groups are based on the locations in that group. The recommendations for personal accounts are based on all of the locations that the user has access to on Business Profile (which includes locations they can access through location groups), and is a superset of all recommendations generated for the user.

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
    res, err := s.Accounts.MybusinessAccountsListRecommendGoogleLocations(ctx, operations.MybusinessAccountsListRecommendGoogleLocationsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cupiditate"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("magni"),
        Key: sdk.String("assumenda"),
        Name: "Linda Corkery",
        OauthToken: sdk.String("tempora"),
        PageSize: sdk.Int64(703737),
        PageToken: sdk.String("tempore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRecommendedGoogleLocationsResponse != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsAdminsCreate

Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.

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
    res, err := s.Accounts.MybusinessAccountsLocationsAdminsCreate(ctx, operations.MybusinessAccountsLocationsAdminsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Admin: &shared.Admin{
            AdminName: sdk.String("eligendi"),
            Name: sdk.String("Gilbert Medhurst"),
            PendingInvitation: sdk.Bool(false),
            Role: shared.AdminRoleEnumManager.ToPointer(),
        },
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("a"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("in"),
        OauthToken: sdk.String("in"),
        Parent: "illum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Admin != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsAdminsList

Lists all of the admins for the specified location.

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
    res, err := s.Accounts.MybusinessAccountsLocationsAdminsList(ctx, operations.MybusinessAccountsLocationsAdminsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cumque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ea"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("accusamus"),
        Parent: "non",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationAdminsResponse != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsAssociate

Associates a location to a place ID. Any previous association is overwritten. This operation is only valid if the location is unverified. The association must be valid, that is, it appears in the list of `FindMatchingLocations`.

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
    res, err := s.Accounts.MybusinessAccountsLocationsAssociate(ctx, operations.MybusinessAccountsLocationsAssociateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AssociateLocationRequest: &shared.AssociateLocationRequest{
            PlaceID: sdk.String("quidem"),
        },
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("id"),
        Fields: sdk.String("blanditiis"),
        Key: sdk.String("deleniti"),
        Name: "Vincent Nolan",
        OauthToken: sdk.String("natus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsBatchGet

Gets all of the specified locations in the given account.

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
    res, err := s.Accounts.MybusinessAccountsLocationsBatchGet(ctx, operations.MybusinessAccountsLocationsBatchGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BatchGetLocationsRequest: &shared.BatchGetLocationsRequest{
            LocationNames: []string{
                "distinctio",
                "id",
            },
        },
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("natus"),
        Key: sdk.String("nobis"),
        Name: "Mrs. Meghan Collins V",
        OauthToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("sint"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetLocationsResponse != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsBatchGetReviews

Returns the paginated list of reviews for all specified locations. This operation is only valid if the specified locations are verified. *Note:* Reviews are limited to a batch size of 200 `location_names` per call.

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
    res, err := s.Accounts.MybusinessAccountsLocationsBatchGetReviews(ctx, operations.MybusinessAccountsLocationsBatchGetReviewsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BatchGetReviewsRequest: &shared.BatchGetReviewsRequest{
            IgnoreRatingOnlyReviews: sdk.Bool(false),
            LocationNames: []string{
                "reiciendis",
                "mollitia",
                "ad",
            },
            OrderBy: sdk.String("eum"),
            PageSize: sdk.Int(221262),
            PageToken: sdk.String("necessitatibus"),
        },
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("iure"),
        Key: sdk.String("doloribus"),
        Name: "Frederick Schoen",
        OauthToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetReviewsResponse != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsClearAssociation

Clears an association between a location and its place ID. This operation is only valid if the location is unverified.

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
    res, err := s.Accounts.MybusinessAccountsLocationsClearAssociation(ctx, operations.MybusinessAccountsLocationsClearAssociationRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "nihil": "repellat",
            "quibusdam": "sed",
            "saepe": "pariatur",
        },
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("natus"),
        Key: sdk.String("magni"),
        Name: "Angelica Stanton",
        OauthToken: sdk.String("ea"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("ea"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsCreate

Creates a new location owned by the specified account, and returns it.

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
    res, err := s.Accounts.MybusinessAccountsLocationsCreate(ctx, operations.MybusinessAccountsLocationsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        LocationInput: &shared.LocationInput{
            AdWordsLocationExtensions: &shared.AdWordsLocationExtensions{
                AdPhone: sdk.String("ab"),
            },
            AdditionalCategories: []shared.CategoryInput{
                shared.CategoryInput{
                    CategoryID: sdk.String("quidem"),
                    DisplayName: sdk.String("ipsam"),
                },
                shared.CategoryInput{
                    CategoryID: sdk.String("voluptate"),
                    DisplayName: sdk.String("autem"),
                },
                shared.CategoryInput{
                    CategoryID: sdk.String("nam"),
                    DisplayName: sdk.String("eaque"),
                },
                shared.CategoryInput{
                    CategoryID: sdk.String("pariatur"),
                    DisplayName: sdk.String("nemo"),
                },
            },
            AdditionalPhones: []string{
                "perferendis",
                "fugiat",
                "amet",
                "aut",
            },
            Address: &shared.PostalAddress{
                AddressLines: []string{
                    "corporis",
                    "hic",
                    "libero",
                    "nobis",
                },
                AdministrativeArea: sdk.String("dolores"),
                LanguageCode: sdk.String("quis"),
                Locality: sdk.String("totam"),
                Organization: sdk.String("dignissimos"),
                PostalCode: sdk.String("31101"),
                Recipients: []string{
                    "quam",
                    "dolor",
                    "vero",
                    "nostrum",
                },
                RegionCode: sdk.String("hic"),
                Revision: sdk.Int(928082),
                SortingCode: sdk.String("omnis"),
                Sublocality: sdk.String("facilis"),
            },
            Attributes: []shared.Attribute{
                shared.Attribute{
                    AttributeID: sdk.String("voluptatem"),
                    RepeatedEnumValue: &shared.RepeatedEnumAttributeValue{
                        SetValues: []string{
                            "consequuntur",
                            "blanditiis",
                            "error",
                            "eaque",
                        },
                        UnsetValues: []string{
                            "rerum",
                            "adipisci",
                            "asperiores",
                        },
                    },
                    URLValues: []shared.URLAttributeValue{
                        shared.URLAttributeValue{
                            URL: sdk.String("modi"),
                        },
                        shared.URLAttributeValue{
                            URL: sdk.String("iste"),
                        },
                        shared.URLAttributeValue{
                            URL: sdk.String("dolorum"),
                        },
                        shared.URLAttributeValue{
                            URL: sdk.String("deleniti"),
                        },
                    },
                    ValueType: shared.AttributeValueTypeEnumRepeatedEnum.ToPointer(),
                    Values: []interface{}{
                        "nobis",
                        "libero",
                        "delectus",
                    },
                },
                shared.Attribute{
                    AttributeID: sdk.String("quaerat"),
                    RepeatedEnumValue: &shared.RepeatedEnumAttributeValue{
                        SetValues: []string{
                            "aliquid",
                            "dolorem",
                            "dolorem",
                        },
                        UnsetValues: []string{
                            "qui",
                        },
                    },
                    URLValues: []shared.URLAttributeValue{
                        shared.URLAttributeValue{
                            URL: sdk.String("hic"),
                        },
                    },
                    ValueType: shared.AttributeValueTypeEnumEnum.ToPointer(),
                    Values: []interface{}{
                        "voluptate",
                        "dignissimos",
                        "reiciendis",
                    },
                },
                shared.Attribute{
                    AttributeID: sdk.String("amet"),
                    RepeatedEnumValue: &shared.RepeatedEnumAttributeValue{
                        SetValues: []string{
                            "numquam",
                            "veritatis",
                            "ipsa",
                        },
                        UnsetValues: []string{
                            "iure",
                        },
                    },
                    URLValues: []shared.URLAttributeValue{
                        shared.URLAttributeValue{
                            URL: sdk.String("quaerat"),
                        },
                        shared.URLAttributeValue{
                            URL: sdk.String("accusamus"),
                        },
                    },
                    ValueType: shared.AttributeValueTypeEnumURL.ToPointer(),
                    Values: []interface{}{
                        "voluptas",
                        "natus",
                        "eos",
                        "atque",
                    },
                },
            },
            Labels: []string{
                "fugiat",
            },
            LanguageCode: sdk.String("ab"),
            Latlng: &shared.LatLng{
                Latitude: sdk.Float64(7438.35),
                Longitude: sdk.Float64(6793.93),
            },
            LocationKey: &shared.LocationKey{
                ExplicitNoPlaceID: sdk.Bool(false),
                PlaceID: sdk.String("iusto"),
                PlusPageID: sdk.String("voluptate"),
                RequestID: sdk.String("dolorum"),
            },
            LocationName: sdk.String("deleniti"),
            LocationState: &shared.LocationStateInput{
                CanDelete: sdk.Bool(false),
                CanUpdate: sdk.Bool(false),
                HasPendingEdits: sdk.Bool(false),
                HasPendingVerification: sdk.Bool(false),
                IsDisabled: sdk.Bool(false),
                IsDisconnected: sdk.Bool(false),
                IsDuplicate: sdk.Bool(false),
                IsGoogleUpdated: sdk.Bool(false),
                IsLocalPostAPIDisabled: sdk.Bool(false),
                IsPendingReview: sdk.Bool(false),
                IsPublished: sdk.Bool(false),
                IsSuspended: sdk.Bool(false),
                IsVerified: sdk.Bool(false),
                NeedsReverification: sdk.Bool(false),
            },
            Metadata: &shared.Metadata{
                Duplicate: &shared.Duplicate{
                    Access: shared.DuplicateAccessEnumAllowed.ToPointer(),
                    LocationName: sdk.String("necessitatibus"),
                    PlaceID: sdk.String("distinctio"),
                },
                MapsURL: sdk.String("asperiores"),
                NewReviewURL: sdk.String("nihil"),
            },
            MoreHours: []shared.MoreHours{
                shared.MoreHours{
                    HoursTypeID: sdk.String("voluptate"),
                    Periods: []shared.TimePeriod{
                        shared.TimePeriod{
                            CloseDay: shared.TimePeriodCloseDayEnumSunday.ToPointer(),
                            CloseTime: sdk.String("eius"),
                            OpenDay: shared.TimePeriodOpenDayEnumMonday.ToPointer(),
                            OpenTime: sdk.String("perferendis"),
                        },
                        shared.TimePeriod{
                            CloseDay: shared.TimePeriodCloseDayEnumMonday.ToPointer(),
                            CloseTime: sdk.String("optio"),
                            OpenDay: shared.TimePeriodOpenDayEnumSunday.ToPointer(),
                            OpenTime: sdk.String("ad"),
                        },
                        shared.TimePeriod{
                            CloseDay: shared.TimePeriodCloseDayEnumSunday.ToPointer(),
                            CloseTime: sdk.String("suscipit"),
                            OpenDay: shared.TimePeriodOpenDayEnumFriday.ToPointer(),
                            OpenTime: sdk.String("provident"),
                        },
                    },
                },
            },
            Name: sdk.String("Kari Leannon PhD"),
            OpenInfo: &shared.OpenInfo{
                CanReopen: sdk.Bool(false),
                OpeningDate: &shared.Date{
                    Day: sdk.Int(311860),
                    Month: sdk.Int(273542),
                    Year: sdk.Int(425451),
                },
                Status: shared.OpenInfoStatusEnumClosedTemporarily.ToPointer(),
            },
            PriceLists: []shared.PriceList{
                shared.PriceList{
                    Labels: []shared.Label{
                        shared.Label{
                            Description: sdk.String("dolorum"),
                            DisplayName: sdk.String("a"),
                            LanguageCode: sdk.String("esse"),
                        },
                    },
                    PriceListID: sdk.String("harum"),
                    Sections: []shared.Section{
                        shared.Section{
                            Items: []shared.Item{
                                shared.Item{
                                    ItemID: sdk.String("quisquam"),
                                    Labels: []shared.Label{
                                        shared.Label{
                                            Description: sdk.String("amet"),
                                            DisplayName: sdk.String("tempore"),
                                            LanguageCode: sdk.String("accusamus"),
                                        },
                                        shared.Label{
                                            Description: sdk.String("numquam"),
                                            DisplayName: sdk.String("enim"),
                                            LanguageCode: sdk.String("dolorem"),
                                        },
                                        shared.Label{
                                            Description: sdk.String("sapiente"),
                                            DisplayName: sdk.String("totam"),
                                            LanguageCode: sdk.String("nihil"),
                                        },
                                        shared.Label{
                                            Description: sdk.String("sit"),
                                            DisplayName: sdk.String("expedita"),
                                            LanguageCode: sdk.String("neque"),
                                        },
                                    },
                                    Price: &shared.Money{
                                        CurrencyCode: sdk.String("sed"),
                                        Nanos: sdk.Int(424685),
                                        Units: sdk.String("libero"),
                                    },
                                },
                            },
                            Labels: []shared.Label{
                                shared.Label{
                                    Description: sdk.String("deserunt"),
                                    DisplayName: sdk.String("quam"),
                                    LanguageCode: sdk.String("ipsum"),
                                },
                                shared.Label{
                                    Description: sdk.String("incidunt"),
                                    DisplayName: sdk.String("qui"),
                                    LanguageCode: sdk.String("cupiditate"),
                                },
                            },
                            SectionID: sdk.String("maxime"),
                            SectionType: shared.SectionSectionTypeEnumServices.ToPointer(),
                        },
                        shared.Section{
                            Items: []shared.Item{
                                shared.Item{
                                    ItemID: sdk.String("dicta"),
                                    Labels: []shared.Label{
                                        shared.Label{
                                            Description: sdk.String("totam"),
                                            DisplayName: sdk.String("incidunt"),
                                            LanguageCode: sdk.String("aspernatur"),
                                        },
                                        shared.Label{
                                            Description: sdk.String("dolores"),
                                            DisplayName: sdk.String("distinctio"),
                                            LanguageCode: sdk.String("facilis"),
                                        },
                                        shared.Label{
                                            Description: sdk.String("aliquid"),
                                            DisplayName: sdk.String("quam"),
                                            LanguageCode: sdk.String("molestias"),
                                        },
                                    },
                                    Price: &shared.Money{
                                        CurrencyCode: sdk.String("temporibus"),
                                        Nanos: sdk.Int(183280),
                                        Units: sdk.String("neque"),
                                    },
                                },
                                shared.Item{
                                    ItemID: sdk.String("fugit"),
                                    Labels: []shared.Label{
                                        shared.Label{
                                            Description: sdk.String("odio"),
                                            DisplayName: sdk.String("sunt"),
                                            LanguageCode: sdk.String("ullam"),
                                        },
                                    },
                                    Price: &shared.Money{
                                        CurrencyCode: sdk.String("nam"),
                                        Nanos: sdk.Int(940432),
                                        Units: sdk.String("voluptatem"),
                                    },
                                },
                                shared.Item{
                                    ItemID: sdk.String("cumque"),
                                    Labels: []shared.Label{
                                        shared.Label{
                                            Description: sdk.String("nobis"),
                                            DisplayName: sdk.String("et"),
                                            LanguageCode: sdk.String("saepe"),
                                        },
                                        shared.Label{
                                            Description: sdk.String("ipsum"),
                                            DisplayName: sdk.String("veritatis"),
                                            LanguageCode: sdk.String("nobis"),
                                        },
                                        shared.Label{
                                            Description: sdk.String("quos"),
                                            DisplayName: sdk.String("tempore"),
                                            LanguageCode: sdk.String("cupiditate"),
                                        },
                                    },
                                    Price: &shared.Money{
                                        CurrencyCode: sdk.String("aperiam"),
                                        Nanos: sdk.Int(961937),
                                        Units: sdk.String("dolorem"),
                                    },
                                },
                            },
                            Labels: []shared.Label{
                                shared.Label{
                                    Description: sdk.String("labore"),
                                    DisplayName: sdk.String("adipisci"),
                                    LanguageCode: sdk.String("dolorum"),
                                },
                                shared.Label{
                                    Description: sdk.String("architecto"),
                                    DisplayName: sdk.String("quae"),
                                    LanguageCode: sdk.String("aut"),
                                },
                            },
                            SectionID: sdk.String("quas"),
                            SectionType: shared.SectionSectionTypeEnumServices.ToPointer(),
                        },
                    },
                    SourceURL: sdk.String("consequatur"),
                },
                shared.PriceList{
                    Labels: []shared.Label{
                        shared.Label{
                            Description: sdk.String("repellendus"),
                            DisplayName: sdk.String("porro"),
                            LanguageCode: sdk.String("doloribus"),
                        },
                        shared.Label{
                            Description: sdk.String("ut"),
                            DisplayName: sdk.String("facilis"),
                            LanguageCode: sdk.String("cupiditate"),
                        },
                        shared.Label{
                            Description: sdk.String("qui"),
                            DisplayName: sdk.String("quae"),
                            LanguageCode: sdk.String("laudantium"),
                        },
                    },
                    PriceListID: sdk.String("odio"),
                    Sections: []shared.Section{
                        shared.Section{
                            Items: []shared.Item{
                                shared.Item{
                                    ItemID: sdk.String("quisquam"),
                                    Labels: []shared.Label{
                                        shared.Label{
                                            Description: sdk.String("omnis"),
                                            DisplayName: sdk.String("quis"),
                                            LanguageCode: sdk.String("ipsum"),
                                        },
                                        shared.Label{
                                            Description: sdk.String("delectus"),
                                            DisplayName: sdk.String("voluptate"),
                                            LanguageCode: sdk.String("consectetur"),
                                        },
                                        shared.Label{
                                            Description: sdk.String("vero"),
                                            DisplayName: sdk.String("tenetur"),
                                            LanguageCode: sdk.String("dignissimos"),
                                        },
                                        shared.Label{
                                            Description: sdk.String("hic"),
                                            DisplayName: sdk.String("distinctio"),
                                            LanguageCode: sdk.String("quod"),
                                        },
                                    },
                                    Price: &shared.Money{
                                        CurrencyCode: sdk.String("odio"),
                                        Nanos: sdk.Int(630448),
                                        Units: sdk.String("facilis"),
                                    },
                                },
                                shared.Item{
                                    ItemID: sdk.String("vero"),
                                    Labels: []shared.Label{
                                        shared.Label{
                                            Description: sdk.String("dolore"),
                                            DisplayName: sdk.String("quibusdam"),
                                            LanguageCode: sdk.String("illum"),
                                        },
                                        shared.Label{
                                            Description: sdk.String("sequi"),
                                            DisplayName: sdk.String("natus"),
                                            LanguageCode: sdk.String("impedit"),
                                        },
                                    },
                                    Price: &shared.Money{
                                        CurrencyCode: sdk.String("aut"),
                                        Nanos: sdk.Int(974259),
                                        Units: sdk.String("exercitationem"),
                                    },
                                },
                                shared.Item{
                                    ItemID: sdk.String("nulla"),
                                    Labels: []shared.Label{
                                        shared.Label{
                                            Description: sdk.String("porro"),
                                            DisplayName: sdk.String("maiores"),
                                            LanguageCode: sdk.String("doloribus"),
                                        },
                                    },
                                    Price: &shared.Money{
                                        CurrencyCode: sdk.String("iusto"),
                                        Nanos: sdk.Int(753570),
                                        Units: sdk.String("ducimus"),
                                    },
                                },
                                shared.Item{
                                    ItemID: sdk.String("alias"),
                                    Labels: []shared.Label{
                                        shared.Label{
                                            Description: sdk.String("tempora"),
                                            DisplayName: sdk.String("ipsam"),
                                            LanguageCode: sdk.String("ea"),
                                        },
                                        shared.Label{
                                            Description: sdk.String("aspernatur"),
                                            DisplayName: sdk.String("vel"),
                                            LanguageCode: sdk.String("possimus"),
                                        },
                                        shared.Label{
                                            Description: sdk.String("magnam"),
                                            DisplayName: sdk.String("ratione"),
                                            LanguageCode: sdk.String("ex"),
                                        },
                                    },
                                    Price: &shared.Money{
                                        CurrencyCode: sdk.String("laudantium"),
                                        Nanos: sdk.Int(120657),
                                        Units: sdk.String("dolor"),
                                    },
                                },
                            },
                            Labels: []shared.Label{
                                shared.Label{
                                    Description: sdk.String("quasi"),
                                    DisplayName: sdk.String("ex"),
                                    LanguageCode: sdk.String("nulla"),
                                },
                                shared.Label{
                                    Description: sdk.String("excepturi"),
                                    DisplayName: sdk.String("voluptatibus"),
                                    LanguageCode: sdk.String("nostrum"),
                                },
                                shared.Label{
                                    Description: sdk.String("sapiente"),
                                    DisplayName: sdk.String("quisquam"),
                                    LanguageCode: sdk.String("saepe"),
                                },
                                shared.Label{
                                    Description: sdk.String("ea"),
                                    DisplayName: sdk.String("impedit"),
                                    LanguageCode: sdk.String("corporis"),
                                },
                            },
                            SectionID: sdk.String("veniam"),
                            SectionType: shared.SectionSectionTypeEnumFood.ToPointer(),
                        },
                        shared.Section{
                            Items: []shared.Item{
                                shared.Item{
                                    ItemID: sdk.String("magnam"),
                                    Labels: []shared.Label{
                                        shared.Label{
                                            Description: sdk.String("quo"),
                                            DisplayName: sdk.String("consectetur"),
                                            LanguageCode: sdk.String("recusandae"),
                                        },
                                        shared.Label{
                                            Description: sdk.String("aspernatur"),
                                            DisplayName: sdk.String("minima"),
                                            LanguageCode: sdk.String("eaque"),
                                        },
                                    },
                                    Price: &shared.Money{
                                        CurrencyCode: sdk.String("a"),
                                        Nanos: sdk.Int(725595),
                                        Units: sdk.String("aut"),
                                    },
                                },
                            },
                            Labels: []shared.Label{
                                shared.Label{
                                    Description: sdk.String("deleniti"),
                                    DisplayName: sdk.String("impedit"),
                                    LanguageCode: sdk.String("aliquam"),
                                },
                            },
                            SectionID: sdk.String("fugit"),
                            SectionType: shared.SectionSectionTypeEnumServices.ToPointer(),
                        },
                        shared.Section{
                            Items: []shared.Item{
                                shared.Item{
                                    ItemID: sdk.String("non"),
                                    Labels: []shared.Label{
                                        shared.Label{
                                            Description: sdk.String("dolorum"),
                                            DisplayName: sdk.String("laborum"),
                                            LanguageCode: sdk.String("placeat"),
                                        },
                                    },
                                    Price: &shared.Money{
                                        CurrencyCode: sdk.String("velit"),
                                        Nanos: sdk.Int(432148),
                                        Units: sdk.String("autem"),
                                    },
                                },
                            },
                            Labels: []shared.Label{
                                shared.Label{
                                    Description: sdk.String("quas"),
                                    DisplayName: sdk.String("assumenda"),
                                    LanguageCode: sdk.String("nulla"),
                                },
                                shared.Label{
                                    Description: sdk.String("voluptas"),
                                    DisplayName: sdk.String("libero"),
                                    LanguageCode: sdk.String("quasi"),
                                },
                                shared.Label{
                                    Description: sdk.String("tempora"),
                                    DisplayName: sdk.String("numquam"),
                                    LanguageCode: sdk.String("explicabo"),
                                },
                                shared.Label{
                                    Description: sdk.String("provident"),
                                    DisplayName: sdk.String("ipsa"),
                                    LanguageCode: sdk.String("molestiae"),
                                },
                            },
                            SectionID: sdk.String("magnam"),
                            SectionType: shared.SectionSectionTypeEnumFood.ToPointer(),
                        },
                    },
                    SourceURL: sdk.String("eius"),
                },
                shared.PriceList{
                    Labels: []shared.Label{
                        shared.Label{
                            Description: sdk.String("esse"),
                            DisplayName: sdk.String("rem"),
                            LanguageCode: sdk.String("fuga"),
                        },
                        shared.Label{
                            Description: sdk.String("reprehenderit"),
                            DisplayName: sdk.String("quidem"),
                            LanguageCode: sdk.String("fugiat"),
                        },
                    },
                    PriceListID: sdk.String("ut"),
                    Sections: []shared.Section{
                        shared.Section{
                            Items: []shared.Item{
                                shared.Item{
                                    ItemID: sdk.String("assumenda"),
                                    Labels: []shared.Label{
                                        shared.Label{
                                            Description: sdk.String("praesentium"),
                                            DisplayName: sdk.String("quisquam"),
                                            LanguageCode: sdk.String("veritatis"),
                                        },
                                    },
                                    Price: &shared.Money{
                                        CurrencyCode: sdk.String("ipsa"),
                                        Nanos: sdk.Int(660040),
                                        Units: sdk.String("quidem"),
                                    },
                                },
                                shared.Item{
                                    ItemID: sdk.String("neque"),
                                    Labels: []shared.Label{
                                        shared.Label{
                                            Description: sdk.String("illum"),
                                            DisplayName: sdk.String("quo"),
                                            LanguageCode: sdk.String("fuga"),
                                        },
                                        shared.Label{
                                            Description: sdk.String("eius"),
                                            DisplayName: sdk.String("eos"),
                                            LanguageCode: sdk.String("voluptas"),
                                        },
                                        shared.Label{
                                            Description: sdk.String("ab"),
                                            DisplayName: sdk.String("cupiditate"),
                                            LanguageCode: sdk.String("consequatur"),
                                        },
                                        shared.Label{
                                            Description: sdk.String("tempora"),
                                            DisplayName: sdk.String("debitis"),
                                            LanguageCode: sdk.String("ipsam"),
                                        },
                                    },
                                    Price: &shared.Money{
                                        CurrencyCode: sdk.String("aspernatur"),
                                        Nanos: sdk.Int(197054),
                                        Units: sdk.String("quo"),
                                    },
                                },
                            },
                            Labels: []shared.Label{
                                shared.Label{
                                    Description: sdk.String("recusandae"),
                                    DisplayName: sdk.String("aperiam"),
                                    LanguageCode: sdk.String("distinctio"),
                                },
                                shared.Label{
                                    Description: sdk.String("quod"),
                                    DisplayName: sdk.String("dignissimos"),
                                    LanguageCode: sdk.String("inventore"),
                                },
                            },
                            SectionID: sdk.String("nihil"),
                            SectionType: shared.SectionSectionTypeEnumFood.ToPointer(),
                        },
                        shared.Section{
                            Items: []shared.Item{
                                shared.Item{
                                    ItemID: sdk.String("aliquam"),
                                    Labels: []shared.Label{
                                        shared.Label{
                                            Description: sdk.String("occaecati"),
                                            DisplayName: sdk.String("commodi"),
                                            LanguageCode: sdk.String("sapiente"),
                                        },
                                        shared.Label{
                                            Description: sdk.String("dolores"),
                                            DisplayName: sdk.String("deserunt"),
                                            LanguageCode: sdk.String("molestiae"),
                                        },
                                    },
                                    Price: &shared.Money{
                                        CurrencyCode: sdk.String("accusantium"),
                                        Nanos: sdk.Int(783648),
                                        Units: sdk.String("eum"),
                                    },
                                },
                                shared.Item{
                                    ItemID: sdk.String("quas"),
                                    Labels: []shared.Label{
                                        shared.Label{
                                            Description: sdk.String("consequuntur"),
                                            DisplayName: sdk.String("deleniti"),
                                            LanguageCode: sdk.String("fugit"),
                                        },
                                        shared.Label{
                                            Description: sdk.String("fuga"),
                                            DisplayName: sdk.String("mollitia"),
                                            LanguageCode: sdk.String("incidunt"),
                                        },
                                        shared.Label{
                                            Description: sdk.String("atque"),
                                            DisplayName: sdk.String("explicabo"),
                                            LanguageCode: sdk.String("minima"),
                                        },
                                    },
                                    Price: &shared.Money{
                                        CurrencyCode: sdk.String("nisi"),
                                        Nanos: sdk.Int(147014),
                                        Units: sdk.String("sapiente"),
                                    },
                                },
                                shared.Item{
                                    ItemID: sdk.String("consequuntur"),
                                    Labels: []shared.Label{
                                        shared.Label{
                                            Description: sdk.String("explicabo"),
                                            DisplayName: sdk.String("saepe"),
                                            LanguageCode: sdk.String("occaecati"),
                                        },
                                    },
                                    Price: &shared.Money{
                                        CurrencyCode: sdk.String("atque"),
                                        Nanos: sdk.Int(92260),
                                        Units: sdk.String("esse"),
                                    },
                                },
                                shared.Item{
                                    ItemID: sdk.String("eveniet"),
                                    Labels: []shared.Label{
                                        shared.Label{
                                            Description: sdk.String("veritatis"),
                                            DisplayName: sdk.String("esse"),
                                            LanguageCode: sdk.String("quod"),
                                        },
                                        shared.Label{
                                            Description: sdk.String("nam"),
                                            DisplayName: sdk.String("vero"),
                                            LanguageCode: sdk.String("aliquid"),
                                        },
                                        shared.Label{
                                            Description: sdk.String("quasi"),
                                            DisplayName: sdk.String("saepe"),
                                            LanguageCode: sdk.String("vel"),
                                        },
                                        shared.Label{
                                            Description: sdk.String("harum"),
                                            DisplayName: sdk.String("molestiae"),
                                            LanguageCode: sdk.String("rerum"),
                                        },
                                    },
                                    Price: &shared.Money{
                                        CurrencyCode: sdk.String("occaecati"),
                                        Nanos: sdk.Int(327720),
                                        Units: sdk.String("distinctio"),
                                    },
                                },
                            },
                            Labels: []shared.Label{
                                shared.Label{
                                    Description: sdk.String("sit"),
                                    DisplayName: sdk.String("culpa"),
                                    LanguageCode: sdk.String("tempore"),
                                },
                                shared.Label{
                                    Description: sdk.String("adipisci"),
                                    DisplayName: sdk.String("cumque"),
                                    LanguageCode: sdk.String("consequuntur"),
                                },
                                shared.Label{
                                    Description: sdk.String("consequatur"),
                                    DisplayName: sdk.String("minus"),
                                    LanguageCode: sdk.String("quaerat"),
                                },
                                shared.Label{
                                    Description: sdk.String("sapiente"),
                                    DisplayName: sdk.String("consectetur"),
                                    LanguageCode: sdk.String("esse"),
                                },
                            },
                            SectionID: sdk.String("blanditiis"),
                            SectionType: shared.SectionSectionTypeEnumFood.ToPointer(),
                        },
                    },
                    SourceURL: sdk.String("a"),
                },
                shared.PriceList{
                    Labels: []shared.Label{
                        shared.Label{
                            Description: sdk.String("quas"),
                            DisplayName: sdk.String("esse"),
                            LanguageCode: sdk.String("quasi"),
                        },
                        shared.Label{
                            Description: sdk.String("a"),
                            DisplayName: sdk.String("error"),
                            LanguageCode: sdk.String("sint"),
                        },
                        shared.Label{
                            Description: sdk.String("pariatur"),
                            DisplayName: sdk.String("possimus"),
                            LanguageCode: sdk.String("quia"),
                        },
                        shared.Label{
                            Description: sdk.String("eveniet"),
                            DisplayName: sdk.String("asperiores"),
                            LanguageCode: sdk.String("facere"),
                        },
                    },
                    PriceListID: sdk.String("veritatis"),
                    Sections: []shared.Section{
                        shared.Section{
                            Items: []shared.Item{
                                shared.Item{
                                    ItemID: sdk.String("similique"),
                                    Labels: []shared.Label{
                                        shared.Label{
                                            Description: sdk.String("aliquid"),
                                            DisplayName: sdk.String("tenetur"),
                                            LanguageCode: sdk.String("quae"),
                                        },
                                        shared.Label{
                                            Description: sdk.String("earum"),
                                            DisplayName: sdk.String("vel"),
                                            LanguageCode: sdk.String("in"),
                                        },
                                        shared.Label{
                                            Description: sdk.String("eius"),
                                            DisplayName: sdk.String("libero"),
                                            LanguageCode: sdk.String("illum"),
                                        },
                                    },
                                    Price: &shared.Money{
                                        CurrencyCode: sdk.String("soluta"),
                                        Nanos: sdk.Int(33304),
                                        Units: sdk.String("aliquam"),
                                    },
                                },
                            },
                            Labels: []shared.Label{
                                shared.Label{
                                    Description: sdk.String("dicta"),
                                    DisplayName: sdk.String("ullam"),
                                    LanguageCode: sdk.String("reprehenderit"),
                                },
                                shared.Label{
                                    Description: sdk.String("ullam"),
                                    DisplayName: sdk.String("nisi"),
                                    LanguageCode: sdk.String("aut"),
                                },
                                shared.Label{
                                    Description: sdk.String("voluptatum"),
                                    DisplayName: sdk.String("qui"),
                                    LanguageCode: sdk.String("quibusdam"),
                                },
                                shared.Label{
                                    Description: sdk.String("ex"),
                                    DisplayName: sdk.String("deleniti"),
                                    LanguageCode: sdk.String("itaque"),
                                },
                            },
                            SectionID: sdk.String("dolorum"),
                            SectionType: shared.SectionSectionTypeEnumSectionTypeUnspecified.ToPointer(),
                        },
                    },
                    SourceURL: sdk.String("omnis"),
                },
            },
            PrimaryCategory: &shared.CategoryInput{
                CategoryID: sdk.String("tenetur"),
                DisplayName: sdk.String("quasi"),
            },
            PrimaryPhone: sdk.String("at"),
            Profile: &shared.Profile{
                Description: sdk.String("et"),
            },
            RegularHours: &shared.BusinessHours{
                Periods: []shared.TimePeriod{
                    shared.TimePeriod{
                        CloseDay: shared.TimePeriodCloseDayEnumDayOfWeekUnspecified.ToPointer(),
                        CloseTime: sdk.String("minima"),
                        OpenDay: shared.TimePeriodOpenDayEnumDayOfWeekUnspecified.ToPointer(),
                        OpenTime: sdk.String("consectetur"),
                    },
                    shared.TimePeriod{
                        CloseDay: shared.TimePeriodCloseDayEnumMonday.ToPointer(),
                        CloseTime: sdk.String("iste"),
                        OpenDay: shared.TimePeriodOpenDayEnumSaturday.ToPointer(),
                        OpenTime: sdk.String("accusantium"),
                    },
                },
            },
            RelationshipData: &shared.RelationshipData{
                ParentChain: sdk.String("rem"),
            },
            ServiceArea: &shared.ServiceAreaBusiness{
                BusinessType: shared.ServiceAreaBusinessBusinessTypeEnumBusinessTypeUnspecified.ToPointer(),
                Places: &shared.Places{
                    PlaceInfos: []shared.PlaceInfo{
                        shared.PlaceInfo{
                            Name: sdk.String("Iris Bernhard"),
                            PlaceID: sdk.String("voluptatem"),
                        },
                        shared.PlaceInfo{
                            Name: sdk.String("Toni Fritsch"),
                            PlaceID: sdk.String("voluptas"),
                        },
                        shared.PlaceInfo{
                            Name: sdk.String("Marian Buckridge"),
                            PlaceID: sdk.String("velit"),
                        },
                    },
                },
                Radius: &shared.PointRadius{
                    Latlng: &shared.LatLng{
                        Latitude: sdk.Float64(9742.57),
                        Longitude: sdk.Float64(3743.23),
                    },
                    RadiusKm: sdk.Float32(9903.45),
                },
            },
            SpecialHours: &shared.SpecialHours{
                SpecialHourPeriods: []shared.SpecialHourPeriod{
                    shared.SpecialHourPeriod{
                        CloseTime: sdk.String("ea"),
                        EndDate: &shared.Date{
                            Day: sdk.Int(310067),
                            Month: sdk.Int(162954),
                            Year: sdk.Int(831520),
                        },
                        IsClosed: sdk.Bool(false),
                        OpenTime: sdk.String("officia"),
                        StartDate: &shared.Date{
                            Day: sdk.Int(807023),
                            Month: sdk.Int(490305),
                            Year: sdk.Int(640024),
                        },
                    },
                },
            },
            StoreCode: sdk.String("asperiores"),
            WebsiteURL: sdk.String("nemo"),
        },
        AccessToken: sdk.String("quae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("porro"),
        Fields: sdk.String("quod"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("ab"),
        Parent: "adipisci",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fuga"),
        RequestID: sdk.String("id"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("velit"),
        ValidateOnly: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Location != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsFetchVerificationOptions

Reports all eligible verification options for a location in a specific language.

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
    res, err := s.Accounts.MybusinessAccountsLocationsFetchVerificationOptions(ctx, operations.MybusinessAccountsLocationsFetchVerificationOptionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        FetchVerificationOptionsRequest: &shared.FetchVerificationOptionsRequest{
            Context: &shared.ServiceBusinessContext{
                Address: &shared.PostalAddress{
                    AddressLines: []string{
                        "recusandae",
                        "totam",
                        "fugiat",
                    },
                    AdministrativeArea: sdk.String("vel"),
                    LanguageCode: sdk.String("ducimus"),
                    Locality: sdk.String("quos"),
                    Organization: sdk.String("vel"),
                    PostalCode: sdk.String("87744"),
                    Recipients: []string{
                        "reiciendis",
                        "assumenda",
                    },
                    RegionCode: sdk.String("nemo"),
                    Revision: sdk.Int(924967),
                    SortingCode: sdk.String("aliquid"),
                    Sublocality: sdk.String("aperiam"),
                },
            },
            LanguageCode: sdk.String("cum"),
        },
        AccessToken: sdk.String("consectetur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("exercitationem"),
        Fields: sdk.String("earum"),
        Key: sdk.String("facere"),
        Name: "Melba Homenick",
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        UploadType: sdk.String("dolore"),
        UploadProtocol: sdk.String("sunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchVerificationOptionsResponse != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsFindMatches

Finds all of the possible locations that are a match to the specified location. This operation is only valid if the location is unverified.

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
    res, err := s.Accounts.MybusinessAccountsLocationsFindMatches(ctx, operations.MybusinessAccountsLocationsFindMatchesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        FindMatchingLocationsRequest: &shared.FindMatchingLocationsRequest{
            LanguageCode: sdk.String("adipisci"),
            MaxCacheDuration: sdk.String("non"),
            NumResults: sdk.Int(228263),
        },
        AccessToken: sdk.String("beatae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("a"),
        Fields: sdk.String("debitis"),
        Key: sdk.String("consectetur"),
        Name: "Dr. Maryann Howe",
        OauthToken: sdk.String("vitae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("similique"),
        UploadProtocol: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FindMatchingLocationsResponse != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsGetGoogleUpdated

Gets the Google-updated version of the specified location. Returns `NOT_FOUND` if the location does not exist.

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
    res, err := s.Accounts.MybusinessAccountsLocationsGetGoogleUpdated(ctx, operations.MybusinessAccountsLocationsGetGoogleUpdatedRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("voluptas"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("minima"),
        Key: sdk.String("nobis"),
        Name: "Travis Schinner",
        OauthToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolore"),
        UploadType: sdk.String("aliquam"),
        UploadProtocol: sdk.String("officiis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleUpdatedLocation != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsInsuranceNetworksList

Returns a list of all insurance networks supported by Google.

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
    res, err := s.Accounts.MybusinessAccountsLocationsInsuranceNetworksList(ctx, operations.MybusinessAccountsLocationsInsuranceNetworksListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("blanditiis"),
        Key: sdk.String("quas"),
        LanguageCode: sdk.String("hic"),
        OauthToken: sdk.String("nesciunt"),
        PageSize: sdk.Int64(633998),
        PageToken: sdk.String("corrupti"),
        Parent: "pariatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("exercitationem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInsuranceNetworksResponse != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsList

Lists the locations for the specified account.

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
    res, err := s.Accounts.MybusinessAccountsLocationsList(ctx, operations.MybusinessAccountsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sed"),
        Fields: sdk.String("reiciendis"),
        Filter: sdk.String("explicabo"),
        Key: sdk.String("asperiores"),
        LanguageCode: sdk.String("facilis"),
        OauthToken: sdk.String("voluptate"),
        OrderBy: sdk.String("expedita"),
        PageSize: sdk.Int64(70869),
        PageToken: sdk.String("iste"),
        Parent: "dolore",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("sed"),
        UploadProtocol: sdk.String("in"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsLocalPostsCreate

Creates a new local post associated with the specified location, and returns it.

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
    res, err := s.Accounts.MybusinessAccountsLocationsLocalPostsCreate(ctx, operations.MybusinessAccountsLocationsLocalPostsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        LocalPost: &shared.LocalPost{
            AlertType: shared.LocalPostAlertTypeEnumCovid19.ToPointer(),
            CallToAction: &shared.CallToAction{
                ActionType: shared.CallToActionActionTypeEnumBook.ToPointer(),
                URL: sdk.String("voluptas"),
            },
            CreateTime: sdk.String("unde"),
            Event: &shared.LocalPostEvent{
                Schedule: &shared.TimeInterval{
                    EndDate: &shared.Date{
                        Day: sdk.Int(100032),
                        Month: sdk.Int(382808),
                        Year: sdk.Int(960257),
                    },
                    EndTime: &shared.TimeOfDay{
                        Hours: sdk.Int(895386),
                        Minutes: sdk.Int(72434),
                        Nanos: sdk.Int(967795),
                        Seconds: sdk.Int(19300),
                    },
                    StartDate: &shared.Date{
                        Day: sdk.Int(546885),
                        Month: sdk.Int(979574),
                        Year: sdk.Int(274823),
                    },
                    StartTime: &shared.TimeOfDay{
                        Hours: sdk.Int(148478),
                        Minutes: sdk.Int(592231),
                        Nanos: sdk.Int(258702),
                        Seconds: sdk.Int(896762),
                    },
                },
                Title: sdk.String("Mrs."),
            },
            LanguageCode: sdk.String("ea"),
            Media: []shared.MediaItem{
                shared.MediaItem{
                    Attribution: &shared.Attribution{
                        ProfileName: sdk.String("quos"),
                        ProfilePhotoURL: sdk.String("voluptatibus"),
                        ProfileURL: sdk.String("tempora"),
                        TakedownURL: sdk.String("tempora"),
                    },
                    CreateTime: sdk.String("voluptate"),
                    DataRef: &shared.MediaItemDataRef{
                        ResourceName: sdk.String("reiciendis"),
                    },
                    Description: sdk.String("ex"),
                    Dimensions: &shared.Dimensions{
                        HeightPixels: sdk.Int(25497),
                        WidthPixels: sdk.Int(248413),
                    },
                    GoogleURL: sdk.String("officiis"),
                    Insights: &shared.MediaInsights{
                        ViewCount: sdk.String("praesentium"),
                    },
                    LocationAssociation: &shared.LocationAssociation{
                        Category: shared.LocationAssociationCategoryEnumMenu.ToPointer(),
                        PriceListItemID: sdk.String("quaerat"),
                    },
                    MediaFormat: shared.MediaItemMediaFormatEnumMediaFormatUnspecified.ToPointer(),
                    Name: sdk.String("Miss Alyssa Leffler"),
                    SourceURL: sdk.String("veniam"),
                    ThumbnailURL: sdk.String("minima"),
                },
                shared.MediaItem{
                    Attribution: &shared.Attribution{
                        ProfileName: sdk.String("recusandae"),
                        ProfilePhotoURL: sdk.String("reiciendis"),
                        ProfileURL: sdk.String("nulla"),
                        TakedownURL: sdk.String("magni"),
                    },
                    CreateTime: sdk.String("aperiam"),
                    DataRef: &shared.MediaItemDataRef{
                        ResourceName: sdk.String("saepe"),
                    },
                    Description: sdk.String("numquam"),
                    Dimensions: &shared.Dimensions{
                        HeightPixels: sdk.Int(329935),
                        WidthPixels: sdk.Int(446135),
                    },
                    GoogleURL: sdk.String("officiis"),
                    Insights: &shared.MediaInsights{
                        ViewCount: sdk.String("beatae"),
                    },
                    LocationAssociation: &shared.LocationAssociation{
                        Category: shared.LocationAssociationCategoryEnumAtWork.ToPointer(),
                        PriceListItemID: sdk.String("exercitationem"),
                    },
                    MediaFormat: shared.MediaItemMediaFormatEnumPhoto.ToPointer(),
                    Name: sdk.String("Lester Parisian"),
                    SourceURL: sdk.String("hic"),
                    ThumbnailURL: sdk.String("expedita"),
                },
                shared.MediaItem{
                    Attribution: &shared.Attribution{
                        ProfileName: sdk.String("debitis"),
                        ProfilePhotoURL: sdk.String("neque"),
                        ProfileURL: sdk.String("dolorum"),
                        TakedownURL: sdk.String("nostrum"),
                    },
                    CreateTime: sdk.String("officia"),
                    DataRef: &shared.MediaItemDataRef{
                        ResourceName: sdk.String("dolorum"),
                    },
                    Description: sdk.String("corrupti"),
                    Dimensions: &shared.Dimensions{
                        HeightPixels: sdk.Int(879235),
                        WidthPixels: sdk.Int(272683),
                    },
                    GoogleURL: sdk.String("atque"),
                    Insights: &shared.MediaInsights{
                        ViewCount: sdk.String("fugit"),
                    },
                    LocationAssociation: &shared.LocationAssociation{
                        Category: shared.LocationAssociationCategoryEnumLogo.ToPointer(),
                        PriceListItemID: sdk.String("fugiat"),
                    },
                    MediaFormat: shared.MediaItemMediaFormatEnumMediaFormatUnspecified.ToPointer(),
                    Name: sdk.String("Ms. Rudolph Gusikowski"),
                    SourceURL: sdk.String("sit"),
                    ThumbnailURL: sdk.String("voluptatum"),
                },
            },
            Name: sdk.String("Ms. Lamar Hessel"),
            Offer: &shared.LocalPostOffer{
                CouponCode: sdk.String("sed"),
                RedeemOnlineURL: sdk.String("sit"),
                TermsConditions: sdk.String("vel"),
            },
            SearchURL: sdk.String("nostrum"),
            State: shared.LocalPostStateEnumProcessing.ToPointer(),
            Summary: sdk.String("error"),
            TopicType: shared.LocalPostTopicTypeEnumLocalPostTopicTypeUnspecified.ToPointer(),
            UpdateTime: sdk.String("incidunt"),
        },
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("harum"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("occaecati"),
        Parent: "labore",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("atque"),
        UploadProtocol: sdk.String("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocalPost != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsLocalPostsList

Returns a list of local posts associated with a location.

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
    res, err := s.Accounts.MybusinessAccountsLocationsLocalPostsList(ctx, operations.MybusinessAccountsLocationsLocalPostsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tenetur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("alias"),
        Fields: sdk.String("amet"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("voluptate"),
        PageSize: sdk.Int64(600392),
        PageToken: sdk.String("reiciendis"),
        Parent: "provident",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellendus"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("voluptates"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocalPostsResponse != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsLocalPostsReportInsights

Returns insights for a set of local posts associated with a single listing. Which metrics and how they are reported are options specified in the request proto. *Note:* Insight reports are limited to 100 `local_post_names` per call.

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
    res, err := s.Accounts.MybusinessAccountsLocationsLocalPostsReportInsights(ctx, operations.MybusinessAccountsLocationsLocalPostsReportInsightsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ReportLocalPostInsightsRequest: &shared.ReportLocalPostInsightsRequest{
            BasicRequest: &shared.BasicMetricsRequest{
                MetricRequests: []shared.MetricRequest{
                    shared.MetricRequest{
                        Metric: shared.MetricRequestMetricEnumPhotosViewsCustomers.ToPointer(),
                        Options: []shared.MetricRequestOptionsEnum{
                            shared.MetricRequestOptionsEnumBreakdownHourOfDay,
                            shared.MetricRequestOptionsEnumBreakdownDayOfWeek,
                        },
                    },
                    shared.MetricRequest{
                        Metric: shared.MetricRequestMetricEnumActionsPhone.ToPointer(),
                        Options: []shared.MetricRequestOptionsEnum{
                            shared.MetricRequestOptionsEnumAggregatedTotal,
                            shared.MetricRequestOptionsEnumMetricOptionUnspecified,
                            shared.MetricRequestOptionsEnumBreakdownDayOfWeek,
                        },
                    },
                    shared.MetricRequest{
                        Metric: shared.MetricRequestMetricEnumLocalPostViewsSearch.ToPointer(),
                        Options: []shared.MetricRequestOptionsEnum{
                            shared.MetricRequestOptionsEnumAggregatedDaily,
                        },
                    },
                },
                TimeRange: &shared.TimeRange{
                    EndTime: sdk.String("reprehenderit"),
                    StartTime: sdk.String("asperiores"),
                },
            },
            LocalPostNames: []string{
                "suscipit",
                "quidem",
                "maxime",
            },
        },
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("assumenda"),
        Key: sdk.String("ea"),
        Name: "Evan Torphy",
        OauthToken: sdk.String("natus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("ex"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportLocalPostInsightsResponse != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsLodgingGetGoogleUpdated

Returns the Google updated Lodging of a specific location.

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
    res, err := s.Accounts.MybusinessAccountsLocationsLodgingGetGoogleUpdated(ctx, operations.MybusinessAccountsLocationsLodgingGetGoogleUpdatedRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("corrupti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("blanditiis"),
        Key: sdk.String("suscipit"),
        Name: "Dr. Ivan Littel",
        OauthToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        ReadMask: sdk.String("reiciendis"),
        UploadType: sdk.String("doloremque"),
        UploadProtocol: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGoogleUpdatedLodgingResponse != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsMediaCreate

Creates a new media item for the location.

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
    res, err := s.Accounts.MybusinessAccountsLocationsMediaCreate(ctx, operations.MybusinessAccountsLocationsMediaCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        MediaItem: &shared.MediaItem{
            Attribution: &shared.Attribution{
                ProfileName: sdk.String("accusantium"),
                ProfilePhotoURL: sdk.String("beatae"),
                ProfileURL: sdk.String("dolores"),
                TakedownURL: sdk.String("enim"),
            },
            CreateTime: sdk.String("laboriosam"),
            DataRef: &shared.MediaItemDataRef{
                ResourceName: sdk.String("velit"),
            },
            Description: sdk.String("a"),
            Dimensions: &shared.Dimensions{
                HeightPixels: sdk.Int(562783),
                WidthPixels: sdk.Int(300029),
            },
            GoogleURL: sdk.String("saepe"),
            Insights: &shared.MediaInsights{
                ViewCount: sdk.String("consequuntur"),
            },
            LocationAssociation: &shared.LocationAssociation{
                Category: shared.LocationAssociationCategoryEnumFoodAndDrink.ToPointer(),
                PriceListItemID: sdk.String("officiis"),
            },
            MediaFormat: shared.MediaItemMediaFormatEnumPhoto.ToPointer(),
            Name: sdk.String("Sylvia Upton"),
            SourceURL: sdk.String("fugit"),
            ThumbnailURL: sdk.String("id"),
        },
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("illo"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("quidem"),
        Parent: "eveniet",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("non"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("doloremque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MediaItem != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsMediaCustomersList

Returns a list of media items associated with a location that have been contributed by customers.

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
    res, err := s.Accounts.MybusinessAccountsLocationsMediaCustomersList(ctx, operations.MybusinessAccountsLocationsMediaCustomersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quae"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("eveniet"),
        OauthToken: sdk.String("qui"),
        PageSize: sdk.Int64(739884),
        PageToken: sdk.String("iure"),
        Parent: "necessitatibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ratione"),
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("distinctio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCustomerMediaItemsResponse != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsMediaList

Returns a list of media items associated with a location.

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
    res, err := s.Accounts.MybusinessAccountsLocationsMediaList(ctx, operations.MybusinessAccountsLocationsMediaListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("rem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ad"),
        Fields: sdk.String("repellat"),
        Key: sdk.String("alias"),
        OauthToken: sdk.String("corporis"),
        PageSize: sdk.Int64(597303),
        PageToken: sdk.String("nihil"),
        Parent: "mollitia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptas"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMediaItemsResponse != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsMediaStartUpload

Generates a `MediaItemDataRef` for media item uploading.

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
    res, err := s.Accounts.MybusinessAccountsLocationsMediaStartUpload(ctx, operations.MybusinessAccountsLocationsMediaStartUploadRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "id": "minima",
        },
        AccessToken: sdk.String("dolore"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nesciunt"),
        Fields: sdk.String("quae"),
        Key: sdk.String("recusandae"),
        OauthToken: sdk.String("omnis"),
        Parent: "quaerat",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("ex"),
        UploadProtocol: sdk.String("ut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MediaItemDataRef != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsQuestionsAnswersDelete

Deletes the answer written by the current user to a question.

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
    res, err := s.Accounts.MybusinessAccountsLocationsQuestionsAnswersDelete(ctx, operations.MybusinessAccountsLocationsQuestionsAnswersDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("adipisci"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("laudantium"),
        Fields: sdk.String("eum"),
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("recusandae"),
        Parent: "esse",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsQuestionsAnswersList

Returns the paginated list of answers for a specified question.

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
    res, err := s.Accounts.MybusinessAccountsLocationsQuestionsAnswersList(ctx, operations.MybusinessAccountsLocationsQuestionsAnswersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("quasi"),
        Key: sdk.String("animi"),
        OauthToken: sdk.String("nostrum"),
        OrderBy: sdk.String("mollitia"),
        PageSize: sdk.Int64(591027),
        PageToken: sdk.String("possimus"),
        Parent: "animi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ex"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("accusantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAnswersResponse != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsQuestionsAnswersUpsert

Creates an answer or updates the existing answer written by the user for the specified question. A user can only create one answer per question.

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
    res, err := s.Accounts.MybusinessAccountsLocationsQuestionsAnswersUpsert(ctx, operations.MybusinessAccountsLocationsQuestionsAnswersUpsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        UpsertAnswerRequest: &shared.UpsertAnswerRequest{
            Answer: &shared.Answer{
                Author: &shared.Author{
                    DisplayName: sdk.String("doloribus"),
                    ProfilePhotoURL: sdk.String("ullam"),
                    Type: shared.AuthorTypeEnumRegularUser.ToPointer(),
                },
                CreateTime: sdk.String("nam"),
                Name: sdk.String("Oliver Osinski"),
                Text: sdk.String("voluptatibus"),
                UpdateTime: sdk.String("molestias"),
                UpvoteCount: sdk.Int(889794),
            },
        },
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vitae"),
        Fields: sdk.String("rerum"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("quis"),
        Parent: "inventore",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("cumque"),
        UploadProtocol: sdk.String("quae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Answer != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsQuestionsCreate

Adds a question for the specified location.

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
    res, err := s.Accounts.MybusinessAccountsLocationsQuestionsCreate(ctx, operations.MybusinessAccountsLocationsQuestionsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Question: &shared.Question{
            Author: &shared.Author{
                DisplayName: sdk.String("velit"),
                ProfilePhotoURL: sdk.String("aspernatur"),
                Type: shared.AuthorTypeEnumRegularUser.ToPointer(),
            },
            CreateTime: sdk.String("eius"),
            Name: sdk.String("Wilfred Rutherford"),
            Text: sdk.String("eum"),
            TopAnswers: []shared.Answer{
                shared.Answer{
                    Author: &shared.Author{
                        DisplayName: sdk.String("minima"),
                        ProfilePhotoURL: sdk.String("beatae"),
                        Type: shared.AuthorTypeEnumLocalGuide.ToPointer(),
                    },
                    CreateTime: sdk.String("provident"),
                    Name: sdk.String("Ed Weimann DVM"),
                    Text: sdk.String("perspiciatis"),
                    UpdateTime: sdk.String("maiores"),
                    UpvoteCount: sdk.Int(891801),
                },
            },
            TotalAnswerCount: sdk.Int(399802),
            UpdateTime: sdk.String("porro"),
            UpvoteCount: sdk.Int(380335),
        },
        AccessToken: sdk.String("dolorem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cumque"),
        Fields: sdk.String("fuga"),
        Key: sdk.String("ratione"),
        OauthToken: sdk.String("animi"),
        Parent: "necessitatibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nulla"),
        UploadType: sdk.String("consequatur"),
        UploadProtocol: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Question != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsQuestionsDelete

Deletes a specific question written by the current user.

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
    res, err := s.Accounts.MybusinessAccountsLocationsQuestionsDelete(ctx, operations.MybusinessAccountsLocationsQuestionsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ducimus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("adipisci"),
        Name: "Anne Wyman",
        OauthToken: sdk.String("ipsa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsQuestionsList

Returns the paginated list of questions and some of its answers for a specified location.

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
    res, err := s.Accounts.MybusinessAccountsLocationsQuestionsList(ctx, operations.MybusinessAccountsLocationsQuestionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AnswersPerQuestion: sdk.Int64(508390),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("reiciendis"),
        Filter: sdk.String("vel"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("fugiat"),
        OrderBy: sdk.String("doloremque"),
        PageSize: sdk.Int64(117315),
        PageToken: sdk.String("odio"),
        Parent: "tempora",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("ex"),
        UploadProtocol: sdk.String("consectetur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListQuestionsResponse != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsQuestionsPatch

Updates a specific question written by the current user.

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
    res, err := s.Accounts.MybusinessAccountsLocationsQuestionsPatch(ctx, operations.MybusinessAccountsLocationsQuestionsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Question: &shared.Question{
            Author: &shared.Author{
                DisplayName: sdk.String("ipsa"),
                ProfilePhotoURL: sdk.String("laborum"),
                Type: shared.AuthorTypeEnumAuthorTypeUnspecified.ToPointer(),
            },
            CreateTime: sdk.String("nostrum"),
            Name: sdk.String("Damon Jacobs"),
            Text: sdk.String("aliquid"),
            TopAnswers: []shared.Answer{
                shared.Answer{
                    Author: &shared.Author{
                        DisplayName: sdk.String("eum"),
                        ProfilePhotoURL: sdk.String("voluptas"),
                        Type: shared.AuthorTypeEnumLocalGuide.ToPointer(),
                    },
                    CreateTime: sdk.String("id"),
                    Name: sdk.String("Isabel Schuster"),
                    Text: sdk.String("laborum"),
                    UpdateTime: sdk.String("libero"),
                    UpvoteCount: sdk.Int(324083),
                },
            },
            TotalAnswerCount: sdk.Int(536923),
            UpdateTime: sdk.String("enim"),
            UpvoteCount: sdk.Int(110477),
        },
        AccessToken: sdk.String("repellendus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quo"),
        Fields: sdk.String("ex"),
        Key: sdk.String("ut"),
        Name: "Lula Bartell",
        OauthToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("beatae"),
        UpdateMask: sdk.String("voluptatum"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("veritatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Question != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsReportInsights

Returns a report containing insights on one or more metrics by location. *Note:* Insight reports are limited to a batch size of 10 `location_names` per call.

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
    res, err := s.Accounts.MybusinessAccountsLocationsReportInsights(ctx, operations.MybusinessAccountsLocationsReportInsightsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ReportLocationInsightsRequest: &shared.ReportLocationInsightsRequest{
            BasicRequest: &shared.BasicMetricsRequest{
                MetricRequests: []shared.MetricRequest{
                    shared.MetricRequest{
                        Metric: shared.MetricRequestMetricEnumPhotosViewsMerchant.ToPointer(),
                        Options: []shared.MetricRequestOptionsEnum{
                            shared.MetricRequestOptionsEnumBreakdownHourOfDay,
                        },
                    },
                    shared.MetricRequest{
                        Metric: shared.MetricRequestMetricEnumLocalPostViewsSearch.ToPointer(),
                        Options: []shared.MetricRequestOptionsEnum{
                            shared.MetricRequestOptionsEnumBreakdownDayOfWeek,
                        },
                    },
                    shared.MetricRequest{
                        Metric: shared.MetricRequestMetricEnumPhotosCountCustomers.ToPointer(),
                        Options: []shared.MetricRequestOptionsEnum{
                            shared.MetricRequestOptionsEnumMetricOptionUnspecified,
                            shared.MetricRequestOptionsEnumMetricOptionUnspecified,
                            shared.MetricRequestOptionsEnumAggregatedDaily,
                            shared.MetricRequestOptionsEnumBreakdownHourOfDay,
                        },
                    },
                },
                TimeRange: &shared.TimeRange{
                    EndTime: sdk.String("ex"),
                    StartTime: sdk.String("sapiente"),
                },
            },
            DrivingDirectionsRequest: &shared.DrivingDirectionMetricsRequest{
                LanguageCode: sdk.String("rem"),
                NumDays: shared.DrivingDirectionMetricsRequestNumDaysEnumNinety.ToPointer(),
            },
            LocationNames: []string{
                "asperiores",
                "ratione",
            },
        },
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("illum"),
        Fields: sdk.String("totam"),
        Key: sdk.String("impedit"),
        Name: "Alton Hintz",
        OauthToken: sdk.String("aliquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("inventore"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("veritatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportLocationInsightsResponse != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsReviewsDeleteReply

Deletes the response to the specified review. This operation is only valid if the specified location is verified.

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
    res, err := s.Accounts.MybusinessAccountsLocationsReviewsDeleteReply(ctx, operations.MybusinessAccountsLocationsReviewsDeleteReplyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("sit"),
        Key: sdk.String("modi"),
        Name: "Mrs. Rebecca Larkin",
        OauthToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("quas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsReviewsList

Returns the paginated list of reviews for the specified location. This operation is only valid if the specified location is verified.

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
    res, err := s.Accounts.MybusinessAccountsLocationsReviewsList(ctx, operations.MybusinessAccountsLocationsReviewsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("necessitatibus"),
        Key: sdk.String("sed"),
        OauthToken: sdk.String("veniam"),
        OrderBy: sdk.String("nesciunt"),
        PageSize: sdk.Int64(712927),
        PageToken: sdk.String("eum"),
        Parent: "vel",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatum"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("exercitationem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReviewsResponse != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsReviewsUpdateReply

Updates the reply to the specified review. A reply is created if one does not exist. This operation is only valid if the specified location is verified.

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
    res, err := s.Accounts.MybusinessAccountsLocationsReviewsUpdateReply(ctx, operations.MybusinessAccountsLocationsReviewsUpdateReplyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ReviewReply: &shared.ReviewReply{
            Comment: sdk.String("porro"),
            UpdateTime: sdk.String("autem"),
        },
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("voluptatem"),
        Name: "Alyssa Boyer",
        OauthToken: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("est"),
        UploadType: sdk.String("harum"),
        UploadProtocol: sdk.String("sequi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReviewReply != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsTransfer

Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account. Returns the Location with its new resource name.

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
    res, err := s.Accounts.MybusinessAccountsLocationsTransfer(ctx, operations.MybusinessAccountsLocationsTransferRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TransferLocationRequest: &shared.TransferLocationRequest{
            ToAccount: sdk.String("repudiandae"),
        },
        AccessToken: sdk.String("optio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nemo"),
        Fields: sdk.String("voluptate"),
        Key: sdk.String("blanditiis"),
        Name: "Hector Funk",
        OauthToken: sdk.String("eius"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("ducimus"),
        UploadProtocol: sdk.String("nesciunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Location != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsVerificationsComplete

Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.

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
    res, err := s.Accounts.MybusinessAccountsLocationsVerificationsComplete(ctx, operations.MybusinessAccountsLocationsVerificationsCompleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CompleteVerificationRequest: &shared.CompleteVerificationRequest{
            Pin: sdk.String("laudantium"),
        },
        AccessToken: sdk.String("incidunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("rem"),
        Fields: sdk.String("fugiat"),
        Key: sdk.String("dicta"),
        Name: "Ms. Marilyn Feest",
        OauthToken: sdk.String("soluta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("eos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompleteVerificationResponse != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsVerificationsList

List verifications of a location, ordered by create time.

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
    res, err := s.Accounts.MybusinessAccountsLocationsVerificationsList(ctx, operations.MybusinessAccountsLocationsVerificationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iste"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("inventore"),
        Fields: sdk.String("fuga"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("voluptatibus"),
        PageSize: sdk.Int64(719620),
        PageToken: sdk.String("omnis"),
        Parent: "delectus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("maxime"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVerificationsResponse != nil {
        // handle response
    }
}
```

## MybusinessAccountsLocationsVerify

Starts the verification process for a location.

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
    res, err := s.Accounts.MybusinessAccountsLocationsVerify(ctx, operations.MybusinessAccountsLocationsVerifyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        VerifyLocationRequest: &shared.VerifyLocationRequest{
            AddressInput: &shared.AddressInput{
                MailerContactName: sdk.String("temporibus"),
            },
            Context: &shared.ServiceBusinessContext{
                Address: &shared.PostalAddress{
                    AddressLines: []string{
                        "commodi",
                        "itaque",
                        "commodi",
                    },
                    AdministrativeArea: sdk.String("totam"),
                    LanguageCode: sdk.String("earum"),
                    Locality: sdk.String("modi"),
                    Organization: sdk.String("nam"),
                    PostalCode: sdk.String("03400-2935"),
                    Recipients: []string{
                        "deserunt",
                        "esse",
                        "nemo",
                        "reprehenderit",
                    },
                    RegionCode: sdk.String("est"),
                    Revision: sdk.Int(336102),
                    SortingCode: sdk.String("sint"),
                    Sublocality: sdk.String("accusamus"),
                },
            },
            EmailInput: &shared.EmailInput{
                EmailAddress: sdk.String("impedit"),
            },
            LanguageCode: sdk.String("hic"),
            Method: shared.VerifyLocationRequestMethodEnumAuto.ToPointer(),
            PhoneInput: &shared.PhoneInput{
                PhoneNumber: sdk.String("asperiores"),
            },
        },
        AccessToken: sdk.String("ex"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("delectus"),
        Key: sdk.String("quae"),
        Name: "Grant Padberg",
        OauthToken: sdk.String("atque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("magni"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyLocationResponse != nil {
        // handle response
    }
}
```

## MybusinessAccountsUpdateNotifications

Sets the pubsub notification settings for the account informing Business Profile which topic to send pubsub notifications for: - New reviews for locations administered by the account. - Updated reviews for locations administered by the account. - New `GoogleUpdates` for locations administered by the account. An account will only have one notification settings resource, and only one pubsub topic can be set.

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
    res, err := s.Accounts.MybusinessAccountsUpdateNotifications(ctx, operations.MybusinessAccountsUpdateNotificationsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Notifications: &shared.Notifications{
            Name: sdk.String("Alton Grimes"),
            NotificationTypes: []shared.NotificationsNotificationTypesEnum{
                shared.NotificationsNotificationTypesEnumNewCustomerMedia,
            },
            TopicName: sdk.String("neque"),
        },
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("iure"),
        Key: sdk.String("odit"),
        Name: "Cecil Gutkowski DDS",
        OauthToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("quia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Notifications != nil {
        // handle response
    }
}
```
