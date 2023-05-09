<!-- Start SDK Example Usage -->
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
        Digest: sdk.String("corrupti"),
        PSUAccept: sdk.String("provident"),
        PSUAcceptCharset: sdk.String("distinctio"),
        PSUAcceptEncoding: sdk.String("quibusdam"),
        PSUAcceptLanguage: sdk.String("unde"),
        PSUCorporateID: sdk.String("nulla"),
        PSUCorporateIDType: sdk.String("corrupti"),
        PSUDeviceID: sdk.String("illum"),
        PSUGeoLocation: sdk.String("vel"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPatch.ToPointer(),
        PsuID: sdk.String("deserunt"),
        PSUIDType: sdk.String("suscipit"),
        PSUIPAddress: "112.76.228.14",
        PSUIPPort: sdk.String("delectus"),
        PSUUserAgent: sdk.String("tempora"),
        Signature: sdk.String("suscipit"),
        TPPBrandLoggingInformation: sdk.String("molestiae"),
        TPPExplicitAuthorisationPreferred: sdk.Bool(false),
        TPPNokRedirectURI: sdk.String("https://studious-lynx.info"),
        TPPNotificationContentPreferred: sdk.String("excepturi"),
        TPPNotificationURI: sdk.String("nisi"),
        TPPRedirectPreferred: sdk.Bool(false),
        TPPRedirectURI: sdk.String("https://tangible-bathroom.info"),
        TPPSignatureCertificate: sdk.String("veritatis"),
        XRequestID: "deserunt",
        Consents: &shared.Consents{
            Access: shared.AccountAccess{
                Accounts: []shared.AccountReference16CH{
                    shared.AccountReference16CH{
                        CashAccountType: sdk.String("ipsam"),
                        Currency: sdk.String("EUR"),
                        Iban: sdk.String("FR7612345987650123456789014"),
                        OtherAccountIdentification: sdk.String("90-100100-0"),
                    },
                },
                AdditionalInformation: &shared.AdditionalInformationAccess{
                    OwnerName: []shared.AccountReference16CH{
                        shared.AccountReference16CH{
                            CashAccountType: sdk.String("sapiente"),
                            Currency: sdk.String("EUR"),
                            Iban: sdk.String("FR7612345987650123456789014"),
                            OtherAccountIdentification: sdk.String("90-100100-0"),
                        },
                        shared.AccountReference16CH{
                            CashAccountType: sdk.String("quo"),
                            Currency: sdk.String("EUR"),
                            Iban: sdk.String("FR7612345987650123456789014"),
                            OtherAccountIdentification: sdk.String("90-100100-0"),
                        },
                        shared.AccountReference16CH{
                            CashAccountType: sdk.String("odit"),
                            Currency: sdk.String("EUR"),
                            Iban: sdk.String("FR7612345987650123456789014"),
                            OtherAccountIdentification: sdk.String("90-100100-0"),
                        },
                        shared.AccountReference16CH{
                            CashAccountType: sdk.String("at"),
                            Currency: sdk.String("EUR"),
                            Iban: sdk.String("FR7612345987650123456789014"),
                            OtherAccountIdentification: sdk.String("90-100100-0"),
                        },
                    },
                    TrustedBeneficiaries: []shared.AccountReference16CH{
                        shared.AccountReference16CH{
                            CashAccountType: sdk.String("maiores"),
                            Currency: sdk.String("EUR"),
                            Iban: sdk.String("FR7612345987650123456789014"),
                            OtherAccountIdentification: sdk.String("90-100100-0"),
                        },
                        shared.AccountReference16CH{
                            CashAccountType: sdk.String("molestiae"),
                            Currency: sdk.String("EUR"),
                            Iban: sdk.String("FR7612345987650123456789014"),
                            OtherAccountIdentification: sdk.String("90-100100-0"),
                        },
                        shared.AccountReference16CH{
                            CashAccountType: sdk.String("quod"),
                            Currency: sdk.String("EUR"),
                            Iban: sdk.String("FR7612345987650123456789014"),
                            OtherAccountIdentification: sdk.String("90-100100-0"),
                        },
                        shared.AccountReference16CH{
                            CashAccountType: sdk.String("quod"),
                            Currency: sdk.String("EUR"),
                            Iban: sdk.String("FR7612345987650123456789014"),
                            OtherAccountIdentification: sdk.String("90-100100-0"),
                        },
                    },
                },
                AllPsd2: shared.AccountAccessAllPsd2EnumAllAccounts.ToPointer(),
                AvailableAccounts: shared.AccountAccessAvailableAccountsEnumAllAccountsWithOwnerName.ToPointer(),
                AvailableAccountsWithBalance: shared.AccountAccessAvailableAccountsWithBalanceEnumAllAccountsWithOwnerName.ToPointer(),
                Balances: []shared.AccountReference16CH{
                    shared.AccountReference16CH{
                        CashAccountType: sdk.String("dicta"),
                        Currency: sdk.String("EUR"),
                        Iban: sdk.String("FR7612345987650123456789014"),
                        OtherAccountIdentification: sdk.String("90-100100-0"),
                    },
                    shared.AccountReference16CH{
                        CashAccountType: sdk.String("nam"),
                        Currency: sdk.String("EUR"),
                        Iban: sdk.String("FR7612345987650123456789014"),
                        OtherAccountIdentification: sdk.String("90-100100-0"),
                    },
                    shared.AccountReference16CH{
                        CashAccountType: sdk.String("officia"),
                        Currency: sdk.String("EUR"),
                        Iban: sdk.String("FR7612345987650123456789014"),
                        OtherAccountIdentification: sdk.String("90-100100-0"),
                    },
                },
                RestrictedTo: []string{
                    "fugit",
                    "deleniti",
                    "hic",
                },
                Transactions: []shared.AccountReference16CH{
                    shared.AccountReference16CH{
                        CashAccountType: sdk.String("totam"),
                        Currency: sdk.String("EUR"),
                        Iban: sdk.String("FR7612345987650123456789014"),
                        OtherAccountIdentification: sdk.String("90-100100-0"),
                    },
                    shared.AccountReference16CH{
                        CashAccountType: sdk.String("beatae"),
                        Currency: sdk.String("EUR"),
                        Iban: sdk.String("FR7612345987650123456789014"),
                        OtherAccountIdentification: sdk.String("90-100100-0"),
                    },
                    shared.AccountReference16CH{
                        CashAccountType: sdk.String("commodi"),
                        Currency: sdk.String("EUR"),
                        Iban: sdk.String("FR7612345987650123456789014"),
                        OtherAccountIdentification: sdk.String("90-100100-0"),
                    },
                    shared.AccountReference16CH{
                        CashAccountType: sdk.String("molestiae"),
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
<!-- End SDK Example Usage -->