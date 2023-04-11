import { SpeakeasyBase } from "../../../internal/utils";
import { Proposal } from "./proposal";
/**
 * Successful response
 */
export declare class CreateOrdersResponse extends SpeakeasyBase {
    /**
     * The list of proposals successfully created.
     */
    proposals?: Proposal[];
}
