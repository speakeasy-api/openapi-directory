import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * carriers
 *
 * @remarks
 *
 */
export declare class Carriers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add Funds To Carrier
     *
     * @remarks
     * Add Funds To A Carrier
     */
    addFundsToCarrier(req: operations.AddFundsToCarrierRequest, config?: AxiosRequestConfig): Promise<operations.AddFundsToCarrierResponse>;
    /**
     * Get Carrier By ID
     *
     * @remarks
     * Retrive carrier info by ID
     */
    getCarrierById(req: operations.GetCarrierByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCarrierByIdResponse>;
    /**
     * Get Carrier Options
     *
     * @remarks
     * Get a list of the options available for the carrier
     */
    getCarrierOptions(req: operations.GetCarrierOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetCarrierOptionsResponse>;
    /**
     * List Carrier Package Types
     *
     * @remarks
     * List the package types associated with the carrier
     */
    listCarrierPackageTypes(req: operations.ListCarrierPackageTypesRequest, config?: AxiosRequestConfig): Promise<operations.ListCarrierPackageTypesResponse>;
    /**
     * List Carrier Services
     *
     * @remarks
     * List the services associated with the carrier ID
     */
    listCarrierServices(req: operations.ListCarrierServicesRequest, config?: AxiosRequestConfig): Promise<operations.ListCarrierServicesResponse>;
    /**
     * List Carriers
     *
     * @remarks
     * List all carriers that have been added to this account
     */
    listCarriers(config?: AxiosRequestConfig): Promise<operations.ListCarriersResponse>;
}
