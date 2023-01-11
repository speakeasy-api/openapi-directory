<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            CreateDomesticPaymentConsentsRequest req = new CreateDomesticPaymentConsentsRequest() {{
                security = new CreateDomesticPaymentConsentsSecurity() {{
                    tppoAuth2Security = new SchemeTppoAuth2Security() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                headers = new CreateDomesticPaymentConsentsHeaders() {{
                    authorization = "delectus";
                    xCustomerUserAgent = "illo";
                    xFapiAuthDate = "nihil";
                    xFapiCustomerIpAddress = "explicabo";
                    xFapiInteractionId = "perspiciatis";
                    xIdempotencyKey = "quia";
                    xJwsSignature = "aliquam";
                }};
                request = new CreateDomesticPaymentConsentsRequests() {{
                    applicationJosePlusJwe = "repellendus".getBytes();
                    obWriteDomesticConsent4 = new ObWriteDomesticConsent4() {{
                        data = new ObWriteDomesticConsent4Data() {{
                            authorisation = new ObWriteDomesticConsent4DataAuthorisation() {{
                                authorisationType = "Any";
                                completionDateTime = "2012-10-01T08:27:26Z";
                            }};
                            initiation = new ObWriteDomesticConsent4DataInitiation() {{
                                creditorAccount = new ObWriteDomesticConsent4DataInitiationCreditorAccount() {{
                                    identification = "assumenda";
                                    name = "dolor";
                                    schemeName = "labore";
                                    secondaryIdentification = "ipsam";
                                }};
                                creditorPostalAddress = new ObPostalAddress6() {{
                                    addressLine = new String[]() {{
                                        add("maxime"),
                                        add("modi"),
                                        add("expedita"),
                                    }};
                                    addressType = "Correspondence";
                                    buildingNumber = "reprehenderit";
                                    country = "velit";
                                    countrySubDivision = "magni";
                                    department = "dolores";
                                    postCode = "porro";
                                    streetName = "qui";
                                    subDepartment = "consequatur";
                                    townName = "mollitia";
                                }};
                                debtorAccount = new ObWriteDomesticConsent4DataInitiationDebtorAccount() {{
                                    identification = "aut";
                                    name = "ab";
                                    schemeName = "ad";
                                    secondaryIdentification = "hic";
                                }};
                                endToEndIdentification = "non";
                                instructedAmount = new ObWriteDomesticConsent4DataInitiationInstructedAmount() {{
                                    amount = "aliquid";
                                    currency = "reprehenderit";
                                }};
                                instructionIdentification = "aut";
                                localInstrument = "blanditiis";
                                remittanceInformation = new ObWriteDomesticConsent4DataInitiationRemittanceInformation() {{
                                    reference = "voluptate";
                                    unstructured = "et";
                                }};
                                supplementaryData = new java.util.HashMap<String, Object>() {{
                                    put("officia", "aut");
                                    put("sit", "quas");
                                }};
                            }};
                            readRefundAccount = "No";
                            scaSupportData = new ObscaSupportData1() {{
                                appliedAuthenticationApproach = "SCA";
                                referencePaymentOrderId = "ut";
                                requestedSCAExemptionType = "EcommerceServices";
                            }};
                        }};
                        risk = new ObRisk1() {{
                            deliveryAddress = new ObRisk1DeliveryAddress() {{
                                addressLine = new String[]() {{
                                    add("dolores"),
                                }};
                                buildingNumber = "quo";
                                country = "voluptatibus";
                                countrySubDivision = "expedita";
                                postCode = "ut";
                                streetName = "aperiam";
                                townName = "fugiat";
                            }};
                            merchantCategoryCode = "qui";
                            merchantCustomerIdentification = "aliquid";
                            paymentContextCode = "PartyToParty";
                        }};
                    }};
                    obWriteDomesticConsent5 = new ObWriteDomesticConsent4() {{
                        data = new ObWriteDomesticConsent4Data() {{
                            authorisation = new ObWriteDomesticConsent4DataAuthorisation() {{
                                authorisationType = "Single";
                                completionDateTime = "1999-06-14T00:59:50Z";
                            }};
                            initiation = new ObWriteDomesticConsent4DataInitiation() {{
                                creditorAccount = new ObWriteDomesticConsent4DataInitiationCreditorAccount() {{
                                    identification = "dolore";
                                    name = "aliquam";
                                    schemeName = "debitis";
                                    secondaryIdentification = "qui";
                                }};
                                creditorPostalAddress = new ObPostalAddress6() {{
                                    addressLine = new String[]() {{
                                        add("incidunt"),
                                        add("quis"),
                                        add("ut"),
                                    }};
                                    addressType = "Correspondence";
                                    buildingNumber = "modi";
                                    country = "numquam";
                                    countrySubDivision = "eveniet";
                                    department = "earum";
                                    postCode = "neque";
                                    streetName = "similique";
                                    subDepartment = "unde";
                                    townName = "sint";
                                }};
                                debtorAccount = new ObWriteDomesticConsent4DataInitiationDebtorAccount() {{
                                    identification = "sed";
                                    name = "quia";
                                    schemeName = "enim";
                                    secondaryIdentification = "in";
                                }};
                                endToEndIdentification = "dignissimos";
                                instructedAmount = new ObWriteDomesticConsent4DataInitiationInstructedAmount() {{
                                    amount = "sit";
                                    currency = "deleniti";
                                }};
                                instructionIdentification = "laudantium";
                                localInstrument = "natus";
                                remittanceInformation = new ObWriteDomesticConsent4DataInitiationRemittanceInformation() {{
                                    reference = "est";
                                    unstructured = "et";
                                }};
                                supplementaryData = new java.util.HashMap<String, Object>() {{
                                    put("quidem", "sed");
                                }};
                            }};
                            readRefundAccount = "No";
                            scaSupportData = new ObscaSupportData1() {{
                                appliedAuthenticationApproach = "CA";
                                referencePaymentOrderId = "dolor";
                                requestedSCAExemptionType = "EcommerceGoods";
                            }};
                        }};
                        risk = new ObRisk1() {{
                            deliveryAddress = new ObRisk1DeliveryAddress() {{
                                addressLine = new String[]() {{
                                    add("quaerat"),
                                }};
                                buildingNumber = "soluta";
                                country = "sit";
                                countrySubDivision = "harum";
                                postCode = "placeat";
                                streetName = "beatae";
                                townName = "quis";
                            }};
                            merchantCategoryCode = "tempore";
                            merchantCustomerIdentification = "provident";
                            paymentContextCode = "EcommerceGoods";
                        }};
                    }};
                }};
            }};

            CreateDomesticPaymentConsentsResponse res = sdk.domesticPayments.createDomesticPaymentConsents(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->