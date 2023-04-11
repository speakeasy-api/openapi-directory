import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Mylibrary {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes an annotation.
     */
    booksMylibraryAnnotationsDelete(req: operations.BooksMylibraryAnnotationsDeleteRequest, security: operations.BooksMylibraryAnnotationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.BooksMylibraryAnnotationsDeleteResponse>;
    /**
     * Inserts a new annotation.
     */
    booksMylibraryAnnotationsInsert(req: operations.BooksMylibraryAnnotationsInsertRequest, security: operations.BooksMylibraryAnnotationsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.BooksMylibraryAnnotationsInsertResponse>;
    /**
     * Retrieves a list of annotations, possibly filtered.
     */
    booksMylibraryAnnotationsList(req: operations.BooksMylibraryAnnotationsListRequest, security: operations.BooksMylibraryAnnotationsListSecurity, config?: AxiosRequestConfig): Promise<operations.BooksMylibraryAnnotationsListResponse>;
    /**
     * Gets the summary of specified layers.
     */
    booksMylibraryAnnotationsSummary(req: operations.BooksMylibraryAnnotationsSummaryRequest, security: operations.BooksMylibraryAnnotationsSummarySecurity, config?: AxiosRequestConfig): Promise<operations.BooksMylibraryAnnotationsSummaryResponse>;
    /**
     * Updates an existing annotation.
     */
    booksMylibraryAnnotationsUpdate(req: operations.BooksMylibraryAnnotationsUpdateRequest, security: operations.BooksMylibraryAnnotationsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.BooksMylibraryAnnotationsUpdateResponse>;
    /**
     * Adds a volume to a bookshelf.
     */
    booksMylibraryBookshelvesAddVolume(req: operations.BooksMylibraryBookshelvesAddVolumeRequest, security: operations.BooksMylibraryBookshelvesAddVolumeSecurity, config?: AxiosRequestConfig): Promise<operations.BooksMylibraryBookshelvesAddVolumeResponse>;
    /**
     * Clears all volumes from a bookshelf.
     */
    booksMylibraryBookshelvesClearVolumes(req: operations.BooksMylibraryBookshelvesClearVolumesRequest, security: operations.BooksMylibraryBookshelvesClearVolumesSecurity, config?: AxiosRequestConfig): Promise<operations.BooksMylibraryBookshelvesClearVolumesResponse>;
    /**
     * Retrieves metadata for a specific bookshelf belonging to the authenticated user.
     */
    booksMylibraryBookshelvesGet(req: operations.BooksMylibraryBookshelvesGetRequest, security: operations.BooksMylibraryBookshelvesGetSecurity, config?: AxiosRequestConfig): Promise<operations.BooksMylibraryBookshelvesGetResponse>;
    /**
     * Retrieves a list of bookshelves belonging to the authenticated user.
     */
    booksMylibraryBookshelvesList(req: operations.BooksMylibraryBookshelvesListRequest, security: operations.BooksMylibraryBookshelvesListSecurity, config?: AxiosRequestConfig): Promise<operations.BooksMylibraryBookshelvesListResponse>;
    /**
     * Moves a volume within a bookshelf.
     */
    booksMylibraryBookshelvesMoveVolume(req: operations.BooksMylibraryBookshelvesMoveVolumeRequest, security: operations.BooksMylibraryBookshelvesMoveVolumeSecurity, config?: AxiosRequestConfig): Promise<operations.BooksMylibraryBookshelvesMoveVolumeResponse>;
    /**
     * Removes a volume from a bookshelf.
     */
    booksMylibraryBookshelvesRemoveVolume(req: operations.BooksMylibraryBookshelvesRemoveVolumeRequest, security: operations.BooksMylibraryBookshelvesRemoveVolumeSecurity, config?: AxiosRequestConfig): Promise<operations.BooksMylibraryBookshelvesRemoveVolumeResponse>;
    /**
     * Gets volume information for volumes on a bookshelf.
     */
    booksMylibraryBookshelvesVolumesList(req: operations.BooksMylibraryBookshelvesVolumesListRequest, security: operations.BooksMylibraryBookshelvesVolumesListSecurity, config?: AxiosRequestConfig): Promise<operations.BooksMylibraryBookshelvesVolumesListResponse>;
    /**
     * Retrieves my reading position information for a volume.
     */
    booksMylibraryReadingpositionsGet(req: operations.BooksMylibraryReadingpositionsGetRequest, security: operations.BooksMylibraryReadingpositionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.BooksMylibraryReadingpositionsGetResponse>;
    /**
     * Sets my reading position information for a volume.
     */
    booksMylibraryReadingpositionsSetPosition(req: operations.BooksMylibraryReadingpositionsSetPositionRequest, security: operations.BooksMylibraryReadingpositionsSetPositionSecurity, config?: AxiosRequestConfig): Promise<operations.BooksMylibraryReadingpositionsSetPositionResponse>;
}
