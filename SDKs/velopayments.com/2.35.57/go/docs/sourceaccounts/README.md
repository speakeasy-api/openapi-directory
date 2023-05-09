# SourceAccounts

## Overview

<p>Source Accounts are where funds are drawn from for making payouts</p>


### Available Operations

* [~~GetSourceAccountV2~~](#getsourceaccountv2) - Get Source Account :warning: **Deprecated**
* [GetSourceAccountV3](#getsourceaccountv3) - Get details about given source account.
* [~~GetSourceAccountsV2~~](#getsourceaccountsv2) - Get list of source accounts :warning: **Deprecated**
* [GetSourceAccountsV3](#getsourceaccountsv3) - Get list of source accounts
* [~~SetNotificationsRequest~~](#setnotificationsrequest) - Set notifications :warning: **Deprecated**
* [SetNotificationsRequestV3](#setnotificationsrequestv3) - Set notifications
* [~~TransferFundsV2~~](#transferfundsv2) - Transfer Funds between source accounts :warning: **Deprecated**
* [TransferFundsV3](#transferfundsv3) - Transfer Funds between source accounts

## ~~GetSourceAccountV2~~

Get details about given source account.

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
    res, err := s.SourceAccounts.GetSourceAccountV2(ctx, operations.GetSourceAccountV2Request{
        SourceAccountID: "3f225741-1faf-44b7-944e-472e802857a5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SourceAccountResponseV2 != nil {
        // handle response
    }
}
```

## GetSourceAccountV3

Get details about given source account.

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
    res, err := s.SourceAccounts.GetSourceAccountV3(ctx, operations.GetSourceAccountV3Request{
        SourceAccountID: "b40463a7-d575-4f14-80e7-64ad7334ec1b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SourceAccountResponseV3 != nil {
        // handle response
    }
}
```

## ~~GetSourceAccountsV2~~

List source accounts.

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
    res, err := s.SourceAccounts.GetSourceAccountsV2(ctx, operations.GetSourceAccountsV2Request{
        FundingAccountID: sdk.String("781b36a0-8088-4d10-8efa-da200ef0422e"),
        Page: sdk.Int(691508),
        PageSize: sdk.Int(126727),
        PayorID: sdk.String("164cf9ab-8366-4c72-bffd-a9e06bee4825"),
        PhysicalAccountID: sdk.String("c1fc0e11-5c80-4bff-9185-44ec42defcce"),
        PhysicalAccountName: sdk.String("totam"),
        Sort: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSourceAccountResponseV2 != nil {
        // handle response
    }
}
```

## GetSourceAccountsV3

List source accounts.

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
    res, err := s.SourceAccounts.GetSourceAccountsV3(ctx, operations.GetSourceAccountsV3Request{
        FundingAccountID: sdk.String("1977773e-6356-42a7-b408-f05e3d48fdaf"),
        IncludeUserDeleted: sdk.String("velit"),
        Page: sdk.Int(110522),
        PageSize: sdk.Int(201096),
        PayorID: sdk.String("a1f5fd94-259c-40b3-af25-ea944f3b756c"),
        PhysicalAccountID: sdk.String("11f6c37a-5126-4243-835b-bc05a23a45ce"),
        PhysicalAccountName: sdk.String("a"),
        Sort: sdk.String("quisquam"),
        Type: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSourceAccountResponseV3 != nil {
        // handle response
    }
}
```

## ~~SetNotificationsRequest~~

<p>Set notifications for a given source account</p>
<p>deprecated since 2.34 (use v3 version)</p>


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SourceAccounts.SetNotificationsRequest(ctx, operations.SetNotificationsRequestRequest{
        SetNotificationsRequest: shared.SetNotificationsRequest{
            MinimumBalance: 987759,
        },
        SourceAccountID: "de10a0ce-2169-4e51-8019-c6dc5e347627",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SetNotificationsRequestV3

<p>Set notifications for a given source account</p>
<p>If the balance falls below the amount set in the request an email notification will be sent to the email address registered in the payor profile</p>


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
    res, err := s.SourceAccounts.SetNotificationsRequestV3(ctx, operations.SetNotificationsRequestV3Request{
        SetNotificationsRequest2: shared.SetNotificationsRequest2{
            MinimumBalance: 10000000,
        },
        SourceAccountID: "99bfbbe6-949f-4b2b-b4ec-ae6c3d5db3ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~TransferFundsV2~~

Transfer funds between source accounts for a Payor. The 'from' source account is identified in the URL, and is the account which will be debited. The 'to' (destination) source account is in the body, and is the account which will be credited. Both source accounts must belong to the same Payor. There must be sufficient balance in the 'from' source account, otherwise the transfer attempt will fail.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SourceAccounts.TransferFundsV2(ctx, operations.TransferFundsV2Request{
        TransferRequestV2: shared.TransferRequestV2{
            Amount: 927977,
            Currency: "USD",
            ToSourceAccountID: "bd5daea4-c506-4a8a-a94c-02644cf5e9d9",
        },
        SourceAccountID: "a4578adc-1ac6-400d-ac00-1ac802e2ec09",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TransferFundsV3

Transfer funds between source accounts for a Payor. The 'from' source account is identified in the URL, and is the account which will be debited. The 'to' (destination) source account is in the body, and is the account which will be credited. Both source accounts must belong to the same Payor. There must be sufficient balance in the 'from' source account, otherwise the transfer attempt will fail.

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
    res, err := s.SourceAccounts.TransferFundsV3(ctx, operations.TransferFundsV3Request{
        TransferRequestV3: shared.TransferRequestV3{
            Amount: 950956,
            Currency: "USD",
            ToSourceAccountID: "f8f0f816-ff34-477c-93e9-02c14125b096",
        },
        SourceAccountID: "0a668151-a472-4af9-a3c5-949f83f350cf",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
