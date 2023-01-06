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
    
    req := operations.CertificateActionRetrieveRequest{
        PathParams: operations.CertificateActionRetrievePathParams{
            CertificateID: "sint",
        },
    }
    
    res, err := s.V1.CertificateActionRetrieve(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ArrayOfCertificateAction != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->