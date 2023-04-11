import { SpeakeasyBase } from "../../../internal/utils";
import { Deal } from "./deal";
/**
 * Response message for batch updating deals.
 */
export declare class BatchUpdateDealsResponse extends SpeakeasyBase {
    /**
     * Deals updated.
     */
    deals?: Deal[];
}
