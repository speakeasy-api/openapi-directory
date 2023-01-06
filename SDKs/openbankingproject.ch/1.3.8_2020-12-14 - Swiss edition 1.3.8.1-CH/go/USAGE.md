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
            Digest: "amet",
            PSUAccept: "deserunt",
            PSUAcceptCharset: "placeat",
            PSUAcceptEncoding: "voluptatum",
            PSUAcceptLanguage: "tempore",
            PSUCorporateID: "iusto",
            PSUCorporateIDType: "et",
            PSUDeviceID: "ad",
            PSUGeoLocation: "nihil",
            PSUHTTPMethod: "PUT",
            PSUID: "ducimus",
            PSUIDType: "velit",
            PSUIPAddress: "nisi",
            PSUIPPort: "odit",
            PSUUserAgent: "fugiat",
            Signature: "rerum",
            TPPBrandLoggingInformation: "sunt",
            TPPExplicitAuthorisationPreferred: false,
            TPPNokRedirectURI: "possimus",
            TPPNotificationContentPreferred: "dolor",
            TPPNotificationURI: "eaque",
            TPPRedirectPreferred: false,
            TPPRedirectURI: "totam",
            TPPSignatureCertificate: "libero",
            XRequestID: "maxime",
        },
        Request: &shared.Consents{
            Access: shared.AccountAccess{
                Accounts: []shared.AccountReference16Ch{
                    shared.AccountReference16Ch{
                        CashAccountType: "dolorem",
                        Currency: "maxime",
                        Iban: "nihil",
                        OtherAccountIdentification: "at",
                    },
                    shared.AccountReference16Ch{
                        CashAccountType: "a",
                        Currency: "reiciendis",
                        Iban: "officia",
                        OtherAccountIdentification: "expedita",
                    },
                },
                AdditionalInformation: &shared.AdditionalInformationAccess{
                    OwnerName: []shared.AccountReference16Ch{
                        shared.AccountReference16Ch{
                            CashAccountType: "ut",
                            Currency: "molestiae",
                            Iban: "ab",
                            OtherAccountIdentification: "voluptatum",
                        },
                    },
                    TrustedBeneficiaries: []shared.AccountReference16Ch{
                        shared.AccountReference16Ch{
                            CashAccountType: "consequatur",
                            Currency: "iure",
                            Iban: "quaerat",
                            OtherAccountIdentification: "nesciunt",
                        },
                    },
                },
                AllPsd2: "allAccountsWithOwnerName",
                AvailableAccounts: "allAccountsWithOwnerName",
                AvailableAccountsWithBalance: "allAccounts",
                Balances: []shared.AccountReference16Ch{
                    shared.AccountReference16Ch{
                        CashAccountType: "quis",
                        Currency: "est",
                        Iban: "dicta",
                        OtherAccountIdentification: "error",
                    },
                    shared.AccountReference16Ch{
                        CashAccountType: "error",
                        Currency: "omnis",
                        Iban: "perferendis",
                        OtherAccountIdentification: "harum",
                    },
                    shared.AccountReference16Ch{
                        CashAccountType: "occaecati",
                        Currency: "deserunt",
                        Iban: "voluptas",
                        OtherAccountIdentification: "quae",
                    },
                },
                RestrictedTo: []string{
                    "vitae",
                },
                Transactions: []shared.AccountReference16Ch{
                    shared.AccountReference16Ch{
                        CashAccountType: "possimus",
                        Currency: "rerum",
                        Iban: "animi",
                        OtherAccountIdentification: "ipsum",
                    },
                    shared.AccountReference16Ch{
                        CashAccountType: "totam",
                        Currency: "eum",
                        Iban: "molestiae",
                        OtherAccountIdentification: "fuga",
                    },
                },
            },
            CombinedServiceIndicator: false,
            FrequencyPerDay: 3985793072333781251,
            RecurringIndicator: true,
            ValidUntil: "2003-11-02",
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