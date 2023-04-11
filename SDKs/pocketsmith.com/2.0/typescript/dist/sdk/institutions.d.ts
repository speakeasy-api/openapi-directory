import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Institutions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete institution
     *
     * @remarks
     * Deletes an institution and all data within. Alternatively, another institution can be provided to merge the data into to avoid losing it.
     */
    deleteInstitutionsId(req: operations.DeleteInstitutionsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInstitutionsIdResponse>;
    /**
     * Get institution
     *
     * @remarks
     * Gets an institution by its ID.
     */
    getInstitutionsId(req: operations.GetInstitutionsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetInstitutionsIdResponse>;
    /**
     * List institutions in user
     *
     * @remarks
     * Lists all the institutions belonging to the user.
     */
    getUsersIdInstitutions(req: operations.GetUsersIdInstitutionsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdInstitutionsResponse>;
    /**
     * Create institution in user
     *
     * @remarks
     * Creates an institution belonging to a user.
     */
    postUsersIdInstitutions(req: operations.PostUsersIdInstitutionsRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersIdInstitutionsResponse>;
    /**
     * Update institution
     *
     * @remarks
     * Updates the title and currency code for an institution.
     */
    putInstitutionsId(req: operations.PutInstitutionsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutInstitutionsIdResponse>;
}
