# BillingAssignments

### Available Operations

* [DfareportingBillingAssignmentsInsert](#dfareportingbillingassignmentsinsert) - Inserts a new billing assignment and returns the new assignment. Only one of advertiser_id or campaign_id is support per request. If the new assignment has no effect (assigning a campaign to the parent advertiser billing profile or assigning an advertiser to the account billing profile), no assignment will be returned.
* [DfareportingBillingAssignmentsList](#dfareportingbillingassignmentslist) - Retrieves a list of billing assignments.

## DfareportingBillingAssignmentsInsert

Inserts a new billing assignment and returns the new assignment. Only one of advertiser_id or campaign_id is support per request. If the new assignment has no effect (assigning a campaign to the parent advertiser billing profile or assigning an advertiser to the account billing profile), no assignment will be returned.

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
    res, err := s.BillingAssignments.DfareportingBillingAssignmentsInsert(ctx, operations.DfareportingBillingAssignmentsInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BillingAssignment: &shared.BillingAssignment{
            AccountID: sdk.String("nostrum"),
            AdvertiserID: sdk.String("tempora"),
            CampaignID: sdk.String("nam"),
            Kind: sdk.String("numquam"),
            SubaccountID: sdk.String("odio"),
        },
        AccessToken: sdk.String("nostrum"),
        Alt: shared.AltEnumProto.ToPointer(),
        BillingProfileID: "veritatis",
        Callback: sdk.String("autem"),
        Fields: sdk.String("earum"),
        Key: sdk.String("minima"),
        OauthToken: sdk.String("ex"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "possimus",
        QuotaUser: sdk.String("nesciunt"),
        UploadType: sdk.String("corrupti"),
        UploadProtocol: sdk.String("nostrum"),
    }, operations.DfareportingBillingAssignmentsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BillingAssignment != nil {
        // handle response
    }
}
```

## DfareportingBillingAssignmentsList

Retrieves a list of billing assignments.

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
    res, err := s.BillingAssignments.DfareportingBillingAssignmentsList(ctx, operations.DfareportingBillingAssignmentsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sequi"),
        Alt: shared.AltEnumProto.ToPointer(),
        BillingProfileID: "numquam",
        Callback: sdk.String("laborum"),
        Fields: sdk.String("eligendi"),
        Key: sdk.String("autem"),
        OauthToken: sdk.String("adipisci"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "sunt",
        QuotaUser: sdk.String("rerum"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("provident"),
    }, operations.DfareportingBillingAssignmentsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BillingAssignmentsListResponse != nil {
        // handle response
    }
}
```
