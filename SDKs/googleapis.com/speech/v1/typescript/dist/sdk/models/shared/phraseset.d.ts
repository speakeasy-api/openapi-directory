import { SpeakeasyBase } from "../../../internal/utils";
import { Phrase } from "./phrase";
/**
 * Provides "hints" to the speech recognizer to favor specific words and phrases in the results.
 */
export declare class PhraseSet extends SpeakeasyBase {
    /**
     * Hint Boost. Positive value will increase the probability that a specific phrase will be recognized over other similar sounding phrases. The higher the boost, the higher the chance of false positive recognition as well. Negative boost values would correspond to anti-biasing. Anti-biasing is not enabled, so negative boost will simply be ignored. Though `boost` can accept a wide range of positive values, most use cases are best served with values between 0 (exclusive) and 20. We recommend using a binary search approach to finding the optimal value for your use case as well as adding phrases both with and without boost to your requests.
     */
    boost?: number;
    /**
     * The resource name of the phrase set.
     */
    name?: string;
    /**
     * A list of word and phrases.
     */
    phrases?: Phrase[];
}
