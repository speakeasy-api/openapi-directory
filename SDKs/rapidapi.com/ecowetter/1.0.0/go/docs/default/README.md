# Default

### Available Operations

* [GetPublicHistory](#getpublichistory) - Wetter 2021 für Berlin, Reichstag

## GetPublicHistory

Abfrage der Wettervorhersage für einen Ort, der entweder durch Angabe eines Suchbegriffs mit dem Parameter `q` oder durch Geo-Koordinaten in den Parametern `lat` und `lon` spezifiziert wird.

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
    res, err := s.Default.GetPublicHistory(ctx, operations.GetPublicHistoryRequest{
        From: sdk.String("quibusdam"),
        Q: sdk.String("unde"),
        To: sdk.String("nulla"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPublicHistory200ApplicationJSONObject != nil {
        // handle response
    }
}
```
