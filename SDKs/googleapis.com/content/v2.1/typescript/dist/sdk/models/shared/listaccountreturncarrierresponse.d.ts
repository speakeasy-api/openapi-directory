import { SpeakeasyBase } from "../../../internal/utils";
import { AccountReturnCarrier } from "./accountreturncarrier";
/**
 * Response for listing account return carriers.
 */
export declare class ListAccountReturnCarrierResponse extends SpeakeasyBase {
    /**
     * List of all available account return carriers for the merchant.
     */
    accountReturnCarriers?: AccountReturnCarrier[];
}
