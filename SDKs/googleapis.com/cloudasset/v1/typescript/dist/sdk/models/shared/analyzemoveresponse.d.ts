import { SpeakeasyBase } from "../../../internal/utils";
import { MoveAnalysis } from "./moveanalysis";
/**
 * The response message for resource move analysis.
 */
export declare class AnalyzeMoveResponse extends SpeakeasyBase {
    /**
     * The list of analyses returned from performing the intended resource move analysis. The analysis is grouped by different Google Cloud services.
     */
    moveAnalysis?: MoveAnalysis[];
}
