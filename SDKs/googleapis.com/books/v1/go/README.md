# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/books/v1/go
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Bookshelves.BooksBookshelvesGet(ctx, operations.BooksBookshelvesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        OauthToken: sdk.String("corrupti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illum"),
        Shelf: "vel",
        Source: sdk.String("error"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("suscipit"),
        UserID: "iure",
    }, operations.BooksBookshelvesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Bookshelf != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Bookshelves](docs/bookshelves/README.md)

* [BooksBookshelvesGet](docs/bookshelves/README.md#booksbookshelvesget) - Retrieves metadata for a specific bookshelf for the specified user.
* [BooksBookshelvesList](docs/bookshelves/README.md#booksbookshelveslist) - Retrieves a list of public bookshelves for the specified user.
* [BooksBookshelvesVolumesList](docs/bookshelves/README.md#booksbookshelvesvolumeslist) - Retrieves volumes in a specific bookshelf for the specified user.

### [Cloudloading](docs/cloudloading/README.md)

* [BooksCloudloadingAddBook](docs/cloudloading/README.md#bookscloudloadingaddbook) - Add a user-upload volume and triggers processing.
* [BooksCloudloadingDeleteBook](docs/cloudloading/README.md#bookscloudloadingdeletebook) - Remove the book and its contents
* [BooksCloudloadingUpdateBook](docs/cloudloading/README.md#bookscloudloadingupdatebook) - Updates a user-upload volume.

### [Dictionary](docs/dictionary/README.md)

* [BooksDictionaryListOfflineMetadata](docs/dictionary/README.md#booksdictionarylistofflinemetadata) - Returns a list of offline dictionary metadata available

### [Familysharing](docs/familysharing/README.md)

* [BooksFamilysharingGetFamilyInfo](docs/familysharing/README.md#booksfamilysharinggetfamilyinfo) - Gets information regarding the family that the user is part of.
* [BooksFamilysharingShare](docs/familysharing/README.md#booksfamilysharingshare) - Initiates sharing of the content with the user's family. Empty response indicates success.
* [BooksFamilysharingUnshare](docs/familysharing/README.md#booksfamilysharingunshare) - Initiates revoking content that has already been shared with the user's family. Empty response indicates success.

### [Layers](docs/layers/README.md)

* [BooksLayersAnnotationDataGet](docs/layers/README.md#bookslayersannotationdataget) - Gets the annotation data.
* [BooksLayersAnnotationDataList](docs/layers/README.md#bookslayersannotationdatalist) - Gets the annotation data for a volume and layer.
* [BooksLayersGet](docs/layers/README.md#bookslayersget) - Gets the layer summary for a volume.
* [BooksLayersList](docs/layers/README.md#bookslayerslist) - List the layer summaries for a volume.
* [BooksLayersVolumeAnnotationsGet](docs/layers/README.md#bookslayersvolumeannotationsget) - Gets the volume annotation.
* [BooksLayersVolumeAnnotationsList](docs/layers/README.md#bookslayersvolumeannotationslist) - Gets the volume annotations for a volume and layer.

### [Myconfig](docs/myconfig/README.md)

* [BooksMyconfigGetUserSettings](docs/myconfig/README.md#booksmyconfiggetusersettings) - Gets the current settings for the user.
* [BooksMyconfigReleaseDownloadAccess](docs/myconfig/README.md#booksmyconfigreleasedownloadaccess) - Release downloaded content access restriction.
* [BooksMyconfigRequestAccess](docs/myconfig/README.md#booksmyconfigrequestaccess) - Request concurrent and download access restrictions.
* [BooksMyconfigSyncVolumeLicenses](docs/myconfig/README.md#booksmyconfigsyncvolumelicenses) - Request downloaded content access for specified volumes on the My eBooks shelf.
* [BooksMyconfigUpdateUserSettings](docs/myconfig/README.md#booksmyconfigupdateusersettings) - Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.

### [Mylibrary](docs/mylibrary/README.md)

* [BooksMylibraryAnnotationsDelete](docs/mylibrary/README.md#booksmylibraryannotationsdelete) - Deletes an annotation.
* [BooksMylibraryAnnotationsInsert](docs/mylibrary/README.md#booksmylibraryannotationsinsert) - Inserts a new annotation.
* [BooksMylibraryAnnotationsList](docs/mylibrary/README.md#booksmylibraryannotationslist) - Retrieves a list of annotations, possibly filtered.
* [BooksMylibraryAnnotationsSummary](docs/mylibrary/README.md#booksmylibraryannotationssummary) - Gets the summary of specified layers.
* [BooksMylibraryAnnotationsUpdate](docs/mylibrary/README.md#booksmylibraryannotationsupdate) - Updates an existing annotation.
* [BooksMylibraryBookshelvesAddVolume](docs/mylibrary/README.md#booksmylibrarybookshelvesaddvolume) - Adds a volume to a bookshelf.
* [BooksMylibraryBookshelvesClearVolumes](docs/mylibrary/README.md#booksmylibrarybookshelvesclearvolumes) - Clears all volumes from a bookshelf.
* [BooksMylibraryBookshelvesGet](docs/mylibrary/README.md#booksmylibrarybookshelvesget) - Retrieves metadata for a specific bookshelf belonging to the authenticated user.
* [BooksMylibraryBookshelvesList](docs/mylibrary/README.md#booksmylibrarybookshelveslist) - Retrieves a list of bookshelves belonging to the authenticated user.
* [BooksMylibraryBookshelvesMoveVolume](docs/mylibrary/README.md#booksmylibrarybookshelvesmovevolume) - Moves a volume within a bookshelf.
* [BooksMylibraryBookshelvesRemoveVolume](docs/mylibrary/README.md#booksmylibrarybookshelvesremovevolume) - Removes a volume from a bookshelf.
* [BooksMylibraryBookshelvesVolumesList](docs/mylibrary/README.md#booksmylibrarybookshelvesvolumeslist) - Gets volume information for volumes on a bookshelf.
* [BooksMylibraryReadingpositionsGet](docs/mylibrary/README.md#booksmylibraryreadingpositionsget) - Retrieves my reading position information for a volume.
* [BooksMylibraryReadingpositionsSetPosition](docs/mylibrary/README.md#booksmylibraryreadingpositionssetposition) - Sets my reading position information for a volume.

### [Notification](docs/notification/README.md)

* [BooksNotificationGet](docs/notification/README.md#booksnotificationget) - Returns notification details for a given notification id.

### [Onboarding](docs/onboarding/README.md)

* [BooksOnboardingListCategories](docs/onboarding/README.md#booksonboardinglistcategories) - List categories for onboarding experience.
* [BooksOnboardingListCategoryVolumes](docs/onboarding/README.md#booksonboardinglistcategoryvolumes) - List available volumes under categories for onboarding experience.

### [Personalizedstream](docs/personalizedstream/README.md)

* [BooksPersonalizedstreamGet](docs/personalizedstream/README.md#bookspersonalizedstreamget) - Returns a stream of personalized book clusters

### [Promooffer](docs/promooffer/README.md)

* [BooksPromoofferAccept](docs/promooffer/README.md#bookspromoofferaccept) - Accepts the promo offer.
* [BooksPromoofferDismiss](docs/promooffer/README.md#bookspromoofferdismiss) - Marks the promo offer as dismissed.
* [BooksPromoofferGet](docs/promooffer/README.md#bookspromoofferget) - Returns a list of promo offers available to the user

### [Series](docs/series/README.md)

* [BooksSeriesGet](docs/series/README.md#booksseriesget) - Returns Series metadata for the given series ids.
* [BooksSeriesMembershipGet](docs/series/README.md#booksseriesmembershipget) - Returns Series membership data given the series id.

### [Volumes](docs/volumes/README.md)

* [BooksVolumesAssociatedList](docs/volumes/README.md#booksvolumesassociatedlist) - Return a list of associated books.
* [BooksVolumesGet](docs/volumes/README.md#booksvolumesget) - Gets volume information for a single volume.
* [BooksVolumesList](docs/volumes/README.md#booksvolumeslist) - Performs a book search.
* [BooksVolumesMybooksList](docs/volumes/README.md#booksvolumesmybookslist) - Return a list of books in My Library.
* [BooksVolumesRecommendedList](docs/volumes/README.md#booksvolumesrecommendedlist) - Return a list of recommended books for the current user.
* [BooksVolumesRecommendedRate](docs/volumes/README.md#booksvolumesrecommendedrate) - Rate a recommended book for the current user.
* [BooksVolumesUseruploadedList](docs/volumes/README.md#booksvolumesuseruploadedlist) - Return a list of books uploaded by the current user.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
