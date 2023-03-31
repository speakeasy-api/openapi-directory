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

import org.openapis.openapi.models.operations.GetApiV2BroadcastservicesSecurity;
import org.openapis.openapi.models.operations.GetApiV2BroadcastservicesOrderByIDEnum;
import org.openapis.openapi.models.operations.GetApiV2BroadcastservicesQueryParams;
import org.openapis.openapi.models.operations.GetApiV2BroadcastservicesRequest;
import org.openapis.openapi.models.operations.GetApiV2BroadcastservicesResponse;
import org.openapis.openapi.models.shared.SchemeCdOauth2;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV2BroadcastservicesRequest req = new GetApiV2BroadcastservicesRequest() {{
                security = new GetApiV2BroadcastservicesSecurity() {{
                    cdOauth2 = new SchemeCdOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new GetApiV2BroadcastservicesQueryParams() {{
                    orderById = "desc";
                    pageSize = 592845;
                    pageStart = 715190;
                }};
            }};            

            GetApiV2BroadcastservicesResponse res = sdk.broadcastServices.getApiV2Broadcastservices(req);

            if (res.episodes.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### broadcastServices

* `getApiV2Broadcastservices` - Gets broadcast services matching the given criteria.
* `getApiV2BroadcastservicesId` - Returns the broadcast service matching the given ID.

### cdDrive

* `deleteApiV2CddriveFilesFileId` - Delete a file.
* `deleteApiV2CddriveFoldersFolderId` - UNDER DEVELOPMENT - Delete a folder.
* `getApiV2CddriveFilesFileId` - Get file information.
* `getApiV2CddriveFilesFileIdContent` - UNDER DEVELOPMENT - Download a file.
* `getApiV2CddriveFoldersFolderId` - UNDER DEVELOPMENT - Get folder information.
* `getApiV2CddriveFoldersFolderIdItems` - Get the items in the folder.
* `postApiV2CddriveFilesContent` - Upload a file.
* `postApiV2CddriveFolders` - Create a folder.

### episodes

* `getApiV2Episodes` - Gets episodes matching the given criteria.
* `getApiV2EpisodesId` - Returns the episode matching the given ID.

### metaPub

* `getApiV2MetapubProgramInformationBatchBatchId` - Get an EPG batch operation.
* `postApiV2MetapubProgramInformationBatch` - Create a batch operation on EPG information.

### pieces

* `deleteApiV2PiecesId` - Deletes the piece with the given ID.
* `getApiV2Pieces` - Returns the pieces matching the query parameters.
* `getApiV2PiecesId` - Returns the piece matching the given ID.
* `postApiV2Pieces` - Create a new piece.

### programs

* `getApiV2ProgramsSearch` - Optimized free-text search for programs using various filters.
* `getApiV2ProgramsId` - Returns the program matching the given ID.

### radioDNS

* `getRadiodnsSpi31GIXml` - Get the group information document.
* `getRadiodnsSpi31SIXml` - Get the service information document.
* `getRadiodnsSpi31IdFqdnSidDatePIXml` - Get the program information document.

### segments

* `deleteApiV2SegmentsId` - Deletes the segment with the given ID.
* `getApiV2Segments` - Returns the segments matching the query parameters.
* `getApiV2SegmentsId` - Returns the segment matching the given ID.
* `getApiV2SegmentsIdContent` - UNDER DEVELOPMENT - Returns the audio content segment matching the given ID.
* `postApiV2Segments` - Creates a new segment.

### spotInsertions

* `deleteApiV2SpotinsertionsId` - Deletes the spot insertion with the given ID.
* `getApiV2Spotinsertions` - Returns the spot insertions matching the query parameters.
* `getApiV2SpotinsertionsId` - Returns the spot insertion matching the given ID.
* `postApiV2Spotinsertions` - Creates a new spot insertion.

### spots

* `deleteApiV2SpotsId` - Deletes the spot with the given ID.
* `getApiV2Spots` - Returns the spots matching the query parameters.
* `getApiV2SpotsId` - Returns the spot matching the given ID.
* `postApiV2Spots` - Creates a new spot.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
