# CaseClassifications

### Available Operations

* [CloudsupportCaseClassificationsSearch](#cloudsupportcaseclassificationssearch) - Retrieve valid classifications to be used when creating a support case. The classications are hierarchical, with each classification containing all levels of the hierarchy, separated by " > ". For example "Technical Issue > Compute > Compute Engine".

## CloudsupportCaseClassificationsSearch

Retrieve valid classifications to be used when creating a support case. The classications are hierarchical, with each classification containing all levels of the hierarchy, separated by " > ". For example "Technical Issue > Compute > Compute Engine".

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
    res, err := s.CaseClassifications.CloudsupportCaseClassificationsSearch(ctx, operations.CloudsupportCaseClassificationsSearchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("tempora"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("molestiae"),
        PageSize: sdk.Int64(791725),
        PageToken: sdk.String("placeat"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("voluptatum"),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("nisi"),
    }, operations.CloudsupportCaseClassificationsSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchCaseClassificationsResponse != nil {
        // handle response
    }
}
```
