# consentFlow

### Available Operations

* [postV05ConsentsHipNotifyJson](#postv05consentshipnotifyjson) - Consent notification
* [postV05ConsentsHipNotifyRaw](#postv05consentshipnotifyraw) - Consent notification

## postV05ConsentsHipNotifyJson

Notification of consents to health information providers consent request granted, consent revoked, consent expired. Only the GRANTED and REVOKED status notifications will be sent to HIP.
  1. If consent is granted, status=GRANTED, then consentDetail contains the consent artefact details and signature is available. 
  2. If consent is revoked, then status=REVOKED, and consentId specifes which consent artefact is revoked. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05ConsentsHipNotifyJsonRequest;
import org.openapis.openapi.models.operations.PostV05ConsentsHipNotifyJsonResponse;
import org.openapis.openapi.models.shared.ConsentManagerPatientID;
import org.openapis.openapi.models.shared.ConsentStatusEnum;
import org.openapis.openapi.models.shared.HIPConsentNotification;
import org.openapis.openapi.models.shared.HIPConsentNotificationNotification;
import org.openapis.openapi.models.shared.HIPConsentNotificationNotificationConsentDetail;
import org.openapis.openapi.models.shared.HIPConsentNotificationNotificationConsentDetailCareContexts;
import org.openapis.openapi.models.shared.HIPConsentNotificationNotificationConsentDetailConsentManager;
import org.openapis.openapi.models.shared.HIPConsentNotificationNotificationConsentDetailHIP;
import org.openapis.openapi.models.shared.HITypeEnumEnum;
import org.openapis.openapi.models.shared.Permission;
import org.openapis.openapi.models.shared.PermissionAccessModeEnum;
import org.openapis.openapi.models.shared.PermissionDateRange;
import org.openapis.openapi.models.shared.PermissionFrequency;
import org.openapis.openapi.models.shared.PermissionFrequencyUnitEnum;
import org.openapis.openapi.models.shared.UsePurpose;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05ConsentsHipNotifyJsonRequest req = new PostV05ConsentsHipNotifyJsonRequest("a",                 new HIPConsentNotification(                new HIPConsentNotificationNotification(                new HIPConsentNotificationNotificationConsentDetail(                new org.openapis.openapi.models.shared.HIPConsentNotificationNotificationConsentDetailCareContexts[]{{
                                                                                add(new HIPConsentNotificationNotificationConsentDetailCareContexts("Episode1", "hinapatel79@hospital") {{
                                                                                    careContextReference = "Episode1";
                                                                                    patientReference = "hinapatel79@hospital";
                                                                                }}),
                                                                                add(new HIPConsentNotificationNotificationConsentDetailCareContexts("Episode1", "hinapatel79@hospital") {{
                                                                                    careContextReference = "Episode1";
                                                                                    patientReference = "hinapatel79@hospital";
                                                                                }}),
                                                                            }}, "a73cf3be-453f-4870-b326-b5a73429cdb1",                 new HIPConsentNotificationNotificationConsentDetailConsentManager("laborum");, OffsetDateTime.parse("2022-06-12T20:49:16.541Z"),                 new org.openapis.openapi.models.shared.HITypeEnumEnum[]{{
                                                                                add(HITypeEnumEnum.OP_CONSULTATION),
                                                                            }},                 new HIPConsentNotificationNotificationConsentDetailHIP("distinctio");,                 new ConsentManagerPatientID("hinapatel79@ndhm");,                 new Permission(PermissionAccessModeEnum.QUERY, OffsetDateTime.parse("2022-07-15T22:48:14.867Z"),                 new PermissionDateRange(OffsetDateTime.parse("2021-04-27T11:41:31.258Z"), OffsetDateTime.parse("2022-10-18T05:22:32.548Z"));,                 new PermissionFrequency() {{
                                                                                                repeats = 144847L;
                                                                                                unit = PermissionFrequencyUnitEnum.HOUR;
                                                                                                value = 488056L;
                                                                                            }};);,                 new UsePurpose("sunt", "ullam") {{
                                                                                refUri = "https://warlike-ankle.net";
                                                                            }};) {{
                                                                schemaVersion = "soluta";
                                                            }};, "b1e31b8b-90f3-4443-a110-8e0adcf4b921", "Signature of CM as defined in W3C standards; Base64 encoded", ConsentStatusEnum.DENIED);, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2022-06-03T03:16:58.870Z"));, "voluptatibus");            

            PostV05ConsentsHipNotifyJsonResponse res = sdk.consentFlow.postV05ConsentsHipNotifyJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05ConsentsHipNotifyRaw

Notification of consents to health information providers consent request granted, consent revoked, consent expired. Only the GRANTED and REVOKED status notifications will be sent to HIP.
  1. If consent is granted, status=GRANTED, then consentDetail contains the consent artefact details and signature is available. 
  2. If consent is revoked, then status=REVOKED, and consentId specifes which consent artefact is revoked. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05ConsentsHipNotifyRawRequest;
import org.openapis.openapi.models.operations.PostV05ConsentsHipNotifyRawResponse;
import org.openapis.openapi.models.shared.ConsentManagerPatientID;
import org.openapis.openapi.models.shared.ConsentStatusEnum;
import org.openapis.openapi.models.shared.HIPConsentNotification;
import org.openapis.openapi.models.shared.HIPConsentNotificationNotification;
import org.openapis.openapi.models.shared.HIPConsentNotificationNotificationConsentDetail;
import org.openapis.openapi.models.shared.HIPConsentNotificationNotificationConsentDetailCareContexts;
import org.openapis.openapi.models.shared.HIPConsentNotificationNotificationConsentDetailConsentManager;
import org.openapis.openapi.models.shared.HIPConsentNotificationNotificationConsentDetailHIP;
import org.openapis.openapi.models.shared.HITypeEnumEnum;
import org.openapis.openapi.models.shared.Permission;
import org.openapis.openapi.models.shared.PermissionAccessModeEnum;
import org.openapis.openapi.models.shared.PermissionDateRange;
import org.openapis.openapi.models.shared.PermissionFrequency;
import org.openapis.openapi.models.shared.PermissionFrequencyUnitEnum;
import org.openapis.openapi.models.shared.UsePurpose;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05ConsentsHipNotifyRawRequest req = new PostV05ConsentsHipNotifyRawRequest("quisquam", "vero".getBytes(), "omnis");            

            PostV05ConsentsHipNotifyRawResponse res = sdk.consentFlow.postV05ConsentsHipNotifyRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
