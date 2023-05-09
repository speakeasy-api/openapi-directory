# PersonUpsert

## Overview

Person Upsert

### Available Operations

* [PostV2PersonUpsertsJSON](#postv2personupsertsjson) - Upsert a person

## PostV2PersonUpsertsJSON

Upserts a person record. The upsert_key dictates how the upsert will be performed. The create and update behavior
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
    res, err := s.PersonUpsert.PostV2PersonUpsertsJSON(ctx, operations.PostV2PersonUpsertsJSONRequestBody{
        AccountID: sdk.Int64(181476),
        City: sdk.String("East Dovie"),
        ContactRestrictions: []string{
            "praesentium",
        },
        Country: sdk.String("Cuba"),
        CrmID: sdk.String("exercitationem"),
        CrmIDType: sdk.String("expedita"),
        CustomFields: map[string]interface{}{
            "impedit": "sit",
            "nemo": "culpa",
            "consequuntur": "amet",
        },
        DoNotContact: sdk.Bool(false),
        EmailAddress: sdk.String("deserunt"),
        FirstName: sdk.String("Domenick"),
        HomePhone: sdk.String("veniam"),
        ID: sdk.Int64(800256),
        ImportID: sdk.Int64(932250),
        JobSeniority: sdk.String("a"),
        LastName: sdk.String("Schamberger"),
        LinkedinURL: sdk.String("enim"),
        Locale: sdk.String("doloribus"),
        MobilePhone: sdk.String("assumenda"),
        OwnerID: sdk.Int64(887363),
        PersonCompanyIndustry: sdk.String("architecto"),
        PersonCompanyName: sdk.String("alias"),
        PersonCompanyWebsite: sdk.String("culpa"),
        PersonStageID: sdk.Int64(60335),
        PersonalEmailAddress: sdk.String("nobis"),
        PersonalWebsite: sdk.String("necessitatibus"),
        Phone: sdk.String("1-245-931-0005"),
        PhoneExtension: sdk.String("cumque"),
        SecondaryEmailAddress: sdk.String("iure"),
        State: sdk.String("quibusdam"),
        Tags: []string{
            "nemo",
            "recusandae",
            "velit",
            "magnam",
        },
        Title: sdk.String("Ms."),
        TwitterHandle: sdk.String("laboriosam"),
        UpsertKey: sdk.String("sed"),
        WorkCity: sdk.String("odio"),
        WorkCountry: sdk.String("natus"),
        WorkState: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
