# Package

### Available Operations

* [PackageDelete](#packagedelete) - Delete existing package
            
* [PackageGet](#packageget) - Get package details by packageId
            
* [PackagePost](#packagepost) - Insert new package into the system
            
* [PackagePut](#packageput) - Update existing package by its ID
            
* [PackageSearch](#packagesearch) - Search packages
            
* [PackageUpdateStatus](#packageupdatestatus) - Status update of existing package 

## PackageDelete

Delete existing package
            

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Package.PackageDelete(ctx, operations.PackageDeleteRequest{
        PackageID: sdk.Int(474867),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DefaultResponseDTOOfBoolean != nil {
        // handle response
    }
}
```

## PackageGet

Get package details by packageId
            

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Package.PackageGet(ctx, operations.PackageGetRequest{
        PackageID: sdk.Int(19193),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DefaultResponseDTOOfPackageDTO != nil {
        // handle response
    }
}
```

## PackagePost

Insert new package into the system
            

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Package.PackagePost(ctx, shared.PackageDTO{
        AddOns: []shared.PackageItemDTO{
            shared.PackageItemDTO{
                ArticleID: 301575,
                ArticleName: sdk.String("distinctio"),
                ArticleNumber: sdk.Int(660174),
                ArticlePrice: sdk.Float64(2879.91),
                EndOrder: sdk.Int(290077),
                IsIncludeServiceInCharge: sdk.Bool(false),
                MeasureUnit: sdk.String("suscipit"),
                NumberOfItems: sdk.Float64(6180.16),
                StartOrder: sdk.Int(749170),
            },
            shared.PackageItemDTO{
                ArticleID: 428769,
                ArticleName: sdk.String("vero"),
                ArticleNumber: sdk.Int(135474),
                ArticlePrice: sdk.Float64(1028.63),
                EndOrder: sdk.Int(298282),
                IsIncludeServiceInCharge: sdk.Bool(false),
                MeasureUnit: sdk.String("et"),
                NumberOfItems: sdk.Float64(5699.65),
                StartOrder: sdk.Int(354047),
            },
        },
        AddonFee: sdk.Float64(5908.73),
        ApplyForAllGyms: sdk.Bool(false),
        AvailableGyms: []shared.GymDTO{
            shared.GymDTO{
                ExternalGymNumber: sdk.Int(574325),
                GymID: sdk.Int(33625),
                GymName: sdk.String("mollitia"),
                Location: sdk.String("reiciendis"),
            },
            shared.GymDTO{
                ExternalGymNumber: sdk.Int(652103),
                GymID: sdk.Int(320997),
                GymName: sdk.String("eum"),
                Location: sdk.String("dolor"),
            },
            shared.GymDTO{
                ExternalGymNumber: sdk.Int(896547),
                GymID: sdk.Int(141264),
                GymName: sdk.String("nemo"),
                Location: sdk.String("quasi"),
            },
        },
        BindingPeriod: sdk.Int(435865),
        CreatedDate: types.MustTimeFromString("2020-04-29T08:15:14.819Z"),
        CreatedUser: sdk.String("eius"),
        Description: sdk.String("maxime"),
        EndDate: types.MustTimeFromString("2021-08-05T03:52:18.835Z"),
        ExpireInMonths: sdk.Int(447926),
        Features: sdk.String("architecto"),
        FreeMonths: sdk.Int(99569),
        InstructionsToGymUsers: sdk.String("repudiandae"),
        InstructionsToWebUsers: sdk.String("ullam"),
        IsActive: sdk.Bool(false),
        IsAtg: sdk.Bool(false),
        IsAutoRenew: sdk.Bool(false),
        IsFirstMonthFree: sdk.Bool(false),
        IsRegistrationFee: sdk.Bool(false),
        IsRestAmount: sdk.Bool(false),
        IsShownInMobile: sdk.Bool(false),
        IsSponsorPackage: sdk.Bool(false),
        MaximumGiveAwayRestAmount: sdk.Float64(7142.42),
        MemberCanAddAddOns: sdk.Bool(false),
        MemberCanLeaveWithinFreePeriod: sdk.Bool(false),
        MemberCanRemoveAddOns: sdk.Bool(false),
        ModifiedDate: types.MustTimeFromString("2022-01-01T10:06:00.916Z"),
        ModifiedUser: sdk.String("quibusdam"),
        MonthlyFee: sdk.Float64(1494.48),
        NextPackageNumber: sdk.Int(904648),
        NumberOfInstallments: sdk.Int(868126),
        NumberOfVisits: sdk.Int(37559),
        PackageID: sdk.Int(162493),
        PackageName: "praesentium",
        PackageNumber: sdk.String("natus"),
        PackageType: "magni",
        PerVisitPrice: sdk.Float64(1238.2),
        RegistrationFee: 7790.51,
        ServiceFee: 8480.09,
        ShownInWeb: sdk.Bool(false),
        StartDate: types.MustTimeFromString("2020-07-30T23:39:27.609Z"),
        Tags: sdk.String("ea"),
        TotalPrice: sdk.Float64(5691.01),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DefaultResponseDTOOfStatusDTO != nil {
        // handle response
    }
}
```

## PackagePut

Update existing package by its ID
            

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Package.PackagePut(ctx, shared.PackageDTO{
        AddOns: []shared.PackageItemDTO{
            shared.PackageItemDTO{
                ArticleID: 407183,
                ArticleName: sdk.String("accusantium"),
                ArticleNumber: sdk.Int(69167),
                ArticlePrice: sdk.Float64(9825.75),
                EndOrder: sdk.Int(697429),
                IsIncludeServiceInCharge: sdk.Bool(false),
                MeasureUnit: sdk.String("ipsam"),
                NumberOfItems: sdk.Float64(4535.43),
                StartOrder: sdk.Int(420075),
            },
        },
        AddonFee: sdk.Float64(7220.56),
        ApplyForAllGyms: sdk.Bool(false),
        AvailableGyms: []shared.GymDTO{
            shared.GymDTO{
                ExternalGymNumber: sdk.Int(866383),
                GymID: sdk.Int(365496),
                GymName: sdk.String("voluptatibus"),
                Location: sdk.String("perferendis"),
            },
        },
        BindingPeriod: sdk.Int(855804),
        CreatedDate: types.MustTimeFromString("2022-12-27T17:23:03.738Z"),
        CreatedUser: sdk.String("cumque"),
        Description: sdk.String("corporis"),
        EndDate: types.MustTimeFromString("2020-10-23T15:50:52.666Z"),
        ExpireInMonths: sdk.Int(749999),
        Features: sdk.String("dolores"),
        FreeMonths: sdk.Int(339404),
        InstructionsToGymUsers: sdk.String("totam"),
        InstructionsToWebUsers: sdk.String("dignissimos"),
        IsActive: sdk.Bool(false),
        IsAtg: sdk.Bool(false),
        IsAutoRenew: sdk.Bool(false),
        IsFirstMonthFree: sdk.Bool(false),
        IsRegistrationFee: sdk.Bool(false),
        IsRestAmount: sdk.Bool(false),
        IsShownInMobile: sdk.Bool(false),
        IsSponsorPackage: sdk.Bool(false),
        MaximumGiveAwayRestAmount: sdk.Float64(543.38),
        MemberCanAddAddOns: sdk.Bool(false),
        MemberCanLeaveWithinFreePeriod: sdk.Bool(false),
        MemberCanRemoveAddOns: sdk.Bool(false),
        ModifiedDate: types.MustTimeFromString("2022-10-20T00:01:48.775Z"),
        ModifiedUser: sdk.String("eos"),
        MonthlyFee: sdk.Float64(185.21),
        NextPackageNumber: sdk.Int(170986),
        NumberOfInstallments: sdk.Int(793698),
        NumberOfVisits: sdk.Int(463451),
        PackageID: sdk.Int(223924),
        PackageName: "vero",
        PackageNumber: sdk.String("nostrum"),
        PackageType: "hic",
        PerVisitPrice: sdk.Float64(9280.82),
        RegistrationFee: 6082.53,
        ServiceFee: 7044.15,
        ShownInWeb: sdk.Bool(false),
        StartDate: types.MustTimeFromString("2022-12-08T18:10:54.422Z"),
        Tags: sdk.String("porro"),
        TotalPrice: sdk.Float64(1646.94),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DefaultResponseDTOOfStatusDTO != nil {
        // handle response
    }
}
```

## PackageSearch

Search packages
            

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Package.PackageSearch(ctx, operations.PackageSearchRequest{
        ActiveStatus: sdk.Int(500026),
        CategoryID: sdk.Int(621479),
        EndPrice: sdk.Float64(503.7),
        GymID: sdk.Int(577229),
        Limit: sdk.Int(699098),
        Offset: sdk.Int(237893),
        OrderBy: sdk.String("asperiores"),
        RequestSource: sdk.Int(934214),
        SearchText: sdk.String("modi"),
        StartpPrice: sdk.Float64(6139.66),
        Type: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DefaultResponseDTOOfPackageSearchDTOS != nil {
        // handle response
    }
}
```

## PackageUpdateStatus

Status update of existing package 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Package.PackageUpdateStatus(ctx, operations.PackageUpdateStatusRequest{
        PackageID: sdk.Int(535633),
        Status: sdk.Int(864282),
        UserName: sdk.String("Lambert_Rolfson31"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DefaultResponseDTOOfBoolean != nil {
        // handle response
    }
}
```
