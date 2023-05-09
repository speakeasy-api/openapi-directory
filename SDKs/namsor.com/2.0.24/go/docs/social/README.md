# Social

## Overview

Social media and pseudonyms

### Available Operations

* [PhoneCode](#phonecode) - [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.
* [PhoneCodeBatch](#phonecodebatch) - [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.
* [PhoneCodeGeo](#phonecodegeo) - [USES 11 UNITS PER NAME] Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).
* [PhoneCodeGeoBatch](#phonecodegeobatch) - [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).
* [PhoneCodeGeoFeedbackLoop](#phonecodegeofeedbackloop) - [CREDITS 1 UNIT] Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).

## PhoneCode

[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.

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
    res, err := s.Social.PhoneCode(ctx, operations.PhoneCodeRequest{
        FirstName: "Michael",
        LastName: "Osinski",
        PhoneNumber: "atque",
    }, operations.PhoneCodeSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FirstLastNamePhoneCodedOut != nil {
        // handle response
    }
}
```

## PhoneCodeBatch

[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Social.PhoneCodeBatch(ctx, shared.BatchFirstLastNamePhoneNumberIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("a4127dd5-97ff-4471-9aa1-bc74b86cecc7"),
                Name: sdk.String("Camille Kozey"),
            },
            shared.FactIn{
                ID: sdk.String("4848bd6a-6f04-441d-ac3b-808094373e06"),
                Name: sdk.String("Lucille Hermiston"),
            },
            shared.FactIn{
                ID: sdk.String("ebbad02f-2586-4bcf-9525-58daa95be6cd"),
                Name: sdk.String("Tina Kirlin"),
            },
            shared.FactIn{
                ID: sdk.String("c354aa43-2b47-4e17-a3c5-208c23e9802d"),
                Name: sdk.String("Dr. Sean Williamson"),
            },
        },
        PersonalNamesWithPhoneNumbers: []shared.FirstLastNamePhoneNumberIn{
            shared.FirstLastNamePhoneNumberIn{
                FirstName: sdk.String("Thalia"),
                ID: sdk.String("b4a8b674-ee5c-4fc1-8edc-7f787e32e04b"),
                LastName: sdk.String("Donnelly"),
                PhoneNumber: sdk.String("pariatur"),
            },
            shared.FirstLastNamePhoneNumberIn{
                FirstName: sdk.String("Dedrick"),
                ID: sdk.String("ed0c5670-ef42-4bd3-89f1-cc503f6c39bc"),
                LastName: sdk.String("Shanahan"),
                PhoneNumber: sdk.String("alias"),
            },
        },
    }, operations.PhoneCodeBatchSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchFirstLastNamePhoneCodedOut != nil {
        // handle response
    }
}
```

## PhoneCodeGeo

[USES 11 UNITS PER NAME] Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).

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
    res, err := s.Social.PhoneCodeGeo(ctx, operations.PhoneCodeGeoRequest{
        CountryIso2: "deserunt",
        FirstName: "Hilda",
        LastName: "Dibbert",
        PhoneNumber: "perspiciatis",
    }, operations.PhoneCodeGeoSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FirstLastNamePhoneCodedOut != nil {
        // handle response
    }
}
```

## PhoneCodeGeoBatch

[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Social.PhoneCodeGeoBatch(ctx, shared.BatchFirstLastNamePhoneNumberGeoIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("f957f385-189a-4d7e-b807-aae03f33ca79"),
                Name: sdk.String("Alton McKenzie"),
            },
        },
        PersonalNamesWithPhoneNumbers: []shared.FirstLastNamePhoneNumberGeoIn{
            shared.FirstLastNamePhoneNumberGeoIn{
                CountryIso2: sdk.String("aut"),
                CountryIso2Alt: sdk.String("neque"),
                FirstName: sdk.String("Carey"),
                ID: sdk.String("ba26fd36-8ba9-4216-bcb4-15835c736417"),
                LastName: sdk.String("Crona"),
                PhoneNumber: sdk.String("ratione"),
            },
            shared.FirstLastNamePhoneNumberGeoIn{
                CountryIso2: sdk.String("veritatis"),
                CountryIso2Alt: sdk.String("amet"),
                FirstName: sdk.String("Claudine"),
                ID: sdk.String("edc046bc-5163-4bbc-a492-27c42c22c553"),
                LastName: sdk.String("Hahn"),
                PhoneNumber: sdk.String("accusantium"),
            },
        },
    }, operations.PhoneCodeGeoBatchSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchFirstLastNamePhoneCodedOut != nil {
        // handle response
    }
}
```

## PhoneCodeGeoFeedbackLoop

[CREDITS 1 UNIT] Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).

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
    res, err := s.Social.PhoneCodeGeoFeedbackLoop(ctx, operations.PhoneCodeGeoFeedbackLoopRequest{
        CountryIso2: "incidunt",
        FirstName: "Krystel",
        LastName: "Hane",
        PhoneNumber: "quo",
        PhoneNumberE164: "quis",
    }, operations.PhoneCodeGeoFeedbackLoopSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FirstLastNamePhoneCodedOut != nil {
        // handle response
    }
}
```
