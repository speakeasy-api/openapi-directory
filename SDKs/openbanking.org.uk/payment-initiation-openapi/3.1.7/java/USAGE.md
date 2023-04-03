<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateDomesticPaymentConsentsJsonSecurity;
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

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDomesticPaymentConsentsJsonRequest req = new CreateDomesticPaymentConsentsJsonRequest() {{
                authorization = "corrupti";
                obWriteDomesticConsent4 = new OBWriteDomesticConsent4() {{
                    data = new OBWriteDomesticConsent4Data() {{
                        authorisation = new OBWriteDomesticConsent4DataAuthorisation() {{
                            authorisationType = "Single";
                            completionDateTime = "2021-04-24T16:27:50.833Z";
                        }};
                        initiation = new OBWriteDomesticConsent4DataInitiation() {{
                            creditorAccount = new OBWriteDomesticConsent4DataInitiationCreditorAccount() {{
                                identification = "unde";
                                name = "nulla";
                                schemeName = "corrupti";
                                secondaryIdentification = "illum";
                            }};
                            creditorPostalAddress = new OBPostalAddress6() {{
                                addressLine = new String[]{{
                                    add("error"),
                                    add("deserunt"),
                                }};
                                addressType = "MailTo";
                                buildingNumber = "iure";
                                country = "French Guiana";
                                countrySubDivision = "debitis";
                                department = "ipsa";
                                postCode = "23478-5453";
                                streetName = "recusandae";
                                subDepartment = "temporibus";
                                townName = "ab";
                            }};
                            debtorAccount = new OBWriteDomesticConsent4DataInitiationDebtorAccount() {{
                                identification = "quis";
                                name = "veritatis";
                                schemeName = "deserunt";
                                secondaryIdentification = "perferendis";
                            }};
                            endToEndIdentification = "ipsam";
                            instructedAmount = new OBWriteDomesticConsent4DataInitiationInstructedAmount() {{
                                amount = "repellendus";
                                currency = "sapiente";
                            }};
                            instructionIdentification = "quo";
                            localInstrument = "odit";
                            remittanceInformation = new OBWriteDomesticConsent4DataInitiationRemittanceInformation() {{
                                reference = "at";
                                unstructured = "at";
                            }};
                            supplementaryData = new java.util.HashMap<String, Object>() {{
                                put("molestiae", "quod");
                                put("quod", "esse");
                                put("totam", "porro");
                                put("dolorum", "dicta");
                            }};
                        }};
                        readRefundAccount = "Yes";
                        scaSupportData = new OBSCASupportData1() {{
                            appliedAuthenticationApproach = "SCA";
                            referencePaymentOrderId = "occaecati";
                            requestedSCAExemptionType = "ContactlessTravel";
                        }};
                    }};
                    risk = new OBRisk1() {{
                        deliveryAddress = new OBRisk1DeliveryAddress() {{
                            addressLine = new String[]{{
                                add("hic"),
                                add("optio"),
                                add("totam"),
                            }};
                            buildingNumber = "beatae";
                            country = "Iraq";
                            countrySubDivision = "molestiae";
                            postCode = "17742";
                            streetName = "excepturi";
                            townName = "aspernatur";
                        }};
                        merchantCategoryCode = "perferendis";
                        merchantCustomerIdentification = "ad";
                        paymentContextCode = "Other";
                    }};
                }};
                xCustomerUserAgent = "sed";
                xFapiAuthDate = "iste";
                xFapiCustomerIpAddress = "dolor";
                xFapiInteractionId = "natus";
                xIdempotencyKey = "laboriosam";
                xJwsSignature = "hic";
            }}            

            CreateDomesticPaymentConsentsJsonResponse res = sdk.domesticPayments.createDomesticPaymentConsentsJson(req, new CreateDomesticPaymentConsentsJsonSecurity() {{
                tppoAuth2Security = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->