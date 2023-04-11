import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Wikis {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve the Content of a Wiki
     *
     * @remarks
     * Retrieves the plaintext content of a wiki in markdown format.
     * #### Returns
     * Returns `text/markdown` of the wiki content itself.
     * If the request is unsuccessful, plaintext with the error message will be displayed.
     */
    wikiContent(req: operations.WikiContentRequest, config?: AxiosRequestConfig): Promise<operations.WikiContentResponse>;
    /**
     * Retrieve a Wiki
     *
     * @remarks
     * Retrieves the details about a specific wiki.
     * A wiki is a collection of markdown text pages that can be used to describe the project or dataset of contained in the attached node.
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the requested wiki, if the request was successful.
     *
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     */
    wikiRead(req: operations.WikiReadRequest, config?: AxiosRequestConfig): Promise<operations.WikiReadResponse>;
}
