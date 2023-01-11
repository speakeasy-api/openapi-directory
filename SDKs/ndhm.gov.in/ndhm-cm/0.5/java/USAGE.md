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

            PostV05ConsentRequestsInitRequest req = new PostV05ConsentRequestsInitRequest() {{
                headers = new PostV05ConsentRequestsInitHeaders() {{
                    authorization = "sit";
                }};
                request = new PostV05ConsentRequestsInitRequests() {{
                    applicationXML = "voluptas".getBytes();
                    consentRequest = new ConsentRequest() {{
                        consent = new ConsentRequestConsent() {{
                            careContexts = new openapisdk.models.shared.CareContextDefinition[]() {{
                                add(new CareContextDefinition() {{
                                    careContextReference = "expedita";
                                    patientReference = "consequuntur";
                                }}),
                                add(new CareContextDefinition() {{
                                    careContextReference = "dolor";
                                    patientReference = "expedita";
                                }}),
                            }};
                            hiTypes = new openapisdk.models.shared.HiTypeEnumEnum[]() {{
                                add("OPConsultation"),
                                add("OPConsultation"),
                                add("OPConsultation"),
                            }};
                            hip = new ConsentRequestConsentHip() {{
                                id = "rerum";
                            }};
                            hiu = new ConsentRequestConsentHiu() {{
                                id = "dicta";
                            }};
                            patient = new ConsentRequestConsentPatient() {{
                                id = "debitis";
                            }};
                            permission = new Permission() {{
                                accessMode = "VIEW";
                                dataEraseAt = "2005-09-27T09:17:54Z";
                                dateRange = new PermissionDateRange() {{
                                    from = "1970-04-14T21:44:49Z";
                                    to = "2021-10-23T13:19:10Z";
                                }};
                                frequency = new PermissionFrequency() {{
                                    repeats = 7259475919510918339;
                                    unit = "YEAR";
                                    value = 3287288577352441706;
                                }};
                            }};
                            purpose = new UsePurpose() {{
                                code = "vitae";
                                refUri = "totam";
                                text = "dolores";
                            }};
                            requester = new Requester() {{
                                identifier = new RequesterIdentifier() {{
                                    system = "illum";
                                    type = "debitis";
                                    value = "vel";
                                }};
                                name = "odio";
                            }};
                        }};
                        requestId = "dolore";
                        timestamp = "1993-03-23T22:53:08Z";
                    }};
                }};
            }};

            PostV05ConsentRequestsInitResponse res = sdk.consent.postV05ConsentRequestsInit(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->