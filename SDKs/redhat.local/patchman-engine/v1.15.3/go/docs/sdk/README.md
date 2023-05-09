# SDK

## Overview

API of the Patch application on [cloud.redhat.com](cloud.redhat.com)

Syntax of the `filter[name]` query parameters is described in  [Filters documentation](https://github.com/RedHatInsights/patchman-engine/wiki/API-custom-filters)

### Available Operations

* [LatestPackage](#latestpackage) - Show me metadata of selected package
* [Deletesystem](#deletesystem) - Delete system by inventory id
* [DetailAdvisory](#detailadvisory) - Show me details an advisory by given advisory name
* [DetailSystem](#detailsystem) - Show me details about a system by given inventory id
* [ExportAdvisories](#exportadvisories) - Export applicable advisories for all my systems
* [ExportAdvisorySystems](#exportadvisorysystems) - Export systems for my account
* [ExportPackageSystems](#exportpackagesystems) - Show me all my systems which have a package installed
* [ExportPackages](#exportpackages) - Show me all installed packages across my systems
* [ExportSystemAdvisories](#exportsystemadvisories) - Export applicable advisories for all my systems
* [ExportSystemPackages](#exportsystempackages) - Show me details about a system packages by given inventory id
* [ExportSystems](#exportsystems) - Export systems for my account
* [ListAdvisories](#listadvisories) - Show me all applicable advisories for all my systems
* [ListAdvisorySystems](#listadvisorysystems) - Show me systems on which the given advisory is applicable
* [ListPackages](#listpackages) - Show me all installed packages across my systems
* [ListSystemAdvisories](#listsystemadvisories) - Show me advisories for a system by given inventory id
* [ListSystems](#listsystems) - Show me all my systems
* [PackageSystems](#packagesystems) - Show me all my systems which have a package installed
* [PackageVersions](#packageversions) - Show me all package versions installed on some system
* [SystemPackages](#systempackages) - Show me details about a system packages by given inventory id
* [ViewAdvisoriesSystems](#viewadvisoriessystems) - View advisory-system pairs for selected systems and advisories
* [ViewSystemsAdvisories](#viewsystemsadvisories) - View system-advisory pairs for selected systems and advisories

## LatestPackage

Show me metadata of selected package

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
    res, err := s.SDK.LatestPackage(ctx, operations.LatestPackageRequest{
        PackageName: "provident",
    }, operations.LatestPackageSecurity{
        RhIdentity: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ControllersPackageDetailResponse != nil {
        // handle response
    }
}
```

## Deletesystem

Delete system by inventory id

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
    res, err := s.SDK.Deletesystem(ctx, operations.DeletesystemRequest{
        InventoryID: "distinctio",
    }, operations.DeletesystemSecurity{
        RhIdentity: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DetailAdvisory

Show me details an advisory by given advisory name

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
    res, err := s.SDK.DetailAdvisory(ctx, operations.DetailAdvisoryRequest{
        AdvisoryID: "quibusdam",
    }, operations.DetailAdvisorySecurity{
        RhIdentity: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ControllersAdvisoryDetailResponse != nil {
        // handle response
    }
}
```

## DetailSystem

Show me details about a system by given inventory id

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
    res, err := s.SDK.DetailSystem(ctx, operations.DetailSystemRequest{
        InventoryID: "unde",
    }, operations.DetailSystemSecurity{
        RhIdentity: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ControllersSystemDetailResponse != nil {
        // handle response
    }
}
```

## ExportAdvisories

Export applicable advisories for all my systems

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
    res, err := s.SDK.ExportAdvisories(ctx, operations.ExportAdvisoriesRequest{
        FilterAdvisoryType: sdk.String("nulla"),
        FilterApplicableSystems: sdk.String("corrupti"),
        FilterDescription: sdk.String("illum"),
        FilterID: sdk.String("vel"),
        FilterPublicDate: sdk.String("error"),
        FilterSeverity: sdk.String("deserunt"),
        FilterSynopsis: sdk.String("suscipit"),
        Search: sdk.String("iure"),
    }, operations.ExportAdvisoriesSecurity{
        RhIdentity: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ControllersAdvisoryInlineItems != nil {
        // handle response
    }
}
```

## ExportAdvisorySystems

Export systems for my account

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
    res, err := s.SDK.ExportAdvisorySystems(ctx, operations.ExportAdvisorySystemsRequest{
        AdvisoryID: "magnam",
        FilterDisplayName: sdk.String("debitis"),
        FilterID: sdk.String("ipsa"),
        FilterLastEvaluation: sdk.String("delectus"),
        FilterLastUpload: sdk.String("tempora"),
        FilterOtherCount: sdk.String("suscipit"),
        FilterPackagesInstalled: sdk.String("molestiae"),
        FilterPackagesUpdatable: sdk.String("minus"),
        FilterRhbaCount: sdk.String("placeat"),
        FilterRheaCount: sdk.String("voluptatum"),
        FilterRhsaCount: sdk.String("iusto"),
        FilterStale: sdk.String("excepturi"),
        FilterSystemProfileSapSidsIn: []string{
            "recusandae",
            "temporibus",
        },
        FilterSystemProfileSapSystem: sdk.String("ab"),
        Search: sdk.String("quis"),
        Tags: []string{
            "deserunt",
        },
    }, operations.ExportAdvisorySystemsSecurity{
        RhIdentity: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ControllersSystemInlineItems != nil {
        // handle response
    }
}
```

## ExportPackageSystems

Show me all my systems which have a package installed

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
    res, err := s.SDK.ExportPackageSystems(ctx, operations.ExportPackageSystemsRequest{
        FilterSystemProfileSapSidsIn: []string{
            "ipsam",
        },
        FilterSystemProfileSapSystem: sdk.String("repellendus"),
        PackageName: "sapiente",
        Tags: []string{
            "odit",
            "at",
            "at",
            "maiores",
        },
    }, operations.ExportPackageSystemsSecurity{
        RhIdentity: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ControllersPackageSystemItems != nil {
        // handle response
    }
}
```

## ExportPackages

Show me all installed packages across my systems

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
    res, err := s.SDK.ExportPackages(ctx, operations.ExportPackagesRequest{
        FilterName: sdk.String("molestiae"),
        FilterSummary: sdk.String("quod"),
        FilterSystemsInstalled: sdk.String("quod"),
        FilterSystemsUpdatable: sdk.String("esse"),
        Search: sdk.String("totam"),
        Sort: operations.ExportPackagesSortEnumSystemsUpdatable.ToPointer(),
    }, operations.ExportPackagesSecurity{
        RhIdentity: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ControllersPackageItems != nil {
        // handle response
    }
}
```

## ExportSystemAdvisories

Export applicable advisories for all my systems

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
    res, err := s.SDK.ExportSystemAdvisories(ctx, operations.ExportSystemAdvisoriesRequest{
        FilterAdvisoryType: sdk.String("dolorum"),
        FilterDescription: sdk.String("dicta"),
        FilterID: sdk.String("nam"),
        FilterPublicDate: sdk.String("officia"),
        FilterSeverity: sdk.String("occaecati"),
        FilterSynopsis: sdk.String("fugit"),
        InventoryID: "deleniti",
        Search: sdk.String("hic"),
    }, operations.ExportSystemAdvisoriesSecurity{
        RhIdentity: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ControllersSystemAdvisoriesDBLookups != nil {
        // handle response
    }
}
```

## ExportSystemPackages

Show me details about a system packages by given inventory id

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
    res, err := s.SDK.ExportSystemPackages(ctx, operations.ExportSystemPackagesRequest{
        FilterDescription: sdk.String("optio"),
        FilterEvra: sdk.String("totam"),
        FilterName: sdk.String("beatae"),
        FilterSummary: sdk.String("commodi"),
        FilterUpdatable: sdk.Bool(false),
        InventoryID: "molestiae",
        Search: sdk.String("modi"),
    }, operations.ExportSystemPackagesSecurity{
        RhIdentity: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ControllersSystemPackageInlines != nil {
        // handle response
    }
}
```

## ExportSystems

Export systems for my account

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
    res, err := s.SDK.ExportSystems(ctx, operations.ExportSystemsRequest{
        FilterDisplayName: sdk.String("qui"),
        FilterID: sdk.String("impedit"),
        FilterLastEvaluation: sdk.String("cum"),
        FilterLastUpload: sdk.String("esse"),
        FilterOtherCount: sdk.String("ipsum"),
        FilterPackagesInstalled: sdk.String("excepturi"),
        FilterPackagesUpdatable: sdk.String("aspernatur"),
        FilterRhbaCount: sdk.String("perferendis"),
        FilterRheaCount: sdk.String("ad"),
        FilterRhsaCount: sdk.String("natus"),
        FilterStale: sdk.String("sed"),
        FilterSystemProfileSapSidsIn: []string{
            "dolor",
            "natus",
            "laboriosam",
        },
        FilterSystemProfileSapSystem: sdk.String("hic"),
        Search: sdk.String("saepe"),
        Tags: []string{
            "in",
            "corporis",
            "iste",
        },
    }, operations.ExportSystemsSecurity{
        RhIdentity: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ControllersSystemInlineItems != nil {
        // handle response
    }
}
```

## ListAdvisories

Show me all applicable advisories for all my systems

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
    res, err := s.SDK.ListAdvisories(ctx, operations.ListAdvisoriesRequest{
        FilterAdvisoryType: sdk.String("iure"),
        FilterApplicableSystems: sdk.String("saepe"),
        FilterDescription: sdk.String("quidem"),
        FilterID: sdk.String("architecto"),
        FilterPublicDate: sdk.String("ipsa"),
        FilterSeverity: sdk.String("reiciendis"),
        FilterSynopsis: sdk.String("est"),
        FilterSystemProfileSapSidsIn: []string{
            "laborum",
            "dolores",
            "dolorem",
        },
        FilterSystemProfileSapSystem: sdk.String("corporis"),
        Limit: sdk.Int64(128926),
        Offset: sdk.Int64(750686),
        Search: sdk.String("enim"),
        Sort: operations.ListAdvisoriesSortEnumSynopsis.ToPointer(),
        Tags: []string{
            "minima",
            "excepturi",
        },
    }, operations.ListAdvisoriesSecurity{
        RhIdentity: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ControllersAdvisoriesResponse != nil {
        // handle response
    }
}
```

## ListAdvisorySystems

Show me systems on which the given advisory is applicable

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
    res, err := s.SDK.ListAdvisorySystems(ctx, operations.ListAdvisorySystemsRequest{
        AdvisoryID: "accusantium",
        FilterCreated: sdk.String("iure"),
        FilterCulledTimestamp: sdk.String("culpa"),
        FilterDisplayName: sdk.String("doloribus"),
        FilterID: sdk.String("sapiente"),
        FilterInsightsID: sdk.String("architecto"),
        FilterLastEvaluation: sdk.String("mollitia"),
        FilterLastUpload: sdk.String("dolorem"),
        FilterOtherCount: sdk.String("culpa"),
        FilterRhbaCount: sdk.String("consequuntur"),
        FilterRheaCount: sdk.String("repellat"),
        FilterRhsaCount: sdk.String("mollitia"),
        FilterStale: sdk.String("occaecati"),
        FilterStaleTimestamp: sdk.String("numquam"),
        FilterStaleWarningTimestamp: sdk.String("commodi"),
        FilterSystemProfileSapSidsIn: []string{
            "molestiae",
            "velit",
        },
        FilterSystemProfileSapSystem: sdk.String("error"),
        Limit: sdk.Int64(158969),
        Offset: sdk.Int64(338007),
        Search: sdk.String("vitae"),
        Sort: operations.ListAdvisorySystemsSortEnumRheaCount.ToPointer(),
        Tags: []string{
            "enim",
            "odit",
            "quo",
        },
    }, operations.ListAdvisorySystemsSecurity{
        RhIdentity: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ControllersAdvisorySystemsResponse != nil {
        // handle response
    }
}
```

## ListPackages

Show me all installed packages across my systems

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
    res, err := s.SDK.ListPackages(ctx, operations.ListPackagesRequest{
        FilterName: sdk.String("sequi"),
        FilterSummary: sdk.String("tenetur"),
        FilterSystemProfileSapSidsIn: []string{
            "id",
            "possimus",
        },
        FilterSystemProfileSapSystem: sdk.String("aut"),
        FilterSystemsInstalled: sdk.String("quasi"),
        FilterSystemsUpdatable: sdk.String("error"),
        Limit: sdk.Int64(837945),
        Offset: sdk.Int64(673660),
        Search: sdk.String("quasi"),
        Sort: operations.ListPackagesSortEnumSystemsUpdatable.ToPointer(),
        Tags: []string{
            "vero",
            "nihil",
            "praesentium",
            "voluptatibus",
        },
    }, operations.ListPackagesSecurity{
        RhIdentity: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ControllersPackagesResponse != nil {
        // handle response
    }
}
```

## ListSystemAdvisories

Show me advisories for a system by given inventory id

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
    res, err := s.SDK.ListSystemAdvisories(ctx, operations.ListSystemAdvisoriesRequest{
        FilterAdvisoryType: sdk.String("ipsa"),
        FilterDescription: sdk.String("omnis"),
        FilterID: sdk.String("voluptate"),
        FilterPublicDate: sdk.String("cum"),
        FilterSeverity: sdk.String("perferendis"),
        FilterSynopsis: sdk.String("doloremque"),
        InventoryID: "reprehenderit",
        Limit: sdk.Int64(282807),
        Offset: sdk.Int64(979587),
        Search: sdk.String("dicta"),
        Sort: operations.ListSystemAdvisoriesSortEnumName.ToPointer(),
    }, operations.ListSystemAdvisoriesSecurity{
        RhIdentity: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ControllersSystemAdvisoriesResponse != nil {
        // handle response
    }
}
```

## ListSystems

Show me all my systems

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
    res, err := s.SDK.ListSystems(ctx, operations.ListSystemsRequest{
        FilterCreated: sdk.String("dolore"),
        FilterCulledTimestamp: sdk.String("iusto"),
        FilterDisplayName: sdk.String("dicta"),
        FilterID: sdk.String("harum"),
        FilterInsightsID: sdk.String("enim"),
        FilterLastEvaluation: sdk.String("accusamus"),
        FilterLastUpload: sdk.String("commodi"),
        FilterOtherCount: sdk.String("repudiandae"),
        FilterPackagesInstalled: sdk.String("quae"),
        FilterPackagesUpdatable: sdk.String("ipsum"),
        FilterRhbaCount: sdk.String("quidem"),
        FilterRheaCount: sdk.String("molestias"),
        FilterRhsaCount: sdk.String("excepturi"),
        FilterStale: sdk.String("pariatur"),
        FilterStaleTimestamp: sdk.String("modi"),
        FilterStaleWarningTimestamp: sdk.String("praesentium"),
        FilterSystemProfileSapSidsIn: []string{
            "voluptates",
            "quasi",
            "repudiandae",
        },
        FilterSystemProfileSapSystem: sdk.String("sint"),
        Limit: sdk.Int64(83112),
        Offset: sdk.Int64(929297),
        Search: sdk.String("incidunt"),
        Sort: operations.ListSystemsSortEnumLastUpload.ToPointer(),
        Tags: []string{
            "est",
        },
    }, operations.ListSystemsSecurity{
        RhIdentity: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ControllersSystemsResponse != nil {
        // handle response
    }
}
```

## PackageSystems

Show me all my systems which have a package installed

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
    res, err := s.SDK.PackageSystems(ctx, operations.PackageSystemsRequest{
        FilterSystemProfileSapSidsIn: []string{
            "explicabo",
            "deserunt",
            "distinctio",
            "quibusdam",
        },
        FilterSystemProfileSapSystem: sdk.String("labore"),
        Limit: sdk.Int64(264730),
        Offset: sdk.Int64(183191),
        PackageName: "aliquid",
        Tags: []string{
            "quos",
            "perferendis",
            "magni",
        },
    }, operations.PackageSystemsSecurity{
        RhIdentity: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ControllersPackageSystemsResponse != nil {
        // handle response
    }
}
```

## PackageVersions

Show me all package versions installed on some system

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
    res, err := s.SDK.PackageVersions(ctx, operations.PackageVersionsRequest{
        Limit: sdk.Int64(828940),
        Offset: sdk.Int64(369808),
        PackageName: "alias",
    }, operations.PackageVersionsSecurity{
        RhIdentity: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ControllersPackageVersionsResponse != nil {
        // handle response
    }
}
```

## SystemPackages

Show me details about a system packages by given inventory id

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
    res, err := s.SDK.SystemPackages(ctx, operations.SystemPackagesRequest{
        FilterDescription: sdk.String("fugit"),
        FilterEvra: sdk.String("dolorum"),
        FilterName: sdk.String("excepturi"),
        FilterSummary: sdk.String("tempora"),
        FilterUpdatable: sdk.Bool(false),
        InventoryID: "facilis",
        Limit: sdk.Int64(735194),
        Offset: sdk.Int64(288476),
        Search: sdk.String("delectus"),
    }, operations.SystemPackagesSecurity{
        RhIdentity: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ControllersSystemPackageResponse != nil {
        // handle response
    }
}
```

## ViewAdvisoriesSystems

View advisory-system pairs for selected systems and advisories

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ViewAdvisoriesSystems(ctx, shared.ControllersSystemsAdvisoriesRequest{
        Advisories: []string{
            "non",
            "eligendi",
        },
        Systems: []string{
            "aliquid",
            "provident",
            "necessitatibus",
        },
    }, operations.ViewAdvisoriesSystemsSecurity{
        RhIdentity: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ControllersAdvisoriesSystemsResponse != nil {
        // handle response
    }
}
```

## ViewSystemsAdvisories

View system-advisory pairs for selected systems and advisories

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ViewSystemsAdvisories(ctx, shared.ControllersSystemsAdvisoriesRequest{
        Advisories: []string{
            "officia",
            "dolor",
            "debitis",
        },
        Systems: []string{
            "dolorum",
            "in",
            "in",
            "illum",
        },
    }, operations.ViewSystemsAdvisoriesSecurity{
        RhIdentity: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ControllersSystemsAdvisoriesResponse != nil {
        // handle response
    }
}
```
