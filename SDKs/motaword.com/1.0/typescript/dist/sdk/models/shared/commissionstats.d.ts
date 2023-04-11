import { SpeakeasyBase } from "../../../internal/utils";
import { Monetary } from "./monetary";
/**
 * User's commission stats
 */
export declare class CommissionStats extends SpeakeasyBase {
    balance?: Monetary;
    paid?: Monetary;
    quoteTotal?: Monetary;
    total?: Monetary;
}
