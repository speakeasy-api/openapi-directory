# SSHKeys

## Overview

SSH keys are public keys you provide to the cloud system. They can be injected into Servers at creation time. We highly recommend that you use keys instead of passwords to manage your Servers.

### Available Operations

* [DeleteSSHKeysID](#deletesshkeysid) - Delete an SSH key
* [GetSSHKeys](#getsshkeys) - Get all SSH keys
* [GetSSHKeysID](#getsshkeysid) - Get a SSH key
* [PostSSHKeys](#postsshkeys) - Create an SSH key
* [PutSSHKeysID](#putsshkeysid) - Update an SSH key

## DeleteSSHKeysID

Deletes an SSH key. It cannot be used anymore.

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
    res, err := s.SSHKeys.DeleteSSHKeysID(ctx, operations.DeleteSSHKeysIDRequest{
        ID: "909b3fe4-9a8d-49cb-b486-33323f9b77f3",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSSHKeys

Returns all SSH key objects.

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
    res, err := s.SSHKeys.GetSSHKeys(ctx, operations.GetSSHKeysRequest{
        Fingerprint: sdk.String("dolorum"),
        LabelSelector: sdk.String("numquam"),
        Name: sdk.String("Melissa Bednar"),
        Sort: operations.GetSSHKeysSortEnumIDAsc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSSHKeys200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSSHKeysID

Returns a specific SSH key object.

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
    res, err := s.SSHKeys.GetSSHKeysID(ctx, operations.GetSSHKeysIDRequest{
        ID: 881005,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSSHKeysID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSSHKeys

Creates a new SSH key with the given `name` and `public_key`. Once an SSH key is created, it can be used in other calls such as creating Servers.

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
    res, err := s.SSHKeys.PostSSHKeys(ctx, operations.PostSSHKeysRequestBody{
        Labels: map[string]interface{}{
            "voluptatibus": "voluptas",
            "natus": "eos",
            "atque": "sit",
        },
        Name: "My ssh key",
        PublicKey: "ssh-rsa AAAjjk76kgf...Xt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSSHKeys201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PutSSHKeysID

Updates an SSH key. You can update an SSH key name and an SSH key labels.

Please note that when updating labels, the SSH key current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.


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
    res, err := s.SSHKeys.PutSSHKeysID(ctx, operations.PutSSHKeysIDRequest{
        RequestBody: &operations.PutSSHKeysIDRequestBody{
            Labels: map[string]interface{}{
                "ab": "soluta",
                "dolorum": "iusto",
                "voluptate": "dolorum",
                "deleniti": "omnis",
            },
            Name: sdk.String("My ssh key"),
        },
        ID: "ebf737ae-4203-4ce5-a6a9-5d8a0d446ce2",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutSSHKeysID200ApplicationJSONObject != nil {
        // handle response
    }
}
```
