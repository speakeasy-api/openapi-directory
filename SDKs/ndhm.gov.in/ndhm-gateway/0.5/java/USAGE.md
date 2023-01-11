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
                    authorization = "consequatur";
                    xHIPID = "itaque";
                }};
                request = new PostV05CareContextsDiscoverRequests() {{
                    applicationXML = "repellat".getBytes();
                    patientDiscoveryRequest = new PatientDiscoveryRequest() {{
                        patient = new PatientDiscoveryRequestPatient() {{
                            gender = "U";
                            id = "autem";
                            name = "dolores";
                            unverifiedIdentifiers = new openapisdk.models.shared.Identifier[]() {{
                                add(new Identifier() {{
                                    type = "MR";
                                    value = "qui";
                                }}),
                                add(new Identifier() {{
                                    type = "HEALTH_ID";
                                    value = "velit";
                                }}),
                                add(new Identifier() {{
                                    type = "MOBILE";
                                    value = "blanditiis";
                                }}),
                            }};
                            verifiedIdentifiers = new openapisdk.models.shared.Identifier[]() {{
                                add(new Identifier() {{
                                    type = "MR";
                                    value = "id";
                                }}),
                                add(new Identifier() {{
                                    type = "NDHM_HEALTH_NUMBER";
                                    value = "quaerat";
                                }}),
                            }};
                            yearOfBirth = 7991929692006849534;
                        }};
                        requestId = "et";
                        timestamp = "1978-06-02T13:05:46Z";
                        transactionId = "libero";
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