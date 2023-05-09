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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CampaignCreativeAssociation: &shared.CampaignCreativeAssociation{
            CreativeID: sdk.String("in"),
            Kind: sdk.String("illo"),
        },
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        CampaignID: "incidunt",
        Fields: sdk.String("dolore"),
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("est"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quo",
        QuotaUser: sdk.String("maxime"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("laboriosam"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officia"),
        CampaignID: "repellat",
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("soluta"),
        MaxResults: sdk.Int64(733226),
        OauthToken: sdk.String("culpa"),
        PageToken: sdk.String("fugiat"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "inventore",
        QuotaUser: sdk.String("atque"),
        SortOrder: operations.DfareportingCampaignCreativeAssociationsListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("voluptates"),
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
