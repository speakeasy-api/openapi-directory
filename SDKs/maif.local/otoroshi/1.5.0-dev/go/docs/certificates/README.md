# Certificates

## Overview

Everything about Otoroshi SSL/TLS certificates

### Available Operations

* [AllCerts](#allcerts) - Get all certificates
* [CreateCert](#createcert) - Create one certificate
* [DeleteCert](#deletecert) - Delete one certificate by id
* [OneCert](#onecert) - Get one certificate by id
* [PatchCert](#patchcert) - Update one certificate by id
* [PutCert](#putcert) - Update one certificate by id

## AllCerts

Get all certificates

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
    res, err := s.Certificates.AllCerts(ctx, operations.AllCertsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Certificates != nil {
        // handle response
    }
}
```

## CreateCert

Create one certificate

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
    res, err := s.Certificates.CreateCert(ctx, shared.Certificate{
        AutoRenew: "a string value",
        Ca: "a string value",
        CaRef: "a string value",
        Chain: "a string value",
        Domain: "a string value",
        From: "a string value",
        ID: "a string value",
        PrivateKey: "a string value",
        SelfSigned: "a string value",
        Subject: "a string value",
        To: "a string value",
        Valid: "a string value",
    }, operations.CreateCertSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Certificate != nil {
        // handle response
    }
}
```

## DeleteCert

Delete one certificate by id

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
    res, err := s.Certificates.DeleteCert(ctx, operations.DeleteCertRequest{
        ID: "2a94bb4f-63c9-469e-9a3e-fa77dfb14cd6",
    }, operations.DeleteCertSecurity{
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

## OneCert

Get one certificate by id

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
    res, err := s.Certificates.OneCert(ctx, operations.OneCertRequest{
        ID: "6ae395ef-b9ba-488f-ba66-997074ba4469",
    }, operations.OneCertSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Certificate != nil {
        // handle response
    }
}
```

## PatchCert

Update one certificate by id

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
    res, err := s.Certificates.PatchCert(ctx, operations.PatchCertRequest{
        RequestBody: []shared.Patch{
            shared.Patch{
                Op: shared.PatchOpEnumRemove,
                Path: "a string value",
                Value: sdk.String("vero"),
            },
            shared.Patch{
                Op: shared.PatchOpEnumAdd,
                Path: "a string value",
                Value: sdk.String("architecto"),
            },
            shared.Patch{
                Op: shared.PatchOpEnumReplace,
                Path: "a string value",
                Value: sdk.String("et"),
            },
        },
        ID: "959890af-a563-4e25-96fe-4c8b711e5b7f",
    }, operations.PatchCertSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Certificate != nil {
        // handle response
    }
}
```

## PutCert

Update one certificate by id

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
    res, err := s.Certificates.PutCert(ctx, operations.PutCertRequest{
        Certificate: &shared.Certificate{
            AutoRenew: "a string value",
            Ca: "a string value",
            CaRef: "a string value",
            Chain: "a string value",
            Domain: "a string value",
            From: "a string value",
            ID: "a string value",
            PrivateKey: "a string value",
            SelfSigned: "a string value",
            Subject: "a string value",
            To: "a string value",
            Valid: "a string value",
        },
        ID: "d2ed0289-21cd-4dc6-9260-1fb576b0d5f0",
    }, operations.PutCertSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Certificate != nil {
        // handle response
    }
}
```
