# dataFlow

### Available Operations

* [postV05HealthInformationCmOnRequestJson](#postv05healthinformationcmonrequestjson) - Health information data request
* [postV05HealthInformationCmOnRequestRaw](#postv05healthinformationcmonrequestraw) - Health information data request
* [postV05HealthInformationCmRequestJson](#postv05healthinformationcmrequestjson) - Health information data request
* [postV05HealthInformationCmRequestRaw](#postv05healthinformationcmrequestraw) - Health information data request
* [postV05HealthInformationHipOnRequestJson](#postv05healthinformationhiponrequestjson) - Health information data request
* [postV05HealthInformationHipOnRequestRaw](#postv05healthinformationhiponrequestraw) - Health information data request
* [postV05HealthInformationHipRequestJson](#postv05healthinformationhiprequestjson) - Health information data request
* [postV05HealthInformationHipRequestRaw](#postv05healthinformationhiprequestraw) - Health information data request
* [postV05HealthInformationNotifyJson](#postv05healthinformationnotifyjson) - Notifications corresponding to events during data flow
* [postV05HealthInformationNotifyRaw](#postv05healthinformationnotifyraw) - Notifications corresponding to events during data flow

## postV05HealthInformationCmOnRequestJson

Callback API for acknowledgement of Health information request of HIU. CM calls this API when it has validated the Health Information request given the consent id. Either the **hiRequest** or **error** would need to be specified. If the health info request was valid, then the ***hiRequest.transactionId*** specifies the transaction context against which HIP would send over the data.  Possible cases of errors are
  1. **Invalid consent artefact id**
  2. **Consent has expired**
  3. **Date ranges are invalid**


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05HealthInformationCmOnRequestJsonRequest;
import org.openapis.openapi.models.operations.PostV05HealthInformationCmOnRequestJsonResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.HIUHealthInformationRequestResponse;
import org.openapis.openapi.models.shared.HIUHealthInformationRequestResponseHiRequest;
import org.openapis.openapi.models.shared.HIUHealthInformationRequestResponseHiRequestSessionStatusEnum;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05HealthInformationCmOnRequestJsonRequest req = new PostV05HealthInformationCmOnRequestJsonRequest("expedita",                 new HIUHealthInformationRequestResponse("a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",                 new RequestReference("8f759eac-55a9-4741-9311-352965bb8a72");, OffsetDateTime.parse("2022-10-31T15:56:50.300Z")) {{
                                error = new Error() {{
                                    code = ErrorCodeEnum.ONE_THOUSAND;
                                    message = "quae";
                                }};;
                                hiRequest = new HIUHealthInformationRequestResponseHiRequest(HIUHealthInformationRequestResponseHiRequestSessionStatusEnum.REQUESTED, "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d");;
                            }};, "modi");            

            PostV05HealthInformationCmOnRequestJsonResponse res = sdk.dataFlow.postV05HealthInformationCmOnRequestJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05HealthInformationCmOnRequestRaw

Callback API for acknowledgement of Health information request of HIU. CM calls this API when it has validated the Health Information request given the consent id. Either the **hiRequest** or **error** would need to be specified. If the health info request was valid, then the ***hiRequest.transactionId*** specifies the transaction context against which HIP would send over the data.  Possible cases of errors are
  1. **Invalid consent artefact id**
  2. **Consent has expired**
  3. **Date ranges are invalid**


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05HealthInformationCmOnRequestRawRequest;
import org.openapis.openapi.models.operations.PostV05HealthInformationCmOnRequestRawResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.HIUHealthInformationRequestResponse;
import org.openapis.openapi.models.shared.HIUHealthInformationRequestResponseHiRequest;
import org.openapis.openapi.models.shared.HIUHealthInformationRequestResponseHiRequestSessionStatusEnum;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05HealthInformationCmOnRequestRawRequest req = new PostV05HealthInformationCmOnRequestRawRequest("neque", "exercitationem".getBytes(), "itaque");            

            PostV05HealthInformationCmOnRequestRawResponse res = sdk.dataFlow.postV05HealthInformationCmOnRequestRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05HealthInformationCmRequestJson

Request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via /on-request. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05HealthInformationCmRequestJsonRequest;
import org.openapis.openapi.models.operations.PostV05HealthInformationCmRequestJsonResponse;
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

            PostV05HealthInformationCmRequestJsonRequest req = new PostV05HealthInformationCmRequestJsonRequest("et",                 new HIRequest(                new HIRequestHIRequest(                new Consent("ipsum");, "unde",                 new DateRange(OffsetDateTime.parse("2020-11-09T18:12:20.087Z"), OffsetDateTime.parse("2022-07-12T20:12:10.758Z"));,                 new KeyMaterial("ECDH", "Curve25519",                 new KeyObject(OffsetDateTime.parse("2022-08-29T02:52:30.806Z"), "omnis", "Curve25519/32byte random key");, "3fa85f64-5717-4562-b3fc-2c963f66afa6"););, "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d", OffsetDateTime.parse("2022-10-08T13:36:13.725Z"));, "id");            

            PostV05HealthInformationCmRequestJsonResponse res = sdk.dataFlow.postV05HealthInformationCmRequestJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05HealthInformationCmRequestRaw

Request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via /on-request. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05HealthInformationCmRequestRawRequest;
import org.openapis.openapi.models.operations.PostV05HealthInformationCmRequestRawResponse;
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

            PostV05HealthInformationCmRequestRawRequest req = new PostV05HealthInformationCmRequestRawRequest("libero", "fugiat".getBytes(), "officia");            

            PostV05HealthInformationCmRequestRawResponse res = sdk.dataFlow.postV05HealthInformationCmRequestRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05HealthInformationHipOnRequestJson

API called by HIP to acknowledge Health information request receipt. Either the **hiRequest** or **error** must be specified. **hiRequest** element returns the same transactionId as before with a status indicating that the request is acknowledged.  


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05HealthInformationHipOnRequestJsonRequest;
import org.openapis.openapi.models.operations.PostV05HealthInformationHipOnRequestJsonResponse;
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

            PostV05HealthInformationHipOnRequestJsonRequest req = new PostV05HealthInformationHipOnRequestJsonRequest("quos",                 new HIPHealthInformationRequestAcknowledgement("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("c070e108-4cb0-4672-91ad-879eeb9665b8");, OffsetDateTime.parse("2022-02-10T11:50:05.389Z")) {{
                                error = new Error() {{
                                    code = ErrorCodeEnum.TEN_THOUSAND_AND_ONE;
                                    message = "cum";
                                }};;
                                hiRequest = new HIPHealthInformationRequestAcknowledgementHiRequest(HIPHealthInformationRequestAcknowledgementHiRequestSessionStatusEnum.ACKNOWLEDGED, "d02bae0b-e2d7-4822-99e3-ea4b5197f924");;
                            }};, "numquam");            

            PostV05HealthInformationHipOnRequestJsonResponse res = sdk.dataFlow.postV05HealthInformationHipOnRequestJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05HealthInformationHipOnRequestRaw

API called by HIP to acknowledge Health information request receipt. Either the **hiRequest** or **error** must be specified. **hiRequest** element returns the same transactionId as before with a status indicating that the request is acknowledged.  


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05HealthInformationHipOnRequestRawRequest;
import org.openapis.openapi.models.operations.PostV05HealthInformationHipOnRequestRawResponse;
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

            PostV05HealthInformationHipOnRequestRawRequest req = new PostV05HealthInformationHipOnRequestRawRequest("nesciunt", "at".getBytes(), "officia");            

            PostV05HealthInformationHipOnRequestRawResponse res = sdk.dataFlow.postV05HealthInformationHipOnRequestRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05HealthInformationHipRequestJson

API called by CM to request Health information from HIP against a validated consent artefact. The transactionId is the correlation id that HIP should use use when pushing data to the **dataPushUrl**. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05HealthInformationHipRequestJsonRequest;
import org.openapis.openapi.models.operations.PostV05HealthInformationHipRequestJsonResponse;
import org.openapis.openapi.models.shared.Consent;
import org.openapis.openapi.models.shared.DateRange;
import org.openapis.openapi.models.shared.HIPHIRequest;
import org.openapis.openapi.models.shared.HIPHIRequestHiRequest;
import org.openapis.openapi.models.shared.KeyMaterial;
import org.openapis.openapi.models.shared.KeyObject;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05HealthInformationHipRequestJsonRequest req = new PostV05HealthInformationHipRequestJsonRequest("dignissimos",                 new HIPHIRequest(                new HIPHIRequestHiRequest(                new Consent("optio");, "necessitatibus",                 new DateRange(OffsetDateTime.parse("2022-10-25T06:51:46.936Z"), OffsetDateTime.parse("2021-12-08T03:38:46.630Z"));,                 new KeyMaterial("ECDH", "Curve25519",                 new KeyObject(OffsetDateTime.parse("2022-05-07T19:45:21.246Z"), "placeat", "Curve25519/32byte random key");, "3fa85f64-5717-4562-b3fc-2c963f66afa6"););, "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d", OffsetDateTime.parse("2022-10-18T12:19:42.762Z"), "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d");, "in");            

            PostV05HealthInformationHipRequestJsonResponse res = sdk.dataFlow.postV05HealthInformationHipRequestJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05HealthInformationHipRequestRaw

API called by CM to request Health information from HIP against a validated consent artefact. The transactionId is the correlation id that HIP should use use when pushing data to the **dataPushUrl**. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05HealthInformationHipRequestRawRequest;
import org.openapis.openapi.models.operations.PostV05HealthInformationHipRequestRawResponse;
import org.openapis.openapi.models.shared.Consent;
import org.openapis.openapi.models.shared.DateRange;
import org.openapis.openapi.models.shared.HIPHIRequest;
import org.openapis.openapi.models.shared.HIPHIRequestHiRequest;
import org.openapis.openapi.models.shared.KeyMaterial;
import org.openapis.openapi.models.shared.KeyObject;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05HealthInformationHipRequestRawRequest req = new PostV05HealthInformationHipRequestRawRequest("minus", "eum".getBytes(), "modi");            

            PostV05HealthInformationHipRequestRawResponse res = sdk.dataFlow.postV05HealthInformationHipRequestRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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

            PostV05HealthInformationNotifyJsonRequest req = new PostV05HealthInformationNotifyJsonRequest("corporis",                 new HealthInformationNotification(                new HealthInformationNotificationNotification("a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d", OffsetDateTime.parse("2022-02-01T00:51:21.880Z"),                 new HealthInformationNotificationNotificationNotifier("tmh", HealthInformationNotificationNotificationNotifierTypeEnum.HIP);,                 new HealthInformationNotificationNotificationStatusNotification("max", HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum.FAILED) {{
                                                                statusResponses = new org.openapis.openapi.models.shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses[]{{
                                                                    add(new HealthInformationNotificationNotificationStatusNotificationStatusResponses("labore", HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum.OK) {{
                                                                        careContextReference = "libero";
                                                                        description = "ratione";
                                                                        hiStatus = HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum.OK;
                                                                    }}),
                                                                }};
                                                            }};, "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d");, "499a5a4a-7dda-4f20-9b67-e24589627061", OffsetDateTime.parse("2021-11-05T06:31:50.944Z"));, "voluptas");            

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

            PostV05HealthInformationNotifyRawRequest req = new PostV05HealthInformationNotifyRawRequest("quo", "velit".getBytes(), "minus");            

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
