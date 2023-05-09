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
            CreativeID: sdk.String("incidunt"),
            Kind: sdk.String("dolore"),
        },
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quo"),
        CampaignID: "maxime",
        Fields: sdk.String("delectus"),
        Key: sdk.String("laboriosam"),
        OauthToken: sdk.String("laboriosam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quam",
        QuotaUser: sdk.String("fuga"),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("repellat"),
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
        AccessToken: sdk.String("soluta"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("culpa"),
        CampaignID: "fugiat",
        Fields: sdk.String("inventore"),
        Key: sdk.String("atque"),
        MaxResults: sdk.Int64(323215),
        OauthToken: sdk.String("sapiente"),
        PageToken: sdk.String("voluptates"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ut",
        QuotaUser: sdk.String("nesciunt"),
        SortOrder: operations.DfareportingCampaignCreativeAssociationsListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("suscipit"),
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
