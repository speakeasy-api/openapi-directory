# Stats

### Available Operations

* [CloudsearchStatsGetIndex](#cloudsearchstatsgetindex) - Gets indexed item statistics aggreggated across all data sources. This API only returns statistics for previous dates; it doesn't return statistics for the current day. **Note:** This API requires a standard end user account to execute.
* [CloudsearchStatsGetQuery](#cloudsearchstatsgetquery) - Get the query statistics for customer. **Note:** This API requires a standard end user account to execute.
* [CloudsearchStatsGetSearchapplication](#cloudsearchstatsgetsearchapplication) - Get search application stats for customer. **Note:** This API requires a standard end user account to execute.
* [CloudsearchStatsGetSession](#cloudsearchstatsgetsession) - Get the # of search sessions, % of successful sessions with a click query statistics for customer. **Note:** This API requires a standard end user account to execute.
* [CloudsearchStatsGetUser](#cloudsearchstatsgetuser) - Get the users statistics for customer. **Note:** This API requires a standard end user account to execute.
* [CloudsearchStatsIndexDatasourcesGet](#cloudsearchstatsindexdatasourcesget) - Gets indexed item statistics for a single data source. **Note:** This API requires a standard end user account to execute.
* [CloudsearchStatsQuerySearchapplicationsGet](#cloudsearchstatsquerysearchapplicationsget) - Get the query statistics for search application. **Note:** This API requires a standard end user account to execute.
* [CloudsearchStatsSessionSearchapplicationsGet](#cloudsearchstatssessionsearchapplicationsget) - Get the # of search sessions, % of successful sessions with a click query statistics for search application. **Note:** This API requires a standard end user account to execute.
* [CloudsearchStatsUserSearchapplicationsGet](#cloudsearchstatsusersearchapplicationsget) - Get the users statistics for search application. **Note:** This API requires a standard end user account to execute.

## CloudsearchStatsGetIndex

Gets indexed item statistics aggreggated across all data sources. This API only returns statistics for previous dates; it doesn't return statistics for the current day. **Note:** This API requires a standard end user account to execute.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Stats.CloudsearchStatsGetIndex(ctx, operations.CloudsearchStatsGetIndexRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("inventore"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("voluptatibus"),
        FromDateDay: sdk.Int64(719620),
        FromDateMonth: sdk.Int64(608593),
        FromDateYear: sdk.Int64(966390),
        Key: sdk.String("minima"),
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maxime"),
        ToDateDay: sdk.Int64(300403),
        ToDateMonth: sdk.Int64(836364),
        ToDateYear: sdk.Int64(549501),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("itaque"),
    }, operations.CloudsearchStatsGetIndexSecurity{
        Option1: &operations.CloudsearchStatsGetIndexSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCustomerIndexStatsResponse != nil {
        // handle response
    }
}
```

## CloudsearchStatsGetQuery

Get the query statistics for customer. **Note:** This API requires a standard end user account to execute.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Stats.CloudsearchStatsGetQuery(ctx, operations.CloudsearchStatsGetQueryRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("nam"),
        FromDateDay: sdk.Int64(877399),
        FromDateMonth: sdk.Int64(32901),
        FromDateYear: sdk.Int64(371919),
        Key: sdk.String("vel"),
        OauthToken: sdk.String("alias"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        ToDateDay: sdk.Int64(247685),
        ToDateMonth: sdk.Int64(978548),
        ToDateYear: sdk.Int64(318233),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("nulla"),
    }, operations.CloudsearchStatsGetQuerySecurity{
        Option1: &operations.CloudsearchStatsGetQuerySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCustomerQueryStatsResponse != nil {
        // handle response
    }
}
```

## CloudsearchStatsGetSearchapplication

Get search application stats for customer. **Note:** This API requires a standard end user account to execute.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Stats.CloudsearchStatsGetSearchapplication(ctx, operations.CloudsearchStatsGetSearchapplicationRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("reprehenderit"),
        EndDateDay: sdk.Int64(667715),
        EndDateMonth: sdk.Int64(336102),
        EndDateYear: sdk.Int64(571844),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        StartDateDay: sdk.Int64(991891),
        StartDateMonth: sdk.Int64(404306),
        StartDateYear: sdk.Int64(376741),
        UploadType: sdk.String("debitis"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.CloudsearchStatsGetSearchapplicationSecurity{
        Option1: &operations.CloudsearchStatsGetSearchapplicationSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCustomerSearchApplicationStatsResponse != nil {
        // handle response
    }
}
```

## CloudsearchStatsGetSession

Get the # of search sessions, % of successful sessions with a click query statistics for customer. **Note:** This API requires a standard end user account to execute.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Stats.CloudsearchStatsGetSession(ctx, operations.CloudsearchStatsGetSessionRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("consectetur"),
        FromDateDay: sdk.Int64(244889),
        FromDateMonth: sdk.Int64(538869),
        FromDateYear: sdk.Int64(216457),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("magni"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("soluta"),
        ToDateDay: sdk.Int64(922757),
        ToDateMonth: sdk.Int64(721430),
        ToDateYear: sdk.Int64(294076),
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("voluptate"),
    }, operations.CloudsearchStatsGetSessionSecurity{
        Option1: &operations.CloudsearchStatsGetSessionSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCustomerSessionStatsResponse != nil {
        // handle response
    }
}
```

## CloudsearchStatsGetUser

Get the users statistics for customer. **Note:** This API requires a standard end user account to execute.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Stats.CloudsearchStatsGetUser(ctx, operations.CloudsearchStatsGetUserRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dignissimos"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quo"),
        Fields: sdk.String("deleniti"),
        FromDateDay: sdk.Int64(844235),
        FromDateMonth: sdk.Int64(437814),
        FromDateYear: sdk.Int64(139072),
        Key: sdk.String("voluptatibus"),
        OauthToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        ToDateDay: sdk.Int64(842855),
        ToDateMonth: sdk.Int64(78969),
        ToDateYear: sdk.Int64(818034),
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.CloudsearchStatsGetUserSecurity{
        Option1: &operations.CloudsearchStatsGetUserSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCustomerUserStatsResponse != nil {
        // handle response
    }
}
```

## CloudsearchStatsIndexDatasourcesGet

Gets indexed item statistics for a single data source. **Note:** This API requires a standard end user account to execute.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Stats.CloudsearchStatsIndexDatasourcesGet(ctx, operations.CloudsearchStatsIndexDatasourcesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aliquam"),
        Fields: sdk.String("velit"),
        FromDateDay: sdk.Int64(75359),
        FromDateMonth: sdk.Int64(36561),
        FromDateYear: sdk.Int64(424663),
        Key: sdk.String("ea"),
        Name: "Leigh Mante",
        OauthToken: sdk.String("ut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perspiciatis"),
        ToDateDay: sdk.Int64(935302),
        ToDateMonth: sdk.Int64(117525),
        ToDateYear: sdk.Int64(772266),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("iste"),
    }, operations.CloudsearchStatsIndexDatasourcesGetSecurity{
        Option1: &operations.CloudsearchStatsIndexDatasourcesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDataSourceIndexStatsResponse != nil {
        // handle response
    }
}
```

## CloudsearchStatsQuerySearchapplicationsGet

Get the query statistics for search application. **Note:** This API requires a standard end user account to execute.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Stats.CloudsearchStatsQuerySearchapplicationsGet(ctx, operations.CloudsearchStatsQuerySearchapplicationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("alias"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("itaque"),
        Fields: sdk.String("velit"),
        FromDateDay: sdk.Int64(673838),
        FromDateMonth: sdk.Int64(250398),
        FromDateYear: sdk.Int64(224467),
        Key: sdk.String("iusto"),
        Name: "Sharon Adams",
        OauthToken: sdk.String("ea"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        ToDateDay: sdk.Int64(377406),
        ToDateMonth: sdk.Int64(705148),
        ToDateYear: sdk.Int64(809365),
        UploadType: sdk.String("perspiciatis"),
        UploadProtocol: sdk.String("expedita"),
    }, operations.CloudsearchStatsQuerySearchapplicationsGetSecurity{
        Option1: &operations.CloudsearchStatsQuerySearchapplicationsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSearchApplicationQueryStatsResponse != nil {
        // handle response
    }
}
```

## CloudsearchStatsSessionSearchapplicationsGet

Get the # of search sessions, % of successful sessions with a click query statistics for search application. **Note:** This API requires a standard end user account to execute.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Stats.CloudsearchStatsSessionSearchapplicationsGet(ctx, operations.CloudsearchStatsSessionSearchapplicationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("a"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("unde"),
        FromDateDay: sdk.Int64(897543),
        FromDateMonth: sdk.Int64(654082),
        FromDateYear: sdk.Int64(769967),
        Key: sdk.String("ipsam"),
        Name: "Jodi Mueller",
        OauthToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        ToDateDay: sdk.Int64(233173),
        ToDateMonth: sdk.Int64(112427),
        ToDateYear: sdk.Int64(81371),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("ad"),
    }, operations.CloudsearchStatsSessionSearchapplicationsGetSecurity{
        Option1: &operations.CloudsearchStatsSessionSearchapplicationsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSearchApplicationSessionStatsResponse != nil {
        // handle response
    }
}
```

## CloudsearchStatsUserSearchapplicationsGet

Get the users statistics for search application. **Note:** This API requires a standard end user account to execute.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Stats.CloudsearchStatsUserSearchapplicationsGet(ctx, operations.CloudsearchStatsUserSearchapplicationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iste"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nemo"),
        Fields: sdk.String("soluta"),
        FromDateDay: sdk.Int64(726227),
        FromDateMonth: sdk.Int64(526907),
        FromDateYear: sdk.Int64(678060),
        Key: sdk.String("odio"),
        Name: "Mary Cummings Jr.",
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("neque"),
        ToDateDay: sdk.Int64(348357),
        ToDateMonth: sdk.Int64(932394),
        ToDateYear: sdk.Int64(88248),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("unde"),
    }, operations.CloudsearchStatsUserSearchapplicationsGetSecurity{
        Option1: &operations.CloudsearchStatsUserSearchapplicationsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSearchApplicationUserStatsResponse != nil {
        // handle response
    }
}
```
