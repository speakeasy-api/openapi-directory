# hiuFacing

### Available Operations

* [postV05SubscriptionsHiuOnNotify](#postv05subscriptionshiuonnotify) - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.
* [postV05UsersAuthOnNotifyJson](#postv05usersauthonnotifyjson) - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
* [postV05UsersAuthOnNotifyRaw](#postv05usersauthonnotifyraw) - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)

## postV05SubscriptionsHiuOnNotify

This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05SubscriptionsHiuOnNotifyRequest;
import org.openapis.openapi.models.operations.PostV05SubscriptionsHiuOnNotifyResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.HIUSubscriptionNotificationAcknowledgment;
import org.openapis.openapi.models.shared.HIUSubscriptionNotificationAcknowledgmentAcknowledgement;
import org.openapis.openapi.models.shared.HIUSubscriptionNotificationAcknowledgmentAcknowledgementStatusEnum;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05SubscriptionsHiuOnNotifyRequest req = new PostV05SubscriptionsHiuOnNotifyRequest("aliquid",                 new HIUSubscriptionNotificationAcknowledgment("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("33323f9b-77f3-4a41-8067-4ebf69280d1b");, OffsetDateTime.parse("2022-01-16T14:59:31.978Z")) {{
                                acknowledgement = new HIUSubscriptionNotificationAcknowledgmentAcknowledgement("subscription event Id", HIUSubscriptionNotificationAcknowledgmentAcknowledgementStatusEnum.OK);;
                                error = new Error(ErrorCodeEnum.ONE_THOUSAND, "dolorum");;
                            }};);            

            PostV05SubscriptionsHiuOnNotifyResponse res = sdk.hiuFacing.postV05SubscriptionsHiuOnNotify(req);

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

            PostV05UsersAuthOnNotifyJsonRequest req = new PostV05UsersAuthOnNotifyJsonRequest("deleniti",                 new PatientAuthNotificationAcknowledgement("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("9ebf737a-e420-43ce-9e6a-95d8a0d446ce");, OffsetDateTime.parse("2022-04-27T20:15:21.190Z")) {{
                                acknowledgement = new PatientAuthNotificationAcknowledgementAcknowledgement(PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum.OK);;
                                error = new Error(ErrorCodeEnum.TEN_THOUSAND_AND_ONE, "esse");;
                            }};);            

            PostV05UsersAuthOnNotifyJsonResponse res = sdk.hiuFacing.postV05UsersAuthOnNotifyJson(req);

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

            PostV05UsersAuthOnNotifyRawRequest req = new PostV05UsersAuthOnNotifyRawRequest("harum", "iusto".getBytes());            

            PostV05UsersAuthOnNotifyRawResponse res = sdk.hiuFacing.postV05UsersAuthOnNotifyRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
