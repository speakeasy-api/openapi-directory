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
     * Creates and starts a Replay using the given ReplayConfig.
     */
    policysimulatorProjectsLocationsReplaysCreate(req: operations.PolicysimulatorProjectsLocationsReplaysCreateRequest, security: operations.PolicysimulatorProjectsLocationsReplaysCreateSecurity, config?: AxiosRequestConfig): Promise<operations.PolicysimulatorProjectsLocationsReplaysCreateResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    policysimulatorProjectsLocationsReplaysOperationsList(req: operations.PolicysimulatorProjectsLocationsReplaysOperationsListRequest, security: operations.PolicysimulatorProjectsLocationsReplaysOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.PolicysimulatorProjectsLocationsReplaysOperationsListResponse>;
    /**
     * Lists the results of running a Replay.
     */
    policysimulatorProjectsLocationsReplaysResultsList(req: operations.PolicysimulatorProjectsLocationsReplaysResultsListRequest, security: operations.PolicysimulatorProjectsLocationsReplaysResultsListSecurity, config?: AxiosRequestConfig): Promise<operations.PolicysimulatorProjectsLocationsReplaysResultsListResponse>;
}
