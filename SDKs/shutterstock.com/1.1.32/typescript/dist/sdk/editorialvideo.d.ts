import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class EditorialVideo {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get editorial video content details
     *
     * @remarks
     * This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.
     */
    getEditorialVideo(req: operations.GetEditorialVideoRequest, security: operations.GetEditorialVideoSecurity, config?: AxiosRequestConfig): Promise<operations.GetEditorialVideoResponse>;
    /**
     * List editorial video licenses
     *
     * @remarks
     * This endpoint lists existing editorial video licenses.
     */
    getEditorialVideoLicenseList(req: operations.GetEditorialVideoLicenseListRequest, security: operations.GetEditorialVideoLicenseListSecurity, config?: AxiosRequestConfig): Promise<operations.GetEditorialVideoLicenseListResponse>;
    /**
     * License editorial video content
     *
     * @remarks
     * This endpoint gets licenses for one or more editorial videos. You must specify the country and one or more editorial videos to license. The download links in the response are valid for 8 hours.
     */
    licenseEditorialVideo(req: shared.LicenseEditorialVideoContentRequest, security: operations.LicenseEditorialVideoSecurity, config?: AxiosRequestConfig): Promise<operations.LicenseEditorialVideoResponse>;
    /**
     * List editorial video categories
     *
     * @remarks
     * This endpoint lists the categories that editorial videos can belong to, which are separate from the categories that other types of assets can belong to.
     */
    listEditorialVideoCategories(config?: AxiosRequestConfig): Promise<operations.ListEditorialVideoCategoriesResponse>;
    /**
     * Search editorial video content
     *
     * @remarks
     * This endpoint searches for editorial videos. If you specify more than one search parameter, the API uses an AND condition. For example, if you set the `category` parameter to "Alone,Performing" and also specify a `query` parameter, the results include only videos that match the query and are in both the Alone and Performing categories.  You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
     */
    searchEditorialVideos(req: operations.SearchEditorialVideosRequest, security: operations.SearchEditorialVideosSecurity, config?: AxiosRequestConfig): Promise<operations.SearchEditorialVideosResponse>;
}
