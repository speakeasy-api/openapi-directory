<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.ClassroomCoursesAliasesCreateRequest{
        DollarXgafv: "2",
        CourseAlias: &shared.CourseAlias{
            Alias: "provident",
        },
        AccessToken: "distinctio",
        Alt: "proto",
        Callback: "unde",
        CourseID: "nulla",
        Fields: "corrupti",
        Key: "illum",
        OauthToken: "vel",
        PrettyPrint: false,
        QuotaUser: "error",
        UploadType: "deserunt",
        UploadProtocol: "suscipit",
    }

    ctx := context.Background()
    res, err := s.Courses.ClassroomCoursesAliasesCreate(ctx, req, operations.ClassroomCoursesAliasesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CourseAlias != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->