# activities

### Available Operations

* [plusActivitiesGet](#plusactivitiesget) - Shut down. See https://developers.google.com/+/api-shutdown for more details.
* [plusActivitiesList](#plusactivitieslist) - Shut down. See https://developers.google.com/+/api-shutdown for more details.
* [plusActivitiesSearch](#plusactivitiessearch) - Shut down. See https://developers.google.com/+/api-shutdown for more details.

## plusActivitiesGet

Shut down. See https://developers.google.com/+/api-shutdown for more details.

### Example Usage

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

            PlusActivitiesGetRequest req = new PlusActivitiesGetRequest("vel") {{
                alt = AltEnum.JSON;
                fields = "error";
                key = "deserunt";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "iure";
                userIp = "magnam";
            }};            

            PlusActivitiesGetResponse res = sdk.activities.plusActivitiesGet(req, new PlusActivitiesGetSecurity() {{
                option1 = new PlusActivitiesGetSecurityOption1("debitis", "ipsa") {{
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

## plusActivitiesList

Shut down. See https://developers.google.com/+/api-shutdown for more details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlusActivitiesListCollectionEnum;
import org.openapis.openapi.models.operations.PlusActivitiesListRequest;
import org.openapis.openapi.models.operations.PlusActivitiesListResponse;
import org.openapis.openapi.models.operations.PlusActivitiesListSecurity;
import org.openapis.openapi.models.operations.PlusActivitiesListSecurityOption1;
import org.openapis.openapi.models.operations.PlusActivitiesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlusActivitiesListRequest req = new PlusActivitiesListRequest(PlusActivitiesListCollectionEnum.PUBLIC_, "delectus") {{
                alt = AltEnum.JSON;
                fields = "tempora";
                key = "suscipit";
                maxResults = 477665L;
                oauthToken = "minus";
                pageToken = "placeat";
                prettyPrint = false;
                quotaUser = "voluptatum";
                userIp = "iusto";
            }};            

            PlusActivitiesListResponse res = sdk.activities.plusActivitiesList(req, new PlusActivitiesListSecurity() {{
                option1 = new PlusActivitiesListSecurityOption1("excepturi", "nisi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.activityFeed != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## plusActivitiesSearch

Shut down. See https://developers.google.com/+/api-shutdown for more details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlusActivitiesSearchOrderByEnum;
import org.openapis.openapi.models.operations.PlusActivitiesSearchRequest;
import org.openapis.openapi.models.operations.PlusActivitiesSearchResponse;
import org.openapis.openapi.models.operations.PlusActivitiesSearchSecurity;
import org.openapis.openapi.models.operations.PlusActivitiesSearchSecurityOption1;
import org.openapis.openapi.models.operations.PlusActivitiesSearchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlusActivitiesSearchRequest req = new PlusActivitiesSearchRequest("recusandae") {{
                alt = AltEnum.JSON;
                fields = "temporibus";
                key = "ab";
                language = "quis";
                maxResults = 87129L;
                oauthToken = "deserunt";
                orderBy = PlusActivitiesSearchOrderByEnum.BEST;
                pageToken = "ipsam";
                prettyPrint = false;
                quotaUser = "repellendus";
                userIp = "sapiente";
            }};            

            PlusActivitiesSearchResponse res = sdk.activities.plusActivitiesSearch(req, new PlusActivitiesSearchSecurity() {{
                option1 = new PlusActivitiesSearchSecurityOption1("quo", "odit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.activityFeed != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
