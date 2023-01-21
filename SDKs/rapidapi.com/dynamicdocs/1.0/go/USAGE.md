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
                AdvSecurityToken: &shared.SchemeAdvSecurityToken{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CompileRequest{
        PathParams: operations.CompilePathParams{
            TemplateToken: "sit",
        },
        QueryParams: operations.CompileQueryParams{
            DocFileName: "voluptas",
            DocURLExpiresIn: 6050128673802995827,
            LatexCompiler: "pdflatex",
            LatexRuns: 3390393562759376202,
            MainFileName: "dolor",
        },
        Headers: operations.CompileHeaders{
            ContentType: "expedita",
        },
        Request: map[string]interface{}{
            "fugit": "et",
            "nihil": "rerum",
            "dicta": "debitis",
        },
    }
    
    res, err := s.PDFGeneration.Compile(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Compile200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->