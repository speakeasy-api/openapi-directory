<!-- Start SDK Example Usage -->
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
    res, err := s.V1.CertificateActionRetrieve(ctx, operations.CertificateActionRetrieveRequest{
        CertificateID: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArrayOfCertificateAction != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->