import { SpeakeasyBase } from "../../../internal/utils";
import { DealServingMetadataDealPauseStatus } from "./dealservingmetadatadealpausestatus";
export declare class DealServingMetadata extends SpeakeasyBase {
    /**
     * True if alcohol ads are allowed for this deal (read-only). This field is only populated when querying for finalized orders using the method GetFinalizedOrderDeals
     */
    alcoholAdsAllowed?: boolean;
    /**
     * Tracks which parties (if any) have paused a deal. The deal is considered paused if has_buyer_paused || has_seller_paused. Each of the has_buyer_paused or the has_seller_paused bits can be set independently.
     */
    dealPauseStatus?: DealServingMetadataDealPauseStatus;
}
