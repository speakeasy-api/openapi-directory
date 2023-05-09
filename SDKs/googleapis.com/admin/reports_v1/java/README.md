# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReportsActivitiesListApplicationNameEnum;
import org.openapis.openapi.models.operations.ReportsActivitiesListRequest;
import org.openapis.openapi.models.operations.ReportsActivitiesListResponse;
import org.openapis.openapi.models.operations.ReportsActivitiesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReportsActivitiesListRequest req = new ReportsActivitiesListRequest(ReportsActivitiesListApplicationNameEnum.MEET, "provident") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quibusdam";
                actorIpAddress = "unde";
                alt = AltEnum.PROTO;
                callback = "corrupti";
                customerId = "illum";
                endTime = "vel";
                eventName = "error";
                fields = "deserunt";
                filters = "suscipit";
                groupIdFilter = "iure";
                key = "magnam";
                maxResults = 891773L;
                oauthToken = "ipsa";
                orgUnitID = "delectus";
                pageToken = "tempora";
                prettyPrint = false;
                quotaUser = "suscipit";
                startTime = "molestiae";
                uploadType = "minus";
                uploadProtocol = "placeat";
            }};            

            ReportsActivitiesListResponse res = sdk.activities.reportsActivitiesList(req, new ReportsActivitiesListSecurity("voluptatum", "iusto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.activities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [activities](docs/activities/README.md)

* [reportsActivitiesList](docs/activities/README.md#reportsactivitieslist) - Retrieves a list of activities for a specific customer's account and application such as the Admin console application or the Google Drive application. For more information, see the guides for administrator and Google Drive activity reports. For more information about the activity report's parameters, see the activity parameters reference guides. 
* [reportsActivitiesWatch](docs/activities/README.md#reportsactivitieswatch) - Start receiving notifications for account activities. For more information, see Receiving Push Notifications.

### [channels](docs/channels/README.md)

* [adminChannelsStop](docs/channels/README.md#adminchannelsstop) - Stop watching resources through this channel.

### [customerUsageReports](docs/customerusagereports/README.md)

* [reportsCustomerUsageReportsGet](docs/customerusagereports/README.md#reportscustomerusagereportsget) - Retrieves a report which is a collection of properties and statistics for a specific customer's account. For more information, see the Customers Usage Report guide. For more information about the customer report's parameters, see the Customers Usage parameters reference guides. 

### [entityUsageReports](docs/entityusagereports/README.md)

* [reportsEntityUsageReportsGet](docs/entityusagereports/README.md#reportsentityusagereportsget) - Retrieves a report which is a collection of properties and statistics for entities used by users within the account. For more information, see the Entities Usage Report guide. For more information about the entities report's parameters, see the Entities Usage parameters reference guides.

### [userUsageReport](docs/userusagereport/README.md)

* [reportsUserUsageReportGet](docs/userusagereport/README.md#reportsuserusagereportget) - Retrieves a report which is a collection of properties and statistics for a set of users with the account. For more information, see the User Usage Report guide. For more information about the user report's parameters, see the Users Usage parameters reference guides.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
