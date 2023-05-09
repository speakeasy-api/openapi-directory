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
import org.openapis.openapi.models.operations.PlusActivitiesGetRequest;
import org.openapis.openapi.models.operations.PlusActivitiesGetResponse;
import org.openapis.openapi.models.operations.PlusActivitiesGetSecurity;
import org.openapis.openapi.models.operations.PlusActivitiesGetSecurityOption1;
import org.openapis.openapi.models.operations.PlusActivitiesGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlusActivitiesGetRequest req = new PlusActivitiesGetRequest("corrupti") {{
                alt = AltEnum.JSON;
                fields = "provident";
                key = "distinctio";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "unde";
                userIp = "nulla";
            }};            

            PlusActivitiesGetResponse res = sdk.activities.plusActivitiesGet(req, new PlusActivitiesGetSecurity() {{
                option1 = new PlusActivitiesGetSecurityOption1("corrupti", "illum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.activity != null) {
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

* [plusActivitiesGet](docs/activities/README.md#plusactivitiesget) - Shut down. See https://developers.google.com/+/api-shutdown for more details.
* [plusActivitiesList](docs/activities/README.md#plusactivitieslist) - Shut down. See https://developers.google.com/+/api-shutdown for more details.
* [plusActivitiesSearch](docs/activities/README.md#plusactivitiessearch) - Shut down. See https://developers.google.com/+/api-shutdown for more details.

### [comments](docs/comments/README.md)

* [plusCommentsGet](docs/comments/README.md#pluscommentsget) - Shut down. See https://developers.google.com/+/api-shutdown for more details.
* [plusCommentsList](docs/comments/README.md#pluscommentslist) - Shut down. See https://developers.google.com/+/api-shutdown for more details.

### [people](docs/people/README.md)

* [plusPeopleGet](docs/people/README.md#pluspeopleget) - Get a person's profile. If your app uses scope https://www.googleapis.com/auth/plus.login, this method is guaranteed to return ageRange and language.
* [plusPeopleList](docs/people/README.md#pluspeoplelist) - List all of the people in the specified collection.
* [plusPeopleListByActivity](docs/people/README.md#pluspeoplelistbyactivity) - Shut down. See https://developers.google.com/+/api-shutdown for more details.
* [plusPeopleSearch](docs/people/README.md#pluspeoplesearch) - Shut down. See https://developers.google.com/+/api-shutdown for more details.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
