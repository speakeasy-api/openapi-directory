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
import org.openapis.openapi.models.operations.BooksBookshelvesGetRequest;
import org.openapis.openapi.models.operations.BooksBookshelvesGetResponse;
import org.openapis.openapi.models.operations.BooksBookshelvesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksBookshelvesGetRequest req = new BooksBookshelvesGetRequest("corrupti", "provident") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quibusdam";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "corrupti";
                key = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                source = "deserunt";
                uploadType = "suscipit";
                uploadProtocol = "iure";
            }};            

            BooksBookshelvesGetResponse res = sdk.bookshelves.booksBookshelvesGet(req, new BooksBookshelvesGetSecurity("magnam", "debitis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bookshelf != null) {
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


### [bookshelves](docs/bookshelves/README.md)

* [booksBookshelvesGet](docs/bookshelves/README.md#booksbookshelvesget) - Retrieves metadata for a specific bookshelf for the specified user.
* [booksBookshelvesList](docs/bookshelves/README.md#booksbookshelveslist) - Retrieves a list of public bookshelves for the specified user.
* [booksBookshelvesVolumesList](docs/bookshelves/README.md#booksbookshelvesvolumeslist) - Retrieves volumes in a specific bookshelf for the specified user.

### [cloudloading](docs/cloudloading/README.md)

* [booksCloudloadingAddBook](docs/cloudloading/README.md#bookscloudloadingaddbook) - Add a user-upload volume and triggers processing.
* [booksCloudloadingDeleteBook](docs/cloudloading/README.md#bookscloudloadingdeletebook) - Remove the book and its contents
* [booksCloudloadingUpdateBook](docs/cloudloading/README.md#bookscloudloadingupdatebook) - Updates a user-upload volume.

### [dictionary](docs/dictionary/README.md)

* [booksDictionaryListOfflineMetadata](docs/dictionary/README.md#booksdictionarylistofflinemetadata) - Returns a list of offline dictionary metadata available

### [familysharing](docs/familysharing/README.md)

* [booksFamilysharingGetFamilyInfo](docs/familysharing/README.md#booksfamilysharinggetfamilyinfo) - Gets information regarding the family that the user is part of.
* [booksFamilysharingShare](docs/familysharing/README.md#booksfamilysharingshare) - Initiates sharing of the content with the user's family. Empty response indicates success.
* [booksFamilysharingUnshare](docs/familysharing/README.md#booksfamilysharingunshare) - Initiates revoking content that has already been shared with the user's family. Empty response indicates success.

### [layers](docs/layers/README.md)

* [booksLayersAnnotationDataGet](docs/layers/README.md#bookslayersannotationdataget) - Gets the annotation data.
* [booksLayersAnnotationDataList](docs/layers/README.md#bookslayersannotationdatalist) - Gets the annotation data for a volume and layer.
* [booksLayersGet](docs/layers/README.md#bookslayersget) - Gets the layer summary for a volume.
* [booksLayersList](docs/layers/README.md#bookslayerslist) - List the layer summaries for a volume.
* [booksLayersVolumeAnnotationsGet](docs/layers/README.md#bookslayersvolumeannotationsget) - Gets the volume annotation.
* [booksLayersVolumeAnnotationsList](docs/layers/README.md#bookslayersvolumeannotationslist) - Gets the volume annotations for a volume and layer.

### [myconfig](docs/myconfig/README.md)

* [booksMyconfigGetUserSettings](docs/myconfig/README.md#booksmyconfiggetusersettings) - Gets the current settings for the user.
* [booksMyconfigReleaseDownloadAccess](docs/myconfig/README.md#booksmyconfigreleasedownloadaccess) - Release downloaded content access restriction.
* [booksMyconfigRequestAccess](docs/myconfig/README.md#booksmyconfigrequestaccess) - Request concurrent and download access restrictions.
* [booksMyconfigSyncVolumeLicenses](docs/myconfig/README.md#booksmyconfigsyncvolumelicenses) - Request downloaded content access for specified volumes on the My eBooks shelf.
* [booksMyconfigUpdateUserSettings](docs/myconfig/README.md#booksmyconfigupdateusersettings) - Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.

### [mylibrary](docs/mylibrary/README.md)

* [booksMylibraryAnnotationsDelete](docs/mylibrary/README.md#booksmylibraryannotationsdelete) - Deletes an annotation.
* [booksMylibraryAnnotationsInsert](docs/mylibrary/README.md#booksmylibraryannotationsinsert) - Inserts a new annotation.
* [booksMylibraryAnnotationsList](docs/mylibrary/README.md#booksmylibraryannotationslist) - Retrieves a list of annotations, possibly filtered.
* [booksMylibraryAnnotationsSummary](docs/mylibrary/README.md#booksmylibraryannotationssummary) - Gets the summary of specified layers.
* [booksMylibraryAnnotationsUpdate](docs/mylibrary/README.md#booksmylibraryannotationsupdate) - Updates an existing annotation.
* [booksMylibraryBookshelvesAddVolume](docs/mylibrary/README.md#booksmylibrarybookshelvesaddvolume) - Adds a volume to a bookshelf.
* [booksMylibraryBookshelvesClearVolumes](docs/mylibrary/README.md#booksmylibrarybookshelvesclearvolumes) - Clears all volumes from a bookshelf.
* [booksMylibraryBookshelvesGet](docs/mylibrary/README.md#booksmylibrarybookshelvesget) - Retrieves metadata for a specific bookshelf belonging to the authenticated user.
* [booksMylibraryBookshelvesList](docs/mylibrary/README.md#booksmylibrarybookshelveslist) - Retrieves a list of bookshelves belonging to the authenticated user.
* [booksMylibraryBookshelvesMoveVolume](docs/mylibrary/README.md#booksmylibrarybookshelvesmovevolume) - Moves a volume within a bookshelf.
* [booksMylibraryBookshelvesRemoveVolume](docs/mylibrary/README.md#booksmylibrarybookshelvesremovevolume) - Removes a volume from a bookshelf.
* [booksMylibraryBookshelvesVolumesList](docs/mylibrary/README.md#booksmylibrarybookshelvesvolumeslist) - Gets volume information for volumes on a bookshelf.
* [booksMylibraryReadingpositionsGet](docs/mylibrary/README.md#booksmylibraryreadingpositionsget) - Retrieves my reading position information for a volume.
* [booksMylibraryReadingpositionsSetPosition](docs/mylibrary/README.md#booksmylibraryreadingpositionssetposition) - Sets my reading position information for a volume.

### [notification](docs/notification/README.md)

* [booksNotificationGet](docs/notification/README.md#booksnotificationget) - Returns notification details for a given notification id.

### [onboarding](docs/onboarding/README.md)

* [booksOnboardingListCategories](docs/onboarding/README.md#booksonboardinglistcategories) - List categories for onboarding experience.
* [booksOnboardingListCategoryVolumes](docs/onboarding/README.md#booksonboardinglistcategoryvolumes) - List available volumes under categories for onboarding experience.

### [personalizedstream](docs/personalizedstream/README.md)

* [booksPersonalizedstreamGet](docs/personalizedstream/README.md#bookspersonalizedstreamget) - Returns a stream of personalized book clusters

### [promooffer](docs/promooffer/README.md)

* [booksPromoofferAccept](docs/promooffer/README.md#bookspromoofferaccept) - Accepts the promo offer.
* [booksPromoofferDismiss](docs/promooffer/README.md#bookspromoofferdismiss) - Marks the promo offer as dismissed.
* [booksPromoofferGet](docs/promooffer/README.md#bookspromoofferget) - Returns a list of promo offers available to the user

### [series](docs/series/README.md)

* [booksSeriesGet](docs/series/README.md#booksseriesget) - Returns Series metadata for the given series ids.
* [booksSeriesMembershipGet](docs/series/README.md#booksseriesmembershipget) - Returns Series membership data given the series id.

### [volumes](docs/volumes/README.md)

* [booksVolumesAssociatedList](docs/volumes/README.md#booksvolumesassociatedlist) - Return a list of associated books.
* [booksVolumesGet](docs/volumes/README.md#booksvolumesget) - Gets volume information for a single volume.
* [booksVolumesList](docs/volumes/README.md#booksvolumeslist) - Performs a book search.
* [booksVolumesMybooksList](docs/volumes/README.md#booksvolumesmybookslist) - Return a list of books in My Library.
* [booksVolumesRecommendedList](docs/volumes/README.md#booksvolumesrecommendedlist) - Return a list of recommended books for the current user.
* [booksVolumesRecommendedRate](docs/volumes/README.md#booksvolumesrecommendedrate) - Rate a recommended book for the current user.
* [booksVolumesUseruploadedList](docs/volumes/README.md#booksvolumesuseruploadedlist) - Return a list of books uploaded by the current user.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
