import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class StyleGuide {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createStyleGuide - Upload a new style guide
     *
     * Upload a new style guide
    **/
    createStyleGuide(req: operations.CreateStyleGuideRequest, config?: AxiosRequestConfig): Promise<operations.CreateStyleGuideResponse>;
    /**
     * deleteStyleGuide - Delete the style guide
     *
     * Delete the style guide
    **/
    deleteStyleGuide(req: operations.DeleteStyleGuideRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStyleGuideResponse>;
    /**
     * downloadGlobalStyleGuide - Download the global style guide.
     *
     * Download your corporate account's global style guide. This endpoint is available only for corporate account customers.
    **/
    downloadGlobalStyleGuide(config?: AxiosRequestConfig): Promise<operations.DownloadGlobalStyleGuideResponse>;
    /**
     * downloadStyleGuide - Download a style guide
     *
     * Download a style guide
    **/
    downloadStyleGuide(req: operations.DownloadStyleGuideRequest, config?: AxiosRequestConfig): Promise<operations.DownloadStyleGuideResponse>;
    /**
     * getStyleGuide - Get single style guide
     *
     * Get single style guide
    **/
    getStyleGuide(req: operations.GetStyleGuideRequest, config?: AxiosRequestConfig): Promise<operations.GetStyleGuideResponse>;
    /**
     * getStyleGuides - Get a list of style guides
     *
     * Get a list of style guides
    **/
    getStyleGuides(req: operations.GetStyleGuidesRequest, config?: AxiosRequestConfig): Promise<operations.GetStyleGuidesResponse>;
    /**
     * updateGlobalStyleGuide - Create or update the global style guide.
     *
     * Update your corporate account's global style guide. This endpoint is available only for corporate account customers.
    **/
    updateGlobalStyleGuide(req: operations.UpdateGlobalStyleGuideRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGlobalStyleGuideResponse>;
    /**
     * updateStyleGuide - Update the style guide.
     *
     * Update the style guide. File name and contents will replaced with the new one.
    **/
    updateStyleGuide(req: operations.UpdateStyleGuideRequest, config?: AxiosRequestConfig): Promise<operations.UpdateStyleGuideResponse>;
}
