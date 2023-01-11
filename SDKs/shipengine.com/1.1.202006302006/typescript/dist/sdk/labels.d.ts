import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Labels {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createLabel - Purchase Label
     *
     * Purchase and print a label for shipment
    **/
    createLabel(req: operations.CreateLabelRequest, config?: AxiosRequestConfig): Promise<operations.CreateLabelResponseOutput>;
    /**
     * createLabelFromRate - Purchase Label with Rate ID
     *
     * When retrieving rates for shipments using the `/rates` endpoint, the returned information contains a `rate_id` property that can be used
     * to generate a label without having to refill in the shipment information repeatedly.
     *
    **/
    createLabelFromRate(req: operations.CreateLabelFromRateRequest, config?: AxiosRequestConfig): Promise<operations.CreateLabelFromRateResponseOutput>;
    /**
     * createLabelFromShipment - Purchase Label with Shipment ID
     *
     * Purchase a label using a shipment ID that has already been created with the desired address and
     * package info.
     *
    **/
    createLabelFromShipment(req: operations.CreateLabelFromShipmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateLabelFromShipmentResponseOutput>;
    /**
     * createReturnLabel - Create a return label
     *
     * Create a return label
    **/
    createReturnLabel(req: operations.CreateReturnLabelRequest, config?: AxiosRequestConfig): Promise<operations.CreateReturnLabelResponseOutput>;
    /**
     * getLabelByExternalShipmentId - Get Label By External Shipment ID
     *
     * Find a label by using the external shipment id that was used during label creation
     *
    **/
    getLabelByExternalShipmentId(req: operations.GetLabelByExternalShipmentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetLabelByExternalShipmentIdResponseOutput>;
    /**
     * getLabelById - Get Label By ID
     *
     * Retrieve information for individual labels.
    **/
    getLabelById(req: operations.GetLabelByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetLabelByIdResponseOutput>;
    /**
     * getTrackingLogFromLabel - Get Label Tracking Information
     *
     * Retrieve the label's tracking information
    **/
    getTrackingLogFromLabel(req: operations.GetTrackingLogFromLabelRequest, config?: AxiosRequestConfig): Promise<operations.GetTrackingLogFromLabelResponse>;
    /**
     * listLabels - List labels
     *
     * This endpoint returns a list of labels that you've [created](https://www.shipengine.com/docs/labels/create-a-label/). You can optionally filter the results as well as control their sort order and the number of results returned at a time.
     *
     * By default, all labels are returned, 25 at a time, starting with the most recently created ones.  You can combine multiple filter options to narrow-down the results.  For example, if you only want to get your UPS labels for your east coast warehouse you could query by both `warehouse_id` and `carrier_id`
     *
    **/
    listLabels(req: operations.ListLabelsRequest, config?: AxiosRequestConfig): Promise<operations.ListLabelsResponse>;
    /**
     * voidLabel - Void a Label By ID
     *
     * Void a label by ID to get a refund.
    **/
    voidLabel(req: operations.VoidLabelRequest, config?: AxiosRequestConfig): Promise<operations.VoidLabelResponse>;
}
