# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [CreateBinding](#createbinding)
* [CreateCredential](#createcredential)
* [CreateNotification](#createnotification)
* [CreateService](#createservice)
* [DeleteBinding](#deletebinding)
* [DeleteCredential](#deletecredential)
* [DeleteService](#deleteservice)
* [FetchBinding](#fetchbinding)
* [FetchCredential](#fetchcredential)
* [FetchService](#fetchservice)
* [ListBinding](#listbinding)
* [ListCredential](#listcredential)
* [ListService](#listservice)
* [UpdateCredential](#updatecredential)
* [UpdateService](#updateservice)

## CreateBinding

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
    res, err := s.SDK.CreateBinding(ctx, operations.CreateBindingRequest{
        RequestBody: &operations.CreateBindingCreateBindingRequest{
            Address: "34785 Kenyon Hollow",
            BindingType: shared.BindingEnumBindingTypeEnumAlexa,
            CredentialSid: sdk.String("temporibus"),
            Endpoint: sdk.String("ab"),
            Identity: "quis",
            NotificationProtocolVersion: sdk.String("veritatis"),
            Tag: []string{
                "perferendis",
                "ipsam",
                "repellendus",
            },
        },
        ServiceSid: "sapiente",
    }, operations.CreateBindingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotifyV1ServiceBinding != nil {
        // handle response
    }
}
```

## CreateCredential

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
    res, err := s.SDK.CreateCredential(ctx, operations.CreateCredentialCreateCredentialRequest{
        APIKey: sdk.String("quo"),
        Certificate: sdk.String("odit"),
        FriendlyName: sdk.String("at"),
        PrivateKey: sdk.String("at"),
        Sandbox: sdk.Bool(false),
        Secret: sdk.String("maiores"),
        Type: shared.CredentialEnumPushServiceEnumApn,
    }, operations.CreateCredentialSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotifyV1Credential != nil {
        // handle response
    }
}
```

## CreateNotification

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
    res, err := s.SDK.CreateNotification(ctx, operations.CreateNotificationRequest{
        RequestBody: &operations.CreateNotificationCreateNotificationRequest{
            Action: sdk.String("quod"),
            Alexa: sdk.String("quod"),
            Apn: sdk.String("esse"),
            Body: sdk.String("totam"),
            Data: sdk.String("porro"),
            DeliveryCallbackURL: sdk.String("dolorum"),
            FacebookMessenger: sdk.String("dicta"),
            Fcm: sdk.String("nam"),
            Gcm: sdk.String("officia"),
            Identity: []string{
                "fugit",
                "deleniti",
                "hic",
            },
            Priority: shared.NotificationEnumPriorityEnumLow.ToPointer(),
            Segment: []string{
                "beatae",
                "commodi",
                "molestiae",
            },
            Sms: sdk.String("modi"),
            Sound: sdk.String("qui"),
            Tag: []string{
                "cum",
                "esse",
                "ipsum",
                "excepturi",
            },
            Title: sdk.String("Mr."),
            ToBinding: []string{
                "ad",
            },
            TTL: sdk.Int64(617636),
        },
        ServiceSid: "sed",
    }, operations.CreateNotificationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotifyV1ServiceNotification != nil {
        // handle response
    }
}
```

## CreateService

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
    res, err := s.SDK.CreateService(ctx, operations.CreateServiceCreateServiceRequest{
        AlexaSkillID: sdk.String("iste"),
        ApnCredentialSid: sdk.String("dolor"),
        DefaultAlexaNotificationProtocolVersion: sdk.String("natus"),
        DefaultApnNotificationProtocolVersion: sdk.String("laboriosam"),
        DefaultFcmNotificationProtocolVersion: sdk.String("hic"),
        DefaultGcmNotificationProtocolVersion: sdk.String("saepe"),
        DeliveryCallbackEnabled: sdk.Bool(false),
        DeliveryCallbackURL: sdk.String("fuga"),
        FacebookMessengerPageID: sdk.String("in"),
        FcmCredentialSid: sdk.String("corporis"),
        FriendlyName: sdk.String("iste"),
        GcmCredentialSid: sdk.String("iure"),
        LogEnabled: sdk.Bool(false),
        MessagingServiceSid: sdk.String("saepe"),
    }, operations.CreateServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotifyV1Service != nil {
        // handle response
    }
}
```

## DeleteBinding

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
    res, err := s.SDK.DeleteBinding(ctx, operations.DeleteBindingRequest{
        ServiceSid: "quidem",
        Sid: "architecto",
    }, operations.DeleteBindingSecurity{
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

## DeleteCredential

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
    res, err := s.SDK.DeleteCredential(ctx, operations.DeleteCredentialRequest{
        Sid: "ipsa",
    }, operations.DeleteCredentialSecurity{
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

## DeleteService

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
    res, err := s.SDK.DeleteService(ctx, operations.DeleteServiceRequest{
        Sid: "reiciendis",
    }, operations.DeleteServiceSecurity{
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

## FetchBinding

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
    res, err := s.SDK.FetchBinding(ctx, operations.FetchBindingRequest{
        ServiceSid: "est",
        Sid: "mollitia",
    }, operations.FetchBindingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotifyV1ServiceBinding != nil {
        // handle response
    }
}
```

## FetchCredential

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
    res, err := s.SDK.FetchCredential(ctx, operations.FetchCredentialRequest{
        Sid: "laborum",
    }, operations.FetchCredentialSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotifyV1Credential != nil {
        // handle response
    }
}
```

## FetchService

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
    res, err := s.SDK.FetchService(ctx, operations.FetchServiceRequest{
        Sid: "dolores",
    }, operations.FetchServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotifyV1Service != nil {
        // handle response
    }
}
```

## ListBinding

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListBinding(ctx, operations.ListBindingRequest{
        EndDate: types.MustDateFromString("2022-08-23"),
        Identity: []string{
            "nobis",
        },
        Page: sdk.Int64(315428),
        PageSize: sdk.Int64(607831),
        PageToken: sdk.String("nemo"),
        ServiceSid: "minima",
        StartDate: types.MustDateFromString("2022-12-03"),
        Tag: []string{
            "culpa",
            "doloribus",
        },
    }, operations.ListBindingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBindingResponse != nil {
        // handle response
    }
}
```

## ListCredential

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
    res, err := s.SDK.ListCredential(ctx, operations.ListCredentialRequest{
        Page: sdk.Int64(958950),
        PageSize: sdk.Int64(102044),
        PageToken: sdk.String("mollitia"),
    }, operations.ListCredentialSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCredentialResponse != nil {
        // handle response
    }
}
```

## ListService

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
    res, err := s.SDK.ListService(ctx, operations.ListServiceRequest{
        FriendlyName: sdk.String("dolorem"),
        Page: sdk.Int64(635059),
        PageSize: sdk.Int64(161309),
        PageToken: sdk.String("repellat"),
    }, operations.ListServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServiceResponse != nil {
        // handle response
    }
}
```

## UpdateCredential

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
    res, err := s.SDK.UpdateCredential(ctx, operations.UpdateCredentialRequest{
        RequestBody: &operations.UpdateCredentialUpdateCredentialRequest{
            APIKey: sdk.String("mollitia"),
            Certificate: sdk.String("occaecati"),
            FriendlyName: sdk.String("numquam"),
            PrivateKey: sdk.String("commodi"),
            Sandbox: sdk.Bool(false),
            Secret: sdk.String("quam"),
        },
        Sid: "molestiae",
    }, operations.UpdateCredentialSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotifyV1Credential != nil {
        // handle response
    }
}
```

## UpdateService

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
    res, err := s.SDK.UpdateService(ctx, operations.UpdateServiceRequest{
        RequestBody: &operations.UpdateServiceUpdateServiceRequest{
            AlexaSkillID: sdk.String("velit"),
            ApnCredentialSid: sdk.String("error"),
            DefaultAlexaNotificationProtocolVersion: sdk.String("quia"),
            DefaultApnNotificationProtocolVersion: sdk.String("quis"),
            DefaultFcmNotificationProtocolVersion: sdk.String("vitae"),
            DefaultGcmNotificationProtocolVersion: sdk.String("laborum"),
            DeliveryCallbackEnabled: sdk.Bool(false),
            DeliveryCallbackURL: sdk.String("animi"),
            FacebookMessengerPageID: sdk.String("enim"),
            FcmCredentialSid: sdk.String("odit"),
            FriendlyName: sdk.String("quo"),
            GcmCredentialSid: sdk.String("sequi"),
            LogEnabled: sdk.Bool(false),
            MessagingServiceSid: sdk.String("tenetur"),
        },
        Sid: "ipsam",
    }, operations.UpdateServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotifyV1Service != nil {
        // handle response
    }
}
```
