<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateConsentSecurity;
import org.openapis.openapi.models.operations.CreateConsentRequest;
import org.openapis.openapi.models.operations.CreateConsentResponse;
import org.openapis.openapi.models.shared.Consents;
import org.openapis.openapi.models.shared.AccountAccessAllPsd2Enum;
import org.openapis.openapi.models.shared.AccountAccessAvailableAccountsEnum;
import org.openapis.openapi.models.shared.AccountAccessAvailableAccountsWithBalanceEnum;
import org.openapis.openapi.models.shared.AccountAccess;
import org.openapis.openapi.models.shared.AccountReference16CH;
import org.openapis.openapi.models.shared.AdditionalInformationAccess;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateConsentRequest req = new CreateConsentRequest() {{
                digest = "corrupti";
                psuAccept = "provident";
                psuAcceptCharset = "distinctio";
                psuAcceptEncoding = "quibusdam";
                psuAcceptLanguage = "unde";
                psuCorporateID = "nulla";
                psuCorporateIDType = "corrupti";
                psuDeviceID = "illum";
                psuGeoLocation = "vel";
                psuHttpMethod = "PATCH";
                psuId = "deserunt";
                psuIDType = "suscipit";
                psuIPAddress = "112.76.228.14";
                psuIPPort = "delectus";
                psuUserAgent = "tempora";
                signature = "suscipit";
                tppBrandLoggingInformation = "molestiae";
                tppExplicitAuthorisationPreferred = false;
                tppNokRedirectURI = "https://studious-lynx.info";
                tppNotificationContentPreferred = "excepturi";
                tppNotificationURI = "nisi";
                tppRedirectPreferred = false;
                tppRedirectURI = "https://tangible-bathroom.info";
                tppSignatureCertificate = "veritatis";
                xRequestID = "deserunt";
                consents = new Consents() {{
                    access = new AccountAccess() {{
                        accounts = new org.openapis.openapi.models.shared.AccountReference16CH[]{{
                            add(new AccountReference16CH() {{
                                cashAccountType = "ipsam";
                                currency = "EUR";
                                iban = "FR7612345987650123456789014";
                                otherAccountIdentification = "90-100100-0";
                            }}),
                        }};
                        additionalInformation = new AdditionalInformationAccess() {{
                            ownerName = new org.openapis.openapi.models.shared.AccountReference16CH[]{{
                                add(new AccountReference16CH() {{
                                    cashAccountType = "sapiente";
                                    currency = "EUR";
                                    iban = "FR7612345987650123456789014";
                                    otherAccountIdentification = "90-100100-0";
                                }}),
                                add(new AccountReference16CH() {{
                                    cashAccountType = "quo";
                                    currency = "EUR";
                                    iban = "FR7612345987650123456789014";
                                    otherAccountIdentification = "90-100100-0";
                                }}),
                                add(new AccountReference16CH() {{
                                    cashAccountType = "odit";
                                    currency = "EUR";
                                    iban = "FR7612345987650123456789014";
                                    otherAccountIdentification = "90-100100-0";
                                }}),
                                add(new AccountReference16CH() {{
                                    cashAccountType = "at";
                                    currency = "EUR";
                                    iban = "FR7612345987650123456789014";
                                    otherAccountIdentification = "90-100100-0";
                                }}),
                            }};
                            trustedBeneficiaries = new org.openapis.openapi.models.shared.AccountReference16CH[]{{
                                add(new AccountReference16CH() {{
                                    cashAccountType = "maiores";
                                    currency = "EUR";
                                    iban = "FR7612345987650123456789014";
                                    otherAccountIdentification = "90-100100-0";
                                }}),
                                add(new AccountReference16CH() {{
                                    cashAccountType = "molestiae";
                                    currency = "EUR";
                                    iban = "FR7612345987650123456789014";
                                    otherAccountIdentification = "90-100100-0";
                                }}),
                                add(new AccountReference16CH() {{
                                    cashAccountType = "quod";
                                    currency = "EUR";
                                    iban = "FR7612345987650123456789014";
                                    otherAccountIdentification = "90-100100-0";
                                }}),
                                add(new AccountReference16CH() {{
                                    cashAccountType = "quod";
                                    currency = "EUR";
                                    iban = "FR7612345987650123456789014";
                                    otherAccountIdentification = "90-100100-0";
                                }}),
                            }};
                        }};
                        allPsd2 = "allAccounts";
                        availableAccounts = "allAccountsWithOwnerName";
                        availableAccountsWithBalance = "allAccountsWithOwnerName";
                        balances = new org.openapis.openapi.models.shared.AccountReference16CH[]{{
                            add(new AccountReference16CH() {{
                                cashAccountType = "dicta";
                                currency = "EUR";
                                iban = "FR7612345987650123456789014";
                                otherAccountIdentification = "90-100100-0";
                            }}),
                            add(new AccountReference16CH() {{
                                cashAccountType = "nam";
                                currency = "EUR";
                                iban = "FR7612345987650123456789014";
                                otherAccountIdentification = "90-100100-0";
                            }}),
                            add(new AccountReference16CH() {{
                                cashAccountType = "officia";
                                currency = "EUR";
                                iban = "FR7612345987650123456789014";
                                otherAccountIdentification = "90-100100-0";
                            }}),
                        }};
                        restrictedTo = new String[]{{
                            add("fugit"),
                            add("deleniti"),
                            add("hic"),
                        }};
                        transactions = new org.openapis.openapi.models.shared.AccountReference16CH[]{{
                            add(new AccountReference16CH() {{
                                cashAccountType = "totam";
                                currency = "EUR";
                                iban = "FR7612345987650123456789014";
                                otherAccountIdentification = "90-100100-0";
                            }}),
                            add(new AccountReference16CH() {{
                                cashAccountType = "beatae";
                                currency = "EUR";
                                iban = "FR7612345987650123456789014";
                                otherAccountIdentification = "90-100100-0";
                            }}),
                            add(new AccountReference16CH() {{
                                cashAccountType = "commodi";
                                currency = "EUR";
                                iban = "FR7612345987650123456789014";
                                otherAccountIdentification = "90-100100-0";
                            }}),
                            add(new AccountReference16CH() {{
                                cashAccountType = "molestiae";
                                currency = "EUR";
                                iban = "FR7612345987650123456789014";
                                otherAccountIdentification = "90-100100-0";
                            }}),
                        }};
                    }};
                    combinedServiceIndicator = false;
                    frequencyPerDay = 4;
                    recurringIndicator = false;
                    validUntil = "2020-12-31";
                }};
            }}            

            CreateConsentResponse res = sdk.accountInformationServiceAIS.createConsent(req, new CreateConsentSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.consentsResponse201.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->