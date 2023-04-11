import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A health question definition specifies a health question and the corresponding answer choices.
 */
export declare class HealthQuestionDefinition {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a health question definition
     *
     * @remarks
     * Get a health question definition by id
     */
    fetchHealthQuestionDefinition(req: operations.FetchHealthQuestionDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.FetchHealthQuestionDefinitionResponse>;
    /**
     * List health question definitions
     *
     * @remarks
     * Get a list of all health question definitions
     */
    fetchHealthQuestionDefinitions(config?: AxiosRequestConfig): Promise<operations.FetchHealthQuestionDefinitionsResponse>;
}
