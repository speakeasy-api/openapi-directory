<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CreateConsentRequest{
        Security: operations.CreateConsentSecurity{
            BearerAuthOAuth: &shared.SchemeBearerAuthOAuth{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        },
        Headers: operations.CreateConsentHeaders{
            Digest: "unde",
            PSUAccept: "deserunt",
            PSUAcceptCharset: "porro",
            PSUAcceptEncoding: "nulla",
            PSUAcceptLanguage: "id",
            PSUCorporateID: "vero",
            PSUCorporateIDType: "perspiciatis",
            PSUDeviceID: "nulla",
            PSUGeoLocation: "nihil",
            PSUHTTPMethod: "PATCH",
            PsuID: "facilis",
            PSUIDType: "eum",
            PSUIPAddress: "112.76.228.14",
            PSUIPPort: "sapiente",
            PSUUserAgent: "enim",
            Signature: "eum",
            TPPBrandLoggingInformation: "voluptatum",
            TPPExplicitAuthorisationPreferred: false,
            TPPNokRedirectURI: "https://randy.name",
            TPPNotificationContentPreferred: "deleniti",
            TPPNotificationURI: "similique",
            TPPRedirectPreferred: false,
            TPPRedirectURI: "http://tianna.org",
            TPPSignatureCertificate: "quasi",
            XRequestID: "laboriosam",
        },
        Request: &shared.Consents{
            Access: shared.AccountAccess{
                Accounts: []shared.AccountReference16CH{
                    shared.AccountReference16CH{
                        CashAccountType: "est",
                        Currency: "EUR",
                        Iban: "FR7612345987650123456789014",
                        OtherAccountIdentification: "90-100100-0",
                    },
                },
                AdditionalInformation: &shared.AdditionalInformationAccess{
                    OwnerName: []shared.AccountReference16CH{
                        shared.AccountReference16CH{
                            CashAccountType: "consequatur",
                            Currency: "EUR",
                            Iban: "FR7612345987650123456789014",
                            OtherAccountIdentification: "90-100100-0",
                        },
                    },
                    TrustedBeneficiaries: []shared.AccountReference16CH{
                        shared.AccountReference16CH{
                            CashAccountType: "a",
                            Currency: "EUR",
                            Iban: "FR7612345987650123456789014",
                            OtherAccountIdentification: "90-100100-0",
                        },
                        shared.AccountReference16CH{
                            CashAccountType: "omnis",
                            Currency: "EUR",
                            Iban: "FR7612345987650123456789014",
                            OtherAccountIdentification: "90-100100-0",
                        },
                        shared.AccountReference16CH{
                            CashAccountType: "eos",
                            Currency: "EUR",
                            Iban: "FR7612345987650123456789014",
                            OtherAccountIdentification: "90-100100-0",
                        },
                        shared.AccountReference16CH{
                            CashAccountType: "accusamus",
                            Currency: "EUR",
                            Iban: "FR7612345987650123456789014",
                            OtherAccountIdentification: "90-100100-0",
                        },
                    },
                },
                AllPsd2: "allAccountsWithOwnerName",
                AvailableAccounts: "allAccountsWithOwnerName",
                AvailableAccountsWithBalance: "allAccounts",
                Balances: []shared.AccountReference16CH{
                    shared.AccountReference16CH{
                        CashAccountType: "et",
                        Currency: "EUR",
                        Iban: "FR7612345987650123456789014",
                        OtherAccountIdentification: "90-100100-0",
                    },
                    shared.AccountReference16CH{
                        CashAccountType: "praesentium",
                        Currency: "EUR",
                        Iban: "FR7612345987650123456789014",
                        OtherAccountIdentification: "90-100100-0",
                    },
                    shared.AccountReference16CH{
                        CashAccountType: "occaecati",
                        Currency: "EUR",
                        Iban: "FR7612345987650123456789014",
                        OtherAccountIdentification: "90-100100-0",
                    },
                    shared.AccountReference16CH{
                        CashAccountType: "dolor",
                        Currency: "EUR",
                        Iban: "FR7612345987650123456789014",
                        OtherAccountIdentification: "90-100100-0",
                    },
                },
                RestrictedTo: []string{
                    "sed",
                    "quisquam",
                    "rerum",
                },
                Transactions: []shared.AccountReference16CH{
                    shared.AccountReference16CH{
                        CashAccountType: "qui",
                        Currency: "EUR",
                        Iban: "FR7612345987650123456789014",
                        OtherAccountIdentification: "90-100100-0",
                    },
                    shared.AccountReference16CH{
                        CashAccountType: "sed",
                        Currency: "EUR",
                        Iban: "FR7612345987650123456789014",
                        OtherAccountIdentification: "90-100100-0",
                    },
                    shared.AccountReference16CH{
                        CashAccountType: "rerum",
                        Currency: "EUR",
                        Iban: "FR7612345987650123456789014",
                        OtherAccountIdentification: "90-100100-0",
                    },
                },
            },
            CombinedServiceIndicator: false,
            FrequencyPerDay: 4,
            RecurringIndicator: false,
            ValidUntil: "2020-12-31",
        },
    }

    ctx := context.Background()
    res, err := s.AccountInformationServiceAIS.CreateConsent(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ConsentsResponse201 != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->