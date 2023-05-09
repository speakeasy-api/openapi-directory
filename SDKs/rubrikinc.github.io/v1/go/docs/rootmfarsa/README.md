# RootMfaRsa

### Available Operations

* [CreateRsaMfaServer](#creatersamfaserver) - Register a new RSA server
* [DeleteRsaMfaServer](#deletersamfaserver) - Delete RSA server
* [GetRsaMfaServer](#getrsamfaserver) - Get RSA server configuration
* [QueryRsaMfaServers](#queryrsamfaservers) - Get RSA server configuration
* [UpdateRsaMfaServer](#updatersamfaserver) - Update RSA server configuration

## CreateRsaMfaServer

Register a new RSA server using specified configuration.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMfaRsa.CreateRsaMfaServer(ctx, shared.RsaMfaServerConfig{
        AssurancePolicyName: sdk.String("accusamus"),
        BaseURL: "ipsam",
        CertificateID: sdk.String("fugiat"),
        ClientID: sdk.String("odio"),
        LdapUsernameAttribute: sdk.String("ullam"),
        Name: "Sheri Mayert",
        RestAPIAccessID: sdk.String("rem"),
        RestAPIKey: "a",
        Timeout: sdk.Int(470732),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RsaMfaServerDetail != nil {
        // handle response
    }
}
```

## DeleteRsaMfaServer

Delete RSA server configuration.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMfaRsa.DeleteRsaMfaServer(ctx, operations.DeleteRsaMfaServerRequest{
        ID: "502bfdc3-4508-441f-9764-456379f3fb27",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetRsaMfaServer

Get RSA server configuration.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMfaRsa.GetRsaMfaServer(ctx, operations.GetRsaMfaServerRequest{
        ID: "e21f8626-57b3-46fc-ab9f-587ce525c676",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RsaMfaServerDetail != nil {
        // handle response
    }
}
```

## QueryRsaMfaServers

Get RSA server configuration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMfaRsa.QueryRsaMfaServers(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.RsaMfaServerDetailListResponse != nil {
        // handle response
    }
}
```

## UpdateRsaMfaServer

Update an existing RSA server using specified configuration.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootMfaRsa.UpdateRsaMfaServer(ctx, operations.UpdateRsaMfaServerRequest{
        RequestBody: operations.UpdateRsaMfaServerRequestBody{
            AssurancePolicyName: sdk.String("numquam"),
            BaseURL: sdk.String("architecto"),
            CertificateID: sdk.String("fuga"),
            ClientID: sdk.String("totam"),
            LdapUsernameAttribute: sdk.String("velit"),
            Name: sdk.String("Jane Towne II"),
            RestAPIAccessID: sdk.String("in"),
            RestAPIKey: sdk.String("libero"),
            Timeout: sdk.Int(284694),
        },
        ID: "c21ccb42-3abc-4dc9-9faa-bdd88e71f6c4",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RsaMfaServerDetail != nil {
        // handle response
    }
}
```
