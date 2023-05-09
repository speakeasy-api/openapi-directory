# Authentication

## Overview

Authenticate KumpeApps users (required to get apiKey)

### Available Operations

* [~~AppkeyPatch~~](#appkeypatch) - Compromise app key :warning: **Deprecated**
* [~~AppkeyPost~~](#appkeypost) - Request app key :warning: **Deprecated**
* [~~AppkeyPut~~](#appkeyput) - Deactivate app key :warning: **Deprecated**
* [AuthAppkeyPatch](#authappkeypatch) - Compromise app key
* [AuthAppkeyPost](#authappkeypost) - Request app key
* [AuthAppkeyPut](#authappkeyput) - Deactivate app key
* [AuthAuthkeyGet](#authauthkeyget) - Request auth key for user (login user)
* [AuthAuthkeyPatch](#authauthkeypatch) - Compromise auth key
* [AuthAuthkeyPost](#authauthkeypost) - Request auth key for user (login user)
* [AuthAuthkeyPut](#authauthkeyput) - Deactivate auth key (logout)
* [AuthVerifyotpGet](#authverifyotpget) - Verifies YubiKey OTP for authenticated user
* [~~AuthkeyGet~~](#authkeyget) - Request auth key for user (login user) :warning: **Deprecated**
* [~~AuthkeyPatch~~](#authkeypatch) - Compromise auth key :warning: **Deprecated**
* [~~AuthkeyPost~~](#authkeypost) - Request auth key for user (login user) :warning: **Deprecated**
* [~~AuthkeyPut~~](#authkeyput) - Deactivate auth key (logout) :warning: **Deprecated**

## ~~AppkeyPatch~~

Pass an app key to mark it as compromised. This may be submitted by the app owner or a concerned party that has optained the compromised app key.

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
            AuthKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Authentication.AppkeyPatch(ctx, operations.AppkeyPatchRequest{
        AppKey: "numquam",
        Comments: sdk.String("commodi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InlineResponse202 != nil {
        // handle response
    }
}
```

## ~~AppkeyPost~~

Request a new app key by passing username and password for app account

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
            AuthKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Authentication.AppkeyPost(ctx, operations.AppkeyPostRequest{
        Password: "quam",
        SupportsYubikey: false,
        Username: "Jarred.Frami",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InlineResponse201 != nil {
        // handle response
    }
}
```

## ~~AppkeyPut~~

Pass your app key to deactivate the key

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Authentication.AppkeyPut(ctx, operations.AppkeyPutRequest{
        AppKey: "quis",
    }, operations.AppkeyPutSecurity{
        AppKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InlineResponse202 != nil {
        // handle response
    }
}
```

## AuthAppkeyPatch

Pass an app key to mark it as compromised. This may be submitted by the app owner or a concerned party that has optained the compromised app key.

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
            AuthKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Authentication.AuthAppkeyPatch(ctx, operations.AuthAppkeyPatchRequest{
        AppKey: "vitae",
        Comments: sdk.String("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InlineResponse202 != nil {
        // handle response
    }
}
```

## AuthAppkeyPost

Request a new app key by passing username and password for app account

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
            AuthKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Authentication.AuthAppkeyPost(ctx, operations.AuthAppkeyPostRequest{
        Password: "animi",
        SupportsYubikey: false,
        Username: "Emilia.Conn94",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InlineResponse201 != nil {
        // handle response
    }
}
```

## AuthAppkeyPut

Pass your app key to deactivate the key

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
    res, err := s.Authentication.AuthAppkeyPut(ctx, operations.AuthAppkeyPutRequest{
        AppKey: "ipsam",
    }, operations.AuthAppkeyPutSecurity{
        AppKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InlineResponse202 != nil {
        // handle response
    }
}
```

## AuthAuthkeyGet

Obtain auth key for user that has provided their username and password to login to your app. (or to obtain an auth key for a script like IFTTT)

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
    res, err := s.Authentication.AuthAuthkeyGet(ctx, operations.AuthAuthkeyGetRequest{
        DeviceName: sdk.String("id"),
        IdentifierForVendor: sdk.String("possimus"),
        Otp: sdk.String("aut"),
        Password: "quasi",
        Username: "Lina.Smitham97",
    }, operations.AuthAuthkeyGetSecurity{
        AppKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InlineResponse2011 != nil {
        // handle response
    }
}
```

## AuthAuthkeyPatch

Mark user auth key as compromised

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
            AuthKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Authentication.AuthAuthkeyPatch(ctx, operations.AuthAuthkeyPatchRequest{
        AuthKey: "voluptatibus",
        Comments: sdk.String("vero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InlineResponse202 != nil {
        // handle response
    }
}
```

## AuthAuthkeyPost

Obtain auth key for user that has provided their username and password to login to your app. (or to obtain an auth key for a script like IFTTT)

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
    res, err := s.Authentication.AuthAuthkeyPost(ctx, operations.AuthAuthkeyPostRequest{
        Otp: sdk.String("nihil"),
        Password: "praesentium",
        Username: "Whitney.Bednar",
    }, operations.AuthAuthkeyPostSecurity{
        AppKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InlineResponse2011 != nil {
        // handle response
    }
}
```

## AuthAuthkeyPut

Deactivate auth key for user logging them out of your application

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
    res, err := s.Authentication.AuthAuthkeyPut(ctx, operations.AuthAuthkeyPutRequest{
        AuthKey: "cum",
    }, operations.AuthAuthkeyPutSecurity{
        AppKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InlineResponse202 != nil {
        // handle response
    }
}
```

## AuthVerifyotpGet

Verifies YubiKey OTP for authenticated user

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
    res, err := s.Authentication.AuthVerifyotpGet(ctx, operations.AuthVerifyotpGetRequest{
        Otp: "perferendis",
    }, operations.AuthVerifyotpGetSecurity{
        AuthKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~AuthkeyGet~~

Obtain auth key for user that has provided their username and password to login to your app. (or to obtain an auth key for a script like IFTTT)

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Authentication.AuthkeyGet(ctx, operations.AuthkeyGetRequest{
        Otp: sdk.String("doloremque"),
        Password: "reprehenderit",
        Username: "Easter35",
    }, operations.AuthkeyGetSecurity{
        AppKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InlineResponse2011 != nil {
        // handle response
    }
}
```

## ~~AuthkeyPatch~~

Mark user auth key as compromised

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
            AuthKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Authentication.AuthkeyPatch(ctx, operations.AuthkeyPatchRequest{
        AuthKey: "dolore",
        Comments: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InlineResponse202 != nil {
        // handle response
    }
}
```

## ~~AuthkeyPost~~

Obtain auth key for user that has provided their username and password to login to your app. (or to obtain an auth key for a script like IFTTT)

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Authentication.AuthkeyPost(ctx, operations.AuthkeyPostRequest{
        Otp: sdk.String("dicta"),
        Password: "harum",
        Username: "Emilie_Thompson",
    }, operations.AuthkeyPostSecurity{
        AppKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InlineResponse2011 != nil {
        // handle response
    }
}
```

## ~~AuthkeyPut~~

Deactivate auth key for user logging them out of your application

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Authentication.AuthkeyPut(ctx, operations.AuthkeyPutRequest{
        AuthKey: "quae",
    }, operations.AuthkeyPutSecurity{
        AppKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InlineResponse202 != nil {
        // handle response
    }
}
```
