# Personal

## Overview

Personal names (anthroponyms) : gender, country origin/ethnicity, diaspora, US 'race'/ethniciy

### Available Operations

* [Corridor](#corridor) - [USES 20 UNITS PER NAME COUPLE] Infer several classifications for a cross border interaction between names (ex. remit, travel, intl com)
* [CorridorBatch](#corridorbatch) - [USES 20 UNITS PER NAME PAIR] Infer several classifications for up to 100 cross border interaction between names (ex. remit, travel, intl com)
* [Country](#country) - [USES 10 UNITS PER NAME] Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.
* [CountryBatch](#countrybatch) - [USES 10 UNITS PER NAME] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.
* [Diaspora](#diaspora) - [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
* [DiasporaBatch](#diasporabatch) - [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
* [Gender](#gender) - Infer the likely gender of a name.
* [GenderBatch](#genderbatch) - Infer the likely gender of up to 100 names, detecting automatically the cultural context.
* [GenderFull](#genderfull) - Infer the likely gender of a full name, ex. John H. Smith
* [GenderFullBatch](#genderfullbatch) - Infer the likely gender of up to 100 full names, detecting automatically the cultural context.
* [GenderFullGeo](#genderfullgeo) - Infer the likely gender of a full name, given a local context (ISO2 country code).
* [GenderFullGeoBatch](#genderfullgeobatch) - Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).
* [GenderGeo](#gendergeo) - Infer the likely gender of a name, given a local context (ISO2 country code).
* [GenderGeoBatch](#gendergeobatch) - Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).
* [Gender1](#gender1) - Infer the likely gender of a just a fiven name, assuming default 'US' local context. Please use preferably full names and local geographic context for better accuracy.
* [Origin](#origin) - [USES 10 UNITS PER NAME] Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use 'diaspora' instead.
* [OriginBatch](#originbatch) - [USES 10 UNITS PER NAME] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.
* [ParseName](#parsename) - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. 
* [ParseNameBatch](#parsenamebatch) - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.
* [ParseNameGeo](#parsenamegeo) - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.
* [ParseNameGeoBatch](#parsenamegeobatch) - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision. 
* [ReligionFull](#religionfull) - [USES 10 UNITS PER NAME] Infer the likely religion of a personal full name. NB: only for INDIA (as of current version).
* [ReligionFullBatch](#religionfullbatch) - [USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full names. NB: only for India as of currently.
* [Subclassification](#subclassification) - [USES 10 UNITS PER NAME] Infer the likely origin of a name at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').
* [SubclassificationBatch](#subclassificationbatch) - [USES 10 UNITS PER NAME] Infer the likely origin of a list of up to 100 names at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').
* [SubclassificationFull](#subclassificationfull) - [USES 10 UNITS PER NAME] Infer the likely origin of a name at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').
* [SubclassificationFullBatch](#subclassificationfullbatch) - [USES 10 UNITS PER NAME] Infer the likely origin of a list of up to 100 names at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').
* [UsRaceEthnicity](#usraceethnicity) - [USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
* [UsRaceEthnicityBatch](#usraceethnicitybatch) - [USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
* [UsRaceEthnicityZip5](#usraceethnicityzip5) - [USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
* [UsZipRaceEthnicityBatch](#uszipraceethnicitybatch) - [USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).

## Corridor

[USES 20 UNITS PER NAME COUPLE] Infer several classifications for a cross border interaction between names (ex. remit, travel, intl com)

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
    res, err := s.Personal.Corridor(ctx, operations.CorridorRequest{
        CountryIso2From: "optio",
        CountryIso2To: "est",
        FirstNameFrom: "inventore",
        FirstNameTo: "consequuntur",
        LastNameFrom: "repellendus",
        LastNameTo: "sit",
    }, operations.CorridorSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CorridorOut != nil {
        // handle response
    }
}
```

## CorridorBatch

[USES 20 UNITS PER NAME PAIR] Infer several classifications for up to 100 cross border interaction between names (ex. remit, travel, intl com)

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
    res, err := s.Personal.CorridorBatch(ctx, shared.BatchCorridorIn{
        CorridorFromTo: []shared.CorridorIn{
            shared.CorridorIn{
                FirstLastNameGeoFrom: &shared.FirstLastNameGeoIn{
                    CountryIso2: sdk.String("enim"),
                    FirstName: sdk.String("Bridgette"),
                    ID: sdk.String("9270b8d5-722d-4d89-9b8b-cf24db959693"),
                    LastName: sdk.String("Ernser"),
                },
                FirstLastNameGeoTo: &shared.FirstLastNameGeoIn{
                    CountryIso2: sdk.String("nostrum"),
                    FirstName: sdk.String("Christine"),
                    ID: sdk.String("f7453399-4d78-4de3-b6e9-389f5abb7f66"),
                    LastName: sdk.String("Conroy"),
                },
                ID: sdk.String("550a2838-2ac4-483a-bd23-15bba650164e"),
            },
        },
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("6f5bf6ae-591b-4c8b-9ef3-612b63c205fd"),
                Name: sdk.String("Ms. Alberto Hagenes"),
            },
        },
    }, operations.CorridorBatchSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchCorridorOut != nil {
        // handle response
    }
}
```

## Country

[USES 10 UNITS PER NAME] Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.

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
    res, err := s.Personal.Country(ctx, operations.CountryRequest{
        PersonalNameFull: "modi",
    }, operations.CountrySecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PersonalNameGeoOut != nil {
        // handle response
    }
}
```

## CountryBatch

[USES 10 UNITS PER NAME] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.

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
    res, err := s.Personal.CountryBatch(ctx, shared.BatchPersonalNameIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("68a9a35d-086b-46f6-afef-020e9f443b42"),
                Name: sdk.String("Marcia Rempel"),
            },
            shared.FactIn{
                ID: sdk.String("2c8dbda6-a61e-4fa2-9982-58fd0a9eba47"),
                Name: sdk.String("Neil Stokes"),
            },
            shared.FactIn{
                ID: sdk.String("f049640d-6a18-431c-87ad-f596fdf1ad83"),
                Name: sdk.String("Inez Toy DDS"),
            },
        },
        PersonalNames: []shared.PersonalNameIn{
            shared.PersonalNameIn{
                ID: sdk.String("c19c95ba-9986-478f-a3f6-96991af388ce"),
                Name: sdk.String("Mrs. Kim Jones"),
            },
        },
    }, operations.CountryBatchSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchPersonalNameGeoOut != nil {
        // handle response
    }
}
```

## Diaspora

[USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)

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
    res, err := s.Personal.Diaspora(ctx, operations.DiasporaRequest{
        CountryIso2: "modi",
        FirstName: "Kattie",
        LastName: "Schiller",
    }, operations.DiasporaSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FirstLastNameDiasporaedOut != nil {
        // handle response
    }
}
```

## DiasporaBatch

[USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)

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
    res, err := s.Personal.DiasporaBatch(ctx, shared.BatchFirstLastNameGeoIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("977a0ef2-f536-4028-afee-f934152ed7e2"),
                Name: sdk.String("Ethel Windler"),
            },
            shared.FactIn{
                ID: sdk.String("157deaa7-170f-4445-accf-667aaf9bbad1"),
                Name: sdk.String("Leon Williamson"),
            },
        },
        PersonalNames: []shared.FirstLastNameGeoIn{
            shared.FirstLastNameGeoIn{
                CountryIso2: sdk.String("ab"),
                FirstName: sdk.String("Rosalee"),
                ID: sdk.String("6bf5c838-fbb8-4c20-8b67-fc4b425e99e6"),
                LastName: sdk.String("Dare"),
            },
        },
    }, operations.DiasporaBatchSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchFirstLastNameDiasporaedOut != nil {
        // handle response
    }
}
```

## Gender

Infer the likely gender of a name.

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
    res, err := s.Personal.Gender(ctx, operations.GenderRequest{
        FirstName: "Dannie",
        LastName: "Goyette",
    }, operations.GenderSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FirstLastNameGenderedOut != nil {
        // handle response
    }
}
```

## GenderBatch

Infer the likely gender of up to 100 names, detecting automatically the cultural context.

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
    res, err := s.Personal.GenderBatch(ctx, shared.BatchFirstLastNameIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("9f7b79df-eb77-4a5c-b8d4-baf91e506ef8"),
                Name: sdk.String("Charles Parisian"),
            },
            shared.FactIn{
                ID: sdk.String("b475f16f-56d3-485a-bc4a-c631b99e26ce"),
                Name: sdk.String("Guy Will"),
            },
            shared.FactIn{
                ID: sdk.String("db9410f6-3bbf-4817-837b-01afdd788624"),
                Name: sdk.String("Vickie Morar"),
            },
            shared.FactIn{
                ID: sdk.String("44873f50-33f1-49db-b125-ce4152eab9cd"),
                Name: sdk.String("Sonja Hansen"),
            },
        },
        PersonalNames: []shared.FirstLastNameIn{
            shared.FirstLastNameIn{
                FirstName: sdk.String("Lionel"),
                ID: sdk.String("6a0e123b-7847-4ec5-9e1f-67f3c4cce4b6"),
                LastName: sdk.String("Stanton"),
            },
            shared.FirstLastNameIn{
                FirstName: sdk.String("Javon"),
                ID: sdk.String("696ff3c5-7475-4013-97e4-4f51f8b084c3"),
                LastName: sdk.String("Casper"),
            },
        },
    }, operations.GenderBatchSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchFirstLastNameGenderedOut != nil {
        // handle response
    }
}
```

## GenderFull

Infer the likely gender of a full name, ex. John H. Smith

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
    res, err := s.Personal.GenderFull(ctx, operations.GenderFullRequest{
        FullName: "omnis",
    }, operations.GenderFullSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PersonalNameGenderedOut != nil {
        // handle response
    }
}
```

## GenderFullBatch

Infer the likely gender of up to 100 full names, detecting automatically the cultural context.

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
    res, err := s.Personal.GenderFullBatch(ctx, shared.BatchPersonalNameIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("e193a245-467f-4948-b4c2-d5cc4972233e"),
                Name: sdk.String("Beth Ritchie"),
            },
            shared.FactIn{
                ID: sdk.String("fe5d00b9-79ef-4203-8732-0590ccc10964"),
                Name: sdk.String("Mr. Sandra Franey"),
            },
        },
        PersonalNames: []shared.PersonalNameIn{
            shared.PersonalNameIn{
                ID: sdk.String("e5044f65-fe72-4dc4-877d-0cc3f408efc1"),
                Name: sdk.String("Pat Upton"),
            },
        },
    }, operations.GenderFullBatchSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchPersonalNameGenderedOut != nil {
        // handle response
    }
}
```

## GenderFullGeo

Infer the likely gender of a full name, given a local context (ISO2 country code).

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
    res, err := s.Personal.GenderFullGeo(ctx, operations.GenderFullGeoRequest{
        CountryIso2: "illum",
        FullName: "ea",
    }, operations.GenderFullGeoSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PersonalNameGenderedOut != nil {
        // handle response
    }
}
```

## GenderFullGeoBatch

Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).

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
    res, err := s.Personal.GenderFullGeoBatch(ctx, shared.BatchPersonalNameGeoIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("1eae0f75-aedf-42ac-ab58-b991c926ddb5"),
                Name: sdk.String("Sergio Gerlach PhD"),
            },
            shared.FactIn{
                ID: sdk.String("7421cbe6-d950-42f0-aa93-0b69f7ac2f72"),
                Name: sdk.String("Julian Lesch Jr."),
            },
            shared.FactIn{
                ID: sdk.String("90491160-8207-4888-ac66-183bfe9659eb"),
                Name: sdk.String("Laura Thompson III"),
            },
            shared.FactIn{
                ID: sdk.String("faf75b0b-532a-44da-b7cb-aaf4452c4842"),
                Name: sdk.String("Terrance Reynolds"),
            },
        },
        PersonalNames: []shared.PersonalNameGeoIn{
            shared.PersonalNameGeoIn{
                CountryIso2: sdk.String("ipsum"),
                ID: sdk.String("2dafe81a-88f4-4444-973f-ecd47353f63c"),
                Name: sdk.String("Aaron Becker"),
            },
            shared.PersonalNameGeoIn{
                CountryIso2: sdk.String("nihil"),
                ID: sdk.String("9aa69cd5-fbcf-479d-a18a-7822bf95894e"),
                Name: sdk.String("Miss Maxine Kemmer"),
            },
            shared.PersonalNameGeoIn{
                CountryIso2: sdk.String("libero"),
                ID: sdk.String("55f9e5d7-51c9-4fe8-b750-2bfdc3450841"),
                Name: sdk.String("Douglas Krajcik"),
            },
            shared.PersonalNameGeoIn{
                CountryIso2: sdk.String("eius"),
                ID: sdk.String("56379f3f-b27e-421f-8626-57b36fc6b9f5"),
                Name: sdk.String("Mathew Schmitt"),
            },
        },
    }, operations.GenderFullGeoBatchSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchPersonalNameGenderedOut != nil {
        // handle response
    }
}
```

## GenderGeo

Infer the likely gender of a name, given a local context (ISO2 country code).

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
    res, err := s.Personal.GenderGeo(ctx, operations.GenderGeoRequest{
        CountryIso2: "magni",
        FirstName: "Ezekiel",
        LastName: "Schimmel",
    }, operations.GenderGeoSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FirstLastNameGenderedOut != nil {
        // handle response
    }
}
```

## GenderGeoBatch

Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).

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
    res, err := s.Personal.GenderGeoBatch(ctx, shared.BatchFirstLastNameGeoIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("7641a831-2e50-447b-8c21-ccb423abcdc9"),
                Name: sdk.String("Lana Pfannerstill"),
            },
            shared.FactIn{
                ID: sdk.String("dd88e71f-6c48-4252-9777-1e7fd074009e"),
                Name: sdk.String("Jaime Schumm"),
            },
        },
        PersonalNames: []shared.FirstLastNameGeoIn{
            shared.FirstLastNameGeoIn{
                CountryIso2: sdk.String("voluptates"),
                FirstName: sdk.String("Antonia"),
                ID: sdk.String("dd7097b5-da08-4c57-ba6c-78a216e19baf"),
                LastName: sdk.String("Walker"),
            },
            shared.FirstLastNameGeoIn{
                CountryIso2: sdk.String("minus"),
                FirstName: sdk.String("Ludie"),
                ID: sdk.String("61914981-40b6-44ff-8ae1-70ef03b5f37e"),
                LastName: sdk.String("Funk"),
            },
            shared.FirstLastNameGeoIn{
                CountryIso2: sdk.String("mollitia"),
                FirstName: sdk.String("Maci"),
                ID: sdk.String("86855596-6732-4aa5-9cb6-682cb70f8cfd"),
                LastName: sdk.String("Herman"),
            },
            shared.FirstLastNameGeoIn{
                CountryIso2: sdk.String("a"),
                FirstName: sdk.String("Muhammad"),
                ID: sdk.String("6e91b9a9-f748-446e-ac33-09db0536d9e7"),
                LastName: sdk.String("Hane"),
            },
        },
    }, operations.GenderGeoBatchSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchFirstLastNameGenderedOut != nil {
        // handle response
    }
}
```

## Gender1

Infer the likely gender of a just a fiven name, assuming default 'US' local context. Please use preferably full names and local geographic context for better accuracy.

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
    res, err := s.Personal.Gender1(ctx, operations.Gender1Request{
        FirstName: "Nicholaus",
    }, operations.Gender1Security{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FirstLastNameGenderedOut != nil {
        // handle response
    }
}
```

## Origin

[USES 10 UNITS PER NAME] Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use 'diaspora' instead.

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
    res, err := s.Personal.Origin(ctx, operations.OriginRequest{
        FirstName: "Marjolaine",
        LastName: "Abshire",
    }, operations.OriginSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FirstLastNameOriginedOut != nil {
        // handle response
    }
}
```

## OriginBatch

[USES 10 UNITS PER NAME] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.

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
    res, err := s.Personal.OriginBatch(ctx, shared.BatchFirstLastNameIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("6f5392c1-1a25-4a8b-b92f-97428ad9a9f8"),
                Name: sdk.String("Amos Langosh"),
            },
        },
        PersonalNames: []shared.FirstLastNameIn{
            shared.FirstLastNameIn{
                FirstName: sdk.String("Beau"),
                ID: sdk.String("25359d98-387f-47a7-9cd7-2cd2484da217"),
                LastName: sdk.String("Daugherty"),
            },
        },
    }, operations.OriginBatchSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchFirstLastNameOriginedOut != nil {
        // handle response
    }
}
```

## ParseName

Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. 

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
    res, err := s.Personal.ParseName(ctx, operations.ParseNameRequest{
        NameFull: "omnis",
    }, operations.ParseNameSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PersonalNameParsedOut != nil {
        // handle response
    }
}
```

## ParseNameBatch

Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.

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
    res, err := s.Personal.ParseNameBatch(ctx, shared.BatchPersonalNameIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("2ac41ef5-725f-4116-9ac1-e41d8a23c23e"),
                Name: sdk.String("Clara Zulauf"),
            },
            shared.FactIn{
                ID: sdk.String("fa4a197f-6de9-4221-91fe-1712099853e9"),
                Name: sdk.String("Wesley Gleason"),
            },
            shared.FactIn{
                ID: sdk.String("854439ee-2244-4604-83bc-154188c2f56e"),
                Name: sdk.String("Vernon Swaniawski"),
            },
            shared.FactIn{
                ID: sdk.String("832eabd6-17c3-4b0d-91a4-4bf01bad8706"),
                Name: sdk.String("Ms. Barry Jaskolski"),
            },
        },
        PersonalNames: []shared.PersonalNameIn{
            shared.PersonalNameIn{
                ID: sdk.String("fbdc41ff-5d4e-42ae-8fb5-cb35d17638f1"),
                Name: sdk.String("Owen Rau"),
            },
            shared.PersonalNameIn{
                ID: sdk.String("359ecc5c-b860-4f8c-9580-ba73810e4fe4"),
                Name: sdk.String("Megan Kling"),
            },
            shared.PersonalNameIn{
                ID: sdk.String("7cd3b1dd-3bbc-4e24-bb76-84eff50126d7"),
                Name: sdk.String("Vicky Wolf"),
            },
        },
    }, operations.ParseNameBatchSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchPersonalNameParsedOut != nil {
        // handle response
    }
}
```

## ParseNameGeo

Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.

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
    res, err := s.Personal.ParseNameGeo(ctx, operations.ParseNameGeoRequest{
        CountryIso2: "facere",
        NameFull: "aut",
    }, operations.ParseNameGeoSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PersonalNameParsedOut != nil {
        // handle response
    }
}
```

## ParseNameGeoBatch

Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision. 

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
    res, err := s.Personal.ParseNameGeoBatch(ctx, shared.BatchPersonalNameGeoIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("b74b8421-953b-444b-93c4-3159d33e5953"),
                Name: sdk.String("Mr. Michael Bashirian"),
            },
            shared.FactIn{
                ID: sdk.String("9863aa41-e6c3-41cc-af1f-cb51c9a41ffb"),
                Name: sdk.String("Jackie Schmitt"),
            },
            shared.FactIn{
                ID: sdk.String("795ee65e-076c-4c7a-bf61-6ea5c7164193"),
                Name: sdk.String("Dr. Latoya McClure"),
            },
            shared.FactIn{
                ID: sdk.String("e09d19d2-fc2f-49e2-a105-944b935d237a"),
                Name: sdk.String("Bonnie Zboncak IV"),
            },
        },
        PersonalNames: []shared.PersonalNameGeoIn{
            shared.PersonalNameGeoIn{
                CountryIso2: sdk.String("excepturi"),
                ID: sdk.String("d6aed4ae-cb75-437c-9922-2c9ff57491aa"),
                Name: sdk.String("Darrin Pacocha"),
            },
            shared.PersonalNameGeoIn{
                CountryIso2: sdk.String("odio"),
                ID: sdk.String("61f0ca4d-456e-4f10-b1e6-899f0c2001e2"),
                Name: sdk.String("Sadie Stanton"),
            },
        },
    }, operations.ParseNameGeoBatchSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchPersonalNameParsedOut != nil {
        // handle response
    }
}
```

## ReligionFull

[USES 10 UNITS PER NAME] Infer the likely religion of a personal full name. NB: only for INDIA (as of current version).

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
    res, err := s.Personal.ReligionFull(ctx, operations.ReligionFullRequest{
        CountryIso2: "quod",
        PersonalNameFull: "quod",
        SubDivisionIso31662: "alias",
    }, operations.ReligionFullSecurity{
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

## ReligionFullBatch

[USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full names. NB: only for India as of currently.

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
    res, err := s.Personal.ReligionFullBatch(ctx, shared.BatchPersonalNameGeoSubdivisionIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("84a184d7-6d97-41fc-820c-65b037bb8e0c"),
                Name: sdk.String("Byron MacGyver V"),
            },
            shared.FactIn{
                ID: sdk.String("7e4de04a-f28c-45dd-9b46-aa1cfd6d828d"),
                Name: sdk.String("Jeffrey Blick V"),
            },
        },
        PersonalNames: []shared.PersonalNameGeoSubdivisionIn{
            shared.PersonalNameGeoSubdivisionIn{
                CountryIso2: sdk.String("vitae"),
                ID: sdk.String("29646645-c1d8-41f2-9042-f569b7aff0ea"),
                Name: sdk.String("Ruby Bogan"),
                SubdivisionIso: sdk.String("libero"),
            },
        },
    }, operations.ReligionFullBatchSecurity{
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

## Subclassification

[USES 10 UNITS PER NAME] Infer the likely origin of a name at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').

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
    res, err := s.Personal.Subclassification(ctx, operations.SubclassificationRequest{
        CountryIso2: "saepe",
        FirstName: "Anastasia",
        LastName: "Kunde",
    }, operations.SubclassificationSecurity{
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

## SubclassificationBatch

[USES 10 UNITS PER NAME] Infer the likely origin of a list of up to 100 names at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').

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
    res, err := s.Personal.SubclassificationBatch(ctx, shared.BatchFirstLastNameGeoIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("bc163e27-9a3b-4084-9a99-257d04f40847"),
                Name: sdk.String("Roland Gerhold"),
            },
        },
        PersonalNames: []shared.FirstLastNameGeoIn{
            shared.FirstLastNameGeoIn{
                CountryIso2: sdk.String("ut"),
                FirstName: sdk.String("Destiney"),
                ID: sdk.String("96cbdeec-f6b9-49bc-a356-2ebfdf55c294"),
                LastName: sdk.String("Sawayn"),
            },
            shared.FirstLastNameGeoIn{
                CountryIso2: sdk.String("eaque"),
                FirstName: sdk.String("Hannah"),
                ID: sdk.String("0b06a128-7764-4eef-ad0c-6d6ed9c73dd6"),
                LastName: sdk.String("Franey"),
            },
            shared.FirstLastNameGeoIn{
                CountryIso2: sdk.String("ut"),
                FirstName: sdk.String("Evans"),
                ID: sdk.String("71509a8e-870d-43c5-a1f9-c242c7b66a1f"),
                LastName: sdk.String("Emard"),
            },
        },
    }, operations.SubclassificationBatchSecurity{
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

## SubclassificationFull

[USES 10 UNITS PER NAME] Infer the likely origin of a name at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').

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
    res, err := s.Personal.SubclassificationFull(ctx, operations.SubclassificationFullRequest{
        CountryIso2: "doloremque",
        FullName: "quod",
    }, operations.SubclassificationFullSecurity{
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

## SubclassificationFullBatch

[USES 10 UNITS PER NAME] Infer the likely origin of a list of up to 100 names at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').

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
    res, err := s.Personal.SubclassificationFullBatch(ctx, shared.BatchPersonalNameGeoIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("3df5b671-9890-4f42-a4bb-438d85b26059"),
                Name: sdk.String("Krystal Kiehn"),
            },
            shared.FactIn{
                ID: sdk.String("e3c2059c-9c3f-4567-a0e2-52765b1d62fc"),
                Name: sdk.String("Cameron Ruecker DVM"),
            },
        },
        PersonalNames: []shared.PersonalNameGeoIn{
            shared.PersonalNameGeoIn{
                CountryIso2: sdk.String("sunt"),
                ID: sdk.String("216ce223-9e8f-425c-90d1-9d959f439e39"),
                Name: sdk.String("Sue Jerde"),
            },
        },
    }, operations.SubclassificationFullBatchSecurity{
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

## UsRaceEthnicity

[USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).

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
    res, err := s.Personal.UsRaceEthnicity(ctx, operations.UsRaceEthnicityRequest{
        FirstName: "Rolando",
        LastName: "Mraz",
    }, operations.UsRaceEthnicitySecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FirstLastNameUSRaceEthnicityOut != nil {
        // handle response
    }
}
```

## UsRaceEthnicityBatch

[USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).

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
    res, err := s.Personal.UsRaceEthnicityBatch(ctx, shared.BatchFirstLastNameGeoIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("f7aa2b24-1136-495d-9e66-98fcc4596217"),
                Name: sdk.String("Phillip Mann"),
            },
            shared.FactIn{
                ID: sdk.String("67633425-4038-4bfb-9971-e98190557389"),
                Name: sdk.String("Percy Swaniawski"),
            },
        },
        PersonalNames: []shared.FirstLastNameGeoIn{
            shared.FirstLastNameGeoIn{
                CountryIso2: sdk.String("in"),
                FirstName: sdk.String("Valerie"),
                ID: sdk.String("da39594d-66bc-42ae-8806-32b9954b6fa2"),
                LastName: sdk.String("Champlin"),
            },
            shared.FirstLastNameGeoIn{
                CountryIso2: sdk.String("accusantium"),
                FirstName: sdk.String("Holly"),
                ID: sdk.String("36982855-3cb1-4000-abef-4921ec2053b7"),
                LastName: sdk.String("Gibson"),
            },
            shared.FirstLastNameGeoIn{
                CountryIso2: sdk.String("perspiciatis"),
                FirstName: sdk.String("Daphney"),
                ID: sdk.String("66ac8ee0-f2bf-4195-88d4-0d03f3deba29"),
                LastName: sdk.String("Kreiger"),
            },
            shared.FirstLastNameGeoIn{
                CountryIso2: sdk.String("facilis"),
                FirstName: sdk.String("Tressa"),
                ID: sdk.String("3e90bc40-df86-48fd-9240-5cb331d492f4"),
                LastName: sdk.String("Yost"),
            },
        },
    }, operations.UsRaceEthnicityBatchSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchFirstLastNameUSRaceEthnicityOut != nil {
        // handle response
    }
}
```

## UsRaceEthnicityZip5

[USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).

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
    res, err := s.Personal.UsRaceEthnicityZip5(ctx, operations.UsRaceEthnicityZip5Request{
        FirstName: "Ashtyn",
        LastName: "Denesik",
        Zip5Code: "iusto",
    }, operations.UsRaceEthnicityZip5Security{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FirstLastNameUSRaceEthnicityOut != nil {
        // handle response
    }
}
```

## UsZipRaceEthnicityBatch

[USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).

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
    res, err := s.Personal.UsZipRaceEthnicityBatch(ctx, shared.BatchFirstLastNameGeoZippedIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("b0e0bf1f-8217-4978-90ac-ca77aeb7b702"),
                Name: sdk.String("Genevieve Hickle II"),
            },
            shared.FactIn{
                ID: sdk.String("6b64e99f-b0e6-47e0-94fd-fed5540ef53a"),
                Name: sdk.String("Miss Debbie O'Reilly"),
            },
            shared.FactIn{
                ID: sdk.String("fe99731a-dc05-4d85-ae2d-fb70fb387429"),
                Name: sdk.String("Desiree Ferry"),
            },
            shared.FactIn{
                ID: sdk.String("561eca16-ef89-4451-bd76-eeeb518c4da1"),
                Name: sdk.String("Cameron Sipes"),
            },
        },
        PersonalNames: []shared.FirstLastNameGeoZippedIn{
            shared.FirstLastNameGeoZippedIn{
                CountryIso2: sdk.String("quasi"),
                FirstName: sdk.String("Brooke"),
                ID: sdk.String("f06d4e5b-72f0-4f54-8568-a0424e00a1d6"),
                LastName: sdk.String("Von"),
                ZipCode: sdk.String("52134-3380"),
            },
            shared.FirstLastNameGeoZippedIn{
                CountryIso2: sdk.String("amet"),
                FirstName: sdk.String("Adriana"),
                ID: sdk.String("84fbba5c-ceff-45cb-81fe-51e528a45ac8"),
                LastName: sdk.String("Champlin"),
                ZipCode: sdk.String("53957-8186"),
            },
        },
    }, operations.UsZipRaceEthnicityBatchSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchFirstLastNameUSRaceEthnicityOut != nil {
        // handle response
    }
}
```
