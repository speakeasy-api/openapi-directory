import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Access quote of the day service. Use this to get the quote of the day in various categories. This is a free API that is available to public. You must credit They Said So if you are using the free version.
 *
 * @see {@link https://theysaidso.com/api/quote#qod} - Find out more
 */
export declare class QuoteOfTheDay {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets `Quote of the Day`. Optional `category` param determines the category of returned quote of the day
     *
     */
    getQod(req: operations.GetQodRequest, security: operations.GetQodSecurity, config?: AxiosRequestConfig): Promise<operations.GetQodResponse>;
    /**
     * Gets a list of `Quote of the Day` Categories.
     *
     */
    getQodCategories(req: operations.GetQodCategoriesRequest, security: operations.GetQodCategoriesSecurity, config?: AxiosRequestConfig): Promise<operations.GetQodCategoriesResponse>;
    /**
     * Gets a list of supported languages for `Quote of the Day`.
     *
     */
    getQodLanguages(config?: AxiosRequestConfig): Promise<operations.GetQodLanguagesResponse>;
}
