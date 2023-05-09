# Services

### Available Operations

* [MonitoringServicesCreate](#monitoringservicescreate) - Create a Service.
* [MonitoringServicesList](#monitoringserviceslist) - List Services for this Metrics Scope.
* [MonitoringServicesServiceLevelObjectivesCreate](#monitoringservicesservicelevelobjectivescreate) - Create a ServiceLevelObjective for the given Service.
* [MonitoringServicesServiceLevelObjectivesDelete](#monitoringservicesservicelevelobjectivesdelete) - Delete the given ServiceLevelObjective.
* [MonitoringServicesServiceLevelObjectivesGet](#monitoringservicesservicelevelobjectivesget) - Get a ServiceLevelObjective by name.
* [MonitoringServicesServiceLevelObjectivesList](#monitoringservicesservicelevelobjectiveslist) - List the ServiceLevelObjectives for the given Service.
* [MonitoringServicesServiceLevelObjectivesPatch](#monitoringservicesservicelevelobjectivespatch) - Update the given ServiceLevelObjective.

## MonitoringServicesCreate

Create a Service.

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
    res, err := s.Services.MonitoringServicesCreate(ctx, operations.MonitoringServicesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ServiceInput: &shared.ServiceInput{
            AppEngine: &shared.AppEngine{
                ModuleID: sdk.String("alias"),
            },
            BasicService: &shared.BasicService{
                ServiceLabels: map[string]string{
                    "aut": "dolore",
                    "maxime": "aliquam",
                    "iste": "ullam",
                },
                ServiceType: sdk.String("eligendi"),
            },
            CloudEndpoints: &shared.CloudEndpoints{
                Service: sdk.String("placeat"),
            },
            CloudRun: &shared.CloudRun{
                Location: sdk.String("voluptas"),
                ServiceName: sdk.String("occaecati"),
            },
            ClusterIstio: &shared.ClusterIstio{
                ClusterName: sdk.String("unde"),
                Location: sdk.String("illo"),
                ServiceName: sdk.String("nihil"),
                ServiceNamespace: sdk.String("inventore"),
            },
            Custom: map[string]interface{}{
                "ipsam": "quasi",
                "cumque": "dicta",
                "harum": "facere",
            },
            DisplayName: sdk.String("facilis"),
            GkeNamespace: &shared.GkeNamespaceInput{
                ClusterName: sdk.String("beatae"),
                Location: sdk.String("cumque"),
                NamespaceName: sdk.String("delectus"),
            },
            GkeService: &shared.GkeServiceInput{
                ClusterName: sdk.String("labore"),
                Location: sdk.String("expedita"),
                NamespaceName: sdk.String("corrupti"),
                ServiceName: sdk.String("rem"),
            },
            GkeWorkload: &shared.GkeWorkloadInput{
                ClusterName: sdk.String("atque"),
                Location: sdk.String("officiis"),
                NamespaceName: sdk.String("cum"),
                TopLevelControllerName: sdk.String("pariatur"),
                TopLevelControllerType: sdk.String("sapiente"),
            },
            IstioCanonicalService: &shared.IstioCanonicalService{
                CanonicalService: sdk.String("quo"),
                CanonicalServiceNamespace: sdk.String("incidunt"),
                MeshUID: sdk.String("quod"),
            },
            MeshIstio: &shared.MeshIstio{
                MeshUID: sdk.String("minus"),
                ServiceName: sdk.String("porro"),
                ServiceNamespace: sdk.String("id"),
            },
            Name: sdk.String("Tracy Reinger"),
            Telemetry: &shared.Telemetry{
                ResourceName: sdk.String("hic"),
            },
            UserLabels: map[string]string{
                "accusantium": "soluta",
                "fugit": "pariatur",
                "eligendi": "recusandae",
                "veritatis": "aut",
            },
        },
        AccessToken: sdk.String("laudantium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("voluptates"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("magni"),
        Parent: "rerum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloremque"),
        ServiceID: sdk.String("voluptatem"),
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("at"),
    }, operations.MonitoringServicesCreateSecurity{
        Option1: &operations.MonitoringServicesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Service != nil {
        // handle response
    }
}
```

## MonitoringServicesList

List Services for this Metrics Scope.

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
    res, err := s.Services.MonitoringServicesList(ctx, operations.MonitoringServicesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("reprehenderit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("blanditiis"),
        Fields: sdk.String("nihil"),
        Filter: sdk.String("atque"),
        Key: sdk.String("rerum"),
        OauthToken: sdk.String("deserunt"),
        PageSize: sdk.Int64(541822),
        PageToken: sdk.String("nostrum"),
        Parent: "atque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("est"),
        UploadProtocol: sdk.String("enim"),
    }, operations.MonitoringServicesListSecurity{
        Option1: &operations.MonitoringServicesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServicesResponse != nil {
        // handle response
    }
}
```

## MonitoringServicesServiceLevelObjectivesCreate

Create a ServiceLevelObjective for the given Service.

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
    res, err := s.Services.MonitoringServicesServiceLevelObjectivesCreate(ctx, operations.MonitoringServicesServiceLevelObjectivesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ServiceLevelObjective: &shared.ServiceLevelObjective{
            CalendarPeriod: shared.ServiceLevelObjectiveCalendarPeriodEnumDay.ToPointer(),
            DisplayName: sdk.String("quae"),
            Goal: sdk.Float64(5561.33),
            Name: sdk.String("Lloyd Grant"),
            RollingPeriod: sdk.String("delectus"),
            ServiceLevelIndicator: &shared.ServiceLevelIndicator{
                BasicSli: &shared.BasicSli{
                    Availability: map[string]interface{}{
                        "natus": "cumque",
                        "natus": "quaerat",
                        "doloribus": "quia",
                    },
                    Latency: &shared.LatencyCriteria{
                        Threshold: sdk.String("officiis"),
                    },
                    Location: []string{
                        "cumque",
                        "quis",
                        "enim",
                    },
                    Method: []string{
                        "nemo",
                        "illum",
                    },
                    Version: []string{
                        "sit",
                    },
                },
                RequestBased: &shared.RequestBasedSli{
                    DistributionCut: &shared.DistributionCut{
                        DistributionFilter: sdk.String("odio"),
                        Range: &shared.GoogleMonitoringV3Range{
                            Max: sdk.Float64(7943.06),
                            Min: sdk.Float64(9903.69),
                        },
                    },
                    GoodTotalRatio: &shared.TimeSeriesRatio{
                        BadServiceFilter: sdk.String("recusandae"),
                        GoodServiceFilter: sdk.String("voluptates"),
                        TotalServiceFilter: sdk.String("praesentium"),
                    },
                },
                WindowsBased: &shared.WindowsBasedSli{
                    GoodBadMetricFilter: sdk.String("dicta"),
                    GoodTotalRatioThreshold: &shared.PerformanceThreshold{
                        BasicSliPerformance: &shared.BasicSli{
                            Availability: map[string]interface{}{
                                "sit": "aliquid",
                            },
                            Latency: &shared.LatencyCriteria{
                                Threshold: sdk.String("necessitatibus"),
                            },
                            Location: []string{
                                "deleniti",
                            },
                            Method: []string{
                                "nesciunt",
                            },
                            Version: []string{
                                "laborum",
                                "aliquam",
                                "deserunt",
                                "modi",
                            },
                        },
                        Performance: &shared.RequestBasedSli{
                            DistributionCut: &shared.DistributionCut{
                                DistributionFilter: sdk.String("sunt"),
                                Range: &shared.GoogleMonitoringV3Range{
                                    Max: sdk.Float64(7710.92),
                                    Min: sdk.Float64(2596),
                                },
                            },
                            GoodTotalRatio: &shared.TimeSeriesRatio{
                                BadServiceFilter: sdk.String("voluptatum"),
                                GoodServiceFilter: sdk.String("ipsa"),
                                TotalServiceFilter: sdk.String("at"),
                            },
                        },
                        Threshold: sdk.Float64(2098.6),
                    },
                    MetricMeanInRange: &shared.MetricRange{
                        Range: &shared.GoogleMonitoringV3Range{
                            Max: sdk.Float64(9998.54),
                            Min: sdk.Float64(1323.05),
                        },
                        TimeSeries: sdk.String("inventore"),
                    },
                    MetricSumInRange: &shared.MetricRange{
                        Range: &shared.GoogleMonitoringV3Range{
                            Max: sdk.Float64(1932.36),
                            Min: sdk.Float64(1430.78),
                        },
                        TimeSeries: sdk.String("fuga"),
                    },
                    WindowPeriod: sdk.String("hic"),
                },
            },
            UserLabels: map[string]string{
                "dolorem": "architecto",
            },
        },
        AccessToken: sdk.String("aperiam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nulla"),
        Fields: sdk.String("enim"),
        Key: sdk.String("illo"),
        OauthToken: sdk.String("magnam"),
        Parent: "delectus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        ServiceLevelObjectiveID: sdk.String("optio"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("ex"),
    }, operations.MonitoringServicesServiceLevelObjectivesCreateSecurity{
        Option1: &operations.MonitoringServicesServiceLevelObjectivesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceLevelObjective != nil {
        // handle response
    }
}
```

## MonitoringServicesServiceLevelObjectivesDelete

Delete the given ServiceLevelObjective.

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
    res, err := s.Services.MonitoringServicesServiceLevelObjectivesDelete(ctx, operations.MonitoringServicesServiceLevelObjectivesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("expedita"),
        Fields: sdk.String("hic"),
        Force: sdk.Bool(false),
        Key: sdk.String("excepturi"),
        Name: "Irene Breitenberg",
        OauthToken: sdk.String("animi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolore"),
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("dignissimos"),
    }, operations.MonitoringServicesServiceLevelObjectivesDeleteSecurity{
        Option1: &operations.MonitoringServicesServiceLevelObjectivesDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## MonitoringServicesServiceLevelObjectivesGet

Get a ServiceLevelObjective by name.

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
    res, err := s.Services.MonitoringServicesServiceLevelObjectivesGet(ctx, operations.MonitoringServicesServiceLevelObjectivesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("animi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("eveniet"),
        Key: sdk.String("earum"),
        Name: "Rochelle Gislason",
        OauthToken: sdk.String("dignissimos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("explicabo"),
        UploadProtocol: sdk.String("impedit"),
        View: operations.MonitoringServicesServiceLevelObjectivesGetViewEnumFull.ToPointer(),
    }, operations.MonitoringServicesServiceLevelObjectivesGetSecurity{
        Option1: &operations.MonitoringServicesServiceLevelObjectivesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceLevelObjective != nil {
        // handle response
    }
}
```

## MonitoringServicesServiceLevelObjectivesList

List the ServiceLevelObjectives for the given Service.

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
    res, err := s.Services.MonitoringServicesServiceLevelObjectivesList(ctx, operations.MonitoringServicesServiceLevelObjectivesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ut"),
        Fields: sdk.String("quaerat"),
        Filter: sdk.String("architecto"),
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("eveniet"),
        PageSize: sdk.Int64(221781),
        PageToken: sdk.String("expedita"),
        Parent: "libero",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("illo"),
        UploadProtocol: sdk.String("minus"),
        View: operations.MonitoringServicesServiceLevelObjectivesListViewEnumFull.ToPointer(),
    }, operations.MonitoringServicesServiceLevelObjectivesListSecurity{
        Option1: &operations.MonitoringServicesServiceLevelObjectivesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServiceLevelObjectivesResponse != nil {
        // handle response
    }
}
```

## MonitoringServicesServiceLevelObjectivesPatch

Update the given ServiceLevelObjective.

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
    res, err := s.Services.MonitoringServicesServiceLevelObjectivesPatch(ctx, operations.MonitoringServicesServiceLevelObjectivesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ServiceLevelObjective: &shared.ServiceLevelObjective{
            CalendarPeriod: shared.ServiceLevelObjectiveCalendarPeriodEnumMonth.ToPointer(),
            DisplayName: sdk.String("iusto"),
            Goal: sdk.Float64(3156.71),
            Name: sdk.String("Kevin Von"),
            RollingPeriod: sdk.String("quae"),
            ServiceLevelIndicator: &shared.ServiceLevelIndicator{
                BasicSli: &shared.BasicSli{
                    Availability: map[string]interface{}{
                        "illum": "rem",
                        "tenetur": "deleniti",
                        "modi": "earum",
                    },
                    Latency: &shared.LatencyCriteria{
                        Threshold: sdk.String("architecto"),
                    },
                    Location: []string{
                        "labore",
                        "maiores",
                    },
                    Method: []string{
                        "saepe",
                    },
                    Version: []string{
                        "esse",
                    },
                },
                RequestBased: &shared.RequestBasedSli{
                    DistributionCut: &shared.DistributionCut{
                        DistributionFilter: sdk.String("debitis"),
                        Range: &shared.GoogleMonitoringV3Range{
                            Max: sdk.Float64(8174.54),
                            Min: sdk.Float64(7890.16),
                        },
                    },
                    GoodTotalRatio: &shared.TimeSeriesRatio{
                        BadServiceFilter: sdk.String("cumque"),
                        GoodServiceFilter: sdk.String("aliquam"),
                        TotalServiceFilter: sdk.String("dolorum"),
                    },
                },
                WindowsBased: &shared.WindowsBasedSli{
                    GoodBadMetricFilter: sdk.String("deserunt"),
                    GoodTotalRatioThreshold: &shared.PerformanceThreshold{
                        BasicSliPerformance: &shared.BasicSli{
                            Availability: map[string]interface{}{
                                "reiciendis": "sequi",
                                "porro": "laborum",
                            },
                            Latency: &shared.LatencyCriteria{
                                Threshold: sdk.String("nobis"),
                            },
                            Location: []string{
                                "omnis",
                                "aut",
                                "ipsam",
                                "officia",
                            },
                            Method: []string{
                                "reprehenderit",
                                "quia",
                                "necessitatibus",
                            },
                            Version: []string{
                                "ad",
                            },
                        },
                        Performance: &shared.RequestBasedSli{
                            DistributionCut: &shared.DistributionCut{
                                DistributionFilter: sdk.String("nisi"),
                                Range: &shared.GoogleMonitoringV3Range{
                                    Max: sdk.Float64(4741.85),
                                    Min: sdk.Float64(1541.3),
                                },
                            },
                            GoodTotalRatio: &shared.TimeSeriesRatio{
                                BadServiceFilter: sdk.String("laudantium"),
                                GoodServiceFilter: sdk.String("sed"),
                                TotalServiceFilter: sdk.String("odit"),
                            },
                        },
                        Threshold: sdk.Float64(4798.3),
                    },
                    MetricMeanInRange: &shared.MetricRange{
                        Range: &shared.GoogleMonitoringV3Range{
                            Max: sdk.Float64(7128.93),
                            Min: sdk.Float64(1769.35),
                        },
                        TimeSeries: sdk.String("repellendus"),
                    },
                    MetricSumInRange: &shared.MetricRange{
                        Range: &shared.GoogleMonitoringV3Range{
                            Max: sdk.Float64(1998.79),
                            Min: sdk.Float64(579.09),
                        },
                        TimeSeries: sdk.String("sint"),
                    },
                    WindowPeriod: sdk.String("dolore"),
                },
            },
            UserLabels: map[string]string{
                "accusantium": "distinctio",
                "sapiente": "quam",
            },
        },
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("culpa"),
        Key: sdk.String("voluptatum"),
        Name: "Jody Wolff",
        OauthToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UpdateMask: sdk.String("voluptas"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("animi"),
    }, operations.MonitoringServicesServiceLevelObjectivesPatchSecurity{
        Option1: &operations.MonitoringServicesServiceLevelObjectivesPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceLevelObjective != nil {
        // handle response
    }
}
```
