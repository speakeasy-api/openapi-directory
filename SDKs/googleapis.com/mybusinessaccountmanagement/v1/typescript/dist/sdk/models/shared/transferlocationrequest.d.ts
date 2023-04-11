import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for AccessControl.TransferLocation.
 */
export declare class TransferLocationRequest extends SpeakeasyBase {
    /**
     * Required. Name of the account resource to transfer the location to (for example, "accounts/{account}").
     */
    destinationAccount?: string;
}
