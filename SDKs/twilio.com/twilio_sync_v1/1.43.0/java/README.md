# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDocumentCreateDocumentRequest;
import org.openapis.openapi.models.operations.CreateDocumentRequest;
import org.openapis.openapi.models.operations.CreateDocumentResponse;
import org.openapis.openapi.models.operations.CreateDocumentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDocumentRequest req = new CreateDocumentRequest("corrupti") {{
                requestBody = new CreateDocumentCreateDocumentRequest() {{
                    data = "provident";
                    ttl = 715190L;
                    uniqueName = "quibusdam";
                }};;
            }};            

            CreateDocumentResponse res = sdk.createDocument(req, new CreateDocumentSecurity("unde", "nulla") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.syncV1ServiceDocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createDocument](docs/sdk/README.md#createdocument)
* [createService](docs/sdk/README.md#createservice)
* [createStreamMessage](docs/sdk/README.md#createstreammessage) - Create a new Stream Message.
* [createSyncList](docs/sdk/README.md#createsynclist)
* [createSyncListItem](docs/sdk/README.md#createsynclistitem)
* [createSyncMap](docs/sdk/README.md#createsyncmap)
* [createSyncMapItem](docs/sdk/README.md#createsyncmapitem)
* [createSyncStream](docs/sdk/README.md#createsyncstream) - Create a new Stream.
* [deleteDocument](docs/sdk/README.md#deletedocument)
* [deleteDocumentPermission](docs/sdk/README.md#deletedocumentpermission) - Delete a specific Sync Document Permission.
* [deleteService](docs/sdk/README.md#deleteservice)
* [deleteSyncList](docs/sdk/README.md#deletesynclist)
* [deleteSyncListItem](docs/sdk/README.md#deletesynclistitem)
* [deleteSyncListPermission](docs/sdk/README.md#deletesynclistpermission) - Delete a specific Sync List Permission.
* [deleteSyncMap](docs/sdk/README.md#deletesyncmap)
* [deleteSyncMapItem](docs/sdk/README.md#deletesyncmapitem)
* [deleteSyncMapPermission](docs/sdk/README.md#deletesyncmappermission) - Delete a specific Sync Map Permission.
* [deleteSyncStream](docs/sdk/README.md#deletesyncstream) - Delete a specific Stream.
* [fetchDocument](docs/sdk/README.md#fetchdocument)
* [fetchDocumentPermission](docs/sdk/README.md#fetchdocumentpermission) - Fetch a specific Sync Document Permission.
* [fetchService](docs/sdk/README.md#fetchservice)
* [fetchSyncList](docs/sdk/README.md#fetchsynclist)
* [fetchSyncListItem](docs/sdk/README.md#fetchsynclistitem)
* [fetchSyncListPermission](docs/sdk/README.md#fetchsynclistpermission) - Fetch a specific Sync List Permission.
* [fetchSyncMap](docs/sdk/README.md#fetchsyncmap)
* [fetchSyncMapItem](docs/sdk/README.md#fetchsyncmapitem)
* [fetchSyncMapPermission](docs/sdk/README.md#fetchsyncmappermission) - Fetch a specific Sync Map Permission.
* [fetchSyncStream](docs/sdk/README.md#fetchsyncstream) - Fetch a specific Stream.
* [listDocument](docs/sdk/README.md#listdocument)
* [listDocumentPermission](docs/sdk/README.md#listdocumentpermission) - Retrieve a list of all Permissions applying to a Sync Document.
* [listService](docs/sdk/README.md#listservice)
* [listSyncList](docs/sdk/README.md#listsynclist)
* [listSyncListItem](docs/sdk/README.md#listsynclistitem)
* [listSyncListPermission](docs/sdk/README.md#listsynclistpermission) - Retrieve a list of all Permissions applying to a Sync List.
* [listSyncMap](docs/sdk/README.md#listsyncmap)
* [listSyncMapItem](docs/sdk/README.md#listsyncmapitem)
* [listSyncMapPermission](docs/sdk/README.md#listsyncmappermission) - Retrieve a list of all Permissions applying to a Sync Map.
* [listSyncStream](docs/sdk/README.md#listsyncstream) - Retrieve a list of all Streams in a Service Instance.
* [updateDocument](docs/sdk/README.md#updatedocument)
* [updateDocumentPermission](docs/sdk/README.md#updatedocumentpermission) - Update an identity's access to a specific Sync Document.
* [updateService](docs/sdk/README.md#updateservice)
* [updateSyncList](docs/sdk/README.md#updatesynclist)
* [updateSyncListItem](docs/sdk/README.md#updatesynclistitem)
* [updateSyncListPermission](docs/sdk/README.md#updatesynclistpermission) - Update an identity's access to a specific Sync List.
* [updateSyncMap](docs/sdk/README.md#updatesyncmap)
* [updateSyncMapItem](docs/sdk/README.md#updatesyncmapitem)
* [updateSyncMapPermission](docs/sdk/README.md#updatesyncmappermission) - Update an identity's access to a specific Sync Map.
* [updateSyncStream](docs/sdk/README.md#updatesyncstream) - Update a specific Stream.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
