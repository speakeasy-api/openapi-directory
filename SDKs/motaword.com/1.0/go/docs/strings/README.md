# Strings

### Available Operations

* [ClearTranslationCache](#cleartranslationcache) - Clear translation cache
* [GetContinuousProjectFileStrings](#getcontinuousprojectfilestrings) - View strings their translations in a continuous document
* [GetContinuousProjectStrings](#getcontinuousprojectstrings) - View strings and translations in continuous project
* [GetDocumentTranslations](#getdocumenttranslations) - View strings and translations of a document
* [GetDocumentTranslationsForLanguage](#getdocumenttranslationsforlanguage) - View strings and translations of a document for target language
* [GetProjectStrings](#getprojectstrings) - View project strings and translations
* [GetProjectStringsForLanguage](#getprojectstringsforlanguage) - View strings and translations for target language
* [~~GetProjectTranslations~~](#getprojecttranslations) - Deprecated. Use /projects/{projectId}/strings instead. :warning: **Deprecated**
* [~~GetProjectTranslationsForLanguage~~](#getprojecttranslationsforlanguage) - Deprecated. use /projects/{projectId}/strings/{language} instead. :warning: **Deprecated**
* [GetStrings](#getstrings) - View account strings (translation memory)
* [GetTranslationCache](#gettranslationcache) - View cached strings translations in continuous project
* [PackageProjectTranslationMemory](#packageprojecttranslationmemory) - Download project translation memory
* [PackageProjectTranslationMemoryForLanguage](#packageprojecttranslationmemoryforlanguage) - Download language-specific project translation memory
* [PackageProjectTranslationMemoryForLanguageStatus](#packageprojecttranslationmemoryforlanguagestatus) - Check language-specific translation memory packaging status
* [PackageProjectTranslationMemoryStatus](#packageprojecttranslationmemorystatus) - Check translation memory packaging status
* [PackageUserTranslationMemory](#packageusertranslationmemory) - Download account translation memory
* [PackageUserTranslationMemoryForLanguageStatus](#packageusertranslationmemoryforlanguagestatus) - Check account translation memory packaging status
* [PostContinuousProjectFileStrings](#postcontinuousprojectfilestrings) - Get a list of strings and its translations in the project.
* [~~PostStrings~~](#poststrings) - Translate Strings with MT :warning: **Deprecated**
* [RecacheTranslations](#recachetranslations) - Recache translations
* [UpdateTranslationMemoryUnit](#updatetranslationmemoryunit) - Update string translation

## ClearTranslationCache

Clear/delete continuous project translation cache.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Strings.ClearTranslationCache(ctx, operations.ClearTranslationCacheRequest{
        FileID: sdk.Int64(237173),
        Locale: sdk.String("iste"),
        ProjectID: 839513,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## GetContinuousProjectFileStrings

View the strings from a document and their translations in your continuous translation project, for all target languages. If you need the translated version of your source document/file, then you need to use package and download endpoints.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Strings.GetContinuousProjectFileStrings(ctx, operations.GetContinuousProjectFileStringsRequest{
        DocumentID: 33074,
        ProjectID: 522371,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StringList != nil {
        // handle response
    }
}
```

## GetContinuousProjectStrings

View the strings and their translations in your continuous translation project, for all target languages. If you need the translated version of your source document/file, then you need to use package and download endpoints.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Strings.GetContinuousProjectStrings(ctx, operations.GetContinuousProjectStringsRequest{
        ProjectID: 15606,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StringList != nil {
        // handle response
    }
}
```

## GetDocumentTranslations

View the strings and their translations in your translation project for the specified source document. The list of translations is live if your project is not completed yet. If you need the translated version of your source document/file, then you need to use package and download endpoints.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Strings.GetDocumentTranslations(ctx, operations.GetDocumentTranslationsRequest{
        DocumentID: 513075,
        ProjectID: 428796,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StringList != nil {
        // handle response
    }
}
```

## GetDocumentTranslationsForLanguage

View the strings and their translations in the given target language for the specified source document. The list of translations is live if your project is not completed yet. If you need the translated version of your source document/file, then you need to use package and download endpoints.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Strings.GetDocumentTranslationsForLanguage(ctx, operations.GetDocumentTranslationsForLanguageRequest{
        DocumentID: 649832,
        Language: "ab",
        ProjectID: 544591,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StringList != nil {
        // handle response
    }
}
```

## GetProjectStrings

View the strings and their translations in your translation project, for all target languages. The list of translations is live if your project is not completed yet. If you need the translated version of your source document/file, then you need to use package and download endpoints.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Strings.GetProjectStrings(ctx, operations.GetProjectStringsRequest{
        ProjectID: 251941,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StringList != nil {
        // handle response
    }
}
```

## GetProjectStringsForLanguage

View the strings and their translations in your translation project for the specified target language. The list of translations is live if your project is not completed yet. If you need the translated version of your source document/file, then you need to use package and download endpoints.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Strings.GetProjectStringsForLanguage(ctx, operations.GetProjectStringsForLanguageRequest{
        Language: "voluptatem",
        ProjectID: 221161,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StringList != nil {
        // handle response
    }
}
```

## ~~GetProjectTranslations~~

Deprecated. Use /projects/{projectId}/strings instead.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Strings.GetProjectTranslations(ctx, operations.GetProjectTranslationsRequest{
        ProjectID: 580152,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StringList != nil {
        // handle response
    }
}
```

## ~~GetProjectTranslationsForLanguage~~

Deprecated. use /projects/{projectId}/strings/{language} instead.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Strings.GetProjectTranslationsForLanguage(ctx, operations.GetProjectTranslationsForLanguageRequest{
        Language: "numquam",
        ProjectID: 771089,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StringList != nil {
        // handle response
    }
}
```

## GetStrings

Get a list of all strings and their translations under your account, from all projects. This is your MotaWord translation memory. If you have the related permission, this endpoint will also return strings from your company account.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Strings.GetStrings(ctx, operations.GetStringsRequest{
        Page: sdk.Int64(131055),
        SourceLanguage: sdk.String("voluptas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientStrings != nil {
        // handle response
    }
}
```

## GetTranslationCache

MotaWord caches your account intensively (and in a smart way) in real-time translation environments. This endpoint will return the currently cached strings and translations in your continuous translation project.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Strings.GetTranslationCache(ctx, operations.GetTranslationCacheRequest{
        Flatten: sdk.Bool(false),
        ProjectID: 12036,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContinuousProjectCache != nil {
        // handle response
    }
}
```

## PackageProjectTranslationMemory

Package and download project translation memory in TMX format

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Strings.PackageProjectTranslationMemory(ctx, operations.PackageProjectTranslationMemoryRequest{
        Async: sdk.Int64(491025),
        Format: sdk.String("dicta"),
        ProjectID: 981640,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncOperationStatus != nil {
        // handle response
    }
}
```

## PackageProjectTranslationMemoryForLanguage

Package and download project translation memory in TMX format for a specific target language.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Strings.PackageProjectTranslationMemoryForLanguage(ctx, operations.PackageProjectTranslationMemoryForLanguageRequest{
        Async: sdk.Int64(618480),
        Format: sdk.String("velit"),
        LanguageCode: "voluptatibus",
        ProjectID: 374323,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncOperationStatus != nil {
        // handle response
    }
}
```

## PackageProjectTranslationMemoryForLanguageStatus

Check translation memory packaging status for async packaging requests, using the key returned from strings/package call.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Strings.PackageProjectTranslationMemoryForLanguageStatus(ctx, operations.PackageProjectTranslationMemoryForLanguageStatusRequest{
        AsyncRequestKey: "asperiores",
        LanguageCode: "aperiam",
        ProjectID: 409054,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncOperationStatus != nil {
        // handle response
    }
}
```

## PackageProjectTranslationMemoryStatus

Check translation memory packaging status for async packaging requests, using the key returned from strings/package call.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Strings.PackageProjectTranslationMemoryStatus(ctx, operations.PackageProjectTranslationMemoryStatusRequest{
        AsyncRequestKey: "quaerat",
        ProjectID: 162954,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncOperationStatus != nil {
        // handle response
    }
}
```

## PackageUserTranslationMemory

Package and download account translation memory in TMX format. If you have the related permission, this will also download your company translation memory.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Strings.PackageUserTranslationMemory(ctx, operations.PackageUserTranslationMemoryRequest{
        Async: sdk.Int64(831520),
        Email: sdk.Int64(638762),
        LanguageCode: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncOperationStatus != nil {
        // handle response
    }
}
```

## PackageUserTranslationMemoryForLanguageStatus

Check translation memory packaging status for async packaging requests, using the key returned from strings/package call.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Strings.PackageUserTranslationMemoryForLanguageStatus(ctx, operations.PackageUserTranslationMemoryForLanguageStatusRequest{
        AsyncRequestKey: "dignissimos",
        LanguageCode: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncOperationStatus != nil {
        // handle response
    }
}
```

## PostContinuousProjectFileStrings

Get a list of strings and its translations in the project.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Strings.PostContinuousProjectFileStrings(ctx, operations.PostContinuousProjectFileStringsRequest{
        ContinuousProjectDocumentStringsBody: &shared.ContinuousProjectDocumentStringsBody{
            DocumentName: sdk.String("asperiores"),
        },
        ProjectID: 368102,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StringList != nil {
        // handle response
    }
}
```

## ~~PostStrings~~

Deprecated, use instant translation mechanism for continuous projects.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Strings.PostStrings(ctx, shared.DeprecatedStringTranslationContent{
        Contents: []string{
            "quaerat",
        },
        SourceLanguage: sdk.String("porro"),
        TargetLanguages: []string{
            "labore",
            "ab",
            "adipisci",
            "fuga",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MachineTranslatedStrings != nil {
        // handle response
    }
}
```

## RecacheTranslations

Recache translations for the continuous project.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Strings.RecacheTranslations(ctx, operations.RecacheTranslationsRequest{
        FileID: sdk.Int64(662505),
        Locale: sdk.String("suscipit"),
        ProjectID: 246063,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## UpdateTranslationMemoryUnit

Update the translation of a string from your account strings/translation memory.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Strings.UpdateTranslationMemoryUnit(ctx, shared.TranslationMemoryUnit{
        SourceLanguage: sdk.String("culpa"),
        SourceText: sdk.String("est"),
        TargetLanguage: sdk.String("recusandae"),
        TargetText: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```
