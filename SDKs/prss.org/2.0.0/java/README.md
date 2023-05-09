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
import org.openapis.openapi.models.operations.GetApiV2BroadcastservicesOrderByIDEnum;
import org.openapis.openapi.models.operations.GetApiV2BroadcastservicesRequest;
import org.openapis.openapi.models.operations.GetApiV2BroadcastservicesResponse;
import org.openapis.openapi.models.operations.GetApiV2BroadcastservicesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV2BroadcastservicesRequest req = new GetApiV2BroadcastservicesRequest() {{
                orderById = GetApiV2BroadcastservicesOrderByIDEnum.DESC;
                pageSize = 592845;
                pageStart = 715190;
            }};            

            GetApiV2BroadcastservicesResponse res = sdk.broadcastServices.getApiV2Broadcastservices(req, new GetApiV2BroadcastservicesSecurity("quibusdam") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.episodes != null) {
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


### [broadcastServices](docs/broadcastservices/README.md)

* [getApiV2Broadcastservices](docs/broadcastservices/README.md#getapiv2broadcastservices) - Gets broadcast services matching the given criteria.
* [getApiV2BroadcastservicesId](docs/broadcastservices/README.md#getapiv2broadcastservicesid) - Returns the broadcast service matching the given ID.

### [cdDrive](docs/cddrive/README.md)

* [deleteApiV2CddriveFilesFileId](docs/cddrive/README.md#deleteapiv2cddrivefilesfileid) - Delete a file.
* [deleteApiV2CddriveFoldersFolderId](docs/cddrive/README.md#deleteapiv2cddrivefoldersfolderid) - UNDER DEVELOPMENT - Delete a folder.
* [getApiV2CddriveFilesFileId](docs/cddrive/README.md#getapiv2cddrivefilesfileid) - Get file information.
* [getApiV2CddriveFilesFileIdContent](docs/cddrive/README.md#getapiv2cddrivefilesfileidcontent) - UNDER DEVELOPMENT - Download a file.
* [getApiV2CddriveFoldersFolderId](docs/cddrive/README.md#getapiv2cddrivefoldersfolderid) - UNDER DEVELOPMENT - Get folder information.
* [getApiV2CddriveFoldersFolderIdItems](docs/cddrive/README.md#getapiv2cddrivefoldersfolderiditems) - Get the items in the folder.
* [postApiV2CddriveFilesContent](docs/cddrive/README.md#postapiv2cddrivefilescontent) - Upload a file.
* [postApiV2CddriveFolders](docs/cddrive/README.md#postapiv2cddrivefolders) - Create a folder.

### [episodes](docs/episodes/README.md)

* [getApiV2Episodes](docs/episodes/README.md#getapiv2episodes) - Gets episodes matching the given criteria.
* [getApiV2EpisodesId](docs/episodes/README.md#getapiv2episodesid) - Returns the episode matching the given ID.

### [metaPub](docs/metapub/README.md)

* [~~getApiV2MetapubProgramInformationBatchBatchId~~](docs/metapub/README.md#getapiv2metapubprograminformationbatchbatchid) - Get an EPG batch operation. :warning: **Deprecated**
* [~~postApiV2MetapubProgramInformationBatch~~](docs/metapub/README.md#postapiv2metapubprograminformationbatch) - Create a batch operation on EPG information. :warning: **Deprecated**

### [pieces](docs/pieces/README.md)

* [deleteApiV2PiecesId](docs/pieces/README.md#deleteapiv2piecesid) - Deletes the piece with the given ID.
* [getApiV2Pieces](docs/pieces/README.md#getapiv2pieces) - Returns the pieces matching the query parameters.
* [getApiV2PiecesId](docs/pieces/README.md#getapiv2piecesid) - Returns the piece matching the given ID.
* [postApiV2Pieces](docs/pieces/README.md#postapiv2pieces) - Create a new piece.

### [programs](docs/programs/README.md)

* [getApiV2ProgramsSearch](docs/programs/README.md#getapiv2programssearch) - Optimized free-text search for programs using various filters.
* [getApiV2ProgramsId](docs/programs/README.md#getapiv2programsid) - Returns the program matching the given ID.

### [radioDNS](docs/radiodns/README.md)

* [getRadiodnsSpi31GIXml](docs/radiodns/README.md#getradiodnsspi31gixml) - Get the group information document.
* [getRadiodnsSpi31SIXml](docs/radiodns/README.md#getradiodnsspi31sixml) - Get the service information document.
* [getRadiodnsSpi31IdFqdnSidDatePIXml](docs/radiodns/README.md#getradiodnsspi31idfqdnsiddatepixml) - Get the program information document.

### [segments](docs/segments/README.md)

* [deleteApiV2SegmentsId](docs/segments/README.md#deleteapiv2segmentsid) - Deletes the segment with the given ID.
* [getApiV2Segments](docs/segments/README.md#getapiv2segments) - Returns the segments matching the query parameters.
* [getApiV2SegmentsId](docs/segments/README.md#getapiv2segmentsid) - Returns the segment matching the given ID.
* [getApiV2SegmentsIdContent](docs/segments/README.md#getapiv2segmentsidcontent) - UNDER DEVELOPMENT - Returns the audio content segment matching the given ID.
* [postApiV2Segments](docs/segments/README.md#postapiv2segments) - Creates a new segment.

### [spotInsertions](docs/spotinsertions/README.md)

* [deleteApiV2SpotinsertionsId](docs/spotinsertions/README.md#deleteapiv2spotinsertionsid) - Deletes the spot insertion with the given ID.
* [getApiV2Spotinsertions](docs/spotinsertions/README.md#getapiv2spotinsertions) - Returns the spot insertions matching the query parameters.
* [getApiV2SpotinsertionsId](docs/spotinsertions/README.md#getapiv2spotinsertionsid) - Returns the spot insertion matching the given ID.
* [postApiV2Spotinsertions](docs/spotinsertions/README.md#postapiv2spotinsertions) - Creates a new spot insertion.

### [spots](docs/spots/README.md)

* [deleteApiV2SpotsId](docs/spots/README.md#deleteapiv2spotsid) - Deletes the spot with the given ID.
* [getApiV2Spots](docs/spots/README.md#getapiv2spots) - Returns the spots matching the query parameters.
* [getApiV2SpotsId](docs/spots/README.md#getapiv2spotsid) - Returns the spot matching the given ID.
* [postApiV2Spots](docs/spots/README.md#postapiv2spots) - Creates a new spot.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
