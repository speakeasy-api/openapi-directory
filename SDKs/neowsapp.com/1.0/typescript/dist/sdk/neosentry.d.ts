import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations with Sentry NearEarthObjects
 */
export declare class Neosentry {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve Sentry (Impact Risk ) Near Earth Objects
     *
     * @remarks
     * Retrieves Near Earth Objects listed in the NASA sentry data set
     */
    retrieveSentryRiskData(req: operations.RetrieveSentryRiskDataRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveSentryRiskDataResponse>;
    /**
     * Retrieve Sentry (Impact Risk ) Near Earth Objectby ID
     *
     * @remarks
     * Retrieves Sentry Near Earth Object by ID
     */
    retrieveSentryRiskDataById(req: operations.RetrieveSentryRiskDataByIdRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveSentryRiskDataByIdResponse>;
}
