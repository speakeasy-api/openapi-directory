# Repertoire

### Available Operations

* [Repertoire](#repertoire) - Gestion repertoire (modification)
* [RepertoireCrea](#repertoirecrea) - Gestion repertoire (creation)

## Repertoire

Ajoute ou supprime une liste de numéros à un répertoire existant.

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
    res, err := s.Repertoire.Repertoire(ctx, shared.REPERTOIREmodifrequest{
        Champ1: []string{
            "odit",
            "at",
            "at",
            "maiores",
        },
        Champ10: []string{
            "quod",
            "quod",
        },
        Champ11: []string{
            "totam",
            "porro",
        },
        Champ12: []string{
            "dicta",
            "nam",
            "officia",
        },
        Champ13: []string{
            "fugit",
            "deleniti",
            "hic",
        },
        Champ14: []string{
            "totam",
            "beatae",
            "commodi",
            "molestiae",
        },
        Champ15: []string{
            "qui",
            "impedit",
        },
        Champ16: []string{
            "esse",
            "ipsum",
            "excepturi",
        },
        Champ17: []string{
            "perferendis",
        },
        Champ18: []string{
            "natus",
            "sed",
        },
        Champ19: []string{
            "dolor",
            "natus",
            "laboriosam",
        },
        Champ2: []string{
            "saepe",
            "fuga",
            "in",
            "corporis",
        },
        Champ20: []string{
            "iure",
            "saepe",
            "quidem",
        },
        Champ21: []string{
            "ipsa",
        },
        Champ22: []string{
            "est",
            "mollitia",
            "laborum",
            "dolores",
        },
        Champ23: []string{
            "corporis",
        },
        Champ24: []string{
            "nobis",
        },
        Champ25: []string{
            "omnis",
            "nemo",
        },
        Champ26: []string{
            "excepturi",
            "accusantium",
        },
        Champ27: []string{
            "culpa",
            "doloribus",
        },
        Champ3: []string{
            "architecto",
            "mollitia",
            "dolorem",
            "culpa",
        },
        Champ4: []string{
            "repellat",
        },
        Champ5: []string{
            "occaecati",
            "numquam",
            "commodi",
        },
        Champ6: []string{
            "molestiae",
            "velit",
        },
        Champ7: []string{
            "quia",
            "quis",
            "vitae",
        },
        Champ8: []string{
            "animi",
            "enim",
            "odit",
        },
        Champ9: []string{
            "sequi",
            "tenetur",
            "ipsam",
            "id",
        },
        Keyid: "possimus",
        Num: []string{
            "quasi",
        },
        RepertoireEdit: shared.REPERTOIREmodifrequestRepertoireEditEnumDel,
        RepertoireID: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.REPERTOIREmodifreponse != nil {
        // handle response
    }
}
```

## RepertoireCrea

Cree un nouveau répertoire et retourne son identifiant. Cet identifiant pourra être utilisé pour ajouter ou supprimer des numéros via l'API.

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
    res, err := s.Repertoire.RepertoireCrea(ctx, shared.REPERTOIREcreaterequest{
        Keyid: "laborum",
        RepertoireEdit: shared.REPERTOIREcreaterequestRepertoireEditEnumCreate,
        RepertoireNom: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.REPERTOIREcreatereponse != nil {
        // handle response
    }
}
```
