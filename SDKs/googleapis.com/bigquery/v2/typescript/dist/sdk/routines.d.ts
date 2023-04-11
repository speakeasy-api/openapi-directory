import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Routines {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the routine specified by routineId from the dataset.
     */
    bigqueryRoutinesDelete(req: operations.BigqueryRoutinesDeleteRequest, security: operations.BigqueryRoutinesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.BigqueryRoutinesDeleteResponse>;
    /**
     * Gets the specified routine resource by routine ID.
     */
    bigqueryRoutinesGet(req: operations.BigqueryRoutinesGetRequest, security: operations.BigqueryRoutinesGetSecurity, config?: AxiosRequestConfig): Promise<operations.BigqueryRoutinesGetResponse>;
    /**
     * Creates a new routine in the dataset.
     */
    bigqueryRoutinesInsert(req: operations.BigqueryRoutinesInsertRequest, security: operations.BigqueryRoutinesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.BigqueryRoutinesInsertResponse>;
    /**
     * Lists all routines in the specified dataset. Requires the READER dataset role.
     */
    bigqueryRoutinesList(req: operations.BigqueryRoutinesListRequest, security: operations.BigqueryRoutinesListSecurity, config?: AxiosRequestConfig): Promise<operations.BigqueryRoutinesListResponse>;
    /**
     * Updates information in an existing routine. The update method replaces the entire Routine resource.
     */
    bigqueryRoutinesUpdate(req: operations.BigqueryRoutinesUpdateRequest, security: operations.BigqueryRoutinesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.BigqueryRoutinesUpdateResponse>;
}
