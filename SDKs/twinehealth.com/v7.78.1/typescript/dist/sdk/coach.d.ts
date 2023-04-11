import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A coach is a person that supports a patient
 */
export declare class Coach {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a coach
     *
     * @remarks
     * Get a coach record by id.
     */
    fetchCoach(req: operations.FetchCoachRequest, config?: AxiosRequestConfig): Promise<operations.FetchCoachResponse>;
    /**
     * List coaches
     *
     * @remarks
     * Get a list of coaches matching the specified filters.
     */
    fetchCoaches(req: operations.FetchCoachesRequest, config?: AxiosRequestConfig): Promise<operations.FetchCoachesResponse>;
}
