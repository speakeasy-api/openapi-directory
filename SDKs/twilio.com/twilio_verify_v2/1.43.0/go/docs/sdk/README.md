# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [CreateAccessToken](#createaccesstoken) - Create a new enrollment Access Token for the Entity
* [CreateBucket](#createbucket) - Create a new Bucket for a Rate Limit
* [CreateChallenge](#createchallenge) - Create a new Challenge for the Factor
* [CreateEntity](#createentity) - Create a new Entity for the Service
* [CreateMessagingConfiguration](#createmessagingconfiguration) - Create a new MessagingConfiguration for a service.
* [CreateNewFactor](#createnewfactor) - Create a new Factor for the Entity
* [CreateNotification](#createnotification) - Create a new Notification for the corresponding Challenge
* [CreateRateLimit](#createratelimit) - Create a new Rate Limit for a Service
* [CreateSafelist](#createsafelist) - Add a new phone number to SafeList.
* [CreateService](#createservice) - Create a new Verification Service.
* [CreateVerification](#createverification) - Create a new Verification using a Service
* [CreateVerificationCheck](#createverificationcheck) - challenge a specific Verification Check.
* [CreateWebhook](#createwebhook) - Create a new Webhook for the Service
* [DeleteBucket](#deletebucket) - Delete a specific Bucket.
* [DeleteEntity](#deleteentity) - Delete a specific Entity.
* [DeleteFactor](#deletefactor) - Delete a specific Factor.
* [DeleteMessagingConfiguration](#deletemessagingconfiguration) - Delete a specific MessagingConfiguration.
* [DeleteRateLimit](#deleteratelimit) - Delete a specific Rate Limit.
* [DeleteSafelist](#deletesafelist) - Remove a phone number from SafeList.
* [DeleteService](#deleteservice) - Delete a specific Verification Service Instance.
* [DeleteWebhook](#deletewebhook) - Delete a specific Webhook.
* [FetchAccessToken](#fetchaccesstoken) - Fetch an Access Token for the Entity
* [FetchBucket](#fetchbucket) - Fetch a specific Bucket.
* [FetchChallenge](#fetchchallenge) - Fetch a specific Challenge.
* [FetchEntity](#fetchentity) - Fetch a specific Entity.
* [FetchFactor](#fetchfactor) - Fetch a specific Factor.
* [FetchForm](#fetchform) - Fetch the forms for a specific Form Type.
* [FetchMessagingConfiguration](#fetchmessagingconfiguration) - Fetch a specific MessagingConfiguration.
* [FetchRateLimit](#fetchratelimit) - Fetch a specific Rate Limit.
* [FetchSafelist](#fetchsafelist) - Check if a phone number exists in SafeList.
* [FetchService](#fetchservice) - Fetch specific Verification Service Instance.
* [FetchVerification](#fetchverification) - Fetch a specific Verification
* [FetchVerificationAttempt](#fetchverificationattempt) - Fetch a specific verification attempt.
* [FetchVerificationAttemptsSummary](#fetchverificationattemptssummary) - Get a summary of how many attempts were made and how many were converted.
* [FetchWebhook](#fetchwebhook) - Fetch a specific Webhook.
* [ListBucket](#listbucket) - Retrieve a list of all Buckets for a Rate Limit.
* [ListChallenge](#listchallenge) - Retrieve a list of all Challenges for a Factor.
* [ListEntity](#listentity) - Retrieve a list of all Entities for a Service.
* [ListFactor](#listfactor) - Retrieve a list of all Factors for an Entity.
* [ListMessagingConfiguration](#listmessagingconfiguration) - Retrieve a list of all Messaging Configurations for a Service.
* [ListRateLimit](#listratelimit) - Retrieve a list of all Rate Limits for a service.
* [ListService](#listservice) - Retrieve a list of all Verification Services for an account.
* [ListVerificationAttempt](#listverificationattempt) - List all the verification attempts for a given Account.
* [ListVerificationTemplate](#listverificationtemplate) - List all the available templates for a given Account.
* [ListWebhook](#listwebhook) - Retrieve a list of all Webhooks for a Service.
* [UpdateBucket](#updatebucket) - Update a specific Bucket.
* [UpdateChallenge](#updatechallenge) - Verify a specific Challenge.
* [UpdateFactor](#updatefactor) - Update a specific Factor. This endpoint can be used to Verify a Factor if passed an `AuthPayload` param.
* [UpdateMessagingConfiguration](#updatemessagingconfiguration) - Update a specific MessagingConfiguration
* [UpdateRateLimit](#updateratelimit) - Update a specific Rate Limit.
* [UpdateService](#updateservice) - Update a specific Verification Service.
* [UpdateVerification](#updateverification) - Update a Verification status
* [UpdateWebhook](#updatewebhook)

## CreateAccessToken

Create a new enrollment Access Token for the Entity

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
    res, err := s.SDK.CreateAccessToken(ctx, operations.CreateAccessTokenRequest{
        RequestBody: &operations.CreateAccessTokenCreateAccessTokenRequest{
            FactorFriendlyName: sdk.String("unde"),
            FactorType: shared.AccessTokenEnumFactorTypesEnumPush,
            Identity: "nulla",
            TTL: sdk.Int64(544883),
        },
        ServiceSid: "illum",
    }, operations.CreateAccessTokenSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2ServiceAccessToken != nil {
        // handle response
    }
}
```

## CreateBucket

Create a new Bucket for a Rate Limit

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
    res, err := s.SDK.CreateBucket(ctx, operations.CreateBucketRequest{
        RateLimitSid: "vel",
        RequestBody: &operations.CreateBucketCreateBucketRequest{
            Interval: 623564,
            Max: 645894,
        },
        ServiceSid: "suscipit",
    }, operations.CreateBucketSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2ServiceRateLimitBucket != nil {
        // handle response
    }
}
```

## CreateChallenge

Create a new Challenge for the Factor

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
    res, err := s.SDK.CreateChallenge(ctx, operations.CreateChallengeRequest{
        Identity: "iure",
        RequestBody: &operations.CreateChallengeCreateChallengeRequest{
            AuthPayload: sdk.String("magnam"),
            DetailsFields: []interface{}{
                "ipsa",
                "delectus",
                "tempora",
                "suscipit",
            },
            DetailsMessage: sdk.String("molestiae"),
            ExpirationDate: types.MustTimeFromString("2020-07-25T16:12:20.938Z"),
            FactorSid: "voluptatum",
            HiddenDetails: sdk.String("iusto"),
        },
        ServiceSid: "excepturi",
    }, operations.CreateChallengeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2ServiceEntityChallenge != nil {
        // handle response
    }
}
```

## CreateEntity

Create a new Entity for the Service

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
    res, err := s.SDK.CreateEntity(ctx, operations.CreateEntityRequest{
        RequestBody: &operations.CreateEntityCreateEntityRequest{
            Identity: "nisi",
        },
        ServiceSid: "recusandae",
    }, operations.CreateEntitySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2ServiceEntity != nil {
        // handle response
    }
}
```

## CreateMessagingConfiguration

Create a new MessagingConfiguration for a service.

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
    res, err := s.SDK.CreateMessagingConfiguration(ctx, operations.CreateMessagingConfigurationRequest{
        RequestBody: &operations.CreateMessagingConfigurationCreateMessagingConfigurationRequest{
            Country: "Sri Lanka",
            MessagingServiceSid: "ab",
        },
        ServiceSid: "quis",
    }, operations.CreateMessagingConfigurationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2ServiceMessagingConfiguration != nil {
        // handle response
    }
}
```

## CreateNewFactor

Create a new Factor for the Entity

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
    res, err := s.SDK.CreateNewFactor(ctx, operations.CreateNewFactorRequest{
        Identity: "veritatis",
        RequestBody: &operations.CreateNewFactorCreateNewFactorRequest{
            BindingAlg: sdk.String("deserunt"),
            BindingPublicKey: sdk.String("perferendis"),
            BindingSecret: sdk.String("ipsam"),
            ConfigAlg: shared.NewFactorEnumTotpAlgorithmsEnumSha512.ToPointer(),
            ConfigAppID: sdk.String("sapiente"),
            ConfigCodeLength: sdk.Int64(778157),
            ConfigNotificationPlatform: shared.NewFactorEnumNotificationPlatformsEnumApn.ToPointer(),
            ConfigNotificationToken: sdk.String("at"),
            ConfigSDKVersion: sdk.String("at"),
            ConfigSkew: sdk.Int64(978619),
            ConfigTimeStep: sdk.Int64(473608),
            FactorType: shared.NewFactorEnumFactorTypesEnumTotp,
            FriendlyName: "quod",
            Metadata: sdk.String("esse"),
        },
        ServiceSid: "totam",
    }, operations.CreateNewFactorSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2ServiceEntityNewFactor != nil {
        // handle response
    }
}
```

## CreateNotification

Create a new Notification for the corresponding Challenge

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
    res, err := s.SDK.CreateNotification(ctx, operations.CreateNotificationRequest{
        ChallengeSid: "porro",
        Identity: "dolorum",
        RequestBody: &operations.CreateNotificationCreateNotificationRequest{
            TTL: sdk.Int64(118274),
        },
        ServiceSid: "nam",
    }, operations.CreateNotificationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2ServiceEntityChallengeNotification != nil {
        // handle response
    }
}
```

## CreateRateLimit

Create a new Rate Limit for a Service

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
    res, err := s.SDK.CreateRateLimit(ctx, operations.CreateRateLimitRequest{
        RequestBody: &operations.CreateRateLimitCreateRateLimitRequest{
            Description: sdk.String("officia"),
            UniqueName: "occaecati",
        },
        ServiceSid: "fugit",
    }, operations.CreateRateLimitSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2ServiceRateLimit != nil {
        // handle response
    }
}
```

## CreateSafelist

Add a new phone number to SafeList.

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
    res, err := s.SDK.CreateSafelist(ctx, operations.CreateSafelistCreateSafelistRequest{
        PhoneNumber: "deleniti",
    }, operations.CreateSafelistSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2Safelist != nil {
        // handle response
    }
}
```

## CreateService

Create a new Verification Service.

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
        CodeLength: sdk.Int64(944669),
        CustomCodeEnabled: sdk.Bool(false),
        DefaultTemplateSid: sdk.String("optio"),
        DoNotShareWarningEnabled: sdk.Bool(false),
        DtmfInputRequired: sdk.Bool(false),
        FriendlyName: "totam",
        LookupEnabled: sdk.Bool(false),
        Psd2Enabled: sdk.Bool(false),
        PushApnCredentialSid: sdk.String("beatae"),
        PushFcmCredentialSid: sdk.String("commodi"),
        PushIncludeDate: sdk.Bool(false),
        SkipSmsToLandlines: sdk.Bool(false),
        TotpCodeLength: sdk.Int64(473600),
        TotpIssuer: sdk.String("modi"),
        TotpSkew: sdk.Int64(186332),
        TotpTimeStep: sdk.Int64(774234),
        TtsName: sdk.String("cum"),
    }, operations.CreateServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2Service != nil {
        // handle response
    }
}
```

## CreateVerification

Create a new Verification using a Service

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
    res, err := s.SDK.CreateVerification(ctx, operations.CreateVerificationRequest{
        RequestBody: &operations.CreateVerificationCreateVerificationRequest{
            Amount: sdk.String("esse"),
            AppHash: sdk.String("ipsum"),
            Channel: "excepturi",
            ChannelConfiguration: sdk.String("aspernatur"),
            CustomCode: sdk.String("perferendis"),
            CustomFriendlyName: sdk.String("ad"),
            CustomMessage: sdk.String("natus"),
            DeviceIP: sdk.String("sed"),
            Locale: sdk.String("iste"),
            Payee: sdk.String("dolor"),
            RateLimits: sdk.String("natus"),
            SendDigits: sdk.String("laboriosam"),
            TemplateCustomSubstitutions: sdk.String("hic"),
            TemplateSid: sdk.String("saepe"),
            To: "fuga",
        },
        ServiceSid: "in",
    }, operations.CreateVerificationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2ServiceVerification != nil {
        // handle response
    }
}
```

## CreateVerificationCheck

challenge a specific Verification Check.

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
    res, err := s.SDK.CreateVerificationCheck(ctx, operations.CreateVerificationCheckRequest{
        RequestBody: &operations.CreateVerificationCheckCreateVerificationCheckRequest{
            Amount: sdk.String("corporis"),
            Code: sdk.String("iste"),
            Payee: sdk.String("iure"),
            To: sdk.String("saepe"),
            VerificationSid: sdk.String("quidem"),
        },
        ServiceSid: "architecto",
    }, operations.CreateVerificationCheckSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2ServiceVerificationCheck != nil {
        // handle response
    }
}
```

## CreateWebhook

Create a new Webhook for the Service

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
    res, err := s.SDK.CreateWebhook(ctx, operations.CreateWebhookRequest{
        RequestBody: &operations.CreateWebhookCreateWebhookRequest{
            EventTypes: []string{
                "reiciendis",
            },
            FriendlyName: "est",
            Status: shared.WebhookEnumStatusEnumDisabled.ToPointer(),
            Version: shared.WebhookEnumVersionEnumV2.ToPointer(),
            WebhookURL: "dolores",
        },
        ServiceSid: "dolorem",
    }, operations.CreateWebhookSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2ServiceWebhook != nil {
        // handle response
    }
}
```

## DeleteBucket

Delete a specific Bucket.

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
    res, err := s.SDK.DeleteBucket(ctx, operations.DeleteBucketRequest{
        RateLimitSid: "corporis",
        ServiceSid: "explicabo",
        Sid: "nobis",
    }, operations.DeleteBucketSecurity{
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

## DeleteEntity

Delete a specific Entity.

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
    res, err := s.SDK.DeleteEntity(ctx, operations.DeleteEntityRequest{
        Identity: "enim",
        ServiceSid: "omnis",
    }, operations.DeleteEntitySecurity{
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

## DeleteFactor

Delete a specific Factor.

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
    res, err := s.SDK.DeleteFactor(ctx, operations.DeleteFactorRequest{
        Identity: "nemo",
        ServiceSid: "minima",
        Sid: "excepturi",
    }, operations.DeleteFactorSecurity{
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

## DeleteMessagingConfiguration

Delete a specific MessagingConfiguration.

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
    res, err := s.SDK.DeleteMessagingConfiguration(ctx, operations.DeleteMessagingConfigurationRequest{
        Country: "Argentina",
        ServiceSid: "iure",
    }, operations.DeleteMessagingConfigurationSecurity{
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

## DeleteRateLimit

Delete a specific Rate Limit.

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
    res, err := s.SDK.DeleteRateLimit(ctx, operations.DeleteRateLimitRequest{
        ServiceSid: "culpa",
        Sid: "doloribus",
    }, operations.DeleteRateLimitSecurity{
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

## DeleteSafelist

Remove a phone number from SafeList.

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
    res, err := s.SDK.DeleteSafelist(ctx, operations.DeleteSafelistRequest{
        PhoneNumber: "sapiente",
    }, operations.DeleteSafelistSecurity{
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

Delete a specific Verification Service Instance.

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
        Sid: "architecto",
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

## DeleteWebhook

Delete a specific Webhook.

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
    res, err := s.SDK.DeleteWebhook(ctx, operations.DeleteWebhookRequest{
        ServiceSid: "mollitia",
        Sid: "dolorem",
    }, operations.DeleteWebhookSecurity{
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

## FetchAccessToken

Fetch an Access Token for the Entity

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
    res, err := s.SDK.FetchAccessToken(ctx, operations.FetchAccessTokenRequest{
        ServiceSid: "culpa",
        Sid: "consequuntur",
    }, operations.FetchAccessTokenSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2ServiceAccessToken != nil {
        // handle response
    }
}
```

## FetchBucket

Fetch a specific Bucket.

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
    res, err := s.SDK.FetchBucket(ctx, operations.FetchBucketRequest{
        RateLimitSid: "repellat",
        ServiceSid: "mollitia",
        Sid: "occaecati",
    }, operations.FetchBucketSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2ServiceRateLimitBucket != nil {
        // handle response
    }
}
```

## FetchChallenge

Fetch a specific Challenge.

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
    res, err := s.SDK.FetchChallenge(ctx, operations.FetchChallengeRequest{
        Identity: "numquam",
        ServiceSid: "commodi",
        Sid: "quam",
    }, operations.FetchChallengeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2ServiceEntityChallenge != nil {
        // handle response
    }
}
```

## FetchEntity

Fetch a specific Entity.

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
    res, err := s.SDK.FetchEntity(ctx, operations.FetchEntityRequest{
        Identity: "molestiae",
        ServiceSid: "velit",
    }, operations.FetchEntitySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2ServiceEntity != nil {
        // handle response
    }
}
```

## FetchFactor

Fetch a specific Factor.

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
    res, err := s.SDK.FetchFactor(ctx, operations.FetchFactorRequest{
        Identity: "error",
        ServiceSid: "quia",
        Sid: "quis",
    }, operations.FetchFactorSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2ServiceEntityFactor != nil {
        // handle response
    }
}
```

## FetchForm

Fetch the forms for a specific Form Type.

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
    res, err := s.SDK.FetchForm(ctx, operations.FetchFormRequest{
        FormType: shared.FormEnumFormTypesEnumFormPush,
    }, operations.FetchFormSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2Form != nil {
        // handle response
    }
}
```

## FetchMessagingConfiguration

Fetch a specific MessagingConfiguration.

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
    res, err := s.SDK.FetchMessagingConfiguration(ctx, operations.FetchMessagingConfigurationRequest{
        Country: "Bosnia and Herzegovina",
        ServiceSid: "laborum",
    }, operations.FetchMessagingConfigurationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2ServiceMessagingConfiguration != nil {
        // handle response
    }
}
```

## FetchRateLimit

Fetch a specific Rate Limit.

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
    res, err := s.SDK.FetchRateLimit(ctx, operations.FetchRateLimitRequest{
        ServiceSid: "animi",
        Sid: "enim",
    }, operations.FetchRateLimitSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2ServiceRateLimit != nil {
        // handle response
    }
}
```

## FetchSafelist

Check if a phone number exists in SafeList.

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
    res, err := s.SDK.FetchSafelist(ctx, operations.FetchSafelistRequest{
        PhoneNumber: "odit",
    }, operations.FetchSafelistSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2Safelist != nil {
        // handle response
    }
}
```

## FetchService

Fetch specific Verification Service Instance.

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
        Sid: "quo",
    }, operations.FetchServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2Service != nil {
        // handle response
    }
}
```

## FetchVerification

Fetch a specific Verification

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
    res, err := s.SDK.FetchVerification(ctx, operations.FetchVerificationRequest{
        ServiceSid: "sequi",
        Sid: "tenetur",
    }, operations.FetchVerificationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2ServiceVerification != nil {
        // handle response
    }
}
```

## FetchVerificationAttempt

Fetch a specific verification attempt.

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
    res, err := s.SDK.FetchVerificationAttempt(ctx, operations.FetchVerificationAttemptRequest{
        Sid: "ipsam",
    }, operations.FetchVerificationAttemptSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2VerificationAttempt != nil {
        // handle response
    }
}
```

## FetchVerificationAttemptsSummary

Get a summary of how many attempts were made and how many were converted.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchVerificationAttemptsSummary(ctx, operations.FetchVerificationAttemptsSummaryRequest{
        Channel: shared.VerificationAttemptsSummaryEnumChannelsEnumEmail.ToPointer(),
        Country: sdk.String("possimus"),
        DateCreatedAfter: types.MustTimeFromString("2022-11-26T13:23:33.410Z"),
        DateCreatedBefore: types.MustTimeFromString("2021-04-29T07:12:18.684Z"),
        DestinationPrefix: sdk.String("laborum"),
        VerifyServiceSid: sdk.String("quasi"),
    }, operations.FetchVerificationAttemptsSummarySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2VerificationAttemptsSummary != nil {
        // handle response
    }
}
```

## FetchWebhook

Fetch a specific Webhook.

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
    res, err := s.SDK.FetchWebhook(ctx, operations.FetchWebhookRequest{
        ServiceSid: "reiciendis",
        Sid: "voluptatibus",
    }, operations.FetchWebhookSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2ServiceWebhook != nil {
        // handle response
    }
}
```

## ListBucket

Retrieve a list of all Buckets for a Rate Limit.

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
    res, err := s.SDK.ListBucket(ctx, operations.ListBucketRequest{
        Page: sdk.Int64(878194),
        PageSize: sdk.Int64(468651),
        PageToken: sdk.String("praesentium"),
        RateLimitSid: "voluptatibus",
        ServiceSid: "ipsa",
    }, operations.ListBucketSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBucketResponse != nil {
        // handle response
    }
}
```

## ListChallenge

Retrieve a list of all Challenges for a Factor.

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
    res, err := s.SDK.ListChallenge(ctx, operations.ListChallengeRequest{
        FactorSid: sdk.String("omnis"),
        Identity: "voluptate",
        Order: shared.ChallengeEnumListOrdersEnumDesc.ToPointer(),
        Page: sdk.Int64(19987),
        PageSize: sdk.Int64(39187),
        PageToken: sdk.String("reprehenderit"),
        ServiceSid: "ut",
        Status: shared.ChallengeEnumChallengeStatusesEnumDenied.ToPointer(),
    }, operations.ListChallengeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListChallengeResponse != nil {
        // handle response
    }
}
```

## ListEntity

Retrieve a list of all Entities for a Service.

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
    res, err := s.SDK.ListEntity(ctx, operations.ListEntityRequest{
        Page: sdk.Int64(120196),
        PageSize: sdk.Int64(359444),
        PageToken: sdk.String("dolore"),
        ServiceSid: "iusto",
    }, operations.ListEntitySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEntityResponse != nil {
        // handle response
    }
}
```

## ListFactor

Retrieve a list of all Factors for an Entity.

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
    res, err := s.SDK.ListFactor(ctx, operations.ListFactorRequest{
        Identity: "dicta",
        Page: sdk.Int64(688661),
        PageSize: sdk.Int64(317983),
        PageToken: sdk.String("accusamus"),
        ServiceSid: "commodi",
    }, operations.ListFactorSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFactorResponse != nil {
        // handle response
    }
}
```

## ListMessagingConfiguration

Retrieve a list of all Messaging Configurations for a Service.

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
    res, err := s.SDK.ListMessagingConfiguration(ctx, operations.ListMessagingConfigurationRequest{
        Page: sdk.Int64(918236),
        PageSize: sdk.Int64(64147),
        PageToken: sdk.String("ipsum"),
        ServiceSid: "quidem",
    }, operations.ListMessagingConfigurationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMessagingConfigurationResponse != nil {
        // handle response
    }
}
```

## ListRateLimit

Retrieve a list of all Rate Limits for a service.

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
    res, err := s.SDK.ListRateLimit(ctx, operations.ListRateLimitRequest{
        Page: sdk.Int64(565189),
        PageSize: sdk.Int64(566602),
        PageToken: sdk.String("pariatur"),
        ServiceSid: "modi",
    }, operations.ListRateLimitSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRateLimitResponse != nil {
        // handle response
    }
}
```

## ListService

Retrieve a list of all Verification Services for an account.

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
        Page: sdk.Int64(508969),
        PageSize: sdk.Int64(523248),
        PageToken: sdk.String("voluptates"),
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

## ListVerificationAttempt

List all the verification attempts for a given Account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListVerificationAttempt(ctx, operations.ListVerificationAttemptRequest{
        Channel: shared.VerificationAttemptEnumChannelsEnumSms.ToPointer(),
        ChannelDataTo: sdk.String("repudiandae"),
        Country: sdk.String("sint"),
        DateCreatedAfter: types.MustTimeFromString("2022-01-26T19:21:55.034Z"),
        DateCreatedBefore: types.MustTimeFromString("2022-09-06T17:20:08.756Z"),
        Page: sdk.Int64(9356),
        PageSize: sdk.Int64(667411),
        PageToken: sdk.String("quibusdam"),
        Status: shared.VerificationAttemptEnumConversionStatusEnumConverted.ToPointer(),
        VerificationSid: sdk.String("deserunt"),
        VerifyServiceSid: sdk.String("distinctio"),
    }, operations.ListVerificationAttemptSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVerificationAttemptResponse != nil {
        // handle response
    }
}
```

## ListVerificationTemplate

List all the available templates for a given Account.

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
    res, err := s.SDK.ListVerificationTemplate(ctx, operations.ListVerificationTemplateRequest{
        FriendlyName: sdk.String("quibusdam"),
        Page: sdk.Int64(289406),
        PageSize: sdk.Int64(264730),
        PageToken: sdk.String("qui"),
    }, operations.ListVerificationTemplateSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVerificationTemplateResponse != nil {
        // handle response
    }
}
```

## ListWebhook

Retrieve a list of all Webhooks for a Service.

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
    res, err := s.SDK.ListWebhook(ctx, operations.ListWebhookRequest{
        Page: sdk.Int64(397821),
        PageSize: sdk.Int64(586513),
        PageToken: sdk.String("quos"),
        ServiceSid: "perferendis",
    }, operations.ListWebhookSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWebhookResponse != nil {
        // handle response
    }
}
```

## UpdateBucket

Update a specific Bucket.

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
    res, err := s.SDK.UpdateBucket(ctx, operations.UpdateBucketRequest{
        RateLimitSid: "magni",
        RequestBody: &operations.UpdateBucketUpdateBucketRequest{
            Interval: sdk.Int64(828940),
            Max: sdk.Int64(369808),
        },
        ServiceSid: "alias",
        Sid: "fugit",
    }, operations.UpdateBucketSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2ServiceRateLimitBucket != nil {
        // handle response
    }
}
```

## UpdateChallenge

Verify a specific Challenge.

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
    res, err := s.SDK.UpdateChallenge(ctx, operations.UpdateChallengeRequest{
        Identity: "dolorum",
        RequestBody: &operations.UpdateChallengeUpdateChallengeRequest{
            AuthPayload: sdk.String("excepturi"),
            Metadata: sdk.String("tempora"),
        },
        ServiceSid: "facilis",
        Sid: "tempore",
    }, operations.UpdateChallengeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2ServiceEntityChallenge != nil {
        // handle response
    }
}
```

## UpdateFactor

Update a specific Factor. This endpoint can be used to Verify a Factor if passed an `AuthPayload` param.

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
    res, err := s.SDK.UpdateFactor(ctx, operations.UpdateFactorRequest{
        Identity: "labore",
        RequestBody: &operations.UpdateFactorUpdateFactorRequest{
            AuthPayload: sdk.String("delectus"),
            ConfigAlg: shared.FactorEnumTotpAlgorithmsEnumSha256.ToPointer(),
            ConfigCodeLength: sdk.Int64(248753),
            ConfigNotificationPlatform: sdk.String("eligendi"),
            ConfigNotificationToken: sdk.String("sint"),
            ConfigSDKVersion: sdk.String("aliquid"),
            ConfigSkew: sdk.Int64(592042),
            ConfigTimeStep: sdk.Int64(896039),
            FriendlyName: sdk.String("sint"),
        },
        ServiceSid: "officia",
        Sid: "dolor",
    }, operations.UpdateFactorSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2ServiceEntityFactor != nil {
        // handle response
    }
}
```

## UpdateMessagingConfiguration

Update a specific MessagingConfiguration

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
    res, err := s.SDK.UpdateMessagingConfiguration(ctx, operations.UpdateMessagingConfigurationRequest{
        Country: "Togo",
        RequestBody: &operations.UpdateMessagingConfigurationUpdateMessagingConfigurationRequest{
            MessagingServiceSid: "a",
        },
        ServiceSid: "dolorum",
    }, operations.UpdateMessagingConfigurationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2ServiceMessagingConfiguration != nil {
        // handle response
    }
}
```

## UpdateRateLimit

Update a specific Rate Limit.

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
    res, err := s.SDK.UpdateRateLimit(ctx, operations.UpdateRateLimitRequest{
        RequestBody: &operations.UpdateRateLimitUpdateRateLimitRequest{
            Description: sdk.String("in"),
        },
        ServiceSid: "in",
        Sid: "illum",
    }, operations.UpdateRateLimitSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2ServiceRateLimit != nil {
        // handle response
    }
}
```

## UpdateService

Update a specific Verification Service.

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
            CodeLength: sdk.Int64(978571),
            CustomCodeEnabled: sdk.Bool(false),
            DefaultTemplateSid: sdk.String("rerum"),
            DoNotShareWarningEnabled: sdk.Bool(false),
            DtmfInputRequired: sdk.Bool(false),
            FriendlyName: sdk.String("dicta"),
            LookupEnabled: sdk.Bool(false),
            Psd2Enabled: sdk.Bool(false),
            PushApnCredentialSid: sdk.String("magnam"),
            PushFcmCredentialSid: sdk.String("cumque"),
            PushIncludeDate: sdk.Bool(false),
            SkipSmsToLandlines: sdk.Bool(false),
            TotpCodeLength: sdk.Int64(813798),
            TotpIssuer: sdk.String("ea"),
            TotpSkew: sdk.Int64(396506),
            TotpTimeStep: sdk.Int64(675439),
            TtsName: sdk.String("accusamus"),
        },
        Sid: "non",
    }, operations.UpdateServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2Service != nil {
        // handle response
    }
}
```

## UpdateVerification

Update a Verification status

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
    res, err := s.SDK.UpdateVerification(ctx, operations.UpdateVerificationRequest{
        RequestBody: &operations.UpdateVerificationUpdateVerificationRequest{
            Status: shared.VerificationEnumStatusEnumApproved,
        },
        ServiceSid: "enim",
        Sid: "accusamus",
    }, operations.UpdateVerificationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2ServiceVerification != nil {
        // handle response
    }
}
```

## UpdateWebhook

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
    res, err := s.SDK.UpdateWebhook(ctx, operations.UpdateWebhookRequest{
        RequestBody: &operations.UpdateWebhookUpdateWebhookRequest{
            EventTypes: []string{
                "quidem",
                "provident",
                "nam",
                "id",
            },
            FriendlyName: sdk.String("blanditiis"),
            Status: shared.WebhookEnumStatusEnumDisabled.ToPointer(),
            Version: shared.WebhookEnumVersionEnumV2.ToPointer(),
            WebhookURL: sdk.String("amet"),
        },
        ServiceSid: "deserunt",
        Sid: "nisi",
    }, operations.UpdateWebhookSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2ServiceWebhook != nil {
        // handle response
    }
}
```
