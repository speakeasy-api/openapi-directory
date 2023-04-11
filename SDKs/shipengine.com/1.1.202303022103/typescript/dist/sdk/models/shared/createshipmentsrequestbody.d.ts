import { SpeakeasyBase } from "../../../internal/utils";
import { AddressValidatingShipmentInput } from "./addressvalidatingshipment";
/**
 * A create shipments request body
 */
export declare class CreateShipmentsRequestBodyInput extends SpeakeasyBase {
    /**
     * An array of shipments to be created.
     */
    shipments: AddressValidatingShipmentInput[];
}
