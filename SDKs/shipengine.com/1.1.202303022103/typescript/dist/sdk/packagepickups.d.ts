import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Scheduled package pickups
 */
export declare class PackagePickups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a Scheduled Pickup
     *
     * @remarks
     * Delete a previously-scheduled pickup by ID
     */
    deleteScheduledPickup(req: operations.DeleteScheduledPickupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteScheduledPickupResponse>;
    /**
     * Get Pickup By ID
     *
     * @remarks
     * Get Pickup By ID
     */
    getPickupById(req: operations.GetPickupByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPickupByIdResponse>;
    /**
     * List Scheduled Pickups
     *
     * @remarks
     * List all pickups that have been scheduled for this carrier
     */
    listScheduledPickups(req: operations.ListScheduledPickupsRequest, config?: AxiosRequestConfig): Promise<operations.ListScheduledPickupsResponse>;
    /**
     * Schedule a Pickup
     *
     * @remarks
     * Schedule a package pickup with a carrier
     */
    schedulePickup(req: shared.SchedulePickupRequestBodyInput, config?: AxiosRequestConfig): Promise<operations.SchedulePickupResponse>;
}
