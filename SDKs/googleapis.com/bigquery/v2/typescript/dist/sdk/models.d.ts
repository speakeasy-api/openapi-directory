import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Models {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the model specified by modelId from the dataset.
     */
    bigqueryModelsDelete(req: operations.BigqueryModelsDeleteRequest, security: operations.BigqueryModelsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.BigqueryModelsDeleteResponse>;
    /**
     * Gets the specified model resource by model ID.
     */
    bigqueryModelsGet(req: operations.BigqueryModelsGetRequest, security: operations.BigqueryModelsGetSecurity, config?: AxiosRequestConfig): Promise<operations.BigqueryModelsGetResponse>;
    /**
     * Lists all models in the specified dataset. Requires the READER dataset role. After retrieving the list of models, you can get information about a particular model by calling the models.get method.
     */
    bigqueryModelsList(req: operations.BigqueryModelsListRequest, security: operations.BigqueryModelsListSecurity, config?: AxiosRequestConfig): Promise<operations.BigqueryModelsListResponse>;
    /**
     * Patch specific fields in the specified model.
     */
    bigqueryModelsPatch(req: operations.BigqueryModelsPatchRequest, security: operations.BigqueryModelsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.BigqueryModelsPatchResponse>;
}
