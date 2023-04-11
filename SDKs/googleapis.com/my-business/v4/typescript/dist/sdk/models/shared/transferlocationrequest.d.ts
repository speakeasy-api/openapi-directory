import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for Locations.TransferLocation.
 */
export declare class TransferLocationRequest extends SpeakeasyBase {
    /**
     * Name of the account resource to transfer the location to (for example, "accounts/8675309").
     */
    toAccount?: string;
}
