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

    req := operations.OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Filter: "nulla",
        Key: "corrupti",
        OauthToken: "illum",
        PageSize: 423655,
        PageToken: "error",
        Parent: "deserunt",
        PrettyPrint: false,
        QuotaUser: "suscipit",
        UploadType: "iure",
        UploadProtocol: "magnam",
    }

    ctx := context.Background()
    res, err := s.Projects.OsconfigProjectsLocationsInstanceOSPoliciesCompliancesList(ctx, req, operations.OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInstanceOSPoliciesCompliancesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->