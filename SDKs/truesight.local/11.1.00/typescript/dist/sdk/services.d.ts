import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * API operations to interact with the monitored Services.
 */
export declare class Services {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets detailed information about a specific service.
     *
     * @remarks
     * You need to provide a <b>Service ID</b> ID :<br>- use the <b>hardware/services</b> service to get all available service IDs.
     */
    getOneService(req: operations.GetOneServiceRequest, config?: AxiosRequestConfig): Promise<operations.GetOneServiceResponse>;
    /**
     * Gets summarized information about all monitored services.
     *
     * @remarks
     * Lists the available ServiceSummary instances.
     */
    getServices(req: operations.GetServicesRequest, config?: AxiosRequestConfig): Promise<operations.GetServicesResponse>;
}
