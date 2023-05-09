# LanguageModelDirectAccess

## Overview

Methods to retrieve and inspect entries from the language models

### Available Operations

* [GetFamilyDetails](#getfamilydetails) - Get family details
* [ListFeatureValues](#listfeaturevalues) - List feature values
* [ListHypernyms](#listhypernyms) - List hypernyms
* [ListHyponyms](#listhyponyms) - List hyponyms
* [ListInflectedForms](#listinflectedforms) - List inflected forms
* [ListWordSenses](#listwordsenses) - List word senses

## GetFamilyDetails

Fetches and outputs metadata for a family from the Tisane language models.

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
    res, err := s.LanguageModelDirectAccess.GetFamilyDetails(ctx, operations.GetFamilyDetailsRequest{
        OcpApimSubscriptionKey: sdk.String("{{apiKey}}"),
        ID: sdk.String("{family_id}"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFamilyDetails200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListFeatureValues

Lists feature values for a particular category of features. This allows obtaining all the values such as entity types, subtypes, abuse types and tags, and more.

Returns the values as a JSON array of strings.

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
    res, err := s.LanguageModelDirectAccess.ListFeatureValues(ctx, operations.ListFeatureValuesRequest{
        OcpApimSubscriptionKey: sdk.String("{{apiKey}}"),
        Description: sdk.String("{feature_list_name}"),
        Language: sdk.String("{language_code}"),
        Type: sdk.String("{Grammar/Style/Semantics}"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFeatureValues200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## ListHypernyms

Lists all hypernyms related to a family. A hypernym is a parent concent. E.g. "vehicle" is a hypernym of "truck".

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
    res, err := s.LanguageModelDirectAccess.ListHypernyms(ctx, operations.ListHypernymsRequest{
        OcpApimSubscriptionKey: sdk.String("{{apiKey}}"),
        Family: sdk.String("{family_id}"),
        MaxLevel: sdk.String("{max_number_of_levels}"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListHypernyms200ApplicationJSONArrays != nil {
        // handle response
    }
}
```

## ListHyponyms

Lists all hyponyms related to a family. A hyponym is a child concent. E.g. "truck" is a hypernym of "vehicle".

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
    res, err := s.LanguageModelDirectAccess.ListHyponyms(ctx, operations.ListHyponymsRequest{
        OcpApimSubscriptionKey: sdk.String("{{apiKey}}"),
        Family: sdk.String("{family_id}"),
        MaxLevel: sdk.String("{max_number_of_levels}"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ListInflectedForms

List inflected forms

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
    res, err := s.LanguageModelDirectAccess.ListInflectedForms(ctx, operations.ListInflectedFormsRequest{
        OcpApimSubscriptionKey: sdk.String("{{apiKey}}"),
        Family: sdk.String("{family_id}"),
        Language: sdk.String("{language_code}"),
        Lexeme: sdk.String("{lexeme_id}"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInflectedForms200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## ListWordSenses

Fetches and outputs all senses related to a word.

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
    res, err := s.LanguageModelDirectAccess.ListWordSenses(ctx, operations.ListWordSensesRequest{
        OcpApimSubscriptionKey: sdk.String("{{apiKey}}"),
        Language: sdk.String("{language_code}"),
        Word: sdk.String("{word}"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWordSenses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
