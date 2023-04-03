<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PostV05ConsentRequestsInitJsonRequest;
import org.openapis.openapi.models.operations.PostV05ConsentRequestsInitJsonResponse;
import org.openapis.openapi.models.shared.ConsentRequestConsentHip;
import org.openapis.openapi.models.shared.ConsentRequestConsentHiu;
import org.openapis.openapi.models.shared.ConsentRequestConsentPatient;
import org.openapis.openapi.models.shared.ConsentRequestConsent;
import org.openapis.openapi.models.shared.ConsentRequest;
import org.openapis.openapi.models.shared.RequesterIdentifier;
import org.openapis.openapi.models.shared.Requester;
import org.openapis.openapi.models.shared.UsePurpose;
import org.openapis.openapi.models.shared.PermissionAccessModeEnum;
import org.openapis.openapi.models.shared.PermissionDateRange;
import org.openapis.openapi.models.shared.PermissionFrequencyUnitEnum;
import org.openapis.openapi.models.shared.PermissionFrequency;
import org.openapis.openapi.models.shared.Permission;
import org.openapis.openapi.models.shared.HITypeEnumEnum;
import org.openapis.openapi.models.shared.CareContextDefinition;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05ConsentRequestsInitJsonRequest req = new PostV05ConsentRequestsInitJsonRequest() {{
                authorization = "corrupti";
                consentRequest = new ConsentRequest() {{
                    consent = new ConsentRequestConsent() {{
                        careContexts = new org.openapis.openapi.models.shared.CareContextDefinition[]{{
                            add(new CareContextDefinition() {{
                                careContextReference = "Episode1";
                                patientReference = "batman@tmh";
                            }}),
                            add(new CareContextDefinition() {{
                                careContextReference = "Episode1";
                                patientReference = "batman@tmh";
                            }}),
                            add(new CareContextDefinition() {{
                                careContextReference = "Episode1";
                                patientReference = "batman@tmh";
                            }}),
                        }};
                        hiTypes = new org.openapis.openapi.models.shared.HITypeEnumEnum[]{{
                            add("DiagnosticReport"),
                            add("DischargeSummary"),
                            add("DiagnosticReport"),
                        }};
                        hip = new ConsentRequestConsentHip() {{
                            id = "corrupti";
                        }};
                        hiu = new ConsentRequestConsentHiu() {{
                            id = "illum";
                        }};
                        patient = new ConsentRequestConsentPatient() {{
                            id = "hinapatel79@ndhm";
                        }};
                        permission = new Permission() {{
                            accessMode = "STORE";
                            dataEraseAt = "2021-09-16T11:56:06.019Z";
                            dateRange = new PermissionDateRange() {{
                                from = "2022-07-25T06:44:09.184Z";
                                to = "2022-02-09T12:04:06.508Z";
                            }};
                            frequency = new PermissionFrequency() {{
                                repeats = 56713;
                                unit = "YEAR";
                                value = 272656;
                            }};
                        }};
                        purpose = new UsePurpose() {{
                            code = "suscipit";
                            refUri = "http://spotted-skyline.name";
                            text = "iusto";
                        }};
                        requester = new Requester() {{
                            identifier = new RequesterIdentifier() {{
                                system = "https://www.mciindia.org";
                                type = "REGNO";
                                value = "MH1001";
                            }};
                            name = "Dr. Manju";
                        }};
                    }};
                    requestId = "499a5a4a-7dda-4f20-9b67-e24589627061";
                    timestamp = "2022-03-20T06:24:36.919Z";
                }};
            }}            

            PostV05ConsentRequestsInitJsonResponse res = sdk.consent.postV05ConsentRequestsInitJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->