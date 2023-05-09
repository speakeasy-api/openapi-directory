# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [CreateMessageInteraction](#createmessageinteraction) - Create a new message Interaction to send directly from your system to one [Participant](https://www.twilio.com/docs/proxy/api/participant).  The `inbound` properties for the Interaction will always be empty.
* [CreateParticipant](#createparticipant) - Add a new Participant to the Session
* [CreatePhoneNumber](#createphonenumber) - Add a Phone Number to a Service's Proxy Number Pool.
* [CreateService](#createservice) - Create a new Service for Twilio Proxy
* [CreateSession](#createsession) - Create a new Session
* [CreateShortCode](#createshortcode) - Add a Short Code to the Proxy Number Pool for the Service.
* [DeleteInteraction](#deleteinteraction) - Delete a specific Interaction.
* [DeleteParticipant](#deleteparticipant) - Delete a specific Participant. This is a soft-delete. The participant remains associated with the session and cannot be re-added. Participants are only permanently deleted when the [Session](https://www.twilio.com/docs/proxy/api/session) is deleted.
* [DeletePhoneNumber](#deletephonenumber) - Delete a specific Phone Number from a Service.
* [DeleteService](#deleteservice) - Delete a specific Service.
* [DeleteSession](#deletesession) - Delete a specific Session.
* [DeleteShortCode](#deleteshortcode) - Delete a specific Short Code from a Service.
* [FetchInteraction](#fetchinteraction) - Retrieve a list of Interactions for a given [Session](https://www.twilio.com/docs/proxy/api/session).
* [FetchMessageInteraction](#fetchmessageinteraction)
* [FetchParticipant](#fetchparticipant) - Fetch a specific Participant.
* [FetchPhoneNumber](#fetchphonenumber) - Fetch a specific Phone Number.
* [FetchService](#fetchservice) - Fetch a specific Service.
* [FetchSession](#fetchsession) - Fetch a specific Session.
* [FetchShortCode](#fetchshortcode) - Fetch a specific Short Code.
* [ListInteraction](#listinteraction) - Retrieve a list of all Interactions for a Session. A maximum of 100 records will be returned per page.
* [ListMessageInteraction](#listmessageinteraction)
* [ListParticipant](#listparticipant) - Retrieve a list of all Participants in a Session.
* [ListPhoneNumber](#listphonenumber) - Retrieve a list of all Phone Numbers in the Proxy Number Pool for a Service. A maximum of 100 records will be returned per page.
* [ListService](#listservice) - Retrieve a list of all Services for Twilio Proxy. A maximum of 100 records will be returned per page.
* [ListSession](#listsession) - Retrieve a list of all Sessions for the Service. A maximum of 100 records will be returned per page.
* [ListShortCode](#listshortcode) - Retrieve a list of all Short Codes in the Proxy Number Pool for the Service. A maximum of 100 records will be returned per page.
* [UpdatePhoneNumber](#updatephonenumber) - Update a specific Proxy Number.
* [UpdateService](#updateservice) - Update a specific Service.
* [UpdateSession](#updatesession) - Update a specific Session.
* [UpdateShortCode](#updateshortcode) - Update a specific Short Code.

## CreateMessageInteraction

Create a new message Interaction to send directly from your system to one [Participant](https://www.twilio.com/docs/proxy/api/participant).  The `inbound` properties for the Interaction will always be empty.

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
    res, err := s.SDK.CreateMessageInteraction(ctx, operations.CreateMessageInteractionRequest{
        ParticipantSid: "tempora",
        RequestBody: &operations.CreateMessageInteractionCreateMessageInteractionRequest{
            Body: sdk.String("suscipit"),
            MediaURL: []string{
                "https://studious-lynx.info",
                "https://hospitable-travel.org",
            },
        },
        ServiceSid: "ab",
        SessionSid: "quis",
    }, operations.CreateMessageInteractionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProxyV1ServiceSessionParticipantMessageInteraction != nil {
        // handle response
    }
}
```

## CreateParticipant

Add a new Participant to the Session

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
    res, err := s.SDK.CreateParticipant(ctx, operations.CreateParticipantRequest{
        RequestBody: &operations.CreateParticipantCreateParticipantRequest{
            FriendlyName: sdk.String("veritatis"),
            Identifier: "deserunt",
            ProxyIdentifier: sdk.String("perferendis"),
            ProxyIdentifierSid: sdk.String("ipsam"),
        },
        ServiceSid: "repellendus",
        SessionSid: "sapiente",
    }, operations.CreateParticipantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProxyV1ServiceSessionParticipant != nil {
        // handle response
    }
}
```

## CreatePhoneNumber

Add a Phone Number to a Service's Proxy Number Pool.

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
            IsReserved: sdk.Bool(false),
            PhoneNumber: sdk.String("quo"),
            Sid: sdk.String("odit"),
        },
        ServiceSid: "at",
    }, operations.CreatePhoneNumberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProxyV1ServicePhoneNumber != nil {
        // handle response
    }
}
```

## CreateService

Create a new Service for Twilio Proxy

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
        CallbackURL: sdk.String("https://wonderful-investor.net"),
        ChatInstanceSid: sdk.String("quod"),
        DefaultTTL: sdk.Int64(461479),
        GeoMatchLevel: shared.ServiceEnumGeoMatchLevelEnumRadius.ToPointer(),
        InterceptCallbackURL: sdk.String("https://rash-butcher.net"),
        NumberSelectionBehavior: shared.ServiceEnumNumberSelectionBehaviorEnumPreferSticky.ToPointer(),
        OutOfSessionCallbackURL: sdk.String("https://cool-mandarin.org"),
        UniqueName: "optio",
    }, operations.CreateServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProxyV1Service != nil {
        // handle response
    }
}
```

## CreateSession

Create a new Session

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateSession(ctx, operations.CreateSessionRequest{
        RequestBody: &operations.CreateSessionCreateSessionRequest{
            DateExpiry: types.MustTimeFromString("2022-10-15T16:29:54.554Z"),
            Mode: shared.SessionEnumModeEnumVoiceOnly.ToPointer(),
            Participants: []interface{}{
                "modi",
                "qui",
            },
            Status: shared.SessionEnumStatusEnumFailed.ToPointer(),
            TTL: sdk.Int64(736918),
            UniqueName: sdk.String("esse"),
        },
        ServiceSid: "ipsum",
    }, operations.CreateSessionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProxyV1ServiceSession != nil {
        // handle response
    }
}
```

## CreateShortCode

Add a Short Code to the Proxy Number Pool for the Service.

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
            Sid: "excepturi",
        },
        ServiceSid: "aspernatur",
    }, operations.CreateShortCodeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProxyV1ServiceShortCode != nil {
        // handle response
    }
}
```

## DeleteInteraction

Delete a specific Interaction.

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
    res, err := s.SDK.DeleteInteraction(ctx, operations.DeleteInteractionRequest{
        ServiceSid: "perferendis",
        SessionSid: "ad",
        Sid: "natus",
    }, operations.DeleteInteractionSecurity{
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

## DeleteParticipant

Delete a specific Participant. This is a soft-delete. The participant remains associated with the session and cannot be re-added. Participants are only permanently deleted when the [Session](https://www.twilio.com/docs/proxy/api/session) is deleted.

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
    res, err := s.SDK.DeleteParticipant(ctx, operations.DeleteParticipantRequest{
        ServiceSid: "sed",
        SessionSid: "iste",
        Sid: "dolor",
    }, operations.DeleteParticipantSecurity{
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

Delete a specific Phone Number from a Service.

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
        ServiceSid: "natus",
        Sid: "laboriosam",
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

Delete a specific Service.

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
        Sid: "hic",
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

## DeleteSession

Delete a specific Session.

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
    res, err := s.SDK.DeleteSession(ctx, operations.DeleteSessionRequest{
        ServiceSid: "saepe",
        Sid: "fuga",
    }, operations.DeleteSessionSecurity{
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

Delete a specific Short Code from a Service.

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
        ServiceSid: "in",
        Sid: "corporis",
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

## FetchInteraction

Retrieve a list of Interactions for a given [Session](https://www.twilio.com/docs/proxy/api/session).

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
    res, err := s.SDK.FetchInteraction(ctx, operations.FetchInteractionRequest{
        ServiceSid: "iste",
        SessionSid: "iure",
        Sid: "saepe",
    }, operations.FetchInteractionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProxyV1ServiceSessionInteraction != nil {
        // handle response
    }
}
```

## FetchMessageInteraction

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
    res, err := s.SDK.FetchMessageInteraction(ctx, operations.FetchMessageInteractionRequest{
        ParticipantSid: "quidem",
        ServiceSid: "architecto",
        SessionSid: "ipsa",
        Sid: "reiciendis",
    }, operations.FetchMessageInteractionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProxyV1ServiceSessionParticipantMessageInteraction != nil {
        // handle response
    }
}
```

## FetchParticipant

Fetch a specific Participant.

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
    res, err := s.SDK.FetchParticipant(ctx, operations.FetchParticipantRequest{
        ServiceSid: "est",
        SessionSid: "mollitia",
        Sid: "laborum",
    }, operations.FetchParticipantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProxyV1ServiceSessionParticipant != nil {
        // handle response
    }
}
```

## FetchPhoneNumber

Fetch a specific Phone Number.

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
        ServiceSid: "dolores",
        Sid: "dolorem",
    }, operations.FetchPhoneNumberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProxyV1ServicePhoneNumber != nil {
        // handle response
    }
}
```

## FetchService

Fetch a specific Service.

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
        Sid: "corporis",
    }, operations.FetchServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProxyV1Service != nil {
        // handle response
    }
}
```

## FetchSession

Fetch a specific Session.

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
    res, err := s.SDK.FetchSession(ctx, operations.FetchSessionRequest{
        ServiceSid: "explicabo",
        Sid: "nobis",
    }, operations.FetchSessionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProxyV1ServiceSession != nil {
        // handle response
    }
}
```

## FetchShortCode

Fetch a specific Short Code.

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
        ServiceSid: "enim",
        Sid: "omnis",
    }, operations.FetchShortCodeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProxyV1ServiceShortCode != nil {
        // handle response
    }
}
```

## ListInteraction

Retrieve a list of all Interactions for a Session. A maximum of 100 records will be returned per page.

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
    res, err := s.SDK.ListInteraction(ctx, operations.ListInteractionRequest{
        Page: sdk.Int64(363711),
        PageSize: sdk.Int64(325047),
        PageToken: sdk.String("excepturi"),
        ServiceSid: "accusantium",
        SessionSid: "iure",
    }, operations.ListInteractionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInteractionResponse != nil {
        // handle response
    }
}
```

## ListMessageInteraction

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
    res, err := s.SDK.ListMessageInteraction(ctx, operations.ListMessageInteractionRequest{
        Page: sdk.Int64(634274),
        PageSize: sdk.Int64(988374),
        PageToken: sdk.String("sapiente"),
        ParticipantSid: "architecto",
        ServiceSid: "mollitia",
        SessionSid: "dolorem",
    }, operations.ListMessageInteractionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMessageInteractionResponse != nil {
        // handle response
    }
}
```

## ListParticipant

Retrieve a list of all Participants in a Session.

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
    res, err := s.SDK.ListParticipant(ctx, operations.ListParticipantRequest{
        Page: sdk.Int64(635059),
        PageSize: sdk.Int64(161309),
        PageToken: sdk.String("repellat"),
        ServiceSid: "mollitia",
        SessionSid: "occaecati",
    }, operations.ListParticipantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListParticipantResponse != nil {
        // handle response
    }
}
```

## ListPhoneNumber

Retrieve a list of all Phone Numbers in the Proxy Number Pool for a Service. A maximum of 100 records will be returned per page.

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
        Page: sdk.Int64(253291),
        PageSize: sdk.Int64(414369),
        PageToken: sdk.String("quam"),
        ServiceSid: "molestiae",
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

Retrieve a list of all Services for Twilio Proxy. A maximum of 100 records will be returned per page.

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
        Page: sdk.Int64(244425),
        PageSize: sdk.Int64(623510),
        PageToken: sdk.String("quia"),
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

## ListSession

Retrieve a list of all Sessions for the Service. A maximum of 100 records will be returned per page.

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
    res, err := s.SDK.ListSession(ctx, operations.ListSessionRequest{
        Page: sdk.Int64(338007),
        PageSize: sdk.Int64(110375),
        PageToken: sdk.String("laborum"),
        ServiceSid: "animi",
    }, operations.ListSessionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSessionResponse != nil {
        // handle response
    }
}
```

## ListShortCode

Retrieve a list of all Short Codes in the Proxy Number Pool for the Service. A maximum of 100 records will be returned per page.

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
        Page: sdk.Int64(317202),
        PageSize: sdk.Int64(138183),
        PageToken: sdk.String("quo"),
        ServiceSid: "sequi",
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

## UpdatePhoneNumber

Update a specific Proxy Number.

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
    res, err := s.SDK.UpdatePhoneNumber(ctx, operations.UpdatePhoneNumberRequest{
        RequestBody: &operations.UpdatePhoneNumberUpdatePhoneNumberRequest{
            IsReserved: sdk.Bool(false),
        },
        ServiceSid: "tenetur",
        Sid: "ipsam",
    }, operations.UpdatePhoneNumberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProxyV1ServicePhoneNumber != nil {
        // handle response
    }
}
```

## UpdateService

Update a specific Service.

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
            CallbackURL: sdk.String("https://sugary-afoul.com"),
            ChatInstanceSid: sdk.String("error"),
            DefaultTTL: sdk.Int64(837945),
            GeoMatchLevel: shared.ServiceEnumGeoMatchLevelEnumRadius.ToPointer(),
            InterceptCallbackURL: sdk.String("http://wilted-weight.org"),
            NumberSelectionBehavior: shared.ServiceEnumNumberSelectionBehaviorEnumAvoidSticky.ToPointer(),
            OutOfSessionCallbackURL: sdk.String("https://witty-avocado.name"),
            UniqueName: sdk.String("voluptate"),
        },
        Sid: "cum",
    }, operations.UpdateServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProxyV1Service != nil {
        // handle response
    }
}
```

## UpdateSession

Update a specific Session.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateSession(ctx, operations.UpdateSessionRequest{
        RequestBody: &operations.UpdateSessionUpdateSessionRequest{
            DateExpiry: types.MustTimeFromString("2022-12-17T16:42:52.927Z"),
            Status: shared.SessionEnumStatusEnumClosed.ToPointer(),
            TTL: sdk.Int64(282807),
        },
        ServiceSid: "maiores",
        Sid: "dicta",
    }, operations.UpdateSessionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProxyV1ServiceSession != nil {
        // handle response
    }
}
```

## UpdateShortCode

Update a specific Short Code.

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
    res, err := s.SDK.UpdateShortCode(ctx, operations.UpdateShortCodeRequest{
        RequestBody: &operations.UpdateShortCodeUpdateShortCodeRequest{
            IsReserved: sdk.Bool(false),
        },
        ServiceSid: "corporis",
        Sid: "dolore",
    }, operations.UpdateShortCodeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProxyV1ServiceShortCode != nil {
        // handle response
    }
}
```
