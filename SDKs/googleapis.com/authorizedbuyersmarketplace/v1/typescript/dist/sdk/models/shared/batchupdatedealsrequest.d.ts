import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateDealRequestInput } from "./updatedealrequest";
/**
 * Request message for batch updating deals.
 */
export declare class BatchUpdateDealsRequestInput extends SpeakeasyBase {
    /**
     * Required. List of request messages to update deals.
     */
    requests?: UpdateDealRequestInput[];
}
