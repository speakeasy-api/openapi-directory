# DelListeNoire

### Available Operations

* [DelListeNoire](#dellistenoire) - Ajoute un numero en liste noire

## DelListeNoire

Supprime un numero en liste noire

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
    res, err := s.DelListeNoire.DelListeNoire(ctx, operations.DelListeNoireRequest{
        DelListeNoire: operations.DelListeNoireDelListeNoireEnumOne,
        Keyid: "placeat",
        Num: "voluptatum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LISTENOIREReponse != nil {
        // handle response
    }
}
```
