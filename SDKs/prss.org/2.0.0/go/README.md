# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/prss.org/2.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.BroadcastServices.GetAPIV2Broadcastservices(ctx, operations.GetAPIV2BroadcastservicesRequest{
        OrderByID: operations.GetAPIV2BroadcastservicesOrderByIDEnumDesc.ToPointer(),
        PageSize: sdk.Int(592845),
        PageStart: sdk.Int(715190),
    }, operations.GetAPIV2BroadcastservicesSecurity{
        CdOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Episodes != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [BroadcastServices](docs/broadcastservices/README.md)

* [GetAPIV2Broadcastservices](docs/broadcastservices/README.md#getapiv2broadcastservices) - Gets broadcast services matching the given criteria.
* [GetAPIV2BroadcastservicesID](docs/broadcastservices/README.md#getapiv2broadcastservicesid) - Returns the broadcast service matching the given ID.

### [CDDrive](docs/cddrive/README.md)

* [DeleteAPIV2CddriveFilesFileID](docs/cddrive/README.md#deleteapiv2cddrivefilesfileid) - Delete a file.
* [DeleteAPIV2CddriveFoldersFolderID](docs/cddrive/README.md#deleteapiv2cddrivefoldersfolderid) - UNDER DEVELOPMENT - Delete a folder.
* [GetAPIV2CddriveFilesFileID](docs/cddrive/README.md#getapiv2cddrivefilesfileid) - Get file information.
* [GetAPIV2CddriveFilesFileIDContent](docs/cddrive/README.md#getapiv2cddrivefilesfileidcontent) - UNDER DEVELOPMENT - Download a file.
* [GetAPIV2CddriveFoldersFolderID](docs/cddrive/README.md#getapiv2cddrivefoldersfolderid) - UNDER DEVELOPMENT - Get folder information.
* [GetAPIV2CddriveFoldersFolderIDItems](docs/cddrive/README.md#getapiv2cddrivefoldersfolderiditems) - Get the items in the folder.
* [PostAPIV2CddriveFilesContent](docs/cddrive/README.md#postapiv2cddrivefilescontent) - Upload a file.
* [PostAPIV2CddriveFolders](docs/cddrive/README.md#postapiv2cddrivefolders) - Create a folder.

### [Episodes](docs/episodes/README.md)

* [GetAPIV2Episodes](docs/episodes/README.md#getapiv2episodes) - Gets episodes matching the given criteria.
* [GetAPIV2EpisodesID](docs/episodes/README.md#getapiv2episodesid) - Returns the episode matching the given ID.

### [MetaPub](docs/metapub/README.md)

* [~~GetAPIV2MetapubProgramInformationBatchBatchID~~](docs/metapub/README.md#getapiv2metapubprograminformationbatchbatchid) - Get an EPG batch operation. :warning: **Deprecated**
* [~~PostAPIV2MetapubProgramInformationBatch~~](docs/metapub/README.md#postapiv2metapubprograminformationbatch) - Create a batch operation on EPG information. :warning: **Deprecated**

### [Pieces](docs/pieces/README.md)

* [DeleteAPIV2PiecesID](docs/pieces/README.md#deleteapiv2piecesid) - Deletes the piece with the given ID.
* [GetAPIV2Pieces](docs/pieces/README.md#getapiv2pieces) - Returns the pieces matching the query parameters.
* [GetAPIV2PiecesID](docs/pieces/README.md#getapiv2piecesid) - Returns the piece matching the given ID.
* [PostAPIV2Pieces](docs/pieces/README.md#postapiv2pieces) - Create a new piece.

### [Programs](docs/programs/README.md)

* [GetAPIV2ProgramsSearch](docs/programs/README.md#getapiv2programssearch) - Optimized free-text search for programs using various filters.
* [GetAPIV2ProgramsID](docs/programs/README.md#getapiv2programsid) - Returns the program matching the given ID.

### [RadioDNS](docs/radiodns/README.md)

* [GetRadiodnsSpi31GIXML](docs/radiodns/README.md#getradiodnsspi31gixml) - Get the group information document.
* [GetRadiodnsSpi31SIXML](docs/radiodns/README.md#getradiodnsspi31sixml) - Get the service information document.
* [GetRadiodnsSpi31IDFqdnSidDatePIXML](docs/radiodns/README.md#getradiodnsspi31idfqdnsiddatepixml) - Get the program information document.

### [Segments](docs/segments/README.md)

* [DeleteAPIV2SegmentsID](docs/segments/README.md#deleteapiv2segmentsid) - Deletes the segment with the given ID.
* [GetAPIV2Segments](docs/segments/README.md#getapiv2segments) - Returns the segments matching the query parameters.
* [GetAPIV2SegmentsID](docs/segments/README.md#getapiv2segmentsid) - Returns the segment matching the given ID.
* [GetAPIV2SegmentsIDContent](docs/segments/README.md#getapiv2segmentsidcontent) - UNDER DEVELOPMENT - Returns the audio content segment matching the given ID.
* [PostAPIV2Segments](docs/segments/README.md#postapiv2segments) - Creates a new segment.

### [SpotInsertions](docs/spotinsertions/README.md)

* [DeleteAPIV2SpotinsertionsID](docs/spotinsertions/README.md#deleteapiv2spotinsertionsid) - Deletes the spot insertion with the given ID.
* [GetAPIV2Spotinsertions](docs/spotinsertions/README.md#getapiv2spotinsertions) - Returns the spot insertions matching the query parameters.
* [GetAPIV2SpotinsertionsID](docs/spotinsertions/README.md#getapiv2spotinsertionsid) - Returns the spot insertion matching the given ID.
* [PostAPIV2Spotinsertions](docs/spotinsertions/README.md#postapiv2spotinsertions) - Creates a new spot insertion.

### [Spots](docs/spots/README.md)

* [DeleteAPIV2SpotsID](docs/spots/README.md#deleteapiv2spotsid) - Deletes the spot with the given ID.
* [GetAPIV2Spots](docs/spots/README.md#getapiv2spots) - Returns the spots matching the query parameters.
* [GetAPIV2SpotsID](docs/spots/README.md#getapiv2spotsid) - Returns the spot matching the given ID.
* [PostAPIV2Spots](docs/spots/README.md#postapiv2spots) - Creates a new spot.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
