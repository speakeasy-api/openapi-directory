# people

### Available Operations

* [plusPeopleGet](#pluspeopleget) - Get a person's profile. If your app uses scope https://www.googleapis.com/auth/plus.login, this method is guaranteed to return ageRange and language.
* [plusPeopleList](#pluspeoplelist) - List all of the people in the specified collection.
* [plusPeopleListByActivity](#pluspeoplelistbyactivity) - Shut down. See https://developers.google.com/+/api-shutdown for more details.
* [plusPeopleSearch](#pluspeoplesearch) - Shut down. See https://developers.google.com/+/api-shutdown for more details.

## plusPeopleGet

Get a person's profile. If your app uses scope https://www.googleapis.com/auth/plus.login, this method is guaranteed to return ageRange and language.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlusPeopleGetRequest;
import org.openapis.openapi.models.operations.PlusPeopleGetResponse;
import org.openapis.openapi.models.operations.PlusPeopleGetSecurity;
import org.openapis.openapi.models.operations.PlusPeopleGetSecurityOption1;
import org.openapis.openapi.models.operations.PlusPeopleGetSecurityOption2;
import org.openapis.openapi.models.operations.PlusPeopleGetSecurityOption3;
import org.openapis.openapi.models.operations.PlusPeopleGetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlusPeopleGetRequest req = new PlusPeopleGetRequest("beatae") {{
                alt = AltEnum.JSON;
                fields = "commodi";
                key = "molestiae";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "qui";
                userIp = "impedit";
            }};            

            PlusPeopleGetResponse res = sdk.people.plusPeopleGet(req, new PlusPeopleGetSecurity() {{
                option1 = new PlusPeopleGetSecurityOption1("cum", "esse") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.person != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## plusPeopleList

List all of the people in the specified collection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlusPeopleListCollectionEnum;
import org.openapis.openapi.models.operations.PlusPeopleListOrderByEnum;
import org.openapis.openapi.models.operations.PlusPeopleListRequest;
import org.openapis.openapi.models.operations.PlusPeopleListResponse;
import org.openapis.openapi.models.operations.PlusPeopleListSecurity;
import org.openapis.openapi.models.operations.PlusPeopleListSecurityOption1;
import org.openapis.openapi.models.operations.PlusPeopleListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlusPeopleListRequest req = new PlusPeopleListRequest(PlusPeopleListCollectionEnum.CONNECTED, "excepturi") {{
                alt = AltEnum.JSON;
                fields = "aspernatur";
                key = "perferendis";
                maxResults = 324141L;
                oauthToken = "natus";
                orderBy = PlusPeopleListOrderByEnum.ALPHABETICAL;
                pageToken = "iste";
                prettyPrint = false;
                quotaUser = "dolor";
                userIp = "natus";
            }};            

            PlusPeopleListResponse res = sdk.people.plusPeopleList(req, new PlusPeopleListSecurity() {{
                option1 = new PlusPeopleListSecurityOption1("laboriosam", "hic") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.peopleFeed != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## plusPeopleListByActivity

Shut down. See https://developers.google.com/+/api-shutdown for more details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlusPeopleListByActivityCollectionEnum;
import org.openapis.openapi.models.operations.PlusPeopleListByActivityRequest;
import org.openapis.openapi.models.operations.PlusPeopleListByActivityResponse;
import org.openapis.openapi.models.operations.PlusPeopleListByActivitySecurity;
import org.openapis.openapi.models.operations.PlusPeopleListByActivitySecurityOption1;
import org.openapis.openapi.models.operations.PlusPeopleListByActivitySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlusPeopleListByActivityRequest req = new PlusPeopleListByActivityRequest("saepe", PlusPeopleListByActivityCollectionEnum.RESHARERS) {{
                alt = AltEnum.JSON;
                fields = "in";
                key = "corporis";
                maxResults = 613064L;
                oauthToken = "iure";
                pageToken = "saepe";
                prettyPrint = false;
                quotaUser = "quidem";
                userIp = "architecto";
            }};            

            PlusPeopleListByActivityResponse res = sdk.people.plusPeopleListByActivity(req, new PlusPeopleListByActivitySecurity() {{
                option1 = new PlusPeopleListByActivitySecurityOption1("ipsa", "reiciendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.peopleFeed != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## plusPeopleSearch

Shut down. See https://developers.google.com/+/api-shutdown for more details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlusPeopleSearchRequest;
import org.openapis.openapi.models.operations.PlusPeopleSearchResponse;
import org.openapis.openapi.models.operations.PlusPeopleSearchSecurity;
import org.openapis.openapi.models.operations.PlusPeopleSearchSecurityOption1;
import org.openapis.openapi.models.operations.PlusPeopleSearchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlusPeopleSearchRequest req = new PlusPeopleSearchRequest("est") {{
                alt = AltEnum.JSON;
                fields = "mollitia";
                key = "laborum";
                language = "dolores";
                maxResults = 210382L;
                oauthToken = "corporis";
                pageToken = "explicabo";
                prettyPrint = false;
                quotaUser = "nobis";
                userIp = "enim";
            }};            

            PlusPeopleSearchResponse res = sdk.people.plusPeopleSearch(req, new PlusPeopleSearchSecurity() {{
                option1 = new PlusPeopleSearchSecurityOption1("omnis", "nemo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.peopleFeed != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
