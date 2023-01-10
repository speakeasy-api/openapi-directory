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
            Digest: "perferendis",
            PSUAccept: "est",
            PSUAcceptCharset: "ea",
            PSUAcceptEncoding: "rem",
            PSUAcceptLanguage: "qui",
            PSUCorporateID: "rerum",
            PSUCorporateIDType: "minus",
            PSUDeviceID: "perspiciatis",
            PSUGeoLocation: "natus",
            PSUHTTPMethod: "PATCH",
            PSUID: "est",
            PSUIDType: "aliquid",
            PSUIPAddress: "et",
            PSUIPPort: "eligendi",
            PSUUserAgent: "debitis",
            Signature: "dolor",
            TPPBrandLoggingInformation: "qui",
            TPPExplicitAuthorisationPreferred: true,
            TPPNokRedirectURI: "fugit",
            TPPNotificationContentPreferred: "voluptas",
            TPPNotificationURI: "ut",
            TPPRedirectPreferred: false,
            TPPRedirectURI: "autem",
            TPPSignatureCertificate: "ut",
            XRequestID: "fugiat",
        },
        Request: &shared.Consents{
            Access: shared.AccountAccess{
                Accounts: []shared.AccountReference16Ch{
                    shared.AccountReference16Ch{
                        CashAccountType: "omnis",
                        Currency: "voluptatem",
                        Iban: "et",
                        OtherAccountIdentification: "ratione",
                    },
                },
                AdditionalInformation: &shared.AdditionalInformationAccess{
                    OwnerName: []shared.AccountReference16Ch{
                        shared.AccountReference16Ch{
                            CashAccountType: "omnis",
                            Currency: "voluptate",
                            Iban: "aspernatur",
                            OtherAccountIdentification: "nemo",
                        },
                        shared.AccountReference16Ch{
                            CashAccountType: "voluptatem",
                            Currency: "autem",
                            Iban: "dolorum",
                            OtherAccountIdentification: "exercitationem",
                        },
                    },
                    TrustedBeneficiaries: []shared.AccountReference16Ch{
                        shared.AccountReference16Ch{
                            CashAccountType: "possimus",
                            Currency: "et",
                            Iban: "nisi",
                            OtherAccountIdentification: "sed",
                        },
                        shared.AccountReference16Ch{
                            CashAccountType: "esse",
                            Currency: "non",
                            Iban: "quo",
                            OtherAccountIdentification: "aspernatur",
                        },
                    },
                },
                AllPsd2: "allAccountsWithOwnerName",
                AvailableAccounts: "allAccounts",
                AvailableAccountsWithBalance: "allAccountsWithOwnerName",
                Balances: []shared.AccountReference16Ch{
                    shared.AccountReference16Ch{
                        CashAccountType: "facere",
                        Currency: "est",
                        Iban: "quasi",
                        OtherAccountIdentification: "voluptas",
                    },
                    shared.AccountReference16Ch{
                        CashAccountType: "qui",
                        Currency: "hic",
                        Iban: "enim",
                        OtherAccountIdentification: "quis",
                    },
                },
                RestrictedTo: []string{
                    "quo",
                },
                Transactions: []shared.AccountReference16Ch{
                    shared.AccountReference16Ch{
                        CashAccountType: "incidunt",
                        Currency: "rerum",
                        Iban: "praesentium",
                        OtherAccountIdentification: "molestias",
                    },
                },
            },
            CombinedServiceIndicator: false,
            FrequencyPerDay: 1511290573124094661,
            RecurringIndicator: false,
            ValidUntil: "2001-04-06",
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