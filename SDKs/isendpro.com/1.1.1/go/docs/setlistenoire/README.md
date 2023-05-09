# SetListeNoire

### Available Operations

* [SetListeNoire](#setlistenoire) - Ajoute un numero en liste noire

## SetListeNoire

Ajoute un numero en liste noire. Une fois ajouté, les requêtes d'envoi de SMS marketing vers ce numéro seront refusées.

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
    res, err := s.SetListeNoire.SetListeNoire(ctx, operations.SetListeNoireRequest{
        Keyid: "reiciendis",
        Num: "voluptatibus",
        SetlisteNoire: operations.SetListeNoireSetlisteNoireEnumOne,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LISTENOIREReponse != nil {
        // handle response
    }
}
```
