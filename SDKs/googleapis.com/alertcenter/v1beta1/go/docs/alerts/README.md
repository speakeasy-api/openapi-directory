# Alerts

### Available Operations

* [AlertcenterAlertsBatchDelete](#alertcenteralertsbatchdelete) - Performs batch delete operation on alerts.
* [AlertcenterAlertsBatchUndelete](#alertcenteralertsbatchundelete) - Performs batch undelete operation on alerts.
* [AlertcenterAlertsDelete](#alertcenteralertsdelete) - Marks the specified alert for deletion. An alert that has been marked for deletion is removed from Alert Center after 30 days. Marking an alert for deletion has no effect on an alert which has already been marked for deletion. Attempting to mark a nonexistent alert for deletion results in a `NOT_FOUND` error.
* [AlertcenterAlertsFeedbackCreate](#alertcenteralertsfeedbackcreate) - Creates new feedback for an alert. Attempting to create a feedback for a non-existent alert returns `NOT_FOUND` error. Attempting to create a feedback for an alert that is marked for deletion returns `FAILED_PRECONDITION' error.
* [AlertcenterAlertsFeedbackList](#alertcenteralertsfeedbacklist) - Lists all the feedback for an alert. Attempting to list feedbacks for a non-existent alert returns `NOT_FOUND` error.
* [AlertcenterAlertsGet](#alertcenteralertsget) - Gets the specified alert. Attempting to get a nonexistent alert returns `NOT_FOUND` error.
* [AlertcenterAlertsGetMetadata](#alertcenteralertsgetmetadata) - Returns the metadata of an alert. Attempting to get metadata for a non-existent alert returns `NOT_FOUND` error.
* [AlertcenterAlertsList](#alertcenteralertslist) - Lists the alerts.
* [AlertcenterAlertsUndelete](#alertcenteralertsundelete) - Restores, or "undeletes", an alert that was marked for deletion within the past 30 days. Attempting to undelete an alert which was marked for deletion over 30 days ago (which has been removed from the Alert Center database) or a nonexistent alert returns a `NOT_FOUND` error. Attempting to undelete an alert which has not been marked for deletion has no effect.

## AlertcenterAlertsBatchDelete

Performs batch delete operation on alerts.

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
    res, err := s.Alerts.AlertcenterAlertsBatchDelete(ctx, operations.AlertcenterAlertsBatchDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BatchDeleteAlertsRequest: &shared.BatchDeleteAlertsRequest{
            AlertID: []string{
                "tempora",
                "suscipit",
                "molestiae",
                "minus",
            },
            CustomerID: sdk.String("placeat"),
        },
        AccessToken: sdk.String("voluptatum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("nisi"),
        Key: sdk.String("recusandae"),
        OauthToken: sdk.String("temporibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ab"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("veritatis"),
    }, operations.AlertcenterAlertsBatchDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDeleteAlertsResponse != nil {
        // handle response
    }
}
```

## AlertcenterAlertsBatchUndelete

Performs batch undelete operation on alerts.

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
    res, err := s.Alerts.AlertcenterAlertsBatchUndelete(ctx, operations.AlertcenterAlertsBatchUndeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BatchUndeleteAlertsRequest: &shared.BatchUndeleteAlertsRequest{
            AlertID: []string{
                "ipsam",
            },
            CustomerID: sdk.String("repellendus"),
        },
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("odit"),
        Fields: sdk.String("at"),
        Key: sdk.String("at"),
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("quod"),
    }, operations.AlertcenterAlertsBatchUndeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchUndeleteAlertsResponse != nil {
        // handle response
    }
}
```

## AlertcenterAlertsDelete

Marks the specified alert for deletion. An alert that has been marked for deletion is removed from Alert Center after 30 days. Marking an alert for deletion has no effect on an alert which has already been marked for deletion. Attempting to mark a nonexistent alert for deletion results in a `NOT_FOUND` error.

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
    res, err := s.Alerts.AlertcenterAlertsDelete(ctx, operations.AlertcenterAlertsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("totam"),
        AlertID: "porro",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        CustomerID: sdk.String("nam"),
        Fields: sdk.String("officia"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("fugit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("optio"),
    }, operations.AlertcenterAlertsDeleteSecurity{
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

## AlertcenterAlertsFeedbackCreate

Creates new feedback for an alert. Attempting to create a feedback for a non-existent alert returns `NOT_FOUND` error. Attempting to create a feedback for an alert that is marked for deletion returns `FAILED_PRECONDITION' error.

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
    res, err := s.Alerts.AlertcenterAlertsFeedbackCreate(ctx, operations.AlertcenterAlertsFeedbackCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AlertFeedback: &shared.AlertFeedback{
            AlertID: sdk.String("beatae"),
            CreateTime: sdk.String("commodi"),
            CustomerID: sdk.String("molestiae"),
            Email: sdk.String("Christy.Ryan21@gmail.com"),
            FeedbackID: sdk.String("excepturi"),
            Type: shared.AlertFeedbackTypeEnumAlertFeedbackTypeUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("perferendis"),
        AlertID: "ad",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sed"),
        CustomerID: sdk.String("iste"),
        Fields: sdk.String("dolor"),
        Key: sdk.String("natus"),
        OauthToken: sdk.String("laboriosam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("fuga"),
    }, operations.AlertcenterAlertsFeedbackCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AlertFeedback != nil {
        // handle response
    }
}
```

## AlertcenterAlertsFeedbackList

Lists all the feedback for an alert. Attempting to list feedbacks for a non-existent alert returns `NOT_FOUND` error.

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
    res, err := s.Alerts.AlertcenterAlertsFeedbackList(ctx, operations.AlertcenterAlertsFeedbackListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("corporis"),
        AlertID: "iste",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("saepe"),
        CustomerID: sdk.String("quidem"),
        Fields: sdk.String("architecto"),
        Filter: sdk.String("ipsa"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("est"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("dolores"),
    }, operations.AlertcenterAlertsFeedbackListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAlertFeedbackResponse != nil {
        // handle response
    }
}
```

## AlertcenterAlertsGet

Gets the specified alert. Attempting to get a nonexistent alert returns `NOT_FOUND` error.

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
    res, err := s.Alerts.AlertcenterAlertsGet(ctx, operations.AlertcenterAlertsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("corporis"),
        AlertID: "explicabo",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("enim"),
        CustomerID: sdk.String("omnis"),
        Fields: sdk.String("nemo"),
        Key: sdk.String("minima"),
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("culpa"),
    }, operations.AlertcenterAlertsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Alert != nil {
        // handle response
    }
}
```

## AlertcenterAlertsGetMetadata

Returns the metadata of an alert. Attempting to get metadata for a non-existent alert returns `NOT_FOUND` error.

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
    res, err := s.Alerts.AlertcenterAlertsGetMetadata(ctx, operations.AlertcenterAlertsGetMetadataRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sapiente"),
        AlertID: "architecto",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolorem"),
        CustomerID: sdk.String("culpa"),
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("repellat"),
        OauthToken: sdk.String("mollitia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("commodi"),
    }, operations.AlertcenterAlertsGetMetadataSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AlertMetadata != nil {
        // handle response
    }
}
```

## AlertcenterAlertsList

Lists the alerts.

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
    res, err := s.Alerts.AlertcenterAlertsList(ctx, operations.AlertcenterAlertsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("error"),
        CustomerID: sdk.String("quia"),
        Fields: sdk.String("quis"),
        Filter: sdk.String("vitae"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("animi"),
        OrderBy: sdk.String("enim"),
        PageSize: sdk.Int64(138183),
        PageToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sequi"),
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.AlertcenterAlertsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAlertsResponse != nil {
        // handle response
    }
}
```

## AlertcenterAlertsUndelete

Restores, or "undeletes", an alert that was marked for deletion within the past 30 days. Attempting to undelete an alert which was marked for deletion over 30 days ago (which has been removed from the Alert Center database) or a nonexistent alert returns a `NOT_FOUND` error. Attempting to undelete an alert which has not been marked for deletion has no effect.

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
    res, err := s.Alerts.AlertcenterAlertsUndelete(ctx, operations.AlertcenterAlertsUndeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        UndeleteAlertRequest: &shared.UndeleteAlertRequest{
            CustomerID: sdk.String("possimus"),
        },
        AccessToken: sdk.String("aut"),
        AlertID: "quasi",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("temporibus"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("nihil"),
    }, operations.AlertcenterAlertsUndeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Alert != nil {
        // handle response
    }
}
```
