# folders

### Available Operations

* [cloudresourcemanagerFoldersCreate](#cloudresourcemanagerfolderscreate) - Creates a folder in the resource hierarchy. Returns an `Operation` which can be used to track the progress of the folder creation workflow. Upon success, the `Operation.response` field will be populated with the created Folder. In order to succeed, the addition of this new folder must not violate the folder naming, height, or fanout constraints. + The folder's `display_name` must be distinct from all other folders that share its parent. + The addition of the folder must not cause the active folder hierarchy to exceed a height of 10. Note, the full active + deleted folder hierarchy is allowed to reach a height of 20; this provides additional headroom when moving folders that contain deleted folders. + The addition of the folder must not cause the total number of folders under its parent to exceed 300. If the operation fails due to a folder constraint violation, some errors may be returned by the `CreateFolder` request, with status code `FAILED_PRECONDITION` and an error description. Other folder constraint violations will be communicated in the `Operation`, with the specific `PreconditionFailure` returned in the details list in the `Operation.error` field. The caller must have `resourcemanager.folders.create` permission on the identified parent.
* [cloudresourcemanagerFoldersList](#cloudresourcemanagerfolderslist) - Lists the folders that are direct descendants of supplied parent resource. `list()` provides a strongly consistent view of the folders underneath the specified parent resource. `list()` returns folders sorted based upon the (ascending) lexical ordering of their display_name. The caller must have `resourcemanager.folders.list` permission on the identified parent.
* [cloudresourcemanagerFoldersSearch](#cloudresourcemanagerfolderssearch) - Search for folders that match specific filter criteria. `search()` provides an eventually consistent view of the folders a user has access to which meet the specified filter criteria. This will only return folders on which the caller has the permission `resourcemanager.folders.get`.

## cloudresourcemanagerFoldersCreate

Creates a folder in the resource hierarchy. Returns an `Operation` which can be used to track the progress of the folder creation workflow. Upon success, the `Operation.response` field will be populated with the created Folder. In order to succeed, the addition of this new folder must not violate the folder naming, height, or fanout constraints. + The folder's `display_name` must be distinct from all other folders that share its parent. + The addition of the folder must not cause the active folder hierarchy to exceed a height of 10. Note, the full active + deleted folder hierarchy is allowed to reach a height of 20; this provides additional headroom when moving folders that contain deleted folders. + The addition of the folder must not cause the total number of folders under its parent to exceed 300. If the operation fails due to a folder constraint violation, some errors may be returned by the `CreateFolder` request, with status code `FAILED_PRECONDITION` and an error description. Other folder constraint violations will be communicated in the `Operation`, with the specific `PreconditionFailure` returned in the details list in the `Operation.error` field. The caller must have `resourcemanager.folders.create` permission on the identified parent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersCreateRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersCreateResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FolderInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerFoldersCreateRequest req = new CloudresourcemanagerFoldersCreateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                folderInput = new FolderInput() {{
                    displayName = "deserunt";
                    parent = "perferendis";
                }};;
                accessToken = "ipsam";
                alt = AltEnum.PROTO;
                callback = "sapiente";
                fields = "quo";
                key = "odit";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "maiores";
                uploadProtocol = "molestiae";
            }};            

            CloudresourcemanagerFoldersCreateResponse res = sdk.folders.cloudresourcemanagerFoldersCreate(req, new CloudresourcemanagerFoldersCreateSecurity("quod", "quod") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudresourcemanagerFoldersList

Lists the folders that are direct descendants of supplied parent resource. `list()` provides a strongly consistent view of the folders underneath the specified parent resource. `list()` returns folders sorted based upon the (ascending) lexical ordering of their display_name. The caller must have `resourcemanager.folders.list` permission on the identified parent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersListRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersListResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersListSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersListSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerFoldersListRequest req = new CloudresourcemanagerFoldersListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "totam";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                fields = "dicta";
                key = "nam";
                oauthToken = "officia";
                pageSize = 582020L;
                pageToken = "fugit";
                parent = "deleniti";
                prettyPrint = false;
                quotaUser = "hic";
                showDeleted = false;
                uploadType = "optio";
                uploadProtocol = "totam";
            }};            

            CloudresourcemanagerFoldersListResponse res = sdk.folders.cloudresourcemanagerFoldersList(req, new CloudresourcemanagerFoldersListSecurity() {{
                option1 = new CloudresourcemanagerFoldersListSecurityOption1("beatae", "commodi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listFoldersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudresourcemanagerFoldersSearch

Search for folders that match specific filter criteria. `search()` provides an eventually consistent view of the folders a user has access to which meet the specified filter criteria. This will only return folders on which the caller has the permission `resourcemanager.folders.get`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersSearchRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersSearchResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersSearchSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersSearchSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersSearchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerFoldersSearchRequest req = new CloudresourcemanagerFoldersSearchRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "impedit";
                fields = "cum";
                key = "esse";
                oauthToken = "ipsum";
                pageSize = 568434L;
                pageToken = "aspernatur";
                prettyPrint = false;
                query = "perferendis";
                quotaUser = "ad";
                uploadType = "natus";
                uploadProtocol = "sed";
            }};            

            CloudresourcemanagerFoldersSearchResponse res = sdk.folders.cloudresourcemanagerFoldersSearch(req, new CloudresourcemanagerFoldersSearchSecurity() {{
                option1 = new CloudresourcemanagerFoldersSearchSecurityOption1("iste", "dolor") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.searchFoldersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
