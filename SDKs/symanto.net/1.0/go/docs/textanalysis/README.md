# TextAnalysis

### Available Operations

* [Communication](#communication) - Communication & Tonality
* [EkmanEmotion](#ekmanemotion) - Emotion Analysis
* [Emotion](#emotion) - Emotion Analysis
* [LanguageDetection](#languagedetection) - Language Detection
* [Personality](#personality) - Personality Traits
* [Sentiment](#sentiment) - Sentiment Analysis
* [TopicSentiment](#topicsentiment) - Extracts topics and sentiments and relates them.

## Communication

Identify the purpose and writing style of a written text.

Supported Languages: [`ar`, `de`, `en`, `es`, `fr`, `it`, `nl`, `pt`, `ru`, `tr`, `zh`]

Returned labels:
* action-seeking
* fact-oriented
* information-seeking
* self-revealing

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
            APIKeyHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TextAnalysis.Communication(ctx, operations.CommunicationRequest{
        RequestBody: []shared.Post{
            shared.Post{
                ID: sdk.String("1"),
                Language: "en",
                Text: "I love the service",
            },
            shared.Post{
                ID: sdk.String("1"),
                Language: "en",
                Text: "I love the service",
            },
            shared.Post{
                ID: sdk.String("1"),
                Language: "en",
                Text: "I love the service",
            },
        },
        All: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PredictionResults != nil {
        // handle response
    }
}
```

## EkmanEmotion

Detect the emotions of the text based on Ekman.

Supported Langauges: [`en`, `de`, `es`]

Returned labels:
* anger
* disgust
* fear
* joy
* sadness
* surprise
* no-emotion

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
            APIKeyHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TextAnalysis.EkmanEmotion(ctx, operations.EkmanEmotionRequest{
        RequestBody: []shared.Post{
            shared.Post{
                ID: sdk.String("1"),
                Language: "en",
                Text: "I love the service",
            },
            shared.Post{
                ID: sdk.String("1"),
                Language: "en",
                Text: "I love the service",
            },
            shared.Post{
                ID: sdk.String("1"),
                Language: "en",
                Text: "I love the service",
            },
        },
        All: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PredictionResults != nil {
        // handle response
    }
}
```

## Emotion

Detect the emotions of the text.

Supported Langauges: [`en`, `de`, `es`]

Returned labels:
* anger
* joy
* love
* sadness
* surprise
* uncategorized

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
            APIKeyHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TextAnalysis.Emotion(ctx, operations.EmotionRequest{
        RequestBody: []shared.Post{
            shared.Post{
                ID: sdk.String("1"),
                Language: "en",
                Text: "I love the service",
            },
            shared.Post{
                ID: sdk.String("1"),
                Language: "en",
                Text: "I love the service",
            },
            shared.Post{
                ID: sdk.String("1"),
                Language: "en",
                Text: "I love the service",
            },
            shared.Post{
                ID: sdk.String("1"),
                Language: "en",
                Text: "I love the service",
            },
        },
        All: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PredictionResults != nil {
        // handle response
    }
}
```

## LanguageDetection

Identifies what language a text is written in. Only languages that our API supports can be analyzed.

Returned labels:
* language_code of the detected language

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
            APIKeyHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TextAnalysis.LanguageDetection(ctx, []shared.LanguageDetection{
        shared.LanguageDetection{
            ID: sdk.String("d8d69a67-4e0f-4467-8c87-96ed151a05df"),
            Text: "quo",
        },
        shared.LanguageDetection{
            ID: sdk.String("2ddf7cc7-8ca1-4ba9-a8fc-816742cb7392"),
            Text: "perferendis",
        },
        shared.LanguageDetection{
            ID: sdk.String("5929396f-ea75-496e-b10f-aaa2352c5955"),
            Text: "excepturi",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LanguageDetectionResponse != nil {
        // handle response
    }
}
```

## Personality

Predict the personality trait of author of any written text.

Supported Languages: [`ar`, `de`, `en`, `es`, `fr`, `it`, `nl`, `pt`, `ru`, `tr`, `zh`]

Returned labels:

* emotional
* rational

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
            APIKeyHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TextAnalysis.Personality(ctx, operations.PersonalityRequest{
        RequestBody: []shared.Post{
            shared.Post{
                ID: sdk.String("1"),
                Language: "en",
                Text: "I love the service",
            },
        },
        All: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PredictionResults != nil {
        // handle response
    }
}
```

## Sentiment

Evaluate the overall tonality of the text.

Supported Languages: [`en`, `de`, `es`]

Returned labels:
* positive
* negative

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
            APIKeyHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TextAnalysis.Sentiment(ctx, operations.SentimentRequest{
        RequestBody: []shared.Post{
            shared.Post{
                ID: sdk.String("1"),
                Language: "en",
                Text: "I love the service",
            },
            shared.Post{
                ID: sdk.String("1"),
                Language: "en",
                Text: "I love the service",
            },
        },
        All: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PredictionResults != nil {
        // handle response
    }
}
```

## TopicSentiment

Extracts topics and sentiments and relates them.

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
            APIKeyHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TextAnalysis.TopicSentiment(ctx, operations.TopicSentimentRequest{
        RequestBody: []shared.Post{
            shared.Post{
                ID: sdk.String("1"),
                Language: "en",
                Text: "I love the service",
            },
            shared.Post{
                ID: sdk.String("1"),
                Language: "en",
                Text: "I love the service",
            },
            shared.Post{
                ID: sdk.String("1"),
                Language: "en",
                Text: "I love the service",
            },
        },
        Domain: operations.TopicSentimentDomainEnumRestaurant.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TopicSentimentResponse != nil {
        // handle response
    }
}
```
