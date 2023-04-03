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

import org.openapis.openapi.models.operations.PlusActivitiesGetSecurityOption1;
import org.openapis.openapi.models.operations.PlusActivitiesGetSecurityOption2;
import org.openapis.openapi.models.operations.PlusActivitiesGetSecurity;
import org.openapis.openapi.models.operations.PlusActivitiesGetRequest;
import org.openapis.openapi.models.operations.PlusActivitiesGetResponse;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlusActivitiesGetRequest req = new PlusActivitiesGetRequest() {{
                activityId = "corrupti";
                alt = "json";
                fields = "provident";
                key = "distinctio";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "unde";
                userIp = "nulla";
            }}            

            PlusActivitiesGetResponse res = sdk.activities.plusActivitiesGet(req, new PlusActivitiesGetSecurity() {{
                option1 = new PlusActivitiesGetSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.activity.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### activities

* `plusActivitiesGet` - Shut down. See https://developers.google.com/+/api-shutdown for more details.
* `plusActivitiesList` - Shut down. See https://developers.google.com/+/api-shutdown for more details.
* `plusActivitiesSearch` - Shut down. See https://developers.google.com/+/api-shutdown for more details.

### comments

* `plusCommentsGet` - Shut down. See https://developers.google.com/+/api-shutdown for more details.
* `plusCommentsList` - Shut down. See https://developers.google.com/+/api-shutdown for more details.

### people

* `plusPeopleGet` - Get a person's profile. If your app uses scope https://www.googleapis.com/auth/plus.login, this method is guaranteed to return ageRange and language.
* `plusPeopleList` - List all of the people in the specified collection.
* `plusPeopleListByActivity` - Shut down. See https://developers.google.com/+/api-shutdown for more details.
* `plusPeopleSearch` - Shut down. See https://developers.google.com/+/api-shutdown for more details.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
