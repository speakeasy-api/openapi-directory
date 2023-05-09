# Keys

## Overview

The `keys` resource contains the access keys used to authenticate requests to this API.

Note that this resource is only accessible for administrator users logged into the Brain Management Console.
It is not possible to access this resource using API key authentication.
This resource is therefore irrelevant to most applications.


### Available Operations

* [AddKey](#addkey) - Create key
* [DeleteKey](#deletekey) - Delete key
* [GetKeyByID](#getkeybyid) - Get key
* [GetKeys](#getkeys) - Get all keys
* [UpdateKey](#updatekey) - Update existing key

## AddKey

Can only be used by an **administrative** user.

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
    res, err := s.Keys.AddKey(ctx, shared.KeyInput{
        IsReadOnly: sdk.Bool(false),
        Label: sdk.String("ea"),
    }, operations.AddKeySecurity{
        CookieSid: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```

## DeleteKey

Can only be used by an **administrative** user.

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
    res, err := s.Keys.DeleteKey(ctx, operations.DeleteKeyRequest{
        ID: "92601fb5-76b0-4d5f-8d30-c5fbb2587053",
    }, operations.DeleteKeySecurity{
        CookieSid: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```

## GetKeyByID

Can only be used by an **administrative** user.

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
    res, err := s.Keys.GetKeyByID(ctx, operations.GetKeyByIDRequest{
        ID: "202c73d5-fe9b-490c-a890-9b3fe49a8d9c",
    }, operations.GetKeyByIDSecurity{
        CookieSid: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Key != nil {
        // handle response
    }
}
```

## GetKeys

Can only be used by an **administrative** user.

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
    res, err := s.Keys.GetKeys(ctx, operations.GetKeysRequest{
        After: types.MustTimeFromString("2021-01-26T22:08:21.462Z"),
        AfterID: sdk.String("quaerat"),
        Before: sdk.String("quos"),
        BeforeID: sdk.String("aliquid"),
        From: sdk.String("dolorem"),
        FromID: sdk.String("dolorem"),
        ID: sdk.String("5b7d6cbd7503c445552a1664"),
        IDOnly: sdk.Bool(false),
        IsReadOnly: sdk.Bool(false),
        Label: sdk.String("dolor"),
        Limit: sdk.Int64(186193),
        Populate: sdk.String("ipsum"),
        ResultsOnly: sdk.Bool(false),
        Secret: sdk.String("hic"),
        Select: sdk.String("excepturi"),
        Sort: sdk.String("cum"),
        TimeCreated: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeUpdated: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeoutS: sdk.Float64(4521.09),
        Until: sdk.String("dignissimos"),
        UntilID: sdk.String("reiciendis"),
    }, operations.GetKeysSecurity{
        CookieSid: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetKeys200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateKey

Can only be used by an **administrative** user.

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
    res, err := s.Keys.UpdateKey(ctx, operations.UpdateKeyRequest{
        KeyInput: shared.KeyInput{
            IsReadOnly: sdk.Bool(false),
            Label: sdk.String("amet"),
        },
        ID: "a4100674-ebf6-4928-8d1b-a77a89ebf737",
    }, operations.UpdateKeySecurity{
        CookieSid: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```
