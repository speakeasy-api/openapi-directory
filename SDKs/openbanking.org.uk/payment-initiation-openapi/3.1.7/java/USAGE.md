<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateDomesticPaymentConsentsJsonSecurity;
import org.openapis.openapi.models.operations.CreateDomesticPaymentConsentsJsonHeaders;
import org.openapis.openapi.models.operations.CreateDomesticPaymentConsentsJsonRequest;
import org.openapis.openapi.models.operations.CreateDomesticPaymentConsentsJsonResponse;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4DataAuthorisation;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4DataInitiationCreditorAccount;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4DataInitiationDebtorAccount;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4DataInitiationInstructedAmount;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4DataInitiationRemittanceInformation;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4DataInitiation;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4DataReadRefundAccountEnum;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4Data;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4;
import org.openapis.openapi.models.shared.OBRisk1DeliveryAddress;
import org.openapis.openapi.models.shared.OBRisk1PaymentContextCodeEnum;
import org.openapis.openapi.models.shared.OBRisk1;
import org.openapis.openapi.models.shared.OBSCASupportData1AppliedAuthenticationApproachEnum;
import org.openapis.openapi.models.shared.OBSCASupportData1RequestedSCAExemptionTypeEnum;
import org.openapis.openapi.models.shared.OBSCASupportData1;
import org.openapis.openapi.models.shared.OBPostalAddress6;
import org.openapis.openapi.models.shared.OBAddressTypeCodeEnum;
import org.openapis.openapi.models.shared.SchemeTppoAuth2Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDomesticPaymentConsentsJsonRequest req = new CreateDomesticPaymentConsentsJsonRequest() {{
                security = new CreateDomesticPaymentConsentsJsonSecurity() {{
                    tppoAuth2Security = new SchemeTppoAuth2Security() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                headers = new CreateDomesticPaymentConsentsJsonHeaders() {{
                    authorization = "corrupti";
                    xCustomerUserAgent = "provident";
                    xFapiAuthDate = "distinctio";
                    xFapiCustomerIpAddress = "quibusdam";
                    xFapiInteractionId = "unde";
                    xIdempotencyKey = "nulla";
                    xJwsSignature = "corrupti";
                }};
                request = new OBWriteDomesticConsent4() {{
                    data = new OBWriteDomesticConsent4Data() {{
                        authorisation = new OBWriteDomesticConsent4DataAuthorisation() {{
                            authorisationType = "Single";
                            completionDateTime = "2022-05-18T09:34:54.894Z";
                        }};
                        initiation = new OBWriteDomesticConsent4DataInitiation() {{
                            creditorAccount = new OBWriteDomesticConsent4DataInitiationCreditorAccount() {{
                                identification = "deserunt";
                                name = "suscipit";
                                schemeName = "iure";
                                secondaryIdentification = "magnam";
                            }};
                            creditorPostalAddress = new OBPostalAddress6() {{
                                addressLine = new String[]{{
                                    add("ipsa"),
                                    add("delectus"),
                                    add("tempora"),
                                    add("suscipit"),
                                }};
                                addressType = "MailTo";
                                buildingNumber = "minus";
                                country = "Slovenia";
                                countrySubDivision = "voluptatum";
                                department = "iusto";
                                postCode = "39803-0603";
                                streetName = "repellendus";
                                subDepartment = "sapiente";
                                townName = "quo";
                            }};
                            debtorAccount = new OBWriteDomesticConsent4DataInitiationDebtorAccount() {{
                                identification = "odit";
                                name = "at";
                                schemeName = "at";
                                secondaryIdentification = "maiores";
                            }};
                            endToEndIdentification = "molestiae";
                            instructedAmount = new OBWriteDomesticConsent4DataInitiationInstructedAmount() {{
                                amount = "quod";
                                currency = "quod";
                            }};
                            instructionIdentification = "esse";
                            localInstrument = "totam";
                            remittanceInformation = new OBWriteDomesticConsent4DataInitiationRemittanceInformation() {{
                                reference = "porro";
                                unstructured = "dolorum";
                            }};
                            supplementaryData = new java.util.HashMap<String, Object>() {{
                                put("nam", "officia");
                            }};
                        }};
                        readRefundAccount = "Yes";
                        scaSupportData = new OBSCASupportData1() {{
                            appliedAuthenticationApproach = "CA";
                            referencePaymentOrderId = "deleniti";
                            requestedSCAExemptionType = "PartyToParty";
                        }};
                    }};
                    risk = new OBRisk1() {{
                        deliveryAddress = new OBRisk1DeliveryAddress() {{
                            addressLine = new String[]{{
                                add("totam"),
                                add("beatae"),
                                add("commodi"),
                                add("molestiae"),
                            }};
                            buildingNumber = "modi";
                            country = "Cocos (Keeling) Islands";
                            countrySubDivision = "impedit";
                            postCode = "42510-3616";
                            streetName = "dolor";
                            townName = "natus";
                        }};
                        merchantCategoryCode = "laboriosam";
                        merchantCustomerIdentification = "hic";
                        paymentContextCode = "PartyToParty";
                    }};
                }};
            }};            

            CreateDomesticPaymentConsentsJsonResponse res = sdk.domesticPayments.createDomesticPaymentConsentsJson(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->