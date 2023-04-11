import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Snippets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * DeleteSnippet
     *
     * @remarks
     * Removes your snippet from a Square Online site.
     *
     * You can call [ListSites](https://developer.squareup.com/reference/square_2021-08-18/sites-api/list-sites) to get the IDs of the sites that belong to a seller.
     *
     *
     * __Note:__ Square Online APIs are publicly available as part of an early access program. For more information, see [Early access program for Square Online APIs](https://developer.squareup.com/docs/online-api#early-access-program-for-square-online-apis).
     */
    deleteSnippet(req: operations.DeleteSnippetRequest, security: operations.DeleteSnippetSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteSnippetResponse>;
    /**
     * RetrieveSnippet
     *
     * @remarks
     * Retrieves your snippet from a Square Online site. A site can contain snippets from multiple snippet applications, but you can retrieve only the snippet that was added by your application.
     *
     * You can call [ListSites](https://developer.squareup.com/reference/square_2021-08-18/sites-api/list-sites) to get the IDs of the sites that belong to a seller.
     *
     *
     * __Note:__ Square Online APIs are publicly available as part of an early access program. For more information, see [Early access program for Square Online APIs](https://developer.squareup.com/docs/online-api#early-access-program-for-square-online-apis).
     */
    retrieveSnippet(req: operations.RetrieveSnippetRequest, security: operations.RetrieveSnippetSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveSnippetResponse>;
    /**
     * UpsertSnippet
     *
     * @remarks
     * Adds a snippet to a Square Online site or updates the existing snippet on the site.
     * The snippet code is appended to the end of the `head` element on every page of the site, except checkout pages. A snippet application can add one snippet to a given site.
     *
     * You can call [ListSites](https://developer.squareup.com/reference/square_2021-08-18/sites-api/list-sites) to get the IDs of the sites that belong to a seller.
     *
     *
     * __Note:__ Square Online APIs are publicly available as part of an early access program. For more information, see [Early access program for Square Online APIs](https://developer.squareup.com/docs/online-api#early-access-program-for-square-online-apis).
     */
    upsertSnippet(req: operations.UpsertSnippetRequest, security: operations.UpsertSnippetSecurity, config?: AxiosRequestConfig): Promise<operations.UpsertSnippetResponse>;
}
