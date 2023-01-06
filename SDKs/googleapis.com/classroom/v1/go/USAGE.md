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
            CourseID: "dolores",
        },
        QueryParams: operations.ClassroomCoursesAliasesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "ad",
            Alt: "proto",
            Callback: "laudantium",
            Fields: "impedit",
            Key: "consequatur",
            OauthToken: "et",
            PrettyPrint: false,
            QuotaUser: "et",
            UploadType: "fugit",
            UploadProtocol: "aut",
        },
        Request: &shared.CourseAlias{
            Alias: "error",
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