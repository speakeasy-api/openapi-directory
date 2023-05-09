# Customers

### Available Operations

* [CloudidentityCustomersUserinvitationsCancel](#cloudidentitycustomersuserinvitationscancel) - Cancels a UserInvitation that was already sent.
* [CloudidentityCustomersUserinvitationsIsInvitableUser](#cloudidentitycustomersuserinvitationsisinvitableuser) - Verifies whether a user account is eligible to receive a UserInvitation (is an unmanaged account). Eligibility is based on the following criteria: * the email address is a consumer account and it's the primary email address of the account, and * the domain of the email address matches an existing verified Google Workspace or Cloud Identity domain If both conditions are met, the user is eligible. **Note:** This method is not supported for Workspace Essentials customers.
* [CloudidentityCustomersUserinvitationsList](#cloudidentitycustomersuserinvitationslist) - Retrieves a list of UserInvitation resources. **Note:** New consumer accounts with the customer's verified domain created within the previous 48 hours will not appear in the result. This delay also applies to newly-verified domains.
* [CloudidentityCustomersUserinvitationsSend](#cloudidentitycustomersuserinvitationssend) - Sends a UserInvitation to email. If the `UserInvitation` does not exist for this request and it is a valid request, the request creates a `UserInvitation`. **Note:** The `get` and `list` methods have a 48-hour delay where newly-created consumer accounts will not appear in the results. You can still send a `UserInvitation` to those accounts if you know the unmanaged email address and IsInvitableUser==True.

## CloudidentityCustomersUserinvitationsCancel

Cancels a UserInvitation that was already sent.

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
    res, err := s.Customers.CloudidentityCustomersUserinvitationsCancel(ctx, operations.CloudidentityCustomersUserinvitationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "excepturi": "nisi",
            "recusandae": "temporibus",
        },
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("perferendis"),
        Name: "Estelle Will",
        OauthToken: sdk.String("at"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## CloudidentityCustomersUserinvitationsIsInvitableUser

Verifies whether a user account is eligible to receive a UserInvitation (is an unmanaged account). Eligibility is based on the following criteria: * the email address is a consumer account and it's the primary email address of the account, and * the domain of the email address matches an existing verified Google Workspace or Cloud Identity domain If both conditions are met, the user is eligible. **Note:** This method is not supported for Workspace Essentials customers.

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
    res, err := s.Customers.CloudidentityCustomersUserinvitationsIsInvitableUser(ctx, operations.CloudidentityCustomersUserinvitationsIsInvitableUserRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("porro"),
        Key: sdk.String("dolorum"),
        Name: "Antoinette Nikolaus",
        OauthToken: sdk.String("deleniti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("optio"),
        UploadProtocol: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IsInvitableUserResponse != nil {
        // handle response
    }
}
```

## CloudidentityCustomersUserinvitationsList

Retrieves a list of UserInvitation resources. **Note:** New consumer accounts with the customer's verified domain created within the previous 48 hours will not appear in the result. This delay also applies to newly-verified domains.

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
    res, err := s.Customers.CloudidentityCustomersUserinvitationsList(ctx, operations.CloudidentityCustomersUserinvitationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("qui"),
        Filter: sdk.String("impedit"),
        Key: sdk.String("cum"),
        OauthToken: sdk.String("esse"),
        OrderBy: sdk.String("ipsum"),
        PageSize: sdk.Int64(568434),
        PageToken: sdk.String("aspernatur"),
        Parent: "perferendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ad"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("sed"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUserInvitationsResponse != nil {
        // handle response
    }
}
```

## CloudidentityCustomersUserinvitationsSend

Sends a UserInvitation to email. If the `UserInvitation` does not exist for this request and it is a valid request, the request creates a `UserInvitation`. **Note:** The `get` and `list` methods have a 48-hour delay where newly-created consumer accounts will not appear in the results. You can still send a `UserInvitation` to those accounts if you know the unmanaged email address and IsInvitableUser==True.

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
    res, err := s.Customers.CloudidentityCustomersUserinvitationsSend(ctx, operations.CloudidentityCustomersUserinvitationsSendRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "natus": "laboriosam",
        },
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fuga"),
        Fields: sdk.String("in"),
        Key: sdk.String("corporis"),
        Name: "Brad Turcotte Jr.",
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("est"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
