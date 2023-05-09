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
    res, err := s.CreateEsimProfile(ctx, operations.CreateEsimProfileCreateEsimProfileRequest{
        CallbackMethod: operations.CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnumPatch.ToPointer(),
        CallbackURL: sdk.String("provident"),
        Eid: sdk.String("distinctio"),
        GenerateMatchingID: sdk.Bool(false),
    }, operations.CreateEsimProfileSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SupersimV1EsimProfile != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->