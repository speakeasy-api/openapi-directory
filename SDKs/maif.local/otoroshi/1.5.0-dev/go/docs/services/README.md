# Services

## Overview

Everything about Otoroshi service descriptors

### Available Operations

* [AllServices](#allservices) - Get all services
* [CreateService](#createservice) - Create a new service descriptor
* [CreateServiceTemplate](#createservicetemplate) - Create a service descriptor error template
* [DeleteService](#deleteservice) - Delete a service descriptor
* [DeleteServiceTemplate](#deleteservicetemplate) - Delete a service descriptor error template
* [PatchService](#patchservice) - Update a service descriptor with a diff
* [Service](#service) - Get a service descriptor
* [ServiceAddTarget](#serviceaddtarget) - Add a target to a service descriptor
* [ServiceDeleteTarget](#servicedeletetarget) - Delete a service descriptor target
* [ServiceGroupServices](#servicegroupservices) - Get all services descriptor for a group
* [ServiceTargets](#servicetargets) - Get a service descriptor targets
* [ServiceTemplate](#servicetemplate) - Get a service descriptor error template
* [UpdateService](#updateservice) - Update a service descriptor
* [UpdateServiceTargets](#updateservicetargets) - Update a service descriptor targets
* [UpdateServiceTemplate](#updateservicetemplate) - Update an error template to a service descriptor

## AllServices

Get all services

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
    res, err := s.Services.AllServices(ctx, operations.AllServicesSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Services != nil {
        // handle response
    }
}
```

## CreateService

Create a new service descriptor

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
    res, err := s.Services.CreateService(ctx, shared.Service{
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
            "assumenda": "ea",
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
                            "officiis": "officiis",
                            "accusamus": "natus",
                            "minima": "aspernatur",
                        },
                        Status: 123123,
                    },
                    shared.BadResponse{
                        Body: "a string value",
                        Headers: map[string]string{
                            "maiores": "corrupti",
                            "at": "error",
                        },
                        Status: 123123,
                    },
                    shared.BadResponse{
                        Body: "a string value",
                        Headers: map[string]string{
                            "suscipit": "repudiandae",
                            "atque": "atque",
                            "sunt": "recusandae",
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
            },
            ExposeHeaders: []string{
                "a string value",
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
            },
            WhiteList: []string{
                "a string value",
            },
        },
        HeadersVerification: map[string]string{
            "dolores": "enim",
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
        JwtVerifier: &shared.ServiceJwtVerifier{},
        LocalHost: sdk.String("a string value"),
        LocalScheme: sdk.String("a string value"),
        MaintenanceMode: true,
        MatchingHeaders: map[string]string{
            "molestias": "magnam",
            "saepe": "consequuntur",
            "occaecati": "officiis",
            "perspiciatis": "in",
        },
        MatchingRoot: sdk.String("a string value"),
        Metadata: map[string]string{
            "eveniet": "occaecati",
        },
        Name: "a string value",
        OverrideHost: sdk.Bool(true),
        PrivateApp: true,
        PrivatePatterns: []string{
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
            "a string value",
        },
        SecComSettings: &shared.ServiceSecComSettings{},
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
    }, operations.CreateServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Service != nil {
        // handle response
    }
}
```

## CreateServiceTemplate

Update a service descriptor targets

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Services.CreateServiceTemplate(ctx, operations.CreateServiceTemplateRequest{
        ErrorTemplate: &shared.ErrorTemplate{
            Messages: map[string]string{
                "error": "illo",
                "corporis": "quidem",
            },
            ServiceID: "a string value",
            Template40x: "a string value",
            Template50x: "a string value",
            TemplateBuild: "a string value",
            TemplateMaintenance: "a string value",
        },
        ServiceID: "eveniet",
    }, operations.CreateServiceTemplateSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ErrorTemplate != nil {
        // handle response
    }
}
```

## DeleteService

Delete a service descriptor

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
    res, err := s.Services.DeleteService(ctx, operations.DeleteServiceRequest{
        ServiceID: "non",
    }, operations.DeleteServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Deleted != nil {
        // handle response
    }
}
```

## DeleteServiceTemplate

Delete a service descriptor error template

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
    res, err := s.Services.DeleteServiceTemplate(ctx, operations.DeleteServiceTemplateRequest{
        ServiceID: "vero",
    }, operations.DeleteServiceTemplateSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Deleted != nil {
        // handle response
    }
}
```

## PatchService

Update a service descriptor with a diff

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Services.PatchService(ctx, operations.PatchServiceRequest{
        RequestBody: []shared.Patch{
            shared.Patch{
                Op: shared.PatchOpEnumRemove,
                Path: "a string value",
                Value: sdk.String("ipsa"),
            },
        },
        ServiceID: "totam",
    }, operations.PatchServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Service != nil {
        // handle response
    }
}
```

## Service

Get a service descriptor

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
    res, err := s.Services.Service(ctx, operations.ServiceRequest{
        ServiceID: "quae",
    }, operations.ServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Service != nil {
        // handle response
    }
}
```

## ServiceAddTarget

Add a target to a service descriptor

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Services.ServiceAddTarget(ctx, operations.ServiceAddTargetRequest{
        Target: &shared.Target{
            Host: "www.google.com",
            Scheme: "a string value",
        },
        ServiceID: "molestiae",
    }, operations.ServiceAddTargetSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Targets != nil {
        // handle response
    }
}
```

## ServiceDeleteTarget

Delete a service descriptor target

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
    res, err := s.Services.ServiceDeleteTarget(ctx, operations.ServiceDeleteTargetRequest{
        ServiceID: "eveniet",
    }, operations.ServiceDeleteTargetSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Targets != nil {
        // handle response
    }
}
```

## ServiceGroupServices

Get all services descriptor for a group

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
    res, err := s.Services.ServiceGroupServices(ctx, operations.ServiceGroupServicesRequest{
        ServiceGroupID: "qui",
    }, operations.ServiceGroupServicesSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKeys != nil {
        // handle response
    }
}
```

## ServiceTargets

Get a service descriptor targets

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
    res, err := s.Services.ServiceTargets(ctx, operations.ServiceTargetsRequest{
        ServiceID: "cum",
    }, operations.ServiceTargetsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Targets != nil {
        // handle response
    }
}
```

## ServiceTemplate

Get a service descriptor error template

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
    res, err := s.Services.ServiceTemplate(ctx, operations.ServiceTemplateRequest{
        ServiceID: "iure",
    }, operations.ServiceTemplateSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ErrorTemplate != nil {
        // handle response
    }
}
```

## UpdateService

Update a service descriptor

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Services.UpdateService(ctx, operations.UpdateServiceRequest{
        Service: &shared.Service{
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
                "laborum": "distinctio",
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
                                "aliquam": "ad",
                                "repellat": "alias",
                                "corporis": "perspiciatis",
                            },
                            Status: 123123,
                        },
                        shared.BadResponse{
                            Body: "a string value",
                            Headers: map[string]string{
                                "mollitia": "voluptas",
                                "alias": "maiores",
                            },
                            Status: 123123,
                        },
                        shared.BadResponse{
                            Body: "a string value",
                            Headers: map[string]string{
                                "dolores": "id",
                                "minima": "dolore",
                                "dolorum": "nesciunt",
                                "quae": "recusandae",
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
                },
                WhiteList: []string{
                    "a string value",
                    "a string value",
                    "a string value",
                    "a string value",
                },
            },
            HeadersVerification: map[string]string{
                "eum": "nemo",
                "recusandae": "esse",
                "provident": "quis",
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
                    "192.192.192.192",
                    "192.192.192.192",
                    "192.192.192.192",
                },
            },
            JwtVerifier: &shared.ServiceJwtVerifier{},
            LocalHost: sdk.String("a string value"),
            LocalScheme: sdk.String("a string value"),
            MaintenanceMode: true,
            MatchingHeaders: map[string]string{
                "aspernatur": "ullam",
                "quasi": "animi",
                "nostrum": "mollitia",
            },
            MatchingRoot: sdk.String("a string value"),
            Metadata: map[string]string{
                "possimus": "animi",
                "ex": "aliquid",
                "accusantium": "repellat",
            },
            Name: "a string value",
            OverrideHost: sdk.Bool(true),
            PrivateApp: true,
            PrivatePatterns: []string{
                "a string value",
                "a string value",
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
            },
            SecComSettings: &shared.ServiceSecComSettings{},
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
        ServiceID: "earum",
    }, operations.UpdateServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Service != nil {
        // handle response
    }
}
```

## UpdateServiceTargets

Update a service descriptor targets

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Services.UpdateServiceTargets(ctx, operations.UpdateServiceTargetsRequest{
        RequestBody: []shared.Patch{
            shared.Patch{
                Op: shared.PatchOpEnumCopy,
                Path: "a string value",
                Value: sdk.String("placeat"),
            },
            shared.Patch{
                Op: shared.PatchOpEnumReplace,
                Path: "a string value",
                Value: sdk.String("voluptatibus"),
            },
            shared.Patch{
                Op: shared.PatchOpEnumRemove,
                Path: "a string value",
                Value: sdk.String("officiis"),
            },
        },
        ServiceID: "sapiente",
    }, operations.UpdateServiceTargetsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Targets != nil {
        // handle response
    }
}
```

## UpdateServiceTemplate

Update an error template to a service descriptor

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Services.UpdateServiceTemplate(ctx, operations.UpdateServiceTemplateRequest{
        ErrorTemplate: &shared.ErrorTemplate{
            Messages: map[string]string{
                "vitae": "rerum",
                "tempora": "quis",
                "inventore": "fugit",
                "cumque": "quae",
            },
            ServiceID: "a string value",
            Template40x: "a string value",
            Template50x: "a string value",
            TemplateBuild: "a string value",
            TemplateMaintenance: "a string value",
        },
        ServiceID: "perferendis",
    }, operations.UpdateServiceTemplateSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ErrorTemplate != nil {
        // handle response
    }
}
```
