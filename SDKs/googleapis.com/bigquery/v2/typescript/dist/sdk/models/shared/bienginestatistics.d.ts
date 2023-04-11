import { SpeakeasyBase } from "../../../internal/utils";
import { BiEngineReason } from "./bienginereason";
export declare class BiEngineStatistics extends SpeakeasyBase {
    /**
     * [Output-only] Specifies which mode of BI Engine acceleration was performed (if any).
     */
    accelerationMode?: string;
    /**
     * [Output-only] Specifies which mode of BI Engine acceleration was performed (if any).
     */
    biEngineMode?: string;
    /**
     * In case of DISABLED or PARTIAL bi_engine_mode, these contain the explanatory reasons as to why BI Engine could not accelerate. In case the full query was accelerated, this field is not populated.
     */
    biEngineReasons?: BiEngineReason[];
}
