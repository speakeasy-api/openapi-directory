<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.ClassroomCoursesAliasesCreateRequest{
        Security: operations.ClassroomCoursesAliasesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ClassroomCoursesAliasesCreatePathParams{
            CourseID: "eveniet",
        },
        QueryParams: operations.ClassroomCoursesAliasesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "magni",
            Alt: "media",
            Callback: "quo",
            Fields: "minima",
            Key: "qui",
            OauthToken: "dolores",
            PrettyPrint: true,
            QuotaUser: "cumque",
            UploadType: "ad",
            UploadProtocol: "facilis",
        },
        Request: &shared.CourseAlias{
            Alias: "magnam",
        },
    }
    
    res, err := s.Courses.ClassroomCoursesAliasesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CourseAlias != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->