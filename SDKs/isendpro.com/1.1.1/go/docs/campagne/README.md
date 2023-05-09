# Campagne

### Available Operations

* [GetCampagne](#getcampagne) - Retourne les SMS envoyés sur une période donnée

## GetCampagne

Retourne les SMS envoyés sur une période donnée en fonction d'une date de début et d'une date de fin. 

Les dates sont au format YYYY-MM-DD hh:mm. 

Le fichier rapport de campagne est sous la forme d'un fichier zip + contenant un fichier csv contenant le détail des envois.


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
    res, err := s.Campagne.GetCampagne(ctx, operations.GetCampagneRequest{
        DateDeb: "illum",
        DateFin: "vel",
        Keyid: "error",
        RapportCampagne: operations.GetCampagneRapportCampagneEnumOne,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCampagne200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```
