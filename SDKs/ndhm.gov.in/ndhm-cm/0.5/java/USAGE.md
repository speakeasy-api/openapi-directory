<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05ConsentRequestsInitJsonRequest;
import org.openapis.openapi.models.operations.PostV05ConsentRequestsInitJsonResponse;
import org.openapis.openapi.models.shared.CareContextDefinition;
import org.openapis.openapi.models.shared.ConsentRequest;
import org.openapis.openapi.models.shared.ConsentRequestConsent;
import org.openapis.openapi.models.shared.ConsentRequestConsentHip;
import org.openapis.openapi.models.shared.ConsentRequestConsentHiu;
import org.openapis.openapi.models.shared.ConsentRequestConsentPatient;
import org.openapis.openapi.models.shared.HITypeEnumEnum;
import org.openapis.openapi.models.shared.Permission;
import org.openapis.openapi.models.shared.PermissionAccessModeEnum;
import org.openapis.openapi.models.shared.PermissionDateRange;
import org.openapis.openapi.models.shared.PermissionFrequency;
import org.openapis.openapi.models.shared.PermissionFrequencyUnitEnum;
import org.openapis.openapi.models.shared.Requester;
import org.openapis.openapi.models.shared.RequesterIdentifier;
import org.openapis.openapi.models.shared.UsePurpose;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05ConsentRequestsInitJsonRequest req = new PostV05ConsentRequestsInitJsonRequest("corrupti",                 new ConsentRequest(                new ConsentRequestConsent(                new org.openapis.openapi.models.shared.HITypeEnumEnum[]{{
                                                                add(HITypeEnumEnum.DISCHARGE_SUMMARY),
                                                                add(HITypeEnumEnum.DIAGNOSTIC_REPORT),
                                                                add(HITypeEnumEnum.DISCHARGE_SUMMARY),
                                                            }},                 new ConsentRequestConsentHiu("nulla");,                 new ConsentRequestConsentPatient("hinapatel79@ndhm");,                 new Permission(PermissionAccessModeEnum.QUERY, OffsetDateTime.parse("2021-09-24T02:21:06.409Z"),                 new PermissionDateRange(OffsetDateTime.parse("2021-09-16T11:56:06.019Z"), OffsetDateTime.parse("2022-07-25T06:44:09.184Z"));,                 new PermissionFrequency() {{
                                                                                repeats = 297534L;
                                                                                unit = PermissionFrequencyUnitEnum.YEAR;
                                                                                value = 56713L;
                                                                            }};);,                 new UsePurpose("delectus", "tempora") {{
                                                                refUri = "http://lasting-sex.net";
                                                            }};,                 new Requester("Dr. Manju") {{
                                                                identifier = new RequesterIdentifier("REGNO", "MH1001") {{
                                                                    system = "https://www.mciindia.org";
                                                                }};;
                                                            }};) {{
                                                careContexts = new org.openapis.openapi.models.shared.CareContextDefinition[]{{
                                                    add(new CareContextDefinition("Episode1", "batman@tmh") {{
                                                        careContextReference = "Episode1";
                                                        patientReference = "batman@tmh";
                                                    }}),
                                                    add(new CareContextDefinition("Episode1", "batman@tmh") {{
                                                        careContextReference = "Episode1";
                                                        patientReference = "batman@tmh";
                                                    }}),
                                                    add(new CareContextDefinition("Episode1", "batman@tmh") {{
                                                        careContextReference = "Episode1";
                                                        patientReference = "batman@tmh";
                                                    }}),
                                                }};
                                                hip = new ConsentRequestConsentHip("iusto");;
                                            }};, "499a5a4a-7dda-4f20-9b67-e24589627061", OffsetDateTime.parse("2022-03-20T06:24:36.919Z")););            

            PostV05ConsentRequestsInitJsonResponse res = sdk.consent.postV05ConsentRequestsInitJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->