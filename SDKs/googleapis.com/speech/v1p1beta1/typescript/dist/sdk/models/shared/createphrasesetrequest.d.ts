import { SpeakeasyBase } from "../../../internal/utils";
import { PhraseSet } from "./phraseset";
/**
 * Message sent by the client for the `CreatePhraseSet` method.
 */
export declare class CreatePhraseSetRequest extends SpeakeasyBase {
    /**
     * Provides "hints" to the speech recognizer to favor specific words and phrases in the results.
     */
    phraseSet?: PhraseSet;
    /**
     * Required. The ID to use for the phrase set, which will become the final component of the phrase set's resource name. This value should restrict to letters, numbers, and hyphens, with the first character a letter, the last a letter or a number, and be 4-63 characters.
     */
    phraseSetId?: string;
}
