import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Volumes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return a list of associated books.
     */
    booksVolumesAssociatedList(req: operations.BooksVolumesAssociatedListRequest, security: operations.BooksVolumesAssociatedListSecurity, config?: AxiosRequestConfig): Promise<operations.BooksVolumesAssociatedListResponse>;
    /**
     * Gets volume information for a single volume.
     */
    booksVolumesGet(req: operations.BooksVolumesGetRequest, security: operations.BooksVolumesGetSecurity, config?: AxiosRequestConfig): Promise<operations.BooksVolumesGetResponse>;
    /**
     * Performs a book search.
     */
    booksVolumesList(req: operations.BooksVolumesListRequest, security: operations.BooksVolumesListSecurity, config?: AxiosRequestConfig): Promise<operations.BooksVolumesListResponse>;
    /**
     * Return a list of books in My Library.
     */
    booksVolumesMybooksList(req: operations.BooksVolumesMybooksListRequest, security: operations.BooksVolumesMybooksListSecurity, config?: AxiosRequestConfig): Promise<operations.BooksVolumesMybooksListResponse>;
    /**
     * Return a list of recommended books for the current user.
     */
    booksVolumesRecommendedList(req: operations.BooksVolumesRecommendedListRequest, security: operations.BooksVolumesRecommendedListSecurity, config?: AxiosRequestConfig): Promise<operations.BooksVolumesRecommendedListResponse>;
    /**
     * Rate a recommended book for the current user.
     */
    booksVolumesRecommendedRate(req: operations.BooksVolumesRecommendedRateRequest, security: operations.BooksVolumesRecommendedRateSecurity, config?: AxiosRequestConfig): Promise<operations.BooksVolumesRecommendedRateResponse>;
    /**
     * Return a list of books uploaded by the current user.
     */
    booksVolumesUseruploadedList(req: operations.BooksVolumesUseruploadedListRequest, security: operations.BooksVolumesUseruploadedListSecurity, config?: AxiosRequestConfig): Promise<operations.BooksVolumesUseruploadedListResponse>;
}
