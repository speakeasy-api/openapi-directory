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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetAPIV2BroadcastservicesRequest{
        OrderByID: "desc",
        PageSize: 592845,
        PageStart: 715190,
    }

    ctx := context.Background()
    res, err := s.BroadcastServices.GetAPIV2Broadcastservices(ctx, req, operations.GetAPIV2BroadcastservicesSecurity{
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


### BroadcastServices

* `GetAPIV2Broadcastservices` - Gets broadcast services matching the given criteria.
* `GetAPIV2BroadcastservicesID` - Returns the broadcast service matching the given ID.

### CDDrive

* `DeleteAPIV2CddriveFilesFileID` - Delete a file.
* `DeleteAPIV2CddriveFoldersFolderID` - UNDER DEVELOPMENT - Delete a folder.
* `GetAPIV2CddriveFilesFileID` - Get file information.
* `GetAPIV2CddriveFilesFileIDContent` - UNDER DEVELOPMENT - Download a file.
* `GetAPIV2CddriveFoldersFolderID` - UNDER DEVELOPMENT - Get folder information.
* `GetAPIV2CddriveFoldersFolderIDItems` - Get the items in the folder.
* `PostAPIV2CddriveFilesContent` - Upload a file.
* `PostAPIV2CddriveFolders` - Create a folder.

### Episodes

* `GetAPIV2Episodes` - Gets episodes matching the given criteria.
* `GetAPIV2EpisodesID` - Returns the episode matching the given ID.

### MetaPub

* `GetAPIV2MetapubProgramInformationBatchBatchID` - Get an EPG batch operation.
* `PostAPIV2MetapubProgramInformationBatch` - Create a batch operation on EPG information.

### Pieces

* `DeleteAPIV2PiecesID` - Deletes the piece with the given ID.
* `GetAPIV2Pieces` - Returns the pieces matching the query parameters.
* `GetAPIV2PiecesID` - Returns the piece matching the given ID.
* `PostAPIV2Pieces` - Create a new piece.

### Programs

* `GetAPIV2ProgramsSearch` - Optimized free-text search for programs using various filters.
* `GetAPIV2ProgramsID` - Returns the program matching the given ID.

### RadioDNS

* `GetRadiodnsSpi31GIXML` - Get the group information document.
* `GetRadiodnsSpi31SIXML` - Get the service information document.
* `GetRadiodnsSpi31IDFqdnSidDatePIXML` - Get the program information document.

### Segments

* `DeleteAPIV2SegmentsID` - Deletes the segment with the given ID.
* `GetAPIV2Segments` - Returns the segments matching the query parameters.
* `GetAPIV2SegmentsID` - Returns the segment matching the given ID.
* `GetAPIV2SegmentsIDContent` - UNDER DEVELOPMENT - Returns the audio content segment matching the given ID.
* `PostAPIV2Segments` - Creates a new segment.

### SpotInsertions

* `DeleteAPIV2SpotinsertionsID` - Deletes the spot insertion with the given ID.
* `GetAPIV2Spotinsertions` - Returns the spot insertions matching the query parameters.
* `GetAPIV2SpotinsertionsID` - Returns the spot insertion matching the given ID.
* `PostAPIV2Spotinsertions` - Creates a new spot insertion.

### Spots

* `DeleteAPIV2SpotsID` - Deletes the spot with the given ID.
* `GetAPIV2Spots` - Returns the spots matching the query parameters.
* `GetAPIV2SpotsID` - Returns the spot matching the given ID.
* `PostAPIV2Spots` - Creates a new spot.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
