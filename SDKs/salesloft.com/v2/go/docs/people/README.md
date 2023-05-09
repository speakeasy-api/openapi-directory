# People

## Overview

Person Management

### Available Operations

* [DeleteV2PeopleIDJSON](#deletev2peopleidjson) - Delete a person
* [GetV2PeopleJSON](#getv2peoplejson) - List people
* [GetV2PeopleIDJSON](#getv2peopleidjson) - Fetch a person
* [PostV2PeopleJSON](#postv2peoplejson) - Create a person
* [PutV2PeopleIDJSON](#putv2peopleidjson) - Update a person

## DeleteV2PeopleIDJSON

Deletes a person. This operation is not reversible without contacting support.
This operation can be called multiple times successfully.


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
    res, err := s.People.DeleteV2PeopleIDJSON(ctx, operations.DeleteV2PeopleIDJSONRequest{
        ID: "d3513bb6-f48b-4656-bcdb-35ff2e4b2753",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetV2PeopleJSON

Fetches multiple person records. The records can be filtered, paged, and sorted according to
the respective parameters.


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
    res, err := s.People.GetV2PeopleJSON(ctx, operations.GetV2PeopleJSONRequest{
        Query: sdk.String("iusto"),
        AccountID: []int64{
            522176,
            753890,
            853606,
        },
        Bounced: sdk.Bool(false),
        CadenceID: []int64{
            889448,
            495617,
            220104,
        },
        CanCall: sdk.Bool(false),
        CanEmail: sdk.Bool(false),
        CanText: sdk.Bool(false),
        City: []string{
            "error",
        },
        Country: []string{
            "vitae",
            "dignissimos",
            "esse",
            "fugiat",
        },
        CreatedAt: map[string]interface{}{
            "aspernatur": "enim",
            "delectus": "iusto",
        },
        CrmID: []string{
            "libero",
            "illo",
        },
        CustomFields: map[string]interface{}{
            "incidunt": "accusamus",
        },
        DoNotContact: sdk.Bool(false),
        EmailAddresses: []string{
            "tempore",
            "veniam",
            "eos",
            "reiciendis",
        },
        EuResident: sdk.Bool(false),
        Ids: []int64{
            444121,
            506312,
            367046,
            999809,
        },
        ImportID: []int64{
            197259,
            467119,
            534908,
            75566,
        },
        IncludePagingCounts: sdk.Bool(false),
        JobSeniority: []string{
            "assumenda",
            "aliquam",
        },
        LastContacted: map[string]interface{}{
            "provident": "laudantium",
            "repudiandae": "consequatur",
            "maxime": "aspernatur",
            "nam": "expedita",
        },
        LimitPagingCounts: sdk.Bool(false),
        Locales: []string{
            "provident",
            "repudiandae",
            "rerum",
        },
        New: sdk.Bool(false),
        OwnedByGUID: []string{
            "corporis",
            "vero",
        },
        OwnerCrmID: []string{
            "repellendus",
            "iure",
            "dolorem",
        },
        OwnerID: []int64{
            771226,
            415033,
        },
        OwnerIsActive: sdk.Bool(false),
        Page: sdk.Int64(12171),
        PerPage: sdk.Int64(32055),
        PersonStageID: []int64{
            60995,
            229567,
        },
        PhoneNumber: sdk.Bool(false),
        Replied: sdk.Bool(false),
        SortBy: sdk.String("illum"),
        SortDirection: sdk.String("praesentium"),
        StarredByGUID: []string{
            "cum",
            "amet",
            "quasi",
        },
        State: []string{
            "laudantium",
        },
        Success: sdk.Bool(false),
        TagID: []int64{
            938412,
        },
        Title: []string{
            "amet",
            "provident",
        },
        UpdatedAt: []string{
            "necessitatibus",
            "provident",
            "repudiandae",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetV2PeopleIDJSON

Fetches a person, by ID only.


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
    res, err := s.People.GetV2PeopleIDJSON(ctx, operations.GetV2PeopleIDJSONRequest{
        ID: "057eb809-e281-4033-9f39-81d4c700b607",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostV2PeopleJSON

Creates a person. Either email_address or phone/last_name must be provided as a unique lookup
on the team.


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
    res, err := s.People.PostV2PeopleJSON(ctx, operations.PostV2PeopleJSONRequestBody{
        AccountID: sdk.Int64(998026),
        AutotagDate: sdk.Bool(false),
        City: sdk.String("Port Lafayette"),
        ContactRestrictions: []string{
            "eligendi",
        },
        Country: sdk.String("Lebanon"),
        CrmID: sdk.String("consectetur"),
        CrmIDType: sdk.String("soluta"),
        CustomFields: map[string]interface{}{
            "temporibus": "officia",
            "amet": "tenetur",
            "aspernatur": "quo",
        },
        DoNotContact: sdk.Bool(false),
        EmailAddress: sdk.String("itaque"),
        FirstName: sdk.String("Rosetta"),
        HomePhone: sdk.String("laborum"),
        ImportID: sdk.Int64(490420),
        JobSeniority: sdk.String("vero"),
        LastName: sdk.String("Denesik"),
        LinkedinURL: sdk.String("consectetur"),
        Locale: sdk.String("repellat"),
        MobilePhone: sdk.String("explicabo"),
        OwnerID: sdk.Int64(129355),
        PersonCompanyIndustry: sdk.String("exercitationem"),
        PersonCompanyName: sdk.String("nihil"),
        PersonCompanyWebsite: sdk.String("non"),
        PersonStageID: sdk.Int64(68093),
        PersonalEmailAddress: sdk.String("illo"),
        PersonalWebsite: sdk.String("hic"),
        Phone: sdk.String("1-927-532-2924 x1850"),
        PhoneExtension: sdk.String("odit"),
        SecondaryEmailAddress: sdk.String("deleniti"),
        State: sdk.String("enim"),
        Tags: []string{
            "similique",
            "minima",
        },
        Title: sdk.String("Miss"),
        TwitterHandle: sdk.String("magnam"),
        WorkCity: sdk.String("sit"),
        WorkCountry: sdk.String("modi"),
        WorkState: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PutV2PeopleIDJSON

Updates a person.


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
    res, err := s.People.PutV2PeopleIDJSON(ctx, operations.PutV2PeopleIDJSONRequest{
        RequestBody: &operations.PutV2PeopleIDJSONRequestBody{
            AccountID: sdk.Int64(199529),
            City: sdk.String("Kundehaven"),
            ContactRestrictions: []string{
                "molestiae",
                "veniam",
            },
            Country: sdk.String("Vietnam"),
            CrmID: sdk.String("ab"),
            CrmIDType: sdk.String("modi"),
            CustomFields: map[string]interface{}{
                "aut": "eveniet",
            },
            DoNotContact: sdk.Bool(false),
            EmailAddress: sdk.String("odio"),
            FirstName: sdk.String("Harrison"),
            HomePhone: sdk.String("numquam"),
            ImportID: sdk.Int64(677045),
            JobSeniority: sdk.String("possimus"),
            LastName: sdk.String("Klein"),
            LinkedinURL: sdk.String("consectetur"),
            Locale: sdk.String("nesciunt"),
            MobilePhone: sdk.String("quaerat"),
            OwnerID: sdk.Int64(929476),
            PersonCompanyIndustry: sdk.String("minus"),
            PersonCompanyName: sdk.String("sunt"),
            PersonCompanyWebsite: sdk.String("distinctio"),
            PersonStageID: sdk.Int64(481375),
            PersonalEmailAddress: sdk.String("quas"),
            PersonalWebsite: sdk.String("et"),
            Phone: sdk.String("346.250.5580 x0099"),
            PhoneExtension: sdk.String("mollitia"),
            SecondaryEmailAddress: sdk.String("nulla"),
            State: sdk.String("officia"),
            Tags: []string{
                "voluptatem",
            },
            Title: sdk.String("Mr."),
            TwitterHandle: sdk.String("eveniet"),
            WorkCity: sdk.String("hic"),
            WorkCountry: sdk.String("voluptatem"),
            WorkState: sdk.String("incidunt"),
        },
        ID: "22eb2164-cf9a-4b83-a6c7-23ffda9e06be",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
