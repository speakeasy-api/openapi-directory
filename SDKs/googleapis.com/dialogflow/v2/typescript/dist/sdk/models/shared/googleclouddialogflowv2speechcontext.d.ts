import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Hints for the speech recognizer to help with recognition in a specific conversation state.
 */
export declare class GoogleCloudDialogflowV2SpeechContext extends SpeakeasyBase {
    /**
     * Optional. Boost for this context compared to other contexts: * If the boost is positive, Dialogflow will increase the probability that the phrases in this context are recognized over similar sounding phrases. * If the boost is unspecified or non-positive, Dialogflow will not apply any boost. Dialogflow recommends that you use boosts in the range (0, 20] and that you find a value that fits your use case with binary search.
     */
    boost?: number;
    /**
     * Optional. A list of strings containing words and phrases that the speech recognizer should recognize with higher likelihood. This list can be used to: * improve accuracy for words and phrases you expect the user to say, e.g. typical commands for your Dialogflow agent * add additional words to the speech recognizer vocabulary * ... See the [Cloud Speech documentation](https://cloud.google.com/speech-to-text/quotas) for usage limits.
     */
    phrases?: string[];
}
