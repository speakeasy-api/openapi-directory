import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Warehouses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createWarehouse - Create Warehouse
     *
     * Create a warehouse location that you can use to create shipping items by simply passing in the generated warehouse id.
     * If the return address is not supplied in the request body then it is assumed that the origin address is the return address as well
     *
    **/
    createWarehouse(req: operations.CreateWarehouseRequest, config?: AxiosRequestConfig): Promise<operations.CreateWarehouseResponse>;
    /**
     * deleteWarehouse - Delete Warehouse By ID
     *
     * Delete a warehouse by ID
    **/
    deleteWarehouse(req: operations.DeleteWarehouseRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWarehouseResponse>;
    /**
     * getWarehouseById - Get Warehouse By Id
     *
     * Retrieve warehouse data based on the warehouse ID
    **/
    getWarehouseById(req: operations.GetWarehouseByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetWarehouseByIdResponse>;
    /**
     * listWarehouses - List Warehouses
     *
     * Retrieve a list of warehouses associated with this account.
    **/
    listWarehouses(config?: AxiosRequestConfig): Promise<operations.ListWarehousesResponse>;
    /**
     * updateWarehouse - Update WareHouse By Id
     *
     * Update Warehouse object information
    **/
    updateWarehouse(req: operations.UpdateWarehouseRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWarehouseResponse>;
}
