# V1

### Available Operations

* [ChangePassword](#changepassword) - Set subaccount's password
* [CreateSubaccountJSON](#createsubaccountjson) - Create a Subaccount owned by the authenticated Reseller
* [CreateSubaccountRaw](#createsubaccountraw) - Create a Subaccount owned by the authenticated Reseller
* [Delete](#delete) - Request the deletion of a shopper profile
* [Get](#get) - Get details for the specified Shopper
* [GetStatus](#getstatus) - Get details for the specified Shopper
* [UpdateJSON](#updatejson) - Update details for the specified Shopper
* [UpdateRaw](#updateraw) - Update details for the specified Shopper

## ChangePassword

<strong>Notes:</strong><ul><li>Password set is only supported by API Resellers setting subaccount passwords.</li><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

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
    res, err := s.V1.ChangePassword(ctx, operations.ChangePasswordRequest{
        Secret: shared.Secret{
            Secret: sdk.String("P@55w0rd+"),
        },
        ShopperID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShopperID != nil {
        // handle response
    }
}
```

## CreateSubaccountJSON

Create a Subaccount owned by the authenticated Reseller

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V1.CreateSubaccountJSON(ctx, shared.SubaccountCreate{
        Email: "Rosalinda_Mitchell84@hotmail.com",
        ExternalID: sdk.Int64(423655),
        MarketID: shared.SubaccountCreateMarketIDEnumIDID.ToPointer(),
        NameFirst: "deserunt",
        NameLast: "suscipit",
        Password: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CreateSubaccountRaw

Create a Subaccount owned by the authenticated Reseller

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V1.CreateSubaccountRaw(ctx, []byte("magnam"))
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Delete

<strong>Notes:</strong><ul><li>Shopper deletion is not supported in OTE</li><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

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
    res, err := s.V1.Delete(ctx, operations.DeleteRequest{
        AuditClientIP: "debitis",
        ShopperID: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Get

<strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

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
    res, err := s.V1.Get(ctx, operations.GetRequest{
        Includes: []GetIncludesEnum{
            operations.GetIncludesEnumCustomerID,
            operations.GetIncludesEnumCustomerID,
            operations.GetIncludesEnumCustomerID,
            operations.GetIncludesEnumCustomerID,
        },
        ShopperID: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetStatus

<strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**. **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

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
    res, err := s.V1.GetStatus(ctx, operations.GetStatusRequest{
        AuditClientIP: "suscipit",
        ShopperID: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UpdateJSON

<strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

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
    res, err := s.V1.UpdateJSON(ctx, operations.UpdateJSONRequest{
        ShopperUpdate: shared.ShopperUpdate{
            Email: sdk.String("Randy_Lehner@hotmail.com"),
            ExternalID: sdk.Int64(392785),
            MarketID: shared.ShopperUpdateMarketIDEnumUkUa.ToPointer(),
            NameFirst: sdk.String("temporibus"),
            NameLast: sdk.String("ab"),
        },
        ShopperID: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UpdateRaw

<strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

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
    res, err := s.V1.UpdateRaw(ctx, operations.UpdateRawRequest{
        RequestBody: []byte("veritatis"),
        ShopperID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
