# SDK

## Overview

Query our database of federal and state laws and incentives for alternative fuels and vehicles, air quality, fuel efficiency, and other transportation-related topics. This dataset powers the <a href="https://afdc.energy.gov/laws">Federal and State Laws and Incentives</a> on the Alternative Fuels Data Center.

### Available Operations

* [TransportationIncentivesLawsAll](#transportationincentiveslawsall) - Return a full list of laws and incentives that match your query.
* [TransportationIncentivesLawsCategories](#transportationincentiveslawscategories) - Return the law categories for a given category type.
* [TransportationIncentivesLawsID](#transportationincentiveslawsid) - Fetch the details of a specific law given the law's ID.
* [TransportationIncentivesLawsPocs](#transportationincentiveslawspocs) - Get the points of contact for a given jurisdiction.

## TransportationIncentivesLawsAll

Return a full list of laws and incentives that match your query.

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
    res, err := s.SDK.TransportationIncentivesLawsAll(ctx, operations.TransportationIncentivesLawsAllRequest{
        APIKey: "deserunt",
        Expired: sdk.Bool(false),
        IncentiveType: sdk.String("suscipit"),
        Jurisdiction: sdk.String("iure"),
        Keyword: sdk.String("magnam"),
        LawType: sdk.String("debitis"),
        Limit: sdk.Int64(56713),
        Local: sdk.Bool(false),
        OutputFormat: operations.TransportationIncentivesLawsAllOutputFormatEnumCsv,
        Poc: sdk.Bool(false),
        Recent: sdk.Bool(false),
        RegulationType: sdk.String("tempora"),
        Technology: sdk.String("suscipit"),
        UserType: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## TransportationIncentivesLawsCategories

Return the law categories for a given category type.

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
    res, err := s.SDK.TransportationIncentivesLawsCategories(ctx, operations.TransportationIncentivesLawsCategoriesRequest{
        APIKey: "minus",
        OutputFormat: operations.TransportationIncentivesLawsCategoriesOutputFormatEnumXML,
        Type: operations.TransportationIncentivesLawsCategoriesTypeEnumRegulation.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## TransportationIncentivesLawsID

Fetch the details of a specific law given the law's ID.

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
    res, err := s.SDK.TransportationIncentivesLawsID(ctx, operations.TransportationIncentivesLawsIDRequest{
        APIKey: "iusto",
        Expired: sdk.Bool(false),
        ID: 568045,
        OutputFormat: operations.TransportationIncentivesLawsIDOutputFormatEnumJSON,
        Poc: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## TransportationIncentivesLawsPocs

Get the points of contact for a given jurisdiction.

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
    res, err := s.SDK.TransportationIncentivesLawsPocs(ctx, operations.TransportationIncentivesLawsPocsRequest{
        APIKey: "recusandae",
        Jurisdiction: "temporibus",
        OutputFormat: operations.TransportationIncentivesLawsPocsOutputFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
