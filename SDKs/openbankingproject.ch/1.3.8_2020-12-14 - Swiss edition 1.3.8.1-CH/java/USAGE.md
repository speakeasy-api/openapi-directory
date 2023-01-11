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
                    digest = "sit";
                    psuAccept = "voluptas";
                    psuAcceptCharset = "culpa";
                    psuAcceptEncoding = "expedita";
                    psuAcceptLanguage = "consequuntur";
                    psuCorporateID = "dolor";
                    psuCorporateIDType = "expedita";
                    psuDeviceID = "voluptas";
                    psuGeoLocation = "fugit";
                    psuHttpMethod = "PATCH";
                    psuID = "nihil";
                    psuIDType = "rerum";
                    psuIPAddress = "dicta";
                    psuIPPort = "debitis";
                    psuUserAgent = "voluptatum";
                    signature = "et";
                    tppBrandLoggingInformation = "ut";
                    tppExplicitAuthorisationPreferred = true;
                    tppNokRedirectURI = "et";
                    tppNotificationContentPreferred = "voluptate";
                    tppNotificationURI = "iste";
                    tppRedirectPreferred = true;
                    tppRedirectURI = "totam";
                    tppSignatureCertificate = "dolores";
                    xRequestID = "illum";
                }};
                request = new Consents() {{
                    access = new AccountAccess() {{
                        accounts = new openapisdk.models.shared.AccountReference16Ch[]() {{
                            add(new AccountReference16Ch() {{
                                cashAccountType = "vel";
                                currency = "odio";
                                iban = "dolore";
                                otherAccountIdentification = "id";
                            }}),
                        }};
                        additionalInformation = new AdditionalInformationAccess() {{
                            ownerName = new openapisdk.models.shared.AccountReference16Ch[]() {{
                                add(new AccountReference16Ch() {{
                                    cashAccountType = "accusantium";
                                    currency = "totam";
                                    iban = "commodi";
                                    otherAccountIdentification = "quis";
                                }}),
                            }};
                            trustedBeneficiaries = new openapisdk.models.shared.AccountReference16Ch[]() {{
                                add(new AccountReference16Ch() {{
                                    cashAccountType = "aut";
                                    currency = "odit";
                                    iban = "non";
                                    otherAccountIdentification = "voluptas";
                                }}),
                                add(new AccountReference16Ch() {{
                                    cashAccountType = "omnis";
                                    currency = "aut";
                                    iban = "illo";
                                    otherAccountIdentification = "sed";
                                }}),
                            }};
                        }};
                        allPsd2 = "allAccountsWithOwnerName";
                        availableAccounts = "allAccountsWithOwnerName";
                        availableAccountsWithBalance = "allAccounts";
                        balances = new openapisdk.models.shared.AccountReference16Ch[]() {{
                            add(new AccountReference16Ch() {{
                                cashAccountType = "odio";
                                currency = "qui";
                                iban = "recusandae";
                                otherAccountIdentification = "at";
                            }}),
                        }};
                        restrictedTo = new String[]() {{
                            add("eveniet"),
                        }};
                        transactions = new openapisdk.models.shared.AccountReference16Ch[]() {{
                            add(new AccountReference16Ch() {{
                                cashAccountType = "sint";
                                currency = "inventore";
                                iban = "ut";
                                otherAccountIdentification = "exercitationem";
                            }}),
                            add(new AccountReference16Ch() {{
                                cashAccountType = "aut";
                                currency = "reprehenderit";
                                iban = "tempore";
                                otherAccountIdentification = "maiores";
                            }}),
                        }};
                    }};
                    combinedServiceIndicator = false;
                    frequencyPerDay = 7242748068272024738;
                    recurringIndicator = false;
                    validUntil = "1992-08-27";
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