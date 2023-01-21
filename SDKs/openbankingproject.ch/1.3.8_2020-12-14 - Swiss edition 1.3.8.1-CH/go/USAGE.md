<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                BearerAuthOAuth: &shared.SchemeBearerAuthOAuth{
                    Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateConsentRequest{
        Security: operations.CreateConsentSecurity{
            BearerAuthOAuth: &shared.SchemeBearerAuthOAuth{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        },
        Headers: operations.CreateConsentHeaders{
            Digest: "sit",
            PSUAccept: "voluptas",
            PSUAcceptCharset: "culpa",
            PSUAcceptEncoding: "expedita",
            PSUAcceptLanguage: "consequuntur",
            PSUCorporateID: "dolor",
            PSUCorporateIDType: "expedita",
            PSUDeviceID: "voluptas",
            PSUGeoLocation: "fugit",
            PSUHTTPMethod: "PATCH",
            PSUID: "nihil",
            PSUIDType: "rerum",
            PSUIPAddress: "dicta",
            PSUIPPort: "debitis",
            PSUUserAgent: "voluptatum",
            Signature: "et",
            TPPBrandLoggingInformation: "ut",
            TPPExplicitAuthorisationPreferred: true,
            TPPNokRedirectURI: "et",
            TPPNotificationContentPreferred: "voluptate",
            TPPNotificationURI: "iste",
            TPPRedirectPreferred: true,
            TPPRedirectURI: "totam",
            TPPSignatureCertificate: "dolores",
            XRequestID: "illum",
        },
        Request: &shared.Consents{
            Access: shared.AccountAccess{
                Accounts: []shared.AccountReference16Ch{
                    shared.AccountReference16Ch{
                        CashAccountType: "vel",
                        Currency: "odio",
                        Iban: "dolore",
                        OtherAccountIdentification: "id",
                    },
                },
                AdditionalInformation: &shared.AdditionalInformationAccess{
                    OwnerName: []shared.AccountReference16Ch{
                        shared.AccountReference16Ch{
                            CashAccountType: "accusantium",
                            Currency: "totam",
                            Iban: "commodi",
                            OtherAccountIdentification: "quis",
                        },
                    },
                    TrustedBeneficiaries: []shared.AccountReference16Ch{
                        shared.AccountReference16Ch{
                            CashAccountType: "aut",
                            Currency: "odit",
                            Iban: "non",
                            OtherAccountIdentification: "voluptas",
                        },
                        shared.AccountReference16Ch{
                            CashAccountType: "omnis",
                            Currency: "aut",
                            Iban: "illo",
                            OtherAccountIdentification: "sed",
                        },
                    },
                },
                AllPsd2: "allAccountsWithOwnerName",
                AvailableAccounts: "allAccountsWithOwnerName",
                AvailableAccountsWithBalance: "allAccounts",
                Balances: []shared.AccountReference16Ch{
                    shared.AccountReference16Ch{
                        CashAccountType: "odio",
                        Currency: "qui",
                        Iban: "recusandae",
                        OtherAccountIdentification: "at",
                    },
                },
                RestrictedTo: []string{
                    "eveniet",
                },
                Transactions: []shared.AccountReference16Ch{
                    shared.AccountReference16Ch{
                        CashAccountType: "sint",
                        Currency: "inventore",
                        Iban: "ut",
                        OtherAccountIdentification: "exercitationem",
                    },
                    shared.AccountReference16Ch{
                        CashAccountType: "aut",
                        Currency: "reprehenderit",
                        Iban: "tempore",
                        OtherAccountIdentification: "maiores",
                    },
                },
            },
            CombinedServiceIndicator: false,
            FrequencyPerDay: 7242748068272024738,
            RecurringIndicator: false,
            ValidUntil: "1992-08-27",
        },
    }
    
    res, err := s.AccountInformationServiceAIS.CreateConsent(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ConsentsResponse201 != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->