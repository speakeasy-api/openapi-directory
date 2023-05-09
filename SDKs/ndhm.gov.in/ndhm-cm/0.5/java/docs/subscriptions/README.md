# subscriptions

### Available Operations

* [postV05SubscriptionRequestsCmInitJson](#postv05subscriptionrequestscminitjson) - Request for subscription
* [postV05SubscriptionRequestsCmInitRaw](#postv05subscriptionrequestscminitraw) - Request for subscription
* [postV05SubscriptionRequestsHiuOnNotify](#postv05subscriptionrequestshiuonnotify) - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
* [postV05SubscriptionsHiuOnNotify](#postv05subscriptionshiuonnotify) - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.

## postV05SubscriptionRequestsCmInitJson

creates a request for subscription. The subscription categories can be for care-contexts linkages or availability of data against existing care-contexts. Note that the requester must have HIU role

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05SubscriptionRequestsCmInitJsonRequest;
import org.openapis.openapi.models.operations.PostV05SubscriptionRequestsCmInitJsonResponse;
import org.openapis.openapi.models.shared.ConsentManagerPatientID;
import org.openapis.openapi.models.shared.OrganizationRepresentation;
import org.openapis.openapi.models.shared.SubscriptionCategoryEnum;
import org.openapis.openapi.models.shared.SubscriptionPeriod;
import org.openapis.openapi.models.shared.SubscriptionRequest;
import org.openapis.openapi.models.shared.SubscriptionRequestSubscription;
import org.openapis.openapi.models.shared.UsePurpose;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05SubscriptionRequestsCmInitJsonRequest req = new PostV05SubscriptionRequestsCmInitJsonRequest("consectetur",                 new SubscriptionRequest("499a5a4a-7dda-4f20-9b67-e24589627061",                 new SubscriptionRequestSubscription(                new org.openapis.openapi.models.shared.SubscriptionCategoryEnum[]{{
                                                                add(SubscriptionCategoryEnum.LINK),
                                                                add(SubscriptionCategoryEnum.LINK),
                                                                add(SubscriptionCategoryEnum.LINK),
                                                                add(SubscriptionCategoryEnum.LINK),
                                                            }},                 new OrganizationRepresentation("aspernatur");,                 new ConsentManagerPatientID("hinapatel79@ndhm");,                 new SubscriptionPeriod(OffsetDateTime.parse("2022-12-12T11:58:39.585Z"), OffsetDateTime.parse("2020-10-28T11:22:47.751Z"));,                 new UsePurpose("aut", "aut") {{
                                                                refUri = "https://snarling-emery.com";
                                                            }};) {{
                                                hips = new org.openapis.openapi.models.shared.OrganizationRepresentation[]{{
                                                    add(new OrganizationRepresentation("fugiat") {{
                                                        id = "141aac36-6c8d-4d6b-9442-907474778a7b";
                                                    }}),
                                                    add(new OrganizationRepresentation("distinctio") {{
                                                        id = "466d28c1-0ab3-4cdc-a425-1904e523c7e0";
                                                    }}),
                                                    add(new OrganizationRepresentation("consequuntur") {{
                                                        id = "c7178e47-96f2-4a70-8688-282aa482562f";
                                                    }}),
                                                    add(new OrganizationRepresentation("consequatur") {{
                                                        id = "22e9817e-e17c-4be6-9e6b-7b95bc0ab3c2";
                                                    }}),
                                                }};
                                            }};, OffsetDateTime.parse("2022-01-28T10:14:21.975Z")););            

            PostV05SubscriptionRequestsCmInitJsonResponse res = sdk.subscriptions.postV05SubscriptionRequestsCmInitJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05SubscriptionRequestsCmInitRaw

creates a request for subscription. The subscription categories can be for care-contexts linkages or availability of data against existing care-contexts. Note that the requester must have HIU role

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05SubscriptionRequestsCmInitRawRequest;
import org.openapis.openapi.models.operations.PostV05SubscriptionRequestsCmInitRawResponse;
import org.openapis.openapi.models.shared.ConsentManagerPatientID;
import org.openapis.openapi.models.shared.OrganizationRepresentation;
import org.openapis.openapi.models.shared.SubscriptionCategoryEnum;
import org.openapis.openapi.models.shared.SubscriptionPeriod;
import org.openapis.openapi.models.shared.SubscriptionRequest;
import org.openapis.openapi.models.shared.SubscriptionRequestSubscription;
import org.openapis.openapi.models.shared.UsePurpose;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05SubscriptionRequestsCmInitRawRequest req = new PostV05SubscriptionRequestsCmInitRawRequest("sapiente", "consectetur".getBytes());            

            PostV05SubscriptionRequestsCmInitRawResponse res = sdk.subscriptions.postV05SubscriptionRequestsCmInitRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05SubscriptionRequestsHiuOnNotify

This API is called by HIU as acknowledgement to subscription request relevant notifications. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05SubscriptionRequestsHiuOnNotifyRequest;
import org.openapis.openapi.models.operations.PostV05SubscriptionRequestsHiuOnNotifyResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.HIUSubscriptionRequestNotificationAcknowledgement;
import org.openapis.openapi.models.shared.HIUSubscriptionRequestNotificationAcknowledgementAcknowledgement;
import org.openapis.openapi.models.shared.HIUSubscriptionRequestNotificationAcknowledgementAcknowledgementStatusEnum;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05SubscriptionRequestsHiuOnNotifyRequest req = new PostV05SubscriptionRequestsHiuOnNotifyRequest("esse",                 new HIUSubscriptionRequestNotificationAcknowledgement("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("89fd871f-99dd-42ef-9121-aa6f1e674bdb");, OffsetDateTime.parse("2022-09-10T22:48:07.154Z")) {{
                                acknowledgement = new HIUSubscriptionRequestNotificationAcknowledgementAcknowledgement(HIUSubscriptionRequestNotificationAcknowledgementAcknowledgementStatusEnum.OK, "subscription Id");;
                                error = new Error(ErrorCodeEnum.TEN_THOUSAND_AND_ONE, "dicta");;
                            }};);            

            PostV05SubscriptionRequestsHiuOnNotifyResponse res = sdk.subscriptions.postV05SubscriptionRequestsHiuOnNotify(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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

            PostV05SubscriptionsHiuOnNotifyRequest req = new PostV05SubscriptionsHiuOnNotifyRequest("ullam",                 new HIUSubscriptionNotificationAcknowledgment("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("756082d6-8ea1-49f1-9170-51339d08086a");, OffsetDateTime.parse("2022-06-16T05:23:01.658Z")) {{
                                acknowledgement = new HIUSubscriptionNotificationAcknowledgmentAcknowledgement("subscription event Id", HIUSubscriptionNotificationAcknowledgmentAcknowledgementStatusEnum.OK);;
                                error = new Error(ErrorCodeEnum.ONE_THOUSAND, "voluptatem");;
                            }};);            

            PostV05SubscriptionsHiuOnNotifyResponse res = sdk.subscriptions.postV05SubscriptionsHiuOnNotify(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
