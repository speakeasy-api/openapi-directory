<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConsentRequest;
import org.openapis.openapi.models.operations.CreateConsentResponse;
import org.openapis.openapi.models.operations.CreateConsentSecurity;
import org.openapis.openapi.models.shared.AccountAccess;
import org.openapis.openapi.models.shared.AccountAccessAllPsd2Enum;
import org.openapis.openapi.models.shared.AccountAccessAvailableAccountsEnum;
import org.openapis.openapi.models.shared.AccountAccessAvailableAccountsWithBalanceEnum;
import org.openapis.openapi.models.shared.AccountReference16CH;
import org.openapis.openapi.models.shared.AdditionalInformationAccess;
import org.openapis.openapi.models.shared.Consents;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateConsentRequest req = new CreateConsentRequest("140.151.183.216", "unde") {{
                digest = "nulla";
                psuAccept = "corrupti";
                psuAcceptCharset = "illum";
                psuAcceptEncoding = "vel";
                psuAcceptLanguage = "error";
                psuCorporateID = "deserunt";
                psuCorporateIDType = "suscipit";
                psuDeviceID = "iure";
                psuGeoLocation = "magnam";
                psuHttpMethod = PSUHttpMethodEnum.DELETE;
                psuId = "ipsa";
                psuIDType = "delectus";
                psuIPPort = "tempora";
                psuUserAgent = "suscipit";
                signature = "molestiae";
                tppBrandLoggingInformation = "minus";
                tppExplicitAuthorisationPreferred = false;
                tppNokRedirectURI = "https://menacing-jewellery.name";
                tppNotificationContentPreferred = "nisi";
                tppNotificationURI = "recusandae";
                tppRedirectPreferred = false;
                tppRedirectURI = "https://bite-sized-favorite.com";
                tppSignatureCertificate = "deserunt";
                consents = new Consents(                new AccountAccess() {{
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
                                    }};;
                                    allPsd2 = AccountAccessAllPsd2Enum.ALL_ACCOUNTS;
                                    availableAccounts = AccountAccessAvailableAccountsEnum.ALL_ACCOUNTS_WITH_OWNER_NAME;
                                    availableAccountsWithBalance = AccountAccessAvailableAccountsWithBalanceEnum.ALL_ACCOUNTS_WITH_OWNER_NAME;
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
                                }};, false, 4L, false, LocalDate.parse("2020-12-31"));;
            }};            

            CreateConsentResponse res = sdk.accountInformationServiceAIS.createConsent(req, new CreateConsentSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.consentsResponse201 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->