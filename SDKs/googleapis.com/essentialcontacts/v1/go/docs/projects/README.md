# Projects

### Available Operations

* [EssentialcontactsProjectsContactsCompute](#essentialcontactsprojectscontactscompute) - Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.
* [EssentialcontactsProjectsContactsCreate](#essentialcontactsprojectscontactscreate) - Adds a new contact for a resource.
* [EssentialcontactsProjectsContactsDelete](#essentialcontactsprojectscontactsdelete) - Deletes a contact.
* [EssentialcontactsProjectsContactsGet](#essentialcontactsprojectscontactsget) - Gets a single contact.
* [EssentialcontactsProjectsContactsList](#essentialcontactsprojectscontactslist) - Lists the contacts that have been set on a resource.
* [EssentialcontactsProjectsContactsPatch](#essentialcontactsprojectscontactspatch) - Updates a contact. Note: A contact's email address cannot be changed.
* [EssentialcontactsProjectsContactsSendTestMessage](#essentialcontactsprojectscontactssendtestmessage) - Allows a contact admin to send a test message to contact to verify that it has been configured correctly.

## EssentialcontactsProjectsContactsCompute

Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.

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
    res, err := s.Projects.EssentialcontactsProjectsContactsCompute(ctx, operations.EssentialcontactsProjectsContactsComputeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("minus"),
        Fields: sdk.String("placeat"),
        Key: sdk.String("voluptatum"),
        NotificationCategories: []EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum{
            operations.EssentialcontactsProjectsContactsComputeNotificationCategoriesEnumBilling,
            operations.EssentialcontactsProjectsContactsComputeNotificationCategoriesEnumSecurity,
        },
        OauthToken: sdk.String("recusandae"),
        PageSize: sdk.Int64(836079),
        PageToken: sdk.String("ab"),
        Parent: "quis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veritatis"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.EssentialcontactsProjectsContactsComputeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudEssentialcontactsV1ComputeContactsResponse != nil {
        // handle response
    }
}
```

## EssentialcontactsProjectsContactsCreate

Adds a new contact for a resource.

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
    res, err := s.Projects.EssentialcontactsProjectsContactsCreate(ctx, operations.EssentialcontactsProjectsContactsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudEssentialcontactsV1ContactInput: &shared.GoogleCloudEssentialcontactsV1ContactInput{
            Email: sdk.String("Verner87@hotmail.com"),
            LanguageTag: sdk.String("at"),
            NotificationCategorySubscriptions: []shared.GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum{
                shared.GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnumTechnical,
                shared.GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnumProductUpdates,
                shared.GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnumProductUpdates,
                shared.GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnumTechnical,
            },
            ValidateTime: sdk.String("totam"),
            ValidationState: shared.GoogleCloudEssentialcontactsV1ContactValidationStateEnumInvalid.ToPointer(),
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nam"),
        Fields: sdk.String("officia"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("fugit"),
        Parent: "deleniti",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("optio"),
        UploadProtocol: sdk.String("totam"),
    }, operations.EssentialcontactsProjectsContactsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudEssentialcontactsV1Contact != nil {
        // handle response
    }
}
```

## EssentialcontactsProjectsContactsDelete

Deletes a contact.

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
    res, err := s.Projects.EssentialcontactsProjectsContactsDelete(ctx, operations.EssentialcontactsProjectsContactsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("qui"),
        Key: sdk.String("impedit"),
        Name: "Cory Emmerich",
        OauthToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ad"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("sed"),
    }, operations.EssentialcontactsProjectsContactsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## EssentialcontactsProjectsContactsGet

Gets a single contact.

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
    res, err := s.Projects.EssentialcontactsProjectsContactsGet(ctx, operations.EssentialcontactsProjectsContactsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laboriosam"),
        Fields: sdk.String("hic"),
        Key: sdk.String("saepe"),
        Name: "Harvey Hessel",
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.EssentialcontactsProjectsContactsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudEssentialcontactsV1Contact != nil {
        // handle response
    }
}
```

## EssentialcontactsProjectsContactsList

Lists the contacts that have been set on a resource.

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
    res, err := s.Projects.EssentialcontactsProjectsContactsList(ctx, operations.EssentialcontactsProjectsContactsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("dolores"),
        Key: sdk.String("dolorem"),
        OauthToken: sdk.String("corporis"),
        PageSize: sdk.Int64(128926),
        PageToken: sdk.String("nobis"),
        Parent: "enim",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("minima"),
    }, operations.EssentialcontactsProjectsContactsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudEssentialcontactsV1ListContactsResponse != nil {
        // handle response
    }
}
```

## EssentialcontactsProjectsContactsPatch

Updates a contact. Note: A contact's email address cannot be changed.

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
    res, err := s.Projects.EssentialcontactsProjectsContactsPatch(ctx, operations.EssentialcontactsProjectsContactsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudEssentialcontactsV1ContactInput: &shared.GoogleCloudEssentialcontactsV1ContactInput{
            Email: sdk.String("Ibrahim_Nicolas10@gmail.com"),
            LanguageTag: sdk.String("mollitia"),
            NotificationCategorySubscriptions: []shared.GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum{
                shared.GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnumBilling,
            },
            ValidateTime: sdk.String("consequuntur"),
            ValidationState: shared.GoogleCloudEssentialcontactsV1ContactValidationStateEnumInvalid.ToPointer(),
        },
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("numquam"),
        Fields: sdk.String("commodi"),
        Key: sdk.String("quam"),
        Name: "Shannon Mueller",
        OauthToken: sdk.String("vitae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UpdateMask: sdk.String("animi"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("odit"),
    }, operations.EssentialcontactsProjectsContactsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudEssentialcontactsV1Contact != nil {
        // handle response
    }
}
```

## EssentialcontactsProjectsContactsSendTestMessage

Allows a contact admin to send a test message to contact to verify that it has been configured correctly.

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
    res, err := s.Projects.EssentialcontactsProjectsContactsSendTestMessage(ctx, operations.EssentialcontactsProjectsContactsSendTestMessageRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudEssentialcontactsV1SendTestMessageRequest: &shared.GoogleCloudEssentialcontactsV1SendTestMessageRequest{
            Contacts: []string{
                "tenetur",
            },
            NotificationCategory: shared.GoogleCloudEssentialcontactsV1SendTestMessageRequestNotificationCategoryEnumSecurity.ToPointer(),
        },
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aut"),
        Fields: sdk.String("quasi"),
        Key: sdk.String("error"),
        OauthToken: sdk.String("temporibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        Resource: "quasi",
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.EssentialcontactsProjectsContactsSendTestMessageSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```
