# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [CreateDocument](#createdocument)
* [CreateService](#createservice)
* [CreateStreamMessage](#createstreammessage) - Create a new Stream Message.
* [CreateSyncList](#createsynclist)
* [CreateSyncListItem](#createsynclistitem)
* [CreateSyncMap](#createsyncmap)
* [CreateSyncMapItem](#createsyncmapitem)
* [CreateSyncStream](#createsyncstream) - Create a new Stream.
* [DeleteDocument](#deletedocument)
* [DeleteDocumentPermission](#deletedocumentpermission) - Delete a specific Sync Document Permission.
* [DeleteService](#deleteservice)
* [DeleteSyncList](#deletesynclist)
* [DeleteSyncListItem](#deletesynclistitem)
* [DeleteSyncListPermission](#deletesynclistpermission) - Delete a specific Sync List Permission.
* [DeleteSyncMap](#deletesyncmap)
* [DeleteSyncMapItem](#deletesyncmapitem)
* [DeleteSyncMapPermission](#deletesyncmappermission) - Delete a specific Sync Map Permission.
* [DeleteSyncStream](#deletesyncstream) - Delete a specific Stream.
* [FetchDocument](#fetchdocument)
* [FetchDocumentPermission](#fetchdocumentpermission) - Fetch a specific Sync Document Permission.
* [FetchService](#fetchservice)
* [FetchSyncList](#fetchsynclist)
* [FetchSyncListItem](#fetchsynclistitem)
* [FetchSyncListPermission](#fetchsynclistpermission) - Fetch a specific Sync List Permission.
* [FetchSyncMap](#fetchsyncmap)
* [FetchSyncMapItem](#fetchsyncmapitem)
* [FetchSyncMapPermission](#fetchsyncmappermission) - Fetch a specific Sync Map Permission.
* [FetchSyncStream](#fetchsyncstream) - Fetch a specific Stream.
* [ListDocument](#listdocument)
* [ListDocumentPermission](#listdocumentpermission) - Retrieve a list of all Permissions applying to a Sync Document.
* [ListService](#listservice)
* [ListSyncList](#listsynclist)
* [ListSyncListItem](#listsynclistitem)
* [ListSyncListPermission](#listsynclistpermission) - Retrieve a list of all Permissions applying to a Sync List.
* [ListSyncMap](#listsyncmap)
* [ListSyncMapItem](#listsyncmapitem)
* [ListSyncMapPermission](#listsyncmappermission) - Retrieve a list of all Permissions applying to a Sync Map.
* [ListSyncStream](#listsyncstream) - Retrieve a list of all Streams in a Service Instance.
* [UpdateDocument](#updatedocument)
* [UpdateDocumentPermission](#updatedocumentpermission) - Update an identity's access to a specific Sync Document.
* [UpdateService](#updateservice)
* [UpdateSyncList](#updatesynclist)
* [UpdateSyncListItem](#updatesynclistitem)
* [UpdateSyncListPermission](#updatesynclistpermission) - Update an identity's access to a specific Sync List.
* [UpdateSyncMap](#updatesyncmap)
* [UpdateSyncMapItem](#updatesyncmapitem)
* [UpdateSyncMapPermission](#updatesyncmappermission) - Update an identity's access to a specific Sync Map.
* [UpdateSyncStream](#updatesyncstream) - Update a specific Stream.

## CreateDocument

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
    res, err := s.SDK.CreateDocument(ctx, operations.CreateDocumentRequest{
        RequestBody: &operations.CreateDocumentCreateDocumentRequest{
            Data: sdk.String("unde"),
            TTL: sdk.Int64(857946),
            UniqueName: sdk.String("corrupti"),
        },
        ServiceSid: "illum",
    }, operations.CreateDocumentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncV1ServiceDocument != nil {
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
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateService(ctx, operations.CreateServiceCreateServiceRequest{
        ACLEnabled: sdk.Bool(false),
        FriendlyName: sdk.String("vel"),
        ReachabilityDebouncingEnabled: sdk.Bool(false),
        ReachabilityDebouncingWindow: sdk.Int64(623564),
        ReachabilityWebhooksEnabled: sdk.Bool(false),
        WebhookURL: sdk.String("https://high-hound.biz"),
        WebhooksFromRestEnabled: sdk.Bool(false),
    }, operations.CreateServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncV1Service != nil {
        // handle response
    }
}
```

## CreateStreamMessage

Create a new Stream Message.

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
    res, err := s.SDK.CreateStreamMessage(ctx, operations.CreateStreamMessageRequest{
        RequestBody: &operations.CreateStreamMessageCreateStreamMessageRequest{
            Data: "debitis",
        },
        ServiceSid: "ipsa",
        StreamSid: "delectus",
    }, operations.CreateStreamMessageSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncV1ServiceSyncStreamStreamMessage != nil {
        // handle response
    }
}
```

## CreateSyncList

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
    res, err := s.SDK.CreateSyncList(ctx, operations.CreateSyncListRequest{
        RequestBody: &operations.CreateSyncListCreateSyncListRequest{
            CollectionTTL: sdk.Int64(272656),
            TTL: sdk.Int64(383441),
            UniqueName: sdk.String("molestiae"),
        },
        ServiceSid: "minus",
    }, operations.CreateSyncListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncV1ServiceSyncList != nil {
        // handle response
    }
}
```

## CreateSyncListItem

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
    res, err := s.SDK.CreateSyncListItem(ctx, operations.CreateSyncListItemRequest{
        ListSid: "placeat",
        RequestBody: &operations.CreateSyncListItemCreateSyncListItemRequest{
            CollectionTTL: sdk.Int64(528895),
            Data: "iusto",
            ItemTTL: sdk.Int64(568045),
            TTL: sdk.Int64(392785),
        },
        ServiceSid: "recusandae",
    }, operations.CreateSyncListItemSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncV1ServiceSyncListSyncListItem != nil {
        // handle response
    }
}
```

## CreateSyncMap

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
    res, err := s.SDK.CreateSyncMap(ctx, operations.CreateSyncMapRequest{
        RequestBody: &operations.CreateSyncMapCreateSyncMapRequest{
            CollectionTTL: sdk.Int64(836079),
            TTL: sdk.Int64(71036),
            UniqueName: sdk.String("quis"),
        },
        ServiceSid: "veritatis",
    }, operations.CreateSyncMapSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncV1ServiceSyncMap != nil {
        // handle response
    }
}
```

## CreateSyncMapItem

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
    res, err := s.SDK.CreateSyncMapItem(ctx, operations.CreateSyncMapItemRequest{
        MapSid: "deserunt",
        RequestBody: &operations.CreateSyncMapItemCreateSyncMapItemRequest{
            CollectionTTL: sdk.Int64(20218),
            Data: "ipsam",
            ItemTTL: sdk.Int64(832620),
            Key: "sapiente",
            TTL: sdk.Int64(778157),
        },
        ServiceSid: "odit",
    }, operations.CreateSyncMapItemSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncV1ServiceSyncMapSyncMapItem != nil {
        // handle response
    }
}
```

## CreateSyncStream

Create a new Stream.

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
    res, err := s.SDK.CreateSyncStream(ctx, operations.CreateSyncStreamRequest{
        RequestBody: &operations.CreateSyncStreamCreateSyncStreamRequest{
            TTL: sdk.Int64(870013),
            UniqueName: sdk.String("at"),
        },
        ServiceSid: "maiores",
    }, operations.CreateSyncStreamSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncV1ServiceSyncStream != nil {
        // handle response
    }
}
```

## DeleteDocument

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
    res, err := s.SDK.DeleteDocument(ctx, operations.DeleteDocumentRequest{
        ServiceSid: "molestiae",
        Sid: "quod",
    }, operations.DeleteDocumentSecurity{
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

## DeleteDocumentPermission

Delete a specific Sync Document Permission.

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
    res, err := s.SDK.DeleteDocumentPermission(ctx, operations.DeleteDocumentPermissionRequest{
        DocumentSid: "quod",
        Identity: "esse",
        ServiceSid: "totam",
    }, operations.DeleteDocumentPermissionSecurity{
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
        Sid: "porro",
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

## DeleteSyncList

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
    res, err := s.SDK.DeleteSyncList(ctx, operations.DeleteSyncListRequest{
        ServiceSid: "dolorum",
        Sid: "dicta",
    }, operations.DeleteSyncListSecurity{
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

## DeleteSyncListItem

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
    res, err := s.SDK.DeleteSyncListItem(ctx, operations.DeleteSyncListItemRequest{
        IfMatch: sdk.String("nam"),
        Index: 639921,
        ListSid: "occaecati",
        ServiceSid: "fugit",
    }, operations.DeleteSyncListItemSecurity{
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

## DeleteSyncListPermission

Delete a specific Sync List Permission.

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
    res, err := s.SDK.DeleteSyncListPermission(ctx, operations.DeleteSyncListPermissionRequest{
        Identity: "deleniti",
        ListSid: "hic",
        ServiceSid: "optio",
    }, operations.DeleteSyncListPermissionSecurity{
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

## DeleteSyncMap

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
    res, err := s.SDK.DeleteSyncMap(ctx, operations.DeleteSyncMapRequest{
        ServiceSid: "totam",
        Sid: "beatae",
    }, operations.DeleteSyncMapSecurity{
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

## DeleteSyncMapItem

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
    res, err := s.SDK.DeleteSyncMapItem(ctx, operations.DeleteSyncMapItemRequest{
        IfMatch: sdk.String("commodi"),
        Key: "molestiae",
        MapSid: "modi",
        ServiceSid: "qui",
    }, operations.DeleteSyncMapItemSecurity{
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

## DeleteSyncMapPermission

Delete a specific Sync Map Permission.

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
    res, err := s.SDK.DeleteSyncMapPermission(ctx, operations.DeleteSyncMapPermissionRequest{
        Identity: "impedit",
        MapSid: "cum",
        ServiceSid: "esse",
    }, operations.DeleteSyncMapPermissionSecurity{
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

## DeleteSyncStream

Delete a specific Stream.

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
    res, err := s.SDK.DeleteSyncStream(ctx, operations.DeleteSyncStreamRequest{
        ServiceSid: "ipsum",
        Sid: "excepturi",
    }, operations.DeleteSyncStreamSecurity{
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

## FetchDocument

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
    res, err := s.SDK.FetchDocument(ctx, operations.FetchDocumentRequest{
        ServiceSid: "aspernatur",
        Sid: "perferendis",
    }, operations.FetchDocumentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncV1ServiceDocument != nil {
        // handle response
    }
}
```

## FetchDocumentPermission

Fetch a specific Sync Document Permission.

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
    res, err := s.SDK.FetchDocumentPermission(ctx, operations.FetchDocumentPermissionRequest{
        DocumentSid: "ad",
        Identity: "natus",
        ServiceSid: "sed",
    }, operations.FetchDocumentPermissionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncV1ServiceDocumentDocumentPermission != nil {
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
        Sid: "iste",
    }, operations.FetchServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncV1Service != nil {
        // handle response
    }
}
```

## FetchSyncList

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
    res, err := s.SDK.FetchSyncList(ctx, operations.FetchSyncListRequest{
        ServiceSid: "dolor",
        Sid: "natus",
    }, operations.FetchSyncListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncV1ServiceSyncList != nil {
        // handle response
    }
}
```

## FetchSyncListItem

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
    res, err := s.SDK.FetchSyncListItem(ctx, operations.FetchSyncListItemRequest{
        Index: 386489,
        ListSid: "hic",
        ServiceSid: "saepe",
    }, operations.FetchSyncListItemSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncV1ServiceSyncListSyncListItem != nil {
        // handle response
    }
}
```

## FetchSyncListPermission

Fetch a specific Sync List Permission.

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
    res, err := s.SDK.FetchSyncListPermission(ctx, operations.FetchSyncListPermissionRequest{
        Identity: "fuga",
        ListSid: "in",
        ServiceSid: "corporis",
    }, operations.FetchSyncListPermissionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncV1ServiceSyncListSyncListPermission != nil {
        // handle response
    }
}
```

## FetchSyncMap

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
    res, err := s.SDK.FetchSyncMap(ctx, operations.FetchSyncMapRequest{
        ServiceSid: "iste",
        Sid: "iure",
    }, operations.FetchSyncMapSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncV1ServiceSyncMap != nil {
        // handle response
    }
}
```

## FetchSyncMapItem

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
    res, err := s.SDK.FetchSyncMapItem(ctx, operations.FetchSyncMapItemRequest{
        Key: "saepe",
        MapSid: "quidem",
        ServiceSid: "architecto",
    }, operations.FetchSyncMapItemSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncV1ServiceSyncMapSyncMapItem != nil {
        // handle response
    }
}
```

## FetchSyncMapPermission

Fetch a specific Sync Map Permission.

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
    res, err := s.SDK.FetchSyncMapPermission(ctx, operations.FetchSyncMapPermissionRequest{
        Identity: "ipsa",
        MapSid: "reiciendis",
        ServiceSid: "est",
    }, operations.FetchSyncMapPermissionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncV1ServiceSyncMapSyncMapPermission != nil {
        // handle response
    }
}
```

## FetchSyncStream

Fetch a specific Stream.

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
    res, err := s.SDK.FetchSyncStream(ctx, operations.FetchSyncStreamRequest{
        ServiceSid: "mollitia",
        Sid: "laborum",
    }, operations.FetchSyncStreamSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncV1ServiceSyncStream != nil {
        // handle response
    }
}
```

## ListDocument

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
    res, err := s.SDK.ListDocument(ctx, operations.ListDocumentRequest{
        Page: sdk.Int64(170909),
        PageSize: sdk.Int64(210382),
        PageToken: sdk.String("corporis"),
        ServiceSid: "explicabo",
    }, operations.ListDocumentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDocumentResponse != nil {
        // handle response
    }
}
```

## ListDocumentPermission

Retrieve a list of all Permissions applying to a Sync Document.

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
    res, err := s.SDK.ListDocumentPermission(ctx, operations.ListDocumentPermissionRequest{
        DocumentSid: "nobis",
        Page: sdk.Int64(315428),
        PageSize: sdk.Int64(607831),
        PageToken: sdk.String("nemo"),
        ServiceSid: "minima",
    }, operations.ListDocumentPermissionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDocumentPermissionResponse != nil {
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
        Page: sdk.Int64(570197),
        PageSize: sdk.Int64(38425),
        PageToken: sdk.String("iure"),
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

## ListSyncList

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
    res, err := s.SDK.ListSyncList(ctx, operations.ListSyncListRequest{
        Page: sdk.Int64(634274),
        PageSize: sdk.Int64(988374),
        PageToken: sdk.String("sapiente"),
        ServiceSid: "architecto",
    }, operations.ListSyncListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSyncListResponse != nil {
        // handle response
    }
}
```

## ListSyncListItem

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
    res, err := s.SDK.ListSyncListItem(ctx, operations.ListSyncListItemRequest{
        Bounds: shared.SyncListItemEnumQueryFromBoundTypeEnumExclusive.ToPointer(),
        From: sdk.String("dolorem"),
        ListSid: "culpa",
        Order: shared.SyncListItemEnumQueryResultOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(995300),
        PageSize: sdk.Int64(653108),
        PageToken: sdk.String("occaecati"),
        ServiceSid: "numquam",
    }, operations.ListSyncListItemSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSyncListItemResponse != nil {
        // handle response
    }
}
```

## ListSyncListPermission

Retrieve a list of all Permissions applying to a Sync List.

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
    res, err := s.SDK.ListSyncListPermission(ctx, operations.ListSyncListPermissionRequest{
        ListSid: "commodi",
        Page: sdk.Int64(466311),
        PageSize: sdk.Int64(474697),
        PageToken: sdk.String("velit"),
        ServiceSid: "error",
    }, operations.ListSyncListPermissionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSyncListPermissionResponse != nil {
        // handle response
    }
}
```

## ListSyncMap

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
    res, err := s.SDK.ListSyncMap(ctx, operations.ListSyncMapRequest{
        Page: sdk.Int64(158969),
        PageSize: sdk.Int64(338007),
        PageToken: sdk.String("vitae"),
        ServiceSid: "laborum",
    }, operations.ListSyncMapSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSyncMapResponse != nil {
        // handle response
    }
}
```

## ListSyncMapItem

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
    res, err := s.SDK.ListSyncMapItem(ctx, operations.ListSyncMapItemRequest{
        Bounds: shared.SyncMapItemEnumQueryFromBoundTypeEnumExclusive.ToPointer(),
        From: sdk.String("enim"),
        MapSid: "odit",
        Order: shared.SyncMapItemEnumQueryResultOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(196582),
        PageSize: sdk.Int64(949572),
        PageToken: sdk.String("ipsam"),
        ServiceSid: "id",
    }, operations.ListSyncMapItemSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSyncMapItemResponse != nil {
        // handle response
    }
}
```

## ListSyncMapPermission

Retrieve a list of all Permissions applying to a Sync Map.

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
    res, err := s.SDK.ListSyncMapPermission(ctx, operations.ListSyncMapPermissionRequest{
        MapSid: "possimus",
        Page: sdk.Int64(13571),
        PageSize: sdk.Int64(97101),
        PageToken: sdk.String("error"),
        ServiceSid: "temporibus",
    }, operations.ListSyncMapPermissionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSyncMapPermissionResponse != nil {
        // handle response
    }
}
```

## ListSyncStream

Retrieve a list of all Streams in a Service Instance.

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
    res, err := s.SDK.ListSyncStream(ctx, operations.ListSyncStreamRequest{
        Page: sdk.Int64(673660),
        PageSize: sdk.Int64(96098),
        PageToken: sdk.String("reiciendis"),
        ServiceSid: "voluptatibus",
    }, operations.ListSyncStreamSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSyncStreamResponse != nil {
        // handle response
    }
}
```

## UpdateDocument

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
    res, err := s.SDK.UpdateDocument(ctx, operations.UpdateDocumentRequest{
        IfMatch: sdk.String("vero"),
        RequestBody: &operations.UpdateDocumentUpdateDocumentRequest{
            Data: sdk.String("nihil"),
            TTL: sdk.Int64(509624),
        },
        ServiceSid: "voluptatibus",
        Sid: "ipsa",
    }, operations.UpdateDocumentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncV1ServiceDocument != nil {
        // handle response
    }
}
```

## UpdateDocumentPermission

Update an identity's access to a specific Sync Document.

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
    res, err := s.SDK.UpdateDocumentPermission(ctx, operations.UpdateDocumentPermissionRequest{
        DocumentSid: "omnis",
        Identity: "voluptate",
        RequestBody: &operations.UpdateDocumentPermissionUpdateDocumentPermissionRequest{
            Manage: false,
            Read: false,
            Write: false,
        },
        ServiceSid: "cum",
    }, operations.UpdateDocumentPermissionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncV1ServiceDocumentDocumentPermission != nil {
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
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateService(ctx, operations.UpdateServiceRequest{
        RequestBody: &operations.UpdateServiceUpdateServiceRequest{
            ACLEnabled: sdk.Bool(false),
            FriendlyName: sdk.String("perferendis"),
            ReachabilityDebouncingEnabled: sdk.Bool(false),
            ReachabilityDebouncingWindow: sdk.Int64(39187),
            ReachabilityWebhooksEnabled: sdk.Bool(false),
            WebhookURL: sdk.String("http://finished-whisker.com"),
            WebhooksFromRestEnabled: sdk.Bool(false),
        },
        Sid: "corporis",
    }, operations.UpdateServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncV1Service != nil {
        // handle response
    }
}
```

## UpdateSyncList

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
    res, err := s.SDK.UpdateSyncList(ctx, operations.UpdateSyncListRequest{
        RequestBody: &operations.UpdateSyncListUpdateSyncListRequest{
            CollectionTTL: sdk.Int64(296140),
            TTL: sdk.Int64(480894),
        },
        ServiceSid: "dicta",
        Sid: "harum",
    }, operations.UpdateSyncListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncV1ServiceSyncList != nil {
        // handle response
    }
}
```

## UpdateSyncListItem

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
    res, err := s.SDK.UpdateSyncListItem(ctx, operations.UpdateSyncListItemRequest{
        IfMatch: sdk.String("enim"),
        Index: 880476,
        ListSid: "commodi",
        RequestBody: &operations.UpdateSyncListItemUpdateSyncListItemRequest{
            CollectionTTL: sdk.Int64(918236),
            Data: sdk.String("quae"),
            ItemTTL: sdk.Int64(216822),
            TTL: sdk.Int64(692472),
        },
        ServiceSid: "molestias",
    }, operations.UpdateSyncListItemSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncV1ServiceSyncListSyncListItem != nil {
        // handle response
    }
}
```

## UpdateSyncListPermission

Update an identity's access to a specific Sync List.

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
    res, err := s.SDK.UpdateSyncListPermission(ctx, operations.UpdateSyncListPermissionRequest{
        Identity: "excepturi",
        ListSid: "pariatur",
        RequestBody: &operations.UpdateSyncListPermissionUpdateSyncListPermissionRequest{
            Manage: false,
            Read: false,
            Write: false,
        },
        ServiceSid: "modi",
    }, operations.UpdateSyncListPermissionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncV1ServiceSyncListSyncListPermission != nil {
        // handle response
    }
}
```

## UpdateSyncMap

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
    res, err := s.SDK.UpdateSyncMap(ctx, operations.UpdateSyncMapRequest{
        RequestBody: &operations.UpdateSyncMapUpdateSyncMapRequest{
            CollectionTTL: sdk.Int64(508969),
            TTL: sdk.Int64(523248),
        },
        ServiceSid: "voluptates",
        Sid: "quasi",
    }, operations.UpdateSyncMapSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncV1ServiceSyncMap != nil {
        // handle response
    }
}
```

## UpdateSyncMapItem

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
    res, err := s.SDK.UpdateSyncMapItem(ctx, operations.UpdateSyncMapItemRequest{
        IfMatch: sdk.String("repudiandae"),
        Key: "sint",
        MapSid: "veritatis",
        RequestBody: &operations.UpdateSyncMapItemUpdateSyncMapItemRequest{
            CollectionTTL: sdk.Int64(929297),
            Data: sdk.String("incidunt"),
            ItemTTL: sdk.Int64(318569),
            TTL: sdk.Int64(9356),
        },
        ServiceSid: "est",
    }, operations.UpdateSyncMapItemSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncV1ServiceSyncMapSyncMapItem != nil {
        // handle response
    }
}
```

## UpdateSyncMapPermission

Update an identity's access to a specific Sync Map.

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
    res, err := s.SDK.UpdateSyncMapPermission(ctx, operations.UpdateSyncMapPermissionRequest{
        Identity: "quibusdam",
        MapSid: "explicabo",
        RequestBody: &operations.UpdateSyncMapPermissionUpdateSyncMapPermissionRequest{
            Manage: false,
            Read: false,
            Write: false,
        },
        ServiceSid: "deserunt",
    }, operations.UpdateSyncMapPermissionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncV1ServiceSyncMapSyncMapPermission != nil {
        // handle response
    }
}
```

## UpdateSyncStream

Update a specific Stream.

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
    res, err := s.SDK.UpdateSyncStream(ctx, operations.UpdateSyncStreamRequest{
        RequestBody: &operations.UpdateSyncStreamUpdateSyncStreamRequest{
            TTL: sdk.Int64(716327),
        },
        ServiceSid: "quibusdam",
        Sid: "labore",
    }, operations.UpdateSyncStreamSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncV1ServiceSyncStream != nil {
        // handle response
    }
}
```
