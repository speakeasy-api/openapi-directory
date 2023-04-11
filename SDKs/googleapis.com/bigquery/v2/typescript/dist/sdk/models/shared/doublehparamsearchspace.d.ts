import { SpeakeasyBase } from "../../../internal/utils";
import { DoubleCandidates } from "./doublecandidates";
import { DoubleRange } from "./doublerange";
/**
 * Search space for a double hyperparameter.
 */
export declare class DoubleHparamSearchSpace extends SpeakeasyBase {
    /**
     * Discrete candidates of a double hyperparameter.
     */
    candidates?: DoubleCandidates;
    /**
     * Range of a double hyperparameter.
     */
    range?: DoubleRange;
}
