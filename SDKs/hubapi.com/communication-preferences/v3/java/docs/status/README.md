# status

## Overview

Whether a contact has subscribed or unsubscribed from a given subscription type.

### Available Operations

* [getCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatus](#getcommunicationpreferencesv3statusemailemailaddressgetemailstatus) - Get subscription statuses for a contact
* [postCommunicationPreferencesV3SubscribeSubscribe](#postcommunicationpreferencesv3subscribesubscribe) - Subscribe a contact
* [postCommunicationPreferencesV3UnsubscribeUnsubscribe](#postcommunicationpreferencesv3unsubscribeunsubscribe) - Unsubscribe a contact

## getCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatus

Returns a list of subscriptions and their status for a given contact.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusRequest;
import org.openapis.openapi.models.operations.GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse;
import org.openapis.openapi.models.operations.GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusRequest req = new GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusRequest("corrupti");            

            GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse res = sdk.status.getCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatus(req, new GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurity() {{
                hapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.publicSubscriptionStatusesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCommunicationPreferencesV3SubscribeSubscribe

Subscribes a contact to the given subscription type. This API is not valid to use for subscribing a contact at a brand or portal level and will return an error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCommunicationPreferencesV3SubscribeSubscribeResponse;
import org.openapis.openapi.models.operations.PostCommunicationPreferencesV3SubscribeSubscribeSecurity;
import org.openapis.openapi.models.shared.PublicUpdateSubscriptionStatusRequest;
import org.openapis.openapi.models.shared.PublicUpdateSubscriptionStatusRequestLegalBasisEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.PublicUpdateSubscriptionStatusRequest req = new PublicUpdateSubscriptionStatusRequest("provident", "distinctio") {{
                legalBasis = PublicUpdateSubscriptionStatusRequestLegalBasisEnum.PROCESS_AND_STORE;
                legalBasisExplanation = "unde";
            }};            

            PostCommunicationPreferencesV3SubscribeSubscribeResponse res = sdk.status.postCommunicationPreferencesV3SubscribeSubscribe(req, new PostCommunicationPreferencesV3SubscribeSubscribeSecurity() {{
                hapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.publicSubscriptionStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCommunicationPreferencesV3UnsubscribeUnsubscribe

Unsubscribes a contact from the given subscription type. This API is not valid to use for unsubscribing a contact at a brand or portal level and will return an error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCommunicationPreferencesV3UnsubscribeUnsubscribeResponse;
import org.openapis.openapi.models.operations.PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurity;
import org.openapis.openapi.models.shared.PublicUpdateSubscriptionStatusRequest;
import org.openapis.openapi.models.shared.PublicUpdateSubscriptionStatusRequestLegalBasisEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.PublicUpdateSubscriptionStatusRequest req = new PublicUpdateSubscriptionStatusRequest("nulla", "corrupti") {{
                legalBasis = PublicUpdateSubscriptionStatusRequestLegalBasisEnum.PROCESS_AND_STORE;
                legalBasisExplanation = "vel";
            }};            

            PostCommunicationPreferencesV3UnsubscribeUnsubscribeResponse res = sdk.status.postCommunicationPreferencesV3UnsubscribeUnsubscribe(req, new PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurity() {{
                hapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.publicSubscriptionStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
