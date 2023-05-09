# userProfiles

### Available Operations

* [dfareportingUserProfilesGet](#dfareportinguserprofilesget) - Gets one user profile by ID.
* [dfareportingUserProfilesList](#dfareportinguserprofileslist) - Retrieves list of user profiles for a user.

## dfareportingUserProfilesGet

Gets one user profile by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingUserProfilesGetRequest;
import org.openapis.openapi.models.operations.DfareportingUserProfilesGetResponse;
import org.openapis.openapi.models.operations.DfareportingUserProfilesGetSecurity;
import org.openapis.openapi.models.operations.DfareportingUserProfilesGetSecurityOption1;
import org.openapis.openapi.models.operations.DfareportingUserProfilesGetSecurityOption2;
import org.openapis.openapi.models.operations.DfareportingUserProfilesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingUserProfilesGetRequest req = new DfareportingUserProfilesGetRequest("animi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "expedita";
                alt = AltEnum.MEDIA;
                callback = "dolorem";
                fields = "eius";
                key = "impedit";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "expedita";
                uploadProtocol = "debitis";
            }};            

            DfareportingUserProfilesGetResponse res = sdk.userProfiles.dfareportingUserProfilesGet(req, new DfareportingUserProfilesGetSecurity() {{
                option1 = new DfareportingUserProfilesGetSecurityOption1("modi", "eligendi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.userProfile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingUserProfilesList

Retrieves list of user profiles for a user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingUserProfilesListRequest;
import org.openapis.openapi.models.operations.DfareportingUserProfilesListResponse;
import org.openapis.openapi.models.operations.DfareportingUserProfilesListSecurity;
import org.openapis.openapi.models.operations.DfareportingUserProfilesListSecurityOption1;
import org.openapis.openapi.models.operations.DfareportingUserProfilesListSecurityOption2;
import org.openapis.openapi.models.operations.DfareportingUserProfilesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingUserProfilesListRequest req = new DfareportingUserProfilesListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "quas";
                fields = "mollitia";
                key = "consequuntur";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "molestias";
                uploadType = "cum";
                uploadProtocol = "excepturi";
            }};            

            DfareportingUserProfilesListResponse res = sdk.userProfiles.dfareportingUserProfilesList(req, new DfareportingUserProfilesListSecurity() {{
                option1 = new DfareportingUserProfilesListSecurityOption1("saepe", "dolore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.userProfileList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
