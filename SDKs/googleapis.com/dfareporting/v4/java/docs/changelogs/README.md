# changeLogs

### Available Operations

* [dfareportingChangeLogsGet](#dfareportingchangelogsget) - Gets one change log by ID.
* [dfareportingChangeLogsList](#dfareportingchangelogslist) - Retrieves a list of change logs. This method supports paging.

## dfareportingChangeLogsGet

Gets one change log by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingChangeLogsGetRequest;
import org.openapis.openapi.models.operations.DfareportingChangeLogsGetResponse;
import org.openapis.openapi.models.operations.DfareportingChangeLogsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingChangeLogsGetRequest req = new DfareportingChangeLogsGetRequest("tempora", "nobis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "atque";
                fields = "at";
                key = "rem";
                oauthToken = "exercitationem";
                prettyPrint = false;
                quotaUser = "tempore";
                uploadType = "eos";
                uploadProtocol = "laboriosam";
            }};            

            DfareportingChangeLogsGetResponse res = sdk.changeLogs.dfareportingChangeLogsGet(req, new DfareportingChangeLogsGetSecurity("aperiam", "minima") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.changeLog != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingChangeLogsList

Retrieves a list of change logs. This method supports paging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingChangeLogsListActionEnum;
import org.openapis.openapi.models.operations.DfareportingChangeLogsListObjectTypeEnum;
import org.openapis.openapi.models.operations.DfareportingChangeLogsListRequest;
import org.openapis.openapi.models.operations.DfareportingChangeLogsListResponse;
import org.openapis.openapi.models.operations.DfareportingChangeLogsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingChangeLogsListRequest req = new DfareportingChangeLogsListRequest("perspiciatis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "assumenda";
                action = DfareportingChangeLogsListActionEnum.ACTION_MARK_AS_DEFAULT;
                alt = AltEnum.JSON;
                callback = "ad";
                fields = "voluptates";
                ids = new String[]{{
                    add("eligendi"),
                }};
                key = "consequuntur";
                maxChangeTime = "quae";
                maxResults = 329836L;
                minChangeTime = "sint";
                oauthToken = "minus";
                objectIds = new String[]{{
                    add("porro"),
                    add("nesciunt"),
                    add("maiores"),
                }};
                objectType = DfareportingChangeLogsListObjectTypeEnum.OBJECT_SUBACCOUNT;
                pageToken = "autem";
                prettyPrint = false;
                quotaUser = "esse";
                searchString = "officiis";
                uploadType = "aperiam";
                uploadProtocol = "itaque";
                userProfileIds = new String[]{{
                    add("corporis"),
                }};
            }};            

            DfareportingChangeLogsListResponse res = sdk.changeLogs.dfareportingChangeLogsList(req, new DfareportingChangeLogsListSecurity("consequuntur", "odio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.changeLogsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
