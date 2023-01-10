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
            TemplateToken: "et",
        },
        QueryParams: operations.CompileQueryParams{
            DocFileName: "facere",
            DocURLExpiresIn: 6665699353848896203,
            LatexCompiler: "lualatex",
            LatexRuns: 1660818401949066256,
            MainFileName: "minima",
        },
        Headers: operations.CompileHeaders{
            ContentType: "est",
        },
        Request: map[string]interface{}{
            "non": "aut",
            "explicabo": "error",
            "consectetur": "quis",
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