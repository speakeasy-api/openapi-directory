import { SpeakeasyBase } from "../../../internal/utils";
import { InboundWireDrawdownRequest } from "./inboundwiredrawdownrequest";
/**
 * A list of Inbound Wire Drawdown Request objects
 */
export declare class InboundWireDrawdownRequestList extends SpeakeasyBase {
    /**
     * The contents of the list.
     */
    data: InboundWireDrawdownRequest[];
    /**
     * A pointer to a place in the list.
     */
    nextCursor: string;
}
