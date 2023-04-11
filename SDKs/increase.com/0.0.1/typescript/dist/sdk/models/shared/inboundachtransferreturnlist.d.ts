import { SpeakeasyBase } from "../../../internal/utils";
import { InboundAchTransferReturn } from "./inboundachtransferreturn";
/**
 * A list of Inbound ACH Transfer Return objects
 */
export declare class InboundAchTransferReturnList extends SpeakeasyBase {
    /**
     * The contents of the list.
     */
    data: InboundAchTransferReturn[];
    /**
     * A pointer to a place in the list.
     */
    nextCursor: string;
}
