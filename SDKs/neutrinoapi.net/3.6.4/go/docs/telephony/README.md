# Telephony

### Available Operations

* [HLRLookup](#hlrlookup) - HLR Lookup
* [PhonePlayback](#phoneplayback) - Phone Playback
* [PhoneVerify](#phoneverify) - Phone Verify
* [SMSVerify](#smsverify) - SMS Verify
* [VerifySecurityCode](#verifysecuritycode) - Verify Security Code

## HLRLookup

Connect to the global mobile cellular network and retrieve the status of a mobile device

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
            APIKey: "YOUR_API_KEY_HERE",
            UserID: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Telephony.HLRLookup(ctx, operations.HLRLookupRequest{
        CountryCode: sdk.String("IM"),
        Number: "quam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HLRLookupResponse != nil {
        // handle response
    }
}
```

## PhonePlayback

Make an automated call to any valid phone number and playback an audio message

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
            APIKey: "YOUR_API_KEY_HERE",
            UserID: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Telephony.PhonePlayback(ctx, operations.PhonePlaybackRequestBody{
        AudioURL: "molestiae",
        Limit: sdk.Int(244425),
        LimitTTL: sdk.Int(623510),
        Number: "quia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PhonePlaybackResponse != nil {
        // handle response
    }
}
```

## PhoneVerify

Make an automated call to any valid phone number and playback a unique security code

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
            APIKey: "YOUR_API_KEY_HERE",
            UserID: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Telephony.PhoneVerify(ctx, operations.PhoneVerifyRequestBody{
        CodeLength: sdk.Int(338007),
        CountryCode: sdk.String("BN"),
        LanguageCode: sdk.String("laborum"),
        Limit: sdk.Int(656330),
        LimitTTL: sdk.Int(317202),
        Number: "odit",
        PlaybackDelay: sdk.Int(778346),
        SecurityCode: sdk.Int(196582),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PhoneVerifyResponse != nil {
        // handle response
    }
}
```

## SMSVerify

Send a unique security code to any mobile device via SMS

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
            APIKey: "YOUR_API_KEY_HERE",
            UserID: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Telephony.SMSVerify(ctx, operations.SMSVerifyRequestBody{
        CodeLength: sdk.Int(949572),
        CountryCode: sdk.String("GU"),
        LanguageCode: sdk.String("id"),
        Limit: sdk.Int(820994),
        LimitTTL: sdk.Int(13571),
        Number: "quasi",
        SecurityCode: sdk.Int(622846),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SMSVerifyResponse != nil {
        // handle response
    }
}
```

## VerifySecurityCode

Check if a security code sent via SMS Verify or Phone Verify is valid

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
            APIKey: "YOUR_API_KEY_HERE",
            UserID: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Telephony.VerifySecurityCode(ctx, operations.VerifySecurityCodeRequest{
        LimitBy: sdk.String("temporibus"),
        SecurityCode: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifySecurityCodeResponse != nil {
        // handle response
    }
}
```
