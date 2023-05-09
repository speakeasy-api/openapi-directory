# Feedback

### Available Operations

* [PostSuggest](#postsuggest) - Submit a suggestion to improve a translation

## PostSuggest

Submit a suggestion to improve a translation

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
    res, err := s.Feedback.PostSuggest(ctx, "es")
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
