# Hlr

### Available Operations

* [GetHlr](#gethlr) - Vérifier la validité d'un numéro

## GetHlr

Réalise un lookup HLR sur les numéros 


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Hlr.GetHlr(ctx, shared.HLRrequest{
        GetHLR: shared.HLRrequestGetHLREnumOne,
        Keyid: "perferendis",
        Num: []string{
            "repellendus",
            "sapiente",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HLRReponse != nil {
        // handle response
    }
}
```
