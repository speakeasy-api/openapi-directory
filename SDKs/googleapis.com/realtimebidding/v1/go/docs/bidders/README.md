# Bidders

### Available Operations

* [RealtimebiddingBiddersCreativesWatch](#realtimebiddingbidderscreativeswatch) - Watches all creatives pertaining to a bidder. It is sufficient to invoke this endpoint once per bidder. A Pub/Sub topic will be created and notifications will be pushed to the topic when any of the bidder's creatives change status. All of the bidder's service accounts will have access to read from the topic. Subsequent invocations of this method will return the existing Pub/Sub configuration.
* [RealtimebiddingBiddersEndpointsList](#realtimebiddingbiddersendpointslist) - Lists all the bidder's endpoints.
* [RealtimebiddingBiddersList](#realtimebiddingbidderslist) - Lists all the bidder accounts that belong to the caller.
* [RealtimebiddingBiddersPretargetingConfigsActivate](#realtimebiddingbidderspretargetingconfigsactivate) - Activates a pretargeting configuration.
* [RealtimebiddingBiddersPretargetingConfigsAddTargetedApps](#realtimebiddingbidderspretargetingconfigsaddtargetedapps) - Adds targeted apps to the pretargeting configuration.
* [RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishers](#realtimebiddingbidderspretargetingconfigsaddtargetedpublishers) - Adds targeted publishers to the pretargeting config.
* [RealtimebiddingBiddersPretargetingConfigsAddTargetedSites](#realtimebiddingbidderspretargetingconfigsaddtargetedsites) - Adds targeted sites to the pretargeting configuration.
* [RealtimebiddingBiddersPretargetingConfigsCreate](#realtimebiddingbidderspretargetingconfigscreate) - Creates a pretargeting configuration. A pretargeting configuration's state (PretargetingConfig.state) is active upon creation, and it will start to affect traffic shortly after. A bidder may create a maximum of 10 pretargeting configurations. Attempts to exceed this maximum results in a 400 bad request error.
* [RealtimebiddingBiddersPretargetingConfigsDelete](#realtimebiddingbidderspretargetingconfigsdelete) - Deletes a pretargeting configuration.
* [RealtimebiddingBiddersPretargetingConfigsList](#realtimebiddingbidderspretargetingconfigslist) - Lists all pretargeting configurations for a single bidder.
* [RealtimebiddingBiddersPretargetingConfigsRemoveTargetedApps](#realtimebiddingbidderspretargetingconfigsremovetargetedapps) - Removes targeted apps from the pretargeting configuration.
* [RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishers](#realtimebiddingbidderspretargetingconfigsremovetargetedpublishers) - Removes targeted publishers from the pretargeting config.
* [RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSites](#realtimebiddingbidderspretargetingconfigsremovetargetedsites) - Removes targeted sites from the pretargeting configuration.
* [RealtimebiddingBiddersPretargetingConfigsSuspend](#realtimebiddingbidderspretargetingconfigssuspend) - Suspends a pretargeting configuration.
* [RealtimebiddingBiddersPublisherConnectionsBatchApprove](#realtimebiddingbidderspublisherconnectionsbatchapprove) - Batch approves multiple publisher connections.
* [RealtimebiddingBiddersPublisherConnectionsBatchReject](#realtimebiddingbidderspublisherconnectionsbatchreject) - Batch rejects multiple publisher connections.
* [RealtimebiddingBiddersPublisherConnectionsList](#realtimebiddingbidderspublisherconnectionslist) - Lists publisher connections for a given bidder.

## RealtimebiddingBiddersCreativesWatch

Watches all creatives pertaining to a bidder. It is sufficient to invoke this endpoint once per bidder. A Pub/Sub topic will be created and notifications will be pushed to the topic when any of the bidder's creatives change status. All of the bidder's service accounts will have access to read from the topic. Subsequent invocations of this method will return the existing Pub/Sub configuration.

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
    res, err := s.Bidders.RealtimebiddingBiddersCreativesWatch(ctx, operations.RealtimebiddingBiddersCreativesWatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "minus": "placeat",
            "voluptatum": "iusto",
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("temporibus"),
        Key: sdk.String("ab"),
        OauthToken: sdk.String("quis"),
        Parent: "veritatis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.RealtimebiddingBiddersCreativesWatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WatchCreativesResponse != nil {
        // handle response
    }
}
```

## RealtimebiddingBiddersEndpointsList

Lists all the bidder's endpoints.

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
    res, err := s.Bidders.RealtimebiddingBiddersEndpointsList(ctx, operations.RealtimebiddingBiddersEndpointsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("odit"),
        Fields: sdk.String("at"),
        Key: sdk.String("at"),
        OauthToken: sdk.String("maiores"),
        PageSize: sdk.Int64(473608),
        PageToken: sdk.String("quod"),
        Parent: "quod",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("porro"),
    }, operations.RealtimebiddingBiddersEndpointsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEndpointsResponse != nil {
        // handle response
    }
}
```

## RealtimebiddingBiddersList

Lists all the bidder accounts that belong to the caller.

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
    res, err := s.Bidders.RealtimebiddingBiddersList(ctx, operations.RealtimebiddingBiddersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officia"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("deleniti"),
        PageSize: sdk.Int64(944669),
        PageToken: sdk.String("optio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        UploadType: sdk.String("beatae"),
        UploadProtocol: sdk.String("commodi"),
    }, operations.RealtimebiddingBiddersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBiddersResponse != nil {
        // handle response
    }
}
```

## RealtimebiddingBiddersPretargetingConfigsActivate

Activates a pretargeting configuration.

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
    res, err := s.Bidders.RealtimebiddingBiddersPretargetingConfigsActivate(ctx, operations.RealtimebiddingBiddersPretargetingConfigsActivateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "qui": "impedit",
            "cum": "esse",
        },
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("ad"),
        Name: "Louis Moore",
        OauthToken: sdk.String("laboriosam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("fuga"),
    }, operations.RealtimebiddingBiddersPretargetingConfigsActivateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PretargetingConfig != nil {
        // handle response
    }
}
```

## RealtimebiddingBiddersPretargetingConfigsAddTargetedApps

Adds targeted apps to the pretargeting configuration.

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
    res, err := s.Bidders.RealtimebiddingBiddersPretargetingConfigsAddTargetedApps(ctx, operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AddTargetedAppsRequest: &shared.AddTargetedAppsRequest{
            AppIds: []string{
                "iste",
                "iure",
            },
            TargetingMode: shared.AddTargetedAppsRequestTargetingModeEnumExclusive.ToPointer(),
        },
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("est"),
        OauthToken: sdk.String("mollitia"),
        PretargetingConfig: "laborum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolores"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("corporis"),
    }, operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PretargetingConfig != nil {
        // handle response
    }
}
```

## RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishers

Adds targeted publishers to the pretargeting config.

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
    res, err := s.Bidders.RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishers(ctx, operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AddTargetedPublishersRequest: &shared.AddTargetedPublishersRequest{
            PublisherIds: []string{
                "enim",
                "omnis",
                "nemo",
                "minima",
            },
            TargetingMode: shared.AddTargetedPublishersRequestTargetingModeEnumInclusive.ToPointer(),
        },
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("culpa"),
        Fields: sdk.String("doloribus"),
        Key: sdk.String("sapiente"),
        OauthToken: sdk.String("architecto"),
        PretargetingConfig: "mollitia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorem"),
        UploadType: sdk.String("culpa"),
        UploadProtocol: sdk.String("consequuntur"),
    }, operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PretargetingConfig != nil {
        // handle response
    }
}
```

## RealtimebiddingBiddersPretargetingConfigsAddTargetedSites

Adds targeted sites to the pretargeting configuration.

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
    res, err := s.Bidders.RealtimebiddingBiddersPretargetingConfigsAddTargetedSites(ctx, operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AddTargetedSitesRequest: &shared.AddTargetedSitesRequest{
            Sites: []string{
                "occaecati",
                "numquam",
                "commodi",
            },
            TargetingMode: shared.AddTargetedSitesRequestTargetingModeEnumInclusive.ToPointer(),
        },
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("quia"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("vitae"),
        PretargetingConfig: "laborum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("animi"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("odit"),
    }, operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PretargetingConfig != nil {
        // handle response
    }
}
```

## RealtimebiddingBiddersPretargetingConfigsCreate

Creates a pretargeting configuration. A pretargeting configuration's state (PretargetingConfig.state) is active upon creation, and it will start to affect traffic shortly after. A bidder may create a maximum of 10 pretargeting configurations. Attempts to exceed this maximum results in a 400 bad request error.

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
    res, err := s.Bidders.RealtimebiddingBiddersPretargetingConfigsCreate(ctx, operations.RealtimebiddingBiddersPretargetingConfigsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        PretargetingConfigInput: &shared.PretargetingConfigInput{
            AllowedUserTargetingModes: []shared.PretargetingConfigAllowedUserTargetingModesEnum{
                shared.PretargetingConfigAllowedUserTargetingModesEnumInterestBasedTargeting,
            },
            AppTargeting: &shared.AppTargeting{
                MobileAppCategoryTargeting: &shared.NumericTargetingDimension{
                    ExcludedIds: []string{
                        "id",
                        "possimus",
                    },
                    IncludedIds: []string{
                        "quasi",
                    },
                },
                MobileAppTargeting: &shared.StringTargetingDimension{
                    TargetingMode: shared.StringTargetingDimensionTargetingModeEnumInclusive.ToPointer(),
                    Values: []string{
                        "laborum",
                        "quasi",
                        "reiciendis",
                        "voluptatibus",
                    },
                },
            },
            DisplayName: sdk.String("vero"),
            ExcludedContentLabelIds: []string{
                "praesentium",
                "voluptatibus",
            },
            GeoTargeting: &shared.NumericTargetingDimension{
                ExcludedIds: []string{
                    "omnis",
                },
                IncludedIds: []string{
                    "cum",
                    "perferendis",
                },
            },
            IncludedCreativeDimensions: []shared.CreativeDimensions{
                shared.CreativeDimensions{
                    Height: sdk.String("reprehenderit"),
                    Width: sdk.String("ut"),
                },
            },
            IncludedEnvironments: []shared.PretargetingConfigIncludedEnvironmentsEnum{
                shared.PretargetingConfigIncludedEnvironmentsEnumEnvironmentUnspecified,
                shared.PretargetingConfigIncludedEnvironmentsEnumApp,
                shared.PretargetingConfigIncludedEnvironmentsEnumEnvironmentUnspecified,
                shared.PretargetingConfigIncludedEnvironmentsEnumApp,
            },
            IncludedFormats: []shared.PretargetingConfigIncludedFormatsEnum{
                shared.PretargetingConfigIncludedFormatsEnumVast,
            },
            IncludedLanguages: []string{
                "accusamus",
                "commodi",
            },
            IncludedMobileOperatingSystemIds: []string{
                "quae",
                "ipsum",
                "quidem",
                "molestias",
            },
            IncludedPlatforms: []shared.PretargetingConfigIncludedPlatformsEnum{
                shared.PretargetingConfigIncludedPlatformsEnumConnectedTv,
                shared.PretargetingConfigIncludedPlatformsEnumPersonalComputer,
                shared.PretargetingConfigIncludedPlatformsEnumPhone,
            },
            IncludedUserIDTypes: []shared.PretargetingConfigIncludedUserIDTypesEnum{
                shared.PretargetingConfigIncludedUserIDTypesEnumDeviceID,
                shared.PretargetingConfigIncludedUserIDTypesEnumUserIDTypeUnspecified,
                shared.PretargetingConfigIncludedUserIDTypesEnumDeviceID,
            },
            InterstitialTargeting: shared.PretargetingConfigInterstitialTargetingEnumOnlyInterstitialRequests.ToPointer(),
            MaximumQPS: sdk.String("veritatis"),
            MinimumViewabilityDecile: sdk.Int(929297),
            PublisherTargeting: &shared.StringTargetingDimension{
                TargetingMode: shared.StringTargetingDimensionTargetingModeEnumTargetingModeUnspecified.ToPointer(),
                Values: []string{
                    "consequatur",
                    "est",
                },
            },
            UserListTargeting: &shared.NumericTargetingDimension{
                ExcludedIds: []string{
                    "explicabo",
                    "deserunt",
                    "distinctio",
                    "quibusdam",
                },
                IncludedIds: []string{
                    "modi",
                    "qui",
                },
            },
            VerticalTargeting: &shared.NumericTargetingDimension{
                ExcludedIds: []string{
                    "cupiditate",
                    "quos",
                },
                IncludedIds: []string{
                    "magni",
                },
            },
            WebTargeting: &shared.StringTargetingDimension{
                TargetingMode: shared.StringTargetingDimensionTargetingModeEnumExclusive.ToPointer(),
                Values: []string{
                    "alias",
                    "fugit",
                },
            },
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("facilis"),
        Key: sdk.String("tempore"),
        OauthToken: sdk.String("labore"),
        Parent: "delectus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eum"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("eligendi"),
    }, operations.RealtimebiddingBiddersPretargetingConfigsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PretargetingConfig != nil {
        // handle response
    }
}
```

## RealtimebiddingBiddersPretargetingConfigsDelete

Deletes a pretargeting configuration.

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
    res, err := s.Bidders.RealtimebiddingBiddersPretargetingConfigsDelete(ctx, operations.RealtimebiddingBiddersPretargetingConfigsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("sint"),
        Key: sdk.String("officia"),
        Name: "Raquel Wilderman",
        OauthToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illum"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("rerum"),
    }, operations.RealtimebiddingBiddersPretargetingConfigsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## RealtimebiddingBiddersPretargetingConfigsList

Lists all pretargeting configurations for a single bidder.

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
    res, err := s.Bidders.RealtimebiddingBiddersPretargetingConfigsList(ctx, operations.RealtimebiddingBiddersPretargetingConfigsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("facere"),
        Fields: sdk.String("ea"),
        Key: sdk.String("aliquid"),
        OauthToken: sdk.String("laborum"),
        PageSize: sdk.Int64(881104),
        PageToken: sdk.String("non"),
        Parent: "occaecati",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.RealtimebiddingBiddersPretargetingConfigsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPretargetingConfigsResponse != nil {
        // handle response
    }
}
```

## RealtimebiddingBiddersPretargetingConfigsRemoveTargetedApps

Removes targeted apps from the pretargeting configuration.

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
    res, err := s.Bidders.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedApps(ctx, operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RemoveTargetedAppsRequest: &shared.RemoveTargetedAppsRequest{
            AppIds: []string{
                "nam",
                "id",
                "blanditiis",
            },
        },
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("nisi"),
        OauthToken: sdk.String("vel"),
        PretargetingConfig: "natus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PretargetingConfig != nil {
        // handle response
    }
}
```

## RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishers

Removes targeted publishers from the pretargeting config.

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
    res, err := s.Bidders.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishers(ctx, operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RemoveTargetedPublishersRequest: &shared.RemoveTargetedPublishersRequest{
            PublisherIds: []string{
                "distinctio",
                "id",
            },
        },
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("natus"),
        Key: sdk.String("nobis"),
        OauthToken: sdk.String("eum"),
        PretargetingConfig: "vero",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PretargetingConfig != nil {
        // handle response
    }
}
```

## RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSites

Removes targeted sites from the pretargeting configuration.

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
    res, err := s.Bidders.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSites(ctx, operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RemoveTargetedSitesRequest: &shared.RemoveTargetedSitesRequest{
            Sites: []string{
                "ullam",
                "provident",
                "quos",
            },
        },
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("ad"),
        PretargetingConfig: "eum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("odit"),
    }, operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PretargetingConfig != nil {
        // handle response
    }
}
```

## RealtimebiddingBiddersPretargetingConfigsSuspend

Suspends a pretargeting configuration.

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
    res, err := s.Bidders.RealtimebiddingBiddersPretargetingConfigsSuspend(ctx, operations.RealtimebiddingBiddersPretargetingConfigsSuspendRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "iure": "doloribus",
        },
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maxime"),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("facilis"),
        Name: "Alice Bradtke",
        OauthToken: sdk.String("expedita"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("quibusdam"),
    }, operations.RealtimebiddingBiddersPretargetingConfigsSuspendSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PretargetingConfig != nil {
        // handle response
    }
}
```

## RealtimebiddingBiddersPublisherConnectionsBatchApprove

Batch approves multiple publisher connections.

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
    res, err := s.Bidders.RealtimebiddingBiddersPublisherConnectionsBatchApprove(ctx, operations.RealtimebiddingBiddersPublisherConnectionsBatchApproveRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BatchApprovePublisherConnectionsRequest: &shared.BatchApprovePublisherConnectionsRequest{
            Names: []string{
                "pariatur",
                "accusantium",
                "consequuntur",
                "praesentium",
            },
        },
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sunt"),
        Fields: sdk.String("quo"),
        Key: sdk.String("illum"),
        OauthToken: sdk.String("pariatur"),
        Parent: "maxime",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("odit"),
    }, operations.RealtimebiddingBiddersPublisherConnectionsBatchApproveSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchApprovePublisherConnectionsResponse != nil {
        // handle response
    }
}
```

## RealtimebiddingBiddersPublisherConnectionsBatchReject

Batch rejects multiple publisher connections.

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
    res, err := s.Bidders.RealtimebiddingBiddersPublisherConnectionsBatchReject(ctx, operations.RealtimebiddingBiddersPublisherConnectionsBatchRejectRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BatchRejectPublisherConnectionsRequest: &shared.BatchRejectPublisherConnectionsRequest{
            Names: []string{
                "ab",
            },
        },
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("voluptate"),
        Key: sdk.String("autem"),
        OauthToken: sdk.String("nam"),
        Parent: "eaque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.RealtimebiddingBiddersPublisherConnectionsBatchRejectSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchRejectPublisherConnectionsResponse != nil {
        // handle response
    }
}
```

## RealtimebiddingBiddersPublisherConnectionsList

Lists publisher connections for a given bidder.

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
    res, err := s.Bidders.RealtimebiddingBiddersPublisherConnectionsList(ctx, operations.RealtimebiddingBiddersPublisherConnectionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("fugiat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aut"),
        Fields: sdk.String("cumque"),
        Filter: sdk.String("corporis"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("libero"),
        OrderBy: sdk.String("nobis"),
        PageSize: sdk.Int64(171629),
        PageToken: sdk.String("quis"),
        Parent: "totam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dignissimos"),
        UploadType: sdk.String("eaque"),
        UploadProtocol: sdk.String("quis"),
    }, operations.RealtimebiddingBiddersPublisherConnectionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPublisherConnectionsResponse != nil {
        // handle response
    }
}
```
