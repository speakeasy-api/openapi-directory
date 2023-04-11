import { SpeakeasyBase } from "../../../internal/utils";
import { WireDrawdownRequest } from "./wiredrawdownrequest";
/**
 * A list of Wire Drawdown Request objects
 */
export declare class WireDrawdownRequestList extends SpeakeasyBase {
    /**
     * The contents of the list.
     */
    data: WireDrawdownRequest[];
    /**
     * A pointer to a place in the list.
     */
    nextCursor: string;
}
