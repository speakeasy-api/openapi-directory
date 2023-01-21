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
                GithubAccessCode: &shared.SchemeGithubAccessCode{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetActionOrganizationActivityListRequest{
        QueryParams: operations.GetActionOrganizationActivityListQueryParams{
            ID: "sit",
        },
    }
    
    res, err := s.Action.GetActionOrganizationActivityList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->