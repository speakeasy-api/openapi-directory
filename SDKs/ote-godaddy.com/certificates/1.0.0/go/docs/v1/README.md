# V1

### Available Operations

* [CertificateActionRetrieve](#certificateactionretrieve) - Retrieve all certificate actions
* [CertificateAlternateEmailAddress](#certificatealternateemailaddress) - Add alternate email address
* [CertificateCallbackDelete](#certificatecallbackdelete) - Unregister system callback
* [CertificateCallbackGet](#certificatecallbackget) - Retrieve system stateful action callback url
* [CertificateCallbackReplace](#certificatecallbackreplace) - Register of certificate action callback
* [CertificateCancel](#certificatecancel) - Cancel a pending certificate
* [CertificateCreate](#certificatecreate) - Create a pending order for certificate
* [CertificateDownload](#certificatedownload) - Download certificate
* [CertificateDownloadEntitlement](#certificatedownloadentitlement) - Download certificate by entitlement
* [CertificateEmailHistory](#certificateemailhistory) - Retrieve email history
* [CertificateGet](#certificateget) - Retrieve certificate details
* [CertificateGetEntitlement](#certificategetentitlement) - Search for certificate details by entitlement
* [CertificateReissue](#certificatereissue) - Reissue active certificate
* [CertificateRenew](#certificaterenew) - Renew active certificate
* [CertificateResendEmail](#certificateresendemail) - Resend an email
* [CertificateResendEmailAddress](#certificateresendemailaddress) - Resend email to email address
* [CertificateRevoke](#certificaterevoke) - Revoke active certificate
* [CertificateSitesealGet](#certificatesitesealget) - Get Site seal
* [CertificateValidate](#certificatevalidate) - Validate a pending order for certificate
* [CertificateVerifydomaincontrol](#certificateverifydomaincontrol) - Check Domain Control

## CertificateActionRetrieve

This method is used to retrieve all stateful actions relating to a certificate lifecycle.

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
    res, err := s.V1.CertificateActionRetrieve(ctx, operations.CertificateActionRetrieveRequest{
        CertificateID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArrayOfCertificateAction != nil {
        // handle response
    }
}
```

## CertificateAlternateEmailAddress

This method adds an alternate email address to a certificate order and re-sends all existing request emails to that address.

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
    res, err := s.V1.CertificateAlternateEmailAddress(ctx, operations.CertificateAlternateEmailAddressRequest{
        CertificateID: "distinctio",
        EmailAddress: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CertificateEmailHistory != nil {
        // handle response
    }
}
```

## CertificateCallbackDelete

Unregister the callback for a particular certificate.

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
    res, err := s.V1.CertificateCallbackDelete(ctx, operations.CertificateCallbackDeleteRequest{
        CertificateID: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CertificateCallbackGet

This method is used to retrieve the registered callback url for a certificate.

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
    res, err := s.V1.CertificateCallbackGet(ctx, operations.CertificateCallbackGetRequest{
        CertificateID: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CertificateCallback != nil {
        // handle response
    }
}
```

## CertificateCallbackReplace

This method is used to register/replace url for callbacks for stateful actions relating to a certificate lifecycle. The callback url is a Webhook style pattern and will receive POST http requests with json body defined in the CertificateAction model definition for each certificate action.  Only one callback URL is allowed to be registered for each certificateId, so it will replace a previous registration.

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
    res, err := s.V1.CertificateCallbackReplace(ctx, operations.CertificateCallbackReplaceRequest{
        CallbackURL: "corrupti",
        CertificateID: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CertificateCancel

Use the cancel call to cancel a pending certificate order.

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
    res, err := s.V1.CertificateCancel(ctx, operations.CertificateCancelRequest{
        CertificateID: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CertificateCreate

<p>Creating a certificate order can be a long running asynchronous operation in the PKI workflow. The PKI API supports 2 options for getting the completion stateful actions for this asynchronous operations: 1) by polling operations -- see /v1/certificates/{certificateId}/actions 2) via WebHook style callback -- see '/v1/certificates/{certificateId}/callback'.</p>

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
    res, err := s.V1.CertificateCreate(ctx, operations.CertificateCreateRequest{
        CertificateCreate: shared.CertificateCreate{
            CallbackURL: sdk.String("error"),
            CommonName: sdk.String("deserunt"),
            Contact: shared.CertificateContact{
                Email: "Hunter.Gulgowski96@yahoo.com",
                JobTitle: sdk.String("Future Markets Architect"),
                NameFirst: "minus",
                NameLast: "placeat",
                NameMiddle: sdk.String("voluptatum"),
                Phone: "639.803.0603 x897",
                Suffix: sdk.String("odit"),
            },
            Csr: "at",
            IntelVPro: sdk.Bool(false),
            Organization: &shared.CertificateOrganizationCreate{
                Address: &shared.CertificateAddress{
                    Address1: "at",
                    Address2: sdk.String("maiores"),
                    City: sdk.String("Pinkiefield"),
                    Country: shared.CertificateAddressCountryEnumKe,
                    PostalCode: sdk.String("76176-5159"),
                    State: sdk.String("optio"),
                },
                AssumedName: sdk.String("totam"),
                Name: "Lucy Krajcik",
                Phone: "742-610-3616 x26399",
                RegistrationAgent: sdk.String("fuga"),
                RegistrationNumber: sdk.String("in"),
            },
            Period: 359508,
            ProductType: shared.CertificateCreateProductTypeEnumOvWildcardSsl,
            RootType: shared.CertificateCreateRootTypeEnumGodaddySha2.ToPointer(),
            SlotSize: shared.CertificateCreateSlotSizeEnumOneHundred.ToPointer(),
            SubjectAlternativeNames: []string{
                "architecto",
                "ipsa",
                "reiciendis",
            },
        },
        XMarketID: sdk.String("est"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CertificateIdentifier != nil {
        // handle response
    }
}
```

## CertificateDownload

Download certificate

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
    res, err := s.V1.CertificateDownload(ctx, operations.CertificateDownloadRequest{
        CertificateID: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CertificateBundle != nil {
        // handle response
    }
}
```

## CertificateDownloadEntitlement

Download certificate by entitlement

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
    res, err := s.V1.CertificateDownloadEntitlement(ctx, operations.CertificateDownloadEntitlementRequest{
        EntitlementID: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CertificateBundle != nil {
        // handle response
    }
}
```

## CertificateEmailHistory

This method can be used to retrieve all emails sent for a certificate.

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
    res, err := s.V1.CertificateEmailHistory(ctx, operations.CertificateEmailHistoryRequest{
        CertificateID: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CertificateEmailHistory != nil {
        // handle response
    }
}
```

## CertificateGet

Once the certificate order has been created, this method can be used to check the status of the certificate. This method can also be used to retrieve details of the certificate.

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
    res, err := s.V1.CertificateGet(ctx, operations.CertificateGetRequest{
        CertificateID: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Certificate != nil {
        // handle response
    }
}
```

## CertificateGetEntitlement

Once the certificate order has been created, this method can be used to check the status of the certificate. This method can also be used to retrieve details of the certificates associated to an entitlement.

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
    res, err := s.V1.CertificateGetEntitlement(ctx, operations.CertificateGetEntitlementRequest{
        EntitlementID: "corporis",
        Latest: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Certificates != nil {
        // handle response
    }
}
```

## CertificateReissue

<p>Rekeying is the process by which the private and public key is changed for a certificate. It is a simplified reissue,where only the CSR is changed. Reissuing is the process by which domain names are added or removed from a certificate.Once a request is validated and approved, the certificate will be reissued with the new common name and sans specified. Unlimited reissues are available during the lifetime of the certificate.New names added to a certificate that do not share the base domain of the common name may take additional time to validate. If this API call is made before a previous pending reissue has been validated and issued, the previous reissue request is automatically rejected and replaced with the current request.</p>

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
    res, err := s.V1.CertificateReissue(ctx, operations.CertificateReissueRequest{
        CertificateReissue: shared.CertificateReissue{
            CallbackURL: sdk.String("explicabo"),
            CommonName: sdk.String("nobis"),
            Csr: sdk.String("enim"),
            DelayExistingRevoke: sdk.Int64(607831),
            ForceDomainRevetting: []string{
                "minima",
                "excepturi",
            },
            RootType: shared.CertificateReissueRootTypeEnumGodaddySha1.ToPointer(),
            SubjectAlternativeNames: []string{
                "culpa",
                "doloribus",
            },
        },
        CertificateID: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CertificateRenew

Renewal is the process by which the validity of a certificate is extended. Renewal is only available 60 days prior to expiration of the previous certificate and 30 days after the expiration of the previous certificate. The renewal supports modifying a set of the original certificate order information. Once a request is validated and approved, the certificate will be issued with extended validity. Since subject alternative names can be removed during a renewal, we require that you provide the subject alternative names you expect in the renewed certificate. New names added to a certificate that do not share the base domain of the common name may take additional time to validate. </p>

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
    res, err := s.V1.CertificateRenew(ctx, operations.CertificateRenewRequest{
        CertificateRenew: shared.CertificateRenew{
            CallbackURL: sdk.String("architecto"),
            CommonName: sdk.String("mollitia"),
            Csr: sdk.String("dolorem"),
            Period: sdk.Int64(635059),
            RootType: shared.CertificateRenewRootTypeEnumGodaddySha1.ToPointer(),
            SubjectAlternativeNames: []string{
                "mollitia",
                "occaecati",
                "numquam",
                "commodi",
            },
        },
        CertificateID: "quam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CertificateResendEmail

This method can be used to resend emails by providing the certificate id and the email id

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
    res, err := s.V1.CertificateResendEmail(ctx, operations.CertificateResendEmailRequest{
        CertificateID: "molestiae",
        EmailID: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CertificateResendEmailAddress

This method can be used to resend emails by providing the certificate id, the email id, and the recipient email address

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
    res, err := s.V1.CertificateResendEmailAddress(ctx, operations.CertificateResendEmailAddressRequest{
        CertificateID: "error",
        EmailAddress: "quia",
        EmailID: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CertificateRevoke

Use revoke call to revoke an active certificate, if the certificate has not been issued a 404 response will be returned.

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
    res, err := s.V1.CertificateRevoke(ctx, operations.CertificateRevokeRequest{
        CertificateRevoke: shared.CertificateRevoke{
            Reason: shared.CertificateRevokeReasonEnumAffiliationChanged,
        },
        CertificateID: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CertificateSitesealGet

<p>This method is used to obtain the site seal information for an issued certificate. A site seal is a graphic that the certificate purchaser can embed on their web site to show their visitors information about their SSL certificate. If a web site visitor clicks on the site seal image, a pop-up page is displayed that contains detailed information about the SSL certificate. The site seal token is used to link the site seal graphic image to the appropriate certificate details pop-up page display when a user clicks on the site seal. The site seal images are expected to be static images and hosted on the reseller's website, to minimize delays for customer page load times.</p>

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
    res, err := s.V1.CertificateSitesealGet(ctx, operations.CertificateSitesealGetRequest{
        CertificateID: "animi",
        Locale: sdk.String("enim"),
        Theme: operations.CertificateSitesealGetThemeEnumDark.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CertificateSiteSeal != nil {
        // handle response
    }
}
```

## CertificateValidate

Validate a pending order for certificate

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
    res, err := s.V1.CertificateValidate(ctx, operations.CertificateValidateRequest{
        CertificateCreate: shared.CertificateCreate{
            CallbackURL: sdk.String("quo"),
            CommonName: sdk.String("sequi"),
            Contact: shared.CertificateContact{
                Email: "Freida.Ondricka9@hotmail.com",
                JobTitle: sdk.String("Investor Configuration Technician"),
                NameFirst: "quasi",
                NameLast: "reiciendis",
                NameMiddle: sdk.String("voluptatibus"),
                Phone: "1-559-264-7004 x29132",
                Suffix: sdk.String("iusto"),
            },
            Csr: "dicta",
            IntelVPro: sdk.Bool(false),
            Organization: &shared.CertificateOrganizationCreate{
                Address: &shared.CertificateAddress{
                    Address1: "harum",
                    Address2: sdk.String("enim"),
                    City: sdk.String("Idaho Falls"),
                    Country: shared.CertificateAddressCountryEnumUg,
                    PostalCode: sdk.String("26558"),
                    State: sdk.String("modi"),
                },
                AssumedName: sdk.String("praesentium"),
                Name: "Grady Botsford",
                Phone: "(923) 268-1678",
                RegistrationAgent: sdk.String("labore"),
                RegistrationNumber: sdk.String("modi"),
            },
            Period: 183191,
            ProductType: shared.CertificateCreateProductTypeEnumOvCs,
            RootType: shared.CertificateCreateRootTypeEnumStarfieldSha1.ToPointer(),
            SlotSize: shared.CertificateCreateSlotSizeEnumThirty.ToPointer(),
            SubjectAlternativeNames: []string{
                "magni",
            },
        },
        XMarketID: sdk.String("assumenda"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CertificateVerifydomaincontrol

Domain control is a means for verifying the domain included in the certificate order. This resource is useful for resellers that control the domains for their customers, and can expedite the verification process. See https://www.godaddy.com/help/verifying-your-domain-ownership-for-ssl-certificate-requests-html-or-dns-7452

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
    res, err := s.V1.CertificateVerifydomaincontrol(ctx, operations.CertificateVerifydomaincontrolRequest{
        CertificateID: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
