# Japanese

## Overview

JAPANESE special features

### Available Operations

* [GenderJapaneseNameFull](#genderjapanesenamefull) - Infer the likely gender of a Japanese full name ex. 王晓明
* [GenderJapaneseNameFullBatch](#genderjapanesenamefullbatch) - Infer the likely gender of up to 100 full names
* [GenderJapaneseNamePinyin](#genderjapanesenamepinyin) - Infer the likely gender of a Japanese name in LATIN (Pinyin).
* [GenderJapaneseNamePinyinBatch](#genderjapanesenamepinyinbatch) - Infer the likely gender of up to 100 Japanese names in LATIN (Pinyin).
* [JapaneseNameGenderKanjiCandidatesBatch](#japanesenamegenderkanjicandidatesbatch) - Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname) with KNOWN gender, ex. Yamamoto Sanae
* [JapaneseNameKanjiCandidates](#japanesenamekanjicandidates) - Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae - and a known gender.
* [JapaneseNameKanjiCandidatesBatch](#japanesenamekanjicandidatesbatch) - Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname), ex. Yamamoto Sanae
* [JapaneseNameKanjiCandidates1](#japanesenamekanjicandidates1) - Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae
* [JapaneseNameLatinCandidates](#japanesenamelatincandidates) - Romanize japanese name, based on the name in Kanji.
* [JapaneseNameLatinCandidatesBatch](#japanesenamelatincandidatesbatch) - Romanize japanese names, based on the name in KANJI
* [JapaneseNameMatch](#japanesenamematch) - Return a score for matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae
* [JapaneseNameMatchBatch](#japanesenamematchbatch) - Return a score for matching a list of Japanese names in KANJI ex. 山本 早苗 with romanized names ex. Yamamoto Sanae
* [JapaneseNameMatchFeedbackLoop](#japanesenamematchfeedbackloop) - [CREDITS 1 UNIT] Feedback loop to better perform matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae
* [ParseJapaneseName](#parsejapanesename) - Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae
* [ParseJapaneseNameBatch](#parsejapanesenamebatch) - Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae 

## GenderJapaneseNameFull

Infer the likely gender of a Japanese full name ex. 王晓明

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
    res, err := s.Japanese.GenderJapaneseNameFull(ctx, operations.GenderJapaneseNameFullRequest{
        JapaneseName: "optio",
    }, operations.GenderJapaneseNameFullSecurity{
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

## GenderJapaneseNameFullBatch

Infer the likely gender of up to 100 full names

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
    res, err := s.Japanese.GenderJapaneseNameFullBatch(ctx, shared.BatchPersonalNameIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("cc8f8950-10f5-4dd3-96fa-1804e54c82f1"),
                Name: sdk.String("Marsha O'Reilly"),
            },
            shared.FactIn{
                ID: sdk.String("3c8873e4-8438-40b1-b6b8-ca275a60a04c"),
                Name: sdk.String("Sheryl Hermiston"),
            },
            shared.FactIn{
                ID: sdk.String("699171b5-1c1b-4db1-8f4b-888ebdfc4ccc"),
                Name: sdk.String("Marshall McClure"),
            },
            shared.FactIn{
                ID: sdk.String("7fc0b2dc-e108-473e-82b0-06d678878ba8"),
                Name: sdk.String("Kay Bradtke"),
            },
        },
        PersonalNames: []shared.PersonalNameIn{
            shared.PersonalNameIn{
                ID: sdk.String("208c54fe-fa9c-495f-aeac-5565d307cfee"),
                Name: sdk.String("Mrs. Samuel Considine"),
            },
            shared.PersonalNameIn{
                ID: sdk.String("2813fa4a-41c4-480d-bf21-32af03102d51"),
                Name: sdk.String("Dixie Funk"),
            },
            shared.PersonalNameIn{
                ID: sdk.String("6f18bf96-21a6-4a4f-b7a8-7ee3e4be752c"),
                Name: sdk.String("Beatrice Purdy"),
            },
        },
    }, operations.GenderJapaneseNameFullBatchSecurity{
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

## GenderJapaneseNamePinyin

Infer the likely gender of a Japanese name in LATIN (Pinyin).

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
    res, err := s.Japanese.GenderJapaneseNamePinyin(ctx, operations.GenderJapaneseNamePinyinRequest{
        JapaneseGivenName: "quaerat",
        JapaneseSurname: "architecto",
    }, operations.GenderJapaneseNamePinyinSecurity{
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

## GenderJapaneseNamePinyinBatch

Infer the likely gender of up to 100 Japanese names in LATIN (Pinyin).

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
    res, err := s.Japanese.GenderJapaneseNamePinyinBatch(ctx, shared.BatchFirstLastNameIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("e3bb91c8-d975-4e0e-8419-d8f84f144f3e"),
                Name: sdk.String("Joy Toy"),
            },
            shared.FactIn{
                ID: sdk.String("c4aa5f3c-abd9-405a-972e-056728227b2d"),
                Name: sdk.String("Angela Mayer"),
            },
            shared.FactIn{
                ID: sdk.String("0bf7a4fa-87cf-4535-a6fa-e54ebf60c321"),
                Name: sdk.String("Anthony Cormier"),
            },
        },
        PersonalNames: []shared.FirstLastNameIn{
            shared.FirstLastNameIn{
                FirstName: sdk.String("Ezekiel"),
                ID: sdk.String("d2367fe1-a0cc-48df-b9f0-a396d90c364b"),
                LastName: sdk.String("King"),
            },
            shared.FirstLastNameIn{
                FirstName: sdk.String("Patrick"),
                ID: sdk.String("15dfbace-188b-41c4-ae2c-8c6ce611feeb"),
                LastName: sdk.String("Bins"),
            },
        },
    }, operations.GenderJapaneseNamePinyinBatchSecurity{
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

## JapaneseNameGenderKanjiCandidatesBatch

Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname) with KNOWN gender, ex. Yamamoto Sanae

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
    res, err := s.Japanese.JapaneseNameGenderKanjiCandidatesBatch(ctx, shared.BatchFirstLastNameGenderIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("7cbdb6ee-c743-478b-a253-17747dc915ad"),
                Name: sdk.String("Kendra Parker"),
            },
            shared.FactIn{
                ID: sdk.String("dd6723dc-0f5a-4e2f-ba6b-700878756143"),
                Name: sdk.String("Dan Orn"),
            },
            shared.FactIn{
                ID: sdk.String("98b55554-080d-440b-8acc-6cbd6b5f3ec9"),
                Name: sdk.String("Mrs. Daisy Fisher"),
            },
            shared.FactIn{
                ID: sdk.String("926bad25-5381-49b4-b4b0-ed20e56248ff"),
                Name: sdk.String("Raul Dooley"),
            },
        },
        PersonalNames: []shared.FirstLastNameGenderIn{
            shared.FirstLastNameGenderIn{
                FirstName: sdk.String("Bennie"),
                Gender: sdk.String("female"),
                ID: sdk.String("abdcab62-6766-496e-9ec0-0221b335d89a"),
                LastName: sdk.String("Romaguera"),
            },
            shared.FirstLastNameGenderIn{
                FirstName: sdk.String("Moshe"),
                Gender: sdk.String("female"),
                ID: sdk.String("ecfda8d0-c549-4ef0-b004-978a61fa1cf2"),
                LastName: sdk.String("Barton"),
            },
            shared.FirstLastNameGenderIn{
                FirstName: sdk.String("Hassan"),
                Gender: sdk.String("male"),
                ID: sdk.String("8f77c1ff-c71d-4ca1-a3f2-a3c80a97ff33"),
                LastName: sdk.String("Friesen"),
            },
        },
    }, operations.JapaneseNameGenderKanjiCandidatesBatchSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchNameMatchCandidatesOut != nil {
        // handle response
    }
}
```

## JapaneseNameKanjiCandidates

Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae - and a known gender.

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
    res, err := s.Japanese.JapaneseNameKanjiCandidates(ctx, operations.JapaneseNameKanjiCandidatesRequest{
        JapaneseGivenNameLatin: "optio",
        JapaneseSurnameLatin: "illum",
        KnownGender: "at",
    }, operations.JapaneseNameKanjiCandidatesSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NameMatchCandidatesOut != nil {
        // handle response
    }
}
```

## JapaneseNameKanjiCandidatesBatch

Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname), ex. Yamamoto Sanae

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
    res, err := s.Japanese.JapaneseNameKanjiCandidatesBatch(ctx, shared.BatchFirstLastNameIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("857a9e61-876c-46ab-a1d2-9dfc94d6fecd"),
                Name: sdk.String("Cora McKenzie"),
            },
            shared.FactIn{
                ID: sdk.String("0066a6d2-d000-4355-b38c-ec086fa21e91"),
                Name: sdk.String("Kathryn Runolfsdottir"),
            },
            shared.FactIn{
                ID: sdk.String("119167b8-e3c8-4db0-b408-d6d364ffd455"),
                Name: sdk.String("John Jakubowski Sr."),
            },
            shared.FactIn{
                ID: sdk.String("63d48e93-5c2c-49e8-9f30-be3e43202d72"),
                Name: sdk.String("Beth Hand"),
            },
        },
        PersonalNames: []shared.FirstLastNameIn{
            shared.FirstLastNameIn{
                FirstName: sdk.String("Alberto"),
                ID: sdk.String("6641870d-9d21-4f9a-9030-c4ecc11a0836"),
                LastName: sdk.String("Glover"),
            },
            shared.FirstLastNameIn{
                FirstName: sdk.String("Charlie"),
                ID: sdk.String("9068b850-2a55-4e7f-b3bc-845e320a319f"),
                LastName: sdk.String("Gerlach"),
            },
        },
    }, operations.JapaneseNameKanjiCandidatesBatchSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchNameMatchCandidatesOut != nil {
        // handle response
    }
}
```

## JapaneseNameKanjiCandidates1

Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae

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
    res, err := s.Japanese.JapaneseNameKanjiCandidates1(ctx, operations.JapaneseNameKanjiCandidates1Request{
        JapaneseGivenNameLatin: "rerum",
        JapaneseSurnameLatin: "dolorum",
    }, operations.JapaneseNameKanjiCandidates1Security{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NameMatchCandidatesOut != nil {
        // handle response
    }
}
```

## JapaneseNameLatinCandidates

Romanize japanese name, based on the name in Kanji.

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
    res, err := s.Japanese.JapaneseNameLatinCandidates(ctx, operations.JapaneseNameLatinCandidatesRequest{
        JapaneseGivenNameKanji: "quibusdam",
        JapaneseSurnameKanji: "earum",
    }, operations.JapaneseNameLatinCandidatesSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NameMatchCandidatesOut != nil {
        // handle response
    }
}
```

## JapaneseNameLatinCandidatesBatch

Romanize japanese names, based on the name in KANJI

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
    res, err := s.Japanese.JapaneseNameLatinCandidatesBatch(ctx, shared.BatchFirstLastNameIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("47c9a867-bc42-4426-a658-16ddca8ef51f"),
                Name: sdk.String("Rudolph Gleason"),
            },
            shared.FactIn{
                ID: sdk.String("93ec12cd-aad0-4ec7-afed-bd80df448a47"),
                Name: sdk.String("Jackie Fahey DDS"),
            },
            shared.FactIn{
                ID: sdk.String("58880983-dabf-49ef-bffd-d9f7f079af4d"),
                Name: sdk.String("Dolores Kirlin"),
            },
        },
        PersonalNames: []shared.FirstLastNameIn{
            shared.FirstLastNameIn{
                FirstName: sdk.String("Royce"),
                ID: sdk.String("b0f4d281-187d-4568-84ed-ed85a9065e62"),
                LastName: sdk.String("Lakin"),
            },
            shared.FirstLastNameIn{
                FirstName: sdk.String("Maxie"),
                ID: sdk.String("dfc2032b-6c87-4992-bb7e-13584f7ae12c"),
                LastName: sdk.String("Jacobs"),
            },
            shared.FirstLastNameIn{
                FirstName: sdk.String("Joey"),
                ID: sdk.String("91f82ce1-1571-4723-8537-7dcfa89df975"),
                LastName: sdk.String("Volkman"),
            },
            shared.FirstLastNameIn{
                FirstName: sdk.String("Clementine"),
                ID: sdk.String("56686092-e9c3-4ddc-9f11-1dea1026d541"),
                LastName: sdk.String("O'Reilly"),
            },
        },
    }, operations.JapaneseNameLatinCandidatesBatchSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchNameMatchCandidatesOut != nil {
        // handle response
    }
}
```

## JapaneseNameMatch

Return a score for matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae

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
    res, err := s.Japanese.JapaneseNameMatch(ctx, operations.JapaneseNameMatchRequest{
        JapaneseGivenNameLatin: "quaerat",
        JapaneseName: "facere",
        JapaneseSurnameLatin: "vitae",
    }, operations.JapaneseNameMatchSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NameMatchedOut != nil {
        // handle response
    }
}
```

## JapaneseNameMatchBatch

Return a score for matching a list of Japanese names in KANJI ex. 山本 早苗 with romanized names ex. Yamamoto Sanae

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
    res, err := s.Japanese.JapaneseNameMatchBatch(ctx, shared.BatchMatchPersonalFirstLastNameIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("0feb2178-0bcc-4c0d-bbdd-b484708fb4e3"),
                Name: sdk.String("Andrew Torphy"),
            },
            shared.FactIn{
                ID: sdk.String("c158c4c4-e545-499e-a342-260e9b200ce7"),
                Name: sdk.String("Carlton Bosco"),
            },
            shared.FactIn{
                ID: sdk.String("8fb7a0a1-16ce-4723-9409-7fa30e9af725"),
                Name: sdk.String("Mr. Aaron Monahan"),
            },
        },
        PersonalNames: []shared.MatchPersonalFirstLastNameIn{
            shared.MatchPersonalFirstLastNameIn{
                ID: sdk.String("30d83f5a-eb77-499d-a2e8-c1f8493825fd"),
                Name1: &shared.FirstLastNameIn{
                    FirstName: sdk.String("Oscar"),
                    ID: sdk.String("42c876c2-c2df-4b4c-bc1c-76230f841fb1"),
                    LastName: sdk.String("Price"),
                },
                Name2: &shared.PersonalNameIn{
                    ID: sdk.String("d23fdb14-db6b-4e5a-a859-98e22ae20da1"),
                    Name: sdk.String("Josefina Schiller"),
                },
            },
        },
    }, operations.JapaneseNameMatchBatchSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchNameMatchedOut != nil {
        // handle response
    }
}
```

## JapaneseNameMatchFeedbackLoop

[CREDITS 1 UNIT] Feedback loop to better perform matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae

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
    res, err := s.Japanese.JapaneseNameMatchFeedbackLoop(ctx, operations.JapaneseNameMatchFeedbackLoopRequest{
        JapaneseGivenNameLatin: "quia",
        JapaneseName: "iusto",
        JapaneseSurnameLatin: "ab",
    }, operations.JapaneseNameMatchFeedbackLoopSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FeedbackLoopOut != nil {
        // handle response
    }
}
```

## ParseJapaneseName

Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae

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
    res, err := s.Japanese.ParseJapaneseName(ctx, operations.ParseJapaneseNameRequest{
        JapaneseName: "deserunt",
    }, operations.ParseJapaneseNameSecurity{
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

## ParseJapaneseNameBatch

Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae 

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
    res, err := s.Japanese.ParseJapaneseNameBatch(ctx, shared.BatchPersonalNameIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("89c57e85-4e90-4439-9222-465694624070"),
                Name: sdk.String("Eddie Windler"),
            },
        },
        PersonalNames: []shared.PersonalNameIn{
            shared.PersonalNameIn{
                ID: sdk.String("37cef022-2519-44db-9541-0adc669af90a"),
                Name: sdk.String("Stacey Satterfield"),
            },
            shared.PersonalNameIn{
                ID: sdk.String("dc981f06-8981-4d6b-b33c-faa348c31bf4"),
                Name: sdk.String("Dora Watsica"),
            },
            shared.PersonalNameIn{
                ID: sdk.String("fcf0c42b-78f1-4562-a398-a0dc766324cc"),
                Name: sdk.String("Edward Jast"),
            },
        },
    }, operations.ParseJapaneseNameBatchSecurity{
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
