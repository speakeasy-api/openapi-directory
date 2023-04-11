import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Sites {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new channel in the specified site.
     */
    firebasehostingSitesChannelsCreate(req: operations.FirebasehostingSitesChannelsCreateRequest, security: operations.FirebasehostingSitesChannelsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.FirebasehostingSitesChannelsCreateResponse>;
    /**
     * Lists the channels for the specified site. All sites have a default `live` channel.
     */
    firebasehostingSitesChannelsList(req: operations.FirebasehostingSitesChannelsListRequest, security: operations.FirebasehostingSitesChannelsListSecurity, config?: AxiosRequestConfig): Promise<operations.FirebasehostingSitesChannelsListResponse>;
    /**
     * Creates a domain mapping on the specified site.
     */
    firebasehostingSitesDomainsCreate(req: operations.FirebasehostingSitesDomainsCreateRequest, security: operations.FirebasehostingSitesDomainsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.FirebasehostingSitesDomainsCreateResponse>;
    /**
     * Lists the domains for the specified site.
     */
    firebasehostingSitesDomainsList(req: operations.FirebasehostingSitesDomainsListRequest, security: operations.FirebasehostingSitesDomainsListSecurity, config?: AxiosRequestConfig): Promise<operations.FirebasehostingSitesDomainsListResponse>;
    /**
     * Updates the specified domain mapping, creating the mapping as if it does not exist.
     */
    firebasehostingSitesDomainsUpdate(req: operations.FirebasehostingSitesDomainsUpdateRequest, security: operations.FirebasehostingSitesDomainsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.FirebasehostingSitesDomainsUpdateResponse>;
    /**
     * Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).
     */
    firebasehostingSitesReleasesCreate(req: operations.FirebasehostingSitesReleasesCreateRequest, security: operations.FirebasehostingSitesReleasesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.FirebasehostingSitesReleasesCreateResponse>;
    /**
     * Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.
     */
    firebasehostingSitesReleasesList(req: operations.FirebasehostingSitesReleasesListRequest, security: operations.FirebasehostingSitesReleasesListSecurity, config?: AxiosRequestConfig): Promise<operations.FirebasehostingSitesReleasesListResponse>;
    /**
     * Creates a new version on the specified target site using the content of the specified version.
     */
    firebasehostingSitesVersionsClone(req: operations.FirebasehostingSitesVersionsCloneRequest, security: operations.FirebasehostingSitesVersionsCloneSecurity, config?: AxiosRequestConfig): Promise<operations.FirebasehostingSitesVersionsCloneResponse>;
    /**
     * Creates a new version for the specified site.
     */
    firebasehostingSitesVersionsCreate(req: operations.FirebasehostingSitesVersionsCreateRequest, security: operations.FirebasehostingSitesVersionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.FirebasehostingSitesVersionsCreateResponse>;
    /**
     * Deletes the specified version.
     */
    firebasehostingSitesVersionsDelete(req: operations.FirebasehostingSitesVersionsDeleteRequest, security: operations.FirebasehostingSitesVersionsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.FirebasehostingSitesVersionsDeleteResponse>;
    /**
     * Lists the remaining files to be uploaded for the specified version.
     */
    firebasehostingSitesVersionsFilesList(req: operations.FirebasehostingSitesVersionsFilesListRequest, security: operations.FirebasehostingSitesVersionsFilesListSecurity, config?: AxiosRequestConfig): Promise<operations.FirebasehostingSitesVersionsFilesListResponse>;
    /**
     * Get the specified version that has been created for the specified site. This can include versions that were created for the default `live` channel or for any active preview channels for the specified site.
     */
    firebasehostingSitesVersionsGet(req: operations.FirebasehostingSitesVersionsGetRequest, security: operations.FirebasehostingSitesVersionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.FirebasehostingSitesVersionsGetResponse>;
    /**
     * Lists the versions that have been created for the specified site. This list includes versions for both the default `live` channel and any active preview channels for the specified site.
     */
    firebasehostingSitesVersionsList(req: operations.FirebasehostingSitesVersionsListRequest, security: operations.FirebasehostingSitesVersionsListSecurity, config?: AxiosRequestConfig): Promise<operations.FirebasehostingSitesVersionsListResponse>;
    /**
     *  Updates the specified metadata for the specified version. This method will fail with `FAILED_PRECONDITION` in the event of an invalid state transition. The supported [state](../sites.versions#versionstatus) transitions for a version are from `CREATED` to `FINALIZED`. Use [`DeleteVersion`](delete) to set the status of a version to `DELETED`.
     */
    firebasehostingSitesVersionsPatch(req: operations.FirebasehostingSitesVersionsPatchRequest, security: operations.FirebasehostingSitesVersionsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.FirebasehostingSitesVersionsPatchResponse>;
    /**
     *  Adds content files to the specified version. Each file must be under 2 GB.
     */
    firebasehostingSitesVersionsPopulateFiles(req: operations.FirebasehostingSitesVersionsPopulateFilesRequest, security: operations.FirebasehostingSitesVersionsPopulateFilesSecurity, config?: AxiosRequestConfig): Promise<operations.FirebasehostingSitesVersionsPopulateFilesResponse>;
}
