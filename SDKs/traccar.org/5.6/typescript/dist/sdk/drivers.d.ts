import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Drivers management
 */
export declare class Drivers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a Driver
     */
    deleteDriversId(req: operations.DeleteDriversIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDriversIdResponse>;
    /**
     * Fetch a list of Drivers
     *
     * @remarks
     * Without params, it returns a list of Drivers the user has access to
     */
    getDrivers(req: operations.GetDriversRequest, config?: AxiosRequestConfig): Promise<operations.GetDriversResponse>;
    /**
     * Create a Driver
     */
    postDrivers(req: shared.Driver, config?: AxiosRequestConfig): Promise<operations.PostDriversResponse>;
    /**
     * Update a Driver
     */
    putDriversId(req: operations.PutDriversIdRequest, config?: AxiosRequestConfig): Promise<operations.PutDriversIdResponse>;
}
