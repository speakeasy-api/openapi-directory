import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Cargo {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cargoGetRouteFromDateProductCodeByOriginAndDestinationGet - Retrieve all flights
     *
     * Retrieve a list of all possible flights (both direct and connecting) between two airports on a given date. Routes are available for today and up to days in the future.
    **/
    cargoGetRouteFromDateProductCodeByOriginAndDestinationGet(req: operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest, config?: AxiosRequestConfig): Promise<operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse>;
    /**
     * cargoShipmentTrackingByAwbPrefixAndAwbNumberGet - Shipment Tracking
     *
     * With this tracking service you can easily retrieve your shipment or flight status information.
    **/
    cargoShipmentTrackingByAwbPrefixAndAwbNumberGet(req: operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetRequest, config?: AxiosRequestConfig): Promise<operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse>;
}
