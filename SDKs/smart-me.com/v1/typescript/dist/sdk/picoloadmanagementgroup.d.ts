import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PicoLoadmanagementGroup {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * GET: api/pico/loadmanagementgroup
     *
     *             Returns a pico load management group by it's id
     */
    picoLoadmanagementGroupGet(req: operations.PicoLoadmanagementGroupGetRequest, config?: AxiosRequestConfig): Promise<operations.PicoLoadmanagementGroupGetResponse>;
    /**
     * GET: api/pico/loadmanagementgroup
     *
     *             Returns all available load management groups
     */
    getApiPicoLoadmanagementgroup(config?: AxiosRequestConfig): Promise<operations.GetApiPicoLoadmanagementgroupResponse>;
}
