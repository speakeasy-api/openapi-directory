# SDK

## Overview

OTP email verification API by PayPI. <br/><br/>
EmailVerify provides a simple way to verify email addresses. We send emails ourselves taking the burden of setting up email systems and tracking codes. <br/><br/>
To learn more about this API, check out [EmailVerify documentation](https://emailverify.paypi.dev/) <br/><br/>

## Authentication
All requests to the EmailVerify API must be authenticated with an API Key. To get an API key, subscribe to the EmailVerify [here](https://app.paypi.dev/subscribe/c2VydmljZTo1OGQxZDNmMy05OWQ5LTQ3ZjYtOWJkNi02OWNkMTY1OGFmOWU=).  \
Set your `Authorization` header to `Bearer YOUR-API-KEY`. 
```
curl
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR-API-KEY" \
...
```


### Available Operations

* [PostCheckCode](#postcheckcode) - Check verification code
* [PostSendCode](#postsendcode) - Send verification code

## PostCheckCode

Checks the user's emailed code is valid. 
If this returns success=true, you can safely assume the user you are interacting with is the owner of that email address.


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
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PostCheckCode(ctx, operations.PostCheckCodeRequestBody{
        Code: sdk.String("corrupti"),
        Email: sdk.String("Henry.Mueller@hotmail.com"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostCheckCode200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSendCode

This request send's a code to the given email address, which should be returned to check it is correct.

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
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PostSendCode(ctx, operations.PostSendCodeRequestBody{
        Email: sdk.String("Eli96@yahoo.com"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSendCode200ApplicationJSONObject != nil {
        // handle response
    }
}
```
