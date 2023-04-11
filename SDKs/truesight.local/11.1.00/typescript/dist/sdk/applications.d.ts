import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * API operations to interact with the monitored Applications.
 */
export declare class Applications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets summarized information about all monitored applications.
     *
     * @remarks
     * Lists all the available ApplicationSummary instances.
     */
    getApplications(req: operations.GetApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationsResponse>;
    /**
     * Gets detailed information for a specific application.
     *
     * @remarks
     * You need to provide an <b>Application ID</b>:<br>- use the <b>hardware/applications</b> service to retrieve all available application IDs.
     */
    getOneApplication(req: operations.GetOneApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetOneApplicationResponse>;
}
