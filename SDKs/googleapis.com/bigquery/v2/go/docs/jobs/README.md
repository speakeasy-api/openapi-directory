# Jobs

### Available Operations

* [BigqueryJobsCancel](#bigqueryjobscancel) - Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.
* [BigqueryJobsDelete](#bigqueryjobsdelete) - Requests the deletion of the metadata of a job. This call returns when the job's metadata is deleted.
* [BigqueryJobsGet](#bigqueryjobsget) - Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.
* [BigqueryJobsGetQueryResults](#bigqueryjobsgetqueryresults) - Retrieves the results of a query job.
* [BigqueryJobsInsert](#bigqueryjobsinsert) - Starts a new asynchronous job. Requires the Can View project role.
* [BigqueryJobsList](#bigqueryjobslist) - Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.
* [BigqueryJobsQuery](#bigqueryjobsquery) - Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.

## BigqueryJobsCancel

Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.

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
    res, err := s.Jobs.BigqueryJobsCancel(ctx, operations.BigqueryJobsCancelRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("dolorum"),
        JobID: "iusto",
        Key: sdk.String("voluptate"),
        Location: sdk.String("dolorum"),
        OauthToken: sdk.String("deleniti"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "omnis",
        QuotaUser: sdk.String("necessitatibus"),
        UserIP: sdk.String("distinctio"),
    }, operations.BigqueryJobsCancelSecurity{
        Option1: &operations.BigqueryJobsCancelSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JobCancelResponse != nil {
        // handle response
    }
}
```

## BigqueryJobsDelete

Requests the deletion of the metadata of a job. This call returns when the job's metadata is deleted.

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
    res, err := s.Jobs.BigqueryJobsDelete(ctx, operations.BigqueryJobsDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("asperiores"),
        JobID: "nihil",
        Key: sdk.String("ipsum"),
        Location: sdk.String("voluptate"),
        OauthToken: sdk.String("id"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "saepe",
        QuotaUser: sdk.String("eius"),
        UserIP: sdk.String("aspernatur"),
    }, operations.BigqueryJobsDeleteSecurity{
        Option1: &operations.BigqueryJobsDeleteSecurityOption1{
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

## BigqueryJobsGet

Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.

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
    res, err := s.Jobs.BigqueryJobsGet(ctx, operations.BigqueryJobsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("perferendis"),
        JobID: "amet",
        Key: sdk.String("optio"),
        Location: sdk.String("accusamus"),
        OauthToken: sdk.String("ad"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "saepe",
        QuotaUser: sdk.String("suscipit"),
        UserIP: sdk.String("deserunt"),
    }, operations.BigqueryJobsGetSecurity{
        Option1: &operations.BigqueryJobsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```

## BigqueryJobsGetQueryResults

Retrieves the results of a query job.

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
    res, err := s.Jobs.BigqueryJobsGetQueryResults(ctx, operations.BigqueryJobsGetQueryResultsRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("provident"),
        JobID: "minima",
        Key: sdk.String("repellendus"),
        Location: sdk.String("totam"),
        MaxResults: sdk.Int64(628982),
        OauthToken: sdk.String("alias"),
        PageToken: sdk.String("at"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "quaerat",
        QuotaUser: sdk.String("tempora"),
        StartIndex: sdk.String("vel"),
        TimeoutMs: sdk.Int64(798047),
        UserIP: sdk.String("officiis"),
    }, operations.BigqueryJobsGetQueryResultsSecurity{
        Option1: &operations.BigqueryJobsGetQueryResultsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetQueryResultsResponse != nil {
        // handle response
    }
}
```

## BigqueryJobsInsert

Starts a new asynchronous job. Requires the Can View project role.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Jobs.BigqueryJobsInsert(ctx, operations.BigqueryJobsInsertRequest{
        RequestBody: []byte("qui"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("a"),
        OauthToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "harum",
        QuotaUser: sdk.String("iusto"),
        UserIP: sdk.String("ipsum"),
    }, operations.BigqueryJobsInsertSecurity{
        Option1: &operations.BigqueryJobsInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```

## BigqueryJobsList

Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.

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
    res, err := s.Jobs.BigqueryJobsList(ctx, operations.BigqueryJobsListRequest{
        AllUsers: sdk.Bool(false),
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("quisquam"),
        Key: sdk.String("tenetur"),
        MaxCreationTime: sdk.String("amet"),
        MaxResults: sdk.Int64(730856),
        MinCreationTime: sdk.String("accusamus"),
        OauthToken: sdk.String("numquam"),
        PageToken: sdk.String("enim"),
        ParentJobID: sdk.String("dolorem"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "sapiente",
        Projection: operations.BigqueryJobsListProjectionEnumMinimal.ToPointer(),
        QuotaUser: sdk.String("nihil"),
        StateFilter: []BigqueryJobsListStateFilterEnum{
            operations.BigqueryJobsListStateFilterEnumRunning,
        },
        UserIP: sdk.String("neque"),
    }, operations.BigqueryJobsListSecurity{
        Option1: &operations.BigqueryJobsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JobList != nil {
        // handle response
    }
}
```

## BigqueryJobsQuery

Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.

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
    res, err := s.Jobs.BigqueryJobsQuery(ctx, operations.BigqueryJobsQueryRequest{
        QueryRequest: &shared.QueryRequest{
            ConnectionProperties: []shared.ConnectionProperty{
                shared.ConnectionProperty{
                    Key: sdk.String("vel"),
                    Value: sdk.String("libero"),
                },
            },
            Continuous: sdk.Bool(false),
            CreateSession: sdk.Bool(false),
            DefaultDataset: &shared.DatasetReference{
                DatasetID: sdk.String("voluptas"),
                ProjectID: sdk.String("deserunt"),
            },
            DryRun: sdk.Bool(false),
            Kind: sdk.String("quam"),
            Labels: map[string]string{
                "incidunt": "qui",
            },
            Location: sdk.String("cupiditate"),
            MaxResults: sdk.Int64(807581),
            MaximumBytesBilled: sdk.String("pariatur"),
            ParameterMode: sdk.String("soluta"),
            PreserveNulls: sdk.Bool(false),
            Query: sdk.String("dicta"),
            QueryParameters: []shared.QueryParameter{
                shared.QueryParameter{
                    Name: sdk.String("Randall Cole"),
                    ParameterType: &shared.QueryParameterType{
                        ArrayType: &shared.QueryParameterType{},
                        StructTypes: []shared.QueryParameterTypeStructTypes{
                            shared.QueryParameterTypeStructTypes{
                                Description: sdk.String("aliquid"),
                                Name: sdk.String("Felicia Spencer"),
                                Type: &shared.QueryParameterType{},
                            },
                            shared.QueryParameterTypeStructTypes{
                                Description: sdk.String("fugit"),
                                Name: sdk.String("Courtney Cassin"),
                                Type: &shared.QueryParameterType{},
                            },
                            shared.QueryParameterTypeStructTypes{
                                Description: sdk.String("hic"),
                                Name: sdk.String("Erma Rogahn PhD"),
                                Type: &shared.QueryParameterType{},
                            },
                        },
                        Type: sdk.String("ipsum"),
                    },
                    ParameterValue: &shared.QueryParameterValue{
                        ArrayValues: []shared.QueryParameterValue{
                            shared.QueryParameterValue{},
                        },
                        StructValues: map[string]shared.QueryParameterValue{
                            "quos": shared.QueryParameterValue{},
                            "tempore": shared.QueryParameterValue{},
                            "cupiditate": shared.QueryParameterValue{},
                        },
                        Value: sdk.String("aperiam"),
                    },
                },
                shared.QueryParameter{
                    Name: sdk.String("Mike Greenholt"),
                    ParameterType: &shared.QueryParameterType{
                        ArrayType: &shared.QueryParameterType{},
                        StructTypes: []shared.QueryParameterTypeStructTypes{
                            shared.QueryParameterTypeStructTypes{
                                Description: sdk.String("architecto"),
                                Name: sdk.String("Margaret Luettgen MD"),
                                Type: &shared.QueryParameterType{},
                            },
                            shared.QueryParameterTypeStructTypes{
                                Description: sdk.String("repellendus"),
                                Name: sdk.String("Domingo Grady"),
                                Type: &shared.QueryParameterType{},
                            },
                            shared.QueryParameterTypeStructTypes{
                                Description: sdk.String("qui"),
                                Name: sdk.String("Marsha Kuhic"),
                                Type: &shared.QueryParameterType{},
                            },
                        },
                        Type: sdk.String("quisquam"),
                    },
                    ParameterValue: &shared.QueryParameterValue{
                        ArrayValues: []shared.QueryParameterValue{
                            shared.QueryParameterValue{},
                            shared.QueryParameterValue{},
                            shared.QueryParameterValue{},
                            shared.QueryParameterValue{},
                        },
                        StructValues: map[string]shared.QueryParameterValue{
                            "quis": shared.QueryParameterValue{},
                            "ipsum": shared.QueryParameterValue{},
                            "delectus": shared.QueryParameterValue{},
                        },
                        Value: sdk.String("voluptate"),
                    },
                },
                shared.QueryParameter{
                    Name: sdk.String("Meghan Wiegand"),
                    ParameterType: &shared.QueryParameterType{
                        ArrayType: &shared.QueryParameterType{},
                        StructTypes: []shared.QueryParameterTypeStructTypes{
                            shared.QueryParameterTypeStructTypes{
                                Description: sdk.String("quod"),
                                Name: sdk.String("Harriet Quitzon"),
                                Type: &shared.QueryParameterType{},
                            },
                            shared.QueryParameterTypeStructTypes{
                                Description: sdk.String("dolore"),
                                Name: sdk.String("Gilberto Dickinson"),
                                Type: &shared.QueryParameterType{},
                            },
                            shared.QueryParameterTypeStructTypes{
                                Description: sdk.String("aut"),
                                Name: sdk.String("Greg Stoltenberg"),
                                Type: &shared.QueryParameterType{},
                            },
                        },
                        Type: sdk.String("maiores"),
                    },
                    ParameterValue: &shared.QueryParameterValue{
                        ArrayValues: []shared.QueryParameterValue{
                            shared.QueryParameterValue{},
                            shared.QueryParameterValue{},
                            shared.QueryParameterValue{},
                            shared.QueryParameterValue{},
                        },
                        StructValues: map[string]shared.QueryParameterValue{
                            "eligendi": shared.QueryParameterValue{},
                            "ducimus": shared.QueryParameterValue{},
                        },
                        Value: sdk.String("alias"),
                    },
                },
            },
            RequestID: sdk.String("officia"),
            TimeoutMs: sdk.Int64(269479),
            UseLegacySQL: sdk.Bool(false),
            UseQueryCache: sdk.Bool(false),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("ea"),
        OauthToken: sdk.String("aspernatur"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "vel",
        QuotaUser: sdk.String("possimus"),
        UserIP: sdk.String("magnam"),
    }, operations.BigqueryJobsQuerySecurity{
        Option1: &operations.BigqueryJobsQuerySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryResponse != nil {
        // handle response
    }
}
```
