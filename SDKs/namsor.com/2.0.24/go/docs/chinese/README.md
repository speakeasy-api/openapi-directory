# Chinese

## Overview

CHINESE special features

### Available Operations

* [ChineseNameCandidates](#chinesenamecandidates) - Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming
* [ChineseNameCandidatesBatch](#chinesenamecandidatesbatch) - Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming
* [ChineseNameCandidatesGenderBatch](#chinesenamecandidatesgenderbatch) - Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname) ex. Wang Xiaoming.
* [ChineseNameGenderCandidates](#chinesenamegendercandidates) - Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming - having a known gender ('male' or 'female')
* [ChineseNameMatch](#chinesenamematch) - Return a score for matching Chinese name ex. 王晓明 with a romanized name ex. Wang Xiaoming
* [ChineseNameMatchBatch](#chinesenamematchbatch) - Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming
* [GenderChineseName](#genderchinesename) - Infer the likely gender of a Chinese full name ex. 王晓明
* [GenderChineseNameBatch](#genderchinesenamebatch) - Infer the likely gender of up to 100 full names ex. 王晓明
* [GenderChineseNamePinyin](#genderchinesenamepinyin) - Infer the likely gender of a Chinese name in LATIN (Pinyin).
* [GenderChineseNamePinyinBatch](#genderchinesenamepinyinbatch) - Infer the likely gender of up to 100 Chinese names in LATIN (Pinyin).
* [ParseChineseName](#parsechinesename) - Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name)
* [ParseChineseNameBatch](#parsechinesenamebatch) - Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name).
* [PinyinChineseName](#pinyinchinesename) - Romanize the Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name)
* [PinyinChineseNameBatch](#pinyinchinesenamebatch) - Romanize a list of Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name).

## ChineseNameCandidates

Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming

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
    res, err := s.Chinese.ChineseNameCandidates(ctx, operations.ChineseNameCandidatesRequest{
        ChineseGivenNameLatin: "illum",
        ChineseSurnameLatin: "vel",
    }, operations.ChineseNameCandidatesSecurity{
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

## ChineseNameCandidatesBatch

Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming

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
    res, err := s.Chinese.ChineseNameCandidatesBatch(ctx, shared.BatchFirstLastNameIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("a674e0f4-67cc-4879-aed1-51a05dfc2ddf"),
                Name: sdk.String("Bernadette Schmidt"),
            },
            shared.FactIn{
                ID: sdk.String("ca1ba928-fc81-4674-acb7-39205929396f"),
                Name: sdk.String("Wilbur Kirlin"),
            },
            shared.FactIn{
                ID: sdk.String("6eb10faa-a235-42c5-9559-07aff1a3a2fa"),
                Name: sdk.String("Francis Jerde"),
            },
        },
        PersonalNames: []shared.FirstLastNameIn{
            shared.FirstLastNameIn{
                FirstName: sdk.String("Linda"),
                ID: sdk.String("251aa52c-3f5a-4d01-9da1-ffe78f097b00"),
                LastName: sdk.String("Kiehn"),
            },
        },
    }, operations.ChineseNameCandidatesBatchSecurity{
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

## ChineseNameCandidatesGenderBatch

Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname) ex. Wang Xiaoming.

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
    res, err := s.Chinese.ChineseNameCandidatesGenderBatch(ctx, shared.BatchFirstLastNameGenderIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("f15471b5-e6e1-43b9-9d48-8e1e91e450ad"),
                Name: sdk.String("Joanna Rau"),
            },
            shared.FactIn{
                ID: sdk.String("4269802d-502a-494b-b4f6-3c969e9a3efa"),
                Name: sdk.String("Arlene Stamm"),
            },
        },
        PersonalNames: []shared.FirstLastNameGenderIn{
            shared.FirstLastNameGenderIn{
                FirstName: sdk.String("Elfrieda"),
                Gender: sdk.String("male"),
                ID: sdk.String("d66ae395-efb9-4ba8-8f3a-66997074ba44"),
                LastName: sdk.String("Hoppe"),
            },
        },
    }, operations.ChineseNameCandidatesGenderBatchSecurity{
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

## ChineseNameGenderCandidates

Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming - having a known gender ('male' or 'female')

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
    res, err := s.Chinese.ChineseNameGenderCandidates(ctx, operations.ChineseNameGenderCandidatesRequest{
        ChineseGivenNameLatin: "natus",
        ChineseSurnameLatin: "nobis",
        KnownGender: "eum",
    }, operations.ChineseNameGenderCandidatesSecurity{
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

## ChineseNameMatch

Return a score for matching Chinese name ex. 王晓明 with a romanized name ex. Wang Xiaoming

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
    res, err := s.Chinese.ChineseNameMatch(ctx, operations.ChineseNameMatchRequest{
        ChineseGivenNameLatin: "vero",
        ChineseName: "aspernatur",
        ChineseSurnameLatin: "architecto",
    }, operations.ChineseNameMatchSecurity{
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

## ChineseNameMatchBatch

Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming

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
    res, err := s.Chinese.ChineseNameMatchBatch(ctx, shared.BatchMatchPersonalFirstLastNameIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("1959890a-fa56-43e2-916f-e4c8b711e5b7"),
                Name: sdk.String("Marty Cormier"),
            },
            shared.FactIn{
                ID: sdk.String("028921cd-dc69-4260-9fb5-76b0d5f0d30c"),
                Name: sdk.String("Mindy Renner"),
            },
        },
        PersonalNames: []shared.MatchPersonalFirstLastNameIn{
            shared.MatchPersonalFirstLastNameIn{
                ID: sdk.String("87053202-c73d-45fe-9b90-c28909b3fe49"),
                Name1: &shared.FirstLastNameIn{
                    FirstName: sdk.String("Marielle"),
                    ID: sdk.String("8d9cbf48-6333-423f-9b77-f3a4100674eb"),
                    LastName: sdk.String("Wolf"),
                },
                Name2: &shared.PersonalNameIn{
                    ID: sdk.String("69280d1b-a77a-489e-bf73-7ae4203ce5e6"),
                    Name: sdk.String("Rene Hane"),
                },
            },
            shared.MatchPersonalFirstLastNameIn{
                ID: sdk.String("a0d446ce-2af7-4a73-8f3b-e453f870b326"),
                Name1: &shared.FirstLastNameIn{
                    FirstName: sdk.String("Moriah"),
                    ID: sdk.String("5a73429c-db1a-4842-abb6-79d2322715bf"),
                    LastName: sdk.String("Bartell"),
                },
                Name2: &shared.PersonalNameIn{
                    ID: sdk.String("cbb1e31b-8b90-4f34-83a1-108e0adcf4b9"),
                    Name: sdk.String("Amy Langworth"),
                },
            },
        },
    }, operations.ChineseNameMatchBatchSecurity{
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

## GenderChineseName

Infer the likely gender of a Chinese full name ex. 王晓明

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
    res, err := s.Chinese.GenderChineseName(ctx, operations.GenderChineseNameRequest{
        ChineseName: "voluptatibus",
    }, operations.GenderChineseNameSecurity{
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

## GenderChineseNameBatch

Infer the likely gender of up to 100 full names ex. 王晓明

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
    res, err := s.Chinese.GenderChineseNameBatch(ctx, shared.BatchPersonalNameIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("e953f73e-f7fb-4c7a-bd74-dd39c0f5d2cf"),
                Name: sdk.String("Ted Romaguera MD"),
            },
            shared.FactIn{
                ID: sdk.String("45626d43-6813-4f16-99f5-fce6c556146c"),
                Name: sdk.String("Kate Cole DVM"),
            },
            shared.FactIn{
                ID: sdk.String("b008c42e-141a-4ac3-a6c8-dd6b14429074"),
                Name: sdk.String("Esther Koch"),
            },
            shared.FactIn{
                ID: sdk.String("a7bd466d-28c1-40ab-bcdc-a4251904e523"),
                Name: sdk.String("Miss Claude Walsh"),
            },
        },
        PersonalNames: []shared.PersonalNameIn{
            shared.PersonalNameIn{
                ID: sdk.String("178e4796-f2a7-40c6-8828-2aa482562f22"),
                Name: sdk.String("Kerry Mayert IV"),
            },
            shared.PersonalNameIn{
                ID: sdk.String("ee17cbe6-1e6b-47b9-9bc0-ab3c20c4f378"),
                Name: sdk.String("Randal Stiedemann"),
            },
        },
    }, operations.GenderChineseNameBatchSecurity{
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

## GenderChineseNamePinyin

Infer the likely gender of a Chinese name in LATIN (Pinyin).

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
    res, err := s.Chinese.GenderChineseNamePinyin(ctx, operations.GenderChineseNamePinyinRequest{
        ChineseGivenNameLatin: "quasi",
        ChineseSurnameLatin: "a",
    }, operations.GenderChineseNamePinyinSecurity{
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

## GenderChineseNamePinyinBatch

Infer the likely gender of up to 100 Chinese names in LATIN (Pinyin).

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
    res, err := s.Chinese.GenderChineseNamePinyinBatch(ctx, shared.BatchFirstLastNameIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("9dd2efd1-21aa-46f1-a674-bdb04f157560"),
                Name: sdk.String("Clarence Sporer"),
            },
            shared.FactIn{
                ID: sdk.String("ea19f1d1-7051-4339-9080-86a1840394c2"),
                Name: sdk.String("Dr. Maria Kulas"),
            },
            shared.FactIn{
                ID: sdk.String("3f5f0642-dac7-4af5-95cc-413aa63aae8d"),
                Name: sdk.String("Dora Luettgen"),
            },
        },
        PersonalNames: []shared.FirstLastNameIn{
            shared.FirstLastNameIn{
                FirstName: sdk.String("Mekhi"),
                ID: sdk.String("b675fd5e-60b3-475e-94f6-fbee41f33317"),
                LastName: sdk.String("Wiegand"),
            },
            shared.FirstLastNameIn{
                FirstName: sdk.String("Sim"),
                ID: sdk.String("35b60eb1-ea42-4655-9ba3-c28744ed53b8"),
                LastName: sdk.String("Luettgen"),
            },
            shared.FirstLastNameIn{
                FirstName: sdk.String("Turner"),
                ID: sdk.String("3a8d8f5c-0b2f-42fb-bb19-4a276b26916f"),
                LastName: sdk.String("Tremblay"),
            },
            shared.FirstLastNameIn{
                FirstName: sdk.String("Antonina"),
                ID: sdk.String("f08f4294-e369-48f4-87f6-03e8b445e80c"),
                LastName: sdk.String("Muller"),
            },
        },
    }, operations.GenderChineseNamePinyinBatchSecurity{
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

## ParseChineseName

Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name)

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
    res, err := s.Chinese.ParseChineseName(ctx, operations.ParseChineseNameRequest{
        ChineseName: "veniam",
    }, operations.ParseChineseNameSecurity{
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

## ParseChineseNameBatch

Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name).

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
    res, err := s.Chinese.ParseChineseNameBatch(ctx, shared.BatchPersonalNameIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("efd20e45-7e18-458b-aa89-fbe3a5aa8e48"),
                Name: sdk.String("Miss April Stiedemann"),
            },
            shared.FactIn{
                ID: sdk.String("4075088e-5186-4206-9e90-4f3b1194b8ab"),
                Name: sdk.String("Brent Abernathy"),
            },
        },
        PersonalNames: []shared.PersonalNameIn{
            shared.PersonalNameIn{
                ID: sdk.String("9f9dfe0a-b7da-48a5-8ce1-87f86bc173d6"),
                Name: sdk.String("Evan Torphy"),
            },
            shared.PersonalNameIn{
                ID: sdk.String("9526f8d9-86e8-481e-ad4f-0e1012563f94"),
                Name: sdk.String("Carlos McClure"),
            },
        },
    }, operations.ParseChineseNameBatchSecurity{
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

## PinyinChineseName

Romanize the Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name)

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
    res, err := s.Chinese.PinyinChineseName(ctx, operations.PinyinChineseNameRequest{
        ChineseName: "in",
    }, operations.PinyinChineseNameSecurity{
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

## PinyinChineseNameBatch

Romanize a list of Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name).

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
    res, err := s.Chinese.PinyinChineseNameBatch(ctx, shared.BatchPersonalNameIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("e922a57a-15be-43e0-a080-7e2b6e3ab884"),
                Name: sdk.String("Winifred Abernathy"),
            },
        },
        PersonalNames: []shared.PersonalNameIn{
            shared.PersonalNameIn{
                ID: sdk.String("a60ff2a5-4a31-4e94-b64a-3e865e7956f9"),
                Name: sdk.String("Marion Boyer"),
            },
            shared.PersonalNameIn{
                ID: sdk.String("a9da660f-f57b-4faa-94f9-efc1b4512c10"),
                Name: sdk.String("Judy Kemmer"),
            },
        },
    }, operations.PinyinChineseNameBatchSecurity{
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
