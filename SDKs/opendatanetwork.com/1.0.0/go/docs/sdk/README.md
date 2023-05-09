# SDK

## Overview

The Socrata OpenDataNetwork (ODN) REST API exposes public data, often continuosly updated and enhanced, from many thousands of public
government and non profit agencies.

Much of this data originating from independent sources is fused together to create new, and often
powerful, entity level data. The API, in addition to search and autosuggest capabilities for finding datasets,
enables data based comparisons across geographical regions such as states, counties, metropolitan areas,
cities and zip codes using highly vetted data providers such as US Census, BEA, HUD and others. Comparison data
is preformatted for easy and efficient display on a chart, graph or interactive map.

The API also exposes data organized by narrative style questions a human might ask. The questions can
be rapidly found using an autosuggest style index, and then used to directly access all data needed to
thoroughly and authoritatively answer the question. Retrieved data includes time series (temporally aligned),
tabular, map heavy (includes spatial boundaries), and auto generated unstructured descriptive text.

The ODN API does not duplicate API endpoints or services provided by public sector agencies, but rather,
returns context relevant pre-populated REST URLs, when appropriate, so the caller can access data
directly from the source.

The [open source](http://github.com/socrata/odn-backend) API powers [OpenDataNetwork.com](http://OpenDataNetwork.com), an [open source](http://github.com/socrata/opendatanetwork.com)
site; the site highlights myriad uses and provides API badges with contextually relevant API example
REST endpoints and documentation pointers.

Finally, we continuously add new dat sources which appear automatically in the API, so if your favorite data
source is not available, check back soon. You can also join us [HERE](http://www.opendatanetwork.com/join-open-data-network)
and receive updates or let us know which data sources you are most interested in.

## App Tokens

Registering for and including a [Socrata application token](https://dev.socrata.com/docs/app-tokens.html)
is _required_ for the ODN API. They can be passed either using the `app_token` parameter
or the `X-App-Token` HTTP header.

### Available Operations

* [CreateAMap](#createamap) - Create a map
* [FindAllAvailableDataForSomeEntities](#findallavailabledataforsomeentities) - Find all available data for some entities
* [FindTheRelativesOfAnEntity](#findtherelativesofanentity) - Find the relatives of an entity
* [GetEntities](#getentities) - Get Entities
* [GetConstraintPermutationsForEntities](#getconstraintpermutationsforentities) - Get constraint permutations for entities
* [GetDatasets](#getdatasets) - Get datasets
* [GetQuestions](#getquestions) - Get questions
* [GetSuggestions](#getsuggestions) - Get suggestions
* [GetValuesForVariables](#getvaluesforvariables) - Get values for variables

## CreateAMap

Create a map

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
    res, err := s.SDK.CreateAMap(ctx, operations.CreateAMapRequest{
        XAppToken: sdk.String("nulla"),
        AppToken: sdk.String("corrupti"),
        Constraint: sdk.String("illum"),
        EntityID: "vel",
        Variable: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FindAllAvailableDataForSomeEntities

Find all available data for some entities

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
    res, err := s.SDK.FindAllAvailableDataForSomeEntities(ctx, operations.FindAllAvailableDataForSomeEntitiesRequest{
        XAppToken: sdk.String("deserunt"),
        AppToken: sdk.String("suscipit"),
        EntityID: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FindTheRelativesOfAnEntity

Find the relatives of an entity

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
    res, err := s.SDK.FindTheRelativesOfAnEntity(ctx, operations.FindTheRelativesOfAnEntityRequest{
        XAppToken: sdk.String("magnam"),
        AppToken: sdk.String("debitis"),
        EntityID: "ipsa",
        Limit: sdk.Float64(9636.63),
        Relation: operations.FindTheRelativesOfAnEntityRelationEnumChild,
        VariableID: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetEntities

Get Entities

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
    res, err := s.SDK.GetEntities(ctx, operations.GetEntitiesRequest{
        XAppToken: sdk.String("molestiae"),
        AppToken: sdk.String("minus"),
        EntityID: sdk.String("placeat"),
        EntityName: sdk.String("voluptatum"),
        EntityType: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetConstraintPermutationsForEntities

Get constraint permutations for entities

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
    res, err := s.SDK.GetConstraintPermutationsForEntities(ctx, operations.GetConstraintPermutationsForEntitiesRequest{
        XAppToken: sdk.String("excepturi"),
        AppToken: sdk.String("nisi"),
        Constraint: "recusandae",
        EntityID: "temporibus",
        Variable: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDatasets

Get datasets

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
    res, err := s.SDK.GetDatasets(ctx, operations.GetDatasetsRequest{
        XAppToken: sdk.String("quis"),
        AppToken: sdk.String("veritatis"),
        DatasetID: sdk.String("deserunt"),
        EntityID: sdk.String("perferendis"),
        Limit: sdk.Float64(3682.41),
        Offset: sdk.Float64(8326.2),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetQuestions

Get questions

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
    res, err := s.SDK.GetQuestions(ctx, operations.GetQuestionsRequest{
        XAppToken: sdk.String("sapiente"),
        AppToken: sdk.String("quo"),
        Limit: sdk.Float64(1403.5),
        Offset: sdk.Float64(8700.13),
        Query: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSuggestions

Get suggestions

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
    res, err := s.SDK.GetSuggestions(ctx, operations.GetSuggestionsRequest{
        XAppToken: sdk.String("maiores"),
        AppToken: sdk.String("molestiae"),
        Limit: sdk.Float64(7991.59),
        Query: "quod",
        Type: operations.GetSuggestionsTypeEnumPublisher,
        VariableID: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetValuesForVariables

Get values for variables

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
    res, err := s.SDK.GetValuesForVariables(ctx, operations.GetValuesForVariablesRequest{
        XAppToken: sdk.String("porro"),
        AppToken: sdk.String("dolorum"),
        Describe: sdk.Bool(false),
        EntityID: sdk.String("dicta"),
        Forecast: sdk.Float64(7206.33),
        Format: operations.GetValuesForVariablesFormatEnumGoogle.ToPointer(),
        Variable: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
