# SDK

### Available Operations

* [CheckSpellingRussian](#checkspellingrussian) - Check Spelling (Russian)

## CheckSpellingRussian

Check Spelling (Russian)

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
    res, err := s.SDK.CheckSpellingRussian(ctx, operations.CheckSpellingRussianRequest{
        RequestBody: &operations.CheckSpellingRussianRequestBody{
            LangCode: sdk.String("ru"),
            Text: sdk.String("Добрый вее!"),
        },
        XRapidAPIKey: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
