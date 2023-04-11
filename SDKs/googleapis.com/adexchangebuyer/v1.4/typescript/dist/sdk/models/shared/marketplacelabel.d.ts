import { SpeakeasyBase } from "../../../internal/utils";
import { MarketplaceDealParty } from "./marketplacedealparty";
export declare class MarketplaceLabel extends SpeakeasyBase {
    /**
     * The accountId of the party that created the label.
     */
    accountId?: string;
    /**
     * The creation time (in ms since epoch) for the label.
     */
    createTimeMs?: string;
    deprecatedMarketplaceDealParty?: MarketplaceDealParty;
    /**
     * The label to use.
     */
    label?: string;
}
