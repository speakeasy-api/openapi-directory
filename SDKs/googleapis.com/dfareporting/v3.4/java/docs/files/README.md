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

            DfareportingFilesGetRequest req = new DfareportingFilesGetRequest("quod", "error") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "beatae";
                alt = AltEnum.PROTO;
                callback = "veniam";
                fields = "animi";
                key = "delectus";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "eos";
                uploadType = "id";
                uploadProtocol = "commodi";
            }};            

            DfareportingFilesGetResponse res = sdk.files.dfareportingFilesGet(req, new DfareportingFilesGetSecurity("quo", "aliquam") {{
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

            DfareportingFilesListRequest req = new DfareportingFilesListRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "numquam";
                alt = AltEnum.MEDIA;
                callback = "id";
                fields = "itaque";
                key = "molestias";
                maxResults = 826117L;
                oauthToken = "praesentium";
                pageToken = "occaecati";
                prettyPrint = false;
                quotaUser = "eos";
                scope = DfareportingFilesListScopeEnum.MINE;
                sortField = DfareportingFilesListSortFieldEnum.ID;
                sortOrder = DfareportingFilesListSortOrderEnum.DESCENDING;
                uploadType = "quos";
                uploadProtocol = "provident";
            }};            

            DfareportingFilesListResponse res = sdk.files.dfareportingFilesList(req, new DfareportingFilesListSecurity("ea", "consequuntur") {{
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
