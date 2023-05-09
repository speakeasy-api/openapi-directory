# CampaignCreativeAssociations

### Available Operations

* [DfareportingCampaignCreativeAssociationsInsert](#dfareportingcampaigncreativeassociationsinsert) - Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.
* [DfareportingCampaignCreativeAssociationsList](#dfareportingcampaigncreativeassociationslist) - Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.

## DfareportingCampaignCreativeAssociationsInsert

Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.

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
    res, err := s.CampaignCreativeAssociations.DfareportingCampaignCreativeAssociationsInsert(ctx, operations.DfareportingCampaignCreativeAssociationsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CampaignCreativeAssociation: &shared.CampaignCreativeAssociation{
            CreativeID: sdk.String("perferendis"),
            Kind: sdk.String("architecto"),
        },
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nihil"),
        CampaignID: "officiis",
        Fields: sdk.String("dolore"),
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ipsam",
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("praesentium"),
    }, operations.DfareportingCampaignCreativeAssociationsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CampaignCreativeAssociation != nil {
        // handle response
    }
}
```

## DfareportingCampaignCreativeAssociationsList

Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.

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
    res, err := s.CampaignCreativeAssociations.DfareportingCampaignCreativeAssociationsList(ctx, operations.DfareportingCampaignCreativeAssociationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tempora"),
        CampaignID: "quo",
        Fields: sdk.String("dolor"),
        Key: sdk.String("sunt"),
        MaxResults: sdk.Int64(605089),
        OauthToken: sdk.String("quam"),
        PageToken: sdk.String("officiis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "dicta",
        QuotaUser: sdk.String("excepturi"),
        SortOrder: operations.DfareportingCampaignCreativeAssociationsListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("odit"),
    }, operations.DfareportingCampaignCreativeAssociationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CampaignCreativeAssociationsListResponse != nil {
        // handle response
    }
}
```
