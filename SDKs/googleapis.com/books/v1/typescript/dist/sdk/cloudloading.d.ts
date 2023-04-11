import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Cloudloading {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a user-upload volume and triggers processing.
     */
    booksCloudloadingAddBook(req: operations.BooksCloudloadingAddBookRequest, security: operations.BooksCloudloadingAddBookSecurity, config?: AxiosRequestConfig): Promise<operations.BooksCloudloadingAddBookResponse>;
    /**
     * Remove the book and its contents
     */
    booksCloudloadingDeleteBook(req: operations.BooksCloudloadingDeleteBookRequest, security: operations.BooksCloudloadingDeleteBookSecurity, config?: AxiosRequestConfig): Promise<operations.BooksCloudloadingDeleteBookResponse>;
    /**
     * Updates a user-upload volume.
     */
    booksCloudloadingUpdateBook(req: operations.BooksCloudloadingUpdateBookRequest, security: operations.BooksCloudloadingUpdateBookSecurity, config?: AxiosRequestConfig): Promise<operations.BooksCloudloadingUpdateBookResponse>;
}
