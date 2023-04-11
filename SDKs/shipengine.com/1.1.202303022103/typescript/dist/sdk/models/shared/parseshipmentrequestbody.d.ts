import { SpeakeasyBase } from "../../../internal/utils";
import { PartialShipmentInput } from "./partialshipment";
/**
 * The only required field is `text`, which is the text to be parsed. You can optionally also provide a `shipment` containing any already-known values. For example, you probably already know the `ship_from` address, and you may also already know what carrier and service you want to use.
 *
 * @remarks
 *
 */
export declare class ParseShipmentRequestBodyInput extends SpeakeasyBase {
    /**
     * You can optionally provide a `shipment` object containing any already-known values. For example, you probably already know the `ship_from` address, and you may also already know what carrier and service you want to use.
     *
     * @remarks
     *
     */
    shipment?: PartialShipmentInput;
    /**
     * The unstructured text that contains shipping-related entities
     */
    text: string;
}
