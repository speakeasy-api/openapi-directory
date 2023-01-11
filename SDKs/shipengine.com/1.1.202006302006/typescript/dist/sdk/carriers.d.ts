import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Carriers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addFundsToCarrier - Add Funds To Carrier
     *
     * Add Funds To A Carrier
    **/
    addFundsToCarrier(req: operations.AddFundsToCarrierRequest, config?: AxiosRequestConfig): Promise<operations.AddFundsToCarrierResponse>;
    /**
     * getCarrierById - Get Carrier By ID
     *
     * Retrive carrier info by ID
    **/
    getCarrierById(req: operations.GetCarrierByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCarrierByIdResponse>;
    /**
     * getCarrierOptions - Get Carrier Options
     *
     * Get a list of the options available for the carrier
    **/
    getCarrierOptions(req: operations.GetCarrierOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetCarrierOptionsResponse>;
    /**
     * listCarrierPackageTypes - List Carrier Package Types
     *
     * List the package types associated with the carrier
    **/
    listCarrierPackageTypes(req: operations.ListCarrierPackageTypesRequest, config?: AxiosRequestConfig): Promise<operations.ListCarrierPackageTypesResponse>;
    /**
     * listCarrierServices - List Carrier Services
     *
     * List the services associated with the carrier ID
    **/
    listCarrierServices(req: operations.ListCarrierServicesRequest, config?: AxiosRequestConfig): Promise<operations.ListCarrierServicesResponse>;
    /**
     * listCarriers - List Carriers
     *
     * List all carriers that have been added to this account
    **/
    listCarriers(config?: AxiosRequestConfig): Promise<operations.ListCarriersResponse>;
}
