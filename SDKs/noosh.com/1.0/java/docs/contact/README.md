# contact

### Available Operations

* [getBillingRecipients](#getbillingrecipients) - List Billing Recipients
* [getContactList](#getcontactlist) - List the contacts
* [getContactUserInfo](#getcontactuserinfo) - Contact Info

## getBillingRecipients

List Billing Recipients

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBillingRecipientsRequest;
import org.openapis.openapi.models.operations.GetBillingRecipientsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBillingRecipientsRequest req = new GetBillingRecipientsRequest("provident");            

            GetBillingRecipientsResponse res = sdk.contact.getBillingRecipients(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContactList

List the contacts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContactListRequest;
import org.openapis.openapi.models.operations.GetContactListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContactListRequest req = new GetContactListRequest("distinctio");            

            GetContactListResponse res = sdk.contact.getContactList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContactUserInfo

Contact Info

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContactUserInfoRequest;
import org.openapis.openapi.models.operations.GetContactUserInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContactUserInfoRequest req = new GetContactUserInfoRequest("quibusdam", "unde");            

            GetContactUserInfoResponse res = sdk.contact.getContactUserInfo(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
