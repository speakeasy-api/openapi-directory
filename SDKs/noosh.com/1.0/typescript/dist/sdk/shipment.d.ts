import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Shipment {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a specific shipment.
     *
     * @remarks
     * Get a specific shipment.
     */
    getShipment(req: operations.GetShipmentRequest, config?: AxiosRequestConfig): Promise<operations.GetShipmentResponse>;
    /**
     * List shipments of project
     *
     * @remarks
     * List shipments of project
     */
    getShipmentList(req: operations.GetShipmentListRequest, config?: AxiosRequestConfig): Promise<operations.GetShipmentListResponse>;
    /**
     * Create a shipment
     *
     * @remarks
     * Create a shipment
     */
    postShipmentJson(req: operations.PostShipmentJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostShipmentJsonResponse>;
    /**
     * Create a shipment
     *
     * @remarks
     * Create a shipment
     */
    postShipmentRaw(req: operations.PostShipmentRawRequest, config?: AxiosRequestConfig): Promise<operations.PostShipmentRawResponse>;
    /**
     * Update a specific shipment location
     *
     * @remarks
     * Update a specific shipment location
     */
    putShipmentLocationJson(req: operations.PutShipmentLocationJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutShipmentLocationJsonResponse>;
    /**
     * Update a specific shipment location
     *
     * @remarks
     * Update a specific shipment location
     */
    putShipmentLocationRaw(req: operations.PutShipmentLocationRawRequest, config?: AxiosRequestConfig): Promise<operations.PutShipmentLocationRawResponse>;
}
