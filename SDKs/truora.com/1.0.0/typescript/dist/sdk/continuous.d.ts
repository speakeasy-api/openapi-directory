import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Allows creating recurring checks with customizable frequency that notify whenever there are changes in check scores.
 */
export declare class Continuous {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Lists history associated with a Check. It can be paginated
     */
    getContinuousCheck(req: operations.GetContinuousCheckRequest, security: operations.GetContinuousCheckSecurity, config?: AxiosRequestConfig): Promise<operations.GetContinuousCheckResponse>;
    /**
     * Lists all continuous checks
     */
    listContinuousChecks(config?: AxiosRequestConfig): Promise<operations.ListContinuousChecksResponse>;
    /**
     * Updates a continuous check
     */
    updateContinuousCheck(req: operations.UpdateContinuousCheckRequest, security: operations.UpdateContinuousCheckSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateContinuousCheckResponse>;
    /**
     * Creates a continuous check that will run background checks recurrently according to the frequency provided.
     */
    createContinuousCheck(req: shared.CreateContinuousCheckInput, security: operations.CreateContinuousCheckSecurity, config?: AxiosRequestConfig): Promise<operations.CreateContinuousCheckResponse>;
    /**
     * Lists background check logs. It can be paginated
     *
     */
    getV1ContinuousChecksContinuousCheckIdHistory(req: operations.GetV1ContinuousChecksContinuousCheckIdHistoryRequest, security: operations.GetV1ContinuousChecksContinuousCheckIdHistorySecurity, config?: AxiosRequestConfig): Promise<operations.GetV1ContinuousChecksContinuousCheckIdHistoryResponse>;
}
