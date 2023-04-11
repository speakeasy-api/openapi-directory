import { SpeakeasyBase } from "../../../internal/utils";
export declare class AutoTopUpConfigV2 extends SpeakeasyBase {
    /**
     * Is auto top-up enabled? automatically trigger funding to top-up the source account balance when the balance falls below the configured minimum level.
     */
    enabled: boolean;
    /**
     * When the payor balance falls below this level then auto top-up will be triggered. Note - This is in minor units.
     */
    minBalance?: number;
    /**
     * When the payor balance falls below the min balance then auto top-up will request funds bring the balance to this level. Note - this is in minor units.
     */
    targetBalance?: number;
}
