import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ConsolidatedSafeScoring {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * /v1/Scorings/consolidated
     *
     * @remarks
     * /v1/Scorings/consolidated
     */
    rootV1ScoringsConsolidated(req: operations.RootV1ScoringsConsolidatedRequest, config?: AxiosRequestConfig): Promise<operations.RootV1ScoringsConsolidatedResponse>;
    /**
     * /v1/Scorings/consolidated/daily
     *
     * @remarks
     * /v1/Scorings/consolidated/daily
     */
    rootV1ScoringsConsolidatedDaily(req: operations.RootV1ScoringsConsolidatedDailyRequest, config?: AxiosRequestConfig): Promise<operations.RootV1ScoringsConsolidatedDailyResponse>;
}
