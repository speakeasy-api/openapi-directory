import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * warehouses
 *
 * @remarks
 *
 */
export declare class Warehouses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Warehouse
     *
     * @remarks
     * Create a warehouse location that you can use to create shipping items by simply passing in the generated warehouse id.
     * If the return address is not supplied in the request body then it is assumed that the origin address is the return address as well
     *
     */
    createWarehouse(req: shared.CreateWarehouseRequestBodyInput, config?: AxiosRequestConfig): Promise<operations.CreateWarehouseResponse>;
    /**
     * Delete Warehouse By ID
     *
     * @remarks
     * Delete a warehouse by ID
     */
    deleteWarehouse(req: operations.DeleteWarehouseRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWarehouseResponse>;
    /**
     * Get Warehouse By Id
     *
     * @remarks
     * Retrieve warehouse data based on the warehouse ID
     */
    getWarehouseById(req: operations.GetWarehouseByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetWarehouseByIdResponse>;
    /**
     * List Warehouses
     *
     * @remarks
     * Retrieve a list of warehouses associated with this account.
     */
    listWarehouses(config?: AxiosRequestConfig): Promise<operations.ListWarehousesResponse>;
    /**
     * Update Warehouse By Id
     *
     * @remarks
     * Update Warehouse object information
     */
    updateWarehouse(req: operations.UpdateWarehouseRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWarehouseResponse>;
    /**
     * Update Warehouse Settings
     *
     * @remarks
     * Update Warehouse settings object information
     */
    updateWarehouseSettings(req: operations.UpdateWarehouseSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWarehouseSettingsResponse>;
}
