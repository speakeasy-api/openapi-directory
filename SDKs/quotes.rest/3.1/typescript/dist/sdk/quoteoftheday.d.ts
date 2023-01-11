import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class QuoteOfTheDay {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getQod - Gets `Quote of the Day`. Optional `category` param determines the category of returned quote of the day
     *
    **/
    getQod(req: operations.GetQodRequest, config?: AxiosRequestConfig): Promise<operations.GetQodResponse>;
    /**
     * getQodCategories - Gets a list of `Quote of the Day` Categories.
     *
    **/
    getQodCategories(req: operations.GetQodCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetQodCategoriesResponse>;
    /**
     * getQodLanguages - Gets a list of supported languages for `Quote of the Day`.
     *
    **/
    getQodLanguages(req: operations.GetQodLanguagesRequest, config?: AxiosRequestConfig): Promise<operations.GetQodLanguagesResponse>;
}
