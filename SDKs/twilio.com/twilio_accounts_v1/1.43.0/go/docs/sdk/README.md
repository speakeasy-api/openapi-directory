# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [CreateCredentialAws](#createcredentialaws) - Create a new AWS Credential
* [CreateCredentialPublicKey](#createcredentialpublickey) - Create a new Public Key Credential
* [CreateSecondaryAuthToken](#createsecondaryauthtoken) - Create a new secondary Auth Token
* [DeleteCredentialAws](#deletecredentialaws) - Delete a Credential from your account
* [DeleteCredentialPublicKey](#deletecredentialpublickey) - Delete a Credential from your account
* [DeleteSecondaryAuthToken](#deletesecondaryauthtoken) - Delete the secondary Auth Token from your account
* [FetchCredentialAws](#fetchcredentialaws) - Fetch the AWS credentials specified by the provided Credential Sid
* [FetchCredentialPublicKey](#fetchcredentialpublickey) - Fetch the public key specified by the provided Credential Sid
* [ListCredentialAws](#listcredentialaws) - Retrieves a collection of AWS Credentials belonging to the account used to make the request
* [ListCredentialPublicKey](#listcredentialpublickey) - Retrieves a collection of Public Key Credentials belonging to the account used to make the request
* [UpdateAuthTokenPromotion](#updateauthtokenpromotion) - Promote the secondary Auth Token to primary. After promoting the new token, all requests to Twilio using your old primary Auth Token will result in an error.
* [UpdateCredentialAws](#updatecredentialaws) - Modify the properties of a given Account
* [UpdateCredentialPublicKey](#updatecredentialpublickey) - Modify the properties of a given Account

## CreateCredentialAws

Create a new AWS Credential

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
    res, err := s.SDK.CreateCredentialAws(ctx, operations.CreateCredentialAwsCreateCredentialAwsRequest{
        AccountSid: sdk.String("quibusdam"),
        Credentials: "unde",
        FriendlyName: sdk.String("nulla"),
    }, operations.CreateCredentialAwsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsV1CredentialCredentialAws != nil {
        // handle response
    }
}
```

## CreateCredentialPublicKey

Create a new Public Key Credential

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
    res, err := s.SDK.CreateCredentialPublicKey(ctx, operations.CreateCredentialPublicKeyCreateCredentialPublicKeyRequest{
        AccountSid: sdk.String("corrupti"),
        FriendlyName: sdk.String("illum"),
        PublicKey: "vel",
    }, operations.CreateCredentialPublicKeySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsV1CredentialCredentialPublicKey != nil {
        // handle response
    }
}
```

## CreateSecondaryAuthToken

Create a new secondary Auth Token

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
    res, err := s.SDK.CreateSecondaryAuthToken(ctx, operations.CreateSecondaryAuthTokenSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsV1SecondaryAuthToken != nil {
        // handle response
    }
}
```

## DeleteCredentialAws

Delete a Credential from your account

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
    res, err := s.SDK.DeleteCredentialAws(ctx, operations.DeleteCredentialAwsRequest{
        Sid: "error",
    }, operations.DeleteCredentialAwsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteCredentialPublicKey

Delete a Credential from your account

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
    res, err := s.SDK.DeleteCredentialPublicKey(ctx, operations.DeleteCredentialPublicKeyRequest{
        Sid: "deserunt",
    }, operations.DeleteCredentialPublicKeySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSecondaryAuthToken

Delete the secondary Auth Token from your account

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
    res, err := s.SDK.DeleteSecondaryAuthToken(ctx, operations.DeleteSecondaryAuthTokenSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FetchCredentialAws

Fetch the AWS credentials specified by the provided Credential Sid

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
    res, err := s.SDK.FetchCredentialAws(ctx, operations.FetchCredentialAwsRequest{
        Sid: "suscipit",
    }, operations.FetchCredentialAwsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsV1CredentialCredentialAws != nil {
        // handle response
    }
}
```

## FetchCredentialPublicKey

Fetch the public key specified by the provided Credential Sid

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
    res, err := s.SDK.FetchCredentialPublicKey(ctx, operations.FetchCredentialPublicKeyRequest{
        Sid: "iure",
    }, operations.FetchCredentialPublicKeySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsV1CredentialCredentialPublicKey != nil {
        // handle response
    }
}
```

## ListCredentialAws

Retrieves a collection of AWS Credentials belonging to the account used to make the request

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
    res, err := s.SDK.ListCredentialAws(ctx, operations.ListCredentialAwsRequest{
        Page: sdk.Int64(297534),
        PageSize: sdk.Int64(891773),
        PageToken: sdk.String("ipsa"),
    }, operations.ListCredentialAwsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCredentialAwsResponse != nil {
        // handle response
    }
}
```

## ListCredentialPublicKey

Retrieves a collection of Public Key Credentials belonging to the account used to make the request

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
    res, err := s.SDK.ListCredentialPublicKey(ctx, operations.ListCredentialPublicKeyRequest{
        Page: sdk.Int64(963663),
        PageSize: sdk.Int64(272656),
        PageToken: sdk.String("suscipit"),
    }, operations.ListCredentialPublicKeySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCredentialPublicKeyResponse != nil {
        // handle response
    }
}
```

## UpdateAuthTokenPromotion

Promote the secondary Auth Token to primary. After promoting the new token, all requests to Twilio using your old primary Auth Token will result in an error.

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
    res, err := s.SDK.UpdateAuthTokenPromotion(ctx, operations.UpdateAuthTokenPromotionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsV1AuthTokenPromotion != nil {
        // handle response
    }
}
```

## UpdateCredentialAws

Modify the properties of a given Account

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
    res, err := s.SDK.UpdateCredentialAws(ctx, operations.UpdateCredentialAwsRequest{
        RequestBody: &operations.UpdateCredentialAwsUpdateCredentialAwsRequest{
            FriendlyName: sdk.String("molestiae"),
        },
        Sid: "minus",
    }, operations.UpdateCredentialAwsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsV1CredentialCredentialAws != nil {
        // handle response
    }
}
```

## UpdateCredentialPublicKey

Modify the properties of a given Account

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
    res, err := s.SDK.UpdateCredentialPublicKey(ctx, operations.UpdateCredentialPublicKeyRequest{
        RequestBody: &operations.UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest{
            FriendlyName: sdk.String("placeat"),
        },
        Sid: "voluptatum",
    }, operations.UpdateCredentialPublicKeySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsV1CredentialCredentialPublicKey != nil {
        // handle response
    }
}
```
