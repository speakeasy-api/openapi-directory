# Search

### Available Operations

* [GetNamesChanges](#getnameschanges) - Search for names with metadata changes in a given period
* [GetNamesDecisionsRecent](#getnamesdecisionsrecent) - Search for names affected by recent naming decision
* [GetNamesDecisionsYear](#getnamesdecisionsyear) - Search for names affected by naming decisions in a given year
* [GetNamesInside](#getnamesinside) - Search in a geographic area
* [GetNamesNear](#getnamesnear) - Search near to a geographic point
* [GetNamesNotOfficialSearch](#getnamesnotofficialsearch) - Search by name, limit to unofficial names only
* [GetNamesOfficialSearch](#getnamesofficialsearch) - Search by name, limit to official names only
* [GetNamesSearch](#getnamessearch) - Search by name

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
    res, err := s.Search.GetNamesChanges(ctx, operations.GetNamesChangesRequest{
        Embed: operations.GetNamesChangesEmbedEnumOne.ToPointer(),
        FeatureCategory: sdk.String("numquam"),
        FeatureClass: sdk.String("commodi"),
        FeatureType: sdk.String("quam"),
        FromDate: 474697,
        ItemsPerPage: sdk.Int64(244425),
        OutputFormat: operations.GetNamesChangesOutputFormatEnumKml,
        OutputSRS: operations.GetNamesChangesOutputSrsEnumFourThousandTwoHundredAndSixtyNine.ToPointer(),
        OutputStyle: operations.GetNamesChangesOutputStyleEnumSummary.ToPointer(),
        SortBy: operations.GetNamesChangesSortByEnumName.ToPointer(),
        StartIndex: sdk.Int64(674752),
        ToDate: 656330,
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
    res, err := s.Search.GetNamesDecisionsRecent(ctx, operations.GetNamesDecisionsRecentRequest{
        Days: 317202,
        Embed: operations.GetNamesDecisionsRecentEmbedEnumZero.ToPointer(),
        FeatureCategory: sdk.String("quo"),
        FeatureClass: sdk.String("sequi"),
        FeatureType: sdk.String("tenetur"),
        ItemsPerPage: sdk.Int64(368725),
        OutputFormat: operations.GetNamesDecisionsRecentOutputFormatEnumKml,
        OutputSRS: operations.GetNamesDecisionsRecentOutputSrsEnumTwentySixThousandNineHundredAndTen.ToPointer(),
        OutputStyle: operations.GetNamesDecisionsRecentOutputStyleEnumSummary.ToPointer(),
        SortBy: operations.GetNamesDecisionsRecentSortByEnumName.ToPointer(),
        StartIndex: sdk.Int64(622846),
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
    res, err := s.Search.GetNamesDecisionsYear(ctx, operations.GetNamesDecisionsYearRequest{
        Embed: operations.GetNamesDecisionsYearEmbedEnumOne.ToPointer(),
        FeatureCategory: sdk.String("laborum"),
        FeatureClass: sdk.String("quasi"),
        FeatureType: sdk.String("reiciendis"),
        ItemsPerPage: sdk.Int64(976460),
        OutputFormat: operations.GetNamesDecisionsYearOutputFormatEnumCsv,
        OutputSRS: operations.GetNamesDecisionsYearOutputSrsEnumTwentySixThousandNineHundredAndSeven.ToPointer(),
        OutputStyle: operations.GetNamesDecisionsYearOutputStyleEnumDetail.ToPointer(),
        SortBy: operations.GetNamesDecisionsYearSortByEnumDecisionDate.ToPointer(),
        StartIndex: sdk.Int64(55714),
        Year: 604846,
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
    res, err := s.Search.GetNamesInside(ctx, operations.GetNamesInsideRequest{
        Bbox: "voluptate",
        Embed: operations.GetNamesInsideEmbedEnumOne.ToPointer(),
        FeatureCategory: sdk.String("perferendis"),
        FeatureClass: sdk.String("doloremque"),
        FeatureType: sdk.String("reprehenderit"),
        ItemsPerPage: sdk.Int64(282807),
        OutputFormat: operations.GetNamesInsideOutputFormatEnumCsv,
        OutputSRS: operations.GetNamesInsideOutputSrsEnumFourThousandTwoHundredAndSixtyNine.ToPointer(),
        OutputStyle: operations.GetNamesInsideOutputStyleEnumSummary.ToPointer(),
        SortBy: operations.GetNamesInsideSortByEnumName.ToPointer(),
        StartIndex: sdk.Int64(480894),
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
    res, err := s.Search.GetNamesNear(ctx, operations.GetNamesNearRequest{
        Distance: "dicta",
        Embed: operations.GetNamesNearEmbedEnumOne.ToPointer(),
        FeatureCategory: sdk.String("enim"),
        FeatureClass: sdk.String("accusamus"),
        FeaturePoint: "commodi",
        FeatureType: sdk.String("repudiandae"),
        ItemsPerPage: sdk.Int64(64147),
        OutputFormat: operations.GetNamesNearOutputFormatEnumJSON,
        OutputSRS: operations.GetNamesNearOutputSrsEnumTwentySixThousandNineHundredAndNine.ToPointer(),
        OutputStyle: operations.GetNamesNearOutputStyleEnumDetail.ToPointer(),
        SortBy: operations.GetNamesNearSortByEnumFeatureType.ToPointer(),
        StartIndex: sdk.Int64(865103),
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
    res, err := s.Search.GetNamesNotOfficialSearch(ctx, operations.GetNamesNotOfficialSearchRequest{
        Embed: operations.GetNamesNotOfficialSearchEmbedEnumZero.ToPointer(),
        ExactSpelling: operations.GetNamesNotOfficialSearchExactSpellingEnumOne.ToPointer(),
        FeatureCategory: sdk.String("rem"),
        FeatureClass: sdk.String("voluptates"),
        FeatureType: sdk.String("quasi"),
        ItemsPerPage: sdk.Int64(921158),
        Name: "Patrick Ward",
        OutputFormat: operations.GetNamesNotOfficialSearchOutputFormatEnumJSON,
        OutputSRS: operations.GetNamesNotOfficialSearchOutputSrsEnumTwentySixThousandNineHundredAndNine.ToPointer(),
        OutputStyle: operations.GetNamesNotOfficialSearchOutputStyleEnumDetail.ToPointer(),
        SortBy: operations.GetNamesNotOfficialSearchSortByEnumRelevance.ToPointer(),
        StartIndex: sdk.Int64(647174),
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
    res, err := s.Search.GetNamesOfficialSearch(ctx, operations.GetNamesOfficialSearchRequest{
        Embed: operations.GetNamesOfficialSearchEmbedEnumOne.ToPointer(),
        ExactSpelling: operations.GetNamesOfficialSearchExactSpellingEnumOne.ToPointer(),
        FeatureCategory: sdk.String("labore"),
        FeatureClass: sdk.String("modi"),
        FeatureType: sdk.String("qui"),
        ItemsPerPage: sdk.Int64(397821),
        Name: "Isaac Aufderhar",
        OutputFormat: operations.GetNamesOfficialSearchOutputFormatEnumXML,
        OutputSRS: operations.GetNamesOfficialSearchOutputSrsEnumFourThousandThreeHundredAndTwentySix.ToPointer(),
        OutputStyle: operations.GetNamesOfficialSearchOutputStyleEnumSummary.ToPointer(),
        SortBy: operations.GetNamesOfficialSearchSortByEnumFeatureType.ToPointer(),
        StartIndex: sdk.Int64(569618),
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
    res, err := s.Search.GetNamesSearch(ctx, operations.GetNamesSearchRequest{
        Embed: operations.GetNamesSearchEmbedEnumZero.ToPointer(),
        ExactSpelling: operations.GetNamesSearchExactSpellingEnumOne.ToPointer(),
        FeatureCategory: sdk.String("tempore"),
        FeatureClass: sdk.String("labore"),
        FeatureType: sdk.String("delectus"),
        ItemsPerPage: sdk.Int64(433288),
        Name: "Sheri Mayer",
        OutputFormat: operations.GetNamesSearchOutputFormatEnumCsv,
        OutputSRS: operations.GetNamesSearchOutputSrsEnumTwentySixThousandNineHundredAndEight.ToPointer(),
        OutputStyle: operations.GetNamesSearchOutputStyleEnumDetail.ToPointer(),
        SortBy: operations.GetNamesSearchSortByEnumRelevance.ToPointer(),
        StartIndex: sdk.Int64(891555),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
