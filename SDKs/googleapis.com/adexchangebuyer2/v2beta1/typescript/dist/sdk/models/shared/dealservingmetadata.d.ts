import { SpeakeasyBase } from "../../../internal/utils";
import { DealPauseStatus } from "./dealpausestatus";
/**
 * Message captures metadata about the serving status of a deal.
 */
export declare class DealServingMetadata extends SpeakeasyBase {
    /**
     * Tracks which parties (if any) have paused a deal. The deal is considered paused if either hasBuyerPaused or hasSellPaused is true.
     */
    dealPauseStatus?: DealPauseStatus;
}
