# StartScreenshotTest

### Available Operations

* [StartScreenshotTest](#startscreenshottest) - Start Screenshot Test

## StartScreenshotTest

Start Screenshot Test

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
    res, err := s.StartScreenshotTest.StartScreenshotTest(ctx, shared.ScreenshotPayload{
        CallbackURL: sdk.String("https://www.example.com"),
        Configs: &shared.ScreenshotPayloadConfigs{
            MacosMojave: &shared.Browsers{
                Chrome: []string{
                    "corrupti",
                    "illum",
                    "vel",
                    "error",
                },
                Firefox: []string{
                    "suscipit",
                    "iure",
                    "magnam",
                },
                Opera: []string{
                    "ipsa",
                    "delectus",
                    "tempora",
                    "suscipit",
                },
            },
            Windows10: &shared.Browsers{
                Chrome: []string{
                    "minus",
                    "placeat",
                },
                Firefox: []string{
                    "iusto",
                    "excepturi",
                    "nisi",
                },
                Opera: []string{
                    "temporibus",
                    "ab",
                    "quis",
                    "veritatis",
                },
            },
        },
        DeferTime: sdk.Float64(5),
        Email: sdk.Bool(true),
        MacRes: sdk.String("1024x768"),
        Password: sdk.String("password"),
        Tunnel: sdk.Bool(true),
        TunnelIdentifier: sdk.String("tunnel"),
        URL: sdk.String("https://www.lambdatest.com"),
        Username: sdk.String("admin"),
        WinRes: sdk.String("1366X768"),
    }, operations.StartScreenshotTestSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartScreenshotSuccess != nil {
        // handle response
    }
}
```
