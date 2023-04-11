import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Edits {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.
     */
    androidpublisherEditsApksAddexternallyhosted(req: operations.AndroidpublisherEditsApksAddexternallyhostedRequest, security: operations.AndroidpublisherEditsApksAddexternallyhostedSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsApksAddexternallyhostedResponse>;
    /**
     * Lists all current APKs of the app and edit.
     */
    androidpublisherEditsApksList(req: operations.AndroidpublisherEditsApksListRequest, security: operations.AndroidpublisherEditsApksListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsApksListResponse>;
    /**
     * Uploads an APK and adds to the current edit.
     */
    androidpublisherEditsApksUpload(req: operations.AndroidpublisherEditsApksUploadRequest, security: operations.AndroidpublisherEditsApksUploadSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsApksUploadResponse>;
    /**
     * Lists all current Android App Bundles of the app and edit.
     */
    androidpublisherEditsBundlesList(req: operations.AndroidpublisherEditsBundlesListRequest, security: operations.AndroidpublisherEditsBundlesListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsBundlesListResponse>;
    /**
     * Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
     */
    androidpublisherEditsBundlesUpload(req: operations.AndroidpublisherEditsBundlesUploadRequest, security: operations.AndroidpublisherEditsBundlesUploadSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsBundlesUploadResponse>;
    /**
     * Commits an app edit.
     */
    androidpublisherEditsCommit(req: operations.AndroidpublisherEditsCommitRequest, security: operations.AndroidpublisherEditsCommitSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsCommitResponse>;
    /**
     * Gets country availability.
     */
    androidpublisherEditsCountryavailabilityGet(req: operations.AndroidpublisherEditsCountryavailabilityGetRequest, security: operations.AndroidpublisherEditsCountryavailabilityGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsCountryavailabilityGetResponse>;
    /**
     * Deletes an app edit.
     */
    androidpublisherEditsDelete(req: operations.AndroidpublisherEditsDeleteRequest, security: operations.AndroidpublisherEditsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsDeleteResponse>;
    /**
     * Uploads a new deobfuscation file and attaches to the specified APK.
     */
    androidpublisherEditsDeobfuscationfilesUpload(req: operations.AndroidpublisherEditsDeobfuscationfilesUploadRequest, security: operations.AndroidpublisherEditsDeobfuscationfilesUploadSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsDeobfuscationfilesUploadResponse>;
    /**
     * Gets details of an app.
     */
    androidpublisherEditsDetailsGet(req: operations.AndroidpublisherEditsDetailsGetRequest, security: operations.AndroidpublisherEditsDetailsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsDetailsGetResponse>;
    /**
     * Patches details of an app.
     */
    androidpublisherEditsDetailsPatch(req: operations.AndroidpublisherEditsDetailsPatchRequest, security: operations.AndroidpublisherEditsDetailsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsDetailsPatchResponse>;
    /**
     * Updates details of an app.
     */
    androidpublisherEditsDetailsUpdate(req: operations.AndroidpublisherEditsDetailsUpdateRequest, security: operations.AndroidpublisherEditsDetailsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsDetailsUpdateResponse>;
    /**
     * Fetches the expansion file configuration for the specified APK.
     */
    androidpublisherEditsExpansionfilesGet(req: operations.AndroidpublisherEditsExpansionfilesGetRequest, security: operations.AndroidpublisherEditsExpansionfilesGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsExpansionfilesGetResponse>;
    /**
     * Patches the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
     */
    androidpublisherEditsExpansionfilesPatch(req: operations.AndroidpublisherEditsExpansionfilesPatchRequest, security: operations.AndroidpublisherEditsExpansionfilesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsExpansionfilesPatchResponse>;
    /**
     * Updates the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
     */
    androidpublisherEditsExpansionfilesUpdate(req: operations.AndroidpublisherEditsExpansionfilesUpdateRequest, security: operations.AndroidpublisherEditsExpansionfilesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsExpansionfilesUpdateResponse>;
    /**
     * Uploads a new expansion file and attaches to the specified APK.
     */
    androidpublisherEditsExpansionfilesUpload(req: operations.AndroidpublisherEditsExpansionfilesUploadRequest, security: operations.AndroidpublisherEditsExpansionfilesUploadSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsExpansionfilesUploadResponse>;
    /**
     * Gets an app edit.
     */
    androidpublisherEditsGet(req: operations.AndroidpublisherEditsGetRequest, security: operations.AndroidpublisherEditsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsGetResponse>;
    /**
     * Deletes the image (specified by id) from the edit.
     */
    androidpublisherEditsImagesDelete(req: operations.AndroidpublisherEditsImagesDeleteRequest, security: operations.AndroidpublisherEditsImagesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsImagesDeleteResponse>;
    /**
     * Deletes all images for the specified language and image type. Returns an empty response if no images are found.
     */
    androidpublisherEditsImagesDeleteall(req: operations.AndroidpublisherEditsImagesDeleteallRequest, security: operations.AndroidpublisherEditsImagesDeleteallSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsImagesDeleteallResponse>;
    /**
     * Lists all images. The response may be empty.
     */
    androidpublisherEditsImagesList(req: operations.AndroidpublisherEditsImagesListRequest, security: operations.AndroidpublisherEditsImagesListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsImagesListResponse>;
    /**
     * Uploads an image of the specified language and image type, and adds to the edit.
     */
    androidpublisherEditsImagesUpload(req: operations.AndroidpublisherEditsImagesUploadRequest, security: operations.AndroidpublisherEditsImagesUploadSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsImagesUploadResponse>;
    /**
     * Creates a new edit for an app.
     */
    androidpublisherEditsInsert(req: operations.AndroidpublisherEditsInsertRequest, security: operations.AndroidpublisherEditsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsInsertResponse>;
    /**
     * Deletes a localized store listing.
     */
    androidpublisherEditsListingsDelete(req: operations.AndroidpublisherEditsListingsDeleteRequest, security: operations.AndroidpublisherEditsListingsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsListingsDeleteResponse>;
    /**
     * Deletes all store listings.
     */
    androidpublisherEditsListingsDeleteall(req: operations.AndroidpublisherEditsListingsDeleteallRequest, security: operations.AndroidpublisherEditsListingsDeleteallSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsListingsDeleteallResponse>;
    /**
     * Gets a localized store listing.
     */
    androidpublisherEditsListingsGet(req: operations.AndroidpublisherEditsListingsGetRequest, security: operations.AndroidpublisherEditsListingsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsListingsGetResponse>;
    /**
     * Lists all localized store listings.
     */
    androidpublisherEditsListingsList(req: operations.AndroidpublisherEditsListingsListRequest, security: operations.AndroidpublisherEditsListingsListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsListingsListResponse>;
    /**
     * Patches a localized store listing.
     */
    androidpublisherEditsListingsPatch(req: operations.AndroidpublisherEditsListingsPatchRequest, security: operations.AndroidpublisherEditsListingsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsListingsPatchResponse>;
    /**
     * Creates or updates a localized store listing.
     */
    androidpublisherEditsListingsUpdate(req: operations.AndroidpublisherEditsListingsUpdateRequest, security: operations.AndroidpublisherEditsListingsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsListingsUpdateResponse>;
    /**
     * Gets testers. Note: Testers resource does not support email lists.
     */
    androidpublisherEditsTestersGet(req: operations.AndroidpublisherEditsTestersGetRequest, security: operations.AndroidpublisherEditsTestersGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsTestersGetResponse>;
    /**
     * Patches testers. Note: Testers resource does not support email lists.
     */
    androidpublisherEditsTestersPatch(req: operations.AndroidpublisherEditsTestersPatchRequest, security: operations.AndroidpublisherEditsTestersPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsTestersPatchResponse>;
    /**
     * Updates testers. Note: Testers resource does not support email lists.
     */
    androidpublisherEditsTestersUpdate(req: operations.AndroidpublisherEditsTestersUpdateRequest, security: operations.AndroidpublisherEditsTestersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsTestersUpdateResponse>;
    /**
     * Gets a track.
     */
    androidpublisherEditsTracksGet(req: operations.AndroidpublisherEditsTracksGetRequest, security: operations.AndroidpublisherEditsTracksGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsTracksGetResponse>;
    /**
     * Lists all tracks.
     */
    androidpublisherEditsTracksList(req: operations.AndroidpublisherEditsTracksListRequest, security: operations.AndroidpublisherEditsTracksListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsTracksListResponse>;
    /**
     * Patches a track.
     */
    androidpublisherEditsTracksPatch(req: operations.AndroidpublisherEditsTracksPatchRequest, security: operations.AndroidpublisherEditsTracksPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsTracksPatchResponse>;
    /**
     * Updates a track.
     */
    androidpublisherEditsTracksUpdate(req: operations.AndroidpublisherEditsTracksUpdateRequest, security: operations.AndroidpublisherEditsTracksUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsTracksUpdateResponse>;
    /**
     * Validates an app edit.
     */
    androidpublisherEditsValidate(req: operations.AndroidpublisherEditsValidateRequest, security: operations.AndroidpublisherEditsValidateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsValidateResponse>;
}
