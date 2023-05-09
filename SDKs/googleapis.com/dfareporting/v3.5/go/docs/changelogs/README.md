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
        AccessToken: sdk.String("facere"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("doloremque"),
        Fields: sdk.String("vero"),
        ID: "03f3deba-297b-4e3e-90bc-40df868fd524",
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "impedit",
        QuotaUser: sdk.String("libero"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("nesciunt"),
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
        AccessToken: sdk.String("pariatur"),
        Action: operations.DfareportingChangeLogsListActionEnumActionDisable.ToPointer(),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quia"),
        Fields: sdk.String("reiciendis"),
        Ids: []string{
            "doloribus",
            "et",
        },
        Key: sdk.String("qui"),
        MaxChangeTime: sdk.String("iusto"),
        MaxResults: sdk.Int64(955783),
        MinChangeTime: sdk.String("quidem"),
        OauthToken: sdk.String("aperiam"),
        ObjectIds: []string{
            "voluptatem",
            "soluta",
            "hic",
            "beatae",
        },
        ObjectType: operations.DfareportingChangeLogsListObjectTypeEnumObjectFloodlightDv360Link.ToPointer(),
        PageToken: sdk.String("deleniti"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "fugit",
        QuotaUser: sdk.String("inventore"),
        SearchString: sdk.String("reprehenderit"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("dignissimos"),
        UserProfileIds: []string{
            "nulla",
            "consequatur",
            "similique",
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
