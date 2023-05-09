# Announcements

## Overview

Announcements that can be played during or before a call

### Available Operations

* [DeleteCustomersAccountAnnouncementsAnnouncementID](#deletecustomersaccountannouncementsannouncementid) - Delete an announcement audio file
* [GetAnnouncements](#getannouncements) - List global announcements
* [GetCustomersAccountAnnouncements](#getcustomersaccountannouncements) - List of announcement audio files
* [GetCustomersAccountAnnouncementsAnnouncementID](#getcustomersaccountannouncementsannouncementid) - Represents an announcement audio file
* [PostAnnouncements](#postannouncements) - Add a new announcement audio file

## DeleteCustomersAccountAnnouncementsAnnouncementID

Delete an announcement audio file

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Announcements.DeleteCustomersAccountAnnouncementsAnnouncementID(ctx, operations.DeleteCustomersAccountAnnouncementsAnnouncementIDRequest{
        Account: 715190,
        AnnouncementID: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAnnouncements

List global announcements

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Announcements.GetAnnouncements(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.OneGetResponses200ContentApplication1jsonSchema != nil {
        // handle response
    }
}
```

## GetCustomersAccountAnnouncements

List of announcement audio files

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Announcements.GetCustomersAccountAnnouncements(ctx, operations.GetCustomersAccountAnnouncementsRequest{
        Account: 602763,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCustomersAccountAnnouncements200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetCustomersAccountAnnouncementsAnnouncementID

Represents an announcement audio file

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Announcements.GetCustomersAccountAnnouncementsAnnouncementID(ctx, operations.GetCustomersAccountAnnouncementsAnnouncementIDRequest{
        Account: 857946,
        AnnouncementID: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OneannouncementsPostResponses201ContentApplication1jsonSchema != nil {
        // handle response
    }
}
```

## PostAnnouncements

Add a new announcement audio file

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Announcements.PostAnnouncements(ctx, operations.PostAnnouncementsRequestBody{
        Description: sdk.String("illum"),
        File: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAnnouncements201ApplicationJSONObject != nil {
        // handle response
    }
}
```
