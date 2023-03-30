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

    req := operations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest{
        Security: operations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity{
            Option1: &operations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        QueryParams: operations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams{
            DollarXgafv: "2",
            AccessToken: "provident",
            Alt: "proto",
            Callback: "quibusdam",
            Fields: "unde",
            Key: "nulla",
            MonitoredResourceContainer: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
    }

    ctx := context.Background()
    res, err := s.Locations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProject(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMetricsScopesByMonitoredProjectResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->