import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Layers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets the annotation data.
     */
    booksLayersAnnotationDataGet(req: operations.BooksLayersAnnotationDataGetRequest, security: operations.BooksLayersAnnotationDataGetSecurity, config?: AxiosRequestConfig): Promise<operations.BooksLayersAnnotationDataGetResponse>;
    /**
     * Gets the annotation data for a volume and layer.
     */
    booksLayersAnnotationDataList(req: operations.BooksLayersAnnotationDataListRequest, security: operations.BooksLayersAnnotationDataListSecurity, config?: AxiosRequestConfig): Promise<operations.BooksLayersAnnotationDataListResponse>;
    /**
     * Gets the layer summary for a volume.
     */
    booksLayersGet(req: operations.BooksLayersGetRequest, security: operations.BooksLayersGetSecurity, config?: AxiosRequestConfig): Promise<operations.BooksLayersGetResponse>;
    /**
     * List the layer summaries for a volume.
     */
    booksLayersList(req: operations.BooksLayersListRequest, security: operations.BooksLayersListSecurity, config?: AxiosRequestConfig): Promise<operations.BooksLayersListResponse>;
    /**
     * Gets the volume annotation.
     */
    booksLayersVolumeAnnotationsGet(req: operations.BooksLayersVolumeAnnotationsGetRequest, security: operations.BooksLayersVolumeAnnotationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.BooksLayersVolumeAnnotationsGetResponse>;
    /**
     * Gets the volume annotations for a volume and layer.
     */
    booksLayersVolumeAnnotationsList(req: operations.BooksLayersVolumeAnnotationsListRequest, security: operations.BooksLayersVolumeAnnotationsListSecurity, config?: AxiosRequestConfig): Promise<operations.BooksLayersVolumeAnnotationsListResponse>;
}
