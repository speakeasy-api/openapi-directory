# AccountUpsert

## Overview

Account Upsert

### Available Operations

* [PostV2AccountUpsertsJSON](#postv2accountupsertsjson) - Upsert an account

## PostV2AccountUpsertsJSON

Upserts an account record. The upsert_key dictates how the upsert will be performed. The create and update behavior
is exactly the same as the individual create and update endpoints.


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
    res, err := s.AccountUpsert.PostV2AccountUpsertsJSON(ctx, operations.PostV2AccountUpsertsJSONRequestBody{
        AccountTierID: sdk.Int64(128926),
        City: sdk.String("Halvorsonstead"),
        CompanyStageID: sdk.Int64(363711),
        CompanyType: sdk.String("minima"),
        ConversationalName: sdk.String("excepturi"),
        Country: sdk.String("Argentina"),
        CrmID: sdk.String("iure"),
        CrmIDType: sdk.String("culpa"),
        CustomFields: []map[string]interface{}{
            map[string]interface{}{
                "architecto": "mollitia",
                "dolorem": "culpa",
                "consequuntur": "repellat",
                "mollitia": "occaecati",
            },
            map[string]interface{}{
                "commodi": "quam",
                "molestiae": "velit",
            },
            map[string]interface{}{
                "quia": "quis",
                "vitae": "laborum",
                "animi": "enim",
            },
            map[string]interface{}{
                "quo": "sequi",
            },
        },
        Description: sdk.String("tenetur"),
        DoNotContact: sdk.Bool(false),
        Domain: "ipsam",
        Founded: sdk.String("id"),
        ID: sdk.Int64(820994),
        Industry: sdk.String("aut"),
        LinkedinURL: sdk.String("quasi"),
        Locale: sdk.String("error"),
        Name: "Neal Boyer",
        OwnerID: sdk.Int64(878194),
        Phone: sdk.String("690.647.0042 x913"),
        PostalCode: sdk.String("41638"),
        RevenueRange: sdk.String("commodi"),
        Size: sdk.String("repudiandae"),
        State: sdk.String("quae"),
        Street: sdk.String("65582 Ledner Valley"),
        Tags: []string{
            "repudiandae",
        },
        TwitterHandle: sdk.String("sint"),
        UpsertKey: sdk.String("veritatis"),
        Website: sdk.String("itaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
