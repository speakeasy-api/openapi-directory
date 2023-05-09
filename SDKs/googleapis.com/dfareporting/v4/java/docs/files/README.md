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

            DfareportingFilesGetRequest req = new DfareportingFilesGetRequest("alias", "est") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dignissimos";
                alt = AltEnum.PROTO;
                callback = "quo";
                fields = "saepe";
                key = "tempore";
                oauthToken = "sunt";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "nulla";
                uploadProtocol = "architecto";
            }};            

            DfareportingFilesGetResponse res = sdk.files.dfareportingFilesGet(req, new DfareportingFilesGetSecurity("accusantium", "a") {{
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

            DfareportingFilesListRequest req = new DfareportingFilesListRequest("et") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "delectus";
                alt = AltEnum.JSON;
                callback = "laboriosam";
                fields = "neque";
                key = "ab";
                maxResults = 787715L;
                oauthToken = "nihil";
                pageToken = "quisquam";
                prettyPrint = false;
                quotaUser = "aperiam";
                scope = DfareportingFilesListScopeEnum.SHARED_WITH_ME;
                sortField = DfareportingFilesListSortFieldEnum.ID;
                sortOrder = DfareportingFilesListSortOrderEnum.DESCENDING;
                uploadType = "molestias";
                uploadProtocol = "ducimus";
            }};            

            DfareportingFilesListResponse res = sdk.files.dfareportingFilesList(req, new DfareportingFilesListSecurity("dolorem", "sapiente") {{
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
