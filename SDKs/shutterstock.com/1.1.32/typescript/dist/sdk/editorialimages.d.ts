import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class EditorialImages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * (Deprecated) List editorial categories
     *
     * @remarks
     * Deprecated; use `GET /v2/editorial/images/categories` instead. This endpoint lists the categories that editorial images can belong to, which are separate from the categories that other types of assets can belong to.
     */
    getEditorialCategories(config?: AxiosRequestConfig): Promise<operations.GetEditorialCategoriesResponse>;
    /**
     * Get editorial content details
     *
     * @remarks
     * This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.
     */
    getEditorialImage(req: operations.GetEditorialImageRequest, security: operations.GetEditorialImageSecurity, config?: AxiosRequestConfig): Promise<operations.GetEditorialImageResponse>;
    /**
     * List editorial image licenses
     *
     * @remarks
     * This endpoint lists existing editorial image licenses.
     */
    getEditorialImageLicenseList(req: operations.GetEditorialImageLicenseListRequest, security: operations.GetEditorialImageLicenseListSecurity, config?: AxiosRequestConfig): Promise<operations.GetEditorialImageLicenseListResponse>;
    /**
     * Get editorial livefeed
     */
    getEditorialImageLivefeed(req: operations.GetEditorialImageLivefeedRequest, security: operations.GetEditorialImageLivefeedSecurity, config?: AxiosRequestConfig): Promise<operations.GetEditorialImageLivefeedResponse>;
    /**
     * Get editorial livefeed items
     */
    getEditorialImageLivefeedItems(req: operations.GetEditorialImageLivefeedItemsRequest, security: operations.GetEditorialImageLivefeedItemsSecurity, config?: AxiosRequestConfig): Promise<operations.GetEditorialImageLivefeedItemsResponse>;
    /**
     * Get editorial livefeed list
     */
    getEditorialImageLivefeedList(req: operations.GetEditorialImageLivefeedListRequest, security: operations.GetEditorialImageLivefeedListSecurity, config?: AxiosRequestConfig): Promise<operations.GetEditorialImageLivefeedListResponse>;
    /**
     * (Deprecated) Get editorial livefeed
     *
     * @remarks
     * Deprecated: use `GET /v2/editorial/images/livefeeds/{id}` instead to get an editorial livefeed.
     */
    getEditorialLivefeed(req: operations.GetEditorialLivefeedRequest, security: operations.GetEditorialLivefeedSecurity, config?: AxiosRequestConfig): Promise<operations.GetEditorialLivefeedResponse>;
    /**
     * (Deprecated) Get editorial livefeed items
     *
     * @remarks
     * Deprecated; use `GET /v2/editorial/images/livefeeds/{id}/items` instead to get editorial livefeed items.
     */
    getEditorialLivefeedItems(req: operations.GetEditorialLivefeedItemsRequest, security: operations.GetEditorialLivefeedItemsSecurity, config?: AxiosRequestConfig): Promise<operations.GetEditorialLivefeedItemsResponse>;
    /**
     * (Deprecated) Get editorial livefeed list
     *
     * @remarks
     * Deprecated; use `GET /v2/editorial/images/livefeeds` instead to get a list of editorial livefeeds.
     */
    getEditorialLivefeedList(req: operations.GetEditorialLivefeedListRequest, security: operations.GetEditorialLivefeedListSecurity, config?: AxiosRequestConfig): Promise<operations.GetEditorialLivefeedListResponse>;
    /**
     * (Deprecated) List updated content
     *
     * @remarks
     * Deprecated; use `GET /v2/editorial/images/updated` instead to get recently updated items.
     */
    getUpdatedEditorialImage(req: operations.GetUpdatedEditorialImageRequest, security: operations.GetUpdatedEditorialImageSecurity, config?: AxiosRequestConfig): Promise<operations.GetUpdatedEditorialImageResponse>;
    /**
     * List updated content
     *
     * @remarks
     * This endpoint lists editorial images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the date_updated_start and date_updated_end parameters to specify a range updates based on when the updates happened. You can also use the date_taken_start and date_taken_end parameters to specify a range of updates based on when the image was taken.
     */
    getUpdatedEditorialImages(req: operations.GetUpdatedEditorialImagesRequest, security: operations.GetUpdatedEditorialImagesSecurity, config?: AxiosRequestConfig): Promise<operations.GetUpdatedEditorialImagesResponse>;
    /**
     * (Deprecated) Get editorial content details
     *
     * @remarks
     * Deprecated; use `GET /v2/editorial/images/{id}` instead to show information about an editorial image, including a URL to a preview image and the sizes that it is available in.
     */
    getV2EditorialId(req: operations.GetV2EditorialIdRequest, security: operations.GetV2EditorialIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetV2EditorialIdResponse>;
    /**
     * (Deprecated) License editorial content
     *
     * @remarks
     * Deprecated; use `POST /v2/editorial/images/licenses` instead to get licenses for one or more editorial images. You must specify the country and one or more editorial images to license. The download links in the response are valid for 8 hours.
     */
    licenseEditorialImage(req: shared.LicenseEditorialContentRequest, security: operations.LicenseEditorialImageSecurity, config?: AxiosRequestConfig): Promise<operations.LicenseEditorialImageResponse>;
    /**
     * License editorial content
     *
     * @remarks
     * This endpoint gets licenses for one or more editorial images. You must specify the country and one or more editorial images to license. The download links in the response are valid for 8 hours.
     */
    licenseEditorialImages(req: shared.LicenseEditorialContentRequest, security: operations.LicenseEditorialImagesSecurity, config?: AxiosRequestConfig): Promise<operations.LicenseEditorialImagesResponse>;
    /**
     * List editorial categories
     *
     * @remarks
     * This endpoint lists the categories that editorial images can belong to, which are separate from the categories that other types of assets can belong to.
     */
    listEditorialImageCategories(config?: AxiosRequestConfig): Promise<operations.ListEditorialImageCategoriesResponse>;
    /**
     * (Deprecated) Search editorial content
     *
     * @remarks
     * Deprecated; use `GET /v2/editorial/images/search` instead to search for editorial images.
     */
    searchEditorial(req: operations.SearchEditorialRequest, security: operations.SearchEditorialSecurity, config?: AxiosRequestConfig): Promise<operations.SearchEditorialResponse>;
    /**
     * Search editorial images
     *
     * @remarks
     * This endpoint searches for editorial images. If you specify more than one search parameter, the API uses an AND condition. For example, if you set the `category` parameter to "Alone,Performing" and also specify a `query` parameter, the results include only images that match the query and are in both the Alone and Performing categories. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
     */
    searchEditorialImages(req: operations.SearchEditorialImagesRequest, security: operations.SearchEditorialImagesSecurity, config?: AxiosRequestConfig): Promise<operations.SearchEditorialImagesResponse>;
}
