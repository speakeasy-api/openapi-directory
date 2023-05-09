# Configuration

## Overview

Everything about Otoroshi global configuration

### Available Operations

* [GlobalConfig](#globalconfig) - Get the full configuration of Otoroshi
* [PatchGlobalConfig](#patchglobalconfig) - Update the global configuration with a diff
* [PutGlobalConfig](#putglobalconfig) - Update the global configuration

## GlobalConfig

Get the full configuration of Otoroshi

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
    res, err := s.Configuration.GlobalConfig(ctx, operations.GlobalConfigSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GlobalConfig != nil {
        // handle response
    }
}
```

## PatchGlobalConfig

Update the global configuration with a diff

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
    res, err := s.Configuration.PatchGlobalConfig(ctx, []shared.Patch{
        shared.Patch{
            Op: shared.PatchOpEnumReplace,
            Path: "a string value",
            Value: sdk.String("aut"),
        },
        shared.Patch{
            Op: shared.PatchOpEnumCopy,
            Path: "a string value",
            Value: sdk.String("corporis"),
        },
        shared.Patch{
            Op: shared.PatchOpEnumTest,
            Path: "a string value",
            Value: sdk.String("libero"),
        },
        shared.Patch{
            Op: shared.PatchOpEnumCopy,
            Path: "a string value",
            Value: sdk.String("dolores"),
        },
    }, operations.PatchGlobalConfigSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GlobalConfig != nil {
        // handle response
    }
}
```

## PutGlobalConfig

Update the global configuration

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
    res, err := s.Configuration.PutGlobalConfig(ctx, shared.GlobalConfig{
        AlertsEmails: []string{
            "admin@otoroshi.io",
            "admin@otoroshi.io",
        },
        AlertsWebhooks: []shared.Webhook{
            shared.Webhook{
                Headers: map[string]string{
                    "eaque": "quis",
                    "nesciunt": "eos",
                },
                URL: "http://www.google.com",
            },
            shared.Webhook{
                Headers: map[string]string{
                    "dolores": "minus",
                },
                URL: "http://www.google.com",
            },
            shared.Webhook{
                Headers: map[string]string{
                    "dolor": "vero",
                    "nostrum": "hic",
                },
                URL: "http://www.google.com",
            },
        },
        AnalyticsWebhooks: []shared.Webhook{
            shared.Webhook{
                Headers: map[string]string{
                    "facilis": "perspiciatis",
                    "voluptatem": "porro",
                    "consequuntur": "blanditiis",
                },
                URL: "http://www.google.com",
            },
            shared.Webhook{
                Headers: map[string]string{
                    "eaque": "occaecati",
                    "rerum": "adipisci",
                    "asperiores": "earum",
                },
                URL: "http://www.google.com",
            },
            shared.Webhook{
                Headers: map[string]string{
                    "iste": "dolorum",
                    "deleniti": "pariatur",
                },
                URL: "http://www.google.com",
            },
            shared.Webhook{
                Headers: map[string]string{
                    "nobis": "libero",
                    "delectus": "quaerat",
                    "quos": "aliquid",
                },
                URL: "http://www.google.com",
            },
        },
        APIReadOnly: true,
        AutoLinkToDefaultGroup: true,
        BackofficeAuth0Config: &shared.Auth0Config{
            CallbackURL: "a string value",
            ClientID: "a string value",
            ClientSecret: "a string value",
            Domain: "a string value",
        },
        CleverSettings: &shared.CleverSettings{
            ConsumerKey: "a string value",
            ConsumerSecret: "a string value",
            OrgaID: "a string value",
            Secret: "a string value",
            Token: "a string value",
        },
        ElasticReadsConfig: &shared.ElasticConfig{
            ClusterURI: "a string value",
            Headers: map[string]string{
                "dolorem": "dolor",
            },
            Index: "a string value",
            Password: "a string value",
            Type: "a string value",
            User: "a string value",
        },
        ElasticWritesConfigs: []shared.ElasticConfig{
            shared.ElasticConfig{
                ClusterURI: "a string value",
                Headers: map[string]string{
                    "hic": "excepturi",
                },
                Index: "a string value",
                Password: "a string value",
                Type: "a string value",
                User: "a string value",
            },
        },
        EndlessIPAddresses: []string{
            "192.192.192.192",
            "192.192.192.192",
            "192.192.192.192",
        },
        IPFiltering: shared.IPFiltering{
            Blacklist: []string{
                "192.192.192.192",
                "192.192.192.192",
            },
            Whitelist: []string{
                "192.192.192.192",
                "192.192.192.192",
            },
        },
        LimitConcurrentRequests: true,
        Lines: []string{
            "a string value",
            "a string value",
            "a string value",
            "a string value",
        },
        MailerSettings: &shared.MailerSettings{
            APIKey: "a string value",
            APIKeyPrivate: sdk.String("a string value"),
            APIKeyPublic: sdk.String("a string value"),
            Domain: "a string value",
            Eu: sdk.Bool(true),
            Header: map[string]string{
                "dolorum": "numquam",
            },
            Type: sdk.String("a string value"),
            URL: sdk.String("a string value"),
        },
        MaxConcurrentRequests: 123,
        MaxHttp10ResponseSize: sdk.Int64(123),
        MaxLogsSize: sdk.Int(123123),
        MiddleFingers: sdk.Bool(true),
        PerIPThrottlingQuota: 123,
        PrivateAppsAuth0Config: &shared.Auth0Config{
            CallbackURL: "a string value",
            ClientID: "a string value",
            ClientSecret: "a string value",
            Domain: "a string value",
        },
        StreamEntityOnly: true,
        ThrottlingQuota: 123,
        U2fLoginOnly: true,
        UseCircuitBreakers: true,
    }, operations.PutGlobalConfigSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GlobalConfig != nil {
        // handle response
    }
}
```
