# folders

### Available Operations

* [cloudresourcemanagerFoldersCreate](#cloudresourcemanagerfolderscreate) - Creates a Folder in the resource hierarchy. Returns an Operation which can be used to track the progress of the folder creation workflow. Upon success the Operation.response field will be populated with the created Folder. In order to succeed, the addition of this new Folder must not violate the Folder naming, height or fanout constraints. + The Folder's display_name must be distinct from all other Folders that share its parent. + The addition of the Folder must not cause the active Folder hierarchy to exceed a height of 10. Note, the full active + deleted Folder hierarchy is allowed to reach a height of 20; this provides additional headroom when moving folders that contain deleted folders. + The addition of the Folder must not cause the total number of Folders under its parent to exceed 300. If the operation fails due to a folder constraint violation, some errors may be returned by the CreateFolder request, with status code FAILED_PRECONDITION and an error description. Other folder constraint violations will be communicated in the Operation, with the specific PreconditionFailure returned via the details list in the Operation.error field. The caller must have `resourcemanager.folders.create` permission on the identified parent.
* [cloudresourcemanagerFoldersDelete](#cloudresourcemanagerfoldersdelete) - Requests deletion of a Folder. The Folder is moved into the DELETE_REQUESTED state immediately, and is deleted approximately 30 days later. This method may only be called on an empty Folder in the ACTIVE state, where a Folder is empty if it doesn't contain any Folders or Projects in the ACTIVE state. The caller must have `resourcemanager.folders.delete` permission on the identified folder.
* [cloudresourcemanagerFoldersGet](#cloudresourcemanagerfoldersget) - Retrieves a Folder identified by the supplied resource name. Valid Folder resource names have the format `folders/{folder_id}` (for example, `folders/1234`). The caller must have `resourcemanager.folders.get` permission on the identified folder.
* [cloudresourcemanagerFoldersGetIamPolicy](#cloudresourcemanagerfoldersgetiampolicy) - Gets the access control policy for a Folder. The returned policy may be empty if no such policy or resource exists. The `resource` field should be the Folder's resource name, e.g. "folders/1234". The caller must have `resourcemanager.folders.getIamPolicy` permission on the identified folder.
* [cloudresourcemanagerFoldersList](#cloudresourcemanagerfolderslist) - Lists the Folders that are direct descendants of supplied parent resource. List provides a strongly consistent view of the Folders underneath the specified parent resource. List returns Folders sorted based upon the (ascending) lexical ordering of their display_name. The caller must have `resourcemanager.folders.list` permission on the identified parent.
* [cloudresourcemanagerFoldersMove](#cloudresourcemanagerfoldersmove) - Moves a Folder under a new resource parent. Returns an Operation which can be used to track the progress of the folder move workflow. Upon success the Operation.response field will be populated with the moved Folder. Upon failure, a FolderOperationError categorizing the failure cause will be returned - if the failure occurs synchronously then the FolderOperationError will be returned via the Status.details field and if it occurs asynchronously then the FolderOperation will be returned via the Operation.error field. In addition, the Operation.metadata field will be populated with a FolderOperation message as an aid to stateless clients. Folder moves will be rejected if they violate either the naming, height or fanout constraints described in the CreateFolder documentation. The caller must have `resourcemanager.folders.move` permission on the folder's current and proposed new parent.
* [cloudresourcemanagerFoldersPatch](#cloudresourcemanagerfolderspatch) - Updates a Folder, changing its display_name. Changes to the folder display_name will be rejected if they violate either the display_name formatting rules or naming constraints described in the CreateFolder documentation. The Folder's display name must start and end with a letter or digit, may contain letters, digits, spaces, hyphens and underscores and can be between 3 and 30 characters. This is captured by the regular expression: `\p{L}\p{N}{1,28}[\p{L}\p{N}]`. The caller must have `resourcemanager.folders.update` permission on the identified folder. If the update fails due to the unique name constraint then a PreconditionFailure explaining this violation will be returned in the Status.details field.
* [cloudresourcemanagerFoldersSearch](#cloudresourcemanagerfolderssearch) - Search for folders that match specific filter criteria. Search provides an eventually consistent view of the folders a user has access to which meet the specified filter criteria. This will only return folders on which the caller has the permission `resourcemanager.folders.get`.
* [cloudresourcemanagerFoldersSetIamPolicy](#cloudresourcemanagerfolderssetiampolicy) - Sets the access control policy on a Folder, replacing any existing policy. The `resource` field should be the Folder's resource name, e.g. "folders/1234". The caller must have `resourcemanager.folders.setIamPolicy` permission on the identified folder.
* [cloudresourcemanagerFoldersTestIamPermissions](#cloudresourcemanagerfolderstestiampermissions) - Returns permissions that a caller has on the specified Folder. The `resource` field should be the Folder's resource name, e.g. "folders/1234". There are no permissions required for making this API call.
* [cloudresourcemanagerFoldersUndelete](#cloudresourcemanagerfoldersundelete) - Cancels the deletion request for a Folder. This method may only be called on a Folder in the DELETE_REQUESTED state. In order to succeed, the Folder's parent must be in the ACTIVE state. In addition, reintroducing the folder into the tree must not violate folder naming, height and fanout constraints described in the CreateFolder documentation. The caller must have `resourcemanager.folders.undelete` permission on the identified folder.

## cloudresourcemanagerFoldersCreate

Creates a Folder in the resource hierarchy. Returns an Operation which can be used to track the progress of the folder creation workflow. Upon success the Operation.response field will be populated with the created Folder. In order to succeed, the addition of this new Folder must not violate the Folder naming, height or fanout constraints. + The Folder's display_name must be distinct from all other Folders that share its parent. + The addition of the Folder must not cause the active Folder hierarchy to exceed a height of 10. Note, the full active + deleted Folder hierarchy is allowed to reach a height of 20; this provides additional headroom when moving folders that contain deleted folders. + The addition of the Folder must not cause the total number of Folders under its parent to exceed 300. If the operation fails due to a folder constraint violation, some errors may be returned by the CreateFolder request, with status code FAILED_PRECONDITION and an error description. Other folder constraint violations will be communicated in the Operation, with the specific PreconditionFailure returned via the details list in the Operation.error field. The caller must have `resourcemanager.folders.create` permission on the identified parent.

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
                    displayName = "delectus";
                    parent = "tempora";
                }};;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "minus";
                fields = "placeat";
                key = "voluptatum";
                oauthToken = "iusto";
                parent = "excepturi";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "recusandae";
                uploadProtocol = "temporibus";
            }};            

            CloudresourcemanagerFoldersCreateResponse res = sdk.folders.cloudresourcemanagerFoldersCreate(req, new CloudresourcemanagerFoldersCreateSecurity("ab", "quis") {{
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

## cloudresourcemanagerFoldersDelete

Requests deletion of a Folder. The Folder is moved into the DELETE_REQUESTED state immediately, and is deleted approximately 30 days later. This method may only be called on an empty Folder in the ACTIVE state, where a Folder is empty if it doesn't contain any Folders or Projects in the ACTIVE state. The caller must have `resourcemanager.folders.delete` permission on the identified folder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersDeleteRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersDeleteResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerFoldersDeleteRequest req = new CloudresourcemanagerFoldersDeleteRequest("veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "perferendis";
                alt = AltEnum.MEDIA;
                callback = "repellendus";
                fields = "sapiente";
                key = "quo";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "at";
                uploadProtocol = "maiores";
            }};            

            CloudresourcemanagerFoldersDeleteResponse res = sdk.folders.cloudresourcemanagerFoldersDelete(req, new CloudresourcemanagerFoldersDeleteSecurity("molestiae", "quod") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.folder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudresourcemanagerFoldersGet

Retrieves a Folder identified by the supplied resource name. Valid Folder resource names have the format `folders/{folder_id}` (for example, `folders/1234`). The caller must have `resourcemanager.folders.get` permission on the identified folder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersGetRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersGetResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersGetSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersGetSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerFoldersGetRequest req = new CloudresourcemanagerFoldersGetRequest("quod") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "totam";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                fields = "dicta";
                key = "nam";
                oauthToken = "officia";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "fugit";
                uploadProtocol = "deleniti";
            }};            

            CloudresourcemanagerFoldersGetResponse res = sdk.folders.cloudresourcemanagerFoldersGet(req, new CloudresourcemanagerFoldersGetSecurity() {{
                option1 = new CloudresourcemanagerFoldersGetSecurityOption1("hic", "optio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.folder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudresourcemanagerFoldersGetIamPolicy

Gets the access control policy for a Folder. The returned policy may be empty if no such policy or resource exists. The `resource` field should be the Folder's resource name, e.g. "folders/1234". The caller must have `resourcemanager.folders.getIamPolicy` permission on the identified folder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersGetIamPolicyRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersGetIamPolicyResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersGetIamPolicySecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersGetIamPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GetIamPolicyRequest;
import org.openapis.openapi.models.shared.GetPolicyOptions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerFoldersGetIamPolicyRequest req = new CloudresourcemanagerFoldersGetIamPolicyRequest("totam") {{
                dollarXgafv = XgafvEnum.ONE;
                getIamPolicyRequest = new GetIamPolicyRequest() {{
                    options = new GetPolicyOptions() {{
                        requestedPolicyVersion = 414662;
                    }};;
                }};;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "qui";
                fields = "impedit";
                key = "cum";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "excepturi";
                uploadProtocol = "aspernatur";
            }};            

            CloudresourcemanagerFoldersGetIamPolicyResponse res = sdk.folders.cloudresourcemanagerFoldersGetIamPolicy(req, new CloudresourcemanagerFoldersGetIamPolicySecurity() {{
                option1 = new CloudresourcemanagerFoldersGetIamPolicySecurityOption1("perferendis", "ad") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudresourcemanagerFoldersList

Lists the Folders that are direct descendants of supplied parent resource. List provides a strongly consistent view of the Folders underneath the specified parent resource. List returns Folders sorted based upon the (ascending) lexical ordering of their display_name. The caller must have `resourcemanager.folders.list` permission on the identified parent.

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
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sed";
                alt = AltEnum.MEDIA;
                callback = "dolor";
                fields = "natus";
                key = "laboriosam";
                oauthToken = "hic";
                pageSize = 902599L;
                pageToken = "fuga";
                parent = "in";
                prettyPrint = false;
                quotaUser = "corporis";
                showDeleted = false;
                uploadType = "iste";
                uploadProtocol = "iure";
            }};            

            CloudresourcemanagerFoldersListResponse res = sdk.folders.cloudresourcemanagerFoldersList(req, new CloudresourcemanagerFoldersListSecurity() {{
                option1 = new CloudresourcemanagerFoldersListSecurityOption1("saepe", "quidem") {{
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

## cloudresourcemanagerFoldersMove

Moves a Folder under a new resource parent. Returns an Operation which can be used to track the progress of the folder move workflow. Upon success the Operation.response field will be populated with the moved Folder. Upon failure, a FolderOperationError categorizing the failure cause will be returned - if the failure occurs synchronously then the FolderOperationError will be returned via the Status.details field and if it occurs asynchronously then the FolderOperation will be returned via the Operation.error field. In addition, the Operation.metadata field will be populated with a FolderOperation message as an aid to stateless clients. Folder moves will be rejected if they violate either the naming, height or fanout constraints described in the CreateFolder documentation. The caller must have `resourcemanager.folders.move` permission on the folder's current and proposed new parent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersMoveRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersMoveResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersMoveSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.MoveFolderRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerFoldersMoveRequest req = new CloudresourcemanagerFoldersMoveRequest("architecto") {{
                dollarXgafv = XgafvEnum.ONE;
                moveFolderRequest = new MoveFolderRequest() {{
                    destinationParent = "reiciendis";
                }};;
                accessToken = "est";
                alt = AltEnum.MEDIA;
                callback = "laborum";
                fields = "dolores";
                key = "dolorem";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "nobis";
                uploadProtocol = "enim";
            }};            

            CloudresourcemanagerFoldersMoveResponse res = sdk.folders.cloudresourcemanagerFoldersMove(req, new CloudresourcemanagerFoldersMoveSecurity("omnis", "nemo") {{
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

## cloudresourcemanagerFoldersPatch

Updates a Folder, changing its display_name. Changes to the folder display_name will be rejected if they violate either the display_name formatting rules or naming constraints described in the CreateFolder documentation. The Folder's display name must start and end with a letter or digit, may contain letters, digits, spaces, hyphens and underscores and can be between 3 and 30 characters. This is captured by the regular expression: `\p{L}\p{N}{1,28}[\p{L}\p{N}]`. The caller must have `resourcemanager.folders.update` permission on the identified folder. If the update fails due to the unique name constraint then a PreconditionFailure explaining this violation will be returned in the Status.details field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersPatchRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersPatchResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FolderInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerFoldersPatchRequest req = new CloudresourcemanagerFoldersPatchRequest("minima") {{
                dollarXgafv = XgafvEnum.TWO;
                folderInput = new FolderInput() {{
                    displayName = "accusantium";
                    parent = "iure";
                }};;
                accessToken = "culpa";
                alt = AltEnum.PROTO;
                callback = "sapiente";
                fields = "architecto";
                key = "mollitia";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "culpa";
                updateMask = "consequuntur";
                uploadType = "repellat";
                uploadProtocol = "mollitia";
            }};            

            CloudresourcemanagerFoldersPatchResponse res = sdk.folders.cloudresourcemanagerFoldersPatch(req, new CloudresourcemanagerFoldersPatchSecurity("occaecati", "numquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.folder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudresourcemanagerFoldersSearch

Search for folders that match specific filter criteria. Search provides an eventually consistent view of the folders a user has access to which meet the specified filter criteria. This will only return folders on which the caller has the permission `resourcemanager.folders.get`.

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
import org.openapis.openapi.models.shared.SearchFoldersRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerFoldersSearchRequest req = new CloudresourcemanagerFoldersSearchRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                searchFoldersRequest = new SearchFoldersRequest() {{
                    pageSize = 466311;
                    pageToken = "molestiae";
                    query = "velit";
                }};;
                accessToken = "error";
                alt = AltEnum.JSON;
                callback = "quis";
                fields = "vitae";
                key = "laborum";
                oauthToken = "animi";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "odit";
                uploadProtocol = "quo";
            }};            

            CloudresourcemanagerFoldersSearchResponse res = sdk.folders.cloudresourcemanagerFoldersSearch(req, new CloudresourcemanagerFoldersSearchSecurity() {{
                option1 = new CloudresourcemanagerFoldersSearchSecurityOption1("sequi", "tenetur") {{
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

## cloudresourcemanagerFoldersSetIamPolicy

Sets the access control policy on a Folder, replacing any existing policy. The `resource` field should be the Folder's resource name, e.g. "folders/1234". The caller must have `resourcemanager.folders.setIamPolicy` permission on the identified folder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersSetIamPolicyRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersSetIamPolicyResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditConfig;
import org.openapis.openapi.models.shared.AuditLogConfig;
import org.openapis.openapi.models.shared.AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.SetIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerFoldersSetIamPolicyRequest req = new CloudresourcemanagerFoldersSetIamPolicyRequest("ipsam") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("error"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "laborum";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("voluptatibus"),
                                            add("vero"),
                                            add("nihil"),
                                            add("praesentium"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "ipsa";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("cum"),
                                            add("perferendis"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ut"),
                                            add("maiores"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dolore"),
                                            add("iusto"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "harum";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("commodi"),
                                            add("repudiandae"),
                                            add("quae"),
                                            add("ipsum"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("excepturi"),
                                            add("pariatur"),
                                            add("modi"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "rem";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "quasi";
                                    expression = "repudiandae";
                                    location = "sint";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("incidunt"),
                                    add("enim"),
                                    add("consequatur"),
                                    add("est"),
                                }};
                                role = "quibusdam";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "explicabo";
                                    expression = "deserunt";
                                    location = "distinctio";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("modi"),
                                    add("qui"),
                                }};
                                role = "aliquid";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "cupiditate";
                                    expression = "quos";
                                    location = "perferendis";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("ipsam"),
                                    add("alias"),
                                    add("fugit"),
                                    add("dolorum"),
                                }};
                                role = "excepturi";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "tempora";
                                    expression = "facilis";
                                    location = "tempore";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("eum"),
                                    add("non"),
                                    add("eligendi"),
                                    add("sint"),
                                }};
                                role = "aliquid";
                            }}),
                        }};
                        etag = "provident";
                        version = 896039;
                    }};;
                    updateMask = "sint";
                }};;
                accessToken = "officia";
                alt = AltEnum.JSON;
                callback = "debitis";
                fields = "a";
                key = "dolorum";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "illum";
                uploadProtocol = "maiores";
            }};            

            CloudresourcemanagerFoldersSetIamPolicyResponse res = sdk.folders.cloudresourcemanagerFoldersSetIamPolicy(req, new CloudresourcemanagerFoldersSetIamPolicySecurity("rerum", "dicta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudresourcemanagerFoldersTestIamPermissions

Returns permissions that a caller has on the specified Folder. The `resource` field should be the Folder's resource name, e.g. "folders/1234". There are no permissions required for making this API call.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerFoldersTestIamPermissionsRequest req = new CloudresourcemanagerFoldersTestIamPermissionsRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("ea"),
                        add("aliquid"),
                        add("laborum"),
                        add("accusamus"),
                    }};
                }};;
                accessToken = "non";
                alt = AltEnum.MEDIA;
                callback = "enim";
                fields = "accusamus";
                key = "delectus";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "nam";
                uploadProtocol = "id";
            }};            

            CloudresourcemanagerFoldersTestIamPermissionsResponse res = sdk.folders.cloudresourcemanagerFoldersTestIamPermissions(req, new CloudresourcemanagerFoldersTestIamPermissionsSecurity("blanditiis", "deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.testIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudresourcemanagerFoldersUndelete

Cancels the deletion request for a Folder. This method may only be called on a Folder in the DELETE_REQUESTED state. In order to succeed, the Folder's parent must be in the ACTIVE state. In addition, reintroducing the folder into the tree must not violate folder naming, height and fanout constraints described in the CreateFolder documentation. The caller must have `resourcemanager.folders.undelete` permission on the identified folder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersUndeleteRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersUndeleteResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerFoldersUndeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerFoldersUndeleteRequest req = new CloudresourcemanagerFoldersUndeleteRequest("sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("nisi", "vel");
                    put("natus", "omnis");
                    put("molestiae", "perferendis");
                }};
                accessToken = "nihil";
                alt = AltEnum.JSON;
                callback = "distinctio";
                fields = "id";
                key = "labore";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "natus";
                uploadProtocol = "nobis";
            }};            

            CloudresourcemanagerFoldersUndeleteResponse res = sdk.folders.cloudresourcemanagerFoldersUndelete(req, new CloudresourcemanagerFoldersUndeleteSecurity("eum", "vero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.folder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
