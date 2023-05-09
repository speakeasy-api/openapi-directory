# Name

### Available Operations

* [GetNamesChanges](#getnameschanges) - Search for names with metadata changes in a given period
* [GetNamesDecisionsRecent](#getnamesdecisionsrecent) - Search for names affected by recent naming decision
* [GetNamesDecisionsYear](#getnamesdecisionsyear) - Search for names affected by naming decisions in a given year
* [GetNamesInside](#getnamesinside) - Search in a geographic area
* [GetNamesNear](#getnamesnear) - Search near to a geographic point
* [GetNamesNotOfficialSearch](#getnamesnotofficialsearch) - Search by name, limit to unofficial names only
* [GetNamesOfficialSearch](#getnamesofficialsearch) - Search by name, limit to official names only
* [GetNamesSearch](#getnamessearch) - Search by name
* [GetNamesNameIDOutputFormat](#getnamesnameidoutputformat) - Get a name by its nameId

## GetNamesChanges

Search for information about geographical names which have changed most recently within a specified time window.  Changes may include status cupdates and metadata corrections.

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
    res, err := s.Name.GetNamesChanges(ctx, operations.GetNamesChangesRequest{
        Embed: operations.GetNamesChangesEmbedEnumOne.ToPointer(),
        FeatureCategory: sdk.String("corrupti"),
        FeatureClass: sdk.String("illum"),
        FeatureType: sdk.String("vel"),
        FromDate: 623564,
        ItemsPerPage: sdk.Int64(645894),
        OutputFormat: operations.GetNamesChangesOutputFormatEnumXML,
        OutputSRS: operations.GetNamesChangesOutputSrsEnumThreeThousandEightHundredAndFiftySeven.ToPointer(),
        OutputStyle: operations.GetNamesChangesOutputStyleEnumSummary.ToPointer(),
        SortBy: operations.GetNamesChangesSortByEnumDecisionDate.ToPointer(),
        StartIndex: sdk.Int64(56713),
        ToDate: 963663,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNamesDecisionsRecent

Search for information about geographical names affected by naming 'decisions' made by the BC Geographical Names Office (naming authority) within the last X days.

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
    res, err := s.Name.GetNamesDecisionsRecent(ctx, operations.GetNamesDecisionsRecentRequest{
        Days: 272656,
        Embed: operations.GetNamesDecisionsRecentEmbedEnumZero.ToPointer(),
        FeatureCategory: sdk.String("molestiae"),
        FeatureClass: sdk.String("minus"),
        FeatureType: sdk.String("placeat"),
        ItemsPerPage: sdk.Int64(528895),
        OutputFormat: operations.GetNamesDecisionsRecentOutputFormatEnumXML,
        OutputSRS: operations.GetNamesDecisionsRecentOutputSrsEnumTwentySixThousandNineHundredAndEight.ToPointer(),
        OutputStyle: operations.GetNamesDecisionsRecentOutputStyleEnumSummary.ToPointer(),
        SortBy: operations.GetNamesDecisionsRecentSortByEnumDecisionDate.ToPointer(),
        StartIndex: sdk.Int64(836079),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNamesDecisionsYear

Search for information about geographical names affected by naming 'decisions' made by the BC Geographical Names Office (naming authority) in a given year.

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
    res, err := s.Name.GetNamesDecisionsYear(ctx, operations.GetNamesDecisionsYearRequest{
        Embed: operations.GetNamesDecisionsYearEmbedEnumZero.ToPointer(),
        FeatureCategory: sdk.String("quis"),
        FeatureClass: sdk.String("veritatis"),
        FeatureType: sdk.String("deserunt"),
        ItemsPerPage: sdk.Int64(20218),
        OutputFormat: operations.GetNamesDecisionsYearOutputFormatEnumXML,
        OutputSRS: operations.GetNamesDecisionsYearOutputSrsEnumTwentySixThousandNineHundredAndTen.ToPointer(),
        OutputStyle: operations.GetNamesDecisionsYearOutputStyleEnumDetail.ToPointer(),
        SortBy: operations.GetNamesDecisionsYearSortByEnumDecisionDate.ToPointer(),
        StartIndex: sdk.Int64(140350),
        Year: 870013,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNamesInside

Search for information about geographical names that correspond to features within a geographic bounding box.  Various options and filter parameters are available to refine the search.

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
    res, err := s.Name.GetNamesInside(ctx, operations.GetNamesInsideRequest{
        Bbox: "at",
        Embed: operations.GetNamesInsideEmbedEnumOne.ToPointer(),
        FeatureCategory: sdk.String("molestiae"),
        FeatureClass: sdk.String("quod"),
        FeatureType: sdk.String("quod"),
        ItemsPerPage: sdk.Int64(461479),
        OutputFormat: operations.GetNamesInsideOutputFormatEnumKml,
        OutputSRS: operations.GetNamesInsideOutputSrsEnumTwentySixThousandNineHundredAndTen.ToPointer(),
        OutputStyle: operations.GetNamesInsideOutputStyleEnumDetail.ToPointer(),
        SortBy: operations.GetNamesInsideSortByEnumName.ToPointer(),
        StartIndex: sdk.Int64(720633),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNamesNear

Search for information about geographical names that correspond to features within a geographic area defined by a centre point and a radius.  Various options and filter parameters are available to refine the search.

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
    res, err := s.Name.GetNamesNear(ctx, operations.GetNamesNearRequest{
        Distance: "officia",
        Embed: operations.GetNamesNearEmbedEnumOne.ToPointer(),
        FeatureCategory: sdk.String("fugit"),
        FeatureClass: sdk.String("deleniti"),
        FeaturePoint: "hic",
        FeatureType: sdk.String("optio"),
        ItemsPerPage: sdk.Int64(521848),
        OutputFormat: operations.GetNamesNearOutputFormatEnumJSON,
        OutputSRS: operations.GetNamesNearOutputSrsEnumThreeThousandEightHundredAndFiftySeven.ToPointer(),
        OutputStyle: operations.GetNamesNearOutputStyleEnumSummary.ToPointer(),
        SortBy: operations.GetNamesNearSortByEnumName.ToPointer(),
        StartIndex: sdk.Int64(186332),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNamesNotOfficialSearch

Search for information about unofficial geographical names by the text of the name itself.  Various options and filter parameters are available to refine the search.

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
    res, err := s.Name.GetNamesNotOfficialSearch(ctx, operations.GetNamesNotOfficialSearchRequest{
        Embed: operations.GetNamesNotOfficialSearchEmbedEnumOne.ToPointer(),
        ExactSpelling: operations.GetNamesNotOfficialSearchExactSpellingEnumOne.ToPointer(),
        FeatureCategory: sdk.String("esse"),
        FeatureClass: sdk.String("ipsum"),
        FeatureType: sdk.String("excepturi"),
        ItemsPerPage: sdk.Int64(135218),
        Name: "Cathy Mosciski",
        OutputFormat: operations.GetNamesNotOfficialSearchOutputFormatEnumJSON,
        OutputSRS: operations.GetNamesNotOfficialSearchOutputSrsEnumTwentySixThousandNineHundredAndEight.ToPointer(),
        OutputStyle: operations.GetNamesNotOfficialSearchOutputStyleEnumSummary.ToPointer(),
        SortBy: operations.GetNamesNotOfficialSearchSortByEnumDecisionDate.ToPointer(),
        StartIndex: sdk.Int64(902599),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNamesOfficialSearch

Search for information about official geographical names by the text of the name itself.  Various options and filter parameters are available to refine the search.

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
    res, err := s.Name.GetNamesOfficialSearch(ctx, operations.GetNamesOfficialSearchRequest{
        Embed: operations.GetNamesOfficialSearchEmbedEnumOne.ToPointer(),
        ExactSpelling: operations.GetNamesOfficialSearchExactSpellingEnumZero.ToPointer(),
        FeatureCategory: sdk.String("corporis"),
        FeatureClass: sdk.String("iste"),
        FeatureType: sdk.String("iure"),
        ItemsPerPage: sdk.Int64(902349),
        Name: "Roger Beier",
        OutputFormat: operations.GetNamesOfficialSearchOutputFormatEnumKml,
        OutputSRS: operations.GetNamesOfficialSearchOutputSrsEnumTwentySixThousandNineHundredAndNine.ToPointer(),
        OutputStyle: operations.GetNamesOfficialSearchOutputStyleEnumSummary.ToPointer(),
        SortBy: operations.GetNamesOfficialSearchSortByEnumRelevance.ToPointer(),
        StartIndex: sdk.Int64(358152),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNamesSearch

Search for information about geographical names by the text of the name itself.  The response will include both official and unofficial names.  Various options and filter parameters are available to refine the search.

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
    res, err := s.Name.GetNamesSearch(ctx, operations.GetNamesSearchRequest{
        Embed: operations.GetNamesSearchEmbedEnumZero.ToPointer(),
        ExactSpelling: operations.GetNamesSearchExactSpellingEnumOne.ToPointer(),
        FeatureCategory: sdk.String("enim"),
        FeatureClass: sdk.String("omnis"),
        FeatureType: sdk.String("nemo"),
        ItemsPerPage: sdk.Int64(325047),
        Name: "Brian Kessler",
        OutputFormat: operations.GetNamesSearchOutputFormatEnumCsv,
        OutputSRS: operations.GetNamesSearchOutputSrsEnumFourThousandThreeHundredAndTwentySix.ToPointer(),
        OutputStyle: operations.GetNamesSearchOutputStyleEnumDetail.ToPointer(),
        SortBy: operations.GetNamesSearchSortByEnumRelevance.ToPointer(),
        StartIndex: sdk.Int64(635059),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNamesNameIDOutputFormat

Get information about the geographical name with the specified nameId.

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
    res, err := s.Name.GetNamesNameIDOutputFormat(ctx, operations.GetNamesNameIDOutputFormatRequest{
        NameID: 161309,
        OutputFormat: operations.GetNamesNameIDOutputFormatOutputFormatEnumHTML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
