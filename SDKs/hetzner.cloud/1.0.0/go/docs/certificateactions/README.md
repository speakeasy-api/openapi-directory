# CertificateActions

### Available Operations

* [GetCertificatesIDActions](#getcertificatesidactions) - Get all Actions for a Certificate
* [GetCertificatesIDActionsActionID](#getcertificatesidactionsactionid) - Get an Action for a Certificate
* [PostCertificatesIDActionsRetry](#postcertificatesidactionsretry) - Retry Issuance or Renewal

## GetCertificatesIDActions

Returns all Action objects for a Certificate. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.

Only type `managed` Certificates can have Actions. For type `uploaded` Certificates the `actions` key will always contain an empty array.


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
    res, err := s.CertificateActions.GetCertificatesIDActions(ctx, operations.GetCertificatesIDActionsRequest{
        ID: 847252,
        Sort: operations.GetCertificatesIDActionsSortParameterSortEnumStatusAsc.ToPointer(),
        Status: operations.GetCertificatesIDActionsStatusParameterStatusEnumSuccess.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsResponse != nil {
        // handle response
    }
}
```

## GetCertificatesIDActionsActionID

Returns a specific Action for a Certificate. Only type `managed` Certificates have Actions.

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
    res, err := s.CertificateActions.GetCertificatesIDActionsActionID(ctx, operations.GetCertificatesIDActionsActionIDRequest{
        ActionID: 645894,
        ID: 384382,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostCertificatesIDActionsRetry

Retry a failed Certificate issuance or renewal.

Only applicable if the type of the Certificate is `managed` and the issuance or renewal status is `failed`.

#### Call specific error codes

| Code                                                    | Description                                                               |
|---------------------------------------------------------|---------------------------------------------------------------------------|
| `caa_record_does_not_allow_ca`                          | CAA record does not allow certificate authority                           |
| `ca_dns_validation_failed`                              | Certificate Authority: DNS validation failed                              |
| `ca_too_many_authorizations_failed_recently`            | Certificate Authority: Too many authorizations failed recently            |
| `ca_too_many_certificates_issued_for_registered_domain` | Certificate Authority: Too many certificates issued for registered domain |
| `ca_too_many_duplicate_certificates`                    | Certificate Authority: Too many duplicate certificates                    |
| `could_not_verify_domain_delegated_to_zone`             | Could not verify domain delegated to zone                                 |
| `dns_zone_not_found`                                    | DNS zone not found                                                        |
| `dns_zone_is_secondary_zone`                            | DNS zone is a secondary zone                                              |


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
    res, err := s.CertificateActions.PostCertificatesIDActionsRetry(ctx, operations.PostCertificatesIDActionsRetryRequest{
        ID: 437587,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```
