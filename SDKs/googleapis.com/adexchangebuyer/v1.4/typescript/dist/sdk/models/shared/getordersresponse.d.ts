import { SpeakeasyBase } from "../../../internal/utils";
import { Proposal } from "./proposal";
/**
 * Successful response
 */
export declare class GetOrdersResponse extends SpeakeasyBase {
    /**
     * The list of matching proposals.
     */
    proposals?: Proposal[];
}
