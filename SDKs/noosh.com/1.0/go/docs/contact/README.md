# Contact

### Available Operations

* [GetBillingRecipients](#getbillingrecipients) - List Billing Recipients
* [GetContactList](#getcontactlist) - List the contacts
* [GetContactUserInfo](#getcontactuserinfo) - Contact Info

## GetBillingRecipients

List Billing Recipients

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
    res, err := s.Contact.GetBillingRecipients(ctx, operations.GetBillingRecipientsRequest{
        WorkgroupID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetContactList

List the contacts

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
    res, err := s.Contact.GetContactList(ctx, operations.GetContactListRequest{
        WorkgroupID: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetContactUserInfo

Contact Info

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
    res, err := s.Contact.GetContactUserInfo(ctx, operations.GetContactUserInfoRequest{
        UserID: "quibusdam",
        WorkgroupID: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
