# ChangeLogs

### Available Operations

* [DfareportingChangeLogsGet](#dfareportingchangelogsget) - Gets one change log by ID.
* [DfareportingChangeLogsList](#dfareportingchangelogslist) - Retrieves a list of change logs. This method supports paging.

## DfareportingChangeLogsGet

Gets one change log by ID.

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
    res, err := s.ChangeLogs.DfareportingChangeLogsGet(ctx, operations.DfareportingChangeLogsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("deleniti"),
        ID: "70d3c5a1-f9c2-442c-bb66-a1f30c73df5b",
        Key: sdk.String("ea"),
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "vitae",
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("iste"),
    }, operations.DfareportingChangeLogsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChangeLog != nil {
        // handle response
    }
}
```

## DfareportingChangeLogsList

Retrieves a list of change logs. This method supports paging.

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
    res, err := s.ChangeLogs.DfareportingChangeLogsList(ctx, operations.DfareportingChangeLogsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("reiciendis"),
        Action: operations.DfareportingChangeLogsListActionEnumActionAdd.ToPointer(),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("est"),
        Fields: sdk.String("tempora"),
        Ids: []string{
            "expedita",
            "modi",
            "adipisci",
        },
        Key: sdk.String("atque"),
        MaxChangeTime: sdk.String("at"),
        MaxResults: sdk.Int64(523607),
        MinChangeTime: sdk.String("exercitationem"),
        OauthToken: sdk.String("tempore"),
        ObjectIds: []string{
            "laboriosam",
        },
        ObjectType: operations.DfareportingChangeLogsListObjectTypeEnumObjectFloodlightConfiguration.ToPointer(),
        PageToken: sdk.String("minima"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "perspiciatis",
        QuotaUser: sdk.String("dicta"),
        SearchString: sdk.String("assumenda"),
        UploadType: sdk.String("reprehenderit"),
        UploadProtocol: sdk.String("tempora"),
        UserProfileIds: []string{
            "voluptates",
            "sequi",
        },
    }, operations.DfareportingChangeLogsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChangeLogsListResponse != nil {
        // handle response
    }
}
```
