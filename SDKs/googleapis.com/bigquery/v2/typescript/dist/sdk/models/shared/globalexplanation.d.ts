import { SpeakeasyBase } from "../../../internal/utils";
import { Explanation } from "./explanation";
/**
 * Global explanations containing the top most important features after training.
 */
export declare class GlobalExplanation extends SpeakeasyBase {
    /**
     * Class label for this set of global explanations. Will be empty/null for binary logistic and linear regression models. Sorted alphabetically in descending order.
     */
    classLabel?: string;
    /**
     * A list of the top global explanations. Sorted by absolute value of attribution in descending order.
     */
    explanations?: Explanation[];
}
