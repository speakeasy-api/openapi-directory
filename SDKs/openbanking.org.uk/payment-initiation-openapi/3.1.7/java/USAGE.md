<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDomesticPaymentConsentsJsonRequest;
import org.openapis.openapi.models.operations.CreateDomesticPaymentConsentsJsonResponse;
import org.openapis.openapi.models.operations.CreateDomesticPaymentConsentsJsonSecurity;
import org.openapis.openapi.models.shared.OBAddressTypeCodeEnum;
import org.openapis.openapi.models.shared.OBPostalAddress6;
import org.openapis.openapi.models.shared.OBRisk1;
import org.openapis.openapi.models.shared.OBRisk1DeliveryAddress;
import org.openapis.openapi.models.shared.OBRisk1PaymentContextCodeEnum;
import org.openapis.openapi.models.shared.OBSCASupportData1;
import org.openapis.openapi.models.shared.OBSCASupportData1AppliedAuthenticationApproachEnum;
import org.openapis.openapi.models.shared.OBSCASupportData1RequestedSCAExemptionTypeEnum;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4Data;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4DataAuthorisation;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4DataInitiation;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4DataInitiationCreditorAccount;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4DataInitiationDebtorAccount;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4DataInitiationInstructedAmount;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4DataInitiationRemittanceInformation;
import org.openapis.openapi.models.shared.OBWriteDomesticConsent4DataReadRefundAccountEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDomesticPaymentConsentsJsonRequest req = new CreateDomesticPaymentConsentsJsonRequest("corrupti",                 new OBWriteDomesticConsent4(                new OBWriteDomesticConsent4Data(                new OBWriteDomesticConsent4DataInitiation(                new OBWriteDomesticConsent4DataInitiationCreditorAccount("provident", "distinctio", "quibusdam") {{
                                                                                secondaryIdentification = "unde";
                                                                            }};, "nulla",                 new OBWriteDomesticConsent4DataInitiationInstructedAmount("corrupti", "illum");, "vel") {{
                                                                creditorPostalAddress = new OBPostalAddress6() {{
                                                                    addressLine = new String[]{{
                                                                        add("deserunt"),
                                                                        add("suscipit"),
                                                                        add("iure"),
                                                                    }};
                                                                    addressType = OBAddressTypeCodeEnum.DELIVERY_TO;
                                                                    buildingNumber = "debitis";
                                                                    country = "Austria";
                                                                    countrySubDivision = "delectus";
                                                                    department = "tempora";
                                                                    postCode = "47854";
                                                                    streetName = "excepturi";
                                                                    subDepartment = "nisi";
                                                                    townName = "recusandae";
                                                                }};;
                                                                debtorAccount = new OBWriteDomesticConsent4DataInitiationDebtorAccount("temporibus", "ab") {{
                                                                    name = "Mrs. Marie O'Connell";
                                                                    secondaryIdentification = "sapiente";
                                                                }};;
                                                                localInstrument = "quo";
                                                                remittanceInformation = new OBWriteDomesticConsent4DataInitiationRemittanceInformation() {{
                                                                    reference = "odit";
                                                                    unstructured = "at";
                                                                }};;
                                                                supplementaryData = new java.util.HashMap<String, Object>() {{
                                                                    put("maiores", "molestiae");
                                                                    put("quod", "quod");
                                                                    put("esse", "totam");
                                                                    put("porro", "dolorum");
                                                                }};
                                                            }};) {{
                                                authorisation = new OBWriteDomesticConsent4DataAuthorisation(OBWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum.ANY) {{
                                                    completionDateTime = OffsetDateTime.parse("2021-09-20T20:35:01.256Z");
                                                }};;
                                                readRefundAccount = OBWriteDomesticConsent4DataReadRefundAccountEnum.YES;
                                                scaSupportData = new OBSCASupportData1() {{
                                                    appliedAuthenticationApproach = OBSCASupportData1AppliedAuthenticationApproachEnum.CA;
                                                    referencePaymentOrderId = "deleniti";
                                                    requestedSCAExemptionType = OBSCASupportData1RequestedSCAExemptionTypeEnum.PARTY_TO_PARTY;
                                                }};;
                                            }};,                 new OBRisk1() {{
                                                deliveryAddress = new OBRisk1DeliveryAddress("optio", "totam") {{
                                                    addressLine = new String[]{{
                                                        add("commodi"),
                                                    }};
                                                    buildingNumber = "molestiae";
                                                    countrySubDivision = "modi";
                                                    postCode = "77425";
                                                    streetName = "aspernatur";
                                                }};;
                                                merchantCategoryCode = "perferendis";
                                                merchantCustomerIdentification = "ad";
                                                paymentContextCode = OBRisk1PaymentContextCodeEnum.OTHER;
                                            }};);, "sed", "iste") {{
                xCustomerUserAgent = "dolor";
                xFapiAuthDate = "natus";
                xFapiCustomerIpAddress = "laboriosam";
                xFapiInteractionId = "hic";
            }};            

            CreateDomesticPaymentConsentsJsonResponse res = sdk.domesticPayments.createDomesticPaymentConsentsJson(req, new CreateDomesticPaymentConsentsJsonSecurity("saepe") {{
                tppoAuth2Security = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->