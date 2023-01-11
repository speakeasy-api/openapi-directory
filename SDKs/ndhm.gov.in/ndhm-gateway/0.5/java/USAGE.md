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

            PostV05CareContextsDiscoverRequest req = new PostV05CareContextsDiscoverRequest() {{
                headers = new PostV05CareContextsDiscoverHeaders() {{
                    authorization = "sit";
                    xHIPID = "voluptas";
                }};
                request = new PostV05CareContextsDiscoverRequests() {{
                    applicationXML = "culpa".getBytes();
                    patientDiscoveryRequest = new PatientDiscoveryRequest() {{
                        patient = new PatientDiscoveryRequestPatient() {{
                            gender = "O";
                            id = "consequuntur";
                            name = "dolor";
                            unverifiedIdentifiers = new openapisdk.models.shared.Identifier[]() {{
                                add(new Identifier() {{
                                    type = "MR";
                                    value = "fugit";
                                }}),
                                add(new Identifier() {{
                                    type = "MOBILE";
                                    value = "nihil";
                                }}),
                            }};
                            verifiedIdentifiers = new openapisdk.models.shared.Identifier[]() {{
                                add(new Identifier() {{
                                    type = "HEALTH_ID";
                                    value = "debitis";
                                }}),
                                add(new Identifier() {{
                                    type = "MOBILE";
                                    value = "et";
                                }}),
                                add(new Identifier() {{
                                    type = "HEALTH_ID";
                                    value = "dolorem";
                                }}),
                            }};
                            yearOfBirth = 7259475919510918339;
                        }};
                        requestId = "voluptate";
                        timestamp = "1998-09-30T11:01:25Z";
                        transactionId = "vitae";
                    }};
                }};
            }};

            PostV05CareContextsDiscoverResponse res = sdk.cmFacing.postV05CareContextsDiscover(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->