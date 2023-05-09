# Glossary

### Available Operations

* [CreateGlossaryJSON](#createglossaryjson) - Upload a glossary file
* [CreateGlossaryMultipart](#createglossarymultipart) - Upload a glossary file
* [DeleteGlossary](#deleteglossary) - Delete a glossary
* [DownloadGlobalGlossary](#downloadglobalglossary) - Download account glossary.
* [DownloadGlossary](#downloadglossary) - Download a glossary
* [GetGlossaries](#getglossaries) - View glossaries
* [GetGlossary](#getglossary) - View a glossary
* [UpdateGlobalGlossaryJSON](#updateglobalglossaryjson) - Create or update the account glossary
* [UpdateGlobalGlossaryMultipart](#updateglobalglossarymultipart) - Create or update the account glossary
* [UpdateGlossaryJSON](#updateglossaryjson) - Update a glossary
* [UpdateGlossaryMultipart](#updateglossarymultipart) - Update a glossary

## CreateGlossaryJSON

Upload a new glossary file to your project to be used during translation. Glossaries can be CSV or TBX files.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Glossary.CreateGlossaryJSON(ctx, operations.CreateGlossaryJSONRequest{
        GlossaryUploadRequest: &shared.GlossaryUploadRequest{
            Glossaries: []byte("esse"),
        },
        ProjectID: 687488,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Glossary != nil {
        // handle response
    }
}
```

## CreateGlossaryMultipart

Upload a new glossary file to your project to be used during translation. Glossaries can be CSV or TBX files.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Glossary.CreateGlossaryMultipart(ctx, operations.CreateGlossaryMultipartRequest{
        GlossaryUploadRequest1: &shared.GlossaryUploadRequest1{
            Glossaries: shared.GlossaryUploadRequestGlossaries{
                Content: []byte("iusto"),
                Glossaries: "ipsum",
            },
        },
        ProjectID: 788740,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Glossary != nil {
        // handle response
    }
}
```

## DeleteGlossary

Delete the existing glossary from the project.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Glossary.DeleteGlossary(ctx, operations.DeleteGlossaryRequest{
        GlossaryID: 947371,
        ProjectID: 229442,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## DownloadGlobalGlossary

Download your corporate account's global glossary. This endpoint is available only for corporate account customers. This glossary will be automatically attached to each new project under your account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Glossary.DownloadGlobalGlossary(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.DownloadGlobalGlossary200ApplicationJSONString != nil {
        // handle response
    }
}
```

## DownloadGlossary

Download a previously uploaded glossary file.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Glossary.DownloadGlossary(ctx, operations.DownloadGlossaryRequest{
        GlossaryID: 730856,
        ProjectID: 880298,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DownloadGlossary200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetGlossaries

View a list of glossaries previously uploaded to the project.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Glossary.GetGlossaries(ctx, operations.GetGlossariesRequest{
        ProjectID: 253941,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GlossaryList != nil {
        // handle response
    }
}
```

## GetGlossary

View the details of a glossary file uploaded to a project.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Glossary.GetGlossary(ctx, operations.GetGlossaryRequest{
        GlossaryID: 313692,
        ProjectID: 213312,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Glossary != nil {
        // handle response
    }
}
```

## UpdateGlobalGlossaryJSON

Update your corporate account's global glossary. This endpoint is available only for corporate account customers. This glossary will be automatically attached to each new project under your account.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Glossary.UpdateGlobalGlossaryJSON(ctx, shared.AccountGlossaryUploadRequest{
        Glossary: []byte("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## UpdateGlobalGlossaryMultipart

Update your corporate account's global glossary. This endpoint is available only for corporate account customers. This glossary will be automatically attached to each new project under your account.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Glossary.UpdateGlobalGlossaryMultipart(ctx, shared.AccountGlossaryUploadRequest1{
        Glossary: shared.AccountGlossaryUploadRequestGlossary{
            Content: []byte("totam"),
            Glossary: "nihil",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## UpdateGlossaryJSON

Update the existing glossary file in the project. Public users are allowed to have only 1 glossary per project and file name and contents will replaced with the new glossary file that you are uploading via this endpoint.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Glossary.UpdateGlossaryJSON(ctx, operations.UpdateGlossaryJSONRequest{
        GlossaryUploadRequest: &shared.GlossaryUploadRequest{
            Glossaries: []byte("sit"),
        },
        GlossaryID: 711584,
        ProjectID: 207470,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Glossary != nil {
        // handle response
    }
}
```

## UpdateGlossaryMultipart

Update the existing glossary file in the project. Public users are allowed to have only 1 glossary per project and file name and contents will replaced with the new glossary file that you are uploading via this endpoint.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Glossary.UpdateGlossaryMultipart(ctx, operations.UpdateGlossaryMultipartRequest{
        GlossaryUploadRequest1: &shared.GlossaryUploadRequest1{
            Glossaries: shared.GlossaryUploadRequestGlossaries{
                Content: []byte("sed"),
                Glossaries: "vel",
            },
        },
        GlossaryID: 730442,
        ProjectID: 374170,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Glossary != nil {
        // handle response
    }
}
```
