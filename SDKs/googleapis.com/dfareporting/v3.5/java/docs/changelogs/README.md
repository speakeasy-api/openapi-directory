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

            DfareportingChangeLogsGetRequest req = new DfareportingChangeLogsGetRequest("iure", "temporibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ea";
                alt = AltEnum.JSON;
                callback = "laudantium";
                fields = "qui";
                key = "libero";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "pariatur";
                uploadProtocol = "quod";
            }};            

            DfareportingChangeLogsGetResponse res = sdk.changeLogs.dfareportingChangeLogsGet(req, new DfareportingChangeLogsGetSecurity("modi", "vitae") {{
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

            DfareportingChangeLogsListRequest req = new DfareportingChangeLogsListRequest("delectus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nemo";
                action = DfareportingChangeLogsListActionEnum.ACTION_PUSH;
                alt = AltEnum.JSON;
                callback = "officiis";
                fields = "sed";
                ids = new String[]{{
                    add("saepe"),
                    add("labore"),
                    add("doloribus"),
                }};
                key = "facilis";
                maxChangeTime = "minima";
                maxResults = 773241L;
                minChangeTime = "facilis";
                oauthToken = "amet";
                objectIds = new String[]{{
                    add("fugiat"),
                    add("beatae"),
                }};
                objectType = DfareportingChangeLogsListObjectTypeEnum.OBJECT_SIZE;
                pageToken = "nisi";
                prettyPrint = false;
                quotaUser = "consectetur";
                searchString = "quos";
                uploadType = "delectus";
                uploadProtocol = "sunt";
                userProfileIds = new String[]{{
                    add("facere"),
                    add("distinctio"),
                    add("ducimus"),
                    add("atque"),
                }};
            }};            

            DfareportingChangeLogsListResponse res = sdk.changeLogs.dfareportingChangeLogsList(req, new DfareportingChangeLogsListSecurity("consectetur", "nemo") {{
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
