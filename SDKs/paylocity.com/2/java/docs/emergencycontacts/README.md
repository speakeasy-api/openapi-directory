# emergencyContacts

### Available Operations

* [addOrUpdateEmergencyContacts](#addorupdateemergencycontacts) - Add/update emergency contacts

## addOrUpdateEmergencyContacts

Sends new or updated employee emergency contacts directly to Web Pay.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddOrUpdateEmergencyContactsRequest;
import org.openapis.openapi.models.operations.AddOrUpdateEmergencyContactsResponse;
import org.openapis.openapi.models.operations.AddOrUpdateEmergencyContactsSecurity;
import org.openapis.openapi.models.shared.EmergencyContact;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddOrUpdateEmergencyContactsRequest req = new AddOrUpdateEmergencyContactsRequest("architecto",                 new EmergencyContact("ipsa", "reiciendis") {{
                                address1 = "est";
                                address2 = "mollitia";
                                city = "Dachberg";
                                country = "Guernsey";
                                county = "explicabo";
                                email = "Emerald.Mohr@hotmail.com";
                                homePhone = "excepturi";
                                mobilePhone = "accusantium";
                                notes = "iure";
                                pager = "culpa";
                                primaryPhone = "doloribus";
                                priority = "sapiente";
                                relationship = "architecto";
                                state = "mollitia";
                                syncEmployeeInfo = false;
                                workExtension = "dolorem";
                                workPhone = "culpa";
                                zip = "consequuntur";
                            }};, "repellat");            

            AddOrUpdateEmergencyContactsResponse res = sdk.emergencyContacts.addOrUpdateEmergencyContacts(req, new AddOrUpdateEmergencyContactsSecurity("mollitia") {{
                paylocityAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
