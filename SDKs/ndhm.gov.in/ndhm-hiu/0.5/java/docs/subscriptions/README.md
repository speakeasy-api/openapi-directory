# subscriptions

### Available Operations

* [postV05SubscriptionRequestsHiuNotifyJson](#postv05subscriptionrequestshiunotifyjson) - Notification for subscription grant/deny/revoke
* [postV05SubscriptionRequestsHiuNotifyRaw](#postv05subscriptionrequestshiunotifyraw) - Notification for subscription grant/deny/revoke
* [postV05SubscriptionRequestsHiuOnInit](#postv05subscriptionrequestshiuoninit) - callback API for the /subscription-requests/cm/init to notify a HIU on acceptance/acknowledgement of the request for subscription.
* [postV05SubscriptionsHiuNotifyJson](#postv05subscriptionshiunotifyjson) - Notification to HIU on basis of a granted subscription
* [postV05SubscriptionsHiuNotifyRaw](#postv05subscriptionshiunotifyraw) - Notification to HIU on basis of a granted subscription

## postV05SubscriptionRequestsHiuNotifyJson

This API is used by CM to notify a HIU to grant or deny a request for subscription, and also to notify that in case an existing subscription is revoked or expired. For notifying that a particular subscription request was GRANTED or DENIED, the **subscriptionRequestId** is passed. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05SubscriptionRequestsHiuNotifyJsonRequest;
import org.openapis.openapi.models.operations.PostV05SubscriptionRequestsHiuNotifyJsonResponse;
import org.openapis.openapi.models.shared.ConsentManagerPatientID;
import org.openapis.openapi.models.shared.HIUSubscription;
import org.openapis.openapi.models.shared.HIUSubscriptionContext;
import org.openapis.openapi.models.shared.OrganizationRepresentation;
import org.openapis.openapi.models.shared.SubscriptionApprovalNotification;
import org.openapis.openapi.models.shared.SubscriptionApprovalNotificationNotification;
import org.openapis.openapi.models.shared.SubscriptionCategoryEnum;
import org.openapis.openapi.models.shared.SubscriptionPeriod;
import org.openapis.openapi.models.shared.SubscriptionStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05SubscriptionRequestsHiuNotifyJsonRequest req = new PostV05SubscriptionRequestsHiuNotifyJsonRequest("vero",                 new SubscriptionApprovalNotification(                new SubscriptionApprovalNotificationNotification(SubscriptionStatusEnum.GRANTED) {{
                                                subscription = new HIUSubscription(                new OrganizationRepresentation("quasi");, "subscription Id",                 new ConsentManagerPatientID("hinapatel@ndhm");,                 new org.openapis.openapi.models.shared.HIUSubscriptionContext[]{{
                                                                    add(new HIUSubscriptionContext(                new org.openapis.openapi.models.shared.SubscriptionCategoryEnum[]{{
                                                                                        add(SubscriptionCategoryEnum.LINK),
                                                                                        add(SubscriptionCategoryEnum.LINK),
                                                                                    }},                 new SubscriptionPeriod(OffsetDateTime.parse("2022-10-24T07:54:12.362Z"), OffsetDateTime.parse("2021-09-23T16:25:56.144Z"));) {{
                                                                        categories = new org.openapis.openapi.models.shared.SubscriptionCategoryEnum[]{{
                                                                            add(SubscriptionCategoryEnum.LINK),
                                                                            add(SubscriptionCategoryEnum.LINK),
                                                                        }};
                                                                        hip = new OrganizationRepresentation("quia") {{
                                                                            id = "b7b95bc0-ab3c-420c-8f37-89fd871f99dd";
                                                                        }};
                                                                        period = new SubscriptionPeriod(OffsetDateTime.parse("2022-11-27T12:32:54.264Z"), OffsetDateTime.parse("2021-09-25T11:11:22.943Z")) {{
                                                                            from = OffsetDateTime.parse("2020-01-10T06:57:07.831Z");
                                                                            to = OffsetDateTime.parse("2022-09-29T22:10:17.894Z");
                                                                        }};
                                                                    }}),
                                                                    add(new HIUSubscriptionContext(                new org.openapis.openapi.models.shared.SubscriptionCategoryEnum[]{{
                                                                                        add(SubscriptionCategoryEnum.LINK),
                                                                                    }},                 new SubscriptionPeriod(OffsetDateTime.parse("2022-07-01T01:59:37.066Z"), OffsetDateTime.parse("2022-10-12T06:37:48.702Z"));) {{
                                                                        categories = new org.openapis.openapi.models.shared.SubscriptionCategoryEnum[]{{
                                                                            add(SubscriptionCategoryEnum.LINK),
                                                                            add(SubscriptionCategoryEnum.LINK),
                                                                        }};
                                                                        hip = new OrganizationRepresentation("adipisci") {{
                                                                            id = "4bdb04f1-5756-4082-968e-a19f1d170513";
                                                                        }};
                                                                        period = new SubscriptionPeriod(OffsetDateTime.parse("2022-06-27T17:27:50.523Z"), OffsetDateTime.parse("2022-05-08T19:28:18.512Z")) {{
                                                                            from = OffsetDateTime.parse("2021-04-28T03:43:57.732Z");
                                                                            to = OffsetDateTime.parse("2022-06-24T08:02:02.406Z");
                                                                        }};
                                                                    }}),
                                                                    add(new HIUSubscriptionContext(                new org.openapis.openapi.models.shared.SubscriptionCategoryEnum[]{{
                                                                                        add(SubscriptionCategoryEnum.LINK),
                                                                                        add(SubscriptionCategoryEnum.LINK),
                                                                                    }},                 new SubscriptionPeriod(OffsetDateTime.parse("2022-06-12T12:56:04.738Z"), OffsetDateTime.parse("2022-09-18T05:25:42.565Z"));) {{
                                                                        categories = new org.openapis.openapi.models.shared.SubscriptionCategoryEnum[]{{
                                                                            add(SubscriptionCategoryEnum.LINK),
                                                                            add(SubscriptionCategoryEnum.LINK),
                                                                            add(SubscriptionCategoryEnum.LINK),
                                                                        }};
                                                                        hip = new OrganizationRepresentation("fuga") {{
                                                                            id = "4c26071f-93f5-4f06-82da-c7af515cc413";
                                                                        }};
                                                                        period = new SubscriptionPeriod(OffsetDateTime.parse("2021-02-23T09:04:41.843Z"), OffsetDateTime.parse("2021-04-17T14:58:08.915Z")) {{
                                                                            from = OffsetDateTime.parse("2022-03-29T01:37:24.454Z");
                                                                            to = OffsetDateTime.parse("2022-05-14T14:45:53.115Z");
                                                                        }};
                                                                    }}),
                                                                    add(new HIUSubscriptionContext(                new org.openapis.openapi.models.shared.SubscriptionCategoryEnum[]{{
                                                                                        add(SubscriptionCategoryEnum.LINK),
                                                                                        add(SubscriptionCategoryEnum.LINK),
                                                                                        add(SubscriptionCategoryEnum.LINK),
                                                                                    }},                 new SubscriptionPeriod(OffsetDateTime.parse("2022-02-13T04:07:51.208Z"), OffsetDateTime.parse("2022-06-16T02:54:19.259Z"));) {{
                                                                        categories = new org.openapis.openapi.models.shared.SubscriptionCategoryEnum[]{{
                                                                            add(SubscriptionCategoryEnum.LINK),
                                                                            add(SubscriptionCategoryEnum.LINK),
                                                                            add(SubscriptionCategoryEnum.LINK),
                                                                            add(SubscriptionCategoryEnum.LINK),
                                                                        }};
                                                                        hip = new OrganizationRepresentation("dignissimos") {{
                                                                            id = "bb675fd5-e60b-4375-ad4f-6fbee41f3331";
                                                                        }};
                                                                        period = new SubscriptionPeriod(OffsetDateTime.parse("2022-03-25T18:38:24.627Z"), OffsetDateTime.parse("2022-01-31T09:28:16.792Z")) {{
                                                                            from = OffsetDateTime.parse("2020-04-29T18:47:01.945Z");
                                                                            to = OffsetDateTime.parse("2022-08-23T06:58:42.024Z");
                                                                        }};
                                                                    }}),
                                                                }});;
                                                subscriptionRequestId = "request id of the subscription";
                                            }};, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2022-08-15T15:27:41.112Z"));, "voluptas");            

            PostV05SubscriptionRequestsHiuNotifyJsonResponse res = sdk.subscriptions.postV05SubscriptionRequestsHiuNotifyJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05SubscriptionRequestsHiuNotifyRaw

This API is used by CM to notify a HIU to grant or deny a request for subscription, and also to notify that in case an existing subscription is revoked or expired. For notifying that a particular subscription request was GRANTED or DENIED, the **subscriptionRequestId** is passed. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05SubscriptionRequestsHiuNotifyRawRequest;
import org.openapis.openapi.models.operations.PostV05SubscriptionRequestsHiuNotifyRawResponse;
import org.openapis.openapi.models.shared.ConsentManagerPatientID;
import org.openapis.openapi.models.shared.HIUSubscription;
import org.openapis.openapi.models.shared.HIUSubscriptionContext;
import org.openapis.openapi.models.shared.OrganizationRepresentation;
import org.openapis.openapi.models.shared.SubscriptionApprovalNotification;
import org.openapis.openapi.models.shared.SubscriptionApprovalNotificationNotification;
import org.openapis.openapi.models.shared.SubscriptionCategoryEnum;
import org.openapis.openapi.models.shared.SubscriptionPeriod;
import org.openapis.openapi.models.shared.SubscriptionStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05SubscriptionRequestsHiuNotifyRawRequest req = new PostV05SubscriptionRequestsHiuNotifyRawRequest("voluptas", "minima".getBytes(), "nobis");            

            PostV05SubscriptionRequestsHiuNotifyRawResponse res = sdk.subscriptions.postV05SubscriptionRequestsHiuNotifyRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05SubscriptionRequestsHiuOnInit

This callback API acknowledges the request for subscription from a HIU, and sends back a "id" that will be used when the patient/user approves or denies the subscription. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05SubscriptionRequestsHiuOnInitRequest;
import org.openapis.openapi.models.operations.PostV05SubscriptionRequestsHiuOnInitResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.HIUSubscriptionRequestReceipt;
import org.openapis.openapi.models.shared.HIUSubscriptionRequestReceiptSubscriptionRequest;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05SubscriptionRequestsHiuOnInitRequest req = new PostV05SubscriptionRequestsHiuOnInitRequest("dolorum",                 new HIUSubscriptionRequestReceipt("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("3c28744e-d53b-488f-ba8d-8f5c0b2f2fb7");, OffsetDateTime.parse("2022-11-10T06:21:40.327Z")) {{
                                error = new Error(ErrorCodeEnum.TEN_THOUSAND_AND_ONE, "dolore");;
                                subscriptionRequest = new HIUSubscriptionRequestReceiptSubscriptionRequest("f29f0e59-8388-4698-9fe6-05db67aeac46");;
                            }};, "laborum");            

            PostV05SubscriptionRequestsHiuOnInitResponse res = sdk.subscriptions.postV05SubscriptionRequestsHiuOnInit(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05SubscriptionsHiuNotifyJson

This API is used by CM to notify a HIU for notification relevant to subscription. Notifications are sent to subscribed HIUs whenever a new care-context is linked or new data is available on an existing linked care-context. 
1. if event.category = LINK, then only care-contexts are passed when new care-contexts are linked for patient. 
2. If event.category = DATA, then hiTypes are passed. Care-context is passed only if the subscribed HIU has any valid consent for that care-context


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05SubscriptionsHiuNotifyJsonRequest;
import org.openapis.openapi.models.operations.PostV05SubscriptionsHiuNotifyJsonResponse;
import org.openapis.openapi.models.shared.CareContextDefinition;
import org.openapis.openapi.models.shared.ConsentManagerPatientID;
import org.openapis.openapi.models.shared.EventCategoryDetail;
import org.openapis.openapi.models.shared.HITypeEnumEnum;
import org.openapis.openapi.models.shared.HIUSubscriptionEventContent;
import org.openapis.openapi.models.shared.HIUSubscriptionNotification;
import org.openapis.openapi.models.shared.HIUSubscriptionNotificationEvent;
import org.openapis.openapi.models.shared.OrganizationRepresentation;
import org.openapis.openapi.models.shared.SubscriptionCategoryEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05SubscriptionsHiuNotifyJsonRequest req = new PostV05SubscriptionsHiuNotifyJsonRequest("sed",                 new HIUSubscriptionNotification(                new HIUSubscriptionNotificationEvent(SubscriptionCategoryEnum.LINK,                 new HIUSubscriptionEventContent(                new org.openapis.openapi.models.shared.EventCategoryDetail[]{{
                                                                                add(new EventCategoryDetail(                new CareContextDefinition("Episode1", "batman@tmh");,                 new org.openapis.openapi.models.shared.HITypeEnumEnum[]{{
                                                                                                    add(HITypeEnumEnum.DISCHARGE_SUMMARY),
                                                                                                    add(HITypeEnumEnum.OP_CONSULTATION),
                                                                                                }}) {{
                                                                                    careContext = new CareContextDefinition("Episode1", "batman@tmh") {{
                                                                                        careContextReference = "Episode1";
                                                                                        patientReference = "batman@tmh";
                                                                                    }};
                                                                                    hiTypes = new org.openapis.openapi.models.shared.HITypeEnumEnum[]{{
                                                                                        add(HITypeEnumEnum.DISCHARGE_SUMMARY),
                                                                                        add(HITypeEnumEnum.OP_CONSULTATION),
                                                                                    }};
                                                                                }}),
                                                                                add(new EventCategoryDetail(                new CareContextDefinition("Episode1", "batman@tmh");,                 new org.openapis.openapi.models.shared.HITypeEnumEnum[]{{
                                                                                                    add(HITypeEnumEnum.DIAGNOSTIC_REPORT),
                                                                                                }}) {{
                                                                                    careContext = new CareContextDefinition("Episode1", "batman@tmh") {{
                                                                                        careContextReference = "Episode1";
                                                                                        patientReference = "batman@tmh";
                                                                                    }};
                                                                                    hiTypes = new org.openapis.openapi.models.shared.HITypeEnumEnum[]{{
                                                                                        add(HITypeEnumEnum.DIAGNOSTIC_REPORT),
                                                                                        add(HITypeEnumEnum.DIAGNOSTIC_REPORT),
                                                                                    }};
                                                                                }}),
                                                                            }},                 new OrganizationRepresentation("perferendis");,                 new ConsentManagerPatientID("hinapatel@ndhm"););, "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d", OffsetDateTime.parse("2021-01-15T21:52:35.790Z"), "subscription Id");, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2022-11-07T19:19:54.306Z"));, "provident");            

            PostV05SubscriptionsHiuNotifyJsonResponse res = sdk.subscriptions.postV05SubscriptionsHiuNotifyJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05SubscriptionsHiuNotifyRaw

This API is used by CM to notify a HIU for notification relevant to subscription. Notifications are sent to subscribed HIUs whenever a new care-context is linked or new data is available on an existing linked care-context. 
1. if event.category = LINK, then only care-contexts are passed when new care-contexts are linked for patient. 
2. If event.category = DATA, then hiTypes are passed. Care-context is passed only if the subscribed HIU has any valid consent for that care-context


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05SubscriptionsHiuNotifyRawRequest;
import org.openapis.openapi.models.operations.PostV05SubscriptionsHiuNotifyRawResponse;
import org.openapis.openapi.models.shared.CareContextDefinition;
import org.openapis.openapi.models.shared.ConsentManagerPatientID;
import org.openapis.openapi.models.shared.EventCategoryDetail;
import org.openapis.openapi.models.shared.HITypeEnumEnum;
import org.openapis.openapi.models.shared.HIUSubscriptionEventContent;
import org.openapis.openapi.models.shared.HIUSubscriptionNotification;
import org.openapis.openapi.models.shared.HIUSubscriptionNotificationEvent;
import org.openapis.openapi.models.shared.OrganizationRepresentation;
import org.openapis.openapi.models.shared.SubscriptionCategoryEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05SubscriptionsHiuNotifyRawRequest req = new PostV05SubscriptionsHiuNotifyRawRequest("eius", "necessitatibus".getBytes(), "ipsum");            

            PostV05SubscriptionsHiuNotifyRawResponse res = sdk.subscriptions.postV05SubscriptionsHiuNotifyRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
