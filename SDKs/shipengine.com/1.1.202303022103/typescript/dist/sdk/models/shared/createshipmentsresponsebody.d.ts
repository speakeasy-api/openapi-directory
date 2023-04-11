import { SpeakeasyBase } from "../../../internal/utils";
import { CreateAndValidateShipment } from "./createandvalidateshipment";
/**
 * A create shipments response body
 */
export declare class CreateShipmentsResponseBody extends SpeakeasyBase {
    /**
     * Indicates if errors occured while creating the shipments
     */
    hasErrors: boolean;
    /**
     * An array of shipments that were created.
     */
    shipments: CreateAndValidateShipment[];
}
