# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/books/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/books/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  BooksBookshelvesGetRequest,
  BooksBookshelvesGetResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: BooksBookshelvesGetRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  oauthToken: "corrupti",
  prettyPrint: false,
  quotaUser: "illum",
  shelf: "vel",
  source: "error",
  uploadType: "deserunt",
  uploadProtocol: "suscipit",
  userId: "iure",
};

sdk.bookshelves.booksBookshelvesGet(req).then((res: BooksBookshelvesGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### bookshelves

* `booksBookshelvesGet` - Retrieves metadata for a specific bookshelf for the specified user.
* `booksBookshelvesList` - Retrieves a list of public bookshelves for the specified user.
* `booksBookshelvesVolumesList` - Retrieves volumes in a specific bookshelf for the specified user.

### cloudloading

* `booksCloudloadingAddBook` - Add a user-upload volume and triggers processing.
* `booksCloudloadingDeleteBook` - Remove the book and its contents
* `booksCloudloadingUpdateBook` - Updates a user-upload volume.

### dictionary

* `booksDictionaryListOfflineMetadata` - Returns a list of offline dictionary metadata available

### familysharing

* `booksFamilysharingGetFamilyInfo` - Gets information regarding the family that the user is part of.
* `booksFamilysharingShare` - Initiates sharing of the content with the user's family. Empty response indicates success.
* `booksFamilysharingUnshare` - Initiates revoking content that has already been shared with the user's family. Empty response indicates success.

### layers

* `booksLayersAnnotationDataGet` - Gets the annotation data.
* `booksLayersAnnotationDataList` - Gets the annotation data for a volume and layer.
* `booksLayersGet` - Gets the layer summary for a volume.
* `booksLayersList` - List the layer summaries for a volume.
* `booksLayersVolumeAnnotationsGet` - Gets the volume annotation.
* `booksLayersVolumeAnnotationsList` - Gets the volume annotations for a volume and layer.

### myconfig

* `booksMyconfigGetUserSettings` - Gets the current settings for the user.
* `booksMyconfigReleaseDownloadAccess` - Release downloaded content access restriction.
* `booksMyconfigRequestAccess` - Request concurrent and download access restrictions.
* `booksMyconfigSyncVolumeLicenses` - Request downloaded content access for specified volumes on the My eBooks shelf.
* `booksMyconfigUpdateUserSettings` - Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.

### mylibrary

* `booksMylibraryAnnotationsDelete` - Deletes an annotation.
* `booksMylibraryAnnotationsInsert` - Inserts a new annotation.
* `booksMylibraryAnnotationsList` - Retrieves a list of annotations, possibly filtered.
* `booksMylibraryAnnotationsSummary` - Gets the summary of specified layers.
* `booksMylibraryAnnotationsUpdate` - Updates an existing annotation.
* `booksMylibraryBookshelvesAddVolume` - Adds a volume to a bookshelf.
* `booksMylibraryBookshelvesClearVolumes` - Clears all volumes from a bookshelf.
* `booksMylibraryBookshelvesGet` - Retrieves metadata for a specific bookshelf belonging to the authenticated user.
* `booksMylibraryBookshelvesList` - Retrieves a list of bookshelves belonging to the authenticated user.
* `booksMylibraryBookshelvesMoveVolume` - Moves a volume within a bookshelf.
* `booksMylibraryBookshelvesRemoveVolume` - Removes a volume from a bookshelf.
* `booksMylibraryBookshelvesVolumesList` - Gets volume information for volumes on a bookshelf.
* `booksMylibraryReadingpositionsGet` - Retrieves my reading position information for a volume.
* `booksMylibraryReadingpositionsSetPosition` - Sets my reading position information for a volume.

### notification

* `booksNotificationGet` - Returns notification details for a given notification id.

### onboarding

* `booksOnboardingListCategories` - List categories for onboarding experience.
* `booksOnboardingListCategoryVolumes` - List available volumes under categories for onboarding experience.

### personalizedstream

* `booksPersonalizedstreamGet` - Returns a stream of personalized book clusters

### promooffer

* `booksPromoofferAccept` - Accepts the promo offer.
* `booksPromoofferDismiss` - Marks the promo offer as dismissed.
* `booksPromoofferGet` - Returns a list of promo offers available to the user

### series

* `booksSeriesGet` - Returns Series metadata for the given series ids.
* `booksSeriesMembershipGet` - Returns Series membership data given the series id.

### volumes

* `booksVolumesAssociatedList` - Return a list of associated books.
* `booksVolumesGet` - Gets volume information for a single volume.
* `booksVolumesList` - Performs a book search.
* `booksVolumesMybooksList` - Return a list of books in My Library.
* `booksVolumesRecommendedList` - Return a list of recommended books for the current user.
* `booksVolumesRecommendedRate` - Rate a recommended book for the current user.
* `booksVolumesUseruploadedList` - Return a list of books uploaded by the current user.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

