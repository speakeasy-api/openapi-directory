# Indian

## Overview

INDIAN special features

### Available Operations

* [CastegroupIndianFull](#castegroupindianfull) - [USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of a personal full name.
* [CastegroupIndianFullBatch](#castegroupindianfullbatch) - [USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of up to 100 personal full names. 
* [Religion](#religion) - [USES 10 UNITS PER NAME] Infer the likely religion of a personal Indian full name, provided the Indian state or Union territory (NB/ this can be inferred using the subclassification endpoint).
* [ReligionIndianFullBatch](#religionindianfullbatch) - [USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full Indian names, provided the subclassification at State or Union territory level (NB/ can be inferred using the subclassification endpoint).
* [SubclassificationIndian](#subclassificationindian) - [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on the name.
* [SubclassificationIndianBatch](#subclassificationindianbatch) - [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on a list of up to 100 names.
* [SubclassificationIndianFull](#subclassificationindianfull) - [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on the name.
* [SubclassificationIndianFullBatch](#subclassificationindianfullbatch) - [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on a list of up to 100 names.

## CastegroupIndianFull

[USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of a personal full name.

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
    res, err := s.Indian.CastegroupIndianFull(ctx, operations.CastegroupIndianFullRequest{
        PersonalNameFull: "accusamus",
        SubDivisionIso31662: "impedit",
    }, operations.CastegroupIndianFullSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PersonalNameCastegroupOut != nil {
        // handle response
    }
}
```

## CastegroupIndianFullBatch

[USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of up to 100 personal full names. 

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
    res, err := s.Indian.CastegroupIndianFullBatch(ctx, shared.BatchPersonalNameSubdivisionIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("ef66ef1c-aa33-483c-abeb-477373c8d72f"),
                Name: sdk.String("Dr. Megan Spinka"),
            },
            shared.FactIn{
                ID: sdk.String("1f2c4310-661e-4963-89e1-cf9e06e3a437"),
                Name: sdk.String("Sharon Adams"),
            },
            shared.FactIn{
                ID: sdk.String("6b6bc9b8-f759-4eac-95a9-741d31135296"),
                Name: sdk.String("Patty Reinger"),
            },
            shared.FactIn{
                ID: sdk.String("72026114-35e1-439d-bc22-59b1abda8c07"),
                Name: sdk.String("Ms. Tasha Block"),
            },
        },
        PersonalNames: []shared.PersonalNameSubdivisionIn{
            shared.PersonalNameSubdivisionIn{
                ID: sdk.String("b0672d1a-d879-4eeb-9665-b85efbd02bae"),
                Name: sdk.String("Mamie Torp"),
                SubdivisionIso: sdk.String("odio"),
            },
            shared.PersonalNameSubdivisionIn{
                ID: sdk.String("82259e3e-a4b5-4197-b924-43da7ce52b89"),
                Name: sdk.String("Nichole Halvorson"),
                SubdivisionIso: sdk.String("minus"),
            },
            shared.PersonalNameSubdivisionIn{
                ID: sdk.String("6454efb0-b348-496c-bca5-acfbe2fd5707"),
                Name: sdk.String("Arlene Kuphal"),
                SubdivisionIso: sdk.String("error"),
            },
            shared.PersonalNameSubdivisionIn{
                ID: sdk.String("177deac6-46ec-4b57-b409-e3eb1e5a2b12"),
                Name: sdk.String("Robin Bednar"),
                SubdivisionIso: sdk.String("veritatis"),
            },
        },
    }, operations.CastegroupIndianFullBatchSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchPersonalNameCastegroupOut != nil {
        // handle response
    }
}
```

## Religion

[USES 10 UNITS PER NAME] Infer the likely religion of a personal Indian full name, provided the Indian state or Union territory (NB/ this can be inferred using the subclassification endpoint).

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
    res, err := s.Indian.Religion(ctx, operations.ReligionRequest{
        PersonalNameFull: "quasi",
        SubDivisionIso31662: "laboriosam",
    }, operations.ReligionSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PersonalNameReligionedOut != nil {
        // handle response
    }
}
```

## ReligionIndianFullBatch

[USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full Indian names, provided the subclassification at State or Union territory level (NB/ can be inferred using the subclassification endpoint).

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
    res, err := s.Indian.ReligionIndianFullBatch(ctx, shared.BatchPersonalNameSubdivisionIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("b99545fc-95fa-4889-b0e1-89dbb30fcb33"),
                Name: sdk.String("Doug Baumbach"),
            },
            shared.FactIn{
                ID: sdk.String("b197cd44-e2f5-42d8-ad35-13bb6f48b656"),
                Name: sdk.String("Roosevelt Schultz"),
            },
            shared.FactIn{
                ID: sdk.String("5ff2e4b2-7537-4a8c-99e7-319c177d525f"),
                Name: sdk.String("Mr. Marian Renner"),
            },
            shared.FactIn{
                ID: sdk.String("eeb52ff7-85fc-4378-94d4-c98e0c2bb89e"),
                Name: sdk.String("Julio Hessel"),
            },
        },
        PersonalNames: []shared.PersonalNameSubdivisionIn{
            shared.PersonalNameSubdivisionIn{
                ID: sdk.String("636c6005-03d8-4bb3-9180-f739ae9e057e"),
                Name: sdk.String("Johnnie Baumbach"),
                SubdivisionIso: sdk.String("eos"),
            },
            shared.PersonalNameSubdivisionIn{
                ID: sdk.String("810331f3-981d-44c7-80b6-07f3c93c73b9"),
                Name: sdk.String("Luke Fay"),
                SubdivisionIso: sdk.String("quo"),
            },
            shared.PersonalNameSubdivisionIn{
                ID: sdk.String("eda7e23f-2257-4411-baf4-b7544e472e80"),
                Name: sdk.String("Nina Halvorson"),
                SubdivisionIso: sdk.String("minima"),
            },
            shared.PersonalNameSubdivisionIn{
                ID: sdk.String("b40463a7-d575-4f14-80e7-64ad7334ec1b"),
                Name: sdk.String("Tracey Bosco"),
                SubdivisionIso: sdk.String("autem"),
            },
        },
    }, operations.ReligionIndianFullBatchSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchPersonalNameReligionedOut != nil {
        // handle response
    }
}
```

## SubclassificationIndian

[USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on the name.

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
    res, err := s.Indian.SubclassificationIndian(ctx, operations.SubclassificationIndianRequest{
        FirstName: "Marley",
        LastName: "Abshire",
    }, operations.SubclassificationIndianSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FirstLastNameGeoSubclassificationOut != nil {
        // handle response
    }
}
```

## SubclassificationIndianBatch

[USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on a list of up to 100 names.

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
    res, err := s.Indian.SubclassificationIndianBatch(ctx, shared.BatchFirstLastNameGeoIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("088d100e-fada-4200-af04-22eb2164cf9a"),
                Name: sdk.String("Everett Dickinson"),
            },
            shared.FactIn{
                ID: sdk.String("c723ffda-9e06-4bee-8825-c1fc0e115c80"),
                Name: sdk.String("Van Wilkinson V"),
            },
            shared.FactIn{
                ID: sdk.String("544ec42d-efcc-4e8f-9977-773e63562a7b"),
                Name: sdk.String("Angela Lebsack II"),
            },
        },
        PersonalNames: []shared.FirstLastNameGeoIn{
            shared.FirstLastNameGeoIn{
                CountryIso2: sdk.String("neque"),
                FirstName: sdk.String("Raymundo"),
                ID: sdk.String("48fdaf31-3a1f-45fd-9425-9c0b36f25ea9"),
                LastName: sdk.String("Goyette"),
            },
            shared.FirstLastNameGeoIn{
                CountryIso2: sdk.String("numquam"),
                FirstName: sdk.String("Unique"),
                ID: sdk.String("3b756c11-f6c3-47a5-9262-43835bbc05a2"),
                LastName: sdk.String("Feeney"),
            },
            shared.FirstLastNameGeoIn{
                CountryIso2: sdk.String("deserunt"),
                FirstName: sdk.String("Domenick"),
                ID: sdk.String("5cefc5fd-e10a-40ce-a169-e510019c6dc5"),
                LastName: sdk.String("Walker"),
            },
            shared.FirstLastNameGeoIn{
                CountryIso2: sdk.String("velit"),
                FirstName: sdk.String("Eliezer"),
                ID: sdk.String("762799bf-bbe6-4949-bb2b-b4ecae6c3d5d"),
                LastName: sdk.String("Quigley"),
            },
        },
    }, operations.SubclassificationIndianBatchSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchFirstLastNameGeoSubclassificationOut != nil {
        // handle response
    }
}
```

## SubclassificationIndianFull

[USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on the name.

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
    res, err := s.Indian.SubclassificationIndianFull(ctx, operations.SubclassificationIndianFullRequest{
        FullName: "non",
    }, operations.SubclassificationIndianFullSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PersonalNameGeoSubclassificationOut != nil {
        // handle response
    }
}
```

## SubclassificationIndianFullBatch

[USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on a list of up to 100 names.

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
    res, err := s.Indian.SubclassificationIndianFullBatch(ctx, shared.BatchPersonalNameGeoIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("debd5dae-a4c5-406a-8aa9-4c02644cf5e9"),
                Name: sdk.String("Jeremiah O'Hara"),
            },
            shared.FactIn{
                ID: sdk.String("78adc1ac-600d-4ec0-81ac-802e2ec09ff8"),
                Name: sdk.String("James Zemlak III"),
            },
            shared.FactIn{
                ID: sdk.String("ff3477c1-3e90-42c1-8125-b0960a668151"),
                Name: sdk.String("Barry Koepp"),
            },
        },
        PersonalNames: []shared.PersonalNameGeoIn{
            shared.PersonalNameGeoIn{
                CountryIso2: sdk.String("omnis"),
                ID: sdk.String("23c5949f-83f3-450c-b876-ffb901c6ecbb"),
                Name: sdk.String("Silvia Considine"),
            },
            shared.PersonalNameGeoIn{
                CountryIso2: sdk.String("eligendi"),
                ID: sdk.String("f789ffaf-eda5-43e5-ae6e-0ac184c2b9c2"),
                Name: sdk.String("Bessie Schmidt"),
            },
            shared.PersonalNameGeoIn{
                CountryIso2: sdk.String("amet"),
                ID: sdk.String("73a40e19-42f3-42e5-9055-756f5d56d0bd"),
                Name: sdk.String("Amelia Williamson"),
            },
            shared.PersonalNameGeoIn{
                CountryIso2: sdk.String("repellat"),
                ID: sdk.String("e13db4f6-2cba-43f8-941a-ebc0b80a6924"),
                Name: sdk.String("Rodney Prohaska"),
            },
        },
    }, operations.SubclassificationIndianFullBatchSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchPersonalNameGeoSubclassificationOut != nil {
        // handle response
    }
}
```
