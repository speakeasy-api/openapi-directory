# GetListeNoire

### Available Operations

* [GetListeNoire](#getlistenoire) - Retourne le liste noire

## GetListeNoire

Retourne un fichier csv zippé contenant la liste noire

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
    res, err := s.GetListeNoire.GetListeNoire(ctx, operations.GetListeNoireRequest{
        GetListeNoire: operations.GetListeNoireGetListeNoireEnumOne,
        Keyid: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetListeNoire200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```
