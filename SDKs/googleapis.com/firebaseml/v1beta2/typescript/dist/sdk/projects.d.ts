import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a model in Firebase ML. The longrunning operation will eventually return a Model
     */
    firebasemlProjectsModelsCreate(req: operations.FirebasemlProjectsModelsCreateRequest, security: operations.FirebasemlProjectsModelsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.FirebasemlProjectsModelsCreateResponse>;
    /**
     * Deletes a model
     */
    firebasemlProjectsModelsDelete(req: operations.FirebasemlProjectsModelsDeleteRequest, security: operations.FirebasemlProjectsModelsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.FirebasemlProjectsModelsDeleteResponse>;
    /**
     * Gets Download information for a model. This is meant for downloading model resources onto devices. It gives very limited information about the model.
     */
    firebasemlProjectsModelsDownload(req: operations.FirebasemlProjectsModelsDownloadRequest, config?: AxiosRequestConfig): Promise<operations.FirebasemlProjectsModelsDownloadResponse>;
    /**
     * Lists the models
     */
    firebasemlProjectsModelsList(req: operations.FirebasemlProjectsModelsListRequest, security: operations.FirebasemlProjectsModelsListSecurity, config?: AxiosRequestConfig): Promise<operations.FirebasemlProjectsModelsListResponse>;
    /**
     * Updates a model. The longrunning operation will eventually return a Model.
     */
    firebasemlProjectsModelsPatch(req: operations.FirebasemlProjectsModelsPatchRequest, security: operations.FirebasemlProjectsModelsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.FirebasemlProjectsModelsPatchResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    firebasemlProjectsOperationsGet(req: operations.FirebasemlProjectsOperationsGetRequest, security: operations.FirebasemlProjectsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.FirebasemlProjectsOperationsGetResponse>;
}
