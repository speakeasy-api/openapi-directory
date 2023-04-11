import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The Custom Type API allows the creation of new products so only desired datasets are included in background checks.
 *
 * @remarks
 *
 * ## Score Configuration
 * The `ScoreConfig` object has `Rules` to apply to related *databases* which are summed up creating a `Score` which is associated to a *dataset* of a background `check`. All weights given to the configuration must sum up 1.
 *
 */
export declare class CustomType {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete Custom Type
     *
     * @remarks
     * Allows deleting a custom type. Person, vehicle, and company types cannot be deleted
     */
    deleteCustomType(req: operations.DeleteCustomTypeRequest, security: operations.DeleteCustomTypeSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteCustomTypeResponse>;
    /**
     * Update Custom Type
     *
     * @remarks
     * Allows updating a custom type. Person, vehicle, and company types are not modifiable
     */
    updateCustomType(req: shared.CreateConfigInput, security: operations.UpdateCustomTypeSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateCustomTypeResponse>;
    /**
     * Create Score Configurations
     *
     * @remarks
     * Create a custom score configuration selecting the weight for each background check dataset and the country where it applies. Weights are numbers between 0 and 1 that represent how impactful the dataset is for the score. Keep in mind that the sum of all weights must equal 1.
     */
    createScoreConfig(req: shared.CreateConfigInput, config?: AxiosRequestConfig): Promise<operations.CreateScoreConfigResponse>;
    /**
     * List Score Configurations
     *
     * @remarks
     * Lists the custom score configurations of the associated account.
     */
    listScoreConfigs(req: operations.ListScoreConfigsRequest, config?: AxiosRequestConfig): Promise<operations.ListScoreConfigsResponse>;
}
