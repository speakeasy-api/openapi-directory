import { SpeakeasyBase } from "../../../internal/utils";
import { CreateAndValidateShipment } from "./createandvalidateshipment";
/**
 * A create shipments response body
**/
export declare class CreateShipmentsResponseBody extends SpeakeasyBase {
    hasErrors: boolean;
    shipments: CreateAndValidateShipment[];
}
