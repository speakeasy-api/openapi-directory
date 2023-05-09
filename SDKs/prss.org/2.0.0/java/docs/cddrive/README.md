# cdDrive

## Overview

ContentDepot Drive functionality for uploading and stating content files for use in other API operations.

### Available Operations

* [deleteApiV2CddriveFilesFileId](#deleteapiv2cddrivefilesfileid) - Delete a file.
* [deleteApiV2CddriveFoldersFolderId](#deleteapiv2cddrivefoldersfolderid) - UNDER DEVELOPMENT - Delete a folder.
* [getApiV2CddriveFilesFileId](#getapiv2cddrivefilesfileid) - Get file information.
* [getApiV2CddriveFilesFileIdContent](#getapiv2cddrivefilesfileidcontent) - UNDER DEVELOPMENT - Download a file.
* [getApiV2CddriveFoldersFolderId](#getapiv2cddrivefoldersfolderid) - UNDER DEVELOPMENT - Get folder information.
* [getApiV2CddriveFoldersFolderIdItems](#getapiv2cddrivefoldersfolderiditems) - Get the items in the folder.
* [postApiV2CddriveFilesContent](#postapiv2cddrivefilescontent) - Upload a file.
* [postApiV2CddriveFolders](#postapiv2cddrivefolders) - Create a folder.

## deleteApiV2CddriveFilesFileId

Delete a file from the customer's private CD Drive.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApiV2CddriveFilesFileIdRequest;
import org.openapis.openapi.models.operations.DeleteApiV2CddriveFilesFileIdResponse;
import org.openapis.openapi.models.operations.DeleteApiV2CddriveFilesFileIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteApiV2CddriveFilesFileIdRequest req = new DeleteApiV2CddriveFilesFileIdRequest(645894L);            

            DeleteApiV2CddriveFilesFileIdResponse res = sdk.cdDrive.deleteApiV2CddriveFilesFileId(req, new DeleteApiV2CddriveFilesFileIdSecurity("suscipit") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApiV2CddriveFoldersFolderId

Delete a file from the customer's private CD Drive.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApiV2CddriveFoldersFolderIdRequest;
import org.openapis.openapi.models.operations.DeleteApiV2CddriveFoldersFolderIdResponse;
import org.openapis.openapi.models.operations.DeleteApiV2CddriveFoldersFolderIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteApiV2CddriveFoldersFolderIdRequest req = new DeleteApiV2CddriveFoldersFolderIdRequest(437587L) {{
                recursive = false;
            }};            

            DeleteApiV2CddriveFoldersFolderIdResponse res = sdk.cdDrive.deleteApiV2CddriveFoldersFolderId(req, new DeleteApiV2CddriveFoldersFolderIdSecurity("magnam") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV2CddriveFilesFileId

Get the information about a file in the customer's private CD Drive.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV2CddriveFilesFileIdRequest;
import org.openapis.openapi.models.operations.GetApiV2CddriveFilesFileIdResponse;
import org.openapis.openapi.models.operations.GetApiV2CddriveFilesFileIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV2CddriveFilesFileIdRequest req = new GetApiV2CddriveFilesFileIdRequest(891773L);            

            GetApiV2CddriveFilesFileIdResponse res = sdk.cdDrive.getApiV2CddriveFilesFileId(req, new GetApiV2CddriveFilesFileIdSecurity("ipsa") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.cdDriveFile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV2CddriveFilesFileIdContent

Download a file from the customer's private CD Drive.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV2CddriveFilesFileIdContentRequest;
import org.openapis.openapi.models.operations.GetApiV2CddriveFilesFileIdContentResponse;
import org.openapis.openapi.models.operations.GetApiV2CddriveFilesFileIdContentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV2CddriveFilesFileIdContentRequest req = new GetApiV2CddriveFilesFileIdContentRequest(963663L) {{
                range = "tempora";
            }};            

            GetApiV2CddriveFilesFileIdContentResponse res = sdk.cdDrive.getApiV2CddriveFilesFileIdContent(req, new GetApiV2CddriveFilesFileIdContentSecurity("suscipit") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getApiV2CddriveFilesFileIdContent200ApplicationOctetStreamBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV2CddriveFoldersFolderId

Get the information about a folder in the customer's private CD Drive.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV2CddriveFoldersFolderIdRequest;
import org.openapis.openapi.models.operations.GetApiV2CddriveFoldersFolderIdResponse;
import org.openapis.openapi.models.operations.GetApiV2CddriveFoldersFolderIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV2CddriveFoldersFolderIdRequest req = new GetApiV2CddriveFoldersFolderIdRequest(477665L);            

            GetApiV2CddriveFoldersFolderIdResponse res = sdk.cdDrive.getApiV2CddriveFoldersFolderId(req, new GetApiV2CddriveFoldersFolderIdSecurity("minus") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.cdDriveFolder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV2CddriveFoldersFolderIdItems

Get the information about a folder in the customer's private CD Drive.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV2CddriveFoldersFolderIdItemsRequest;
import org.openapis.openapi.models.operations.GetApiV2CddriveFoldersFolderIdItemsResponse;
import org.openapis.openapi.models.operations.GetApiV2CddriveFoldersFolderIdItemsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV2CddriveFoldersFolderIdItemsRequest req = new GetApiV2CddriveFoldersFolderIdItemsRequest(812169L) {{
                limit = 528895;
                offset = 479977;
            }};            

            GetApiV2CddriveFoldersFolderIdItemsResponse res = sdk.cdDrive.getApiV2CddriveFoldersFolderIdItems(req, new GetApiV2CddriveFoldersFolderIdItemsSecurity("excepturi") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getApiV2CddriveFoldersFolderIdItems200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV2CddriveFilesContent

Upload a file to the customer's private CD Drive.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV2CddriveFilesContentRequest;
import org.openapis.openapi.models.operations.PostApiV2CddriveFilesContentRequestBody;
import org.openapis.openapi.models.operations.PostApiV2CddriveFilesContentRequestBodyFile;
import org.openapis.openapi.models.operations.PostApiV2CddriveFilesContentResponse;
import org.openapis.openapi.models.operations.PostApiV2CddriveFilesContentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV2CddriveFilesContentRequest req = new PostApiV2CddriveFilesContentRequest() {{
                contentMd5 = "nisi";
                requestBody = new PostApiV2CddriveFilesContentRequestBody() {{
                    file = new PostApiV2CddriveFilesContentRequestBodyFile("recusandae".getBytes(), "temporibus");;
                    name = "Erica Bogisich III";
                    parentId = 832620L;
                }};;
            }};            

            PostApiV2CddriveFilesContentResponse res = sdk.cdDrive.postApiV2CddriveFilesContent(req, new PostApiV2CddriveFilesContentSecurity("sapiente") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.cdDriveFile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV2CddriveFolders

Create a new folder in the customer's private CD Drive.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV2CddriveFoldersRequestBody;
import org.openapis.openapi.models.operations.PostApiV2CddriveFoldersResponse;
import org.openapis.openapi.models.operations.PostApiV2CddriveFoldersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV2CddriveFoldersRequestBody req = new PostApiV2CddriveFoldersRequestBody() {{
                name = "Fred Strosin";
                parentId = 473608L;
            }};            

            PostApiV2CddriveFoldersResponse res = sdk.cdDrive.postApiV2CddriveFolders(req, new PostApiV2CddriveFoldersSecurity("quod") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.cdDriveFolder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
