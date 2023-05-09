# Apikeys

## Overview

Everything about Otoroshi api keys

### Available Operations

* [AllAPIKeys](#allapikeys) - Get all api keys
* [APIKey](#apikey) - Get an api key
* [APIKeyFromGroup](#apikeyfromgroup) - Get an api key
* [APIKeyFromGroupQuotas](#apikeyfromgroupquotas) - Get the quota state of an api key
* [APIKeyGroup](#apikeygroup) - Get the group of an api key
* [APIKeyQuotas](#apikeyquotas) - Get the quota state of an api key
* [APIKeys](#apikeys) - Get all api keys for the group of a service
* [APIKeysFromGroup](#apikeysfromgroup) - Get all api keys for the group of a service
* [CreateAPIKey](#createapikey) - Create a new api key for a service
* [CreateAPIKeyFromGroup](#createapikeyfromgroup) - Create a new api key for a group
* [DeleteAPIKey](#deleteapikey) - Delete an api key
* [DeleteAPIKeyFromGroup](#deleteapikeyfromgroup) - Delete an api key
* [PatchAPIKey](#patchapikey) - Update an api key with a diff
* [PatchAPIKeyFromGroup](#patchapikeyfromgroup) - Update an api key with a diff
* [ResetAPIKeyFromGroupQuotas](#resetapikeyfromgroupquotas) - Reset the quota state of an api key
* [ResetAPIKeyQuotas](#resetapikeyquotas) - Reset the quota state of an api key
* [UpdateAPIKey](#updateapikey) - Update an api key
* [UpdateAPIKeyFromGroup](#updateapikeyfromgroup) - Update an api key

## AllAPIKeys

Get all api keys

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
    res, err := s.Apikeys.AllAPIKeys(ctx, operations.AllAPIKeysSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKeys != nil {
        // handle response
    }
}
```

## APIKey

Get an api key for a specified service descriptor

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
    res, err := s.Apikeys.APIKey(ctx, operations.APIKeyRequest{
        ClientID: "corrupti",
        ServiceID: "provident",
    }, operations.APIKeySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKey != nil {
        // handle response
    }
}
```

## APIKeyFromGroup

Get an api key for a specified service group

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
    res, err := s.Apikeys.APIKeyFromGroup(ctx, operations.APIKeyFromGroupRequest{
        ClientID: "distinctio",
        GroupID: "quibusdam",
    }, operations.APIKeyFromGroupSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKey != nil {
        // handle response
    }
}
```

## APIKeyFromGroupQuotas

Get the quota state of an api key

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
    res, err := s.Apikeys.APIKeyFromGroupQuotas(ctx, operations.APIKeyFromGroupQuotasRequest{
        ClientID: "unde",
        GroupID: "nulla",
    }, operations.APIKeyFromGroupQuotasSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Quotas != nil {
        // handle response
    }
}
```

## APIKeyGroup

Get the group of an api key

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
    res, err := s.Apikeys.APIKeyGroup(ctx, operations.APIKeyGroupRequest{
        ClientID: "corrupti",
        ServiceID: "illum",
    }, operations.APIKeyGroupSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Group != nil {
        // handle response
    }
}
```

## APIKeyQuotas

Get the quota state of an api key

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
    res, err := s.Apikeys.APIKeyQuotas(ctx, operations.APIKeyQuotasRequest{
        ClientID: "vel",
        ServiceID: "error",
    }, operations.APIKeyQuotasSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Quotas != nil {
        // handle response
    }
}
```

## APIKeys

Get all api keys for the group of a service

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
    res, err := s.Apikeys.APIKeys(ctx, operations.APIKeysRequest{
        ServiceID: "deserunt",
    }, operations.APIKeysSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKeys != nil {
        // handle response
    }
}
```

## APIKeysFromGroup

Get all api keys for the group of a service

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
    res, err := s.Apikeys.APIKeysFromGroup(ctx, operations.APIKeysFromGroupRequest{
        GroupID: "suscipit",
    }, operations.APIKeysFromGroupSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKeys != nil {
        // handle response
    }
}
```

## CreateAPIKey

Create a new api key for a service

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
    res, err := s.Apikeys.CreateAPIKey(ctx, operations.CreateAPIKeyRequest{
        APIKey: &shared.APIKey{
            AuthorizedEntities: []string{
                "a string value",
                "a string value",
            },
            ClientID: "a string value",
            ClientName: "a string value",
            ClientSecret: "a string value",
            DailyQuota: sdk.Int64(123),
            Enabled: true,
            Metadata: map[string]string{
                "debitis": "ipsa",
                "delectus": "tempora",
            },
            MonthlyQuota: sdk.Int64(123),
            ThrottlingQuota: sdk.Int64(123),
        },
        ServiceID: "suscipit",
    }, operations.CreateAPIKeySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKey != nil {
        // handle response
    }
}
```

## CreateAPIKeyFromGroup

Create a new api key for a group

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
    res, err := s.Apikeys.CreateAPIKeyFromGroup(ctx, operations.CreateAPIKeyFromGroupRequest{
        APIKey: &shared.APIKey{
            AuthorizedEntities: []string{
                "a string value",
                "a string value",
            },
            ClientID: "a string value",
            ClientName: "a string value",
            ClientSecret: "a string value",
            DailyQuota: sdk.Int64(123),
            Enabled: true,
            Metadata: map[string]string{
                "placeat": "voluptatum",
                "iusto": "excepturi",
                "nisi": "recusandae",
                "temporibus": "ab",
            },
            MonthlyQuota: sdk.Int64(123),
            ThrottlingQuota: sdk.Int64(123),
        },
        GroupID: "quis",
    }, operations.CreateAPIKeyFromGroupSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKey != nil {
        // handle response
    }
}
```

## DeleteAPIKey

Delete an api key for a specified service descriptor

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
    res, err := s.Apikeys.DeleteAPIKey(ctx, operations.DeleteAPIKeyRequest{
        ClientID: "veritatis",
        ServiceID: "deserunt",
    }, operations.DeleteAPIKeySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Deleted != nil {
        // handle response
    }
}
```

## DeleteAPIKeyFromGroup

Delete an api key for a specified service group

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
    res, err := s.Apikeys.DeleteAPIKeyFromGroup(ctx, operations.DeleteAPIKeyFromGroupRequest{
        ClientID: "perferendis",
        GroupID: "ipsam",
    }, operations.DeleteAPIKeyFromGroupSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Deleted != nil {
        // handle response
    }
}
```

## PatchAPIKey

Update an api key for a specified service descriptor with a diff

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
    res, err := s.Apikeys.PatchAPIKey(ctx, operations.PatchAPIKeyRequest{
        RequestBody: []shared.Patch{
            shared.Patch{
                Op: shared.PatchOpEnumTest,
                Path: "a string value",
                Value: sdk.String("quo"),
            },
            shared.Patch{
                Op: shared.PatchOpEnumAdd,
                Path: "a string value",
                Value: sdk.String("at"),
            },
            shared.Patch{
                Op: shared.PatchOpEnumTest,
                Path: "a string value",
                Value: sdk.String("maiores"),
            },
            shared.Patch{
                Op: shared.PatchOpEnumRemove,
                Path: "a string value",
                Value: sdk.String("quod"),
            },
        },
        ClientID: "quod",
        ServiceID: "esse",
    }, operations.PatchAPIKeySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKey != nil {
        // handle response
    }
}
```

## PatchAPIKeyFromGroup

Update an api key for a specified service descriptor with a diff

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
    res, err := s.Apikeys.PatchAPIKeyFromGroup(ctx, operations.PatchAPIKeyFromGroupRequest{
        RequestBody: []shared.Patch{
            shared.Patch{
                Op: shared.PatchOpEnumCopy,
                Path: "a string value",
                Value: sdk.String("dolorum"),
            },
            shared.Patch{
                Op: shared.PatchOpEnumAdd,
                Path: "a string value",
                Value: sdk.String("nam"),
            },
            shared.Patch{
                Op: shared.PatchOpEnumCopy,
                Path: "a string value",
                Value: sdk.String("occaecati"),
            },
        },
        ClientID: "fugit",
        GroupID: "deleniti",
    }, operations.PatchAPIKeyFromGroupSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKey != nil {
        // handle response
    }
}
```

## ResetAPIKeyFromGroupQuotas

Reset the quota state of an api key

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
    res, err := s.Apikeys.ResetAPIKeyFromGroupQuotas(ctx, operations.ResetAPIKeyFromGroupQuotasRequest{
        ClientID: "hic",
        GroupID: "optio",
    }, operations.ResetAPIKeyFromGroupQuotasSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Quotas != nil {
        // handle response
    }
}
```

## ResetAPIKeyQuotas

Reset the quota state of an api key

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
    res, err := s.Apikeys.ResetAPIKeyQuotas(ctx, operations.ResetAPIKeyQuotasRequest{
        ClientID: "totam",
        ServiceID: "beatae",
    }, operations.ResetAPIKeyQuotasSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Quotas != nil {
        // handle response
    }
}
```

## UpdateAPIKey

Update an api key for a specified service descriptor

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
    res, err := s.Apikeys.UpdateAPIKey(ctx, operations.UpdateAPIKeyRequest{
        APIKey: &shared.APIKey{
            AuthorizedEntities: []string{
                "a string value",
                "a string value",
            },
            ClientID: "a string value",
            ClientName: "a string value",
            ClientSecret: "a string value",
            DailyQuota: sdk.Int64(123),
            Enabled: true,
            Metadata: map[string]string{
                "modi": "qui",
                "impedit": "cum",
            },
            MonthlyQuota: sdk.Int64(123),
            ThrottlingQuota: sdk.Int64(123),
        },
        ClientID: "esse",
        ServiceID: "ipsum",
    }, operations.UpdateAPIKeySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKey != nil {
        // handle response
    }
}
```

## UpdateAPIKeyFromGroup

Update an api key for a specified service group

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
    res, err := s.Apikeys.UpdateAPIKeyFromGroup(ctx, operations.UpdateAPIKeyFromGroupRequest{
        APIKey: &shared.APIKey{
            AuthorizedEntities: []string{
                "a string value",
                "a string value",
                "a string value",
            },
            ClientID: "a string value",
            ClientName: "a string value",
            ClientSecret: "a string value",
            DailyQuota: sdk.Int64(123),
            Enabled: true,
            Metadata: map[string]string{
                "perferendis": "ad",
            },
            MonthlyQuota: sdk.Int64(123),
            ThrottlingQuota: sdk.Int64(123),
        },
        ClientID: "natus",
        GroupID: "sed",
    }, operations.UpdateAPIKeyFromGroupSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKey != nil {
        // handle response
    }
}
```
