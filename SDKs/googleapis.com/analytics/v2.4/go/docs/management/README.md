# Management

### Available Operations

* [AnalyticsManagementAccountsList](#analyticsmanagementaccountslist) - Lists all accounts to which the user has access.
* [AnalyticsManagementGoalsList](#analyticsmanagementgoalslist) - Lists goals to which the user has access.
* [AnalyticsManagementProfilesList](#analyticsmanagementprofileslist) - Lists views (profiles) to which the user has access.
* [AnalyticsManagementSegmentsList](#analyticsmanagementsegmentslist) - Lists advanced segments to which the user has access.
* [AnalyticsManagementWebpropertiesList](#analyticsmanagementwebpropertieslist) - Lists web properties to which the user has access.

## AnalyticsManagementAccountsList

Lists all accounts to which the user has access.

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
    res, err := s.Management.AnalyticsManagementAccountsList(ctx, operations.AnalyticsManagementAccountsListRequest{
        Alt: shared.AltEnumAtom.ToPointer(),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("deserunt"),
        MaxResults: sdk.Int64(20218),
        OauthToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellendus"),
        StartIndex: sdk.Int64(957156),
        UserIP: sdk.String("quo"),
    }, operations.AnalyticsManagementAccountsListSecurity{
        Option1: &operations.AnalyticsManagementAccountsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AnalyticsManagementGoalsList

Lists goals to which the user has access.

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
    res, err := s.Management.AnalyticsManagementGoalsList(ctx, operations.AnalyticsManagementGoalsListRequest{
        AccountID: "odit",
        Alt: shared.AltEnumAtom.ToPointer(),
        Fields: sdk.String("at"),
        Key: sdk.String("at"),
        MaxResults: sdk.Int64(978619),
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quod",
        QuotaUser: sdk.String("quod"),
        StartIndex: sdk.Int64(461479),
        UserIP: sdk.String("totam"),
        WebPropertyID: "porro",
    }, operations.AnalyticsManagementGoalsListSecurity{
        Option1: &operations.AnalyticsManagementGoalsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AnalyticsManagementProfilesList

Lists views (profiles) to which the user has access.

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
    res, err := s.Management.AnalyticsManagementProfilesList(ctx, operations.AnalyticsManagementProfilesListRequest{
        AccountID: "dolorum",
        Alt: shared.AltEnumAtom.ToPointer(),
        Fields: sdk.String("dicta"),
        Key: sdk.String("nam"),
        MaxResults: sdk.Int64(639921),
        OauthToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        StartIndex: sdk.Int64(537373),
        UserIP: sdk.String("hic"),
        WebPropertyID: "optio",
    }, operations.AnalyticsManagementProfilesListSecurity{
        Option1: &operations.AnalyticsManagementProfilesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AnalyticsManagementSegmentsList

Lists advanced segments to which the user has access.

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
    res, err := s.Management.AnalyticsManagementSegmentsList(ctx, operations.AnalyticsManagementSegmentsListRequest{
        Alt: shared.AltEnumAtom.ToPointer(),
        Fields: sdk.String("totam"),
        Key: sdk.String("beatae"),
        MaxResults: sdk.Int64(414662),
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        StartIndex: sdk.Int64(186332),
        UserIP: sdk.String("impedit"),
    }, operations.AnalyticsManagementSegmentsListSecurity{
        Option1: &operations.AnalyticsManagementSegmentsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AnalyticsManagementWebpropertiesList

Lists web properties to which the user has access.

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
    res, err := s.Management.AnalyticsManagementWebpropertiesList(ctx, operations.AnalyticsManagementWebpropertiesListRequest{
        AccountID: "cum",
        Alt: shared.AltEnumAtom.ToPointer(),
        Fields: sdk.String("esse"),
        Key: sdk.String("ipsum"),
        MaxResults: sdk.Int64(568434),
        OauthToken: sdk.String("aspernatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        StartIndex: sdk.Int64(324141),
        UserIP: sdk.String("natus"),
    }, operations.AnalyticsManagementWebpropertiesListSecurity{
        Option1: &operations.AnalyticsManagementWebpropertiesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
