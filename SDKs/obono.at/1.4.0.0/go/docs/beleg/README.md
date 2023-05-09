# Beleg

## Overview

resources concerning a "Beleg"

### Available Operations

* [AddBeleg](#addbeleg) - Signs a receipt and stores it in the "Datenerfassungsprotokoll".
* [CreateAbschluss](#createabschluss) - Generates an `Abschlussbeleg`.
* [GetBeleg](#getbeleg) - Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".
* [GetBelege](#getbelege) - Retrieves the `Beleg` collection from the "Datenerfassungsprotokoll".
* [GetBelegeBelegUUID](#getbelegebeleguuid) - Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".

## AddBeleg

Signs a receipt and stores it in the "Datenerfassungsprotokoll".

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Jwt: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Beleg.AddBeleg(ctx, operations.AddBelegRequest{
        Belegdaten: shared.Belegdaten{
            ExternerBelegBelegkreis: sdk.String("corrupti"),
            ExternerBelegBezeichnung: sdk.String("provident"),
            ExternerBelegReferenz: sdk.String("distinctio"),
            Kunde: sdk.String("quibusdam"),
            Notizen: []string{
                "nulla",
                "corrupti",
                "illum",
            },
            Posten: []shared.Posten{
                shared.Posten{
                    Bezeichnung: "error",
                    BruttoBetrag: 645894,
                    ExternerBelegBelegkreis: sdk.String("suscipit"),
                    ExternerBelegBezeichnung: sdk.String("iure"),
                    ExternerBelegReferenz: sdk.String("magnam"),
                    Menge: 891773,
                    NettoBetrag: 56713,
                    Satz: shared.PostenSatzEnumNull,
                },
                shared.Posten{
                    Bezeichnung: "tempora",
                    BruttoBetrag: 383441,
                    ExternerBelegBelegkreis: sdk.String("molestiae"),
                    ExternerBelegBezeichnung: sdk.String("minus"),
                    ExternerBelegReferenz: sdk.String("placeat"),
                    Menge: 528895,
                    NettoBetrag: 479977,
                    Satz: shared.PostenSatzEnumErmaessigt2,
                },
            },
            Rabatte: []shared.Rabatt{
                shared.Rabatt{
                    BetragBrutto: 925597,
                    BetragNetto: 836079,
                    Bezeichnung: "ab",
                    Satz: shared.RabattSatzEnumErmaessigt1.ToPointer(),
                },
                shared.Rabatt{
                    BetragBrutto: 87129,
                    BetragNetto: 648172,
                    Bezeichnung: "perferendis",
                    Satz: shared.RabattSatzEnumErmaessigt1.ToPointer(),
                },
            },
            Storno: sdk.Bool(false),
            StornoBelegUUID: sdk.String("dfc2ddf7-cc78-4ca1-ba92-8fc816742cb7"),
            StornoText: sdk.String("ipsum"),
            Training: sdk.Bool(false),
            UnternehmenAdresse1: sdk.String("excepturi"),
            UnternehmenAdresse2: sdk.String("aspernatur"),
            UnternehmenFusszeile: sdk.String("perferendis"),
            UnternehmenID: sdk.String("ad"),
            UnternehmenIDTyp: shared.BelegdatenUnternehmenIDTypEnumUID.ToPointer(),
            UnternehmenKopfzeile: sdk.String("sed"),
            UnternehmenName: sdk.String("iste"),
            UnternehmenOrt: sdk.String("dolor"),
            UnternehmenPLZ: sdk.String("natus"),
            Zahlungen: []shared.Zahlung{
                shared.Zahlung{
                    Betrag: 943749,
                    Bezeichnung: "saepe",
                    Referenz: sdk.String("fuga"),
                },
                shared.Zahlung{
                    Betrag: 449950,
                    Bezeichnung: "corporis",
                    Referenz: sdk.String("iste"),
                },
            },
        },
        BelegUUID: "iure",
        RegistrierkasseUUID: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateAbschluss

Generates an `Abschlussbeleg`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Jwt: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Beleg.CreateAbschluss(ctx, operations.CreateAbschlussRequest{
        Abschlussbelegdaten: shared.Abschlussbelegdaten{
            AbschlussBeginnDatumUhrzeit: "quidem",
            AbschlussEndeDatumUhrzeit: "architecto",
        },
        RegistrierkasseUUID: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetBeleg

Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Jwt: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Beleg.GetBeleg(ctx, operations.GetBelegRequest{
        BelegUUID: "reiciendis",
        RegistrierkasseUUID: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Beleg != nil {
        // handle response
    }
}
```

## GetBelege

Retrieves the `Beleg` collection from the "Datenerfassungsprotokoll".

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Jwt: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Beleg.GetBelege(ctx, operations.GetBelegeRequest{
        After: sdk.String("mollitia"),
        Before: sdk.String("laborum"),
        Format: operations.GetBelegeFormatEnumExport,
        Gte: sdk.Int64(210382),
        Limit: sdk.Int64(358152),
        Lte: sdk.Int64(128926),
        Offset: sdk.Int64(750686),
        Order: operations.GetBelegeOrderEnumAsc.ToPointer(),
        RegistrierkasseUUID: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Belege != nil {
        // handle response
    }
}
```

## GetBelegeBelegUUID

Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Jwt: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Beleg.GetBelegeBelegUUID(ctx, operations.GetBelegeBelegUUIDRequest{
        BelegUUID: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Beleg != nil {
        // handle response
    }
}
```
