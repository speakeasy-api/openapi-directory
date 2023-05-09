# Projects

### Available Operations

* [PolicyanalyzerProjectsLocationsActivityTypesActivitiesQuery](#policyanalyzerprojectslocationsactivitytypesactivitiesquery) - Queries policy activities on GCP resources.

## PolicyanalyzerProjectsLocationsActivityTypesActivitiesQuery

Queries policy activities on GCP resources.

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
    res, err := s.Projects.PolicyanalyzerProjectsLocationsActivityTypesActivitiesQuery(ctx, operations.PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("suscipit"),
        Filter: sdk.String("molestiae"),
        Key: sdk.String("minus"),
        OauthToken: sdk.String("placeat"),
        PageSize: sdk.Int64(528895),
        PageToken: sdk.String("iusto"),
        Parent: "excepturi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("temporibus"),
    }, operations.PolicyanalyzerProjectsLocationsActivityTypesActivitiesQuerySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse != nil {
        // handle response
    }
}
```
