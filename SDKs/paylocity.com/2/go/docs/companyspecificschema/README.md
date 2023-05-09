# CompanySpecificSchema

### Available Operations

* [GetCompanySpecificOpenAPIDocumentation](#getcompanyspecificopenapidocumentation) - Get Company-Specific Open API Documentation

## GetCompanySpecificOpenAPIDocumentation

The company-specific Open API endpoint allows the client to GET an Open API document for the Paylocity API that is customized with company-specific resource schemas. These customized resource schemas define certain properties as enumerations of pre-defined values that correspond to the company's setup with Web Pay. The customized schemas also indicate which properties are required by the company within Web Pay.<br  />To learn more about Open API, click [here](https://www.openapis.org/)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CompanySpecificSchema.GetCompanySpecificOpenAPIDocumentation(ctx, operations.GetCompanySpecificOpenAPIDocumentationRequest{
        Authorization: "deserunt",
        CompanyID: "perferendis",
    }, operations.GetCompanySpecificOpenAPIDocumentationSecurity{
        PaylocityAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
