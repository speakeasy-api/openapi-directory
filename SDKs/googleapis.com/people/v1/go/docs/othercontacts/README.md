# OtherContacts

### Available Operations

* [PeopleOtherContactsCopyOtherContactToMyContactsGroup](#peopleothercontactscopyothercontacttomycontactsgroup) - Copies an "Other contact" to a new contact in the user's "myContacts" group Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [PeopleOtherContactsList](#peopleothercontactslist) - List all "Other contacts", that is contacts that are not in a contact group. "Other contacts" are typically auto created contacts from interactions. Sync tokens expire 7 days after the full sync. A request with an expired sync token will get an error with an [google.rpc.ErrorInfo](https://cloud.google.com/apis/design/errors#error_info) with reason "EXPIRED_SYNC_TOKEN". In the case of such an error clients should make a full sync request without a `sync_token`. The first page of a full sync request has an additional quota. If the quota is exceeded, a 429 error will be returned. This quota is fixed and can not be increased. When the `sync_token` is specified, resources deleted since the last sync will be returned as a person with `PersonMetadata.deleted` set to true. When the `page_token` or `sync_token` is specified, all other request parameters must match the first call. Writes may have a propagation delay of several minutes for sync requests. Incremental syncs are not intended for read-after-write use cases. See example usage at [List the user's other contacts that have changed](/people/v1/other-contacts#list_the_users_other_contacts_that_have_changed).
* [PeopleOtherContactsSearch](#peopleothercontactssearch) - Provides a list of contacts in the authenticated user's other contacts that matches the search query. The query matches on a contact's `names`, `emailAddresses`, and `phoneNumbers` fields that are from the OTHER_CONTACT source. **IMPORTANT**: Before searching, clients should send a warmup request with an empty query to update the cache. See https://developers.google.com/people/v1/other-contacts#search_the_users_other_contacts

## PeopleOtherContactsCopyOtherContactToMyContactsGroup

Copies an "Other contact" to a new contact in the user's "myContacts" group Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

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
    res, err := s.OtherContacts.PeopleOtherContactsCopyOtherContactToMyContactsGroup(ctx, operations.PeopleOtherContactsCopyOtherContactToMyContactsGroupRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CopyOtherContactToMyContactsGroupRequest: &shared.CopyOtherContactToMyContactsGroupRequest{
            CopyMask: sdk.String("quasi"),
            ReadMask: sdk.String("error"),
            Sources: []shared.CopyOtherContactToMyContactsGroupRequestSourcesEnum{
                shared.CopyOtherContactToMyContactsGroupRequestSourcesEnumReadSourceTypeContact,
                shared.CopyOtherContactToMyContactsGroupRequestSourcesEnumReadSourceTypeUnspecified,
                shared.CopyOtherContactToMyContactsGroupRequestSourcesEnumReadSourceTypeDomainContact,
                shared.CopyOtherContactToMyContactsGroupRequestSourcesEnumReadSourceTypeDomainContact,
            },
        },
        AccessToken: sdk.String("vero"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("voluptatibus"),
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("omnis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        ResourceName: "cum",
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("doloremque"),
    }, operations.PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurity{
        Option1: &operations.PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Person != nil {
        // handle response
    }
}
```

## PeopleOtherContactsList

List all "Other contacts", that is contacts that are not in a contact group. "Other contacts" are typically auto created contacts from interactions. Sync tokens expire 7 days after the full sync. A request with an expired sync token will get an error with an [google.rpc.ErrorInfo](https://cloud.google.com/apis/design/errors#error_info) with reason "EXPIRED_SYNC_TOKEN". In the case of such an error clients should make a full sync request without a `sync_token`. The first page of a full sync request has an additional quota. If the quota is exceeded, a 429 error will be returned. This quota is fixed and can not be increased. When the `sync_token` is specified, resources deleted since the last sync will be returned as a person with `PersonMetadata.deleted` set to true. When the `page_token` or `sync_token` is specified, all other request parameters must match the first call. Writes may have a propagation delay of several minutes for sync requests. Incremental syncs are not intended for read-after-write use cases. See example usage at [List the user's other contacts that have changed](/people/v1/other-contacts#list_the_users_other_contacts_that_have_changed).

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
    res, err := s.OtherContacts.PeopleOtherContactsList(ctx, operations.PeopleOtherContactsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ut"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("corporis"),
        Key: sdk.String("dolore"),
        OauthToken: sdk.String("iusto"),
        PageSize: sdk.Int64(118727),
        PageToken: sdk.String("harum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        ReadMask: sdk.String("accusamus"),
        RequestSyncToken: sdk.Bool(false),
        Sources: []PeopleOtherContactsListSourcesEnum{
            operations.PeopleOtherContactsListSourcesEnumReadSourceTypeDomainContact,
            operations.PeopleOtherContactsListSourcesEnumReadSourceTypeUnspecified,
        },
        SyncToken: sdk.String("ipsum"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("molestias"),
    }, operations.PeopleOtherContactsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOtherContactsResponse != nil {
        // handle response
    }
}
```

## PeopleOtherContactsSearch

Provides a list of contacts in the authenticated user's other contacts that matches the search query. The query matches on a contact's `names`, `emailAddresses`, and `phoneNumbers` fields that are from the OTHER_CONTACT source. **IMPORTANT**: Before searching, clients should send a warmup request with an empty query to update the cache. See https://developers.google.com/people/v1/other-contacts#search_the_users_other_contacts

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
    res, err := s.OtherContacts.PeopleOtherContactsSearch(ctx, operations.PeopleOtherContactsSearchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("rem"),
        Key: sdk.String("voluptates"),
        OauthToken: sdk.String("quasi"),
        PageSize: sdk.Int64(921158),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("sint"),
        QuotaUser: sdk.String("veritatis"),
        ReadMask: sdk.String("itaque"),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("enim"),
    }, operations.PeopleOtherContactsSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResponse != nil {
        // handle response
    }
}
```
