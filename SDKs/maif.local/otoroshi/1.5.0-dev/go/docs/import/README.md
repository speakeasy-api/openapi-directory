# Import

## Overview

Everything about Otoroshi import/export

### Available Operations

* [FullExport](#fullexport) - Export the full state of Otoroshi
* [FullImport](#fullimport) - Import the full state of Otoroshi
* [FullImportFromFile](#fullimportfromfile) - Import the full state of Otoroshi as a file

## FullExport

Export the full state of Otoroshi

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
    res, err := s.Import.FullExport(ctx, operations.FullExportSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportExport != nil {
        // handle response
    }
}
```

## FullImport

Import the full state of Otoroshi

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Import.FullImport(ctx, shared.ImportExport{
        Admins: []shared.ImportExportAdmins{
            shared.ImportExportAdmins{
                CreatedAt: 123,
                Label: "a string value",
                Password: "a string value",
                Registration: map[string]string{
                    "ea": "quo",
                    "consectetur": "recusandae",
                },
                Username: "a string value",
            },
        },
        APIKeys: []shared.ImportExportAPIKeys{
            shared.ImportExportAPIKeys{
                AuthorizedEntities: []string{
                    "a string value",
                    "a string value",
                },
                ClientID: "a string value",
                ClientName: "a string value",
                ClientSecret: "a string value",
                DailyQuota: sdk.Int64(123),
                Enabled: true,
                Metadata: map[string]string{
                    "a": "libero",
                },
                MonthlyQuota: sdk.Int64(123),
                ThrottlingQuota: sdk.Int64(123),
            },
        },
        AppConfig: map[string]string{
            "aut": "deleniti",
        },
        Config: shared.GlobalConfig{
            AlertsEmails: []string{
                "admin@otoroshi.io",
                "admin@otoroshi.io",
                "admin@otoroshi.io",
                "admin@otoroshi.io",
            },
            AlertsWebhooks: []shared.Webhook{
                shared.Webhook{
                    Headers: map[string]string{
                        "accusamus": "inventore",
                    },
                    URL: "http://www.google.com",
                },
                shared.Webhook{
                    Headers: map[string]string{
                        "et": "dolorum",
                        "laborum": "placeat",
                    },
                    URL: "http://www.google.com",
                },
            },
            AnalyticsWebhooks: []shared.Webhook{
                shared.Webhook{
                    Headers: map[string]string{
                        "autem": "nobis",
                        "quas": "assumenda",
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
                    "voluptas": "libero",
                    "quasi": "tempora",
                    "numquam": "explicabo",
                    "provident": "ipsa",
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
                        "odio": "eius",
                        "esse": "esse",
                    },
                    Index: "a string value",
                    Password: "a string value",
                    Type: "a string value",
                    User: "a string value",
                },
                shared.ElasticConfig{
                    ClusterURI: "a string value",
                    Headers: map[string]string{
                        "fuga": "reprehenderit",
                        "quidem": "fugiat",
                        "ut": "eum",
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
            },
            IPFiltering: shared.IPFiltering{
                Blacklist: []string{
                    "192.192.192.192",
                    "192.192.192.192",
                    "192.192.192.192",
                    "192.192.192.192",
                },
                Whitelist: []string{
                    "192.192.192.192",
                },
            },
            LimitConcurrentRequests: true,
            Lines: []string{
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
                    "veritatis": "ipsa",
                    "id": "quidem",
                    "neque": "quo",
                    "illum": "quo",
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
        },
        Date: types.MustTimeFromString("2017-07-21T17:32:28Z"),
        DateRaw: 123,
        ErrorTemplates: []shared.ImportExportErrorTemplates{
            shared.ImportExportErrorTemplates{
                Messages: map[string]string{
                    "eos": "voluptas",
                    "ab": "cupiditate",
                },
                ServiceID: "a string value",
                Template40x: "a string value",
                Template50x: "a string value",
                TemplateBuild: "a string value",
                TemplateMaintenance: "a string value",
            },
            shared.ImportExportErrorTemplates{
                Messages: map[string]string{
                    "tempora": "debitis",
                },
                ServiceID: "a string value",
                Template40x: "a string value",
                Template50x: "a string value",
                TemplateBuild: "a string value",
                TemplateMaintenance: "a string value",
            },
            shared.ImportExportErrorTemplates{
                Messages: map[string]string{
                    "aspernatur": "sequi",
                    "quo": "esse",
                },
                ServiceID: "a string value",
                Template40x: "a string value",
                Template50x: "a string value",
                TemplateBuild: "a string value",
                TemplateMaintenance: "a string value",
            },
        },
        Label: "a string value",
        ServiceDescriptors: []shared.ImportExportServiceDescriptors{
            shared.ImportExportServiceDescriptors{
                Canary: &shared.Canary{
                    Enabled: true,
                    Root: "a string value",
                    Targets: []shared.Target{
                        shared.Target{
                            Host: "www.google.com",
                            Scheme: "a string value",
                        },
                    },
                    Traffic: 123123,
                },
                AdditionalHeaders: map[string]string{
                    "quod": "dignissimos",
                    "inventore": "nihil",
                    "totam": "accusamus",
                },
                API: &shared.ExposedAPI{
                    ExposeAPI: true,
                    OpenAPIDescriptorURL: sdk.String("http://www.google.com"),
                },
                AuthConfigRef: sdk.String("a string value"),
                BuildMode: true,
                ChaosConfig: &shared.ChaosConfig{
                    BadResponsesFaultConfig: &shared.BadResponsesFaultConfig{
                        Ratio: 42.2,
                        Responses: []shared.BadResponse{
                            shared.BadResponse{
                                Body: "a string value",
                                Headers: map[string]string{
                                    "occaecati": "commodi",
                                    "sapiente": "dolores",
                                },
                                Status: 123123,
                            },
                            shared.BadResponse{
                                Body: "a string value",
                                Headers: map[string]string{
                                    "molestiae": "accusantium",
                                    "porro": "eum",
                                    "quas": "praesentium",
                                },
                                Status: 123123,
                            },
                        },
                    },
                    Enabled: true,
                    LargeRequestFaultConfig: &shared.LargeRequestFaultConfig{
                        AdditionalRequestSize: 123123,
                        Ratio: 42.2,
                    },
                    LargeResponseFaultConfig: &shared.LargeResponseFaultConfig{
                        AdditionalRequestSize: sdk.Int(123123),
                        Ratio: 42.2,
                    },
                    LatencyInjectionFaultConfig: &shared.LatencyInjectionFaultConfig{
                        From: 123123,
                        Ratio: 42.2,
                        To: 123123,
                    },
                },
                ClientConfig: &shared.ClientConfig{
                    BackoffFactor: 123123,
                    CallTimeout: 123123,
                    GlobalTimeout: 123123,
                    MaxErrors: 123123,
                    Retries: 123123,
                    RetryInitialDelay: 123123,
                    SampleInterval: 123123,
                    UseCircuitBreaker: true,
                },
                ClientValidatorRef: sdk.String("a string value"),
                Cors: &shared.CorsSettings{
                    AllowCredentials: true,
                    AllowHeaders: []string{
                        "a string value",
                    },
                    AllowMethods: []string{
                        "a string value",
                        "a string value",
                        "a string value",
                    },
                    AllowOrigin: "a string value",
                    Enabled: true,
                    ExcludedPatterns: []string{
                        "a string value",
                    },
                    ExposeHeaders: []string{
                        "a string value",
                        "a string value",
                        "a string value",
                    },
                    MaxAge: 123123,
                },
                Domain: "a string value",
                Enabled: true,
                EnforceSecureCommunication: true,
                Env: "a string value",
                ForceHTTPS: true,
                Groups: []string{
                    "a string value",
                    "a string value",
                    "a string value",
                },
                Gzip: &shared.Gzip{
                    BlackList: []string{
                        "a string value",
                        "a string value",
                    },
                    BufferSize: 123,
                    ChunkedThreshold: 123,
                    CompressionLevel: 123123,
                    Enabled: true,
                    ExcludedPatterns: []string{
                        "a string value",
                        "a string value",
                        "a string value",
                    },
                    WhiteList: []string{
                        "a string value",
                    },
                },
                HeadersVerification: map[string]string{
                    "nisi": "fugit",
                    "sapiente": "consequuntur",
                },
                HealthCheck: &shared.HealthCheck{
                    Enabled: true,
                    URL: sdk.String("http://www.google.com"),
                },
                ID: "110e8400-e29b-11d4-a716-446655440000",
                IPFiltering: &shared.IPFiltering{
                    Blacklist: []string{
                        "192.192.192.192",
                    },
                    Whitelist: []string{
                        "192.192.192.192",
                    },
                },
                JwtVerifier: &shared.ImportExportServiceDescriptorsJwtVerifier{},
                LocalHost: sdk.String("a string value"),
                LocalScheme: sdk.String("a string value"),
                MaintenanceMode: true,
                MatchingHeaders: map[string]string{
                    "occaecati": "atque",
                    "et": "esse",
                    "eveniet": "accusamus",
                    "veritatis": "esse",
                },
                MatchingRoot: sdk.String("a string value"),
                Metadata: map[string]string{
                    "nam": "vero",
                    "aliquid": "quasi",
                    "saepe": "vel",
                    "harum": "molestiae",
                },
                Name: "a string value",
                OverrideHost: sdk.Bool(true),
                PrivateApp: true,
                PrivatePatterns: []string{
                    "a string value",
                    "a string value",
                    "a string value",
                },
                PublicPatterns: []string{
                    "a string value",
                    "a string value",
                    "a string value",
                },
                RedirectToLocal: sdk.Bool(true),
                Redirection: &shared.RedirectionSettings{
                    Code: 123123,
                    Enabled: true,
                    To: "a string value",
                },
                Root: "a string value",
                SecComExcludedPatterns: []string{
                    "a string value",
                    "a string value",
                },
                SecComSettings: &shared.ImportExportServiceDescriptorsSecComSettings{},
                SendOtoroshiHeadersBack: sdk.Bool(true),
                StatsdConfig: &shared.StatsdConfig{
                    Datadog: true,
                    Host: "a string value",
                    Port: 123123,
                },
                Subdomain: "a string value",
                Targets: []shared.Target{
                    shared.Target{
                        Host: "www.google.com",
                        Scheme: "a string value",
                    },
                    shared.Target{
                        Host: "www.google.com",
                        Scheme: "a string value",
                    },
                    shared.Target{
                        Host: "www.google.com",
                        Scheme: "a string value",
                    },
                },
                TransformerRef: sdk.String("a string value"),
                UserFacing: sdk.Bool(true),
                XForwardedHeaders: sdk.Bool(true),
            },
            shared.ImportExportServiceDescriptors{
                Canary: &shared.Canary{
                    Enabled: true,
                    Root: "a string value",
                    Targets: []shared.Target{
                        shared.Target{
                            Host: "www.google.com",
                            Scheme: "a string value",
                        },
                        shared.Target{
                            Host: "www.google.com",
                            Scheme: "a string value",
                        },
                        shared.Target{
                            Host: "www.google.com",
                            Scheme: "a string value",
                        },
                        shared.Target{
                            Host: "www.google.com",
                            Scheme: "a string value",
                        },
                    },
                    Traffic: 123123,
                },
                AdditionalHeaders: map[string]string{
                    "culpa": "tempore",
                },
                API: &shared.ExposedAPI{
                    ExposeAPI: true,
                    OpenAPIDescriptorURL: sdk.String("http://www.google.com"),
                },
                AuthConfigRef: sdk.String("a string value"),
                BuildMode: true,
                ChaosConfig: &shared.ChaosConfig{
                    BadResponsesFaultConfig: &shared.BadResponsesFaultConfig{
                        Ratio: 42.2,
                        Responses: []shared.BadResponse{
                            shared.BadResponse{
                                Body: "a string value",
                                Headers: map[string]string{
                                    "consequuntur": "consequatur",
                                    "minus": "quaerat",
                                    "sapiente": "consectetur",
                                    "esse": "blanditiis",
                                },
                                Status: 123123,
                            },
                        },
                    },
                    Enabled: true,
                    LargeRequestFaultConfig: &shared.LargeRequestFaultConfig{
                        AdditionalRequestSize: 123123,
                        Ratio: 42.2,
                    },
                    LargeResponseFaultConfig: &shared.LargeResponseFaultConfig{
                        AdditionalRequestSize: sdk.Int(123123),
                        Ratio: 42.2,
                    },
                    LatencyInjectionFaultConfig: &shared.LatencyInjectionFaultConfig{
                        From: 123123,
                        Ratio: 42.2,
                        To: 123123,
                    },
                },
                ClientConfig: &shared.ClientConfig{
                    BackoffFactor: 123123,
                    CallTimeout: 123123,
                    GlobalTimeout: 123123,
                    MaxErrors: 123123,
                    Retries: 123123,
                    RetryInitialDelay: 123123,
                    SampleInterval: 123123,
                    UseCircuitBreaker: true,
                },
                ClientValidatorRef: sdk.String("a string value"),
                Cors: &shared.CorsSettings{
                    AllowCredentials: true,
                    AllowHeaders: []string{
                        "a string value",
                        "a string value",
                        "a string value",
                    },
                    AllowMethods: []string{
                        "a string value",
                        "a string value",
                        "a string value",
                        "a string value",
                    },
                    AllowOrigin: "a string value",
                    Enabled: true,
                    ExcludedPatterns: []string{
                        "a string value",
                        "a string value",
                        "a string value",
                        "a string value",
                    },
                    ExposeHeaders: []string{
                        "a string value",
                        "a string value",
                        "a string value",
                    },
                    MaxAge: 123123,
                },
                Domain: "a string value",
                Enabled: true,
                EnforceSecureCommunication: true,
                Env: "a string value",
                ForceHTTPS: true,
                Groups: []string{
                    "a string value",
                    "a string value",
                },
                Gzip: &shared.Gzip{
                    BlackList: []string{
                        "a string value",
                    },
                    BufferSize: 123,
                    ChunkedThreshold: 123,
                    CompressionLevel: 123123,
                    Enabled: true,
                    ExcludedPatterns: []string{
                        "a string value",
                        "a string value",
                        "a string value",
                        "a string value",
                    },
                    WhiteList: []string{
                        "a string value",
                        "a string value",
                        "a string value",
                    },
                },
                HeadersVerification: map[string]string{
                    "pariatur": "possimus",
                    "quia": "eveniet",
                    "asperiores": "facere",
                },
                HealthCheck: &shared.HealthCheck{
                    Enabled: true,
                    URL: sdk.String("http://www.google.com"),
                },
                ID: "110e8400-e29b-11d4-a716-446655440000",
                IPFiltering: &shared.IPFiltering{
                    Blacklist: []string{
                        "192.192.192.192",
                    },
                    Whitelist: []string{
                        "192.192.192.192",
                    },
                },
                JwtVerifier: &shared.ImportExportServiceDescriptorsJwtVerifier{},
                LocalHost: sdk.String("a string value"),
                LocalScheme: sdk.String("a string value"),
                MaintenanceMode: true,
                MatchingHeaders: map[string]string{
                    "similique": "culpa",
                },
                MatchingRoot: sdk.String("a string value"),
                Metadata: map[string]string{
                    "tenetur": "quae",
                    "earum": "vel",
                },
                Name: "a string value",
                OverrideHost: sdk.Bool(true),
                PrivateApp: true,
                PrivatePatterns: []string{
                    "a string value",
                    "a string value",
                },
                PublicPatterns: []string{
                    "a string value",
                    "a string value",
                },
                RedirectToLocal: sdk.Bool(true),
                Redirection: &shared.RedirectionSettings{
                    Code: 123123,
                    Enabled: true,
                    To: "a string value",
                },
                Root: "a string value",
                SecComExcludedPatterns: []string{
                    "a string value",
                    "a string value",
                    "a string value",
                },
                SecComSettings: &shared.ImportExportServiceDescriptorsSecComSettings{},
                SendOtoroshiHeadersBack: sdk.Bool(true),
                StatsdConfig: &shared.StatsdConfig{
                    Datadog: true,
                    Host: "a string value",
                    Port: 123123,
                },
                Subdomain: "a string value",
                Targets: []shared.Target{
                    shared.Target{
                        Host: "www.google.com",
                        Scheme: "a string value",
                    },
                    shared.Target{
                        Host: "www.google.com",
                        Scheme: "a string value",
                    },
                    shared.Target{
                        Host: "www.google.com",
                        Scheme: "a string value",
                    },
                    shared.Target{
                        Host: "www.google.com",
                        Scheme: "a string value",
                    },
                },
                TransformerRef: sdk.String("a string value"),
                UserFacing: sdk.Bool(true),
                XForwardedHeaders: sdk.Bool(true),
            },
            shared.ImportExportServiceDescriptors{
                Canary: &shared.Canary{
                    Enabled: true,
                    Root: "a string value",
                    Targets: []shared.Target{
                        shared.Target{
                            Host: "www.google.com",
                            Scheme: "a string value",
                        },
                        shared.Target{
                            Host: "www.google.com",
                            Scheme: "a string value",
                        },
                        shared.Target{
                            Host: "www.google.com",
                            Scheme: "a string value",
                        },
                    },
                    Traffic: 123123,
                },
                AdditionalHeaders: map[string]string{
                    "aliquam": "sapiente",
                },
                API: &shared.ExposedAPI{
                    ExposeAPI: true,
                    OpenAPIDescriptorURL: sdk.String("http://www.google.com"),
                },
                AuthConfigRef: sdk.String("a string value"),
                BuildMode: true,
                ChaosConfig: &shared.ChaosConfig{
                    BadResponsesFaultConfig: &shared.BadResponsesFaultConfig{
                        Ratio: 42.2,
                        Responses: []shared.BadResponse{
                            shared.BadResponse{
                                Body: "a string value",
                                Headers: map[string]string{
                                    "reprehenderit": "ullam",
                                    "nisi": "aut",
                                },
                                Status: 123123,
                            },
                        },
                    },
                    Enabled: true,
                    LargeRequestFaultConfig: &shared.LargeRequestFaultConfig{
                        AdditionalRequestSize: 123123,
                        Ratio: 42.2,
                    },
                    LargeResponseFaultConfig: &shared.LargeResponseFaultConfig{
                        AdditionalRequestSize: sdk.Int(123123),
                        Ratio: 42.2,
                    },
                    LatencyInjectionFaultConfig: &shared.LatencyInjectionFaultConfig{
                        From: 123123,
                        Ratio: 42.2,
                        To: 123123,
                    },
                },
                ClientConfig: &shared.ClientConfig{
                    BackoffFactor: 123123,
                    CallTimeout: 123123,
                    GlobalTimeout: 123123,
                    MaxErrors: 123123,
                    Retries: 123123,
                    RetryInitialDelay: 123123,
                    SampleInterval: 123123,
                    UseCircuitBreaker: true,
                },
                ClientValidatorRef: sdk.String("a string value"),
                Cors: &shared.CorsSettings{
                    AllowCredentials: true,
                    AllowHeaders: []string{
                        "a string value",
                        "a string value",
                        "a string value",
                    },
                    AllowMethods: []string{
                        "a string value",
                    },
                    AllowOrigin: "a string value",
                    Enabled: true,
                    ExcludedPatterns: []string{
                        "a string value",
                        "a string value",
                        "a string value",
                        "a string value",
                    },
                    ExposeHeaders: []string{
                        "a string value",
                        "a string value",
                    },
                    MaxAge: 123123,
                },
                Domain: "a string value",
                Enabled: true,
                EnforceSecureCommunication: true,
                Env: "a string value",
                ForceHTTPS: true,
                Groups: []string{
                    "a string value",
                    "a string value",
                    "a string value",
                },
                Gzip: &shared.Gzip{
                    BlackList: []string{
                        "a string value",
                        "a string value",
                        "a string value",
                        "a string value",
                    },
                    BufferSize: 123,
                    ChunkedThreshold: 123,
                    CompressionLevel: 123123,
                    Enabled: true,
                    ExcludedPatterns: []string{
                        "a string value",
                        "a string value",
                        "a string value",
                    },
                    WhiteList: []string{
                        "a string value",
                    },
                },
                HeadersVerification: map[string]string{
                    "tenetur": "quasi",
                    "at": "et",
                    "voluptate": "ipsa",
                },
                HealthCheck: &shared.HealthCheck{
                    Enabled: true,
                    URL: sdk.String("http://www.google.com"),
                },
                ID: "110e8400-e29b-11d4-a716-446655440000",
                IPFiltering: &shared.IPFiltering{
                    Blacklist: []string{
                        "192.192.192.192",
                        "192.192.192.192",
                    },
                    Whitelist: []string{
                        "192.192.192.192",
                    },
                },
                JwtVerifier: &shared.ImportExportServiceDescriptorsJwtVerifier{},
                LocalHost: sdk.String("a string value"),
                LocalScheme: sdk.String("a string value"),
                MaintenanceMode: true,
                MatchingHeaders: map[string]string{
                    "adipisci": "iste",
                },
                MatchingRoot: sdk.String("a string value"),
                Metadata: map[string]string{
                    "accusantium": "rem",
                    "aut": "laudantium",
                    "eum": "mollitia",
                    "ab": "corrupti",
                },
                Name: "a string value",
                OverrideHost: sdk.Bool(true),
                PrivateApp: true,
                PrivatePatterns: []string{
                    "a string value",
                    "a string value",
                },
                PublicPatterns: []string{
                    "a string value",
                },
                RedirectToLocal: sdk.Bool(true),
                Redirection: &shared.RedirectionSettings{
                    Code: 123123,
                    Enabled: true,
                    To: "a string value",
                },
                Root: "a string value",
                SecComExcludedPatterns: []string{
                    "a string value",
                },
                SecComSettings: &shared.ImportExportServiceDescriptorsSecComSettings{},
                SendOtoroshiHeadersBack: sdk.Bool(true),
                StatsdConfig: &shared.StatsdConfig{
                    Datadog: true,
                    Host: "a string value",
                    Port: 123123,
                },
                Subdomain: "a string value",
                Targets: []shared.Target{
                    shared.Target{
                        Host: "www.google.com",
                        Scheme: "a string value",
                    },
                    shared.Target{
                        Host: "www.google.com",
                        Scheme: "a string value",
                    },
                    shared.Target{
                        Host: "www.google.com",
                        Scheme: "a string value",
                    },
                },
                TransformerRef: sdk.String("a string value"),
                UserFacing: sdk.Bool(true),
                XForwardedHeaders: sdk.Bool(true),
            },
            shared.ImportExportServiceDescriptors{
                Canary: &shared.Canary{
                    Enabled: true,
                    Root: "a string value",
                    Targets: []shared.Target{
                        shared.Target{
                            Host: "www.google.com",
                            Scheme: "a string value",
                        },
                        shared.Target{
                            Host: "www.google.com",
                            Scheme: "a string value",
                        },
                    },
                    Traffic: 123123,
                },
                AdditionalHeaders: map[string]string{
                    "explicabo": "voluptas",
                    "aut": "dignissimos",
                    "dicta": "maiores",
                    "natus": "velit",
                },
                API: &shared.ExposedAPI{
                    ExposeAPI: true,
                    OpenAPIDescriptorURL: sdk.String("http://www.google.com"),
                },
                AuthConfigRef: sdk.String("a string value"),
                BuildMode: true,
                ChaosConfig: &shared.ChaosConfig{
                    BadResponsesFaultConfig: &shared.BadResponsesFaultConfig{
                        Ratio: 42.2,
                        Responses: []shared.BadResponse{
                            shared.BadResponse{
                                Body: "a string value",
                                Headers: map[string]string{
                                    "asperiores": "aperiam",
                                    "ea": "quaerat",
                                },
                                Status: 123123,
                            },
                            shared.BadResponse{
                                Body: "a string value",
                                Headers: map[string]string{
                                    "repellendus": "officia",
                                },
                                Status: 123123,
                            },
                            shared.BadResponse{
                                Body: "a string value",
                                Headers: map[string]string{
                                    "dignissimos": "officia",
                                    "asperiores": "nemo",
                                    "quae": "quaerat",
                                    "porro": "quod",
                                },
                                Status: 123123,
                            },
                            shared.BadResponse{
                                Body: "a string value",
                                Headers: map[string]string{
                                    "ab": "adipisci",
                                    "fuga": "id",
                                },
                                Status: 123123,
                            },
                        },
                    },
                    Enabled: true,
                    LargeRequestFaultConfig: &shared.LargeRequestFaultConfig{
                        AdditionalRequestSize: 123123,
                        Ratio: 42.2,
                    },
                    LargeResponseFaultConfig: &shared.LargeResponseFaultConfig{
                        AdditionalRequestSize: sdk.Int(123123),
                        Ratio: 42.2,
                    },
                    LatencyInjectionFaultConfig: &shared.LatencyInjectionFaultConfig{
                        From: 123123,
                        Ratio: 42.2,
                        To: 123123,
                    },
                },
                ClientConfig: &shared.ClientConfig{
                    BackoffFactor: 123123,
                    CallTimeout: 123123,
                    GlobalTimeout: 123123,
                    MaxErrors: 123123,
                    Retries: 123123,
                    RetryInitialDelay: 123123,
                    SampleInterval: 123123,
                    UseCircuitBreaker: true,
                },
                ClientValidatorRef: sdk.String("a string value"),
                Cors: &shared.CorsSettings{
                    AllowCredentials: true,
                    AllowHeaders: []string{
                        "a string value",
                        "a string value",
                    },
                    AllowMethods: []string{
                        "a string value",
                    },
                    AllowOrigin: "a string value",
                    Enabled: true,
                    ExcludedPatterns: []string{
                        "a string value",
                        "a string value",
                        "a string value",
                    },
                    ExposeHeaders: []string{
                        "a string value",
                        "a string value",
                        "a string value",
                    },
                    MaxAge: 123123,
                },
                Domain: "a string value",
                Enabled: true,
                EnforceSecureCommunication: true,
                Env: "a string value",
                ForceHTTPS: true,
                Groups: []string{
                    "a string value",
                    "a string value",
                    "a string value",
                    "a string value",
                },
                Gzip: &shared.Gzip{
                    BlackList: []string{
                        "a string value",
                        "a string value",
                        "a string value",
                    },
                    BufferSize: 123,
                    ChunkedThreshold: 123,
                    CompressionLevel: 123123,
                    Enabled: true,
                    ExcludedPatterns: []string{
                        "a string value",
                        "a string value",
                        "a string value",
                        "a string value",
                    },
                    WhiteList: []string{
                        "a string value",
                        "a string value",
                    },
                },
                HeadersVerification: map[string]string{
                    "quos": "vel",
                    "labore": "possimus",
                },
                HealthCheck: &shared.HealthCheck{
                    Enabled: true,
                    URL: sdk.String("http://www.google.com"),
                },
                ID: "110e8400-e29b-11d4-a716-446655440000",
                IPFiltering: &shared.IPFiltering{
                    Blacklist: []string{
                        "192.192.192.192",
                        "192.192.192.192",
                        "192.192.192.192",
                    },
                    Whitelist: []string{
                        "192.192.192.192",
                        "192.192.192.192",
                        "192.192.192.192",
                    },
                },
                JwtVerifier: &shared.ImportExportServiceDescriptorsJwtVerifier{},
                LocalHost: sdk.String("a string value"),
                LocalScheme: sdk.String("a string value"),
                MaintenanceMode: true,
                MatchingHeaders: map[string]string{
                    "in": "corporis",
                    "reiciendis": "assumenda",
                },
                MatchingRoot: sdk.String("a string value"),
                Metadata: map[string]string{
                    "recusandae": "aliquid",
                    "aperiam": "cum",
                },
                Name: "a string value",
                OverrideHost: sdk.Bool(true),
                PrivateApp: true,
                PrivatePatterns: []string{
                    "a string value",
                },
                PublicPatterns: []string{
                    "a string value",
                    "a string value",
                },
                RedirectToLocal: sdk.Bool(true),
                Redirection: &shared.RedirectionSettings{
                    Code: 123123,
                    Enabled: true,
                    To: "a string value",
                },
                Root: "a string value",
                SecComExcludedPatterns: []string{
                    "a string value",
                    "a string value",
                },
                SecComSettings: &shared.ImportExportServiceDescriptorsSecComSettings{},
                SendOtoroshiHeadersBack: sdk.Bool(true),
                StatsdConfig: &shared.StatsdConfig{
                    Datadog: true,
                    Host: "a string value",
                    Port: 123123,
                },
                Subdomain: "a string value",
                Targets: []shared.Target{
                    shared.Target{
                        Host: "www.google.com",
                        Scheme: "a string value",
                    },
                    shared.Target{
                        Host: "www.google.com",
                        Scheme: "a string value",
                    },
                    shared.Target{
                        Host: "www.google.com",
                        Scheme: "a string value",
                    },
                    shared.Target{
                        Host: "www.google.com",
                        Scheme: "a string value",
                    },
                },
                TransformerRef: sdk.String("a string value"),
                UserFacing: sdk.Bool(true),
                XForwardedHeaders: sdk.Bool(true),
            },
        },
        ServiceGroups: []shared.ImportExportServiceGroups{
            shared.ImportExportServiceGroups{
                Description: sdk.String("a string value"),
                ID: "a string value",
                Name: "a string value",
            },
            shared.ImportExportServiceGroups{
                Description: sdk.String("a string value"),
                ID: "a string value",
                Name: "a string value",
            },
            shared.ImportExportServiceGroups{
                Description: sdk.String("a string value"),
                ID: "a string value",
                Name: "a string value",
            },
            shared.ImportExportServiceGroups{
                Description: sdk.String("a string value"),
                ID: "a string value",
                Name: "a string value",
            },
        },
        SimpleAdmins: []shared.ImportExportSimpleAdmins{
            shared.ImportExportSimpleAdmins{
                CreatedAt: 123,
                Label: "a string value",
                Password: "a string value",
                Username: "a string value",
            },
            shared.ImportExportSimpleAdmins{
                CreatedAt: 123,
                Label: "a string value",
                Password: "a string value",
                Username: "a string value",
            },
        },
        Stats: shared.ImportExportStats{
            Calls: 123,
            DataIn: 123,
            DataOut: 123,
        },
    }, operations.FullImportSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Done != nil {
        // handle response
    }
}
```

## FullImportFromFile

Import the full state of Otoroshi as a file

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Import.FullImportFromFile(ctx, shared.ImportExport{
        Admins: []shared.ImportExportAdmins{
            shared.ImportExportAdmins{
                CreatedAt: 123,
                Label: "a string value",
                Password: "a string value",
                Registration: map[string]string{
                    "reiciendis": "quidem",
                    "saepe": "necessitatibus",
                },
                Username: "a string value",
            },
            shared.ImportExportAdmins{
                CreatedAt: 123,
                Label: "a string value",
                Password: "a string value",
                Registration: map[string]string{
                    "sunt": "asperiores",
                    "adipisci": "non",
                },
                Username: "a string value",
            },
            shared.ImportExportAdmins{
                CreatedAt: 123,
                Label: "a string value",
                Password: "a string value",
                Registration: map[string]string{
                    "beatae": "dignissimos",
                },
                Username: "a string value",
            },
            shared.ImportExportAdmins{
                CreatedAt: 123,
                Label: "a string value",
                Password: "a string value",
                Registration: map[string]string{
                    "debitis": "consectetur",
                    "corporis": "harum",
                    "laboriosam": "ipsa",
                    "voluptates": "libero",
                },
                Username: "a string value",
            },
        },
        APIKeys: []shared.ImportExportAPIKeys{
            shared.ImportExportAPIKeys{
                AuthorizedEntities: []string{
                    "a string value",
                    "a string value",
                    "a string value",
                    "a string value",
                },
                ClientID: "a string value",
                ClientName: "a string value",
                ClientSecret: "a string value",
                DailyQuota: sdk.Int64(123),
                Enabled: true,
                Metadata: map[string]string{
                    "tempora": "aspernatur",
                    "voluptas": "voluptas",
                    "voluptas": "minima",
                },
                MonthlyQuota: sdk.Int64(123),
                ThrottlingQuota: sdk.Int64(123),
            },
        },
        AppConfig: map[string]string{
            "dolorum": "adipisci",
            "minus": "dolores",
            "blanditiis": "in",
        },
        Config: shared.GlobalConfig{
            AlertsEmails: []string{
                "admin@otoroshi.io",
                "admin@otoroshi.io",
            },
            AlertsWebhooks: []shared.Webhook{
                shared.Webhook{
                    Headers: map[string]string{
                        "temporibus": "ullam",
                        "adipisci": "cum",
                        "blanditiis": "quas",
                        "hic": "nesciunt",
                    },
                    URL: "http://www.google.com",
                },
                shared.Webhook{
                    Headers: map[string]string{
                        "corrupti": "pariatur",
                        "totam": "hic",
                        "exercitationem": "nobis",
                    },
                    URL: "http://www.google.com",
                },
            },
            AnalyticsWebhooks: []shared.Webhook{
                shared.Webhook{
                    Headers: map[string]string{
                        "sed": "reiciendis",
                        "explicabo": "asperiores",
                        "facilis": "voluptate",
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
                    "ab": "iste",
                    "dolore": "laborum",
                    "sed": "in",
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
                        "explicabo": "voluptas",
                        "unde": "architecto",
                        "suscipit": "sapiente",
                    },
                    Index: "a string value",
                    Password: "a string value",
                    Type: "a string value",
                    User: "a string value",
                },
                shared.ElasticConfig{
                    ClusterURI: "a string value",
                    Headers: map[string]string{
                        "illo": "reiciendis",
                        "perferendis": "corrupti",
                        "maiores": "incidunt",
                        "sed": "provident",
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
            },
            IPFiltering: shared.IPFiltering{
                Blacklist: []string{
                    "192.192.192.192",
                    "192.192.192.192",
                    "192.192.192.192",
                    "192.192.192.192",
                },
                Whitelist: []string{
                    "192.192.192.192",
                },
            },
            LimitConcurrentRequests: true,
            Lines: []string{
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
                    "quos": "voluptatibus",
                    "tempora": "tempora",
                    "voluptate": "reiciendis",
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
        },
        Date: types.MustTimeFromString("2017-07-21T17:32:28Z"),
        DateRaw: 123,
        ErrorTemplates: []shared.ImportExportErrorTemplates{
            shared.ImportExportErrorTemplates{
                Messages: map[string]string{
                    "non": "officiis",
                },
                ServiceID: "a string value",
                Template40x: "a string value",
                Template50x: "a string value",
                TemplateBuild: "a string value",
                TemplateMaintenance: "a string value",
            },
            shared.ImportExportErrorTemplates{
                Messages: map[string]string{
                    "facilis": "quaerat",
                    "incidunt": "ipsam",
                    "debitis": "rem",
                },
                ServiceID: "a string value",
                Template40x: "a string value",
                Template50x: "a string value",
                TemplateBuild: "a string value",
                TemplateMaintenance: "a string value",
            },
        },
        Label: "a string value",
        ServiceDescriptors: []shared.ImportExportServiceDescriptors{
            shared.ImportExportServiceDescriptors{
                Canary: &shared.Canary{
                    Enabled: true,
                    Root: "a string value",
                    Targets: []shared.Target{
                        shared.Target{
                            Host: "www.google.com",
                            Scheme: "a string value",
                        },
                        shared.Target{
                            Host: "www.google.com",
                            Scheme: "a string value",
                        },
                        shared.Target{
                            Host: "www.google.com",
                            Scheme: "a string value",
                        },
                        shared.Target{
                            Host: "www.google.com",
                            Scheme: "a string value",
                        },
                    },
                    Traffic: 123123,
                },
                AdditionalHeaders: map[string]string{
                    "veniam": "minima",
                    "recusandae": "reiciendis",
                    "nulla": "magni",
                },
                API: &shared.ExposedAPI{
                    ExposeAPI: true,
                    OpenAPIDescriptorURL: sdk.String("http://www.google.com"),
                },
                AuthConfigRef: sdk.String("a string value"),
                BuildMode: true,
                ChaosConfig: &shared.ChaosConfig{
                    BadResponsesFaultConfig: &shared.BadResponsesFaultConfig{
                        Ratio: 42.2,
                        Responses: []shared.BadResponse{
                            shared.BadResponse{
                                Body: "a string value",
                                Headers: map[string]string{
                                    "numquam": "veniam",
                                    "in": "officiis",
                                    "beatae": "laudantium",
                                    "exercitationem": "praesentium",
                                },
                                Status: 123123,
                            },
                        },
                    },
                    Enabled: true,
                    LargeRequestFaultConfig: &shared.LargeRequestFaultConfig{
                        AdditionalRequestSize: 123123,
                        Ratio: 42.2,
                    },
                    LargeResponseFaultConfig: &shared.LargeResponseFaultConfig{
                        AdditionalRequestSize: sdk.Int(123123),
                        Ratio: 42.2,
                    },
                    LatencyInjectionFaultConfig: &shared.LatencyInjectionFaultConfig{
                        From: 123123,
                        Ratio: 42.2,
                        To: 123123,
                    },
                },
                ClientConfig: &shared.ClientConfig{
                    BackoffFactor: 123123,
                    CallTimeout: 123123,
                    GlobalTimeout: 123123,
                    MaxErrors: 123123,
                    Retries: 123123,
                    RetryInitialDelay: 123123,
                    SampleInterval: 123123,
                    UseCircuitBreaker: true,
                },
                ClientValidatorRef: sdk.String("a string value"),
                Cors: &shared.CorsSettings{
                    AllowCredentials: true,
                    AllowHeaders: []string{
                        "a string value",
                        "a string value",
                        "a string value",
                    },
                    AllowMethods: []string{
                        "a string value",
                        "a string value",
                    },
                    AllowOrigin: "a string value",
                    Enabled: true,
                    ExcludedPatterns: []string{
                        "a string value",
                        "a string value",
                        "a string value",
                    },
                    ExposeHeaders: []string{
                        "a string value",
                        "a string value",
                        "a string value",
                    },
                    MaxAge: 123123,
                },
                Domain: "a string value",
                Enabled: true,
                EnforceSecureCommunication: true,
                Env: "a string value",
                ForceHTTPS: true,
                Groups: []string{
                    "a string value",
                    "a string value",
                    "a string value",
                },
                Gzip: &shared.Gzip{
                    BlackList: []string{
                        "a string value",
                        "a string value",
                        "a string value",
                        "a string value",
                    },
                    BufferSize: 123,
                    ChunkedThreshold: 123,
                    CompressionLevel: 123123,
                    Enabled: true,
                    ExcludedPatterns: []string{
                        "a string value",
                        "a string value",
                        "a string value",
                    },
                    WhiteList: []string{
                        "a string value",
                        "a string value",
                        "a string value",
                        "a string value",
                    },
                },
                HeadersVerification: map[string]string{
                    "dolorum": "nostrum",
                },
                HealthCheck: &shared.HealthCheck{
                    Enabled: true,
                    URL: sdk.String("http://www.google.com"),
                },
                ID: "110e8400-e29b-11d4-a716-446655440000",
                IPFiltering: &shared.IPFiltering{
                    Blacklist: []string{
                        "192.192.192.192",
                        "192.192.192.192",
                        "192.192.192.192",
                    },
                    Whitelist: []string{
                        "192.192.192.192",
                        "192.192.192.192",
                        "192.192.192.192",
                    },
                },
                JwtVerifier: &shared.ImportExportServiceDescriptorsJwtVerifier{},
                LocalHost: sdk.String("a string value"),
                LocalScheme: sdk.String("a string value"),
                MaintenanceMode: true,
                MatchingHeaders: map[string]string{
                    "accusamus": "tempora",
                    "atque": "fugit",
                    "ut": "fugiat",
                },
                MatchingRoot: sdk.String("a string value"),
                Metadata: map[string]string{
                    "culpa": "expedita",
                },
                Name: "a string value",
                OverrideHost: sdk.Bool(true),
                PrivateApp: true,
                PrivatePatterns: []string{
                    "a string value",
                    "a string value",
                },
                PublicPatterns: []string{
                    "a string value",
                },
                RedirectToLocal: sdk.Bool(true),
                Redirection: &shared.RedirectionSettings{
                    Code: 123123,
                    Enabled: true,
                    To: "a string value",
                },
                Root: "a string value",
                SecComExcludedPatterns: []string{
                    "a string value",
                    "a string value",
                },
                SecComSettings: &shared.ImportExportServiceDescriptorsSecComSettings{},
                SendOtoroshiHeadersBack: sdk.Bool(true),
                StatsdConfig: &shared.StatsdConfig{
                    Datadog: true,
                    Host: "a string value",
                    Port: 123123,
                },
                Subdomain: "a string value",
                Targets: []shared.Target{
                    shared.Target{
                        Host: "www.google.com",
                        Scheme: "a string value",
                    },
                    shared.Target{
                        Host: "www.google.com",
                        Scheme: "a string value",
                    },
                },
                TransformerRef: sdk.String("a string value"),
                UserFacing: sdk.Bool(true),
                XForwardedHeaders: sdk.Bool(true),
            },
        },
        ServiceGroups: []shared.ImportExportServiceGroups{
            shared.ImportExportServiceGroups{
                Description: sdk.String("a string value"),
                ID: "a string value",
                Name: "a string value",
            },
        },
        SimpleAdmins: []shared.ImportExportSimpleAdmins{
            shared.ImportExportSimpleAdmins{
                CreatedAt: 123,
                Label: "a string value",
                Password: "a string value",
                Username: "a string value",
            },
            shared.ImportExportSimpleAdmins{
                CreatedAt: 123,
                Label: "a string value",
                Password: "a string value",
                Username: "a string value",
            },
            shared.ImportExportSimpleAdmins{
                CreatedAt: 123,
                Label: "a string value",
                Password: "a string value",
                Username: "a string value",
            },
        },
        Stats: shared.ImportExportStats{
            Calls: 123,
            DataIn: 123,
            DataOut: 123,
        },
    }, operations.FullImportFromFileSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Done != nil {
        // handle response
    }
}
```
