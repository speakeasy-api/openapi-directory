# Tabledata

### Available Operations

* [BigqueryTabledataInsertAll](#bigquerytabledatainsertall) - Streams data into BigQuery one record at a time without needing to run a load job. Requires the WRITER dataset role.
* [BigqueryTabledataList](#bigquerytabledatalist) - Retrieves table data from a specified set of rows. Requires the READER dataset role.

## BigqueryTabledataInsertAll

Streams data into BigQuery one record at a time without needing to run a load job. Requires the WRITER dataset role.

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
    res, err := s.Tabledata.BigqueryTabledataInsertAll(ctx, operations.BigqueryTabledataInsertAllRequest{
        TableDataInsertAllRequest: &shared.TableDataInsertAllRequest{
            IgnoreUnknownValues: sdk.Bool(false),
            Kind: sdk.String("quidem"),
            Rows: []shared.TableDataInsertAllRequestRows{
                shared.TableDataInsertAllRequestRows{
                    InsertID: sdk.String("quia"),
                    JSON: map[string]interface{}{
                        "vero": "quos",
                        "in": "laudantium",
                        "molestiae": "voluptatem",
                    },
                },
                shared.TableDataInsertAllRequestRows{
                    InsertID: sdk.String("neque"),
                    JSON: map[string]interface{}{
                        "natus": "adipisci",
                        "doloribus": "dolore",
                    },
                },
                shared.TableDataInsertAllRequestRows{
                    InsertID: sdk.String("provident"),
                    JSON: map[string]interface{}{
                        "mollitia": "laudantium",
                        "labore": "ex",
                        "minima": "mollitia",
                    },
                },
                shared.TableDataInsertAllRequestRows{
                    InsertID: sdk.String("sequi"),
                    JSON: map[string]interface{}{
                        "laudantium": "adipisci",
                    },
                },
            },
            SkipInvalidRows: sdk.Bool(false),
            TemplateSuffix: sdk.String("fugit"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        DatasetID: "iusto",
        Fields: sdk.String("natus"),
        Key: sdk.String("facilis"),
        OauthToken: sdk.String("quam"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "beatae",
        QuotaUser: sdk.String("error"),
        TableID: "quibusdam",
        UserIP: sdk.String("ab"),
    }, operations.BigqueryTabledataInsertAllSecurity{
        Option1: &operations.BigqueryTabledataInsertAllSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TableDataInsertAllResponse != nil {
        // handle response
    }
}
```

## BigqueryTabledataList

Retrieves table data from a specified set of rows. Requires the READER dataset role.

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
    res, err := s.Tabledata.BigqueryTabledataList(ctx, operations.BigqueryTabledataListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        DatasetID: "eligendi",
        Fields: sdk.String("accusamus"),
        Key: sdk.String("officia"),
        MaxResults: sdk.Int64(378581),
        OauthToken: sdk.String("reprehenderit"),
        PageToken: sdk.String("neque"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "facere",
        QuotaUser: sdk.String("blanditiis"),
        SelectedFields: sdk.String("suscipit"),
        StartIndex: sdk.String("itaque"),
        TableID: "nesciunt",
        UserIP: sdk.String("quidem"),
    }, operations.BigqueryTabledataListSecurity{
        Option1: &operations.BigqueryTabledataListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TableDataList != nil {
        // handle response
    }
}
```
