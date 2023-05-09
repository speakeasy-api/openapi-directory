# Status

## Overview

Whether a contact has subscribed or unsubscribed from a given subscription type.

### Available Operations

* [GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatus](#getcommunicationpreferencesv3statusemailemailaddressgetemailstatus) - Get subscription statuses for a contact
* [PostCommunicationPreferencesV3SubscribeSubscribe](#postcommunicationpreferencesv3subscribesubscribe) - Subscribe a contact
* [PostCommunicationPreferencesV3UnsubscribeUnsubscribe](#postcommunicationpreferencesv3unsubscribeunsubscribe) - Unsubscribe a contact

## GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatus

Returns a list of subscriptions and their status for a given contact.

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
    res, err := s.Status.GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatus(ctx, operations.GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusRequest{
        EmailAddress: "corrupti",
    }, operations.GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurity{
        Hapikey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublicSubscriptionStatusesResponse != nil {
        // handle response
    }
}
```

## PostCommunicationPreferencesV3SubscribeSubscribe

Subscribes a contact to the given subscription type. This API is not valid to use for subscribing a contact at a brand or portal level and will return an error.

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
    res, err := s.Status.PostCommunicationPreferencesV3SubscribeSubscribe(ctx, shared.PublicUpdateSubscriptionStatusRequest{
        EmailAddress: "provident",
        LegalBasis: shared.PublicUpdateSubscriptionStatusRequestLegalBasisEnumProcessAndStore.ToPointer(),
        LegalBasisExplanation: sdk.String("quibusdam"),
        SubscriptionID: "unde",
    }, operations.PostCommunicationPreferencesV3SubscribeSubscribeSecurity{
        Hapikey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublicSubscriptionStatus != nil {
        // handle response
    }
}
```

## PostCommunicationPreferencesV3UnsubscribeUnsubscribe

Unsubscribes a contact from the given subscription type. This API is not valid to use for unsubscribing a contact at a brand or portal level and will return an error.

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
    res, err := s.Status.PostCommunicationPreferencesV3UnsubscribeUnsubscribe(ctx, shared.PublicUpdateSubscriptionStatusRequest{
        EmailAddress: "nulla",
        LegalBasis: shared.PublicUpdateSubscriptionStatusRequestLegalBasisEnumConsentWithNotice.ToPointer(),
        LegalBasisExplanation: sdk.String("illum"),
        SubscriptionID: "vel",
    }, operations.PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurity{
        Hapikey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublicSubscriptionStatus != nil {
        // handle response
    }
}
```
