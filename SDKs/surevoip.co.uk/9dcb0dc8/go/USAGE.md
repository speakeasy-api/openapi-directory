<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                BasicAuth: &shared.SchemeBasicAuth{
                    Password: "YOUR_PASSWORD_HERE",
                    Username: "YOUR_USERNAME_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.DeleteCustomersAccountAnnouncementsAnnouncementIDRequest{
        PathParams: operations.DeleteCustomersAccountAnnouncementsAnnouncementIDPathParams{
            Account: 5154430323399689181,
            AnnouncementID: "blanditiis",
        },
    }
    
    res, err := s.Announcements.DeleteCustomersAccountAnnouncementsAnnouncementID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->