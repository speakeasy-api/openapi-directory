# files

### Available Operations

* [dfareportingFilesGet](#dfareportingfilesget) - Retrieves a report file by its report ID and file ID. This method supports media download.
* [dfareportingFilesList](#dfareportingfileslist) - Lists files for a user profile.

## dfareportingFilesGet

Retrieves a report file by its report ID and file ID. This method supports media download.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingFilesGetRequest;
import org.openapis.openapi.models.operations.DfareportingFilesGetResponse;
import org.openapis.openapi.models.operations.DfareportingFilesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingFilesGetRequest req = new DfareportingFilesGetRequest("rem", "deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "necessitatibus";
                alt = AltEnum.PROTO;
                callback = "facilis";
                fields = "necessitatibus";
                key = "asperiores";
                oauthToken = "rem";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                uploadType = "quam";
                uploadProtocol = "earum";
            }};            

            DfareportingFilesGetResponse res = sdk.files.dfareportingFilesGet(req, new DfareportingFilesGetSecurity("velit", "fugiat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.file != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingFilesList

Lists files for a user profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingFilesListRequest;
import org.openapis.openapi.models.operations.DfareportingFilesListResponse;
import org.openapis.openapi.models.operations.DfareportingFilesListScopeEnum;
import org.openapis.openapi.models.operations.DfareportingFilesListSecurity;
import org.openapis.openapi.models.operations.DfareportingFilesListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingFilesListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingFilesListRequest req = new DfareportingFilesListRequest("pariatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quod";
                alt = AltEnum.PROTO;
                callback = "pariatur";
                fields = "dolor";
                key = "amet";
                maxResults = 948301L;
                oauthToken = "quasi";
                pageToken = "dicta";
                prettyPrint = false;
                quotaUser = "rerum";
                scope = DfareportingFilesListScopeEnum.ALL;
                sortField = DfareportingFilesListSortFieldEnum.LAST_MODIFIED_TIME;
                sortOrder = DfareportingFilesListSortOrderEnum.ASCENDING;
                uploadType = "voluptates";
                uploadProtocol = "alias";
            }};            

            DfareportingFilesListResponse res = sdk.files.dfareportingFilesList(req, new DfareportingFilesListSecurity("voluptatum", "aut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.fileList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
