import { SpeakeasyBase } from "../../../internal/utils";
import { Dpc } from "./dpc";
/**
 * Response message of customer's listing DPCs.
 */
export declare class CustomerListDpcsResponse extends SpeakeasyBase {
    /**
     * The list of DPCs available to the customer that support zero-touch enrollment.
     */
    dpcs?: Dpc[];
}
