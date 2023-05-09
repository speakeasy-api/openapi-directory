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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("numquam"),
        Fields: sdk.String("quia"),
        ID: "d84496cb-deec-4f6b-99bc-63562ebfdf55",
        Key: sdk.String("porro"),
        OauthToken: sdk.String("dolores"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "iste",
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("eaque"),
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
        AccessToken: sdk.String("consequatur"),
        Action: operations.DfareportingChangeLogsListActionEnumActionLink.ToPointer(),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ea"),
        Fields: sdk.String("laborum"),
        Ids: []string{
            "fugit",
        },
        Key: sdk.String("quos"),
        MaxChangeTime: sdk.String("molestiae"),
        MaxResults: sdk.Int64(454329),
        MinChangeTime: sdk.String("autem"),
        OauthToken: sdk.String("numquam"),
        ObjectIds: []string{
            "debitis",
            "earum",
            "suscipit",
            "assumenda",
        },
        ObjectType: operations.DfareportingChangeLogsListObjectTypeEnumObjectFloodlightConfiguration.ToPointer(),
        PageToken: sdk.String("porro"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "suscipit",
        QuotaUser: sdk.String("temporibus"),
        SearchString: sdk.String("vel"),
        UploadType: sdk.String("itaque"),
        UploadProtocol: sdk.String("nulla"),
        UserProfileIds: []string{
            "quod",
            "in",
            "nesciunt",
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
