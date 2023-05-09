# Article

### Available Operations

* [ArticleAddMeasureUnit](#articleaddmeasureunit) - Add measure unit
* [ArticleDelete](#articledelete) - Delete article from the system
            
* [ArticleGetAddons](#articlegetaddons)
* [ArticleGetMeasureUnits](#articlegetmeasureunits) - Get mesure units
* [ArticleGetRevenueAccounts](#articlegetrevenueaccounts) - Get Revenue Accounts 
* [ArticleGymArticleDetails](#articlegymarticledetails) - Get Gym specific properties for article
            
* [ArticlePost](#articlepost) - Add new article
            
* [ArticlePut](#articleput) - update existing article
            
* [ArticleSearch](#articlesearch) - Search articles
It will only return basic information of article
            
* [ArticleUpdateArticleGymDetails](#articleupdatearticlegymdetails) - Add article details that associate with a Gym
            
* [ArticleUpdateStatus](#articleupdatestatus) - Deactivate existing article 
* [ArticleGet](#articleget) - Get article details
This will return all properties related to article entity
            

## ArticleAddMeasureUnit

Add measure unit

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Article.ArticleAddMeasureUnit(ctx, []shared.MeasureUnitDTO{
        shared.MeasureUnitDTO{
            ID: sdk.Int(479977),
            Name: sdk.String("Charlie Walsh II"),
            Type: sdk.String("veritatis"),
        },
        shared.MeasureUnitDTO{
            ID: sdk.Int(648172),
            Name: sdk.String("Roberta Sipes"),
            Type: sdk.String("odit"),
        },
        shared.MeasureUnitDTO{
            ID: sdk.Int(870013),
            Name: sdk.String("Emilio Krajcik"),
            Type: sdk.String("esse"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DefaultResponseDTOOfStatusDTO != nil {
        // handle response
    }
}
```

## ArticleDelete

Delete article from the system
            

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
    res, err := s.Article.ArticleDelete(ctx, operations.ArticleDeleteRequest{
        ArticleID: sdk.Int(520478),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DefaultResponseDTOOfInteger != nil {
        // handle response
    }
}
```

## ArticleGetAddons

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
    res, err := s.Article.ArticleGetAddons(ctx, operations.ArticleGetAddonsRequest{
        GymIds: sdk.String("porro"),
        Limit: sdk.Int(678880),
        Offset: sdk.Int(118274),
        SearchText: sdk.String("nam"),
        Type: sdk.String("officia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DefaultResponseDTOOfListOfArticleSearchDTO != nil {
        // handle response
    }
}
```

## ArticleGetMeasureUnits

Get mesure units

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
    res, err := s.Article.ArticleGetMeasureUnits(ctx, operations.ArticleGetMeasureUnitsRequest{
        Type: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DefaultResponseDTOOfStatusDTO != nil {
        // handle response
    }
}
```

## ArticleGetRevenueAccounts

Get Revenue Accounts 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Article.ArticleGetRevenueAccounts(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.DefaultResponseDTOOfStatusDTO != nil {
        // handle response
    }
}
```

## ArticleGymArticleDetails

Get Gym specific properties for article
            

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
    res, err := s.Article.ArticleGymArticleDetails(ctx, operations.ArticleGymArticleDetailsRequest{
        ArticleID: 143353,
        GymID: 537373,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GymArticleDetailsDTO != nil {
        // handle response
    }
}
```

## ArticlePost

Add new article
            

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
    res, err := s.Article.ArticlePost(ctx, shared.ArticleDTO{
        ActiveStatus: sdk.Bool(false),
        ApplyForAllGyms: sdk.Bool(false),
        ArticleID: sdk.Int(944669),
        AvailableGyms: []shared.GymDTO{
            shared.GymDTO{
                ExternalGymNumber: sdk.Int(521848),
                GymID: sdk.Int(105907),
                GymName: sdk.String("commodi"),
                Location: sdk.String("molestiae"),
            },
            shared.GymDTO{
                ExternalGymNumber: sdk.Int(264555),
                GymID: sdk.Int(186332),
                GymName: sdk.String("impedit"),
                Location: sdk.String("cum"),
            },
            shared.GymDTO{
                ExternalGymNumber: sdk.Int(456150),
                GymID: sdk.Int(216550),
                GymName: sdk.String("excepturi"),
                Location: sdk.String("aspernatur"),
            },
            shared.GymDTO{
                ExternalGymNumber: sdk.Int(18789),
                GymID: sdk.Int(324141),
                GymName: sdk.String("natus"),
                Location: sdk.String("sed"),
            },
        },
        AvailableQty: sdk.Float64(6120.96),
        Barcode: sdk.String("dolor"),
        CreatedDate: types.MustTimeFromString("2022-03-24T20:42:46.563Z"),
        CreatedUser: sdk.String("hic"),
        CronExpression: sdk.String("saepe"),
        Description: sdk.String("fuga"),
        Discount: sdk.Float64(4499.5),
        EmployeeDiscount: sdk.Float64(3595.08),
        EmployeePrice: sdk.Float64(6130.64),
        GymArticles: []shared.GymArticleDetailsDTO{
            shared.GymArticleDetailsDTO{
                ArticleID: sdk.Int(902349),
                AvailableQty: sdk.Float64(6976.31),
                CreatedUser: sdk.String("architecto"),
                EmployeeDiscount: sdk.Float64(602.25),
                EmployeePrice: sdk.Float64(9698.1),
                GymID: sdk.Int(666767),
                GymIDList: sdk.String("mollitia"),
                GymName: sdk.String("laborum"),
                ID: sdk.Int(170909),
                IsDefault: sdk.Bool(false),
                IsInventoryItem: sdk.Bool(false),
                IsObsolete: sdk.Bool(false),
                ModifiedUser: sdk.String("dolorem"),
                ReorderLevel: sdk.Float64(3581.52),
                RevenueAccountID: sdk.Int(128926),
                SellingPrice: sdk.Float64(7506.86),
            },
            shared.GymArticleDetailsDTO{
                ArticleID: sdk.Int(315428),
                AvailableQty: sdk.Float64(6078.31),
                CreatedUser: sdk.String("nemo"),
                EmployeeDiscount: sdk.Float64(3250.47),
                EmployeePrice: sdk.Float64(5701.97),
                GymID: sdk.Int(38425),
                GymIDList: sdk.String("iure"),
                GymName: sdk.String("culpa"),
                ID: sdk.Int(988374),
                IsDefault: sdk.Bool(false),
                IsInventoryItem: sdk.Bool(false),
                IsObsolete: sdk.Bool(false),
                ModifiedUser: sdk.String("sapiente"),
                ReorderLevel: sdk.Float64(1020.44),
                RevenueAccountID: sdk.Int(652790),
                SellingPrice: sdk.Float64(2088.76),
            },
        },
        IsAddOn: sdk.Bool(false),
        IsInventoryItem: sdk.Bool(false),
        IsObsolete: sdk.Bool(false),
        MeasureUnit: "culpa",
        ModifiedDate: types.MustTimeFromString("2022-01-02T17:10:32.894Z"),
        ModifiedUser: sdk.String("mollitia"),
        Name: "Francis Jerde",
        Number: sdk.Int(244425),
        Price: 6235.1,
        ReorderLevel: sdk.Float64(1589.69),
        RevenueAccountID: sdk.Int(338007),
        SellingPrice: sdk.Float64(1103.75),
        Tags: sdk.String("laborum"),
        Type: "animi",
        Vat: sdk.Float64(3172.02),
        VatApplicable: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DefaultResponseDTOOfStatusDTO != nil {
        // handle response
    }
}
```

## ArticlePut

update existing article
            

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
    res, err := s.Article.ArticlePut(ctx, shared.ArticleDTO{
        ActiveStatus: sdk.Bool(false),
        ApplyForAllGyms: sdk.Bool(false),
        ArticleID: sdk.Int(138183),
        AvailableGyms: []shared.GymDTO{
            shared.GymDTO{
                ExternalGymNumber: sdk.Int(196582),
                GymID: sdk.Int(949572),
                GymName: sdk.String("ipsam"),
                Location: sdk.String("id"),
            },
            shared.GymDTO{
                ExternalGymNumber: sdk.Int(820994),
                GymID: sdk.Int(13571),
                GymName: sdk.String("quasi"),
                Location: sdk.String("error"),
            },
            shared.GymDTO{
                ExternalGymNumber: sdk.Int(837945),
                GymID: sdk.Int(673660),
                GymName: sdk.String("quasi"),
                Location: sdk.String("reiciendis"),
            },
            shared.GymDTO{
                ExternalGymNumber: sdk.Int(976460),
                GymID: sdk.Int(878194),
                GymName: sdk.String("nihil"),
                Location: sdk.String("praesentium"),
            },
        },
        AvailableQty: sdk.Float64(9767.62),
        Barcode: sdk.String("ipsa"),
        CreatedDate: types.MustTimeFromString("2022-02-05T15:41:25.512Z"),
        CreatedUser: sdk.String("cum"),
        CronExpression: sdk.String("perferendis"),
        Description: sdk.String("doloremque"),
        Discount: sdk.Float64(4417.11),
        EmployeeDiscount: sdk.Float64(2828.07),
        EmployeePrice: sdk.Float64(9795.87),
        GymArticles: []shared.GymArticleDetailsDTO{
            shared.GymArticleDetailsDTO{
                ArticleID: sdk.Int(359444),
                AvailableQty: sdk.Float64(2961.4),
                CreatedUser: sdk.String("iusto"),
                EmployeeDiscount: sdk.Float64(1187.27),
                EmployeePrice: sdk.Float64(6886.61),
                GymID: sdk.Int(317983),
                GymIDList: sdk.String("accusamus"),
                GymName: sdk.String("commodi"),
                ID: sdk.Int(918236),
                IsDefault: sdk.Bool(false),
                IsInventoryItem: sdk.Bool(false),
                IsObsolete: sdk.Bool(false),
                ModifiedUser: sdk.String("quae"),
                ReorderLevel: sdk.Float64(2168.22),
                RevenueAccountID: sdk.Int(692472),
                SellingPrice: sdk.Float64(5651.89),
            },
        },
        IsAddOn: sdk.Bool(false),
        IsInventoryItem: sdk.Bool(false),
        IsObsolete: sdk.Bool(false),
        MeasureUnit: "excepturi",
        ModifiedDate: types.MustTimeFromString("2022-03-16T09:33:50.291Z"),
        ModifiedUser: sdk.String("praesentium"),
        Name: "Grady Botsford",
        Number: sdk.Int(83112),
        Price: 9292.97,
        ReorderLevel: sdk.Float64(2777.18),
        RevenueAccountID: sdk.Int(318569),
        SellingPrice: sdk.Float64(93.56),
        Tags: sdk.String("est"),
        Type: "quibusdam",
        Vat: sdk.Float64(1317.97),
        VatApplicable: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DefaultResponseDTOOfStatusDTO != nil {
        // handle response
    }
}
```

## ArticleSearch

Search articles
It will only return basic information of article
            

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
    res, err := s.Article.ArticleSearch(ctx, operations.ArticleSearchRequest{
        ActiveStatus: sdk.Int(647174),
        GymID: sdk.Int(716327),
        Limit: sdk.Int(841386),
        Offset: sdk.Int(289406),
        OrderBy: sdk.String("modi"),
        SearchText: sdk.String("qui"),
        Type: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DefaultResponseDTOOfListOfArticleSearchDTO != nil {
        // handle response
    }
}
```

## ArticleUpdateArticleGymDetails

Add article details that associate with a Gym
            

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Article.ArticleUpdateArticleGymDetails(ctx, []shared.GymArticleDetailsDTO{
        shared.GymArticleDetailsDTO{
            ArticleID: sdk.Int(552822),
            AvailableQty: sdk.Float64(201.07),
            CreatedUser: sdk.String("magni"),
            EmployeeDiscount: sdk.Float64(8289.4),
            EmployeePrice: sdk.Float64(3698.08),
            GymID: sdk.Int(4695),
            GymIDList: sdk.String("fugit"),
            GymName: sdk.String("dolorum"),
            ID: sdk.Int(569618),
            IsDefault: sdk.Bool(false),
            IsInventoryItem: sdk.Bool(false),
            IsObsolete: sdk.Bool(false),
            ModifiedUser: sdk.String("tempora"),
            ReorderLevel: sdk.Float64(7037.37),
            RevenueAccountID: sdk.Int(735194),
            SellingPrice: sdk.Float64(2884.76),
        },
        shared.GymArticleDetailsDTO{
            ArticleID: sdk.Int(962189),
            AvailableQty: sdk.Float64(4332.88),
            CreatedUser: sdk.String("non"),
            EmployeeDiscount: sdk.Float64(7561.07),
            EmployeePrice: sdk.Float64(5761.57),
            GymID: sdk.Int(396098),
            GymIDList: sdk.String("provident"),
            GymName: sdk.String("necessitatibus"),
            ID: sdk.Int(572252),
            IsDefault: sdk.Bool(false),
            IsInventoryItem: sdk.Bool(false),
            IsObsolete: sdk.Bool(false),
            ModifiedUser: sdk.String("officia"),
            ReorderLevel: sdk.Float64(2230.81),
            RevenueAccountID: sdk.Int(891555),
            SellingPrice: sdk.Float64(9527.49),
        },
        shared.GymArticleDetailsDTO{
            ArticleID: sdk.Int(680056),
            AvailableQty: sdk.Float64(4471.25),
            CreatedUser: sdk.String("in"),
            EmployeeDiscount: sdk.Float64(8464.09),
            EmployeePrice: sdk.Float64(9785.71),
            GymID: sdk.Int(699479),
            GymIDList: sdk.String("dicta"),
            GymName: sdk.String("magnam"),
            ID: sdk.Int(767024),
            IsDefault: sdk.Bool(false),
            IsInventoryItem: sdk.Bool(false),
            IsObsolete: sdk.Bool(false),
            ModifiedUser: sdk.String("facere"),
            ReorderLevel: sdk.Float64(4118.2),
            RevenueAccountID: sdk.Int(396506),
            SellingPrice: sdk.Float64(6754.39),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DefaultResponseDTOOfStatusDTO != nil {
        // handle response
    }
}
```

## ArticleUpdateStatus

Deactivate existing article 

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
    res, err := s.Article.ArticleUpdateStatus(ctx, operations.ArticleUpdateStatusRequest{
        ArticleID: sdk.Int(881104),
        Status: sdk.Int(249796),
        UserName: sdk.String("Kristian_Haley69"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DefaultResponseDTOOfInteger != nil {
        // handle response
    }
}
```

## ArticleGet

Get article details
This will return all properties related to article entity
            

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
    res, err := s.Article.ArticleGet(ctx, operations.ArticleGetRequest{
        ArticleID: 588465,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DefaultResponseDTOOfArticleDTO != nil {
        // handle response
    }
}
```
