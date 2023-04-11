import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Bookshelves {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves metadata for a specific bookshelf for the specified user.
     */
    booksBookshelvesGet(req: operations.BooksBookshelvesGetRequest, security: operations.BooksBookshelvesGetSecurity, config?: AxiosRequestConfig): Promise<operations.BooksBookshelvesGetResponse>;
    /**
     * Retrieves a list of public bookshelves for the specified user.
     */
    booksBookshelvesList(req: operations.BooksBookshelvesListRequest, security: operations.BooksBookshelvesListSecurity, config?: AxiosRequestConfig): Promise<operations.BooksBookshelvesListResponse>;
    /**
     * Retrieves volumes in a specific bookshelf for the specified user.
     */
    booksBookshelvesVolumesList(req: operations.BooksBookshelvesVolumesListRequest, security: operations.BooksBookshelvesVolumesListSecurity, config?: AxiosRequestConfig): Promise<operations.BooksBookshelvesVolumesListResponse>;
}
