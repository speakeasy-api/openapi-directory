<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PostV05CareContextsDiscoverJsonHeaders;
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
                headers = new PostV05CareContextsDiscoverJsonHeaders() {{
                    authorization = "corrupti";
                    xHipId = "provident";
                }};
                request = new PatientDiscoveryRequest() {{
                    patient = new PatientDiscoveryRequestPatient() {{
                        gender = "O";
                        id = "<patient-id>@<consent-manager-id>";
                        name = "chandler bing";
                        unverifiedIdentifiers = new org.openapis.openapi.models.shared.Identifier[]{{
                            add(new Identifier() {{
                                type = "NDHM_HEALTH_NUMBER";
                                value = "+919800083232";
                            }}),
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
                                type = "NDHM_HEALTH_NUMBER";
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
                    timestamp = "2022-07-25T06:44:09.184Z";
                    transactionId = "4e0f467c-c879-46ed-951a-05dfc2ddf7cc";
                }};
            }};            

            PostV05CareContextsDiscoverJsonResponse res = sdk.cmFacing.postV05CareContextsDiscoverJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->