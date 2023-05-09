# Projects

### Available Operations

* [BigquerydatatransferProjectsLocationsDataSourcesCheckValidCreds](#bigquerydatatransferprojectslocationsdatasourcescheckvalidcreds) - Returns true if valid credentials exist for the given data source and requesting user.
* [BigquerydatatransferProjectsLocationsDataSourcesList](#bigquerydatatransferprojectslocationsdatasourceslist) - Lists supported data sources and returns their settings.
* [BigquerydatatransferProjectsLocationsEnrollDataSources](#bigquerydatatransferprojectslocationsenrolldatasources) - Enroll data sources in a user project. This allows users to create transfer configurations for these data sources. They will also appear in the ListDataSources RPC and as such, will appear in the [BigQuery UI](https://console.cloud.google.com/bigquery), and the documents can be found in the public guide for [BigQuery Web UI](https://cloud.google.com/bigquery/bigquery-web-ui) and [Data Transfer Service](https://cloud.google.com/bigquery/docs/working-with-transfers).
* [BigquerydatatransferProjectsLocationsList](#bigquerydatatransferprojectslocationslist) - Lists information about the supported locations for this service.
* [BigquerydatatransferProjectsTransferConfigsCreate](#bigquerydatatransferprojectstransferconfigscreate) - Creates a new data transfer configuration.
* [BigquerydatatransferProjectsTransferConfigsList](#bigquerydatatransferprojectstransferconfigslist) - Returns information about all transfer configs owned by a project in the specified location.
* [BigquerydatatransferProjectsTransferConfigsPatch](#bigquerydatatransferprojectstransferconfigspatch) - Updates a data transfer configuration. All fields must be set, even if they are not updated.
* [BigquerydatatransferProjectsTransferConfigsRunsDelete](#bigquerydatatransferprojectstransferconfigsrunsdelete) - Deletes the specified transfer run.
* [BigquerydatatransferProjectsTransferConfigsRunsGet](#bigquerydatatransferprojectstransferconfigsrunsget) - Returns information about the particular transfer run.
* [BigquerydatatransferProjectsTransferConfigsRunsList](#bigquerydatatransferprojectstransferconfigsrunslist) - Returns information about running and completed transfer runs.
* [BigquerydatatransferProjectsTransferConfigsRunsTransferLogsList](#bigquerydatatransferprojectstransferconfigsrunstransferlogslist) - Returns log messages for the transfer run.
* [BigquerydatatransferProjectsTransferConfigsScheduleRuns](#bigquerydatatransferprojectstransferconfigsscheduleruns) - Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.
* [BigquerydatatransferProjectsTransferConfigsStartManualRuns](#bigquerydatatransferprojectstransferconfigsstartmanualruns) - Start manual transfer runs to be executed now with schedule_time equal to current time. The transfer runs can be created for a time range where the run_time is between start_time (inclusive) and end_time (exclusive), or for a specific run_time.

## BigquerydatatransferProjectsLocationsDataSourcesCheckValidCreds

Returns true if valid credentials exist for the given data source and requesting user.

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
    res, err := s.Projects.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCreds(ctx, operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "excepturi": "nisi",
            "recusandae": "temporibus",
        },
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("perferendis"),
        Name: "Estelle Will",
        OauthToken: sdk.String("at"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurity{
        Option1: &operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckValidCredsResponse != nil {
        // handle response
    }
}
```

## BigquerydatatransferProjectsLocationsDataSourcesList

Lists supported data sources and returns their settings.

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
    res, err := s.Projects.BigquerydatatransferProjectsLocationsDataSourcesList(ctx, operations.BigquerydatatransferProjectsLocationsDataSourcesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("porro"),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("dicta"),
        PageSize: sdk.Int64(720633),
        PageToken: sdk.String("officia"),
        Parent: "occaecati",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("hic"),
    }, operations.BigquerydatatransferProjectsLocationsDataSourcesListSecurity{
        Option1: &operations.BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDataSourcesResponse != nil {
        // handle response
    }
}
```

## BigquerydatatransferProjectsLocationsEnrollDataSources

Enroll data sources in a user project. This allows users to create transfer configurations for these data sources. They will also appear in the ListDataSources RPC and as such, will appear in the [BigQuery UI](https://console.cloud.google.com/bigquery), and the documents can be found in the public guide for [BigQuery Web UI](https://cloud.google.com/bigquery/bigquery-web-ui) and [Data Transfer Service](https://cloud.google.com/bigquery/docs/working-with-transfers).

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
    res, err := s.Projects.BigquerydatatransferProjectsLocationsEnrollDataSources(ctx, operations.BigquerydatatransferProjectsLocationsEnrollDataSourcesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EnrollDataSourcesRequest: &shared.EnrollDataSourcesRequest{
            DataSourceIds: []string{
                "beatae",
                "commodi",
                "molestiae",
            },
        },
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("cum"),
        Key: sdk.String("esse"),
        Name: "Mrs. Miriam Collier",
        OauthToken: sdk.String("sed"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("natus"),
    }, operations.BigquerydatatransferProjectsLocationsEnrollDataSourcesSecurity{
        Option1: &operations.BigquerydatatransferProjectsLocationsEnrollDataSourcesSecurityOption1{
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

## BigquerydatatransferProjectsLocationsList

Lists information about the supported locations for this service.

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
    res, err := s.Projects.BigquerydatatransferProjectsLocationsList(ctx, operations.BigquerydatatransferProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fuga"),
        Fields: sdk.String("in"),
        Filter: sdk.String("corporis"),
        Key: sdk.String("iste"),
        Name: "Mr. Kerry Predovic",
        OauthToken: sdk.String("est"),
        PageSize: sdk.Int64(653140),
        PageToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolores"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("corporis"),
    }, operations.BigquerydatatransferProjectsLocationsListSecurity{
        Option1: &operations.BigquerydatatransferProjectsLocationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```

## BigquerydatatransferProjectsTransferConfigsCreate

Creates a new data transfer configuration.

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
    res, err := s.Projects.BigquerydatatransferProjectsTransferConfigsCreate(ctx, operations.BigquerydatatransferProjectsTransferConfigsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TransferConfigInput: &shared.TransferConfigInput{
            DataRefreshWindowDays: sdk.Int(750686),
            DataSourceID: sdk.String("enim"),
            DestinationDatasetID: sdk.String("omnis"),
            Disabled: sdk.Bool(false),
            DisplayName: sdk.String("nemo"),
            EmailPreferences: &shared.EmailPreferences{
                EnableFailureEmail: sdk.Bool(false),
            },
            Name: sdk.String("Velma Batz"),
            NotificationPubsubTopic: sdk.String("doloribus"),
            OwnerInfo: &shared.UserInfo{
                Email: sdk.String("Bart63@hotmail.com"),
            },
            Params: map[string]interface{}{
                "repellat": "mollitia",
            },
            Schedule: sdk.String("occaecati"),
            ScheduleOptions: &shared.ScheduleOptions{
                DisableAutoScheduling: sdk.Bool(false),
                EndTime: sdk.String("numquam"),
                StartTime: sdk.String("commodi"),
            },
            UserID: sdk.String("quam"),
        },
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AuthorizationCode: sdk.String("error"),
        Callback: sdk.String("quia"),
        Fields: sdk.String("quis"),
        Key: sdk.String("vitae"),
        OauthToken: sdk.String("laborum"),
        Parent: "animi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        ServiceAccountName: sdk.String("odit"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("sequi"),
        VersionInfo: sdk.String("tenetur"),
    }, operations.BigquerydatatransferProjectsTransferConfigsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferConfig != nil {
        // handle response
    }
}
```

## BigquerydatatransferProjectsTransferConfigsList

Returns information about all transfer configs owned by a project in the specified location.

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
    res, err := s.Projects.BigquerydatatransferProjectsTransferConfigsList(ctx, operations.BigquerydatatransferProjectsTransferConfigsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aut"),
        DataSourceIds: []string{
            "error",
        },
        Fields: sdk.String("temporibus"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("quasi"),
        PageSize: sdk.Int64(971945),
        PageToken: sdk.String("voluptatibus"),
        Parent: "vero",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.BigquerydatatransferProjectsTransferConfigsListSecurity{
        Option1: &operations.BigquerydatatransferProjectsTransferConfigsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTransferConfigsResponse != nil {
        // handle response
    }
}
```

## BigquerydatatransferProjectsTransferConfigsPatch

Updates a data transfer configuration. All fields must be set, even if they are not updated.

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
    res, err := s.Projects.BigquerydatatransferProjectsTransferConfigsPatch(ctx, operations.BigquerydatatransferProjectsTransferConfigsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TransferConfigInput: &shared.TransferConfigInput{
            DataRefreshWindowDays: sdk.Int(604846),
            DataSourceID: sdk.String("voluptate"),
            DestinationDatasetID: sdk.String("cum"),
            Disabled: sdk.Bool(false),
            DisplayName: sdk.String("perferendis"),
            EmailPreferences: &shared.EmailPreferences{
                EnableFailureEmail: sdk.Bool(false),
            },
            Name: sdk.String("Bessie Grady II"),
            NotificationPubsubTopic: sdk.String("dolore"),
            OwnerInfo: &shared.UserInfo{
                Email: sdk.String("Birdie88@yahoo.com"),
            },
            Params: map[string]interface{}{
                "repudiandae": "quae",
                "ipsum": "quidem",
            },
            Schedule: sdk.String("molestias"),
            ScheduleOptions: &shared.ScheduleOptions{
                DisableAutoScheduling: sdk.Bool(false),
                EndTime: sdk.String("excepturi"),
                StartTime: sdk.String("pariatur"),
            },
            UserID: sdk.String("modi"),
        },
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AuthorizationCode: sdk.String("voluptates"),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("sint"),
        Name: "Patti Gottlieb MD",
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("explicabo"),
        ServiceAccountName: sdk.String("deserunt"),
        UpdateMask: sdk.String("distinctio"),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("labore"),
        VersionInfo: sdk.String("modi"),
    }, operations.BigquerydatatransferProjectsTransferConfigsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferConfig != nil {
        // handle response
    }
}
```

## BigquerydatatransferProjectsTransferConfigsRunsDelete

Deletes the specified transfer run.

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
    res, err := s.Projects.BigquerydatatransferProjectsTransferConfigsRunsDelete(ctx, operations.BigquerydatatransferProjectsTransferConfigsRunsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("magni"),
        Name: "Vernon Abshire",
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("tempore"),
    }, operations.BigquerydatatransferProjectsTransferConfigsRunsDeleteSecurity{
        Option1: &operations.BigquerydatatransferProjectsTransferConfigsRunsDeleteSecurityOption1{
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

## BigquerydatatransferProjectsTransferConfigsRunsGet

Returns information about the particular transfer run.

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
    res, err := s.Projects.BigquerydatatransferProjectsTransferConfigsRunsGet(ctx, operations.BigquerydatatransferProjectsTransferConfigsRunsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("non"),
        Fields: sdk.String("eligendi"),
        Key: sdk.String("sint"),
        Name: "Sherri Tremblay",
        OauthToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.BigquerydatatransferProjectsTransferConfigsRunsGetSecurity{
        Option1: &operations.BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferRun != nil {
        // handle response
    }
}
```

## BigquerydatatransferProjectsTransferConfigsRunsList

Returns information about running and completed transfer runs.

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
    res, err := s.Projects.BigquerydatatransferProjectsTransferConfigsRunsList(ctx, operations.BigquerydatatransferProjectsTransferConfigsRunsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("rerum"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("magnam"),
        PageSize: sdk.Int64(767024),
        PageToken: sdk.String("facere"),
        Parent: "ea",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        RunAttempt: operations.BigquerydatatransferProjectsTransferConfigsRunsListRunAttemptEnumLatest.ToPointer(),
        States: []BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum{
            operations.BigquerydatatransferProjectsTransferConfigsRunsListStatesEnumPending,
            operations.BigquerydatatransferProjectsTransferConfigsRunsListStatesEnumSucceeded,
            operations.BigquerydatatransferProjectsTransferConfigsRunsListStatesEnumPending,
            operations.BigquerydatatransferProjectsTransferConfigsRunsListStatesEnumCancelled,
        },
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.BigquerydatatransferProjectsTransferConfigsRunsListSecurity{
        Option1: &operations.BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTransferRunsResponse != nil {
        // handle response
    }
}
```

## BigquerydatatransferProjectsTransferConfigsRunsTransferLogsList

Returns log messages for the transfer run.

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
    res, err := s.Projects.BigquerydatatransferProjectsTransferConfigsRunsTransferLogsList(ctx, operations.BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("blanditiis"),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("sapiente"),
        MessageTypes: []BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum{
            operations.BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnumWarning,
        },
        OauthToken: sdk.String("nisi"),
        PageSize: sdk.Int64(423855),
        PageToken: sdk.String("natus"),
        Parent: "omnis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("nihil"),
    }, operations.BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurity{
        Option1: &operations.BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTransferLogsResponse != nil {
        // handle response
    }
}
```

## BigquerydatatransferProjectsTransferConfigsScheduleRuns

Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.

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
    res, err := s.Projects.BigquerydatatransferProjectsTransferConfigsScheduleRuns(ctx, operations.BigquerydatatransferProjectsTransferConfigsScheduleRunsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ScheduleTransferRunsRequest: &shared.ScheduleTransferRunsRequest{
            EndTime: sdk.String("distinctio"),
            StartTime: sdk.String("id"),
        },
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("natus"),
        Key: sdk.String("nobis"),
        OauthToken: sdk.String("eum"),
        Parent: "vero",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurity{
        Option1: &operations.BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScheduleTransferRunsResponse != nil {
        // handle response
    }
}
```

## BigquerydatatransferProjectsTransferConfigsStartManualRuns

Start manual transfer runs to be executed now with schedule_time equal to current time. The transfer runs can be created for a time range where the run_time is between start_time (inclusive) and end_time (exclusive), or for a specific run_time.

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
    res, err := s.Projects.BigquerydatatransferProjectsTransferConfigsStartManualRuns(ctx, operations.BigquerydatatransferProjectsTransferConfigsStartManualRunsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        StartManualTransferRunsRequest: &shared.StartManualTransferRunsRequest{
            RequestedRunTime: sdk.String("excepturi"),
            RequestedTimeRange: &shared.TimeRange{
                EndTime: sdk.String("ullam"),
                StartTime: sdk.String("provident"),
            },
        },
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("accusantium"),
        Fields: sdk.String("mollitia"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("mollitia"),
        Parent: "ad",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eum"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("necessitatibus"),
    }, operations.BigquerydatatransferProjectsTransferConfigsStartManualRunsSecurity{
        Option1: &operations.BigquerydatatransferProjectsTransferConfigsStartManualRunsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartManualTransferRunsResponse != nil {
        // handle response
    }
}
```
