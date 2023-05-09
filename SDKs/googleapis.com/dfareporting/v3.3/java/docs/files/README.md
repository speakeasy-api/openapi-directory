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

            DfareportingFilesGetRequest req = new DfareportingFilesGetRequest("eos", "id") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quo";
                alt = AltEnum.JSON;
                callback = "magnam";
                fields = "praesentium";
                key = "numquam";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "id";
                uploadType = "itaque";
                uploadProtocol = "molestias";
            }};            

            DfareportingFilesGetResponse res = sdk.files.dfareportingFilesGet(req, new DfareportingFilesGetSecurity("assumenda", "praesentium") {{
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

            DfareportingFilesListRequest req = new DfareportingFilesListRequest("occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "veniam";
                alt = AltEnum.JSON;
                callback = "nobis";
                fields = "quos";
                key = "provident";
                maxResults = 409918L;
                oauthToken = "consequuntur";
                pageToken = "delectus";
                prettyPrint = false;
                quotaUser = "quaerat";
                scope = DfareportingFilesListScopeEnum.MINE;
                sortField = DfareportingFilesListSortFieldEnum.LAST_MODIFIED_TIME;
                sortOrder = DfareportingFilesListSortOrderEnum.ASCENDING;
                uploadType = "rerum";
                uploadProtocol = "a";
            }};            

            DfareportingFilesListResponse res = sdk.files.dfareportingFilesList(req, new DfareportingFilesListSecurity("ad", "et") {{
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
