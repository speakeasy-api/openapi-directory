# Certificates

## Overview

TLS/SSL Certificates prove the identity of a Server and are used to encrypt client traffic.

### Available Operations

* [DeleteCertificatesID](#deletecertificatesid) - Delete a Certificate
* [GetCertificates](#getcertificates) - Get all Certificates
* [GetCertificatesID](#getcertificatesid) - Get a Certificate
* [PostCertificates](#postcertificates) - Create a Certificate
* [PutCertificatesID](#putcertificatesid) - Update a Certificate

## DeleteCertificatesID

Deletes a Certificate.

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
    res, err := s.Certificates.DeleteCertificatesID(ctx, operations.DeleteCertificatesIDRequest{
        ID: 297534,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCertificates

Returns all Certificate objects.

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
    res, err := s.Certificates.GetCertificates(ctx, operations.GetCertificatesRequest{
        LabelSelector: sdk.String("debitis"),
        Name: sdk.String("Lucia Goldner"),
        Sort: operations.GetCertificatesSortEnumCreatedAsc.ToPointer(),
        Type: operations.GetCertificatesTypeParameterTypeEnumManaged.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CertificatesResponse != nil {
        // handle response
    }
}
```

## GetCertificatesID

Gets a specific Certificate object.

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
    res, err := s.Certificates.GetCertificatesID(ctx, operations.GetCertificatesIDRequest{
        ID: 528895,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CertificateResponse != nil {
        // handle response
    }
}
```

## PostCertificates

Creates a new Certificate.

The default type **uploaded** allows for uploading your existing `certificate` and `private_key` in PEM format. You have to monitor its expiration date and handle renewal yourself.

In contrast, type **managed** requests a new Certificate from *Let's Encrypt* for the specified `domain_names`. Only domains managed by *Hetzner DNS* are supported. We handle renewal and timely alert the project owner via email if problems occur.

For type `managed` Certificates the `action` key of the response contains the Action that allows for tracking the issuance process. For type `uploaded` Certificates the `action` is always null.


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
    res, err := s.Certificates.PostCertificates(ctx, operations.PostCertificatesCreateCertificateRequest{
        Certificate: sdk.String("-----BEGIN CERTIFICATE-----
    ..."),
        DomainNames: []string{
            "excepturi",
            "nisi",
        },
        Labels: map[string]interface{}{
            "temporibus": "ab",
            "quis": "veritatis",
            "deserunt": "perferendis",
            "ipsam": "repellendus",
        },
        Name: "my website cert",
        PrivateKey: sdk.String("-----BEGIN PRIVATE KEY-----
    ..."),
        Type: operations.PostCertificatesCreateCertificateRequestTypeEnumUploaded.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCertificateResponse != nil {
        // handle response
    }
}
```

## PutCertificatesID

Updates the Certificate properties.

Note that when updating labels, the Certificate’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.

Note: if the Certificate object changes during the request, the response will be a “conflict” error.


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
    res, err := s.Certificates.PutCertificatesID(ctx, operations.PutCertificatesIDRequest{
        RequestBody: &operations.PutCertificatesIDUpdateCertificateRequest{
            Labels: map[string]interface{}{
                "quo": "odit",
                "at": "at",
                "maiores": "molestiae",
                "quod": "quod",
            },
            Name: sdk.String("my website cert"),
        },
        ID: 461479,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CertificateResponse != nil {
        // handle response
    }
}
```
