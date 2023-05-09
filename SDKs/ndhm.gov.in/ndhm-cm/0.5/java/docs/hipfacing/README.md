# hipFacing

### Available Operations

* [postV05UsersAuthFetchModesJson](#postv05usersauthfetchmodesjson) - Get a patient's authentication modes relevant to specified purpose
* [postV05UsersAuthFetchModesRaw](#postv05usersauthfetchmodesraw) - Get a patient's authentication modes relevant to specified purpose
* [postV05UsersAuthOnNotifyJson](#postv05usersauthonnotifyjson) - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
* [postV05UsersAuthOnNotifyRaw](#postv05usersauthonnotifyraw) - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)

## postV05UsersAuthFetchModesJson

This API is meant for identify supported authentication modes for a patient given a specific purpose


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05UsersAuthFetchModesJsonRequest;
import org.openapis.openapi.models.operations.PostV05UsersAuthFetchModesJsonResponse;
import org.openapis.openapi.models.shared.PatientAuthModeQueryRequest;
import org.openapis.openapi.models.shared.PatientAuthModeQueryRequestQuery;
import org.openapis.openapi.models.shared.PatientAuthModeQueryRequestQueryRequester;
import org.openapis.openapi.models.shared.PatientAuthModeQueryRequestQueryRequesterTypeEnum;
import org.openapis.openapi.models.shared.PatientAuthPurposeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05UsersAuthFetchModesJsonRequest req = new PostV05UsersAuthFetchModesJsonRequest("hic",                 new PatientAuthModeQueryRequest(                new PatientAuthModeQueryRequestQuery("hinapatel79@ndhm", PatientAuthPurposeEnum.KYC_AND_LINK,                 new PatientAuthModeQueryRequestQueryRequester("100005", PatientAuthModeQueryRequestQueryRequesterTypeEnum.HIU););, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2022-08-30T02:49:20.597Z")););            

            PostV05UsersAuthFetchModesJsonResponse res = sdk.hipFacing.postV05UsersAuthFetchModesJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05UsersAuthFetchModesRaw

This API is meant for identify supported authentication modes for a patient given a specific purpose


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05UsersAuthFetchModesRawRequest;
import org.openapis.openapi.models.operations.PostV05UsersAuthFetchModesRawResponse;
import org.openapis.openapi.models.shared.PatientAuthModeQueryRequest;
import org.openapis.openapi.models.shared.PatientAuthModeQueryRequestQuery;
import org.openapis.openapi.models.shared.PatientAuthModeQueryRequestQueryRequester;
import org.openapis.openapi.models.shared.PatientAuthModeQueryRequestQueryRequesterTypeEnum;
import org.openapis.openapi.models.shared.PatientAuthPurposeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05UsersAuthFetchModesRawRequest req = new PostV05UsersAuthFetchModesRawRequest("totam", "dignissimos".getBytes());            

            PostV05UsersAuthFetchModesRawResponse res = sdk.hipFacing.postV05UsersAuthFetchModesRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05UsersAuthOnNotifyJson

This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05UsersAuthOnNotifyJsonRequest;
import org.openapis.openapi.models.operations.PostV05UsersAuthOnNotifyJsonResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.PatientAuthNotificationAcknowledgement;
import org.openapis.openapi.models.shared.PatientAuthNotificationAcknowledgementAcknowledgement;
import org.openapis.openapi.models.shared.PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05UsersAuthOnNotifyJsonRequest req = new PostV05UsersAuthOnNotifyJsonRequest("eaque",                 new PatientAuthNotificationAcknowledgement("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("53202c73-d5fe-49b9-8c28-909b3fe49a8d");, OffsetDateTime.parse("2021-07-01T21:12:31.408Z")) {{
                                acknowledgement = new PatientAuthNotificationAcknowledgementAcknowledgement(PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum.OK);;
                                error = new Error(ErrorCodeEnum.TEN_THOUSAND_AND_ONE, "delectus");;
                            }};);            

            PostV05UsersAuthOnNotifyJsonResponse res = sdk.hipFacing.postV05UsersAuthOnNotifyJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05UsersAuthOnNotifyRaw

This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05UsersAuthOnNotifyRawRequest;
import org.openapis.openapi.models.operations.PostV05UsersAuthOnNotifyRawResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.PatientAuthNotificationAcknowledgement;
import org.openapis.openapi.models.shared.PatientAuthNotificationAcknowledgementAcknowledgement;
import org.openapis.openapi.models.shared.PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05UsersAuthOnNotifyRawRequest req = new PostV05UsersAuthOnNotifyRawRequest("quaerat", "quos".getBytes());            

            PostV05UsersAuthOnNotifyRawResponse res = sdk.hipFacing.postV05UsersAuthOnNotifyRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
