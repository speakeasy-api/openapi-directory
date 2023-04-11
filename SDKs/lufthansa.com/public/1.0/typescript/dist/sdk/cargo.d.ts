import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Cargo {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve all flights
     *
     * @remarks
     * Retrieve a list of all possible flights (both direct and connecting) between two airports on a given date. Routes are available for today and up to days in the future.
     */
    cargoGetRouteFromDateProductCodeByOriginAndDestinationGet(req: operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest, security: operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity, config?: AxiosRequestConfig): Promise<operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse>;
    /**
     * Shipment Tracking
     *
     * @remarks
     * With this tracking service you can easily retrieve your shipment or flight status information.
     */
    cargoShipmentTrackingByAWBPrefixAndAWBNumberGet(req: operations.CargoShipmentTrackingByAWBPrefixAndAWBNumberGetRequest, security: operations.CargoShipmentTrackingByAWBPrefixAndAWBNumberGetSecurity, config?: AxiosRequestConfig): Promise<operations.CargoShipmentTrackingByAWBPrefixAndAWBNumberGetResponse>;
}
