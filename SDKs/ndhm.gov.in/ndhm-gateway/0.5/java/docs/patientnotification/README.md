# patientNotification

### Available Operations

* [postV05PatientsSmsNotifyJson](#postv05patientssmsnotifyjson) - API for HIP to send SMS notifications to patients
* [postV05PatientsSmsNotifyRaw](#postv05patientssmsnotifyraw) - API for HIP to send SMS notifications to patients
* [postV05PatientsSmsOnNotifyJson](#postv05patientssmsonnotifyjson) - Acknowledgment response for SMS notification sent to patient by HIP
* [postV05PatientsSmsOnNotifyRaw](#postv05patientssmsonnotifyraw) - Acknowledgment response for SMS notification sent to patient by HIP

## postV05PatientsSmsNotifyJson

API to send SMS notifications to patient with custom deeplink.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05PatientsSmsNotifyJsonRequest;
import org.openapis.openapi.models.operations.PostV05PatientsSmsNotifyJsonResponse;
import org.openapis.openapi.models.shared.PatientSMSNotifcationRequest;
import org.openapis.openapi.models.shared.PatientSMSNotifcationRequestNotification;
import org.openapis.openapi.models.shared.PatientSMSNotifcationRequestNotificationHip;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05PatientsSmsNotifyJsonRequest req = new PostV05PatientsSmsNotifyJsonRequest("facere",                 new PatientSMSNotifcationRequest(                new PatientSMSNotifcationRequestNotification("X-Ray on 22nd Dec",                 new PatientSMSNotifcationRequestNotificationHip("HIP_001") {{
                                                                name = "Max Healthcare (Optional)";
                                                            }};, "+91-9999999999") {{
                                                deeplinkUrl = "https://link.to.health.records/ (Optional)";
                                                receiverName = "Ramesh Singh (Optional)";
                                            }};, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2020-09-10T21:26:41.283Z"));, "aliquam");            

            PostV05PatientsSmsNotifyJsonResponse res = sdk.patientNotification.postV05PatientsSmsNotifyJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05PatientsSmsNotifyRaw

API to send SMS notifications to patient with custom deeplink.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05PatientsSmsNotifyRawRequest;
import org.openapis.openapi.models.operations.PostV05PatientsSmsNotifyRawResponse;
import org.openapis.openapi.models.shared.PatientSMSNotifcationRequest;
import org.openapis.openapi.models.shared.PatientSMSNotifcationRequestNotification;
import org.openapis.openapi.models.shared.PatientSMSNotifcationRequestNotificationHip;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05PatientsSmsNotifyRawRequest req = new PostV05PatientsSmsNotifyRawRequest("dolorum", "deserunt".getBytes(), "ad");            

            PostV05PatientsSmsNotifyRawResponse res = sdk.patientNotification.postV05PatientsSmsNotifyRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05PatientsSmsOnNotifyJson

If the SMS notification is successfully sent to patient then "status" will be "ACKNOWLEDGED" with no error.
If the SMS notification is failed then "status" will be "ERRORED" with error.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05PatientsSmsOnNotifyJsonRequest;
import org.openapis.openapi.models.operations.PostV05PatientsSmsOnNotifyJsonResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.PatientSMSNotifcationResponse;
import org.openapis.openapi.models.shared.PatientSMSNotifcationResponseStatusEnum;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05PatientsSmsOnNotifyJsonRequest req = new PostV05PatientsSmsOnNotifyJsonRequest("reiciendis",                 new PatientSMSNotifcationResponse("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("3cabd905-a972-4e05-a728-227b2d309470");, OffsetDateTime.parse("2021-02-01T17:20:50.344Z")) {{
                                error = new Error() {{
                                    code = ErrorCodeEnum.ONE_THOUSAND;
                                    message = "est";
                                }};;
                                status = PatientSMSNotifcationResponseStatusEnum.ACKNOWLEDGED;
                            }};, "delectus");            

            PostV05PatientsSmsOnNotifyJsonResponse res = sdk.patientNotification.postV05PatientsSmsOnNotifyJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05PatientsSmsOnNotifyRaw

If the SMS notification is successfully sent to patient then "status" will be "ACKNOWLEDGED" with no error.
If the SMS notification is failed then "status" will be "ERRORED" with error.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05PatientsSmsOnNotifyRawRequest;
import org.openapis.openapi.models.operations.PostV05PatientsSmsOnNotifyRawResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.PatientSMSNotifcationResponse;
import org.openapis.openapi.models.shared.PatientSMSNotifcationResponseStatusEnum;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05PatientsSmsOnNotifyRawRequest req = new PostV05PatientsSmsOnNotifyRawRequest("culpa", "voluptatum".getBytes(), "iusto");            

            PostV05PatientsSmsOnNotifyRawResponse res = sdk.patientNotification.postV05PatientsSmsOnNotifyRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
