import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class EditorialImages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getEditorialCategories - (Deprecated) List editorial categories
     *
     * Deprecated; use `GET /v2/editorial/images/categories` instead. This endpoint lists the categories that editorial images can belong to, which are separate from the categories that other types of assets can belong to.
    **/
    getEditorialCategories(req: operations.GetEditorialCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetEditorialCategoriesResponse>;
    /**
     * getEditorialImage - Get editorial content details
     *
     * This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.
    **/
    getEditorialImage(req: operations.GetEditorialImageRequest, config?: AxiosRequestConfig): Promise<operations.GetEditorialImageResponse>;
    /**
     * getEditorialImageLicenseList - List editorial image licenses
     *
     * This endpoint lists existing editorial image licenses.
    **/
    getEditorialImageLicenseList(req: operations.GetEditorialImageLicenseListRequest, config?: AxiosRequestConfig): Promise<operations.GetEditorialImageLicenseListResponse>;
    /**
     * getEditorialImageLivefeed - Get editorial livefeed
    **/
    getEditorialImageLivefeed(req: operations.GetEditorialImageLivefeedRequest, config?: AxiosRequestConfig): Promise<operations.GetEditorialImageLivefeedResponse>;
    /**
     * getEditorialImageLivefeedItems - Get editorial livefeed items
    **/
    getEditorialImageLivefeedItems(req: operations.GetEditorialImageLivefeedItemsRequest, config?: AxiosRequestConfig): Promise<operations.GetEditorialImageLivefeedItemsResponse>;
    /**
     * getEditorialImageLivefeedList - Get editorial livefeed list
    **/
    getEditorialImageLivefeedList(req: operations.GetEditorialImageLivefeedListRequest, config?: AxiosRequestConfig): Promise<operations.GetEditorialImageLivefeedListResponse>;
    /**
     * getEditorialLivefeed - (Deprecated) Get editorial livefeed
     *
     * Deprecated: use `GET /v2/editorial/images/livefeeds/{id}` instead to get an editorial livefeed.
    **/
    getEditorialLivefeed(req: operations.GetEditorialLivefeedRequest, config?: AxiosRequestConfig): Promise<operations.GetEditorialLivefeedResponse>;
    /**
     * getEditorialLivefeedItems - (Deprecated) Get editorial livefeed items
     *
     * Deprecated; use `GET /v2/editorial/images/livefeeds/{id}/items` instead to get editorial livefeed items.
    **/
    getEditorialLivefeedItems(req: operations.GetEditorialLivefeedItemsRequest, config?: AxiosRequestConfig): Promise<operations.GetEditorialLivefeedItemsResponse>;
    /**
     * getEditorialLivefeedList - (Deprecated) Get editorial livefeed list
     *
     * Deprecated; use `GET /v2/editorial/images/livefeeds` instead to get a list of editorial livefeeds.
    **/
    getEditorialLivefeedList(req: operations.GetEditorialLivefeedListRequest, config?: AxiosRequestConfig): Promise<operations.GetEditorialLivefeedListResponse>;
    /**
     * getUpdatedEditorialImages - List updated content
     *
     * This endpoint lists editorial images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the date_updated_start and date_updated_end parameters to specify a range updates based on when the updates happened. You can also use the date_taken_start and date_taken_end parameters to specify a range of updates based on when the image was taken.
    **/
    getUpdatedEditorialImages(req: operations.GetUpdatedEditorialImagesRequest, config?: AxiosRequestConfig): Promise<operations.GetUpdatedEditorialImagesResponse>;
    /**
     * getV2EditorialUpdated - (Deprecated) List updated content
     *
     * Deprecated; use `GET /v2/editorial/images/updated` instead to get recently updated items.
    **/
    getV2EditorialUpdated(req: operations.GetV2EditorialUpdatedRequest, config?: AxiosRequestConfig): Promise<operations.GetV2EditorialUpdatedResponse>;
    /**
     * getV2EditorialId - (Deprecated) Get editorial content details
     *
     * Deprecated; use `GET /v2/editorial/images/{id}` instead to show information about an editorial image, including a URL to a preview image and the sizes that it is available in.
    **/
    getV2EditorialId(req: operations.GetV2EditorialIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV2EditorialIdResponse>;
    /**
     * licenseEditorialImage - (Deprecated) License editorial content
     *
     * Deprecated; use `POST /v2/editorial/images/licenses` instead to get licenses for one or more editorial images. You must specify the country and one or more editorial images to license.
    **/
    licenseEditorialImage(req: operations.LicenseEditorialImageRequest, config?: AxiosRequestConfig): Promise<operations.LicenseEditorialImageResponse>;
    /**
     * licenseEditorialImages - License editorial content
     *
     * This endpoint gets licenses for one or more editorial images. You must specify the country and one or more editorial images to license.
    **/
    licenseEditorialImages(req: operations.LicenseEditorialImagesRequest, config?: AxiosRequestConfig): Promise<operations.LicenseEditorialImagesResponse>;
    /**
     * listEditorialImageCategories - List editorial categories
     *
     * This endpoint lists the categories that editorial images can belong to, which are separate from the categories that other types of assets can belong to.
    **/
    listEditorialImageCategories(req: operations.ListEditorialImageCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.ListEditorialImageCategoriesResponse>;
    /**
     * searchEditorial - (Deprecated) Search editorial content
     *
     * Deprecated; use `GET /v2/editorial/images/search` instead to search for editorial images.
    **/
    searchEditorial(req: operations.SearchEditorialRequest, config?: AxiosRequestConfig): Promise<operations.SearchEditorialResponse>;
    /**
     * searchEditorialImages - Search editorial images
     *
     * This endpoint searches for editorial images. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
    **/
    searchEditorialImages(req: operations.SearchEditorialImagesRequest, config?: AxiosRequestConfig): Promise<operations.SearchEditorialImagesResponse>;
}
