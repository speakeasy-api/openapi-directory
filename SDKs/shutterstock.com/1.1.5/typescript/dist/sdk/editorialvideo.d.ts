import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class EditorialVideo {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getEditorialVideo - Get editorial video content details
     *
     * This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.
    **/
    getEditorialVideo(req: operations.GetEditorialVideoRequest, config?: AxiosRequestConfig): Promise<operations.GetEditorialVideoResponse>;
    /**
     * getEditorialVideoLicenseList - List editorial video licenses
     *
     * This endpoint lists existing editorial video licenses.
    **/
    getEditorialVideoLicenseList(req: operations.GetEditorialVideoLicenseListRequest, config?: AxiosRequestConfig): Promise<operations.GetEditorialVideoLicenseListResponse>;
    /**
     * licenseEditorialVideo - License editorial video content
     *
     * This endpoint gets licenses for one or more editorial videos. You must specify the country and one or more editorial videos to license.
    **/
    licenseEditorialVideo(req: operations.LicenseEditorialVideoRequest, config?: AxiosRequestConfig): Promise<operations.LicenseEditorialVideoResponse>;
    /**
     * listEditorialVideoCategories - List editorial video categories
     *
     * This endpoint lists the categories that editorial videos can belong to, which are separate from the categories that other types of assets can belong to.
    **/
    listEditorialVideoCategories(req: operations.ListEditorialVideoCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.ListEditorialVideoCategoriesResponse>;
    /**
     * searchEditorialVideos - Search editorial video content
     *
     * This endpoint searches for editorial videos. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
    **/
    searchEditorialVideos(req: operations.SearchEditorialVideosRequest, config?: AxiosRequestConfig): Promise<operations.SearchEditorialVideosResponse>;
}
