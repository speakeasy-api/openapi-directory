# AccountInformationServiceAIS

## Overview

The Account Information Service (AIS) offers the following services:
  * Transaction reports for a given account or card account including balances if applicable
  * Balances of a given account or card account
  * A list of available accounts or card account
  * Account details of a given account or card account or of the list of all accessible accounts or card account  relative to a granted consent


### Available Operations

* [CreateConsent](#createconsent) - Create consent
* [DeleteConsent](#deleteconsent) - Delete Consent
* [GetAccountList](#getaccountlist) - Read account list
* [GetBalances](#getbalances) - Read balance
* [GetConsentAuthorisation](#getconsentauthorisation) - Get consent authorisation sub-resources request
* [GetConsentInformation](#getconsentinformation) - Get consent request
* [GetConsentScaStatus](#getconsentscastatus) - Read the SCA status of the consent authorisation
* [GetConsentStatus](#getconsentstatus) - Consent status request
* [GetTransactionDetails](#gettransactiondetails) - Read transaction details
* [GetTransactionList](#gettransactionlist) - Read transaction list of an account
* [ReadAccountDetails](#readaccountdetails) - Read account details
* [StartConsentAuthorisation](#startconsentauthorisation) - Start the authorisation process for a consent
* [UpdateConsentsPsuData](#updateconsentspsudata) - Update PSU Data for consents

## CreateConsent

This method create a consent resource, defining access rights to dedicated accounts of 
a given PSU-ID. These accounts are addressed explicitly in the method as 
parameters as a core function.

**Side Effects**
When this consent request is a request where the "recurringIndicator" equals "true",
and if it exists already a former consent for recurring access on account information 
for the addressed PSU, then the former consent automatically expires as soon as the new 
consent request is authorised by the PSU.

Optional Extension:
As an option, an ASPSP might optionally accept a specific access right on the access on all PSD2 related services for all available accounts.

As another option an ASPSP might optionally also accept a command, where only access rights are inserted without mentioning the addressed account. 
The relation to accounts is then handled afterwards between PSU and ASPSP. 
This option is not supported for the Embedded SCA Approach. 
As a last option, an ASPSP might in addition accept a command with access rights
  * to see the list of available payment accounts or
  * to see the list of available payment accounts with balances.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AccountInformationServiceAIS.CreateConsent(ctx, operations.CreateConsentRequest{
        Digest: sdk.String("modi"),
        PSUAccept: sdk.String("qui"),
        PSUAcceptCharset: sdk.String("impedit"),
        PSUAcceptEncoding: sdk.String("cum"),
        PSUAcceptLanguage: sdk.String("esse"),
        PSUCorporateID: sdk.String("ipsum"),
        PSUCorporateIDType: sdk.String("excepturi"),
        PSUDeviceID: sdk.String("aspernatur"),
        PSUGeoLocation: sdk.String("perferendis"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPost.ToPointer(),
        PsuID: sdk.String("natus"),
        PSUIDType: sdk.String("sed"),
        PSUIPAddress: "156.56.157.98",
        PSUIPPort: sdk.String("hic"),
        PSUUserAgent: sdk.String("saepe"),
        Signature: sdk.String("fuga"),
        TPPBrandLoggingInformation: sdk.String("in"),
        TPPExplicitAuthorisationPreferred: sdk.Bool(false),
        TPPNokRedirectURI: sdk.String("http://past-hostess.org"),
        TPPNotificationContentPreferred: sdk.String("quidem"),
        TPPNotificationURI: sdk.String("architecto"),
        TPPRedirectPreferred: sdk.Bool(false),
        TPPRedirectURI: sdk.String("http://wiggly-plane.name"),
        TPPSignatureCertificate: sdk.String("laborum"),
        XRequestID: "dolores",
        Consents: &shared.Consents{
            Access: shared.AccountAccess{
                Accounts: []shared.AccountReference16CH{
                    shared.AccountReference16CH{
                        CashAccountType: sdk.String("corporis"),
                        Currency: sdk.String("EUR"),
                        Iban: sdk.String("FR7612345987650123456789014"),
                        OtherAccountIdentification: sdk.String("90-100100-0"),
                    },
                },
                AdditionalInformation: &shared.AdditionalInformationAccess{
                    OwnerName: []shared.AccountReference16CH{
                        shared.AccountReference16CH{
                            CashAccountType: sdk.String("nobis"),
                            Currency: sdk.String("EUR"),
                            Iban: sdk.String("FR7612345987650123456789014"),
                            OtherAccountIdentification: sdk.String("90-100100-0"),
                        },
                    },
                    TrustedBeneficiaries: []shared.AccountReference16CH{
                        shared.AccountReference16CH{
                            CashAccountType: sdk.String("omnis"),
                            Currency: sdk.String("EUR"),
                            Iban: sdk.String("FR7612345987650123456789014"),
                            OtherAccountIdentification: sdk.String("90-100100-0"),
                        },
                        shared.AccountReference16CH{
                            CashAccountType: sdk.String("nemo"),
                            Currency: sdk.String("EUR"),
                            Iban: sdk.String("FR7612345987650123456789014"),
                            OtherAccountIdentification: sdk.String("90-100100-0"),
                        },
                    },
                },
                AllPsd2: shared.AccountAccessAllPsd2EnumAllAccounts.ToPointer(),
                AvailableAccounts: shared.AccountAccessAvailableAccountsEnumAllAccountsWithOwnerName.ToPointer(),
                AvailableAccountsWithBalance: shared.AccountAccessAvailableAccountsWithBalanceEnumAllAccounts.ToPointer(),
                Balances: []shared.AccountReference16CH{
                    shared.AccountReference16CH{
                        CashAccountType: sdk.String("culpa"),
                        Currency: sdk.String("EUR"),
                        Iban: sdk.String("FR7612345987650123456789014"),
                        OtherAccountIdentification: sdk.String("90-100100-0"),
                    },
                    shared.AccountReference16CH{
                        CashAccountType: sdk.String("doloribus"),
                        Currency: sdk.String("EUR"),
                        Iban: sdk.String("FR7612345987650123456789014"),
                        OtherAccountIdentification: sdk.String("90-100100-0"),
                    },
                },
                RestrictedTo: []string{
                    "architecto",
                    "mollitia",
                    "dolorem",
                    "culpa",
                },
                Transactions: []shared.AccountReference16CH{
                    shared.AccountReference16CH{
                        CashAccountType: sdk.String("repellat"),
                        Currency: sdk.String("EUR"),
                        Iban: sdk.String("FR7612345987650123456789014"),
                        OtherAccountIdentification: sdk.String("90-100100-0"),
                    },
                },
            },
            CombinedServiceIndicator: false,
            FrequencyPerDay: 4,
            RecurringIndicator: false,
            ValidUntil: types.MustDateFromString("2020-12-31"),
        },
    }, operations.CreateConsentSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConsentsResponse201 != nil {
        // handle response
    }
}
```

## DeleteConsent

The TPP can delete an account information consent object if needed.

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
    res, err := s.AccountInformationServiceAIS.DeleteConsent(ctx, operations.DeleteConsentRequest{
        Digest: sdk.String("mollitia"),
        PSUAccept: sdk.String("occaecati"),
        PSUAcceptCharset: sdk.String("numquam"),
        PSUAcceptEncoding: sdk.String("commodi"),
        PSUAcceptLanguage: sdk.String("quam"),
        PSUDeviceID: sdk.String("molestiae"),
        PSUGeoLocation: sdk.String("velit"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPatch.ToPointer(),
        PSUIPAddress: sdk.String("40.86.28.172"),
        PSUIPPort: sdk.String("animi"),
        PSUUserAgent: sdk.String("enim"),
        Signature: sdk.String("odit"),
        TPPSignatureCertificate: sdk.String("quo"),
        XRequestID: "sequi",
        ConsentID: "tenetur",
    }, operations.DeleteConsentSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAccountList

Read the identifiers of the available payment account together with 
booking balance information, depending on the consent granted.

It is assumed that a consent of the PSU to this access is already given and stored on the ASPSP system.
The addressed list of accounts depends then on the PSU ID and the stored consent addressed by consentId,
respectively the OAuth2 access token.

Returns all identifiers of the accounts, to which an account access has been granted to through
the /consents endpoint by the PSU.
In addition, relevant information about the accounts and hyperlinks to corresponding account
information resources are provided if a related consent has been already granted.

Remark: Note that the /consents endpoint optionally offers to grant an access on all available
payment accounts of a PSU.
In this case, this endpoint will deliver the information about all available payment accounts
of the PSU at this ASPSP.


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
    res, err := s.AccountInformationServiceAIS.GetAccountList(ctx, operations.GetAccountListRequest{
        ConsentID: "ipsam",
        Digest: sdk.String("id"),
        PSUAccept: sdk.String("possimus"),
        PSUAcceptCharset: sdk.String("aut"),
        PSUAcceptEncoding: sdk.String("quasi"),
        PSUAcceptLanguage: sdk.String("error"),
        PSUDeviceID: sdk.String("temporibus"),
        PSUGeoLocation: sdk.String("laborum"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumGet.ToPointer(),
        PSUIPAddress: sdk.String("248.249.224.119"),
        PSUIPPort: sdk.String("praesentium"),
        PSUUserAgent: sdk.String("voluptatibus"),
        Signature: sdk.String("ipsa"),
        TPPSignatureCertificate: sdk.String("omnis"),
        XRequestID: "voluptate",
        WithBalance: sdk.Bool(false),
    }, operations.GetAccountListSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountList != nil {
        // handle response
    }
}
```

## GetBalances

Reads account data from a given account addressed by "account-id". 

**Remark:** This account-id can be a tokenised identification due to data protection reason since the path 
information might be logged on intermediary servers within the ASPSP sphere. 
This account-id then can be retrieved by the "Get account list" call.

The account-id is constant at least throughout the lifecycle of a given consent.


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
    res, err := s.AccountInformationServiceAIS.GetBalances(ctx, operations.GetBalancesRequest{
        ConsentID: "cum",
        Digest: sdk.String("perferendis"),
        PSUAccept: sdk.String("doloremque"),
        PSUAcceptCharset: sdk.String("reprehenderit"),
        PSUAcceptEncoding: sdk.String("ut"),
        PSUAcceptLanguage: sdk.String("maiores"),
        PSUDeviceID: sdk.String("dicta"),
        PSUGeoLocation: sdk.String("corporis"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPost.ToPointer(),
        PSUIPAddress: sdk.String("123.30.176.81"),
        PSUIPPort: sdk.String("accusamus"),
        PSUUserAgent: sdk.String("commodi"),
        Signature: sdk.String("repudiandae"),
        TPPSignatureCertificate: sdk.String("quae"),
        XRequestID: "ipsum",
        AccountID: "qwer3456tzui7890",
    }, operations.GetBalancesSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReadAccountBalanceResponse200 != nil {
        // handle response
    }
}
```

## GetConsentAuthorisation

Return a list of all authorisation subresources IDs which have been created.

This function returns an array of hyperlinks to all generated authorisation sub-resources.


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
    res, err := s.AccountInformationServiceAIS.GetConsentAuthorisation(ctx, operations.GetConsentAuthorisationRequest{
        Digest: sdk.String("quidem"),
        PSUAccept: sdk.String("molestias"),
        PSUAcceptCharset: sdk.String("excepturi"),
        PSUAcceptEncoding: sdk.String("pariatur"),
        PSUAcceptLanguage: sdk.String("modi"),
        PSUDeviceID: sdk.String("praesentium"),
        PSUGeoLocation: sdk.String("rem"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumDelete.ToPointer(),
        PSUIPAddress: sdk.String("24.235.147.21"),
        PSUIPPort: sdk.String("itaque"),
        PSUUserAgent: sdk.String("incidunt"),
        Signature: sdk.String("enim"),
        TPPSignatureCertificate: sdk.String("consequatur"),
        XRequestID: "est",
        ConsentID: "quibusdam",
    }, operations.GetConsentAuthorisationSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Authorisations != nil {
        // handle response
    }
}
```

## GetConsentInformation

Returns the content of an account information consent object. 
This is returning the data for the TPP especially in cases, 
where the consent was directly managed between ASPSP and PSU e.g. in a redirect SCA Approach.


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
    res, err := s.AccountInformationServiceAIS.GetConsentInformation(ctx, operations.GetConsentInformationRequest{
        Digest: sdk.String("explicabo"),
        PSUAccept: sdk.String("deserunt"),
        PSUAcceptCharset: sdk.String("distinctio"),
        PSUAcceptEncoding: sdk.String("quibusdam"),
        PSUAcceptLanguage: sdk.String("labore"),
        PSUDeviceID: sdk.String("modi"),
        PSUGeoLocation: sdk.String("qui"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPost.ToPointer(),
        PSUIPAddress: sdk.String("150.141.5.42"),
        PSUIPPort: sdk.String("assumenda"),
        PSUUserAgent: sdk.String("ipsam"),
        Signature: sdk.String("alias"),
        TPPSignatureCertificate: sdk.String("fugit"),
        XRequestID: "dolorum",
        ConsentID: "excepturi",
    }, operations.GetConsentInformationSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConsentInformationResponse200JSON != nil {
        // handle response
    }
}
```

## GetConsentScaStatus

This method returns the SCA status of a consent initiation's authorisation sub-resource.


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
    res, err := s.AccountInformationServiceAIS.GetConsentScaStatus(ctx, operations.GetConsentScaStatusRequest{
        Digest: sdk.String("tempora"),
        PSUAccept: sdk.String("facilis"),
        PSUAcceptCharset: sdk.String("tempore"),
        PSUAcceptEncoding: sdk.String("labore"),
        PSUAcceptLanguage: sdk.String("delectus"),
        PSUDeviceID: sdk.String("eum"),
        PSUGeoLocation: sdk.String("non"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPatch.ToPointer(),
        PSUIPAddress: sdk.String("147.101.151.229"),
        PSUIPPort: sdk.String("sint"),
        PSUUserAgent: sdk.String("officia"),
        Signature: sdk.String("dolor"),
        TPPSignatureCertificate: sdk.String("debitis"),
        XRequestID: "a",
        AuthorisationID: "123auth456",
        ConsentID: "dolorum",
    }, operations.GetConsentScaStatusSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScaStatusResponse != nil {
        // handle response
    }
}
```

## GetConsentStatus

Read the status of an account information consent resource.

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
    res, err := s.AccountInformationServiceAIS.GetConsentStatus(ctx, operations.GetConsentStatusRequest{
        Digest: sdk.String("in"),
        PSUAccept: sdk.String("in"),
        PSUAcceptCharset: sdk.String("illum"),
        PSUAcceptEncoding: sdk.String("maiores"),
        PSUAcceptLanguage: sdk.String("rerum"),
        PSUDeviceID: sdk.String("dicta"),
        PSUGeoLocation: sdk.String("magnam"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPatch.ToPointer(),
        PSUIPAddress: sdk.String("208.105.101.172"),
        PSUIPPort: sdk.String("accusamus"),
        PSUUserAgent: sdk.String("non"),
        Signature: sdk.String("occaecati"),
        TPPSignatureCertificate: sdk.String("enim"),
        XRequestID: "accusamus",
        ConsentID: "delectus",
    }, operations.GetConsentStatusSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConsentStatusResponse200 != nil {
        // handle response
    }
}
```

## GetTransactionDetails

Reads transaction details from a given transaction addressed by "transactionId" on a given account addressed by "account-id".
This call is only available on transactions as reported in a JSON format.

**Remark:** Please note that the PATH might be already given in detail by the corresponding entry of the response of the
"Read Transaction List" call within the _links subfield.


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
    res, err := s.AccountInformationServiceAIS.GetTransactionDetails(ctx, operations.GetTransactionDetailsRequest{
        ConsentID: "quidem",
        Digest: sdk.String("provident"),
        PSUAccept: sdk.String("nam"),
        PSUAcceptCharset: sdk.String("id"),
        PSUAcceptEncoding: sdk.String("blanditiis"),
        PSUAcceptLanguage: sdk.String("deleniti"),
        PSUDeviceID: sdk.String("sapiente"),
        PSUGeoLocation: sdk.String("amet"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPatch.ToPointer(),
        PSUIPAddress: sdk.String("101.108.158.155"),
        PSUIPPort: sdk.String("molestiae"),
        PSUUserAgent: sdk.String("perferendis"),
        Signature: sdk.String("nihil"),
        TPPSignatureCertificate: sdk.String("magnam"),
        XRequestID: "distinctio",
        AccountID: "qwer3456tzui7890",
        TransactionID: "3dc3d5b3-7023-4848-9853-f5400a64e80f",
    }, operations.GetTransactionDetailsSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTransactionDetails200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTransactionList

Read transaction reports or transaction lists of a given account ddressed by "account-id", depending on the steering parameter
"bookingStatus" together with balances.

For a given account, additional parameters are e.g. the attributes "dateFrom" and "dateTo".
The ASPSP might add balance information, if transaction lists without balances are not supported.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AccountInformationServiceAIS.GetTransactionList(ctx, operations.GetTransactionListRequest{
        ConsentID: "id",
        Digest: sdk.String("labore"),
        PSUAccept: sdk.String("labore"),
        PSUAcceptCharset: sdk.String("suscipit"),
        PSUAcceptEncoding: sdk.String("natus"),
        PSUAcceptLanguage: sdk.String("nobis"),
        PSUDeviceID: sdk.String("eum"),
        PSUGeoLocation: sdk.String("vero"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumGet.ToPointer(),
        PSUIPAddress: sdk.String("26.76.23.145"),
        PSUIPPort: sdk.String("ullam"),
        PSUUserAgent: sdk.String("provident"),
        Signature: sdk.String("quos"),
        TPPSignatureCertificate: sdk.String("sint"),
        XRequestID: "accusantium",
        AccountID: "qwer3456tzui7890",
        BookingStatus: shared.BookingStatusEnumPending,
        DateFrom: types.MustDateFromString("2021-01-16"),
        DateTo: types.MustDateFromString("2022-07-27"),
        DeltaList: sdk.Bool(false),
        EntryReferenceFrom: sdk.String("dolor"),
        WithBalance: sdk.Bool(false),
    }, operations.GetTransactionListSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactionsResponse200JSON != nil {
        // handle response
    }
}
```

## ReadAccountDetails

Reads details about an account, with balances where required. 
It is assumed that a consent of the PSU to 
this access is already given and stored on the ASPSP system. 
The addressed details of this account depends then on the stored consent addressed by consentId, 
respectively the OAuth2 access token.

**NOTE:** The account-id can represent a multicurrency account.
In this case the currency code is set to "XXX".

Give detailed information about the addressed account.

Give detailed information about the addressed account together with balance information


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
    res, err := s.AccountInformationServiceAIS.ReadAccountDetails(ctx, operations.ReadAccountDetailsRequest{
        ConsentID: "necessitatibus",
        Digest: sdk.String("odit"),
        PSUAccept: sdk.String("nemo"),
        PSUAcceptCharset: sdk.String("quasi"),
        PSUAcceptEncoding: sdk.String("iure"),
        PSUAcceptLanguage: sdk.String("doloribus"),
        PSUDeviceID: sdk.String("debitis"),
        PSUGeoLocation: sdk.String("eius"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumDelete.ToPointer(),
        PSUIPAddress: sdk.String("137.180.114.25"),
        PSUIPPort: sdk.String("architecto"),
        PSUUserAgent: sdk.String("repudiandae"),
        Signature: sdk.String("ullam"),
        TPPSignatureCertificate: sdk.String("expedita"),
        XRequestID: "nihil",
        AccountID: "qwer3456tzui7890",
        WithBalance: sdk.Bool(false),
    }, operations.ReadAccountDetailsSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReadAccountDetails200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## StartConsentAuthorisation

Create an authorisation sub-resource and start the authorisation process of a consent.
The message might in addition transmit authentication and authorisation related data.

his method is iterated n times for a n times SCA authorisation in a
corporate context, each creating an own authorisation sub-endpoint for
the corresponding PSU authorising the consent.

The ASPSP might make the usage of this access method unnecessary,
since the related authorisation resource will be automatically created by
the ASPSP after the submission of the consent data with the first POST consents call.

The start authorisation process is a process which is needed for creating a new authorisation
or cancellation sub-resource.

This applies in the following scenarios:

  * The ASPSP has indicated with an 'startAuthorisation' hyperlink in the preceding Payment 
    initiation response that an explicit start of the authorisation process is needed by the TPP. 
    The 'startAuthorisation' hyperlink can transport more information about data which needs to be 
    uploaded by using the extended forms:
    * 'startAuthorisationWithPsuIdentfication', 
    * 'startAuthorisationWithPsuAuthentication' 
    * 'startAuthorisationWithEncryptedPsuAuthentication'
    * 'startAuthorisationWithAuthentciationMethodSelection'
  * The related payment initiation cannot yet be executed since a multilevel SCA is mandated.
  * The ASPSP has indicated with an 'startAuthorisation' hyperlink in the preceding 
    payment cancellation response that an explicit start of the authorisation process is needed by the TPP. 
    The 'startAuthorisation' hyperlink can transport more information about data which needs to be uploaded 
    by using the extended forms as indicated above.
  * The related payment cancellation request cannot be applied yet since a multilevel SCA is mandate for
    executing the cancellation.
  * The signing basket needs to be authorised yet.


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
    res, err := s.AccountInformationServiceAIS.StartConsentAuthorisation(ctx, operations.StartConsentAuthorisationRequest{
        Digest: sdk.String("repellat"),
        PSUAccept: sdk.String("quibusdam"),
        PSUAcceptCharset: sdk.String("sed"),
        PSUAcceptEncoding: sdk.String("saepe"),
        PSUAcceptLanguage: sdk.String("pariatur"),
        PSUCorporateID: sdk.String("accusantium"),
        PSUCorporateIDType: sdk.String("consequuntur"),
        PSUDeviceID: sdk.String("praesentium"),
        PSUGeoLocation: sdk.String("natus"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumGet.ToPointer(),
        PsuID: sdk.String("sunt"),
        PSUIDType: sdk.String("quo"),
        PSUIPAddress: sdk.String("217.221.206.105"),
        PSUIPPort: sdk.String("excepturi"),
        PSUUserAgent: sdk.String("odit"),
        RequestBody: &operations.StartConsentAuthorisationRequestBody{},
        Signature: sdk.String("ea"),
        TPPNokRedirectURI: sdk.String("http://big-willingness.net"),
        TPPNotificationContentPreferred: sdk.String("ipsam"),
        TPPNotificationURI: sdk.String("voluptate"),
        TPPRedirectPreferred: sdk.Bool(false),
        TPPRedirectURI: sdk.String("http://scared-atrium.org"),
        TPPSignatureCertificate: sdk.String("nemo"),
        XRequestID: "voluptatibus",
        ConsentID: "perferendis",
    }, operations.StartConsentAuthorisationSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartScaprocessResponse != nil {
        // handle response
    }
}
```

## UpdateConsentsPsuData

This method update PSU data on the consents  resource if needed.
It may authorise a consent within the Embedded SCA Approach where needed.

Independently from the SCA Approach it supports e.g. the selection of
the authentication method and a non-SCA PSU authentication.

There are several possible update PSU data requests in the context of a consent request if needed, 
which depends on the SCA approach:

* Redirect SCA Approach:
  A specific Update PSU data request is applicable for 
    * the selection of authentication methods, before choosing the actual SCA approach.
* Decoupled SCA Approach:
  A specific update PSU data request is only applicable for
  * adding the PSU Identification, if not provided yet in the payment initiation request or the Account Information Consent Request, or if no OAuth2 access token is used, or
  * the selection of authentication methods.
* Embedded SCA Approach: 
  The Update PSU data request might be used 
  * to add credentials as a first factor authentication data of the PSU and
  * to select the authentication method and
  * transaction authorisation.

The SCA Approach might depend on the chosen SCA method. 
For that reason, the following possible update PSU data request can apply to all SCA approaches:

* Select an SCA method in case of several SCA methods are available for the customer.

There are the following request types on this access path:
  * Update PSU identification
  * Update PSU authentication
  * Select PSU autorization method 
    WARNING: This method needs a reduced header, 
    therefore many optional elements are not present. 
    Maybe in a later version the access path will change.
  * Transaction Authorisation
    WARNING: This method needs a reduced header, 
    therefore many optional elements are not present. 
    Maybe in a later version the access path will change.


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
    res, err := s.AccountInformationServiceAIS.UpdateConsentsPsuData(ctx, operations.UpdateConsentsPsuDataRequest{
        Digest: sdk.String("fugiat"),
        PSUAccept: sdk.String("amet"),
        PSUAcceptCharset: sdk.String("aut"),
        PSUAcceptEncoding: sdk.String("cumque"),
        PSUAcceptLanguage: sdk.String("corporis"),
        PSUCorporateID: sdk.String("hic"),
        PSUCorporateIDType: sdk.String("libero"),
        PSUDeviceID: sdk.String("nobis"),
        PSUGeoLocation: sdk.String("dolores"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPost.ToPointer(),
        PsuID: sdk.String("totam"),
        PSUIDType: sdk.String("dignissimos"),
        PSUIPAddress: sdk.String("13.86.51.45"),
        PSUIPPort: sdk.String("perferendis"),
        PSUUserAgent: sdk.String("dolores"),
        RequestBody: &operations.UpdateConsentsPsuDataRequestBody{},
        Signature: sdk.String("minus"),
        TPPSignatureCertificate: sdk.String("quam"),
        XRequestID: "dolor",
        AuthorisationID: "123auth456",
        ConsentID: "vero",
    }, operations.UpdateConsentsPsuDataSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateConsentsPsuData200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```
