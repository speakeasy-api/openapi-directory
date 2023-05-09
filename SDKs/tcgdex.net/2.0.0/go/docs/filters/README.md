# Filters

## Overview

differents requests to filter cards

### Available Operations

* [GetCategories](#getcategories)
* [GetCategoriesCategory](#getcategoriescategory)
* [GetDexIds](#getdexids)
* [GetDexIdsDexID](#getdexidsdexid)
* [GetEnergyTypes](#getenergytypes)
* [GetEnergyTypesEnergyType](#getenergytypesenergytype)
* [GetHp](#gethp)
* [GetHpHp](#gethphp)
* [GetIllustrators](#getillustrators)
* [GetIllustratorsIllustrator](#getillustratorsillustrator)
* [GetRarities](#getrarities)
* [GetRaritiesRarity](#getraritiesrarity)
* [GetRegulationMarks](#getregulationmarks)
* [GetRegulationMarksRegulationMark](#getregulationmarksregulationmark)
* [GetRetreats](#getretreats)
* [GetRetreatsRetreat](#getretreatsretreat)
* [GetSeries](#getseries)
* [GetSeriesSerie](#getseriesserie)
* [GetSets](#getsets)
* [GetSetsSet](#getsetsset)
* [GetStages](#getstages)
* [GetStagesStage](#getstagesstage)
* [GetSuffixes](#getsuffixes)
* [GetSuffixesSuffix](#getsuffixessuffix)
* [GetTrainerTypes](#gettrainertypes)
* [GetTrainerTypesTrainerType](#gettrainertypestrainertype)
* [GetTypes](#gettypes)
* [GetTypesType](#gettypestype)
* [GetVariants](#getvariants)
* [GetVariantsVariant](#getvariantsvariant)

## GetCategories

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Filters.GetCategories(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCategories200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetCategoriesCategory

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
    res, err := s.Filters.GetCategoriesCategory(ctx, operations.GetCategoriesCategoryRequest{
        Category: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StringEndpoint != nil {
        // handle response
    }
}
```

## GetDexIds

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Filters.GetDexIds(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDexIds200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetDexIdsDexID

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
    res, err := s.Filters.GetDexIdsDexID(ctx, operations.GetDexIdsDexIDRequest{
        DexID: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CardResumes != nil {
        // handle response
    }
}
```

## GetEnergyTypes

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Filters.GetEnergyTypes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEnergyTypes200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetEnergyTypesEnergyType

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
    res, err := s.Filters.GetEnergyTypesEnergyType(ctx, operations.GetEnergyTypesEnergyTypeRequest{
        EnergyType: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CardResumes != nil {
        // handle response
    }
}
```

## GetHp

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Filters.GetHp(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetHp200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetHpHp

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
    res, err := s.Filters.GetHpHp(ctx, operations.GetHpHpRequest{
        Hp: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StringEndpoint != nil {
        // handle response
    }
}
```

## GetIllustrators

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Filters.GetIllustrators(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetIllustrators200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetIllustratorsIllustrator

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
    res, err := s.Filters.GetIllustratorsIllustrator(ctx, operations.GetIllustratorsIllustratorRequest{
        Illustrator: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StringEndpoint != nil {
        // handle response
    }
}
```

## GetRarities

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Filters.GetRarities(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRarities200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetRaritiesRarity

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
    res, err := s.Filters.GetRaritiesRarity(ctx, operations.GetRaritiesRarityRequest{
        Rarity: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StringEndpoint != nil {
        // handle response
    }
}
```

## GetRegulationMarks

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Filters.GetRegulationMarks(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRegulationMarks200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetRegulationMarksRegulationMark

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
    res, err := s.Filters.GetRegulationMarksRegulationMark(ctx, operations.GetRegulationMarksRegulationMarkRequest{
        RegulationMark: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CardResumes != nil {
        // handle response
    }
}
```

## GetRetreats

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Filters.GetRetreats(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRetreats200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetRetreatsRetreat

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
    res, err := s.Filters.GetRetreatsRetreat(ctx, operations.GetRetreatsRetreatRequest{
        Retreat: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StringEndpoint != nil {
        // handle response
    }
}
```

## GetSeries

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Filters.GetSeries(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SerieResumes != nil {
        // handle response
    }
}
```

## GetSeriesSerie

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
    res, err := s.Filters.GetSeriesSerie(ctx, operations.GetSeriesSerieRequest{
        Serie: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Serie != nil {
        // handle response
    }
}
```

## GetSets

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Filters.GetSets(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SetResumes != nil {
        // handle response
    }
}
```

## GetSetsSet

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
    res, err := s.Filters.GetSetsSet(ctx, operations.GetSetsSetRequest{
        Set: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Set != nil {
        // handle response
    }
}
```

## GetStages

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Filters.GetStages(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStages200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetStagesStage

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
    res, err := s.Filters.GetStagesStage(ctx, operations.GetStagesStageRequest{
        Stage: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CardResumes != nil {
        // handle response
    }
}
```

## GetSuffixes

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Filters.GetSuffixes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSuffixes200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetSuffixesSuffix

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
    res, err := s.Filters.GetSuffixesSuffix(ctx, operations.GetSuffixesSuffixRequest{
        Suffix: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CardResumes != nil {
        // handle response
    }
}
```

## GetTrainerTypes

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Filters.GetTrainerTypes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTrainerTypes200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetTrainerTypesTrainerType

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
    res, err := s.Filters.GetTrainerTypesTrainerType(ctx, operations.GetTrainerTypesTrainerTypeRequest{
        TrainerType: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CardResumes != nil {
        // handle response
    }
}
```

## GetTypes

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Filters.GetTypes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTypes200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetTypesType

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
    res, err := s.Filters.GetTypesType(ctx, operations.GetTypesTypeRequest{
        Type: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CardResumes != nil {
        // handle response
    }
}
```

## GetVariants

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Filters.GetVariants(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetVariants200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetVariantsVariant

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
    res, err := s.Filters.GetVariantsVariant(ctx, operations.GetVariantsVariantRequest{
        Variant: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CardResumes != nil {
        // handle response
    }
}
```
