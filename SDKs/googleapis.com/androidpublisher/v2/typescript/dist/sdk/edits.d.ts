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
     * Deletes the APK-specific localized listing for a specified APK and language code.
     */
    androidpublisherEditsApklistingsDelete(req: operations.AndroidpublisherEditsApklistingsDeleteRequest, security: operations.AndroidpublisherEditsApklistingsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsApklistingsDeleteResponse>;
    /**
     * Deletes all the APK-specific localized listings for a specified APK.
     */
    androidpublisherEditsApklistingsDeleteall(req: operations.AndroidpublisherEditsApklistingsDeleteallRequest, security: operations.AndroidpublisherEditsApklistingsDeleteallSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsApklistingsDeleteallResponse>;
    /**
     * Fetches the APK-specific localized listing for a specified APK and language code.
     */
    androidpublisherEditsApklistingsGet(req: operations.AndroidpublisherEditsApklistingsGetRequest, security: operations.AndroidpublisherEditsApklistingsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsApklistingsGetResponse>;
    /**
     * Lists all the APK-specific localized listings for a specified APK.
     */
    androidpublisherEditsApklistingsList(req: operations.AndroidpublisherEditsApklistingsListRequest, security: operations.AndroidpublisherEditsApklistingsListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsApklistingsListResponse>;
    /**
     * Updates or creates the APK-specific localized listing for a specified APK and language code. This method supports patch semantics.
     */
    androidpublisherEditsApklistingsPatch(req: operations.AndroidpublisherEditsApklistingsPatchRequest, security: operations.AndroidpublisherEditsApklistingsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsApklistingsPatchResponse>;
    /**
     * Updates or creates the APK-specific localized listing for a specified APK and language code.
     */
    androidpublisherEditsApklistingsUpdate(req: operations.AndroidpublisherEditsApklistingsUpdateRequest, security: operations.AndroidpublisherEditsApklistingsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsApklistingsUpdateResponse>;
    /**
     * Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to enterprises using Google Play for Work whose application is configured to restrict distribution to the enterprise domain.
     */
    androidpublisherEditsApksAddexternallyhosted(req: operations.AndroidpublisherEditsApksAddexternallyhostedRequest, security: operations.AndroidpublisherEditsApksAddexternallyhostedSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsApksAddexternallyhostedResponse>;
    androidpublisherEditsApksList(req: operations.AndroidpublisherEditsApksListRequest, security: operations.AndroidpublisherEditsApksListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsApksListResponse>;
    androidpublisherEditsApksUpload(req: operations.AndroidpublisherEditsApksUploadRequest, security: operations.AndroidpublisherEditsApksUploadSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsApksUploadResponse>;
    androidpublisherEditsBundlesList(req: operations.AndroidpublisherEditsBundlesListRequest, security: operations.AndroidpublisherEditsBundlesListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsBundlesListResponse>;
    /**
     * Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See: https://developers.google.com/api-client-library/java/google-api-java-client/errors for an example in java.
     */
    androidpublisherEditsBundlesUpload(req: operations.AndroidpublisherEditsBundlesUploadRequest, security: operations.AndroidpublisherEditsBundlesUploadSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsBundlesUploadResponse>;
    /**
     * Commits/applies the changes made in this edit back to the app.
     */
    androidpublisherEditsCommit(req: operations.AndroidpublisherEditsCommitRequest, security: operations.AndroidpublisherEditsCommitSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsCommitResponse>;
    /**
     * Deletes an edit for an app. Creating a new edit will automatically delete any of your previous edits so this method need only be called if you want to preemptively abandon an edit.
     */
    androidpublisherEditsDelete(req: operations.AndroidpublisherEditsDeleteRequest, security: operations.AndroidpublisherEditsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsDeleteResponse>;
    /**
     * Uploads the deobfuscation file of the specified APK. If a deobfuscation or symbolication file already exists, it will be replaced. See https://developer.android.com/studio/build/shrink-code to learn more about deobfuscation files.
     */
    androidpublisherEditsDeobfuscationfilesUpload(req: operations.AndroidpublisherEditsDeobfuscationfilesUploadRequest, security: operations.AndroidpublisherEditsDeobfuscationfilesUploadSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsDeobfuscationfilesUploadResponse>;
    /**
     * Fetches app details for this edit. This includes the default language and developer support contact information.
     */
    androidpublisherEditsDetailsGet(req: operations.AndroidpublisherEditsDetailsGetRequest, security: operations.AndroidpublisherEditsDetailsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsDetailsGetResponse>;
    /**
     * Updates app details for this edit. This method supports patch semantics.
     */
    androidpublisherEditsDetailsPatch(req: operations.AndroidpublisherEditsDetailsPatchRequest, security: operations.AndroidpublisherEditsDetailsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsDetailsPatchResponse>;
    /**
     * Updates app details for this edit.
     */
    androidpublisherEditsDetailsUpdate(req: operations.AndroidpublisherEditsDetailsUpdateRequest, security: operations.AndroidpublisherEditsDetailsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsDetailsUpdateResponse>;
    /**
     * Fetches the Expansion File configuration for the APK specified.
     */
    androidpublisherEditsExpansionfilesGet(req: operations.AndroidpublisherEditsExpansionfilesGetRequest, security: operations.AndroidpublisherEditsExpansionfilesGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsExpansionfilesGetResponse>;
    /**
     * Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method. This method supports patch semantics.
     */
    androidpublisherEditsExpansionfilesPatch(req: operations.AndroidpublisherEditsExpansionfilesPatchRequest, security: operations.AndroidpublisherEditsExpansionfilesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsExpansionfilesPatchResponse>;
    /**
     * Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method.
     */
    androidpublisherEditsExpansionfilesUpdate(req: operations.AndroidpublisherEditsExpansionfilesUpdateRequest, security: operations.AndroidpublisherEditsExpansionfilesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsExpansionfilesUpdateResponse>;
    /**
     * Uploads and attaches a new Expansion File to the APK specified.
     */
    androidpublisherEditsExpansionfilesUpload(req: operations.AndroidpublisherEditsExpansionfilesUploadRequest, security: operations.AndroidpublisherEditsExpansionfilesUploadSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsExpansionfilesUploadResponse>;
    /**
     * Returns information about the edit specified. Calls will fail if the edit is no long active (e.g. has been deleted, superseded or expired).
     */
    androidpublisherEditsGet(req: operations.AndroidpublisherEditsGetRequest, security: operations.AndroidpublisherEditsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsGetResponse>;
    /**
     * Deletes the image (specified by id) from the edit.
     */
    androidpublisherEditsImagesDelete(req: operations.AndroidpublisherEditsImagesDeleteRequest, security: operations.AndroidpublisherEditsImagesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsImagesDeleteResponse>;
    /**
     * Deletes all images for the specified language and image type.
     */
    androidpublisherEditsImagesDeleteall(req: operations.AndroidpublisherEditsImagesDeleteallRequest, security: operations.AndroidpublisherEditsImagesDeleteallSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsImagesDeleteallResponse>;
    /**
     * Lists all images for the specified language and image type.
     */
    androidpublisherEditsImagesList(req: operations.AndroidpublisherEditsImagesListRequest, security: operations.AndroidpublisherEditsImagesListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsImagesListResponse>;
    /**
     * Uploads a new image and adds it to the list of images for the specified language and image type.
     */
    androidpublisherEditsImagesUpload(req: operations.AndroidpublisherEditsImagesUploadRequest, security: operations.AndroidpublisherEditsImagesUploadSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsImagesUploadResponse>;
    /**
     * Creates a new edit for an app, populated with the app's current state.
     */
    androidpublisherEditsInsert(req: operations.AndroidpublisherEditsInsertRequest, security: operations.AndroidpublisherEditsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsInsertResponse>;
    /**
     * Deletes the specified localized store listing from an edit.
     */
    androidpublisherEditsListingsDelete(req: operations.AndroidpublisherEditsListingsDeleteRequest, security: operations.AndroidpublisherEditsListingsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsListingsDeleteResponse>;
    /**
     * Deletes all localized listings from an edit.
     */
    androidpublisherEditsListingsDeleteall(req: operations.AndroidpublisherEditsListingsDeleteallRequest, security: operations.AndroidpublisherEditsListingsDeleteallSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsListingsDeleteallResponse>;
    /**
     * Fetches information about a localized store listing.
     */
    androidpublisherEditsListingsGet(req: operations.AndroidpublisherEditsListingsGetRequest, security: operations.AndroidpublisherEditsListingsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsListingsGetResponse>;
    /**
     * Returns all of the localized store listings attached to this edit.
     */
    androidpublisherEditsListingsList(req: operations.AndroidpublisherEditsListingsListRequest, security: operations.AndroidpublisherEditsListingsListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsListingsListResponse>;
    /**
     * Creates or updates a localized store listing. This method supports patch semantics.
     */
    androidpublisherEditsListingsPatch(req: operations.AndroidpublisherEditsListingsPatchRequest, security: operations.AndroidpublisherEditsListingsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsListingsPatchResponse>;
    /**
     * Creates or updates a localized store listing.
     */
    androidpublisherEditsListingsUpdate(req: operations.AndroidpublisherEditsListingsUpdateRequest, security: operations.AndroidpublisherEditsListingsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsListingsUpdateResponse>;
    androidpublisherEditsTestersGet(req: operations.AndroidpublisherEditsTestersGetRequest, security: operations.AndroidpublisherEditsTestersGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsTestersGetResponse>;
    androidpublisherEditsTestersPatch(req: operations.AndroidpublisherEditsTestersPatchRequest, security: operations.AndroidpublisherEditsTestersPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsTestersPatchResponse>;
    androidpublisherEditsTestersUpdate(req: operations.AndroidpublisherEditsTestersUpdateRequest, security: operations.AndroidpublisherEditsTestersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsTestersUpdateResponse>;
    /**
     * Fetches the track configuration for the specified track type. Includes the APK version codes that are in this track.
     */
    androidpublisherEditsTracksGet(req: operations.AndroidpublisherEditsTracksGetRequest, security: operations.AndroidpublisherEditsTracksGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsTracksGetResponse>;
    /**
     * Lists all the track configurations for this edit.
     */
    androidpublisherEditsTracksList(req: operations.AndroidpublisherEditsTracksListRequest, security: operations.AndroidpublisherEditsTracksListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsTracksListResponse>;
    /**
     * Updates the track configuration for the specified track type. This method supports patch semantics.
     */
    androidpublisherEditsTracksPatch(req: operations.AndroidpublisherEditsTracksPatchRequest, security: operations.AndroidpublisherEditsTracksPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsTracksPatchResponse>;
    /**
     * Updates the track configuration for the specified track type.
     */
    androidpublisherEditsTracksUpdate(req: operations.AndroidpublisherEditsTracksUpdateRequest, security: operations.AndroidpublisherEditsTracksUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsTracksUpdateResponse>;
    /**
     * Checks that the edit can be successfully committed. The edit's changes are not applied to the live app.
     */
    androidpublisherEditsValidate(req: operations.AndroidpublisherEditsValidateRequest, security: operations.AndroidpublisherEditsValidateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherEditsValidateResponse>;
}
