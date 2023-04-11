import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    policysimulatorProjectsLocationsReplaysOperationsList(req: operations.PolicysimulatorProjectsLocationsReplaysOperationsListRequest, security: operations.PolicysimulatorProjectsLocationsReplaysOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.PolicysimulatorProjectsLocationsReplaysOperationsListResponse>;
}
