# Notifications

### Available Operations

* [StorageNotificationsDelete](#storagenotificationsdelete) - Permanently deletes a notification subscription.
* [StorageNotificationsGet](#storagenotificationsget) - View a notification configuration.
* [StorageNotificationsInsert](#storagenotificationsinsert) - Creates a notification subscription for a given bucket.
* [StorageNotificationsList](#storagenotificationslist) - Retrieves a list of notification subscriptions for a given bucket.

## StorageNotificationsDelete

Permanently deletes a notification subscription.

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
    res, err := s.Notifications.StorageNotificationsDelete(ctx, operations.StorageNotificationsDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "veniam",
        Fields: sdk.String("libero"),
        Key: sdk.String("architecto"),
        Notification: "cupiditate",
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eligendi"),
        UploadType: sdk.String("possimus"),
        UserIP: sdk.String("non"),
        UserProject: sdk.String("magnam"),
    }, operations.StorageNotificationsDeleteSecurity{
        Option1: &operations.StorageNotificationsDeleteSecurityOption1{
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

## StorageNotificationsGet

View a notification configuration.

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
    res, err := s.Notifications.StorageNotificationsGet(ctx, operations.StorageNotificationsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "itaque",
        Fields: sdk.String("sed"),
        Key: sdk.String("asperiores"),
        Notification: "veniam",
        OauthToken: sdk.String("consequuntur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facere"),
        UploadType: sdk.String("laudantium"),
        UserIP: sdk.String("odit"),
        UserProject: sdk.String("pariatur"),
    }, operations.StorageNotificationsGetSecurity{
        Option1: &operations.StorageNotificationsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Notification != nil {
        // handle response
    }
}
```

## StorageNotificationsInsert

Creates a notification subscription for a given bucket.

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
    res, err := s.Notifications.StorageNotificationsInsert(ctx, operations.StorageNotificationsInsertRequest{
        Notification: &shared.Notification{
            CustomAttributes: map[string]string{
                "exercitationem": "ab",
            },
            Etag: sdk.String("velit"),
            EventTypes: []string{
                "tempore",
                "nisi",
                "voluptatibus",
            },
            ID: sdk.String("48b656bc-db35-4ff2-a4b2-7537a8cd9e73"),
            Kind: sdk.String("dicta"),
            ObjectNamePrefix: sdk.String("error"),
            PayloadFormat: sdk.String("porro"),
            SelfLink: sdk.String("vitae"),
            Topic: sdk.String("dignissimos"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "esse",
        Fields: sdk.String("fugiat"),
        Key: sdk.String("ad"),
        OauthToken: sdk.String("aspernatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("delectus"),
        UserIP: sdk.String("iusto"),
        UserProject: sdk.String("dignissimos"),
    }, operations.StorageNotificationsInsertSecurity{
        Option1: &operations.StorageNotificationsInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Notification != nil {
        // handle response
    }
}
```

## StorageNotificationsList

Retrieves a list of notification subscriptions for a given bucket.

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
    res, err := s.Notifications.StorageNotificationsList(ctx, operations.StorageNotificationsListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "libero",
        Fields: sdk.String("illo"),
        Key: sdk.String("ab"),
        OauthToken: sdk.String("incidunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("saepe"),
        UserIP: sdk.String("tempore"),
        UserProject: sdk.String("veniam"),
    }, operations.StorageNotificationsListSecurity{
        Option1: &operations.StorageNotificationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Notifications != nil {
        // handle response
    }
}
```
