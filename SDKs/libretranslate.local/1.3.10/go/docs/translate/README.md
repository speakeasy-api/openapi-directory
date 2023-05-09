# Translate

### Available Operations

* [GetLanguages](#getlanguages) - Retrieve list of supported languages
* [PostDetect](#postdetect) - Detect the language of a single text
* [PostTranslate](#posttranslate) - Translate text from a language to another
* [PostTranslateFile](#posttranslatefile) - Translate file from a language to another

## GetLanguages

Retrieve list of supported languages

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Translate.GetLanguages(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostDetect

Detect the language of a single text

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Translate.PostDetect(ctx, "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx")
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostTranslate

Translate text from a language to another

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Translate.PostTranslate(ctx, "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx")
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostTranslateFile

Translate file from a language to another

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Translate.PostTranslateFile(ctx, "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx")
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
