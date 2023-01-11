<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    bearerAuthOAuth = new SchemeBearerAuthOAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CreateConsentRequest req = new CreateConsentRequest() {{
                security = new CreateConsentSecurity() {{
                    bearerAuthOAuth = new SchemeBearerAuthOAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }};
                headers = new CreateConsentHeaders() {{
                    digest = "tempore";
                    psuAccept = "rerum";
                    psuAcceptCharset = "voluptatem";
                    psuAcceptEncoding = "dolorem";
                    psuAcceptLanguage = "est";
                    psuCorporateID = "aut";
                    psuCorporateIDType = "minus";
                    psuDeviceID = "dolore";
                    psuGeoLocation = "officia";
                    psuHttpMethod = "GET";
                    psuID = "rem";
                    psuIDType = "et";
                    psuIPAddress = "ea";
                    psuIPPort = "repellendus";
                    psuUserAgent = "quidem";
                    signature = "repellat";
                    tppBrandLoggingInformation = "ut";
                    tppExplicitAuthorisationPreferred = false;
                    tppNokRedirectURI = "ex";
                    tppNotificationContentPreferred = "assumenda";
                    tppNotificationURI = "dignissimos";
                    tppRedirectPreferred = false;
                    tppRedirectURI = "illum";
                    tppSignatureCertificate = "enim";
                    xRequestID = "fugit";
                }};
                request = new Consents() {{
                    access = new AccountAccess() {{
                        accounts = new openapisdk.models.shared.AccountReference16Ch[]() {{
                            add(new AccountReference16Ch() {{
                                cashAccountType = "aut";
                                currency = "quia";
                                iban = "rem";
                                otherAccountIdentification = "quod";
                            }}),
                            add(new AccountReference16Ch() {{
                                cashAccountType = "dolore";
                                currency = "ipsa";
                                iban = "at";
                                otherAccountIdentification = "fugit";
                            }}),
                            add(new AccountReference16Ch() {{
                                cashAccountType = "sapiente";
                                currency = "est";
                                iban = "odio";
                                otherAccountIdentification = "sed";
                            }}),
                        }};
                        additionalInformation = new AdditionalInformationAccess() {{
                            ownerName = new openapisdk.models.shared.AccountReference16Ch[]() {{
                                add(new AccountReference16Ch() {{
                                    cashAccountType = "fugit";
                                    currency = "odio";
                                    iban = "aperiam";
                                    otherAccountIdentification = "assumenda";
                                }}),
                            }};
                            trustedBeneficiaries = new openapisdk.models.shared.AccountReference16Ch[]() {{
                                add(new AccountReference16Ch() {{
                                    cashAccountType = "eos";
                                    currency = "totam";
                                    iban = "vero";
                                    otherAccountIdentification = "asperiores";
                                }}),
                            }};
                        }};
                        allPsd2 = "allAccountsWithOwnerName";
                        availableAccounts = "allAccounts";
                        availableAccountsWithBalance = "allAccounts";
                        balances = new openapisdk.models.shared.AccountReference16Ch[]() {{
                            add(new AccountReference16Ch() {{
                                cashAccountType = "facilis";
                                currency = "excepturi";
                                iban = "illum";
                                otherAccountIdentification = "sapiente";
                            }}),
                        }};
                        restrictedTo = new String[]() {{
                            add("sint"),
                        }};
                        transactions = new openapisdk.models.shared.AccountReference16Ch[]() {{
                            add(new AccountReference16Ch() {{
                                cashAccountType = "asperiores";
                                currency = "assumenda";
                                iban = "ipsum";
                                otherAccountIdentification = "quasi";
                            }}),
                        }};
                    }};
                    combinedServiceIndicator = true;
                    frequencyPerDay = 17231110517011566;
                    recurringIndicator = true;
                    validUntil = "1976-06-24";
                }};
            }};

            CreateConsentResponse res = sdk.accountInformationServiceAIS.createConsent(req);

            if (res.consentsResponse201.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->