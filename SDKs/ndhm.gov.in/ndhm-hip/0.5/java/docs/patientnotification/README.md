# patientNotification

### Available Operations

* [postV05PatientsSmsOnNotifyJson](#postv05patientssmsonnotifyjson) - Acknowledgment response for SMS notification sent to patient by HIP
* [postV05PatientsSmsOnNotifyRaw](#postv05patientssmsonnotifyraw) - Acknowledgment response for SMS notification sent to patient by HIP

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

            PostV05PatientsSmsOnNotifyJsonRequest req = new PostV05PatientsSmsOnNotifyJsonRequest("adipisci",                 new PatientSMSNotifcationResponse("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("9d08086a-1840-4394-8260-71f93f5f0642");, OffsetDateTime.parse("2021-01-31T13:20:27.558Z")) {{
                                error = new Error(ErrorCodeEnum.TEN_THOUSAND_AND_ONE, "dignissimos");;
                                status = PatientSMSNotifcationResponseStatusEnum.ERRORED;
                            }};, "asperiores");            

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

            PostV05PatientsSmsOnNotifyRawRequest req = new PostV05PatientsSmsOnNotifyRawRequest("nemo", "quae".getBytes(), "quaerat");            

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
