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
                    authorization = "at";
                }};
                request = new PostV05ConsentRequestsInitRequests() {{
                    applicationXML = "distinctio".getBytes();
                    consentRequest = new ConsentRequest() {{
                        consent = new ConsentRequestConsent() {{
                            careContexts = new openapisdk.models.shared.CareContextDefinition[]() {{
                                add(new CareContextDefinition() {{
                                    careContextReference = "dolores";
                                    patientReference = "aut";
                                }}),
                                add(new CareContextDefinition() {{
                                    careContextReference = "asperiores";
                                    patientReference = "qui";
                                }}),
                            }};
                            hiTypes = new openapisdk.models.shared.HiTypeEnumEnum[]() {{
                                add("OPConsultation"),
                                add("Prescription"),
                            }};
                            hip = new ConsentRequestConsentHip() {{
                                id = "sunt";
                            }};
                            hiu = new ConsentRequestConsentHiu() {{
                                id = "corporis";
                            }};
                            patient = new ConsentRequestConsentPatient() {{
                                id = "cupiditate";
                            }};
                            permission = new Permission() {{
                                accessMode = "STREAM";
                                dataEraseAt = "1992-05-19T13:25:30Z";
                                dateRange = new PermissionDateRange() {{
                                    from = "1985-10-15T05:05:36Z";
                                    to = "1992-12-10T10:45:58Z";
                                }};
                                frequency = new PermissionFrequency() {{
                                    repeats = 4746888211219605305;
                                    unit = "MONTH";
                                    value = 4865214569509404234;
                                }};
                            }};
                            purpose = new UsePurpose() {{
                                code = "deleniti";
                                refUri = "tempora";
                                text = "ut";
                            }};
                            requester = new Requester() {{
                                identifier = new RequesterIdentifier() {{
                                    system = "consequatur";
                                    type = "molestiae";
                                    value = "quisquam";
                                }};
                                name = "aliquid";
                            }};
                        }};
                        requestId = "quia";
                        timestamp = "1976-06-02T21:23:01Z";
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