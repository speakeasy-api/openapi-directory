import { SpeakeasyBase } from "../../../internal/utils";
import { MarketplaceDeal } from "./marketplacedeal";
/**
 * Successful response
 */
export declare class GetOrderDealsResponse extends SpeakeasyBase {
    /**
     * List of deals for the proposal
     */
    deals?: MarketplaceDeal[];
}
