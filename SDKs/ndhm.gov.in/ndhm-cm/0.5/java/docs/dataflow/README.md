# dataFlow

### Available Operations

* [postV05HealthInformationNotifyJson](#postv05healthinformationnotifyjson) - Notifications corresponding to events during data flow
* [postV05HealthInformationNotifyRaw](#postv05healthinformationnotifyraw) - Notifications corresponding to events during data flow
* [postV05HealthInformationOnRequestJson](#postv05healthinformationonrequestjson) - Health information data request acknowledgement from HIP
* [postV05HealthInformationOnRequestRaw](#postv05healthinformationonrequestraw) - Health information data request acknowledgement from HIP
* [postV05HealthInformationRequestJson](#postv05healthinformationrequestjson) - Health information data request from HIU
* [postV05HealthInformationRequestRaw](#postv05healthinformationrequestraw) - Health information data request from HIU

## postV05HealthInformationNotifyJson

API called by HIU and HIP during data-transfer. 
1. HIP on transfer of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]
2. HIP would also send **hiStatus** for each *careContextReference* - on of [DELIVERED, ERRORED]
3. HIU on receipt of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]. For example, FAILED when if data was not sent or if invalid data was sent
4. HIU would also send **hiStatus** for each *careContextReference* - one of [OK, ERRORED] 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05HealthInformationNotifyJsonRequest;
import org.openapis.openapi.models.operations.PostV05HealthInformationNotifyJsonResponse;
import org.openapis.openapi.models.shared.HealthInformationNotification;
import org.openapis.openapi.models.shared.HealthInformationNotificationNotification;
import org.openapis.openapi.models.shared.HealthInformationNotificationNotificationNotifier;
import org.openapis.openapi.models.shared.HealthInformationNotificationNotificationNotifierTypeEnum;
import org.openapis.openapi.models.shared.HealthInformationNotificationNotificationStatusNotification;
import org.openapis.openapi.models.shared.HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum;
import org.openapis.openapi.models.shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses;
import org.openapis.openapi.models.shared.HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05HealthInformationNotifyJsonRequest req = new PostV05HealthInformationNotifyJsonRequest("praesentium",                 new HealthInformationNotification(                new HealthInformationNotificationNotification("a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d", OffsetDateTime.parse("2022-10-31T23:49:03.388Z"),                 new HealthInformationNotificationNotificationNotifier("100005", HealthInformationNotificationNotificationNotifierTypeEnum.HIP);,                 new HealthInformationNotificationNotificationStatusNotification("max", HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum.TRANSFERRED) {{
                                                                statusResponses = new org.openapis.openapi.models.shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses[]{{
                                                                    add(new HealthInformationNotificationNotificationStatusNotificationStatusResponses("reprehenderit", HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum.OK) {{
                                                                        careContextReference = "perferendis";
                                                                        description = "doloremque";
                                                                        hiStatus = HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum.OK;
                                                                    }}),
                                                                    add(new HealthInformationNotificationNotificationStatusNotificationStatusResponses("dicta", HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum.OK) {{
                                                                        careContextReference = "ut";
                                                                        description = "maiores";
                                                                        hiStatus = HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum.OK;
                                                                    }}),
                                                                    add(new HealthInformationNotificationNotificationStatusNotificationStatusResponses("iusto", HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum.OK) {{
                                                                        careContextReference = "corporis";
                                                                        description = "dolore";
                                                                        hiStatus = HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum.OK;
                                                                    }}),
                                                                }};
                                                            }};, "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d");, "499a5a4a-7dda-4f20-9b67-e24589627061", OffsetDateTime.parse("2022-04-24T15:19:40.519Z")););            

            PostV05HealthInformationNotifyJsonResponse res = sdk.dataFlow.postV05HealthInformationNotifyJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05HealthInformationNotifyRaw

API called by HIU and HIP during data-transfer. 
1. HIP on transfer of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]
2. HIP would also send **hiStatus** for each *careContextReference* - on of [DELIVERED, ERRORED]
3. HIU on receipt of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]. For example, FAILED when if data was not sent or if invalid data was sent
4. HIU would also send **hiStatus** for each *careContextReference* - one of [OK, ERRORED] 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05HealthInformationNotifyRawRequest;
import org.openapis.openapi.models.operations.PostV05HealthInformationNotifyRawResponse;
import org.openapis.openapi.models.shared.HealthInformationNotification;
import org.openapis.openapi.models.shared.HealthInformationNotificationNotification;
import org.openapis.openapi.models.shared.HealthInformationNotificationNotificationNotifier;
import org.openapis.openapi.models.shared.HealthInformationNotificationNotificationNotifierTypeEnum;
import org.openapis.openapi.models.shared.HealthInformationNotificationNotificationStatusNotification;
import org.openapis.openapi.models.shared.HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum;
import org.openapis.openapi.models.shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses;
import org.openapis.openapi.models.shared.HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05HealthInformationNotifyRawRequest req = new PostV05HealthInformationNotifyRawRequest("enim", "accusamus".getBytes());            

            PostV05HealthInformationNotifyRawResponse res = sdk.dataFlow.postV05HealthInformationNotifyRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05HealthInformationOnRequestJson

This API is called by HIP to acknowledge Health information request receipt. When HIU requests health information, CM generates a transactionId and makes a health information request to the HIP(s). HIPs acknowledgement to the health-information request is coveyed by this API. Either the **hiRequest** or **error** must be specified. **hiRequest** element returns the same transactionId as before with a status indicating that the request is acknowledged.  


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05HealthInformationOnRequestJsonRequest;
import org.openapis.openapi.models.operations.PostV05HealthInformationOnRequestJsonResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.HIPHealthInformationRequestAcknowledgement;
import org.openapis.openapi.models.shared.HIPHealthInformationRequestAcknowledgementHiRequest;
import org.openapis.openapi.models.shared.HIPHealthInformationRequestAcknowledgementHiRequestSessionStatusEnum;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05HealthInformationOnRequestJsonRequest req = new PostV05HealthInformationOnRequestJsonRequest("commodi",                 new HIPHealthInformationRequestAcknowledgement("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("e13b99d4-88e1-4e91-a450-ad2abd442698");, OffsetDateTime.parse("2022-11-01T19:07:16.800Z")) {{
                                error = new Error(ErrorCodeEnum.TEN_THOUSAND_AND_ONE, "ipsam");;
                                hiRequest = new HIPHealthInformationRequestAcknowledgementHiRequest(HIPHealthInformationRequestAcknowledgementHiRequestSessionStatusEnum.ACKNOWLEDGED, "02a94bb4-f63c-4969-a9a3-efa77dfb14cd");;
                            }};);            

            PostV05HealthInformationOnRequestJsonResponse res = sdk.dataFlow.postV05HealthInformationOnRequestJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05HealthInformationOnRequestRaw

This API is called by HIP to acknowledge Health information request receipt. When HIU requests health information, CM generates a transactionId and makes a health information request to the HIP(s). HIPs acknowledgement to the health-information request is coveyed by this API. Either the **hiRequest** or **error** must be specified. **hiRequest** element returns the same transactionId as before with a status indicating that the request is acknowledged.  


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05HealthInformationOnRequestRawRequest;
import org.openapis.openapi.models.operations.PostV05HealthInformationOnRequestRawResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.HIPHealthInformationRequestAcknowledgement;
import org.openapis.openapi.models.shared.HIPHealthInformationRequestAcknowledgementHiRequest;
import org.openapis.openapi.models.shared.HIPHealthInformationRequestAcknowledgementHiRequestSessionStatusEnum;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05HealthInformationOnRequestRawRequest req = new PostV05HealthInformationOnRequestRawRequest("ea", "aliquid".getBytes());            

            PostV05HealthInformationOnRequestRawResponse res = sdk.dataFlow.postV05HealthInformationOnRequestRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05HealthInformationRequestJson

HIU request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via Gateway API - ***/v0.5/health-information/cm/on-request***. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05HealthInformationRequestJsonRequest;
import org.openapis.openapi.models.operations.PostV05HealthInformationRequestJsonResponse;
import org.openapis.openapi.models.shared.Consent;
import org.openapis.openapi.models.shared.DateRange;
import org.openapis.openapi.models.shared.HIRequest;
import org.openapis.openapi.models.shared.HIRequestHIRequest;
import org.openapis.openapi.models.shared.KeyMaterial;
import org.openapis.openapi.models.shared.KeyObject;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05HealthInformationRequestJsonRequest req = new PostV05HealthInformationRequestJsonRequest("laborum",                 new HIRequest(                new HIRequestHIRequest(                new Consent("accusamus");, "non",                 new DateRange(OffsetDateTime.parse("2022-05-17T08:24:52.669Z"), OffsetDateTime.parse("2020-02-08T20:51:42.354Z"));,                 new KeyMaterial("ECDH", "Curve25519",                 new KeyObject(OffsetDateTime.parse("2021-10-28T10:05:29.849Z"), "nam", "Curve25519/32byte random key");, "3fa85f64-5717-4562-b3fc-2c963f66afa6"););, "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d", OffsetDateTime.parse("2021-12-31T00:47:48.012Z")););            

            PostV05HealthInformationRequestJsonResponse res = sdk.dataFlow.postV05HealthInformationRequestJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05HealthInformationRequestRaw

HIU request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via Gateway API - ***/v0.5/health-information/cm/on-request***. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05HealthInformationRequestRawRequest;
import org.openapis.openapi.models.operations.PostV05HealthInformationRequestRawResponse;
import org.openapis.openapi.models.shared.Consent;
import org.openapis.openapi.models.shared.DateRange;
import org.openapis.openapi.models.shared.HIRequest;
import org.openapis.openapi.models.shared.HIRequestHIRequest;
import org.openapis.openapi.models.shared.KeyMaterial;
import org.openapis.openapi.models.shared.KeyObject;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05HealthInformationRequestRawRequest req = new PostV05HealthInformationRequestRawRequest("deleniti", "sapiente".getBytes());            

            PostV05HealthInformationRequestRawResponse res = sdk.dataFlow.postV05HealthInformationRequestRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
