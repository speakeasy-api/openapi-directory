# locations

### Available Operations

* [getConsumerV1Locations](#getconsumerv1locations) - List Locations
* [getConsumerV1LocationsId](#getconsumerv1locationsid) - Get Location

## getConsumerV1Locations

<p>Use this endpoint to return a <b>List of Business Locations</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20 and maximum is 100. Use the other query parameters to filter the results further. </p>
<p>
  <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConsumerV1LocationsRequest;
import org.openapis.openapi.models.operations.GetConsumerV1LocationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetConsumerV1LocationsRequest req = new GetConsumerV1LocationsRequest() {{
                friendlyId = "amet";
                ignorePrimary = false;
                limit = 730856;
                name = "Francis Haley";
                nearestTo = "totam";
                offset = 471752;
                proximity = 25662;
                regionId = "expedita";
                serviceId = "neque";
                units = "sed";
            }};            

            GetConsumerV1LocationsResponse res = sdk.locations.getConsumerV1Locations(req);

            if (res.locationListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConsumerV1LocationsId

<p>Use this endpoint to return a <b>Location</b> object. A valid business <b>location id</b> is required. Find all location id's by using the <i>GET /consumer/v1/locations</i> endpoint.</p>
<p>
  <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConsumerV1LocationsIdRequest;
import org.openapis.openapi.models.operations.GetConsumerV1LocationsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetConsumerV1LocationsIdRequest req = new GetConsumerV1LocationsIdRequest("libero");            

            GetConsumerV1LocationsIdResponse res = sdk.locations.getConsumerV1LocationsId(req);

            if (res.locationViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
