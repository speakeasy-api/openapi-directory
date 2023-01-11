import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Shipments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cancelShipments - Cancel a Shipment
     *
     * Mark a shipment cancelled, if it is no longer needed or being used by your organized. Any label associated with the shipment needs to be voided first
     * An example use case would be if a batch label creation job is going to run at a set time and only queries `pending` shipments. Marking a shipment as cancelled
     * would remove it from this process
     *
    **/
    cancelShipments(req: operations.CancelShipmentsRequest, config?: AxiosRequestConfig): Promise<operations.CancelShipmentsResponse>;
    /**
     * createShipments - Create Shipments
     *
     * Create one or multiple shipments.
    **/
    createShipments(req: operations.CreateShipmentsRequest, config?: AxiosRequestConfig): Promise<operations.CreateShipmentsResponse>;
    /**
     * getShipmentByExternalId - Get Shipment By External ID
     *
     * Query Shipments created using your own custom ID convention using this endpint
    **/
    getShipmentByExternalId(req: operations.GetShipmentByExternalIdRequest, config?: AxiosRequestConfig): Promise<operations.GetShipmentByExternalIdResponse>;
    /**
     * getShipmentById - Get Shipment By ID
     *
     * Get an individual shipment based on its ID
    **/
    getShipmentById(req: operations.GetShipmentByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetShipmentByIdResponse>;
    /**
     * listShipmentErrors - Get Shipment Errors
     *
     * If there are no errors associated with this shipment then the API will return a 404 Not Found response to indicate
     * that no errors are associated with the request
     *
    **/
    listShipmentErrors(req: operations.ListShipmentErrorsRequest, config?: AxiosRequestConfig): Promise<operations.ListShipmentErrorsResponse>;
    /**
     * listShipmentRates - Get Shipment Rates
     *
     * Get Rates for the shipment information associated with the shipment ID
    **/
    listShipmentRates(req: operations.ListShipmentRatesRequest, config?: AxiosRequestConfig): Promise<operations.ListShipmentRatesResponse>;
    /**
     * listShipments - List Shipments
     *
     * Get list of Shipments
    **/
    listShipments(req: operations.ListShipmentsRequest, config?: AxiosRequestConfig): Promise<operations.ListShipmentsResponse>;
    /**
     * parseShipment - Parse shipping info
     *
     * The shipment-recognition API makes it easy for you to extract shipping data from unstructured text, including people's names, addresses, package weights and dimensions, insurance and delivery requirements, and more.
     *
     * Data often enters your system as unstructured text (for example: emails, SMS messages, support tickets, or other documents). ShipEngine's shipment-recognition API helps you extract meaningful, structured data from this unstructured text. The parsed shipment data is returned in the same structure that's used for other ShipEngine APIs, so you can easily use the parsed data to create a shipping label.
     *
     * > **Note:** Shipment recognition is currently supported for the United States, Canada, Australia, New Zealand, the United Kingdom, and Ireland.
     *
    **/
    parseShipment(req: operations.ParseShipmentRequest, config?: AxiosRequestConfig): Promise<operations.ParseShipmentResponse>;
    /**
     * tagShipment - Add Tag to Shipment
     *
     * Add a tag to the shipment object
    **/
    tagShipment(req: operations.TagShipmentRequest, config?: AxiosRequestConfig): Promise<operations.TagShipmentResponse>;
    /**
     * untagShipment - Remove Tag from Shipment
     *
     * Remove an existing tag from the Shipment object
    **/
    untagShipment(req: operations.UntagShipmentRequest, config?: AxiosRequestConfig): Promise<operations.UntagShipmentResponse>;
    /**
     * updateShipment - Update Shipment By ID
     *
     * Update a shipment object based on its ID
    **/
    updateShipment(req: operations.UpdateShipmentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateShipmentResponse>;
}
