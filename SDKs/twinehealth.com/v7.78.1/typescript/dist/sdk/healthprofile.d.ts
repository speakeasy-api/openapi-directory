import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A health profile contains a set of health questions and answers for a patient.
 */
export declare class HealthProfile {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a health profile
     *
     * @remarks
     * Get a health profile by id
     */
    fetchHealthProfile(req: operations.FetchHealthProfileRequest, config?: AxiosRequestConfig): Promise<operations.FetchHealthProfileResponse>;
    /**
     * List health profiles
     *
     * @remarks
     * Get a list of health profiles
     */
    fetchHealthProfiles(req: operations.FetchHealthProfilesRequest, config?: AxiosRequestConfig): Promise<operations.FetchHealthProfilesResponse>;
}
