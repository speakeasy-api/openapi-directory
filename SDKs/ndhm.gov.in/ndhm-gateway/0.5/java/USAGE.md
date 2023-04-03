<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PostV05CareContextsDiscoverJsonRequest;
import org.openapis.openapi.models.operations.PostV05CareContextsDiscoverJsonResponse;
import org.openapis.openapi.models.shared.PatientDiscoveryRequestPatient;
import org.openapis.openapi.models.shared.PatientDiscoveryRequest;
import org.openapis.openapi.models.shared.Identifier;
import org.openapis.openapi.models.shared.IdentifierTypeEnum;
import org.openapis.openapi.models.shared.PatientGenderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05CareContextsDiscoverJsonRequest req = new PostV05CareContextsDiscoverJsonRequest() {{
                authorization = "corrupti";
                patientDiscoveryRequest = new PatientDiscoveryRequest() {{
                    patient = new PatientDiscoveryRequestPatient() {{
                        gender = "O";
                        id = "<patient-id>@<consent-manager-id>";
                        name = "chandler bing";
                        unverifiedIdentifiers = new org.openapis.openapi.models.shared.Identifier[]{{
                            add(new Identifier() {{
                                type = "HEALTH_ID";
                                value = "+919800083232";
                            }}),
                            add(new Identifier() {{
                                type = "NDHM_HEALTH_NUMBER";
                                value = "+919800083232";
                            }}),
                            add(new Identifier() {{
                                type = "HEALTH_ID";
                                value = "+919800083232";
                            }}),
                        }};
                        verifiedIdentifiers = new org.openapis.openapi.models.shared.Identifier[]{{
                            add(new Identifier() {{
                                type = "HEALTH_ID";
                                value = "+919800083232";
                            }}),
                            add(new Identifier() {{
                                type = "MR";
                                value = "+919800083232";
                            }}),
                            add(new Identifier() {{
                                type = "NDHM_HEALTH_NUMBER";
                                value = "+919800083232";
                            }}),
                        }};
                        yearOfBirth = 2000;
                    }};
                    requestId = "499a5a4a-7dda-4f20-9b67-e24589627061";
                    timestamp = "2022-03-26T09:37:56.283Z";
                    transactionId = "74e0f467-cc87-496e-9151-a05dfc2ddf7c";
                }};
                xHipId = "quod";
            }}            

            PostV05CareContextsDiscoverJsonResponse res = sdk.cmFacing.postV05CareContextsDiscoverJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->