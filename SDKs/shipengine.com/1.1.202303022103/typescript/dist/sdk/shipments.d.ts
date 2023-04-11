import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Shipments are at the center of the ShipEngine API.  A shipment is the first step in [creating a shipping label](https://www.shipengine.com/docs/labels/create-a-label/), or [creating a manifest](https://www.shipengine.com/docs/shipping/manifests/).  It's also essential for [getting shipping rates](https://www.shipengine.com/docs/rates/).
 *
 * @remarks
 *
 *
 * @see {@link https://www.shipengine.com/docs/shipping/create-a-shipment/} - Learn about the shipment object model concept, and how to persist and re-use shipment data inside ShipEngine.
 *
 */
export declare class Shipments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Cancel a Shipment
     *
     * @remarks
     * Mark a shipment cancelled, if it is no longer needed or being used by your organized. Any label associated with the shipment needs to be voided first
     * An example use case would be if a batch label creation job is going to run at a set time and only queries `pending` shipments. Marking a shipment as cancelled
     * would remove it from this process
     *
     */
    cancelShipments(req: operations.CancelShipmentsRequest, config?: AxiosRequestConfig): Promise<operations.CancelShipmentsResponse>;
    /**
     * Create Shipments
     *
     * @remarks
     * Create one or multiple shipments.
     */
    createShipments(req: shared.CreateShipmentsRequestBodyInput, config?: AxiosRequestConfig): Promise<operations.CreateShipmentsResponse>;
    /**
     * Get Shipment By External ID
     *
     * @remarks
     * Query Shipments created using your own custom ID convention using this endpint
     */
    getShipmentByExternalId(req: operations.GetShipmentByExternalIdRequest, config?: AxiosRequestConfig): Promise<operations.GetShipmentByExternalIdResponse>;
    /**
     * Get Shipment By ID
     *
     * @remarks
     * Get an individual shipment based on its ID
     */
    getShipmentById(req: operations.GetShipmentByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetShipmentByIdResponse>;
    /**
     * Get Shipment Rates
     *
     * @remarks
     * Get Rates for the shipment information associated with the shipment ID
     */
    listShipmentRates(req: operations.ListShipmentRatesRequest, config?: AxiosRequestConfig): Promise<operations.ListShipmentRatesResponse>;
    /**
     * List Shipments
     *
     * @remarks
     * Get list of Shipments
     */
    listShipments(req: operations.ListShipmentsRequest, config?: AxiosRequestConfig): Promise<operations.ListShipmentsResponse>;
    /**
     * Parse shipping info
     *
     * @remarks
     * The shipment-recognition API makes it easy for you to extract shipping data from unstructured text, including people's names, addresses, package weights and dimensions, insurance and delivery requirements, and more.
     *
     * Data often enters your system as unstructured text (for example: emails, SMS messages, support tickets, or other documents). ShipEngine's shipment-recognition API helps you extract meaningful, structured data from this unstructured text. The parsed shipment data is returned in the same structure that's used for other ShipEngine APIs, so you can easily use the parsed data to create a shipping label.
     *
     * > **Note:** Shipment recognition is currently supported for the United States, Canada, Australia, New Zealand, the United Kingdom, and Ireland.
     *
     */
    parseShipment(req: shared.ParseShipmentRequestBodyInput, config?: AxiosRequestConfig): Promise<operations.ParseShipmentResponse>;
    /**
     * Add Tag to Shipment
     *
     * @remarks
     * Add a tag to the shipment object
     */
    tagShipment(req: operations.TagShipmentRequest, config?: AxiosRequestConfig): Promise<operations.TagShipmentResponse>;
    /**
     * Remove Tag from Shipment
     *
     * @remarks
     * Remove an existing tag from the Shipment object
     */
    untagShipment(req: operations.UntagShipmentRequest, config?: AxiosRequestConfig): Promise<operations.UntagShipmentResponse>;
    /**
     * Update Shipment By ID
     *
     * @remarks
     * Update a shipment object based on its ID
     */
    updateShipment(req: operations.UpdateShipmentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateShipmentResponse>;
}
