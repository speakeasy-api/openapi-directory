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

            DfareportingChangeLogsGetRequest req = new DfareportingChangeLogsGetRequest("eos", "odit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "maxime";
                alt = AltEnum.MEDIA;
                callback = "sapiente";
                fields = "maiores";
                key = "exercitationem";
                oauthToken = "ducimus";
                prettyPrint = false;
                quotaUser = "dolore";
                uploadType = "iste";
                uploadProtocol = "inventore";
            }};            

            DfareportingChangeLogsGetResponse res = sdk.changeLogs.dfareportingChangeLogsGet(req, new DfareportingChangeLogsGetSecurity("error", "id") {{
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

            DfareportingChangeLogsListRequest req = new DfareportingChangeLogsListRequest("harum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laborum";
                action = DfareportingChangeLogsListActionEnum.ACTION_DELETE;
                alt = AltEnum.PROTO;
                callback = "odio";
                fields = "eum";
                ids = new String[]{{
                    add("tenetur"),
                }};
                key = "accusantium";
                maxChangeTime = "quo";
                maxResults = 664501L;
                minChangeTime = "tempora";
                oauthToken = "pariatur";
                objectIds = new String[]{{
                    add("quis"),
                    add("aliquid"),
                }};
                objectType = DfareportingChangeLogsListObjectTypeEnum.OBJECT_BILLING_PROFILE;
                pageToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "dicta";
                searchString = "sit";
                uploadType = "adipisci";
                uploadProtocol = "inventore";
                userProfileIds = new String[]{{
                    add("iure"),
                    add("praesentium"),
                    add("perspiciatis"),
                    add("omnis"),
                }};
            }};            

            DfareportingChangeLogsListResponse res = sdk.changeLogs.dfareportingChangeLogsList(req, new DfareportingChangeLogsListSecurity("hic", "accusantium") {{
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
