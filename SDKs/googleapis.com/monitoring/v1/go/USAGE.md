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
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Key: "dolor",
            MonitoredResourceContainer: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
    }
    
    res, err := s.Locations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProject(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMetricsScopesByMonitoredProjectResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->