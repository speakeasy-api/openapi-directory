import { SpeakeasyBase } from "../../../internal/utils";
import { ScoreConfigOutput } from "./scoreconfigoutput";
/**
 * The result of an operation that returns multiple score configs
 */
export declare class ScoreConfigsOutput extends SpeakeasyBase {
    /**
     * The list of score configs
     */
    scoreConfigs: ScoreConfigOutput[];
}
