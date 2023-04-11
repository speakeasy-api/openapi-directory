import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Tags are arbitrary strings that you can use to categorize shipments.  For example, you may want to use tags to distinguish between domestic and international shipments, or between insured and uninsured shipments.  Or maybe you want to create a tag for each of your customers so you can easily retrieve every shipment for a customer.
 *
 * @remarks
 *
 */
export declare class TagShipmentResponseBodyTag extends SpeakeasyBase {
    /**
     * The tag name.
     */
    name: string;
}
/**
 * A shipment add tag response body
 */
export declare class TagShipmentResponseBody extends SpeakeasyBase {
    /**
     * A string that uniquely identifies the shipment
     */
    shipmentId: string;
    /**
     * The tag that is now associated with this shipment
     */
    tag: TagShipmentResponseBodyTag;
}
