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
        Digest: "corrupti",
        PSUAccept: "provident",
        PSUAcceptCharset: "distinctio",
        PSUAcceptEncoding: "quibusdam",
        PSUAcceptLanguage: "unde",
        PSUCorporateID: "nulla",
        PSUCorporateIDType: "corrupti",
        PSUDeviceID: "illum",
        PSUGeoLocation: "vel",
        PSUHTTPMethod: "PATCH",
        PsuID: "deserunt",
        PSUIDType: "suscipit",
        PSUIPAddress: "112.76.228.14",
        PSUIPPort: "delectus",
        PSUUserAgent: "tempora",
        Signature: "suscipit",
        TPPBrandLoggingInformation: "molestiae",
        TPPExplicitAuthorisationPreferred: false,
        TPPNokRedirectURI: "https://studious-lynx.info",
        TPPNotificationContentPreferred: "excepturi",
        TPPNotificationURI: "nisi",
        TPPRedirectPreferred: false,
        TPPRedirectURI: "https://tangible-bathroom.info",
        TPPSignatureCertificate: "veritatis",
        XRequestID: "deserunt",
        Consents: &shared.Consents{
            Access: shared.AccountAccess{
                Accounts: []shared.AccountReference16CH{
                    shared.AccountReference16CH{
                        CashAccountType: "ipsam",
                        Currency: "EUR",
                        Iban: "FR7612345987650123456789014",
                        OtherAccountIdentification: "90-100100-0",
                    },
                },
                AdditionalInformation: &shared.AdditionalInformationAccess{
                    OwnerName: []shared.AccountReference16CH{
                        shared.AccountReference16CH{
                            CashAccountType: "sapiente",
                            Currency: "EUR",
                            Iban: "FR7612345987650123456789014",
                            OtherAccountIdentification: "90-100100-0",
                        },
                        shared.AccountReference16CH{
                            CashAccountType: "quo",
                            Currency: "EUR",
                            Iban: "FR7612345987650123456789014",
                            OtherAccountIdentification: "90-100100-0",
                        },
                        shared.AccountReference16CH{
                            CashAccountType: "odit",
                            Currency: "EUR",
                            Iban: "FR7612345987650123456789014",
                            OtherAccountIdentification: "90-100100-0",
                        },
                        shared.AccountReference16CH{
                            CashAccountType: "at",
                            Currency: "EUR",
                            Iban: "FR7612345987650123456789014",
                            OtherAccountIdentification: "90-100100-0",
                        },
                    },
                    TrustedBeneficiaries: []shared.AccountReference16CH{
                        shared.AccountReference16CH{
                            CashAccountType: "maiores",
                            Currency: "EUR",
                            Iban: "FR7612345987650123456789014",
                            OtherAccountIdentification: "90-100100-0",
                        },
                        shared.AccountReference16CH{
                            CashAccountType: "molestiae",
                            Currency: "EUR",
                            Iban: "FR7612345987650123456789014",
                            OtherAccountIdentification: "90-100100-0",
                        },
                        shared.AccountReference16CH{
                            CashAccountType: "quod",
                            Currency: "EUR",
                            Iban: "FR7612345987650123456789014",
                            OtherAccountIdentification: "90-100100-0",
                        },
                        shared.AccountReference16CH{
                            CashAccountType: "quod",
                            Currency: "EUR",
                            Iban: "FR7612345987650123456789014",
                            OtherAccountIdentification: "90-100100-0",
                        },
                    },
                },
                AllPsd2: "allAccounts",
                AvailableAccounts: "allAccountsWithOwnerName",
                AvailableAccountsWithBalance: "allAccountsWithOwnerName",
                Balances: []shared.AccountReference16CH{
                    shared.AccountReference16CH{
                        CashAccountType: "dicta",
                        Currency: "EUR",
                        Iban: "FR7612345987650123456789014",
                        OtherAccountIdentification: "90-100100-0",
                    },
                    shared.AccountReference16CH{
                        CashAccountType: "nam",
                        Currency: "EUR",
                        Iban: "FR7612345987650123456789014",
                        OtherAccountIdentification: "90-100100-0",
                    },
                    shared.AccountReference16CH{
                        CashAccountType: "officia",
                        Currency: "EUR",
                        Iban: "FR7612345987650123456789014",
                        OtherAccountIdentification: "90-100100-0",
                    },
                },
                RestrictedTo: []string{
                    "fugit",
                    "deleniti",
                    "hic",
                },
                Transactions: []shared.AccountReference16CH{
                    shared.AccountReference16CH{
                        CashAccountType: "totam",
                        Currency: "EUR",
                        Iban: "FR7612345987650123456789014",
                        OtherAccountIdentification: "90-100100-0",
                    },
                    shared.AccountReference16CH{
                        CashAccountType: "beatae",
                        Currency: "EUR",
                        Iban: "FR7612345987650123456789014",
                        OtherAccountIdentification: "90-100100-0",
                    },
                    shared.AccountReference16CH{
                        CashAccountType: "commodi",
                        Currency: "EUR",
                        Iban: "FR7612345987650123456789014",
                        OtherAccountIdentification: "90-100100-0",
                    },
                    shared.AccountReference16CH{
                        CashAccountType: "molestiae",
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
    res, err := s.AccountInformationServiceAIS.CreateConsent(ctx, req, operations.CreateConsentSecurity{
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
<!-- End SDK Example Usage -->