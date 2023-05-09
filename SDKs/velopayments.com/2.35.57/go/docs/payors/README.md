# Payors

## Overview

A Payor is the entity which is sending money. Here you will find the available APIs for working with Payors.

### Available Operations

* [~~GetPayorByIDV1~~](#getpayorbyidv1) - Get Payor :warning: **Deprecated**
* [GetPayorByIDV2](#getpayorbyidv2) - Get Payor
* [PayorAddPayorLogoV1](#payoraddpayorlogov1) - Add Logo
* [PayorCreateAPIKeyV1](#payorcreateapikeyv1) - Create API Key
* [PayorCreateApplicationV1](#payorcreateapplicationv1) - Create Application
* [PayorEmailOptOut](#payoremailoptout) - Reminder Email Opt-Out
* [PayorGetBranding](#payorgetbranding) - Get Branding

## ~~GetPayorByIDV1~~

<p>Get a Single Payor by Id.</p>
<p>deprecated since v2.10 - Use /v2/payors


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
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payors.GetPayorByIDV1(ctx, operations.GetPayorByIDV1Request{
        PayorID: "de008e6f-8c5f-4350-98cd-b5a341814301",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayorV1 != nil {
        // handle response
    }
}
```

## GetPayorByIDV2

Get a Single Payor by Id.


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
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payors.GetPayorByIDV2(ctx, operations.GetPayorByIDV2Request{
        PayorID: "0421813d-5208-4ece-be25-3b668451c6c6",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayorV2 != nil {
        // handle response
    }
}
```

## PayorAddPayorLogoV1

<p>Add Payor Logo</p>
<p>Logo file is used in your branding and emails sent to payees</p>


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payors.PayorAddPayorLogoV1(ctx, operations.PayorAddPayorLogoV1Request{
        PayorLogoRequest: shared.PayorLogoRequest{
            Logo: &shared.PayorLogoRequestLogo{
                Content: []byte("recusandae"),
                Logo: "consequuntur",
            },
        },
        PayorID: "05e16dea-b3fe-4c95-b8a6-4584273a8418",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PayorCreateAPIKeyV1

<p>Create an an API key for the given payor Id and application Id</p>
<p>You can create multiple API Keys for a given application</p>
<p>API Keys are programmatic users for integrating your application with the Velo platform</p>


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payors.PayorCreateAPIKeyV1(ctx, operations.PayorCreateAPIKeyV1Request{
        PayorCreateAPIKeyRequest: shared.PayorCreateAPIKeyRequest{
            Description: sdk.String("Key for iOS mobile application"),
            Name: "iOS Key",
            Roles: []shared.PayorCreateAPIKeyRequestRolesEnum{
                shared.PayorCreateAPIKeyRequestRolesEnumVeloPayorAdmin,
                shared.PayorCreateAPIKeyRequestRolesEnumVeloPayorAdmin,
                shared.PayorCreateAPIKeyRequestRolesEnumVeloPayorAdmin,
                shared.PayorCreateAPIKeyRequestRolesEnumVeloPayorAdmin,
            },
        },
        ApplicationID: "09fb0929-921a-4efb-9f58-c4d86e68e4be",
        PayorID: "056013f5-9da7-457a-99ec-fef66ef1caa3",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayorCreateAPIKeyResponse != nil {
        // handle response
    }
}
```

## PayorCreateApplicationV1

<p>Create an application for the given Payor ID.</p>
<p>Applications provide a means to group your API Keys</p>
<p>For example you might have an SAP application that you wish to integrate with Velo</p>
<p>You can create an application and then create one or more API keys for the application</p>


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payors.PayorCreateApplicationV1(ctx, operations.PayorCreateApplicationV1Request{
        PayorCreateApplicationRequest: shared.PayorCreateApplicationRequest{
            Description: sdk.String("SAP Application integration"),
            Name: "SAP",
        },
        PayorID: "383c2beb-4773-473c-8d72-f64d1db1f2c4",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PayorEmailOptOut

Update the emailRemindersOptOut field for a Payor. This API can be used to opt out
or opt into Payor Reminder emails. These emails are typically around payee events
such as payees registering and onboarding.


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payors.PayorEmailOptOut(ctx, operations.PayorEmailOptOutRequest{
        PayorEmailOptOutRequest: shared.PayorEmailOptOutRequest{
            ReminderEmailsOptOut: false,
        },
        PayorID: "310661e9-6349-4e1c-b9e0-6e3a437000ae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PayorGetBranding

Get the payor branding details.

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
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payors.PayorGetBranding(ctx, operations.PayorGetBrandingRequest{
        PayorID: "6b6bc9b8-f759-4eac-95a9-741d31135296",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayorBrandingResponse != nil {
        // handle response
    }
}
```
