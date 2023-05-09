# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [CreateAlphaSender](#createalphasender)
* [CreateBrandRegistrationOtp](#createbrandregistrationotp)
* [CreateBrandRegistrations](#createbrandregistrations)
* [CreateBrandVetting](#createbrandvetting)
* [CreateExternalCampaign](#createexternalcampaign)
* [CreateLinkshorteningMessagingService](#createlinkshorteningmessagingservice)
* [CreatePhoneNumber](#createphonenumber)
* [CreateService](#createservice)
* [CreateShortCode](#createshortcode)
* [CreateUsAppToPerson](#createusapptoperson)
* [DeleteAlphaSender](#deletealphasender)
* [DeleteDomainCertV4](#deletedomaincertv4)
* [DeleteLinkshorteningMessagingService](#deletelinkshorteningmessagingservice)
* [DeletePhoneNumber](#deletephonenumber)
* [DeleteService](#deleteservice)
* [DeleteShortCode](#deleteshortcode)
* [DeleteUsAppToPerson](#deleteusapptoperson)
* [FetchAlphaSender](#fetchalphasender)
* [FetchBrandRegistrations](#fetchbrandregistrations)
* [FetchBrandVetting](#fetchbrandvetting)
* [FetchDeactivation](#fetchdeactivation) - Fetch a list of all United States numbers that have been deactivated on a specific date.
* [FetchDomainCertV4](#fetchdomaincertv4)
* [FetchDomainConfig](#fetchdomainconfig)
* [FetchDomainConfigMessagingService](#fetchdomainconfigmessagingservice)
* [FetchPhoneNumber](#fetchphonenumber)
* [FetchService](#fetchservice)
* [FetchShortCode](#fetchshortcode)
* [FetchUsAppToPerson](#fetchusapptoperson)
* [FetchUsAppToPersonUsecase](#fetchusapptopersonusecase)
* [FetchUsecase](#fetchusecase)
* [ListAlphaSender](#listalphasender)
* [ListBrandRegistrations](#listbrandregistrations)
* [ListBrandVetting](#listbrandvetting)
* [ListPhoneNumber](#listphonenumber)
* [ListService](#listservice)
* [ListShortCode](#listshortcode)
* [ListUsAppToPerson](#listusapptoperson)
* [UpdateBrandRegistrations](#updatebrandregistrations)
* [UpdateDomainCertV4](#updatedomaincertv4)
* [UpdateDomainConfig](#updatedomainconfig)
* [UpdateService](#updateservice)

## CreateAlphaSender

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
    res, err := s.SDK.CreateAlphaSender(ctx, operations.CreateAlphaSenderRequest{
        RequestBody: &operations.CreateAlphaSenderCreateAlphaSenderRequest{
            AlphaSender: "distinctio",
        },
        ServiceSid: "quibusdam",
    }, operations.CreateAlphaSenderSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessagingV1ServiceAlphaSender != nil {
        // handle response
    }
}
```

## CreateBrandRegistrationOtp

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
    res, err := s.SDK.CreateBrandRegistrationOtp(ctx, operations.CreateBrandRegistrationOtpRequest{
        BrandRegistrationSid: "unde",
    }, operations.CreateBrandRegistrationOtpSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessagingV1BrandRegistrationsBrandRegistrationOtp != nil {
        // handle response
    }
}
```

## CreateBrandRegistrations

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
    res, err := s.SDK.CreateBrandRegistrations(ctx, operations.CreateBrandRegistrationsCreateBrandRegistrationsRequest{
        A2PProfileBundleSid: "nulla",
        BrandType: sdk.String("corrupti"),
        CustomerProfileBundleSid: "illum",
        Mock: sdk.Bool(false),
        SkipAutomaticSecVet: sdk.Bool(false),
    }, operations.CreateBrandRegistrationsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessagingV1BrandRegistrations != nil {
        // handle response
    }
}
```

## CreateBrandVetting

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
    res, err := s.SDK.CreateBrandVetting(ctx, operations.CreateBrandVettingRequest{
        BrandSid: "vel",
        RequestBody: &operations.CreateBrandVettingCreateBrandVettingRequest{
            VettingID: sdk.String("error"),
            VettingProvider: shared.BrandVettingEnumVettingProviderEnumCampaignVerify,
        },
    }, operations.CreateBrandVettingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessagingV1BrandRegistrationsBrandVetting != nil {
        // handle response
    }
}
```

## CreateExternalCampaign

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
    res, err := s.SDK.CreateExternalCampaign(ctx, operations.CreateExternalCampaignCreateExternalCampaignRequest{
        CampaignID: "deserunt",
        MessagingServiceSid: "suscipit",
    }, operations.CreateExternalCampaignSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessagingV1ExternalCampaign != nil {
        // handle response
    }
}
```

## CreateLinkshorteningMessagingService

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
    res, err := s.SDK.CreateLinkshorteningMessagingService(ctx, operations.CreateLinkshorteningMessagingServiceRequest{
        DomainSid: "iure",
        MessagingServiceSid: "magnam",
    }, operations.CreateLinkshorteningMessagingServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessagingV1LinkshorteningMessagingService != nil {
        // handle response
    }
}
```

## CreatePhoneNumber

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
    res, err := s.SDK.CreatePhoneNumber(ctx, operations.CreatePhoneNumberRequest{
        RequestBody: &operations.CreatePhoneNumberCreatePhoneNumberRequest{
            PhoneNumberSid: "debitis",
        },
        ServiceSid: "ipsa",
    }, operations.CreatePhoneNumberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessagingV1ServicePhoneNumber != nil {
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateService(ctx, operations.CreateServiceCreateServiceRequest{
        AreaCodeGeomatch: sdk.Bool(false),
        FallbackMethod: operations.CreateServiceCreateServiceRequestFallbackMethodEnumDelete.ToPointer(),
        FallbackToLongCode: sdk.Bool(false),
        FallbackURL: sdk.String("http://hideous-jam.net"),
        FriendlyName: "placeat",
        InboundMethod: operations.CreateServiceCreateServiceRequestInboundMethodEnumPatch.ToPointer(),
        InboundRequestURL: sdk.String("http://nice-gorilla.org"),
        MmsConverter: sdk.Bool(false),
        ScanMessageContent: shared.ServiceEnumScanMessageContentEnumDisable.ToPointer(),
        SmartEncoding: sdk.Bool(false),
        StatusCallback: sdk.String("http://gloomy-blanket.name"),
        StickySender: sdk.Bool(false),
        SynchronousValidation: sdk.Bool(false),
        UseInboundWebhookOnNumber: sdk.Bool(false),
        Usecase: sdk.String("perferendis"),
        ValidityPeriod: sdk.Int64(368241),
    }, operations.CreateServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessagingV1Service != nil {
        // handle response
    }
}
```

## CreateShortCode

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
    res, err := s.SDK.CreateShortCode(ctx, operations.CreateShortCodeRequest{
        RequestBody: &operations.CreateShortCodeCreateShortCodeRequest{
            ShortCodeSid: "repellendus",
        },
        ServiceSid: "sapiente",
    }, operations.CreateShortCodeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessagingV1ServiceShortCode != nil {
        // handle response
    }
}
```

## CreateUsAppToPerson

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
    res, err := s.SDK.CreateUsAppToPerson(ctx, operations.CreateUsAppToPersonRequest{
        MessagingServiceSid: "quo",
        RequestBody: &operations.CreateUsAppToPersonCreateUsAppToPersonRequest{
            BrandRegistrationSid: "odit",
            Description: "at",
            HasEmbeddedLinks: false,
            HasEmbeddedPhone: false,
            HelpKeywords: []string{
                "maiores",
                "molestiae",
                "quod",
                "quod",
            },
            HelpMessage: sdk.String("esse"),
            MessageFlow: "totam",
            MessageSamples: []string{
                "dolorum",
                "dicta",
                "nam",
                "officia",
            },
            OptInKeywords: []string{
                "fugit",
                "deleniti",
                "hic",
            },
            OptInMessage: sdk.String("optio"),
            OptOutKeywords: []string{
                "beatae",
                "commodi",
                "molestiae",
            },
            OptOutMessage: sdk.String("modi"),
            UsAppToPersonUsecase: "qui",
        },
    }, operations.CreateUsAppToPersonSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessagingV1ServiceUsAppToPerson != nil {
        // handle response
    }
}
```

## DeleteAlphaSender

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
    res, err := s.SDK.DeleteAlphaSender(ctx, operations.DeleteAlphaSenderRequest{
        ServiceSid: "impedit",
        Sid: "cum",
    }, operations.DeleteAlphaSenderSecurity{
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

## DeleteDomainCertV4

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
    res, err := s.SDK.DeleteDomainCertV4(ctx, operations.DeleteDomainCertV4Request{
        DomainSid: "esse",
    }, operations.DeleteDomainCertV4Security{
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

## DeleteLinkshorteningMessagingService

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
    res, err := s.SDK.DeleteLinkshorteningMessagingService(ctx, operations.DeleteLinkshorteningMessagingServiceRequest{
        DomainSid: "ipsum",
        MessagingServiceSid: "excepturi",
    }, operations.DeleteLinkshorteningMessagingServiceSecurity{
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

## DeletePhoneNumber

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
    res, err := s.SDK.DeletePhoneNumber(ctx, operations.DeletePhoneNumberRequest{
        ServiceSid: "aspernatur",
        Sid: "perferendis",
    }, operations.DeletePhoneNumberSecurity{
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
        Sid: "ad",
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

## DeleteShortCode

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
    res, err := s.SDK.DeleteShortCode(ctx, operations.DeleteShortCodeRequest{
        ServiceSid: "natus",
        Sid: "sed",
    }, operations.DeleteShortCodeSecurity{
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

## DeleteUsAppToPerson

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
    res, err := s.SDK.DeleteUsAppToPerson(ctx, operations.DeleteUsAppToPersonRequest{
        MessagingServiceSid: "iste",
        Sid: "dolor",
    }, operations.DeleteUsAppToPersonSecurity{
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

## FetchAlphaSender

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
    res, err := s.SDK.FetchAlphaSender(ctx, operations.FetchAlphaSenderRequest{
        ServiceSid: "natus",
        Sid: "laboriosam",
    }, operations.FetchAlphaSenderSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessagingV1ServiceAlphaSender != nil {
        // handle response
    }
}
```

## FetchBrandRegistrations

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
    res, err := s.SDK.FetchBrandRegistrations(ctx, operations.FetchBrandRegistrationsRequest{
        Sid: "hic",
    }, operations.FetchBrandRegistrationsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessagingV1BrandRegistrations != nil {
        // handle response
    }
}
```

## FetchBrandVetting

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
    res, err := s.SDK.FetchBrandVetting(ctx, operations.FetchBrandVettingRequest{
        BrandSid: "saepe",
        BrandVettingSid: "fuga",
    }, operations.FetchBrandVettingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessagingV1BrandRegistrationsBrandVetting != nil {
        // handle response
    }
}
```

## FetchDeactivation

Fetch a list of all United States numbers that have been deactivated on a specific date.

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
    res, err := s.SDK.FetchDeactivation(ctx, operations.FetchDeactivationRequest{
        Date: types.MustDateFromString("2022-08-22"),
    }, operations.FetchDeactivationSecurity{
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

## FetchDomainCertV4

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
    res, err := s.SDK.FetchDomainCertV4(ctx, operations.FetchDomainCertV4Request{
        DomainSid: "iste",
    }, operations.FetchDomainCertV4Security{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessagingV1DomainCertV4 != nil {
        // handle response
    }
}
```

## FetchDomainConfig

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
    res, err := s.SDK.FetchDomainConfig(ctx, operations.FetchDomainConfigRequest{
        DomainSid: "iure",
    }, operations.FetchDomainConfigSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessagingV1DomainConfig != nil {
        // handle response
    }
}
```

## FetchDomainConfigMessagingService

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
    res, err := s.SDK.FetchDomainConfigMessagingService(ctx, operations.FetchDomainConfigMessagingServiceRequest{
        MessagingServiceSid: "saepe",
    }, operations.FetchDomainConfigMessagingServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessagingV1DomainConfigMessagingService != nil {
        // handle response
    }
}
```

## FetchPhoneNumber

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
    res, err := s.SDK.FetchPhoneNumber(ctx, operations.FetchPhoneNumberRequest{
        ServiceSid: "quidem",
        Sid: "architecto",
    }, operations.FetchPhoneNumberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessagingV1ServicePhoneNumber != nil {
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
        Sid: "ipsa",
    }, operations.FetchServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessagingV1Service != nil {
        // handle response
    }
}
```

## FetchShortCode

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
    res, err := s.SDK.FetchShortCode(ctx, operations.FetchShortCodeRequest{
        ServiceSid: "reiciendis",
        Sid: "est",
    }, operations.FetchShortCodeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessagingV1ServiceShortCode != nil {
        // handle response
    }
}
```

## FetchUsAppToPerson

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
    res, err := s.SDK.FetchUsAppToPerson(ctx, operations.FetchUsAppToPersonRequest{
        MessagingServiceSid: "mollitia",
        Sid: "laborum",
    }, operations.FetchUsAppToPersonSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessagingV1ServiceUsAppToPerson != nil {
        // handle response
    }
}
```

## FetchUsAppToPersonUsecase

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
    res, err := s.SDK.FetchUsAppToPersonUsecase(ctx, operations.FetchUsAppToPersonUsecaseRequest{
        BrandRegistrationSid: sdk.String("dolores"),
        MessagingServiceSid: "dolorem",
    }, operations.FetchUsAppToPersonUsecaseSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessagingV1ServiceUsAppToPersonUsecase != nil {
        // handle response
    }
}
```

## FetchUsecase

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
    res, err := s.SDK.FetchUsecase(ctx, operations.FetchUsecaseSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessagingV1Usecase != nil {
        // handle response
    }
}
```

## ListAlphaSender

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
    res, err := s.SDK.ListAlphaSender(ctx, operations.ListAlphaSenderRequest{
        Page: sdk.Int64(358152),
        PageSize: sdk.Int64(128926),
        PageToken: sdk.String("nobis"),
        ServiceSid: "enim",
    }, operations.ListAlphaSenderSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAlphaSenderResponse != nil {
        // handle response
    }
}
```

## ListBrandRegistrations

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
    res, err := s.SDK.ListBrandRegistrations(ctx, operations.ListBrandRegistrationsRequest{
        Page: sdk.Int64(607831),
        PageSize: sdk.Int64(363711),
        PageToken: sdk.String("minima"),
    }, operations.ListBrandRegistrationsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBrandRegistrationsResponse != nil {
        // handle response
    }
}
```

## ListBrandVetting

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
    res, err := s.SDK.ListBrandVetting(ctx, operations.ListBrandVettingRequest{
        BrandSid: "excepturi",
        Page: sdk.Int64(38425),
        PageSize: sdk.Int64(438601),
        PageToken: sdk.String("culpa"),
        VettingProvider: shared.BrandVettingEnumVettingProviderEnumCampaignVerify.ToPointer(),
    }, operations.ListBrandVettingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBrandVettingResponse != nil {
        // handle response
    }
}
```

## ListPhoneNumber

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
    res, err := s.SDK.ListPhoneNumber(ctx, operations.ListPhoneNumberRequest{
        Page: sdk.Int64(988374),
        PageSize: sdk.Int64(958950),
        PageToken: sdk.String("architecto"),
        ServiceSid: "mollitia",
    }, operations.ListPhoneNumberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPhoneNumberResponse != nil {
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
        Page: sdk.Int64(208876),
        PageSize: sdk.Int64(635059),
        PageToken: sdk.String("consequuntur"),
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

## ListShortCode

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
    res, err := s.SDK.ListShortCode(ctx, operations.ListShortCodeRequest{
        Page: sdk.Int64(995300),
        PageSize: sdk.Int64(653108),
        PageToken: sdk.String("occaecati"),
        ServiceSid: "numquam",
    }, operations.ListShortCodeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListShortCodeResponse != nil {
        // handle response
    }
}
```

## ListUsAppToPerson

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
    res, err := s.SDK.ListUsAppToPerson(ctx, operations.ListUsAppToPersonRequest{
        MessagingServiceSid: "commodi",
        Page: sdk.Int64(466311),
        PageSize: sdk.Int64(474697),
        PageToken: sdk.String("velit"),
    }, operations.ListUsAppToPersonSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUsAppToPersonResponse != nil {
        // handle response
    }
}
```

## UpdateBrandRegistrations

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
    res, err := s.SDK.UpdateBrandRegistrations(ctx, operations.UpdateBrandRegistrationsRequest{
        Sid: "error",
    }, operations.UpdateBrandRegistrationsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessagingV1BrandRegistrations != nil {
        // handle response
    }
}
```

## UpdateDomainCertV4

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
    res, err := s.SDK.UpdateDomainCertV4(ctx, operations.UpdateDomainCertV4Request{
        DomainSid: "quia",
        RequestBody: &operations.UpdateDomainCertV4UpdateDomainCertV4Request{
            TLSCert: "quis",
        },
    }, operations.UpdateDomainCertV4Security{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessagingV1DomainCertV4 != nil {
        // handle response
    }
}
```

## UpdateDomainConfig

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
    res, err := s.SDK.UpdateDomainConfig(ctx, operations.UpdateDomainConfigRequest{
        DomainSid: "vitae",
        RequestBody: &operations.UpdateDomainConfigUpdateDomainConfigRequest{
            CallbackURL: sdk.String("https://profuse-ethernet.com"),
            FallbackURL: sdk.String("https://dimwitted-vaulting.info"),
        },
    }, operations.UpdateDomainConfigSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessagingV1DomainConfig != nil {
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateService(ctx, operations.UpdateServiceRequest{
        RequestBody: &operations.UpdateServiceUpdateServiceRequest{
            AreaCodeGeomatch: sdk.Bool(false),
            FallbackMethod: operations.UpdateServiceUpdateServiceRequestFallbackMethodEnumPatch.ToPointer(),
            FallbackToLongCode: sdk.Bool(false),
            FallbackURL: sdk.String("https://adolescent-borrower.name"),
            FriendlyName: sdk.String("temporibus"),
            InboundMethod: operations.UpdateServiceUpdateServiceRequestInboundMethodEnumPut.ToPointer(),
            InboundRequestURL: sdk.String("http://wilted-weight.org"),
            MmsConverter: sdk.Bool(false),
            ScanMessageContent: shared.ServiceEnumScanMessageContentEnumEnable.ToPointer(),
            SmartEncoding: sdk.Bool(false),
            StatusCallback: sdk.String("https://witty-avocado.name"),
            StickySender: sdk.Bool(false),
            SynchronousValidation: sdk.Bool(false),
            UseInboundWebhookOnNumber: sdk.Bool(false),
            Usecase: sdk.String("voluptate"),
            ValidityPeriod: sdk.Int64(739264),
        },
        Sid: "perferendis",
    }, operations.UpdateServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessagingV1Service != nil {
        // handle response
    }
}
```
