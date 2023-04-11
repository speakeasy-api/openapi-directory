import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Geofence management
 */
export declare class Geofences {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a Geofence
     */
    deleteGeofencesId(req: operations.DeleteGeofencesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGeofencesIdResponse>;
    /**
     * Fetch a list of Geofences
     *
     * @remarks
     * Without params, it returns a list of Geofences the user has access to
     */
    getGeofences(req: operations.GetGeofencesRequest, config?: AxiosRequestConfig): Promise<operations.GetGeofencesResponse>;
    /**
     * Create a Geofence
     */
    postGeofences(req: shared.Geofence, config?: AxiosRequestConfig): Promise<operations.PostGeofencesResponse>;
    /**
     * Update a Geofence
     */
    putGeofencesId(req: operations.PutGeofencesIdRequest, config?: AxiosRequestConfig): Promise<operations.PutGeofencesIdResponse>;
}
