# Comptage

### Available Operations

* [Comptage](#comptage) - Compter le nombre de caractère 

## Comptage

Compte le nombre de SMS necessaire à un envoi

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
    res, err := s.Comptage.Comptage(ctx, shared.ComptageRequest{
        Comptage: shared.ComptageRequestComptageEnumOne,
        DateEnvoi: sdk.String("deserunt"),
        Emetteur: sdk.String("suscipit"),
        GmtZone: shared.ComptageRequestGmtZoneEnumEuropeLondon.ToPointer(),
        Keyid: "magnam",
        Nostop: sdk.String("debitis"),
        Num: "ipsa",
        NumAzur: shared.ComptageRequestNumAzurEnumOne.ToPointer(),
        Sms: "delectus",
        Smslong: shared.ComptageRequestSmslongEnumNineHundredAndNinetyNine.ToPointer(),
        Tracker: sdk.String("tempora"),
        Ucs2: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ComptageReponse != nil {
        // handle response
    }
}
```
