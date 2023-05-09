# UserDeletion

### Available Operations

* [AnalyticsUserDeletionUserDeletionRequestUpsert](#analyticsuserdeletionuserdeletionrequestupsert) - Insert or update a user deletion requests.

## AnalyticsUserDeletionUserDeletionRequestUpsert

Insert or update a user deletion requests.

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
    res, err := s.UserDeletion.AnalyticsUserDeletionUserDeletionRequestUpsert(ctx, operations.AnalyticsUserDeletionUserDeletionRequestUpsertRequest{
        UserDeletionRequestInput: &shared.UserDeletionRequestInput{
            FirebaseProjectID: sdk.String("atque"),
            ID: &shared.UserDeletionRequestID{
                Type: sdk.String("quaerat"),
                UserID: sdk.String("aperiam"),
            },
            Kind: sdk.String("dignissimos"),
            PropertyID: sdk.String("quam"),
            WebPropertyID: sdk.String("modi"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("fuga"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("deleniti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        UserIP: sdk.String("sint"),
    }, operations.AnalyticsUserDeletionUserDeletionRequestUpsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserDeletionRequest != nil {
        // handle response
    }
}
```
