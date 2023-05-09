# Statistics

## Overview

Stats Web Service

### Available Operations

* [GETActiveObjectCountUsingGET](#getactiveobjectcountusingget) - Count of active objects by type, for specified species and date
* [GETActiveObjectDiffUsingGET](#getactiveobjectdiffusingget) - Count difference of active objects, by type, for specified species and date range
* [GETGeneTypeCountUsingGET](#getgenetypecountusingget) - Count of gene types, for specified species and date
* [GETGeneTypeDiffUsingGET](#getgenetypediffusingget) - Count difference of gene types, for specified species and date range
* [GETObjectStatusCountUsingGET](#getobjectstatuscountusingget) - Count of objects with given status, for specified species and date
* [GETObjectStatusDiffUsingGET](#getobjectstatusdiffusingget) - Count difference of objects with given status, for specified species and date range
* [GETObjectsWithRefSeqCountUsingGET](#getobjectswithrefseqcountusingget) - Count of objects with reference sequence(s), by object type, for specified species and date
* [GETObjectsWithRefSeqDiffUsingGET](#getobjectswithrefseqdiffusingget) - Count difference of objects with reference sequence(s), by object type, for specified species and date range
* [GETObjectsWithReferenceCountUsingGET](#getobjectswithreferencecountusingget) - Count of objects with reference, by object type, for specified species and date
* [GETObjectsWithReferenceDiffUsingGET](#getobjectswithreferencediffusingget) - Count difference of objects with reference, by object type, for specified species and date range
* [GETObjectsWithXDBsCountUsingGET](#getobjectswithxdbscountusingget) - Count of objects with external database ids, by database id, for specified species, object type and date
* [GETObjectsWithXDBsDiffUsingGET](#getobjectswithxdbsdiffusingget) - Count difference of objects with external database ids, by database id, for specified species, object type and date range
* [GETProteinInteractionCountUsingGET](#getproteininteractioncountusingget) - Count of protein interactions, for specified species and date
* [GETProteinInteractionDiffUsingGET](#getproteininteractiondiffusingget) - Count difference of protein interactions, for specified species and date range
* [GETQtlInheritanceTypeCountUsingGET](#getqtlinheritancetypecountusingget) - Count of strains, by qtl inheritance type, for specified species and date
* [GETQtlInheritanceTypeDiffUsingGET](#getqtlinheritancetypediffusingget) - Count difference of strains, by qtl inheritance type, for specified species and date range
* [GETRetiredObjectCountUsingGET](#getretiredobjectcountusingget) - Count of retired objects by type, for specified species and date
* [GETRetiredObjectDiffUsingGET](#getretiredobjectdiffusingget) - Count difference of retired objects, by type, for specified species and date range
* [GETStrainTypeCountUsingGET](#getstraintypecountusingget) - Count of strain types, for specified species and date
* [GETStrainTypeDiffUsingGET](#getstraintypediffusingget) - Count difference of strain types, for specified species and date range
* [GETTermStatsUsingGET](#gettermstatsusingget) - getTermStats
* [GETWithdrawnObjectCountUsingGET](#getwithdrawnobjectcountusingget) - Count of withdrawn objects by type, for specified species and date
* [GETWithdrawnObjectDiffUsingGET](#getwithdrawnobjectdiffusingget) - Count difference of withdrawn objects, by type, for specified species and date range
* [GETXdbsCountUsingGET](#getxdbscountusingget) - Count of external database ids, for specied species and date
* [GETXdbsDiffUsingGET](#getxdbsdiffusingget) - Count difference of external database ids, for specified species and date range

## GETActiveObjectCountUsingGET

Count of active objects by type, for specified species and date

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
    res, err := s.Statistics.GETActiveObjectCountUsingGET(ctx, operations.GETActiveObjectCountUsingGETRequest{
        DateYYYYMMDD: "enim",
        SpeciesTypeKey: 880476,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETActiveObjectDiffUsingGET

Count difference of active objects, by type, for specified species and date range

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
    res, err := s.Statistics.GETActiveObjectDiffUsingGET(ctx, operations.GETActiveObjectDiffUsingGETRequest{
        DateFromYYYYMMDD: "commodi",
        DateToYYYYMMDD: "repudiandae",
        SpeciesTypeKey: 64147,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGeneTypeCountUsingGET

Count of gene types, for specified species and date

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
    res, err := s.Statistics.GETGeneTypeCountUsingGET(ctx, operations.GETGeneTypeCountUsingGETRequest{
        DateYYYYMMDD: "ipsum",
        SpeciesTypeKey: 692472,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGeneTypeDiffUsingGET

Count difference of gene types, for specified species and date range

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
    res, err := s.Statistics.GETGeneTypeDiffUsingGET(ctx, operations.GETGeneTypeDiffUsingGETRequest{
        DateFromYYYYMMDD: "molestias",
        DateToYYYYMMDD: "excepturi",
        SpeciesTypeKey: 865103,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETObjectStatusCountUsingGET

Count of objects with given status, for specified species and date

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
    res, err := s.Statistics.GETObjectStatusCountUsingGET(ctx, operations.GETObjectStatusCountUsingGETRequest{
        DateYYYYMMDD: "modi",
        SpeciesTypeKey: 508969,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETObjectStatusDiffUsingGET

Count difference of objects with given status, for specified species and date range

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
    res, err := s.Statistics.GETObjectStatusDiffUsingGET(ctx, operations.GETObjectStatusDiffUsingGETRequest{
        DateFromYYYYMMDD: "rem",
        DateToYYYYMMDD: "voluptates",
        SpeciesTypeKey: 93940,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETObjectsWithRefSeqCountUsingGET

Count of objects with reference sequence(s), by object type, for specified species and date

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
    res, err := s.Statistics.GETObjectsWithRefSeqCountUsingGET(ctx, operations.GETObjectsWithRefSeqCountUsingGETRequest{
        DateYYYYMMDD: "repudiandae",
        SpeciesTypeKey: 575947,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETObjectsWithRefSeqDiffUsingGET

Count difference of objects with reference sequence(s), by object type, for specified species and date range

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
    res, err := s.Statistics.GETObjectsWithRefSeqDiffUsingGET(ctx, operations.GETObjectsWithRefSeqDiffUsingGETRequest{
        DateFromYYYYMMDD: "veritatis",
        DateToYYYYMMDD: "itaque",
        SpeciesTypeKey: 277718,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETObjectsWithReferenceCountUsingGET

Count of objects with reference, by object type, for specified species and date

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
    res, err := s.Statistics.GETObjectsWithReferenceCountUsingGET(ctx, operations.GETObjectsWithReferenceCountUsingGETRequest{
        DateYYYYMMDD: "enim",
        SpeciesTypeKey: 9356,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETObjectsWithReferenceDiffUsingGET

Count difference of objects with reference, by object type, for specified species and date range

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
    res, err := s.Statistics.GETObjectsWithReferenceDiffUsingGET(ctx, operations.GETObjectsWithReferenceDiffUsingGETRequest{
        DateFromYYYYMMDD: "est",
        DateToYYYYMMDD: "quibusdam",
        SpeciesTypeKey: 131797,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETObjectsWithXDBsCountUsingGET

Count of objects with external database ids, by database id, for specified species, object type and date

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
    res, err := s.Statistics.GETObjectsWithXDBsCountUsingGET(ctx, operations.GETObjectsWithXDBsCountUsingGETRequest{
        DateYYYYMMDD: "deserunt",
        ObjectKey: 716327,
        SpeciesTypeKey: 841386,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETObjectsWithXDBsDiffUsingGET

Count difference of objects with external database ids, by database id, for specified species, object type and date range

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
    res, err := s.Statistics.GETObjectsWithXDBsDiffUsingGET(ctx, operations.GETObjectsWithXDBsDiffUsingGETRequest{
        DateFromYYYYMMDD: "labore",
        DateToYYYYMMDD: "modi",
        ObjectKey: 183191,
        SpeciesTypeKey: 397821,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETProteinInteractionCountUsingGET

Count of protein interactions, for specified species and date

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
    res, err := s.Statistics.GETProteinInteractionCountUsingGET(ctx, operations.GETProteinInteractionCountUsingGETRequest{
        DateYYYYMMDD: "cupiditate",
        SpeciesTypeKey: 552822,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETProteinInteractionDiffUsingGET

Count difference of protein interactions, for specified species and date range

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
    res, err := s.Statistics.GETProteinInteractionDiffUsingGET(ctx, operations.GETProteinInteractionDiffUsingGETRequest{
        DateFromYYYYMMDD: "perferendis",
        DateToYYYYMMDD: "magni",
        SpeciesTypeKey: 828940,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETQtlInheritanceTypeCountUsingGET

Count of strains, by qtl inheritance type, for specified species and date

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
    res, err := s.Statistics.GETQtlInheritanceTypeCountUsingGET(ctx, operations.GETQtlInheritanceTypeCountUsingGETRequest{
        DateYYYYMMDD: "ipsam",
        SpeciesTypeKey: 4695,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETQtlInheritanceTypeDiffUsingGET

Count difference of strains, by qtl inheritance type, for specified species and date range

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
    res, err := s.Statistics.GETQtlInheritanceTypeDiffUsingGET(ctx, operations.GETQtlInheritanceTypeDiffUsingGETRequest{
        DateFromYYYYMMDD: "fugit",
        DateToYYYYMMDD: "dolorum",
        SpeciesTypeKey: 569618,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETRetiredObjectCountUsingGET

Count of retired objects by type, for specified species and date

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
    res, err := s.Statistics.GETRetiredObjectCountUsingGET(ctx, operations.GETRetiredObjectCountUsingGETRequest{
        DateYYYYMMDD: "tempora",
        SpeciesTypeKey: 703737,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETRetiredObjectDiffUsingGET

Count difference of retired objects, by type, for specified species and date range

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
    res, err := s.Statistics.GETRetiredObjectDiffUsingGET(ctx, operations.GETRetiredObjectDiffUsingGETRequest{
        DateFromYYYYMMDD: "tempore",
        DateToYYYYMMDD: "labore",
        SpeciesTypeKey: 962189,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETStrainTypeCountUsingGET

Count of strain types, for specified species and date

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
    res, err := s.Statistics.GETStrainTypeCountUsingGET(ctx, operations.GETStrainTypeCountUsingGETRequest{
        DateYYYYMMDD: "eum",
        SpeciesTypeKey: 248753,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETStrainTypeDiffUsingGET

Count difference of strain types, for specified species and date range

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
    res, err := s.Statistics.GETStrainTypeDiffUsingGET(ctx, operations.GETStrainTypeDiffUsingGETRequest{
        DateFromYYYYMMDD: "eligendi",
        DateToYYYYMMDD: "sint",
        SpeciesTypeKey: 396098,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETTermStatsUsingGET

getTermStats

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
    res, err := s.Statistics.GETTermStatsUsingGET(ctx, operations.GETTermStatsUsingGETRequest{
        AccID: "provident",
        FilterAccID: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETWithdrawnObjectCountUsingGET

Count of withdrawn objects by type, for specified species and date

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
    res, err := s.Statistics.GETWithdrawnObjectCountUsingGET(ctx, operations.GETWithdrawnObjectCountUsingGETRequest{
        DateYYYYMMDD: "sint",
        SpeciesTypeKey: 638921,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETWithdrawnObjectDiffUsingGET

Count difference of withdrawn objects, by type, for specified species and date range

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
    res, err := s.Statistics.GETWithdrawnObjectDiffUsingGET(ctx, operations.GETWithdrawnObjectDiffUsingGETRequest{
        DateFromYYYYMMDD: "dolor",
        DateToYYYYMMDD: "debitis",
        SpeciesTypeKey: 952749,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETXdbsCountUsingGET

Count of external database ids, for specied species and date

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
    res, err := s.Statistics.GETXdbsCountUsingGET(ctx, operations.GETXdbsCountUsingGETRequest{
        DateYYYYMMDD: "dolorum",
        SpeciesTypeKey: 447125,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETXdbsDiffUsingGET

Count difference of external database ids, for specified species and date range

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
    res, err := s.Statistics.GETXdbsDiffUsingGET(ctx, operations.GETXdbsDiffUsingGETRequest{
        DateFromYYYYMMDD: "in",
        DateToYYYYMMDD: "illum",
        SpeciesTypeKey: 978571,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
