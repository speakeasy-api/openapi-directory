# subscriptions

### Available Operations

* [postV05SubscriptionRequestsCmInitJson](#postv05subscriptionrequestscminitjson) - Request for subscription
* [postV05SubscriptionRequestsCmInitRaw](#postv05subscriptionrequestscminitraw) - Request for subscription
* [postV05SubscriptionRequestsCmOnInit](#postv05subscriptionrequestscmoninit) - callback API for the /subscription-requests/cm/init to notify a HIU on acceptance/acknowledgement of the request for subscription.
* [postV05SubscriptionRequestsHiuNotifyJson](#postv05subscriptionrequestshiunotifyjson) - Notification for subscription grant/deny/revoke
* [postV05SubscriptionRequestsHiuNotifyRaw](#postv05subscriptionrequestshiunotifyraw) - Notification for subscription grant/deny/revoke
* [postV05SubscriptionRequestsHiuOnNotify](#postv05subscriptionrequestshiuonnotify) - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
* [postV05SubscriptionsHiuNotifyJson](#postv05subscriptionshiunotifyjson) - Notification to HIU on basis of a granted subscription
* [postV05SubscriptionsHiuNotifyRaw](#postv05subscriptionshiunotifyraw) - Notification to HIU on basis of a granted subscription
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

            PostV05SubscriptionRequestsCmInitJsonRequest req = new PostV05SubscriptionRequestsCmInitJsonRequest("maiores",                 new SubscriptionRequest("499a5a4a-7dda-4f20-9b67-e24589627061",                 new SubscriptionRequestSubscription(                new org.openapis.openapi.models.shared.SubscriptionCategoryEnum[]{{
                                                                add(SubscriptionCategoryEnum.LINK),
                                                                add(SubscriptionCategoryEnum.LINK),
                                                                add(SubscriptionCategoryEnum.LINK),
                                                            }},                 new OrganizationRepresentation("mollitia");,                 new ConsentManagerPatientID() {{
                                                                id = "hinapatel79@ndhm";
                                                            }};,                 new SubscriptionPeriod(OffsetDateTime.parse("2020-05-11T07:22:15.278Z"), OffsetDateTime.parse("2022-06-12T01:59:08.514Z"));,                 new UsePurpose("blanditiis", "cum") {{
                                                                refUri = "http://snarling-dock.org";
                                                            }};) {{
                                                hips = new org.openapis.openapi.models.shared.OrganizationRepresentation[]{{
                                                    add(new OrganizationRepresentation("deserunt") {{
                                                        id = "2c8c6ce6-11fe-4eb1-87cb-db6eec74378b";
                                                    }}),
                                                    add(new OrganizationRepresentation("culpa") {{
                                                        id = "25317747-dc91-45ad-acaf-5dd6723dc0f5";
                                                    }}),
                                                    add(new OrganizationRepresentation("tempora") {{
                                                        id = "e2f3a6b7-0087-4875-a143-f5a6c98b5555";
                                                    }}),
                                                    add(new OrganizationRepresentation("vel") {{
                                                        id = "080d40bc-acc6-4cbd-ab5f-3ec909304f92";
                                                    }}),
                                                }};
                                            }};, OffsetDateTime.parse("2021-09-03T23:09:42.514Z"));, "possimus");            

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

            PostV05SubscriptionRequestsCmInitRawRequest req = new PostV05SubscriptionRequestsCmInitRawRequest("fugit", "ipsam".getBytes(), "nostrum");            

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

## postV05SubscriptionRequestsCmOnInit

This callback API acknowledges the request for subscription from a HIU, and sends back a "id" that will be used when the patient/user approves or denies the subscription. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05SubscriptionRequestsCmOnInitRequest;
import org.openapis.openapi.models.operations.PostV05SubscriptionRequestsCmOnInitResponse;
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

            PostV05SubscriptionRequestsCmOnInitRequest req = new PostV05SubscriptionRequestsCmOnInitRequest("sequi",                 new HIUSubscriptionRequestReceipt("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("819b474b-0ed2-40e5-a248-fff639a910ab");, OffsetDateTime.parse("2020-09-02T19:39:17.071Z")) {{
                                error = new Error() {{
                                    code = ErrorCodeEnum.TEN_THOUSAND_AND_ONE;
                                    message = "tempore";
                                }};;
                                subscriptionRequest = new HIUSubscriptionRequestReceiptSubscriptionRequest("f29f0e59-8388-4698-9fe6-05db67aeac46");;
                            }};, "commodi");            

            PostV05SubscriptionRequestsCmOnInitResponse res = sdk.subscriptions.postV05SubscriptionRequestsCmOnInit(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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

            PostV05SubscriptionRequestsHiuNotifyJsonRequest req = new PostV05SubscriptionRequestsHiuNotifyJsonRequest("fugit",                 new SubscriptionApprovalNotification(                new SubscriptionApprovalNotificationNotification(SubscriptionStatusEnum.GRANTED) {{
                                                subscription = new HIUSubscription(                new OrganizationRepresentation("voluptate");, "subscription Id",                 new ConsentManagerPatientID() {{
                                                                    id = "hinapatel79@ndhm";
                                                                }};,                 new org.openapis.openapi.models.shared.HIUSubscriptionContext[]{{
                                                                    add(new HIUSubscriptionContext(                new org.openapis.openapi.models.shared.SubscriptionCategoryEnum[]{{
                                                                                        add(SubscriptionCategoryEnum.LINK),
                                                                                        add(SubscriptionCategoryEnum.LINK),
                                                                                    }},                 new SubscriptionPeriod(OffsetDateTime.parse("2022-01-28T16:03:04.137Z"), OffsetDateTime.parse("2021-09-21T23:52:55.184Z"));) {{
                                                                        categories = new org.openapis.openapi.models.shared.SubscriptionCategoryEnum[]{{
                                                                            add(SubscriptionCategoryEnum.LINK),
                                                                            add(SubscriptionCategoryEnum.LINK),
                                                                        }};
                                                                        hip = new OrganizationRepresentation("veniam") {{
                                                                            id = "96e1ec00-221b-4335-989a-cb3ecfda8d0c";
                                                                        }};
                                                                        period = new SubscriptionPeriod(OffsetDateTime.parse("2022-10-13T14:39:48.468Z"), OffsetDateTime.parse("2022-12-16T01:03:01.411Z")) {{
                                                                            from = OffsetDateTime.parse("2022-05-30T05:35:32.331Z");
                                                                            to = OffsetDateTime.parse("2020-03-09T18:54:18.793Z");
                                                                        }};
                                                                    }}),
                                                                    add(new HIUSubscriptionContext(                new org.openapis.openapi.models.shared.SubscriptionCategoryEnum[]{{
                                                                                        add(SubscriptionCategoryEnum.LINK),
                                                                                    }},                 new SubscriptionPeriod(OffsetDateTime.parse("2022-03-28T10:53:29.573Z"), OffsetDateTime.parse("2020-05-23T03:36:44.573Z"));) {{
                                                                        categories = new org.openapis.openapi.models.shared.SubscriptionCategoryEnum[]{{
                                                                            add(SubscriptionCategoryEnum.LINK),
                                                                            add(SubscriptionCategoryEnum.LINK),
                                                                        }};
                                                                        hip = new OrganizationRepresentation("eligendi") {{
                                                                            id = "1fa1cf20-688f-477c-9ffc-71dca163f2a3";
                                                                        }};
                                                                        period = new SubscriptionPeriod(OffsetDateTime.parse("2022-01-21T00:08:09.247Z"), OffsetDateTime.parse("2022-04-10T23:53:33.584Z")) {{
                                                                            from = OffsetDateTime.parse("2022-12-16T04:21:36.088Z");
                                                                            to = OffsetDateTime.parse("2021-10-13T07:18:04.819Z");
                                                                        }};
                                                                    }}),
                                                                }});;
                                                subscriptionRequestId = "request id of the subscription";
                                            }};, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2021-04-25T12:54:08.799Z"));, "ipsam");            

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

            PostV05SubscriptionRequestsHiuNotifyRawRequest req = new PostV05SubscriptionRequestsHiuNotifyRawRequest("esse", "laborum".getBytes(), "perspiciatis");            

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

            PostV05SubscriptionRequestsHiuOnNotifyRequest req = new PostV05SubscriptionRequestsHiuOnNotifyRequest("voluptates",                 new HIUSubscriptionRequestNotificationAcknowledgement("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("61876c6a-b21d-429d-bc94-d6fecd799390");, OffsetDateTime.parse("2022-07-27T14:10:51.968Z")) {{
                                acknowledgement = new HIUSubscriptionRequestNotificationAcknowledgementAcknowledgement(HIUSubscriptionRequestNotificationAcknowledgementAcknowledgementStatusEnum.OK, "subscription Id");;
                                error = new Error() {{
                                    code = ErrorCodeEnum.ONE_THOUSAND;
                                    message = "laborum";
                                }};;
                            }};, "autem");            

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

            PostV05SubscriptionsHiuNotifyJsonRequest req = new PostV05SubscriptionsHiuNotifyJsonRequest("assumenda",                 new HIUSubscriptionNotification(                new HIUSubscriptionNotificationEvent(SubscriptionCategoryEnum.LINK,                 new HIUSubscriptionEventContent(                new org.openapis.openapi.models.shared.EventCategoryDetail[]{{
                                                                                add(new EventCategoryDetail(                new CareContextDefinition("Episode1", "batman@tmh");,                 new org.openapis.openapi.models.shared.HITypeEnumEnum[]{{
                                                                                                    add(HITypeEnumEnum.PRESCRIPTION),
                                                                                                    add(HITypeEnumEnum.OP_CONSULTATION),
                                                                                                }}) {{
                                                                                    careContext = new CareContextDefinition("Episode1", "batman@tmh") {{
                                                                                        careContextReference = "Episode1";
                                                                                        patientReference = "batman@tmh";
                                                                                    }};
                                                                                    hiTypes = new org.openapis.openapi.models.shared.HITypeEnumEnum[]{{
                                                                                        add(HITypeEnumEnum.OP_CONSULTATION),
                                                                                        add(HITypeEnumEnum.OP_CONSULTATION),
                                                                                        add(HITypeEnumEnum.OP_CONSULTATION),
                                                                                        add(HITypeEnumEnum.OP_CONSULTATION),
                                                                                    }};
                                                                                }}),
                                                                            }},                 new OrganizationRepresentation("ratione");,                 new ConsentManagerPatientID() {{
                                                                                id = "hinapatel79@ndhm";
                                                                            }};);, "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d", OffsetDateTime.parse("2021-05-24T19:52:17.085Z"), "subscription Id");, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2020-09-12T14:59:58.242Z"));, "doloremque");            

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

            PostV05SubscriptionsHiuNotifyRawRequest req = new PostV05SubscriptionsHiuNotifyRawRequest("totam", "iure".getBytes(), "maiores");            

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

            PostV05SubscriptionsHiuOnNotifyRequest req = new PostV05SubscriptionsHiuOnNotifyRequest("est",                 new HIUSubscriptionNotificationAcknowledgment("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("21e9152c-b311-4916-bb8e-3c8db03408d6");, OffsetDateTime.parse("2022-04-22T18:37:10.708Z")) {{
                                acknowledgement = new HIUSubscriptionNotificationAcknowledgmentAcknowledgement("subscription event Id", HIUSubscriptionNotificationAcknowledgmentAcknowledgementStatusEnum.OK);;
                                error = new Error() {{
                                    code = ErrorCodeEnum.ONE_THOUSAND;
                                    message = "quaerat";
                                }};;
                            }};, "earum");            

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
